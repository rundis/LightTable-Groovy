(ns lt.plugins.groovy.graph
  (:require [lt.objs.plugins :as plugins]
            [lt.object :as object]
            [lt.objs.command :as cmd]
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
                        (let [content (dependency-graph-ui this)]
                          content)))

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


(defn create-graph [this conf-name & [proj]]
  (let [g (new dagreD3/Digraph)
        conf (if proj
               (get (:configurations (proj-by-name this proj)) (keyword conf-name))
               (get (-> @this :rootDeps :configurations) (keyword conf-name)))]
    (.addNode g (name conf-name) #js {:label (name conf-name)})
    (doseq [x (:nodes conf)]
      (.addNode g (dep-id x) #js {:label (str "<div class='graph-label "
                                              (when (= "project" (:type x)) (str " clickable' data-proj-name='"  (:name x)))
                                              "' title='" (dep-id x) "'>" (:name x) "<br/>" (:version x) "</div>")}))
    (doseq [x (:edges conf)]
       (.addEdge g nil (:a x) (:b x) #js {:label ""}))
    g))



(defn on-select-project [ev]
  (let [proj (dom/attr (.-target ev) "data-proj-name")]
    (render-confs dependency-graph proj)
    (render-deps dependency-graph :compile proj )))


(defn bind-select-project [this]
  (doseq [x (dom/$$ ".graph-label.clickable" (:content @this))]
    (dom/on x "click" on-select-project)))

(defn unbind-select-project [this]
  (doseq [x (dom/$$ ".graph-label.clickable" (:content @this))]
    (dom/off x "click" on-select-project)))




(defn create-multiproject-graph [this]
  (let [g (new dagreD3/Digraph)]
    (doseq [x (:nodes (multi-proj-deps this))]
      (.addNode g (dep-id x) #js {:label (str "<div class='graph-label clickable' data-proj-name='"  (:name x) "' title='" (dep-id x) "'>" (:name x) "<br/>" (:version x) "</div>")}))
    (doseq [x (:edges (multi-proj-deps this))]
      (.addEdge g nil (:a x) (:b x) #js {:label ""}))
    g))



(defn dimensions [this]
  {:w  (.-clientWidth (:content @this))
   :h  (.-clientHeight (:content @this))})

(defn d3-sel [selector]
  (.select js/window.d3 selector))

(defn on-zoom2 []
  (let [ev (.-event js/window.d3)]
    (.attr
     (d3-sel (dom/$ :g (:content @dependency-graph)))
     "transform"
     (str "translate(" (.-translate ev) ") scale(" (.-scale ev) ")"))))


(defn curr-transform [this]
  (.transform js/window.d3 (.attr (d3-sel (dom/$ :g (:content @this))) "transform")))

(defn curr-scale [this]
  (first (.-scale (curr-transform this))))

(defn curr-translate [this]
  (let [t (.-translate (curr-transform this))]
    {:x (first t) :y (last t)}))

(defn zoom [this delta]
 (let [s (curr-scale this)
       t (curr-translate this)
       svg (d3-sel (dom/$ :svg (:content @this)))]
   (.scale zoom-listener (+ s delta))
   (.translate zoom-listener #js [(+ (:x t) delta) (+ (:y t) delta)])
   (.event zoom-listener (.duration (.transition svg) 500))))


(defn render-deps [this conf-name & [proj]]
  (let [renderer (new dagreD3/Renderer)
        g (dom/$ :g (:content @this))
        svg (dom/$ :svg (:content @this))
        layout (.run renderer (create-graph this conf-name proj) (d3-sel g))
        dim (dimensions this)]
    (unbind-select-project this)
    (bind-select-project this)
    (.attr (d3-sel svg) "width" (+ (:w dim) 20))
    (.attr (d3-sel svg) "height" (+ (:h dim) 20))))

(defn render-multi-deps [this]
  (maybe-remove-confs-div this)
  (render-header-only this)
  (let [renderer (new dagreD3/Renderer)
        g (dom/$ :g (:content @this))
        svg (dom/$ :svg (:content @this))
        layout (.run renderer (create-multiproject-graph this) (d3-sel g))
        dim (dimensions this)]
    (unbind-select-project this)
    (bind-select-project this)
    (.attr (d3-sel svg) "width" (+ (:w dim) 20))
    (.attr (d3-sel svg) "height" (+ (:h dim) 20))))



(defui conf-ui [this conf & [proj]]
  [:button (key conf)]
   :click (fn [e]
            (render-deps this (key conf) proj)))

(defui header-ui [this & [proj overview]]
  [:div.graph-header
   [:h1 [:span.clickable "Dependency graph"]  (str (when overview " - Overview") " - "  (if proj proj (-> @this :rootDeps :name)))]]
  :click (fn [ev]
             (default-display this)))

(defui confs-ui [this & [proj]]
  [:div.conf
   (header-ui this proj)
   [:div
    (map
     #(conf-ui this % proj)
     (into {} (filter #(seq(:nodes (val %)))
                      (if proj
                        (:configurations (proj-by-name this proj))
                        (-> @this :rootDeps :configurations)))))]])

(defn maybe-remove-header-div [this]
  (when-let [header-div (dom/$ ".graph-header" (:content @this))]
    (dom/remove header-div)))


(defn render-header-only [this & [proj]]
  (maybe-remove-header-div this)
  (dom/prepend (:content @this) (header-ui this proj true)))



(defn maybe-remove-confs-div [this]
  (when-let [conf-div (dom/$ ".conf" (:content @this))]
    (dom/remove conf-div)))

(defn render-confs [this & [proj]]
  (maybe-remove-header-div this)
  (maybe-remove-confs-div this)
  (dom/prepend (:content @this) (confs-ui this proj)))



(defn project-node [node]
  (assoc (select-keys node [:name :group :version]) :type "project"))

(defn root-node [this]
  (project-node (:rootDeps @this)))

(defn sub-nodes [this]
  (map project-node (:subDeps @this)))



(defn project-deps-by-conf [x]
  (filter #(= "project" (:type %)) (:nodes (val x))))

(defn project-deps-by-proj [x]
  (into #{} (flatten (map #(project-deps-by-conf %) (:configurations x)))))

(defn sub-edges [sub]
  (map #(hash-map :a (dep-id sub) :b (dep-id %)) (project-deps-by-proj sub)))

(defn subs-edges [this]
  (flatten (map #(sub-edges %) (:subDeps @this))))

(defn multi-child-edges [this]
  (map #(hash-map :a (dep-id (root-node this)) :b (dep-id %)) (sub-nodes this)))

(defn multi-proj-deps [this]
  {:nodes (conj (sub-nodes this) (root-node this))
   :edges (concat (multi-child-edges this) (subs-edges this))})


(defn proj-by-name [this x]
  (if (= x (-> @this :rootDeps :name))
    (:rootDeps @this)
    (some #(if (= x (:name %)) %) (:subDeps @this))))

(defn default-display [this]
  (when (:rootDeps @this)
    (if (seq (:subDeps @this))
      (render-multi-deps this)
      (do
        (render-confs this)
        (when (->@this :rootDeps :configurations :compile)
          (render-deps this :compile))))))


(behavior ::on-dependencies-loaded
          :desc "Gradle dependencies loaded for selected project"
          :triggers #{:graph.set.dependencies}
          :reaction (fn [this rootDeps subDeps]
                      (object/merge! this {:rootDeps rootDeps
                                           :subDeps subDeps})))


(behavior ::on-show-dependencies
          :desc "Show dependency graph"
          :triggers #{:graph.show.dependencies}
          :reaction (fn [this root-deps]
                      (tabs/add-or-focus! dependency-graph)
                      (default-display this)))

(cmd/command {:command :graph.zoom-in
              :desc "Groovy: Zoom in dependency graph"
              :exec (fn []
                      (zoom dependency-graph 0.1))})

(cmd/command {:command :graph.zoom-out
              :desc "Groovy: Zoom out dependency graph"
              :exec (fn []
                      (zoom dependency-graph -0.1))})



;; TODO: Remember where you put this statement or you are in trouble !
(def dependency-graph (object/create ::dependency-graph))

;; register zoom listener once ! (move to init perhaps ?)
(def zoom-listener
  (.on
   (.scaleExtent
    (.zoom (.-behavior js/window.d3))
    #js [0.1 3])
   "zoom"
   on-zoom2))

(zoom-listener (d3-sel (dom/$ :svg (:content @dependency-graph))))
