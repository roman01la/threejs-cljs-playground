// Compiled by ClojureScript 1.7.28 {}
goog.provide('threejs_cljs_pg.loader');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
threejs_cljs_pg.loader.loader_bar = goog.dom.getElementByClass("load-bar");
threejs_cljs_pg.loader.upload_btn = goog.dom.getElementByClass("upload-btn");
threejs_cljs_pg.loader.obj_input = goog.dom.getElementByClass("obj-file");
threejs_cljs_pg.loader.obj_btn = goog.dom.getElementByClass("obj-btn");
threejs_cljs_pg.loader.dae_input = goog.dom.getElementByClass("collada-file");
threejs_cljs_pg.loader.dae_btn = goog.dom.getElementByClass("collada-btn");
threejs_cljs_pg.loader.texture_input = goog.dom.getElementByClass("texture-file");
threejs_cljs_pg.loader.texture_btn = goog.dom.getElementByClass("texture-btn");
threejs_cljs_pg.loader.toggle_loader_bar = (function threejs_cljs_pg$loader$toggle_loader_bar(){
return threejs_cljs_pg.loader.loader_bar.hidden = cljs.core.not.call(null,threejs_cljs_pg.loader.loader_bar.hidden);
});
threejs_cljs_pg.loader.add_model = (function threejs_cljs_pg$loader$add_model(model,type){
return window.cljs.user.MODELS.push({"type": type, "data": model});
});
threejs_cljs_pg.loader.add_raw_model = (function threejs_cljs_pg$loader$add_raw_model(data,type){
return window.cljs.user.MODELS_DATA.push({"type": type, "data": data});
});
threejs_cljs_pg.loader.add_texture = (function threejs_cljs_pg$loader$add_texture(texture){
return window.cljs.user.TEXTURES.push(texture);
});
threejs_cljs_pg.loader.add_raw_texture = (function threejs_cljs_pg$loader$add_raw_texture(raw_texture){
return window.cljs.user.TEXTURES_DATA.push(raw_texture);
});
threejs_cljs_pg.loader.build_dom_fragment = (function threejs_cljs_pg$loader$build_dom_fragment(s){
var fragment = document.createElement("div");
fragment.innerHTML = s;

return (fragment.children[(0)]);
});
threejs_cljs_pg.loader.read_file = (function threejs_cljs_pg$loader$read_file(cb,fmt,evt){
var reader = (new FileReader());
var file = (evt.target.files[(0)]);
reader.addEventListener("loadend",((function (reader,file){
return (function (ent){
return cb.call(null,ent.target.result);
});})(reader,file))
,false);

var G__23990 = fmt;
switch (G__23990) {
case "text":
return reader.readAsText(file);

break;
case "url":
return reader.readAsDataURL(file);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(fmt)].join('')));

}
});
threejs_cljs_pg.loader.parse_obj = (function threejs_cljs_pg$loader$parse_obj(data){
threejs_cljs_pg.loader.add_raw_model.call(null,data,"obj");

return threejs_cljs_pg.loader.add_model.call(null,THREE.OBJLoader.prototype.parse(data),"obj");
});
threejs_cljs_pg.loader.parse_dae = (function threejs_cljs_pg$loader$parse_dae(data){
var loader = (new THREE.ColladaLoader());
var xml = threejs_cljs_pg.loader.build_dom_fragment.call(null,data);
return loader.parse(xml,((function (loader,xml){
return (function (model){
threejs_cljs_pg.loader.add_raw_model.call(null,xml,"dae");

return threejs_cljs_pg.loader.add_model.call(null,model,"dae");
});})(loader,xml))
);
});
threejs_cljs_pg.loader.load_texture = (function threejs_cljs_pg$loader$load_texture(url){
var img = (new Image());
img.addEventListener("load",((function (img){
return (function (evt){
var texture = (new THREE.Texture(img));
texture.needsUpdate = true;

threejs_cljs_pg.loader.add_raw_texture.call(null,img);

return threejs_cljs_pg.loader.add_texture.call(null,texture);
});})(img))
,false);

return img.src = url;
});
goog.events.listen(threejs_cljs_pg.loader.upload_btn,goog.events.EventType.CLICK,threejs_cljs_pg.loader.toggle_loader_bar);
goog.events.listen(threejs_cljs_pg.loader.obj_btn,goog.events.EventType.CLICK,(function (){
return threejs_cljs_pg.loader.obj_input.click();
}));
goog.events.listen(threejs_cljs_pg.loader.obj_input,goog.events.EventType.CHANGE,cljs.core.partial.call(null,threejs_cljs_pg.loader.read_file,threejs_cljs_pg.loader.parse_obj,"text"));
goog.events.listen(threejs_cljs_pg.loader.dae_btn,goog.events.EventType.CLICK,(function (){
return threejs_cljs_pg.loader.dae_input.click();
}));
goog.events.listen(threejs_cljs_pg.loader.dae_input,goog.events.EventType.CHANGE,cljs.core.partial.call(null,threejs_cljs_pg.loader.read_file,threejs_cljs_pg.loader.parse_dae,"text"));
goog.events.listen(threejs_cljs_pg.loader.texture_btn,goog.events.EventType.CLICK,(function (){
return threejs_cljs_pg.loader.texture_input.click();
}));
goog.events.listen(threejs_cljs_pg.loader.texture_input,goog.events.EventType.CHANGE,cljs.core.partial.call(null,threejs_cljs_pg.loader.read_file,threejs_cljs_pg.loader.load_texture,"url"));

//# sourceMappingURL=loader.js.map?rel=1440195210316