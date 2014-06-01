(ns lt.plugins.groovy.graph
  (:require [lt.objs.plugins :as plugins]
            [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.util.load :as load]
            [lt.objs.files :as files]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def plugin-dir (plugins/find-plugin "Groovy"))


(defui dependency-graph-ui [this]
  [:div.graph
   [:div.dependency-graph
    [:svg:svg {:width "650" :height "680"}
     [:svg:g {:transform "translate(20,20)"}]]]])

(object/object* ::dependency-graph
                :tags [:graph.dependency]
                :name "Dependency graph"
                :init (fn [this]
                        (load/js (files/join plugin-dir "js/d3.v3.min.js") :sync)
                        (load/js (files/join plugin-dir "js/dagre-d3.js") :sync)
                        (dependency-graph-ui this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))


(defn select-values [map ks]
         (remove nil? (reduce #(conj %1 (map %2)) [] ks)))

(defn dep-id [dep]
  (clojure.string/join ":" (select-values dep [:name :group :version])))


(def sample-deps [
     {:name "groovy-all" :group "org.codehaus.groovy" :version "2.2.2" :children []}
     {:name "groovy-stream" :group "com.bloidonia" :version "0.8.1"
      :children [{:name "groovy-all" :group "org.codehaus.groovy" :version "2.2.2" :children []}]}
     {:name "spock-core"  :group "org.spockframework"  :version "0.7-groovy-2.0"
      :children [{:name "groovy-all" :group "org.codehaus.groovy" :version "2.2.2" :children []}
                 {:name "junit-dep" :group "junit" :version "4.10"
                  :children [{:name "hamcrest-core" :group "org.hamcrest" :version "1.3" :children []}]}
                 {:name "junit-dep" :group "junit" :version "4.10" :children []}
                 {:name "hamcrest-core" :group "org.hamcrest" :version "1.3" :children []}]}])


(defn unique-deps [deps]
  (letfn [(gather-deps [xs]
            (map #(concat (when (seq (:children %))
                     (gather-deps (:children %)))
                            [(dissoc % :children)])
              xs))]
    (->>
     deps
     (gather-deps)
     (flatten)
     (into #{}))))



(defn unique-dep-edges [deps]
  (letfn [(gather-edges [xs]
          (map #(when (seq (:children %))
                  (concat
                   (gather-edges (:children %))
                   (for [x [%]
                         y (:children %)]
                     {:a (dep-id x) :b (dep-id y)}))) xs))]
  (->>
   deps
   (gather-edges)
   (flatten)
   (remove nil?)
   (into #{}))))

(defn create-graph [deps conf-name]
  (let [g (new dagreD3/Digraph)]
    (.addNode g "configuration" #js {:label conf-name})
    (doseq [x (unique-deps deps)]
      (.addNode g (dep-id x) #js {:label (:name x)}))
    (doseq [x (unique-dep-edges deps)]
      (.addEdge g nil (:a x) (:b x) #js {:label ""}))
    (doseq [x deps]
      (.addEdge g nil "configuration" (dep-id x) #js {:label ""}))
    g))


(defn dimensions [this]
  {:w  (.-clientWidth (:content @this))
   :h  (.-clientHeight (:content @this))})

(defn d3-sel [selector]
  (.select js/window.d3 selector))

(defn on-zoom [d3-layout]
  (let [ev (.-event js/window.d3)]
    (.attr d3-layout "transform" (str "translate(" (.-translate ev) ") scale(" (.-scale ev) ")"))))

(defn deps-by-conf-name [confs name]
  (:dependencies (some #(if (= (:configuration %) name) %) confs)))

(defn render-deps [this confs conf-name]
  (let [renderer (new dagreD3/Renderer)
        g (dom/$ :g (:content @this))
        svg (dom/$ :svg (:content @this))
        layout (.run renderer (create-graph (deps-by-conf-name confs conf-name) conf-name) (d3-sel g))
        dim (dimensions this)]
    (.attr (d3-sel svg) "width" (+ (:w dim) 20))
    (.attr (d3-sel svg) "height" (+ (:h dim) 20))
    (.call (d3-sel svg) (.on (.zoom (.-behavior js/window.d3)) "zoom" (partial on-zoom (d3-sel g))))))



(defui conf-ui [this conf confs]
  [:button (:configuration conf)]
   :click (fn [e]
            (render-deps this confs (:configuration conf))))

(defui confs-ui [this confs]
  [:div.conf
   [:h1 "Dependency graph"]
   [:div
    (map #(conf-ui this % confs) (filter #(seq(:dependencies %)) confs))]])

(defn render-confs [this deps-confs]
  (when-let [conf-div (dom/$ ".conf" (:content @this))]
    (dom/remove conf-div))
  (dom/prepend (:content @this) (confs-ui this deps-confs)))


(behavior ::on-show-dependencies
          :desc "Show dependency graph"
          :triggers #{:graph.show.dependencies}
          :reaction (fn [this deps-confs]
                      (tabs/add-or-focus! dependency-graph)
                      (when deps-confs (render-confs this deps-confs))
                      (when-let [deps (deps-by-conf-name deps-confs "compile")]
                        (render-deps this deps-confs "compile"))))


;; TODO: Remember where you put this statement or you are in trouble !
(def dependency-graph (object/create ::dependency-graph))



