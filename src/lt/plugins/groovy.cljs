(ns lt.plugins.groovy
  (:require [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.object :as object]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.sidebar.command :as scmd]
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
            [clojure.string :as string]
            [lt.plugins.groovy.graph :as graph])
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




(defn escape-spaces [s]
  (if (= files/separator "\\")
      (str "\"" s "\"")
      s))

(defn bash-escape-spaces [s]
  (when s (clojure.string/replace s " " "\\ ")))




(defn run-groovy[{:keys [path name client] :as info}]
  (let [obj (object/create ::connecting-notifier info)
        client-id (clients/->id client)]
    (object/merge! client {:port tcp/port
                           :proc obj})
    (notifos/working "Connecting..")
    (proc/exec {:command binary-path
                :args [tcp/port client-id (bash-escape-spaces path)]
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
                      (let [{:keys [info origin]} event]
                        (notifos/working "Evaluating groovy...")
                        (clients/send (eval/get-client! {:command :editor.eval.groovy
                                                         :origin origin
                                                         :info info
                                                         :create try-connect})
                                      :editor.eval.groovy info
                                      :only origin))))


(behavior ::on-clear-bindings
          :desc "Clear cached bindings for this editor"
          :triggers #{:on.clear.bindings}
          :reaction (fn [editor]
                      (let [info (:info @editor)
                            cl (eval/get-client! {:command :editor.clear.groovy
                                                    :origin editor
                                                    :info info
                                                    :create try-connect})]
                          (clients/send cl
                                        :editor.clear.groovy info
                                        :only editor))))

(cmd/command {:command :clear-bindings
              :desc "Groovy: Clear bindings for current editor"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :on.clear.bindings)))})



(defn notify-of-results [editor res]
  (doseq [ln (:result res)]
    (let [lineNo (+ (:line ln) (-> res :meta :start) -1)]
      (object/raise editor :editor.result (clojure.string/join " " (:values ln)) {:line lineNo :start-line lineNo}))))

(behavior ::groovy-res
          :triggers #{:groovy.res}
          :reaction (fn [editor res]
                      (notifos/done-working "Groovy evaluated")
                      (when-let [o (:out res)] (.log js/console o))
                      (notify-of-results editor res)))

(defn notify-of-error [editor res]
  (let [lineNo (+ (-> res :ex :line) (-> res :meta :start) -1)]
    (object/raise editor :editor.exception (-> res :ex :msg) {:line lineNo :start-line lineNo'})))

(behavior ::groovy-err
          :triggers #{:groovy.err}
          :reaction (fn [editor res]
                      (object/raise editor :groovy.res res)
                      (notify-of-error editor res)))


(behavior ::on-project-provided
          :triggers #{:project.provided}
          :reaction (fn [this path]
                      (object/merge! this {:project-path path})))


(behavior ::connect
          :triggers #{:connect}
          :reaction (fn [this path]
                      (object/raise this :project.provided path)
                      (try-connect {:info {:path path}})))


(behavior ::client-enable-logging
          :triggers #{:object.instant}
          :desc "Groovy: Log groovy client output to lt_groovy.log"
          :type :user
          :exclusive true
          :reaction (fn [this]
                      (object/merge! groovy {::enable-client-logging? true})))

(behavior ::on-gradle-progress
          :desc "Reporting of progress from gradle related tasks"
          :triggers #{:gradle.progress}
          :reaction (fn [this info]
                      (notifos/msg* (str "Gradle progress: " (:msg info)) {:timeout 5000})))

(behavior ::on-gradle-err
          :desc "Gradle error"
          :triggers #{:gradle.err}
          :reaction (fn [this info]
                      ;;(println (:ex info))
                      (notifos/set-msg! (str "Gradle failure: " (:message info)) {:class "error" :timeout 5000})
                      (console/error (str (-> info :ex :cause)))))

(behavior ::on-gradle-execute-err
          :desc "Error executing gradle task(s)"
          :triggers #{:gradle.execute.err}
          :reaction (fn [this info]
                      (notifos/set-msg! (str "Gradle failure" ) {:class "error" :timeout 5000})
                      (console/error (pr-str (-> info :error)))))

(behavior ::on-gradle-execute-success
          :desc "Succesful gradle task(s) execution"
          :triggers #{:gradle.execute.success}
          :reaction (fn [this info]
                      (notifos/msg* (str "Gradle success!" ))))

(behavior ::on-gradle-projectinfo
          :desc "Gradle project model information"
          :triggers #{:gradle.projectinfo}
          :reaction (fn [this info]
                      (object/merge! groovy {::gradle-project-info info})
                      (object/assoc-in! cmd/manager [:commands :gradle.task.select :options] (add-selector))))

(behavior ::on-gradle-execute
          :desc "Gradle execute task(s)"
          :triggers #{:gradle.execute}
          :reaction (fn [this task]
                      (clients/send
                       (clients/by-name "Groovy")
                       :gradle.execute
                       {:tasks [(:name task)]})))






(object/object* ::groovy-lang
                :tags #{:groovy.lang})


(def groovy (object/create ::groovy-lang))

(scl/add-connector {:name "Groovy"
                    :desc "Select a directory to serve as the root of your groovy project. (Must be a gradle project)"
                    :connect (fn []
                               (dialogs/dir groovy :connect))})



;; **** Gradle Task Sidebar Selector *****
(behavior ::set-selected
          :triggers #{:select}
          :reaction (fn [this v]
                      (scmd/exec-active! v)))

(defn selector [opts]
  (doto (scmd/filter-list opts)
    (object/add-behavior! ::set-selected)))



(defn get-tasks []
  (->@groovy ::gradle-project-info :tasks))



(defn add-selector []
  (selector {:items (get-tasks)
             :key :name
             :transform #(str "<p>" (:name %4) "</p>"
                              "<p class='binding'>" (:description %4) "</p>")}))



(cmd/command {:command :gradle.task.select
              :desc "Groovy: Select Gradle task"
              :options (add-selector)
              :exec (fn [item]
                      (object/raise groovy :gradle.execute item))})

(cmd/command {:command :gradle.show.deps
              :desc "Groovy: Shows gradle dependencies"
              :exec (fn []
                      (object/raise graph/dependency-graph :graph.show.dependencies (:dependencies (::gradle-project-info @groovy))))})

;;(:dependencies (::gradle-project-info @groovy))


;; TODO: Clean up upon close connection !

