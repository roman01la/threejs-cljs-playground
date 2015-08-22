// Compiled by ClojureScript 1.7.28 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29298_29312 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29299_29313 = null;
var count__29300_29314 = (0);
var i__29301_29315 = (0);
while(true){
if((i__29301_29315 < count__29300_29314)){
var f_29316 = cljs.core._nth.call(null,chunk__29299_29313,i__29301_29315);
cljs.core.println.call(null,"  ",f_29316);

var G__29317 = seq__29298_29312;
var G__29318 = chunk__29299_29313;
var G__29319 = count__29300_29314;
var G__29320 = (i__29301_29315 + (1));
seq__29298_29312 = G__29317;
chunk__29299_29313 = G__29318;
count__29300_29314 = G__29319;
i__29301_29315 = G__29320;
continue;
} else {
var temp__4425__auto___29321 = cljs.core.seq.call(null,seq__29298_29312);
if(temp__4425__auto___29321){
var seq__29298_29322__$1 = temp__4425__auto___29321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29298_29322__$1)){
var c__17266__auto___29323 = cljs.core.chunk_first.call(null,seq__29298_29322__$1);
var G__29324 = cljs.core.chunk_rest.call(null,seq__29298_29322__$1);
var G__29325 = c__17266__auto___29323;
var G__29326 = cljs.core.count.call(null,c__17266__auto___29323);
var G__29327 = (0);
seq__29298_29312 = G__29324;
chunk__29299_29313 = G__29325;
count__29300_29314 = G__29326;
i__29301_29315 = G__29327;
continue;
} else {
var f_29328 = cljs.core.first.call(null,seq__29298_29322__$1);
cljs.core.println.call(null,"  ",f_29328);

var G__29329 = cljs.core.next.call(null,seq__29298_29322__$1);
var G__29330 = null;
var G__29331 = (0);
var G__29332 = (0);
seq__29298_29312 = G__29329;
chunk__29299_29313 = G__29330;
count__29300_29314 = G__29331;
i__29301_29315 = G__29332;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29333 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16482__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29333);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29333)))?cljs.core.second.call(null,arglists_29333):arglists_29333));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29302 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29303 = null;
var count__29304 = (0);
var i__29305 = (0);
while(true){
if((i__29305 < count__29304)){
var vec__29306 = cljs.core._nth.call(null,chunk__29303,i__29305);
var name = cljs.core.nth.call(null,vec__29306,(0),null);
var map__29307 = cljs.core.nth.call(null,vec__29306,(1),null);
var map__29307__$1 = ((((!((map__29307 == null)))?((((map__29307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29307):map__29307);
var doc = cljs.core.get.call(null,map__29307__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29307__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29334 = seq__29302;
var G__29335 = chunk__29303;
var G__29336 = count__29304;
var G__29337 = (i__29305 + (1));
seq__29302 = G__29334;
chunk__29303 = G__29335;
count__29304 = G__29336;
i__29305 = G__29337;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29302);
if(temp__4425__auto__){
var seq__29302__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29302__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__29302__$1);
var G__29338 = cljs.core.chunk_rest.call(null,seq__29302__$1);
var G__29339 = c__17266__auto__;
var G__29340 = cljs.core.count.call(null,c__17266__auto__);
var G__29341 = (0);
seq__29302 = G__29338;
chunk__29303 = G__29339;
count__29304 = G__29340;
i__29305 = G__29341;
continue;
} else {
var vec__29309 = cljs.core.first.call(null,seq__29302__$1);
var name = cljs.core.nth.call(null,vec__29309,(0),null);
var map__29310 = cljs.core.nth.call(null,vec__29309,(1),null);
var map__29310__$1 = ((((!((map__29310 == null)))?((((map__29310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29310):map__29310);
var doc = cljs.core.get.call(null,map__29310__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29310__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29342 = cljs.core.next.call(null,seq__29302__$1);
var G__29343 = null;
var G__29344 = (0);
var G__29345 = (0);
seq__29302 = G__29342;
chunk__29303 = G__29343;
count__29304 = G__29344;
i__29305 = G__29345;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1440195220675