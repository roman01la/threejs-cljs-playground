// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__30438_SHARP_,p2__30439_SHARP_){
var and__16470__auto__ = p1__30438_SHARP_;
if(cljs.core.truth_(and__16470__auto__)){
return p2__30439_SHARP_;
} else {
return and__16470__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16482__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16482__auto__){
return or__16482__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16482__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16482__auto__){
return or__16482__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16482__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17377__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17380__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30440){
var map__30441 = p__30440;
var map__30441__$1 = ((((!((map__30441 == null)))?((((map__30441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30441):map__30441);
var file = cljs.core.get.call(null,map__30441__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30443){
var map__30444 = p__30443;
var map__30444__$1 = ((((!((map__30444 == null)))?((((map__30444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30444):map__30444);
var namespace = cljs.core.get.call(null,map__30444__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17377__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17380__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e30446){if((e30446 instanceof Error)){
var e = e30446;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30446;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var args30447 = [];
var len__17521__auto___30450 = arguments.length;
var i__17522__auto___30451 = (0);
while(true){
if((i__17522__auto___30451 < len__17521__auto___30450)){
args30447.push((arguments[i__17522__auto___30451]));

var G__30452 = (i__17522__auto___30451 + (1));
i__17522__auto___30451 = G__30452;
continue;
} else {
}
break;
}

var G__30449 = args30447.length;
switch (G__30449) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30447.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30454,callback){
var map__30457 = p__30454;
var map__30457__$1 = ((((!((map__30457 == null)))?((((map__30457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30457):map__30457);
var file_msg = map__30457__$1;
var request_url = cljs.core.get.call(null,map__30457__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30457,map__30457__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30457,map__30457__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30459){
var map__30462 = p__30459;
var map__30462__$1 = ((((!((map__30462 == null)))?((((map__30462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30462):map__30462);
var file_msg = map__30462__$1;
var namespace = cljs.core.get.call(null,map__30462__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__30462__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16482__auto__ = meta_data;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16470__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16470__auto__){
var or__16482__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var or__16482__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16482__auto____$1)){
return or__16482__auto____$1;
} else {
var and__16470__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16470__auto____$1){
var or__16482__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16482__auto____$2){
return or__16482__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16470__auto____$1;
}
}
}
} else {
return and__16470__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30464,callback){
var map__30467 = p__30464;
var map__30467__$1 = ((((!((map__30467 == null)))?((((map__30467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30467):map__30467);
var file_msg = map__30467__$1;
var request_url = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21335__auto___30555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___30555,out){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___30555,out){
return (function (state_30537){
var state_val_30538 = (state_30537[(1)]);
if((state_val_30538 === (1))){
var inst_30515 = cljs.core.nth.call(null,files,(0),null);
var inst_30516 = cljs.core.nthnext.call(null,files,(1));
var inst_30517 = files;
var state_30537__$1 = (function (){var statearr_30539 = state_30537;
(statearr_30539[(7)] = inst_30517);

(statearr_30539[(8)] = inst_30516);

(statearr_30539[(9)] = inst_30515);

return statearr_30539;
})();
var statearr_30540_30556 = state_30537__$1;
(statearr_30540_30556[(2)] = null);

(statearr_30540_30556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (2))){
var inst_30517 = (state_30537[(7)]);
var inst_30520 = (state_30537[(10)]);
var inst_30520__$1 = cljs.core.nth.call(null,inst_30517,(0),null);
var inst_30521 = cljs.core.nthnext.call(null,inst_30517,(1));
var inst_30522 = (inst_30520__$1 == null);
var inst_30523 = cljs.core.not.call(null,inst_30522);
var state_30537__$1 = (function (){var statearr_30541 = state_30537;
(statearr_30541[(10)] = inst_30520__$1);

(statearr_30541[(11)] = inst_30521);

return statearr_30541;
})();
if(inst_30523){
var statearr_30542_30557 = state_30537__$1;
(statearr_30542_30557[(1)] = (4));

} else {
var statearr_30543_30558 = state_30537__$1;
(statearr_30543_30558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (3))){
var inst_30535 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30537__$1,inst_30535);
} else {
if((state_val_30538 === (4))){
var inst_30520 = (state_30537[(10)]);
var inst_30525 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30520);
var state_30537__$1 = state_30537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30537__$1,(7),inst_30525);
} else {
if((state_val_30538 === (5))){
var inst_30531 = cljs.core.async.close_BANG_.call(null,out);
var state_30537__$1 = state_30537;
var statearr_30544_30559 = state_30537__$1;
(statearr_30544_30559[(2)] = inst_30531);

(statearr_30544_30559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (6))){
var inst_30533 = (state_30537[(2)]);
var state_30537__$1 = state_30537;
var statearr_30545_30560 = state_30537__$1;
(statearr_30545_30560[(2)] = inst_30533);

(statearr_30545_30560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30538 === (7))){
var inst_30521 = (state_30537[(11)]);
var inst_30527 = (state_30537[(2)]);
var inst_30528 = cljs.core.async.put_BANG_.call(null,out,inst_30527);
var inst_30517 = inst_30521;
var state_30537__$1 = (function (){var statearr_30546 = state_30537;
(statearr_30546[(7)] = inst_30517);

(statearr_30546[(12)] = inst_30528);

return statearr_30546;
})();
var statearr_30547_30561 = state_30537__$1;
(statearr_30547_30561[(2)] = null);

(statearr_30547_30561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21335__auto___30555,out))
;
return ((function (switch__21270__auto__,c__21335__auto___30555,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto____0 = (function (){
var statearr_30551 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30551[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto__);

(statearr_30551[(1)] = (1));

return statearr_30551;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto____1 = (function (state_30537){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_30537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e30552){if((e30552 instanceof Object)){
var ex__21274__auto__ = e30552;
var statearr_30553_30562 = state_30537;
(statearr_30553_30562[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30563 = state_30537;
state_30537 = G__30563;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto__ = function(state_30537){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto____1.call(this,state_30537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___30555,out))
})();
var state__21337__auto__ = (function (){var statearr_30554 = f__21336__auto__.call(null);
(statearr_30554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___30555);

return statearr_30554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___30555,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__30564,p__30565){
var map__30570 = p__30564;
var map__30570__$1 = ((((!((map__30570 == null)))?((((map__30570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30570):map__30570);
var opts = map__30570__$1;
var url_rewriter = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30571 = p__30565;
var map__30571__$1 = ((((!((map__30571 == null)))?((((map__30571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30571):map__30571);
var file_msg = map__30571__$1;
var file = cljs.core.get.call(null,map__30571__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30574,opts){
var map__30578 = p__30574;
var map__30578__$1 = ((((!((map__30578 == null)))?((((map__30578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30578):map__30578);
var eval_body__$1 = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16470__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16470__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16470__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30580){var e = e30580;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30585,p__30586){
var map__30814 = p__30585;
var map__30814__$1 = ((((!((map__30814 == null)))?((((map__30814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30814):map__30814);
var opts = map__30814__$1;
var before_jsload = cljs.core.get.call(null,map__30814__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30814__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__30814__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__30815 = p__30586;
var map__30815__$1 = ((((!((map__30815 == null)))?((((map__30815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30815):map__30815);
var msg = map__30815__$1;
var files = cljs.core.get.call(null,map__30815__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21335__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files){
return (function (state_30956){
var state_val_30957 = (state_30956[(1)]);
if((state_val_30957 === (7))){
var inst_30830 = (state_30956[(7)]);
var inst_30829 = (state_30956[(8)]);
var inst_30831 = (state_30956[(9)]);
var inst_30832 = (state_30956[(10)]);
var inst_30837 = cljs.core._nth.call(null,inst_30830,inst_30832);
var inst_30838 = figwheel.client.file_reloading.eval_body.call(null,inst_30837,opts);
var inst_30839 = (inst_30832 + (1));
var tmp30958 = inst_30830;
var tmp30959 = inst_30829;
var tmp30960 = inst_30831;
var inst_30829__$1 = tmp30959;
var inst_30830__$1 = tmp30958;
var inst_30831__$1 = tmp30960;
var inst_30832__$1 = inst_30839;
var state_30956__$1 = (function (){var statearr_30961 = state_30956;
(statearr_30961[(7)] = inst_30830__$1);

(statearr_30961[(11)] = inst_30838);

(statearr_30961[(8)] = inst_30829__$1);

(statearr_30961[(9)] = inst_30831__$1);

(statearr_30961[(10)] = inst_30832__$1);

return statearr_30961;
})();
var statearr_30962_31041 = state_30956__$1;
(statearr_30962_31041[(2)] = null);

(statearr_30962_31041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (20))){
var inst_30879 = (state_30956[(12)]);
var inst_30874 = (state_30956[(13)]);
var inst_30881 = (state_30956[(14)]);
var inst_30878 = (state_30956[(15)]);
var inst_30875 = (state_30956[(16)]);
var inst_30884 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30886 = (function (){var all_files = inst_30874;
var files_SINGLEQUOTE_ = inst_30875;
var res_SINGLEQUOTE_ = inst_30878;
var res = inst_30879;
var files_not_loaded = inst_30881;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30879,inst_30874,inst_30881,inst_30878,inst_30875,inst_30884,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files){
return (function (p__30885){
var map__30963 = p__30885;
var map__30963__$1 = ((((!((map__30963 == null)))?((((map__30963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30963):map__30963);
var namespace = cljs.core.get.call(null,map__30963__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30963__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30879,inst_30874,inst_30881,inst_30878,inst_30875,inst_30884,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files))
})();
var inst_30887 = cljs.core.map.call(null,inst_30886,inst_30879);
var inst_30888 = cljs.core.pr_str.call(null,inst_30887);
var inst_30889 = figwheel.client.utils.log.call(null,inst_30888);
var inst_30890 = (function (){var all_files = inst_30874;
var files_SINGLEQUOTE_ = inst_30875;
var res_SINGLEQUOTE_ = inst_30878;
var res = inst_30879;
var files_not_loaded = inst_30881;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30879,inst_30874,inst_30881,inst_30878,inst_30875,inst_30884,inst_30886,inst_30887,inst_30888,inst_30889,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30879,inst_30874,inst_30881,inst_30878,inst_30875,inst_30884,inst_30886,inst_30887,inst_30888,inst_30889,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files))
})();
var inst_30891 = setTimeout(inst_30890,(10));
var state_30956__$1 = (function (){var statearr_30965 = state_30956;
(statearr_30965[(17)] = inst_30889);

(statearr_30965[(18)] = inst_30884);

return statearr_30965;
})();
var statearr_30966_31042 = state_30956__$1;
(statearr_30966_31042[(2)] = inst_30891);

(statearr_30966_31042[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (27))){
var state_30956__$1 = state_30956;
var statearr_30967_31043 = state_30956__$1;
(statearr_30967_31043[(2)] = false);

(statearr_30967_31043[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (1))){
var inst_30821 = (state_30956[(19)]);
var inst_30818 = before_jsload.call(null,files);
var inst_30819 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30820 = (function (){return ((function (inst_30821,inst_30818,inst_30819,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files){
return (function (p1__30581_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30581_SHARP_);
});
;})(inst_30821,inst_30818,inst_30819,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files))
})();
var inst_30821__$1 = cljs.core.filter.call(null,inst_30820,files);
var inst_30822 = cljs.core.not_empty.call(null,inst_30821__$1);
var state_30956__$1 = (function (){var statearr_30968 = state_30956;
(statearr_30968[(20)] = inst_30819);

(statearr_30968[(19)] = inst_30821__$1);

(statearr_30968[(21)] = inst_30818);

return statearr_30968;
})();
if(cljs.core.truth_(inst_30822)){
var statearr_30969_31044 = state_30956__$1;
(statearr_30969_31044[(1)] = (2));

} else {
var statearr_30970_31045 = state_30956__$1;
(statearr_30970_31045[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (24))){
var state_30956__$1 = state_30956;
var statearr_30971_31046 = state_30956__$1;
(statearr_30971_31046[(2)] = null);

(statearr_30971_31046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (39))){
var state_30956__$1 = state_30956;
var statearr_30972_31047 = state_30956__$1;
(statearr_30972_31047[(2)] = null);

(statearr_30972_31047[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (4))){
var inst_30866 = (state_30956[(2)]);
var inst_30867 = (function (){return ((function (inst_30866,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files){
return (function (p1__30582_SHARP_){
var and__16470__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30582_SHARP_);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30582_SHARP_));
} else {
return and__16470__auto__;
}
});
;})(inst_30866,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files))
})();
var inst_30868 = cljs.core.filter.call(null,inst_30867,files);
var state_30956__$1 = (function (){var statearr_30973 = state_30956;
(statearr_30973[(22)] = inst_30866);

(statearr_30973[(23)] = inst_30868);

return statearr_30973;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_30974_31048 = state_30956__$1;
(statearr_30974_31048[(1)] = (16));

} else {
var statearr_30975_31049 = state_30956__$1;
(statearr_30975_31049[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (15))){
var inst_30856 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_30976_31050 = state_30956__$1;
(statearr_30976_31050[(2)] = inst_30856);

(statearr_30976_31050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (21))){
var state_30956__$1 = state_30956;
var statearr_30977_31051 = state_30956__$1;
(statearr_30977_31051[(2)] = null);

(statearr_30977_31051[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (31))){
var inst_30913 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_30978_31052 = state_30956__$1;
(statearr_30978_31052[(2)] = inst_30913);

(statearr_30978_31052[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (32))){
var inst_30901 = (state_30956[(24)]);
var inst_30918 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30901);
var state_30956__$1 = state_30956;
var statearr_30979_31053 = state_30956__$1;
(statearr_30979_31053[(2)] = inst_30918);

(statearr_30979_31053[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (40))){
var inst_30924 = (state_30956[(25)]);
var inst_30942 = (state_30956[(2)]);
var inst_30943 = cljs.core.not_empty.call(null,inst_30924);
var state_30956__$1 = (function (){var statearr_30980 = state_30956;
(statearr_30980[(26)] = inst_30942);

return statearr_30980;
})();
if(cljs.core.truth_(inst_30943)){
var statearr_30981_31054 = state_30956__$1;
(statearr_30981_31054[(1)] = (41));

} else {
var statearr_30982_31055 = state_30956__$1;
(statearr_30982_31055[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (33))){
var inst_30901 = (state_30956[(24)]);
var state_30956__$1 = state_30956;
var statearr_30983_31056 = state_30956__$1;
(statearr_30983_31056[(2)] = inst_30901);

(statearr_30983_31056[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (13))){
var inst_30842 = (state_30956[(27)]);
var inst_30846 = cljs.core.chunk_first.call(null,inst_30842);
var inst_30847 = cljs.core.chunk_rest.call(null,inst_30842);
var inst_30848 = cljs.core.count.call(null,inst_30846);
var inst_30829 = inst_30847;
var inst_30830 = inst_30846;
var inst_30831 = inst_30848;
var inst_30832 = (0);
var state_30956__$1 = (function (){var statearr_30984 = state_30956;
(statearr_30984[(7)] = inst_30830);

(statearr_30984[(8)] = inst_30829);

(statearr_30984[(9)] = inst_30831);

(statearr_30984[(10)] = inst_30832);

return statearr_30984;
})();
var statearr_30985_31057 = state_30956__$1;
(statearr_30985_31057[(2)] = null);

(statearr_30985_31057[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (22))){
var inst_30881 = (state_30956[(14)]);
var inst_30894 = (state_30956[(2)]);
var inst_30895 = cljs.core.not_empty.call(null,inst_30881);
var state_30956__$1 = (function (){var statearr_30986 = state_30956;
(statearr_30986[(28)] = inst_30894);

return statearr_30986;
})();
if(cljs.core.truth_(inst_30895)){
var statearr_30987_31058 = state_30956__$1;
(statearr_30987_31058[(1)] = (23));

} else {
var statearr_30988_31059 = state_30956__$1;
(statearr_30988_31059[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (36))){
var state_30956__$1 = state_30956;
var statearr_30989_31060 = state_30956__$1;
(statearr_30989_31060[(2)] = null);

(statearr_30989_31060[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (41))){
var inst_30924 = (state_30956[(25)]);
var inst_30945 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30924);
var inst_30946 = cljs.core.pr_str.call(null,inst_30945);
var inst_30947 = [cljs.core.str("not required: "),cljs.core.str(inst_30946)].join('');
var inst_30948 = figwheel.client.utils.log.call(null,inst_30947);
var state_30956__$1 = state_30956;
var statearr_30990_31061 = state_30956__$1;
(statearr_30990_31061[(2)] = inst_30948);

(statearr_30990_31061[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (43))){
var inst_30951 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_30991_31062 = state_30956__$1;
(statearr_30991_31062[(2)] = inst_30951);

(statearr_30991_31062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (29))){
var state_30956__$1 = state_30956;
var statearr_30992_31063 = state_30956__$1;
(statearr_30992_31063[(2)] = true);

(statearr_30992_31063[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (6))){
var inst_30863 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_30993_31064 = state_30956__$1;
(statearr_30993_31064[(2)] = inst_30863);

(statearr_30993_31064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (28))){
var inst_30916 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
if(cljs.core.truth_(inst_30916)){
var statearr_30994_31065 = state_30956__$1;
(statearr_30994_31065[(1)] = (32));

} else {
var statearr_30995_31066 = state_30956__$1;
(statearr_30995_31066[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (25))){
var inst_30954 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30956__$1,inst_30954);
} else {
if((state_val_30957 === (34))){
var inst_30922 = (state_30956[(29)]);
var inst_30921 = (state_30956[(2)]);
var inst_30922__$1 = cljs.core.get.call(null,inst_30921,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30923 = cljs.core.get.call(null,inst_30921,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_30924 = cljs.core.get.call(null,inst_30921,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30925 = cljs.core.not_empty.call(null,inst_30922__$1);
var state_30956__$1 = (function (){var statearr_30996 = state_30956;
(statearr_30996[(29)] = inst_30922__$1);

(statearr_30996[(25)] = inst_30924);

(statearr_30996[(30)] = inst_30923);

return statearr_30996;
})();
if(cljs.core.truth_(inst_30925)){
var statearr_30997_31067 = state_30956__$1;
(statearr_30997_31067[(1)] = (35));

} else {
var statearr_30998_31068 = state_30956__$1;
(statearr_30998_31068[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (17))){
var inst_30868 = (state_30956[(23)]);
var state_30956__$1 = state_30956;
var statearr_30999_31069 = state_30956__$1;
(statearr_30999_31069[(2)] = inst_30868);

(statearr_30999_31069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (3))){
var state_30956__$1 = state_30956;
var statearr_31000_31070 = state_30956__$1;
(statearr_31000_31070[(2)] = null);

(statearr_31000_31070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (12))){
var inst_30859 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_31001_31071 = state_30956__$1;
(statearr_31001_31071[(2)] = inst_30859);

(statearr_31001_31071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (2))){
var inst_30821 = (state_30956[(19)]);
var inst_30828 = cljs.core.seq.call(null,inst_30821);
var inst_30829 = inst_30828;
var inst_30830 = null;
var inst_30831 = (0);
var inst_30832 = (0);
var state_30956__$1 = (function (){var statearr_31002 = state_30956;
(statearr_31002[(7)] = inst_30830);

(statearr_31002[(8)] = inst_30829);

(statearr_31002[(9)] = inst_30831);

(statearr_31002[(10)] = inst_30832);

return statearr_31002;
})();
var statearr_31003_31072 = state_30956__$1;
(statearr_31003_31072[(2)] = null);

(statearr_31003_31072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (23))){
var inst_30879 = (state_30956[(12)]);
var inst_30874 = (state_30956[(13)]);
var inst_30881 = (state_30956[(14)]);
var inst_30878 = (state_30956[(15)]);
var inst_30901 = (state_30956[(24)]);
var inst_30875 = (state_30956[(16)]);
var inst_30897 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30900 = (function (){var all_files = inst_30874;
var files_SINGLEQUOTE_ = inst_30875;
var res_SINGLEQUOTE_ = inst_30878;
var res = inst_30879;
var files_not_loaded = inst_30881;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30879,inst_30874,inst_30881,inst_30878,inst_30901,inst_30875,inst_30897,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files){
return (function (p__30899){
var map__31004 = p__30899;
var map__31004__$1 = ((((!((map__31004 == null)))?((((map__31004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31004):map__31004);
var meta_data = cljs.core.get.call(null,map__31004__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30879,inst_30874,inst_30881,inst_30878,inst_30901,inst_30875,inst_30897,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files))
})();
var inst_30901__$1 = cljs.core.group_by.call(null,inst_30900,inst_30881);
var inst_30903 = (inst_30901__$1 == null);
var inst_30904 = cljs.core.not.call(null,inst_30903);
var state_30956__$1 = (function (){var statearr_31006 = state_30956;
(statearr_31006[(31)] = inst_30897);

(statearr_31006[(24)] = inst_30901__$1);

return statearr_31006;
})();
if(inst_30904){
var statearr_31007_31073 = state_30956__$1;
(statearr_31007_31073[(1)] = (26));

} else {
var statearr_31008_31074 = state_30956__$1;
(statearr_31008_31074[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (35))){
var inst_30922 = (state_30956[(29)]);
var inst_30927 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30922);
var inst_30928 = cljs.core.pr_str.call(null,inst_30927);
var inst_30929 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30928)].join('');
var inst_30930 = figwheel.client.utils.log.call(null,inst_30929);
var state_30956__$1 = state_30956;
var statearr_31009_31075 = state_30956__$1;
(statearr_31009_31075[(2)] = inst_30930);

(statearr_31009_31075[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (19))){
var inst_30879 = (state_30956[(12)]);
var inst_30874 = (state_30956[(13)]);
var inst_30878 = (state_30956[(15)]);
var inst_30875 = (state_30956[(16)]);
var inst_30878__$1 = (state_30956[(2)]);
var inst_30879__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30878__$1);
var inst_30880 = (function (){var all_files = inst_30874;
var files_SINGLEQUOTE_ = inst_30875;
var res_SINGLEQUOTE_ = inst_30878__$1;
var res = inst_30879__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_30879,inst_30874,inst_30878,inst_30875,inst_30878__$1,inst_30879__$1,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files){
return (function (p1__30584_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30584_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_30879,inst_30874,inst_30878,inst_30875,inst_30878__$1,inst_30879__$1,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files))
})();
var inst_30881 = cljs.core.filter.call(null,inst_30880,inst_30878__$1);
var inst_30882 = cljs.core.not_empty.call(null,inst_30879__$1);
var state_30956__$1 = (function (){var statearr_31010 = state_30956;
(statearr_31010[(12)] = inst_30879__$1);

(statearr_31010[(14)] = inst_30881);

(statearr_31010[(15)] = inst_30878__$1);

return statearr_31010;
})();
if(cljs.core.truth_(inst_30882)){
var statearr_31011_31076 = state_30956__$1;
(statearr_31011_31076[(1)] = (20));

} else {
var statearr_31012_31077 = state_30956__$1;
(statearr_31012_31077[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (11))){
var state_30956__$1 = state_30956;
var statearr_31013_31078 = state_30956__$1;
(statearr_31013_31078[(2)] = null);

(statearr_31013_31078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (9))){
var inst_30861 = (state_30956[(2)]);
var state_30956__$1 = state_30956;
var statearr_31014_31079 = state_30956__$1;
(statearr_31014_31079[(2)] = inst_30861);

(statearr_31014_31079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (5))){
var inst_30831 = (state_30956[(9)]);
var inst_30832 = (state_30956[(10)]);
var inst_30834 = (inst_30832 < inst_30831);
var inst_30835 = inst_30834;
var state_30956__$1 = state_30956;
if(cljs.core.truth_(inst_30835)){
var statearr_31015_31080 = state_30956__$1;
(statearr_31015_31080[(1)] = (7));

} else {
var statearr_31016_31081 = state_30956__$1;
(statearr_31016_31081[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (14))){
var inst_30842 = (state_30956[(27)]);
var inst_30851 = cljs.core.first.call(null,inst_30842);
var inst_30852 = figwheel.client.file_reloading.eval_body.call(null,inst_30851,opts);
var inst_30853 = cljs.core.next.call(null,inst_30842);
var inst_30829 = inst_30853;
var inst_30830 = null;
var inst_30831 = (0);
var inst_30832 = (0);
var state_30956__$1 = (function (){var statearr_31017 = state_30956;
(statearr_31017[(7)] = inst_30830);

(statearr_31017[(8)] = inst_30829);

(statearr_31017[(9)] = inst_30831);

(statearr_31017[(10)] = inst_30832);

(statearr_31017[(32)] = inst_30852);

return statearr_31017;
})();
var statearr_31018_31082 = state_30956__$1;
(statearr_31018_31082[(2)] = null);

(statearr_31018_31082[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (26))){
var inst_30901 = (state_30956[(24)]);
var inst_30906 = inst_30901.cljs$lang$protocol_mask$partition0$;
var inst_30907 = (inst_30906 & (64));
var inst_30908 = inst_30901.cljs$core$ISeq$;
var inst_30909 = (inst_30907) || (inst_30908);
var state_30956__$1 = state_30956;
if(cljs.core.truth_(inst_30909)){
var statearr_31019_31083 = state_30956__$1;
(statearr_31019_31083[(1)] = (29));

} else {
var statearr_31020_31084 = state_30956__$1;
(statearr_31020_31084[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (16))){
var inst_30868 = (state_30956[(23)]);
var inst_30870 = (function (){var all_files = inst_30868;
return ((function (all_files,inst_30868,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files){
return (function (p1__30583_SHARP_){
return cljs.core.update_in.call(null,p1__30583_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_30868,state_val_30957,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files))
})();
var inst_30871 = cljs.core.map.call(null,inst_30870,inst_30868);
var state_30956__$1 = state_30956;
var statearr_31021_31085 = state_30956__$1;
(statearr_31021_31085[(2)] = inst_30871);

(statearr_31021_31085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (38))){
var inst_30923 = (state_30956[(30)]);
var inst_30936 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30923);
var inst_30937 = cljs.core.pr_str.call(null,inst_30936);
var inst_30938 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_30937)].join('');
var inst_30939 = figwheel.client.utils.log.call(null,inst_30938);
var state_30956__$1 = state_30956;
var statearr_31022_31086 = state_30956__$1;
(statearr_31022_31086[(2)] = inst_30939);

(statearr_31022_31086[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (30))){
var state_30956__$1 = state_30956;
var statearr_31023_31087 = state_30956__$1;
(statearr_31023_31087[(2)] = false);

(statearr_31023_31087[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (10))){
var inst_30842 = (state_30956[(27)]);
var inst_30844 = cljs.core.chunked_seq_QMARK_.call(null,inst_30842);
var state_30956__$1 = state_30956;
if(inst_30844){
var statearr_31024_31088 = state_30956__$1;
(statearr_31024_31088[(1)] = (13));

} else {
var statearr_31025_31089 = state_30956__$1;
(statearr_31025_31089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (18))){
var inst_30874 = (state_30956[(13)]);
var inst_30875 = (state_30956[(16)]);
var inst_30874__$1 = (state_30956[(2)]);
var inst_30875__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_30874__$1);
var inst_30876 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30875__$1);
var state_30956__$1 = (function (){var statearr_31026 = state_30956;
(statearr_31026[(13)] = inst_30874__$1);

(statearr_31026[(16)] = inst_30875__$1);

return statearr_31026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30956__$1,(19),inst_30876);
} else {
if((state_val_30957 === (42))){
var state_30956__$1 = state_30956;
var statearr_31027_31090 = state_30956__$1;
(statearr_31027_31090[(2)] = null);

(statearr_31027_31090[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (37))){
var inst_30923 = (state_30956[(30)]);
var inst_30933 = (state_30956[(2)]);
var inst_30934 = cljs.core.not_empty.call(null,inst_30923);
var state_30956__$1 = (function (){var statearr_31028 = state_30956;
(statearr_31028[(33)] = inst_30933);

return statearr_31028;
})();
if(cljs.core.truth_(inst_30934)){
var statearr_31029_31091 = state_30956__$1;
(statearr_31029_31091[(1)] = (38));

} else {
var statearr_31030_31092 = state_30956__$1;
(statearr_31030_31092[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30957 === (8))){
var inst_30842 = (state_30956[(27)]);
var inst_30829 = (state_30956[(8)]);
var inst_30842__$1 = cljs.core.seq.call(null,inst_30829);
var state_30956__$1 = (function (){var statearr_31031 = state_30956;
(statearr_31031[(27)] = inst_30842__$1);

return statearr_31031;
})();
if(inst_30842__$1){
var statearr_31032_31093 = state_30956__$1;
(statearr_31032_31093[(1)] = (10));

} else {
var statearr_31033_31094 = state_30956__$1;
(statearr_31033_31094[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files))
;
return ((function (switch__21270__auto__,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto____0 = (function (){
var statearr_31037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31037[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto__);

(statearr_31037[(1)] = (1));

return statearr_31037;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto____1 = (function (state_30956){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_30956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e31038){if((e31038 instanceof Object)){
var ex__21274__auto__ = e31038;
var statearr_31039_31095 = state_30956;
(statearr_31039_31095[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31096 = state_30956;
state_30956 = G__31096;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto__ = function(state_30956){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto____1.call(this,state_30956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files))
})();
var state__21337__auto__ = (function (){var statearr_31040 = f__21336__auto__.call(null);
(statearr_31040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto__);

return statearr_31040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto__,map__30814,map__30814__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30815,map__30815__$1,msg,files))
);

return c__21335__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31099,link){
var map__31102 = p__31099;
var map__31102__$1 = ((((!((map__31102 == null)))?((((map__31102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31102):map__31102);
var file = cljs.core.get.call(null,map__31102__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31102,map__31102__$1,file){
return (function (p1__31097_SHARP_,p2__31098_SHARP_){
if(cljs.core._EQ_.call(null,p1__31097_SHARP_,p2__31098_SHARP_)){
return p1__31097_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31102,map__31102__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31108){
var map__31109 = p__31108;
var map__31109__$1 = ((((!((map__31109 == null)))?((((map__31109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31109):map__31109);
var match_length = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31104_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31104_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args31111 = [];
var len__17521__auto___31114 = arguments.length;
var i__17522__auto___31115 = (0);
while(true){
if((i__17522__auto___31115 < len__17521__auto___31114)){
args31111.push((arguments[i__17522__auto___31115]));

var G__31116 = (i__17522__auto___31115 + (1));
i__17522__auto___31115 = G__31116;
continue;
} else {
}
break;
}

var G__31113 = args31111.length;
switch (G__31113) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31111.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31118){
var map__31121 = p__31118;
var map__31121__$1 = ((((!((map__31121 == null)))?((((map__31121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31121):map__31121);
var f_data = map__31121__$1;
var file = cljs.core.get.call(null,map__31121__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__31121__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16482__auto__ = request_url;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31123,files_msg){
var map__31146 = p__31123;
var map__31146__$1 = ((((!((map__31146 == null)))?((((map__31146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31146):map__31146);
var opts = map__31146__$1;
var on_cssload = cljs.core.get.call(null,map__31146__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31148_31168 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31149_31169 = null;
var count__31150_31170 = (0);
var i__31151_31171 = (0);
while(true){
if((i__31151_31171 < count__31150_31170)){
var f_31172 = cljs.core._nth.call(null,chunk__31149_31169,i__31151_31171);
figwheel.client.file_reloading.reload_css_file.call(null,f_31172);

var G__31173 = seq__31148_31168;
var G__31174 = chunk__31149_31169;
var G__31175 = count__31150_31170;
var G__31176 = (i__31151_31171 + (1));
seq__31148_31168 = G__31173;
chunk__31149_31169 = G__31174;
count__31150_31170 = G__31175;
i__31151_31171 = G__31176;
continue;
} else {
var temp__4425__auto___31177 = cljs.core.seq.call(null,seq__31148_31168);
if(temp__4425__auto___31177){
var seq__31148_31178__$1 = temp__4425__auto___31177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31148_31178__$1)){
var c__17266__auto___31179 = cljs.core.chunk_first.call(null,seq__31148_31178__$1);
var G__31180 = cljs.core.chunk_rest.call(null,seq__31148_31178__$1);
var G__31181 = c__17266__auto___31179;
var G__31182 = cljs.core.count.call(null,c__17266__auto___31179);
var G__31183 = (0);
seq__31148_31168 = G__31180;
chunk__31149_31169 = G__31181;
count__31150_31170 = G__31182;
i__31151_31171 = G__31183;
continue;
} else {
var f_31184 = cljs.core.first.call(null,seq__31148_31178__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31184);

var G__31185 = cljs.core.next.call(null,seq__31148_31178__$1);
var G__31186 = null;
var G__31187 = (0);
var G__31188 = (0);
seq__31148_31168 = G__31185;
chunk__31149_31169 = G__31186;
count__31150_31170 = G__31187;
i__31151_31171 = G__31188;
continue;
}
} else {
}
}
break;
}

var c__21335__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto__,map__31146,map__31146__$1,opts,on_cssload){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto__,map__31146,map__31146__$1,opts,on_cssload){
return (function (state_31158){
var state_val_31159 = (state_31158[(1)]);
if((state_val_31159 === (1))){
var inst_31152 = cljs.core.async.timeout.call(null,(100));
var state_31158__$1 = state_31158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31158__$1,(2),inst_31152);
} else {
if((state_val_31159 === (2))){
var inst_31154 = (state_31158[(2)]);
var inst_31155 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31156 = on_cssload.call(null,inst_31155);
var state_31158__$1 = (function (){var statearr_31160 = state_31158;
(statearr_31160[(7)] = inst_31154);

return statearr_31160;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31158__$1,inst_31156);
} else {
return null;
}
}
});})(c__21335__auto__,map__31146,map__31146__$1,opts,on_cssload))
;
return ((function (switch__21270__auto__,c__21335__auto__,map__31146,map__31146__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto____0 = (function (){
var statearr_31164 = [null,null,null,null,null,null,null,null];
(statearr_31164[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto__);

(statearr_31164[(1)] = (1));

return statearr_31164;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto____1 = (function (state_31158){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_31158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e31165){if((e31165 instanceof Object)){
var ex__21274__auto__ = e31165;
var statearr_31166_31189 = state_31158;
(statearr_31166_31189[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31190 = state_31158;
state_31158 = G__31190;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto__ = function(state_31158){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto____1.call(this,state_31158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto__,map__31146,map__31146__$1,opts,on_cssload))
})();
var state__21337__auto__ = (function (){var statearr_31167 = f__21336__auto__.call(null);
(statearr_31167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto__);

return statearr_31167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto__,map__31146,map__31146__$1,opts,on_cssload))
);

return c__21335__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map