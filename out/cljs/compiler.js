// Compiled by ClojureScript 1.7.28 {}
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
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__28394 = s;
var map__28394__$1 = ((((!((map__28394 == null)))?((((map__28394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28394):map__28394);
var name = cljs.core.get.call(null,map__28394__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28394__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__28397 = info;
var map__28398 = G__28397;
var map__28398__$1 = ((((!((map__28398 == null)))?((((map__28398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28398):map__28398);
var shadow = cljs.core.get.call(null,map__28398__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__28397__$1 = G__28397;
while(true){
var d__$2 = d__$1;
var map__28400 = G__28397__$1;
var map__28400__$1 = ((((!((map__28400 == null)))?((((map__28400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28400):map__28400);
var shadow__$1 = cljs.core.get.call(null,map__28400__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__28402 = (d__$2 + (1));
var G__28403 = shadow__$1;
d__$1 = G__28402;
G__28397__$1 = G__28403;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__28404){
var map__28409 = p__28404;
var map__28409__$1 = ((((!((map__28409 == null)))?((((map__28409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28409):map__28409);
var name_var = map__28409__$1;
var name = cljs.core.get.call(null,map__28409__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__28409__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__28411 = info;
var map__28411__$1 = ((((!((map__28411 == null)))?((((map__28411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28411):map__28411);
var ns = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(){
var args28413 = [];
var len__17521__auto___28416 = arguments.length;
var i__17522__auto___28417 = (0);
while(true){
if((i__17522__auto___28417 < len__17521__auto___28416)){
args28413.push((arguments[i__17522__auto___28417]));

var G__28418 = (i__17522__auto___28417 + (1));
i__17522__auto___28417 = G__28418;
continue;
} else {
}
break;
}

var G__28415 = args28413.length;
switch (G__28415) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28413.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.core._hash.call(null,name);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__28421 = cp;
switch (G__28421) {
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
var seq__28427_28431 = cljs.core.seq.call(null,s);
var chunk__28428_28432 = null;
var count__28429_28433 = (0);
var i__28430_28434 = (0);
while(true){
if((i__28430_28434 < count__28429_28433)){
var c_28435 = cljs.core._nth.call(null,chunk__28428_28432,i__28430_28434);
sb.append(cljs.compiler.escape_char.call(null,c_28435));

var G__28436 = seq__28427_28431;
var G__28437 = chunk__28428_28432;
var G__28438 = count__28429_28433;
var G__28439 = (i__28430_28434 + (1));
seq__28427_28431 = G__28436;
chunk__28428_28432 = G__28437;
count__28429_28433 = G__28438;
i__28430_28434 = G__28439;
continue;
} else {
var temp__4425__auto___28440 = cljs.core.seq.call(null,seq__28427_28431);
if(temp__4425__auto___28440){
var seq__28427_28441__$1 = temp__4425__auto___28440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28427_28441__$1)){
var c__17266__auto___28442 = cljs.core.chunk_first.call(null,seq__28427_28441__$1);
var G__28443 = cljs.core.chunk_rest.call(null,seq__28427_28441__$1);
var G__28444 = c__17266__auto___28442;
var G__28445 = cljs.core.count.call(null,c__17266__auto___28442);
var G__28446 = (0);
seq__28427_28431 = G__28443;
chunk__28428_28432 = G__28444;
count__28429_28433 = G__28445;
i__28430_28434 = G__28446;
continue;
} else {
var c_28447 = cljs.core.first.call(null,seq__28427_28441__$1);
sb.append(cljs.compiler.escape_char.call(null,c_28447));

var G__28448 = cljs.core.next.call(null,seq__28427_28441__$1);
var G__28449 = null;
var G__28450 = (0);
var G__28451 = (0);
seq__28427_28431 = G__28448;
chunk__28428_28432 = G__28449;
count__28429_28433 = G__28450;
i__28430_28434 = G__28451;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__17376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17377__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17380__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__18937__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__18937__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__28457_28462 = ast;
var map__28457_28463__$1 = ((((!((map__28457_28462 == null)))?((((map__28457_28462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28457_28462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28457_28462):map__28457_28462);
var env_28464 = cljs.core.get.call(null,map__28457_28463__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_28464))){
var map__28459_28465 = env_28464;
var map__28459_28466__$1 = ((((!((map__28459_28465 == null)))?((((map__28459_28465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28459_28465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28459_28465):map__28459_28465);
var line_28467 = cljs.core.get.call(null,map__28459_28466__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_28468 = cljs.core.get.call(null,map__28459_28466__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__28459_28465,map__28459_28466__$1,line_28467,column_28468,map__28457_28462,map__28457_28463__$1,env_28464,val__18937__auto__){
return (function (m){
var minfo = (function (){var G__28461 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__28461__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__28461,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__28461);
return G__28461__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_28467 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__28459_28465,map__28459_28466__$1,line_28467,column_28468,map__28457_28462,map__28457_28463__$1,env_28464,val__18937__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_28468)?(column_28468 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__28459_28465,map__28459_28466__$1,line_28467,column_28468,map__28457_28462,map__28457_28463__$1,env_28464,val__18937__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__28459_28465,map__28459_28466__$1,line_28467,column_28468,map__28457_28462,map__28457_28463__$1,env_28464,val__18937__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__28459_28465,map__28459_28466__$1,line_28467,column_28468,map__28457_28462,map__28457_28463__$1,env_28464,val__18937__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__28459_28465,map__28459_28466__$1,line_28467,column_28468,map__28457_28462,map__28457_28463__$1,env_28464,val__18937__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__18937__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(){
var args__17528__auto__ = [];
var len__17521__auto___28475 = arguments.length;
var i__17522__auto___28476 = (0);
while(true){
if((i__17522__auto___28476 < len__17521__auto___28475)){
args__17528__auto__.push((arguments[i__17522__auto___28476]));

var G__28477 = (i__17522__auto___28476 + (1));
i__17522__auto___28476 = G__28477;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__28471_28478 = cljs.core.seq.call(null,xs);
var chunk__28472_28479 = null;
var count__28473_28480 = (0);
var i__28474_28481 = (0);
while(true){
if((i__28474_28481 < count__28473_28480)){
var x_28482 = cljs.core._nth.call(null,chunk__28472_28479,i__28474_28481);
if((x_28482 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28482)){
cljs.compiler.emit.call(null,x_28482);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28482)){
cljs.core.apply.call(null,cljs.compiler.emits,x_28482);
} else {
if(goog.isFunction(x_28482)){
x_28482.call(null);
} else {
var s_28483 = cljs.core.print_str.call(null,x_28482);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28471_28478,chunk__28472_28479,count__28473_28480,i__28474_28481,s_28483,x_28482){
return (function (p1__28469_SHARP_){
return (p1__28469_SHARP_ + cljs.core.count.call(null,s_28483));
});})(seq__28471_28478,chunk__28472_28479,count__28473_28480,i__28474_28481,s_28483,x_28482))
);
}

cljs.core.print.call(null,s_28483);

}
}
}
}

var G__28484 = seq__28471_28478;
var G__28485 = chunk__28472_28479;
var G__28486 = count__28473_28480;
var G__28487 = (i__28474_28481 + (1));
seq__28471_28478 = G__28484;
chunk__28472_28479 = G__28485;
count__28473_28480 = G__28486;
i__28474_28481 = G__28487;
continue;
} else {
var temp__4425__auto___28488 = cljs.core.seq.call(null,seq__28471_28478);
if(temp__4425__auto___28488){
var seq__28471_28489__$1 = temp__4425__auto___28488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28471_28489__$1)){
var c__17266__auto___28490 = cljs.core.chunk_first.call(null,seq__28471_28489__$1);
var G__28491 = cljs.core.chunk_rest.call(null,seq__28471_28489__$1);
var G__28492 = c__17266__auto___28490;
var G__28493 = cljs.core.count.call(null,c__17266__auto___28490);
var G__28494 = (0);
seq__28471_28478 = G__28491;
chunk__28472_28479 = G__28492;
count__28473_28480 = G__28493;
i__28474_28481 = G__28494;
continue;
} else {
var x_28495 = cljs.core.first.call(null,seq__28471_28489__$1);
if((x_28495 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_28495)){
cljs.compiler.emit.call(null,x_28495);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_28495)){
cljs.core.apply.call(null,cljs.compiler.emits,x_28495);
} else {
if(goog.isFunction(x_28495)){
x_28495.call(null);
} else {
var s_28496 = cljs.core.print_str.call(null,x_28495);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__28471_28478,chunk__28472_28479,count__28473_28480,i__28474_28481,s_28496,x_28495,seq__28471_28489__$1,temp__4425__auto___28488){
return (function (p1__28469_SHARP_){
return (p1__28469_SHARP_ + cljs.core.count.call(null,s_28496));
});})(seq__28471_28478,chunk__28472_28479,count__28473_28480,i__28474_28481,s_28496,x_28495,seq__28471_28489__$1,temp__4425__auto___28488))
);
}

cljs.core.print.call(null,s_28496);

}
}
}
}

var G__28497 = cljs.core.next.call(null,seq__28471_28489__$1);
var G__28498 = null;
var G__28499 = (0);
var G__28500 = (0);
seq__28471_28478 = G__28497;
chunk__28472_28479 = G__28498;
count__28473_28480 = G__28499;
i__28474_28481 = G__28500;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq28470){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28470));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(){
var args__17528__auto__ = [];
var len__17521__auto___28505 = arguments.length;
var i__17522__auto___28506 = (0);
while(true){
if((i__17522__auto___28506 < len__17521__auto___28505)){
args__17528__auto__.push((arguments[i__17522__auto___28506]));

var G__28507 = (i__17522__auto___28506 + (1));
i__17522__auto___28506 = G__28507;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__28502){
var map__28503 = p__28502;
var map__28503__$1 = ((((!((map__28503 == null)))?((((map__28503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28503):map__28503);
var m = map__28503__$1;
var gen_line = cljs.core.get.call(null,map__28503__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq28501){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28501));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__17437__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28510_28512 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28511_28513 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28510_28512,_STAR_print_fn_STAR_28511_28513,sb__17437__auto__){
return (function (x__17438__auto__){
return sb__17437__auto__.append(x__17438__auto__);
});})(_STAR_print_newline_STAR_28510_28512,_STAR_print_fn_STAR_28511_28513,sb__17437__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28511_28513;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28510_28512;
}
return [cljs.core.str(sb__17437__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__17376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17377__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17378__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17379__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17380__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,x);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__28514 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__28514,(0),null);
var flags = cljs.core.nth.call(null,vec__28514,(1),null);
var pattern = cljs.core.nth.call(null,vec__28514,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var ns = cljs.core.namespace.call(null,x);
var name = cljs.core.name.call(null,x);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,x));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid.toString(),"\")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__28516){
var map__28517 = p__28516;
var map__28517__$1 = ((((!((map__28517 == null)))?((((map__28517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28517):map__28517);
var arg = map__28517__$1;
var info = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__16482__auto__ = js_module_name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__28519 = info__$1;
var G__28519__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__28519):G__28519);
return G__28519__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__28520){
var map__28521 = p__28520;
var map__28521__$1 = ((((!((map__28521 == null)))?((((map__28521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28521):map__28521);
var arg = map__28521__$1;
var env = cljs.core.get.call(null,map__28521__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__28521__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__28521__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__28521__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__28523 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__28523__$1 = ((((!((map__28523 == null)))?((((map__28523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28523):map__28523);
var name = cljs.core.get.call(null,map__28523__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__28525){
var map__28526 = p__28525;
var map__28526__$1 = ((((!((map__28526 == null)))?((((map__28526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28526):map__28526);
var expr = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__28528_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28528_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__28529){
var map__28530 = p__28529;
var map__28530__$1 = ((((!((map__28530 == null)))?((((map__28530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28530):map__28530);
var env = cljs.core.get.call(null,map__28530__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__28530__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__28530__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__28532){
var map__28533 = p__28532;
var map__28533__$1 = ((((!((map__28533 == null)))?((((map__28533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28533):map__28533);
var items = cljs.core.get.call(null,map__28533__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28533__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__28535){
var map__28536 = p__28535;
var map__28536__$1 = ((((!((map__28536 == null)))?((((map__28536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28536):map__28536);
var items = cljs.core.get.call(null,map__28536__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28536__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_28538 = cljs.core.count.call(null,items);
if((cnt_28538 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_28538,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__28539_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__28539_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__28540){
var map__28541 = p__28540;
var map__28541__$1 = ((((!((map__28541 == null)))?((((map__28541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28541):map__28541);
var items = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__28541__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__28543){
var map__28544 = p__28543;
var map__28544__$1 = ((((!((map__28544 == null)))?((((map__28544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28544):map__28544);
var items = cljs.core.get.call(null,map__28544__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__28544__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__28544__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___28554 = cljs.core.seq.call(null,items);
if(temp__4425__auto___28554){
var items_28555__$1 = temp__4425__auto___28554;
var vec__28546_28556 = items_28555__$1;
var vec__28547_28557 = cljs.core.nth.call(null,vec__28546_28556,(0),null);
var k_28558 = cljs.core.nth.call(null,vec__28547_28557,(0),null);
var v_28559 = cljs.core.nth.call(null,vec__28547_28557,(1),null);
var r_28560 = cljs.core.nthnext.call(null,vec__28546_28556,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_28558),"\": ",v_28559);

var seq__28548_28561 = cljs.core.seq.call(null,r_28560);
var chunk__28549_28562 = null;
var count__28550_28563 = (0);
var i__28551_28564 = (0);
while(true){
if((i__28551_28564 < count__28550_28563)){
var vec__28552_28565 = cljs.core._nth.call(null,chunk__28549_28562,i__28551_28564);
var k_28566__$1 = cljs.core.nth.call(null,vec__28552_28565,(0),null);
var v_28567__$1 = cljs.core.nth.call(null,vec__28552_28565,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28566__$1),"\": ",v_28567__$1);

var G__28568 = seq__28548_28561;
var G__28569 = chunk__28549_28562;
var G__28570 = count__28550_28563;
var G__28571 = (i__28551_28564 + (1));
seq__28548_28561 = G__28568;
chunk__28549_28562 = G__28569;
count__28550_28563 = G__28570;
i__28551_28564 = G__28571;
continue;
} else {
var temp__4425__auto___28572__$1 = cljs.core.seq.call(null,seq__28548_28561);
if(temp__4425__auto___28572__$1){
var seq__28548_28573__$1 = temp__4425__auto___28572__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28548_28573__$1)){
var c__17266__auto___28574 = cljs.core.chunk_first.call(null,seq__28548_28573__$1);
var G__28575 = cljs.core.chunk_rest.call(null,seq__28548_28573__$1);
var G__28576 = c__17266__auto___28574;
var G__28577 = cljs.core.count.call(null,c__17266__auto___28574);
var G__28578 = (0);
seq__28548_28561 = G__28575;
chunk__28549_28562 = G__28576;
count__28550_28563 = G__28577;
i__28551_28564 = G__28578;
continue;
} else {
var vec__28553_28579 = cljs.core.first.call(null,seq__28548_28573__$1);
var k_28580__$1 = cljs.core.nth.call(null,vec__28553_28579,(0),null);
var v_28581__$1 = cljs.core.nth.call(null,vec__28553_28579,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_28580__$1),"\": ",v_28581__$1);

var G__28582 = cljs.core.next.call(null,seq__28548_28573__$1);
var G__28583 = null;
var G__28584 = (0);
var G__28585 = (0);
seq__28548_28561 = G__28582;
chunk__28549_28562 = G__28583;
count__28550_28563 = G__28584;
i__28551_28564 = G__28585;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__28586){
var map__28587 = p__28586;
var map__28587__$1 = ((((!((map__28587 == null)))?((((map__28587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28587):map__28587);
var form = cljs.core.get.call(null,map__28587__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__28587__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__28589){
var map__28592 = p__28589;
var map__28592__$1 = ((((!((map__28592 == null)))?((((map__28592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28592):map__28592);
var op = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28592__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__16470__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__16470__auto__){
var and__16470__auto____$1 = form;
if(cljs.core.truth_(and__16470__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__28594){
var map__28597 = p__28594;
var map__28597__$1 = ((((!((map__28597 == null)))?((((map__28597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28597):map__28597);
var op = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__16482__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__28599){
var map__28600 = p__28599;
var map__28600__$1 = ((((!((map__28600 == null)))?((((map__28600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28600):map__28600);
var test = cljs.core.get.call(null,map__28600__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__28600__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__28600__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__28600__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__28600__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__16482__auto__ = unchecked;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__28602){
var map__28603 = p__28602;
var map__28603__$1 = ((((!((map__28603 == null)))?((((map__28603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28603):map__28603);
var v = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__28603__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__28605_28619 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__28606_28620 = null;
var count__28607_28621 = (0);
var i__28608_28622 = (0);
while(true){
if((i__28608_28622 < count__28607_28621)){
var vec__28609_28623 = cljs.core._nth.call(null,chunk__28606_28620,i__28608_28622);
var ts_28624 = cljs.core.nth.call(null,vec__28609_28623,(0),null);
var then_28625 = cljs.core.nth.call(null,vec__28609_28623,(1),null);
var seq__28610_28626 = cljs.core.seq.call(null,ts_28624);
var chunk__28611_28627 = null;
var count__28612_28628 = (0);
var i__28613_28629 = (0);
while(true){
if((i__28613_28629 < count__28612_28628)){
var test_28630 = cljs.core._nth.call(null,chunk__28611_28627,i__28613_28629);
cljs.compiler.emitln.call(null,"case ",test_28630,":");

var G__28631 = seq__28610_28626;
var G__28632 = chunk__28611_28627;
var G__28633 = count__28612_28628;
var G__28634 = (i__28613_28629 + (1));
seq__28610_28626 = G__28631;
chunk__28611_28627 = G__28632;
count__28612_28628 = G__28633;
i__28613_28629 = G__28634;
continue;
} else {
var temp__4425__auto___28635 = cljs.core.seq.call(null,seq__28610_28626);
if(temp__4425__auto___28635){
var seq__28610_28636__$1 = temp__4425__auto___28635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28610_28636__$1)){
var c__17266__auto___28637 = cljs.core.chunk_first.call(null,seq__28610_28636__$1);
var G__28638 = cljs.core.chunk_rest.call(null,seq__28610_28636__$1);
var G__28639 = c__17266__auto___28637;
var G__28640 = cljs.core.count.call(null,c__17266__auto___28637);
var G__28641 = (0);
seq__28610_28626 = G__28638;
chunk__28611_28627 = G__28639;
count__28612_28628 = G__28640;
i__28613_28629 = G__28641;
continue;
} else {
var test_28642 = cljs.core.first.call(null,seq__28610_28636__$1);
cljs.compiler.emitln.call(null,"case ",test_28642,":");

var G__28643 = cljs.core.next.call(null,seq__28610_28636__$1);
var G__28644 = null;
var G__28645 = (0);
var G__28646 = (0);
seq__28610_28626 = G__28643;
chunk__28611_28627 = G__28644;
count__28612_28628 = G__28645;
i__28613_28629 = G__28646;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28625);
} else {
cljs.compiler.emitln.call(null,then_28625);
}

cljs.compiler.emitln.call(null,"break;");

var G__28647 = seq__28605_28619;
var G__28648 = chunk__28606_28620;
var G__28649 = count__28607_28621;
var G__28650 = (i__28608_28622 + (1));
seq__28605_28619 = G__28647;
chunk__28606_28620 = G__28648;
count__28607_28621 = G__28649;
i__28608_28622 = G__28650;
continue;
} else {
var temp__4425__auto___28651 = cljs.core.seq.call(null,seq__28605_28619);
if(temp__4425__auto___28651){
var seq__28605_28652__$1 = temp__4425__auto___28651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28605_28652__$1)){
var c__17266__auto___28653 = cljs.core.chunk_first.call(null,seq__28605_28652__$1);
var G__28654 = cljs.core.chunk_rest.call(null,seq__28605_28652__$1);
var G__28655 = c__17266__auto___28653;
var G__28656 = cljs.core.count.call(null,c__17266__auto___28653);
var G__28657 = (0);
seq__28605_28619 = G__28654;
chunk__28606_28620 = G__28655;
count__28607_28621 = G__28656;
i__28608_28622 = G__28657;
continue;
} else {
var vec__28614_28658 = cljs.core.first.call(null,seq__28605_28652__$1);
var ts_28659 = cljs.core.nth.call(null,vec__28614_28658,(0),null);
var then_28660 = cljs.core.nth.call(null,vec__28614_28658,(1),null);
var seq__28615_28661 = cljs.core.seq.call(null,ts_28659);
var chunk__28616_28662 = null;
var count__28617_28663 = (0);
var i__28618_28664 = (0);
while(true){
if((i__28618_28664 < count__28617_28663)){
var test_28665 = cljs.core._nth.call(null,chunk__28616_28662,i__28618_28664);
cljs.compiler.emitln.call(null,"case ",test_28665,":");

var G__28666 = seq__28615_28661;
var G__28667 = chunk__28616_28662;
var G__28668 = count__28617_28663;
var G__28669 = (i__28618_28664 + (1));
seq__28615_28661 = G__28666;
chunk__28616_28662 = G__28667;
count__28617_28663 = G__28668;
i__28618_28664 = G__28669;
continue;
} else {
var temp__4425__auto___28670__$1 = cljs.core.seq.call(null,seq__28615_28661);
if(temp__4425__auto___28670__$1){
var seq__28615_28671__$1 = temp__4425__auto___28670__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28615_28671__$1)){
var c__17266__auto___28672 = cljs.core.chunk_first.call(null,seq__28615_28671__$1);
var G__28673 = cljs.core.chunk_rest.call(null,seq__28615_28671__$1);
var G__28674 = c__17266__auto___28672;
var G__28675 = cljs.core.count.call(null,c__17266__auto___28672);
var G__28676 = (0);
seq__28615_28661 = G__28673;
chunk__28616_28662 = G__28674;
count__28617_28663 = G__28675;
i__28618_28664 = G__28676;
continue;
} else {
var test_28677 = cljs.core.first.call(null,seq__28615_28671__$1);
cljs.compiler.emitln.call(null,"case ",test_28677,":");

var G__28678 = cljs.core.next.call(null,seq__28615_28671__$1);
var G__28679 = null;
var G__28680 = (0);
var G__28681 = (0);
seq__28615_28661 = G__28678;
chunk__28616_28662 = G__28679;
count__28617_28663 = G__28680;
i__28618_28664 = G__28681;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_28660);
} else {
cljs.compiler.emitln.call(null,then_28660);
}

cljs.compiler.emitln.call(null,"break;");

var G__28682 = cljs.core.next.call(null,seq__28605_28652__$1);
var G__28683 = null;
var G__28684 = (0);
var G__28685 = (0);
seq__28605_28619 = G__28682;
chunk__28606_28620 = G__28683;
count__28607_28621 = G__28684;
i__28608_28622 = G__28685;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__28686){
var map__28687 = p__28686;
var map__28687__$1 = ((((!((map__28687 == null)))?((((map__28687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28687):map__28687);
var throw$ = cljs.core.get.call(null,map__28687__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__28687__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$emit_comment_$_print_comment_lines(e){
var seq__28721 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,e));
var chunk__28722 = null;
var count__28723 = (0);
var i__28724 = (0);
while(true){
if((i__28724 < count__28723)){
var next_line = cljs.core._nth.call(null,chunk__28722,i__28724);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.trim.call(null,next_line),"*/","* /"));

var G__28729 = seq__28721;
var G__28730 = chunk__28722;
var G__28731 = count__28723;
var G__28732 = (i__28724 + (1));
seq__28721 = G__28729;
chunk__28722 = G__28730;
count__28723 = G__28731;
i__28724 = G__28732;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28721);
if(temp__4425__auto__){
var seq__28721__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28721__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__28721__$1);
var G__28733 = cljs.core.chunk_rest.call(null,seq__28721__$1);
var G__28734 = c__17266__auto__;
var G__28735 = cljs.core.count.call(null,c__17266__auto__);
var G__28736 = (0);
seq__28721 = G__28733;
chunk__28722 = G__28734;
count__28723 = G__28735;
i__28724 = G__28736;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__28721__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.trim.call(null,next_line),"*/","* /"));

var G__28737 = cljs.core.next.call(null,seq__28721__$1);
var G__28738 = null;
var G__28739 = (0);
var G__28740 = (0);
seq__28721 = G__28737;
chunk__28722 = G__28738;
count__28723 = G__28739;
i__28724 = G__28740;
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
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__28725_28741 = cljs.core.seq.call(null,docs__$2);
var chunk__28726_28742 = null;
var count__28727_28743 = (0);
var i__28728_28744 = (0);
while(true){
if((i__28728_28744 < count__28727_28743)){
var e_28745 = cljs.core._nth.call(null,chunk__28726_28742,i__28728_28744);
if(cljs.core.truth_(e_28745)){
print_comment_lines.call(null,e_28745);
} else {
}

var G__28746 = seq__28725_28741;
var G__28747 = chunk__28726_28742;
var G__28748 = count__28727_28743;
var G__28749 = (i__28728_28744 + (1));
seq__28725_28741 = G__28746;
chunk__28726_28742 = G__28747;
count__28727_28743 = G__28748;
i__28728_28744 = G__28749;
continue;
} else {
var temp__4425__auto___28750 = cljs.core.seq.call(null,seq__28725_28741);
if(temp__4425__auto___28750){
var seq__28725_28751__$1 = temp__4425__auto___28750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28725_28751__$1)){
var c__17266__auto___28752 = cljs.core.chunk_first.call(null,seq__28725_28751__$1);
var G__28753 = cljs.core.chunk_rest.call(null,seq__28725_28751__$1);
var G__28754 = c__17266__auto___28752;
var G__28755 = cljs.core.count.call(null,c__17266__auto___28752);
var G__28756 = (0);
seq__28725_28741 = G__28753;
chunk__28726_28742 = G__28754;
count__28727_28743 = G__28755;
i__28728_28744 = G__28756;
continue;
} else {
var e_28757 = cljs.core.first.call(null,seq__28725_28751__$1);
if(cljs.core.truth_(e_28757)){
print_comment_lines.call(null,e_28757);
} else {
}

var G__28758 = cljs.core.next.call(null,seq__28725_28751__$1);
var G__28759 = null;
var G__28760 = (0);
var G__28761 = (0);
seq__28725_28741 = G__28758;
chunk__28726_28742 = G__28759;
count__28727_28743 = G__28760;
i__28728_28744 = G__28761;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__16470__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__28763_SHARP_){
return goog.string.startsWith(p1__28763_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = opts;
if(cljs.core.truth_(and__16470__auto____$1)){
var and__16470__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__16470__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__28764){
var map__28765 = p__28764;
var map__28765__$1 = ((((!((map__28765 == null)))?((((map__28765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28765):map__28765);
var name = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__28765__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.call(null,name);
if(cljs.core.truth_(init)){
cljs.compiler.emit_comment.call(null,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__16470__auto__)){
return test;
} else {
return and__16470__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__28767){
var map__28784 = p__28767;
var map__28784__$1 = ((((!((map__28784 == null)))?((((map__28784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28784):map__28784);
var name = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__28784__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__28786_28800 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__28787_28801 = null;
var count__28788_28802 = (0);
var i__28789_28803 = (0);
while(true){
if((i__28789_28803 < count__28788_28802)){
var vec__28790_28804 = cljs.core._nth.call(null,chunk__28787_28801,i__28789_28803);
var i_28805 = cljs.core.nth.call(null,vec__28790_28804,(0),null);
var param_28806 = cljs.core.nth.call(null,vec__28790_28804,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28806);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__28807 = seq__28786_28800;
var G__28808 = chunk__28787_28801;
var G__28809 = count__28788_28802;
var G__28810 = (i__28789_28803 + (1));
seq__28786_28800 = G__28807;
chunk__28787_28801 = G__28808;
count__28788_28802 = G__28809;
i__28789_28803 = G__28810;
continue;
} else {
var temp__4425__auto___28811 = cljs.core.seq.call(null,seq__28786_28800);
if(temp__4425__auto___28811){
var seq__28786_28812__$1 = temp__4425__auto___28811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28786_28812__$1)){
var c__17266__auto___28813 = cljs.core.chunk_first.call(null,seq__28786_28812__$1);
var G__28814 = cljs.core.chunk_rest.call(null,seq__28786_28812__$1);
var G__28815 = c__17266__auto___28813;
var G__28816 = cljs.core.count.call(null,c__17266__auto___28813);
var G__28817 = (0);
seq__28786_28800 = G__28814;
chunk__28787_28801 = G__28815;
count__28788_28802 = G__28816;
i__28789_28803 = G__28817;
continue;
} else {
var vec__28791_28818 = cljs.core.first.call(null,seq__28786_28812__$1);
var i_28819 = cljs.core.nth.call(null,vec__28791_28818,(0),null);
var param_28820 = cljs.core.nth.call(null,vec__28791_28818,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_28820);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__28821 = cljs.core.next.call(null,seq__28786_28812__$1);
var G__28822 = null;
var G__28823 = (0);
var G__28824 = (0);
seq__28786_28800 = G__28821;
chunk__28787_28801 = G__28822;
count__28788_28802 = G__28823;
i__28789_28803 = G__28824;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__28792_28825 = cljs.core.seq.call(null,params);
var chunk__28793_28826 = null;
var count__28794_28827 = (0);
var i__28795_28828 = (0);
while(true){
if((i__28795_28828 < count__28794_28827)){
var param_28829 = cljs.core._nth.call(null,chunk__28793_28826,i__28795_28828);
cljs.compiler.emit.call(null,param_28829);

if(cljs.core._EQ_.call(null,param_28829,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__28830 = seq__28792_28825;
var G__28831 = chunk__28793_28826;
var G__28832 = count__28794_28827;
var G__28833 = (i__28795_28828 + (1));
seq__28792_28825 = G__28830;
chunk__28793_28826 = G__28831;
count__28794_28827 = G__28832;
i__28795_28828 = G__28833;
continue;
} else {
var temp__4425__auto___28834 = cljs.core.seq.call(null,seq__28792_28825);
if(temp__4425__auto___28834){
var seq__28792_28835__$1 = temp__4425__auto___28834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28792_28835__$1)){
var c__17266__auto___28836 = cljs.core.chunk_first.call(null,seq__28792_28835__$1);
var G__28837 = cljs.core.chunk_rest.call(null,seq__28792_28835__$1);
var G__28838 = c__17266__auto___28836;
var G__28839 = cljs.core.count.call(null,c__17266__auto___28836);
var G__28840 = (0);
seq__28792_28825 = G__28837;
chunk__28793_28826 = G__28838;
count__28794_28827 = G__28839;
i__28795_28828 = G__28840;
continue;
} else {
var param_28841 = cljs.core.first.call(null,seq__28792_28835__$1);
cljs.compiler.emit.call(null,param_28841);

if(cljs.core._EQ_.call(null,param_28841,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__28842 = cljs.core.next.call(null,seq__28792_28835__$1);
var G__28843 = null;
var G__28844 = (0);
var G__28845 = (0);
seq__28792_28825 = G__28842;
chunk__28793_28826 = G__28843;
count__28794_28827 = G__28844;
i__28795_28828 = G__28845;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__28796_28846 = cljs.core.seq.call(null,params);
var chunk__28797_28847 = null;
var count__28798_28848 = (0);
var i__28799_28849 = (0);
while(true){
if((i__28799_28849 < count__28798_28848)){
var param_28850 = cljs.core._nth.call(null,chunk__28797_28847,i__28799_28849);
cljs.compiler.emit.call(null,param_28850);

if(cljs.core._EQ_.call(null,param_28850,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__28851 = seq__28796_28846;
var G__28852 = chunk__28797_28847;
var G__28853 = count__28798_28848;
var G__28854 = (i__28799_28849 + (1));
seq__28796_28846 = G__28851;
chunk__28797_28847 = G__28852;
count__28798_28848 = G__28853;
i__28799_28849 = G__28854;
continue;
} else {
var temp__4425__auto___28855 = cljs.core.seq.call(null,seq__28796_28846);
if(temp__4425__auto___28855){
var seq__28796_28856__$1 = temp__4425__auto___28855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28796_28856__$1)){
var c__17266__auto___28857 = cljs.core.chunk_first.call(null,seq__28796_28856__$1);
var G__28858 = cljs.core.chunk_rest.call(null,seq__28796_28856__$1);
var G__28859 = c__17266__auto___28857;
var G__28860 = cljs.core.count.call(null,c__17266__auto___28857);
var G__28861 = (0);
seq__28796_28846 = G__28858;
chunk__28797_28847 = G__28859;
count__28798_28848 = G__28860;
i__28799_28849 = G__28861;
continue;
} else {
var param_28862 = cljs.core.first.call(null,seq__28796_28856__$1);
cljs.compiler.emit.call(null,param_28862);

if(cljs.core._EQ_.call(null,param_28862,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__28863 = cljs.core.next.call(null,seq__28796_28856__$1);
var G__28864 = null;
var G__28865 = (0);
var G__28866 = (0);
seq__28796_28846 = G__28863;
chunk__28797_28847 = G__28864;
count__28798_28848 = G__28865;
i__28799_28849 = G__28866;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__28871 = cljs.core.seq.call(null,params);
var chunk__28872 = null;
var count__28873 = (0);
var i__28874 = (0);
while(true){
if((i__28874 < count__28873)){
var param = cljs.core._nth.call(null,chunk__28872,i__28874);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__28875 = seq__28871;
var G__28876 = chunk__28872;
var G__28877 = count__28873;
var G__28878 = (i__28874 + (1));
seq__28871 = G__28875;
chunk__28872 = G__28876;
count__28873 = G__28877;
i__28874 = G__28878;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28871);
if(temp__4425__auto__){
var seq__28871__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28871__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__28871__$1);
var G__28879 = cljs.core.chunk_rest.call(null,seq__28871__$1);
var G__28880 = c__17266__auto__;
var G__28881 = cljs.core.count.call(null,c__17266__auto__);
var G__28882 = (0);
seq__28871 = G__28879;
chunk__28872 = G__28880;
count__28873 = G__28881;
i__28874 = G__28882;
continue;
} else {
var param = cljs.core.first.call(null,seq__28871__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__28883 = cljs.core.next.call(null,seq__28871__$1);
var G__28884 = null;
var G__28885 = (0);
var G__28886 = (0);
seq__28871 = G__28883;
chunk__28872 = G__28884;
count__28873 = G__28885;
i__28874 = G__28886;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__28887){
var map__28890 = p__28887;
var map__28890__$1 = ((((!((map__28890 == null)))?((((map__28890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28890):map__28890);
var type = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 * Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__28892){
var map__28903 = p__28892;
var map__28903__$1 = ((((!((map__28903 == null)))?((((map__28903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28903):map__28903);
var f = map__28903__$1;
var type = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__28903__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_28913__$1 = (function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_28914 = cljs.compiler.munge.call(null,name_28913__$1);
var delegate_name_28915 = [cljs.core.str(mname_28914),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_28915," = function (");

var seq__28905_28916 = cljs.core.seq.call(null,params);
var chunk__28906_28917 = null;
var count__28907_28918 = (0);
var i__28908_28919 = (0);
while(true){
if((i__28908_28919 < count__28907_28918)){
var param_28920 = cljs.core._nth.call(null,chunk__28906_28917,i__28908_28919);
cljs.compiler.emit.call(null,param_28920);

if(cljs.core._EQ_.call(null,param_28920,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__28921 = seq__28905_28916;
var G__28922 = chunk__28906_28917;
var G__28923 = count__28907_28918;
var G__28924 = (i__28908_28919 + (1));
seq__28905_28916 = G__28921;
chunk__28906_28917 = G__28922;
count__28907_28918 = G__28923;
i__28908_28919 = G__28924;
continue;
} else {
var temp__4425__auto___28925 = cljs.core.seq.call(null,seq__28905_28916);
if(temp__4425__auto___28925){
var seq__28905_28926__$1 = temp__4425__auto___28925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28905_28926__$1)){
var c__17266__auto___28927 = cljs.core.chunk_first.call(null,seq__28905_28926__$1);
var G__28928 = cljs.core.chunk_rest.call(null,seq__28905_28926__$1);
var G__28929 = c__17266__auto___28927;
var G__28930 = cljs.core.count.call(null,c__17266__auto___28927);
var G__28931 = (0);
seq__28905_28916 = G__28928;
chunk__28906_28917 = G__28929;
count__28907_28918 = G__28930;
i__28908_28919 = G__28931;
continue;
} else {
var param_28932 = cljs.core.first.call(null,seq__28905_28926__$1);
cljs.compiler.emit.call(null,param_28932);

if(cljs.core._EQ_.call(null,param_28932,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__28933 = cljs.core.next.call(null,seq__28905_28926__$1);
var G__28934 = null;
var G__28935 = (0);
var G__28936 = (0);
seq__28905_28916 = G__28933;
chunk__28906_28917 = G__28934;
count__28907_28918 = G__28935;
i__28908_28919 = G__28936;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_28914," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_28937 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_28937,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_28915,".call(this,");

var seq__28909_28938 = cljs.core.seq.call(null,params);
var chunk__28910_28939 = null;
var count__28911_28940 = (0);
var i__28912_28941 = (0);
while(true){
if((i__28912_28941 < count__28911_28940)){
var param_28942 = cljs.core._nth.call(null,chunk__28910_28939,i__28912_28941);
cljs.compiler.emit.call(null,param_28942);

if(cljs.core._EQ_.call(null,param_28942,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__28943 = seq__28909_28938;
var G__28944 = chunk__28910_28939;
var G__28945 = count__28911_28940;
var G__28946 = (i__28912_28941 + (1));
seq__28909_28938 = G__28943;
chunk__28910_28939 = G__28944;
count__28911_28940 = G__28945;
i__28912_28941 = G__28946;
continue;
} else {
var temp__4425__auto___28947 = cljs.core.seq.call(null,seq__28909_28938);
if(temp__4425__auto___28947){
var seq__28909_28948__$1 = temp__4425__auto___28947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28909_28948__$1)){
var c__17266__auto___28949 = cljs.core.chunk_first.call(null,seq__28909_28948__$1);
var G__28950 = cljs.core.chunk_rest.call(null,seq__28909_28948__$1);
var G__28951 = c__17266__auto___28949;
var G__28952 = cljs.core.count.call(null,c__17266__auto___28949);
var G__28953 = (0);
seq__28909_28938 = G__28950;
chunk__28910_28939 = G__28951;
count__28911_28940 = G__28952;
i__28912_28941 = G__28953;
continue;
} else {
var param_28954 = cljs.core.first.call(null,seq__28909_28948__$1);
cljs.compiler.emit.call(null,param_28954);

if(cljs.core._EQ_.call(null,param_28954,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__28955 = cljs.core.next.call(null,seq__28909_28948__$1);
var G__28956 = null;
var G__28957 = (0);
var G__28958 = (0);
seq__28909_28938 = G__28955;
chunk__28910_28939 = G__28956;
count__28911_28940 = G__28957;
i__28912_28941 = G__28958;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_28914,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_28914,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_28913__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_28914,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_28915,";");

cljs.compiler.emitln.call(null,"return ",mname_28914,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__28962){
var map__28963 = p__28962;
var map__28963__$1 = ((((!((map__28963 == null)))?((((map__28963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28963):map__28963);
var name = cljs.core.get.call(null,map__28963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__28963__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__28963__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__28963__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__28963__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__28963__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__28963__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__28963,map__28963__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__28959_SHARP_){
var and__16470__auto__ = p1__28959_SHARP_;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__28959_SHARP_));
} else {
return and__16470__auto__;
}
});})(map__28963,map__28963__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_28984__$1 = (function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_28985 = cljs.compiler.munge.call(null,name_28984__$1);
var maxparams_28986 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_28987 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_28984__$1,mname_28985,maxparams_28986,loop_locals,map__28963,map__28963__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_28985),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_28984__$1,mname_28985,maxparams_28986,loop_locals,map__28963,map__28963__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_28988 = cljs.core.sort_by.call(null,((function (name_28984__$1,mname_28985,maxparams_28986,mmap_28987,loop_locals,map__28963,map__28963__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__28960_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__28960_SHARP_)));
});})(name_28984__$1,mname_28985,maxparams_28986,mmap_28987,loop_locals,map__28963,map__28963__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_28987));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_28985," = null;");

var seq__28965_28989 = cljs.core.seq.call(null,ms_28988);
var chunk__28966_28990 = null;
var count__28967_28991 = (0);
var i__28968_28992 = (0);
while(true){
if((i__28968_28992 < count__28967_28991)){
var vec__28969_28993 = cljs.core._nth.call(null,chunk__28966_28990,i__28968_28992);
var n_28994 = cljs.core.nth.call(null,vec__28969_28993,(0),null);
var meth_28995 = cljs.core.nth.call(null,vec__28969_28993,(1),null);
cljs.compiler.emits.call(null,"var ",n_28994," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_28995))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_28995);
} else {
cljs.compiler.emit_fn_method.call(null,meth_28995);
}

cljs.compiler.emitln.call(null,";");

var G__28996 = seq__28965_28989;
var G__28997 = chunk__28966_28990;
var G__28998 = count__28967_28991;
var G__28999 = (i__28968_28992 + (1));
seq__28965_28989 = G__28996;
chunk__28966_28990 = G__28997;
count__28967_28991 = G__28998;
i__28968_28992 = G__28999;
continue;
} else {
var temp__4425__auto___29000 = cljs.core.seq.call(null,seq__28965_28989);
if(temp__4425__auto___29000){
var seq__28965_29001__$1 = temp__4425__auto___29000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28965_29001__$1)){
var c__17266__auto___29002 = cljs.core.chunk_first.call(null,seq__28965_29001__$1);
var G__29003 = cljs.core.chunk_rest.call(null,seq__28965_29001__$1);
var G__29004 = c__17266__auto___29002;
var G__29005 = cljs.core.count.call(null,c__17266__auto___29002);
var G__29006 = (0);
seq__28965_28989 = G__29003;
chunk__28966_28990 = G__29004;
count__28967_28991 = G__29005;
i__28968_28992 = G__29006;
continue;
} else {
var vec__28970_29007 = cljs.core.first.call(null,seq__28965_29001__$1);
var n_29008 = cljs.core.nth.call(null,vec__28970_29007,(0),null);
var meth_29009 = cljs.core.nth.call(null,vec__28970_29007,(1),null);
cljs.compiler.emits.call(null,"var ",n_29008," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29009))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_29009);
} else {
cljs.compiler.emit_fn_method.call(null,meth_29009);
}

cljs.compiler.emitln.call(null,";");

var G__29010 = cljs.core.next.call(null,seq__28965_29001__$1);
var G__29011 = null;
var G__29012 = (0);
var G__29013 = (0);
seq__28965_28989 = G__29010;
chunk__28966_28990 = G__29011;
count__28967_28991 = G__29012;
i__28968_28992 = G__29013;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_28985," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_28986),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_28986)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_28986));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__28971_29014 = cljs.core.seq.call(null,ms_28988);
var chunk__28972_29015 = null;
var count__28973_29016 = (0);
var i__28974_29017 = (0);
while(true){
if((i__28974_29017 < count__28973_29016)){
var vec__28975_29018 = cljs.core._nth.call(null,chunk__28972_29015,i__28974_29017);
var n_29019 = cljs.core.nth.call(null,vec__28975_29018,(0),null);
var meth_29020 = cljs.core.nth.call(null,vec__28975_29018,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29020))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29021 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29021," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29022 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29021," = new cljs.core.IndexedSeq(",a_29022,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29019,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_28986)),(((cljs.core.count.call(null,maxparams_28986) > (1)))?", ":null),restarg_29021,");");
} else {
var pcnt_29023 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29020));
cljs.compiler.emitln.call(null,"case ",pcnt_29023,":");

cljs.compiler.emitln.call(null,"return ",n_29019,".call(this",(((pcnt_29023 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29023,maxparams_28986))),",")),");");
}

var G__29024 = seq__28971_29014;
var G__29025 = chunk__28972_29015;
var G__29026 = count__28973_29016;
var G__29027 = (i__28974_29017 + (1));
seq__28971_29014 = G__29024;
chunk__28972_29015 = G__29025;
count__28973_29016 = G__29026;
i__28974_29017 = G__29027;
continue;
} else {
var temp__4425__auto___29028 = cljs.core.seq.call(null,seq__28971_29014);
if(temp__4425__auto___29028){
var seq__28971_29029__$1 = temp__4425__auto___29028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28971_29029__$1)){
var c__17266__auto___29030 = cljs.core.chunk_first.call(null,seq__28971_29029__$1);
var G__29031 = cljs.core.chunk_rest.call(null,seq__28971_29029__$1);
var G__29032 = c__17266__auto___29030;
var G__29033 = cljs.core.count.call(null,c__17266__auto___29030);
var G__29034 = (0);
seq__28971_29014 = G__29031;
chunk__28972_29015 = G__29032;
count__28973_29016 = G__29033;
i__28974_29017 = G__29034;
continue;
} else {
var vec__28976_29035 = cljs.core.first.call(null,seq__28971_29029__$1);
var n_29036 = cljs.core.nth.call(null,vec__28976_29035,(0),null);
var meth_29037 = cljs.core.nth.call(null,vec__28976_29035,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29037))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29038 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29038," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29039 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29038," = new cljs.core.IndexedSeq(",a_29039,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29036,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_28986)),(((cljs.core.count.call(null,maxparams_28986) > (1)))?", ":null),restarg_29038,");");
} else {
var pcnt_29040 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29037));
cljs.compiler.emitln.call(null,"case ",pcnt_29040,":");

cljs.compiler.emitln.call(null,"return ",n_29036,".call(this",(((pcnt_29040 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29040,maxparams_28986))),",")),");");
}

var G__29041 = cljs.core.next.call(null,seq__28971_29029__$1);
var G__29042 = null;
var G__29043 = (0);
var G__29044 = (0);
seq__28971_29014 = G__29041;
chunk__28972_29015 = G__29042;
count__28973_29016 = G__29043;
i__28974_29017 = G__29044;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_28985,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_28985,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_28984__$1,mname_28985,maxparams_28986,mmap_28987,ms_28988,loop_locals,map__28963,map__28963__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__28961_SHARP_){
var vec__28977 = p1__28961_SHARP_;
var n = cljs.core.nth.call(null,vec__28977,(0),null);
var m = cljs.core.nth.call(null,vec__28977,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_28984__$1,mname_28985,maxparams_28986,mmap_28987,ms_28988,loop_locals,map__28963,map__28963__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_28988),".cljs$lang$applyTo;");
} else {
}

var seq__28978_29045 = cljs.core.seq.call(null,ms_28988);
var chunk__28979_29046 = null;
var count__28980_29047 = (0);
var i__28981_29048 = (0);
while(true){
if((i__28981_29048 < count__28980_29047)){
var vec__28982_29049 = cljs.core._nth.call(null,chunk__28979_29046,i__28981_29048);
var n_29050 = cljs.core.nth.call(null,vec__28982_29049,(0),null);
var meth_29051 = cljs.core.nth.call(null,vec__28982_29049,(1),null);
var c_29052 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29051));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29051))){
cljs.compiler.emitln.call(null,mname_28985,".cljs$core$IFn$_invoke$arity$variadic = ",n_29050,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_28985,".cljs$core$IFn$_invoke$arity$",c_29052," = ",n_29050,";");
}

var G__29053 = seq__28978_29045;
var G__29054 = chunk__28979_29046;
var G__29055 = count__28980_29047;
var G__29056 = (i__28981_29048 + (1));
seq__28978_29045 = G__29053;
chunk__28979_29046 = G__29054;
count__28980_29047 = G__29055;
i__28981_29048 = G__29056;
continue;
} else {
var temp__4425__auto___29057 = cljs.core.seq.call(null,seq__28978_29045);
if(temp__4425__auto___29057){
var seq__28978_29058__$1 = temp__4425__auto___29057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28978_29058__$1)){
var c__17266__auto___29059 = cljs.core.chunk_first.call(null,seq__28978_29058__$1);
var G__29060 = cljs.core.chunk_rest.call(null,seq__28978_29058__$1);
var G__29061 = c__17266__auto___29059;
var G__29062 = cljs.core.count.call(null,c__17266__auto___29059);
var G__29063 = (0);
seq__28978_29045 = G__29060;
chunk__28979_29046 = G__29061;
count__28980_29047 = G__29062;
i__28981_29048 = G__29063;
continue;
} else {
var vec__28983_29064 = cljs.core.first.call(null,seq__28978_29058__$1);
var n_29065 = cljs.core.nth.call(null,vec__28983_29064,(0),null);
var meth_29066 = cljs.core.nth.call(null,vec__28983_29064,(1),null);
var c_29067 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29066));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29066))){
cljs.compiler.emitln.call(null,mname_28985,".cljs$core$IFn$_invoke$arity$variadic = ",n_29065,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_28985,".cljs$core$IFn$_invoke$arity$",c_29067," = ",n_29065,";");
}

var G__29068 = cljs.core.next.call(null,seq__28978_29058__$1);
var G__29069 = null;
var G__29070 = (0);
var G__29071 = (0);
seq__28978_29045 = G__29068;
chunk__28979_29046 = G__29069;
count__28980_29047 = G__29070;
i__28981_29048 = G__29071;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_28985,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__29072){
var map__29073 = p__29072;
var map__29073__$1 = ((((!((map__29073 == null)))?((((map__29073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29073):map__29073);
var statements = cljs.core.get.call(null,map__29073__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__29073__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__29073__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__16470__auto__ = statements;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__16470__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__29075_29079 = cljs.core.seq.call(null,statements);
var chunk__29076_29080 = null;
var count__29077_29081 = (0);
var i__29078_29082 = (0);
while(true){
if((i__29078_29082 < count__29077_29081)){
var s_29083 = cljs.core._nth.call(null,chunk__29076_29080,i__29078_29082);
cljs.compiler.emitln.call(null,s_29083);

var G__29084 = seq__29075_29079;
var G__29085 = chunk__29076_29080;
var G__29086 = count__29077_29081;
var G__29087 = (i__29078_29082 + (1));
seq__29075_29079 = G__29084;
chunk__29076_29080 = G__29085;
count__29077_29081 = G__29086;
i__29078_29082 = G__29087;
continue;
} else {
var temp__4425__auto___29088 = cljs.core.seq.call(null,seq__29075_29079);
if(temp__4425__auto___29088){
var seq__29075_29089__$1 = temp__4425__auto___29088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29075_29089__$1)){
var c__17266__auto___29090 = cljs.core.chunk_first.call(null,seq__29075_29089__$1);
var G__29091 = cljs.core.chunk_rest.call(null,seq__29075_29089__$1);
var G__29092 = c__17266__auto___29090;
var G__29093 = cljs.core.count.call(null,c__17266__auto___29090);
var G__29094 = (0);
seq__29075_29079 = G__29091;
chunk__29076_29080 = G__29092;
count__29077_29081 = G__29093;
i__29078_29082 = G__29094;
continue;
} else {
var s_29095 = cljs.core.first.call(null,seq__29075_29089__$1);
cljs.compiler.emitln.call(null,s_29095);

var G__29096 = cljs.core.next.call(null,seq__29075_29089__$1);
var G__29097 = null;
var G__29098 = (0);
var G__29099 = (0);
seq__29075_29079 = G__29096;
chunk__29076_29080 = G__29097;
count__29077_29081 = G__29098;
i__29078_29082 = G__29099;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__16470__auto__ = statements;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__16470__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__29100){
var map__29101 = p__29100;
var map__29101__$1 = ((((!((map__29101 == null)))?((((map__29101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29101):map__29101);
var env = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__29103,is_loop){
var map__29115 = p__29103;
var map__29115__$1 = ((((!((map__29115 == null)))?((((map__29115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29115):map__29115);
var bindings = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29115__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_29117_29126 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_29117_29126,context,map__29115,map__29115__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core._hash.call(null,name),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_29117_29126,context,map__29115,map__29115__$1,bindings,expr,env))
,bindings):null));

try{var seq__29118_29127 = cljs.core.seq.call(null,bindings);
var chunk__29119_29128 = null;
var count__29120_29129 = (0);
var i__29121_29130 = (0);
while(true){
if((i__29121_29130 < count__29120_29129)){
var map__29122_29131 = cljs.core._nth.call(null,chunk__29119_29128,i__29121_29130);
var map__29122_29132__$1 = ((((!((map__29122_29131 == null)))?((((map__29122_29131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29122_29131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29122_29131):map__29122_29131);
var binding_29133 = map__29122_29132__$1;
var init_29134 = cljs.core.get.call(null,map__29122_29132__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_29133);

cljs.compiler.emitln.call(null," = ",init_29134,";");

var G__29135 = seq__29118_29127;
var G__29136 = chunk__29119_29128;
var G__29137 = count__29120_29129;
var G__29138 = (i__29121_29130 + (1));
seq__29118_29127 = G__29135;
chunk__29119_29128 = G__29136;
count__29120_29129 = G__29137;
i__29121_29130 = G__29138;
continue;
} else {
var temp__4425__auto___29139 = cljs.core.seq.call(null,seq__29118_29127);
if(temp__4425__auto___29139){
var seq__29118_29140__$1 = temp__4425__auto___29139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29118_29140__$1)){
var c__17266__auto___29141 = cljs.core.chunk_first.call(null,seq__29118_29140__$1);
var G__29142 = cljs.core.chunk_rest.call(null,seq__29118_29140__$1);
var G__29143 = c__17266__auto___29141;
var G__29144 = cljs.core.count.call(null,c__17266__auto___29141);
var G__29145 = (0);
seq__29118_29127 = G__29142;
chunk__29119_29128 = G__29143;
count__29120_29129 = G__29144;
i__29121_29130 = G__29145;
continue;
} else {
var map__29124_29146 = cljs.core.first.call(null,seq__29118_29140__$1);
var map__29124_29147__$1 = ((((!((map__29124_29146 == null)))?((((map__29124_29146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29124_29146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29124_29146):map__29124_29146);
var binding_29148 = map__29124_29147__$1;
var init_29149 = cljs.core.get.call(null,map__29124_29147__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_29148);

cljs.compiler.emitln.call(null," = ",init_29149,";");

var G__29150 = cljs.core.next.call(null,seq__29118_29140__$1);
var G__29151 = null;
var G__29152 = (0);
var G__29153 = (0);
seq__29118_29127 = G__29150;
chunk__29119_29128 = G__29151;
count__29120_29129 = G__29152;
i__29121_29130 = G__29153;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_29117_29126;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__29154){
var map__29155 = p__29154;
var map__29155__$1 = ((((!((map__29155 == null)))?((((map__29155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29155):map__29155);
var frame = cljs.core.get.call(null,map__29155__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__29155__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__29155__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__17366__auto___29157 = cljs.core.count.call(null,exprs);
var i_29158 = (0);
while(true){
if((i_29158 < n__17366__auto___29157)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_29158)," = ",exprs.call(null,i_29158),";");

var G__29159 = (i_29158 + (1));
i_29158 = G__29159;
continue;
} else {
}
break;
}

var n__17366__auto___29160 = cljs.core.count.call(null,exprs);
var i_29161 = (0);
while(true){
if((i_29161 < n__17366__auto___29160)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_29161))," = ",temps.call(null,i_29161),";");

var G__29162 = (i_29161 + (1));
i_29161 = G__29162;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__29163){
var map__29164 = p__29163;
var map__29164__$1 = ((((!((map__29164 == null)))?((((map__29164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29164):map__29164);
var bindings = cljs.core.get.call(null,map__29164__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__29164__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29164__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__29166_29174 = cljs.core.seq.call(null,bindings);
var chunk__29167_29175 = null;
var count__29168_29176 = (0);
var i__29169_29177 = (0);
while(true){
if((i__29169_29177 < count__29168_29176)){
var map__29170_29178 = cljs.core._nth.call(null,chunk__29167_29175,i__29169_29177);
var map__29170_29179__$1 = ((((!((map__29170_29178 == null)))?((((map__29170_29178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29170_29178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29170_29178):map__29170_29178);
var binding_29180 = map__29170_29179__$1;
var init_29181 = cljs.core.get.call(null,map__29170_29179__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_29180)," = ",init_29181,";");

var G__29182 = seq__29166_29174;
var G__29183 = chunk__29167_29175;
var G__29184 = count__29168_29176;
var G__29185 = (i__29169_29177 + (1));
seq__29166_29174 = G__29182;
chunk__29167_29175 = G__29183;
count__29168_29176 = G__29184;
i__29169_29177 = G__29185;
continue;
} else {
var temp__4425__auto___29186 = cljs.core.seq.call(null,seq__29166_29174);
if(temp__4425__auto___29186){
var seq__29166_29187__$1 = temp__4425__auto___29186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29166_29187__$1)){
var c__17266__auto___29188 = cljs.core.chunk_first.call(null,seq__29166_29187__$1);
var G__29189 = cljs.core.chunk_rest.call(null,seq__29166_29187__$1);
var G__29190 = c__17266__auto___29188;
var G__29191 = cljs.core.count.call(null,c__17266__auto___29188);
var G__29192 = (0);
seq__29166_29174 = G__29189;
chunk__29167_29175 = G__29190;
count__29168_29176 = G__29191;
i__29169_29177 = G__29192;
continue;
} else {
var map__29172_29193 = cljs.core.first.call(null,seq__29166_29187__$1);
var map__29172_29194__$1 = ((((!((map__29172_29193 == null)))?((((map__29172_29193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29172_29193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29172_29193):map__29172_29193);
var binding_29195 = map__29172_29194__$1;
var init_29196 = cljs.core.get.call(null,map__29172_29194__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_29195)," = ",init_29196,";");

var G__29197 = cljs.core.next.call(null,seq__29166_29187__$1);
var G__29198 = null;
var G__29199 = (0);
var G__29200 = (0);
seq__29166_29174 = G__29197;
chunk__29167_29175 = G__29198;
count__29168_29176 = G__29199;
i__29169_29177 = G__29200;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace(".","$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__29203){
var map__29204 = p__29203;
var map__29204__$1 = ((((!((map__29204 == null)))?((((map__29204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29204):map__29204);
var expr = map__29204__$1;
var f = cljs.core.get.call(null,map__29204__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__29204__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29204__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__16470__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__16470__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__16470__auto__ = protocol;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = tag;
if(cljs.core.truth_(and__16470__auto____$1)){
var or__16482__auto__ = (function (){var and__16470__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16470__auto____$2)){
var and__16470__auto____$3 = protocol;
if(cljs.core.truth_(and__16470__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
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
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__16470__auto____$2)){
var or__16482__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__16482__auto____$1){
return or__16482__auto____$1;
} else {
var and__16470__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__16470__auto____$3){
var and__16470__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__16470__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
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
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__16482__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__16482__auto__){
return or__16482__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__29206 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__16470__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__16470__auto__)){
return (arity > mfa);
} else {
return and__16470__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29204,map__29204__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29204,map__29204__$1,expr,f,args,env){
return (function (p1__29201_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__29201_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29204,map__29204__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29204,map__29204__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29204,map__29204__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29204,map__29204__$1,expr,f,args,env){
return (function (p1__29202_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__29202_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29204,map__29204__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__29204,map__29204__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__29206,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__29206,(1),null);
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_29207 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_29207,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_29208 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_29208,args)),(((mfa_29208 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_29208,args)),"], 0))");
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
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__16470__auto__;
}
})())){
var fprop_29209 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_29209," ? ",f__$1,fprop_29209,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__29210){
var map__29211 = p__29210;
var map__29211__$1 = ((((!((map__29211 == null)))?((((map__29211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29211):map__29211);
var ctor = cljs.core.get.call(null,map__29211__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__29211__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29211__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__29213){
var map__29214 = p__29213;
var map__29214__$1 = ((((!((map__29214 == null)))?((((map__29214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29214):map__29214);
var target = cljs.core.get.call(null,map__29214__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__29214__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__29214__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__29220_29224 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__29221_29225 = null;
var count__29222_29226 = (0);
var i__29223_29227 = (0);
while(true){
if((i__29223_29227 < count__29222_29226)){
var lib_29228 = cljs.core._nth.call(null,chunk__29221_29225,i__29223_29227);
if(cljs.core.truth_((function (){var or__16482__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29228),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29228),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__16482__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29228),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29228),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29228),"');");

}
}

var G__29229 = seq__29220_29224;
var G__29230 = chunk__29221_29225;
var G__29231 = count__29222_29226;
var G__29232 = (i__29223_29227 + (1));
seq__29220_29224 = G__29229;
chunk__29221_29225 = G__29230;
count__29222_29226 = G__29231;
i__29223_29227 = G__29232;
continue;
} else {
var temp__4425__auto___29233 = cljs.core.seq.call(null,seq__29220_29224);
if(temp__4425__auto___29233){
var seq__29220_29234__$1 = temp__4425__auto___29233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29220_29234__$1)){
var c__17266__auto___29235 = cljs.core.chunk_first.call(null,seq__29220_29234__$1);
var G__29236 = cljs.core.chunk_rest.call(null,seq__29220_29234__$1);
var G__29237 = c__17266__auto___29235;
var G__29238 = cljs.core.count.call(null,c__17266__auto___29235);
var G__29239 = (0);
seq__29220_29224 = G__29236;
chunk__29221_29225 = G__29237;
count__29222_29226 = G__29238;
i__29223_29227 = G__29239;
continue;
} else {
var lib_29240 = cljs.core.first.call(null,seq__29220_29234__$1);
if(cljs.core.truth_((function (){var or__16482__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29240),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29240),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__16482__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_29240),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29240),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_29240),"');");

}
}

var G__29241 = cljs.core.next.call(null,seq__29220_29234__$1);
var G__29242 = null;
var G__29243 = (0);
var G__29244 = (0);
seq__29220_29224 = G__29241;
chunk__29221_29225 = G__29242;
count__29222_29226 = G__29243;
i__29223_29227 = G__29244;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__29245){
var map__29246 = p__29245;
var map__29246__$1 = ((((!((map__29246 == null)))?((((map__29246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29246):map__29246);
var name = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__29248){
var map__29249 = p__29248;
var map__29249__$1 = ((((!((map__29249 == null)))?((((map__29249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29249):map__29249);
var t = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__29251_29261 = cljs.core.seq.call(null,fields__$1);
var chunk__29252_29262 = null;
var count__29253_29263 = (0);
var i__29254_29264 = (0);
while(true){
if((i__29254_29264 < count__29253_29263)){
var fld_29265 = cljs.core._nth.call(null,chunk__29252_29262,i__29254_29264);
cljs.compiler.emitln.call(null,"this.",fld_29265," = ",fld_29265,";");

var G__29266 = seq__29251_29261;
var G__29267 = chunk__29252_29262;
var G__29268 = count__29253_29263;
var G__29269 = (i__29254_29264 + (1));
seq__29251_29261 = G__29266;
chunk__29252_29262 = G__29267;
count__29253_29263 = G__29268;
i__29254_29264 = G__29269;
continue;
} else {
var temp__4425__auto___29270 = cljs.core.seq.call(null,seq__29251_29261);
if(temp__4425__auto___29270){
var seq__29251_29271__$1 = temp__4425__auto___29270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29251_29271__$1)){
var c__17266__auto___29272 = cljs.core.chunk_first.call(null,seq__29251_29271__$1);
var G__29273 = cljs.core.chunk_rest.call(null,seq__29251_29271__$1);
var G__29274 = c__17266__auto___29272;
var G__29275 = cljs.core.count.call(null,c__17266__auto___29272);
var G__29276 = (0);
seq__29251_29261 = G__29273;
chunk__29252_29262 = G__29274;
count__29253_29263 = G__29275;
i__29254_29264 = G__29276;
continue;
} else {
var fld_29277 = cljs.core.first.call(null,seq__29251_29271__$1);
cljs.compiler.emitln.call(null,"this.",fld_29277," = ",fld_29277,";");

var G__29278 = cljs.core.next.call(null,seq__29251_29271__$1);
var G__29279 = null;
var G__29280 = (0);
var G__29281 = (0);
seq__29251_29261 = G__29278;
chunk__29252_29262 = G__29279;
count__29253_29263 = G__29280;
i__29254_29264 = G__29281;
continue;
}
} else {
}
}
break;
}

var seq__29255_29282 = cljs.core.seq.call(null,pmasks);
var chunk__29256_29283 = null;
var count__29257_29284 = (0);
var i__29258_29285 = (0);
while(true){
if((i__29258_29285 < count__29257_29284)){
var vec__29259_29286 = cljs.core._nth.call(null,chunk__29256_29283,i__29258_29285);
var pno_29287 = cljs.core.nth.call(null,vec__29259_29286,(0),null);
var pmask_29288 = cljs.core.nth.call(null,vec__29259_29286,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29287,"$ = ",pmask_29288,";");

var G__29289 = seq__29255_29282;
var G__29290 = chunk__29256_29283;
var G__29291 = count__29257_29284;
var G__29292 = (i__29258_29285 + (1));
seq__29255_29282 = G__29289;
chunk__29256_29283 = G__29290;
count__29257_29284 = G__29291;
i__29258_29285 = G__29292;
continue;
} else {
var temp__4425__auto___29293 = cljs.core.seq.call(null,seq__29255_29282);
if(temp__4425__auto___29293){
var seq__29255_29294__$1 = temp__4425__auto___29293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29255_29294__$1)){
var c__17266__auto___29295 = cljs.core.chunk_first.call(null,seq__29255_29294__$1);
var G__29296 = cljs.core.chunk_rest.call(null,seq__29255_29294__$1);
var G__29297 = c__17266__auto___29295;
var G__29298 = cljs.core.count.call(null,c__17266__auto___29295);
var G__29299 = (0);
seq__29255_29282 = G__29296;
chunk__29256_29283 = G__29297;
count__29257_29284 = G__29298;
i__29258_29285 = G__29299;
continue;
} else {
var vec__29260_29300 = cljs.core.first.call(null,seq__29255_29294__$1);
var pno_29301 = cljs.core.nth.call(null,vec__29260_29300,(0),null);
var pmask_29302 = cljs.core.nth.call(null,vec__29260_29300,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29301,"$ = ",pmask_29302,";");

var G__29303 = cljs.core.next.call(null,seq__29255_29294__$1);
var G__29304 = null;
var G__29305 = (0);
var G__29306 = (0);
seq__29255_29282 = G__29303;
chunk__29256_29283 = G__29304;
count__29257_29284 = G__29305;
i__29258_29285 = G__29306;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__29307){
var map__29308 = p__29307;
var map__29308__$1 = ((((!((map__29308 == null)))?((((map__29308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29308):map__29308);
var t = cljs.core.get.call(null,map__29308__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__29308__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__29308__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__29308__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__29310_29324 = cljs.core.seq.call(null,fields__$1);
var chunk__29311_29325 = null;
var count__29312_29326 = (0);
var i__29313_29327 = (0);
while(true){
if((i__29313_29327 < count__29312_29326)){
var fld_29328 = cljs.core._nth.call(null,chunk__29311_29325,i__29313_29327);
cljs.compiler.emitln.call(null,"* @param {*} ",fld_29328);

var G__29329 = seq__29310_29324;
var G__29330 = chunk__29311_29325;
var G__29331 = count__29312_29326;
var G__29332 = (i__29313_29327 + (1));
seq__29310_29324 = G__29329;
chunk__29311_29325 = G__29330;
count__29312_29326 = G__29331;
i__29313_29327 = G__29332;
continue;
} else {
var temp__4425__auto___29333 = cljs.core.seq.call(null,seq__29310_29324);
if(temp__4425__auto___29333){
var seq__29310_29334__$1 = temp__4425__auto___29333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29310_29334__$1)){
var c__17266__auto___29335 = cljs.core.chunk_first.call(null,seq__29310_29334__$1);
var G__29336 = cljs.core.chunk_rest.call(null,seq__29310_29334__$1);
var G__29337 = c__17266__auto___29335;
var G__29338 = cljs.core.count.call(null,c__17266__auto___29335);
var G__29339 = (0);
seq__29310_29324 = G__29336;
chunk__29311_29325 = G__29337;
count__29312_29326 = G__29338;
i__29313_29327 = G__29339;
continue;
} else {
var fld_29340 = cljs.core.first.call(null,seq__29310_29334__$1);
cljs.compiler.emitln.call(null,"* @param {*} ",fld_29340);

var G__29341 = cljs.core.next.call(null,seq__29310_29334__$1);
var G__29342 = null;
var G__29343 = (0);
var G__29344 = (0);
seq__29310_29324 = G__29341;
chunk__29311_29325 = G__29342;
count__29312_29326 = G__29343;
i__29313_29327 = G__29344;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"* @param {*=} __meta ");

cljs.compiler.emitln.call(null,"* @param {*=} __extmap");

cljs.compiler.emitln.call(null,"* @param {number|null} __hash");

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__29314_29345 = cljs.core.seq.call(null,fields__$1);
var chunk__29315_29346 = null;
var count__29316_29347 = (0);
var i__29317_29348 = (0);
while(true){
if((i__29317_29348 < count__29316_29347)){
var fld_29349 = cljs.core._nth.call(null,chunk__29315_29346,i__29317_29348);
cljs.compiler.emitln.call(null,"this.",fld_29349," = ",fld_29349,";");

var G__29350 = seq__29314_29345;
var G__29351 = chunk__29315_29346;
var G__29352 = count__29316_29347;
var G__29353 = (i__29317_29348 + (1));
seq__29314_29345 = G__29350;
chunk__29315_29346 = G__29351;
count__29316_29347 = G__29352;
i__29317_29348 = G__29353;
continue;
} else {
var temp__4425__auto___29354 = cljs.core.seq.call(null,seq__29314_29345);
if(temp__4425__auto___29354){
var seq__29314_29355__$1 = temp__4425__auto___29354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29314_29355__$1)){
var c__17266__auto___29356 = cljs.core.chunk_first.call(null,seq__29314_29355__$1);
var G__29357 = cljs.core.chunk_rest.call(null,seq__29314_29355__$1);
var G__29358 = c__17266__auto___29356;
var G__29359 = cljs.core.count.call(null,c__17266__auto___29356);
var G__29360 = (0);
seq__29314_29345 = G__29357;
chunk__29315_29346 = G__29358;
count__29316_29347 = G__29359;
i__29317_29348 = G__29360;
continue;
} else {
var fld_29361 = cljs.core.first.call(null,seq__29314_29355__$1);
cljs.compiler.emitln.call(null,"this.",fld_29361," = ",fld_29361,";");

var G__29362 = cljs.core.next.call(null,seq__29314_29355__$1);
var G__29363 = null;
var G__29364 = (0);
var G__29365 = (0);
seq__29314_29345 = G__29362;
chunk__29315_29346 = G__29363;
count__29316_29347 = G__29364;
i__29317_29348 = G__29365;
continue;
}
} else {
}
}
break;
}

var seq__29318_29366 = cljs.core.seq.call(null,pmasks);
var chunk__29319_29367 = null;
var count__29320_29368 = (0);
var i__29321_29369 = (0);
while(true){
if((i__29321_29369 < count__29320_29368)){
var vec__29322_29370 = cljs.core._nth.call(null,chunk__29319_29367,i__29321_29369);
var pno_29371 = cljs.core.nth.call(null,vec__29322_29370,(0),null);
var pmask_29372 = cljs.core.nth.call(null,vec__29322_29370,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29371,"$ = ",pmask_29372,";");

var G__29373 = seq__29318_29366;
var G__29374 = chunk__29319_29367;
var G__29375 = count__29320_29368;
var G__29376 = (i__29321_29369 + (1));
seq__29318_29366 = G__29373;
chunk__29319_29367 = G__29374;
count__29320_29368 = G__29375;
i__29321_29369 = G__29376;
continue;
} else {
var temp__4425__auto___29377 = cljs.core.seq.call(null,seq__29318_29366);
if(temp__4425__auto___29377){
var seq__29318_29378__$1 = temp__4425__auto___29377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29318_29378__$1)){
var c__17266__auto___29379 = cljs.core.chunk_first.call(null,seq__29318_29378__$1);
var G__29380 = cljs.core.chunk_rest.call(null,seq__29318_29378__$1);
var G__29381 = c__17266__auto___29379;
var G__29382 = cljs.core.count.call(null,c__17266__auto___29379);
var G__29383 = (0);
seq__29318_29366 = G__29380;
chunk__29319_29367 = G__29381;
count__29320_29368 = G__29382;
i__29321_29369 = G__29383;
continue;
} else {
var vec__29323_29384 = cljs.core.first.call(null,seq__29318_29378__$1);
var pno_29385 = cljs.core.nth.call(null,vec__29323_29384,(0),null);
var pmask_29386 = cljs.core.nth.call(null,vec__29323_29384,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_29385,"$ = ",pmask_29386,";");

var G__29387 = cljs.core.next.call(null,seq__29318_29378__$1);
var G__29388 = null;
var G__29389 = (0);
var G__29390 = (0);
seq__29318_29366 = G__29387;
chunk__29319_29367 = G__29388;
count__29320_29368 = G__29389;
i__29321_29369 = G__29390;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__29391){
var map__29392 = p__29391;
var map__29392__$1 = ((((!((map__29392 == null)))?((((map__29392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29392):map__29392);
var target = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__29394){
var map__29395 = p__29394;
var map__29395__$1 = ((((!((map__29395 == null)))?((((map__29395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29395):map__29395);
var env = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env__19676__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19676__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__29405 = cljs.core.seq.call(null,table);
var chunk__29406 = null;
var count__29407 = (0);
var i__29408 = (0);
while(true){
if((i__29408 < count__29407)){
var vec__29409 = cljs.core._nth.call(null,chunk__29406,i__29408);
var keyword = cljs.core.nth.call(null,vec__29409,(0),null);
var value = cljs.core.nth.call(null,vec__29409,(1),null);
var ns_29411 = cljs.core.namespace.call(null,keyword);
var name_29412 = cljs.core.name.call(null,keyword);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

cljs.compiler.emits_keyword.call(null,keyword);

cljs.compiler.emits.call(null,";\n");

var G__29413 = seq__29405;
var G__29414 = chunk__29406;
var G__29415 = count__29407;
var G__29416 = (i__29408 + (1));
seq__29405 = G__29413;
chunk__29406 = G__29414;
count__29407 = G__29415;
i__29408 = G__29416;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29405);
if(temp__4425__auto__){
var seq__29405__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29405__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__29405__$1);
var G__29417 = cljs.core.chunk_rest.call(null,seq__29405__$1);
var G__29418 = c__17266__auto__;
var G__29419 = cljs.core.count.call(null,c__17266__auto__);
var G__29420 = (0);
seq__29405 = G__29417;
chunk__29406 = G__29418;
count__29407 = G__29419;
i__29408 = G__29420;
continue;
} else {
var vec__29410 = cljs.core.first.call(null,seq__29405__$1);
var keyword = cljs.core.nth.call(null,vec__29410,(0),null);
var value = cljs.core.nth.call(null,vec__29410,(1),null);
var ns_29421 = cljs.core.namespace.call(null,keyword);
var name_29422 = cljs.core.name.call(null,keyword);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

cljs.compiler.emits_keyword.call(null,keyword);

cljs.compiler.emits.call(null,";\n");

var G__29423 = cljs.core.next.call(null,seq__29405__$1);
var G__29424 = null;
var G__29425 = (0);
var G__29426 = (0);
seq__29405 = G__29423;
chunk__29406 = G__29424;
count__29407 = G__29425;
i__29408 = G__29426;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map