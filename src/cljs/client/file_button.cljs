(ns client.file-button
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! chan]]

            [client.button :refer [button-component]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn file-button-component [children opts _ owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
        (om/build button-component
          children
          {:opts {:onClick #(.click (om/get-node owner "input"))}})
        (dom/input #js {:className "btn"
                        :ref "input"
                        :type "file"
                        :hidden true
                        :onChange (:onChange opts)})))))
