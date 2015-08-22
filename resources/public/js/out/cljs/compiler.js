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
var map__27304 = s;
var map__27304__$1 = ((((!((map__27304 == null)))?((((map__27304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27304):map__27304);
var name = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27304__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__27307 = info;
var map__27308 = G__27307;
var map__27308__$1 = ((((!((map__27308 == null)))?((((map__27308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27308):map__27308);
var shadow = cljs.core.get.call(null,map__27308__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__27307__$1 = G__27307;
while(true){
var d__$2 = d__$1;
var map__27310 = G__27307__$1;
var map__27310__$1 = ((((!((map__27310 == null)))?((((map__27310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27310):map__27310);
var shadow__$1 = cljs.core.get.call(null,map__27310__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__27312 = (d__$2 + (1));
var G__27313 = shadow__$1;
d__$1 = G__27312;
G__27307__$1 = G__27313;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__27314){
var map__27319 = p__27314;
var map__27319__$1 = ((((!((map__27319 == null)))?((((map__27319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27319):map__27319);
var name_var = map__27319__$1;
var name = cljs.core.get.call(null,map__27319__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__27319__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__27321 = info;
var map__27321__$1 = ((((!((map__27321 == null)))?((((map__27321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27321):map__27321);
var ns = cljs.core.get.call(null,map__27321__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__27321__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args27323 = [];
var len__17521__auto___27326 = arguments.length;
var i__17522__auto___27327 = (0);
while(true){
if((i__17522__auto___27327 < len__17521__auto___27326)){
args27323.push((arguments[i__17522__auto___27327]));

var G__27328 = (i__17522__auto___27327 + (1));
i__17522__auto___27327 = G__27328;
continue;
} else {
}
break;
}

var G__27325 = args27323.length;
switch (G__27325) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27323.length)].join('')));

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
var G__27331 = cp;
switch (G__27331) {
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
var seq__27337_27341 = cljs.core.seq.call(null,s);
var chunk__27338_27342 = null;
var count__27339_27343 = (0);
var i__27340_27344 = (0);
while(true){
if((i__27340_27344 < count__27339_27343)){
var c_27345 = cljs.core._nth.call(null,chunk__27338_27342,i__27340_27344);
sb.append(cljs.compiler.escape_char.call(null,c_27345));

var G__27346 = seq__27337_27341;
var G__27347 = chunk__27338_27342;
var G__27348 = count__27339_27343;
var G__27349 = (i__27340_27344 + (1));
seq__27337_27341 = G__27346;
chunk__27338_27342 = G__27347;
count__27339_27343 = G__27348;
i__27340_27344 = G__27349;
continue;
} else {
var temp__4425__auto___27350 = cljs.core.seq.call(null,seq__27337_27341);
if(temp__4425__auto___27350){
var seq__27337_27351__$1 = temp__4425__auto___27350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27337_27351__$1)){
var c__17266__auto___27352 = cljs.core.chunk_first.call(null,seq__27337_27351__$1);
var G__27353 = cljs.core.chunk_rest.call(null,seq__27337_27351__$1);
var G__27354 = c__17266__auto___27352;
var G__27355 = cljs.core.count.call(null,c__17266__auto___27352);
var G__27356 = (0);
seq__27337_27341 = G__27353;
chunk__27338_27342 = G__27354;
count__27339_27343 = G__27355;
i__27340_27344 = G__27356;
continue;
} else {
var c_27357 = cljs.core.first.call(null,seq__27337_27351__$1);
sb.append(cljs.compiler.escape_char.call(null,c_27357));

var G__27358 = cljs.core.next.call(null,seq__27337_27351__$1);
var G__27359 = null;
var G__27360 = (0);
var G__27361 = (0);
seq__27337_27341 = G__27358;
chunk__27338_27342 = G__27359;
count__27339_27343 = G__27360;
i__27340_27344 = G__27361;
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
var val__17832__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__17832__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__27367_27372 = ast;
var map__27367_27373__$1 = ((((!((map__27367_27372 == null)))?((((map__27367_27372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27367_27372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27367_27372):map__27367_27372);
var env_27374 = cljs.core.get.call(null,map__27367_27373__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_27374))){
var map__27369_27375 = env_27374;
var map__27369_27376__$1 = ((((!((map__27369_27375 == null)))?((((map__27369_27375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27369_27375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27369_27375):map__27369_27375);
var line_27377 = cljs.core.get.call(null,map__27369_27376__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27378 = cljs.core.get.call(null,map__27369_27376__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__27369_27375,map__27369_27376__$1,line_27377,column_27378,map__27367_27372,map__27367_27373__$1,env_27374,val__17832__auto__){
return (function (m){
var minfo = (function (){var G__27371 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__27371__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__27371,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__27371);
return G__27371__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_27377 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__27369_27375,map__27369_27376__$1,line_27377,column_27378,map__27367_27372,map__27367_27373__$1,env_27374,val__17832__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_27378)?(column_27378 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__27369_27375,map__27369_27376__$1,line_27377,column_27378,map__27367_27372,map__27367_27373__$1,env_27374,val__17832__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__27369_27375,map__27369_27376__$1,line_27377,column_27378,map__27367_27372,map__27367_27373__$1,env_27374,val__17832__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__27369_27375,map__27369_27376__$1,line_27377,column_27378,map__27367_27372,map__27367_27373__$1,env_27374,val__17832__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__27369_27375,map__27369_27376__$1,line_27377,column_27378,map__27367_27372,map__27367_27373__$1,env_27374,val__17832__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__17832__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(){
var args__17528__auto__ = [];
var len__17521__auto___27385 = arguments.length;
var i__17522__auto___27386 = (0);
while(true){
if((i__17522__auto___27386 < len__17521__auto___27385)){
args__17528__auto__.push((arguments[i__17522__auto___27386]));

var G__27387 = (i__17522__auto___27386 + (1));
i__17522__auto___27386 = G__27387;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__27381_27388 = cljs.core.seq.call(null,xs);
var chunk__27382_27389 = null;
var count__27383_27390 = (0);
var i__27384_27391 = (0);
while(true){
if((i__27384_27391 < count__27383_27390)){
var x_27392 = cljs.core._nth.call(null,chunk__27382_27389,i__27384_27391);
if((x_27392 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_27392)){
cljs.compiler.emit.call(null,x_27392);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_27392)){
cljs.core.apply.call(null,cljs.compiler.emits,x_27392);
} else {
if(goog.isFunction(x_27392)){
x_27392.call(null);
} else {
var s_27393 = cljs.core.print_str.call(null,x_27392);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__27381_27388,chunk__27382_27389,count__27383_27390,i__27384_27391,s_27393,x_27392){
return (function (p1__27379_SHARP_){
return (p1__27379_SHARP_ + cljs.core.count.call(null,s_27393));
});})(seq__27381_27388,chunk__27382_27389,count__27383_27390,i__27384_27391,s_27393,x_27392))
);
}

cljs.core.print.call(null,s_27393);

}
}
}
}

var G__27394 = seq__27381_27388;
var G__27395 = chunk__27382_27389;
var G__27396 = count__27383_27390;
var G__27397 = (i__27384_27391 + (1));
seq__27381_27388 = G__27394;
chunk__27382_27389 = G__27395;
count__27383_27390 = G__27396;
i__27384_27391 = G__27397;
continue;
} else {
var temp__4425__auto___27398 = cljs.core.seq.call(null,seq__27381_27388);
if(temp__4425__auto___27398){
var seq__27381_27399__$1 = temp__4425__auto___27398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27381_27399__$1)){
var c__17266__auto___27400 = cljs.core.chunk_first.call(null,seq__27381_27399__$1);
var G__27401 = cljs.core.chunk_rest.call(null,seq__27381_27399__$1);
var G__27402 = c__17266__auto___27400;
var G__27403 = cljs.core.count.call(null,c__17266__auto___27400);
var G__27404 = (0);
seq__27381_27388 = G__27401;
chunk__27382_27389 = G__27402;
count__27383_27390 = G__27403;
i__27384_27391 = G__27404;
continue;
} else {
var x_27405 = cljs.core.first.call(null,seq__27381_27399__$1);
if((x_27405 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_27405)){
cljs.compiler.emit.call(null,x_27405);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_27405)){
cljs.core.apply.call(null,cljs.compiler.emits,x_27405);
} else {
if(goog.isFunction(x_27405)){
x_27405.call(null);
} else {
var s_27406 = cljs.core.print_str.call(null,x_27405);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__27381_27388,chunk__27382_27389,count__27383_27390,i__27384_27391,s_27406,x_27405,seq__27381_27399__$1,temp__4425__auto___27398){
return (function (p1__27379_SHARP_){
return (p1__27379_SHARP_ + cljs.core.count.call(null,s_27406));
});})(seq__27381_27388,chunk__27382_27389,count__27383_27390,i__27384_27391,s_27406,x_27405,seq__27381_27399__$1,temp__4425__auto___27398))
);
}

cljs.core.print.call(null,s_27406);

}
}
}
}

var G__27407 = cljs.core.next.call(null,seq__27381_27399__$1);
var G__27408 = null;
var G__27409 = (0);
var G__27410 = (0);
seq__27381_27388 = G__27407;
chunk__27382_27389 = G__27408;
count__27383_27390 = G__27409;
i__27384_27391 = G__27410;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq27380){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27380));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(){
var args__17528__auto__ = [];
var len__17521__auto___27415 = arguments.length;
var i__17522__auto___27416 = (0);
while(true){
if((i__17522__auto___27416 < len__17521__auto___27415)){
args__17528__auto__.push((arguments[i__17522__auto___27416]));

var G__27417 = (i__17522__auto___27416 + (1));
i__17522__auto___27416 = G__27417;
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
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__27412){
var map__27413 = p__27412;
var map__27413__$1 = ((((!((map__27413 == null)))?((((map__27413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27413):map__27413);
var m = map__27413__$1;
var gen_line = cljs.core.get.call(null,map__27413__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq27411){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27411));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__17437__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_27420_27422 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_27421_27423 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_27420_27422,_STAR_print_fn_STAR_27421_27423,sb__17437__auto__){
return (function (x__17438__auto__){
return sb__17437__auto__.append(x__17438__auto__);
});})(_STAR_print_newline_STAR_27420_27422,_STAR_print_fn_STAR_27421_27423,sb__17437__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27421_27423;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27420_27422;
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
var vec__27424 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__27424,(0),null);
var flags = cljs.core.nth.call(null,vec__27424,(1),null);
var pattern = cljs.core.nth.call(null,vec__27424,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__27426){
var map__27427 = p__27426;
var map__27427__$1 = ((((!((map__27427 == null)))?((((map__27427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27427):map__27427);
var arg = map__27427__$1;
var info = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__27429 = info__$1;
var G__27429__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__27429):G__27429);
return G__27429__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__27430){
var map__27431 = p__27430;
var map__27431__$1 = ((((!((map__27431 == null)))?((((map__27431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27431):map__27431);
var arg = map__27431__$1;
var env = cljs.core.get.call(null,map__27431__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__27431__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__27431__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__27431__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__27433 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__27433__$1 = ((((!((map__27433 == null)))?((((map__27433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27433):map__27433);
var name = cljs.core.get.call(null,map__27433__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__27435){
var map__27436 = p__27435;
var map__27436__$1 = ((((!((map__27436 == null)))?((((map__27436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27436):map__27436);
var expr = cljs.core.get.call(null,map__27436__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__27436__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__27436__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__27438_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27438_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__27439){
var map__27440 = p__27439;
var map__27440__$1 = ((((!((map__27440 == null)))?((((map__27440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27440):map__27440);
var env = cljs.core.get.call(null,map__27440__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__27440__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__27440__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__27442){
var map__27443 = p__27442;
var map__27443__$1 = ((((!((map__27443 == null)))?((((map__27443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27443):map__27443);
var items = cljs.core.get.call(null,map__27443__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27443__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__27445){
var map__27446 = p__27445;
var map__27446__$1 = ((((!((map__27446 == null)))?((((map__27446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27446):map__27446);
var items = cljs.core.get.call(null,map__27446__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27446__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_27448 = cljs.core.count.call(null,items);
if((cnt_27448 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_27448,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__27449_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__27449_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__27450){
var map__27451 = p__27450;
var map__27451__$1 = ((((!((map__27451 == null)))?((((map__27451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27451):map__27451);
var items = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__27451__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__27453){
var map__27454 = p__27453;
var map__27454__$1 = ((((!((map__27454 == null)))?((((map__27454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27454):map__27454);
var items = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__27454__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___27464 = cljs.core.seq.call(null,items);
if(temp__4425__auto___27464){
var items_27465__$1 = temp__4425__auto___27464;
var vec__27456_27466 = items_27465__$1;
var vec__27457_27467 = cljs.core.nth.call(null,vec__27456_27466,(0),null);
var k_27468 = cljs.core.nth.call(null,vec__27457_27467,(0),null);
var v_27469 = cljs.core.nth.call(null,vec__27457_27467,(1),null);
var r_27470 = cljs.core.nthnext.call(null,vec__27456_27466,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_27468),"\": ",v_27469);

var seq__27458_27471 = cljs.core.seq.call(null,r_27470);
var chunk__27459_27472 = null;
var count__27460_27473 = (0);
var i__27461_27474 = (0);
while(true){
if((i__27461_27474 < count__27460_27473)){
var vec__27462_27475 = cljs.core._nth.call(null,chunk__27459_27472,i__27461_27474);
var k_27476__$1 = cljs.core.nth.call(null,vec__27462_27475,(0),null);
var v_27477__$1 = cljs.core.nth.call(null,vec__27462_27475,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_27476__$1),"\": ",v_27477__$1);

var G__27478 = seq__27458_27471;
var G__27479 = chunk__27459_27472;
var G__27480 = count__27460_27473;
var G__27481 = (i__27461_27474 + (1));
seq__27458_27471 = G__27478;
chunk__27459_27472 = G__27479;
count__27460_27473 = G__27480;
i__27461_27474 = G__27481;
continue;
} else {
var temp__4425__auto___27482__$1 = cljs.core.seq.call(null,seq__27458_27471);
if(temp__4425__auto___27482__$1){
var seq__27458_27483__$1 = temp__4425__auto___27482__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27458_27483__$1)){
var c__17266__auto___27484 = cljs.core.chunk_first.call(null,seq__27458_27483__$1);
var G__27485 = cljs.core.chunk_rest.call(null,seq__27458_27483__$1);
var G__27486 = c__17266__auto___27484;
var G__27487 = cljs.core.count.call(null,c__17266__auto___27484);
var G__27488 = (0);
seq__27458_27471 = G__27485;
chunk__27459_27472 = G__27486;
count__27460_27473 = G__27487;
i__27461_27474 = G__27488;
continue;
} else {
var vec__27463_27489 = cljs.core.first.call(null,seq__27458_27483__$1);
var k_27490__$1 = cljs.core.nth.call(null,vec__27463_27489,(0),null);
var v_27491__$1 = cljs.core.nth.call(null,vec__27463_27489,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_27490__$1),"\": ",v_27491__$1);

var G__27492 = cljs.core.next.call(null,seq__27458_27483__$1);
var G__27493 = null;
var G__27494 = (0);
var G__27495 = (0);
seq__27458_27471 = G__27492;
chunk__27459_27472 = G__27493;
count__27460_27473 = G__27494;
i__27461_27474 = G__27495;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__27496){
var map__27497 = p__27496;
var map__27497__$1 = ((((!((map__27497 == null)))?((((map__27497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27497):map__27497);
var form = cljs.core.get.call(null,map__27497__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__27497__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__27499){
var map__27502 = p__27499;
var map__27502__$1 = ((((!((map__27502 == null)))?((((map__27502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27502):map__27502);
var op = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__27502__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__27504){
var map__27507 = p__27504;
var map__27507__$1 = ((((!((map__27507 == null)))?((((map__27507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27507):map__27507);
var op = cljs.core.get.call(null,map__27507__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__27507__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__27509){
var map__27510 = p__27509;
var map__27510__$1 = ((((!((map__27510 == null)))?((((map__27510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27510):map__27510);
var test = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__27510__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__27512){
var map__27513 = p__27512;
var map__27513__$1 = ((((!((map__27513 == null)))?((((map__27513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27513):map__27513);
var v = cljs.core.get.call(null,map__27513__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__27513__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__27513__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__27513__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__27513__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__27515_27529 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__27516_27530 = null;
var count__27517_27531 = (0);
var i__27518_27532 = (0);
while(true){
if((i__27518_27532 < count__27517_27531)){
var vec__27519_27533 = cljs.core._nth.call(null,chunk__27516_27530,i__27518_27532);
var ts_27534 = cljs.core.nth.call(null,vec__27519_27533,(0),null);
var then_27535 = cljs.core.nth.call(null,vec__27519_27533,(1),null);
var seq__27520_27536 = cljs.core.seq.call(null,ts_27534);
var chunk__27521_27537 = null;
var count__27522_27538 = (0);
var i__27523_27539 = (0);
while(true){
if((i__27523_27539 < count__27522_27538)){
var test_27540 = cljs.core._nth.call(null,chunk__27521_27537,i__27523_27539);
cljs.compiler.emitln.call(null,"case ",test_27540,":");

var G__27541 = seq__27520_27536;
var G__27542 = chunk__27521_27537;
var G__27543 = count__27522_27538;
var G__27544 = (i__27523_27539 + (1));
seq__27520_27536 = G__27541;
chunk__27521_27537 = G__27542;
count__27522_27538 = G__27543;
i__27523_27539 = G__27544;
continue;
} else {
var temp__4425__auto___27545 = cljs.core.seq.call(null,seq__27520_27536);
if(temp__4425__auto___27545){
var seq__27520_27546__$1 = temp__4425__auto___27545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27520_27546__$1)){
var c__17266__auto___27547 = cljs.core.chunk_first.call(null,seq__27520_27546__$1);
var G__27548 = cljs.core.chunk_rest.call(null,seq__27520_27546__$1);
var G__27549 = c__17266__auto___27547;
var G__27550 = cljs.core.count.call(null,c__17266__auto___27547);
var G__27551 = (0);
seq__27520_27536 = G__27548;
chunk__27521_27537 = G__27549;
count__27522_27538 = G__27550;
i__27523_27539 = G__27551;
continue;
} else {
var test_27552 = cljs.core.first.call(null,seq__27520_27546__$1);
cljs.compiler.emitln.call(null,"case ",test_27552,":");

var G__27553 = cljs.core.next.call(null,seq__27520_27546__$1);
var G__27554 = null;
var G__27555 = (0);
var G__27556 = (0);
seq__27520_27536 = G__27553;
chunk__27521_27537 = G__27554;
count__27522_27538 = G__27555;
i__27523_27539 = G__27556;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_27535);
} else {
cljs.compiler.emitln.call(null,then_27535);
}

cljs.compiler.emitln.call(null,"break;");

var G__27557 = seq__27515_27529;
var G__27558 = chunk__27516_27530;
var G__27559 = count__27517_27531;
var G__27560 = (i__27518_27532 + (1));
seq__27515_27529 = G__27557;
chunk__27516_27530 = G__27558;
count__27517_27531 = G__27559;
i__27518_27532 = G__27560;
continue;
} else {
var temp__4425__auto___27561 = cljs.core.seq.call(null,seq__27515_27529);
if(temp__4425__auto___27561){
var seq__27515_27562__$1 = temp__4425__auto___27561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27515_27562__$1)){
var c__17266__auto___27563 = cljs.core.chunk_first.call(null,seq__27515_27562__$1);
var G__27564 = cljs.core.chunk_rest.call(null,seq__27515_27562__$1);
var G__27565 = c__17266__auto___27563;
var G__27566 = cljs.core.count.call(null,c__17266__auto___27563);
var G__27567 = (0);
seq__27515_27529 = G__27564;
chunk__27516_27530 = G__27565;
count__27517_27531 = G__27566;
i__27518_27532 = G__27567;
continue;
} else {
var vec__27524_27568 = cljs.core.first.call(null,seq__27515_27562__$1);
var ts_27569 = cljs.core.nth.call(null,vec__27524_27568,(0),null);
var then_27570 = cljs.core.nth.call(null,vec__27524_27568,(1),null);
var seq__27525_27571 = cljs.core.seq.call(null,ts_27569);
var chunk__27526_27572 = null;
var count__27527_27573 = (0);
var i__27528_27574 = (0);
while(true){
if((i__27528_27574 < count__27527_27573)){
var test_27575 = cljs.core._nth.call(null,chunk__27526_27572,i__27528_27574);
cljs.compiler.emitln.call(null,"case ",test_27575,":");

var G__27576 = seq__27525_27571;
var G__27577 = chunk__27526_27572;
var G__27578 = count__27527_27573;
var G__27579 = (i__27528_27574 + (1));
seq__27525_27571 = G__27576;
chunk__27526_27572 = G__27577;
count__27527_27573 = G__27578;
i__27528_27574 = G__27579;
continue;
} else {
var temp__4425__auto___27580__$1 = cljs.core.seq.call(null,seq__27525_27571);
if(temp__4425__auto___27580__$1){
var seq__27525_27581__$1 = temp__4425__auto___27580__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27525_27581__$1)){
var c__17266__auto___27582 = cljs.core.chunk_first.call(null,seq__27525_27581__$1);
var G__27583 = cljs.core.chunk_rest.call(null,seq__27525_27581__$1);
var G__27584 = c__17266__auto___27582;
var G__27585 = cljs.core.count.call(null,c__17266__auto___27582);
var G__27586 = (0);
seq__27525_27571 = G__27583;
chunk__27526_27572 = G__27584;
count__27527_27573 = G__27585;
i__27528_27574 = G__27586;
continue;
} else {
var test_27587 = cljs.core.first.call(null,seq__27525_27581__$1);
cljs.compiler.emitln.call(null,"case ",test_27587,":");

var G__27588 = cljs.core.next.call(null,seq__27525_27581__$1);
var G__27589 = null;
var G__27590 = (0);
var G__27591 = (0);
seq__27525_27571 = G__27588;
chunk__27526_27572 = G__27589;
count__27527_27573 = G__27590;
i__27528_27574 = G__27591;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_27570);
} else {
cljs.compiler.emitln.call(null,then_27570);
}

cljs.compiler.emitln.call(null,"break;");

var G__27592 = cljs.core.next.call(null,seq__27515_27562__$1);
var G__27593 = null;
var G__27594 = (0);
var G__27595 = (0);
seq__27515_27529 = G__27592;
chunk__27516_27530 = G__27593;
count__27517_27531 = G__27594;
i__27518_27532 = G__27595;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__27596){
var map__27597 = p__27596;
var map__27597__$1 = ((((!((map__27597 == null)))?((((map__27597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27597):map__27597);
var throw$ = cljs.core.get.call(null,map__27597__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__27597__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var seq__27631 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,e));
var chunk__27632 = null;
var count__27633 = (0);
var i__27634 = (0);
while(true){
if((i__27634 < count__27633)){
var next_line = cljs.core._nth.call(null,chunk__27632,i__27634);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.trim.call(null,next_line),"*/","* /"));

var G__27639 = seq__27631;
var G__27640 = chunk__27632;
var G__27641 = count__27633;
var G__27642 = (i__27634 + (1));
seq__27631 = G__27639;
chunk__27632 = G__27640;
count__27633 = G__27641;
i__27634 = G__27642;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27631);
if(temp__4425__auto__){
var seq__27631__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27631__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__27631__$1);
var G__27643 = cljs.core.chunk_rest.call(null,seq__27631__$1);
var G__27644 = c__17266__auto__;
var G__27645 = cljs.core.count.call(null,c__17266__auto__);
var G__27646 = (0);
seq__27631 = G__27643;
chunk__27632 = G__27644;
count__27633 = G__27645;
i__27634 = G__27646;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__27631__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.trim.call(null,next_line),"*/","* /"));

var G__27647 = cljs.core.next.call(null,seq__27631__$1);
var G__27648 = null;
var G__27649 = (0);
var G__27650 = (0);
seq__27631 = G__27647;
chunk__27632 = G__27648;
count__27633 = G__27649;
i__27634 = G__27650;
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

var seq__27635_27651 = cljs.core.seq.call(null,docs__$2);
var chunk__27636_27652 = null;
var count__27637_27653 = (0);
var i__27638_27654 = (0);
while(true){
if((i__27638_27654 < count__27637_27653)){
var e_27655 = cljs.core._nth.call(null,chunk__27636_27652,i__27638_27654);
if(cljs.core.truth_(e_27655)){
print_comment_lines.call(null,e_27655);
} else {
}

var G__27656 = seq__27635_27651;
var G__27657 = chunk__27636_27652;
var G__27658 = count__27637_27653;
var G__27659 = (i__27638_27654 + (1));
seq__27635_27651 = G__27656;
chunk__27636_27652 = G__27657;
count__27637_27653 = G__27658;
i__27638_27654 = G__27659;
continue;
} else {
var temp__4425__auto___27660 = cljs.core.seq.call(null,seq__27635_27651);
if(temp__4425__auto___27660){
var seq__27635_27661__$1 = temp__4425__auto___27660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27635_27661__$1)){
var c__17266__auto___27662 = cljs.core.chunk_first.call(null,seq__27635_27661__$1);
var G__27663 = cljs.core.chunk_rest.call(null,seq__27635_27661__$1);
var G__27664 = c__17266__auto___27662;
var G__27665 = cljs.core.count.call(null,c__17266__auto___27662);
var G__27666 = (0);
seq__27635_27651 = G__27663;
chunk__27636_27652 = G__27664;
count__27637_27653 = G__27665;
i__27638_27654 = G__27666;
continue;
} else {
var e_27667 = cljs.core.first.call(null,seq__27635_27661__$1);
if(cljs.core.truth_(e_27667)){
print_comment_lines.call(null,e_27667);
} else {
}

var G__27668 = cljs.core.next.call(null,seq__27635_27661__$1);
var G__27669 = null;
var G__27670 = (0);
var G__27671 = (0);
seq__27635_27651 = G__27668;
chunk__27636_27652 = G__27669;
count__27637_27653 = G__27670;
i__27638_27654 = G__27671;
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
return (function (p1__27673_SHARP_){
return goog.string.startsWith(p1__27673_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__27674){
var map__27675 = p__27674;
var map__27675__$1 = ((((!((map__27675 == null)))?((((map__27675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27675):map__27675);
var name = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__27675__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__27677){
var map__27694 = p__27677;
var map__27694__$1 = ((((!((map__27694 == null)))?((((map__27694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27694):map__27694);
var name = cljs.core.get.call(null,map__27694__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__27694__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__27694__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__27696_27710 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__27697_27711 = null;
var count__27698_27712 = (0);
var i__27699_27713 = (0);
while(true){
if((i__27699_27713 < count__27698_27712)){
var vec__27700_27714 = cljs.core._nth.call(null,chunk__27697_27711,i__27699_27713);
var i_27715 = cljs.core.nth.call(null,vec__27700_27714,(0),null);
var param_27716 = cljs.core.nth.call(null,vec__27700_27714,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_27716);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__27717 = seq__27696_27710;
var G__27718 = chunk__27697_27711;
var G__27719 = count__27698_27712;
var G__27720 = (i__27699_27713 + (1));
seq__27696_27710 = G__27717;
chunk__27697_27711 = G__27718;
count__27698_27712 = G__27719;
i__27699_27713 = G__27720;
continue;
} else {
var temp__4425__auto___27721 = cljs.core.seq.call(null,seq__27696_27710);
if(temp__4425__auto___27721){
var seq__27696_27722__$1 = temp__4425__auto___27721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27696_27722__$1)){
var c__17266__auto___27723 = cljs.core.chunk_first.call(null,seq__27696_27722__$1);
var G__27724 = cljs.core.chunk_rest.call(null,seq__27696_27722__$1);
var G__27725 = c__17266__auto___27723;
var G__27726 = cljs.core.count.call(null,c__17266__auto___27723);
var G__27727 = (0);
seq__27696_27710 = G__27724;
chunk__27697_27711 = G__27725;
count__27698_27712 = G__27726;
i__27699_27713 = G__27727;
continue;
} else {
var vec__27701_27728 = cljs.core.first.call(null,seq__27696_27722__$1);
var i_27729 = cljs.core.nth.call(null,vec__27701_27728,(0),null);
var param_27730 = cljs.core.nth.call(null,vec__27701_27728,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_27730);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__27731 = cljs.core.next.call(null,seq__27696_27722__$1);
var G__27732 = null;
var G__27733 = (0);
var G__27734 = (0);
seq__27696_27710 = G__27731;
chunk__27697_27711 = G__27732;
count__27698_27712 = G__27733;
i__27699_27713 = G__27734;
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

var seq__27702_27735 = cljs.core.seq.call(null,params);
var chunk__27703_27736 = null;
var count__27704_27737 = (0);
var i__27705_27738 = (0);
while(true){
if((i__27705_27738 < count__27704_27737)){
var param_27739 = cljs.core._nth.call(null,chunk__27703_27736,i__27705_27738);
cljs.compiler.emit.call(null,param_27739);

if(cljs.core._EQ_.call(null,param_27739,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__27740 = seq__27702_27735;
var G__27741 = chunk__27703_27736;
var G__27742 = count__27704_27737;
var G__27743 = (i__27705_27738 + (1));
seq__27702_27735 = G__27740;
chunk__27703_27736 = G__27741;
count__27704_27737 = G__27742;
i__27705_27738 = G__27743;
continue;
} else {
var temp__4425__auto___27744 = cljs.core.seq.call(null,seq__27702_27735);
if(temp__4425__auto___27744){
var seq__27702_27745__$1 = temp__4425__auto___27744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27702_27745__$1)){
var c__17266__auto___27746 = cljs.core.chunk_first.call(null,seq__27702_27745__$1);
var G__27747 = cljs.core.chunk_rest.call(null,seq__27702_27745__$1);
var G__27748 = c__17266__auto___27746;
var G__27749 = cljs.core.count.call(null,c__17266__auto___27746);
var G__27750 = (0);
seq__27702_27735 = G__27747;
chunk__27703_27736 = G__27748;
count__27704_27737 = G__27749;
i__27705_27738 = G__27750;
continue;
} else {
var param_27751 = cljs.core.first.call(null,seq__27702_27745__$1);
cljs.compiler.emit.call(null,param_27751);

if(cljs.core._EQ_.call(null,param_27751,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__27752 = cljs.core.next.call(null,seq__27702_27745__$1);
var G__27753 = null;
var G__27754 = (0);
var G__27755 = (0);
seq__27702_27735 = G__27752;
chunk__27703_27736 = G__27753;
count__27704_27737 = G__27754;
i__27705_27738 = G__27755;
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

var seq__27706_27756 = cljs.core.seq.call(null,params);
var chunk__27707_27757 = null;
var count__27708_27758 = (0);
var i__27709_27759 = (0);
while(true){
if((i__27709_27759 < count__27708_27758)){
var param_27760 = cljs.core._nth.call(null,chunk__27707_27757,i__27709_27759);
cljs.compiler.emit.call(null,param_27760);

if(cljs.core._EQ_.call(null,param_27760,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__27761 = seq__27706_27756;
var G__27762 = chunk__27707_27757;
var G__27763 = count__27708_27758;
var G__27764 = (i__27709_27759 + (1));
seq__27706_27756 = G__27761;
chunk__27707_27757 = G__27762;
count__27708_27758 = G__27763;
i__27709_27759 = G__27764;
continue;
} else {
var temp__4425__auto___27765 = cljs.core.seq.call(null,seq__27706_27756);
if(temp__4425__auto___27765){
var seq__27706_27766__$1 = temp__4425__auto___27765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27706_27766__$1)){
var c__17266__auto___27767 = cljs.core.chunk_first.call(null,seq__27706_27766__$1);
var G__27768 = cljs.core.chunk_rest.call(null,seq__27706_27766__$1);
var G__27769 = c__17266__auto___27767;
var G__27770 = cljs.core.count.call(null,c__17266__auto___27767);
var G__27771 = (0);
seq__27706_27756 = G__27768;
chunk__27707_27757 = G__27769;
count__27708_27758 = G__27770;
i__27709_27759 = G__27771;
continue;
} else {
var param_27772 = cljs.core.first.call(null,seq__27706_27766__$1);
cljs.compiler.emit.call(null,param_27772);

if(cljs.core._EQ_.call(null,param_27772,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__27773 = cljs.core.next.call(null,seq__27706_27766__$1);
var G__27774 = null;
var G__27775 = (0);
var G__27776 = (0);
seq__27706_27756 = G__27773;
chunk__27707_27757 = G__27774;
count__27708_27758 = G__27775;
i__27709_27759 = G__27776;
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
var seq__27781 = cljs.core.seq.call(null,params);
var chunk__27782 = null;
var count__27783 = (0);
var i__27784 = (0);
while(true){
if((i__27784 < count__27783)){
var param = cljs.core._nth.call(null,chunk__27782,i__27784);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__27785 = seq__27781;
var G__27786 = chunk__27782;
var G__27787 = count__27783;
var G__27788 = (i__27784 + (1));
seq__27781 = G__27785;
chunk__27782 = G__27786;
count__27783 = G__27787;
i__27784 = G__27788;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27781);
if(temp__4425__auto__){
var seq__27781__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27781__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__27781__$1);
var G__27789 = cljs.core.chunk_rest.call(null,seq__27781__$1);
var G__27790 = c__17266__auto__;
var G__27791 = cljs.core.count.call(null,c__17266__auto__);
var G__27792 = (0);
seq__27781 = G__27789;
chunk__27782 = G__27790;
count__27783 = G__27791;
i__27784 = G__27792;
continue;
} else {
var param = cljs.core.first.call(null,seq__27781__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__27793 = cljs.core.next.call(null,seq__27781__$1);
var G__27794 = null;
var G__27795 = (0);
var G__27796 = (0);
seq__27781 = G__27793;
chunk__27782 = G__27794;
count__27783 = G__27795;
i__27784 = G__27796;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__27797){
var map__27800 = p__27797;
var map__27800__$1 = ((((!((map__27800 == null)))?((((map__27800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27800):map__27800);
var type = cljs.core.get.call(null,map__27800__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__27800__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__27800__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__27800__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__27800__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__27800__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__27800__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__27800__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__27802){
var map__27813 = p__27802;
var map__27813__$1 = ((((!((map__27813 == null)))?((((map__27813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27813):map__27813);
var f = map__27813__$1;
var type = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__27813__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_27823__$1 = (function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27824 = cljs.compiler.munge.call(null,name_27823__$1);
var delegate_name_27825 = [cljs.core.str(mname_27824),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_27825," = function (");

var seq__27815_27826 = cljs.core.seq.call(null,params);
var chunk__27816_27827 = null;
var count__27817_27828 = (0);
var i__27818_27829 = (0);
while(true){
if((i__27818_27829 < count__27817_27828)){
var param_27830 = cljs.core._nth.call(null,chunk__27816_27827,i__27818_27829);
cljs.compiler.emit.call(null,param_27830);

if(cljs.core._EQ_.call(null,param_27830,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__27831 = seq__27815_27826;
var G__27832 = chunk__27816_27827;
var G__27833 = count__27817_27828;
var G__27834 = (i__27818_27829 + (1));
seq__27815_27826 = G__27831;
chunk__27816_27827 = G__27832;
count__27817_27828 = G__27833;
i__27818_27829 = G__27834;
continue;
} else {
var temp__4425__auto___27835 = cljs.core.seq.call(null,seq__27815_27826);
if(temp__4425__auto___27835){
var seq__27815_27836__$1 = temp__4425__auto___27835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27815_27836__$1)){
var c__17266__auto___27837 = cljs.core.chunk_first.call(null,seq__27815_27836__$1);
var G__27838 = cljs.core.chunk_rest.call(null,seq__27815_27836__$1);
var G__27839 = c__17266__auto___27837;
var G__27840 = cljs.core.count.call(null,c__17266__auto___27837);
var G__27841 = (0);
seq__27815_27826 = G__27838;
chunk__27816_27827 = G__27839;
count__27817_27828 = G__27840;
i__27818_27829 = G__27841;
continue;
} else {
var param_27842 = cljs.core.first.call(null,seq__27815_27836__$1);
cljs.compiler.emit.call(null,param_27842);

if(cljs.core._EQ_.call(null,param_27842,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__27843 = cljs.core.next.call(null,seq__27815_27836__$1);
var G__27844 = null;
var G__27845 = (0);
var G__27846 = (0);
seq__27815_27826 = G__27843;
chunk__27816_27827 = G__27844;
count__27817_27828 = G__27845;
i__27818_27829 = G__27846;
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

cljs.compiler.emitln.call(null,"var ",mname_27824," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_27847 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_27847,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_27825,".call(this,");

var seq__27819_27848 = cljs.core.seq.call(null,params);
var chunk__27820_27849 = null;
var count__27821_27850 = (0);
var i__27822_27851 = (0);
while(true){
if((i__27822_27851 < count__27821_27850)){
var param_27852 = cljs.core._nth.call(null,chunk__27820_27849,i__27822_27851);
cljs.compiler.emit.call(null,param_27852);

if(cljs.core._EQ_.call(null,param_27852,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__27853 = seq__27819_27848;
var G__27854 = chunk__27820_27849;
var G__27855 = count__27821_27850;
var G__27856 = (i__27822_27851 + (1));
seq__27819_27848 = G__27853;
chunk__27820_27849 = G__27854;
count__27821_27850 = G__27855;
i__27822_27851 = G__27856;
continue;
} else {
var temp__4425__auto___27857 = cljs.core.seq.call(null,seq__27819_27848);
if(temp__4425__auto___27857){
var seq__27819_27858__$1 = temp__4425__auto___27857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27819_27858__$1)){
var c__17266__auto___27859 = cljs.core.chunk_first.call(null,seq__27819_27858__$1);
var G__27860 = cljs.core.chunk_rest.call(null,seq__27819_27858__$1);
var G__27861 = c__17266__auto___27859;
var G__27862 = cljs.core.count.call(null,c__17266__auto___27859);
var G__27863 = (0);
seq__27819_27848 = G__27860;
chunk__27820_27849 = G__27861;
count__27821_27850 = G__27862;
i__27822_27851 = G__27863;
continue;
} else {
var param_27864 = cljs.core.first.call(null,seq__27819_27858__$1);
cljs.compiler.emit.call(null,param_27864);

if(cljs.core._EQ_.call(null,param_27864,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__27865 = cljs.core.next.call(null,seq__27819_27858__$1);
var G__27866 = null;
var G__27867 = (0);
var G__27868 = (0);
seq__27819_27848 = G__27865;
chunk__27820_27849 = G__27866;
count__27821_27850 = G__27867;
i__27822_27851 = G__27868;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_27824,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_27824,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_27823__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_27824,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_27825,";");

cljs.compiler.emitln.call(null,"return ",mname_27824,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__27872){
var map__27873 = p__27872;
var map__27873__$1 = ((((!((map__27873 == null)))?((((map__27873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27873):map__27873);
var name = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__27873__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__27873,map__27873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__27869_SHARP_){
var and__16470__auto__ = p1__27869_SHARP_;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__27869_SHARP_));
} else {
return and__16470__auto__;
}
});})(map__27873,map__27873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_27894__$1 = (function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_27895 = cljs.compiler.munge.call(null,name_27894__$1);
var maxparams_27896 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_27897 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_27894__$1,mname_27895,maxparams_27896,loop_locals,map__27873,map__27873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_27895),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_27894__$1,mname_27895,maxparams_27896,loop_locals,map__27873,map__27873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_27898 = cljs.core.sort_by.call(null,((function (name_27894__$1,mname_27895,maxparams_27896,mmap_27897,loop_locals,map__27873,map__27873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__27870_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__27870_SHARP_)));
});})(name_27894__$1,mname_27895,maxparams_27896,mmap_27897,loop_locals,map__27873,map__27873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_27897));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_27895," = null;");

var seq__27875_27899 = cljs.core.seq.call(null,ms_27898);
var chunk__27876_27900 = null;
var count__27877_27901 = (0);
var i__27878_27902 = (0);
while(true){
if((i__27878_27902 < count__27877_27901)){
var vec__27879_27903 = cljs.core._nth.call(null,chunk__27876_27900,i__27878_27902);
var n_27904 = cljs.core.nth.call(null,vec__27879_27903,(0),null);
var meth_27905 = cljs.core.nth.call(null,vec__27879_27903,(1),null);
cljs.compiler.emits.call(null,"var ",n_27904," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27905))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27905);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27905);
}

cljs.compiler.emitln.call(null,";");

var G__27906 = seq__27875_27899;
var G__27907 = chunk__27876_27900;
var G__27908 = count__27877_27901;
var G__27909 = (i__27878_27902 + (1));
seq__27875_27899 = G__27906;
chunk__27876_27900 = G__27907;
count__27877_27901 = G__27908;
i__27878_27902 = G__27909;
continue;
} else {
var temp__4425__auto___27910 = cljs.core.seq.call(null,seq__27875_27899);
if(temp__4425__auto___27910){
var seq__27875_27911__$1 = temp__4425__auto___27910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27875_27911__$1)){
var c__17266__auto___27912 = cljs.core.chunk_first.call(null,seq__27875_27911__$1);
var G__27913 = cljs.core.chunk_rest.call(null,seq__27875_27911__$1);
var G__27914 = c__17266__auto___27912;
var G__27915 = cljs.core.count.call(null,c__17266__auto___27912);
var G__27916 = (0);
seq__27875_27899 = G__27913;
chunk__27876_27900 = G__27914;
count__27877_27901 = G__27915;
i__27878_27902 = G__27916;
continue;
} else {
var vec__27880_27917 = cljs.core.first.call(null,seq__27875_27911__$1);
var n_27918 = cljs.core.nth.call(null,vec__27880_27917,(0),null);
var meth_27919 = cljs.core.nth.call(null,vec__27880_27917,(1),null);
cljs.compiler.emits.call(null,"var ",n_27918," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27919))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_27919);
} else {
cljs.compiler.emit_fn_method.call(null,meth_27919);
}

cljs.compiler.emitln.call(null,";");

var G__27920 = cljs.core.next.call(null,seq__27875_27911__$1);
var G__27921 = null;
var G__27922 = (0);
var G__27923 = (0);
seq__27875_27899 = G__27920;
chunk__27876_27900 = G__27921;
count__27877_27901 = G__27922;
i__27878_27902 = G__27923;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_27895," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_27896),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_27896)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_27896));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__27881_27924 = cljs.core.seq.call(null,ms_27898);
var chunk__27882_27925 = null;
var count__27883_27926 = (0);
var i__27884_27927 = (0);
while(true){
if((i__27884_27927 < count__27883_27926)){
var vec__27885_27928 = cljs.core._nth.call(null,chunk__27882_27925,i__27884_27927);
var n_27929 = cljs.core.nth.call(null,vec__27885_27928,(0),null);
var meth_27930 = cljs.core.nth.call(null,vec__27885_27928,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27930))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27931 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27931," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27932 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27931," = new cljs.core.IndexedSeq(",a_27932,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27929,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27896)),(((cljs.core.count.call(null,maxparams_27896) > (1)))?", ":null),restarg_27931,");");
} else {
var pcnt_27933 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27930));
cljs.compiler.emitln.call(null,"case ",pcnt_27933,":");

cljs.compiler.emitln.call(null,"return ",n_27929,".call(this",(((pcnt_27933 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27933,maxparams_27896))),",")),");");
}

var G__27934 = seq__27881_27924;
var G__27935 = chunk__27882_27925;
var G__27936 = count__27883_27926;
var G__27937 = (i__27884_27927 + (1));
seq__27881_27924 = G__27934;
chunk__27882_27925 = G__27935;
count__27883_27926 = G__27936;
i__27884_27927 = G__27937;
continue;
} else {
var temp__4425__auto___27938 = cljs.core.seq.call(null,seq__27881_27924);
if(temp__4425__auto___27938){
var seq__27881_27939__$1 = temp__4425__auto___27938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27881_27939__$1)){
var c__17266__auto___27940 = cljs.core.chunk_first.call(null,seq__27881_27939__$1);
var G__27941 = cljs.core.chunk_rest.call(null,seq__27881_27939__$1);
var G__27942 = c__17266__auto___27940;
var G__27943 = cljs.core.count.call(null,c__17266__auto___27940);
var G__27944 = (0);
seq__27881_27924 = G__27941;
chunk__27882_27925 = G__27942;
count__27883_27926 = G__27943;
i__27884_27927 = G__27944;
continue;
} else {
var vec__27886_27945 = cljs.core.first.call(null,seq__27881_27939__$1);
var n_27946 = cljs.core.nth.call(null,vec__27886_27945,(0),null);
var meth_27947 = cljs.core.nth.call(null,vec__27886_27945,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27947))){
cljs.compiler.emitln.call(null,"default:");

var restarg_27948 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_27948," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_27949 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_27948," = new cljs.core.IndexedSeq(",a_27949,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_27946,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_27896)),(((cljs.core.count.call(null,maxparams_27896) > (1)))?", ":null),restarg_27948,");");
} else {
var pcnt_27950 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27947));
cljs.compiler.emitln.call(null,"case ",pcnt_27950,":");

cljs.compiler.emitln.call(null,"return ",n_27946,".call(this",(((pcnt_27950 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_27950,maxparams_27896))),",")),");");
}

var G__27951 = cljs.core.next.call(null,seq__27881_27939__$1);
var G__27952 = null;
var G__27953 = (0);
var G__27954 = (0);
seq__27881_27924 = G__27951;
chunk__27882_27925 = G__27952;
count__27883_27926 = G__27953;
i__27884_27927 = G__27954;
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
cljs.compiler.emitln.call(null,mname_27895,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_27895,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_27894__$1,mname_27895,maxparams_27896,mmap_27897,ms_27898,loop_locals,map__27873,map__27873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__27871_SHARP_){
var vec__27887 = p1__27871_SHARP_;
var n = cljs.core.nth.call(null,vec__27887,(0),null);
var m = cljs.core.nth.call(null,vec__27887,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_27894__$1,mname_27895,maxparams_27896,mmap_27897,ms_27898,loop_locals,map__27873,map__27873__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_27898),".cljs$lang$applyTo;");
} else {
}

var seq__27888_27955 = cljs.core.seq.call(null,ms_27898);
var chunk__27889_27956 = null;
var count__27890_27957 = (0);
var i__27891_27958 = (0);
while(true){
if((i__27891_27958 < count__27890_27957)){
var vec__27892_27959 = cljs.core._nth.call(null,chunk__27889_27956,i__27891_27958);
var n_27960 = cljs.core.nth.call(null,vec__27892_27959,(0),null);
var meth_27961 = cljs.core.nth.call(null,vec__27892_27959,(1),null);
var c_27962 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27961));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27961))){
cljs.compiler.emitln.call(null,mname_27895,".cljs$core$IFn$_invoke$arity$variadic = ",n_27960,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27895,".cljs$core$IFn$_invoke$arity$",c_27962," = ",n_27960,";");
}

var G__27963 = seq__27888_27955;
var G__27964 = chunk__27889_27956;
var G__27965 = count__27890_27957;
var G__27966 = (i__27891_27958 + (1));
seq__27888_27955 = G__27963;
chunk__27889_27956 = G__27964;
count__27890_27957 = G__27965;
i__27891_27958 = G__27966;
continue;
} else {
var temp__4425__auto___27967 = cljs.core.seq.call(null,seq__27888_27955);
if(temp__4425__auto___27967){
var seq__27888_27968__$1 = temp__4425__auto___27967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27888_27968__$1)){
var c__17266__auto___27969 = cljs.core.chunk_first.call(null,seq__27888_27968__$1);
var G__27970 = cljs.core.chunk_rest.call(null,seq__27888_27968__$1);
var G__27971 = c__17266__auto___27969;
var G__27972 = cljs.core.count.call(null,c__17266__auto___27969);
var G__27973 = (0);
seq__27888_27955 = G__27970;
chunk__27889_27956 = G__27971;
count__27890_27957 = G__27972;
i__27891_27958 = G__27973;
continue;
} else {
var vec__27893_27974 = cljs.core.first.call(null,seq__27888_27968__$1);
var n_27975 = cljs.core.nth.call(null,vec__27893_27974,(0),null);
var meth_27976 = cljs.core.nth.call(null,vec__27893_27974,(1),null);
var c_27977 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_27976));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_27976))){
cljs.compiler.emitln.call(null,mname_27895,".cljs$core$IFn$_invoke$arity$variadic = ",n_27975,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_27895,".cljs$core$IFn$_invoke$arity$",c_27977," = ",n_27975,";");
}

var G__27978 = cljs.core.next.call(null,seq__27888_27968__$1);
var G__27979 = null;
var G__27980 = (0);
var G__27981 = (0);
seq__27888_27955 = G__27978;
chunk__27889_27956 = G__27979;
count__27890_27957 = G__27980;
i__27891_27958 = G__27981;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_27895,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__27982){
var map__27983 = p__27982;
var map__27983__$1 = ((((!((map__27983 == null)))?((((map__27983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27983):map__27983);
var statements = cljs.core.get.call(null,map__27983__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__27983__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__27983__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__27985_27989 = cljs.core.seq.call(null,statements);
var chunk__27986_27990 = null;
var count__27987_27991 = (0);
var i__27988_27992 = (0);
while(true){
if((i__27988_27992 < count__27987_27991)){
var s_27993 = cljs.core._nth.call(null,chunk__27986_27990,i__27988_27992);
cljs.compiler.emitln.call(null,s_27993);

var G__27994 = seq__27985_27989;
var G__27995 = chunk__27986_27990;
var G__27996 = count__27987_27991;
var G__27997 = (i__27988_27992 + (1));
seq__27985_27989 = G__27994;
chunk__27986_27990 = G__27995;
count__27987_27991 = G__27996;
i__27988_27992 = G__27997;
continue;
} else {
var temp__4425__auto___27998 = cljs.core.seq.call(null,seq__27985_27989);
if(temp__4425__auto___27998){
var seq__27985_27999__$1 = temp__4425__auto___27998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27985_27999__$1)){
var c__17266__auto___28000 = cljs.core.chunk_first.call(null,seq__27985_27999__$1);
var G__28001 = cljs.core.chunk_rest.call(null,seq__27985_27999__$1);
var G__28002 = c__17266__auto___28000;
var G__28003 = cljs.core.count.call(null,c__17266__auto___28000);
var G__28004 = (0);
seq__27985_27989 = G__28001;
chunk__27986_27990 = G__28002;
count__27987_27991 = G__28003;
i__27988_27992 = G__28004;
continue;
} else {
var s_28005 = cljs.core.first.call(null,seq__27985_27999__$1);
cljs.compiler.emitln.call(null,s_28005);

var G__28006 = cljs.core.next.call(null,seq__27985_27999__$1);
var G__28007 = null;
var G__28008 = (0);
var G__28009 = (0);
seq__27985_27989 = G__28006;
chunk__27986_27990 = G__28007;
count__27987_27991 = G__28008;
i__27988_27992 = G__28009;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__28010){
var map__28011 = p__28010;
var map__28011__$1 = ((((!((map__28011 == null)))?((((map__28011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28011):map__28011);
var env = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__28013,is_loop){
var map__28025 = p__28013;
var map__28025__$1 = ((((!((map__28025 == null)))?((((map__28025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28025):map__28025);
var bindings = cljs.core.get.call(null,map__28025__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__28025__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__28025__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_28027_28036 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_28027_28036,context,map__28025,map__28025__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core._hash.call(null,name),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_28027_28036,context,map__28025,map__28025__$1,bindings,expr,env))
,bindings):null));

try{var seq__28028_28037 = cljs.core.seq.call(null,bindings);
var chunk__28029_28038 = null;
var count__28030_28039 = (0);
var i__28031_28040 = (0);
while(true){
if((i__28031_28040 < count__28030_28039)){
var map__28032_28041 = cljs.core._nth.call(null,chunk__28029_28038,i__28031_28040);
var map__28032_28042__$1 = ((((!((map__28032_28041 == null)))?((((map__28032_28041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28032_28041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28032_28041):map__28032_28041);
var binding_28043 = map__28032_28042__$1;
var init_28044 = cljs.core.get.call(null,map__28032_28042__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_28043);

cljs.compiler.emitln.call(null," = ",init_28044,";");

var G__28045 = seq__28028_28037;
var G__28046 = chunk__28029_28038;
var G__28047 = count__28030_28039;
var G__28048 = (i__28031_28040 + (1));
seq__28028_28037 = G__28045;
chunk__28029_28038 = G__28046;
count__28030_28039 = G__28047;
i__28031_28040 = G__28048;
continue;
} else {
var temp__4425__auto___28049 = cljs.core.seq.call(null,seq__28028_28037);
if(temp__4425__auto___28049){
var seq__28028_28050__$1 = temp__4425__auto___28049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28028_28050__$1)){
var c__17266__auto___28051 = cljs.core.chunk_first.call(null,seq__28028_28050__$1);
var G__28052 = cljs.core.chunk_rest.call(null,seq__28028_28050__$1);
var G__28053 = c__17266__auto___28051;
var G__28054 = cljs.core.count.call(null,c__17266__auto___28051);
var G__28055 = (0);
seq__28028_28037 = G__28052;
chunk__28029_28038 = G__28053;
count__28030_28039 = G__28054;
i__28031_28040 = G__28055;
continue;
} else {
var map__28034_28056 = cljs.core.first.call(null,seq__28028_28050__$1);
var map__28034_28057__$1 = ((((!((map__28034_28056 == null)))?((((map__28034_28056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28034_28056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28034_28056):map__28034_28056);
var binding_28058 = map__28034_28057__$1;
var init_28059 = cljs.core.get.call(null,map__28034_28057__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_28058);

cljs.compiler.emitln.call(null," = ",init_28059,";");

var G__28060 = cljs.core.next.call(null,seq__28028_28050__$1);
var G__28061 = null;
var G__28062 = (0);
var G__28063 = (0);
seq__28028_28037 = G__28060;
chunk__28029_28038 = G__28061;
count__28030_28039 = G__28062;
i__28031_28040 = G__28063;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_28027_28036;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__28064){
var map__28065 = p__28064;
var map__28065__$1 = ((((!((map__28065 == null)))?((((map__28065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28065):map__28065);
var frame = cljs.core.get.call(null,map__28065__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__28065__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__28065__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__17366__auto___28067 = cljs.core.count.call(null,exprs);
var i_28068 = (0);
while(true){
if((i_28068 < n__17366__auto___28067)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_28068)," = ",exprs.call(null,i_28068),";");

var G__28069 = (i_28068 + (1));
i_28068 = G__28069;
continue;
} else {
}
break;
}

var n__17366__auto___28070 = cljs.core.count.call(null,exprs);
var i_28071 = (0);
while(true){
if((i_28071 < n__17366__auto___28070)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_28071))," = ",temps.call(null,i_28071),";");

var G__28072 = (i_28071 + (1));
i_28071 = G__28072;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__28073){
var map__28074 = p__28073;
var map__28074__$1 = ((((!((map__28074 == null)))?((((map__28074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28074):map__28074);
var bindings = cljs.core.get.call(null,map__28074__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__28074__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__28074__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__28076_28084 = cljs.core.seq.call(null,bindings);
var chunk__28077_28085 = null;
var count__28078_28086 = (0);
var i__28079_28087 = (0);
while(true){
if((i__28079_28087 < count__28078_28086)){
var map__28080_28088 = cljs.core._nth.call(null,chunk__28077_28085,i__28079_28087);
var map__28080_28089__$1 = ((((!((map__28080_28088 == null)))?((((map__28080_28088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28080_28088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28080_28088):map__28080_28088);
var binding_28090 = map__28080_28089__$1;
var init_28091 = cljs.core.get.call(null,map__28080_28089__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28090)," = ",init_28091,";");

var G__28092 = seq__28076_28084;
var G__28093 = chunk__28077_28085;
var G__28094 = count__28078_28086;
var G__28095 = (i__28079_28087 + (1));
seq__28076_28084 = G__28092;
chunk__28077_28085 = G__28093;
count__28078_28086 = G__28094;
i__28079_28087 = G__28095;
continue;
} else {
var temp__4425__auto___28096 = cljs.core.seq.call(null,seq__28076_28084);
if(temp__4425__auto___28096){
var seq__28076_28097__$1 = temp__4425__auto___28096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28076_28097__$1)){
var c__17266__auto___28098 = cljs.core.chunk_first.call(null,seq__28076_28097__$1);
var G__28099 = cljs.core.chunk_rest.call(null,seq__28076_28097__$1);
var G__28100 = c__17266__auto___28098;
var G__28101 = cljs.core.count.call(null,c__17266__auto___28098);
var G__28102 = (0);
seq__28076_28084 = G__28099;
chunk__28077_28085 = G__28100;
count__28078_28086 = G__28101;
i__28079_28087 = G__28102;
continue;
} else {
var map__28082_28103 = cljs.core.first.call(null,seq__28076_28097__$1);
var map__28082_28104__$1 = ((((!((map__28082_28103 == null)))?((((map__28082_28103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28082_28103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28082_28103):map__28082_28103);
var binding_28105 = map__28082_28104__$1;
var init_28106 = cljs.core.get.call(null,map__28082_28104__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_28105)," = ",init_28106,";");

var G__28107 = cljs.core.next.call(null,seq__28076_28097__$1);
var G__28108 = null;
var G__28109 = (0);
var G__28110 = (0);
seq__28076_28084 = G__28107;
chunk__28077_28085 = G__28108;
count__28078_28086 = G__28109;
i__28079_28087 = G__28110;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__28113){
var map__28114 = p__28113;
var map__28114__$1 = ((((!((map__28114 == null)))?((((map__28114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28114):map__28114);
var expr = map__28114__$1;
var f = cljs.core.get.call(null,map__28114__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__28114__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28114__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__28116 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28114,map__28114__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28114,map__28114__$1,expr,f,args,env){
return (function (p1__28111_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28111_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28114,map__28114__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28114,map__28114__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28114,map__28114__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28114,map__28114__$1,expr,f,args,env){
return (function (p1__28112_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__28112_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28114,map__28114__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__28114,map__28114__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__28116,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__28116,(1),null);
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_28117 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_28117,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_28118 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_28118,args)),(((mfa_28118 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_28118,args)),"], 0))");
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
var fprop_28119 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_28119," ? ",f__$1,fprop_28119,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__28120){
var map__28121 = p__28120;
var map__28121__$1 = ((((!((map__28121 == null)))?((((map__28121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28121):map__28121);
var ctor = cljs.core.get.call(null,map__28121__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__28121__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28121__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__28123){
var map__28124 = p__28123;
var map__28124__$1 = ((((!((map__28124 == null)))?((((map__28124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28124):map__28124);
var target = cljs.core.get.call(null,map__28124__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__28124__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__28124__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
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

var seq__28130_28134 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__28131_28135 = null;
var count__28132_28136 = (0);
var i__28133_28137 = (0);
while(true){
if((i__28133_28137 < count__28132_28136)){
var lib_28138 = cljs.core._nth.call(null,chunk__28131_28135,i__28133_28137);
if(cljs.core.truth_((function (){var or__16482__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28138),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28138),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__16482__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28138),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28138),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28138),"');");

}
}

var G__28139 = seq__28130_28134;
var G__28140 = chunk__28131_28135;
var G__28141 = count__28132_28136;
var G__28142 = (i__28133_28137 + (1));
seq__28130_28134 = G__28139;
chunk__28131_28135 = G__28140;
count__28132_28136 = G__28141;
i__28133_28137 = G__28142;
continue;
} else {
var temp__4425__auto___28143 = cljs.core.seq.call(null,seq__28130_28134);
if(temp__4425__auto___28143){
var seq__28130_28144__$1 = temp__4425__auto___28143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28130_28144__$1)){
var c__17266__auto___28145 = cljs.core.chunk_first.call(null,seq__28130_28144__$1);
var G__28146 = cljs.core.chunk_rest.call(null,seq__28130_28144__$1);
var G__28147 = c__17266__auto___28145;
var G__28148 = cljs.core.count.call(null,c__17266__auto___28145);
var G__28149 = (0);
seq__28130_28134 = G__28146;
chunk__28131_28135 = G__28147;
count__28132_28136 = G__28148;
i__28133_28137 = G__28149;
continue;
} else {
var lib_28150 = cljs.core.first.call(null,seq__28130_28144__$1);
if(cljs.core.truth_((function (){var or__16482__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28150),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28150),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__16482__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_28150),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28150),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_28150),"');");

}
}

var G__28151 = cljs.core.next.call(null,seq__28130_28144__$1);
var G__28152 = null;
var G__28153 = (0);
var G__28154 = (0);
seq__28130_28134 = G__28151;
chunk__28131_28135 = G__28152;
count__28132_28136 = G__28153;
i__28133_28137 = G__28154;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__28155){
var map__28156 = p__28155;
var map__28156__$1 = ((((!((map__28156 == null)))?((((map__28156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28156):map__28156);
var name = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__28158){
var map__28159 = p__28158;
var map__28159__$1 = ((((!((map__28159 == null)))?((((map__28159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28159):map__28159);
var t = cljs.core.get.call(null,map__28159__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28159__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28159__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28159__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__28161_28171 = cljs.core.seq.call(null,fields__$1);
var chunk__28162_28172 = null;
var count__28163_28173 = (0);
var i__28164_28174 = (0);
while(true){
if((i__28164_28174 < count__28163_28173)){
var fld_28175 = cljs.core._nth.call(null,chunk__28162_28172,i__28164_28174);
cljs.compiler.emitln.call(null,"this.",fld_28175," = ",fld_28175,";");

var G__28176 = seq__28161_28171;
var G__28177 = chunk__28162_28172;
var G__28178 = count__28163_28173;
var G__28179 = (i__28164_28174 + (1));
seq__28161_28171 = G__28176;
chunk__28162_28172 = G__28177;
count__28163_28173 = G__28178;
i__28164_28174 = G__28179;
continue;
} else {
var temp__4425__auto___28180 = cljs.core.seq.call(null,seq__28161_28171);
if(temp__4425__auto___28180){
var seq__28161_28181__$1 = temp__4425__auto___28180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28161_28181__$1)){
var c__17266__auto___28182 = cljs.core.chunk_first.call(null,seq__28161_28181__$1);
var G__28183 = cljs.core.chunk_rest.call(null,seq__28161_28181__$1);
var G__28184 = c__17266__auto___28182;
var G__28185 = cljs.core.count.call(null,c__17266__auto___28182);
var G__28186 = (0);
seq__28161_28171 = G__28183;
chunk__28162_28172 = G__28184;
count__28163_28173 = G__28185;
i__28164_28174 = G__28186;
continue;
} else {
var fld_28187 = cljs.core.first.call(null,seq__28161_28181__$1);
cljs.compiler.emitln.call(null,"this.",fld_28187," = ",fld_28187,";");

var G__28188 = cljs.core.next.call(null,seq__28161_28181__$1);
var G__28189 = null;
var G__28190 = (0);
var G__28191 = (0);
seq__28161_28171 = G__28188;
chunk__28162_28172 = G__28189;
count__28163_28173 = G__28190;
i__28164_28174 = G__28191;
continue;
}
} else {
}
}
break;
}

var seq__28165_28192 = cljs.core.seq.call(null,pmasks);
var chunk__28166_28193 = null;
var count__28167_28194 = (0);
var i__28168_28195 = (0);
while(true){
if((i__28168_28195 < count__28167_28194)){
var vec__28169_28196 = cljs.core._nth.call(null,chunk__28166_28193,i__28168_28195);
var pno_28197 = cljs.core.nth.call(null,vec__28169_28196,(0),null);
var pmask_28198 = cljs.core.nth.call(null,vec__28169_28196,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28197,"$ = ",pmask_28198,";");

var G__28199 = seq__28165_28192;
var G__28200 = chunk__28166_28193;
var G__28201 = count__28167_28194;
var G__28202 = (i__28168_28195 + (1));
seq__28165_28192 = G__28199;
chunk__28166_28193 = G__28200;
count__28167_28194 = G__28201;
i__28168_28195 = G__28202;
continue;
} else {
var temp__4425__auto___28203 = cljs.core.seq.call(null,seq__28165_28192);
if(temp__4425__auto___28203){
var seq__28165_28204__$1 = temp__4425__auto___28203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28165_28204__$1)){
var c__17266__auto___28205 = cljs.core.chunk_first.call(null,seq__28165_28204__$1);
var G__28206 = cljs.core.chunk_rest.call(null,seq__28165_28204__$1);
var G__28207 = c__17266__auto___28205;
var G__28208 = cljs.core.count.call(null,c__17266__auto___28205);
var G__28209 = (0);
seq__28165_28192 = G__28206;
chunk__28166_28193 = G__28207;
count__28167_28194 = G__28208;
i__28168_28195 = G__28209;
continue;
} else {
var vec__28170_28210 = cljs.core.first.call(null,seq__28165_28204__$1);
var pno_28211 = cljs.core.nth.call(null,vec__28170_28210,(0),null);
var pmask_28212 = cljs.core.nth.call(null,vec__28170_28210,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28211,"$ = ",pmask_28212,";");

var G__28213 = cljs.core.next.call(null,seq__28165_28204__$1);
var G__28214 = null;
var G__28215 = (0);
var G__28216 = (0);
seq__28165_28192 = G__28213;
chunk__28166_28193 = G__28214;
count__28167_28194 = G__28215;
i__28168_28195 = G__28216;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__28217){
var map__28218 = p__28217;
var map__28218__$1 = ((((!((map__28218 == null)))?((((map__28218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28218):map__28218);
var t = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__28218__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__28220_28234 = cljs.core.seq.call(null,fields__$1);
var chunk__28221_28235 = null;
var count__28222_28236 = (0);
var i__28223_28237 = (0);
while(true){
if((i__28223_28237 < count__28222_28236)){
var fld_28238 = cljs.core._nth.call(null,chunk__28221_28235,i__28223_28237);
cljs.compiler.emitln.call(null,"* @param {*} ",fld_28238);

var G__28239 = seq__28220_28234;
var G__28240 = chunk__28221_28235;
var G__28241 = count__28222_28236;
var G__28242 = (i__28223_28237 + (1));
seq__28220_28234 = G__28239;
chunk__28221_28235 = G__28240;
count__28222_28236 = G__28241;
i__28223_28237 = G__28242;
continue;
} else {
var temp__4425__auto___28243 = cljs.core.seq.call(null,seq__28220_28234);
if(temp__4425__auto___28243){
var seq__28220_28244__$1 = temp__4425__auto___28243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28220_28244__$1)){
var c__17266__auto___28245 = cljs.core.chunk_first.call(null,seq__28220_28244__$1);
var G__28246 = cljs.core.chunk_rest.call(null,seq__28220_28244__$1);
var G__28247 = c__17266__auto___28245;
var G__28248 = cljs.core.count.call(null,c__17266__auto___28245);
var G__28249 = (0);
seq__28220_28234 = G__28246;
chunk__28221_28235 = G__28247;
count__28222_28236 = G__28248;
i__28223_28237 = G__28249;
continue;
} else {
var fld_28250 = cljs.core.first.call(null,seq__28220_28244__$1);
cljs.compiler.emitln.call(null,"* @param {*} ",fld_28250);

var G__28251 = cljs.core.next.call(null,seq__28220_28244__$1);
var G__28252 = null;
var G__28253 = (0);
var G__28254 = (0);
seq__28220_28234 = G__28251;
chunk__28221_28235 = G__28252;
count__28222_28236 = G__28253;
i__28223_28237 = G__28254;
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

var seq__28224_28255 = cljs.core.seq.call(null,fields__$1);
var chunk__28225_28256 = null;
var count__28226_28257 = (0);
var i__28227_28258 = (0);
while(true){
if((i__28227_28258 < count__28226_28257)){
var fld_28259 = cljs.core._nth.call(null,chunk__28225_28256,i__28227_28258);
cljs.compiler.emitln.call(null,"this.",fld_28259," = ",fld_28259,";");

var G__28260 = seq__28224_28255;
var G__28261 = chunk__28225_28256;
var G__28262 = count__28226_28257;
var G__28263 = (i__28227_28258 + (1));
seq__28224_28255 = G__28260;
chunk__28225_28256 = G__28261;
count__28226_28257 = G__28262;
i__28227_28258 = G__28263;
continue;
} else {
var temp__4425__auto___28264 = cljs.core.seq.call(null,seq__28224_28255);
if(temp__4425__auto___28264){
var seq__28224_28265__$1 = temp__4425__auto___28264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28224_28265__$1)){
var c__17266__auto___28266 = cljs.core.chunk_first.call(null,seq__28224_28265__$1);
var G__28267 = cljs.core.chunk_rest.call(null,seq__28224_28265__$1);
var G__28268 = c__17266__auto___28266;
var G__28269 = cljs.core.count.call(null,c__17266__auto___28266);
var G__28270 = (0);
seq__28224_28255 = G__28267;
chunk__28225_28256 = G__28268;
count__28226_28257 = G__28269;
i__28227_28258 = G__28270;
continue;
} else {
var fld_28271 = cljs.core.first.call(null,seq__28224_28265__$1);
cljs.compiler.emitln.call(null,"this.",fld_28271," = ",fld_28271,";");

var G__28272 = cljs.core.next.call(null,seq__28224_28265__$1);
var G__28273 = null;
var G__28274 = (0);
var G__28275 = (0);
seq__28224_28255 = G__28272;
chunk__28225_28256 = G__28273;
count__28226_28257 = G__28274;
i__28227_28258 = G__28275;
continue;
}
} else {
}
}
break;
}

var seq__28228_28276 = cljs.core.seq.call(null,pmasks);
var chunk__28229_28277 = null;
var count__28230_28278 = (0);
var i__28231_28279 = (0);
while(true){
if((i__28231_28279 < count__28230_28278)){
var vec__28232_28280 = cljs.core._nth.call(null,chunk__28229_28277,i__28231_28279);
var pno_28281 = cljs.core.nth.call(null,vec__28232_28280,(0),null);
var pmask_28282 = cljs.core.nth.call(null,vec__28232_28280,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28281,"$ = ",pmask_28282,";");

var G__28283 = seq__28228_28276;
var G__28284 = chunk__28229_28277;
var G__28285 = count__28230_28278;
var G__28286 = (i__28231_28279 + (1));
seq__28228_28276 = G__28283;
chunk__28229_28277 = G__28284;
count__28230_28278 = G__28285;
i__28231_28279 = G__28286;
continue;
} else {
var temp__4425__auto___28287 = cljs.core.seq.call(null,seq__28228_28276);
if(temp__4425__auto___28287){
var seq__28228_28288__$1 = temp__4425__auto___28287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28228_28288__$1)){
var c__17266__auto___28289 = cljs.core.chunk_first.call(null,seq__28228_28288__$1);
var G__28290 = cljs.core.chunk_rest.call(null,seq__28228_28288__$1);
var G__28291 = c__17266__auto___28289;
var G__28292 = cljs.core.count.call(null,c__17266__auto___28289);
var G__28293 = (0);
seq__28228_28276 = G__28290;
chunk__28229_28277 = G__28291;
count__28230_28278 = G__28292;
i__28231_28279 = G__28293;
continue;
} else {
var vec__28233_28294 = cljs.core.first.call(null,seq__28228_28288__$1);
var pno_28295 = cljs.core.nth.call(null,vec__28233_28294,(0),null);
var pmask_28296 = cljs.core.nth.call(null,vec__28233_28294,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_28295,"$ = ",pmask_28296,";");

var G__28297 = cljs.core.next.call(null,seq__28228_28288__$1);
var G__28298 = null;
var G__28299 = (0);
var G__28300 = (0);
seq__28228_28276 = G__28297;
chunk__28229_28277 = G__28298;
count__28230_28278 = G__28299;
i__28231_28279 = G__28300;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__28301){
var map__28302 = p__28301;
var map__28302__$1 = ((((!((map__28302 == null)))?((((map__28302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28302):map__28302);
var target = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__28302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__28304){
var map__28305 = p__28304;
var map__28305__$1 = ((((!((map__28305 == null)))?((((map__28305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28305):map__28305);
var env = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__28305__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env__18571__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__18571__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__28315 = cljs.core.seq.call(null,table);
var chunk__28316 = null;
var count__28317 = (0);
var i__28318 = (0);
while(true){
if((i__28318 < count__28317)){
var vec__28319 = cljs.core._nth.call(null,chunk__28316,i__28318);
var keyword = cljs.core.nth.call(null,vec__28319,(0),null);
var value = cljs.core.nth.call(null,vec__28319,(1),null);
var ns_28321 = cljs.core.namespace.call(null,keyword);
var name_28322 = cljs.core.name.call(null,keyword);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

cljs.compiler.emits_keyword.call(null,keyword);

cljs.compiler.emits.call(null,";\n");

var G__28323 = seq__28315;
var G__28324 = chunk__28316;
var G__28325 = count__28317;
var G__28326 = (i__28318 + (1));
seq__28315 = G__28323;
chunk__28316 = G__28324;
count__28317 = G__28325;
i__28318 = G__28326;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28315);
if(temp__4425__auto__){
var seq__28315__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28315__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__28315__$1);
var G__28327 = cljs.core.chunk_rest.call(null,seq__28315__$1);
var G__28328 = c__17266__auto__;
var G__28329 = cljs.core.count.call(null,c__17266__auto__);
var G__28330 = (0);
seq__28315 = G__28327;
chunk__28316 = G__28328;
count__28317 = G__28329;
i__28318 = G__28330;
continue;
} else {
var vec__28320 = cljs.core.first.call(null,seq__28315__$1);
var keyword = cljs.core.nth.call(null,vec__28320,(0),null);
var value = cljs.core.nth.call(null,vec__28320,(1),null);
var ns_28331 = cljs.core.namespace.call(null,keyword);
var name_28332 = cljs.core.name.call(null,keyword);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

cljs.compiler.emits_keyword.call(null,keyword);

cljs.compiler.emits.call(null,";\n");

var G__28333 = cljs.core.next.call(null,seq__28315__$1);
var G__28334 = null;
var G__28335 = (0);
var G__28336 = (0);
seq__28315 = G__28333;
chunk__28316 = G__28334;
count__28317 = G__28335;
i__28318 = G__28336;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1440195220049