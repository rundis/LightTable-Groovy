(ns lt.plugins.groovy
  (:require [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.object :as object]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.plugins.watches :as watches]
            [lt.util.load :as load]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.objs.clients :as clients]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.popup :as popup]
            [lt.objs.eval :as eval]
            [lt.objs.platform :as platform])
  (:require-macros [lt.macros :refer [behavior]]))

(def shell (load/node-module "shelljs"))
(def plugin-dir (plugins/find-plugin "Groovy"))
(def binary-path (files/join plugin-dir "./run-server.sh"))
(def server-path (files/join plugin-dir "lib/ltserver.jar"))


(behavior ::on-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (object/update! this [:buffer] str out)
                        (if (> (.indexOf out "Connected") -1)
                          (do
                            (notifos/done-working)
                            (object/merge! this {:connected true}))
                          (object/update! this [:buffer] str data)))))

(behavior ::on-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (when-not (> (.indexOf (:buffer @this) "Connected") -1)
                          (object/update! this [:buffer] str data)
                          ))
                      ))

(behavior ::on-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      ;(object/update! this [:buffer] str data)
                      (when-not (:connected @this)
                        (notifos/done-working)
                        (popup/popup! {:header "We couldn't connect."
                                       :body [:span "Looks like there was an issue trying to connect
                                              to the project. Here's what we got:" [:pre (:buffer @this)]]
                                       :buttons [{:label "close"}]})
                        (clients/rem! (:client @this)))
                      (proc/kill-all (:procs @this))
                      (object/destroy! this)
                      ))

(object/object* ::connecting-notifier
                :triggers []
                :behaviors [::on-exit ::on-error ::on-out]
                :init (fn [this client]
                        (object/merge! this {:client client :buffer ""})
                        nil))



(defn run-groovy[{:keys [path name client] :as info}]
  (let [obj (object/create ::connecting-notifier info)
        client-id (clients/->id client)
        project-dir (files/parent path)]
    (object/merge! client {:port tcp/port
                           :proc obj})
    (notifos/working "Connecting..")
    (proc/exec {:command binary-path
                :args [tcp/port client-id project-dir]
                :cwd plugin-dir
                :env {:LT_GROOVY_LOG (::enable-client-logging? @groovy)}
                :obj obj})))

(defn check-groovy[obj]
  (assoc obj :groovy (or (::groovy-exe @groovy)
                         (.which shell "groovy"))))

(defn check-server[obj]
  (assoc obj :groovy-server (files/exists? server-path)))

(defn handle-no-groovy [client]
  (clients/rem! client)
  (notifos/done-working)
  (popup/popup! {:header "We couldn't find Groovy."
                 :body "In order to evaluate in Groovy files, Groovy must be installed and on your system PATH."
                 :buttons [{:label "Download Groovy"
                            :action (fn []
                                      (platform/open "http://gvmtool.net/"))}
                           {:label "ok"}]}))

(defn notify [obj]
  (let [{:keys [groovy path groovy-server client]} obj]
    (cond
     (or (not groovy) (empty? groovy)) (do (handle-no-groovy client))
     :else (run-groovy obj))
    obj))

(defn check-all [obj]
  (-> obj
      (check-groovy)
      (check-server)
      (notify)))

(defn try-connect [{:keys [info]}]
  (let [path (:path info)
        client (clients/client! :groovy.client)]
    (check-all {:path path
                :client client})
    client))



(behavior ::on-eval
          :desc "Groovy: Eval current editor"
          :triggers #{:eval}
          :reaction (fn [editor]
                      (object/raise groovy :eval! {:origin editor
                                                   :info (assoc (@editor :info)
                                                           :code (ed/->val editor)
                                                           :meta {:start 0, :end (ed/last-line editor)})})))
(behavior ::on-eval.one
          :desc "Groovy: Eval current selection"
          :triggers #{:eval.one}
          :reaction (fn [editor]
                      (let [pos (ed/->cursor editor)
                            info (conj (:info @editor)
                                  (if (ed/selection? editor)
                                    {:code (ed/selection editor) :meta {:start (-> (ed/->cursor editor "start") :line)
                                                                        :end (-> (ed/->cursor editor "end") :line)}}
                                    {:pos pos :code (ed/line editor (:line pos)) :meta {:start (:line pos) :end (:line pos)}}))]
                        (object/raise groovy :eval! {:origin editor :info info}))))


(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this event]
                      (let [{:keys [info origin]} event
                            client (-> @origin :client :default)]
                        (notifos/working "Evaluating groovy...")
                        (clients/send (eval/get-client! {:command :editor.eval.groovy
                                                         :origin origin
                                                         :info info
                                                         :create try-connect})
                                      :editor.eval.groovy info
                                      :only origin))))


(defn notify-of-results [editor res]
  (doseq [ln (:result res)]
    (let [lineNo (+ (:line ln) (-> res :meta :start) -1)]
      (object/raise editor :editor.result (clojure.string/join " " (:values ln)) {:line lineNo :start-line lineNo}))))

(behavior ::groovy-res
          :triggers #{:groovy.res}
          :reaction (fn [editor res]
                      (notifos/done-working)
                      (when-let [o (:out res)] (.log js/console o))
                      (notify-of-results editor res)))

(defn notify-of-error [editor res]
  (let [lineNo (+ (-> res :ex :line) (-> res :meta :start) -1)]
    (object/raise editor :editor.exception (:ex res) {:line lineNo :start-line lineNo'})))

(behavior ::groovy-err
          :triggers #{:groovy.err}
          :reaction (fn [editor res]
                      (object/raise editor :groovy.res res)
                      (notify-of-error editor res)))


(behavior ::connect
          :triggers #{:connect}
          :reaction (fn [this path]
                      (try-connect {:info {:path path}})))

(behavior ::client-enable-logging
          :triggers #{:object.instant}
          :desc "Groovy: Log groovy client output to lt_groovy.log"
          :type :user
          :exclusive true
          :reaction (fn [this]
                      (object/merge! groovy {::enable-client-logging? true})))


(object/object* ::groovy-lang
                :tags #{:groovy.lang})


(def groovy (object/create ::groovy-lang))

(scl/add-connector {:name "Groovy"
                    :desc "Select a directory to serve as the root of your groovy project. (Currently not in use!)"
                    :connect (fn []
                               (dialogs/dir groovy :connect))})

