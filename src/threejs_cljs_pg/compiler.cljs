(ns threejs-cljs-pg.compiler
  (:require [cljs.js :as cljs]
            [cljs.tools.reader :as r]))

; set repl state
(def st (cljs/empty-state))

; expose eval fn
(defn eval-expr
  ([source cb]
    (cljs/compile-str st source 'cljs.user
      {:eval cljs/js-eval
       :source-map true}
      (fn [{:keys [error value]}]
        (if-not error
          (cb nil value)
          (cb (.. error -cause -stack)))))))
