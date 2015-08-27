(ns ^:figwheel-always client.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! >! put! chan]]

            [client.root :refer [initialize]]
            [client.routes :refer [start]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(start)
(initialize)
