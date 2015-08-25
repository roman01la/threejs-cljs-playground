// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('cljs.analyzer');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs.analyzer._STAR_cljs_ns_STAR_ = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
cljs.analyzer._STAR_cljs_file_STAR_ = null;
cljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$dep_DASH_path,cljs.core.PersistentVector.EMPTY], null));
cljs.analyzer._STAR_analyze_deps_STAR_ = true;
cljs.analyzer._STAR_load_tests_STAR_ = true;
cljs.analyzer._STAR_load_macros_STAR_ = true;
cljs.analyzer._STAR_reload_macros_STAR_ = false;
cljs.analyzer._STAR_macro_infer_STAR_ = true;
cljs.analyzer._STAR_file_defs_STAR_ = null;
cljs.analyzer._STAR_verbose_STAR_ = false;
cljs.analyzer._cljs_macros_loaded = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$invoke_DASH_ctor,cljs.core.constant$keyword$extending_DASH_base_DASH_js_DASH_type,cljs.core.constant$keyword$redef,cljs.core.constant$keyword$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.constant$keyword$invalid_DASH_protocol_DASH_symbol,cljs.core.constant$keyword$protocol_DASH_duped_DASH_method,cljs.core.constant$keyword$munged_DASH_namespace,cljs.core.constant$keyword$single_DASH_segment_DASH_namespace,cljs.core.constant$keyword$fn_DASH_arity,cljs.core.constant$keyword$variadic_DASH_max_DASH_arity,cljs.core.constant$keyword$fn_DASH_deprecated,cljs.core.constant$keyword$undeclared_DASH_var,cljs.core.constant$keyword$preamble_DASH_missing,cljs.core.constant$keyword$undeclared_DASH_protocol_DASH_symbol,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$unprovided,cljs.core.constant$keyword$ns_DASH_var_DASH_clash,cljs.core.constant$keyword$undeclared_DASH_ns,cljs.core.constant$keyword$undeclared_DASH_ns_DASH_form,cljs.core.constant$keyword$invalid_DASH_arithmetic,cljs.core.constant$keyword$protocol_DASH_deprecated,cljs.core.constant$keyword$fn_DASH_var,cljs.core.constant$keyword$overload_DASH_arity,cljs.core.constant$keyword$protocol_DASH_multiple_DASH_impls,cljs.core.constant$keyword$redef_DASH_in_DASH_file,cljs.core.constant$keyword$protocol_DASH_invalid_DASH_method,cljs.core.constant$keyword$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.constant$keyword$multiple_DASH_variadic_DASH_overloads],[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
cljs.analyzer.js_reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 61, ["typeof",null,"float",null,"implements",null,"else",null,"boolean",null,"abstract",null,"int",null,"static",null,"package",null,"this",null,"yield",null,"interface",null,"void",null,"delete",null,"class",null,"export",null,"var",null,"try",null,"long",null,"null",null,"return",null,"methods",null,"native",null,"private",null,"new",null,"for",null,"catch",null,"extends",null,"short",null,"protected",null,"throws",null,"synchronized",null,"transient",null,"super",null,"if",null,"let",null,"import",null,"char",null,"switch",null,"const",null,"case",null,"break",null,"volatile",null,"function",null,"continue",null,"final",null,"do",null,"double",null,"while",null,"public",null,"arguments",null,"debugger",null,"with",null,"instanceof",null,"default",null,"throw",null,"goto",null,"finally",null,"byte",null,"in",null,"enum",null], null), null);
cljs.analyzer.SENTINEL = {};
cljs.analyzer.gets = (function cljs$analyzer$gets(){
var args27021 = [];
var len__17521__auto___27024 = arguments.length;
var i__17522__auto___27025 = (0);
while(true){
if((i__17522__auto___27025 < len__17521__auto___27024)){
args27021.push((arguments[i__17522__auto___27025]));

var G__27026 = (i__17522__auto___27025 + (1));
i__17522__auto___27025 = G__27026;
continue;
} else {
}
break;
}

var G__27023 = args27021.length;
switch (G__27023) {
case 3:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27021.length)].join('')));

}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3 = (function (m,k0,k1){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k1);
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4 = (function (m,k0,k1,k2){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$2,k2);
}
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5 = (function (m,k0,k1,k2,k3){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$2,k2,cljs.analyzer.SENTINEL);
if((m__$3 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$3,k3);
}
}
}
});

cljs.analyzer.gets.cljs$lang$maxFixedArity = 5;
cljs.analyzer.CLJ_NIL_SYM = new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null);
cljs.analyzer.NUMBER_SYM = new cljs.core.Symbol(null,"number","number",-1084057331,null);
cljs.analyzer.STRING_SYM = new cljs.core.Symbol(null,"string","string",-349010059,null);
cljs.analyzer.BOOLEAN_SYM = new cljs.core.Symbol(null,"boolean","boolean",-278886877,null);
cljs.analyzer.JS_STAR_SYM = new cljs.core.Symbol(null,"js*","js*",-1134233646,null);
cljs.analyzer.DOT_SYM = new cljs.core.Symbol(null,".",".",1975675962,null);
cljs.analyzer.NEW_SYM = new cljs.core.Symbol(null,"new","new",-444906321,null);
cljs.analyzer.CLJS_CORE_SYM = new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null);
cljs.analyzer.CLJS_CORE_MACROS_SYM = new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null);
cljs.analyzer.IGNORE_SYM = new cljs.core.Symbol(null,"ignore","ignore",8989494,null);
cljs.analyzer.ANY_SYM = new cljs.core.Symbol(null,"any","any",-948528346,null);
cljs.analyzer.cljs_seq_QMARK_ = (function cljs$analyzer$cljs_seq_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (64))) || (x.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_map_QMARK_ = (function cljs$analyzer$cljs_map_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (1024))) || (x.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_vector_QMARK_ = (function cljs$analyzer$cljs_vector_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16384))) || (x.cljs$core$IVector$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_set_QMARK_ = (function cljs$analyzer$cljs_set_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (4096))) || (x.cljs$core$ISet$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.munge_path = (function cljs$analyzer$munge_path(ss){
return cljs.core.munge([cljs.core.str(ss)].join(''));
});
/**
 * Given a namespace as a symbol return the relative path. May optionally
 * provide the file extension, defaults to :cljs.
 */
cljs.analyzer.ns__GT_relpath = (function cljs$analyzer$ns__GT_relpath(){
var args27036 = [];
var len__17521__auto___27039 = arguments.length;
var i__17522__auto___27040 = (0);
while(true){
if((i__17522__auto___27040 < len__17521__auto___27039)){
args27036.push((arguments[i__17522__auto___27040]));

var G__27041 = (i__17522__auto___27040 + (1));
i__17522__auto___27040 = G__27041;
continue;
} else {
}
break;
}

var G__27038 = args27036.length;
switch (G__27038) {
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27036.length)].join('')));

}
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.constant$keyword$cljs);
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2 = (function (ns,ext){
return [cljs.core.str(clojure.string.replace(cljs.analyzer.munge_path(ns),".","/")),cljs.core.str("."),cljs.core.str(cljs.core.name(ext))].join('');
});

cljs.analyzer.ns__GT_relpath.cljs$lang$maxFixedArity = 2;
cljs.analyzer.topo_sort = (function cljs$analyzer$topo_sort(){
var args27043 = [];
var len__17521__auto___27057 = arguments.length;
var i__17522__auto___27058 = (0);
while(true){
if((i__17522__auto___27058 < len__17521__auto___27057)){
args27043.push((arguments[i__17522__auto___27058]));

var G__27059 = (i__17522__auto___27058 + (1));
i__17522__auto___27058 = G__27059;
continue;
} else {
}
break;
}

var G__27045 = args27043.length;
switch (G__27045) {
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27043.length)].join('')));

}
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(x,(0),(function (){var G__27046 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27046) : cljs.core.atom.call(null,G__27046));
})(),cljs.core.memoize(get_deps));
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = (memo_get_deps.cljs$core$IFn$_invoke$arity$1 ? memo_get_deps.cljs$core$IFn$_invoke$arity$1(x) : memo_get_deps.call(null,x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([deps], 0));

var seq__27047_27061 = cljs.core.seq(deps);
var chunk__27048_27062 = null;
var count__27049_27063 = (0);
var i__27050_27064 = (0);
while(true){
if((i__27050_27064 < count__27049_27063)){
var dep_27065 = chunk__27048_27062.cljs$core$IIndexed$_nth$arity$2(null,i__27050_27064);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_27065,(depth + (1)),state,memo_get_deps);

var G__27066 = seq__27047_27061;
var G__27067 = chunk__27048_27062;
var G__27068 = count__27049_27063;
var G__27069 = (i__27050_27064 + (1));
seq__27047_27061 = G__27066;
chunk__27048_27062 = G__27067;
count__27049_27063 = G__27068;
i__27050_27064 = G__27069;
continue;
} else {
var temp__4425__auto___27070 = cljs.core.seq(seq__27047_27061);
if(temp__4425__auto___27070){
var seq__27047_27071__$1 = temp__4425__auto___27070;
if(cljs.core.chunked_seq_QMARK_(seq__27047_27071__$1)){
var c__17266__auto___27072 = cljs.core.chunk_first(seq__27047_27071__$1);
var G__27073 = cljs.core.chunk_rest(seq__27047_27071__$1);
var G__27074 = c__17266__auto___27072;
var G__27075 = cljs.core.count(c__17266__auto___27072);
var G__27076 = (0);
seq__27047_27061 = G__27073;
chunk__27048_27062 = G__27074;
count__27049_27063 = G__27075;
i__27050_27064 = G__27076;
continue;
} else {
var dep_27077 = cljs.core.first(seq__27047_27071__$1);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_27077,(depth + (1)),state,memo_get_deps);

var G__27078 = cljs.core.next(seq__27047_27071__$1);
var G__27079 = null;
var G__27080 = (0);
var G__27081 = (0);
seq__27047_27061 = G__27078;
chunk__27048_27062 = G__27079;
count__27049_27063 = G__27080;
i__27050_27064 = G__27081;
continue;
}
} else {
}
}
break;
}

var seq__27051_27082 = cljs.core.seq(cljs.core.subseq.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core._LT_,depth));
var chunk__27052_27083 = null;
var count__27053_27084 = (0);
var i__27054_27085 = (0);
while(true){
if((i__27054_27085 < count__27053_27084)){
var vec__27055_27086 = chunk__27052_27083.cljs$core$IIndexed$_nth$arity$2(null,i__27054_27085);
var _LT_depth_27087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27055_27086,(0),null);
var __27088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27055_27086,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_27087], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__27089 = seq__27051_27082;
var G__27090 = chunk__27052_27083;
var G__27091 = count__27053_27084;
var G__27092 = (i__27054_27085 + (1));
seq__27051_27082 = G__27089;
chunk__27052_27083 = G__27090;
count__27053_27084 = G__27091;
i__27054_27085 = G__27092;
continue;
} else {
var temp__4425__auto___27093 = cljs.core.seq(seq__27051_27082);
if(temp__4425__auto___27093){
var seq__27051_27094__$1 = temp__4425__auto___27093;
if(cljs.core.chunked_seq_QMARK_(seq__27051_27094__$1)){
var c__17266__auto___27095 = cljs.core.chunk_first(seq__27051_27094__$1);
var G__27096 = cljs.core.chunk_rest(seq__27051_27094__$1);
var G__27097 = c__17266__auto___27095;
var G__27098 = cljs.core.count(c__17266__auto___27095);
var G__27099 = (0);
seq__27051_27082 = G__27096;
chunk__27052_27083 = G__27097;
count__27053_27084 = G__27098;
i__27054_27085 = G__27099;
continue;
} else {
var vec__27056_27100 = cljs.core.first(seq__27051_27094__$1);
var _LT_depth_27101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27056_27100,(0),null);
var __27102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27056_27100,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_27101], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__27103 = cljs.core.next(seq__27051_27094__$1);
var G__27104 = null;
var G__27105 = (0);
var G__27106 = (0);
seq__27051_27082 = G__27103;
chunk__27052_27083 = G__27104;
count__27053_27084 = G__27105;
i__27054_27085 = G__27106;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(0))){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)))));
} else {
return null;
}
});

cljs.analyzer.topo_sort.cljs$lang$maxFixedArity = 4;

cljs.analyzer.ast_QMARK_ = (function cljs$analyzer$ast_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,cljs.core.constant$keyword$op));
});
if(typeof cljs.analyzer.error_message !== 'undefined'){
} else {
cljs.analyzer.error_message = (function (){var method_table__17376__auto__ = (function (){var G__27107 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27107) : cljs.core.atom.call(null,G__27107));
})();
var prefer_table__17377__auto__ = (function (){var G__27108 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27108) : cljs.core.atom.call(null,G__27108));
})();
var method_cache__17378__auto__ = (function (){var G__27109 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27109) : cljs.core.atom.call(null,G__27109));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__27110 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27110) : cljs.core.atom.call(null,G__27110));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","error-message"),((function (method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__){
return (function() { 
var G__27111__delegate = function (warning_type,_){
return warning_type;
};
var G__27111 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__27112__i = 0, G__27112__a = new Array(arguments.length -  1);
while (G__27112__i < G__27112__a.length) {G__27112__a[G__27112__i] = arguments[G__27112__i + 1]; ++G__27112__i;}
  _ = new cljs.core.IndexedSeq(G__27112__a,0);
} 
return G__27111__delegate.call(this,warning_type,_);};
G__27111.cljs$lang$maxFixedArity = 1;
G__27111.cljs$lang$applyTo = (function (arglist__27113){
var warning_type = cljs.core.first(arglist__27113);
var _ = cljs.core.rest(arglist__27113);
return G__27111__delegate(warning_type,_);
});
G__27111.cljs$core$IFn$_invoke$arity$variadic = G__27111__delegate;
return G__27111;
})()
;})(method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__))
,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$preamble_DASH_missing,(function (warning_type,info){
return [cljs.core.str("Preamble resource file not found: "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.constant$keyword$missing.cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$unprovided,(function (warning_type,info){
return [cljs.core.str("Required namespace not provided for "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.constant$keyword$unprovided.cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$undeclared_DASH_var,(function (warning_type,info){
return [cljs.core.str("Use of undeclared Var "),cljs.core.str(cljs.core.constant$keyword$prefix.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(cljs.core.constant$keyword$suffix.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$undeclared_DASH_ns,(function (warning_type,p__27114){
var map__27115 = p__27114;
var map__27115__$1 = ((((!((map__27115 == null)))?((((map__27115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27115):map__27115);
var info = map__27115__$1;
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.constant$keyword$ns_DASH_sym);
var js_provide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,cljs.core.constant$keyword$js_DASH_provide);
return [cljs.core.str("No such namespace: "),cljs.core.str(ns_sym),cljs.core.str(", could not locate "),cljs.core.str(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.constant$keyword$cljs)),cljs.core.str(", "),cljs.core.str(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,cljs.core.constant$keyword$cljc)),cljs.core.str(", or Closure namespace \""),cljs.core.str(js_provide),cljs.core.str("\"")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$dynamic,(function (warning_type,info){
return [cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" not declared ^:dynamic")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$redef,(function (warning_type,info){
return [cljs.core.str(cljs.core.constant$keyword$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" already refers to: "),cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(cljs.core.constant$keyword$sym.cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" being replaced by: "),cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.constant$keyword$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(cljs.core.constant$keyword$sym.cljs$core$IFn$_invoke$arity$1(info))].join('')))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$redef_DASH_in_DASH_file,(function (warning_type,info){
return [cljs.core.str(cljs.core.constant$keyword$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" at line "),cljs.core.str(cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is being replaced")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$fn_DASH_var,(function (warning_type,info){
return [cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.constant$keyword$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(cljs.core.constant$keyword$sym.cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" no longer fn, references are stale")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$fn_DASH_arity,(function (warning_type,info){
return [cljs.core.str("Wrong number of args ("),cljs.core.str(cljs.core.constant$keyword$argc.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(") passed to "),cljs.core.str((function (){var or__16482__auto__ = cljs.core.constant$keyword$ctor.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(info);
}
})())].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$fn_DASH_deprecated,(function (warning_type,info){
return [cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$fexpr.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" is deprecated.")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$undeclared_DASH_ns_DASH_form,(function (warning_type,info){
return [cljs.core.str("Referred "),cljs.core.str(cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$lib.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(cljs.core.constant$keyword$sym.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not exist")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$protocol_DASH_deprecated,(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is deprecated")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$undeclared_DASH_protocol_DASH_symbol,(function (warning_type,info){
return [cljs.core.str("Can't resolve protocol symbol "),cljs.core.str(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$invalid_DASH_protocol_DASH_symbol,(function (warning_type,info){
return [cljs.core.str("Symbol "),cljs.core.str(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is not a protocol")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$protocol_DASH_invalid_DASH_method,(function (warning_type,info){
if(cljs.core.truth_(cljs.core.constant$keyword$no_DASH_such_DASH_method.cljs$core$IFn$_invoke$arity$1(info))){
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare method called "),cljs.core.str(cljs.core.constant$keyword$fname.cljs$core$IFn$_invoke$arity$1(info))].join('');
} else {
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$fname.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare arity "),cljs.core.str(cljs.core.constant$keyword$invalid_DASH_arity.cljs$core$IFn$_invoke$arity$1(info))].join('');
}
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$protocol_DASH_duped_DASH_method,(function (warning_type,info){
return [cljs.core.str("Duplicated methods in protocol implementation "),cljs.core.str(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(cljs.core.constant$keyword$fname.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$protocol_DASH_multiple_DASH_impls,(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" implemented multiple times")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$multiple_DASH_variadic_DASH_overloads,(function (warning_type,info){
return [cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have more than 1 variadic overload")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$variadic_DASH_max_DASH_arity,(function (warning_type,info){
return [cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have fixed arity function with more params than variadic function")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$overload_DASH_arity,(function (warning_type,info){
return [cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have 2 overloads with same arity")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$extending_DASH_base_DASH_js_DASH_type,(function (warning_type,info){
return [cljs.core.str("Extending an existing JavaScript type - use a different symbol name "),cljs.core.str("instead of "),cljs.core.str(cljs.core.constant$keyword$current_DASH_symbol.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" e.g "),cljs.core.str(cljs.core.constant$keyword$suggested_DASH_symbol.cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$invalid_DASH_arithmetic,(function (warning_type,info){
return [cljs.core.str(cljs.core.constant$keyword$js_DASH_op.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(", all arguments must be numbers, got "),cljs.core.str(cljs.core.constant$keyword$types.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" instead.")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$invoke_DASH_ctor,(function (warning_type,info){
return [cljs.core.str("Cannot invoke type constructor "),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$fexpr.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" as function ")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$single_DASH_segment_DASH_namespace,(function (warning_type,info){
return [cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is a single segment namespace")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$munged_DASH_namespace,(function (warning_type,p__27118){
var map__27119 = p__27118;
var map__27119__$1 = ((((!((map__27119 == null)))?((((map__27119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27119):map__27119);
var info = map__27119__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27119__$1,cljs.core.constant$keyword$name);
var munged = cljs.core.munge(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__27119,map__27119__$1,info,name){
return (function (p1__27117_SHARP_){
if(cljs.core.truth_((cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1(p1__27117_SHARP_) : cljs.analyzer.js_reserved.call(null,p1__27117_SHARP_)))){
return [cljs.core.str(p1__27117_SHARP_),cljs.core.str("$")].join('');
} else {
return p1__27117_SHARP_;
}
});})(map__27119,map__27119__$1,info,name))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name),/\./))));
return [cljs.core.str("Namespace "),cljs.core.str(name),cljs.core.str(" contains a reserved JavaScript keyword,"),cljs.core.str(" the corresponding Google Closure namespace will be munged to "),cljs.core.str(munged)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$ns_DASH_var_DASH_clash,(function (warning_type,p__27121){
var map__27122 = p__27121;
var map__27122__$1 = ((((!((map__27122 == null)))?((((map__27122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27122):map__27122);
var info = map__27122__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27122__$1,cljs.core.constant$keyword$ns);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27122__$1,cljs.core.constant$keyword$var);
return [cljs.core.str("Namespace "),cljs.core.str(ns),cljs.core.str(" clashes with var "),cljs.core.str(var$)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,(function (warning_type,p__27124){
var map__27125 = p__27124;
var map__27125__$1 = ((((!((map__27125 == null)))?((((map__27125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27125):map__27125);
var info = map__27125__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27125__$1,cljs.core.constant$keyword$protocol);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27125__$1,cljs.core.constant$keyword$method);
return [cljs.core.str("Bad extend-type method shape for protocol "),cljs.core.str(protocol),cljs.core.str(" method "),cljs.core.str(method),cljs.core.str(", method arities must be grouped together")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$unsupported_DASH_js_DASH_module_DASH_type,(function (warning_type,p__27127){
var map__27128 = p__27127;
var map__27128__$1 = ((((!((map__27128 == null)))?((((map__27128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27128):map__27128);
var info = map__27128__$1;
var module_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.constant$keyword$module_DASH_type);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27128__$1,cljs.core.constant$keyword$file);
return [cljs.core.str("Unsupported JavaScript module type "),cljs.core.str(module_type),cljs.core.str(" for foreign library "),cljs.core.str(file),cljs.core.str(".")].join('');
}));
cljs.analyzer.default_warning_handler = (function cljs$analyzer$default_warning_handler(warning_type,env,extra){
if(cljs.core.truth_((warning_type.cljs$core$IFn$_invoke$arity$1 ? warning_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_) : warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_)))){
var temp__4425__auto__ = (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(warning_type,extra) : cljs.analyzer.error_message.call(null,warning_type,extra));
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
var _STAR_print_fn_STAR_27133 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__27134 = env;
var G__27135 = [cljs.core.str("WARNING: "),cljs.core.str(s)].join('');
return (cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2(G__27134,G__27135) : cljs.analyzer.message.call(null,G__27134,G__27135));
})()], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27133;
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null);
cljs.analyzer.gen_constant_id = (function cljs$analyzer$gen_constant_id(value){
var prefix = (((value instanceof cljs.core.Keyword))?"constant$keyword$":(function(){throw (new Error([cljs.core.str("constant type "),cljs.core.str(cljs.core.type(value)),cljs.core.str(" not supported")].join('')))})()
);
var name = clojure.string.replace(cljs.core.munge(clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(value)].join(''),(1)),"-","_DASH_")),".","$");
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix),cljs.core.str(name)].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(){
var args27136 = [];
var len__17521__auto___27144 = arguments.length;
var i__17522__auto___27145 = (0);
while(true){
if((i__17522__auto___27145 < len__17521__auto___27144)){
args27136.push((arguments[i__17522__auto___27145]));

var G__27146 = (i__17522__auto___27145 + (1));
i__17522__auto___27145 = G__27146;
continue;
} else {
}
break;
}

var G__27138 = args27136.length;
switch (G__27138) {
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27136.length)].join('')));

}
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(null,val);
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,(function (cenv){
var G__27139 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_constant_DASH_table], null),(function (table){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(table,val))){
return table;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table,val,cljs.analyzer.gen_constant_id(val));
}
}));
var G__27139__$1 = (cljs.core.truth_(env)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__27139,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.constant$keyword$cljs$analyzer_SLASH_constants], null),((function (G__27139){
return (function (p__27140){
var map__27141 = p__27140;
var map__27141__$1 = ((((!((map__27141 == null)))?((((map__27141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27141):map__27141);
var constants = map__27141__$1;
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27141__$1,cljs.core.constant$keyword$seen,cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27141__$1,cljs.core.constant$keyword$order,cljs.core.PersistentVector.EMPTY);
var G__27143 = constants;
var G__27143__$1 = ((!(cljs.core.contains_QMARK_(seen,val)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__27143,cljs.core.constant$keyword$seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,val),cljs.core.array_seq([cljs.core.constant$keyword$order,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,val)], 0)):G__27143);
return G__27143__$1;
});})(G__27139))
):G__27139);
return G__27139__$1;
}));
});

cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2;
cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null);
cljs.analyzer.namespaces = (function (){
if(typeof cljs.analyzer.t27148 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.analyzer.t27148 = (function (meta27149){
this.meta27149 = meta27149;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.analyzer.t27148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27150,meta27149__$1){
var self__ = this;
var _27150__$1 = this;
return (new cljs.analyzer.t27148(meta27149__$1));
});

cljs.analyzer.t27148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27150){
var self__ = this;
var _27150__$1 = this;
return self__.meta27149;
});

cljs.analyzer.t27148.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(!((cljs.env._STAR_compiler_STAR_ == null))){
return cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return cljs.analyzer.default_namespaces;
}
});

cljs.analyzer.t27148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27149","meta27149",111841745,null)], null);
});

cljs.analyzer.t27148.cljs$lang$type = true;

cljs.analyzer.t27148.cljs$lang$ctorStr = "cljs.analyzer/t27148";

cljs.analyzer.t27148.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.analyzer/t27148");
});

cljs.analyzer.__GT_t27148 = (function cljs$analyzer$__GT_t27148(meta27149){
return (new cljs.analyzer.t27148(meta27149));
});

}

return (new cljs.analyzer.t27148(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(){
var args27151 = [];
var len__17521__auto___27154 = arguments.length;
var i__17522__auto___27155 = (0);
while(true){
if((i__17522__auto___27155 < len__17521__auto___27154)){
args27151.push((arguments[i__17522__auto___27155]));

var G__27156 = (i__17522__auto___27155 + (1));
i__17522__auto___27155 = G__27156;
continue;
} else {
}
break;
}

var G__27153 = args27151.length;
switch (G__27153) {
case 1:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27151.length)].join('')));

}
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1 = (function (key){
return cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,key);
});

cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$2 = (function (cenv,key){
var ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cenv) : cljs.core.deref.call(null,cenv)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,key], null));
if(!((ns == null))){
return ns;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),key)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null);
} else {
return null;
}
}
});

cljs.analyzer.get_namespace.cljs$lang$maxFixedArity = 2;
cljs.analyzer.get_line = (function cljs$analyzer$get_line(x,env){
var or__16482__auto__ = cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(env);
}
});
cljs.analyzer.get_col = (function cljs$analyzer$get_col(x,env){
var or__16482__auto__ = cljs.core.constant$keyword$column.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.constant$keyword$column.cljs$core$IFn$_invoke$arity$1(env);
}
});
/**
 * Given a Clojure namespace intern all macros into the ambient ClojureScript
 * analysis environment.
 */
cljs.analyzer.intern_macros = (function cljs$analyzer$intern_macros(){
var args27158 = [];
var len__17521__auto___27165 = arguments.length;
var i__17522__auto___27166 = (0);
while(true){
if((i__17522__auto___27166 < len__17521__auto___27165)){
args27158.push((arguments[i__17522__auto___27166]));

var G__27167 = (i__17522__auto___27166 + (1));
i__17522__auto___27166 = G__27167;
continue;
} else {
}
break;
}

var G__27160 = args27158.length;
switch (G__27160) {
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27158.length)].join('')));

}
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2(ns,false);
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2 = (function (ns,reload){
if(cljs.core.truth_((function (){var or__16482__auto__ = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,ns,cljs.core.constant$keyword$macros], null)) == null);
if(or__16482__auto__){
return or__16482__auto__;
} else {
return reload;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,ns,cljs.core.constant$keyword$macros], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27161){
var vec__27162 = p__27161;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27162,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27162,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta(v);
var vm__$1 = (function (){var ns__$1 = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(vm,cljs.core.constant$keyword$ns,ns__$1,cljs.core.array_seq([cljs.core.constant$keyword$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns__$1)].join(''),[cljs.core.str(k)].join(''))], 0));
})();
return vm__$1;
})()], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__27163){
var vec__27164 = p__27163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27164,(1),null);
return v.isMacro();
}),cljs.core.ns_interns_STAR_(ns)))));
} else {
return null;
}
});

cljs.analyzer.intern_macros.cljs$lang$maxFixedArity = 2;
/**
 * Construct an empty analysis environment. Required to analyze forms.
 */
cljs.analyzer.empty_env = (function cljs$analyzer$empty_env(){
var val__17903__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__17903__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.constant$keyword$context,cljs.core.constant$keyword$statement,cljs.core.constant$keyword$locals,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$fn_DASH_scope,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$js_DASH_globals,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (val__17903__auto__){
return (function (p1__27169_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__27169_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,p1__27169_SHARP_], null)],null));
});})(val__17903__auto__))
,cljs.core.list(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"document","document",311342840,null),new cljs.core.Symbol(null,"console","console",-1426363712,null),new cljs.core.Symbol(null,"escape","escape",648929575,null),new cljs.core.Symbol(null,"unescape","unescape",-2037730561,null),new cljs.core.Symbol(null,"screen","screen",-664376021,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"navigator","navigator",-604431588,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"global","global",1734126574,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"require","require",1172530194,null),new cljs.core.Symbol(null,"module","module",-1229817578,null),new cljs.core.Symbol(null,"exports","exports",895523255,null))))], null);
}finally {if((val__17903__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(){
var args27170 = [];
var len__17521__auto___27173 = arguments.length;
var i__17522__auto___27174 = (0);
while(true){
if((i__17522__auto___27174 < len__17521__auto___27173)){
args27170.push((arguments[i__17522__auto___27174]));

var G__27175 = (i__17522__auto___27174 + (1));
i__17522__auto___27174 = G__27175;
continue;
} else {
}
break;
}

var G__27172 = args27170.length;
switch (G__27172) {
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27170.length)].join('')));

}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1 = (function (env){
var temp__4425__auto__ = cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4425__auto__)){
var line = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$file,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),cljs.core.constant$keyword$line,cljs.analyzer.get_line(cljs.core.name,env),cljs.core.constant$keyword$column,cljs.analyzer.get_col(cljs.core.name,env)], null);
} else {
return null;
}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2 = (function (name,env){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$file,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),cljs.core.constant$keyword$line,cljs.analyzer.get_line(name,env),cljs.core.constant$keyword$column,cljs.analyzer.get_col(name,env)], null);
});

cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2;
cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str(s),cljs.core.str((cljs.core.truth_(cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" at line "),cljs.core.str(cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
var seq__27181 = cljs.core.seq(cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__27182 = null;
var count__27183 = (0);
var i__27184 = (0);
while(true){
if((i__27184 < count__27183)){
var handler = chunk__27182.cljs$core$IIndexed$_nth$arity$2(null,i__27184);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__27185 = seq__27181;
var G__27186 = chunk__27182;
var G__27187 = count__27183;
var G__27188 = (i__27184 + (1));
seq__27181 = G__27185;
chunk__27182 = G__27186;
count__27183 = G__27187;
i__27184 = G__27188;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__27181);
if(temp__4425__auto__){
var seq__27181__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27181__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__27181__$1);
var G__27189 = cljs.core.chunk_rest(seq__27181__$1);
var G__27190 = c__17266__auto__;
var G__27191 = cljs.core.count(c__17266__auto__);
var G__27192 = (0);
seq__27181 = G__27189;
chunk__27182 = G__27190;
count__27183 = G__27191;
i__27184 = G__27192;
continue;
} else {
var handler = cljs.core.first(seq__27181__$1);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__27193 = cljs.core.next(seq__27181__$1);
var G__27194 = null;
var G__27195 = (0);
var G__27196 = (0);
seq__27181 = G__27193;
chunk__27182 = G__27194;
count__27183 = G__27195;
i__27184 = G__27196;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.error = (function cljs$analyzer$error(){
var args27197 = [];
var len__17521__auto___27200 = arguments.length;
var i__17522__auto___27201 = (0);
while(true){
if((i__17522__auto___27201 < len__17521__auto___27200)){
args27197.push((arguments[i__17522__auto___27201]));

var G__27202 = (i__17522__auto___27201 + (1));
i__17522__auto___27201 = G__27202;
continue;
} else {
}
break;
}

var G__27199 = args27197.length;
switch (G__27199) {
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27197.length)].join('')));

}
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2 = (function (env,msg){
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,msg,null);
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3 = (function (env,msg,cause){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.message(env,msg),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1(env),cljs.core.constant$keyword$tag,cljs.core.constant$keyword$cljs_SLASH_analysis_DASH_error),cause);
});

cljs.analyzer.error.cljs$lang$maxFixedArity = 3;
cljs.analyzer.analysis_error_QMARK_ = (function cljs$analyzer$analysis_error_QMARK_(ex){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$cljs_SLASH_analysis_DASH_error,cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex)));
});
cljs.analyzer.implicit_import_QMARK_ = (function cljs$analyzer$implicit_import_QMARK_(env,prefix,suffix){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"goog.string","goog.string",-2055533048,null),null,new cljs.core.Symbol(null,"goog","goog",-70603925,null),null,new cljs.core.Symbol(null,"goog.object","goog.object",678593132,null),null,new cljs.core.Symbol(null,"Math","Math",2033287572,null),null,new cljs.core.Symbol(null,"goog.array","goog.array",-671977860,null),null], null), null),prefix);
});
cljs.analyzer.confirm_var_exist_warning = (function cljs$analyzer$confirm_var_exist_warning(env,prefix,suffix){
return (function (env__$1,prefix__$1,suffix__$1){
return cljs.analyzer.warning(cljs.core.constant$keyword$undeclared_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$prefix,prefix__$1,cljs.core.constant$keyword$suffix,suffix__$1], null));
});
});
/**
 * Check if a JavaScript namespace has been loaded. JavaScript vars are
 * not currently checked.
 */
cljs.analyzer.loaded_js_ns_QMARK_ = (function cljs$analyzer$loaded_js_ns_QMARK_(env,prefix){
if(cljs.core.truth_(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,prefix))){
return null;
} else {
var ns = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env);
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$requires.cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))){
return true;
} else {
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$imports.cljs$core$IFn$_invoke$arity$1(ns),prefix) == null))){
return true;
} else {
return false;
}
}
}
});
cljs.analyzer.confirm_var_exists = (function cljs$analyzer$confirm_var_exists(){
var args27205 = [];
var len__17521__auto___27208 = arguments.length;
var i__17522__auto___27209 = (0);
while(true){
if((i__17522__auto___27209 < len__17521__auto___27208)){
args27205.push((arguments[i__17522__auto___27209]));

var G__27210 = (i__17522__auto___27209 + (1));
i__17522__auto___27209 = G__27210;
continue;
} else {
}
break;
}

var G__27207 = args27205.length;
switch (G__27207) {
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27205.length)].join('')));

}
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3 = (function (env,prefix,suffix){
var warn = cljs.analyzer.confirm_var_exist_warning(env,prefix,suffix);
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,warn);
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4 = (function (env,prefix,suffix,missing_fn){
var sufstr = [cljs.core.str(suffix)].join('');
var suffix_str = (((!((".." === sufstr))) && (/\./.test(sufstr)))?cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(sufstr,/\./)):suffix);
var suffix__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix_str);
if((!(cljs.analyzer.implicit_import_QMARK_(env,prefix,suffix__$1))) && (!(cljs.analyzer.loaded_js_ns_QMARK_(env,prefix))) && (!((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),suffix__$1)))) && ((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,prefix,cljs.core.constant$keyword$defs,suffix__$1) == null))){
return (missing_fn.cljs$core$IFn$_invoke$arity$3 ? missing_fn.cljs$core$IFn$_invoke$arity$3(env,prefix,suffix__$1) : missing_fn.call(null,env,prefix,suffix__$1));
} else {
return null;
}
});

cljs.analyzer.confirm_var_exists.cljs$lang$maxFixedArity = 4;
cljs.analyzer.confirm_var_exists_throw = (function cljs$analyzer$confirm_var_exists_throw(){
return (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,[cljs.core.str("Unable to resolve var: "),cljs.core.str(suffix__$1),cljs.core.str(" in this context")].join(''));
}));
});
});
cljs.analyzer.resolve_ns_alias = (function cljs$analyzer$resolve_ns_alias(env,name){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$requires.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),sym,sym);
});
cljs.analyzer.resolve_macro_ns_alias = (function cljs$analyzer$resolve_macro_ns_alias(env,name){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),sym,sym);
});
/**
 * Given env, an analysis environment, and ns-sym, a symbol identifying a
 * namespace, confirm that the namespace exists. Warn if not found.
 */
cljs.analyzer.confirm_ns = (function cljs$analyzer$confirm_ns(env,ns_sym){
if(((cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"goog.string","goog.string",-2055533048,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"goog","goog",-70603925,null),null,new cljs.core.Symbol(null,"Math","Math",2033287572,null),null], null), null),ns_sym) == null)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$requires.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),ns_sym) == null)) && ((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,ns_sym) == null))){
return cljs.analyzer.warning(cljs.core.constant$keyword$undeclared_DASH_ns,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$ns_DASH_sym,ns_sym], null));
} else {
return null;
}
});
/**
 * Is sym visible from core in the current compilation namespace?
 */
cljs.analyzer.core_name_QMARK_ = (function cljs$analyzer$core_name_QMARK_(env,sym){
var and__16470__auto__ = (function (){var or__16482__auto__ = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),cljs.core.constant$keyword$defs,sym);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var temp__4425__auto__ = (cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2(sym,env) : cljs.analyzer.get_expander.call(null,sym,env));
if(cljs.core.truth_(temp__4425__auto__)){
var mac = temp__4425__auto__;
var ns = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mac));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns.getName(),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null));
} else {
return null;
}
}
})();
if(cljs.core.truth_(and__16470__auto__)){
return !(cljs.core.contains_QMARK_(cljs.core.constant$keyword$excludes.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),sym));
} else {
return and__16470__auto__;
}
});
/**
 * Resolve a var. Accepts a side-effecting confirm fn for producing
 * warnings about unresolved vars.
 */
cljs.analyzer.resolve_var = (function cljs$analyzer$resolve_var(){
var args27212 = [];
var len__17521__auto___27218 = arguments.length;
var i__17522__auto___27219 = (0);
while(true){
if((i__17522__auto___27219 < len__17521__auto___27218)){
args27212.push((arguments[i__17522__auto___27219]));

var G__27220 = (i__17522__auto___27219 + (1));
i__17522__auto___27219 = G__27220;
continue;
} else {
}
break;
}

var G__27214 = args27212.length;
switch (G__27214) {
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27212.length)].join('')));

}
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2 = (function (env,sym){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,null);
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (env,sym,confirm){
while(true){
if(("js" === cljs.core.namespace(sym))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,sym,cljs.core.constant$keyword$ns,new cljs.core.Symbol(null,"js","js",-886355190,null)], null);
} else {
var s = [cljs.core.str(sym)].join('');
var lcls = cljs.core.constant$keyword$locals.cljs$core$IFn$_invoke$arity$1(env);
var lb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcls,sym);
if(!((lb == null))){
return lb;
} else {
if(!((cljs.core.namespace(sym) == null))){
var ns = cljs.core.namespace(sym);
var ns__$1 = ((("clojure.core" === ns))?"cljs.core":ns);
var full_ns = cljs.analyzer.resolve_ns_alias(env,ns__$1);
if((confirm == null)){
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),full_ns)){
cljs.analyzer.confirm_ns(env,full_ns);
} else {
}

var G__27215_27222 = env;
var G__27216_27223 = full_ns;
var G__27217_27224 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(G__27215_27222,G__27216_27223,G__27217_27224) : confirm.call(null,G__27215_27222,G__27216_27223,G__27217_27224));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.constant$keyword$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(cljs.core.name(sym))].join('')),cljs.core.constant$keyword$ns,full_ns], null)], 0));
} else {
if((goog.string.contains(s,".")) && (!(goog.string.contains(s,"..")))){
var idx = s.indexOf(".");
var prefix = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx));
var suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(idx + (1)));
var lb__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcls,prefix);
if(!((lb__$1 == null))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(lb__$1))].join(''),suffix)], null);
} else {
var cur_ns = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env));
var full_ns = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.constant$keyword$imports,prefix);
if(!((full_ns == null))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),suffix)], null);
} else {
var info = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.constant$keyword$defs,prefix);
if(!((info == null))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cur_ns)].join(''),[cljs.core.str(sym)].join('')),cljs.core.constant$keyword$ns,cur_ns], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,prefix,cljs.core.constant$keyword$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",prefix))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix):cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(prefix)].join(''),suffix)),cljs.core.constant$keyword$ns,prefix], null)], 0));
}
}
}
} else {
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.constant$keyword$uses,sym) == null))){
var full_ns = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.constant$keyword$uses,sym);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.constant$keyword$defs,sym),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env))], null)], 0));
} else {
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.constant$keyword$imports,sym) == null))){
var G__27225 = env;
var G__27226 = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.constant$keyword$imports,sym);
var G__27227 = confirm;
env = G__27225;
sym = G__27226;
confirm = G__27227;
continue;
} else {
var cur_ns = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env));
var full_ns = ((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,cur_ns,cljs.core.constant$keyword$defs,sym) == null)))?cur_ns:((cljs.analyzer.core_name_QMARK_(env,sym))?new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null):cur_ns
));
if((confirm == null)){
} else {
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(env,full_ns,sym) : confirm.call(null,env,full_ns,sym));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,full_ns,cljs.core.constant$keyword$defs,sym),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),cljs.core.constant$keyword$ns,full_ns], null)], 0));

}
}
}
}
}
}
break;
}
});

cljs.analyzer.resolve_var.cljs$lang$maxFixedArity = 3;
/**
 * Given env, an analysis environment, and sym, a symbol, resolve an existing var.
 * Emits a warning if no such var exists.
 */
cljs.analyzer.resolve_existing_var = (function cljs$analyzer$resolve_existing_var(env,sym){
if(cljs.core.not(cljs.core.constant$keyword$cljs$analyzer_SLASH_no_DASH_resolve.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)))){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists);
} else {
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym);
}
});
/**
 * Given env, an analysis environment env, and names, a list of symbols, confirm
 * that all correspond to declared dynamic vars.
 */
cljs.analyzer.confirm_bindings = (function cljs$analyzer$confirm_bindings(env,names){
var seq__27232 = cljs.core.seq(names);
var chunk__27233 = null;
var count__27234 = (0);
var i__27235 = (0);
while(true){
if((i__27235 < count__27234)){
var name = chunk__27233.cljs$core$IIndexed$_nth$arity$2(null,i__27235);
var env_27236__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_27237 = cljs.analyzer.resolve_existing_var(env_27236__$1,name);
if(cljs.core.truth_((function (){var and__16470__auto__ = ev_27237;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.not(cljs.core.constant$keyword$dynamic.cljs$core$IFn$_invoke$arity$1(ev_27237));
} else {
return and__16470__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.constant$keyword$dynamic,env_27236__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ev,ev_27237,cljs.core.constant$keyword$name,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ev_27237)], null));
} else {
}

var G__27238 = seq__27232;
var G__27239 = chunk__27233;
var G__27240 = count__27234;
var G__27241 = (i__27235 + (1));
seq__27232 = G__27238;
chunk__27233 = G__27239;
count__27234 = G__27240;
i__27235 = G__27241;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__27232);
if(temp__4425__auto__){
var seq__27232__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27232__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__27232__$1);
var G__27242 = cljs.core.chunk_rest(seq__27232__$1);
var G__27243 = c__17266__auto__;
var G__27244 = cljs.core.count(c__17266__auto__);
var G__27245 = (0);
seq__27232 = G__27242;
chunk__27233 = G__27243;
count__27234 = G__27244;
i__27235 = G__27245;
continue;
} else {
var name = cljs.core.first(seq__27232__$1);
var env_27246__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_27247 = cljs.analyzer.resolve_existing_var(env_27246__$1,name);
if(cljs.core.truth_((function (){var and__16470__auto__ = ev_27247;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.not(cljs.core.constant$keyword$dynamic.cljs$core$IFn$_invoke$arity$1(ev_27247));
} else {
return and__16470__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.constant$keyword$dynamic,env_27246__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ev,ev_27247,cljs.core.constant$keyword$name,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(ev_27247)], null));
} else {
}

var G__27248 = cljs.core.next(seq__27232__$1);
var G__27249 = null;
var G__27250 = (0);
var G__27251 = (0);
seq__27232 = G__27248;
chunk__27233 = G__27249;
count__27234 = G__27250;
i__27235 = G__27251;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
cljs.analyzer.resolve_macro_var = (function cljs$analyzer$resolve_macro_var(env,sym){
var ns = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces);
if(cljs.core.truth_(cljs.core.namespace(sym))){
var ns__$1 = cljs.core.namespace(sym);
var ns__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = cljs.analyzer.resolve_macro_ns_alias(env,ns__$2);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.constant$keyword$macros,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))], null));
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.constant$keyword$use_DASH_macros,sym], null)))){
var full_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.constant$keyword$use_DASH_macros,sym], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,cljs.core.constant$keyword$macros,sym], null));
} else {
var ns__$1 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.constant$keyword$macros,sym], null)))?ns:((cljs.analyzer.core_name_QMARK_(env,sym))?new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null):null));
if(cljs.core.truth_(ns__$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,cljs.core.constant$keyword$macros,sym], null));
} else {
return null;
}

}
}
});
/**
 * Given a namespace as a symbol and a map from namespace symbol to
 * namespace information return the topologically sorted list of all
 * dependent namespaces. The map values of the optional second argument must
 * be maps with a :requires set of symbols, a :requires map of symbol -> alias
 * (analyzer format) or a :requires vector of munged namespace strings
 * (closure format).
 */
cljs.analyzer.ns_dependents = (function cljs$analyzer$ns_dependents(){
var args27253 = [];
var len__17521__auto___27270 = arguments.length;
var i__17522__auto___27271 = (0);
while(true){
if((i__17522__auto___27271 < len__17521__auto___27270)){
args27253.push((arguments[i__17522__auto___27271]));

var G__27272 = (i__17522__auto___27271 + (1));
i__17522__auto___27271 = G__27272;
continue;
} else {
}
break;
}

var G__27255 = args27253.length;
switch (G__27255) {
case 1:
return cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27253.length)].join('')));

}
});

cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces));
});

cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$2 = (function (ns,ns_map){
var parent_QMARK_ = (function cljs$analyzer$parent_QMARK_(parent,p__27263){
var vec__27267 = p__27263;
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27267,(0),null);
var map__27268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27267,(1),null);
var map__27268__$1 = ((((!((map__27268 == null)))?((((map__27268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27268):map__27268);
var ns_info = map__27268__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27268__$1,cljs.core.constant$keyword$requires);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,child)){
return null;
} else {
if((cljs.core.map_QMARK_(requires)) || (cljs.core.set_QMARK_(requires))){
return cljs.core.contains_QMARK_(requires,parent);
} else {
if(cljs.core.vector_QMARK_(requires)){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([cljs.core.munge(cljs.core.name(parent))], true),requires);
} else {
return null;
}
}
}
});
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2(ns,(function (ns_SINGLEQUOTE_){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27252_SHARP_){
return parent_QMARK_(ns_SINGLEQUOTE_,p1__27252_SHARP_);
}),ns_map)));
}));
});

cljs.analyzer.ns_dependents.cljs$lang$maxFixedArity = 2;


cljs.analyzer.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"var","var",870848730,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null);
cljs.analyzer._STAR_recur_frames_STAR_ = null;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.List.EMPTY;
cljs.analyzer._STAR_allow_redef_STAR_ = false;
cljs.analyzer.analyze_keyword = (function cljs$analyzer$analyze_keyword(env,sym){
cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(env,sym);

return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$constant,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,sym,cljs.core.constant$keyword$tag,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)], null);
});
cljs.analyzer.get_tag = (function cljs$analyzer$get_tag(e){
var tag = cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(e);
if(!((tag == null))){
return tag;
} else {
var tag__$1 = cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(e));
if(!((tag__$1 == null))){
return tag__$1;
} else {
return cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.constant$keyword$form.cljs$core$IFn$_invoke$arity$1(e)));
}
}
});
cljs.analyzer.find_matching_method = (function cljs$analyzer$find_matching_method(f,params){
var methods$ = (function (){var or__16482__auto__ = cljs.core.constant$keyword$methods.cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.constant$keyword$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(f));
}
})();
var c = cljs.core.count(params);
return cljs.core.some(((function (methods$,c){
return (function (m){
var and__16470__auto__ = (function (){var or__16482__auto__ = (cljs.core.constant$keyword$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(m) === c);
if(or__16482__auto__){
return or__16482__auto__;
} else {
return cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(and__16470__auto__)){
return m;
} else {
return and__16470__auto__;
}
});})(methods$,c))
,methods$);
});
cljs.analyzer.type_QMARK_ = (function cljs$analyzer$type_QMARK_(env,t){
if((!((t == null))) && ((t instanceof cljs.core.Symbol))){
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,t);
var type = cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(var$);
if(!((type == null))){
return type;
} else {
var type__$1 = cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(var$));
if(!((type__$1 == null))){
return type__$1;
} else {
var proto = cljs.core.constant$keyword$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$);
if(!((proto == null))){
return proto;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null),null], null), null),t);
}
}
}
} else {
return null;
}
});
cljs.analyzer.NOT_NATIVE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null),null], null), null);
cljs.analyzer.BOOLEAN_OR_SEQ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
cljs.analyzer.infer_if = (function cljs$analyzer$infer_if(env,e){
var map__27282 = e;
var map__27282__$1 = ((((!((map__27282 == null)))?((((map__27282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27282):map__27282);
var map__27283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27282__$1,cljs.core.constant$keyword$test);
var map__27283__$1 = ((((!((map__27283 == null)))?((((map__27283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27283):map__27283);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27283__$1,cljs.core.constant$keyword$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27283__$1,cljs.core.constant$keyword$form);
var then_tag = (function (){var G__27286 = env;
var G__27287 = cljs.core.constant$keyword$then.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__27286,G__27287) : cljs.analyzer.infer_tag.call(null,G__27286,G__27287));
})();
if((cljs.core.keyword_identical_QMARK_(op,cljs.core.constant$keyword$constant)) && (!((form == null))) && (!(form === false))){
return then_tag;
} else {
var else_tag = (function (){var G__27288 = env;
var G__27289 = cljs.core.constant$keyword$else.cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__27288,G__27289) : cljs.analyzer.infer_tag.call(null,G__27288,G__27289));
})();
if((cljs.core.symbol_identical_QMARK_(then_tag,else_tag)) || (cljs.core.symbol_identical_QMARK_(else_tag,cljs.analyzer.IGNORE_SYM))){
return then_tag;
} else {
if(cljs.core.symbol_identical_QMARK_(then_tag,cljs.analyzer.IGNORE_SYM)){
return else_tag;
} else {
if(((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NOT_NATIVE,then_tag) == null))) || (cljs.analyzer.type_QMARK_(env,then_tag))) && ((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NOT_NATIVE,else_tag) == null))) || (cljs.analyzer.type_QMARK_(env,else_tag)))){
return new cljs.core.Symbol(null,"clj","clj",980036099,null);
} else {
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.BOOLEAN_OR_SEQ,then_tag) == null))) && (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.BOOLEAN_OR_SEQ,else_tag) == null)))){
return new cljs.core.Symbol(null,"seq","seq",-177272256,null);
} else {
var then_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_(then_tag))?then_tag:cljs.core.PersistentHashSet.fromArray([then_tag], true));
var else_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_(else_tag))?else_tag:cljs.core.PersistentHashSet.fromArray([else_tag], true));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(then_tag__$1,else_tag__$1);
}

}
}
}
}
});
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,e){
var map__27292 = cljs.core.constant$keyword$f.cljs$core$IFn$_invoke$arity$1(e);
var map__27292__$1 = ((((!((map__27292 == null)))?((((map__27292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27292):map__27292);
var f = map__27292__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27292__$1,cljs.core.constant$keyword$info);
var ret_tag = (((cljs.core.constant$keyword$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info) == null))?null:cljs.core.constant$keyword$ret_DASH_tag.cljs$core$IFn$_invoke$arity$1(info));
if(!((ret_tag == null))){
return ret_tag;
} else {
var args = cljs.core.constant$keyword$args.cljs$core$IFn$_invoke$arity$1(e);
var me = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.find_matching_method(f,args),cljs.core.constant$keyword$op,cljs.core.constant$keyword$method);
var ret_tag__$1 = (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(env,me) : cljs.analyzer.infer_tag.call(null,env,me));
if(!((ret_tag__$1 == null))){
return ret_tag__$1;
} else {
return cljs.analyzer.ANY_SYM;
}
}
});
/**
 * Given env, an analysis environment, and e, an AST node, return the inferred
 * type of the node
 */
cljs.analyzer.infer_tag = (function cljs$analyzer$infer_tag(env,e){
var tag = cljs.analyzer.get_tag(e);
if(!((tag == null))){
return tag;
} else {
var G__27310 = (((cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(e) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(e).fqn:null);
switch (G__27310) {
case "js":
return cljs.analyzer.ANY_SYM;

break;
case "let":
return cljs$analyzer$infer_tag(env,cljs.core.constant$keyword$expr.cljs$core$IFn$_invoke$arity$1(e));

break;
case "do":
return cljs$analyzer$infer_tag(env,cljs.core.constant$keyword$ret.cljs$core$IFn$_invoke$arity$1(e));

break;
case "if":
return cljs.analyzer.infer_if(env,e);

break;
case "method":
return cljs$analyzer$infer_tag(env,cljs.core.constant$keyword$expr.cljs$core$IFn$_invoke$arity$1(e));

break;
case "constant":
var G__27311 = cljs.core.constant$keyword$form.cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__27311)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__27311)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
return cljs.analyzer.ANY_SYM;

}
}

break;
case "recur":
return cljs.analyzer.IGNORE_SYM;

break;
case "loop":
return cljs$analyzer$infer_tag(env,cljs.core.constant$keyword$expr.cljs$core$IFn$_invoke$arity$1(e));

break;
case "var":
if(!((cljs.core.constant$keyword$init.cljs$core$IFn$_invoke$arity$1(e) == null))){
return cljs$analyzer$infer_tag(env,cljs.core.constant$keyword$init.cljs$core$IFn$_invoke$arity$1(e));
} else {
return cljs$analyzer$infer_tag(env,cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(e));
}

break;
case "invoke":
return cljs.analyzer.infer_invoke(env,e);

break;
case "throw":
return cljs.analyzer.IGNORE_SYM;

break;
case "def":
return cljs$analyzer$infer_tag(env,cljs.core.constant$keyword$init.cljs$core$IFn$_invoke$arity$1(e));

break;
case "dot":
return cljs.analyzer.ANY_SYM;

break;
default:
return null;

}
}
});
if(typeof cljs.analyzer.parse !== 'undefined'){
} else {
cljs.analyzer.parse = (function (){var method_table__17376__auto__ = (function (){var G__27313 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27313) : cljs.core.atom.call(null,G__27313));
})();
var prefer_table__17377__auto__ = (function (){var G__27314 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27314) : cljs.core.atom.call(null,G__27314));
})();
var method_cache__17378__auto__ = (function (){var G__27315 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27315) : cljs.core.atom.call(null,G__27315));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__27316 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27316) : cljs.core.atom.call(null,G__27316));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","parse"),((function (method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__){
return (function() { 
var G__27317__delegate = function (op,rest){
return op;
};
var G__27317 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__27318__i = 0, G__27318__a = new Array(arguments.length -  1);
while (G__27318__i < G__27318__a.length) {G__27318__a[G__27318__i] = arguments[G__27318__i + 1]; ++G__27318__i;}
  rest = new cljs.core.IndexedSeq(G__27318__a,0);
} 
return G__27317__delegate.call(this,op,rest);};
G__27317.cljs$lang$maxFixedArity = 1;
G__27317.cljs$lang$applyTo = (function (arglist__27319){
var op = cljs.core.first(arglist__27319);
var rest = cljs.core.rest(arglist__27319);
return G__27317__delegate(op,rest);
});
G__27317.cljs$core$IFn$_invoke$arity$variadic = G__27317__delegate;
return G__27317;
})()
;})(method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__))
,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.analyzer.var_ast = (function cljs$analyzer$var_ast(env,sym){
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var temp__4423__auto__ = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(temp__4423__auto__)){
var var_ns = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$var,(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym)),cljs.core.constant$keyword$sym,(function (){var G__27324 = expr_env;
var G__27325 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_ns),cljs.core.name(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(var$)))))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27324,G__27325) : cljs.analyzer.analyze.call(null,G__27324,G__27325));
})(),cljs.core.constant$keyword$meta,(function (){var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ns,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$file,cljs.core.constant$keyword$line,cljs.core.constant$keyword$column], null);
var m = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var user_meta = cljs.core.constant$keyword$meta.cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys(user_meta);
return cljs.core.zipmap(uks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (user_meta,uks,ks,var_ns,temp__4423__auto__,var$,expr_env){
return (function (p1__27320_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_meta,p1__27320_SHARP_)),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(user_meta,uks,ks,var_ns,temp__4423__auto__,var$,expr_env))
,uks));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ks,var_ns,temp__4423__auto__,var$,expr_env){
return (function (p1__27321_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(var$,p1__27321_SHARP_)),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(ks,var_ns,temp__4423__auto__,var$,expr_env))
,ks)),cljs.core.constant$keyword$name,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(var$))))))),cljs.core.array_seq([cljs.core.constant$keyword$test,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$test",".-cljs$lang$test",718963148,null)),cljs.core._conj(cljs.core.List.EMPTY,sym)))))], 0)))),cljs.core.constant$keyword$arglists,(function (){var arglists = cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(var$);
var arglists_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists)))?cljs.core.second(arglists):arglists);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta,arglists_SINGLEQUOTE_,cljs.core.constant$keyword$arglists_DASH_meta.cljs$core$IFn$_invoke$arity$1(var$)))),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
})()], 0))], 0));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,m) : cljs.analyzer.analyze.call(null,expr_env,m));
})()], null);
} else {
return null;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"var","var",870848730,null),(function (op,env,p__27326,_,___$1){
var vec__27327 = p__27326;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27327,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27327,(1),null);
var form = vec__27327;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$op,cljs.core.constant$keyword$var_DASH_special,cljs.core.constant$keyword$form,form], null),cljs.analyzer.var_ast(env,sym)], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (op,env,p__27328,name,_){
var vec__27329 = p__27328;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27329,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27329,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27329,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27329,(3),null);
var form = vec__27329;
if((cljs.core.count(form) < (3))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too few arguments to if");
} else {
}

if((cljs.core.count(form) > (4))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to if");
} else {
}

var test_expr = (function (){var _STAR_recur_frames_STAR_27330 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__27331 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var G__27332 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27331,G__27332) : cljs.analyzer.analyze.call(null,G__27331,G__27332));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27330;
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR_27333 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,then) : cljs.analyzer.analyze.call(null,env,then));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_27333;
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR_27334 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,else$) : cljs.analyzer.analyze.call(null,env,else$));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_27334;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$op,cljs.core.constant$keyword$if,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$test,test_expr,cljs.core.constant$keyword$then,then_expr,cljs.core.constant$keyword$else,else_expr,cljs.core.constant$keyword$unchecked,cljs.core._STAR_unchecked_if_STAR_,cljs.core.constant$keyword$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_expr,then_expr,else_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),(function (op,env,p__27337,name,_){
var vec__27338 = p__27337;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27338,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27338,(1),null);
var tests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27338,(2),null);
var thens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27338,(3),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27338,(4),null);
var form = vec__27338;
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* must switch on symbol"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))], 0)))].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be grouped in vectors"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"tests","tests",599445902,null))], 0)))].join('')));
}

var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var v = (function (){var _STAR_recur_frames_STAR_27339 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27339;
}})();
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__27338,___$1,sym,tests,thens,default$,form){
return (function (p1__27335_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__27338,___$1,sym,tests,thens,default$,form){
return (function (t){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,t) : cljs.analyzer.analyze.call(null,expr_env,t));
});})(expr_env,v,vec__27338,___$1,sym,tests,thens,default$,form))
,p1__27335_SHARP_);
});})(expr_env,v,vec__27338,___$1,sym,tests,thens,default$,form))
,tests);
var thens__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,tests__$1,vec__27338,___$1,sym,tests,thens,default$,form){
return (function (p1__27336_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,p1__27336_SHARP_) : cljs.analyzer.analyze.call(null,env,p1__27336_SHARP_));
});})(expr_env,v,tests__$1,vec__27338,___$1,sym,tests,thens,default$,form))
,thens);
var default$__$1 = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,default$) : cljs.analyzer.analyze.call(null,env,default$));
if(cljs.core.every_QMARK_(((function (expr_env,v,tests__$1,thens__$1,default$__$1,vec__27338,___$1,sym,tests,thens,default$,form){
return (function (t){
var or__16482__auto__ = cljs.core.constant$keyword$const.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var and__16470__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$constant,cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(t));
if(and__16470__auto__){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_).call(null,cljs.core.constant$keyword$form.cljs$core$IFn$_invoke$arity$1(t));
} else {
return and__16470__auto__;
}
}
});})(expr_env,v,tests__$1,thens__$1,default$__$1,vec__27338,___$1,sym,tests,thens,default$,form))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,tests__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be numbers, strings, or constants"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.constant$keyword$info,cljs.core.constant$keyword$const),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.constant$keyword$constant,cljs.core.list(cljs.core.constant$keyword$op,new cljs.core.Symbol(null,"t","t",242699008,null))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"some-fn","some-fn",-490044165,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"char?","char?",-1072221244,null)),cljs.core.list(cljs.core.constant$keyword$form,new cljs.core.Symbol(null,"t","t",242699008,null)))))),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"tests","tests",599445902,null)))], 0)))].join('')));
}

return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$op,cljs.core.constant$keyword$case_STAR_,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$v,v,cljs.core.constant$keyword$tests,tests__$1,cljs.core.constant$keyword$thens,thens__$1,cljs.core.constant$keyword$default,default$__$1,cljs.core.constant$keyword$children,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),tests__$1,cljs.core.array_seq([thens__$1,(cljs.core.truth_(default$__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$__$1], null):null)], 0)))], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),(function (op,env,p__27340,name,_){
var vec__27341 = p__27340;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27341,(0),null);
var throw$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27341,(1),null);
var form = vec__27341;
var throw_expr = (function (){var _STAR_recur_frames_STAR_27342 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__27343 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var G__27344 = throw$;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27343,G__27344) : cljs.analyzer.analyze.call(null,G__27343,G__27344));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27342;
}})();
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$op,cljs.core.constant$keyword$throw,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$throw,throw_expr,cljs.core.constant$keyword$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [throw_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),(function (op,env,p__27349,name,_){
var vec__27350 = p__27349;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27350,(0),null);
var body = cljs.core.nthnext(vec__27350,(1));
var form = vec__27350;
var catchenv = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$context], null),((function (vec__27350,___$1,body,form){
return (function (p1__27345_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,p1__27345_SHARP_)){
return cljs.core.constant$keyword$return;
} else {
return p1__27345_SHARP_;
}
});})(vec__27350,___$1,body,form))
);
var catch_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,vec__27350,___$1,body,form){
return (function (p1__27346_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__27346_SHARP_),new cljs.core.Symbol(null,"catch","catch",-1616370245,null));
});})(catchenv,vec__27350,___$1,body,form))
);
var default_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(catch_QMARK_,((function (catchenv,catch_QMARK_,vec__27350,___$1,body,form){
return (function (p1__27347_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__27347_SHARP_),cljs.core.constant$keyword$default);
});})(catchenv,catch_QMARK_,vec__27350,___$1,body,form))
);
var finally_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,catch_QMARK_,default_QMARK_,vec__27350,___$1,body,form){
return (function (p1__27348_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__27348_SHARP_),new cljs.core.Symbol(null,"finally","finally",-1065347064,null));
});})(catchenv,catch_QMARK_,default_QMARK_,vec__27350,___$1,body,form))
);
var map__27351 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$state,cljs.core.constant$keyword$start,cljs.core.constant$keyword$forms,body,cljs.core.constant$keyword$body,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$cblocks,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$dblock,null,cljs.core.constant$keyword$fblock,null], null);
while(true){
if(cljs.core.seq_QMARK_(cljs.core.constant$keyword$forms.cljs$core$IFn$_invoke$arity$1(parser))){
var vec__27352 = cljs.core.constant$keyword$forms.cljs$core$IFn$_invoke$arity$1(parser);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27352,(0),null);
var forms_STAR_ = cljs.core.nthnext(vec__27352,(1));
var parser_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.constant$keyword$forms,forms_STAR_);
var G__27353 = (((cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__27353) {
case "start":
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__27365 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.constant$keyword$state,cljs.core.constant$keyword$catches);
parser = G__27365;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__27366 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.constant$keyword$state,cljs.core.constant$keyword$finally);
parser = G__27366;
continue;
} else {
var G__27367 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$body], null),cljs.core.conj,form__$1);
parser = G__27367;
continue;

}
}

break;
case "catches":
if(cljs.core.truth_((default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? default_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : default_QMARK_.call(null,form__$1)))){
var G__27368 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,cljs.core.constant$keyword$dblock,form__$1,cljs.core.array_seq([cljs.core.constant$keyword$state,cljs.core.constant$keyword$finally], 0));
parser = G__27368;
continue;
} else {
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__27369 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cblocks], null),cljs.core.conj,form__$1);
parser = G__27369;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__27370 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.constant$keyword$state,cljs.core.constant$keyword$finally);
parser = G__27370;
continue;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid try form");

}
}
}

break;
case "finally":
var G__27371 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,cljs.core.constant$keyword$fblock,form__$1,cljs.core.array_seq([cljs.core.constant$keyword$state,cljs.core.constant$keyword$done], 0));
parser = G__27371;
continue;

break;
case "done":
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Unexpected form after finally");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
} else {
return parser;
}
break;
}
})();
var map__27351__$1 = ((((!((map__27351 == null)))?((((map__27351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27351):map__27351);
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27351__$1,cljs.core.constant$keyword$body);
var cblocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27351__$1,cljs.core.constant$keyword$cblocks);
var dblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27351__$1,cljs.core.constant$keyword$dblock);
var fblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27351__$1,cljs.core.constant$keyword$fblock);
var finally$ = ((cljs.core.seq(fblock))?(function (){var G__27355 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$statement);
var G__27356 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.rest(fblock))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27355,G__27356) : cljs.analyzer.analyze.call(null,G__27355,G__27356));
})():null);
var e = (cljs.core.truth_((function (){var or__16482__auto__ = cljs.core.seq(cblocks);
if(or__16482__auto__){
return or__16482__auto__;
} else {
return dblock;
}
})())?cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("e"):null);
var default$ = (function (){var temp__4423__auto__ = dblock;
if(cljs.core.truth_(temp__4423__auto__)){
var vec__27357 = temp__4423__auto__;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27357,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27357,(1),null);
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27357,(2),null);
var cb = cljs.core.nthnext(vec__27357,(3));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name__$1),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cb], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj(cljs.core.List.EMPTY,e))));
}
})();
var cblock = ((cljs.core.seq(cblocks))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__27351,map__27351__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__27350,___$1,body,form){
return (function (p__27358){
var vec__27359 = p__27358;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27359,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27359,(1),null);
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27359,(2),null);
var cb = cljs.core.nthnext(vec__27359,(3));
if(cljs.core.truth_(name__$1)){
if(cljs.core.not(cljs.core.namespace(name__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't qualify symbol in catch"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"name","name",-810760592,null)))], 0)))].join('')));
}
} else {
}

return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),cljs.core._conj(cljs.core.List.EMPTY,type),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,e)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name__$1),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cb], 0)))))))));
});})(catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__27351,map__27351__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__27350,___$1,body,form))
,cljs.core.array_seq([cblocks], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$else),cljs.core._conj(cljs.core.List.EMPTY,default$)], 0)))):default$);
var locals = cljs.core.constant$keyword$locals.cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,e,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$name,e,cljs.core.constant$keyword$line,cljs.analyzer.get_line(e,env),cljs.core.constant$keyword$column,cljs.analyzer.get_col(e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?(function (){var G__27360 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(catchenv,cljs.core.constant$keyword$locals,locals__$1);
var G__27361 = cblock;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27360,G__27361) : cljs.analyzer.analyze.call(null,G__27360,G__27361));
})():null);
var try$ = (function (){var G__27362 = (cljs.core.truth_((function (){var or__16482__auto__ = e;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return finally$;
}
})())?catchenv:env);
var G__27363 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27362,G__27363) : cljs.analyzer.analyze.call(null,G__27362,G__27363));
})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$op,cljs.core.constant$keyword$try,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$try,try$,cljs.core.constant$keyword$finally,finally$,cljs.core.constant$keyword$name,e,cljs.core.constant$keyword$catch,catch$,cljs.core.constant$keyword$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [try$,catch$,finally$], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"def","def",597100991,null),(function (op,env,form,name,_){
var pfn = (function() {
var G__27382 = null;
var G__27382__2 = (function (___$1,sym){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$sym,sym], null);
});
var G__27382__3 = (function (___$1,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$sym,sym,cljs.core.constant$keyword$init,init], null);
});
var G__27382__4 = (function (___$1,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$sym,sym,cljs.core.constant$keyword$doc,doc,cljs.core.constant$keyword$init,init], null);
});
G__27382 = function(___$1,sym,doc,init){
switch(arguments.length){
case 2:
return G__27382__2.call(this,___$1,sym);
case 3:
return G__27382__3.call(this,___$1,sym,doc);
case 4:
return G__27382__4.call(this,___$1,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27382.cljs$core$IFn$_invoke$arity$2 = G__27382__2;
G__27382.cljs$core$IFn$_invoke$arity$3 = G__27382__3;
G__27382.cljs$core$IFn$_invoke$arity$4 = G__27382__4;
return G__27382;
})()
;
var args = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pfn,form);
var sym = cljs.core.constant$keyword$sym.cljs$core$IFn$_invoke$arity$1(args);
var sym_meta = cljs.core.meta(sym);
var tag = cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var protocol = cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var dynamic = cljs.core.constant$keyword$dynamic.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var ns_name = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env));
var locals = cljs.core.constant$keyword$locals.cljs$core$IFn$_invoke$arity$1(env);
var clash_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym)].join(''));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,clash_ns], null)))){
cljs.analyzer.warning(cljs.core.constant$keyword$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ns,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym)].join('')),cljs.core.constant$keyword$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns_name)].join(''),[cljs.core.str(sym)].join(''))], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(sym))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't def ns-qualified name");
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$const.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.constant$keyword$locals),sym)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't redefine a constant");
} else {
}

var temp__4425__auto___27383 = cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__4425__auto___27383)){
var doc_27384 = temp__4425__auto___27383;
if(typeof doc_27384 === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to def");
}
} else {
}

var temp__4425__auto___27385 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.constant$keyword$defs,sym], null));
if(cljs.core.truth_(temp__4425__auto___27385)){
var v_27386 = temp__4425__auto___27385;
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.not(cljs.analyzer._STAR_allow_redef_STAR_);
if(and__16470__auto__){
var and__16470__auto____$1 = cljs.core.not(cljs.core.constant$keyword$declared.cljs$core$IFn$_invoke$arity$1(v_27386));
if(and__16470__auto____$1){
var and__16470__auto____$2 = cljs.core.not(cljs.core.constant$keyword$declared.cljs$core$IFn$_invoke$arity$1(sym_meta));
if(and__16470__auto____$2){
var and__16470__auto____$3 = cljs.analyzer._STAR_file_defs_STAR_;
if(cljs.core.truth_(and__16470__auto____$3)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_file_defs_STAR_) : cljs.core.deref.call(null,cljs.analyzer._STAR_file_defs_STAR_)),sym);
} else {
return and__16470__auto____$3;
}
} else {
return and__16470__auto____$2;
}
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.constant$keyword$redef_DASH_in_DASH_file,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$sym,sym,cljs.core.constant$keyword$line,cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(v_27386)], null));
} else {
}
} else {
}

if(cljs.core.truth_(cljs.analyzer._STAR_file_defs_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer._STAR_file_defs_STAR_,cljs.core.conj,sym);
} else {
}

var env__$1 = (cljs.core.truth_((function (){var or__16482__auto__ = (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ns_name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))) && (cljs.analyzer.core_name_QMARK_(env,sym));
if(or__16482__auto__){
return or__16482__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.constant$keyword$uses,sym], null));
}
})())?(function (){var ev = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.constant$keyword$locals),sym);
cljs.analyzer.warning(cljs.core.constant$keyword$redef,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$sym,sym,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(ev),cljs.core.constant$keyword$ns_DASH_name,ns_name], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.constant$keyword$excludes], null),cljs.core.conj,cljs.core.array_seq([sym], 0));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ns,cljs.core.constant$keyword$excludes], null),cljs.core.conj,sym);
})():env);
var var_name = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.constant$keyword$locals),sym));
var init_expr = ((cljs.core.contains_QMARK_(args,cljs.core.constant$keyword$init))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.constant$keyword$defs,sym], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,var_name], null),sym_meta,(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$dynamic,true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1)], 0)));

var _STAR_recur_frames_STAR_27373 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__27374 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var G__27375 = cljs.core.constant$keyword$init.cljs$core$IFn$_invoke$arity$1(args);
var G__27376 = sym;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(G__27374,G__27375,G__27376) : cljs.analyzer.analyze.call(null,G__27374,G__27375,G__27376));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27373;
}})()
:null);
var fn_var_QMARK_ = (function (){var and__16470__auto__ = init_expr;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.constant$keyword$fn);
} else {
return and__16470__auto__;
}
})();
var tag__$1 = (cljs.core.truth_(fn_var_QMARK_)?(function (){var or__16482__auto__ = cljs.core.constant$keyword$ret_DASH_tag.cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return tag;
}
})():tag);
var export_as = (function (){var temp__4425__auto__ = cljs.core.constant$keyword$export.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
if(cljs.core.truth_(temp__4425__auto__)){
var export_val = temp__4425__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,export_val)){
return var_name;
} else {
return export_val;
}
} else {
return null;
}
})();
var doc = (function (){var or__16482__auto__ = cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
}
})();
var temp__4425__auto___27387 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.constant$keyword$defs,sym], null));
if(cljs.core.truth_(temp__4425__auto___27387)){
var v_27388 = temp__4425__auto___27387;
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.not(cljs.core.constant$keyword$declared.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)));
if(and__16470__auto__){
var and__16470__auto____$1 = cljs.core.constant$keyword$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(v_27388);
if(cljs.core.truth_(and__16470__auto____$1)){
return cljs.core.not(fn_var_QMARK_);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.constant$keyword$fn_DASH_var,env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ns_DASH_name,ns_name,cljs.core.constant$keyword$sym,sym], null));
} else {
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,ns_name,cljs.core.constant$keyword$defs,sym], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,var_name], null),(function (){var G__27377 = sym_meta;
var G__27377__$1 = (cljs.core.truth_(cljs.core.constant$keyword$test.cljs$core$IFn$_invoke$arity$1(sym_meta))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27377,cljs.core.constant$keyword$test,true):G__27377);
return G__27377__$1;
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$meta,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sym_meta,cljs.core.constant$keyword$test),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$file], null),((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns){
return (function (f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env__$1)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
return "cljs/core.cljs";
} else {
return f;
}
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns))
)], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$doc,doc], null):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$dynamic,true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1),(cljs.core.truth_(protocol)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$protocol,protocol], null):null),(function (){var temp__4425__auto__ = cljs.core.constant$keyword$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
if(cljs.core.truth_(temp__4425__auto__)){
var protocol_symbol = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$protocol_DASH_symbol,protocol_symbol,cljs.core.constant$keyword$info,cljs.core.constant$keyword$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol_symbol)),cljs.core.constant$keyword$impls,cljs.core.PersistentHashSet.EMPTY], null);
} else {
return null;
}
})(),(cljs.core.truth_(fn_var_QMARK_)?(function (){var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns){
return (function (p1__27372_SHARP_){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$name,cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(p1__27372_SHARP_)));
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns))
,cljs.core.constant$keyword$methods.cljs$core$IFn$_invoke$arity$1(init_expr));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$fn_DASH_var,true,cljs.core.constant$keyword$protocol_DASH_impl,cljs.core.constant$keyword$protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.constant$keyword$protocol_DASH_inline,cljs.core.constant$keyword$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(init_expr)], null),(function (){var temp__4423__auto__ = cljs.core.constant$keyword$top_DASH_fn.cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4423__auto__)){
var top_fn_meta = temp__4423__auto__;
return top_fn_meta;
} else {
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$variadic,cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.constant$keyword$max_DASH_fixed_DASH_arity,cljs.core.constant$keyword$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.constant$keyword$method_DASH_params,params,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta),cljs.core.constant$keyword$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(sym_meta)))], null);
}
})()], 0));
})():null),(cljs.core.truth_((function (){var and__16470__auto__ = fn_var_QMARK_;
if(cljs.core.truth_(and__16470__auto__)){
return tag__$1;
} else {
return and__16470__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$ret_DASH_tag,tag__$1], null):null)], 0)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$env,env__$1,cljs.core.constant$keyword$op,cljs.core.constant$keyword$def,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$name,var_name,cljs.core.constant$keyword$var,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.constant$keyword$locals),cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr),cljs.core.constant$keyword$def_DASH_var,true);
var G__27379 = sym;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27378,G__27379) : cljs.analyzer.analyze.call(null,G__27378,G__27379));
})(),cljs.core.constant$keyword$op,cljs.core.constant$keyword$var),cljs.core.constant$keyword$doc,doc,cljs.core.constant$keyword$jsdoc,cljs.core.constant$keyword$jsdoc.cljs$core$IFn$_invoke$arity$1(sym_meta),cljs.core.constant$keyword$init,init_expr], null),(cljs.core.truth_(cljs.core.constant$keyword$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env__$1))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$var_DASH_ast,cljs.analyzer.var_ast(env__$1,sym)], null):null),(function (){var temp__4425__auto__ = cljs.core.constant$keyword$test.cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4425__auto__)){
var test = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$test,(function (){var G__27380 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var G__27381 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27380,G__27381) : cljs.analyzer.analyze.call(null,G__27380,G__27381));
})()], null);
} else {
return null;
}
})(),(cljs.core.truth_(tag__$1)?(cljs.core.truth_(fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$ret_DASH_tag,tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$tag,tag__$1], null)):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$dynamic,true], null):null),(cljs.core.truth_(export_as)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$export,export_as], null):null),(cljs.core.truth_(init_expr)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_expr], null)], null):null)], 0));
}));
cljs.analyzer.analyze_fn_method_param = (function cljs$analyzer$analyze_fn_method_param(env){
return (function (p__27391,name){
var vec__27392 = p__27391;
var locals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27392,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27392,(1),null);
var line = cljs.analyzer.get_line(name,env);
var column = cljs.analyzer.get_col(name,env);
var nmeta = cljs.core.meta(name);
var tag = cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(nmeta);
var shadow = (((locals == null))?null:(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(name) : locals.call(null,name)));
var env__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$context], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$line,line,cljs.core.constant$keyword$column,column], null)], 0));
var param = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$name,cljs.core.constant$keyword$binding_DASH_form_QMARK_,cljs.core.constant$keyword$op,cljs.core.constant$keyword$env,cljs.core.constant$keyword$column,cljs.core.constant$keyword$line,cljs.core.constant$keyword$info,cljs.core.constant$keyword$tag,cljs.core.constant$keyword$shadow],[name,true,cljs.core.constant$keyword$var,env__$1,column,line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,name,cljs.core.constant$keyword$shadow,shadow], null),tag,shadow]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,name,param),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,param)], null);
});
});
cljs.analyzer.analyze_fn_method_body = (function cljs$analyzer$analyze_fn_method_body(env,form,recur_frames){
var _STAR_recur_frames_STAR_27394 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze.call(null,env,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27394;
}});
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type){
var param_names = cljs.core.first(form);
var variadic = cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),param_names));
var param_names__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),param_names));
var body = cljs.core.next(form);
var step = cljs.analyzer.analyze_fn_method_param(env);
var step_init = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null);
var vec__27397 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,step_init,param_names__$1);
var locals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27397,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27397,(1),null);
var params_SINGLEQUOTE_ = ((variadic === true)?cljs.core.butlast(params):params);
var fixed_arity = cljs.core.count(params_SINGLEQUOTE_);
var recur_frame = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$params,params,cljs.core.constant$keyword$flag,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null);
var recur_frames = cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);
var body_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$return,cljs.core.array_seq([cljs.core.constant$keyword$locals,locals__$1], 0));
var body_form = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
var expr = cljs.analyzer.analyze_fn_method_body(body_env,body_form,recur_frames);
var recurs = (function (){var G__27398 = cljs.core.constant$keyword$flag.cljs$core$IFn$_invoke$arity$1(recur_frame);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27398) : cljs.core.deref.call(null,G__27398));
})();
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$variadic,variadic,cljs.core.constant$keyword$params,params,cljs.core.constant$keyword$max_DASH_fixed_DASH_arity,fixed_arity,cljs.core.constant$keyword$type,type,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$expr,expr,cljs.core.constant$keyword$recurs,recurs], null);
});
cljs.analyzer.fn_name_var = (function cljs$analyzer$fn_name_var(env,locals,name){
if((name == null)){
return null;
} else {
var ns = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env));
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(locals,name);
var shadow__$1 = (((shadow == null))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$js_DASH_globals,name], null)):null);
var fn_scope = cljs.core.constant$keyword$fn_DASH_scope.cljs$core$IFn$_invoke$arity$1(env);
var name_var = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,name,cljs.core.constant$keyword$info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$fn_DASH_self_DASH_name,true,cljs.core.constant$keyword$fn_DASH_scope,fn_scope,cljs.core.constant$keyword$ns,ns,cljs.core.constant$keyword$shadow,shadow__$1], null)], null);
var tag = cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name));
var ret_tag = (((tag == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$ret_DASH_tag,tag], null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name_var,ret_tag], 0));
}
});
cljs.analyzer.analyze_fn_methods_pass2_STAR_ = (function cljs$analyzer$analyze_fn_methods_pass2_STAR_(menv,locals,type,meths){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27399_SHARP_){
return cljs.analyzer.analyze_fn_method(menv,locals,p1__27399_SHARP_,type);
}),meths));
});
cljs.analyzer.analyze_fn_methods_pass2 = (function cljs$analyzer$analyze_fn_methods_pass2(menv,locals,type,meths){
var _STAR_cljs_warnings_STAR_27401 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{return cljs.analyzer.analyze_fn_methods_pass2_STAR_(menv,locals,type,meths);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_27401;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(function (op,env,p__27403,name,_){
var vec__27404 = p__27403;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27404,(0),null);
var args = cljs.core.nthnext(vec__27404,(1));
var form = vec__27404;
var vec__27405 = (((cljs.core.first(args) instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq(args)], null));
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27405,(0),null);
var meths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27405,(1),null);
var meths__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?cljs.core._conj(cljs.core.List.EMPTY,meths):meths);
var locals = cljs.core.constant$keyword$locals.cljs$core$IFn$_invoke$arity$1(env);
var name_var = cljs.analyzer.fn_name_var(env,locals,name__$1);
var env__$1 = ((!((name__$1 == null)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$fn_DASH_scope], null),cljs.core.conj,name_var):env);
var locals__$1 = (((!((locals == null))) && (!((name__$1 == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,name__$1,name_var):locals);
var form_meta = cljs.core.meta(form);
var type = cljs.core.constant$keyword$cljs$analyzer_SLASH_type.cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_impl = cljs.core.constant$keyword$cljs$analyzer_SLASH_protocol_DASH_impl.cljs$core$IFn$_invoke$arity$1(form_meta);
var proto_inline = cljs.core.constant$keyword$cljs$analyzer_SLASH_protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(form_meta);
var menv = (((cljs.core.count(meths__$1) > (1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr):env__$1);
var menv__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([menv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$protocol_DASH_impl,proto_impl,cljs.core.constant$keyword$protocol_DASH_inline,proto_inline], null)], 0));
var methods$ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27405,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__27404,___$1,args,form){
return (function (p1__27402_SHARP_){
return cljs.analyzer.analyze_fn_method(menv__$1,locals__$1,p1__27402_SHARP_,type);
});})(vec__27405,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,form_meta,type,proto_impl,proto_inline,menv,menv__$1,vec__27404,___$1,args,form))
,meths__$1);
var mfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$max_DASH_fixed_DASH_arity,methods$));
var variadic = cljs.core.boolean$(cljs.core.some(cljs.core.constant$keyword$variadic,methods$));
var locals__$2 = ((!((name__$1 == null)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,cljs.core.constant$keyword$fn_DASH_var,true,cljs.core.constant$keyword$variadic,cljs.core.array_seq([variadic,cljs.core.constant$keyword$max_DASH_fixed_DASH_arity,mfa,cljs.core.constant$keyword$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$params,methods$)], 0)):locals__$1);
var methods$__$1 = ((!((name__$1 == null)))?cljs.analyzer.analyze_fn_methods_pass2(menv__$1,locals__$2,type,meths__$1):methods$);
var form__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(form,cljs.core.dissoc,cljs.core.constant$keyword$cljs$analyzer_SLASH_protocol_DASH_impl,cljs.core.constant$keyword$cljs$analyzer_SLASH_protocol_DASH_inline,cljs.core.constant$keyword$cljs$analyzer_SLASH_type);
var js_doc = ((variadic === true)?"@param {...*} var_args":null);
var children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,methods$__$1);
var ast = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$children,cljs.core.constant$keyword$protocol_DASH_inline,cljs.core.constant$keyword$name,cljs.core.constant$keyword$variadic,cljs.core.constant$keyword$loop_DASH_lets,cljs.core.constant$keyword$protocol_DASH_impl,cljs.core.constant$keyword$op,cljs.core.constant$keyword$env,cljs.core.constant$keyword$methods,cljs.core.constant$keyword$recur_DASH_frames,cljs.core.constant$keyword$max_DASH_fixed_DASH_arity,cljs.core.constant$keyword$form,cljs.core.constant$keyword$tag,cljs.core.constant$keyword$jsdoc],[children,proto_inline,name_var,variadic,cljs.analyzer._STAR_loop_lets_STAR_,proto_impl,cljs.core.constant$keyword$fn,env__$1,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,mfa,form__$1,new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [js_doc], null)]);
var variadic_methods_27406 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$variadic,methods$__$1);
var variadic_params_27407 = cljs.core.count(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(variadic_methods_27406)));
var param_counts_27408 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.constant$keyword$params),methods$__$1);
if(((1) < cljs.core.count(variadic_methods_27406))){
cljs.analyzer.warning(cljs.core.constant$keyword$multiple_DASH_variadic_DASH_overloads,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,name_var], null));
} else {
}

if(!(((variadic_params_27407 === (0))) || ((variadic_params_27407 === ((1) + mfa))))){
cljs.analyzer.warning(cljs.core.constant$keyword$variadic_DASH_max_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,name_var], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts_27408),param_counts_27408)){
cljs.analyzer.warning(cljs.core.constant$keyword$overload_DASH_arity,env__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,name_var], null));
} else {
}

return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(ast) : cljs.analyzer.analyze_wrap_meta.call(null,ast));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),(function (op,env,p__27409,name,_){
var vec__27410 = p__27409;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27410,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27410,(1),null);
var exprs = cljs.core.nthnext(vec__27410,(2));
var form = vec__27410;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings)));
var names = cljs.core.keys(n__GT_fexpr);
var context = cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env);
var vec__27411 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__27410,___$1,bindings,exprs,form){
return (function (p__27413,n){
var vec__27414 = p__27413;
var map__27415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27414,(0),null);
var map__27415__$1 = ((((!((map__27415 == null)))?((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27415):map__27415);
var env__$1 = map__27415__$1;
var locals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27415__$1,cljs.core.constant$keyword$locals);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27414,(1),null);
var ret_tag = cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR_27417 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{var G__27418 = env__$1;
var G__27419 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(n) : n__GT_fexpr.call(null,n));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27418,G__27419) : cljs.analyzer.analyze.call(null,G__27418,G__27419));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_27417;
}})();
var be = (function (){var G__27420 = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$name,cljs.core.constant$keyword$variadic,cljs.core.constant$keyword$method_DASH_params,cljs.core.constant$keyword$column,cljs.core.constant$keyword$line,cljs.core.constant$keyword$max_DASH_fixed_DASH_arity,cljs.core.constant$keyword$fn_DASH_var,cljs.core.constant$keyword$shadow,cljs.core.constant$keyword$local],[n,cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$params,cljs.core.constant$keyword$methods.cljs$core$IFn$_invoke$arity$1(fexpr)),cljs.analyzer.get_col(n,env__$1),cljs.analyzer.get_line(n,env__$1),cljs.core.constant$keyword$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),true,(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(n) : locals.call(null,n)),true]);
var G__27420__$1 = (cljs.core.truth_(ret_tag)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27420,cljs.core.constant$keyword$ret_DASH_tag,ret_tag):G__27420);
return G__27420__$1;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$locals,n], null),be),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be)], null);
});})(n__GT_fexpr,names,context,vec__27410,___$1,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27411,(0),null);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27411,(1),null);
var meth_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var vec__27412 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__27411,meth_env,bes,meth_env__$1,vec__27410,___$1,bindings,exprs,form){
return (function (p__27421,p__27422){
var vec__27423 = p__27421;
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27423,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27423,(1),null);
var map__27424 = p__27422;
var map__27424__$1 = ((((!((map__27424 == null)))?((((map__27424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27424):map__27424);
var be = map__27424__$1;
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27424__$1,cljs.core.constant$keyword$name);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27424__$1,cljs.core.constant$keyword$shadow);
var env__$1 = cljs.core.assoc_in(meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$locals,name__$1], null),shadow);
var fexpr = (function (){var G__27426 = env__$1;
var G__27427 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(name__$1) : n__GT_fexpr.call(null,name__$1));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27426,G__27427) : cljs.analyzer.analyze.call(null,G__27426,G__27427));
})();
var be_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(be,cljs.core.constant$keyword$init,fexpr,cljs.core.array_seq([cljs.core.constant$keyword$variadic,cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.constant$keyword$max_DASH_fixed_DASH_arity,cljs.core.constant$keyword$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.constant$keyword$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$params,cljs.core.constant$keyword$methods.cljs$core$IFn$_invoke$arity$1(fexpr))], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$locals,name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes__$1,be_SINGLEQUOTE_)], null);
});})(n__GT_fexpr,names,context,vec__27411,meth_env,bes,meth_env__$1,vec__27410,___$1,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27412,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27412,(1),null);
var expr = (function (){var G__27428 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env__$2,cljs.core.constant$keyword$context,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,context))?cljs.core.constant$keyword$return:context));
var G__27429 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27428,G__27429) : cljs.analyzer.analyze.call(null,G__27428,G__27429));
})();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$op,cljs.core.constant$keyword$letfn,cljs.core.constant$keyword$bindings,bes__$1,cljs.core.constant$keyword$expr,expr,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$children,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$init,bes__$1)),expr)], null);
}));
cljs.analyzer.analyze_do_statements_STAR_ = (function cljs$analyzer$analyze_do_statements_STAR_(env,exprs){
return cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27430_SHARP_){
var G__27433 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$statement);
var G__27434 = p1__27430_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27433,G__27434) : cljs.analyzer.analyze.call(null,G__27433,G__27434));
}),cljs.core.butlast(exprs)));
});
cljs.analyzer.analyze_do_statements = (function cljs$analyzer$analyze_do_statements(env,exprs){
var _STAR_recur_frames_STAR_27436 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_do_statements_STAR_(env,exprs);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27436;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(function (op,env,p__27437,_,___$1){
var vec__27438 = p__27437;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27438,(0),null);
var exprs = cljs.core.nthnext(vec__27438,(1));
var form = vec__27438;
var statements = cljs.analyzer.analyze_do_statements(env,exprs);
if((cljs.core.count(exprs) <= (1))){
var ret = (function (){var G__27439 = env;
var G__27440 = cljs.core.first(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27439,G__27440) : cljs.analyzer.analyze.call(null,G__27439,G__27440));
})();
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$do,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$statements,statements,cljs.core.constant$keyword$ret,ret,cljs.core.constant$keyword$children,children], null);
} else {
var ret_env = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$statement,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$statement):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$return));
var ret = (function (){var G__27441 = ret_env;
var G__27442 = cljs.core.last(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27441,G__27442) : cljs.analyzer.analyze.call(null,G__27441,G__27442));
})();
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(statements),ret);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$do,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$statements,statements,cljs.core.constant$keyword$ret,ret,cljs.core.constant$keyword$children,children], null);
}
}));
cljs.analyzer.analyze_let_binding_init = (function cljs$analyzer$analyze_let_binding_init(env,init,loop_lets){
var _STAR_loop_lets_STAR_27444 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,init) : cljs.analyzer.analyze.call(null,env,init));
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_27444;
}});
cljs.analyzer.get_let_tag = (function cljs$analyzer$get_let_tag(name,init_expr){
var tag = cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name));
if(!((tag == null))){
return tag;
} else {
var tag__$1 = cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(init_expr);
if(!((tag__$1 == null))){
return tag__$1;
} else {
return cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(init_expr));
}
}
});
cljs.analyzer.analyze_let_bindings_STAR_ = (function cljs$analyzer$analyze_let_bindings_STAR_(encl_env,bindings){
var bes = cljs.core.PersistentVector.EMPTY;
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(encl_env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var bindings__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
while(true){
var binding = cljs.core.first(bindings__$1);
if(!((binding == null))){
var vec__27452 = binding;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27452,(0),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27452,(1),null);
if(cljs.core.truth_((function (){var or__16482__auto__ = !((cljs.core.namespace(name) == null));
if(or__16482__auto__){
return or__16482__auto__;
} else {
var G__27455 = [cljs.core.str(name)].join('');
var G__27456 = ".";
return goog.string.contains(G__27455,G__27456);
}
})())){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,[cljs.core.str("Invalid local name: "),cljs.core.str(name)].join(''));
} else {
}

var init_expr = cljs.analyzer.analyze_let_binding_init(env,init,cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$params,bes], null),cljs.analyzer._STAR_loop_lets_STAR_));
var line = cljs.analyzer.get_line(name,env);
var col = cljs.analyzer.get_col(name,env);
var be = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$init,cljs.core.constant$keyword$name,cljs.core.constant$keyword$binding_DASH_form_QMARK_,cljs.core.constant$keyword$op,cljs.core.constant$keyword$env,cljs.core.constant$keyword$column,cljs.core.constant$keyword$line,cljs.core.constant$keyword$info,cljs.core.constant$keyword$tag,cljs.core.constant$keyword$shadow,cljs.core.constant$keyword$local],[init_expr,name,true,cljs.core.constant$keyword$var,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$line,line,cljs.core.constant$keyword$column,col], null),col,line,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,name,cljs.core.constant$keyword$shadow,(function (){var G__27457 = cljs.core.constant$keyword$locals.cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__27457) : name.call(null,G__27457));
})()], null),cljs.analyzer.get_let_tag(name,init_expr),(function (){var G__27458 = cljs.core.constant$keyword$locals.cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__27458) : name.call(null,G__27458));
})(),true]);
var be__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$fn,cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(init_expr)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([be,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$fn_DASH_var,true,cljs.core.constant$keyword$variadic,cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.constant$keyword$max_DASH_fixed_DASH_arity,cljs.core.constant$keyword$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(init_expr),cljs.core.constant$keyword$method_DASH_params,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$params,cljs.core.constant$keyword$methods.cljs$core$IFn$_invoke$arity$1(init_expr))], null)], 0)):be);
var G__27459 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be__$1);
var G__27460 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$locals,name], null),be__$1);
var G__27461 = cljs.core.next(bindings__$1);
bes = G__27459;
env = G__27460;
bindings__$1 = G__27461;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bes,env], null);
}
break;
}
});
cljs.analyzer.analyze_let_bindings = (function cljs$analyzer$analyze_let_bindings(encl_env,bindings){
var _STAR_recur_frames_STAR_27463 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_let_bindings_STAR_(encl_env,bindings);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27463;
}});
cljs.analyzer.analyze_let_body_STAR_ = (function cljs$analyzer$analyze_let_body_STAR_(env,context,exprs){
var G__27466 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,context))?cljs.core.constant$keyword$return:context));
var G__27467 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27466,G__27467) : cljs.analyzer.analyze.call(null,G__27466,G__27467));
});
cljs.analyzer.analyze_let_body = (function cljs$analyzer$analyze_let_body(env,context,exprs,recur_frames,loop_lets){
var _STAR_recur_frames_STAR_27470 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR_27471 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = recur_frames;

cljs.analyzer._STAR_loop_lets_STAR_ = loop_lets;

try{return cljs.analyzer.analyze_let_body_STAR_(env,context,exprs);
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_27471;

cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27470;
}});
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__27472,is_loop){
var vec__27475 = p__27472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27475,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27475,(1),null);
var exprs = cljs.core.nthnext(vec__27475,(2));
var form = vec__27475;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,"bindings must be vector of even number of elements");
}

var context = cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(encl_env);
var vec__27476 = cljs.analyzer.analyze_let_bindings(encl_env,bindings);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27476,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27476,(1),null);
var recur_frame = ((is_loop === true)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$params,bes,cljs.core.constant$keyword$flag,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null):null);
var recur_frames = (cljs.core.truth_(recur_frame)?cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_):cljs.analyzer._STAR_recur_frames_STAR_);
var loop_lets = ((is_loop === true)?cljs.analyzer._STAR_loop_lets_STAR_:((!((cljs.analyzer._STAR_loop_lets_STAR_ == null)))?cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$params,bes], null),cljs.analyzer._STAR_loop_lets_STAR_):null));
var expr = cljs.analyzer.analyze_let_body(env,context,exprs,recur_frames,loop_lets);
var op = ((is_loop === true)?cljs.core.constant$keyword$loop:cljs.core.constant$keyword$let);
var children = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$init,bes)),expr);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$op,op,cljs.core.constant$keyword$env,encl_env,cljs.core.constant$keyword$bindings,bes,cljs.core.constant$keyword$expr,expr,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$children,children], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,false);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,true);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),(function (op,env,p__27478,_,___$1){
var vec__27479 = p__27478;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27479,(0),null);
var exprs = cljs.core.nthnext(vec__27479,(1));
var form = vec__27479;
var context = cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first(cljs.analyzer._STAR_recur_frames_STAR_);
var exprs__$1 = (function (){var _STAR_recur_frames_STAR_27480 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_27480,context,frame,vec__27479,___$2,exprs,form){
return (function (p1__27477_SHARP_){
var G__27481 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var G__27482 = p1__27477_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27481,G__27482) : cljs.analyzer.analyze.call(null,G__27481,G__27482));
});})(_STAR_recur_frames_STAR_27480,context,frame,vec__27479,___$2,exprs,form))
,exprs));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27480;
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't recur here");
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs__$1),cljs.core.count(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"recur argument count mismatch");
}

var G__27483_27485 = cljs.core.constant$keyword$flag.cljs$core$IFn$_invoke$arity$1(frame);
var G__27484_27486 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__27483_27485,G__27484_27486) : cljs.core.reset_BANG_.call(null,G__27483_27485,G__27484_27486));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$op,cljs.core.constant$keyword$recur,cljs.core.constant$keyword$form,form], null),cljs.core.constant$keyword$frame,frame,cljs.core.array_seq([cljs.core.constant$keyword$exprs,exprs__$1,cljs.core.constant$keyword$children,exprs__$1], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(function (_,env,p__27487,___$1,___$2){
var vec__27488 = p__27487;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27488,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27488,(1),null);
var G__27489 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$quoted_QMARK_,true);
var G__27490 = x;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27489,G__27490) : cljs.analyzer.analyze.call(null,G__27489,G__27490));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"new","new",-444906321,null),(function (_,env,p__27492,___$1,___$2){
var vec__27493 = p__27492;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27493,(0),null);
var ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27493,(1),null);
var args = cljs.core.nthnext(vec__27493,(2));
var form = vec__27493;
if((ctor instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"First arg to new must be a symbol");
}

var _STAR_recur_frames_STAR_27494 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var ctorexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,ctor) : cljs.analyzer.analyze.call(null,enve,ctor));
var ctor_var = cljs.analyzer.resolve_existing_var(env,ctor);
var record_args = (cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.constant$keyword$record.cljs$core$IFn$_invoke$arity$1(ctor_var);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.not(cljs.core.constant$keyword$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)));
} else {
return and__16470__auto__;
}
})())?cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,null) : cljs.analyzer.analyze.call(null,enve,null))):null);
var argexprs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_27494,vec__27493,___$3,ctor,args,form){
return (function (p1__27491_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__27491_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__27491_SHARP_));
});})(enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_27494,vec__27493,___$3,ctor,args,form))
,args)),record_args);
var known_num_fields = cljs.core.constant$keyword$num_DASH_fields.cljs$core$IFn$_invoke$arity$1(ctor_var);
var argc = cljs.core.count(args);
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.not(cljs.core.constant$keyword$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)));
if(and__16470__auto__){
var and__16470__auto____$1 = known_num_fields;
if(cljs.core.truth_(and__16470__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(known_num_fields,argc);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.constant$keyword$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$argc,argc,cljs.core.constant$keyword$ctor,ctor], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$op,cljs.core.constant$keyword$new,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$ctor,ctorexpr,cljs.core.constant$keyword$args,argexprs,cljs.core.constant$keyword$children,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctorexpr], null),argexprs),cljs.core.constant$keyword$tag,(function (){var name = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(ctorexpr));
var or__16482__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Object","js/Object",61215323,null),new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("js","Array","js/Array",-423508366,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol("js","Number","js/Number",-508133572,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol("js","Function","js/Function",-749892063,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null).call(null,name);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return name;
}
})()], null);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27494;
}}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(function (_,env,p__27495,___$1,___$2){
var vec__27496 = p__27495;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27496,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27496,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27496,(2),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27496,(3),null);
var form = vec__27496;
var vec__27497 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,target),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,val)], 0)))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27497,(0),null);
var val__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27497,(1),null);
var _STAR_recur_frames_STAR_27498 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var targetexpr = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target__$1,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)))?(function (){

return cljs.core.constant$keyword$cljs$analyzer_SLASH_set_DASH_unchecked_DASH_if;
})()
:(((target__$1 instanceof cljs.core.Symbol))?(function (){
if(cljs.core.constant$keyword$const.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.constant$keyword$locals),target__$1))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! a constant");
} else {
}

var local_27500 = (function (){var G__27499 = cljs.core.constant$keyword$locals.cljs$core$IFn$_invoke$arity$1(env);
return (target__$1.cljs$core$IFn$_invoke$arity$1 ? target__$1.cljs$core$IFn$_invoke$arity$1(G__27499) : target__$1.call(null,G__27499));
})();
if((function (){var or__16482__auto__ = (local_27500 == null);
if(or__16482__auto__){
return or__16482__auto__;
} else {
var and__16470__auto__ = cljs.core.constant$keyword$field.cljs$core$IFn$_invoke$arity$1(local_27500);
if(and__16470__auto__){
var or__16482__auto____$1 = cljs.core.constant$keyword$mutable.cljs$core$IFn$_invoke$arity$1(local_27500);
if(or__16482__auto____$1){
return or__16482__auto____$1;
} else {
var or__16482__auto____$2 = cljs.core.constant$keyword$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_27500);
if(or__16482__auto____$2){
return or__16482__auto____$2;
} else {
return cljs.core.constant$keyword$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(local_27500);
}
}
} else {
return and__16470__auto__;
}
}
})()){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! local var or non-mutable field");
}

return (cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze_symbol.call(null,enve,target__$1));
})()
:((cljs.core.seq_QMARK_(target__$1))?(function (){var targetexpr = (cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3(enve,target__$1,null) : cljs.analyzer.analyze_seq.call(null,enve,target__$1,null));
if(cljs.core.constant$keyword$field.cljs$core$IFn$_invoke$arity$1(targetexpr)){
return targetexpr;
} else {
return null;
}
})():null)
));
var valexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,val__$1) : cljs.analyzer.analyze.call(null,enve,val__$1));
if(targetexpr){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"set! target must be a field or a symbol naming a var");
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(targetexpr,cljs.core.constant$keyword$cljs$analyzer_SLASH_set_DASH_unchecked_DASH_if)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$op,cljs.core.constant$keyword$no_DASH_op], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$op,cljs.core.constant$keyword$set_BANG_,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$target,targetexpr,cljs.core.constant$keyword$val,valexpr,cljs.core.constant$keyword$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr,valexpr], null)], null);

}
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27498;
}}));
cljs.analyzer.foreign_dep_QMARK_ = (function cljs$analyzer$foreign_dep_QMARK_(dep){
if((dep instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"dep","dep",-142776527,null))], 0)))].join('')));
}

var js_index = cljs.core.constant$keyword$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
var temp__4423__auto__ = cljs.core.find(js_index,cljs.core.name(dep));
if(temp__4423__auto__){
var vec__27504 = temp__4423__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27504,(0),null);
var map__27505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27504,(1),null);
var map__27505__$1 = ((((!((map__27505 == null)))?((((map__27505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27505):map__27505);
var foreign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27505__$1,cljs.core.constant$keyword$foreign);
return foreign;
} else {
return false;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(){
var args27508 = [];
var len__17521__auto___27520 = arguments.length;
var i__17522__auto___27521 = (0);
while(true){
if((i__17522__auto___27521 < len__17521__auto___27520)){
args27508.push((arguments[i__17522__auto___27521]));

var G__27522 = (i__17522__auto___27521 + (1));
i__17522__auto___27521 = G__27522;
continue;
} else {
}
break;
}

var G__27510 = args27508.length;
switch (G__27510) {
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27508.length)].join('')));

}
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4(lib,deps,env,null);
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var _STAR_cljs_dep_set_STAR_27511 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$dep_DASH_path], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_27511,compiler){
return (function (p1__27507_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__27507_SHARP_));
});})(_STAR_cljs_dep_set_STAR_27511,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(cljs.core.constant$keyword$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__27507#","p1__27507#",-1687141353,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"*cljs-dep-set*","*cljs-dep-set*",1566566915,null),new cljs.core.Symbol(null,"p1__27507#","p1__27507#",-1687141353,null)))),new cljs.core.Symbol(null,"deps","deps",-771075450,null))], 0)))].join('')));
}

var seq__27512 = cljs.core.seq(deps);
var chunk__27513 = null;
var count__27514 = (0);
var i__27515 = (0);
while(true){
if((i__27515 < count__27514)){
var dep = chunk__27513.cljs$core$IIndexed$_nth$arity$2(null,i__27515);
if((function (){var or__16482__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,dep,cljs.core.constant$keyword$defs], null)));
if(or__16482__auto__){
return or__16482__auto__;
} else {
return cljs.core.contains_QMARK_(cljs.core.constant$keyword$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})()){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__27516 = cljs.core.constant$keyword$undeclared_DASH_ns;
var G__27517 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ns_DASH_sym,dep,cljs.core.constant$keyword$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__27516,G__27517) : cljs.analyzer.error_message.call(null,G__27516,G__27517));
})());
}

var G__27524 = seq__27512;
var G__27525 = chunk__27513;
var G__27526 = count__27514;
var G__27527 = (i__27515 + (1));
seq__27512 = G__27524;
chunk__27513 = G__27525;
count__27514 = G__27526;
i__27515 = G__27527;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__27512);
if(temp__4425__auto__){
var seq__27512__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27512__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__27512__$1);
var G__27528 = cljs.core.chunk_rest(seq__27512__$1);
var G__27529 = c__17266__auto__;
var G__27530 = cljs.core.count(c__17266__auto__);
var G__27531 = (0);
seq__27512 = G__27528;
chunk__27513 = G__27529;
count__27514 = G__27530;
i__27515 = G__27531;
continue;
} else {
var dep = cljs.core.first(seq__27512__$1);
if((function (){var or__16482__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,dep,cljs.core.constant$keyword$defs], null)));
if(or__16482__auto__){
return or__16482__auto__;
} else {
return cljs.core.contains_QMARK_(cljs.core.constant$keyword$js_DASH_dependency_DASH_index.cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})()){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__27518 = cljs.core.constant$keyword$undeclared_DASH_ns;
var G__27519 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ns_DASH_sym,dep,cljs.core.constant$keyword$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__27518,G__27519) : cljs.analyzer.error_message.call(null,G__27518,G__27519));
})());
}

var G__27532 = cljs.core.next(seq__27512__$1);
var G__27533 = null;
var G__27534 = (0);
var G__27535 = (0);
seq__27512 = G__27532;
chunk__27513 = G__27533;
count__27514 = G__27534;
i__27515 = G__27535;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_27511;
}});

cljs.analyzer.analyze_deps.cljs$lang$maxFixedArity = 4;
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var seq__27546 = cljs.core.seq(uses);
var chunk__27547 = null;
var count__27548 = (0);
var i__27549 = (0);
while(true){
if((i__27549 < count__27548)){
var vec__27550 = chunk__27547.cljs$core$IIndexed$_nth$arity$2(null,i__27549);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27550,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27550,(1),null);
var js_lib_27556 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$js_DASH_dependency_DASH_index,cljs.core.name(lib)], null));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,lib,cljs.core.constant$keyword$defs,sym], null),cljs.core.constant$keyword$cljs$analyzer_SLASH_not_DASH_found),cljs.core.constant$keyword$cljs$analyzer_SLASH_not_DASH_found)) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_27556,cljs.core.constant$keyword$group),cljs.core.constant$keyword$goog))) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_27556,cljs.core.constant$keyword$closure_DASH_lib)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__27551 = cljs.core.constant$keyword$undeclared_DASH_ns_DASH_form;
var G__27552 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"var",cljs.core.constant$keyword$lib,lib,cljs.core.constant$keyword$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__27551,G__27552) : cljs.analyzer.error_message.call(null,G__27551,G__27552));
})());
} else {
}

var G__27557 = seq__27546;
var G__27558 = chunk__27547;
var G__27559 = count__27548;
var G__27560 = (i__27549 + (1));
seq__27546 = G__27557;
chunk__27547 = G__27558;
count__27548 = G__27559;
i__27549 = G__27560;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__27546);
if(temp__4425__auto__){
var seq__27546__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27546__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__27546__$1);
var G__27561 = cljs.core.chunk_rest(seq__27546__$1);
var G__27562 = c__17266__auto__;
var G__27563 = cljs.core.count(c__17266__auto__);
var G__27564 = (0);
seq__27546 = G__27561;
chunk__27547 = G__27562;
count__27548 = G__27563;
i__27549 = G__27564;
continue;
} else {
var vec__27553 = cljs.core.first(seq__27546__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27553,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27553,(1),null);
var js_lib_27565 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$js_DASH_dependency_DASH_index,cljs.core.name(lib)], null));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,lib,cljs.core.constant$keyword$defs,sym], null),cljs.core.constant$keyword$cljs$analyzer_SLASH_not_DASH_found),cljs.core.constant$keyword$cljs$analyzer_SLASH_not_DASH_found)) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_27565,cljs.core.constant$keyword$group),cljs.core.constant$keyword$goog))) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_27565,cljs.core.constant$keyword$closure_DASH_lib)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__27554 = cljs.core.constant$keyword$undeclared_DASH_ns_DASH_form;
var G__27555 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"var",cljs.core.constant$keyword$lib,lib,cljs.core.constant$keyword$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__27554,G__27555) : cljs.analyzer.error_message.call(null,G__27554,G__27555));
})());
} else {
}

var G__27566 = cljs.core.next(seq__27546__$1);
var G__27567 = null;
var G__27568 = (0);
var G__27569 = (0);
seq__27546 = G__27566;
chunk__27547 = G__27567;
count__27548 = G__27568;
i__27549 = G__27569;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.check_use_macros = (function cljs$analyzer$check_use_macros(use_macros,env){
var seq__27580 = cljs.core.seq(use_macros);
var chunk__27581 = null;
var count__27582 = (0);
var i__27583 = (0);
while(true){
if((i__27583 < count__27582)){
var vec__27584 = chunk__27581.cljs$core$IIndexed$_nth$arity$2(null,i__27583);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27584,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27584,(1),null);
var the_ns_27590 = cljs.core.find_macros_ns(lib);
if(((the_ns_27590 == null)) || ((the_ns_27590.findInternedVar(sym) == null))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__27585 = cljs.core.constant$keyword$undeclared_DASH_ns_DASH_form;
var G__27586 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"macro",cljs.core.constant$keyword$lib,lib,cljs.core.constant$keyword$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__27585,G__27586) : cljs.analyzer.error_message.call(null,G__27585,G__27586));
})());
} else {
}

var G__27591 = seq__27580;
var G__27592 = chunk__27581;
var G__27593 = count__27582;
var G__27594 = (i__27583 + (1));
seq__27580 = G__27591;
chunk__27581 = G__27592;
count__27582 = G__27593;
i__27583 = G__27594;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__27580);
if(temp__4425__auto__){
var seq__27580__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27580__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__27580__$1);
var G__27595 = cljs.core.chunk_rest(seq__27580__$1);
var G__27596 = c__17266__auto__;
var G__27597 = cljs.core.count(c__17266__auto__);
var G__27598 = (0);
seq__27580 = G__27595;
chunk__27581 = G__27596;
count__27582 = G__27597;
i__27583 = G__27598;
continue;
} else {
var vec__27587 = cljs.core.first(seq__27580__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27587,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27587,(1),null);
var the_ns_27599 = cljs.core.find_macros_ns(lib);
if(((the_ns_27599 == null)) || ((the_ns_27599.findInternedVar(sym) == null))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__27588 = cljs.core.constant$keyword$undeclared_DASH_ns_DASH_form;
var G__27589 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"macro",cljs.core.constant$keyword$lib,lib,cljs.core.constant$keyword$sym,sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__27588,G__27589) : cljs.analyzer.error_message.call(null,G__27588,G__27589));
})());
} else {
}

var G__27600 = cljs.core.next(seq__27580__$1);
var G__27601 = null;
var G__27602 = (0);
var G__27603 = (0);
seq__27580 = G__27600;
chunk__27581 = G__27601;
count__27582 = G__27602;
i__27583 = G__27603;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.parse_ns_error_msg = (function cljs$analyzer$parse_ns_error_msg(spec,msg){
return [cljs.core.str(msg),cljs.core.str("; offending spec: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([spec], 0)))].join('');
});
cljs.analyzer.basic_validate_ns_spec = (function cljs$analyzer$basic_validate_ns_spec(env,macros_QMARK_,spec){
if(((spec instanceof cljs.core.Symbol)) || (cljs.core.sequential_QMARK_(spec))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros"));
}

if(cljs.core.sequential_QMARK_(spec)){
if((cljs.core.first(spec) instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Library name must be specified as a symbol in :require / :require-macros"));
}

if(cljs.core.odd_QMARK_(cljs.core.count(spec))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as alias and :refer (names) options supported in :require"));
}

if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$as,null,cljs.core.constant$keyword$refer,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.next(spec))))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as and :refer options supported in :require / :require-macros"));
}

if((function (){var fs = cljs.core.frequencies(cljs.core.next(spec));
return (((fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$as,(0)) : fs.call(null,cljs.core.constant$keyword$as,(0))) <= (1))) && (((fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$refer,(0)) : fs.call(null,cljs.core.constant$keyword$refer,(0))) <= (1)));
})()){
return null;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Each of :as and :refer options may only be specified once in :require / :require-macros"));
}
} else {
return null;
}
});
cljs.analyzer.parse_ns_excludes = (function cljs$analyzer$parse_ns_excludes(env,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__27606){
var vec__27607 = p__27606;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27607,(0),null);
var exclude = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27607,(1),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27607,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.constant$keyword$refer_DASH_clojure)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exclude,cljs.core.constant$keyword$exclude)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only [:refer-clojure :exclude (names)] form supported");
}

if(cljs.core.seq(s)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only one :refer-clojure form is allowed per namespace definition");
} else {
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,xs);
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,args);
});
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__27608){
var vec__27610 = p__27608;
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27610,(0),null);
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27610,(1),null);
var referred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27610,(2),null);
var spec = vec__27610;
if(((lib instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$only,kw)) && (cljs.core.sequential_QMARK_(referred)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,referred))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns :only (names)] specs supported in :use / :use-macros"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib,cljs.core.constant$keyword$refer,referred], null);
});
cljs.analyzer.parse_require_spec = (function cljs$analyzer$parse_require_spec(env,macros_QMARK_,deps,aliases,spec){
while(true){
if((spec instanceof cljs.core.Symbol)){
var G__27621 = env;
var G__27622 = macros_QMARK_;
var G__27623 = deps;
var G__27624 = aliases;
var G__27625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__27621;
macros_QMARK_ = G__27622;
deps = G__27623;
aliases = G__27624;
spec = G__27625;
continue;
} else {
cljs.analyzer.basic_validate_ns_spec(env,macros_QMARK_,spec);

var vec__27616 = spec;
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27616,(0),null);
var opts = cljs.core.nthnext(vec__27616,(1));
var lib__$1 = (function (){var temp__4423__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$js_DASH_module_DASH_index,cljs.core.name(lib)], null));
if(temp__4423__auto__){
var js_module_name = temp__4423__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(js_module_name);
} else {
return lib;
}
})();
var map__27617 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var map__27617__$1 = ((((!((map__27617 == null)))?((((map__27617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27617):map__27617);
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27617__$1,cljs.core.constant$keyword$as,lib__$1);
var referred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27617__$1,cljs.core.constant$keyword$refer);
var vec__27618 = ((macros_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$require_DASH_macros,cljs.core.constant$keyword$use_DASH_macros], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$require,cljs.core.constant$keyword$use], null));
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27618,(0),null);
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27618,(1),null);
if(((alias instanceof cljs.core.Symbol)) || ((alias == null))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as must be followed by a symbol in :require / :require-macros"));
}

if(alias){
var alias_type_27626 = ((macros_QMARK_)?cljs.core.constant$keyword$macros:cljs.core.constant$keyword$fns);
var lib_SINGLEQUOTE__27627 = (function (){var G__27620 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aliases) : cljs.core.deref.call(null,aliases));
return (alias_type_27626.cljs$core$IFn$_invoke$arity$1 ? alias_type_27626.cljs$core$IFn$_invoke$arity$1(G__27620) : alias_type_27626.call(null,G__27620));
})().call(null,alias);
if((!((lib_SINGLEQUOTE__27627 == null))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lib__$1,lib_SINGLEQUOTE__27627))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as alias must be unique"));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_27626], null),cljs.core.conj,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null)], 0));
} else {
}

if(((cljs.core.sequential_QMARK_(referred)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,referred))) || ((referred == null))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":refer must be followed by a sequence of symbols in :require / :require-macros"));
}

if(macros_QMARK_){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,lib__$1);
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((alias)?new cljs.core.PersistentArrayMap.fromArray([rk,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([alias,lib__$1], true, false),new cljs.core.PersistentArrayMap.fromArray([lib__$1,lib__$1], true, false)], 0))], true, false):null),((referred)?new cljs.core.PersistentArrayMap.fromArray([uk,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(referred,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(lib__$1)))], true, false):null)], 0));
}
break;
}
});
cljs.analyzer.parse_import_spec = (function cljs$analyzer$parse_import_spec(env,deps,spec){
if(((cljs.core.sequential_QMARK_(spec)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,spec))) || (((spec instanceof cljs.core.Symbol)) && ((cljs.core.namespace(spec) == null)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only lib.ns.Ctor or [lib.ns Ctor*] spec supported in :import"));
}

var import_map = ((cljs.core.sequential_QMARK_(spec))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27628_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__27628_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.first(spec)),cljs.core.str("."),cljs.core.str(p1__27628_SHARP_)].join(''))],null));
}),cljs.core.rest(spec))):new cljs.core.PersistentArrayMap.fromArray([cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(spec)].join(''),/\./))),spec], true, false));
var seq__27635_27641 = cljs.core.seq(import_map);
var chunk__27636_27642 = null;
var count__27637_27643 = (0);
var i__27638_27644 = (0);
while(true){
if((i__27638_27644 < count__27637_27643)){
var vec__27639_27645 = chunk__27636_27642.cljs$core$IIndexed$_nth$arity$2(null,i__27638_27644);
var __27646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27639_27645,(0),null);
var spec_27647__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27639_27645,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_27647__$1);

var G__27648 = seq__27635_27641;
var G__27649 = chunk__27636_27642;
var G__27650 = count__27637_27643;
var G__27651 = (i__27638_27644 + (1));
seq__27635_27641 = G__27648;
chunk__27636_27642 = G__27649;
count__27637_27643 = G__27650;
i__27638_27644 = G__27651;
continue;
} else {
var temp__4425__auto___27652 = cljs.core.seq(seq__27635_27641);
if(temp__4425__auto___27652){
var seq__27635_27653__$1 = temp__4425__auto___27652;
if(cljs.core.chunked_seq_QMARK_(seq__27635_27653__$1)){
var c__17266__auto___27654 = cljs.core.chunk_first(seq__27635_27653__$1);
var G__27655 = cljs.core.chunk_rest(seq__27635_27653__$1);
var G__27656 = c__17266__auto___27654;
var G__27657 = cljs.core.count(c__17266__auto___27654);
var G__27658 = (0);
seq__27635_27641 = G__27655;
chunk__27636_27642 = G__27656;
count__27637_27643 = G__27657;
i__27638_27644 = G__27658;
continue;
} else {
var vec__27640_27659 = cljs.core.first(seq__27635_27653__$1);
var __27660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27640_27659,(0),null);
var spec_27661__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27640_27659,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_27661__$1);

var G__27662 = cljs.core.next(seq__27635_27653__$1);
var G__27663 = null;
var G__27664 = (0);
var G__27665 = (0);
seq__27635_27641 = G__27662;
chunk__27636_27642 = G__27663;
count__27637_27643 = G__27664;
i__27638_27644 = G__27665;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$import,import_map,cljs.core.constant$keyword$require,import_map], null);
});
/**
 * Given a spec form check whether the spec namespace requires a macro file
 * of the same name. If so return true.
 */
cljs.analyzer.macro_autoload_ns_QMARK_ = (function cljs$analyzer$macro_autoload_ns_QMARK_(form){
if(cljs.analyzer._STAR_macro_infer_STAR_){
var ns = ((cljs.core.sequential_QMARK_(form))?cljs.core.first(form):form);
var map__27668 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,ns], null));
var map__27668__$1 = ((((!((map__27668 == null)))?((((map__27668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27668):map__27668);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27668__$1,cljs.core.constant$keyword$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27668__$1,cljs.core.constant$keyword$require_DASH_macros);
var or__16482__auto__ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals(use_macros));
if(or__16482__auto__){
return or__16482__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals(require_macros));
}
} else {
return null;
}
});
/**
 * Given an original set of ns specs desugar :include-macros and :refer-macros
 * usage into only primitive spec forms - :use, :require, :use-macros,
 * :require-macros. If a library includes a macro file of with the same name
 * as the namespace will also be desugared.
 */
cljs.analyzer.desugar_ns_specs = (function cljs$analyzer$desugar_ns_specs(args){
var map__27677 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27678){
var vec__27679 = p__27678;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27679,(0),null);
var specs = cljs.core.nthnext(vec__27679,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__27677__$1 = ((((!((map__27677 == null)))?((((map__27677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27677):map__27677);
var indexed = map__27677__$1;
var require = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27677__$1,cljs.core.constant$keyword$require);
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$include_DASH_macros,null,cljs.core.constant$keyword$refer_DASH_macros,null], null), null);
var remove_from_spec = ((function (map__27677,map__27677__$1,indexed,require,sugar_keys){
return (function (pred,spec){
while(true){
if(cljs.core.not((function (){var and__16470__auto__ = cljs.core.sequential_QMARK_(spec);
if(and__16470__auto__){
return cljs.core.some(pred,spec);
} else {
return and__16470__auto__;
}
})())){
return spec;
} else {
var vec__27681 = cljs.core.split_with(cljs.core.complement(pred),spec);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27681,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27681,(1),null);
var G__27683 = pred;
var G__27684 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),r));
pred = G__27683;
spec = G__27684;
continue;
}
break;
}
});})(map__27677,map__27677__$1,indexed,require,sugar_keys))
;
var replace_refer_macros = ((function (map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (spec){
if(!(cljs.core.sequential_QMARK_(spec))){
return spec;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.constant$keyword$refer_DASH_macros)){
return cljs.core.constant$keyword$refer;
} else {
return x;
}
});})(map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec))
,spec);
}
});})(map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec))
;
var reload_spec_QMARK_ = ((function (map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros){
return (function (p1__27670_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$reload,null,cljs.core.constant$keyword$reload_DASH_all,null], null), null).call(null,p1__27670_SHARP_);
});})(map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros))
;
var to_macro_specs = ((function (map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (specs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
return replace_refer_macros(remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$refer,null], null), null),remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$include_DASH_macros,null], null), null),x)));
} else {
return x;
}
});})(map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
var or__16482__auto__ = (function (){var and__16470__auto__ = cljs.core.sequential_QMARK_(x);
if(and__16470__auto__){
return cljs.core.some(sugar_keys,x);
} else {
return and__16470__auto__;
}
})();
if(or__16482__auto__){
return or__16482__auto__;
} else {
var or__16482__auto____$1 = reload_spec_QMARK_(x);
if(or__16482__auto____$1){
return or__16482__auto____$1;
} else {
return cljs.analyzer.macro_autoload_ns_QMARK_(x);
}
}
});})(map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,specs));
});})(map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
;
var remove_sugar = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_from_spec,sugar_keys);
var temp__4423__auto__ = cljs.core.seq(to_macro_specs(require));
if(temp__4423__auto__){
var require_specs = temp__4423__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (require_specs,temp__4423__auto__,map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
var vec__27682 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27682,(1),null);
return cljs.core.cons(k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(remove_sugar,v));
} else {
return x;
}
});})(require_specs,temp__4423__auto__,map__27677,map__27677__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar))
,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$require_DASH_macros], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
} else {
return args;
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(xs))),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(xs))], null);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
var seq__27691 = cljs.core.seq(to_check);
var chunk__27692 = null;
var count__27693 = (0);
var i__27694 = (0);
while(true){
if((i__27694 < count__27693)){
var vec__27695 = chunk__27692.cljs$core$IIndexed$_nth$arity$2(null,i__27694);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27695,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27695,(1),null);
if(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.constant$keyword$defs,name], null))){
cljs.analyzer.warning(cljs.core.constant$keyword$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ns,ns,cljs.core.constant$keyword$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__27697 = seq__27691;
var G__27698 = chunk__27692;
var G__27699 = count__27693;
var G__27700 = (i__27694 + (1));
seq__27691 = G__27697;
chunk__27692 = G__27698;
count__27693 = G__27699;
i__27694 = G__27700;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__27691);
if(temp__4425__auto__){
var seq__27691__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27691__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__27691__$1);
var G__27701 = cljs.core.chunk_rest(seq__27691__$1);
var G__27702 = c__17266__auto__;
var G__27703 = cljs.core.count(c__17266__auto__);
var G__27704 = (0);
seq__27691 = G__27701;
chunk__27692 = G__27702;
count__27693 = G__27703;
i__27694 = G__27704;
continue;
} else {
var vec__27696 = cljs.core.first(seq__27691__$1);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27696,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27696,(1),null);
if(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,clash_ns,cljs.core.constant$keyword$defs,name], null))){
cljs.analyzer.warning(cljs.core.constant$keyword$ns_DASH_var_DASH_clash,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ns,ns,cljs.core.constant$keyword$var,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__27705 = cljs.core.next(seq__27691__$1);
var G__27706 = null;
var G__27707 = (0);
var G__27708 = (0);
seq__27691 = G__27705;
chunk__27692 = G__27706;
count__27693 = G__27707;
i__27694 = G__27708;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.macro_ns_name = (function cljs$analyzer$macro_ns_name(name){
var name_str = [cljs.core.str(name)].join('');
if(cljs.core.not(goog.string.endsWith(name_str,"$macros"))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name_str),cljs.core.str("$macros")].join(''));
} else {
return name;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(function (_,env,p__27711,___$1,opts){
var vec__27712 = p__27711;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27712,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27712,(1),null);
var args = cljs.core.nthnext(vec__27712,(2));
var form = vec__27712;
if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Namespaces must be named by a symbol.");
}

var name__$1 = (function (){var G__27713 = name;
var G__27713__$1 = ((cljs.core.constant$keyword$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?cljs.analyzer.macro_ns_name(G__27713):G__27713);
return G__27713__$1;
})();
var segments_27726 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name__$1),/\./);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(segments_27726))){
cljs.analyzer.warning(cljs.core.constant$keyword$single_DASH_segment_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,name__$1], null));
} else {
}

if(cljs.core.some(cljs.analyzer.js_reserved,segments_27726)){
cljs.analyzer.warning(cljs.core.constant$keyword$munged_DASH_namespace,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,name__$1], null));
} else {
}

cljs.analyzer.find_def_clash(env,name__$1,segments_27726);

var docstring = ((typeof cljs.core.first(args) === 'string')?cljs.core.first(args):null);
var mdocstr = cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name__$1));
var args__$1 = ((docstring)?cljs.core.next(args):args);
var metadata = ((cljs.core.map_QMARK_(cljs.core.first(args__$1)))?cljs.core.first(args__$1):null);
var form_meta = cljs.core.meta(form);
var args__$2 = cljs.analyzer.desugar_ns_specs(((metadata)?cljs.core.next(args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(name__$1,cljs.core.merge,metadata);
var excludes = cljs.analyzer.parse_ns_excludes(env,args__$2);
var deps = (function (){var G__27715 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27715) : cljs.core.atom.call(null,G__27715));
})();
var aliases = (function (){var G__27716 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$fns,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$macros,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27716) : cljs.core.atom.call(null,G__27716));
})();
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$require,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.constant$keyword$require_DASH_macros,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.constant$keyword$use,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.constant$keyword$use_DASH_macros,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),cljs.core.constant$keyword$import,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = (function (){var G__27717 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$use_DASH_macros,null,cljs.core.constant$keyword$use,null,cljs.core.constant$keyword$require,null,cljs.core.constant$keyword$require_DASH_macros,null,cljs.core.constant$keyword$import,null], null), null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27717) : cljs.core.atom.call(null,G__27717));
})();
var reload = (function (){var G__27718 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$use,null,cljs.core.constant$keyword$require,null,cljs.core.constant$keyword$use_DASH_macros,null,cljs.core.constant$keyword$require_DASH_macros,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27718) : cljs.core.atom.call(null,G__27718));
})();
var reloads = (function (){var G__27719 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27719) : cljs.core.atom.call(null,G__27719));
})();
var map__27714 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__27712,___$2,name,args,form){
return (function (m,p__27720){
var vec__27721 = p__27720;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27721,(0),null);
var libs = cljs.core.nthnext(vec__27721,(1));
if(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$use_DASH_macros,null,cljs.core.constant$keyword$use,null,cljs.core.constant$keyword$require,null,cljs.core.constant$keyword$require_DASH_macros,null,cljs.core.constant$keyword$import,null], null), null).call(null,k)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only :refer-clojure, :require, :require-macros, :use, :use-macros, and :import libspecs supported");
}

if((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(valid_forms) : cljs.core.deref.call(null,valid_forms)).call(null,k)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str("Only one "),cljs.core.str(k),cljs.core.str(" form is allowed per namespace definition")].join(''));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(valid_forms,cljs.core.disj,k);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$import,k)){
} else {
if(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$reload,null], null), null),libs)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.constant$keyword$reload);
} else {
}

if(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$reload_DASH_all,null], null), null),libs)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,cljs.core.constant$keyword$reload_DASH_all);
} else {
}
}

var temp__4425__auto___27727 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__27721,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__27712,___$2,name,args,form){
return (function (p1__27709_SHARP_){
return cljs.core.constant$keyword$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__27709_SHARP_));
});})(vec__27721,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__27712,___$2,name,args,form))
,libs));
if(temp__4425__auto___27727){
var xs_27728 = temp__4425__auto___27727;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reloads,cljs.core.assoc,k,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,xs_27728),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xs_27728,temp__4425__auto___27727,vec__27721,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__27712,___$2,name,args,form){
return (function (p1__27710_SHARP_){
return cljs.core.constant$keyword$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__27710_SHARP_));
});})(xs_27728,temp__4425__auto___27727,vec__27721,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__27712,___$2,name,args,form))
,xs_27728)));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((spec_parsers.cljs$core$IFn$_invoke$arity$1 ? spec_parsers.cljs$core$IFn$_invoke$arity$1(k) : spec_parsers.call(null,k)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$reload,null,cljs.core.constant$keyword$reload_DASH_all,null], null), null),libs)));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__27712,___$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__27712,___$2,name,args,form){
return (function (p__27722){
var vec__27723 = p__27722;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27723,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.constant$keyword$refer_DASH_clojure);
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__27712,___$2,name,args,form))
,args__$2));
var map__27714__$1 = ((((!((map__27714 == null)))?((((map__27714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27714):map__27714);
var params = map__27714__$1;
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27714__$1,cljs.core.constant$keyword$use);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27714__$1,cljs.core.constant$keyword$require);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27714__$1,cljs.core.constant$keyword$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27714__$1,cljs.core.constant$keyword$require_DASH_macros);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27714__$1,cljs.core.constant$keyword$import);
cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2;

var ns_info = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$name,name__$2,cljs.core.constant$keyword$doc,(function (){var or__16482__auto__ = docstring;
if(or__16482__auto__){
return or__16482__auto__;
} else {
return mdocstr;
}
})(),cljs.core.constant$keyword$excludes,excludes,cljs.core.constant$keyword$use_DASH_macros,use_macros,cljs.core.constant$keyword$require_DASH_macros,require_macros,cljs.core.constant$keyword$uses,uses,cljs.core.constant$keyword$requires,requires,cljs.core.constant$keyword$imports,imports], null);
var ns_info__$1 = ((cljs.core.constant$keyword$merge.cljs$core$IFn$_invoke$arity$1(form_meta))?(function (){var ns_info_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,name__$2], null));
if((cljs.core.count(ns_info_SINGLEQUOTE_) > (0))){
var merge_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$use_DASH_macros,cljs.core.constant$keyword$require_DASH_macros,cljs.core.constant$keyword$uses,cljs.core.constant$keyword$requires,cljs.core.constant$keyword$imports], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ns_info_SINGLEQUOTE_,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([cljs.core.select_keys(ns_info_SINGLEQUOTE_,merge_keys),cljs.core.select_keys(ns_info,merge_keys)], 0))], 0));
} else {
return ns_info;
}
})():ns_info);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,name__$2], null),cljs.core.merge,cljs.core.array_seq([ns_info__$1], 0));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$deps,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deps) : cljs.core.deref.call(null,deps)),cljs.core.constant$keyword$reload,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)),cljs.core.constant$keyword$reloads,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reloads) : cljs.core.deref.call(null,reloads))], null),(function (){var G__27725 = ns_info__$1;
var G__27725__$1 = (((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.constant$keyword$use))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__27725,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$uses], null),((function (G__27725,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__27714,map__27714__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__27712,___$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,new cljs.core.PersistentArrayMap.fromArray([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.constant$keyword$use),true], true, false));
});})(G__27725,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__27714,map__27714__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__27712,___$2,name,args,form))
):G__27725);
var G__27725__$2 = (((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.constant$keyword$require))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__27725__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$requires], null),((function (G__27725,G__27725__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__27714,map__27714__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__27712,___$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,new cljs.core.PersistentArrayMap.fromArray([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,cljs.core.constant$keyword$require),true], true, false));
});})(G__27725,G__27725__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__27714,map__27714__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__27712,___$2,name,args,form))
):G__27725__$1);
return G__27725__$2;
})()], 0));
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__27729){
var vec__27733 = p__27729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733,(0),null);
var tsym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733,(1),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733,(2),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733,(3),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733,(4),null);
var form = vec__27733;
var t = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.constant$keyword$locals),tsym));
var locals = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (t,vec__27733,_,tsym,fields,pmasks,body,form){
return (function (m,fld){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,fld,cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$name,cljs.core.constant$keyword$field,cljs.core.constant$keyword$column,cljs.core.constant$keyword$unsynchronized_DASH_mutable,cljs.core.constant$keyword$line,cljs.core.constant$keyword$tag,cljs.core.constant$keyword$mutable,cljs.core.constant$keyword$volatile_DASH_mutable,cljs.core.constant$keyword$shadow],[fld,true,cljs.analyzer.get_col(fld,env),cljs.core.constant$keyword$unsynchronized_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.analyzer.get_line(fld,env),cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.core.constant$keyword$mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.core.constant$keyword$volatile_DASH_mutable.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(fld) : m.call(null,fld))]));
});})(t,vec__27733,_,tsym,fields,pmasks,body,form))
,cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$defrecord_STAR_,op))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$mutable,true], null))], null)):fields));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(env)),cljs.core.constant$keyword$defs,tsym], null),((function (t,locals,vec__27733,_,tsym,fields,pmasks,body,form){
return (function (m){
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__16482__auto__ = m;
if(or__16482__auto__){
return or__16482__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.constant$keyword$name,t,cljs.core.array_seq([cljs.core.constant$keyword$type,true,cljs.core.constant$keyword$num_DASH_fields,cljs.core.count(fields),cljs.core.constant$keyword$record,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$defrecord_STAR_,op)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tsym),cljs.core.constant$keyword$protocols),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$protocols,cljs.core.constant$keyword$protocols.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym))], null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(tsym,env)], 0));
});})(t,locals,vec__27733,_,tsym,fields,pmasks,body,form))
);

return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$op,op,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$t,t,cljs.core.constant$keyword$fields,fields,cljs.core.constant$keyword$pmasks,pmasks,cljs.core.constant$keyword$body,(function (){var G__27734 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$locals,locals);
var G__27735 = body;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27734,G__27735) : cljs.analyzer.analyze.call(null,G__27734,G__27735));
})()], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(cljs.core.constant$keyword$deftype_STAR_,env,form);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(cljs.core.constant$keyword$defrecord_STAR_,env,form);
}));
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__27736_SHARP_){
return cljs.core.boolean$((function (){var and__16470__auto__ = (p1__27736_SHARP_ instanceof cljs.core.Symbol);
if(and__16470__auto__){
return cljs.core.re_matches(/^-.*/,cljs.core.name(p1__27736_SHARP_));
} else {
return and__16470__auto__;
}
})());
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__27737){
var vec__27739 = p__27737;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,(0),null);
var member = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?cljs.core.constant$keyword$cljs$analyzer_SLASH_error:cljs.core.constant$keyword$cljs$analyzer_SLASH_expr
),((cljs.analyzer.property_symbol_QMARK_(member))?cljs.core.constant$keyword$cljs$analyzer_SLASH_property:(((member instanceof cljs.core.Symbol))?cljs.core.constant$keyword$cljs$analyzer_SLASH_symbol:((cljs.core.seq_QMARK_(member))?cljs.core.constant$keyword$cljs$analyzer_SLASH_list:cljs.core.constant$keyword$cljs$analyzer_SLASH_error
))),(((args == null))?cljs.core.List.EMPTY:cljs.core.constant$keyword$cljs$analyzer_SLASH_expr
)], null);
});
if(typeof cljs.analyzer.build_dot_form !== 'undefined'){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__17376__auto__ = (function (){var G__27741 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27741) : cljs.core.atom.call(null,G__27741));
})();
var prefer_table__17377__auto__ = (function (){var G__27742 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27742) : cljs.core.atom.call(null,G__27742));
})();
var method_cache__17378__auto__ = (function (){var G__27743 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27743) : cljs.core.atom.call(null,G__27743));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__27744 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27744) : cljs.core.atom.call(null,G__27744));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","build-dot-form"),((function (method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__){
return (function (p1__27740_SHARP_){
return cljs.analyzer.classify_dot_form(p1__27740_SHARP_);
});})(method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__))
,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_expr,cljs.core.constant$keyword$cljs$analyzer_SLASH_property,cljs.core.List.EMPTY], null),(function (p__27745){
var vec__27746 = p__27745;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27746,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27746,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27746,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$dot_DASH_action,cljs.core.constant$keyword$cljs$analyzer_SLASH_access,cljs.core.constant$keyword$target,target,cljs.core.constant$keyword$field,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prop).substring((1)))], null);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_expr,cljs.core.constant$keyword$cljs$analyzer_SLASH_property,cljs.core.constant$keyword$cljs$analyzer_SLASH_list], null),(function (p__27747){
var vec__27748 = p__27747;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748,(2),null);
throw (new Error([cljs.core.str("Cannot provide arguments "),cljs.core.str(args),cljs.core.str(" on property access "),cljs.core.str(prop)].join('')));
}));
/**
 * Builds the intermediate method call map used to reason about the parsed form during
 * compilation.
 */
cljs.analyzer.build_method_call = (function cljs$analyzer$build_method_call(target,meth,args){
if((meth instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$dot_DASH_action,cljs.core.constant$keyword$cljs$analyzer_SLASH_call,cljs.core.constant$keyword$target,target,cljs.core.constant$keyword$method,meth,cljs.core.constant$keyword$args,args], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$dot_DASH_action,cljs.core.constant$keyword$cljs$analyzer_SLASH_call,cljs.core.constant$keyword$target,target,cljs.core.constant$keyword$method,cljs.core.first(meth),cljs.core.constant$keyword$args,args], null);
}
});
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_expr,cljs.core.constant$keyword$cljs$analyzer_SLASH_symbol,cljs.core.constant$keyword$cljs$analyzer_SLASH_expr], null),(function (p__27749){
var vec__27750 = p__27749;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27750,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27750,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27750,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_expr,cljs.core.constant$keyword$cljs$analyzer_SLASH_symbol,cljs.core.List.EMPTY], null),(function (p__27751){
var vec__27752 = p__27751;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27752,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27752,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27752,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$cljs$analyzer_SLASH_expr,cljs.core.constant$keyword$cljs$analyzer_SLASH_list,cljs.core.List.EMPTY], null),(function (p__27753){
var vec__27754 = p__27753;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27754,(0),null);
var meth_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27754,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27754,(2),null);
return cljs.analyzer.build_method_call(target,cljs.core.first(meth_expr),cljs.core.rest(meth_expr));
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$default,(function (dot_form){
throw (new Error([cljs.core.str("Unknown dot form of "),cljs.core.str(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),dot_form)),cljs.core.str(" with classification "),cljs.core.str(cljs.analyzer.classify_dot_form(dot_form))].join('')));
}));
cljs.analyzer.analyze_dot = (function cljs$analyzer$analyze_dot(env,target,field,member_PLUS_,form){
var v = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
var map__27759 = (cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1(v) : cljs.analyzer.build_dot_form.call(null,v));
var map__27759__$1 = ((((!((map__27759 == null)))?((((map__27759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27759):map__27759);
var dot_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27759__$1,cljs.core.constant$keyword$dot_DASH_action);
var target__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27759__$1,cljs.core.constant$keyword$target);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27759__$1,cljs.core.constant$keyword$method);
var field__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27759__$1,cljs.core.constant$keyword$field);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27759__$1,cljs.core.constant$keyword$args);
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var targetexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze.call(null,enve,target__$1));
var form_meta = cljs.core.meta(form);
var tag = cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(form_meta);
var G__27761 = (((dot_action instanceof cljs.core.Keyword))?dot_action.fqn:null);
switch (G__27761) {
case "cljs.analyzer/access":
var children = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$dot,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$target,targetexpr,cljs.core.constant$keyword$field,field__$1,cljs.core.constant$keyword$children,children,cljs.core.constant$keyword$tag,tag], null);

break;
case "cljs.analyzer/call":
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__27761,v,map__27759,map__27759__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,tag){
return (function (p1__27755_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__27755_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__27755_SHARP_));
});})(G__27761,v,map__27759,map__27759__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,form_meta,tag))
,args);
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null),argexprs);
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$dot,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$target,targetexpr,cljs.core.constant$keyword$method,method,cljs.core.constant$keyword$args,argexprs,cljs.core.constant$keyword$children,children,cljs.core.constant$keyword$tag,tag], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dot_action)].join('')));

}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,".",".",1975675962,null),(function (_,env,p__27763,___$1,___$2){
var vec__27764 = p__27763;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27764,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27764,(1),null);
var vec__27765 = cljs.core.nthnext(vec__27764,(2));
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27765,(0),null);
var member_PLUS_ = cljs.core.nthnext(vec__27765,(1));
var form = vec__27764;
var _STAR_recur_frames_STAR_27766 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_dot(env,target,field,member_PLUS_,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27766;
}}));
cljs.analyzer.get_js_tag = (function cljs$analyzer$get_js_tag(form){
var form_meta = cljs.core.meta(form);
var tag = cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(form_meta);
if(!((tag == null))){
return tag;
} else {
if(cljs.core.constant$keyword$numeric.cljs$core$IFn$_invoke$arity$1(form_meta) === true){
return new cljs.core.Symbol(null,"number","number",-1084057331,null);
} else {
return null;
}
}
});
cljs.analyzer.js_star_interp = (function cljs$analyzer$js_star_interp(env,s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return cljs.core._conj(cljs.core.List.EMPTY,s);
} else {
var end = s.indexOf("}",idx);
var inner = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,((2) + idx),end))));
return (new cljs.core.LazySeq(null,((function (end,inner,idx){
return (function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),cljs.core.cons(inner,cljs$analyzer$js_star_interp(env,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1))))));
});})(end,inner,idx))
,null,null));
}
});
cljs.analyzer.js_star_seg = (function cljs$analyzer$js_star_seg(s){
var idx = s.indexOf("~{");
if(((-1) === idx)){
return cljs.core._conj(cljs.core.List.EMPTY,s);
} else {
var end = s.indexOf("}",idx);
return (new cljs.core.LazySeq(null,((function (end,idx){
return (function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),cljs$analyzer$js_star_seg(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1)))));
});})(end,idx))
,null,null));
}
});
cljs.analyzer.NUMERIC_SET = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"long","long",1469079434,null),null,new cljs.core.Symbol(null,"double","double",-1769548886,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null);
cljs.analyzer.numeric_type_QMARK_ = (function cljs$analyzer$numeric_type_QMARK_(t){
if((t == null)){
return true;
} else {
if(((t instanceof cljs.core.Symbol)) && (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NUMERIC_SET,t) == null)))){
return true;
} else {
if(cljs.analyzer.cljs_set_QMARK_(t)){
return (cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"number","number",-1084057331,null))) || (cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"long","long",1469079434,null))) || (cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"double","double",-1769548886,null))) || (cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"any","any",-948528346,null)));
} else {
return null;
}
}
}
});
cljs.analyzer.analyze_js_star_STAR_ = (function cljs$analyzer$analyze_js_star_STAR_(env,jsform,args,form){
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var argexprs = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve){
return (function (p1__27770_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__27770_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__27770_SHARP_));
});})(enve))
,args));
var form_meta = cljs.core.meta(form);
var segs = cljs.analyzer.js_star_seg(jsform);
var tag = cljs.analyzer.get_js_tag(form);
var js_op = cljs.core.constant$keyword$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = cljs.core.constant$keyword$numeric.cljs$core$IFn$_invoke$arity$1(form_meta);
if(numeric === true){
var types_27772 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve,argexprs,form_meta,segs,tag,js_op,numeric){
return (function (p1__27771_SHARP_){
return cljs.analyzer.infer_tag(env,p1__27771_SHARP_);
});})(enve,argexprs,form_meta,segs,tag,js_op,numeric))
,argexprs);
if(cljs.core.every_QMARK_(cljs.analyzer.numeric_type_QMARK_,types_27772)){
} else {
cljs.analyzer.warning(cljs.core.constant$keyword$invalid_DASH_arithmetic,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$js_DASH_op,js_op,cljs.core.constant$keyword$types,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,types_27772)], null));
}
} else {
}

return cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$args,cljs.core.constant$keyword$children,cljs.core.constant$keyword$numeric,cljs.core.constant$keyword$segs,cljs.core.constant$keyword$op,cljs.core.constant$keyword$env,cljs.core.constant$keyword$js_DASH_op,cljs.core.constant$keyword$form,cljs.core.constant$keyword$tag],[argexprs,argexprs,numeric,segs,cljs.core.constant$keyword$js,env,js_op,form,tag]);
});
cljs.analyzer.analyze_js_star = (function cljs$analyzer$analyze_js_star(env,jsform,args,form){
var _STAR_recur_frames_STAR_27774 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.analyze_js_star_STAR_(env,jsform,args,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27774;
}});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(function (op,env,p__27775,_,___$1){
var vec__27776 = p__27775;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27776,(0),null);
var jsform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27776,(1),null);
var args = cljs.core.nthnext(vec__27776,(2));
var form = vec__27776;
if(typeof jsform === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid js* form");
}

if(!((args == null))){
return cljs.analyzer.analyze_js_star(env,jsform,args,form);
} else {
var code = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.analyzer.js_star_interp(env,jsform));
var tag = cljs.analyzer.get_js_tag(form);
var form_meta = cljs.core.meta(form);
var js_op = cljs.core.constant$keyword$js_DASH_op.cljs$core$IFn$_invoke$arity$1(form_meta);
var numeric = cljs.core.constant$keyword$numeric.cljs$core$IFn$_invoke$arity$1(form_meta);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$js,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$code,code,cljs.core.constant$keyword$tag,tag,cljs.core.constant$keyword$js_DASH_op,js_op,cljs.core.constant$keyword$numeric,numeric], null);
}
}));
cljs.analyzer.analyzed_QMARK_ = (function cljs$analyzer$analyzed_QMARK_(f){
return cljs.core.contains_QMARK_(cljs.core.meta(f),cljs.core.constant$keyword$cljs$analyzer_SLASH_analyzed);
});
cljs.analyzer.all_values_QMARK_ = (function cljs$analyzer$all_values_QMARK_(exprs){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$constant,null,cljs.core.constant$keyword$var,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$op,exprs));
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([argc], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,method_params)));
});
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__27778){
var vec__27784 = p__27778;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27784,(0),null);
var args = cljs.core.nthnext(vec__27784,(1));
var form = vec__27784;
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var fexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,f) : cljs.analyzer.analyze.call(null,enve,f));
var argc = cljs.core.count(args);
var fn_var_QMARK_ = cljs.core.constant$keyword$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(fexpr));
var kw_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(fexpr));
if(fn_var_QMARK_){
var map__27785_27789 = cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(fexpr);
var map__27785_27790__$1 = ((((!((map__27785_27789 == null)))?((((map__27785_27789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27785_27789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27785_27789):map__27785_27789);
var variadic_27791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27785_27790__$1,cljs.core.constant$keyword$variadic);
var max_fixed_arity_27792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27785_27790__$1,cljs.core.constant$keyword$max_DASH_fixed_DASH_arity);
var method_params_27793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27785_27790__$1,cljs.core.constant$keyword$method_DASH_params);
var name_27794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27785_27790__$1,cljs.core.constant$keyword$name);
if((!(cljs.analyzer.valid_arity_QMARK_(argc,method_params_27793))) && ((!(variadic_27791)) || ((variadic_27791) && ((argc < max_fixed_arity_27792))))){
cljs.analyzer.warning(cljs.core.constant$keyword$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,name_27794,cljs.core.constant$keyword$argc,argc], null));
} else {
}
} else {
}

if((kw_QMARK_) && (!((((1) === argc)) || (((2) === argc))))){
cljs.analyzer.warning(cljs.core.constant$keyword$fn_DASH_arity,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,cljs.core.first(form),cljs.core.constant$keyword$argc,argc], null));
} else {
}

var deprecated_QMARK__27795 = cljs.core.constant$keyword$deprecated.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__27796 = cljs.core.constant$keyword$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if((cljs.core.boolean$(deprecated_QMARK__27795)) && (!(cljs.core.boolean$(no_warn_QMARK__27796)))){
cljs.analyzer.warning(cljs.core.constant$keyword$fn_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$fexpr,fexpr], null));
} else {
}

if((cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(fexpr)) == null)){
} else {
cljs.analyzer.warning(cljs.core.constant$keyword$invoke_DASH_ctor,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$fexpr,fexpr], null));
}

var ana_expr = ((function (enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,vec__27784,f,args,form){
return (function (p1__27777_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__27777_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__27777_SHARP_));
});})(enve,fexpr,argc,fn_var_QMARK_,kw_QMARK_,vec__27784,f,args,form))
;
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(ana_expr,args);
if((function (){var or__16482__auto__ = !(cljs.core.boolean$(cljs.analyzer._STAR_cljs_static_fns_STAR_));
if(or__16482__auto__){
return or__16482__auto__;
} else {
var or__16482__auto____$1 = !((f instanceof cljs.core.Symbol));
if(or__16482__auto____$1){
return or__16482__auto____$1;
} else {
var or__16482__auto____$2 = fn_var_QMARK_;
if(or__16482__auto____$2){
return or__16482__auto____$2;
} else {
return (cljs.analyzer.analyzed_QMARK_(f)) || (cljs.analyzer.all_values_QMARK_(argexprs));
}
}
}
})()){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$op,cljs.core.constant$keyword$invoke,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$f,fexpr,cljs.core.constant$keyword$args,cljs.core.vec(argexprs),cljs.core.constant$keyword$children,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr], null),argexprs)], null);
} else {
var arg_syms = cljs.core.take.cljs$core$IFn$_invoke$arity$2(argc,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var G__27787 = env;
var G__27788 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(arg_syms,args))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.constant$keyword$cljs$analyzer_SLASH_analyzed,true)),arg_syms))))], 0))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__27787,G__27788) : cljs.analyzer.analyze.call(null,G__27787,G__27788));
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
var _STAR_recur_frames_STAR_27798 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.parse_invoke_STAR_(env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27798;
}});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(cljs.core.constant$keyword$quoted_QMARK_.cljs$core$IFn$_invoke$arity$1(env)){
var G__27802 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$constant,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,sym,cljs.core.constant$keyword$tag,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__27802) : cljs.analyzer.analyze_wrap_meta.call(null,G__27802));
} else {
var map__27803 = cljs.core.meta(sym);
var map__27803__$1 = ((((!((map__27803 == null)))?((((map__27803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27803):map__27803);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27803__$1,cljs.core.constant$keyword$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27803__$1,cljs.core.constant$keyword$column);
var env__$1 = ((!((line == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$line,line):env);
var env__$2 = ((!((column == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.constant$keyword$column,column):env__$1);
var ret = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$env,env__$2,cljs.core.constant$keyword$form,sym], null);
var lcls = cljs.core.constant$keyword$locals.cljs$core$IFn$_invoke$arity$1(env__$2);
var lb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lcls,sym);
if(!((lb == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.constant$keyword$op,cljs.core.constant$keyword$var,cljs.core.array_seq([cljs.core.constant$keyword$info,lb], 0));
} else {
if(!(cljs.core.constant$keyword$def_DASH_var.cljs$core$IFn$_invoke$arity$1(env__$2) === true)){
var sym_meta = cljs.core.meta(sym);
var info = ((!(cljs.core.contains_QMARK_(sym_meta,cljs.core.constant$keyword$cljs$analyzer_SLASH_analyzed)))?cljs.analyzer.resolve_existing_var(env__$2,sym):cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$2,sym));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.constant$keyword$op,cljs.core.constant$keyword$var,cljs.core.array_seq([cljs.core.constant$keyword$info,info], 0));
} else {
var info = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$2,sym);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.constant$keyword$op,cljs.core.constant$keyword$var,cljs.core.array_seq([cljs.core.constant$keyword$info,info], 0));
}
}
}
});
cljs.analyzer.excluded_QMARK_ = (function cljs$analyzer$excluded_QMARK_(env,sym){
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$excludes,sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name),cljs.core.constant$keyword$excludes,sym) == null));
}
});
cljs.analyzer.used_QMARK_ = (function cljs$analyzer$used_QMARK_(env,sym){
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$use_DASH_macros,sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces,cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name),cljs.core.constant$keyword$use_DASH_macros,sym) == null));
}
});
cljs.analyzer.get_expander_ns = (function cljs$analyzer$get_expander_ns(env,nstr){
if(("clojure.core" === nstr)){
return cljs.core.find_macros_ns(cljs.analyzer.CLJS_CORE_MACROS_SYM);
} else {
if(("clojure.repl" === nstr)){
return cljs.core.find_macros_ns(new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null));
} else {
if(goog.string.contains(nstr,".")){
return cljs.core.find_macros_ns(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr));
} else {
var G__27806 = env;
var G__27806__$1 = (((G__27806 == null))?null:cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(G__27806));
var G__27806__$2 = (((G__27806__$1 == null))?null:cljs.core.constant$keyword$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(G__27806__$1));
var G__27806__$3 = (((G__27806__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__27806__$2,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr)));
var G__27806__$4 = (((G__27806__$3 == null))?null:cljs.core.find_ns(G__27806__$3));
return G__27806__$4;

}
}
}
});
cljs.analyzer.get_expander_STAR_ = (function cljs$analyzer$get_expander_STAR_(sym,env){
if((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$locals,sym) == null))) || ((cljs.analyzer.excluded_QMARK_(env,sym)) && (!(cljs.analyzer.used_QMARK_(env,sym))))){
return null;
} else {
var nstr = cljs.core.namespace(sym);
if(!((nstr == null))){
var ns = cljs.analyzer.get_expander_ns(env,nstr);
if((ns == null)){
return null;
} else {
return ns.findInternedVar(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
}
} else {
var nsym = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$use_DASH_macros,sym);
if(!((nsym == null))){
return cljs.core.find_macros_ns(nsym).findInternedVar(sym);
} else {
return cljs.core.find_macros_ns(cljs.analyzer.CLJS_CORE_MACROS_SYM).findInternedVar(sym);
}
}
}
});
/**
 * Given a sym, a symbol identifying a macro, and env, an analysis environment
 * return the corresponding Clojure macroexpander.
 */
cljs.analyzer.get_expander = (function cljs$analyzer$get_expander(sym,env){
var mvar = cljs.analyzer.get_expander_STAR_(sym,env);
if((!((mvar == null))) && (mvar.isMacro())){
return mvar;
} else {
return null;
}
});
cljs.analyzer.macroexpand_1_STAR_ = (function cljs$analyzer$macroexpand_1_STAR_(env,form){
var op = cljs.core.first(form);
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.specials,op) == null))){
return form;
} else {
var mac_var = (((op instanceof cljs.core.Symbol))?cljs.analyzer.get_expander(op,env):null);
if(!((mac_var == null))){
var form_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mac_var) : cljs.core.deref.call(null,mac_var)),form,env,cljs.core.rest(form));
if(cljs.analyzer.cljs_seq_QMARK_(form_SINGLEQUOTE_)){
var sym_SINGLEQUOTE_ = cljs.core.first(form_SINGLEQUOTE_);
var sym = cljs.core.first(form);
if(cljs.core.symbol_identical_QMARK_(sym_SINGLEQUOTE_,cljs.analyzer.JS_STAR_SYM)){
var sym__$1 = ((cljs.core.namespace(sym))?sym:cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str(sym)].join('')));
var js_op = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$js_DASH_op,sym__$1], null);
var js_op__$1 = ((cljs.core.constant$keyword$cljs$analyzer_SLASH_numeric.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mac_var)) === true)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(js_op,cljs.core.constant$keyword$numeric,true):js_op);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(form_SINGLEQUOTE_,cljs.core.merge,js_op__$1);
} else {
return form_SINGLEQUOTE_;
}
} else {
return form_SINGLEQUOTE_;
}
} else {
if((op instanceof cljs.core.Symbol)){
var opname = [cljs.core.str(op)].join('');
if(("." === opname.charAt((0)))){
var vec__27808 = cljs.core.next(form);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27808,(0),null);
var args = cljs.core.nthnext(vec__27808,(1));
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.analyzer.DOT_SYM,target,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(opname,(1))),args),cljs.core.meta(form));
} else {
if(("." === opname.charAt((opname.length - (1))))){
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.NEW_SYM,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(opname,(0),(cljs.core.count(opname) - (1)))),cljs.core.next(form)),cljs.core.meta(form));
} else {
return form;

}
}
} else {
return form;
}
}
}
});
/**
 * Given a env, an analysis environment, and form, a ClojureScript form,
 * macroexpand the form once.
 */
cljs.analyzer.macroexpand_1 = (function cljs$analyzer$macroexpand_1(env,form){
var val__17903__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__17903__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{return cljs.analyzer.macroexpand_1_STAR_(env,form);
}catch (e27810){var err__17939__auto__ = e27810;
if(cljs.analyzer.analysis_error_QMARK_(err__17939__auto__)){
throw err__17939__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__17939__auto__.message,err__17939__auto__);
}
}}finally {if((val__17903__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.analyze_seq_STAR_ = (function cljs$analyzer$analyze_seq_STAR_(op,env,form,name,opts){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.specials,op) == null))){
return (cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5 ? cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5(op,env,form,name,opts) : cljs.analyzer.parse.call(null,op,env,form,name,opts));
} else {
return cljs.analyzer.parse_invoke(env,form);
}
});
cljs.analyzer.analyze_seq_STAR__wrap = (function cljs$analyzer$analyze_seq_STAR__wrap(op,env,form,name,opts){
try{return cljs.analyzer.analyze_seq_STAR_(op,env,form,name,opts);
}catch (e27812){var err__17939__auto__ = e27812;
if(cljs.analyzer.analysis_error_QMARK_(err__17939__auto__)){
throw err__17939__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__17939__auto__.message,err__17939__auto__);
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(){
var args27813 = [];
var len__17521__auto___27816 = arguments.length;
var i__17522__auto___27817 = (0);
while(true){
if((i__17522__auto___27817 < len__17521__auto___27816)){
args27813.push((arguments[i__17522__auto___27817]));

var G__27818 = (i__17522__auto___27817 + (1));
i__17522__auto___27817 = G__27818;
continue;
} else {
}
break;
}

var G__27815 = args27813.length;
switch (G__27815) {
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27813.length)].join('')));

}
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,null);
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
if(cljs.core.constant$keyword$quoted_QMARK_.cljs$core$IFn$_invoke$arity$1(env)){
return (cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze_list.call(null,env,form));
} else {
var line = cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var line__$1 = (((line == null))?cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(env):null);
var col = cljs.core.constant$keyword$column.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var col__$1 = (((col == null))?cljs.core.constant$keyword$column.cljs$core$IFn$_invoke$arity$1(env):null);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.constant$keyword$line,line__$1,cljs.core.array_seq([cljs.core.constant$keyword$column,col__$1], 0));
var op = cljs.core.first(form);
if((op == null)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,"Can't call nil");
} else {
}

var mform = cljs.analyzer.macroexpand_1(env__$1,form);
if((form === mform)){
return cljs.analyzer.analyze_seq_STAR__wrap(op,env__$1,form,name,opts);
} else {
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env__$1,mform,name,opts) : cljs.analyzer.analyze.call(null,env__$1,mform,name,opts));
}
}
});

cljs.analyzer.analyze_seq.cljs$lang$maxFixedArity = 4;
cljs.analyzer.analyze_map = (function cljs$analyzer$analyze_map(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var ks = (function (){var _STAR_recur_frames_STAR_27825 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_27825,expr_env){
return (function (p1__27820_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__27820_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__27820_SHARP_));
});})(_STAR_recur_frames_STAR_27825,expr_env))
,cljs.core.keys(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27825;
}})();
var vs = (function (){var _STAR_recur_frames_STAR_27826 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_27826,expr_env,ks){
return (function (p1__27821_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__27821_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__27821_SHARP_));
});})(_STAR_recur_frames_STAR_27826,expr_env,ks))
,cljs.core.vals(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27826;
}})();
var G__27827 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$map,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$keys,ks,cljs.core.constant$keyword$vals,vs,cljs.core.constant$keyword$children,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks,vs)),cljs.core.constant$keyword$tag,new cljs.core.Symbol("cljs.core","IMap","cljs.core/IMap",1407777598,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__27827) : cljs.analyzer.analyze_wrap_meta.call(null,G__27827));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var items = (function (){var _STAR_recur_frames_STAR_27831 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_27831,expr_env){
return (function (p1__27828_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__27828_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__27828_SHARP_));
});})(_STAR_recur_frames_STAR_27831,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27831;
}})();
var G__27832 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$list,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$items,items,cljs.core.constant$keyword$children,items,cljs.core.constant$keyword$tag,new cljs.core.Symbol("cljs.core","IList","cljs.core/IList",1015168964,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__27832) : cljs.analyzer.analyze_wrap_meta.call(null,G__27832));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var items = (function (){var _STAR_recur_frames_STAR_27836 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_27836,expr_env){
return (function (p1__27833_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__27833_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__27833_SHARP_));
});})(_STAR_recur_frames_STAR_27836,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27836;
}})();
var G__27837 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$vector,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$items,items,cljs.core.constant$keyword$children,items,cljs.core.constant$keyword$tag,new cljs.core.Symbol("cljs.core","IVector","cljs.core/IVector",1711112835,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__27837) : cljs.analyzer.analyze_wrap_meta.call(null,G__27837));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var items = (function (){var _STAR_recur_frames_STAR_27841 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_27841,expr_env){
return (function (p1__27838_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__27838_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__27838_SHARP_));
});})(_STAR_recur_frames_STAR_27841,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27841;
}})();
var G__27842 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$set,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$items,items,cljs.core.constant$keyword$children,items,cljs.core.constant$keyword$tag,new cljs.core.Symbol("cljs.core","ISet","cljs.core/ISet",2003412810,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__27842) : cljs.analyzer.analyze_wrap_meta.call(null,G__27842));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr);
var items = ((cljs.core.map_QMARK_(val))?cljs.core.zipmap(cljs.core.keys(val),(function (){var _STAR_recur_frames_STAR_27847 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_27847,val,expr_env){
return (function (p1__27843_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__27843_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__27843_SHARP_));
});})(_STAR_recur_frames_STAR_27847,val,expr_env))
,cljs.core.vals(val)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27847;
}})()):(function (){var _STAR_recur_frames_STAR_27848 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_27848,val,expr_env){
return (function (p1__27844_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__27844_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__27844_SHARP_));
});})(_STAR_recur_frames_STAR_27848,val,expr_env))
,val));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_27848;
}})());
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$js_DASH_value,cljs.core.constant$keyword$js_DASH_type,((cljs.core.map_QMARK_(val))?cljs.core.constant$keyword$object:cljs.core.constant$keyword$array),cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$items,items,cljs.core.constant$keyword$children,items,cljs.core.constant$keyword$tag,((cljs.core.map_QMARK_(val))?new cljs.core.Symbol(null,"object","object",-1179821820,null):new cljs.core.Symbol(null,"array","array",-440182315,null))], null);
});
cljs.analyzer.elide_reader_meta = (function cljs$analyzer$elide_reader_meta(m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.constant$keyword$file,cljs.core.array_seq([cljs.core.constant$keyword$line,cljs.core.constant$keyword$column,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$source], 0));
});
cljs.analyzer.analyze_wrap_meta = (function cljs$analyzer$analyze_wrap_meta(expr){
var form = cljs.core.constant$keyword$form.cljs$core$IFn$_invoke$arity$1(expr);
var m = cljs.analyzer.elide_reader_meta(cljs.core.meta(form));
if(cljs.core.seq(m)){
var env = cljs.core.constant$keyword$env.cljs$core$IFn$_invoke$arity$1(expr);
var expr__$1 = cljs.core.assoc_in(expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$env,cljs.core.constant$keyword$context], null),cljs.core.constant$keyword$expr);
var meta_expr = cljs.analyzer.analyze_map(cljs.core.constant$keyword$env.cljs$core$IFn$_invoke$arity$1(expr__$1),m);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$meta,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form,cljs.core.constant$keyword$meta,meta_expr,cljs.core.constant$keyword$expr,expr__$1,cljs.core.constant$keyword$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meta_expr,expr__$1], null)], null);
} else {
return expr;
}
});
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,ast,_){
var tag = cljs.core.constant$keyword$tag.cljs$core$IFn$_invoke$arity$1(ast);
if((tag == null)){
var tag__$1 = cljs.analyzer.infer_tag(env,ast);
if(!((tag__$1 == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.constant$keyword$tag,tag__$1);
} else {
return ast;
}
} else {
return ast;
}
});
cljs.analyzer._STAR_passes_STAR_ = null;
cljs.analyzer.analyze_form = (function cljs$analyzer$analyze_form(env,form,name,opts){
if((form instanceof cljs.core.Symbol)){
return cljs.analyzer.analyze_symbol(env,form);
} else {
if((cljs.analyzer.cljs_seq_QMARK_(form)) && (cljs.core.seq(form))){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,opts);
} else {
if(cljs.analyzer.cljs_map_QMARK_(form)){
return cljs.analyzer.analyze_map(env,form);
} else {
if(cljs.analyzer.cljs_vector_QMARK_(form)){
return cljs.analyzer.analyze_vector(env,form);
} else {
if(cljs.analyzer.cljs_set_QMARK_(form)){
return cljs.analyzer.analyze_set(env,form);
} else {
if((form instanceof cljs.core.Keyword)){
return cljs.analyzer.analyze_keyword(env,form);
} else {
if((form instanceof cljs.tagged_literals.JSValue)){
return cljs.analyzer.analyze_js_value(env,form);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,form)){
return cljs.analyzer.analyze_list(env,form);
} else {
var tag = (((form == null))?cljs.analyzer.CLJ_NIL_SYM:((typeof form === 'number')?cljs.analyzer.NUMBER_SYM:((typeof form === 'string')?cljs.analyzer.STRING_SYM:((form === true)?cljs.analyzer.BOOLEAN_SYM:((form === false)?cljs.analyzer.BOOLEAN_SYM:null)))));
var G__27850 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$constant,cljs.core.constant$keyword$env,env,cljs.core.constant$keyword$form,form], null);
var G__27850__$1 = ((tag)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27850,cljs.core.constant$keyword$tag,tag):G__27850);
return G__27850__$1;

}
}
}
}
}
}
}
}
});
cljs.analyzer.analyze_STAR_ = (function cljs$analyzer$analyze_STAR_(env,form,name,opts){
var passes = cljs.analyzer._STAR_passes_STAR_;
var passes__$1 = (((passes == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.infer_type], null):passes);
var form__$1 = (((form instanceof cljs.core.LazySeq))?((cljs.core.seq(form))?form:cljs.core.List.EMPTY):form);
var ast = cljs.analyzer.analyze_form(env,form__$1,name,opts);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (passes,passes__$1,form__$1,ast){
return (function (ast__$1,pass){
return (pass.cljs$core$IFn$_invoke$arity$3 ? pass.cljs$core$IFn$_invoke$arity$3(env,ast__$1,opts) : pass.call(null,env,ast__$1,opts));
});})(passes,passes__$1,form__$1,ast))
,ast,passes__$1);
});
/**
 * Given an environment, a map containing {:locals (mapping of names to bindings), :context
 * (one of :statement, :expr, :return), :ns (a symbol naming the
 * compilation ns)}, and form, returns an expression object (a map
 * containing at least :form, :op and :env keys). If expr has any (immediately)
 * nested exprs, must have :children [exprs...] entry. This will
 * facilitate code walking without knowing the details of the op set.
 */
cljs.analyzer.analyze = (function cljs$analyzer$analyze(){
var args27851 = [];
var len__17521__auto___27856 = arguments.length;
var i__17522__auto___27857 = (0);
while(true){
if((i__17522__auto___27857 < len__17521__auto___27856)){
args27851.push((arguments[i__17522__auto___27857]));

var G__27858 = (i__17522__auto___27857 + (1));
i__17522__auto___27857 = G__27858;
continue;
} else {
}
break;
}

var G__27853 = args27851.length;
switch (G__27853) {
case 2:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27851.length)].join('')));

}
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(env,form,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env,form,name,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
var val__17903__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__17903__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{var _STAR_alias_map_STAR_27855 = cljs.tools.reader._STAR_alias_map_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = (function (){var or__16482__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(or__16482__auto__){
return or__16482__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return cljs.analyzer.analyze_STAR_(env,form,name,opts);
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_27855;
}}catch (e27854){var err__17939__auto__ = e27854;
if(cljs.analyzer.analysis_error_QMARK_(err__17939__auto__)){
throw err__17939__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__17939__auto__.message,err__17939__auto__);
}
}}finally {if((val__17903__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});

cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4;
cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(s){
return cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$ns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,cljs.analyzer._STAR_cljs_ns_STAR_], null)], null),s));
});

//# sourceMappingURL=analyzer.js.map?rel=1440458057563