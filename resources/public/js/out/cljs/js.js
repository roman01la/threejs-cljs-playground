// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(){
var args__17528__auto__ = [];
var len__17521__auto___24673 = arguments.length;
var i__17522__auto___24674 = (0);
while(true){
if((i__17522__auto___24674 < len__17521__auto___24673)){
args__17528__auto__.push((arguments[i__17522__auto___24674]));

var G__24675 = (i__17522__auto___24674 + (1));
i__17522__auto___24674 = G__24675;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR_24672 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24672;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

cljs.js.debug_prn.cljs$lang$applyTo = (function (seq24671){
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24671));
});
/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return ((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
if(typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 * Whatever function *load-fn* is bound to will be passed two arguments - a
 * map and a callback function: The map will have the following keys:
 * 
 * :name   - the name of the library (a symbol)
 * :macros - modifier signaling a macros namespace load
 * :path   - munged relative library path (a string)
 * 
 * It is up to the implementor to correctly resolve the corresponding .cljs,
 * .cljc, or .js resource (the order must be respected). If :macros is true
 * resolution should only consider .clj or .cljc resources (the order must be
 * respected). Upon resolution the callback should be invoked with a map
 * containing the following keys:
 * 
 * :lang       - the language, :clj or :js
 * :source     - the source of the library (a string)
 * :cache      - optional, if a :clj namespace has been precompiled to :js, can
 * give an analysis cache for faster loads.
 * :source-map - optional, if a :clj namespace has been precompiled to :js, can
 * give a V3 source map JSON
 * 
 * If the resource could not be resolved, the callback should be invoked with
 * nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(name,cb){
throw (new Error("No *load-fn* set"));
});
}
if(typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 * source. Whatever function *eval-fn* is bound to will be passed a map
 * containing the following keys:
 * 
 * :source - the source of the library (string)
 * :name   - used to unique identify the script (symbol)
 * :cache  - if the source was originally ClojureScript, will be given the
 * analysis cache.
 * 
 * The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(js_source){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__24676){
var map__24679 = p__24676;
var map__24679__$1 = ((((!((map__24679 == null)))?((((map__24679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24679):map__24679);
var resource = map__24679__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24679__$1,cljs.core.constant$keyword$source);
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$error,ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(){
var args24681 = [];
var len__17521__auto___24686 = arguments.length;
var i__17522__auto___24687 = (0);
while(true){
if((i__17522__auto___24687 < len__17521__auto___24686)){
args24681.push((arguments[i__17522__auto___24687]));

var G__24688 = (i__17522__auto___24687 + (1));
i__17522__auto___24687 = G__24688;
continue;
} else {
}
break;
}

var G__24683 = args24681.length;
switch (G__24683) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24681.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__24684 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__24684,((function (G__24684){
return (function (state){
});})(G__24684))
);

return G__24684;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__24685 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__24685,init);

return G__24685;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;
cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$source_DASH_maps,ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
var G__24691 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$source_DASH_map,cljs.core.sorted_map(),cljs.core.constant$keyword$gen_DASH_col,(0),cljs.core.constant$keyword$gen_DASH_line,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24691) : cljs.core.atom.call(null,G__24691));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str(pre),cljs.core.str(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__24692){
var map__24697 = p__24692;
var map__24697__$1 = ((((!((map__24697 == null)))?((((map__24697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24697):map__24697);
var opts = map__24697__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,cljs.core.constant$keyword$output_DASH_dir);
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24697__$1,cljs.core.constant$keyword$asset_DASH_path);
var t = (new Date()).valueOf();
var smn = (cljs.core.truth_(name)?clojure.string.replace(cljs.core.munge([cljs.core.str(name)].join('')),".","/"):[cljs.core.str("cljs-"),cljs.core.str(t)].join(''));
var ts = (new Date()).valueOf();
var out = (function (){var or__16482__auto__ = output_dir;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__24699 = [cljs.core.str(smn),cljs.core.str(".cljs?rel="),cljs.core.str(ts)].join('');
var G__24699__$1 = (cljs.core.truth_(out)?cljs.js.prefix(G__24699,[cljs.core.str(out),cljs.core.str("/")].join('')):G__24699);
return G__24699__$1;
})();
var file = (function (){var G__24700 = [cljs.core.str(smn),cljs.core.str(".js?rel="),cljs.core.str(ts)].join('');
var G__24700__$1 = (cljs.core.truth_(out)?cljs.js.prefix(G__24700,[cljs.core.str(out),cljs.core.str("/")].join('')):G__24700);
return G__24700__$1;
})();
var json = cljs.source_map.encode(new cljs.core.PersistentArrayMap.fromArray([src,cljs.core.constant$keyword$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)], true, false),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$lines,(cljs.core.constant$keyword$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),cljs.core.constant$keyword$file,file,cljs.core.constant$keyword$sources_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(cljs.core.constant$keyword$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$source_DASH_maps,name], null),cljs.source_map.invert_reverse_map(cljs.core.constant$keyword$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append([cljs.core.str("\n//# sourceURL="),cljs.core.str(file),cljs.core.str("\n//# sourceMappingURL=data:application/json;base64,"),cljs.core.str(goog.crypt.base64.encodeString(json))].join(''));
});
cljs.js._STAR_loaded_STAR_ = (function (){var G__24701 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24701) : cljs.core.atom.call(null,G__24701));
})();
cljs.js.require = (function cljs$js$require(){
var args24702 = [];
var len__17521__auto___24731 = arguments.length;
var i__17522__auto___24732 = (0);
while(true){
if((i__17522__auto___24732 < len__17521__auto___24731)){
args24702.push((arguments[i__17522__auto___24732]));

var G__24733 = (i__17522__auto___24732 + (1));
i__17522__auto___24732 = G__24733;
continue;
} else {
}
break;
}

var G__24704 = args24702.length;
switch (G__24704) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24702.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$_STAR_compiler_STAR_,cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.constant$keyword$_STAR_load_DASH_macros_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$load_DASH_macros.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return true;
}
})(),cljs.core.constant$keyword$_STAR_analyze_DASH_deps_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return true;
}
})(),cljs.core.constant$keyword$_STAR_load_DASH_fn_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.constant$keyword$_STAR_eval_DASH_fn_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var name__$1 = (function (){var G__24705 = name;
var G__24705__$1 = (cljs.core.truth_(cljs.core.constant$keyword$macro_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?cljs.analyzer.macro_ns_name(G__24705):G__24705);
return G__24705__$1;
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$reload,reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,name__$1);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$reload_DASH_all,reload)){
var G__24706_24735 = cljs.js._STAR_loaded_STAR_;
var G__24707_24736 = cljs.core.PersistentHashSet.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24706_24735,G__24707_24736) : cljs.core.reset_BANG_.call(null,G__24706_24735,G__24707_24736));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Loading "),cljs.core.str(name__$1),cljs.core.str((cljs.core.truth_(cljs.core.constant$keyword$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)),cljs.core.str(" namespace")].join('')], 0));
} else {
}

if(!(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.js._STAR_loaded_STAR_) : cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_)),name__$1))){
var env = cljs.core.constant$keyword$_STAR_env_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{return cljs.core.constant$keyword$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$name,name__$1,cljs.core.constant$keyword$macros,cljs.core.constant$keyword$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$path,cljs.js.ns__GT_relpath(name__$1)], null),((function (env,bound_vars__$1,name__$1){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("*load-fn* may only return a map or nil"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"resource","resource",1892430363,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"resource","resource",1892430363,null)))], 0)))].join('')));
}

if(cljs.core.truth_(resource)){
var map__24710 = resource;
var map__24710__$1 = ((((!((map__24710 == null)))?((((map__24710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24710):map__24710);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24710__$1,cljs.core.constant$keyword$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24710__$1,cljs.core.constant$keyword$source);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24710__$1,cljs.core.constant$keyword$cache);
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24710__$1,cljs.core.constant$keyword$source_DASH_map);
var pred__24712 = cljs.core._EQ_;
var expr__24713 = lang;
if(cljs.core.truth_((pred__24712.cljs$core$IFn$_invoke$arity$2 ? pred__24712.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$clj,expr__24713) : pred__24712.call(null,cljs.core.constant$keyword$clj,expr__24713)))){
var G__24716 = bound_vars__$1;
var G__24717 = source;
var G__24718 = name__$1;
var G__24719 = opts;
var G__24720 = ((function (G__24716,G__24717,G__24718,G__24719,pred__24712,expr__24713,map__24710,map__24710__$1,lang,source,cache,source_map,env,bound_vars__$1,name__$1){
return (function (res){
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,name__$1);

var G__24721 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24721) : cb.call(null,G__24721));
}
});})(G__24716,G__24717,G__24718,G__24719,pred__24712,expr__24713,map__24710,map__24710__$1,lang,source,cache,source_map,env,bound_vars__$1,name__$1))
;
return (cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.eval_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__24716,G__24717,G__24718,G__24719,G__24720) : cljs.js.eval_str_STAR_.call(null,G__24716,G__24717,G__24718,G__24719,G__24720));
} else {
if(cljs.core.truth_((pred__24712.cljs$core$IFn$_invoke$arity$2 ? pred__24712.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$js,expr__24713) : pred__24712.call(null,cljs.core.constant$keyword$js,expr__24713)))){
var res = (function (){try{cljs.core.constant$keyword$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,resource);

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(cljs.core.constant$keyword$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name__$1,cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(cljs.core.constant$keyword$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name__$1,source_map);
} else {
return null;
}
}catch (e24722){var cause = e24722;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,[cljs.core.str("Could not require "),cljs.core.str(name__$1)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,name__$1);

var G__24723 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24723) : cb.call(null,G__24723));
}
} else {
var G__24724 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str("Invalid :lang specified "),cljs.core.str(lang),cljs.core.str(", only :clj or :js allowed")].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24724) : cb.call(null,G__24724));
}
}
} else {
var G__24727 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__24728 = cljs.core.constant$keyword$undeclared_DASH_ns;
var G__24729 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ns_DASH_sym,name__$1,cljs.core.constant$keyword$js_DASH_provide,cljs.core.name(name__$1)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__24728,G__24729) : cljs.analyzer.error_message.call(null,G__24728,G__24729));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24727) : cb.call(null,G__24727));
}
});})(env,bound_vars__$1,name__$1))
);
}catch (e24708){var cause = e24708;
var G__24709 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,[cljs.core.str("Could not require "),cljs.core.str(name__$1)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24709) : cb.call(null,G__24709));
}} else {
var G__24730 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24730) : cb.call(null,G__24730));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.load_deps = (function cljs$js$load_deps(){
var args24738 = [];
var len__17521__auto___24743 = arguments.length;
var i__17522__auto___24744 = (0);
while(true){
if((i__17522__auto___24744 < len__17521__auto___24743)){
args24738.push((arguments[i__17522__auto___24744]));

var G__24745 = (i__17522__auto___24744 + (1));
i__17522__auto___24744 = G__24745;
continue;
} else {
}
break;
}

var G__24740 = args24738.length;
switch (G__24740) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24738.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return (cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 ? cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb) : cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,deps,null,cb));
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
if(cljs.core.truth_(cljs.core.constant$keyword$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR_24741 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_24741){
return (function (p1__24737_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.constant$keyword$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),p1__24737_SHARP_));
});})(_STAR_cljs_dep_set_STAR_24741))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(cljs.core.constant$keyword$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.constant$keyword$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__24737#","p1__24737#",2105151732,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(cljs.core.constant$keyword$_STAR_cljs_DASH_dep_DASH_set_STAR_,new cljs.core.Symbol(null,"bound-vars","bound-vars",1684649184,null)),new cljs.core.Symbol(null,"p1__24737#","p1__24737#",2105151732,null)))),new cljs.core.Symbol(null,"deps","deps",-771075450,null))], 0)))].join('')));
}

if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars,dep,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$context),cljs.core.constant$keyword$ns),((function (dep,_STAR_cljs_dep_set_STAR_24741){
return (function (res){
if(cljs.core.not(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(dep,_STAR_cljs_dep_set_STAR_24741))
);
} else {
var G__24742 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24742) : cb.call(null,G__24742));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_24741;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 6;
cljs.js.analyze_deps = (function cljs$js$analyze_deps(){
var args24748 = [];
var len__17521__auto___24771 = arguments.length;
var i__17522__auto___24772 = (0);
while(true){
if((i__17522__auto___24772 < len__17521__auto___24771)){
args24748.push((arguments[i__17522__auto___24772]));

var G__24773 = (i__17522__auto___24772 + (1));
i__17522__auto___24772 = G__24773;
continue;
} else {
}
break;
}

var G__24750 = args24748.length;
switch (G__24750) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24748.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var compiler = (function (){var G__24751 = cljs.core.constant$keyword$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24751) : cljs.core.deref.call(null,G__24751));
})();
var _STAR_cljs_dep_set_STAR_24752 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_24752,compiler){
return (function (p1__24747_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.core.constant$keyword$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),p1__24747_SHARP_));
});})(_STAR_cljs_dep_set_STAR_24752,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(cljs.core.constant$keyword$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.constant$keyword$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__24747#","p1__24747#",-1356638416,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(cljs.core.constant$keyword$_STAR_cljs_DASH_dep_DASH_set_STAR_,new cljs.core.Symbol(null,"bound-vars","bound-vars",1684649184,null)),new cljs.core.Symbol(null,"p1__24747#","p1__24747#",-1356638416,null)))),new cljs.core.Symbol(null,"deps","deps",-771075450,null))], 0)))].join('')));
}

if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{return cljs.core.constant$keyword$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars).call(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,dep,cljs.core.constant$keyword$path,cljs.js.ns__GT_relpath(dep)], null),((function (dep,_STAR_cljs_dep_set_STAR_24752,compiler){
return (function (resource){
if((cljs.core.map_QMARK_(resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("*load-fn* may only return a map or nil"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"resource","resource",1892430363,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"resource","resource",1892430363,null)))], 0)))].join('')));
}

if(cljs.core.truth_(resource)){
var map__24755 = resource;
var map__24755__$1 = ((((!((map__24755 == null)))?((((map__24755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24755):map__24755);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24755__$1,cljs.core.constant$keyword$name);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24755__$1,cljs.core.constant$keyword$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24755__$1,cljs.core.constant$keyword$source);
var pred__24757 = cljs.core._EQ_;
var expr__24758 = lang;
if(cljs.core.truth_((pred__24757.cljs$core$IFn$_invoke$arity$2 ? pred__24757.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$clj,expr__24758) : pred__24757.call(null,cljs.core.constant$keyword$clj,expr__24758)))){
var G__24760 = bound_vars;
var G__24761 = source;
var G__24762 = name;
var G__24763 = opts;
var G__24764 = ((function (G__24760,G__24761,G__24762,G__24763,pred__24757,expr__24758,map__24755,map__24755__$1,name,lang,source,dep,_STAR_cljs_dep_set_STAR_24752,compiler){
return (function (res){
if(cljs.core.not(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(G__24760,G__24761,G__24762,G__24763,pred__24757,expr__24758,map__24755,map__24755__$1,name,lang,source,dep,_STAR_cljs_dep_set_STAR_24752,compiler))
;
return (cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5 ? cljs.js.analyze_str_STAR_.cljs$core$IFn$_invoke$arity$5(G__24760,G__24761,G__24762,G__24763,G__24764) : cljs.js.analyze_str_STAR_.call(null,G__24760,G__24761,G__24762,G__24763,G__24764));
} else {
if(cljs.core.truth_((pred__24757.cljs$core$IFn$_invoke$arity$2 ? pred__24757.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$js,expr__24758) : pred__24757.call(null,cljs.core.constant$keyword$js,expr__24758)))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,[cljs.core.str("Invalid :lang specified "),cljs.core.str(lang),cljs.core.str(", only :clj or :js allowed")].join('')));
}
}
} else {
var G__24767 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__24768 = cljs.core.constant$keyword$undeclared_DASH_ns;
var G__24769 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ns_DASH_sym,dep,cljs.core.constant$keyword$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__24768,G__24769) : cljs.analyzer.error_message.call(null,G__24768,G__24769));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24767) : cb.call(null,G__24767));
}
});})(dep,_STAR_cljs_dep_set_STAR_24752,compiler))
);
}catch (e24753){var cause = e24753;
var G__24754 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str("Could not analyze dep "),cljs.core.str(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24754) : cb.call(null,G__24754));
}} else {
var G__24770 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24770) : cb.call(null,G__24770));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_24752;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;
cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__16482__auto__ = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(reload) : k.call(null,reload));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var or__16482__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__16482__auto____$1)){
return or__16482__auto____$1;
} else {
var and__16470__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__16470__auto__){
var and__16470__auto____$1 = cljs.core.constant$keyword$_STAR_reload_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__16470__auto____$1)){
return cljs.core.constant$keyword$reload;
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
}
}
})();
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$macros_DASH_ns,true),cljs.core.constant$keyword$context),cljs.core.constant$keyword$ns),((function (nsym,k__$1){
return (function (res){
if(cljs.core.not(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs$js$load_macros(bound_vars,k__$1,cljs.core.next(macros),reload,reloads,opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(nsym,k__$1))
);
} else {
var G__24783 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24783) : cb.call(null,G__24783));
}
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(){
var args24784 = [];
var len__17521__auto___24809 = arguments.length;
var i__17522__auto___24810 = (0);
while(true){
if((i__17522__auto___24810 < len__17521__auto___24809)){
args24784.push((arguments[i__17522__auto___24810]));

var G__24811 = (i__17522__auto___24810 + (1));
i__17522__auto___24810 = G__24811;
continue;
} else {
}
break;
}

var G__24786 = args24784.length;
switch (G__24786) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24784.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__24787,opts,cb){
var map__24788 = p__24787;
var map__24788__$1 = ((((!((map__24788 == null)))?((((map__24788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24788):map__24788);
var ast = map__24788__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24788__$1,cljs.core.constant$keyword$op);
if(cljs.core.truth_(cljs.core.constant$keyword$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Namespace side effects for",cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$ns,op)){
var map__24790 = ast;
var map__24790__$1 = ((((!((map__24790 == null)))?((((map__24790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24790):map__24790);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24790__$1,cljs.core.constant$keyword$deps);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24790__$1,cljs.core.constant$keyword$uses);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24790__$1,cljs.core.constant$keyword$requires);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24790__$1,cljs.core.constant$keyword$require_DASH_macros);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24790__$1,cljs.core.constant$keyword$use_DASH_macros);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24790__$1,cljs.core.constant$keyword$reload);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24790__$1,cljs.core.constant$keyword$reloads);
var env = cljs.core.constant$keyword$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var check_uses_and_load_macros = ((function (map__24790,map__24790__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__24788,map__24788__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res){
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var res__$1 = (function (){try{if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.constant$keyword$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.seq(uses);
} else {
return and__16470__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.constant$keyword$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses(uses,env);

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,null], null);
} else {
return null;
}
}catch (e24804){var cause = e24804;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str("Could not parse ns form "),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$_STAR_load_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(cljs.core.constant$keyword$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Processing :use-macros for",cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.constant$keyword$use_DASH_macros,use_macros,reload,reloads,opts,((function (res__$1,map__24790,map__24790__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__24788,map__24788__$1,ast,op){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Processing :require-macros for",cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.constant$keyword$require_DASH_macros,require_macros,reloads,reloads,opts,((function (res__$1,map__24790,map__24790__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__24788,map__24788__$1,ast,op){
return (function (res__$3){
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res__$3))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$3) : cb.call(null,res__$3));
} else {
var res__$4 = (function (){try{if(cljs.core.seq(use_macros)){
if(cljs.core.truth_(cljs.core.constant$keyword$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Checking :use-macros for",cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

cljs.analyzer.check_use_macros(use_macros,env);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,null], null);
}catch (e24805){var cause = e24805;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,[cljs.core.str("Could not parse ns form "),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res__$4))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$4) : cb.call(null,res__$4));
} else {
var G__24806 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24806) : cb.call(null,G__24806));
}
}
});})(res__$1,map__24790,map__24790__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__24788,map__24788__$1,ast,op))
);
}
});})(res__$1,map__24790,map__24790__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__24788,map__24788__$1,ast,op))
);
} else {
var G__24807 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24807) : cb.call(null,G__24807));
}
}
}
});})(map__24790,map__24790__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__24788,map__24788__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__16470__auto__ = load;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.seq(deps);
} else {
return and__16470__auto__;
}
})())){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast),deps,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$macros_DASH_ns),check_uses_and_load_macros);
} else {
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.not(load);
if(and__16470__auto__){
var and__16470__auto____$1 = cljs.core.constant$keyword$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__16470__auto____$1)){
return cljs.core.seq(deps);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast),deps,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$macros_DASH_ns),check_uses_and_load_macros);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,null], null));

}
}
} else {
var G__24808 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24808) : cb.call(null,G__24808));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__16482__auto__ = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__24840 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
var G__24840__$1 = (cljs.core.truth_(cljs.core.constant$keyword$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24840,cljs.core.constant$keyword$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data()):G__24840);
return G__24840__$1;
})();
return ((function (rdr,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
while(true){
var _STAR_compiler_STAR_24853 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR_24854 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_ns_STAR_24855 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR_24856 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_data_readers_STAR_24857 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_source_map_data_STAR_24858 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.constant$keyword$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.analyzer._STAR_passes_STAR_ = cljs.core.constant$keyword$_STAR_passes_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.constant$keyword$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.constant$keyword$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$eof,eof,cljs.core.constant$keyword$read_DASH_cond,cljs.core.constant$keyword$allow,cljs.core.constant$keyword$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$cljs,null], null), null)], null),rdr)], null);
}catch (e24859){var cause = e24859;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str("Could not analyze "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__24860 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.constant$keyword$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__24860__$1 = (cljs.core.truth_(cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24860,cljs.core.constant$keyword$context,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(opts)):G__24860);
var G__24860__$2 = (cljs.core.truth_(cljs.core.constant$keyword$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24860__$1,cljs.core.constant$keyword$def_DASH_emits_DASH_var,true):G__24860__$1);
return G__24860__$2;
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e24861){var cause = e24861;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not analyze "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$ns,cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast,opts,((function (last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_24853,_STAR_cljs_ns_STAR_24854,_STAR_ns_STAR_24855,_STAR_passes_STAR_24856,_STAR_data_readers_STAR_24857,_STAR_source_map_data_STAR_24858,rdr,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast));
}
});})(last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_24853,_STAR_cljs_ns_STAR_24854,_STAR_ns_STAR_24855,_STAR_passes_STAR_24856,_STAR_data_readers_STAR_24857,_STAR_source_map_data_STAR_24858,rdr,eof,aenv,the_ns,bound_vars__$1))
);
} else {
var G__24863 = ast;
var G__24864 = ns;
last_ast = G__24863;
ns = G__24864;
continue;
}
}
} else {
var G__24862 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,last_ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24862) : cb.call(null,G__24862));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_24858;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_24857;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR_24856;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_24855;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_24854;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_24853;
}break;
}
});})(rdr,eof,aenv,the_ns,bound_vars__$1))
.call(null,null,the_ns);
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 * the compiler state
 * 
 * source (string)
 * the ClojureScript source
 * 
 * name (symbol)
 * optional, the name of the source
 * 
 * opts (map)
 * compilation options.
 * 
 * :eval - the eval function to invoke, see *eval-fn*
 * :load - library resolution function, see *load-fn*
 * 
 * cb (function)
 * callback, will be invoked with a map. If successful the map will contain
 * a key :value, the actual value is not meaningful. If unsuccessful the
 * map will contain a key :error with an ex-info instance describing the cause
 * of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(){
var args24865 = [];
var len__17521__auto___24868 = arguments.length;
var i__17522__auto___24869 = (0);
while(true){
if((i__17522__auto___24869 < len__17521__auto___24868)){
args24865.push((arguments[i__17522__auto___24869]));

var G__24870 = (i__17522__auto___24869 + (1));
i__17522__auto___24869 = G__24870;
continue;
} else {
}
break;
}

var G__24867 = args24865.length;
switch (G__24867) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24865.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),new cljs.core.Symbol(null,"state","state",-348086572,null))], 0)))].join('')));
}

if(typeof source === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"source","source",1206599988,null))], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-name?","valid-name?",1312075736,null),new cljs.core.Symbol(null,"name","name",-810760592,null))], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null))], 0)))].join('')));
}

return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$_STAR_compiler_STAR_,state,cljs.core.constant$keyword$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.constant$keyword$_STAR_passes_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$passes.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),cljs.core.constant$keyword$_STAR_analyze_DASH_deps_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return true;
}
})(),cljs.core.constant$keyword$_STAR_load_DASH_macros_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$load_DASH_macros.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return true;
}
})(),cljs.core.constant$keyword$_STAR_load_DASH_fn_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.constant$keyword$_STAR_eval_DASH_fn_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;
cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__16482__auto__ = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__24885 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
var G__24885__$1 = (cljs.core.truth_(cljs.core.constant$keyword$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24885,cljs.core.constant$keyword$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data()):G__24885);
return G__24885__$1;
})();
var _STAR_compiler_STAR_24886 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_24887 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_24888 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_ns_STAR_24889 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR_24890 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_source_map_data_STAR_24891 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.constant$keyword$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.constant$keyword$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = cljs.core.constant$keyword$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.constant$keyword$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.constant$keyword$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__24892 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.constant$keyword$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__24892__$1 = (cljs.core.truth_(cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24892,cljs.core.constant$keyword$context,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(opts)):G__24892);
var G__24892__$2 = (cljs.core.truth_(cljs.core.constant$keyword$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24892__$1,cljs.core.constant$keyword$def_DASH_emits_DASH_var,true):G__24892__$1);
return G__24892__$2;
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e24893){var cause = e24893;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not eval "),cljs.core.str(form)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$ns,cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast,opts,((function (ast,aenv,aenv__$1,res,_STAR_compiler_STAR_24886,_STAR_eval_fn_STAR_24887,_STAR_cljs_ns_STAR_24888,_STAR_ns_STAR_24889,_STAR_data_readers_STAR_24890,_STAR_source_map_data_STAR_24891,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var src = [cljs.core.str("goog.provide(\""),cljs.core.str(cljs.core.munge(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str("\")")].join('');
var G__24894 = (cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$source,src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$source,src], null)));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24894) : cb.call(null,G__24894));
}
});})(ast,aenv,aenv__$1,res,_STAR_compiler_STAR_24886,_STAR_eval_fn_STAR_24887,_STAR_cljs_ns_STAR_24888,_STAR_ns_STAR_24889,_STAR_data_readers_STAR_24890,_STAR_source_map_data_STAR_24891,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__17437__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_24895_24898 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_24896_24899 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_24895_24898,_STAR_print_fn_STAR_24896_24899,sb__17437__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_24886,_STAR_eval_fn_STAR_24887,_STAR_cljs_ns_STAR_24888,_STAR_ns_STAR_24889,_STAR_data_readers_STAR_24890,_STAR_source_map_data_STAR_24891,the_ns,bound_vars__$1){
return (function (x__17438__auto__){
return sb__17437__auto__.append(x__17438__auto__);
});})(_STAR_print_newline_STAR_24895_24898,_STAR_print_fn_STAR_24896_24899,sb__17437__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_24886,_STAR_eval_fn_STAR_24887,_STAR_cljs_ns_STAR_24888,_STAR_ns_STAR_24889,_STAR_data_readers_STAR_24890,_STAR_source_map_data_STAR_24891,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24896_24899;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24895_24898;
}
return [cljs.core.str(sb__17437__auto__)].join('');
})();
var G__24897 = (cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$source,src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$source,src], null)));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24897) : cb.call(null,G__24897));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_24891;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_24890;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_24889;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_24888;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_24887;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_24886;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 * the compiler state
 * 
 * form (s-expr)
 * the ClojureScript source
 * 
 * opts (map)
 * compilation options.
 * 
 * :eval - the eval function to invoke, see *eval-fn*
 * :load - library resolution function, see *load-fn*
 * 
 * cb (function)
 * callback, will be invoked with a map. If successful the map will contain
 * a :value key with the result of evalution. If unsuccessful the map wil
 * contain a :error key with an ex-info instance describing the cause of
 * failure.
 */
cljs.js.eval = (function cljs$js$eval(){
var args24900 = [];
var len__17521__auto___24903 = arguments.length;
var i__17522__auto___24904 = (0);
while(true){
if((i__17522__auto___24904 < len__17521__auto___24903)){
args24900.push((arguments[i__17522__auto___24904]));

var G__24905 = (i__17522__auto___24904 + (1));
i__17522__auto___24904 = G__24905;
continue;
} else {
}
break;
}

var G__24902 = args24900.length;
switch (G__24902) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24900.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$_STAR_compiler_STAR_,state,cljs.core.constant$keyword$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.constant$keyword$_STAR_analyze_DASH_deps_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return true;
}
})(),cljs.core.constant$keyword$_STAR_load_DASH_macros_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$load_DASH_macros.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return true;
}
})(),cljs.core.constant$keyword$_STAR_load_DASH_fn_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.constant$keyword$_STAR_eval_DASH_fn_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;
cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__16482__auto__ = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__24937 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
var G__24937__$1 = (cljs.core.truth_(cljs.core.constant$keyword$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24937,cljs.core.constant$keyword$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data()):G__24937);
return G__24937__$1;
})();
return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_24951 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_24952 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_24953 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_ns_STAR_24954 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR_24955 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_source_map_data_STAR_24956 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.constant$keyword$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.constant$keyword$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.constant$keyword$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.constant$keyword$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$eof,eof,cljs.core.constant$keyword$read_DASH_cond,cljs.core.constant$keyword$allow,cljs.core.constant$keyword$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$cljs,null], null), null)], null),rdr)], null);
}catch (e24957){var cause = e24957;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str("Could not compile "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__24958 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.constant$keyword$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__24958__$1 = (cljs.core.truth_(cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24958,cljs.core.constant$keyword$context,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(opts)):G__24958);
var G__24958__$2 = (cljs.core.truth_(cljs.core.constant$keyword$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24958__$1,cljs.core.constant$keyword$def_DASH_emits_DASH_var,true):G__24958__$1);
return G__24958__$2;
})();
var ast = (function (){try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts);
}catch (e24959){var cause = e24959;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not compile "),cljs.core.str(name)].join(''),cause));
}})();
sb.append((function (){var sb__17437__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_24960_24963 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_24961_24964 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_24960_24963,_STAR_print_fn_STAR_24961_24964,sb__17437__auto__,aenv__$1,ast,form,res,_STAR_compiler_STAR_24951,_STAR_eval_fn_STAR_24952,_STAR_cljs_ns_STAR_24953,_STAR_ns_STAR_24954,_STAR_data_readers_STAR_24955,_STAR_source_map_data_STAR_24956,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__17438__auto__){
return sb__17437__auto__.append(x__17438__auto__);
});})(ns,_STAR_print_newline_STAR_24960_24963,_STAR_print_fn_STAR_24961_24964,sb__17437__auto__,aenv__$1,ast,form,res,_STAR_compiler_STAR_24951,_STAR_eval_fn_STAR_24952,_STAR_cljs_ns_STAR_24953,_STAR_ns_STAR_24954,_STAR_data_readers_STAR_24955,_STAR_source_map_data_STAR_24956,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24961_24964;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24960_24963;
}
return [cljs.core.str(sb__17437__auto__)].join('');
})());

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$ns,cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,aenv__$1,ast,opts,((function (ns,aenv__$1,ast,form,res,_STAR_compiler_STAR_24951,_STAR_eval_fn_STAR_24952,_STAR_cljs_ns_STAR_24953,_STAR_ns_STAR_24954,_STAR_data_readers_STAR_24955,_STAR_source_map_data_STAR_24956,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
return cljs$js$compile_str_STAR__$_compile_loop(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast));
}
});})(ns,aenv__$1,ast,form,res,_STAR_compiler_STAR_24951,_STAR_eval_fn_STAR_24952,_STAR_cljs_ns_STAR_24953,_STAR_ns_STAR_24954,_STAR_data_readers_STAR_24955,_STAR_source_map_data_STAR_24956,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
var G__24965 = ns;
ns = G__24965;
continue;
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.compiler._STAR_source_map_data_STAR_) : cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_)),opts);
} else {
}

var G__24962 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,sb.toString()], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__24962) : cb.call(null,G__24962));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_24956;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_24955;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_24954;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_24953;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_24952;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_24951;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1))
.call(null,the_ns);
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 * the compiler state
 * 
 * source (string)
 * the ClojureScript source
 * 
 * name (symbol)
 * optional, the name of the source
 * 
 * opts (map)
 * compilation options.
 * 
 * :load       - library resolution function, see *load-fn*
 * :source-map - set to true to generate inline source map information
 * 
 * cb (function)
 * callback, will be invoked with a map. If successful the map will contain
 * a key :value with the compilation result (string). If unsuccessful the map
 * will contain a key :error with an ex-info instance describing the cause
 * of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(){
var args24966 = [];
var len__17521__auto___24969 = arguments.length;
var i__17522__auto___24970 = (0);
while(true){
if((i__17522__auto___24970 < len__17521__auto___24969)){
args24966.push((arguments[i__17522__auto___24970]));

var G__24971 = (i__17522__auto___24970 + (1));
i__17522__auto___24970 = G__24971;
continue;
} else {
}
break;
}

var G__24968 = args24966.length;
switch (G__24968) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24966.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),new cljs.core.Symbol(null,"state","state",-348086572,null))], 0)))].join('')));
}

if(typeof source === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"source","source",1206599988,null))], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-name?","valid-name?",1312075736,null),new cljs.core.Symbol(null,"name","name",-810760592,null))], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null))], 0)))].join('')));
}

return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$_STAR_compiler_STAR_,state,cljs.core.constant$keyword$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.constant$keyword$_STAR_analyze_DASH_deps_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return true;
}
})(),cljs.core.constant$keyword$_STAR_load_DASH_macros_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$load_DASH_macros.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return true;
}
})(),cljs.core.constant$keyword$_STAR_load_DASH_fn_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.constant$keyword$_STAR_eval_DASH_fn_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),cljs.core.constant$keyword$_STAR_sm_DASH_data_STAR_,(cljs.core.truth_(cljs.core.constant$keyword$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;
cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__16482__auto__ = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__25002 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
var G__25002__$1 = (cljs.core.truth_(cljs.core.constant$keyword$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25002,cljs.core.constant$keyword$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data()):G__25002);
return G__25002__$1;
})();
if(cljs.core.truth_(cljs.core.constant$keyword$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Evaluating",name], 0));
} else {
}

return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_25015 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_25016 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_25017 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_ns_STAR_25018 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR_25019 = cljs.tools.reader._STAR_data_readers_STAR_;
var _STAR_source_map_data_STAR_25020 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = cljs.core.constant$keyword$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = cljs.core.constant$keyword$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.constant$keyword$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.compiler._STAR_source_map_data_STAR_ = cljs.core.constant$keyword$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$eof,eof,cljs.core.constant$keyword$read_DASH_cond,cljs.core.constant$keyword$allow,cljs.core.constant$keyword$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$cljs,null], null), null)], null),rdr)], null);
}catch (e25021){var cause = e25021;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,[cljs.core.str("Could not eval "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var form = cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__25022 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.constant$keyword$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__25022__$1 = (cljs.core.truth_(cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25022,cljs.core.constant$keyword$context,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(opts)):G__25022);
var G__25022__$2 = (cljs.core.truth_(cljs.core.constant$keyword$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25022__$1,cljs.core.constant$keyword$def_DASH_emits_DASH_var,true):G__25022__$1);
return G__25022__$2;
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e25023){var cause = e25023;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,[cljs.core.str("Could not eval "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ast = cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$ns,cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(ast))){
sb.append([cljs.core.str("goog.provide(\""),cljs.core.str(cljs.core.munge(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str("\");\n")].join(''));

return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast,opts,((function (ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_25015,_STAR_eval_fn_STAR_25016,_STAR_cljs_ns_STAR_25017,_STAR_ns_STAR_25018,_STAR_data_readers_STAR_25019,_STAR_source_map_data_STAR_25020,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
}
});})(ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_25015,_STAR_eval_fn_STAR_25016,_STAR_cljs_ns_STAR_25017,_STAR_ns_STAR_25018,_STAR_data_readers_STAR_25019,_STAR_source_map_data_STAR_25020,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
sb.append((function (){var sb__17437__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_25024_25027 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_25025_25028 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_25024_25027,_STAR_print_fn_STAR_25025_25028,sb__17437__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_25015,_STAR_eval_fn_STAR_25016,_STAR_cljs_ns_STAR_25017,_STAR_ns_STAR_25018,_STAR_data_readers_STAR_25019,_STAR_source_map_data_STAR_25020,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__17438__auto__){
return sb__17437__auto__.append(x__17438__auto__);
});})(ns,_STAR_print_newline_STAR_25024_25027,_STAR_print_fn_STAR_25025_25028,sb__17437__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_25015,_STAR_eval_fn_STAR_25016,_STAR_cljs_ns_STAR_25017,_STAR_ns_STAR_25018,_STAR_data_readers_STAR_25019,_STAR_source_map_data_STAR_25020,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit(ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25025_25028;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25024_25027;
}
return [cljs.core.str(sb__17437__auto__)].join('');
})());

var G__25029 = ns_SINGLEQUOTE_;
ns = G__25029;
continue;
}
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.compiler._STAR_source_map_data_STAR_) : cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_)),opts);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$lang,cljs.core.constant$keyword$clj,cljs.core.constant$keyword$name,name,cljs.core.constant$keyword$path,cljs.js.ns__GT_relpath(name),cljs.core.constant$keyword$source,js_source,cljs.core.constant$keyword$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,name], null))], null);
var complete = ((function (ns,js_source,evalm,form,res,_STAR_compiler_STAR_25015,_STAR_eval_fn_STAR_25016,_STAR_cljs_ns_STAR_25017,_STAR_ns_STAR_25018,_STAR_data_readers_STAR_25019,_STAR_source_map_data_STAR_25020,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ns,ns,cljs.core.constant$keyword$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e25026){var cause = e25026;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
}
});})(ns,js_source,evalm,form,res,_STAR_compiler_STAR_25015,_STAR_eval_fn_STAR_25016,_STAR_cljs_ns_STAR_25017,_STAR_ns_STAR_25018,_STAR_data_readers_STAR_25019,_STAR_source_map_data_STAR_25020,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;
var temp__4423__auto__ = cljs.core.constant$keyword$cache_DASH_source.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(evalm,complete) : f.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,null], null));
}
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_25020;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_25019;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_25018;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_25017;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_25016;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_25015;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1))
.call(null,cljs.core.constant$keyword$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 * state (atom)
 * the compiler state
 * 
 * source (string)
 * the ClojureScript source
 * 
 * name (symbol)
 * optional, the name of the source
 * 
 * opts (map)
 * compilation options.
 * 
 * :eval         - eval function to invoke, see *eval-fn*
 * :load         - library resolution function, see *load-fn*
 * :source-map   - set to true to generate inline source map information
 * :cache-source - optional, a function to run side-effects with the
 * compilation result prior to actual evalution. This function
 * takes two arguments, the first is the eval map, the source
 * will be under :source. The second argument is a callback of
 * one argument. If an error occurs an :error key should be
 * supplied.
 * 
 * cb (function)
 * callback, will be invoked with a map. If succesful the map will contain
 * a :value key with the result of evaluation and :ns the current namespace.
 * If unsuccessful will contain a :error key with an ex-info instance describing
 * the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(){
var args25030 = [];
var len__17521__auto___25033 = arguments.length;
var i__17522__auto___25034 = (0);
while(true){
if((i__17522__auto___25034 < len__17521__auto___25033)){
args25030.push((arguments[i__17522__auto___25034]));

var G__25035 = (i__17522__auto___25034 + (1));
i__17522__auto___25034 = G__25035;
continue;
} else {
}
break;
}

var G__25032 = args25030.length;
switch (G__25032) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25030.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_(state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),new cljs.core.Symbol(null,"state","state",-348086572,null))], 0)))].join('')));
}

if(typeof source === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"source","source",1206599988,null))], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_(name))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-name?","valid-name?",1312075736,null),new cljs.core.Symbol(null,"name","name",-810760592,null))], 0)))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_(opts))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null))], 0)))].join('')));
}

return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$_STAR_compiler_STAR_,state,cljs.core.constant$keyword$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.constant$keyword$_STAR_analyze_DASH_deps_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return true;
}
})(),cljs.core.constant$keyword$_STAR_load_DASH_macros_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$load_DASH_macros.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return true;
}
})(),cljs.core.constant$keyword$_STAR_load_DASH_fn_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.constant$keyword$_STAR_eval_DASH_fn_STAR_,(function (){var or__16482__auto__ = cljs.core.constant$keyword$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

//# sourceMappingURL=js.js.map?rel=1440458053566