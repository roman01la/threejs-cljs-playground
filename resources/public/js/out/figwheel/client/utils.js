// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace(goog.basePath,/(.*)goog\//,(function (p1__29341_SHARP_,p2__29340_SHARP_){
return [cljs.core.str(p2__29340_SHARP_)].join('');
}));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())){
return cljs.core.constant$keyword$node;
} else {
return cljs.core.constant$keyword$html;

}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__16470__auto__ = figwheel.client.utils.html_env_QMARK_();
if(cljs.core.truth_(and__16470__auto__)){
return (window["CustomEvent"]);
} else {
return and__16470__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj29345 = {"detail":data};
return obj29345;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_(o)) || (cljs.core.seq_QMARK_(o)))?cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([o], 0)):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(){
var args29350 = [];
var len__17521__auto___29356 = arguments.length;
var i__17522__auto___29357 = (0);
while(true){
if((i__17522__auto___29357 < len__17521__auto___29356)){
args29350.push((arguments[i__17522__auto___29357]));

var G__29358 = (i__17522__auto___29357 + (1));
i__17522__auto___29357 = G__29358;
continue;
} else {
}
break;
}

var G__29352 = args29350.length;
switch (G__29352) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29350.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$info,x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__29353 = cljs.core._EQ_;
var expr__29354 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())?level:cljs.core.constant$keyword$info);
if(cljs.core.truth_((pred__29353.cljs$core$IFn$_invoke$arity$2 ? pred__29353.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$warn,expr__29354) : pred__29353.call(null,cljs.core.constant$keyword$warn,expr__29354)))){
return ((function (pred__29353,expr__29354){
return (function (p1__29346_SHARP_){
return console.warn(p1__29346_SHARP_);
});
;})(pred__29353,expr__29354))
} else {
if(cljs.core.truth_((pred__29353.cljs$core$IFn$_invoke$arity$2 ? pred__29353.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,expr__29354) : pred__29353.call(null,cljs.core.constant$keyword$debug,expr__29354)))){
return ((function (pred__29353,expr__29354){
return (function (p1__29347_SHARP_){
return console.debug(p1__29347_SHARP_);
});
;})(pred__29353,expr__29354))
} else {
if(cljs.core.truth_((pred__29353.cljs$core$IFn$_invoke$arity$2 ? pred__29353.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$error,expr__29354) : pred__29353.call(null,cljs.core.constant$keyword$error,expr__29354)))){
return ((function (pred__29353,expr__29354){
return (function (p1__29348_SHARP_){
return console.error(p1__29348_SHARP_);
});
;})(pred__29353,expr__29354))
} else {
return ((function (pred__29353,expr__29354){
return (function (p1__29349_SHARP_){
return console.log(p1__29349_SHARP_);
});
;})(pred__29353,expr__29354))
}
}
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg) : f.call(null,arg));
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__29360){
var map__29363 = p__29360;
var map__29363__$1 = ((((!((map__29363 == null)))?((((map__29363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29363):map__29363);
var opts = map__29363__$1;
var eval_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29363__$1,cljs.core.constant$keyword$eval_DASH_fn);
if(cljs.core.truth_(eval_fn)){
return (eval_fn.cljs$core$IFn$_invoke$arity$2 ? eval_fn.cljs$core$IFn$_invoke$arity$2(code,opts) : eval_fn.call(null,code,opts));
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map?rel=1440458059105