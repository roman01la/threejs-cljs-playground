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
var seq__30388_30402 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30389_30403 = null;
var count__30390_30404 = (0);
var i__30391_30405 = (0);
while(true){
if((i__30391_30405 < count__30390_30404)){
var f_30406 = cljs.core._nth.call(null,chunk__30389_30403,i__30391_30405);
cljs.core.println.call(null,"  ",f_30406);

var G__30407 = seq__30388_30402;
var G__30408 = chunk__30389_30403;
var G__30409 = count__30390_30404;
var G__30410 = (i__30391_30405 + (1));
seq__30388_30402 = G__30407;
chunk__30389_30403 = G__30408;
count__30390_30404 = G__30409;
i__30391_30405 = G__30410;
continue;
} else {
var temp__4425__auto___30411 = cljs.core.seq.call(null,seq__30388_30402);
if(temp__4425__auto___30411){
var seq__30388_30412__$1 = temp__4425__auto___30411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30388_30412__$1)){
var c__17266__auto___30413 = cljs.core.chunk_first.call(null,seq__30388_30412__$1);
var G__30414 = cljs.core.chunk_rest.call(null,seq__30388_30412__$1);
var G__30415 = c__17266__auto___30413;
var G__30416 = cljs.core.count.call(null,c__17266__auto___30413);
var G__30417 = (0);
seq__30388_30402 = G__30414;
chunk__30389_30403 = G__30415;
count__30390_30404 = G__30416;
i__30391_30405 = G__30417;
continue;
} else {
var f_30418 = cljs.core.first.call(null,seq__30388_30412__$1);
cljs.core.println.call(null,"  ",f_30418);

var G__30419 = cljs.core.next.call(null,seq__30388_30412__$1);
var G__30420 = null;
var G__30421 = (0);
var G__30422 = (0);
seq__30388_30402 = G__30419;
chunk__30389_30403 = G__30420;
count__30390_30404 = G__30421;
i__30391_30405 = G__30422;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30423 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16482__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30423);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30423)))?cljs.core.second.call(null,arglists_30423):arglists_30423));
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
var seq__30392 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30393 = null;
var count__30394 = (0);
var i__30395 = (0);
while(true){
if((i__30395 < count__30394)){
var vec__30396 = cljs.core._nth.call(null,chunk__30393,i__30395);
var name = cljs.core.nth.call(null,vec__30396,(0),null);
var map__30397 = cljs.core.nth.call(null,vec__30396,(1),null);
var map__30397__$1 = ((((!((map__30397 == null)))?((((map__30397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30397):map__30397);
var doc = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30424 = seq__30392;
var G__30425 = chunk__30393;
var G__30426 = count__30394;
var G__30427 = (i__30395 + (1));
seq__30392 = G__30424;
chunk__30393 = G__30425;
count__30394 = G__30426;
i__30395 = G__30427;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30392);
if(temp__4425__auto__){
var seq__30392__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30392__$1)){
var c__17266__auto__ = cljs.core.chunk_first.call(null,seq__30392__$1);
var G__30428 = cljs.core.chunk_rest.call(null,seq__30392__$1);
var G__30429 = c__17266__auto__;
var G__30430 = cljs.core.count.call(null,c__17266__auto__);
var G__30431 = (0);
seq__30392 = G__30428;
chunk__30393 = G__30429;
count__30394 = G__30430;
i__30395 = G__30431;
continue;
} else {
var vec__30399 = cljs.core.first.call(null,seq__30392__$1);
var name = cljs.core.nth.call(null,vec__30399,(0),null);
var map__30400 = cljs.core.nth.call(null,vec__30399,(1),null);
var map__30400__$1 = ((((!((map__30400 == null)))?((((map__30400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30400):map__30400);
var doc = cljs.core.get.call(null,map__30400__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30400__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30432 = cljs.core.next.call(null,seq__30392__$1);
var G__30433 = null;
var G__30434 = (0);
var G__30435 = (0);
seq__30392 = G__30432;
chunk__30393 = G__30433;
count__30394 = G__30434;
i__30395 = G__30435;
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

//# sourceMappingURL=repl.js.map