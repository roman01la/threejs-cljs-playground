// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4425__auto__ = cljs.core.constant$keyword$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__30320_30334 = cljs.core.seq(cljs.core.constant$keyword$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__30321_30335 = null;
var count__30322_30336 = (0);
var i__30323_30337 = (0);
while(true){
if((i__30323_30337 < count__30322_30336)){
var f_30338 = chunk__30321_30335.cljs$core$IIndexed$_nth$arity$2(null,i__30323_30337);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_30338], 0));

var G__30339 = seq__30320_30334;
var G__30340 = chunk__30321_30335;
var G__30341 = count__30322_30336;
var G__30342 = (i__30323_30337 + (1));
seq__30320_30334 = G__30339;
chunk__30321_30335 = G__30340;
count__30322_30336 = G__30341;
i__30323_30337 = G__30342;
continue;
} else {
var temp__4425__auto___30343 = cljs.core.seq(seq__30320_30334);
if(temp__4425__auto___30343){
var seq__30320_30344__$1 = temp__4425__auto___30343;
if(cljs.core.chunked_seq_QMARK_(seq__30320_30344__$1)){
var c__17266__auto___30345 = cljs.core.chunk_first(seq__30320_30344__$1);
var G__30346 = cljs.core.chunk_rest(seq__30320_30344__$1);
var G__30347 = c__17266__auto___30345;
var G__30348 = cljs.core.count(c__17266__auto___30345);
var G__30349 = (0);
seq__30320_30334 = G__30346;
chunk__30321_30335 = G__30347;
count__30322_30336 = G__30348;
i__30323_30337 = G__30349;
continue;
} else {
var f_30350 = cljs.core.first(seq__30320_30344__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_30350], 0));

var G__30351 = cljs.core.next(seq__30320_30344__$1);
var G__30352 = null;
var G__30353 = (0);
var G__30354 = (0);
seq__30320_30334 = G__30351;
chunk__30321_30335 = G__30352;
count__30322_30336 = G__30353;
i__30323_30337 = G__30354;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30355 = cljs.core.constant$keyword$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16482__auto__ = cljs.core.constant$keyword$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.constant$keyword$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_30355], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_30355)))?cljs.core.second(arglists_30355):arglists_30355)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.constant$keyword$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.constant$keyword$url)){
if(cljs.core.truth_(cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.constant$keyword$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.constant$keyword$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__30324 = cljs.core.seq(cljs.core.constant$keyword$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__30325 = null;
var count__30326 = (0);
var i__30327 = (0);
while(true){
if((i__30327 < count__30326)){
var vec__30328 = chunk__30325.cljs$core$IIndexed$_nth$arity$2(null,i__30327);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30328,(0),null);
var map__30329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30328,(1),null);
var map__30329__$1 = ((((!((map__30329 == null)))?((((map__30329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30329):map__30329);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30329__$1,cljs.core.constant$keyword$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30329__$1,cljs.core.constant$keyword$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__30356 = seq__30324;
var G__30357 = chunk__30325;
var G__30358 = count__30326;
var G__30359 = (i__30327 + (1));
seq__30324 = G__30356;
chunk__30325 = G__30357;
count__30326 = G__30358;
i__30327 = G__30359;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__30324);
if(temp__4425__auto__){
var seq__30324__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30324__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__30324__$1);
var G__30360 = cljs.core.chunk_rest(seq__30324__$1);
var G__30361 = c__17266__auto__;
var G__30362 = cljs.core.count(c__17266__auto__);
var G__30363 = (0);
seq__30324 = G__30360;
chunk__30325 = G__30361;
count__30326 = G__30362;
i__30327 = G__30363;
continue;
} else {
var vec__30331 = cljs.core.first(seq__30324__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30331,(0),null);
var map__30332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30331,(1),null);
var map__30332__$1 = ((((!((map__30332 == null)))?((((map__30332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30332):map__30332);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30332__$1,cljs.core.constant$keyword$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30332__$1,cljs.core.constant$keyword$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__30364 = cljs.core.next(seq__30324__$1);
var G__30365 = null;
var G__30366 = (0);
var G__30367 = (0);
seq__30324 = G__30364;
chunk__30325 = G__30365;
count__30326 = G__30366;
i__30327 = G__30367;
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

//# sourceMappingURL=repl.js.map?rel=1440458059780