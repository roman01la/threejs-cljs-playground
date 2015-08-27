(ns client.loadbar
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! chan]]

            [client.list :refer [list-component]]
            [client.file-button :refer [file-button-component]]
            [client.utils :refer [display]]
            [client.loaders :refer [obj-loader-chan collada-loader-chan texture-loader-chan]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def loadbar-chan (chan))

(defn get-file [evt]
  (aget (.. evt -target -files) 0))

(defn create-loader-btn [title ch]
  (partial file-button-component
    title
    {:onChange #(put! ch (get-file %))}))

(def obj-loader-btn-component
  (create-loader-btn "OBJ" obj-loader-chan))

(def collada-loader-btn-component
  (create-loader-btn "Collada" collada-loader-chan))

(def texture-loader-btn-component
  (create-loader-btn "Texture" texture-loader-chan))

(defn loadbar-component [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:visible false})
    om/IDidMount
    (did-mount [_]
      (go (loop [visible (om/get-state owner :visible)]
        (<! loadbar-chan)
        (let [next-state (not visible)]
          (om/set-state! owner :visible next-state)
          (recur next-state)))))
    om/IRenderState
    (render-state [_ state]
      (dom/div #js {:className "load-bar bar" :style (display (:visible state))}
        (list-component app [obj-loader-btn-component
                             collada-loader-btn-component
                             texture-loader-btn-component])))))
