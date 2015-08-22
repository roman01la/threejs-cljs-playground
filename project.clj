(defproject threejs-cljs-pg "1.0.0"
  :description "three.js playground in ClojureScript"
  :dependencies [[org.clojure/clojure         "1.7.0"]
                 [org.clojure/clojurescript   "1.7.28"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel  "0.3.7"]]

  :source-paths ["src"]

  :figwheel
  {:server-port 3000
   :css-dirs ["resources/public/css"]}

  :cljsbuild
  {:builds {
    :dev {
      :source-paths ["src"]
      :figwheel true
      :compiler {:optimizations :none
                 :main threejs-cljs-pg.core
                 :dump-core false
                 :source-maps true
                 :source-map-timestamp true
                 :verbose true
                 :cache-analysis true
                 :asset-path "js/out"
                 :output-dir "resources/public/js/out"
                 :output-to "resources/public/js/threejs-cljs-pg.js"}}}})
