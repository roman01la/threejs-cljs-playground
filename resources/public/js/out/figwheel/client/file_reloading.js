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
return cljs.core.reduce.call(null,(function (p1__29348_SHARP_,p2__29349_SHARP_){
var and__16470__auto__ = p1__29348_SHARP_;
if(cljs.core.truth_(and__16470__auto__)){
return p2__29349_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29350){
var map__29351 = p__29350;
var map__29351__$1 = ((((!((map__29351 == null)))?((((map__29351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29351):map__29351);
var file = cljs.core.get.call(null,map__29351__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29353){
var map__29354 = p__29353;
var map__29354__$1 = ((((!((map__29354 == null)))?((((map__29354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29354):map__29354);
var namespace = cljs.core.get.call(null,map__29354__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e29356){if((e29356 instanceof Error)){
var e = e29356;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29356;

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
var args29357 = [];
var len__17521__auto___29360 = arguments.length;
var i__17522__auto___29361 = (0);
while(true){
if((i__17522__auto___29361 < len__17521__auto___29360)){
args29357.push((arguments[i__17522__auto___29361]));

var G__29362 = (i__17522__auto___29361 + (1));
i__17522__auto___29361 = G__29362;
continue;
} else {
}
break;
}

var G__29359 = args29357.length;
switch (G__29359) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29357.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29364,callback){
var map__29367 = p__29364;
var map__29367__$1 = ((((!((map__29367 == null)))?((((map__29367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29367):map__29367);
var file_msg = map__29367__$1;
var request_url = cljs.core.get.call(null,map__29367__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29367,map__29367__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29367,map__29367__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29369){
var map__29372 = p__29369;
var map__29372__$1 = ((((!((map__29372 == null)))?((((map__29372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29372):map__29372);
var file_msg = map__29372__$1;
var namespace = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__29372__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29374,callback){
var map__29377 = p__29374;
var map__29377__$1 = ((((!((map__29377 == null)))?((((map__29377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29377):map__29377);
var file_msg = map__29377__$1;
var request_url = cljs.core.get.call(null,map__29377__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29377__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20234__auto___29465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___29465,out){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___29465,out){
return (function (state_29447){
var state_val_29448 = (state_29447[(1)]);
if((state_val_29448 === (1))){
var inst_29425 = cljs.core.nth.call(null,files,(0),null);
var inst_29426 = cljs.core.nthnext.call(null,files,(1));
var inst_29427 = files;
var state_29447__$1 = (function (){var statearr_29449 = state_29447;
(statearr_29449[(7)] = inst_29427);

(statearr_29449[(8)] = inst_29426);

(statearr_29449[(9)] = inst_29425);

return statearr_29449;
})();
var statearr_29450_29466 = state_29447__$1;
(statearr_29450_29466[(2)] = null);

(statearr_29450_29466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (2))){
var inst_29427 = (state_29447[(7)]);
var inst_29430 = (state_29447[(10)]);
var inst_29430__$1 = cljs.core.nth.call(null,inst_29427,(0),null);
var inst_29431 = cljs.core.nthnext.call(null,inst_29427,(1));
var inst_29432 = (inst_29430__$1 == null);
var inst_29433 = cljs.core.not.call(null,inst_29432);
var state_29447__$1 = (function (){var statearr_29451 = state_29447;
(statearr_29451[(11)] = inst_29431);

(statearr_29451[(10)] = inst_29430__$1);

return statearr_29451;
})();
if(inst_29433){
var statearr_29452_29467 = state_29447__$1;
(statearr_29452_29467[(1)] = (4));

} else {
var statearr_29453_29468 = state_29447__$1;
(statearr_29453_29468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (3))){
var inst_29445 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29447__$1,inst_29445);
} else {
if((state_val_29448 === (4))){
var inst_29430 = (state_29447[(10)]);
var inst_29435 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29430);
var state_29447__$1 = state_29447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29447__$1,(7),inst_29435);
} else {
if((state_val_29448 === (5))){
var inst_29441 = cljs.core.async.close_BANG_.call(null,out);
var state_29447__$1 = state_29447;
var statearr_29454_29469 = state_29447__$1;
(statearr_29454_29469[(2)] = inst_29441);

(statearr_29454_29469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (6))){
var inst_29443 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
var statearr_29455_29470 = state_29447__$1;
(statearr_29455_29470[(2)] = inst_29443);

(statearr_29455_29470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (7))){
var inst_29431 = (state_29447[(11)]);
var inst_29437 = (state_29447[(2)]);
var inst_29438 = cljs.core.async.put_BANG_.call(null,out,inst_29437);
var inst_29427 = inst_29431;
var state_29447__$1 = (function (){var statearr_29456 = state_29447;
(statearr_29456[(7)] = inst_29427);

(statearr_29456[(12)] = inst_29438);

return statearr_29456;
})();
var statearr_29457_29471 = state_29447__$1;
(statearr_29457_29471[(2)] = null);

(statearr_29457_29471[(1)] = (2));


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
});})(c__20234__auto___29465,out))
;
return ((function (switch__20169__auto__,c__20234__auto___29465,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto____0 = (function (){
var statearr_29461 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29461[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto__);

(statearr_29461[(1)] = (1));

return statearr_29461;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto____1 = (function (state_29447){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_29447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e29462){if((e29462 instanceof Object)){
var ex__20173__auto__ = e29462;
var statearr_29463_29472 = state_29447;
(statearr_29463_29472[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29473 = state_29447;
state_29447 = G__29473;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto__ = function(state_29447){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto____1.call(this,state_29447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___29465,out))
})();
var state__20236__auto__ = (function (){var statearr_29464 = f__20235__auto__.call(null);
(statearr_29464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___29465);

return statearr_29464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___29465,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29474,p__29475){
var map__29480 = p__29474;
var map__29480__$1 = ((((!((map__29480 == null)))?((((map__29480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29480):map__29480);
var opts = map__29480__$1;
var url_rewriter = cljs.core.get.call(null,map__29480__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29481 = p__29475;
var map__29481__$1 = ((((!((map__29481 == null)))?((((map__29481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29481):map__29481);
var file_msg = map__29481__$1;
var file = cljs.core.get.call(null,map__29481__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29484,opts){
var map__29488 = p__29484;
var map__29488__$1 = ((((!((map__29488 == null)))?((((map__29488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29488):map__29488);
var eval_body__$1 = cljs.core.get.call(null,map__29488__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29488__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29490){var e = e29490;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29495,p__29496){
var map__29724 = p__29495;
var map__29724__$1 = ((((!((map__29724 == null)))?((((map__29724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29724):map__29724);
var opts = map__29724__$1;
var before_jsload = cljs.core.get.call(null,map__29724__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29724__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__29724__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__29725 = p__29496;
var map__29725__$1 = ((((!((map__29725 == null)))?((((map__29725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29725):map__29725);
var msg = map__29725__$1;
var files = cljs.core.get.call(null,map__29725__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files){
return (function (state_29866){
var state_val_29867 = (state_29866[(1)]);
if((state_val_29867 === (7))){
var inst_29739 = (state_29866[(7)]);
var inst_29741 = (state_29866[(8)]);
var inst_29742 = (state_29866[(9)]);
var inst_29740 = (state_29866[(10)]);
var inst_29747 = cljs.core._nth.call(null,inst_29740,inst_29742);
var inst_29748 = figwheel.client.file_reloading.eval_body.call(null,inst_29747,opts);
var inst_29749 = (inst_29742 + (1));
var tmp29868 = inst_29739;
var tmp29869 = inst_29741;
var tmp29870 = inst_29740;
var inst_29739__$1 = tmp29868;
var inst_29740__$1 = tmp29870;
var inst_29741__$1 = tmp29869;
var inst_29742__$1 = inst_29749;
var state_29866__$1 = (function (){var statearr_29871 = state_29866;
(statearr_29871[(7)] = inst_29739__$1);

(statearr_29871[(8)] = inst_29741__$1);

(statearr_29871[(9)] = inst_29742__$1);

(statearr_29871[(11)] = inst_29748);

(statearr_29871[(10)] = inst_29740__$1);

return statearr_29871;
})();
var statearr_29872_29951 = state_29866__$1;
(statearr_29872_29951[(2)] = null);

(statearr_29872_29951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (20))){
var inst_29788 = (state_29866[(12)]);
var inst_29791 = (state_29866[(13)]);
var inst_29789 = (state_29866[(14)]);
var inst_29785 = (state_29866[(15)]);
var inst_29784 = (state_29866[(16)]);
var inst_29794 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29796 = (function (){var all_files = inst_29784;
var files_SINGLEQUOTE_ = inst_29785;
var res_SINGLEQUOTE_ = inst_29788;
var res = inst_29789;
var files_not_loaded = inst_29791;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29788,inst_29791,inst_29789,inst_29785,inst_29784,inst_29794,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files){
return (function (p__29795){
var map__29873 = p__29795;
var map__29873__$1 = ((((!((map__29873 == null)))?((((map__29873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29873):map__29873);
var namespace = cljs.core.get.call(null,map__29873__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29873__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29788,inst_29791,inst_29789,inst_29785,inst_29784,inst_29794,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files))
})();
var inst_29797 = cljs.core.map.call(null,inst_29796,inst_29789);
var inst_29798 = cljs.core.pr_str.call(null,inst_29797);
var inst_29799 = figwheel.client.utils.log.call(null,inst_29798);
var inst_29800 = (function (){var all_files = inst_29784;
var files_SINGLEQUOTE_ = inst_29785;
var res_SINGLEQUOTE_ = inst_29788;
var res = inst_29789;
var files_not_loaded = inst_29791;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29788,inst_29791,inst_29789,inst_29785,inst_29784,inst_29794,inst_29796,inst_29797,inst_29798,inst_29799,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29788,inst_29791,inst_29789,inst_29785,inst_29784,inst_29794,inst_29796,inst_29797,inst_29798,inst_29799,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files))
})();
var inst_29801 = setTimeout(inst_29800,(10));
var state_29866__$1 = (function (){var statearr_29875 = state_29866;
(statearr_29875[(17)] = inst_29799);

(statearr_29875[(18)] = inst_29794);

return statearr_29875;
})();
var statearr_29876_29952 = state_29866__$1;
(statearr_29876_29952[(2)] = inst_29801);

(statearr_29876_29952[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (27))){
var state_29866__$1 = state_29866;
var statearr_29877_29953 = state_29866__$1;
(statearr_29877_29953[(2)] = false);

(statearr_29877_29953[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (1))){
var inst_29731 = (state_29866[(19)]);
var inst_29728 = before_jsload.call(null,files);
var inst_29729 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29730 = (function (){return ((function (inst_29731,inst_29728,inst_29729,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files){
return (function (p1__29491_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29491_SHARP_);
});
;})(inst_29731,inst_29728,inst_29729,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files))
})();
var inst_29731__$1 = cljs.core.filter.call(null,inst_29730,files);
var inst_29732 = cljs.core.not_empty.call(null,inst_29731__$1);
var state_29866__$1 = (function (){var statearr_29878 = state_29866;
(statearr_29878[(20)] = inst_29729);

(statearr_29878[(19)] = inst_29731__$1);

(statearr_29878[(21)] = inst_29728);

return statearr_29878;
})();
if(cljs.core.truth_(inst_29732)){
var statearr_29879_29954 = state_29866__$1;
(statearr_29879_29954[(1)] = (2));

} else {
var statearr_29880_29955 = state_29866__$1;
(statearr_29880_29955[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (24))){
var state_29866__$1 = state_29866;
var statearr_29881_29956 = state_29866__$1;
(statearr_29881_29956[(2)] = null);

(statearr_29881_29956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (39))){
var state_29866__$1 = state_29866;
var statearr_29882_29957 = state_29866__$1;
(statearr_29882_29957[(2)] = null);

(statearr_29882_29957[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (4))){
var inst_29776 = (state_29866[(2)]);
var inst_29777 = (function (){return ((function (inst_29776,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files){
return (function (p1__29492_SHARP_){
var and__16470__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29492_SHARP_);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29492_SHARP_));
} else {
return and__16470__auto__;
}
});
;})(inst_29776,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files))
})();
var inst_29778 = cljs.core.filter.call(null,inst_29777,files);
var state_29866__$1 = (function (){var statearr_29883 = state_29866;
(statearr_29883[(22)] = inst_29778);

(statearr_29883[(23)] = inst_29776);

return statearr_29883;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29884_29958 = state_29866__$1;
(statearr_29884_29958[(1)] = (16));

} else {
var statearr_29885_29959 = state_29866__$1;
(statearr_29885_29959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (15))){
var inst_29766 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
var statearr_29886_29960 = state_29866__$1;
(statearr_29886_29960[(2)] = inst_29766);

(statearr_29886_29960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (21))){
var state_29866__$1 = state_29866;
var statearr_29887_29961 = state_29866__$1;
(statearr_29887_29961[(2)] = null);

(statearr_29887_29961[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (31))){
var inst_29823 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
var statearr_29888_29962 = state_29866__$1;
(statearr_29888_29962[(2)] = inst_29823);

(statearr_29888_29962[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (32))){
var inst_29811 = (state_29866[(24)]);
var inst_29828 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29811);
var state_29866__$1 = state_29866;
var statearr_29889_29963 = state_29866__$1;
(statearr_29889_29963[(2)] = inst_29828);

(statearr_29889_29963[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (40))){
var inst_29834 = (state_29866[(25)]);
var inst_29852 = (state_29866[(2)]);
var inst_29853 = cljs.core.not_empty.call(null,inst_29834);
var state_29866__$1 = (function (){var statearr_29890 = state_29866;
(statearr_29890[(26)] = inst_29852);

return statearr_29890;
})();
if(cljs.core.truth_(inst_29853)){
var statearr_29891_29964 = state_29866__$1;
(statearr_29891_29964[(1)] = (41));

} else {
var statearr_29892_29965 = state_29866__$1;
(statearr_29892_29965[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (33))){
var inst_29811 = (state_29866[(24)]);
var state_29866__$1 = state_29866;
var statearr_29893_29966 = state_29866__$1;
(statearr_29893_29966[(2)] = inst_29811);

(statearr_29893_29966[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (13))){
var inst_29752 = (state_29866[(27)]);
var inst_29756 = cljs.core.chunk_first.call(null,inst_29752);
var inst_29757 = cljs.core.chunk_rest.call(null,inst_29752);
var inst_29758 = cljs.core.count.call(null,inst_29756);
var inst_29739 = inst_29757;
var inst_29740 = inst_29756;
var inst_29741 = inst_29758;
var inst_29742 = (0);
var state_29866__$1 = (function (){var statearr_29894 = state_29866;
(statearr_29894[(7)] = inst_29739);

(statearr_29894[(8)] = inst_29741);

(statearr_29894[(9)] = inst_29742);

(statearr_29894[(10)] = inst_29740);

return statearr_29894;
})();
var statearr_29895_29967 = state_29866__$1;
(statearr_29895_29967[(2)] = null);

(statearr_29895_29967[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (22))){
var inst_29791 = (state_29866[(13)]);
var inst_29804 = (state_29866[(2)]);
var inst_29805 = cljs.core.not_empty.call(null,inst_29791);
var state_29866__$1 = (function (){var statearr_29896 = state_29866;
(statearr_29896[(28)] = inst_29804);

return statearr_29896;
})();
if(cljs.core.truth_(inst_29805)){
var statearr_29897_29968 = state_29866__$1;
(statearr_29897_29968[(1)] = (23));

} else {
var statearr_29898_29969 = state_29866__$1;
(statearr_29898_29969[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (36))){
var state_29866__$1 = state_29866;
var statearr_29899_29970 = state_29866__$1;
(statearr_29899_29970[(2)] = null);

(statearr_29899_29970[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (41))){
var inst_29834 = (state_29866[(25)]);
var inst_29855 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29834);
var inst_29856 = cljs.core.pr_str.call(null,inst_29855);
var inst_29857 = [cljs.core.str("not required: "),cljs.core.str(inst_29856)].join('');
var inst_29858 = figwheel.client.utils.log.call(null,inst_29857);
var state_29866__$1 = state_29866;
var statearr_29900_29971 = state_29866__$1;
(statearr_29900_29971[(2)] = inst_29858);

(statearr_29900_29971[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (43))){
var inst_29861 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
var statearr_29901_29972 = state_29866__$1;
(statearr_29901_29972[(2)] = inst_29861);

(statearr_29901_29972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (29))){
var state_29866__$1 = state_29866;
var statearr_29902_29973 = state_29866__$1;
(statearr_29902_29973[(2)] = true);

(statearr_29902_29973[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (6))){
var inst_29773 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
var statearr_29903_29974 = state_29866__$1;
(statearr_29903_29974[(2)] = inst_29773);

(statearr_29903_29974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (28))){
var inst_29826 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
if(cljs.core.truth_(inst_29826)){
var statearr_29904_29975 = state_29866__$1;
(statearr_29904_29975[(1)] = (32));

} else {
var statearr_29905_29976 = state_29866__$1;
(statearr_29905_29976[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (25))){
var inst_29864 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29866__$1,inst_29864);
} else {
if((state_val_29867 === (34))){
var inst_29832 = (state_29866[(29)]);
var inst_29831 = (state_29866[(2)]);
var inst_29832__$1 = cljs.core.get.call(null,inst_29831,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29833 = cljs.core.get.call(null,inst_29831,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29834 = cljs.core.get.call(null,inst_29831,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29835 = cljs.core.not_empty.call(null,inst_29832__$1);
var state_29866__$1 = (function (){var statearr_29906 = state_29866;
(statearr_29906[(29)] = inst_29832__$1);

(statearr_29906[(30)] = inst_29833);

(statearr_29906[(25)] = inst_29834);

return statearr_29906;
})();
if(cljs.core.truth_(inst_29835)){
var statearr_29907_29977 = state_29866__$1;
(statearr_29907_29977[(1)] = (35));

} else {
var statearr_29908_29978 = state_29866__$1;
(statearr_29908_29978[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (17))){
var inst_29778 = (state_29866[(22)]);
var state_29866__$1 = state_29866;
var statearr_29909_29979 = state_29866__$1;
(statearr_29909_29979[(2)] = inst_29778);

(statearr_29909_29979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (3))){
var state_29866__$1 = state_29866;
var statearr_29910_29980 = state_29866__$1;
(statearr_29910_29980[(2)] = null);

(statearr_29910_29980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (12))){
var inst_29769 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
var statearr_29911_29981 = state_29866__$1;
(statearr_29911_29981[(2)] = inst_29769);

(statearr_29911_29981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (2))){
var inst_29731 = (state_29866[(19)]);
var inst_29738 = cljs.core.seq.call(null,inst_29731);
var inst_29739 = inst_29738;
var inst_29740 = null;
var inst_29741 = (0);
var inst_29742 = (0);
var state_29866__$1 = (function (){var statearr_29912 = state_29866;
(statearr_29912[(7)] = inst_29739);

(statearr_29912[(8)] = inst_29741);

(statearr_29912[(9)] = inst_29742);

(statearr_29912[(10)] = inst_29740);

return statearr_29912;
})();
var statearr_29913_29982 = state_29866__$1;
(statearr_29913_29982[(2)] = null);

(statearr_29913_29982[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (23))){
var inst_29788 = (state_29866[(12)]);
var inst_29791 = (state_29866[(13)]);
var inst_29789 = (state_29866[(14)]);
var inst_29785 = (state_29866[(15)]);
var inst_29784 = (state_29866[(16)]);
var inst_29811 = (state_29866[(24)]);
var inst_29807 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29810 = (function (){var all_files = inst_29784;
var files_SINGLEQUOTE_ = inst_29785;
var res_SINGLEQUOTE_ = inst_29788;
var res = inst_29789;
var files_not_loaded = inst_29791;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29788,inst_29791,inst_29789,inst_29785,inst_29784,inst_29811,inst_29807,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files){
return (function (p__29809){
var map__29914 = p__29809;
var map__29914__$1 = ((((!((map__29914 == null)))?((((map__29914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29914):map__29914);
var meta_data = cljs.core.get.call(null,map__29914__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29788,inst_29791,inst_29789,inst_29785,inst_29784,inst_29811,inst_29807,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files))
})();
var inst_29811__$1 = cljs.core.group_by.call(null,inst_29810,inst_29791);
var inst_29813 = (inst_29811__$1 == null);
var inst_29814 = cljs.core.not.call(null,inst_29813);
var state_29866__$1 = (function (){var statearr_29916 = state_29866;
(statearr_29916[(31)] = inst_29807);

(statearr_29916[(24)] = inst_29811__$1);

return statearr_29916;
})();
if(inst_29814){
var statearr_29917_29983 = state_29866__$1;
(statearr_29917_29983[(1)] = (26));

} else {
var statearr_29918_29984 = state_29866__$1;
(statearr_29918_29984[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (35))){
var inst_29832 = (state_29866[(29)]);
var inst_29837 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29832);
var inst_29838 = cljs.core.pr_str.call(null,inst_29837);
var inst_29839 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29838)].join('');
var inst_29840 = figwheel.client.utils.log.call(null,inst_29839);
var state_29866__$1 = state_29866;
var statearr_29919_29985 = state_29866__$1;
(statearr_29919_29985[(2)] = inst_29840);

(statearr_29919_29985[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (19))){
var inst_29788 = (state_29866[(12)]);
var inst_29789 = (state_29866[(14)]);
var inst_29785 = (state_29866[(15)]);
var inst_29784 = (state_29866[(16)]);
var inst_29788__$1 = (state_29866[(2)]);
var inst_29789__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29788__$1);
var inst_29790 = (function (){var all_files = inst_29784;
var files_SINGLEQUOTE_ = inst_29785;
var res_SINGLEQUOTE_ = inst_29788__$1;
var res = inst_29789__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29788,inst_29789,inst_29785,inst_29784,inst_29788__$1,inst_29789__$1,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files){
return (function (p1__29494_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29494_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29788,inst_29789,inst_29785,inst_29784,inst_29788__$1,inst_29789__$1,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files))
})();
var inst_29791 = cljs.core.filter.call(null,inst_29790,inst_29788__$1);
var inst_29792 = cljs.core.not_empty.call(null,inst_29789__$1);
var state_29866__$1 = (function (){var statearr_29920 = state_29866;
(statearr_29920[(12)] = inst_29788__$1);

(statearr_29920[(13)] = inst_29791);

(statearr_29920[(14)] = inst_29789__$1);

return statearr_29920;
})();
if(cljs.core.truth_(inst_29792)){
var statearr_29921_29986 = state_29866__$1;
(statearr_29921_29986[(1)] = (20));

} else {
var statearr_29922_29987 = state_29866__$1;
(statearr_29922_29987[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (11))){
var state_29866__$1 = state_29866;
var statearr_29923_29988 = state_29866__$1;
(statearr_29923_29988[(2)] = null);

(statearr_29923_29988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (9))){
var inst_29771 = (state_29866[(2)]);
var state_29866__$1 = state_29866;
var statearr_29924_29989 = state_29866__$1;
(statearr_29924_29989[(2)] = inst_29771);

(statearr_29924_29989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (5))){
var inst_29741 = (state_29866[(8)]);
var inst_29742 = (state_29866[(9)]);
var inst_29744 = (inst_29742 < inst_29741);
var inst_29745 = inst_29744;
var state_29866__$1 = state_29866;
if(cljs.core.truth_(inst_29745)){
var statearr_29925_29990 = state_29866__$1;
(statearr_29925_29990[(1)] = (7));

} else {
var statearr_29926_29991 = state_29866__$1;
(statearr_29926_29991[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (14))){
var inst_29752 = (state_29866[(27)]);
var inst_29761 = cljs.core.first.call(null,inst_29752);
var inst_29762 = figwheel.client.file_reloading.eval_body.call(null,inst_29761,opts);
var inst_29763 = cljs.core.next.call(null,inst_29752);
var inst_29739 = inst_29763;
var inst_29740 = null;
var inst_29741 = (0);
var inst_29742 = (0);
var state_29866__$1 = (function (){var statearr_29927 = state_29866;
(statearr_29927[(7)] = inst_29739);

(statearr_29927[(8)] = inst_29741);

(statearr_29927[(32)] = inst_29762);

(statearr_29927[(9)] = inst_29742);

(statearr_29927[(10)] = inst_29740);

return statearr_29927;
})();
var statearr_29928_29992 = state_29866__$1;
(statearr_29928_29992[(2)] = null);

(statearr_29928_29992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (26))){
var inst_29811 = (state_29866[(24)]);
var inst_29816 = inst_29811.cljs$lang$protocol_mask$partition0$;
var inst_29817 = (inst_29816 & (64));
var inst_29818 = inst_29811.cljs$core$ISeq$;
var inst_29819 = (inst_29817) || (inst_29818);
var state_29866__$1 = state_29866;
if(cljs.core.truth_(inst_29819)){
var statearr_29929_29993 = state_29866__$1;
(statearr_29929_29993[(1)] = (29));

} else {
var statearr_29930_29994 = state_29866__$1;
(statearr_29930_29994[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (16))){
var inst_29778 = (state_29866[(22)]);
var inst_29780 = (function (){var all_files = inst_29778;
return ((function (all_files,inst_29778,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files){
return (function (p1__29493_SHARP_){
return cljs.core.update_in.call(null,p1__29493_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29778,state_val_29867,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files))
})();
var inst_29781 = cljs.core.map.call(null,inst_29780,inst_29778);
var state_29866__$1 = state_29866;
var statearr_29931_29995 = state_29866__$1;
(statearr_29931_29995[(2)] = inst_29781);

(statearr_29931_29995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (38))){
var inst_29833 = (state_29866[(30)]);
var inst_29846 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29833);
var inst_29847 = cljs.core.pr_str.call(null,inst_29846);
var inst_29848 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29847)].join('');
var inst_29849 = figwheel.client.utils.log.call(null,inst_29848);
var state_29866__$1 = state_29866;
var statearr_29932_29996 = state_29866__$1;
(statearr_29932_29996[(2)] = inst_29849);

(statearr_29932_29996[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (30))){
var state_29866__$1 = state_29866;
var statearr_29933_29997 = state_29866__$1;
(statearr_29933_29997[(2)] = false);

(statearr_29933_29997[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (10))){
var inst_29752 = (state_29866[(27)]);
var inst_29754 = cljs.core.chunked_seq_QMARK_.call(null,inst_29752);
var state_29866__$1 = state_29866;
if(inst_29754){
var statearr_29934_29998 = state_29866__$1;
(statearr_29934_29998[(1)] = (13));

} else {
var statearr_29935_29999 = state_29866__$1;
(statearr_29935_29999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (18))){
var inst_29785 = (state_29866[(15)]);
var inst_29784 = (state_29866[(16)]);
var inst_29784__$1 = (state_29866[(2)]);
var inst_29785__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29784__$1);
var inst_29786 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29785__$1);
var state_29866__$1 = (function (){var statearr_29936 = state_29866;
(statearr_29936[(15)] = inst_29785__$1);

(statearr_29936[(16)] = inst_29784__$1);

return statearr_29936;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29866__$1,(19),inst_29786);
} else {
if((state_val_29867 === (42))){
var state_29866__$1 = state_29866;
var statearr_29937_30000 = state_29866__$1;
(statearr_29937_30000[(2)] = null);

(statearr_29937_30000[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (37))){
var inst_29833 = (state_29866[(30)]);
var inst_29843 = (state_29866[(2)]);
var inst_29844 = cljs.core.not_empty.call(null,inst_29833);
var state_29866__$1 = (function (){var statearr_29938 = state_29866;
(statearr_29938[(33)] = inst_29843);

return statearr_29938;
})();
if(cljs.core.truth_(inst_29844)){
var statearr_29939_30001 = state_29866__$1;
(statearr_29939_30001[(1)] = (38));

} else {
var statearr_29940_30002 = state_29866__$1;
(statearr_29940_30002[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29867 === (8))){
var inst_29739 = (state_29866[(7)]);
var inst_29752 = (state_29866[(27)]);
var inst_29752__$1 = cljs.core.seq.call(null,inst_29739);
var state_29866__$1 = (function (){var statearr_29941 = state_29866;
(statearr_29941[(27)] = inst_29752__$1);

return statearr_29941;
})();
if(inst_29752__$1){
var statearr_29942_30003 = state_29866__$1;
(statearr_29942_30003[(1)] = (10));

} else {
var statearr_29943_30004 = state_29866__$1;
(statearr_29943_30004[(1)] = (11));

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
});})(c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files))
;
return ((function (switch__20169__auto__,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto____0 = (function (){
var statearr_29947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29947[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto__);

(statearr_29947[(1)] = (1));

return statearr_29947;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto____1 = (function (state_29866){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_29866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e29948){if((e29948 instanceof Object)){
var ex__20173__auto__ = e29948;
var statearr_29949_30005 = state_29866;
(statearr_29949_30005[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30006 = state_29866;
state_29866 = G__30006;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto__ = function(state_29866){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto____1.call(this,state_29866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files))
})();
var state__20236__auto__ = (function (){var statearr_29950 = f__20235__auto__.call(null);
(statearr_29950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto__);

return statearr_29950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto__,map__29724,map__29724__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29725,map__29725__$1,msg,files))
);

return c__20234__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30009,link){
var map__30012 = p__30009;
var map__30012__$1 = ((((!((map__30012 == null)))?((((map__30012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30012):map__30012);
var file = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30012,map__30012__$1,file){
return (function (p1__30007_SHARP_,p2__30008_SHARP_){
if(cljs.core._EQ_.call(null,p1__30007_SHARP_,p2__30008_SHARP_)){
return p1__30007_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30012,map__30012__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30018){
var map__30019 = p__30018;
var map__30019__$1 = ((((!((map__30019 == null)))?((((map__30019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30019):map__30019);
var match_length = cljs.core.get.call(null,map__30019__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30019__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30014_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30014_SHARP_);
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
var args30021 = [];
var len__17521__auto___30024 = arguments.length;
var i__17522__auto___30025 = (0);
while(true){
if((i__17522__auto___30025 < len__17521__auto___30024)){
args30021.push((arguments[i__17522__auto___30025]));

var G__30026 = (i__17522__auto___30025 + (1));
i__17522__auto___30025 = G__30026;
continue;
} else {
}
break;
}

var G__30023 = args30021.length;
switch (G__30023) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30021.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30028){
var map__30031 = p__30028;
var map__30031__$1 = ((((!((map__30031 == null)))?((((map__30031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30031):map__30031);
var f_data = map__30031__$1;
var file = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__30031__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30033,files_msg){
var map__30056 = p__30033;
var map__30056__$1 = ((((!((map__30056 == null)))?((((map__30056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30056):map__30056);
var opts = map__30056__$1;
var on_cssload = cljs.core.get.call(null,map__30056__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30058_30078 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30059_30079 = null;
var count__30060_30080 = (0);
var i__30061_30081 = (0);
while(true){
if((i__30061_30081 < count__30060_30080)){
var f_30082 = cljs.core._nth.call(null,chunk__30059_30079,i__30061_30081);
figwheel.client.file_reloading.reload_css_file.call(null,f_30082);

var G__30083 = seq__30058_30078;
var G__30084 = chunk__30059_30079;
var G__30085 = count__30060_30080;
var G__30086 = (i__30061_30081 + (1));
seq__30058_30078 = G__30083;
chunk__30059_30079 = G__30084;
count__30060_30080 = G__30085;
i__30061_30081 = G__30086;
continue;
} else {
var temp__4425__auto___30087 = cljs.core.seq.call(null,seq__30058_30078);
if(temp__4425__auto___30087){
var seq__30058_30088__$1 = temp__4425__auto___30087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30058_30088__$1)){
var c__17266__auto___30089 = cljs.core.chunk_first.call(null,seq__30058_30088__$1);
var G__30090 = cljs.core.chunk_rest.call(null,seq__30058_30088__$1);
var G__30091 = c__17266__auto___30089;
var G__30092 = cljs.core.count.call(null,c__17266__auto___30089);
var G__30093 = (0);
seq__30058_30078 = G__30090;
chunk__30059_30079 = G__30091;
count__30060_30080 = G__30092;
i__30061_30081 = G__30093;
continue;
} else {
var f_30094 = cljs.core.first.call(null,seq__30058_30088__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30094);

var G__30095 = cljs.core.next.call(null,seq__30058_30088__$1);
var G__30096 = null;
var G__30097 = (0);
var G__30098 = (0);
seq__30058_30078 = G__30095;
chunk__30059_30079 = G__30096;
count__30060_30080 = G__30097;
i__30061_30081 = G__30098;
continue;
}
} else {
}
}
break;
}

var c__20234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto__,map__30056,map__30056__$1,opts,on_cssload){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto__,map__30056,map__30056__$1,opts,on_cssload){
return (function (state_30068){
var state_val_30069 = (state_30068[(1)]);
if((state_val_30069 === (1))){
var inst_30062 = cljs.core.async.timeout.call(null,(100));
var state_30068__$1 = state_30068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30068__$1,(2),inst_30062);
} else {
if((state_val_30069 === (2))){
var inst_30064 = (state_30068[(2)]);
var inst_30065 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30066 = on_cssload.call(null,inst_30065);
var state_30068__$1 = (function (){var statearr_30070 = state_30068;
(statearr_30070[(7)] = inst_30064);

return statearr_30070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30068__$1,inst_30066);
} else {
return null;
}
}
});})(c__20234__auto__,map__30056,map__30056__$1,opts,on_cssload))
;
return ((function (switch__20169__auto__,c__20234__auto__,map__30056,map__30056__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto____0 = (function (){
var statearr_30074 = [null,null,null,null,null,null,null,null];
(statearr_30074[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto__);

(statearr_30074[(1)] = (1));

return statearr_30074;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto____1 = (function (state_30068){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_30068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e30075){if((e30075 instanceof Object)){
var ex__20173__auto__ = e30075;
var statearr_30076_30099 = state_30068;
(statearr_30076_30099[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30100 = state_30068;
state_30068 = G__30100;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto__ = function(state_30068){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto____1.call(this,state_30068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto__,map__30056,map__30056__$1,opts,on_cssload))
})();
var state__20236__auto__ = (function (){var statearr_30077 = f__20235__auto__.call(null);
(statearr_30077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto__);

return statearr_30077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto__,map__30056,map__30056__$1,opts,on_cssload))
);

return c__20234__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440195221273