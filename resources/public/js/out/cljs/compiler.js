// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_dependents_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_first_ns_segment,cljs.core.keys(cljs.core.constant$keyword$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__28285 = s;
var map__28285__$1 = ((((!((map__28285 == null)))?((((map__28285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28285):map__28285);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28285__$1,cljs.core.constant$keyword$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28285__$1,cljs.core.constant$keyword$info);
var d = (0);
var G__28288 = info;
var map__28289 = G__28288;
var map__28289__$1 = ((((!((map__28289 == null)))?((((map__28289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28289):map__28289);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28289__$1,cljs.core.constant$keyword$shadow);
var d__$1 = d;
var G__28288__$1 = G__28288;
while(true){
var d__$2 = d__$1;
var map__28291 = G__28288__$1;
var map__28291__$1 = ((((!((map__28291 == null)))?((((map__28291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28291):map__28291);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28291__$1,cljs.core.constant$keyword$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__28293 = (d__$2 + (1));
var G__28294 = shadow__$1;
d__$1 = G__28293;
G__28288__$1 = G__28294;
continue;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments()))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__28295){
var map__28301 = p__28295;
var map__28301__$1 = ((((!((map__28301 == null)))?((((map__28301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28301):map__28301);
var name_var = map__28301__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28301__$1,cljs.core.constant$keyword$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28301__$1,cljs.core.constant$keyword$info);
var name__$1 = clojure.string.replace([cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__28303 = info;
var map__28303__$1 = ((((!((map__28303 == null)))?((((map__28303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28303):map__28303);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28303__$1,cljs.core.constant$keyword$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28303__$1,cljs.core.constant$keyword$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.constant$keyword$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__28305 = [cljs.core.str(clojure.string.replace([cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__28305) : cljs.compiler.munge.call(null,G__28305));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(){
var args28306 = [];
var len__17521__auto___28309 = arguments.length;
var i__17522__auto___28310 = (0);
while(true){
if((i__17522__auto___28310 < len__17521__auto___28309)){
args28306.push((arguments[i__17522__auto___28310]));

var G__28311 = (i__17522__auto___28310 + (1));
i__17522__auto___28310 = G__28311;
continue;
} else {
}
break;
}

var G__28308 = args28306.length;
switch (G__28308) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28306.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.constant$keyword$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(name_var);
if(!((cljs.core.constant$keyword$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.core._hash(name);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__28314 = cp;
switch (G__28314) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__28320_28324 = cljs.core.seq(s);
var chunk__28321_28325 = null;
var count__28322_28326 = (0);
var i__28323_28327 = (0);
while(true){
if((i__28323_28327 < count__28322_28326)){
var c_28328 = chunk__28321_28325.cljs$core$IIndexed$_nth$arity$2(null,i__28323_28327);
sb.append(cljs.compiler.escape_char(c_28328));

var G__28329 = seq__28320_28324;
var G__28330 = chunk__28321_28325;
var G__28331 = count__28322_28326;
var G__28332 = (i__28323_28327 + (1));
seq__28320_28324 = G__28329;
chunk__28321_28325 = G__28330;
count__28322_28326 = G__28331;
i__28323_28327 = G__28332;
continue;
} else {
var temp__4425__auto___28333 = cljs.core.seq(seq__28320_28324);
if(temp__4425__auto___28333){
var seq__28320_28334__$1 = temp__4425__auto___28333;
if(cljs.core.chunked_seq_QMARK_(seq__28320_28334__$1)){
var c__17266__auto___28335 = cljs.core.chunk_first(seq__28320_28334__$1);
var G__28336 = cljs.core.chunk_rest(seq__28320_28334__$1);
var G__28337 = c__17266__auto___28335;
var G__28338 = cljs.core.count(c__17266__auto___28335);
var G__28339 = (0);
seq__28320_28324 = G__28336;
chunk__28321_28325 = G__28337;
count__28322_28326 = G__28338;
i__28323_28327 = G__28339;
continue;
} else {
var c_28340 = cljs.core.first(seq__28320_28334__$1);
sb.append(cljs.compiler.escape_char(c_28340));

var G__28341 = cljs.core.next(seq__28320_28334__$1);
var G__28342 = null;
var G__28343 = (0);
var G__28344 = (0);
seq__28320_28324 = G__28341;
chunk__28321_28325 = G__28342;
count__28322_28326 = G__28343;
i__28323_28327 = G__28344;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__17376__auto__ = (function (){var G__28345 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28345) : cljs.core.atom.call(null,G__28345));
})();
var prefer_table__17377__auto__ = (function (){var G__28346 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28346) : cljs.core.atom.call(null,G__28346));
})();
var method_cache__17378__auto__ = (function (){var G__28347 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28347) : cljs.core.atom.call(null,G__28347));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__28348 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28348) : cljs.core.atom.call(null,G__28348));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.constant$keyword$op,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__17903__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__17903__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__28354_28359 = ast;
var map__28354_28360__$1 = ((((!((map__28354_28359 == null)))?((((map__28354_28359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28354_28359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28354_28359):map__28354_28359);
var env_28361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28354_28360__$1,cljs.core.constant$keyword$env);
if(cljs.core.truth_(cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(env_28361))){
var map__28356_28362 = env_28361;
var map__28356_28363__$1 = ((((!((map__28356_28362 == null)))?((((map__28356_28362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28356_28362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28356_28362):map__28356_28362);
var line_28364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28356_28363__$1,cljs.core.constant$keyword$line);
var column_28365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28356_28363__$1,cljs.core.constant$keyword$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__28356_28362,map__28356_28363__$1,line_28364,column_28365,map__28354_28359,map__28354_28360__$1,env_28361,val__17903__auto__){
return (function (m){
var minfo = (function (){var G__28358 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$gcol,cljs.core.constant$keyword$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.constant$keyword$gline,cljs.core.constant$keyword$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
var G__28358__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.constant$keyword$var))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28358,cljs.core.constant$keyword$name,[cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__28358);
return G__28358__$1;
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$source_DASH_map,(line_28364 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__28356_28362,map__28356_28363__$1,line_28364,column_28365,map__28354_28359,map__28354_28360__$1,env_28361,val__17903__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_28365)?(column_28365 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__28356_28362,map__28356_28363__$1,line_28364,column_28365,map__28354_28359,map__28354_28360__$1,env_28361,val__17903__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__28356_28362,map__28356_28363__$1,line_28364,column_28365,map__28354_28359,map__28354_28360__$1,env_28361,val__17903__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__28356_28362,map__28356_28363__$1,line_28364,column_28365,map__28354_28359,map__28354_28360__$1,env_28361,val__17903__auto__))
,cljs.core.sorted_map()));
});})(map__28356_28362,map__28356_28363__$1,line_28364,column_28365,map__28354_28359,map__28354_28360__$1,env_28361,val__17903__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__17903__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(){
var args__17528__auto__ = [];
var len__17521__auto___28372 = arguments.length;
var i__17522__auto___28373 = (0);
while(true){
if((i__17522__auto___28373 < len__17521__auto___28372)){
args__17528__auto__.push((arguments[i__17522__auto___28373]));

var G__28374 = (i__17522__auto___28373 + (1));
i__17522__auto___28373 = G__28374;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__28368_28375 = cljs.core.seq(xs);
var chunk__28369_28376 = null;
var count__28370_28377 = (0);
var i__28371_28378 = (0);
while(true){
if((i__28371_28378 < count__28370_28377)){
var x_28379 = chunk__28369_28376.cljs$core$IIndexed$_nth$arity$2(null,i__28371_28378);
if((x_28379 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_28379)){
cljs.compiler.emit(x_28379);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_28379)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_28379);
} else {
if(goog.isFunction(x_28379)){
(x_28379.cljs$core$IFn$_invoke$arity$0 ? x_28379.cljs$core$IFn$_invoke$arity$0() : x_28379.call(null));
} else {
var s_28380 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_28379], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$gen_DASH_col], null),((function (seq__28368_28375,chunk__28369_28376,count__28370_28377,i__28371_28378,s_28380,x_28379){
return (function (p1__28366_SHARP_){
return (p1__28366_SHARP_ + cljs.core.count(s_28380));
});})(seq__28368_28375,chunk__28369_28376,count__28370_28377,i__28371_28378,s_28380,x_28379))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_28380], 0));

}
}
}
}

var G__28381 = seq__28368_28375;
var G__28382 = chunk__28369_28376;
var G__28383 = count__28370_28377;
var G__28384 = (i__28371_28378 + (1));
seq__28368_28375 = G__28381;
chunk__28369_28376 = G__28382;
count__28370_28377 = G__28383;
i__28371_28378 = G__28384;
continue;
} else {
var temp__4425__auto___28385 = cljs.core.seq(seq__28368_28375);
if(temp__4425__auto___28385){
var seq__28368_28386__$1 = temp__4425__auto___28385;
if(cljs.core.chunked_seq_QMARK_(seq__28368_28386__$1)){
var c__17266__auto___28387 = cljs.core.chunk_first(seq__28368_28386__$1);
var G__28388 = cljs.core.chunk_rest(seq__28368_28386__$1);
var G__28389 = c__17266__auto___28387;
var G__28390 = cljs.core.count(c__17266__auto___28387);
var G__28391 = (0);
seq__28368_28375 = G__28388;
chunk__28369_28376 = G__28389;
count__28370_28377 = G__28390;
i__28371_28378 = G__28391;
continue;
} else {
var x_28392 = cljs.core.first(seq__28368_28386__$1);
if((x_28392 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_28392)){
cljs.compiler.emit(x_28392);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_28392)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_28392);
} else {
if(goog.isFunction(x_28392)){
(x_28392.cljs$core$IFn$_invoke$arity$0 ? x_28392.cljs$core$IFn$_invoke$arity$0() : x_28392.call(null));
} else {
var s_28393 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_28392], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$gen_DASH_col], null),((function (seq__28368_28375,chunk__28369_28376,count__28370_28377,i__28371_28378,s_28393,x_28392,seq__28368_28386__$1,temp__4425__auto___28385){
return (function (p1__28366_SHARP_){
return (p1__28366_SHARP_ + cljs.core.count(s_28393));
});})(seq__28368_28375,chunk__28369_28376,count__28370_28377,i__28371_28378,s_28393,x_28392,seq__28368_28386__$1,temp__4425__auto___28385))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_28393], 0));

}
}
}
}

var G__28394 = cljs.core.next(seq__28368_28386__$1);
var G__28395 = null;
var G__28396 = (0);
var G__28397 = (0);
seq__28368_28375 = G__28394;
chunk__28369_28376 = G__28395;
count__28370_28377 = G__28396;
i__28371_28378 = G__28397;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq28367){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28367));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(){
var args__17528__auto__ = [];
var len__17521__auto___28402 = arguments.length;
var i__17522__auto___28403 = (0);
while(true){
if((i__17522__auto___28403 < len__17521__auto___28402)){
args__17528__auto__.push((arguments[i__17522__auto___28403]));

var G__28404 = (i__17522__auto___28403 + (1));
i__17522__auto___28403 = G__28404;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__28399){
var map__28400 = p__28399;
var map__28400__$1 = ((((!((map__28400 == null)))?((((map__28400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28400):map__28400);
var m = map__28400__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28400__$1,cljs.core.constant$keyword$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.constant$keyword$gen_DASH_line,(gen_line + (1)),cljs.core.array_seq([cljs.core.constant$keyword$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq28398){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28398));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__17437__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28407_28409 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28408_28410 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28407_28409,_STAR_print_fn_STAR_28408_28410,sb__17437__auto__){
return (function (x__17438__auto__){
return sb__17437__auto__.append(x__17438__auto__);
});})(_STAR_print_newline_STAR_28407_28409,_STAR_print_fn_STAR_28408_28410,sb__17437__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28408_28410;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28407_28409;
}
return [cljs.core.str(sb__17437__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__17376__auto__ = (function (){var G__28411 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28411) : cljs.core.atom.call(null,G__28411));
})();
var prefer_table__17377__auto__ = (function (){var G__28412 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28412) : cljs.core.atom.call(null,G__28412));
})();
var method_cache__17378__auto__ = (function (){var G__28413 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28413) : cljs.core.atom.call(null,G__28413));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__28414 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28414) : cljs.core.atom.call(null,G__28414));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new RegExp(\"\"))"], 0));
} else {
var vec__28415 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28415,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28415,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28415,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__28418_28420 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__28418_28420) : cljs.compiler.emit_constant.call(null,G__28418_28420));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__28419_28421 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__28419_28421) : cljs.compiler.emit_constant.call(null,G__28419_28421));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(cljs.core.constant$keyword$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__28422 = cljs.core.constant$keyword$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__28422) : x.call(null,G__28422));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var ns = cljs.core.namespace(x);
var name = cljs.core.name(x);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__28423_28424 = cljs.core.hash(x);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__28423_28424) : cljs.compiler.emit_constant.call(null,G__28423_28424));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.UUID(\"",uuid.toString(),"\")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$var,(function (p__28426){
var map__28427 = p__28426;
var map__28427__$1 = ((((!((map__28427 == null)))?((((map__28427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28427):map__28427);
var arg = map__28427__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28427__$1,cljs.core.constant$keyword$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28427__$1,cljs.core.constant$keyword$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28427__$1,cljs.core.constant$keyword$form);
var var_name = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$js_DASH_module_DASH_index,cljs.core.name(var_name)], null));
var or__16482__auto__ = js_module_name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.constant$keyword$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(arg)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$statement,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__28429 = info__$1;
var G__28429__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__28429):G__28429);
return G__28429__$1;
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$var_DASH_special,(function (p__28430){
var map__28431 = p__28430;
var map__28431__$1 = ((((!((map__28431 == null)))?((((map__28431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28431):map__28431);
var arg = map__28431__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28431__$1,cljs.core.constant$keyword$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28431__$1,cljs.core.constant$keyword$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28431__$1,cljs.core.constant$keyword$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28431__$1,cljs.core.constant$keyword$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))], 0)))].join('')));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))], 0)))].join('')));
}

var map__28433 = cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__28433__$1 = ((((!((map__28433 == null)))?((((map__28433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28433):map__28433);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28433__$1,cljs.core.constant$keyword$name);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$meta,(function (p__28435){
var map__28436 = p__28435;
var map__28436__$1 = ((((!((map__28436 == null)))?((((map__28436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28436):map__28436);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28436__$1,cljs.core.constant$keyword$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28436__$1,cljs.core.constant$keyword$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28436__$1,cljs.core.constant$keyword$env);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__28438_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(p1__28438_SHARP_),cljs.core.constant$keyword$constant);
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$map,(function (p__28439){
var map__28440 = p__28439;
var map__28440__$1 = ((((!((map__28440 == null)))?((((map__28440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28440):map__28440);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28440__$1,cljs.core.constant$keyword$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28440__$1,cljs.core.constant$keyword$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28440__$1,cljs.core.constant$keyword$vals);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], true, false)"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$list,(function (p__28442){
var map__28443 = p__28442;
var map__28443__$1 = ((((!((map__28443 == null)))?((((map__28443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28443):map__28443);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28443__$1,cljs.core.constant$keyword$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28443__$1,cljs.core.constant$keyword$env);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$vector,(function (p__28445){
var map__28446 = p__28445;
var map__28446__$1 = ((((!((map__28446 == null)))?((((map__28446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28446):map__28446);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28446__$1,cljs.core.constant$keyword$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28446__$1,cljs.core.constant$keyword$env);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_28448 = cljs.core.count(items);
if((cnt_28448 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_28448,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__28449_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(p1__28449_SHARP_),cljs.core.constant$keyword$constant);
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$set,(function (p__28450){
var map__28451 = p__28450;
var map__28451__$1 = ((((!((map__28451 == null)))?((((map__28451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28451):map__28451);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28451__$1,cljs.core.constant$keyword$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28451__$1,cljs.core.constant$keyword$env);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$js_DASH_value,(function (p__28453){
var map__28454 = p__28453;
var map__28454__$1 = ((((!((map__28454 == null)))?((((map__28454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28454):map__28454);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,cljs.core.constant$keyword$items);
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,cljs.core.constant$keyword$js_DASH_type);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28454__$1,cljs.core.constant$keyword$env);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,cljs.core.constant$keyword$object)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["{"], 0));

var temp__4425__auto___28464 = cljs.core.seq(items);
if(temp__4425__auto___28464){
var items_28465__$1 = temp__4425__auto___28464;
var vec__28456_28466 = items_28465__$1;
var vec__28457_28467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28456_28466,(0),null);
var k_28468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28457_28467,(0),null);
var v_28469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28457_28467,(1),null);
var r_28470 = cljs.core.nthnext(vec__28456_28466,(1));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_28468),"\": ",v_28469], 0));

var seq__28458_28471 = cljs.core.seq(r_28470);
var chunk__28459_28472 = null;
var count__28460_28473 = (0);
var i__28461_28474 = (0);
while(true){
if((i__28461_28474 < count__28460_28473)){
var vec__28462_28475 = chunk__28459_28472.cljs$core$IIndexed$_nth$arity$2(null,i__28461_28474);
var k_28476__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28462_28475,(0),null);
var v_28477__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28462_28475,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_28476__$1),"\": ",v_28477__$1], 0));

var G__28478 = seq__28458_28471;
var G__28479 = chunk__28459_28472;
var G__28480 = count__28460_28473;
var G__28481 = (i__28461_28474 + (1));
seq__28458_28471 = G__28478;
chunk__28459_28472 = G__28479;
count__28460_28473 = G__28480;
i__28461_28474 = G__28481;
continue;
} else {
var temp__4425__auto___28482__$1 = cljs.core.seq(seq__28458_28471);
if(temp__4425__auto___28482__$1){
var seq__28458_28483__$1 = temp__4425__auto___28482__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28458_28483__$1)){
var c__17266__auto___28484 = cljs.core.chunk_first(seq__28458_28483__$1);
var G__28485 = cljs.core.chunk_rest(seq__28458_28483__$1);
var G__28486 = c__17266__auto___28484;
var G__28487 = cljs.core.count(c__17266__auto___28484);
var G__28488 = (0);
seq__28458_28471 = G__28485;
chunk__28459_28472 = G__28486;
count__28460_28473 = G__28487;
i__28461_28474 = G__28488;
continue;
} else {
var vec__28463_28489 = cljs.core.first(seq__28458_28483__$1);
var k_28490__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28463_28489,(0),null);
var v_28491__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28463_28489,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_28490__$1),"\": ",v_28491__$1], 0));

var G__28492 = cljs.core.next(seq__28458_28483__$1);
var G__28493 = null;
var G__28494 = (0);
var G__28495 = (0);
seq__28458_28471 = G__28492;
chunk__28459_28472 = G__28493;
count__28460_28473 = G__28494;
i__28461_28474 = G__28495;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$constant,(function (p__28496){
var map__28497 = p__28496;
var map__28497__$1 = ((((!((map__28497 == null)))?((((map__28497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28497):map__28497);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28497__$1,cljs.core.constant$keyword$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28497__$1,cljs.core.constant$keyword$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$statement,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__28499){
var map__28502 = p__28499;
var map__28502__$1 = ((((!((map__28502 == null)))?((((map__28502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28502):map__28502);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28502__$1,cljs.core.constant$keyword$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28502__$1,cljs.core.constant$keyword$form);
var and__16470__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.constant$keyword$constant);
if(and__16470__auto__){
var and__16470__auto____$1 = form;
if(cljs.core.truth_(and__16470__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__28504){
var map__28507 = p__28504;
var map__28507__$1 = ((((!((map__28507 == null)))?((((map__28507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28507):map__28507);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28507__$1,cljs.core.constant$keyword$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28507__$1,cljs.core.constant$keyword$form);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.constant$keyword$constant)) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__16482__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$if,(function (p__28509){
var map__28510 = p__28509;
var map__28510__$1 = ((((!((map__28510 == null)))?((((map__28510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28510):map__28510);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,cljs.core.constant$keyword$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,cljs.core.constant$keyword$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,cljs.core.constant$keyword$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,cljs.core.constant$keyword$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,cljs.core.constant$keyword$unchecked);
var context = cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__16482__auto__ = unchecked;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$case_STAR_,(function (p__28512){
var map__28513 = p__28512;
var map__28513__$1 = ((((!((map__28513 == null)))?((((map__28513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28513):map__28513);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28513__$1,cljs.core.constant$keyword$v);
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28513__$1,cljs.core.constant$keyword$tests);
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28513__$1,cljs.core.constant$keyword$thens);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28513__$1,cljs.core.constant$keyword$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28513__$1,cljs.core.constant$keyword$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.constant$keyword$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch (",v,") {"], 0));

var seq__28515_28529 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__28516_28530 = null;
var count__28517_28531 = (0);
var i__28518_28532 = (0);
while(true){
if((i__28518_28532 < count__28517_28531)){
var vec__28519_28533 = chunk__28516_28530.cljs$core$IIndexed$_nth$arity$2(null,i__28518_28532);
var ts_28534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28519_28533,(0),null);
var then_28535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28519_28533,(1),null);
var seq__28520_28536 = cljs.core.seq(ts_28534);
var chunk__28521_28537 = null;
var count__28522_28538 = (0);
var i__28523_28539 = (0);
while(true){
if((i__28523_28539 < count__28522_28538)){
var test_28540 = chunk__28521_28537.cljs$core$IIndexed$_nth$arity$2(null,i__28523_28539);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_28540,":"], 0));

var G__28541 = seq__28520_28536;
var G__28542 = chunk__28521_28537;
var G__28543 = count__28522_28538;
var G__28544 = (i__28523_28539 + (1));
seq__28520_28536 = G__28541;
chunk__28521_28537 = G__28542;
count__28522_28538 = G__28543;
i__28523_28539 = G__28544;
continue;
} else {
var temp__4425__auto___28545 = cljs.core.seq(seq__28520_28536);
if(temp__4425__auto___28545){
var seq__28520_28546__$1 = temp__4425__auto___28545;
if(cljs.core.chunked_seq_QMARK_(seq__28520_28546__$1)){
var c__17266__auto___28547 = cljs.core.chunk_first(seq__28520_28546__$1);
var G__28548 = cljs.core.chunk_rest(seq__28520_28546__$1);
var G__28549 = c__17266__auto___28547;
var G__28550 = cljs.core.count(c__17266__auto___28547);
var G__28551 = (0);
seq__28520_28536 = G__28548;
chunk__28521_28537 = G__28549;
count__28522_28538 = G__28550;
i__28523_28539 = G__28551;
continue;
} else {
var test_28552 = cljs.core.first(seq__28520_28546__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_28552,":"], 0));

var G__28553 = cljs.core.next(seq__28520_28546__$1);
var G__28554 = null;
var G__28555 = (0);
var G__28556 = (0);
seq__28520_28536 = G__28553;
chunk__28521_28537 = G__28554;
count__28522_28538 = G__28555;
i__28523_28539 = G__28556;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_28535], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_28535], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__28557 = seq__28515_28529;
var G__28558 = chunk__28516_28530;
var G__28559 = count__28517_28531;
var G__28560 = (i__28518_28532 + (1));
seq__28515_28529 = G__28557;
chunk__28516_28530 = G__28558;
count__28517_28531 = G__28559;
i__28518_28532 = G__28560;
continue;
} else {
var temp__4425__auto___28561 = cljs.core.seq(seq__28515_28529);
if(temp__4425__auto___28561){
var seq__28515_28562__$1 = temp__4425__auto___28561;
if(cljs.core.chunked_seq_QMARK_(seq__28515_28562__$1)){
var c__17266__auto___28563 = cljs.core.chunk_first(seq__28515_28562__$1);
var G__28564 = cljs.core.chunk_rest(seq__28515_28562__$1);
var G__28565 = c__17266__auto___28563;
var G__28566 = cljs.core.count(c__17266__auto___28563);
var G__28567 = (0);
seq__28515_28529 = G__28564;
chunk__28516_28530 = G__28565;
count__28517_28531 = G__28566;
i__28518_28532 = G__28567;
continue;
} else {
var vec__28524_28568 = cljs.core.first(seq__28515_28562__$1);
var ts_28569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28524_28568,(0),null);
var then_28570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28524_28568,(1),null);
var seq__28525_28571 = cljs.core.seq(ts_28569);
var chunk__28526_28572 = null;
var count__28527_28573 = (0);
var i__28528_28574 = (0);
while(true){
if((i__28528_28574 < count__28527_28573)){
var test_28575 = chunk__28526_28572.cljs$core$IIndexed$_nth$arity$2(null,i__28528_28574);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_28575,":"], 0));

var G__28576 = seq__28525_28571;
var G__28577 = chunk__28526_28572;
var G__28578 = count__28527_28573;
var G__28579 = (i__28528_28574 + (1));
seq__28525_28571 = G__28576;
chunk__28526_28572 = G__28577;
count__28527_28573 = G__28578;
i__28528_28574 = G__28579;
continue;
} else {
var temp__4425__auto___28580__$1 = cljs.core.seq(seq__28525_28571);
if(temp__4425__auto___28580__$1){
var seq__28525_28581__$1 = temp__4425__auto___28580__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28525_28581__$1)){
var c__17266__auto___28582 = cljs.core.chunk_first(seq__28525_28581__$1);
var G__28583 = cljs.core.chunk_rest(seq__28525_28581__$1);
var G__28584 = c__17266__auto___28582;
var G__28585 = cljs.core.count(c__17266__auto___28582);
var G__28586 = (0);
seq__28525_28571 = G__28583;
chunk__28526_28572 = G__28584;
count__28527_28573 = G__28585;
i__28528_28574 = G__28586;
continue;
} else {
var test_28587 = cljs.core.first(seq__28525_28581__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_28587,":"], 0));

var G__28588 = cljs.core.next(seq__28525_28581__$1);
var G__28589 = null;
var G__28590 = (0);
var G__28591 = (0);
seq__28525_28571 = G__28588;
chunk__28526_28572 = G__28589;
count__28527_28573 = G__28590;
i__28528_28574 = G__28591;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_28570], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_28570], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__28592 = cljs.core.next(seq__28515_28562__$1);
var G__28593 = null;
var G__28594 = (0);
var G__28595 = (0);
seq__28515_28529 = G__28592;
chunk__28516_28530 = G__28593;
count__28517_28531 = G__28594;
i__28518_28532 = G__28595;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$throw,(function (p__28596){
var map__28597 = p__28596;
var map__28597__$1 = ((((!((map__28597 == null)))?((((map__28597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28597):map__28597);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28597__$1,cljs.core.constant$keyword$throw);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28597__$1,cljs.core.constant$keyword$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw ",throw$,";"], 0));
}
}));
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$emit_comment_$_print_comment_lines(e){
var seq__28631 = cljs.core.seq(clojure.string.split_lines(e));
var chunk__28632 = null;
var count__28633 = (0);
var i__28634 = (0);
while(true){
if((i__28634 < count__28633)){
var next_line = chunk__28632.cljs$core$IIndexed$_nth$arity$2(null,i__28634);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.trim(next_line),"*/","* /")], 0));

var G__28639 = seq__28631;
var G__28640 = chunk__28632;
var G__28641 = count__28633;
var G__28642 = (i__28634 + (1));
seq__28631 = G__28639;
chunk__28632 = G__28640;
count__28633 = G__28641;
i__28634 = G__28642;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__28631);
if(temp__4425__auto__){
var seq__28631__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28631__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__28631__$1);
var G__28643 = cljs.core.chunk_rest(seq__28631__$1);
var G__28644 = c__17266__auto__;
var G__28645 = cljs.core.count(c__17266__auto__);
var G__28646 = (0);
seq__28631 = G__28643;
chunk__28632 = G__28644;
count__28633 = G__28645;
i__28634 = G__28646;
continue;
} else {
var next_line = cljs.core.first(seq__28631__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.trim(next_line),"*/","* /")], 0));

var G__28647 = cljs.core.next(seq__28631__$1);
var G__28648 = null;
var G__28649 = (0);
var G__28650 = (0);
seq__28631 = G__28647;
chunk__28632 = G__28648;
count__28633 = G__28649;
i__28634 = G__28650;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

var seq__28635_28651 = cljs.core.seq(docs__$2);
var chunk__28636_28652 = null;
var count__28637_28653 = (0);
var i__28638_28654 = (0);
while(true){
if((i__28638_28654 < count__28637_28653)){
var e_28655 = chunk__28636_28652.cljs$core$IIndexed$_nth$arity$2(null,i__28638_28654);
if(cljs.core.truth_(e_28655)){
print_comment_lines(e_28655);
} else {
}

var G__28656 = seq__28635_28651;
var G__28657 = chunk__28636_28652;
var G__28658 = count__28637_28653;
var G__28659 = (i__28638_28654 + (1));
seq__28635_28651 = G__28656;
chunk__28636_28652 = G__28657;
count__28637_28653 = G__28658;
i__28638_28654 = G__28659;
continue;
} else {
var temp__4425__auto___28660 = cljs.core.seq(seq__28635_28651);
if(temp__4425__auto___28660){
var seq__28635_28661__$1 = temp__4425__auto___28660;
if(cljs.core.chunked_seq_QMARK_(seq__28635_28661__$1)){
var c__17266__auto___28662 = cljs.core.chunk_first(seq__28635_28661__$1);
var G__28663 = cljs.core.chunk_rest(seq__28635_28661__$1);
var G__28664 = c__17266__auto___28662;
var G__28665 = cljs.core.count(c__17266__auto___28662);
var G__28666 = (0);
seq__28635_28651 = G__28663;
chunk__28636_28652 = G__28664;
count__28637_28653 = G__28665;
i__28638_28654 = G__28666;
continue;
} else {
var e_28667 = cljs.core.first(seq__28635_28661__$1);
if(cljs.core.truth_(e_28667)){
print_comment_lines(e_28667);
} else {
}

var G__28668 = cljs.core.next(seq__28635_28661__$1);
var G__28669 = null;
var G__28670 = (0);
var G__28671 = (0);
seq__28635_28651 = G__28668;
chunk__28636_28652 = G__28669;
count__28637_28653 = G__28670;
i__28638_28654 = G__28671;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" */"], 0));
} else {
return null;
}
});
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),cljs.core.constant$keyword$options);
var and__16470__auto__ = cljs.core.some(((function (opts){
return (function (p1__28673_SHARP_){
return goog.string.startsWith(p1__28673_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = opts;
if(cljs.core.truth_(and__16470__auto____$1)){
var and__16470__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$none);
if(and__16470__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$closure_DASH_defines,[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
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
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$def,(function (p__28674){
var map__28675 = p__28674;
var map__28675__$1 = ((((!((map__28675 == null)))?((((map__28675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28675):map__28675);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28675__$1,cljs.core.constant$keyword$name);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28675__$1,cljs.core.constant$keyword$var);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28675__$1,cljs.core.constant$keyword$init);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28675__$1,cljs.core.constant$keyword$env);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28675__$1,cljs.core.constant$keyword$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28675__$1,cljs.core.constant$keyword$jsdoc);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28675__$1,cljs.core.constant$keyword$export);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28675__$1,cljs.core.constant$keyword$test);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28675__$1,cljs.core.constant$keyword$var_DASH_ast);
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.truth_(init)){
cljs.compiler.emit_comment(doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.constant$keyword$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(cljs.core.constant$keyword$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ("], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})()], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$op,cljs.core.constant$keyword$var_DASH_special,cljs.core.constant$keyword$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$context,cljs.core.constant$keyword$expr)], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__16470__auto__)){
return test;
} else {
return and__16470__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__28677){
var map__28694 = p__28677;
var map__28694__$1 = ((((!((map__28694 == null)))?((((map__28694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28694):map__28694);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,cljs.core.constant$keyword$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,cljs.core.constant$keyword$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28694__$1,cljs.core.constant$keyword$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__28696_28710 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__28697_28711 = null;
var count__28698_28712 = (0);
var i__28699_28713 = (0);
while(true){
if((i__28699_28713 < count__28698_28712)){
var vec__28700_28714 = chunk__28697_28711.cljs$core$IIndexed$_nth$arity$2(null,i__28699_28713);
var i_28715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28700_28714,(0),null);
var param_28716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28700_28714,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_28716);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__28717 = seq__28696_28710;
var G__28718 = chunk__28697_28711;
var G__28719 = count__28698_28712;
var G__28720 = (i__28699_28713 + (1));
seq__28696_28710 = G__28717;
chunk__28697_28711 = G__28718;
count__28698_28712 = G__28719;
i__28699_28713 = G__28720;
continue;
} else {
var temp__4425__auto___28721 = cljs.core.seq(seq__28696_28710);
if(temp__4425__auto___28721){
var seq__28696_28722__$1 = temp__4425__auto___28721;
if(cljs.core.chunked_seq_QMARK_(seq__28696_28722__$1)){
var c__17266__auto___28723 = cljs.core.chunk_first(seq__28696_28722__$1);
var G__28724 = cljs.core.chunk_rest(seq__28696_28722__$1);
var G__28725 = c__17266__auto___28723;
var G__28726 = cljs.core.count(c__17266__auto___28723);
var G__28727 = (0);
seq__28696_28710 = G__28724;
chunk__28697_28711 = G__28725;
count__28698_28712 = G__28726;
i__28699_28713 = G__28727;
continue;
} else {
var vec__28701_28728 = cljs.core.first(seq__28696_28722__$1);
var i_28729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28701_28728,(0),null);
var param_28730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28701_28728,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_28730);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__28731 = cljs.core.next(seq__28696_28722__$1);
var G__28732 = null;
var G__28733 = (0);
var G__28734 = (0);
seq__28696_28710 = G__28731;
chunk__28697_28711 = G__28732;
count__28698_28712 = G__28733;
i__28699_28713 = G__28734;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__28702_28735 = cljs.core.seq(params);
var chunk__28703_28736 = null;
var count__28704_28737 = (0);
var i__28705_28738 = (0);
while(true){
if((i__28705_28738 < count__28704_28737)){
var param_28739 = chunk__28703_28736.cljs$core$IIndexed$_nth$arity$2(null,i__28705_28738);
cljs.compiler.emit(param_28739);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_28739,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__28740 = seq__28702_28735;
var G__28741 = chunk__28703_28736;
var G__28742 = count__28704_28737;
var G__28743 = (i__28705_28738 + (1));
seq__28702_28735 = G__28740;
chunk__28703_28736 = G__28741;
count__28704_28737 = G__28742;
i__28705_28738 = G__28743;
continue;
} else {
var temp__4425__auto___28744 = cljs.core.seq(seq__28702_28735);
if(temp__4425__auto___28744){
var seq__28702_28745__$1 = temp__4425__auto___28744;
if(cljs.core.chunked_seq_QMARK_(seq__28702_28745__$1)){
var c__17266__auto___28746 = cljs.core.chunk_first(seq__28702_28745__$1);
var G__28747 = cljs.core.chunk_rest(seq__28702_28745__$1);
var G__28748 = c__17266__auto___28746;
var G__28749 = cljs.core.count(c__17266__auto___28746);
var G__28750 = (0);
seq__28702_28735 = G__28747;
chunk__28703_28736 = G__28748;
count__28704_28737 = G__28749;
i__28705_28738 = G__28750;
continue;
} else {
var param_28751 = cljs.core.first(seq__28702_28745__$1);
cljs.compiler.emit(param_28751);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_28751,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__28752 = cljs.core.next(seq__28702_28745__$1);
var G__28753 = null;
var G__28754 = (0);
var G__28755 = (0);
seq__28702_28735 = G__28752;
chunk__28703_28736 = G__28753;
count__28704_28737 = G__28754;
i__28705_28738 = G__28755;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__28706_28756 = cljs.core.seq(params);
var chunk__28707_28757 = null;
var count__28708_28758 = (0);
var i__28709_28759 = (0);
while(true){
if((i__28709_28759 < count__28708_28758)){
var param_28760 = chunk__28707_28757.cljs$core$IIndexed$_nth$arity$2(null,i__28709_28759);
cljs.compiler.emit(param_28760);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_28760,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__28761 = seq__28706_28756;
var G__28762 = chunk__28707_28757;
var G__28763 = count__28708_28758;
var G__28764 = (i__28709_28759 + (1));
seq__28706_28756 = G__28761;
chunk__28707_28757 = G__28762;
count__28708_28758 = G__28763;
i__28709_28759 = G__28764;
continue;
} else {
var temp__4425__auto___28765 = cljs.core.seq(seq__28706_28756);
if(temp__4425__auto___28765){
var seq__28706_28766__$1 = temp__4425__auto___28765;
if(cljs.core.chunked_seq_QMARK_(seq__28706_28766__$1)){
var c__17266__auto___28767 = cljs.core.chunk_first(seq__28706_28766__$1);
var G__28768 = cljs.core.chunk_rest(seq__28706_28766__$1);
var G__28769 = c__17266__auto___28767;
var G__28770 = cljs.core.count(c__17266__auto___28767);
var G__28771 = (0);
seq__28706_28756 = G__28768;
chunk__28707_28757 = G__28769;
count__28708_28758 = G__28770;
i__28709_28759 = G__28771;
continue;
} else {
var param_28772 = cljs.core.first(seq__28706_28766__$1);
cljs.compiler.emit(param_28772);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_28772,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__28773 = cljs.core.next(seq__28706_28766__$1);
var G__28774 = null;
var G__28775 = (0);
var G__28776 = (0);
seq__28706_28756 = G__28773;
chunk__28707_28757 = G__28774;
count__28708_28758 = G__28775;
i__28709_28759 = G__28776;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__28781 = cljs.core.seq(params);
var chunk__28782 = null;
var count__28783 = (0);
var i__28784 = (0);
while(true){
if((i__28784 < count__28783)){
var param = chunk__28782.cljs$core$IIndexed$_nth$arity$2(null,i__28784);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__28785 = seq__28781;
var G__28786 = chunk__28782;
var G__28787 = count__28783;
var G__28788 = (i__28784 + (1));
seq__28781 = G__28785;
chunk__28782 = G__28786;
count__28783 = G__28787;
i__28784 = G__28788;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__28781);
if(temp__4425__auto__){
var seq__28781__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28781__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__28781__$1);
var G__28789 = cljs.core.chunk_rest(seq__28781__$1);
var G__28790 = c__17266__auto__;
var G__28791 = cljs.core.count(c__17266__auto__);
var G__28792 = (0);
seq__28781 = G__28789;
chunk__28782 = G__28790;
count__28783 = G__28791;
i__28784 = G__28792;
continue;
} else {
var param = cljs.core.first(seq__28781__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__28793 = cljs.core.next(seq__28781__$1);
var G__28794 = null;
var G__28795 = (0);
var G__28796 = (0);
seq__28781 = G__28793;
chunk__28782 = G__28794;
count__28783 = G__28795;
i__28784 = G__28796;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__28797){
var map__28800 = p__28797;
var map__28800__$1 = ((((!((map__28800 == null)))?((((map__28800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28800):map__28800);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28800__$1,cljs.core.constant$keyword$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28800__$1,cljs.core.constant$keyword$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28800__$1,cljs.core.constant$keyword$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28800__$1,cljs.core.constant$keyword$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28800__$1,cljs.core.constant$keyword$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28800__$1,cljs.core.constant$keyword$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28800__$1,cljs.core.constant$keyword$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28800__$1,cljs.core.constant$keyword$max_DASH_fixed_DASH_arity);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 * Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))], 0)))].join('')));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__28802){
var map__28813 = p__28802;
var map__28813__$1 = ((((!((map__28813 == null)))?((((map__28813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28813):map__28813);
var f = map__28813__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,cljs.core.constant$keyword$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,cljs.core.constant$keyword$name);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,cljs.core.constant$keyword$variadic);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,cljs.core.constant$keyword$params);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,cljs.core.constant$keyword$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,cljs.core.constant$keyword$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,cljs.core.constant$keyword$recurs);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28813__$1,cljs.core.constant$keyword$max_DASH_fixed_DASH_arity);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_28823__$1 = (function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_28824 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_28823__$1);
var delegate_name_28825 = [cljs.core.str(mname_28824),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_28825," = function ("], 0));

var seq__28815_28826 = cljs.core.seq(params);
var chunk__28816_28827 = null;
var count__28817_28828 = (0);
var i__28818_28829 = (0);
while(true){
if((i__28818_28829 < count__28817_28828)){
var param_28830 = chunk__28816_28827.cljs$core$IIndexed$_nth$arity$2(null,i__28818_28829);
cljs.compiler.emit(param_28830);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_28830,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__28831 = seq__28815_28826;
var G__28832 = chunk__28816_28827;
var G__28833 = count__28817_28828;
var G__28834 = (i__28818_28829 + (1));
seq__28815_28826 = G__28831;
chunk__28816_28827 = G__28832;
count__28817_28828 = G__28833;
i__28818_28829 = G__28834;
continue;
} else {
var temp__4425__auto___28835 = cljs.core.seq(seq__28815_28826);
if(temp__4425__auto___28835){
var seq__28815_28836__$1 = temp__4425__auto___28835;
if(cljs.core.chunked_seq_QMARK_(seq__28815_28836__$1)){
var c__17266__auto___28837 = cljs.core.chunk_first(seq__28815_28836__$1);
var G__28838 = cljs.core.chunk_rest(seq__28815_28836__$1);
var G__28839 = c__17266__auto___28837;
var G__28840 = cljs.core.count(c__17266__auto___28837);
var G__28841 = (0);
seq__28815_28826 = G__28838;
chunk__28816_28827 = G__28839;
count__28817_28828 = G__28840;
i__28818_28829 = G__28841;
continue;
} else {
var param_28842 = cljs.core.first(seq__28815_28836__$1);
cljs.compiler.emit(param_28842);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_28842,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__28843 = cljs.core.next(seq__28815_28836__$1);
var G__28844 = null;
var G__28845 = (0);
var G__28846 = (0);
seq__28815_28826 = G__28843;
chunk__28816_28827 = G__28844;
count__28817_28828 = G__28845;
i__28818_28829 = G__28846;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_28824," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_28847 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_28847,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_28825,".call(this,"], 0));

var seq__28819_28848 = cljs.core.seq(params);
var chunk__28820_28849 = null;
var count__28821_28850 = (0);
var i__28822_28851 = (0);
while(true){
if((i__28822_28851 < count__28821_28850)){
var param_28852 = chunk__28820_28849.cljs$core$IIndexed$_nth$arity$2(null,i__28822_28851);
cljs.compiler.emit(param_28852);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_28852,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__28853 = seq__28819_28848;
var G__28854 = chunk__28820_28849;
var G__28855 = count__28821_28850;
var G__28856 = (i__28822_28851 + (1));
seq__28819_28848 = G__28853;
chunk__28820_28849 = G__28854;
count__28821_28850 = G__28855;
i__28822_28851 = G__28856;
continue;
} else {
var temp__4425__auto___28857 = cljs.core.seq(seq__28819_28848);
if(temp__4425__auto___28857){
var seq__28819_28858__$1 = temp__4425__auto___28857;
if(cljs.core.chunked_seq_QMARK_(seq__28819_28858__$1)){
var c__17266__auto___28859 = cljs.core.chunk_first(seq__28819_28858__$1);
var G__28860 = cljs.core.chunk_rest(seq__28819_28858__$1);
var G__28861 = c__17266__auto___28859;
var G__28862 = cljs.core.count(c__17266__auto___28859);
var G__28863 = (0);
seq__28819_28848 = G__28860;
chunk__28820_28849 = G__28861;
count__28821_28850 = G__28862;
i__28822_28851 = G__28863;
continue;
} else {
var param_28864 = cljs.core.first(seq__28819_28858__$1);
cljs.compiler.emit(param_28864);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_28864,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__28865 = cljs.core.next(seq__28819_28858__$1);
var G__28866 = null;
var G__28867 = (0);
var G__28868 = (0);
seq__28819_28848 = G__28865;
chunk__28820_28849 = G__28866;
count__28821_28850 = G__28867;
i__28822_28851 = G__28868;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_28824,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_28824,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.constant$keyword$name,name_28823__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_28824,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_28825,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_28824,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$fn,(function (p__28872){
var map__28873 = p__28872;
var map__28873__$1 = ((((!((map__28873 == null)))?((((map__28873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28873):map__28873);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28873__$1,cljs.core.constant$keyword$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28873__$1,cljs.core.constant$keyword$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28873__$1,cljs.core.constant$keyword$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28873__$1,cljs.core.constant$keyword$max_DASH_fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28873__$1,cljs.core.constant$keyword$variadic);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28873__$1,cljs.core.constant$keyword$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28873__$1,cljs.core.constant$keyword$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$statement,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$params,cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__28873,map__28873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__28869_SHARP_){
var and__16470__auto__ = p1__28869_SHARP_;
if(cljs.core.truth_(and__16470__auto__)){
var G__28875 = cljs.core.constant$keyword$flag.cljs$core$IFn$_invoke$arity$1(p1__28869_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28875) : cljs.core.deref.call(null,G__28875));
} else {
return and__16470__auto__;
}
});})(map__28873,map__28873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$params,cljs.core.array_seq([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.constant$keyword$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.constant$keyword$name,name));
}
} else {
var name_28895__$1 = (function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_28896 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_28895__$1);
var maxparams_28897 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$params,methods$));
var mmap_28898 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_28895__$1,mname_28896,maxparams_28897,loop_locals,map__28873,map__28873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(mname_28896),cljs.core.str("__"),cljs.core.str(cljs.core.count(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_28895__$1,mname_28896,maxparams_28897,loop_locals,map__28873,map__28873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_28899 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_28895__$1,mname_28896,maxparams_28897,mmap_28898,loop_locals,map__28873,map__28873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__28870_SHARP_){
return cljs.core.count(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__28870_SHARP_)));
});})(name_28895__$1,mname_28896,maxparams_28897,mmap_28898,loop_locals,map__28873,map__28873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_28898));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_28896," = null;"], 0));

var seq__28876_28900 = cljs.core.seq(ms_28899);
var chunk__28877_28901 = null;
var count__28878_28902 = (0);
var i__28879_28903 = (0);
while(true){
if((i__28879_28903 < count__28878_28902)){
var vec__28880_28904 = chunk__28877_28901.cljs$core$IIndexed$_nth$arity$2(null,i__28879_28903);
var n_28905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880_28904,(0),null);
var meth_28906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880_28904,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_28905," = "], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(meth_28906))){
cljs.compiler.emit_variadic_fn_method(meth_28906);
} else {
cljs.compiler.emit_fn_method(meth_28906);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__28907 = seq__28876_28900;
var G__28908 = chunk__28877_28901;
var G__28909 = count__28878_28902;
var G__28910 = (i__28879_28903 + (1));
seq__28876_28900 = G__28907;
chunk__28877_28901 = G__28908;
count__28878_28902 = G__28909;
i__28879_28903 = G__28910;
continue;
} else {
var temp__4425__auto___28911 = cljs.core.seq(seq__28876_28900);
if(temp__4425__auto___28911){
var seq__28876_28912__$1 = temp__4425__auto___28911;
if(cljs.core.chunked_seq_QMARK_(seq__28876_28912__$1)){
var c__17266__auto___28913 = cljs.core.chunk_first(seq__28876_28912__$1);
var G__28914 = cljs.core.chunk_rest(seq__28876_28912__$1);
var G__28915 = c__17266__auto___28913;
var G__28916 = cljs.core.count(c__17266__auto___28913);
var G__28917 = (0);
seq__28876_28900 = G__28914;
chunk__28877_28901 = G__28915;
count__28878_28902 = G__28916;
i__28879_28903 = G__28917;
continue;
} else {
var vec__28881_28918 = cljs.core.first(seq__28876_28912__$1);
var n_28919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881_28918,(0),null);
var meth_28920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28881_28918,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_28919," = "], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(meth_28920))){
cljs.compiler.emit_variadic_fn_method(meth_28920);
} else {
cljs.compiler.emit_fn_method(meth_28920);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__28921 = cljs.core.next(seq__28876_28912__$1);
var G__28922 = null;
var G__28923 = (0);
var G__28924 = (0);
seq__28876_28900 = G__28921;
chunk__28877_28901 = G__28922;
count__28878_28902 = G__28923;
i__28879_28903 = G__28924;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_28896," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_28897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_28897)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_28897));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__28882_28925 = cljs.core.seq(ms_28899);
var chunk__28883_28926 = null;
var count__28884_28927 = (0);
var i__28885_28928 = (0);
while(true){
if((i__28885_28928 < count__28884_28927)){
var vec__28886_28929 = chunk__28883_28926.cljs$core$IIndexed$_nth$arity$2(null,i__28885_28928);
var n_28930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28886_28929,(0),null);
var meth_28931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28886_28929,(1),null);
if(cljs.core.truth_(cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(meth_28931))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_28932 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_28932," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_28933 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_28932," = new cljs.core.IndexedSeq(",a_28933,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_28930,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_28897)),(((cljs.core.count(maxparams_28897) > (1)))?", ":null),restarg_28932,");"], 0));
} else {
var pcnt_28934 = cljs.core.count(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(meth_28931));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_28934,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_28930,".call(this",(((pcnt_28934 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_28934,maxparams_28897))),",")),");"], 0));
}

var G__28935 = seq__28882_28925;
var G__28936 = chunk__28883_28926;
var G__28937 = count__28884_28927;
var G__28938 = (i__28885_28928 + (1));
seq__28882_28925 = G__28935;
chunk__28883_28926 = G__28936;
count__28884_28927 = G__28937;
i__28885_28928 = G__28938;
continue;
} else {
var temp__4425__auto___28939 = cljs.core.seq(seq__28882_28925);
if(temp__4425__auto___28939){
var seq__28882_28940__$1 = temp__4425__auto___28939;
if(cljs.core.chunked_seq_QMARK_(seq__28882_28940__$1)){
var c__17266__auto___28941 = cljs.core.chunk_first(seq__28882_28940__$1);
var G__28942 = cljs.core.chunk_rest(seq__28882_28940__$1);
var G__28943 = c__17266__auto___28941;
var G__28944 = cljs.core.count(c__17266__auto___28941);
var G__28945 = (0);
seq__28882_28925 = G__28942;
chunk__28883_28926 = G__28943;
count__28884_28927 = G__28944;
i__28885_28928 = G__28945;
continue;
} else {
var vec__28887_28946 = cljs.core.first(seq__28882_28940__$1);
var n_28947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887_28946,(0),null);
var meth_28948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887_28946,(1),null);
if(cljs.core.truth_(cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(meth_28948))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_28949 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_28949," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_28950 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_28949," = new cljs.core.IndexedSeq(",a_28950,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_28947,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_28897)),(((cljs.core.count(maxparams_28897) > (1)))?", ":null),restarg_28949,");"], 0));
} else {
var pcnt_28951 = cljs.core.count(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(meth_28948));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_28951,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_28947,".call(this",(((pcnt_28951 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_28951,maxparams_28897))),",")),");"], 0));
}

var G__28952 = cljs.core.next(seq__28882_28940__$1);
var G__28953 = null;
var G__28954 = (0);
var G__28955 = (0);
seq__28882_28925 = G__28952;
chunk__28883_28926 = G__28953;
count__28884_28927 = G__28954;
i__28885_28928 = G__28955;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw(new Error('Invalid arity: ' + arguments.length));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_28896,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_28896,".cljs$lang$applyTo = ",cljs.core.some(((function (name_28895__$1,mname_28896,maxparams_28897,mmap_28898,ms_28899,loop_locals,map__28873,map__28873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__28871_SHARP_){
var vec__28888 = p1__28871_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28888,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28888,(1),null);
if(cljs.core.truth_(cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_28895__$1,mname_28896,maxparams_28897,mmap_28898,ms_28899,loop_locals,map__28873,map__28873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_28899),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__28889_28956 = cljs.core.seq(ms_28899);
var chunk__28890_28957 = null;
var count__28891_28958 = (0);
var i__28892_28959 = (0);
while(true){
if((i__28892_28959 < count__28891_28958)){
var vec__28893_28960 = chunk__28890_28957.cljs$core$IIndexed$_nth$arity$2(null,i__28892_28959);
var n_28961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28893_28960,(0),null);
var meth_28962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28893_28960,(1),null);
var c_28963 = cljs.core.count(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(meth_28962));
if(cljs.core.truth_(cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(meth_28962))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_28896,".cljs$core$IFn$_invoke$arity$variadic = ",n_28961,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_28896,".cljs$core$IFn$_invoke$arity$",c_28963," = ",n_28961,";"], 0));
}

var G__28964 = seq__28889_28956;
var G__28965 = chunk__28890_28957;
var G__28966 = count__28891_28958;
var G__28967 = (i__28892_28959 + (1));
seq__28889_28956 = G__28964;
chunk__28890_28957 = G__28965;
count__28891_28958 = G__28966;
i__28892_28959 = G__28967;
continue;
} else {
var temp__4425__auto___28968 = cljs.core.seq(seq__28889_28956);
if(temp__4425__auto___28968){
var seq__28889_28969__$1 = temp__4425__auto___28968;
if(cljs.core.chunked_seq_QMARK_(seq__28889_28969__$1)){
var c__17266__auto___28970 = cljs.core.chunk_first(seq__28889_28969__$1);
var G__28971 = cljs.core.chunk_rest(seq__28889_28969__$1);
var G__28972 = c__17266__auto___28970;
var G__28973 = cljs.core.count(c__17266__auto___28970);
var G__28974 = (0);
seq__28889_28956 = G__28971;
chunk__28890_28957 = G__28972;
count__28891_28958 = G__28973;
i__28892_28959 = G__28974;
continue;
} else {
var vec__28894_28975 = cljs.core.first(seq__28889_28969__$1);
var n_28976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894_28975,(0),null);
var meth_28977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28894_28975,(1),null);
var c_28978 = cljs.core.count(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(meth_28977));
if(cljs.core.truth_(cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(meth_28977))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_28896,".cljs$core$IFn$_invoke$arity$variadic = ",n_28976,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_28896,".cljs$core$IFn$_invoke$arity$",c_28978," = ",n_28976,";"], 0));
}

var G__28979 = cljs.core.next(seq__28889_28969__$1);
var G__28980 = null;
var G__28981 = (0);
var G__28982 = (0);
seq__28889_28956 = G__28979;
chunk__28890_28957 = G__28980;
count__28891_28958 = G__28981;
i__28892_28959 = G__28982;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_28896,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$do,(function (p__28983){
var map__28984 = p__28983;
var map__28984__$1 = ((((!((map__28984 == null)))?((((map__28984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28984):map__28984);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28984__$1,cljs.core.constant$keyword$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28984__$1,cljs.core.constant$keyword$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28984__$1,cljs.core.constant$keyword$env);
var context = cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__16470__auto__ = statements;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,context);
} else {
return and__16470__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__28986_28990 = cljs.core.seq(statements);
var chunk__28987_28991 = null;
var count__28988_28992 = (0);
var i__28989_28993 = (0);
while(true){
if((i__28989_28993 < count__28988_28992)){
var s_28994 = chunk__28987_28991.cljs$core$IIndexed$_nth$arity$2(null,i__28989_28993);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_28994], 0));

var G__28995 = seq__28986_28990;
var G__28996 = chunk__28987_28991;
var G__28997 = count__28988_28992;
var G__28998 = (i__28989_28993 + (1));
seq__28986_28990 = G__28995;
chunk__28987_28991 = G__28996;
count__28988_28992 = G__28997;
i__28989_28993 = G__28998;
continue;
} else {
var temp__4425__auto___28999 = cljs.core.seq(seq__28986_28990);
if(temp__4425__auto___28999){
var seq__28986_29000__$1 = temp__4425__auto___28999;
if(cljs.core.chunked_seq_QMARK_(seq__28986_29000__$1)){
var c__17266__auto___29001 = cljs.core.chunk_first(seq__28986_29000__$1);
var G__29002 = cljs.core.chunk_rest(seq__28986_29000__$1);
var G__29003 = c__17266__auto___29001;
var G__29004 = cljs.core.count(c__17266__auto___29001);
var G__29005 = (0);
seq__28986_28990 = G__29002;
chunk__28987_28991 = G__29003;
count__28988_28992 = G__29004;
i__28989_28993 = G__29005;
continue;
} else {
var s_29006 = cljs.core.first(seq__28986_29000__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_29006], 0));

var G__29007 = cljs.core.next(seq__28986_29000__$1);
var G__29008 = null;
var G__29009 = (0);
var G__29010 = (0);
seq__28986_28990 = G__29007;
chunk__28987_28991 = G__29008;
count__28988_28992 = G__29009;
i__28989_28993 = G__29010;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__16470__auto__ = statements;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,context);
} else {
return and__16470__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$try,(function (p__29011){
var map__29012 = p__29011;
var map__29012__$1 = ((((!((map__29012 == null)))?((((map__29012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29012):map__29012);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29012__$1,cljs.core.constant$keyword$env);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29012__$1,cljs.core.constant$keyword$try);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29012__$1,cljs.core.constant$keyword$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29012__$1,cljs.core.constant$keyword$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29012__$1,cljs.core.constant$keyword$finally);
var context = cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$constant,cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.constant$keyword$constant,cljs.core.list(cljs.core.constant$keyword$op,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))], 0)))].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__29014,is_loop){
var map__29026 = p__29014;
var map__29026__$1 = ((((!((map__29026 == null)))?((((map__29026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29026):map__29026);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29026__$1,cljs.core.constant$keyword$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29026__$1,cljs.core.constant$keyword$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29026__$1,cljs.core.constant$keyword$env);
var context = cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_29028_29037 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_29028_29037,context,map__29026,map__29026__$1,bindings,expr,env){
return (function (binding){
var name = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core._hash(name),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_29028_29037,context,map__29026,map__29026__$1,bindings,expr,env))
,bindings):null));

try{var seq__29029_29038 = cljs.core.seq(bindings);
var chunk__29030_29039 = null;
var count__29031_29040 = (0);
var i__29032_29041 = (0);
while(true){
if((i__29032_29041 < count__29031_29040)){
var map__29033_29042 = chunk__29030_29039.cljs$core$IIndexed$_nth$arity$2(null,i__29032_29041);
var map__29033_29043__$1 = ((((!((map__29033_29042 == null)))?((((map__29033_29042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29033_29042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29033_29042):map__29033_29042);
var binding_29044 = map__29033_29043__$1;
var init_29045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29033_29043__$1,cljs.core.constant$keyword$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_29044);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_29045,";"], 0));

var G__29046 = seq__29029_29038;
var G__29047 = chunk__29030_29039;
var G__29048 = count__29031_29040;
var G__29049 = (i__29032_29041 + (1));
seq__29029_29038 = G__29046;
chunk__29030_29039 = G__29047;
count__29031_29040 = G__29048;
i__29032_29041 = G__29049;
continue;
} else {
var temp__4425__auto___29050 = cljs.core.seq(seq__29029_29038);
if(temp__4425__auto___29050){
var seq__29029_29051__$1 = temp__4425__auto___29050;
if(cljs.core.chunked_seq_QMARK_(seq__29029_29051__$1)){
var c__17266__auto___29052 = cljs.core.chunk_first(seq__29029_29051__$1);
var G__29053 = cljs.core.chunk_rest(seq__29029_29051__$1);
var G__29054 = c__17266__auto___29052;
var G__29055 = cljs.core.count(c__17266__auto___29052);
var G__29056 = (0);
seq__29029_29038 = G__29053;
chunk__29030_29039 = G__29054;
count__29031_29040 = G__29055;
i__29032_29041 = G__29056;
continue;
} else {
var map__29035_29057 = cljs.core.first(seq__29029_29051__$1);
var map__29035_29058__$1 = ((((!((map__29035_29057 == null)))?((((map__29035_29057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29035_29057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29035_29057):map__29035_29057);
var binding_29059 = map__29035_29058__$1;
var init_29060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29035_29058__$1,cljs.core.constant$keyword$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_29059);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_29060,";"], 0));

var G__29061 = cljs.core.next(seq__29029_29051__$1);
var G__29062 = null;
var G__29063 = (0);
var G__29064 = (0);
seq__29029_29038 = G__29061;
chunk__29030_29039 = G__29062;
count__29031_29040 = G__29063;
i__29032_29041 = G__29064;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_29028_29037;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$recur,(function (p__29065){
var map__29066 = p__29065;
var map__29066__$1 = ((((!((map__29066 == null)))?((((map__29066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29066):map__29066);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29066__$1,cljs.core.constant$keyword$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29066__$1,cljs.core.constant$keyword$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29066__$1,cljs.core.constant$keyword$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__17366__auto___29068 = cljs.core.count(exprs);
var i_29069 = (0);
while(true){
if((i_29069 < n__17366__auto___29068)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_29069) : temps.call(null,i_29069))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_29069) : exprs.call(null,i_29069)),";"], 0));

var G__29070 = (i_29069 + (1));
i_29069 = G__29070;
continue;
} else {
}
break;
}

var n__17366__auto___29071 = cljs.core.count(exprs);
var i_29072 = (0);
while(true){
if((i_29072 < n__17366__auto___29071)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_29072) : params.call(null,i_29072)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_29072) : temps.call(null,i_29072)),";"], 0));

var G__29073 = (i_29072 + (1));
i_29072 = G__29073;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$letfn,(function (p__29074){
var map__29075 = p__29074;
var map__29075__$1 = ((((!((map__29075 == null)))?((((map__29075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29075):map__29075);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29075__$1,cljs.core.constant$keyword$bindings);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29075__$1,cljs.core.constant$keyword$expr);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29075__$1,cljs.core.constant$keyword$env);
var context = cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__29077_29085 = cljs.core.seq(bindings);
var chunk__29078_29086 = null;
var count__29079_29087 = (0);
var i__29080_29088 = (0);
while(true){
if((i__29080_29088 < count__29079_29087)){
var map__29081_29089 = chunk__29078_29086.cljs$core$IIndexed$_nth$arity$2(null,i__29080_29088);
var map__29081_29090__$1 = ((((!((map__29081_29089 == null)))?((((map__29081_29089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29081_29089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29081_29089):map__29081_29089);
var binding_29091 = map__29081_29090__$1;
var init_29092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29081_29090__$1,cljs.core.constant$keyword$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_29091)," = ",init_29092,";"], 0));

var G__29093 = seq__29077_29085;
var G__29094 = chunk__29078_29086;
var G__29095 = count__29079_29087;
var G__29096 = (i__29080_29088 + (1));
seq__29077_29085 = G__29093;
chunk__29078_29086 = G__29094;
count__29079_29087 = G__29095;
i__29080_29088 = G__29096;
continue;
} else {
var temp__4425__auto___29097 = cljs.core.seq(seq__29077_29085);
if(temp__4425__auto___29097){
var seq__29077_29098__$1 = temp__4425__auto___29097;
if(cljs.core.chunked_seq_QMARK_(seq__29077_29098__$1)){
var c__17266__auto___29099 = cljs.core.chunk_first(seq__29077_29098__$1);
var G__29100 = cljs.core.chunk_rest(seq__29077_29098__$1);
var G__29101 = c__17266__auto___29099;
var G__29102 = cljs.core.count(c__17266__auto___29099);
var G__29103 = (0);
seq__29077_29085 = G__29100;
chunk__29078_29086 = G__29101;
count__29079_29087 = G__29102;
i__29080_29088 = G__29103;
continue;
} else {
var map__29083_29104 = cljs.core.first(seq__29077_29098__$1);
var map__29083_29105__$1 = ((((!((map__29083_29104 == null)))?((((map__29083_29104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29083_29104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29083_29104):map__29083_29104);
var binding_29106 = map__29083_29105__$1;
var init_29107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29083_29105__$1,cljs.core.constant$keyword$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_29106)," = ",init_29107,";"], 0));

var G__29108 = cljs.core.next(seq__29077_29098__$1);
var G__29109 = null;
var G__29110 = (0);
var G__29111 = (0);
seq__29077_29085 = G__29108;
chunk__29078_29086 = G__29109;
count__29079_29087 = G__29110;
i__29080_29088 = G__29111;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str([cljs.core.str(psym)].join('').replace(".","$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$invoke,(function (p__29114){
var map__29115 = p__29114;
var map__29115__$1 = ((((!((map__29115 == null)))?((((map__29115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29115):map__29115);
var expr = map__29115__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29115__$1,cljs.core.constant$keyword$f);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29115__$1,cljs.core.constant$keyword$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29115__$1,cljs.core.constant$keyword$env);
var info = cljs.core.constant$keyword$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__16470__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = cljs.core.not(cljs.core.constant$keyword$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__16470__auto____$1){
return cljs.core.constant$keyword$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})();
var protocol = cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.constant$keyword$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__16470__auto__ = protocol;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = tag;
if(cljs.core.truth_(and__16470__auto____$1)){
var or__16482__auto__ = (function (){var and__16470__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16470__auto____$2)){
var and__16470__auto____$3 = protocol;
if(cljs.core.truth_(and__16470__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__16470__auto____$3;
}
} else {
return and__16470__auto____$2;
}
})();
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var and__16470__auto____$2 = (function (){var or__16482__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__16482__auto____$1)){
return or__16482__auto____$1;
} else {
return cljs.core.constant$keyword$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__16470__auto____$2)){
var or__16482__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__16482__auto____$1){
return or__16482__auto____$1;
} else {
var and__16470__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__16470__auto____$3){
var and__16470__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__16470__auto____$4){
var temp__4425__auto__ = cljs.core.constant$keyword$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.constant$keyword$locals),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__16470__auto____$4;
}
} else {
return and__16470__auto____$3;
}
}
} else {
return and__16470__auto____$2;
}
}
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.constant$keyword$args.cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__16482__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__16482__auto__){
return or__16482__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(f),cljs.core.constant$keyword$constant)) && ((cljs.core.constant$keyword$form.cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__29117 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.constant$keyword$variadic.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.constant$keyword$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.constant$keyword$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__16470__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__16470__auto__)){
return (arity > mfa);
} else {
return and__16470__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29115,map__29115__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.constant$keyword$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29115,map__29115__$1,expr,f,args,env){
return (function (p1__29112_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29112_SHARP_,cljs.core.constant$keyword$shadow),cljs.core.constant$keyword$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29115,map__29115__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29115,map__29115__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29115,map__29115__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.constant$keyword$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29115,map__29115__$1,expr,f,args,env){
return (function (p1__29113_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29113_SHARP_,cljs.core.constant$keyword$shadow),cljs.core.constant$keyword$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29115,map__29115__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29115,map__29115__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29117,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29117,(1),null);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_29118 = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_29118,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_29119 = cljs.core.constant$keyword$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_29119,args)),(((mfa_29119 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_29119,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__16482__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var or__16482__auto____$1 = js_QMARK_;
if(or__16482__auto____$1){
return or__16482__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.constant$keyword$var);
} else {
return and__16470__auto__;
}
})())){
var fprop_29120 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_29120," ? ",f__$1,fprop_29120,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$new,(function (p__29121){
var map__29122 = p__29121;
var map__29122__$1 = ((((!((map__29122 == null)))?((((map__29122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29122):map__29122);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29122__$1,cljs.core.constant$keyword$ctor);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29122__$1,cljs.core.constant$keyword$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29122__$1,cljs.core.constant$keyword$env);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$set_BANG_,(function (p__29124){
var map__29125 = p__29124;
var map__29125__$1 = ((((!((map__29125 == null)))?((((map__29125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29125):map__29125);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29125__$1,cljs.core.constant$keyword$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29125__$1,cljs.core.constant$keyword$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29125__$1,cljs.core.constant$keyword$env);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(cljs.core.constant$keyword$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.set();"], 0));
} else {
}

var seq__29131_29135 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(libs))));
var chunk__29132_29136 = null;
var count__29133_29137 = (0);
var i__29134_29138 = (0);
while(true){
if((i__29134_29138 < count__29133_29137)){
var lib_29139 = chunk__29132_29136.cljs$core$IIndexed$_nth$arity$2(null,i__29134_29138);
if(cljs.core.truth_((function (){var or__16482__auto__ = cljs.core.constant$keyword$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_29139),cljs.core.constant$keyword$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29139),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__16482__auto__ = cljs.core.constant$keyword$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_29139),cljs.core.constant$keyword$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29139),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29139),"');"], 0));

}
}

var G__29140 = seq__29131_29135;
var G__29141 = chunk__29132_29136;
var G__29142 = count__29133_29137;
var G__29143 = (i__29134_29138 + (1));
seq__29131_29135 = G__29140;
chunk__29132_29136 = G__29141;
count__29133_29137 = G__29142;
i__29134_29138 = G__29143;
continue;
} else {
var temp__4425__auto___29144 = cljs.core.seq(seq__29131_29135);
if(temp__4425__auto___29144){
var seq__29131_29145__$1 = temp__4425__auto___29144;
if(cljs.core.chunked_seq_QMARK_(seq__29131_29145__$1)){
var c__17266__auto___29146 = cljs.core.chunk_first(seq__29131_29145__$1);
var G__29147 = cljs.core.chunk_rest(seq__29131_29145__$1);
var G__29148 = c__17266__auto___29146;
var G__29149 = cljs.core.count(c__17266__auto___29146);
var G__29150 = (0);
seq__29131_29135 = G__29147;
chunk__29132_29136 = G__29148;
count__29133_29137 = G__29149;
i__29134_29138 = G__29150;
continue;
} else {
var lib_29151 = cljs.core.first(seq__29131_29145__$1);
if(cljs.core.truth_((function (){var or__16482__auto__ = cljs.core.constant$keyword$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_29151),cljs.core.constant$keyword$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29151),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__16482__auto__ = cljs.core.constant$keyword$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_29151),cljs.core.constant$keyword$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29151),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_29151),"');"], 0));

}
}

var G__29152 = cljs.core.next(seq__29131_29145__$1);
var G__29153 = null;
var G__29154 = (0);
var G__29155 = (0);
seq__29131_29135 = G__29152;
chunk__29132_29136 = G__29153;
count__29133_29137 = G__29154;
i__29134_29138 = G__29155;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.constant$keyword$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$ns,(function (p__29156){
var map__29157 = p__29156;
var map__29157__$1 = ((((!((map__29157 == null)))?((((map__29157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29157):map__29157);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29157__$1,cljs.core.constant$keyword$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29157__$1,cljs.core.constant$keyword$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29157__$1,cljs.core.constant$keyword$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29157__$1,cljs.core.constant$keyword$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29157__$1,cljs.core.constant$keyword$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29157__$1,cljs.core.constant$keyword$env);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));
}

cljs.compiler.load_libs(requires,null,cljs.core.constant$keyword$require.cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs(uses,requires,cljs.core.constant$keyword$use.cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$deftype_STAR_,(function (p__29159){
var map__29160 = p__29159;
var map__29160__$1 = ((((!((map__29160 == null)))?((((map__29160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29160):map__29160);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29160__$1,cljs.core.constant$keyword$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29160__$1,cljs.core.constant$keyword$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29160__$1,cljs.core.constant$keyword$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29160__$1,cljs.core.constant$keyword$body);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__29162_29172 = cljs.core.seq(fields__$1);
var chunk__29163_29173 = null;
var count__29164_29174 = (0);
var i__29165_29175 = (0);
while(true){
if((i__29165_29175 < count__29164_29174)){
var fld_29176 = chunk__29163_29173.cljs$core$IIndexed$_nth$arity$2(null,i__29165_29175);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_29176," = ",fld_29176,";"], 0));

var G__29177 = seq__29162_29172;
var G__29178 = chunk__29163_29173;
var G__29179 = count__29164_29174;
var G__29180 = (i__29165_29175 + (1));
seq__29162_29172 = G__29177;
chunk__29163_29173 = G__29178;
count__29164_29174 = G__29179;
i__29165_29175 = G__29180;
continue;
} else {
var temp__4425__auto___29181 = cljs.core.seq(seq__29162_29172);
if(temp__4425__auto___29181){
var seq__29162_29182__$1 = temp__4425__auto___29181;
if(cljs.core.chunked_seq_QMARK_(seq__29162_29182__$1)){
var c__17266__auto___29183 = cljs.core.chunk_first(seq__29162_29182__$1);
var G__29184 = cljs.core.chunk_rest(seq__29162_29182__$1);
var G__29185 = c__17266__auto___29183;
var G__29186 = cljs.core.count(c__17266__auto___29183);
var G__29187 = (0);
seq__29162_29172 = G__29184;
chunk__29163_29173 = G__29185;
count__29164_29174 = G__29186;
i__29165_29175 = G__29187;
continue;
} else {
var fld_29188 = cljs.core.first(seq__29162_29182__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_29188," = ",fld_29188,";"], 0));

var G__29189 = cljs.core.next(seq__29162_29182__$1);
var G__29190 = null;
var G__29191 = (0);
var G__29192 = (0);
seq__29162_29172 = G__29189;
chunk__29163_29173 = G__29190;
count__29164_29174 = G__29191;
i__29165_29175 = G__29192;
continue;
}
} else {
}
}
break;
}

var seq__29166_29193 = cljs.core.seq(pmasks);
var chunk__29167_29194 = null;
var count__29168_29195 = (0);
var i__29169_29196 = (0);
while(true){
if((i__29169_29196 < count__29168_29195)){
var vec__29170_29197 = chunk__29167_29194.cljs$core$IIndexed$_nth$arity$2(null,i__29169_29196);
var pno_29198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29170_29197,(0),null);
var pmask_29199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29170_29197,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_29198,"$ = ",pmask_29199,";"], 0));

var G__29200 = seq__29166_29193;
var G__29201 = chunk__29167_29194;
var G__29202 = count__29168_29195;
var G__29203 = (i__29169_29196 + (1));
seq__29166_29193 = G__29200;
chunk__29167_29194 = G__29201;
count__29168_29195 = G__29202;
i__29169_29196 = G__29203;
continue;
} else {
var temp__4425__auto___29204 = cljs.core.seq(seq__29166_29193);
if(temp__4425__auto___29204){
var seq__29166_29205__$1 = temp__4425__auto___29204;
if(cljs.core.chunked_seq_QMARK_(seq__29166_29205__$1)){
var c__17266__auto___29206 = cljs.core.chunk_first(seq__29166_29205__$1);
var G__29207 = cljs.core.chunk_rest(seq__29166_29205__$1);
var G__29208 = c__17266__auto___29206;
var G__29209 = cljs.core.count(c__17266__auto___29206);
var G__29210 = (0);
seq__29166_29193 = G__29207;
chunk__29167_29194 = G__29208;
count__29168_29195 = G__29209;
i__29169_29196 = G__29210;
continue;
} else {
var vec__29171_29211 = cljs.core.first(seq__29166_29205__$1);
var pno_29212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29171_29211,(0),null);
var pmask_29213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29171_29211,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_29212,"$ = ",pmask_29213,";"], 0));

var G__29214 = cljs.core.next(seq__29166_29205__$1);
var G__29215 = null;
var G__29216 = (0);
var G__29217 = (0);
seq__29166_29193 = G__29214;
chunk__29167_29194 = G__29215;
count__29168_29195 = G__29216;
i__29169_29196 = G__29217;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$defrecord_STAR_,(function (p__29218){
var map__29219 = p__29218;
var map__29219__$1 = ((((!((map__29219 == null)))?((((map__29219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29219):map__29219);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29219__$1,cljs.core.constant$keyword$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29219__$1,cljs.core.constant$keyword$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29219__$1,cljs.core.constant$keyword$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29219__$1,cljs.core.constant$keyword$body);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__29221_29235 = cljs.core.seq(fields__$1);
var chunk__29222_29236 = null;
var count__29223_29237 = (0);
var i__29224_29238 = (0);
while(true){
if((i__29224_29238 < count__29223_29237)){
var fld_29239 = chunk__29222_29236.cljs$core$IIndexed$_nth$arity$2(null,i__29224_29238);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_29239], 0));

var G__29240 = seq__29221_29235;
var G__29241 = chunk__29222_29236;
var G__29242 = count__29223_29237;
var G__29243 = (i__29224_29238 + (1));
seq__29221_29235 = G__29240;
chunk__29222_29236 = G__29241;
count__29223_29237 = G__29242;
i__29224_29238 = G__29243;
continue;
} else {
var temp__4425__auto___29244 = cljs.core.seq(seq__29221_29235);
if(temp__4425__auto___29244){
var seq__29221_29245__$1 = temp__4425__auto___29244;
if(cljs.core.chunked_seq_QMARK_(seq__29221_29245__$1)){
var c__17266__auto___29246 = cljs.core.chunk_first(seq__29221_29245__$1);
var G__29247 = cljs.core.chunk_rest(seq__29221_29245__$1);
var G__29248 = c__17266__auto___29246;
var G__29249 = cljs.core.count(c__17266__auto___29246);
var G__29250 = (0);
seq__29221_29235 = G__29247;
chunk__29222_29236 = G__29248;
count__29223_29237 = G__29249;
i__29224_29238 = G__29250;
continue;
} else {
var fld_29251 = cljs.core.first(seq__29221_29245__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_29251], 0));

var G__29252 = cljs.core.next(seq__29221_29245__$1);
var G__29253 = null;
var G__29254 = (0);
var G__29255 = (0);
seq__29221_29235 = G__29252;
chunk__29222_29236 = G__29253;
count__29223_29237 = G__29254;
i__29224_29238 = G__29255;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*=} __meta "], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*=} __extmap"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {number|null} __hash"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__29225_29256 = cljs.core.seq(fields__$1);
var chunk__29226_29257 = null;
var count__29227_29258 = (0);
var i__29228_29259 = (0);
while(true){
if((i__29228_29259 < count__29227_29258)){
var fld_29260 = chunk__29226_29257.cljs$core$IIndexed$_nth$arity$2(null,i__29228_29259);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_29260," = ",fld_29260,";"], 0));

var G__29261 = seq__29225_29256;
var G__29262 = chunk__29226_29257;
var G__29263 = count__29227_29258;
var G__29264 = (i__29228_29259 + (1));
seq__29225_29256 = G__29261;
chunk__29226_29257 = G__29262;
count__29227_29258 = G__29263;
i__29228_29259 = G__29264;
continue;
} else {
var temp__4425__auto___29265 = cljs.core.seq(seq__29225_29256);
if(temp__4425__auto___29265){
var seq__29225_29266__$1 = temp__4425__auto___29265;
if(cljs.core.chunked_seq_QMARK_(seq__29225_29266__$1)){
var c__17266__auto___29267 = cljs.core.chunk_first(seq__29225_29266__$1);
var G__29268 = cljs.core.chunk_rest(seq__29225_29266__$1);
var G__29269 = c__17266__auto___29267;
var G__29270 = cljs.core.count(c__17266__auto___29267);
var G__29271 = (0);
seq__29225_29256 = G__29268;
chunk__29226_29257 = G__29269;
count__29227_29258 = G__29270;
i__29228_29259 = G__29271;
continue;
} else {
var fld_29272 = cljs.core.first(seq__29225_29266__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_29272," = ",fld_29272,";"], 0));

var G__29273 = cljs.core.next(seq__29225_29266__$1);
var G__29274 = null;
var G__29275 = (0);
var G__29276 = (0);
seq__29225_29256 = G__29273;
chunk__29226_29257 = G__29274;
count__29227_29258 = G__29275;
i__29228_29259 = G__29276;
continue;
}
} else {
}
}
break;
}

var seq__29229_29277 = cljs.core.seq(pmasks);
var chunk__29230_29278 = null;
var count__29231_29279 = (0);
var i__29232_29280 = (0);
while(true){
if((i__29232_29280 < count__29231_29279)){
var vec__29233_29281 = chunk__29230_29278.cljs$core$IIndexed$_nth$arity$2(null,i__29232_29280);
var pno_29282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29233_29281,(0),null);
var pmask_29283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29233_29281,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_29282,"$ = ",pmask_29283,";"], 0));

var G__29284 = seq__29229_29277;
var G__29285 = chunk__29230_29278;
var G__29286 = count__29231_29279;
var G__29287 = (i__29232_29280 + (1));
seq__29229_29277 = G__29284;
chunk__29230_29278 = G__29285;
count__29231_29279 = G__29286;
i__29232_29280 = G__29287;
continue;
} else {
var temp__4425__auto___29288 = cljs.core.seq(seq__29229_29277);
if(temp__4425__auto___29288){
var seq__29229_29289__$1 = temp__4425__auto___29288;
if(cljs.core.chunked_seq_QMARK_(seq__29229_29289__$1)){
var c__17266__auto___29290 = cljs.core.chunk_first(seq__29229_29289__$1);
var G__29291 = cljs.core.chunk_rest(seq__29229_29289__$1);
var G__29292 = c__17266__auto___29290;
var G__29293 = cljs.core.count(c__17266__auto___29290);
var G__29294 = (0);
seq__29229_29277 = G__29291;
chunk__29230_29278 = G__29292;
count__29231_29279 = G__29293;
i__29232_29280 = G__29294;
continue;
} else {
var vec__29234_29295 = cljs.core.first(seq__29229_29289__$1);
var pno_29296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29234_29295,(0),null);
var pmask_29297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29234_29295,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_29296,"$ = ",pmask_29297,";"], 0));

var G__29298 = cljs.core.next(seq__29229_29289__$1);
var G__29299 = null;
var G__29300 = (0);
var G__29301 = (0);
seq__29229_29277 = G__29298;
chunk__29230_29278 = G__29299;
count__29231_29279 = G__29300;
i__29232_29280 = G__29301;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$dot,(function (p__29302){
var map__29303 = p__29302;
var map__29303__$1 = ((((!((map__29303 == null)))?((((map__29303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29303):map__29303);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29303__$1,cljs.core.constant$keyword$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29303__$1,cljs.core.constant$keyword$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29303__$1,cljs.core.constant$keyword$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29303__$1,cljs.core.constant$keyword$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29303__$1,cljs.core.constant$keyword$env);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$js,(function (p__29305){
var map__29306 = p__29305;
var map__29306__$1 = ((((!((map__29306 == null)))?((((map__29306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29306):map__29306);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29306__$1,cljs.core.constant$keyword$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29306__$1,cljs.core.constant$keyword$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29306__$1,cljs.core.constant$keyword$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29306__$1,cljs.core.constant$keyword$args);
var env__18807__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$return,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$expr,cljs.core.constant$keyword$context.cljs$core$IFn$_invoke$arity$1(env__18807__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$static_DASH_fns,cljs.core.constant$keyword$optimize_DASH_constants,cljs.core.constant$keyword$elide_DASH_asserts,cljs.core.constant$keyword$target], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__29316 = cljs.core.seq(table);
var chunk__29317 = null;
var count__29318 = (0);
var i__29319 = (0);
while(true){
if((i__29319 < count__29318)){
var vec__29320 = chunk__29317.cljs$core$IIndexed$_nth$arity$2(null,i__29319);
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29320,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29320,(1),null);
var ns_29322 = cljs.core.namespace(keyword);
var name_29323 = cljs.core.name(keyword);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

cljs.compiler.emits_keyword(keyword);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__29324 = seq__29316;
var G__29325 = chunk__29317;
var G__29326 = count__29318;
var G__29327 = (i__29319 + (1));
seq__29316 = G__29324;
chunk__29317 = G__29325;
count__29318 = G__29326;
i__29319 = G__29327;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__29316);
if(temp__4425__auto__){
var seq__29316__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29316__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__29316__$1);
var G__29328 = cljs.core.chunk_rest(seq__29316__$1);
var G__29329 = c__17266__auto__;
var G__29330 = cljs.core.count(c__17266__auto__);
var G__29331 = (0);
seq__29316 = G__29328;
chunk__29317 = G__29329;
count__29318 = G__29330;
i__29319 = G__29331;
continue;
} else {
var vec__29321 = cljs.core.first(seq__29316__$1);
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29321,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29321,(1),null);
var ns_29332 = cljs.core.namespace(keyword);
var name_29333 = cljs.core.name(keyword);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

cljs.compiler.emits_keyword(keyword);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__29334 = cljs.core.next(seq__29316__$1);
var G__29335 = null;
var G__29336 = (0);
var G__29337 = (0);
seq__29316 = G__29334;
chunk__29317 = G__29335;
count__29318 = G__29336;
i__29319 = G__29337;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1440458059042