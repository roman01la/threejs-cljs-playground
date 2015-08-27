(ns client.list
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! chan]]

            [client.utils :refer [append-class-name]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn list-component
  ([app items]
    (list-component app items {}))
  ([app items opts]
    (apply dom/ul #js {:className (append-class-name "list" opts)}
      (map #(dom/li #js {:className "list-item"}
              (if (vector? %)
                (apply om/build %)
                (om/build % app)))
            items))))
