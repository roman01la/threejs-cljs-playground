(ns client.toolbar
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! chan]]

            [client.mainbar :refer [mainbar-component]]
            [client.loadbar :refer [loadbar-component]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn toolbar-component [app _]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:className "bottom-bar"}
        (om/build loadbar-component app)
        (om/build mainbar-component app)))))
