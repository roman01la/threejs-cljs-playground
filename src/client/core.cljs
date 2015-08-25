(ns client.core
  (:require [client.init]
            [client.routes :as routes]
            [client.loader]
            [client.share]))

(enable-console-print!)

(routes/start)
