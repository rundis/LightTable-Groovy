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
            [lt.objs.platform :as platform]
            [lt.util.cljs :refer [js->clj]])
  (:require-macros [lt.macros :refer [behavior]]))

(def shell (load/node-module "shelljs"))
(def plugin-dir (plugins/find-plugin "Groovy"))
(def binary-path (files/join plugin-dir "./run-server.sh"))
(def server-path (files/join plugin-dir "groovy-src/LTServer.groovy"))


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
                :env {"GROOVY_PATH" (files/join (files/parent path))}
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
  (.log js/console (str "try connect" info))
  (let [path (:path info)
        client (clients/client! :groovy.client)]
    (check-all {:path path
                :client client})
    client))


(object/object* ::groovy-lang
                :tags #{:groovy.lang})


(def groovy (object/create ::groovy-lang))

(scl/add-connector {:name "Groovy"
                    :desc "Select a directory to serve as the root of your groovy project... then again it might not be relevant..."
                    :connect (fn []
                               (dialogs/dir groovy :connect))})
(behavior ::connect
                  :triggers #{:connect}
                  :reaction (fn [this path]
                              (try-connect {:info {:path path}})))





(defn groovy-watch [meta src]
  (let [meta-str (str "%q(" (js/JSON.stringify (clj->js meta)) ")")]
    (str "LtWatch.watch(" src ", JSON.parse(" meta-str "))")))


(behavior ::on-eval
          :triggers #{:eval}
          :reaction (fn [editor]
                      (object/raise groovy :eval! {:origin editor
                                                   :info (assoc (@editor :info)
                                                           :code (watches/watched-range editor nil nil groovy-watch)
                                                           :meta {:start 0, :end (ed/last-line editor)})})))
(behavior ::on-eval.one
          :triggers #{:eval.one}
          :reaction (fn [editor]
                      (let [pos (ed/->cursor editor)
                            code (if (ed/selection? editor)
                                   (watches/watched-range editor nil nil groovy-watch)
                                   (ed/line editor (:line pos)))
                            info (:info @editor)
                            info (if (ed/selection? editor)
                                   (assoc info
                                     :code (ed/selection editor)
                                     :meta {:start (-> (ed/->cursor editor "start") :line)
                                            :end (-> (ed/->cursor editor "end") :line)})
                                   (assoc info :pos pos :code code :meta {:start (:line pos) :end (:line pos)}))]
                        (object/raise groovy :eval! {:origin editor
                                                     :info info}))))


(behavior ::eval!
                  :triggers #{:eval!}
                  :reaction (fn [this event]
                              (.log js/console "Eval !")
                              (let [{:keys [info origin]} event
                                    client (-> @origin :client :default)]
                                (notifos/working "Evaluating groovy...")
                                (clients/send (eval/get-client! {:command :editor.eval.groovy
                                                                 :origin origin
                                                                 :info info
                                                                 :create try-connect})
                                              :editor.eval.groovy
                                              info
                                              :only
                                              origin))))



(behavior ::groovy-result
                  :triggers #{:editor.eval.groovy.result}
                  :reaction (fn [editor res]
                              (notifos/done-working)
                              (.log js/console "Groovy result !")
                              (object/raise editor :editor.result (:result res) {:line (:end (:meta res))
                                                                                 :start-line (-> res :meta :start)})))

(behavior ::groovy-success
                  :triggers #{:editor.eval.groovy.success}
                  :reaction (fn [editor res]
                              (notifos/done-working)
                              (.log js/console "Groovy success !")
                              (object/raise editor :editor.result "✓" {:line (-> res :meta :end)
                                                                       :start-line (-> res :meta :start)})))
(behavior ::some-event
          :triggers #{:some.event}
          :reaction (fn [this event]
                      (println "Some event behavior...")))

(cmd/command {:command :some-command
              :desc "Command to verify some-event behavior"
              :exec (fn []
                      (print "hello there from some command")
                      (when-let [editor (first (object/by-tag :editor.groovy))]
                        (println "Raise some event on ed")
                        (object/raise editor :some.event)))})
