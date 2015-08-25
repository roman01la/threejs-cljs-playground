(defproject threejs-cljs-pg "1.0.0"
  :description "three.js playground in ClojureScript"
  :dependencies [[org.clojure/clojure         "1.7.0"]
                 [org.clojure/clojurescript   "1.7.28"]
                 [secretary "1.2.3"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel  "0.3.7"]]

  :figwheel
  {:server-port 3000
   :css-dirs ["resources/public/css"]}

  :cljsbuild
  {:builds {
    :dev {
      :source-paths ["src"]
      :figwheel true
      :compiler {:optimizations :none
                 :main client.core
                 :dump-core false
                 :static-fns true
                 :optimize-constants true
                 :source-maps true
                 :source-map-timestamp true
                 :verbose true
                 :cache-analysis true
                 :asset-path "js/out"
                 :output-dir "resources/public/js/out"
                 :output-to "resources/public/js/app.js"}}}})
