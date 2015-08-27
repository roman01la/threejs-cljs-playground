(ns client.root
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! chan]]

            [client.app :refer [app-component]]
            [client.app-state :refer [app-state]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn initialize []
  (om/root
    app-component
    app-state
    {:target js/document.body}))
