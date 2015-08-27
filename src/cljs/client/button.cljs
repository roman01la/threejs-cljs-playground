(ns client.button
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! chan]]

            [client.utils :refer [append-class-name]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn button-component [children _ opts]
  (reify
    om/IRender
    (render [_]
      (dom/button
        #js {:className (append-class-name "btn" opts)
             :onClick (:onClick opts)}
        (or (:text opts) children)))))
