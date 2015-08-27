(ns client.app-state
  (:require [cljs.core.async :refer [chan]]))

(def page-chan (chan))

(def app-state
  (atom {:user {}
        :editor nil
        :viewport nil
        :all-demos []
        :page {:uid nil
              :did nil
              :rev nil}}))
