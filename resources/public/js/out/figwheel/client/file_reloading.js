// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
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
return figwheel.client.utils.dispatch_custom_event("figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event("figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30370_SHARP_,p2__30371_SHARP_){
var and__16470__auto__ = p1__30370_SHARP_;
if(cljs.core.truth_(and__16470__auto__)){
return p2__30371_SHARP_;
} else {
return and__16470__auto__;
}
}),true,cljs.core.map.cljs$core$IFn$_invoke$arity$2(pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16482__auto__ = (cljs.core.map_QMARK_(m)) && (typeof cljs.core.constant$keyword$namespace.cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof cljs.core.constant$keyword$file.cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(m),cljs.core.constant$keyword$namespace));
if(or__16482__auto__){
return or__16482__auto__;
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Error not namespace-file-map",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0))], 0));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace(ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path()),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file(ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_(cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys(gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16482__auto__ = !(cljs.core.contains_QMARK_(cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16482__auto__){
return or__16482__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__16482__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

var G__30373 = figwheel.client.file_reloading.resolve_ns(name);
return (figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1(G__30373) : figwheel.client.file_reloading.reload_file_STAR_.call(null,G__30373));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17376__auto__ = (function (){var G__30374 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30374) : cljs.core.atom.call(null,G__30374));
})();
var prefer_table__17377__auto__ = (function (){var G__30375 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30375) : cljs.core.atom.call(null,G__30375));
})();
var method_cache__17378__auto__ = (function (){var G__30376 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30376) : cljs.core.atom.call(null,G__30376));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__30377 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30377) : cljs.core.atom.call(null,G__30377));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("figwheel.client.file-reloading","resolve-url"),cljs.core.constant$keyword$type,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
figwheel.client.file_reloading.resolve_url.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (p__30378){
var map__30379 = p__30378;
var map__30379__$1 = ((((!((map__30379 == null)))?((((map__30379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30379):map__30379);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30379__$1,cljs.core.constant$keyword$file);
return file;
}));
figwheel.client.file_reloading.resolve_url.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$namespace,(function (p__30381){
var map__30382 = p__30381;
var map__30382__$1 = ((((!((map__30382 == null)))?((((map__30382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30382):map__30382);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30382__$1,cljs.core.constant$keyword$namespace);

return figwheel.client.file_reloading.resolve_ns(namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17376__auto__ = (function (){var G__30384 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30384) : cljs.core.atom.call(null,G__30384));
})();
var prefer_table__17377__auto__ = (function (){var G__30385 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30385) : cljs.core.atom.call(null,G__30385));
})();
var method_cache__17378__auto__ = (function (){var G__30386 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30386) : cljs.core.atom.call(null,G__30386));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__30387 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30387) : cljs.core.atom.call(null,G__30387));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
figwheel.client.file_reloading.reload_base.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$node,(function (request_url,callback){

var root = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

var G__30389 = (function (){try{return require(path);
}catch (e30390){if((e30390 instanceof Error)){
var e = e30390;
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$error,[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$error,e.stack);

return false;
} else {
throw e30390;

}
}})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__30389) : callback.call(null,G__30389));
}));
figwheel.client.file_reloading.reload_base.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$html,(function (request_url,callback){

var deferred = (function (){var G__30391 = figwheel.client.file_reloading.add_cache_buster(request_url);
var G__30392 = {"cleanupWhenDone": true};
return goog.net.jsloader.load(G__30391,G__30392);
})();
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var args30393 = [];
var len__17521__auto___30396 = arguments.length;
var i__17522__auto___30397 = (0);
while(true){
if((i__17522__auto___30397 < len__17521__auto___30396)){
args30393.push((arguments[i__17522__auto___30397]));

var G__30398 = (i__17522__auto___30397 + (1));
i__17522__auto___30397 = G__30398;
continue;
} else {
}
break;
}

var G__30395 = args30393.length;
switch (G__30395) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30393.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return (figwheel.client.file_reloading.reload_base.cljs$core$IFn$_invoke$arity$2 ? figwheel.client.file_reloading.reload_base.cljs$core$IFn$_invoke$arity$2(request_url,callback) : figwheel.client.file_reloading.reload_base.call(null,request_url,callback));
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2(request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30400,callback){
var map__30403 = p__30400;
var map__30403__$1 = ((((!((map__30403 == null)))?((((map__30403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30403):map__30403);
var file_msg = map__30403__$1;
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30403__$1,cljs.core.constant$keyword$request_DASH_url);

figwheel.client.utils.debug_prn([cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2(request_url,((function (map__30403,map__30403__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn([cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file_msg,cljs.core.constant$keyword$loaded_DASH_file,true)], null));
} else {
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$error,[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30403,map__30403__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30405){
var map__30408 = p__30405;
var map__30408__$1 = ((((!((map__30408 == null)))?((((map__30408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30408):map__30408);
var file_msg = map__30408__$1;
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30408__$1,cljs.core.constant$keyword$namespace);
var meta_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30408__$1,cljs.core.constant$keyword$meta_DASH_data);

var meta_data__$1 = (function (){var or__16482__auto__ = meta_data;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16470__auto__ = cljs.core.not(cljs.core.constant$keyword$figwheel_DASH_no_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16470__auto__){
var or__16482__auto__ = cljs.core.constant$keyword$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var or__16482__auto____$1 = cljs.core.constant$keyword$figwheel_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16482__auto____$1)){
return or__16482__auto____$1;
} else {
var and__16470__auto____$1 = cljs.core.contains_QMARK_(cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16470__auto____$1){
var or__16482__auto____$2 = !(cljs.core.contains_QMARK_(meta_data__$1,cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk));
if(or__16482__auto____$2){
return or__16482__auto____$2;
} else {
return cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk.cljs$core$IFn$_invoke$arity$1(meta_data__$1);
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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30410,callback){
var map__30413 = p__30410;
var map__30413__$1 = ((((!((map__30413 == null)))?((((map__30413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30413):map__30413);
var file_msg = map__30413__$1;
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30413__$1,cljs.core.constant$keyword$request_DASH_url);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30413__$1,cljs.core.constant$keyword$namespace);

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_(file_msg))){
return figwheel.client.file_reloading.reload_file(file_msg,callback);
} else {
figwheel.client.utils.debug_prn([cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__30417_30419 = ((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload(file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base();

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,url);

return cljs.core.async.close_BANG_(out);
});})(out))
);
});})(out))
;
var G__30418_30420 = (0);
setTimeout(G__30417_30419,G__30418_30420);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__20550__auto___30507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___30507,out){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___30507,out){
return (function (state_30489){
var state_val_30490 = (state_30489[(1)]);
if((state_val_30490 === (1))){
var inst_30467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(files,(0),null);
var inst_30468 = cljs.core.nthnext(files,(1));
var inst_30469 = files;
var state_30489__$1 = (function (){var statearr_30491 = state_30489;
(statearr_30491[(7)] = inst_30467);

(statearr_30491[(8)] = inst_30468);

(statearr_30491[(9)] = inst_30469);

return statearr_30491;
})();
var statearr_30492_30508 = state_30489__$1;
(statearr_30492_30508[(2)] = null);

(statearr_30492_30508[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30490 === (2))){
var inst_30472 = (state_30489[(10)]);
var inst_30469 = (state_30489[(9)]);
var inst_30472__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30469,(0),null);
var inst_30473 = cljs.core.nthnext(inst_30469,(1));
var inst_30474 = (inst_30472__$1 == null);
var inst_30475 = cljs.core.not(inst_30474);
var state_30489__$1 = (function (){var statearr_30493 = state_30489;
(statearr_30493[(11)] = inst_30473);

(statearr_30493[(10)] = inst_30472__$1);

return statearr_30493;
})();
if(inst_30475){
var statearr_30494_30509 = state_30489__$1;
(statearr_30494_30509[(1)] = (4));

} else {
var statearr_30495_30510 = state_30489__$1;
(statearr_30495_30510[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30490 === (3))){
var inst_30487 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30489__$1,inst_30487);
} else {
if((state_val_30490 === (4))){
var inst_30472 = (state_30489[(10)]);
var inst_30477 = figwheel.client.file_reloading.reload_js_file(inst_30472);
var state_30489__$1 = state_30489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30489__$1,(7),inst_30477);
} else {
if((state_val_30490 === (5))){
var inst_30483 = cljs.core.async.close_BANG_(out);
var state_30489__$1 = state_30489;
var statearr_30496_30511 = state_30489__$1;
(statearr_30496_30511[(2)] = inst_30483);

(statearr_30496_30511[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30490 === (6))){
var inst_30485 = (state_30489[(2)]);
var state_30489__$1 = state_30489;
var statearr_30497_30512 = state_30489__$1;
(statearr_30497_30512[(2)] = inst_30485);

(statearr_30497_30512[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30490 === (7))){
var inst_30473 = (state_30489[(11)]);
var inst_30479 = (state_30489[(2)]);
var inst_30480 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,inst_30479);
var inst_30469 = inst_30473;
var state_30489__$1 = (function (){var statearr_30498 = state_30489;
(statearr_30498[(12)] = inst_30480);

(statearr_30498[(9)] = inst_30469);

return statearr_30498;
})();
var statearr_30499_30513 = state_30489__$1;
(statearr_30499_30513[(2)] = null);

(statearr_30499_30513[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__20550__auto___30507,out))
;
return ((function (switch__20483__auto__,c__20550__auto___30507,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto____0 = (function (){
var statearr_30503 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30503[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto__);

(statearr_30503[(1)] = (1));

return statearr_30503;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto____1 = (function (state_30489){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_30489);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e30504){if((e30504 instanceof Object)){
var ex__20487__auto__ = e30504;
var statearr_30505_30514 = state_30489;
(statearr_30505_30514[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30489);

return cljs.core.constant$keyword$recur;
} else {
throw e30504;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__30515 = state_30489;
state_30489 = G__30515;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto__ = function(state_30489){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto____1.call(this,state_30489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___30507,out))
})();
var state__20552__auto__ = (function (){var statearr_30506 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_30506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___30507);

return statearr_30506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___30507,out))
);


return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__30516,p__30517){
var map__30522 = p__30516;
var map__30522__$1 = ((((!((map__30522 == null)))?((((map__30522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30522):map__30522);
var opts = map__30522__$1;
var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30522__$1,cljs.core.constant$keyword$url_DASH_rewriter);
var map__30523 = p__30517;
var map__30523__$1 = ((((!((map__30523 == null)))?((((map__30523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30523):map__30523);
var file_msg = map__30523__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30523__$1,cljs.core.constant$keyword$file);
var resolved_path = (figwheel.client.file_reloading.resolve_url.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.file_reloading.resolve_url.cljs$core$IFn$_invoke$arity$1(file_msg) : figwheel.client.file_reloading.resolve_url.call(null,file_msg));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file_msg,cljs.core.constant$keyword$request_DASH_url,(cljs.core.truth_(url_rewriter)?(url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(resolved_path) : url_rewriter.call(null,resolved_path)):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30526,opts){
var map__30530 = p__30526;
var map__30530__$1 = ((((!((map__30530 == null)))?((((map__30530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30530):map__30530);
var eval_body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30530__$1,cljs.core.constant$keyword$eval_DASH_body);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30530__$1,cljs.core.constant$keyword$file);
if(cljs.core.truth_((function (){var and__16470__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16470__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16470__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn([cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper(code,opts);
}catch (e30532){var e = e30532;
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$error,[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30537,p__30538){
var map__30766 = p__30537;
var map__30766__$1 = ((((!((map__30766 == null)))?((((map__30766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30766):map__30766);
var opts = map__30766__$1;
var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30766__$1,cljs.core.constant$keyword$before_DASH_jsload);
var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30766__$1,cljs.core.constant$keyword$on_DASH_jsload);
var load_unchanged_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30766__$1,cljs.core.constant$keyword$load_DASH_unchanged_DASH_files);
var map__30767 = p__30538;
var map__30767__$1 = ((((!((map__30767 == null)))?((((map__30767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30767):map__30767);
var msg = map__30767__$1;
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30767__$1,cljs.core.constant$keyword$files);
var c__20550__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files){
return (function (state_30908){
var state_val_30909 = (state_30908[(1)]);
if((state_val_30909 === (7))){
var inst_30781 = (state_30908[(7)]);
var inst_30782 = (state_30908[(8)]);
var inst_30784 = (state_30908[(9)]);
var inst_30783 = (state_30908[(10)]);
var inst_30789 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30782,inst_30784);
var inst_30790 = figwheel.client.file_reloading.eval_body(inst_30789,opts);
var inst_30791 = (inst_30784 + (1));
var tmp30910 = inst_30781;
var tmp30911 = inst_30782;
var tmp30912 = inst_30783;
var inst_30781__$1 = tmp30910;
var inst_30782__$1 = tmp30911;
var inst_30783__$1 = tmp30912;
var inst_30784__$1 = inst_30791;
var state_30908__$1 = (function (){var statearr_30913 = state_30908;
(statearr_30913[(7)] = inst_30781__$1);

(statearr_30913[(8)] = inst_30782__$1);

(statearr_30913[(9)] = inst_30784__$1);

(statearr_30913[(10)] = inst_30783__$1);

(statearr_30913[(11)] = inst_30790);

return statearr_30913;
})();
var statearr_30914_30993 = state_30908__$1;
(statearr_30914_30993[(2)] = null);

(statearr_30914_30993[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (20))){
var inst_30830 = (state_30908[(12)]);
var inst_30826 = (state_30908[(13)]);
var inst_30827 = (state_30908[(14)]);
var inst_30833 = (state_30908[(15)]);
var inst_30831 = (state_30908[(16)]);
var inst_30836 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: loaded these files");
var inst_30838 = (function (){var all_files = inst_30826;
var files_SINGLEQUOTE_ = inst_30827;
var res_SINGLEQUOTE_ = inst_30830;
var res = inst_30831;
var files_not_loaded = inst_30833;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30830,inst_30826,inst_30827,inst_30833,inst_30831,inst_30836,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files){
return (function (p__30837){
var map__30915 = p__30837;
var map__30915__$1 = ((((!((map__30915 == null)))?((((map__30915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30915):map__30915);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30915__$1,cljs.core.constant$keyword$namespace);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30915__$1,cljs.core.constant$keyword$file);
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file(namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30830,inst_30826,inst_30827,inst_30833,inst_30831,inst_30836,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files))
})();
var inst_30839 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_30838,inst_30831);
var inst_30840 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_30839], 0));
var inst_30841 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_30840);
var inst_30842 = (function (){var all_files = inst_30826;
var files_SINGLEQUOTE_ = inst_30827;
var res_SINGLEQUOTE_ = inst_30830;
var res = inst_30831;
var files_not_loaded = inst_30833;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30830,inst_30826,inst_30827,inst_30833,inst_30831,inst_30836,inst_30838,inst_30839,inst_30840,inst_30841,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event(res);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30830,inst_30826,inst_30827,inst_30833,inst_30831,inst_30836,inst_30838,inst_30839,inst_30840,inst_30841,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files))
})();
var inst_30843 = setTimeout(inst_30842,(10));
var state_30908__$1 = (function (){var statearr_30917 = state_30908;
(statearr_30917[(17)] = inst_30836);

(statearr_30917[(18)] = inst_30841);

return statearr_30917;
})();
var statearr_30918_30994 = state_30908__$1;
(statearr_30918_30994[(2)] = inst_30843);

(statearr_30918_30994[(1)] = (22));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (27))){
var state_30908__$1 = state_30908;
var statearr_30919_30995 = state_30908__$1;
(statearr_30919_30995[(2)] = false);

(statearr_30919_30995[(1)] = (28));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (1))){
var inst_30773 = (state_30908[(19)]);
var inst_30770 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));
var inst_30771 = figwheel.client.file_reloading.before_jsload_custom_event(files);
var inst_30772 = (function (){return ((function (inst_30773,inst_30770,inst_30771,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files){
return (function (p1__30533_SHARP_){
return cljs.core.constant$keyword$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__30533_SHARP_);
});
;})(inst_30773,inst_30770,inst_30771,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files))
})();
var inst_30773__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_30772,files);
var inst_30774 = cljs.core.not_empty(inst_30773__$1);
var state_30908__$1 = (function (){var statearr_30920 = state_30908;
(statearr_30920[(20)] = inst_30771);

(statearr_30920[(19)] = inst_30773__$1);

(statearr_30920[(21)] = inst_30770);

return statearr_30920;
})();
if(cljs.core.truth_(inst_30774)){
var statearr_30921_30996 = state_30908__$1;
(statearr_30921_30996[(1)] = (2));

} else {
var statearr_30922_30997 = state_30908__$1;
(statearr_30922_30997[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (24))){
var state_30908__$1 = state_30908;
var statearr_30923_30998 = state_30908__$1;
(statearr_30923_30998[(2)] = null);

(statearr_30923_30998[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (39))){
var state_30908__$1 = state_30908;
var statearr_30924_30999 = state_30908__$1;
(statearr_30924_30999[(2)] = null);

(statearr_30924_30999[(1)] = (40));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (4))){
var inst_30818 = (state_30908[(2)]);
var inst_30819 = (function (){return ((function (inst_30818,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files){
return (function (p1__30534_SHARP_){
var and__16470__auto__ = cljs.core.constant$keyword$namespace.cljs$core$IFn$_invoke$arity$1(p1__30534_SHARP_);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.not(cljs.core.constant$keyword$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__30534_SHARP_));
} else {
return and__16470__auto__;
}
});
;})(inst_30818,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files))
})();
var inst_30820 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_30819,files);
var state_30908__$1 = (function (){var statearr_30925 = state_30908;
(statearr_30925[(22)] = inst_30820);

(statearr_30925[(23)] = inst_30818);

return statearr_30925;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_30926_31000 = state_30908__$1;
(statearr_30926_31000[(1)] = (16));

} else {
var statearr_30927_31001 = state_30908__$1;
(statearr_30927_31001[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (15))){
var inst_30808 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
var statearr_30928_31002 = state_30908__$1;
(statearr_30928_31002[(2)] = inst_30808);

(statearr_30928_31002[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (21))){
var state_30908__$1 = state_30908;
var statearr_30929_31003 = state_30908__$1;
(statearr_30929_31003[(2)] = null);

(statearr_30929_31003[(1)] = (22));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (31))){
var inst_30865 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
var statearr_30930_31004 = state_30908__$1;
(statearr_30930_31004[(2)] = inst_30865);

(statearr_30930_31004[(1)] = (28));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (32))){
var inst_30853 = (state_30908[(24)]);
var inst_30870 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30853);
var state_30908__$1 = state_30908;
var statearr_30931_31005 = state_30908__$1;
(statearr_30931_31005[(2)] = inst_30870);

(statearr_30931_31005[(1)] = (34));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (40))){
var inst_30876 = (state_30908[(25)]);
var inst_30894 = (state_30908[(2)]);
var inst_30895 = cljs.core.not_empty(inst_30876);
var state_30908__$1 = (function (){var statearr_30932 = state_30908;
(statearr_30932[(26)] = inst_30894);

return statearr_30932;
})();
if(cljs.core.truth_(inst_30895)){
var statearr_30933_31006 = state_30908__$1;
(statearr_30933_31006[(1)] = (41));

} else {
var statearr_30934_31007 = state_30908__$1;
(statearr_30934_31007[(1)] = (42));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (33))){
var inst_30853 = (state_30908[(24)]);
var state_30908__$1 = state_30908;
var statearr_30935_31008 = state_30908__$1;
(statearr_30935_31008[(2)] = inst_30853);

(statearr_30935_31008[(1)] = (34));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (13))){
var inst_30794 = (state_30908[(27)]);
var inst_30798 = cljs.core.chunk_first(inst_30794);
var inst_30799 = cljs.core.chunk_rest(inst_30794);
var inst_30800 = cljs.core.count(inst_30798);
var inst_30781 = inst_30799;
var inst_30782 = inst_30798;
var inst_30783 = inst_30800;
var inst_30784 = (0);
var state_30908__$1 = (function (){var statearr_30936 = state_30908;
(statearr_30936[(7)] = inst_30781);

(statearr_30936[(8)] = inst_30782);

(statearr_30936[(9)] = inst_30784);

(statearr_30936[(10)] = inst_30783);

return statearr_30936;
})();
var statearr_30937_31009 = state_30908__$1;
(statearr_30937_31009[(2)] = null);

(statearr_30937_31009[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (22))){
var inst_30833 = (state_30908[(15)]);
var inst_30846 = (state_30908[(2)]);
var inst_30847 = cljs.core.not_empty(inst_30833);
var state_30908__$1 = (function (){var statearr_30938 = state_30908;
(statearr_30938[(28)] = inst_30846);

return statearr_30938;
})();
if(cljs.core.truth_(inst_30847)){
var statearr_30939_31010 = state_30908__$1;
(statearr_30939_31010[(1)] = (23));

} else {
var statearr_30940_31011 = state_30908__$1;
(statearr_30940_31011[(1)] = (24));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (36))){
var state_30908__$1 = state_30908;
var statearr_30941_31012 = state_30908__$1;
(statearr_30941_31012[(2)] = null);

(statearr_30941_31012[(1)] = (37));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (41))){
var inst_30876 = (state_30908[(25)]);
var inst_30897 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$file,inst_30876);
var inst_30898 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_30897], 0));
var inst_30899 = [cljs.core.str("not required: "),cljs.core.str(inst_30898)].join('');
var inst_30900 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_30899);
var state_30908__$1 = state_30908;
var statearr_30942_31013 = state_30908__$1;
(statearr_30942_31013[(2)] = inst_30900);

(statearr_30942_31013[(1)] = (43));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (43))){
var inst_30903 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
var statearr_30943_31014 = state_30908__$1;
(statearr_30943_31014[(2)] = inst_30903);

(statearr_30943_31014[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (29))){
var state_30908__$1 = state_30908;
var statearr_30944_31015 = state_30908__$1;
(statearr_30944_31015[(2)] = true);

(statearr_30944_31015[(1)] = (31));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (6))){
var inst_30815 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
var statearr_30945_31016 = state_30908__$1;
(statearr_30945_31016[(2)] = inst_30815);

(statearr_30945_31016[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (28))){
var inst_30868 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
if(cljs.core.truth_(inst_30868)){
var statearr_30946_31017 = state_30908__$1;
(statearr_30946_31017[(1)] = (32));

} else {
var statearr_30947_31018 = state_30908__$1;
(statearr_30947_31018[(1)] = (33));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (25))){
var inst_30906 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30908__$1,inst_30906);
} else {
if((state_val_30909 === (34))){
var inst_30874 = (state_30908[(29)]);
var inst_30873 = (state_30908[(2)]);
var inst_30874__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30873,cljs.core.constant$keyword$figwheel_DASH_no_DASH_load);
var inst_30875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30873,cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk);
var inst_30876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30873,cljs.core.constant$keyword$not_DASH_required);
var inst_30877 = cljs.core.not_empty(inst_30874__$1);
var state_30908__$1 = (function (){var statearr_30948 = state_30908;
(statearr_30948[(29)] = inst_30874__$1);

(statearr_30948[(25)] = inst_30876);

(statearr_30948[(30)] = inst_30875);

return statearr_30948;
})();
if(cljs.core.truth_(inst_30877)){
var statearr_30949_31019 = state_30908__$1;
(statearr_30949_31019[(1)] = (35));

} else {
var statearr_30950_31020 = state_30908__$1;
(statearr_30950_31020[(1)] = (36));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (17))){
var inst_30820 = (state_30908[(22)]);
var state_30908__$1 = state_30908;
var statearr_30951_31021 = state_30908__$1;
(statearr_30951_31021[(2)] = inst_30820);

(statearr_30951_31021[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (3))){
var state_30908__$1 = state_30908;
var statearr_30952_31022 = state_30908__$1;
(statearr_30952_31022[(2)] = null);

(statearr_30952_31022[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (12))){
var inst_30811 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
var statearr_30953_31023 = state_30908__$1;
(statearr_30953_31023[(2)] = inst_30811);

(statearr_30953_31023[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (2))){
var inst_30773 = (state_30908[(19)]);
var inst_30780 = cljs.core.seq(inst_30773);
var inst_30781 = inst_30780;
var inst_30782 = null;
var inst_30783 = (0);
var inst_30784 = (0);
var state_30908__$1 = (function (){var statearr_30954 = state_30908;
(statearr_30954[(7)] = inst_30781);

(statearr_30954[(8)] = inst_30782);

(statearr_30954[(9)] = inst_30784);

(statearr_30954[(10)] = inst_30783);

return statearr_30954;
})();
var statearr_30955_31024 = state_30908__$1;
(statearr_30955_31024[(2)] = null);

(statearr_30955_31024[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (23))){
var inst_30830 = (state_30908[(12)]);
var inst_30826 = (state_30908[(13)]);
var inst_30827 = (state_30908[(14)]);
var inst_30833 = (state_30908[(15)]);
var inst_30831 = (state_30908[(16)]);
var inst_30853 = (state_30908[(24)]);
var inst_30849 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: NOT loading these files ");
var inst_30852 = (function (){var all_files = inst_30826;
var files_SINGLEQUOTE_ = inst_30827;
var res_SINGLEQUOTE_ = inst_30830;
var res = inst_30831;
var files_not_loaded = inst_30833;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30830,inst_30826,inst_30827,inst_30833,inst_30831,inst_30853,inst_30849,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files){
return (function (p__30851){
var map__30956 = p__30851;
var map__30956__$1 = ((((!((map__30956 == null)))?((((map__30956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30956):map__30956);
var meta_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30956__$1,cljs.core.constant$keyword$meta_DASH_data);
if((meta_data == null)){
return cljs.core.constant$keyword$not_DASH_required;
} else {
if(cljs.core.contains_QMARK_(meta_data,cljs.core.constant$keyword$figwheel_DASH_no_DASH_load)){
return cljs.core.constant$keyword$figwheel_DASH_no_DASH_load;
} else {
if((cljs.core.contains_QMARK_(meta_data,cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk)) && (cljs.core.not(cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk.cljs$core$IFn$_invoke$arity$1(meta_data)))){
return cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk;
} else {
return cljs.core.constant$keyword$not_DASH_required;

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_30830,inst_30826,inst_30827,inst_30833,inst_30831,inst_30853,inst_30849,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files))
})();
var inst_30853__$1 = cljs.core.group_by(inst_30852,inst_30833);
var inst_30855 = (inst_30853__$1 == null);
var inst_30856 = cljs.core.not(inst_30855);
var state_30908__$1 = (function (){var statearr_30958 = state_30908;
(statearr_30958[(31)] = inst_30849);

(statearr_30958[(24)] = inst_30853__$1);

return statearr_30958;
})();
if(inst_30856){
var statearr_30959_31025 = state_30908__$1;
(statearr_30959_31025[(1)] = (26));

} else {
var statearr_30960_31026 = state_30908__$1;
(statearr_30960_31026[(1)] = (27));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (35))){
var inst_30874 = (state_30908[(29)]);
var inst_30879 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$file,inst_30874);
var inst_30880 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_30879], 0));
var inst_30881 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30880)].join('');
var inst_30882 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_30881);
var state_30908__$1 = state_30908;
var statearr_30961_31027 = state_30908__$1;
(statearr_30961_31027[(2)] = inst_30882);

(statearr_30961_31027[(1)] = (37));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (19))){
var inst_30830 = (state_30908[(12)]);
var inst_30826 = (state_30908[(13)]);
var inst_30827 = (state_30908[(14)]);
var inst_30831 = (state_30908[(16)]);
var inst_30830__$1 = (state_30908[(2)]);
var inst_30831__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$loaded_DASH_file,inst_30830__$1);
var inst_30832 = (function (){var all_files = inst_30826;
var files_SINGLEQUOTE_ = inst_30827;
var res_SINGLEQUOTE_ = inst_30830__$1;
var res = inst_30831__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_30830,inst_30826,inst_30827,inst_30831,inst_30830__$1,inst_30831__$1,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files){
return (function (p1__30536_SHARP_){
return cljs.core.not(cljs.core.constant$keyword$loaded_DASH_file.cljs$core$IFn$_invoke$arity$1(p1__30536_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_30830,inst_30826,inst_30827,inst_30831,inst_30830__$1,inst_30831__$1,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files))
})();
var inst_30833 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_30832,inst_30830__$1);
var inst_30834 = cljs.core.not_empty(inst_30831__$1);
var state_30908__$1 = (function (){var statearr_30962 = state_30908;
(statearr_30962[(12)] = inst_30830__$1);

(statearr_30962[(15)] = inst_30833);

(statearr_30962[(16)] = inst_30831__$1);

return statearr_30962;
})();
if(cljs.core.truth_(inst_30834)){
var statearr_30963_31028 = state_30908__$1;
(statearr_30963_31028[(1)] = (20));

} else {
var statearr_30964_31029 = state_30908__$1;
(statearr_30964_31029[(1)] = (21));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (11))){
var state_30908__$1 = state_30908;
var statearr_30965_31030 = state_30908__$1;
(statearr_30965_31030[(2)] = null);

(statearr_30965_31030[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (9))){
var inst_30813 = (state_30908[(2)]);
var state_30908__$1 = state_30908;
var statearr_30966_31031 = state_30908__$1;
(statearr_30966_31031[(2)] = inst_30813);

(statearr_30966_31031[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (5))){
var inst_30784 = (state_30908[(9)]);
var inst_30783 = (state_30908[(10)]);
var inst_30786 = (inst_30784 < inst_30783);
var inst_30787 = inst_30786;
var state_30908__$1 = state_30908;
if(cljs.core.truth_(inst_30787)){
var statearr_30967_31032 = state_30908__$1;
(statearr_30967_31032[(1)] = (7));

} else {
var statearr_30968_31033 = state_30908__$1;
(statearr_30968_31033[(1)] = (8));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (14))){
var inst_30794 = (state_30908[(27)]);
var inst_30803 = cljs.core.first(inst_30794);
var inst_30804 = figwheel.client.file_reloading.eval_body(inst_30803,opts);
var inst_30805 = cljs.core.next(inst_30794);
var inst_30781 = inst_30805;
var inst_30782 = null;
var inst_30783 = (0);
var inst_30784 = (0);
var state_30908__$1 = (function (){var statearr_30969 = state_30908;
(statearr_30969[(7)] = inst_30781);

(statearr_30969[(8)] = inst_30782);

(statearr_30969[(9)] = inst_30784);

(statearr_30969[(10)] = inst_30783);

(statearr_30969[(32)] = inst_30804);

return statearr_30969;
})();
var statearr_30970_31034 = state_30908__$1;
(statearr_30970_31034[(2)] = null);

(statearr_30970_31034[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (26))){
var inst_30853 = (state_30908[(24)]);
var inst_30858 = inst_30853.cljs$lang$protocol_mask$partition0$;
var inst_30859 = (inst_30858 & (64));
var inst_30860 = inst_30853.cljs$core$ISeq$;
var inst_30861 = (inst_30859) || (inst_30860);
var state_30908__$1 = state_30908;
if(cljs.core.truth_(inst_30861)){
var statearr_30971_31035 = state_30908__$1;
(statearr_30971_31035[(1)] = (29));

} else {
var statearr_30972_31036 = state_30908__$1;
(statearr_30972_31036[(1)] = (30));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (16))){
var inst_30820 = (state_30908[(22)]);
var inst_30822 = (function (){var all_files = inst_30820;
return ((function (all_files,inst_30820,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files){
return (function (p1__30535_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__30535_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$meta_DASH_data], null),cljs.core.dissoc,cljs.core.constant$keyword$file_DASH_changed_DASH_on_DASH_disk);
});
;})(all_files,inst_30820,state_val_30909,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files))
})();
var inst_30823 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_30822,inst_30820);
var state_30908__$1 = state_30908;
var statearr_30973_31037 = state_30908__$1;
(statearr_30973_31037[(2)] = inst_30823);

(statearr_30973_31037[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (38))){
var inst_30875 = (state_30908[(30)]);
var inst_30888 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$file,inst_30875);
var inst_30889 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_30888], 0));
var inst_30890 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_30889)].join('');
var inst_30891 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_30890);
var state_30908__$1 = state_30908;
var statearr_30974_31038 = state_30908__$1;
(statearr_30974_31038[(2)] = inst_30891);

(statearr_30974_31038[(1)] = (40));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (30))){
var state_30908__$1 = state_30908;
var statearr_30975_31039 = state_30908__$1;
(statearr_30975_31039[(2)] = false);

(statearr_30975_31039[(1)] = (31));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (10))){
var inst_30794 = (state_30908[(27)]);
var inst_30796 = cljs.core.chunked_seq_QMARK_(inst_30794);
var state_30908__$1 = state_30908;
if(inst_30796){
var statearr_30976_31040 = state_30908__$1;
(statearr_30976_31040[(1)] = (13));

} else {
var statearr_30977_31041 = state_30908__$1;
(statearr_30977_31041[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (18))){
var inst_30826 = (state_30908[(13)]);
var inst_30827 = (state_30908[(14)]);
var inst_30826__$1 = (state_30908[(2)]);
var inst_30827__$1 = figwheel.client.file_reloading.add_request_urls(opts,inst_30826__$1);
var inst_30828 = figwheel.client.file_reloading.load_all_js_files(inst_30827__$1);
var state_30908__$1 = (function (){var statearr_30978 = state_30908;
(statearr_30978[(13)] = inst_30826__$1);

(statearr_30978[(14)] = inst_30827__$1);

return statearr_30978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30908__$1,(19),inst_30828);
} else {
if((state_val_30909 === (42))){
var state_30908__$1 = state_30908;
var statearr_30979_31042 = state_30908__$1;
(statearr_30979_31042[(2)] = null);

(statearr_30979_31042[(1)] = (43));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (37))){
var inst_30875 = (state_30908[(30)]);
var inst_30885 = (state_30908[(2)]);
var inst_30886 = cljs.core.not_empty(inst_30875);
var state_30908__$1 = (function (){var statearr_30980 = state_30908;
(statearr_30980[(33)] = inst_30885);

return statearr_30980;
})();
if(cljs.core.truth_(inst_30886)){
var statearr_30981_31043 = state_30908__$1;
(statearr_30981_31043[(1)] = (38));

} else {
var statearr_30982_31044 = state_30908__$1;
(statearr_30982_31044[(1)] = (39));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_30909 === (8))){
var inst_30794 = (state_30908[(27)]);
var inst_30781 = (state_30908[(7)]);
var inst_30794__$1 = cljs.core.seq(inst_30781);
var state_30908__$1 = (function (){var statearr_30983 = state_30908;
(statearr_30983[(27)] = inst_30794__$1);

return statearr_30983;
})();
if(inst_30794__$1){
var statearr_30984_31045 = state_30908__$1;
(statearr_30984_31045[(1)] = (10));

} else {
var statearr_30985_31046 = state_30908__$1;
(statearr_30985_31046[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files))
;
return ((function (switch__20483__auto__,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto____0 = (function (){
var statearr_30989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30989[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto__);

(statearr_30989[(1)] = (1));

return statearr_30989;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto____1 = (function (state_30908){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_30908);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e30990){if((e30990 instanceof Object)){
var ex__20487__auto__ = e30990;
var statearr_30991_31047 = state_30908;
(statearr_30991_31047[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30908);

return cljs.core.constant$keyword$recur;
} else {
throw e30990;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__31048 = state_30908;
state_30908 = G__31048;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto__ = function(state_30908){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto____1.call(this,state_30908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files))
})();
var state__20552__auto__ = (function (){var statearr_30992 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_30992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto__);

return statearr_30992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto__,map__30766,map__30766__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30767,map__30767__$1,msg,files))
);

return c__20550__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31051,link){
var map__31054 = p__31051;
var map__31054__$1 = ((((!((map__31054 == null)))?((((map__31054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31054):map__31054);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31054__$1,cljs.core.constant$keyword$file);
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (link_href,temp__4425__auto__,map__31054,map__31054__$1,file){
return (function (p1__31049_SHARP_,p2__31050_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__31049_SHARP_,p2__31050_SHARP_)){
return p1__31049_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31054,map__31054__$1,file))
,cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,"/")),cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.truncate_url(link_href),"/")))));
var match_length = cljs.core.count(match);
var file_name_length = cljs.core.count(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$link,link,cljs.core.constant$keyword$link_DASH_href,link_href,cljs.core.constant$keyword$match_DASH_length,match_length,cljs.core.constant$keyword$current_DASH_url_DASH_length,cljs.core.count(figwheel.client.file_reloading.truncate_url(link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__31060){
var map__31061 = p__31060;
var map__31061__$1 = ((((!((map__31061 == null)))?((((map__31061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31061):map__31061);
var match_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31061__$1,cljs.core.constant$keyword$match_DASH_length);
var current_url_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31061__$1,cljs.core.constant$keyword$current_DASH_url_DASH_length);
return (current_url_length - match_length);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__31056_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_(f_data,p1__31056_SHARP_);
}),figwheel.client.file_reloading.current_links())));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return cljs.core.constant$keyword$link.cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster(url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster(url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args31063 = [];
var len__17521__auto___31068 = arguments.length;
var i__17522__auto___31069 = (0);
while(true){
if((i__17522__auto___31069 < len__17521__auto___31068)){
args31063.push((arguments[i__17522__auto___31069]));

var G__31070 = (i__17522__auto___31069 + (1));
i__17522__auto___31069 = G__31070;
continue;
} else {
}
break;
}

var G__31065 = args31063.length;
switch (G__31065) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31063.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var G__31066 = ((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
;
var G__31067 = (300);
return setTimeout(G__31066,G__31067);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31072){
var map__31075 = p__31072;
var map__31075__$1 = ((((!((map__31075 == null)))?((((map__31075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31075):map__31075);
var f_data = map__31075__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31075__$1,cljs.core.constant$keyword$file);
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31075__$1,cljs.core.constant$keyword$request_DASH_url);
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link(f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.file_reloading.clone_link(link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.create_link((function (){var or__16482__auto__ = request_url;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31077,files_msg){
var map__31100 = p__31077;
var map__31100__$1 = ((((!((map__31100 == null)))?((((map__31100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31100):map__31100);
var opts = map__31100__$1;
var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31100__$1,cljs.core.constant$keyword$on_DASH_cssload);
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
var seq__31102_31122 = cljs.core.seq(figwheel.client.file_reloading.add_request_urls(opts,cljs.core.constant$keyword$files.cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31103_31123 = null;
var count__31104_31124 = (0);
var i__31105_31125 = (0);
while(true){
if((i__31105_31125 < count__31104_31124)){
var f_31126 = chunk__31103_31123.cljs$core$IIndexed$_nth$arity$2(null,i__31105_31125);
figwheel.client.file_reloading.reload_css_file(f_31126);

var G__31127 = seq__31102_31122;
var G__31128 = chunk__31103_31123;
var G__31129 = count__31104_31124;
var G__31130 = (i__31105_31125 + (1));
seq__31102_31122 = G__31127;
chunk__31103_31123 = G__31128;
count__31104_31124 = G__31129;
i__31105_31125 = G__31130;
continue;
} else {
var temp__4425__auto___31131 = cljs.core.seq(seq__31102_31122);
if(temp__4425__auto___31131){
var seq__31102_31132__$1 = temp__4425__auto___31131;
if(cljs.core.chunked_seq_QMARK_(seq__31102_31132__$1)){
var c__17266__auto___31133 = cljs.core.chunk_first(seq__31102_31132__$1);
var G__31134 = cljs.core.chunk_rest(seq__31102_31132__$1);
var G__31135 = c__17266__auto___31133;
var G__31136 = cljs.core.count(c__17266__auto___31133);
var G__31137 = (0);
seq__31102_31122 = G__31134;
chunk__31103_31123 = G__31135;
count__31104_31124 = G__31136;
i__31105_31125 = G__31137;
continue;
} else {
var f_31138 = cljs.core.first(seq__31102_31132__$1);
figwheel.client.file_reloading.reload_css_file(f_31138);

var G__31139 = cljs.core.next(seq__31102_31132__$1);
var G__31140 = null;
var G__31141 = (0);
var G__31142 = (0);
seq__31102_31122 = G__31139;
chunk__31103_31123 = G__31140;
count__31104_31124 = G__31141;
i__31105_31125 = G__31142;
continue;
}
} else {
}
}
break;
}

var c__20550__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto__,map__31100,map__31100__$1,opts,on_cssload){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto__,map__31100,map__31100__$1,opts,on_cssload){
return (function (state_31112){
var state_val_31113 = (state_31112[(1)]);
if((state_val_31113 === (1))){
var inst_31106 = cljs.core.async.timeout((100));
var state_31112__$1 = state_31112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31112__$1,(2),inst_31106);
} else {
if((state_val_31113 === (2))){
var inst_31108 = (state_31112[(2)]);
var inst_31109 = cljs.core.constant$keyword$files.cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31110 = (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(inst_31109) : on_cssload.call(null,inst_31109));
var state_31112__$1 = (function (){var statearr_31114 = state_31112;
(statearr_31114[(7)] = inst_31108);

return statearr_31114;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31112__$1,inst_31110);
} else {
return null;
}
}
});})(c__20550__auto__,map__31100,map__31100__$1,opts,on_cssload))
;
return ((function (switch__20483__auto__,c__20550__auto__,map__31100,map__31100__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto____0 = (function (){
var statearr_31118 = [null,null,null,null,null,null,null,null];
(statearr_31118[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto__);

(statearr_31118[(1)] = (1));

return statearr_31118;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto____1 = (function (state_31112){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_31112);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e31119){if((e31119 instanceof Object)){
var ex__20487__auto__ = e31119;
var statearr_31120_31143 = state_31112;
(statearr_31120_31143[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31112);

return cljs.core.constant$keyword$recur;
} else {
throw e31119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__31144 = state_31112;
state_31112 = G__31144;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto__ = function(state_31112){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto____1.call(this,state_31112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto__,map__31100,map__31100__$1,opts,on_cssload))
})();
var state__20552__auto__ = (function (){var statearr_31121 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_31121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto__);

return statearr_31121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto__,map__31100,map__31100__$1,opts,on_cssload))
);

return c__20550__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440458060166