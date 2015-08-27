(ns client.select
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! take! chan]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn build-options [items]
  (map
    #(dom/option
      #js {:key (:value %)
           :value (:value %)}
      (:title %))
    items))

(defn select-component [items _ opts]
  (reify
    om/IRender
    (render [_]
      (dom/select
        #js {:className (:className opts)
             :onChange (:onChange opts)}
        (build-options items)))))
