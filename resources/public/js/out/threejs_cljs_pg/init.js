// Compiled by ClojureScript 1.7.28 {}
goog.provide('threejs_cljs_pg.init');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('threejs_cljs_pg.compiler');
goog.require('threejs_cljs_pg.remote');
goog.require('threejs_cljs_pg.user');
threejs_cljs_pg.init.viewport = goog.dom.getElementByClass("viewport");
threejs_cljs_pg.init.editor_container = goog.dom.getElementByClass("editor");
threejs_cljs_pg.init.STORAGE = "THREE_JS_CLJS_STORAGE";
threejs_cljs_pg.init.get_default_vals = (function threejs_cljs_pg$init$get_default_vals(){
return [cljs.core.str("(def WIDTH "),cljs.core.str(threejs_cljs_pg.init.viewport.clientWidth),cljs.core.str(")\n   (def HEIGHT "),cljs.core.str(threejs_cljs_pg.init.viewport.clientHeight),cljs.core.str(")\n   (def VIEWPORT (js/document.querySelector \".viewport\"))\n   (def TEXTURES_DATA (.. js/window -texturesData))\n   (def TEXTURES #js [])\n   (def MODELS_DATA (.. js/window -modelsData))\n   (def MODELS #js [])\n   (def RAF)\n   (def CAMERA)\n   (def RENDERER)")].join('');
});
threejs_cljs_pg.init.MODELS_RELOADER = "(loop [i 0 arr MODELS_DATA]\n     (when (< i (.. arr -length))\n       (let [data (aget arr i)]\n         (case (.. data -type)\n           \"obj\" (.push MODELS (THREE.OBJLoader.prototype.parse (.. data -data)))\n           \"dae\" (.parse (THREE.ColladaLoader.) (.. data -data) (fn [model] (.push MODELS model)))))\n       (recur (inc i) arr)))";
threejs_cljs_pg.init.TEXTURES_RELOADER = "(loop [i 0 arr TEXTURES_DATA]\n      (when (< i (.. arr -length))\n        (let [texture (THREE.Texture. (aget arr i))]\n          (set! (.. texture -needsUpdate) true)\n          (.push TEXTURES texture))\n        (recur (inc i) arr)))";
threejs_cljs_pg.init.maybe_reload = (function threejs_cljs_pg$init$maybe_reload(reloader,data){
if(!((cljs.core.array_QMARK_.call(null,data)) && ((data.length > (0))))){
return reloader;
} else {
return null;
}
});
threejs_cljs_pg.init.reset_dom = (function threejs_cljs_pg$init$reset_dom(){
return threejs_cljs_pg.init.viewport.innerHTML = null;
});
threejs_cljs_pg.init.reset_ns = (function threejs_cljs_pg$init$reset_ns(){
return window.cljs.user = {};
});
threejs_cljs_pg.init.get_from_ns = (function threejs_cljs_pg$init$get_from_ns(prop){
return (window.cljs.user[prop]);
});
threejs_cljs_pg.init.set_to_ns = (function threejs_cljs_pg$init$set_to_ns(prop,val){
return (window.cljs.user[prop] = val);
});
threejs_cljs_pg.init.cache_from_ns = (function threejs_cljs_pg$init$cache_from_ns(from,to){
return (window[to] = (function (){var or__16482__auto__ = threejs_cljs_pg.init.get_from_ns.call(null,from);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return [];
}
})());
});
threejs_cljs_pg.init.reset_sandbox = (function threejs_cljs_pg$init$reset_sandbox(){
cancelAnimationFrame(cljs.user.RAF);

threejs_cljs_pg.init.cache_from_ns.call(null,"MODELS_DATA","modelsData");

threejs_cljs_pg.init.cache_from_ns.call(null,"TEXTURES_DATA","texturesData");

threejs_cljs_pg.init.reset_ns.call(null);

return threejs_cljs_pg.init.reset_dom.call(null);
});
threejs_cljs_pg.init.update_viewport_size = (function threejs_cljs_pg$init$update_viewport_size(w,h){
threejs_cljs_pg.init.set_to_ns.call(null,"WIDTH",w);

threejs_cljs_pg.init.set_to_ns.call(null,"HEIGHT",h);

return cljs.user.RENDERER.setSize(w,h);
});
threejs_cljs_pg.init.update_aspect_ratio = (function threejs_cljs_pg$init$update_aspect_ratio(w,h){
window.cljs.user.CAMERA.aspect = (w / h);

return window.cljs.user.CAMERA.updateProjectionMatrix();
});
threejs_cljs_pg.init.editor = CodeMirror(threejs_cljs_pg.init.editor_container,{"mode": "clojure", "theme": "neo", "lineNumbers": true, "autofocus": true, "autoCloseBrackets": true, "matchBrackets": true, "styleActiveLine": true});
threejs_cljs_pg.init.editor.on("change",(function (instance){
return localStorage.setItem(threejs_cljs_pg.init.STORAGE,instance.getValue());
}));
threejs_cljs_pg.init.get_value = (function threejs_cljs_pg$init$get_value(code){
return [cljs.core.str(threejs_cljs_pg.init.get_default_vals.call(null)),cljs.core.str(threejs_cljs_pg.init.maybe_reload.call(null,threejs_cljs_pg.init.TEXTURES_RELOADER,threejs_cljs_pg.init.get_from_ns.call(null,"MODELS_DATA"))),cljs.core.str(threejs_cljs_pg.init.maybe_reload.call(null,threejs_cljs_pg.init.MODELS_RELOADER,threejs_cljs_pg.init.get_from_ns.call(null,"TEXTURES_DATA"))),cljs.core.str(code)].join('');
});
threejs_cljs_pg.init.eval_change = (function threejs_cljs_pg$init$eval_change(){
threejs_cljs_pg.init.reset_sandbox.call(null);

return threejs_cljs_pg.compiler.eval_expr.call(null,threejs_cljs_pg.init.get_value.call(null,threejs_cljs_pg.init.editor.getValue()),(function (err,out){
if((err == null)){
try{return eval(out);
}catch (e18691){var e = e18691;
return console.error(e);
}} else {
return console.error(err);
}
}));
});
threejs_cljs_pg.init.editor.setOption("extraKeys",{"Alt-Enter": threejs_cljs_pg.init.eval_change});
goog.events.listen(goog.dom.getElementByClass("eval-btn"),goog.events.EventType.CLICK,threejs_cljs_pg.init.eval_change);
window.addEventListener("resize",(function (){
var w = threejs_cljs_pg.init.viewport.clientWidth;
var h = threejs_cljs_pg.init.viewport.clientHeight;
threejs_cljs_pg.init.update_viewport_size.call(null,w,h);

return threejs_cljs_pg.init.update_aspect_ratio.call(null,w,h);
}),false);
threejs_cljs_pg.init.code_str = ";; Globals (initialized once): THREE, VIEWPORT, WIDTH, HEIGHT, MODELS, TEXTURES\n;; THREE is three.js namespace, read API docs http://threejs.org/docs/\n;; VIEWPORT is a reference to the viewport DOM element\n;; WIDTH & HEIGHT are dimensions of the viewport\n;; MODELS is JS array where uploaded models are stored\n;; Upload OBJ/Collada model and access it with (aget MODELS \"index number\")\n;; Upload image and get the texture with (aget TEXTURES \"index number\")\n;; Press Alt-Enter to evaluate\n\n(def scene (THREE.Scene.))\n(def camera (THREE.PerspectiveCamera. 75 (/ WIDTH HEIGHT) 0.1 1000))\n(def renderer (THREE.WebGLRenderer. #js {\"antialias\" true}))\n\n;; assign renderer instace to global var RENDERER\n;; and camera instance to global var CAMERA\n;; to let me handle window resizing for you\n(set! RENDERER renderer)\n(set! CAMERA camera)\n\n(.setPixelRatio renderer js.window.devicePixelRatio)\n(.setSize renderer WIDTH HEIGHT)\n\n(.appendChild VIEWPORT renderer.domElement)\n\n(def geometry (THREE.BoxGeometry. 1 1 1))\n(def material (THREE.MeshBasicMaterial. #js {\"color\" 0x00ff00}))\n(def cube (THREE.Mesh. geometry material))\n\n(.add scene cube)\n\n(set! (.-z camera.position) 5)\n\n(defn animate []\n  (set! (.-x cube.rotation) (+ cube.rotation.x 0.01))\n  (set! (.-y cube.rotation) (+ cube.rotation.y 0.01)))\n\n(defn render []\n  ;; assign every call to js/requestAnimationFrame to global RAF var\n  ;; required to clean up render loop before each evaluation\n  (set! RAF (js/requestAnimationFrame render))\n  (animate)\n  (.render renderer scene camera))\n\n(render)";
threejs_cljs_pg.init.parse_id = (function threejs_cljs_pg$init$parse_id(){
return (window.location.hash.match((new RegExp("#(.*)")))[(1)]);
});
threejs_cljs_pg.init.run = (function threejs_cljs_pg$init$run(code){
threejs_cljs_pg.init.editor.setValue(code);

threejs_cljs_pg.init.reset_ns.call(null);

threejs_cljs_pg.init.reset_dom.call(null);

return threejs_cljs_pg.init.eval_change.call(null);
});
threejs_cljs_pg.init.initialize = (function threejs_cljs_pg$init$initialize(){
if(!(cljs.core.empty_QMARK_.call(null,window.location.hash))){
return threejs_cljs_pg.remote.get_demo.call(null,threejs_cljs_pg.init.parse_id.call(null)).then(threejs_cljs_pg.init.run);
} else {
return threejs_cljs_pg.init.run.call(null,(function (){var init_code = localStorage.getItem(threejs_cljs_pg.init.STORAGE);
if(cljs.core.empty_QMARK_.call(null,init_code)){
return threejs_cljs_pg.init.code_str;
} else {
return init_code;
}
})());
}
});

//# sourceMappingURL=init.js.map?rel=1440250705940