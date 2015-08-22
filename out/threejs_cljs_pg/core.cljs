(ns threejs-cljs-pg.core
  (:require [cljs.js :as cljs]
            [cljs.tools.reader :as r]))

(enable-console-print!)

; expose ns
(set! (.. js/window -cljs -user) #js {})

; set repl state
(def st (cljs/empty-state))

; expose eval fn
(defn ^:export eval-expr
  ([source cb]
    (cljs/compile-str st source 'cljs.user
      {:eval cljs/js-eval
       :source-map true}
      (fn [{:keys [error value]}]
        (if-not error
          (cb nil value)
          (cb (.. error -cause -stack)))))))
