(ns lt.plugins.groovy
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.proc :as proc]
            [lt.object :as object]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos]
            [lt.plugins.watches :as watches]
            [lt.objs.editor :as ed]
            )
  (:require-macros [lt.macros :refer [behavior]]))

(object/object* ::groovy-lang
                :tags #{:groovy.lang})

(def groovy (object/create ::groovy-lang))


(defn display-results [err stdout stderr]
  (.log js/console (str "Results:\n" stdout stderr)))


(defn escape-code [code]
  (clojure.string/replace code "\"" "'"))

(defn eval-groovy [info]
  (.log js/console (str "eval-groovy for : " (:path info)))
  (.exec (js/require "child_process") (str "groovy -e \"" (escape-code (:code info)) "\"") display-results))


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
                      (let [{:keys [info origin]} event]
                        (notifos/working "")
                        (eval-groovy info)
                        (notifos/done-working))))
