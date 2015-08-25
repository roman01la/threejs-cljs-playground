// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(){
var args__17528__auto__ = [];
var len__17521__auto___35054 = arguments.length;
var i__17522__auto___35055 = (0);
while(true){
if((i__17522__auto___35055 < len__17521__auto___35054)){
args__17528__auto__.push((arguments[i__17522__auto___35055]));

var G__35056 = (i__17522__auto___35055 + (1));
i__17522__auto___35055 = G__35056;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq35053){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35053));
});
cljs.pprint.println = (function cljs$pprint$println(){
var args__17528__auto__ = [];
var len__17521__auto___35058 = arguments.length;
var i__17522__auto___35059 = (0);
while(true){
if((i__17522__auto___35059 < len__17521__auto___35058)){
args__17528__auto__.push((arguments[i__17522__auto___35059]));

var G__35060 = (i__17522__auto___35059 + (1));
i__17522__auto___35059 = G__35060;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq35057){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35057));
});
cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__35064 = cljs.core._EQ_;
var expr__35065 = c;
if(cljs.core.truth_((pred__35064.cljs$core$IFn$_invoke$arity$2 ? pred__35064.cljs$core$IFn$_invoke$arity$2("\b",expr__35065) : pred__35064.call(null,"\b",expr__35065)))){
return "\\backspace";
} else {
if(cljs.core.truth_((pred__35064.cljs$core$IFn$_invoke$arity$2 ? pred__35064.cljs$core$IFn$_invoke$arity$2("\t",expr__35065) : pred__35064.call(null,"\t",expr__35065)))){
return "\\tab";
} else {
if(cljs.core.truth_((pred__35064.cljs$core$IFn$_invoke$arity$2 ? pred__35064.cljs$core$IFn$_invoke$arity$2("\n",expr__35065) : pred__35064.call(null,"\n",expr__35065)))){
return "\\newline";
} else {
if(cljs.core.truth_((pred__35064.cljs$core$IFn$_invoke$arity$2 ? pred__35064.cljs$core$IFn$_invoke$arity$2("\f",expr__35065) : pred__35064.call(null,"\f",expr__35065)))){
return "\\formfeed";
} else {
if(cljs.core.truth_((pred__35064.cljs$core$IFn$_invoke$arity$2 ? pred__35064.cljs$core$IFn$_invoke$arity$2("\r",expr__35065) : pred__35064.call(null,"\r",expr__35065)))){
return "\\return";
} else {
if(cljs.core.truth_((pred__35064.cljs$core$IFn$_invoke$arity$2 ? pred__35064.cljs$core$IFn$_invoke$arity$2("\"",expr__35065) : pred__35064.call(null,"\"",expr__35065)))){
return "\\\"";
} else {
if(cljs.core.truth_((pred__35064.cljs$core$IFn$_invoke$arity$2 ? pred__35064.cljs$core$IFn$_invoke$arity$2("\\",expr__35065) : pred__35064.call(null,"\\",expr__35065)))){
return "\\\\";
} else {
return [cljs.core.str("\\"),cljs.core.str(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(){
var args__17528__auto__ = [];
var len__17521__auto___35068 = arguments.length;
var i__17522__auto___35069 = (0);
while(true){
if((i__17522__auto___35069 < len__17521__auto___35068)){
args__17528__auto__.push((arguments[i__17522__auto___35069]));

var G__35070 = (i__17522__auto___35069 + (1));
i__17522__auto___35069 = G__35070;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq35067){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35067));
});
cljs.pprint.prn = (function cljs$pprint$prn(){
var args__17528__auto__ = [];
var len__17521__auto___35072 = arguments.length;
var i__17522__auto___35073 = (0);
while(true){
if((i__17522__auto___35073 < len__17521__auto___35072)){
args__17528__auto__.push((arguments[i__17522__auto___35073]));

var G__35074 = (i__17522__auto___35073 + (1));
i__17522__auto___35073 = G__35074;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq35071){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35071));
});
/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__35076 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(1),null);
var G__35077 = new_context;
var G__35078 = remainder;
var G__35079 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__35077;
lis__$1 = G__35078;
acc = G__35079;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__35081 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35081,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35081,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__35082 = new_context;
var G__35083 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__35082;
acc = G__35083;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__35085 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35085,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35085,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35085,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__35086 = new_context;
var G__35087 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__35086;
acc = G__35087;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17235__auto__ = (function cljs$pprint$unzip_map_$_iter__35116(s__35117){
return (new cljs.core.LazySeq(null,(function (){
var s__35117__$1 = s__35117;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__35117__$1);
if(temp__4425__auto__){
var s__35117__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35117__$2)){
var c__17233__auto__ = cljs.core.chunk_first(s__35117__$2);
var size__17234__auto__ = cljs.core.count(c__17233__auto__);
var b__35119 = cljs.core.chunk_buffer(size__17234__auto__);
if((function (){var i__35118 = (0);
while(true){
if((i__35118 < size__17234__auto__)){
var vec__35126 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__17233__auto__,i__35118);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35126,(0),null);
var vec__35127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35126,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35127,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35127,(1),null);
cljs.core.chunk_append(b__35119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__35144 = (i__35118 + (1));
i__35118 = G__35144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35119),cljs$pprint$unzip_map_$_iter__35116(cljs.core.chunk_rest(s__35117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35119),null);
}
} else {
var vec__35128 = cljs.core.first(s__35117__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35128,(0),null);
var vec__35129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35128,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35129,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35129,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__35116(cljs.core.rest(s__35117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17235__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17235__auto__ = (function cljs$pprint$unzip_map_$_iter__35130(s__35131){
return (new cljs.core.LazySeq(null,(function (){
var s__35131__$1 = s__35131;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__35131__$1);
if(temp__4425__auto__){
var s__35131__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35131__$2)){
var c__17233__auto__ = cljs.core.chunk_first(s__35131__$2);
var size__17234__auto__ = cljs.core.count(c__17233__auto__);
var b__35133 = cljs.core.chunk_buffer(size__17234__auto__);
if((function (){var i__35132 = (0);
while(true){
if((i__35132 < size__17234__auto__)){
var vec__35140 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__17233__auto__,i__35132);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140,(0),null);
var vec__35141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141,(1),null);
cljs.core.chunk_append(b__35133,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__35145 = (i__35132 + (1));
i__35132 = G__35145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35133),cljs$pprint$unzip_map_$_iter__35130(cljs.core.chunk_rest(s__35131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35133),null);
}
} else {
var vec__35142 = cljs.core.first(s__35131__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142,(0),null);
var vec__35143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__35130(cljs.core.rest(s__35131__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17235__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17235__auto__ = (function cljs$pprint$tuple_map_$_iter__35156(s__35157){
return (new cljs.core.LazySeq(null,(function (){
var s__35157__$1 = s__35157;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__35157__$1);
if(temp__4425__auto__){
var s__35157__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35157__$2)){
var c__17233__auto__ = cljs.core.chunk_first(s__35157__$2);
var size__17234__auto__ = cljs.core.count(c__17233__auto__);
var b__35159 = cljs.core.chunk_buffer(size__17234__auto__);
if((function (){var i__35158 = (0);
while(true){
if((i__35158 < size__17234__auto__)){
var vec__35164 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__17233__auto__,i__35158);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35164,(1),null);
cljs.core.chunk_append(b__35159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__35166 = (i__35158 + (1));
i__35158 = G__35166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35159),cljs$pprint$tuple_map_$_iter__35156(cljs.core.chunk_rest(s__35157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35159),null);
}
} else {
var vec__35165 = cljs.core.first(s__35157__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35165,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35165,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__35156(cljs.core.rest(s__35157__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17235__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__35167 = (n - (1));
n = G__35167;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__35168 = (n + (1));
n = G__35168;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.fromArray([val], true));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__35172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__35172) : test.call(null,G__35172));
})()))){
return pos;
} else {
var G__35173 = (pos + (1));
pos = G__35173;
continue;
}
break;
}
});

cljs.pprint.IPrettyFlush = {};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__17118__auto__ = (((pp == null))?null:pp);
var m__17119__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__17119__auto__.call(null,pp));
} else {
var m__17119__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__17119__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__35180 = (function (){var G__35181 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35181) : cljs.core.deref.call(null,G__35181));
})();
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__35180) : sym.call(null,G__35180));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.constant$keyword$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.constant$keyword$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.constant$keyword$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.constant$keyword$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.constant$keyword$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.constant$keyword$cur,(0));

cljs.pprint.set_field(this$,cljs.core.constant$keyword$line,(cljs.pprint.get_field(this$,cljs.core.constant$keyword$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.constant$keyword$cur,(cljs.pprint.get_field(this$,cljs.core.constant$keyword$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.constant$keyword$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(){
var args35183 = [];
var len__17521__auto___35193 = arguments.length;
var i__17522__auto___35194 = (0);
while(true){
if((i__17522__auto___35194 < len__17521__auto___35193)){
args35183.push((arguments[i__17522__auto___35194]));

var G__35195 = (i__17522__auto___35194 + (1));
i__17522__auto___35194 = G__35195;
continue;
} else {
}
break;
}

var G__35185 = args35183.length;
switch (G__35185) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35183.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = (function (){var G__35186 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$max,max_columns,cljs.core.constant$keyword$cur,(0),cljs.core.constant$keyword$line,(0),cljs.core.constant$keyword$base,writer], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35186) : cljs.core.atom.call(null,G__35186));
})();
if(typeof cljs.pprint.t35187 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t35187 = (function (writer,max_columns,fields,meta35188){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta35188 = meta35188;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t35187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_35189,meta35188__$1){
var self__ = this;
var _35189__$1 = this;
return (new cljs.pprint.t35187(self__.writer,self__.max_columns,self__.fields,meta35188__$1));
});})(fields))
;

cljs.pprint.t35187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_35189){
var self__ = this;
var _35189__$1 = this;
return self__.meta35188;
});})(fields))
;

cljs.pprint.t35187.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t35187.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t35187.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35190 = cljs.core._EQ_;
var expr__35191 = cljs.core.type(x);
if(cljs.core.truth_((pred__35190.cljs$core$IFn$_invoke$arity$2 ? pred__35190.cljs$core$IFn$_invoke$arity$2(String,expr__35191) : pred__35190.call(null,String,expr__35191)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.constant$keyword$cur,(cljs.pprint.get_field(this$__$1,cljs.core.constant$keyword$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.constant$keyword$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.constant$keyword$line,(cljs.pprint.get_field(this$__$1,cljs.core.constant$keyword$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__35190,expr__35191,this$__$1,fields){
return (function (p1__35182_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__35182_SHARP_,"\n");
});})(s,nl,pred__35190,expr__35191,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.constant$keyword$base),s);
} else {
if(cljs.core.truth_((pred__35190.cljs$core$IFn$_invoke$arity$2 ? pred__35190.cljs$core$IFn$_invoke$arity$2(Number,expr__35191) : pred__35190.call(null,Number,expr__35191)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35191)].join('')));
}
}
});})(fields))
;

cljs.pprint.t35187.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta35188","meta35188",-1567181342,null)], null);
});})(fields))
;

cljs.pprint.t35187.cljs$lang$type = true;

cljs.pprint.t35187.cljs$lang$ctorStr = "cljs.pprint/t35187";

cljs.pprint.t35187.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.pprint/t35187");
});})(fields))
;

cljs.pprint.__GT_t35187 = ((function (fields){
return (function cljs$pprint$__GT_t35187(writer__$1,max_columns__$1,fields__$1,meta35188){
return (new cljs.pprint.t35187(writer__$1,max_columns__$1,fields__$1,meta35188));
});})(fields))
;

}

return (new cljs.pprint.t35187(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;

/**
* @constructor
* @param {*} parent
* @param {*} section
* @param {*} start_col
* @param {*} indent
* @param {*} done_nl
* @param {*} intra_block_nl
* @param {*} prefix
* @param {*} per_line_prefix
* @param {*} suffix
* @param {*} logical_block_callback
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17077__auto__,k__17078__auto__){
var self__ = this;
var this__17077__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__17077__auto____$1,k__17078__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17079__auto__,k35198,else__17080__auto__){
var self__ = this;
var this__17079__auto____$1 = this;
var G__35200 = (((k35198 instanceof cljs.core.Keyword))?k35198.fqn:null);
switch (G__35200) {
case "suffix":
return self__.suffix;

break;
case "indent":
return self__.indent;

break;
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "done-nl":
return self__.done_nl;

break;
case "start-col":
return self__.start_col;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35198,else__17080__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17091__auto__,writer__17092__auto__,opts__17093__auto__){
var self__ = this;
var this__17091__auto____$1 = this;
var pr_pair__17094__auto__ = ((function (this__17091__auto____$1){
return (function (keyval__17095__auto__){
return cljs.core.pr_sequential_writer(writer__17092__auto__,cljs.core.pr_writer,""," ","",opts__17093__auto__,keyval__17095__auto__);
});})(this__17091__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__17092__auto__,pr_pair__17094__auto__,"#cljs.pprint.logical-block{",", ","}",opts__17093__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$ = true;

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35197){
var self__ = this;
var G__35197__$1 = this;
return (new cljs.core.RecordIter((0),G__35197__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$parent,cljs.core.constant$keyword$section,cljs.core.constant$keyword$start_DASH_col,cljs.core.constant$keyword$indent,cljs.core.constant$keyword$done_DASH_nl,cljs.core.constant$keyword$intra_DASH_block_DASH_nl,cljs.core.constant$keyword$prefix,cljs.core.constant$keyword$per_DASH_line_DASH_prefix,cljs.core.constant$keyword$suffix,cljs.core.constant$keyword$logical_DASH_block_DASH_callback], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17075__auto__){
var self__ = this;
var this__17075__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17071__auto__){
var self__ = this;
var this__17071__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17081__auto__){
var self__ = this;
var this__17081__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17072__auto__){
var self__ = this;
var this__17072__auto____$1 = this;
var h__16898__auto__ = self__.__hash;
if(!((h__16898__auto__ == null))){
return h__16898__auto__;
} else {
var h__16898__auto____$1 = cljs.core.hash_imap(this__17072__auto____$1);
self__.__hash = h__16898__auto____$1;

return h__16898__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17073__auto__,other__17074__auto__){
var self__ = this;
var this__17073__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16470__auto__ = other__17074__auto__;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = (this__17073__auto____$1.constructor === other__17074__auto__.constructor);
if(and__16470__auto____$1){
return cljs.core.equiv_map(this__17073__auto____$1,other__17074__auto__);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17086__auto__,k__17087__auto__){
var self__ = this;
var this__17086__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.constant$keyword$suffix,null,cljs.core.constant$keyword$indent,null,cljs.core.constant$keyword$parent,null,cljs.core.constant$keyword$section,null,cljs.core.constant$keyword$done_DASH_nl,null,cljs.core.constant$keyword$start_DASH_col,null,cljs.core.constant$keyword$prefix,null,cljs.core.constant$keyword$per_DASH_line_DASH_prefix,null,cljs.core.constant$keyword$logical_DASH_block_DASH_callback,null,cljs.core.constant$keyword$intra_DASH_block_DASH_nl,null], null), null),k__17087__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__17086__auto____$1),self__.__meta),k__17087__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__17087__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17084__auto__,k__17085__auto__,G__35197){
var self__ = this;
var this__17084__auto____$1 = this;
var pred__35201 = cljs.core.keyword_identical_QMARK_;
var expr__35202 = k__17085__auto__;
if(cljs.core.truth_((pred__35201.cljs$core$IFn$_invoke$arity$2 ? pred__35201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$parent,expr__35202) : pred__35201.call(null,cljs.core.constant$keyword$parent,expr__35202)))){
return (new cljs.pprint.logical_block(G__35197,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35201.cljs$core$IFn$_invoke$arity$2 ? pred__35201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$section,expr__35202) : pred__35201.call(null,cljs.core.constant$keyword$section,expr__35202)))){
return (new cljs.pprint.logical_block(self__.parent,G__35197,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35201.cljs$core$IFn$_invoke$arity$2 ? pred__35201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$start_DASH_col,expr__35202) : pred__35201.call(null,cljs.core.constant$keyword$start_DASH_col,expr__35202)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__35197,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35201.cljs$core$IFn$_invoke$arity$2 ? pred__35201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$indent,expr__35202) : pred__35201.call(null,cljs.core.constant$keyword$indent,expr__35202)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__35197,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35201.cljs$core$IFn$_invoke$arity$2 ? pred__35201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$done_DASH_nl,expr__35202) : pred__35201.call(null,cljs.core.constant$keyword$done_DASH_nl,expr__35202)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__35197,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35201.cljs$core$IFn$_invoke$arity$2 ? pred__35201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$intra_DASH_block_DASH_nl,expr__35202) : pred__35201.call(null,cljs.core.constant$keyword$intra_DASH_block_DASH_nl,expr__35202)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__35197,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35201.cljs$core$IFn$_invoke$arity$2 ? pred__35201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$prefix,expr__35202) : pred__35201.call(null,cljs.core.constant$keyword$prefix,expr__35202)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__35197,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35201.cljs$core$IFn$_invoke$arity$2 ? pred__35201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$per_DASH_line_DASH_prefix,expr__35202) : pred__35201.call(null,cljs.core.constant$keyword$per_DASH_line_DASH_prefix,expr__35202)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__35197,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35201.cljs$core$IFn$_invoke$arity$2 ? pred__35201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$suffix,expr__35202) : pred__35201.call(null,cljs.core.constant$keyword$suffix,expr__35202)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__35197,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35201.cljs$core$IFn$_invoke$arity$2 ? pred__35201.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$logical_DASH_block_DASH_callback,expr__35202) : pred__35201.call(null,cljs.core.constant$keyword$logical_DASH_block_DASH_callback,expr__35202)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__35197,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__17085__auto__,G__35197),null));
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
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17089__auto__){
var self__ = this;
var this__17089__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17076__auto__,G__35197){
var self__ = this;
var this__17076__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__35197,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17082__auto__,entry__17083__auto__){
var self__ = this;
var this__17082__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__17083__auto__)){
return cljs.core._assoc(this__17082__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__17082__auto____$1,entry__17083__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__17111__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__17111__auto__,writer__17112__auto__){
return cljs.core._write(writer__17112__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__35199){
return (new cljs.pprint.logical_block(cljs.core.constant$keyword$parent.cljs$core$IFn$_invoke$arity$1(G__35199),cljs.core.constant$keyword$section.cljs$core$IFn$_invoke$arity$1(G__35199),cljs.core.constant$keyword$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__35199),cljs.core.constant$keyword$indent.cljs$core$IFn$_invoke$arity$1(G__35199),cljs.core.constant$keyword$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__35199),cljs.core.constant$keyword$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__35199),cljs.core.constant$keyword$prefix.cljs$core$IFn$_invoke$arity$1(G__35199),cljs.core.constant$keyword$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__35199),cljs.core.constant$keyword$suffix.cljs$core$IFn$_invoke$arity$1(G__35199),cljs.core.constant$keyword$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__35199),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35199,cljs.core.constant$keyword$parent,cljs.core.array_seq([cljs.core.constant$keyword$section,cljs.core.constant$keyword$start_DASH_col,cljs.core.constant$keyword$indent,cljs.core.constant$keyword$done_DASH_nl,cljs.core.constant$keyword$intra_DASH_block_DASH_nl,cljs.core.constant$keyword$prefix,cljs.core.constant$keyword$per_DASH_line_DASH_prefix,cljs.core.constant$keyword$suffix,cljs.core.constant$keyword$logical_DASH_block_DASH_callback], 0)),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.constant$keyword$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__35205 = cljs.core.constant$keyword$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__35205;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.constant$keyword$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.constant$keyword$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
* @param {*} type_tag
* @param {*} data
* @param {*} trailing_white_space
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17077__auto__,k__17078__auto__){
var self__ = this;
var this__17077__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__17077__auto____$1,k__17078__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17079__auto__,k35207,else__17080__auto__){
var self__ = this;
var this__17079__auto____$1 = this;
var G__35209 = (((k35207 instanceof cljs.core.Keyword))?k35207.fqn:null);
switch (G__35209) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35207,else__17080__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17091__auto__,writer__17092__auto__,opts__17093__auto__){
var self__ = this;
var this__17091__auto____$1 = this;
var pr_pair__17094__auto__ = ((function (this__17091__auto____$1){
return (function (keyval__17095__auto__){
return cljs.core.pr_sequential_writer(writer__17092__auto__,cljs.core.pr_writer,""," ","",opts__17093__auto__,keyval__17095__auto__);
});})(this__17091__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__17092__auto__,pr_pair__17094__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__17093__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$ = true;

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35206){
var self__ = this;
var G__35206__$1 = this;
return (new cljs.core.RecordIter((0),G__35206__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$type_DASH_tag,cljs.core.constant$keyword$data,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,cljs.core.constant$keyword$start_DASH_pos,cljs.core.constant$keyword$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17075__auto__){
var self__ = this;
var this__17075__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17071__auto__){
var self__ = this;
var this__17071__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17081__auto__){
var self__ = this;
var this__17081__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17072__auto__){
var self__ = this;
var this__17072__auto____$1 = this;
var h__16898__auto__ = self__.__hash;
if(!((h__16898__auto__ == null))){
return h__16898__auto__;
} else {
var h__16898__auto____$1 = cljs.core.hash_imap(this__17072__auto____$1);
self__.__hash = h__16898__auto____$1;

return h__16898__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17073__auto__,other__17074__auto__){
var self__ = this;
var this__17073__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16470__auto__ = other__17074__auto__;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = (this__17073__auto____$1.constructor === other__17074__auto__.constructor);
if(and__16470__auto____$1){
return cljs.core.equiv_map(this__17073__auto____$1,other__17074__auto__);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17086__auto__,k__17087__auto__){
var self__ = this;
var this__17086__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$end_DASH_pos,null,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,null,cljs.core.constant$keyword$type_DASH_tag,null,cljs.core.constant$keyword$start_DASH_pos,null,cljs.core.constant$keyword$data,null], null), null),k__17087__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__17086__auto____$1),self__.__meta),k__17087__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__17087__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17084__auto__,k__17085__auto__,G__35206){
var self__ = this;
var this__17084__auto____$1 = this;
var pred__35210 = cljs.core.keyword_identical_QMARK_;
var expr__35211 = k__17085__auto__;
if(cljs.core.truth_((pred__35210.cljs$core$IFn$_invoke$arity$2 ? pred__35210.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag,expr__35211) : pred__35210.call(null,cljs.core.constant$keyword$type_DASH_tag,expr__35211)))){
return (new cljs.pprint.buffer_blob(G__35206,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35210.cljs$core$IFn$_invoke$arity$2 ? pred__35210.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$data,expr__35211) : pred__35210.call(null,cljs.core.constant$keyword$data,expr__35211)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__35206,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35210.cljs$core$IFn$_invoke$arity$2 ? pred__35210.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$trailing_DASH_white_DASH_space,expr__35211) : pred__35210.call(null,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,expr__35211)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__35206,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35210.cljs$core$IFn$_invoke$arity$2 ? pred__35210.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$start_DASH_pos,expr__35211) : pred__35210.call(null,cljs.core.constant$keyword$start_DASH_pos,expr__35211)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__35206,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35210.cljs$core$IFn$_invoke$arity$2 ? pred__35210.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$end_DASH_pos,expr__35211) : pred__35210.call(null,cljs.core.constant$keyword$end_DASH_pos,expr__35211)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__35206,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__17085__auto__,G__35206),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17089__auto__){
var self__ = this;
var this__17089__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17076__auto__,G__35206){
var self__ = this;
var this__17076__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__35206,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17082__auto__,entry__17083__auto__){
var self__ = this;
var this__17082__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__17083__auto__)){
return cljs.core._assoc(this__17082__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__17082__auto____$1,entry__17083__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__17111__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__17111__auto__,writer__17112__auto__){
return cljs.core._write(writer__17112__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__35208){
return (new cljs.pprint.buffer_blob(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__35208),cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(G__35208),cljs.core.constant$keyword$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__35208),cljs.core.constant$keyword$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__35208),cljs.core.constant$keyword$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__35208),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35208,cljs.core.constant$keyword$type_DASH_tag,cljs.core.array_seq([cljs.core.constant$keyword$data,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,cljs.core.constant$keyword$start_DASH_pos,cljs.core.constant$keyword$end_DASH_pos], 0)),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.constant$keyword$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__34059__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__34059__auto__),cljs.core.constant$keyword$buffer_DASH_blob);
});

/**
* @constructor
* @param {*} type_tag
* @param {*} type
* @param {*} logical_block
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17077__auto__,k__17078__auto__){
var self__ = this;
var this__17077__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__17077__auto____$1,k__17078__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17079__auto__,k35215,else__17080__auto__){
var self__ = this;
var this__17079__auto____$1 = this;
var G__35217 = (((k35215 instanceof cljs.core.Keyword))?k35215.fqn:null);
switch (G__35217) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35215,else__17080__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17091__auto__,writer__17092__auto__,opts__17093__auto__){
var self__ = this;
var this__17091__auto____$1 = this;
var pr_pair__17094__auto__ = ((function (this__17091__auto____$1){
return (function (keyval__17095__auto__){
return cljs.core.pr_sequential_writer(writer__17092__auto__,cljs.core.pr_writer,""," ","",opts__17093__auto__,keyval__17095__auto__);
});})(this__17091__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__17092__auto__,pr_pair__17094__auto__,"#cljs.pprint.nl-t{",", ","}",opts__17093__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35214){
var self__ = this;
var G__35214__$1 = this;
return (new cljs.core.RecordIter((0),G__35214__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$type_DASH_tag,cljs.core.constant$keyword$type,cljs.core.constant$keyword$logical_DASH_block,cljs.core.constant$keyword$start_DASH_pos,cljs.core.constant$keyword$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17075__auto__){
var self__ = this;
var this__17075__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17071__auto__){
var self__ = this;
var this__17071__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17081__auto__){
var self__ = this;
var this__17081__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17072__auto__){
var self__ = this;
var this__17072__auto____$1 = this;
var h__16898__auto__ = self__.__hash;
if(!((h__16898__auto__ == null))){
return h__16898__auto__;
} else {
var h__16898__auto____$1 = cljs.core.hash_imap(this__17072__auto____$1);
self__.__hash = h__16898__auto____$1;

return h__16898__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17073__auto__,other__17074__auto__){
var self__ = this;
var this__17073__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16470__auto__ = other__17074__auto__;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = (this__17073__auto____$1.constructor === other__17074__auto__.constructor);
if(and__16470__auto____$1){
return cljs.core.equiv_map(this__17073__auto____$1,other__17074__auto__);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17086__auto__,k__17087__auto__){
var self__ = this;
var this__17086__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$end_DASH_pos,null,cljs.core.constant$keyword$type,null,cljs.core.constant$keyword$logical_DASH_block,null,cljs.core.constant$keyword$type_DASH_tag,null,cljs.core.constant$keyword$start_DASH_pos,null], null), null),k__17087__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__17086__auto____$1),self__.__meta),k__17087__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__17087__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17084__auto__,k__17085__auto__,G__35214){
var self__ = this;
var this__17084__auto____$1 = this;
var pred__35218 = cljs.core.keyword_identical_QMARK_;
var expr__35219 = k__17085__auto__;
if(cljs.core.truth_((pred__35218.cljs$core$IFn$_invoke$arity$2 ? pred__35218.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag,expr__35219) : pred__35218.call(null,cljs.core.constant$keyword$type_DASH_tag,expr__35219)))){
return (new cljs.pprint.nl_t(G__35214,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35218.cljs$core$IFn$_invoke$arity$2 ? pred__35218.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type,expr__35219) : pred__35218.call(null,cljs.core.constant$keyword$type,expr__35219)))){
return (new cljs.pprint.nl_t(self__.type_tag,G__35214,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35218.cljs$core$IFn$_invoke$arity$2 ? pred__35218.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$logical_DASH_block,expr__35219) : pred__35218.call(null,cljs.core.constant$keyword$logical_DASH_block,expr__35219)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__35214,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35218.cljs$core$IFn$_invoke$arity$2 ? pred__35218.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$start_DASH_pos,expr__35219) : pred__35218.call(null,cljs.core.constant$keyword$start_DASH_pos,expr__35219)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__35214,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35218.cljs$core$IFn$_invoke$arity$2 ? pred__35218.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$end_DASH_pos,expr__35219) : pred__35218.call(null,cljs.core.constant$keyword$end_DASH_pos,expr__35219)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__35214,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__17085__auto__,G__35214),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17089__auto__){
var self__ = this;
var this__17089__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17076__auto__,G__35214){
var self__ = this;
var this__17076__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__35214,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17082__auto__,entry__17083__auto__){
var self__ = this;
var this__17082__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__17083__auto__)){
return cljs.core._assoc(this__17082__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__17082__auto____$1,entry__17083__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__17111__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__17111__auto__,writer__17112__auto__){
return cljs.core._write(writer__17112__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__35216){
return (new cljs.pprint.nl_t(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__35216),cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(G__35216),cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__35216),cljs.core.constant$keyword$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__35216),cljs.core.constant$keyword$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__35216),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35216,cljs.core.constant$keyword$type_DASH_tag,cljs.core.array_seq([cljs.core.constant$keyword$type,cljs.core.constant$keyword$logical_DASH_block,cljs.core.constant$keyword$start_DASH_pos,cljs.core.constant$keyword$end_DASH_pos], 0)),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.constant$keyword$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__34059__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__34059__auto__),cljs.core.constant$keyword$nl_DASH_t);
});

/**
* @constructor
* @param {*} type_tag
* @param {*} logical_block
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17077__auto__,k__17078__auto__){
var self__ = this;
var this__17077__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__17077__auto____$1,k__17078__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17079__auto__,k35223,else__17080__auto__){
var self__ = this;
var this__17079__auto____$1 = this;
var G__35225 = (((k35223 instanceof cljs.core.Keyword))?k35223.fqn:null);
switch (G__35225) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35223,else__17080__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17091__auto__,writer__17092__auto__,opts__17093__auto__){
var self__ = this;
var this__17091__auto____$1 = this;
var pr_pair__17094__auto__ = ((function (this__17091__auto____$1){
return (function (keyval__17095__auto__){
return cljs.core.pr_sequential_writer(writer__17092__auto__,cljs.core.pr_writer,""," ","",opts__17093__auto__,keyval__17095__auto__);
});})(this__17091__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__17092__auto__,pr_pair__17094__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__17093__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35222){
var self__ = this;
var G__35222__$1 = this;
return (new cljs.core.RecordIter((0),G__35222__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$type_DASH_tag,cljs.core.constant$keyword$logical_DASH_block,cljs.core.constant$keyword$start_DASH_pos,cljs.core.constant$keyword$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17075__auto__){
var self__ = this;
var this__17075__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17071__auto__){
var self__ = this;
var this__17071__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17081__auto__){
var self__ = this;
var this__17081__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17072__auto__){
var self__ = this;
var this__17072__auto____$1 = this;
var h__16898__auto__ = self__.__hash;
if(!((h__16898__auto__ == null))){
return h__16898__auto__;
} else {
var h__16898__auto____$1 = cljs.core.hash_imap(this__17072__auto____$1);
self__.__hash = h__16898__auto____$1;

return h__16898__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17073__auto__,other__17074__auto__){
var self__ = this;
var this__17073__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16470__auto__ = other__17074__auto__;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = (this__17073__auto____$1.constructor === other__17074__auto__.constructor);
if(and__16470__auto____$1){
return cljs.core.equiv_map(this__17073__auto____$1,other__17074__auto__);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17086__auto__,k__17087__auto__){
var self__ = this;
var this__17086__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$end_DASH_pos,null,cljs.core.constant$keyword$logical_DASH_block,null,cljs.core.constant$keyword$type_DASH_tag,null,cljs.core.constant$keyword$start_DASH_pos,null], null), null),k__17087__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__17086__auto____$1),self__.__meta),k__17087__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__17087__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17084__auto__,k__17085__auto__,G__35222){
var self__ = this;
var this__17084__auto____$1 = this;
var pred__35226 = cljs.core.keyword_identical_QMARK_;
var expr__35227 = k__17085__auto__;
if(cljs.core.truth_((pred__35226.cljs$core$IFn$_invoke$arity$2 ? pred__35226.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag,expr__35227) : pred__35226.call(null,cljs.core.constant$keyword$type_DASH_tag,expr__35227)))){
return (new cljs.pprint.start_block_t(G__35222,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35226.cljs$core$IFn$_invoke$arity$2 ? pred__35226.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$logical_DASH_block,expr__35227) : pred__35226.call(null,cljs.core.constant$keyword$logical_DASH_block,expr__35227)))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__35222,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35226.cljs$core$IFn$_invoke$arity$2 ? pred__35226.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$start_DASH_pos,expr__35227) : pred__35226.call(null,cljs.core.constant$keyword$start_DASH_pos,expr__35227)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__35222,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35226.cljs$core$IFn$_invoke$arity$2 ? pred__35226.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$end_DASH_pos,expr__35227) : pred__35226.call(null,cljs.core.constant$keyword$end_DASH_pos,expr__35227)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__35222,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__17085__auto__,G__35222),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17089__auto__){
var self__ = this;
var this__17089__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17076__auto__,G__35222){
var self__ = this;
var this__17076__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__35222,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17082__auto__,entry__17083__auto__){
var self__ = this;
var this__17082__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__17083__auto__)){
return cljs.core._assoc(this__17082__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__17082__auto____$1,entry__17083__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__17111__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__17111__auto__,writer__17112__auto__){
return cljs.core._write(writer__17112__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__35224){
return (new cljs.pprint.start_block_t(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__35224),cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__35224),cljs.core.constant$keyword$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__35224),cljs.core.constant$keyword$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__35224),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35224,cljs.core.constant$keyword$type_DASH_tag,cljs.core.array_seq([cljs.core.constant$keyword$logical_DASH_block,cljs.core.constant$keyword$start_DASH_pos,cljs.core.constant$keyword$end_DASH_pos], 0)),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.constant$keyword$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__34059__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__34059__auto__),cljs.core.constant$keyword$start_DASH_block_DASH_t);
});

/**
* @constructor
* @param {*} type_tag
* @param {*} logical_block
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17077__auto__,k__17078__auto__){
var self__ = this;
var this__17077__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__17077__auto____$1,k__17078__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17079__auto__,k35231,else__17080__auto__){
var self__ = this;
var this__17079__auto____$1 = this;
var G__35233 = (((k35231 instanceof cljs.core.Keyword))?k35231.fqn:null);
switch (G__35233) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35231,else__17080__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17091__auto__,writer__17092__auto__,opts__17093__auto__){
var self__ = this;
var this__17091__auto____$1 = this;
var pr_pair__17094__auto__ = ((function (this__17091__auto____$1){
return (function (keyval__17095__auto__){
return cljs.core.pr_sequential_writer(writer__17092__auto__,cljs.core.pr_writer,""," ","",opts__17093__auto__,keyval__17095__auto__);
});})(this__17091__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__17092__auto__,pr_pair__17094__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__17093__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35230){
var self__ = this;
var G__35230__$1 = this;
return (new cljs.core.RecordIter((0),G__35230__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$type_DASH_tag,cljs.core.constant$keyword$logical_DASH_block,cljs.core.constant$keyword$start_DASH_pos,cljs.core.constant$keyword$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17075__auto__){
var self__ = this;
var this__17075__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17071__auto__){
var self__ = this;
var this__17071__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17081__auto__){
var self__ = this;
var this__17081__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17072__auto__){
var self__ = this;
var this__17072__auto____$1 = this;
var h__16898__auto__ = self__.__hash;
if(!((h__16898__auto__ == null))){
return h__16898__auto__;
} else {
var h__16898__auto____$1 = cljs.core.hash_imap(this__17072__auto____$1);
self__.__hash = h__16898__auto____$1;

return h__16898__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17073__auto__,other__17074__auto__){
var self__ = this;
var this__17073__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16470__auto__ = other__17074__auto__;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = (this__17073__auto____$1.constructor === other__17074__auto__.constructor);
if(and__16470__auto____$1){
return cljs.core.equiv_map(this__17073__auto____$1,other__17074__auto__);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17086__auto__,k__17087__auto__){
var self__ = this;
var this__17086__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$end_DASH_pos,null,cljs.core.constant$keyword$logical_DASH_block,null,cljs.core.constant$keyword$type_DASH_tag,null,cljs.core.constant$keyword$start_DASH_pos,null], null), null),k__17087__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__17086__auto____$1),self__.__meta),k__17087__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__17087__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17084__auto__,k__17085__auto__,G__35230){
var self__ = this;
var this__17084__auto____$1 = this;
var pred__35234 = cljs.core.keyword_identical_QMARK_;
var expr__35235 = k__17085__auto__;
if(cljs.core.truth_((pred__35234.cljs$core$IFn$_invoke$arity$2 ? pred__35234.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag,expr__35235) : pred__35234.call(null,cljs.core.constant$keyword$type_DASH_tag,expr__35235)))){
return (new cljs.pprint.end_block_t(G__35230,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35234.cljs$core$IFn$_invoke$arity$2 ? pred__35234.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$logical_DASH_block,expr__35235) : pred__35234.call(null,cljs.core.constant$keyword$logical_DASH_block,expr__35235)))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__35230,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35234.cljs$core$IFn$_invoke$arity$2 ? pred__35234.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$start_DASH_pos,expr__35235) : pred__35234.call(null,cljs.core.constant$keyword$start_DASH_pos,expr__35235)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__35230,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35234.cljs$core$IFn$_invoke$arity$2 ? pred__35234.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$end_DASH_pos,expr__35235) : pred__35234.call(null,cljs.core.constant$keyword$end_DASH_pos,expr__35235)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__35230,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__17085__auto__,G__35230),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17089__auto__){
var self__ = this;
var this__17089__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17076__auto__,G__35230){
var self__ = this;
var this__17076__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__35230,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17082__auto__,entry__17083__auto__){
var self__ = this;
var this__17082__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__17083__auto__)){
return cljs.core._assoc(this__17082__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__17082__auto____$1,entry__17083__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__17111__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__17111__auto__,writer__17112__auto__){
return cljs.core._write(writer__17112__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__35232){
return (new cljs.pprint.end_block_t(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__35232),cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__35232),cljs.core.constant$keyword$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__35232),cljs.core.constant$keyword$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__35232),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35232,cljs.core.constant$keyword$type_DASH_tag,cljs.core.array_seq([cljs.core.constant$keyword$logical_DASH_block,cljs.core.constant$keyword$start_DASH_pos,cljs.core.constant$keyword$end_DASH_pos], 0)),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.constant$keyword$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__34059__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__34059__auto__),cljs.core.constant$keyword$end_DASH_block_DASH_t);
});

/**
* @constructor
* @param {*} type_tag
* @param {*} logical_block
* @param {*} relative_to
* @param {*} offset
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17077__auto__,k__17078__auto__){
var self__ = this;
var this__17077__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__17077__auto____$1,k__17078__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17079__auto__,k35239,else__17080__auto__){
var self__ = this;
var this__17079__auto____$1 = this;
var G__35241 = (((k35239 instanceof cljs.core.Keyword))?k35239.fqn:null);
switch (G__35241) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35239,else__17080__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17091__auto__,writer__17092__auto__,opts__17093__auto__){
var self__ = this;
var this__17091__auto____$1 = this;
var pr_pair__17094__auto__ = ((function (this__17091__auto____$1){
return (function (keyval__17095__auto__){
return cljs.core.pr_sequential_writer(writer__17092__auto__,cljs.core.pr_writer,""," ","",opts__17093__auto__,keyval__17095__auto__);
});})(this__17091__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__17092__auto__,pr_pair__17094__auto__,"#cljs.pprint.indent-t{",", ","}",opts__17093__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35238){
var self__ = this;
var G__35238__$1 = this;
return (new cljs.core.RecordIter((0),G__35238__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$type_DASH_tag,cljs.core.constant$keyword$logical_DASH_block,cljs.core.constant$keyword$relative_DASH_to,cljs.core.constant$keyword$offset,cljs.core.constant$keyword$start_DASH_pos,cljs.core.constant$keyword$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17075__auto__){
var self__ = this;
var this__17075__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17071__auto__){
var self__ = this;
var this__17071__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17081__auto__){
var self__ = this;
var this__17081__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17072__auto__){
var self__ = this;
var this__17072__auto____$1 = this;
var h__16898__auto__ = self__.__hash;
if(!((h__16898__auto__ == null))){
return h__16898__auto__;
} else {
var h__16898__auto____$1 = cljs.core.hash_imap(this__17072__auto____$1);
self__.__hash = h__16898__auto____$1;

return h__16898__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17073__auto__,other__17074__auto__){
var self__ = this;
var this__17073__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16470__auto__ = other__17074__auto__;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = (this__17073__auto____$1.constructor === other__17074__auto__.constructor);
if(and__16470__auto____$1){
return cljs.core.equiv_map(this__17073__auto____$1,other__17074__auto__);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17086__auto__,k__17087__auto__){
var self__ = this;
var this__17086__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$offset,null,cljs.core.constant$keyword$end_DASH_pos,null,cljs.core.constant$keyword$relative_DASH_to,null,cljs.core.constant$keyword$logical_DASH_block,null,cljs.core.constant$keyword$type_DASH_tag,null,cljs.core.constant$keyword$start_DASH_pos,null], null), null),k__17087__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__17086__auto____$1),self__.__meta),k__17087__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__17087__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17084__auto__,k__17085__auto__,G__35238){
var self__ = this;
var this__17084__auto____$1 = this;
var pred__35242 = cljs.core.keyword_identical_QMARK_;
var expr__35243 = k__17085__auto__;
if(cljs.core.truth_((pred__35242.cljs$core$IFn$_invoke$arity$2 ? pred__35242.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag,expr__35243) : pred__35242.call(null,cljs.core.constant$keyword$type_DASH_tag,expr__35243)))){
return (new cljs.pprint.indent_t(G__35238,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35242.cljs$core$IFn$_invoke$arity$2 ? pred__35242.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$logical_DASH_block,expr__35243) : pred__35242.call(null,cljs.core.constant$keyword$logical_DASH_block,expr__35243)))){
return (new cljs.pprint.indent_t(self__.type_tag,G__35238,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35242.cljs$core$IFn$_invoke$arity$2 ? pred__35242.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$relative_DASH_to,expr__35243) : pred__35242.call(null,cljs.core.constant$keyword$relative_DASH_to,expr__35243)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__35238,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35242.cljs$core$IFn$_invoke$arity$2 ? pred__35242.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$offset,expr__35243) : pred__35242.call(null,cljs.core.constant$keyword$offset,expr__35243)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__35238,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35242.cljs$core$IFn$_invoke$arity$2 ? pred__35242.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$start_DASH_pos,expr__35243) : pred__35242.call(null,cljs.core.constant$keyword$start_DASH_pos,expr__35243)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__35238,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35242.cljs$core$IFn$_invoke$arity$2 ? pred__35242.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$end_DASH_pos,expr__35243) : pred__35242.call(null,cljs.core.constant$keyword$end_DASH_pos,expr__35243)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__35238,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__17085__auto__,G__35238),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17089__auto__){
var self__ = this;
var this__17089__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17076__auto__,G__35238){
var self__ = this;
var this__17076__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__35238,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17082__auto__,entry__17083__auto__){
var self__ = this;
var this__17082__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__17083__auto__)){
return cljs.core._assoc(this__17082__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__17082__auto____$1,entry__17083__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__17111__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__17111__auto__,writer__17112__auto__){
return cljs.core._write(writer__17112__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__35240){
return (new cljs.pprint.indent_t(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__35240),cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__35240),cljs.core.constant$keyword$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__35240),cljs.core.constant$keyword$offset.cljs$core$IFn$_invoke$arity$1(G__35240),cljs.core.constant$keyword$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__35240),cljs.core.constant$keyword$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__35240),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35240,cljs.core.constant$keyword$type_DASH_tag,cljs.core.array_seq([cljs.core.constant$keyword$logical_DASH_block,cljs.core.constant$keyword$relative_DASH_to,cljs.core.constant$keyword$offset,cljs.core.constant$keyword$start_DASH_pos,cljs.core.constant$keyword$end_DASH_pos], 0)),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.constant$keyword$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__34059__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__34059__auto__),cljs.core.constant$keyword$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__17376__auto__ = (function (){var G__35248 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35248) : cljs.core.atom.call(null,G__35248));
})();
var prefer_table__17377__auto__ = (function (){var G__35249 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35249) : cljs.core.atom.call(null,G__35249));
})();
var method_cache__17378__auto__ = (function (){var G__35250 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35250) : cljs.core.atom.call(null,G__35250));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__35251 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35251) : cljs.core.atom.call(null,G__35251));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__){
return (function (p1__35247_SHARP_,p2__35246_SHARP_){
return cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__35246_SHARP_);
});})(method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__))
,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$start_DASH_block_DASH_t,(function (this$,token){
var temp__4425__auto___35259 = cljs.core.constant$keyword$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__35252 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35252) : cljs.core.deref.call(null,G__35252));
})());
if(cljs.core.truth_(temp__4425__auto___35259)){
var cb_35260 = temp__4425__auto___35259;
(cb_35260.cljs$core$IFn$_invoke$arity$1 ? cb_35260.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$start) : cb_35260.call(null,cljs.core.constant$keyword$start));
} else {
}

var lb = cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__4425__auto___35261 = cljs.core.constant$keyword$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4425__auto___35261)){
var prefix_35262 = temp__4425__auto___35261;
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35253 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35253) : cljs.core.deref.call(null,G__35253));
})()),prefix_35262);
} else {
}

var col = cljs.pprint.get_column(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35254 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35254) : cljs.core.deref.call(null,G__35254));
})()));
var G__35255_35263 = cljs.core.constant$keyword$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
var G__35256_35264 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35255_35263,G__35256_35264) : cljs.core.reset_BANG_.call(null,G__35255_35263,G__35256_35264));

var G__35257 = cljs.core.constant$keyword$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__35258 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35257,G__35258) : cljs.core.reset_BANG_.call(null,G__35257,G__35258));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$end_DASH_block_DASH_t,(function (this$,token){
var temp__4425__auto___35267 = cljs.core.constant$keyword$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__35265 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35265) : cljs.core.deref.call(null,G__35265));
})());
if(cljs.core.truth_(temp__4425__auto___35267)){
var cb_35268 = temp__4425__auto___35267;
(cb_35268.cljs$core$IFn$_invoke$arity$1 ? cb_35268.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$end) : cb_35268.call(null,cljs.core.constant$keyword$end));
} else {
}

var temp__4425__auto__ = cljs.core.constant$keyword$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4425__auto__)){
var suffix = temp__4425__auto__;
return cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35266 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35266) : cljs.core.deref.call(null,G__35266));
})()),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$indent_DASH_t,(function (this$,token){
var lb = cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var G__35269 = cljs.core.constant$keyword$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__35270 = (cljs.core.constant$keyword$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__35271 = cljs.core._EQ_;
var expr__35272 = cljs.core.constant$keyword$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((pred__35271.cljs$core$IFn$_invoke$arity$2 ? pred__35271.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$block,expr__35272) : pred__35271.call(null,cljs.core.constant$keyword$block,expr__35272)))){
var G__35274 = cljs.core.constant$keyword$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35274) : cljs.core.deref.call(null,G__35274));
} else {
if(cljs.core.truth_((pred__35271.cljs$core$IFn$_invoke$arity$2 ? pred__35271.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$current,expr__35272) : pred__35271.call(null,cljs.core.constant$keyword$current,expr__35272)))){
return cljs.pprint.get_column(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35275 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35275) : cljs.core.deref.call(null,G__35275));
})()));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35272)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35269,G__35270) : cljs.core.reset_BANG_.call(null,G__35269,G__35270));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35276 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35276) : cljs.core.deref.call(null,G__35276));
})()),cljs.core.constant$keyword$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__16482__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.constant$keyword$mandatory);
if(or__16482__auto__){
return or__16482__auto__;
} else {
var and__16470__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.constant$keyword$fill));
if(and__16470__auto__){
var G__35280 = cljs.core.constant$keyword$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35280) : cljs.core.deref.call(null,G__35280));
} else {
return and__16470__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__4423__auto___35283 = cljs.core.constant$keyword$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__35281 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35281) : cljs.core.deref.call(null,G__35281));
})());
if(cljs.core.truth_(temp__4423__auto___35283)){
var tws_35284 = temp__4423__auto___35283;
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35282 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35282) : cljs.core.deref.call(null,G__35282));
})()),tws_35284);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__35297 = cljs.core.seq(tokens);
var chunk__35298 = null;
var count__35299 = (0);
var i__35300 = (0);
while(true){
if((i__35300 < count__35299)){
var token = chunk__35298.cljs$core$IIndexed$_nth$arity$2(null,i__35300);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.constant$keyword$nl_DASH_t))){
var temp__4423__auto___35309 = cljs.core.constant$keyword$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__35301 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35301) : cljs.core.deref.call(null,G__35301));
})());
if(cljs.core.truth_(temp__4423__auto___35309)){
var tws_35310 = temp__4423__auto___35309;
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35302 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35302) : cljs.core.deref.call(null,G__35302));
})()),tws_35310);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,cljs.core.constant$keyword$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_35311 = cljs.core.constant$keyword$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__35303 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35303) : cljs.core.deref.call(null,G__35303));
})());
if(cljs.core.truth_((function (){var and__16470__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__16470__auto__)){
return tws_35311;
} else {
return and__16470__auto__;
}
})())){
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35304 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35304) : cljs.core.deref.call(null,G__35304));
})()),tws_35311);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,null);
} else {
}

var G__35312 = seq__35297;
var G__35313 = chunk__35298;
var G__35314 = count__35299;
var G__35315 = (i__35300 + (1));
seq__35297 = G__35312;
chunk__35298 = G__35313;
count__35299 = G__35314;
i__35300 = G__35315;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__35297);
if(temp__4425__auto__){
var seq__35297__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35297__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__35297__$1);
var G__35316 = cljs.core.chunk_rest(seq__35297__$1);
var G__35317 = c__17266__auto__;
var G__35318 = cljs.core.count(c__17266__auto__);
var G__35319 = (0);
seq__35297 = G__35316;
chunk__35298 = G__35317;
count__35299 = G__35318;
i__35300 = G__35319;
continue;
} else {
var token = cljs.core.first(seq__35297__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.constant$keyword$nl_DASH_t))){
var temp__4423__auto___35320 = cljs.core.constant$keyword$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__35305 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35305) : cljs.core.deref.call(null,G__35305));
})());
if(cljs.core.truth_(temp__4423__auto___35320)){
var tws_35321 = temp__4423__auto___35320;
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35306 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35306) : cljs.core.deref.call(null,G__35306));
})()),tws_35321);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,cljs.core.constant$keyword$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_35322 = cljs.core.constant$keyword$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__35307 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35307) : cljs.core.deref.call(null,G__35307));
})());
if(cljs.core.truth_((function (){var and__16470__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__16470__auto__)){
return tws_35322;
} else {
return and__16470__auto__;
}
})())){
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35308 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35308) : cljs.core.deref.call(null,G__35308));
})()),tws_35322);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,null);
} else {
}

var G__35323 = cljs.core.next(seq__35297__$1);
var G__35324 = null;
var G__35325 = (0);
var G__35326 = (0);
seq__35297 = G__35323;
chunk__35298 = G__35324;
count__35299 = G__35325;
i__35300 = G__35326;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35330 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35330) : cljs.core.deref.call(null,G__35330));
})()));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35332 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35332) : cljs.core.deref.call(null,G__35332));
})())) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__16482__auto__ = (function (){var G__35336 = cljs.core.constant$keyword$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35336) : cljs.core.deref.call(null,G__35336));
})();
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35340 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35340) : cljs.core.deref.call(null,G__35340));
})()));
var and__16470__auto__ = miser_width;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = maxcol;
if(cljs.core.truth_(and__16470__auto____$1)){
var and__16470__auto____$2 = ((function (){var G__35342 = cljs.core.constant$keyword$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35342) : cljs.core.deref.call(null,G__35342));
})() >= (maxcol - miser_width));
if(and__16470__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
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
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__17376__auto__ = (function (){var G__35343 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35343) : cljs.core.atom.call(null,G__35343));
})();
var prefer_table__17377__auto__ = (function (){var G__35344 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35344) : cljs.core.atom.call(null,G__35344));
})();
var method_cache__17378__auto__ = (function (){var G__35345 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35345) : cljs.core.atom.call(null,G__35345));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__35346 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35346) : cljs.core.atom.call(null,G__35346));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.constant$keyword$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__,hierarchy__17380__auto__))
,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$linear,(function (newl,this$,section,_){
var lb = cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$miser,(function (newl,this$,section,_){
var lb = cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__16482__auto__ = (function (){var G__35348 = cljs.core.constant$keyword$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35348) : cljs.core.deref.call(null,G__35348));
})();
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var or__16482__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__16482__auto____$1){
return or__16482__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__35349_SHARP_){
return cljs.core.not((function (){var and__16470__auto__ = cljs.pprint.nl_t_QMARK_(p1__35349_SHARP_);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__35349_SHARP_),lb);
} else {
return and__16470__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__35350_SHARP_){
var nl_lb = cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__35350_SHARP_);
return cljs.core.not((function (){var and__16470__auto__ = cljs.pprint.nl_t_QMARK_(p1__35350_SHARP_);
if(cljs.core.truth_(and__16470__auto__)){
var or__16482__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__16482__auto__){
return or__16482__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__16470__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
var G__35359_35367 = cljs.core.constant$keyword$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
var G__35360_35368 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35359_35367,G__35360_35368) : cljs.core.reset_BANG_.call(null,G__35359_35367,G__35360_35368));

var G__35361_35369 = cljs.core.constant$keyword$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
var G__35362_35370 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35361_35369,G__35362_35370) : cljs.core.reset_BANG_.call(null,G__35361_35369,G__35362_35370));

var lb__$1 = cljs.core.constant$keyword$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
var G__35363_35371 = cljs.core.constant$keyword$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__35364_35372 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35363_35371,G__35364_35372) : cljs.core.reset_BANG_.call(null,G__35363_35371,G__35364_35372));

var G__35365_35373 = cljs.core.constant$keyword$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__35366_35374 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35365_35373,G__35366_35374) : cljs.core.reset_BANG_.call(null,G__35365_35373,G__35366_35374));

var G__35375 = cljs.core.constant$keyword$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__35375;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35380 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35380) : cljs.core.deref.call(null,G__35380));
})()),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.constant$keyword$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.constant$keyword$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35381 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35381) : cljs.core.deref.call(null,G__35381));
})()),prefix);
} else {
}

var istr_35384 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((function (){var G__35382 = cljs.core.constant$keyword$indent.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35382) : cljs.core.deref.call(null,G__35382));
})() - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35383 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35383) : cljs.core.deref.call(null,G__35383));
})()),istr_35384);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__35385_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__35385_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__35392 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35392,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35392,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__35393 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35393,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35393,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__35394 = newl;
var G__35395 = this$;
var G__35396 = section;
var G__35397 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__35394,G__35395,G__35396,G__35397) : cljs.pprint.emit_nl_QMARK_.call(null,G__35394,G__35395,G__35396,G__35397));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs$pprint$write_token_string(this$,section);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.constant$keyword$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__35399 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35399) : cljs.core.deref.call(null,G__35399));
})());
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__35400 = new_buffer;
buffer = G__35400;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__35403 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35403) : cljs.core.deref.call(null,G__35403));
})()),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.constant$keyword$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__35404 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35404) : cljs.core.deref.call(null,G__35404));
})())))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__4423__auto__ = cljs.core.constant$keyword$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__35406 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35406) : cljs.core.deref.call(null,G__35406));
})());
if(cljs.core.truth_(temp__4423__auto__)){
var buf = temp__4423__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4425__auto__ = cljs.core.constant$keyword$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__35409 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35409) : cljs.core.deref.call(null,G__35409));
})());
if(cljs.core.truth_(temp__4425__auto__)){
var tws = temp__4425__auto__;
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35410 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35410) : cljs.core.deref.call(null,G__35410));
})()),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.constant$keyword$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.constant$keyword$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__35426 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35426) : cljs.core.deref.call(null,G__35426));
})())));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$buffering,cljs.core.constant$keyword$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__35427 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35427) : cljs.core.deref.call(null,G__35427));
})()))){
var oldpos_35441 = cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__35428 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35428) : cljs.core.deref.call(null,G__35428));
})());
var newpos_35442 = (oldpos_35441 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$pos,newpos_35442);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_35441,newpos_35442));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35429 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35429) : cljs.core.deref.call(null,G__35429));
})()),l);
}

cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35430 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35430) : cljs.core.deref.call(null,G__35430));
})()),"\n");

var seq__35431_35443 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__35432_35444 = null;
var count__35433_35445 = (0);
var i__35434_35446 = (0);
while(true){
if((i__35434_35446 < count__35433_35445)){
var l_35447__$1 = chunk__35432_35444.cljs$core$IIndexed$_nth$arity$2(null,i__35434_35446);
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35435 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35435) : cljs.core.deref.call(null,G__35435));
})()),l_35447__$1);

cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35436 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35436) : cljs.core.deref.call(null,G__35436));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35437 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35437) : cljs.core.deref.call(null,G__35437));
})()),prefix);
} else {
}

var G__35448 = seq__35431_35443;
var G__35449 = chunk__35432_35444;
var G__35450 = count__35433_35445;
var G__35451 = (i__35434_35446 + (1));
seq__35431_35443 = G__35448;
chunk__35432_35444 = G__35449;
count__35433_35445 = G__35450;
i__35434_35446 = G__35451;
continue;
} else {
var temp__4425__auto___35452 = cljs.core.seq(seq__35431_35443);
if(temp__4425__auto___35452){
var seq__35431_35453__$1 = temp__4425__auto___35452;
if(cljs.core.chunked_seq_QMARK_(seq__35431_35453__$1)){
var c__17266__auto___35454 = cljs.core.chunk_first(seq__35431_35453__$1);
var G__35455 = cljs.core.chunk_rest(seq__35431_35453__$1);
var G__35456 = c__17266__auto___35454;
var G__35457 = cljs.core.count(c__17266__auto___35454);
var G__35458 = (0);
seq__35431_35443 = G__35455;
chunk__35432_35444 = G__35456;
count__35433_35445 = G__35457;
i__35434_35446 = G__35458;
continue;
} else {
var l_35459__$1 = cljs.core.first(seq__35431_35453__$1);
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35438 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35438) : cljs.core.deref.call(null,G__35438));
})()),l_35459__$1);

cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35439 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35439) : cljs.core.deref.call(null,G__35439));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35440 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35440) : cljs.core.deref.call(null,G__35440));
})()),prefix);
} else {
}

var G__35460 = cljs.core.next(seq__35431_35453__$1);
var G__35461 = null;
var G__35462 = (0);
var G__35463 = (0);
seq__35431_35443 = G__35460;
chunk__35432_35444 = G__35461;
count__35433_35445 = G__35462;
i__35434_35446 = G__35463;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$buffering,cljs.core.constant$keyword$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__35467 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35467) : cljs.core.deref.call(null,G__35467));
})()),cljs.core.constant$keyword$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35468 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35468) : cljs.core.deref.call(null,G__35468));
})()),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__35469 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35469) : cljs.core.deref.call(null,G__35469));
})());
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),null,null,null,null,null,null,null));
var fields = (function (){var G__35483 = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$logical_DASH_blocks,cljs.core.constant$keyword$miser_DASH_width,cljs.core.constant$keyword$buffer_DASH_block,cljs.core.constant$keyword$pretty_DASH_writer,cljs.core.constant$keyword$sections,cljs.core.constant$keyword$mode,cljs.core.constant$keyword$pos,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,cljs.core.constant$keyword$base,cljs.core.constant$keyword$buffer_DASH_level,cljs.core.constant$keyword$buffer],[lb,miser_width,lb,true,null,cljs.core.constant$keyword$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__35483) : cljs.core.atom.call(null,G__35483));
})();
if(typeof cljs.pprint.t35484 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t35484 = (function (pretty_writer,writer,max_columns,miser_width,lb,fields,meta35485){
this.pretty_writer = pretty_writer;
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta35485 = meta35485;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t35484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_35486,meta35485__$1){
var self__ = this;
var _35486__$1 = this;
return (new cljs.pprint.t35484(self__.pretty_writer,self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta35485__$1));
});})(lb,fields))
;

cljs.pprint.t35484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_35486){
var self__ = this;
var _35486__$1 = this;
return self__.meta35485;
});})(lb,fields))
;

cljs.pprint.t35484.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t35484.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35487 = cljs.core._EQ_;
var expr__35488 = cljs.core.type(x);
if(cljs.core.truth_((pred__35487.cljs$core$IFn$_invoke$arity$2 ? pred__35487.cljs$core$IFn$_invoke$arity$2(String,expr__35488) : pred__35487.call(null,String,expr__35488)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.constant$keyword$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__35490 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35490) : cljs.core.deref.call(null,G__35490));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35491 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35491) : cljs.core.deref.call(null,G__35491));
})()),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.constant$keyword$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__35492 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35492) : cljs.core.deref.call(null,G__35492));
})());
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.constant$keyword$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__35487.cljs$core$IFn$_invoke$arity$2 ? pred__35487.cljs$core$IFn$_invoke$arity$2(Number,expr__35488) : pred__35487.call(null,Number,expr__35488)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35488)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t35484.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush(this$__$1);

return cljs.core._flush(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35493 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35493) : cljs.core.deref.call(null,G__35493));
})()));
});})(lb,fields))
;

cljs.pprint.t35484.prototype.cljs$pprint$IPrettyFlush$ = true;

cljs.pprint.t35484.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__35494 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35494) : cljs.core.deref.call(null,G__35494));
})()),cljs.core.constant$keyword$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.constant$keyword$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__35495 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35495) : cljs.core.deref.call(null,G__35495));
})()),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.constant$keyword$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t35484.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"pretty-writer","pretty-writer",417697260,null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$private,true,cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null)], null)))], null)),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta35485","meta35485",502782008,null)], null);
});})(lb,fields))
;

cljs.pprint.t35484.cljs$lang$type = true;

cljs.pprint.t35484.cljs$lang$ctorStr = "cljs.pprint/t35484";

cljs.pprint.t35484.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.pprint/t35484");
});})(lb,fields))
;

cljs.pprint.__GT_t35484 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t35484(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta35485){
return (new cljs.pprint.t35484(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta35485));
});})(lb,fields))
;

}

return (new cljs.pprint.t35484(cljs$pprint$pretty_writer,writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.constant$keyword$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__35506 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35506) : cljs.core.deref.call(null,G__35506));
})()),null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__35507 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35507) : cljs.core.deref.call(null,G__35507));
})()),cljs.core.constant$keyword$writing)){
cljs.pprint.write_white_space(this$);

var temp__4425__auto___35516 = cljs.core.constant$keyword$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__35508 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35508) : cljs.core.deref.call(null,G__35508));
})());
if(cljs.core.truth_(temp__4425__auto___35516)){
var cb_35517 = temp__4425__auto___35516;
(cb_35517.cljs$core$IFn$_invoke$arity$1 ? cb_35517.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$start) : cb_35517.call(null,cljs.core.constant$keyword$start));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35509 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35509) : cljs.core.deref.call(null,G__35509));
})()),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35510 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35510) : cljs.core.deref.call(null,G__35510));
})()));
var G__35511_35518 = cljs.core.constant$keyword$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
var G__35512_35519 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35511_35518,G__35512_35519) : cljs.core.reset_BANG_.call(null,G__35511_35518,G__35512_35519));

var G__35513 = cljs.core.constant$keyword$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__35514 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35513,G__35514) : cljs.core.reset_BANG_.call(null,G__35513,G__35514));
} else {
var oldpos = cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__35515 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35515) : cljs.core.deref.call(null,G__35515));
})());
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.constant$keyword$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__35525 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35525) : cljs.core.deref.call(null,G__35525));
})());
var suffix = cljs.core.constant$keyword$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__35526 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35526) : cljs.core.deref.call(null,G__35526));
})()),cljs.core.constant$keyword$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35527 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35527) : cljs.core.deref.call(null,G__35527));
})()),suffix);
} else {
}

var temp__4425__auto___35530 = cljs.core.constant$keyword$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__35528 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35528) : cljs.core.deref.call(null,G__35528));
})());
if(cljs.core.truth_(temp__4425__auto___35530)){
var cb_35531 = temp__4425__auto___35530;
(cb_35531.cljs$core$IFn$_invoke$arity$1 ? cb_35531.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$end) : cb_35531.call(null,cljs.core.constant$keyword$end));
} else {
}
} else {
var oldpos_35532 = cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__35529 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35529) : cljs.core.deref.call(null,G__35529));
})());
var newpos_35533 = (oldpos_35532 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$pos,newpos_35533);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_35532,newpos_35533));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$logical_DASH_blocks,cljs.core.constant$keyword$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.constant$keyword$mode,cljs.core.constant$keyword$buffering);

var pos = cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__35536 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35536) : cljs.core.deref.call(null,G__35536));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.constant$keyword$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__35537 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35537) : cljs.core.deref.call(null,G__35537));
})()),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.constant$keyword$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__35548 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35548) : cljs.core.deref.call(null,G__35548));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__35549 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35549) : cljs.core.deref.call(null,G__35549));
})()),cljs.core.constant$keyword$writing)){
cljs.pprint.write_white_space(this$);

var G__35550 = cljs.core.constant$keyword$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__35551 = (offset + (function (){var pred__35552 = cljs.core._EQ_;
var expr__35553 = relative_to;
if(cljs.core.truth_((pred__35552.cljs$core$IFn$_invoke$arity$2 ? pred__35552.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$block,expr__35553) : pred__35552.call(null,cljs.core.constant$keyword$block,expr__35553)))){
var G__35555 = cljs.core.constant$keyword$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35555) : cljs.core.deref.call(null,G__35555));
} else {
if(cljs.core.truth_((pred__35552.cljs$core$IFn$_invoke$arity$2 ? pred__35552.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$current,expr__35553) : pred__35552.call(null,cljs.core.constant$keyword$current,expr__35553)))){
return cljs.pprint.get_column(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35556 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35556) : cljs.core.deref.call(null,G__35556));
})()));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35553)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35550,G__35551) : cljs.core.reset_BANG_.call(null,G__35550,G__35551));
} else {
var pos = cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__35557 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35557) : cljs.core.deref.call(null,G__35557));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.constant$keyword$miser_DASH_width.cljs$core$IFn$_invoke$arity$1((function (){var G__35559 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35559) : cljs.core.deref.call(null,G__35559));
})());
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base*
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.write_option_table = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$miser_DASH_width,cljs.core.constant$keyword$right_DASH_margin,cljs.core.constant$keyword$circle,cljs.core.constant$keyword$lines,cljs.core.constant$keyword$suppress_DASH_namespaces,cljs.core.constant$keyword$radix,cljs.core.constant$keyword$level,cljs.core.constant$keyword$readably,cljs.core.constant$keyword$dispatch,cljs.core.constant$keyword$length,cljs.core.constant$keyword$pretty,cljs.core.constant$keyword$base],[new cljs.core.Var(function(){return cljs.pprint._STAR_print_miser_width_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-miser-width*","cljs.pprint/*print-miser-width*",1588913450,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$added,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-miser-width*","*print-miser-width*",1206624211,null),"resources/public/js/out/cljs/pprint.cljs",21,null,true,null,637,cljs.core.List.EMPTY,"The column at which to enter miser style. Depending on the dispatch table,\nmiser style add newlines in more places to try to keep lines short allowing for further\nlevels of nesting.",(cljs.core.truth_(cljs.pprint._STAR_print_miser_width_STAR_)?cljs.pprint._STAR_print_miser_width_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_right_margin_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-right-margin*","cljs.pprint/*print-right-margin*",-56183119,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$added,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-right-margin*","*print-right-margin*",-437272454,null),"resources/public/js/out/cljs/pprint.cljs",22,null,true,null,630,cljs.core.List.EMPTY,"Pretty printing will try to avoid anything going beyond this column.\nSet it to nil to have pprint let the line be arbitrarily long. This will ignore all\nnon-mandatory newlines.",(cljs.core.truth_(cljs.pprint._STAR_print_right_margin_STAR_)?cljs.pprint._STAR_print_right_margin_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_circle_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-circle*","cljs.pprint/*print-circle*",1606185849,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$private,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-circle*","*print-circle*",1148404994,null),"resources/public/js/out/cljs/pprint.cljs",15,null,true,null,649,cljs.core.List.EMPTY,"Mark circular structures (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_circle_STAR_)?cljs.pprint._STAR_print_circle_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_lines_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-lines*","cljs.pprint/*print-lines*",534683484,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$private,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-lines*","*print-lines*",75920659,null),"resources/public/js/out/cljs/pprint.cljs",14,null,true,null,643,cljs.core.List.EMPTY,"Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_lines_STAR_)?cljs.pprint._STAR_print_lines_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_suppress_namespaces_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-suppress-namespaces*","cljs.pprint/*print-suppress-namespaces*",1649488204,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$added,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-suppress-namespaces*","*print-suppress-namespaces*",1795828355,null),"resources/public/js/out/cljs/pprint.cljs",28,null,true,null,661,cljs.core.List.EMPTY,"Don't print namespaces with symbols. This is particularly useful when\npretty printing the results of macro expansions",(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)?cljs.pprint._STAR_print_suppress_namespaces_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_radix_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-radix*","cljs.pprint/*print-radix*",1558253641,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$added,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-radix*","*print-radix*",1168517744,null),"resources/public/js/out/cljs/pprint.cljs",14,null,true,null,670,cljs.core.List.EMPTY,"Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,\nor 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the\nradix specifier is in the form #XXr where XX is the decimal value of *print-base* ",(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?cljs.pprint._STAR_print_radix_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_level_STAR_;},new cljs.core.Symbol("cljs.core","*print-level*","cljs.core/*print-level*",65848482,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),"cljs/core.cljs",(16),null,true,null,(122),cljs.core.List.EMPTY,"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",(cljs.core.truth_(cljs.core._STAR_print_level_STAR_)?cljs.core._STAR_print_level_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_readably_STAR_;},new cljs.core.Symbol("cljs.core","*print-readably*","cljs.core/*print-readably*",-354670250,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),"cljs/core.cljs",(19),null,true,null,(86),cljs.core.List.EMPTY,"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",(cljs.core.truth_(cljs.core._STAR_print_readably_STAR_)?cljs.core._STAR_print_readably_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pprint_dispatch_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pprint-dispatch*","cljs.pprint/*print-pprint-dispatch*",-1820734013,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$added,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-pprint-dispatch*","*print-pprint-dispatch*",-1709114492,null),"resources/public/js/out/cljs/pprint.cljs",25,null,true,null,623,cljs.core.List.EMPTY,"The pretty print dispatch function. Use with-pprint-dispatch or\nset-pprint-dispatch to modify.",(cljs.core.truth_(cljs.pprint._STAR_print_pprint_dispatch_STAR_)?cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_length_STAR_;},new cljs.core.Symbol("cljs.core","*print-length*","cljs.core/*print-length*",-20766927,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),"cljs/core.cljs",(17),null,true,null,(110),cljs.core.List.EMPTY,"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",(cljs.core.truth_(cljs.core._STAR_print_length_STAR_)?cljs.core._STAR_print_length_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pretty_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pretty*","cljs.pprint/*print-pretty*",-762636861,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-pretty*","*print-pretty*",726795140,null),"resources/public/js/out/cljs/pprint.cljs",16,null,true,null,617,cljs.core.List.EMPTY,"Bind to true if you want write to use pretty printing",(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)?cljs.pprint._STAR_print_pretty_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_base_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-base*","cljs.pprint/*print-base*",1887526790,null),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$added,cljs.core.constant$keyword$ns,cljs.core.constant$keyword$name,cljs.core.constant$keyword$file,cljs.core.constant$keyword$end_DASH_column,cljs.core.constant$keyword$column,cljs.core.constant$keyword$dynamic,cljs.core.constant$keyword$line,cljs.core.constant$keyword$end_DASH_line,cljs.core.constant$keyword$arglists,cljs.core.constant$keyword$doc,cljs.core.constant$keyword$test],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-base*","*print-base*",2037937791,null),"resources/public/js/out/cljs/pprint.cljs",13,null,true,null,675,cljs.core.List.EMPTY,"The base to use for printing integers and rationals.",(cljs.core.truth_(cljs.pprint._STAR_print_base_STAR_)?cljs.pprint._STAR_print_base_STAR_.cljs$lang$test:null)]))]);
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__35560_SHARP_){
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__35560_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var v = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__35560_SHARP_)], null);
} else {
return null;
}
}),cljs.core.array_seq([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__16470__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__16470__auto__){
return cljs.core.constant$keyword$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1((function (){var G__35566 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35566) : cljs.core.deref.call(null,G__35566));
})());
} else {
return and__16470__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface.
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__16470__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__16470__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 * Keyword              Meaning                              Default value
 * :stream              Writer for output or nil             true (indicates *out*)
 * :base                Base to use for writing rationals    Current value of *print-base*
 * :circle*             If true, mark circular structures    Current value of *print-circle*
 * :length              Maximum elements to show in sublists Current value of *print-length*
 * :level               Maximum depth                        Current value of *print-level*
 * :lines*              Maximum lines of output              Current value of *print-lines*
 * :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 * :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 * :pretty              If true, do pretty printing          Current value of *print-pretty*
 * :radix               If true, prepend a radix specifier   Current value of *print-radix*
 * :readably*           If true, print readably              Current value of *print-readably*
 * :right-margin        The column for the right margin      Current value of *print-right-margin*
 * :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 * * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(){
var args__17528__auto__ = [];
var len__17521__auto___35583 = arguments.length;
var i__17522__auto___35584 = (0);
while(true){
if((i__17522__auto___35584 < len__17521__auto___35583)){
args__17528__auto__.push((arguments[i__17522__auto___35584]));

var G__35585 = (i__17522__auto___35584 + (1));
i__17522__auto___35584 = G__35585;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((1) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((1)),(0))):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17529__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_35569 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_35570 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_35571 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_35572 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_35573 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_35574 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_35575 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_35576 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_35577 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_35578 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_35579 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_35580 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.constant$keyword$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.constant$keyword$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.constant$keyword$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.constant$keyword$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.constant$keyword$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.constant$keyword$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.constant$keyword$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.constant$keyword$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.constant$keyword$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.constant$keyword$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.constant$keyword$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.constant$keyword$stream))?cljs.core.constant$keyword$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__34042__auto___35586 = base_writer;
var new_writer__34043__auto___35587 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__34042__auto___35586));
var _STAR_out_STAR_35581_35588 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__34043__auto___35587)?cljs.pprint.make_pretty_writer(base_writer__34042__auto___35586,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__34042__auto___35586);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_35581_35588;
}} else {
var _STAR_out_STAR_35582_35589 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_35582_35589;
}}

if(optval === true){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
} else {
}

if((optval == null)){
return [cljs.core.str(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_35580;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_35579;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_35578;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_35577;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_35576;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_35575;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_35574;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_35573;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_35572;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_35571;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_35570;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_35569;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq35567){
var G__35568 = cljs.core.first(seq35567);
var seq35567__$1 = cljs.core.next(seq35567);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__35568,seq35567__$1);
});
cljs.pprint.pprint = (function cljs$pprint$pprint(){
var args35590 = [];
var len__17521__auto___35596 = arguments.length;
var i__17522__auto___35597 = (0);
while(true){
if((i__17522__auto___35597 < len__17521__auto___35596)){
args35590.push((arguments[i__17522__auto___35597]));

var G__35598 = (i__17522__auto___35597 + (1));
i__17522__auto___35597 = G__35598;
continue;
} else {
}
break;
}

var G__35592 = args35590.length;
switch (G__35592) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35590.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_35593 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_35593;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__34042__auto__ = writer;
var new_writer__34043__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__34042__auto__));
var _STAR_out_STAR_35594 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__34043__auto__)?cljs.pprint.make_pretty_writer(base_writer__34042__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__34042__auto__);

try{var _STAR_print_pretty_STAR_35595_35600 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_35595_35600;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_35594;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;
cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error([cljs.core.str("Bad argument: "),cljs.core.str(arg),cljs.core.str(". It must be one of "),cljs.core.str(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__16470__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__16470__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__16470__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 * newline is :linear, :miser, :fill, or :mandatory.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$mandatory,null,cljs.core.constant$keyword$miser,null,cljs.core.constant$keyword$fill,null,cljs.core.constant$keyword$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$block,null,cljs.core.constant$keyword$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$section,null,cljs.core.constant$keyword$line,null,cljs.core.constant$keyword$line_DASH_relative,null,cljs.core.constant$keyword$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 * (let [results [46 38 22]]
 * (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 * (count results) results))
 * 
 * Prints via *print-fn*:
 * There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(){
var args__17528__auto__ = [];
var len__17521__auto___35604 = arguments.length;
var i__17522__auto___35605 = (0);
while(true){
if((i__17522__auto___35605 < len__17521__auto___35604)){
args__17528__auto__.push((arguments[i__17522__auto___35605]));

var G__35606 = (i__17522__auto___35605 + (1));
i__17522__auto___35605 = G__35606;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((2) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((2)),(0))):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17529__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq35601){
var G__35602 = cljs.core.first(seq35601);
var seq35601__$1 = cljs.core.next(seq35601);
var G__35603 = cljs.core.first(seq35601__$1);
var seq35601__$2 = cljs.core.next(seq35601__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__35602,G__35603,seq35601__$2);
});
cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str(message),cljs.core.str("\n"),cljs.core.str(cljs.pprint._STAR_format_str_STAR_),cljs.core.str("\n"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),cljs.core.str("^"),cljs.core.str("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
* @param {*} seq
* @param {*} rest
* @param {*} pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17077__auto__,k__17078__auto__){
var self__ = this;
var this__17077__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__17077__auto____$1,k__17078__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17079__auto__,k35608,else__17080__auto__){
var self__ = this;
var this__17079__auto____$1 = this;
var G__35610 = (((k35608 instanceof cljs.core.Keyword))?k35608.fqn:null);
switch (G__35610) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35608,else__17080__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17091__auto__,writer__17092__auto__,opts__17093__auto__){
var self__ = this;
var this__17091__auto____$1 = this;
var pr_pair__17094__auto__ = ((function (this__17091__auto____$1){
return (function (keyval__17095__auto__){
return cljs.core.pr_sequential_writer(writer__17092__auto__,cljs.core.pr_writer,""," ","",opts__17093__auto__,keyval__17095__auto__);
});})(this__17091__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__17092__auto__,pr_pair__17094__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__17093__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$ = true;

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35607){
var self__ = this;
var G__35607__$1 = this;
return (new cljs.core.RecordIter((0),G__35607__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$seq,cljs.core.constant$keyword$rest,cljs.core.constant$keyword$pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17075__auto__){
var self__ = this;
var this__17075__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17071__auto__){
var self__ = this;
var this__17071__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17081__auto__){
var self__ = this;
var this__17081__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17072__auto__){
var self__ = this;
var this__17072__auto____$1 = this;
var h__16898__auto__ = self__.__hash;
if(!((h__16898__auto__ == null))){
return h__16898__auto__;
} else {
var h__16898__auto____$1 = cljs.core.hash_imap(this__17072__auto____$1);
self__.__hash = h__16898__auto____$1;

return h__16898__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17073__auto__,other__17074__auto__){
var self__ = this;
var this__17073__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16470__auto__ = other__17074__auto__;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = (this__17073__auto____$1.constructor === other__17074__auto__.constructor);
if(and__16470__auto____$1){
return cljs.core.equiv_map(this__17073__auto____$1,other__17074__auto__);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17086__auto__,k__17087__auto__){
var self__ = this;
var this__17086__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$pos,null,cljs.core.constant$keyword$seq,null,cljs.core.constant$keyword$rest,null], null), null),k__17087__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__17086__auto____$1),self__.__meta),k__17087__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__17087__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17084__auto__,k__17085__auto__,G__35607){
var self__ = this;
var this__17084__auto____$1 = this;
var pred__35611 = cljs.core.keyword_identical_QMARK_;
var expr__35612 = k__17085__auto__;
if(cljs.core.truth_((pred__35611.cljs$core$IFn$_invoke$arity$2 ? pred__35611.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$seq,expr__35612) : pred__35611.call(null,cljs.core.constant$keyword$seq,expr__35612)))){
return (new cljs.pprint.arg_navigator(G__35607,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35611.cljs$core$IFn$_invoke$arity$2 ? pred__35611.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$rest,expr__35612) : pred__35611.call(null,cljs.core.constant$keyword$rest,expr__35612)))){
return (new cljs.pprint.arg_navigator(self__.seq,G__35607,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35611.cljs$core$IFn$_invoke$arity$2 ? pred__35611.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$pos,expr__35612) : pred__35611.call(null,cljs.core.constant$keyword$pos,expr__35612)))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__35607,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__17085__auto__,G__35607),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17089__auto__){
var self__ = this;
var this__17089__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17076__auto__,G__35607){
var self__ = this;
var this__17076__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__35607,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17082__auto__,entry__17083__auto__){
var self__ = this;
var this__17082__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__17083__auto__)){
return cljs.core._assoc(this__17082__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__17082__auto____$1,entry__17083__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__17111__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__17111__auto__,writer__17112__auto__){
return cljs.core._write(writer__17112__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__35609){
return (new cljs.pprint.arg_navigator(cljs.core.constant$keyword$seq.cljs$core$IFn$_invoke$arity$1(G__35609),cljs.core.constant$keyword$rest.cljs$core$IFn$_invoke$arity$1(G__35609),cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1(G__35609),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35609,cljs.core.constant$keyword$seq,cljs.core.array_seq([cljs.core.constant$keyword$rest,cljs.core.constant$keyword$pos], 0)),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.constant$keyword$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.constant$keyword$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.constant$keyword$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.constant$keyword$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__35616 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35616,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35616,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__35619 = navigator;
var G__35620 = (cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__35619,G__35620) : cljs.pprint.relative_reposition.call(null,G__35619,G__35620));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.constant$keyword$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.constant$keyword$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.constant$keyword$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.constant$keyword$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
* @param {*} func
* @param {*} def
* @param {*} params
* @param {*} offset
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17077__auto__,k__17078__auto__){
var self__ = this;
var this__17077__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__17077__auto____$1,k__17078__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17079__auto__,k35622,else__17080__auto__){
var self__ = this;
var this__17079__auto____$1 = this;
var G__35624 = (((k35622 instanceof cljs.core.Keyword))?k35622.fqn:null);
switch (G__35624) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35622,else__17080__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17091__auto__,writer__17092__auto__,opts__17093__auto__){
var self__ = this;
var this__17091__auto____$1 = this;
var pr_pair__17094__auto__ = ((function (this__17091__auto____$1){
return (function (keyval__17095__auto__){
return cljs.core.pr_sequential_writer(writer__17092__auto__,cljs.core.pr_writer,""," ","",opts__17093__auto__,keyval__17095__auto__);
});})(this__17091__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__17092__auto__,pr_pair__17094__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__17093__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$ = true;

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35621){
var self__ = this;
var G__35621__$1 = this;
return (new cljs.core.RecordIter((0),G__35621__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$func,cljs.core.constant$keyword$def,cljs.core.constant$keyword$params,cljs.core.constant$keyword$offset], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17075__auto__){
var self__ = this;
var this__17075__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17071__auto__){
var self__ = this;
var this__17071__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17081__auto__){
var self__ = this;
var this__17081__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17072__auto__){
var self__ = this;
var this__17072__auto____$1 = this;
var h__16898__auto__ = self__.__hash;
if(!((h__16898__auto__ == null))){
return h__16898__auto__;
} else {
var h__16898__auto____$1 = cljs.core.hash_imap(this__17072__auto____$1);
self__.__hash = h__16898__auto____$1;

return h__16898__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17073__auto__,other__17074__auto__){
var self__ = this;
var this__17073__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16470__auto__ = other__17074__auto__;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = (this__17073__auto____$1.constructor === other__17074__auto__.constructor);
if(and__16470__auto____$1){
return cljs.core.equiv_map(this__17073__auto____$1,other__17074__auto__);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17086__auto__,k__17087__auto__){
var self__ = this;
var this__17086__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$offset,null,cljs.core.constant$keyword$func,null,cljs.core.constant$keyword$params,null,cljs.core.constant$keyword$def,null], null), null),k__17087__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__17086__auto____$1),self__.__meta),k__17087__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__17087__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17084__auto__,k__17085__auto__,G__35621){
var self__ = this;
var this__17084__auto____$1 = this;
var pred__35625 = cljs.core.keyword_identical_QMARK_;
var expr__35626 = k__17085__auto__;
if(cljs.core.truth_((pred__35625.cljs$core$IFn$_invoke$arity$2 ? pred__35625.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$func,expr__35626) : pred__35625.call(null,cljs.core.constant$keyword$func,expr__35626)))){
return (new cljs.pprint.compiled_directive(G__35621,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35625.cljs$core$IFn$_invoke$arity$2 ? pred__35625.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$def,expr__35626) : pred__35625.call(null,cljs.core.constant$keyword$def,expr__35626)))){
return (new cljs.pprint.compiled_directive(self__.func,G__35621,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35625.cljs$core$IFn$_invoke$arity$2 ? pred__35625.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$params,expr__35626) : pred__35625.call(null,cljs.core.constant$keyword$params,expr__35626)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__35621,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35625.cljs$core$IFn$_invoke$arity$2 ? pred__35625.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$offset,expr__35626) : pred__35625.call(null,cljs.core.constant$keyword$offset,expr__35626)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__35621,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__17085__auto__,G__35621),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17089__auto__){
var self__ = this;
var this__17089__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17076__auto__,G__35621){
var self__ = this;
var this__17076__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__35621,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17082__auto__,entry__17083__auto__){
var self__ = this;
var this__17082__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__17083__auto__)){
return cljs.core._assoc(this__17082__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__17082__auto____$1,entry__17083__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__17111__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__17111__auto__,writer__17112__auto__){
return cljs.core._write(writer__17112__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__35623){
return (new cljs.pprint.compiled_directive(cljs.core.constant$keyword$func.cljs$core$IFn$_invoke$arity$1(G__35623),cljs.core.constant$keyword$def.cljs$core$IFn$_invoke$arity$1(G__35623),cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(G__35623),cljs.core.constant$keyword$offset.cljs$core$IFn$_invoke$arity$1(G__35623),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35623,cljs.core.constant$keyword$func,cljs.core.array_seq([cljs.core.constant$keyword$def,cljs.core.constant$keyword$params,cljs.core.constant$keyword$offset], 0)),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__35629,navigator){
var vec__35633 = p__35629;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35633,(0),null);
var vec__35634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35633,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35634,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35634,(1),null);
var vec__35635 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.constant$keyword$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.constant$keyword$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.constant$keyword$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35635,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35635,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__35637 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35637,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35637,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str(n),cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__16482__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return [cljs.core.str("#"),cljs.core.str(cljs.pprint._STAR_print_base_STAR_),cljs.core.str("r")].join('');
}
})():null)),cljs.core.str((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__35639 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35639,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35639,(1),null);
var base_output = (function (){var or__16482__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.constant$keyword$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.constant$keyword$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.constant$keyword$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.constant$keyword$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.constant$keyword$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.constant$keyword$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(chars),cljs.core.str(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(base_output),cljs.core.str(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__35640_SHARP_){
if((p1__35640_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__35640_SHARP_,base),cljs.core.quot(p1__35640_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__35641_SHARP_){
if((p1__35641_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__35641_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__35641_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__35644 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35644,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35644,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_35645 = (arg < (0));
var pos_arg_35646 = ((neg_35645)?(- arg):arg);
var raw_str_35647 = cljs.pprint.opt_base_str(base,pos_arg_35646);
var group_str_35648 = (cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_35645,pos_arg_35646,raw_str_35647,vec__35644,arg,arg_navigator__$1){
return (function (p1__35642_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__35642_SHARP_);
});})(neg_35645,pos_arg_35646,raw_str_35647,vec__35644,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.constant$keyword$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_35647));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.constant$keyword$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_35647);
var signed_str_35649 = ((neg_35645)?[cljs.core.str("-"),cljs.core.str(group_str_35648)].join(''):(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str("+"),cljs.core.str(group_str_35648)].join(''):group_str_35648
));
var padded_str_35650 = (((signed_str_35649.length < cljs.core.constant$keyword$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.constant$keyword$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_35649.length),cljs.core.constant$keyword$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str(signed_str_35649)].join(''):signed_str_35649);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([padded_str_35650], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$mincol,cljs.core.constant$keyword$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.constant$keyword$colinc,(1),cljs.core.constant$keyword$minpad,(0),cljs.core.constant$keyword$padchar,cljs.core.constant$keyword$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.constant$keyword$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 * offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str(this$),cljs.core.str((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[cljs.core.str(" "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__35651 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str(this$),cljs.core.str(" "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__35652 = (pos - (1));
var G__35653 = cljs.core.first(remainder);
var G__35654 = cljs.core.next(remainder);
acc = G__35651;
pos = G__35652;
this$ = G__35653;
remainder = G__35654;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__35656 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zero"], 0));
} else {
var abs_arg_35657 = (((arg < (0)))?(- arg):arg);
var parts_35658 = cljs.pprint.remainders((1000),abs_arg_35657);
if((cljs.core.count(parts_35658) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_35659 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_35658);
var full_str_35660 = cljs.pprint.add_english_scales(parts_strs_35659,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str(full_str_35660)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$mincol,(0),cljs.core.constant$keyword$padchar," ",cljs.core.constant$keyword$commachar,",",cljs.core.constant$keyword$commainterval,(3),cljs.core.constant$keyword$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$mincol,(0),cljs.core.constant$keyword$padchar,(0),cljs.core.constant$keyword$commachar,(0),cljs.core.constant$keyword$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 * Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__35662 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35662,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35662,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zeroth"], 0));
} else {
var abs_arg_35663 = (((arg < (0)))?(- arg):arg);
var parts_35664 = cljs.pprint.remainders((1000),abs_arg_35663);
if((cljs.core.count(parts_35664) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_35665 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_35664));
var head_str_35666 = cljs.pprint.add_english_scales(parts_strs_35665,(1));
var tail_str_35667 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_35664));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str((((!(cljs.core.empty_QMARK_(head_str_35666))) && (!(cljs.core.empty_QMARK_(tail_str_35667))))?[cljs.core.str(head_str_35666),cljs.core.str(", "),cljs.core.str(tail_str_35667)].join(''):((!(cljs.core.empty_QMARK_(head_str_35666)))?[cljs.core.str(head_str_35666),cljs.core.str("th")].join(''):tail_str_35667
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$mincol,(0),cljs.core.constant$keyword$padchar," ",cljs.core.constant$keyword$commachar,",",cljs.core.constant$keyword$commainterval,(3),cljs.core.constant$keyword$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$mincol,(0),cljs.core.constant$keyword$padchar,(0),cljs.core.constant$keyword$commachar,(0),cljs.core.constant$keyword$commainterval,(0)], null));

var low_two_digits_35668 = cljs.core.rem(arg,(100));
var not_teens_35669 = (((11) < low_two_digits_35668)) || (((19) > low_two_digits_35668));
var low_digit_35670 = cljs.core.rem(low_two_digits_35668,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((low_digit_35670 === (1))) && (not_teens_35669))?"st":((((low_digit_35670 === (2))) && (not_teens_35669))?"nd":((((low_digit_35670 === (3))) && (not_teens_35669))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__35672 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35672,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35672,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_35673 = cljs.pprint.remainders((10),arg);
var acc_35674 = cljs.core.PersistentVector.EMPTY;
var pos_35675 = (cljs.core.count(digits_35673) - (1));
var digits_35676__$1 = digits_35673;
while(true){
if(cljs.core.empty_QMARK_(digits_35676__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_35674)], 0));
} else {
var digit_35677 = cljs.core.first(digits_35676__$1);
var G__35678 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_35677))?acc_35674:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_35674,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_35675),(digit_35677 - (1)))));
var G__35679 = (pos_35675 - (1));
var G__35680 = cljs.core.next(digits_35676__$1);
acc_35674 = G__35678;
pos_35675 = G__35679;
digits_35676__$1 = G__35680;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$mincol,(0),cljs.core.constant$keyword$padchar," ",cljs.core.constant$keyword$commachar,",",cljs.core.constant$keyword$commainterval,(3),cljs.core.constant$keyword$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$mincol,(0),cljs.core.constant$keyword$padchar,(0),cljs.core.constant$keyword$commachar,(0),cljs.core.constant$keyword$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__35682 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35682,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35682,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str("Control-"),cljs.core.str(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__35687 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35687,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35687,(1),null);
var pred__35688_35691 = cljs.core._EQ_;
var expr__35689_35692 = cljs.core.constant$keyword$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((pred__35688_35691.cljs$core$IFn$_invoke$arity$2 ? pred__35688_35691.cljs$core$IFn$_invoke$arity$2("o",expr__35689_35692) : pred__35688_35691.call(null,"o",expr__35689_35692)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__35688_35691.cljs$core$IFn$_invoke$arity$2 ? pred__35688_35691.cljs$core$IFn$_invoke$arity$2("u",expr__35689_35692) : pred__35688_35691.call(null,"u",expr__35689_35692)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__35688_35691.cljs$core$IFn$_invoke$arity$2 ? pred__35688_35691.cljs$core$IFn$_invoke$arity$2(null,expr__35689_35692) : pred__35688_35691.call(null,null,expr__35689_35692)))){
cljs.pprint.print_char(c);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35689_35692)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__35694 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35694,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35694,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__35697 = cljs.pprint.realize_parameter_list(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35697,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35697,(1),null);
var vec__35698 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35698,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35698,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.constant$keyword$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__35700 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35700,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35700,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 * and no other characters. Return a string containing one or more
 * decimal digits containing a decimal number one larger than the input
 * string. The output string will always be the same length as the input
 * string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__35701 = (i - (1));
i = G__35701;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__16482__auto__ = d;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__16794__auto__ = (2);
var y__16795__auto__ = w;
return ((x__16794__auto__ > y__16795__auto__) ? x__16794__auto__ : y__16795__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__16794__auto__ = (e + (1));
var y__16795__auto__ = (w__$1 - (1));
return ((x__16794__auto__ > y__16795__auto__) ? x__16794__auto__ : y__16795__auto__);
})():(w__$1 + e)
));
var vec__35703 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("0"),cljs.core.str(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35703,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35703,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35703,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35703,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__35705 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35705,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35705,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str(m1),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),cljs.core.str("."),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),cljs.core.str("."),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.constant$keyword$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__35710 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35710,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35710,(1),null);
var vec__35711 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35711,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35711,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__35712 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35712,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35712,(1),null);
var scaled_exp = (exp + cljs.core.constant$keyword$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__16482__auto__ = cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__35713 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35713,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35713,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35713,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__16470__auto__ = w;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = d;
if(cljs.core.truth_(and__16470__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_35714 = cljs.core.count(fixed_repr__$1);
var signed_len_35715 = (cljs.core.truth_(add_sign)?(len_35714 + (1)):len_35714);
var prepend_zero_35716__$1 = (prepend_zero) && (!((signed_len_35715 >= w)));
var append_zero_35717__$1 = (append_zero) && (!((signed_len_35715 >= w)));
var full_len_35718 = (((prepend_zero_35716__$1) || (append_zero_35717__$1))?(signed_len_35715 + (1)):signed_len_35715);
if(cljs.core.truth_((function (){var and__16470__auto__ = (full_len_35718 > w);
if(and__16470__auto__){
return cljs.core.constant$keyword$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__16470__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.constant$keyword$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_35718),cljs.core.constant$keyword$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero_35716__$1)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero_35717__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__35725 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35725,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35725,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__35727_35731 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__35728_35732 = G__35727_35731;
var mantissa_35733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728_35732,(0),null);
var exp_35734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728_35732,(1),null);
var G__35727_35735__$1 = G__35727_35731;
while(true){
var vec__35729_35736 = G__35727_35735__$1;
var mantissa_35737__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35729_35736,(0),null);
var exp_35738__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35729_35736,(1),null);
var w_35739 = cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(params);
var d_35740 = cljs.core.constant$keyword$d.cljs$core$IFn$_invoke$arity$1(params);
var e_35741 = cljs.core.constant$keyword$e.cljs$core$IFn$_invoke$arity$1(params);
var k_35742 = cljs.core.constant$keyword$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_35743 = (function (){var or__16482__auto__ = cljs.core.constant$keyword$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return "E";
}
})();
var add_sign_35744 = (function (){var or__16482__auto__ = cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_35745 = (k_35742 <= (0));
var scaled_exp_35746 = (exp_35738__$1 - (k_35742 - (1)));
var scaled_exp_str_35747 = [cljs.core.str(Math.abs(scaled_exp_35746))].join('');
var scaled_exp_str_35748__$1 = [cljs.core.str(expchar_35743),cljs.core.str((((scaled_exp_35746 < (0)))?"-":"+")),cljs.core.str((cljs.core.truth_(e_35741)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_35741 - cljs.core.count(scaled_exp_str_35747)),"0")):null)),cljs.core.str(scaled_exp_str_35747)].join('');
var exp_width_35749 = cljs.core.count(scaled_exp_str_35748__$1);
var base_mantissa_width_35750 = cljs.core.count(mantissa_35737__$1);
var scaled_mantissa_35751 = [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_35742),"0"))),cljs.core.str(mantissa_35737__$1),cljs.core.str((cljs.core.truth_(d_35740)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_35740 - (base_mantissa_width_35750 - (1))) - (((k_35742 < (0)))?(- k_35742):(0))),"0")):null))].join('');
var w_mantissa_35752 = (cljs.core.truth_(w_35739)?(w_35739 - exp_width_35749):null);
var vec__35730_35753 = cljs.pprint.round_str(scaled_mantissa_35751,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_35742,(0)))?(d_35740 - (1)):(((k_35742 > (0)))?d_35740:(((k_35742 < (0)))?(d_35740 - (1)):null))),(cljs.core.truth_(w_mantissa_35752)?(w_mantissa_35752 - (cljs.core.truth_(add_sign_35744)?(1):(0))):null));
var rounded_mantissa_35754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35730_35753,(0),null);
var __35755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35730_35753,(1),null);
var incr_exp_35756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35730_35753,(2),null);
var full_mantissa_35757 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_35754,k_35742);
var append_zero_35758 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_35742,cljs.core.count(rounded_mantissa_35754))) && ((d_35740 == null));
if(cljs.core.not(incr_exp_35756)){
if(cljs.core.truth_(w_35739)){
var len_35759 = (cljs.core.count(full_mantissa_35757) + exp_width_35749);
var signed_len_35760 = (cljs.core.truth_(add_sign_35744)?(len_35759 + (1)):len_35759);
var prepend_zero_35761__$1 = (prepend_zero_35745) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_35760,w_35739)));
var full_len_35762 = ((prepend_zero_35761__$1)?(signed_len_35760 + (1)):signed_len_35760);
var append_zero_35763__$1 = (append_zero_35758) && ((full_len_35762 < w_35739));
if(cljs.core.truth_((function (){var and__16470__auto__ = (function (){var or__16482__auto__ = (full_len_35762 > w_35739);
if(or__16482__auto__){
return or__16482__auto__;
} else {
var and__16470__auto__ = e_35741;
if(cljs.core.truth_(and__16470__auto__)){
return ((exp_width_35749 - (2)) > e_35741);
} else {
return and__16470__auto__;
}
}
})();
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.constant$keyword$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__16470__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_35739,cljs.core.constant$keyword$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_35739 - full_len_35762) - ((append_zero_35763__$1)?(1):(0))),cljs.core.constant$keyword$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign_35744)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_35761__$1)?"0":null)),cljs.core.str(full_mantissa_35757),cljs.core.str(((append_zero_35763__$1)?"0":null)),cljs.core.str(scaled_exp_str_35748__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_(add_sign_35744)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_35745)?"0":null)),cljs.core.str(full_mantissa_35757),cljs.core.str(((append_zero_35758)?"0":null)),cljs.core.str(scaled_exp_str_35748__$1)].join('')], 0));
}
} else {
var G__35764 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_35754,(exp_35738__$1 + (1))], null);
G__35727_35735__$1 = G__35764;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__35767 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35767,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35767,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__35768 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35768,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35768,(1),null);
var w = cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.constant$keyword$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.constant$keyword$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__16794__auto__ = cljs.core.count(mantissa);
var y__16795__auto__ = (function (){var x__16801__auto__ = n;
var y__16802__auto__ = (7);
return ((x__16801__auto__ < y__16802__auto__) ? x__16801__auto__ : y__16802__auto__);
})();
return ((x__16794__auto__ > y__16795__auto__) ? x__16794__auto__ : y__16795__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$w,ww,cljs.core.constant$keyword$d,dd,cljs.core.constant$keyword$k,(0),cljs.core.constant$keyword$overflowchar,cljs.core.constant$keyword$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.constant$keyword$padchar,cljs.core.constant$keyword$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.constant$keyword$at,cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__35772 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35772,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35772,(1),null);
var vec__35773 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35773,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35773,(1),null);
var d = cljs.core.constant$keyword$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.constant$keyword$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__16482__auto__ = cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (arg < (0));
}
})();
var vec__35774 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35774,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35774,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35774,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__16470__auto__)){
return add_sign;
} else {
return and__16470__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.constant$keyword$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.not(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__16470__auto__){
return add_sign;
} else {
return and__16470__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.constant$keyword$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__35776 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35776,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35776,(1),null);
var clauses = cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.constant$keyword$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__35778 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35778,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35778,(1),null);
var clauses = cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__35780 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35780,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35780,(1),null);
var clauses = cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.constant$keyword$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__35783 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35783,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35783,(1),null);
var vec__35784 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35784,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35784,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__16482__auto__ = (cljs.core.empty_QMARK_(cljs.core.constant$keyword$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__16482__auto__){
return or__16482__auto__;
} else {
var and__16470__auto__ = max_count;
if(cljs.core.truth_(and__16470__auto__)){
return (count >= max_count);
} else {
return and__16470__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__35785 = (count + (1));
var G__35786 = iter_result;
var G__35787 = cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__35785;
args__$1 = G__35786;
last_pos = G__35787;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.constant$keyword$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__35790 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35790,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35790,(1),null);
var vec__35791 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35791,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35791,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__16482__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__16482__auto__){
return or__16482__auto__;
} else {
var and__16470__auto__ = max_count;
if(cljs.core.truth_(and__16470__auto__)){
return (count >= max_count);
} else {
return and__16470__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__35792 = (count + (1));
var G__35793 = cljs.core.next(arg_list__$1);
count = G__35792;
arg_list__$1 = G__35793;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.constant$keyword$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__35795 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35795,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35795,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__16482__auto__ = (cljs.core.empty_QMARK_(cljs.core.constant$keyword$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__16482__auto__){
return or__16482__auto__;
} else {
var and__16470__auto__ = max_count;
if(cljs.core.truth_(and__16470__auto__)){
return (count >= max_count);
} else {
return and__16470__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__35796 = (count + (1));
var G__35797 = iter_result;
var G__35798 = cljs.core.constant$keyword$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__35796;
navigator__$2 = G__35797;
last_pos = G__35798;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.constant$keyword$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__35801 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35801,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35801,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__16482__auto__ = (cljs.core.empty_QMARK_(cljs.core.constant$keyword$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__16482__auto__){
return or__16482__auto__;
} else {
var and__16470__auto__ = max_count;
if(cljs.core.truth_(and__16470__auto__)){
return (count >= max_count);
} else {
return and__16470__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__35802 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35802,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35802,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__35803 = (count + (1));
var G__35804 = navigator__$3;
count = G__35803;
navigator__$2 = G__35804;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__35807 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_35808 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_35808;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35807,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35807,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__35809 = cljs.core.next(clauses__$1);
var G__35810 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__35811 = iter_result;
clauses__$1 = G__35809;
acc = G__35810;
navigator__$1 = G__35811;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__35817 = (function (){var temp__4425__auto__ = cljs.core.constant$keyword$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4425__auto__)){
var else$ = temp__4425__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__35818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35817,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35818,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35817,(1),null);
var navigator__$1 = (function (){var or__16482__auto__ = new_navigator;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return navigator;
}
})();
var vec__35819 = (function (){var temp__4425__auto__ = cljs.core.constant$keyword$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4425__auto__)){
var p = temp__4425__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35819,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35819,(1),null);
var navigator__$2 = (function (){var or__16482__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__16482__auto__ = cljs.core.first(cljs.core.constant$keyword$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__16482__auto__ = cljs.core.first(cljs.core.constant$keyword$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__35820 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35820,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35820,(1),null);
var slots = (function (){var x__16794__auto__ = (1);
var y__16795__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__16794__auto__ > y__16795__auto__) ? x__16794__auto__ : y__16795__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.constant$keyword$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.constant$keyword$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.constant$keyword$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__16794__auto__ = minpad;
var y__16795__auto__ = cljs.core.quot(total_pad,slots);
return ((x__16794__auto__ > y__16795__auto__) ? x__16794__auto__ : y__16795__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.constant$keyword$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__16470__auto__ = eol_str;
if(cljs.core.truth_(and__16470__auto__)){
return (((cljs.pprint.get_column(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35821 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35821) : cljs.core.deref.call(null,G__35821));
})())) + min_remaining) + result_columns) > max_columns);
} else {
return and__16470__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eol_str], 0));
} else {
}

var slots_35822__$1 = slots;
var extra_pad_35823__$1 = extra_pad;
var strs_35824__$1 = strs;
var pad_only_35825 = (function (){var or__16482__auto__ = cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_35824__$1),(1))) && (cljs.core.not(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_35824__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(((cljs.core.not(pad_only_35825))?cljs.core.first(strs_35824__$1):null)),cljs.core.str((cljs.core.truth_((function (){var or__16482__auto__ = pad_only_35825;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var or__16482__auto____$1 = cljs.core.next(strs_35824__$1);
if(or__16482__auto____$1){
return or__16482__auto____$1;
} else {
return cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str((((extra_pad_35823__$1 > (0)))?cljs.core.constant$keyword$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__35826 = (slots_35822__$1 - (1));
var G__35827 = (extra_pad_35823__$1 - (1));
var G__35828 = (cljs.core.truth_(pad_only_35825)?strs_35824__$1:cljs.core.next(strs_35824__$1));
var G__35829 = false;
slots_35822__$1 = G__35826;
extra_pad_35823__$1 = G__35827;
strs_35824__$1 = G__35828;
pad_only_35825 = G__35829;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t35836 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t35836 = (function (downcase_writer,writer,meta35837){
this.downcase_writer = downcase_writer;
this.writer = writer;
this.meta35837 = meta35837;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t35836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35838,meta35837__$1){
var self__ = this;
var _35838__$1 = this;
return (new cljs.pprint.t35836(self__.downcase_writer,self__.writer,meta35837__$1));
});

cljs.pprint.t35836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35838){
var self__ = this;
var _35838__$1 = this;
return self__.meta35837;
});

cljs.pprint.t35836.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t35836.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35839 = cljs.core._EQ_;
var expr__35840 = cljs.core.type(x);
if(cljs.core.truth_((pred__35839.cljs$core$IFn$_invoke$arity$2 ? pred__35839.cljs$core$IFn$_invoke$arity$2(String,expr__35840) : pred__35839.call(null,String,expr__35840)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__35839.cljs$core$IFn$_invoke$arity$2 ? pred__35839.cljs$core$IFn$_invoke$arity$2(Number,expr__35840) : pred__35839.call(null,Number,expr__35840)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35840)].join('')));
}
}
});

cljs.pprint.t35836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"downcase-writer","downcase-writer",37286911,null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$private,true,cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null)], null))),cljs.core.constant$keyword$doc,"Returns a proxy that wraps writer, converting all characters to lower case"], null)),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta35837","meta35837",726361396,null)], null);
});

cljs.pprint.t35836.cljs$lang$type = true;

cljs.pprint.t35836.cljs$lang$ctorStr = "cljs.pprint/t35836";

cljs.pprint.t35836.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.pprint/t35836");
});

cljs.pprint.__GT_t35836 = (function cljs$pprint$downcase_writer_$___GT_t35836(downcase_writer__$1,writer__$1,meta35837){
return (new cljs.pprint.t35836(downcase_writer__$1,writer__$1,meta35837));
});

}

return (new cljs.pprint.t35836(cljs$pprint$downcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t35848 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t35848 = (function (upcase_writer,writer,meta35849){
this.upcase_writer = upcase_writer;
this.writer = writer;
this.meta35849 = meta35849;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t35848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35850,meta35849__$1){
var self__ = this;
var _35850__$1 = this;
return (new cljs.pprint.t35848(self__.upcase_writer,self__.writer,meta35849__$1));
});

cljs.pprint.t35848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35850){
var self__ = this;
var _35850__$1 = this;
return self__.meta35849;
});

cljs.pprint.t35848.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t35848.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35851 = cljs.core._EQ_;
var expr__35852 = cljs.core.type(x);
if(cljs.core.truth_((pred__35851.cljs$core$IFn$_invoke$arity$2 ? pred__35851.cljs$core$IFn$_invoke$arity$2(String,expr__35852) : pred__35851.call(null,String,expr__35852)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__35851.cljs$core$IFn$_invoke$arity$2 ? pred__35851.cljs$core$IFn$_invoke$arity$2(Number,expr__35852) : pred__35851.call(null,Number,expr__35852)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35852)].join('')));
}
}
});

cljs.pprint.t35848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"upcase-writer","upcase-writer",51077317,null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$private,true,cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null)], null))),cljs.core.constant$keyword$doc,"Returns a proxy that wraps writer, converting all characters to upper case"], null)),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta35849","meta35849",1181507060,null)], null);
});

cljs.pprint.t35848.cljs$lang$type = true;

cljs.pprint.t35848.cljs$lang$ctorStr = "cljs.pprint/t35848";

cljs.pprint.t35848.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.pprint/t35848");
});

cljs.pprint.__GT_t35848 = (function cljs$pprint$upcase_writer_$___GT_t35848(upcase_writer__$1,writer__$1,meta35849){
return (new cljs.pprint.t35848(upcase_writer__$1,writer__$1,meta35849));
});

}

return (new cljs.pprint.t35848(cljs$pprint$upcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 * first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__16470__auto__ = first_QMARK_;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = f;
if(cljs.core.truth_(and__16470__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())?[cljs.core.str(clojure.string.upper_case(f)),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__16470__auto__ = m;
if(cljs.core.truth_(and__16470__auto__)){
return (m.index + (1));
} else {
return and__16470__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.pprint.t35866 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t35866 = (function (capitalize_word_writer,writer,last_was_whitespace_QMARK_,meta35867){
this.capitalize_word_writer = capitalize_word_writer;
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta35867 = meta35867;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t35866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_35868,meta35867__$1){
var self__ = this;
var _35868__$1 = this;
return (new cljs.pprint.t35866(self__.capitalize_word_writer,self__.writer,self__.last_was_whitespace_QMARK_,meta35867__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t35866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_35868){
var self__ = this;
var _35868__$1 = this;
return self__.meta35867;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t35866.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t35866.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35869 = cljs.core._EQ_;
var expr__35870 = cljs.core.type(x);
if(cljs.core.truth_((pred__35869.cljs$core$IFn$_invoke$arity$2 ? pred__35869.cljs$core$IFn$_invoke$arity$2(String,expr__35870) : pred__35869.call(null,String,expr__35870)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))));

if((s.length > (0))){
var G__35873 = self__.last_was_whitespace_QMARK_;
var G__35874 = (function (){var G__35875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__35875);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35873,G__35874) : cljs.core.reset_BANG_.call(null,G__35873,G__35874));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__35869.cljs$core$IFn$_invoke$arity$2 ? pred__35869.cljs$core$IFn$_invoke$arity$2(Number,expr__35870) : pred__35869.call(null,Number,expr__35870)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

var G__35876 = self__.last_was_whitespace_QMARK_;
var G__35877 = goog.string.isEmptyOrWhitespace(c);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__35876,G__35877) : cljs.core.reset_BANG_.call(null,G__35876,G__35877));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35870)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t35866.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"capitalize-word-writer","capitalize-word-writer",196688059,null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$private,true,cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null)], null))),cljs.core.constant$keyword$doc,"Returns a proxy that wraps writer, capitalizing all words"], null)),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta35867","meta35867",124354915,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t35866.cljs$lang$type = true;

cljs.pprint.t35866.cljs$lang$ctorStr = "cljs.pprint/t35866";

cljs.pprint.t35866.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.pprint/t35866");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t35866 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t35866(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta35867){
return (new cljs.pprint.t35866(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta35867));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t35866(cljs$pprint$capitalize_word_writer,writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
if(typeof cljs.pprint.t35884 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t35884 = (function (init_cap_writer,writer,capped,meta35885){
this.init_cap_writer = init_cap_writer;
this.writer = writer;
this.capped = capped;
this.meta35885 = meta35885;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t35884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_35886,meta35885__$1){
var self__ = this;
var _35886__$1 = this;
return (new cljs.pprint.t35884(self__.init_cap_writer,self__.writer,self__.capped,meta35885__$1));
});})(capped))
;

cljs.pprint.t35884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_35886){
var self__ = this;
var _35886__$1 = this;
return self__.meta35885;
});})(capped))
;

cljs.pprint.t35884.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t35884.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__35887 = cljs.core._EQ_;
var expr__35888 = cljs.core.type(x);
if(cljs.core.truth_((pred__35887.cljs$core$IFn$_invoke$arity$2 ? pred__35887.cljs$core$IFn$_invoke$arity$2(String,expr__35888) : pred__35887.call(null,String,expr__35888)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__16470__auto__ = m;
if(cljs.core.truth_(and__16470__auto__)){
return m.index;
} else {
return and__16470__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__35887.cljs$core$IFn$_invoke$arity$2 ? pred__35887.cljs$core$IFn$_invoke$arity$2(Number,expr__35888) : pred__35887.call(null,Number,expr__35888)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)));
if(and__16470__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__16470__auto__;
}
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35888)].join('')));
}
}
});})(capped))
;

cljs.pprint.t35884.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"init-cap-writer","init-cap-writer",-861558336,null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$private,true,cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null)], null))),cljs.core.constant$keyword$doc,"Returns a proxy that wraps writer, capitalizing the first word"], null)),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta35885","meta35885",1326425371,null)], null);
});})(capped))
;

cljs.pprint.t35884.cljs$lang$type = true;

cljs.pprint.t35884.cljs$lang$ctorStr = "cljs.pprint/t35884";

cljs.pprint.t35884.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.pprint/t35884");
});})(capped))
;

cljs.pprint.__GT_t35884 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t35884(init_cap_writer__$1,writer__$1,capped__$1,meta35885){
return (new cljs.pprint.t35884(init_cap_writer__$1,writer__$1,capped__$1,meta35885));
});})(capped))
;

}

return (new cljs.pprint.t35884(cljs$pprint$init_cap_writer,writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_35891 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_35891;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 * (defn print-table [aseq column-width]
 * (binding [*out* (get-pretty-writer *out*)]
 * (doseq [row aseq]
 * (doseq [col row]
 * (cl-format true "~4D~7,vT" col column-width))
 * (prn))))
 * 
 * Now when you run:
 * 
 * user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 * 1      1       1
 * 2      4       8
 * 3      9      27
 * 4     16      64
 * 5     25     125
 * 6     36     216
 * 7     49     343
 * 8     64     512
 * 9     81     729
 * 10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || (cljs.core._STAR_out_STAR_.cljs$core$IDeref$))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35895 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35895) : cljs.core.deref.call(null,G__35895));
})()))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_35898 = cljs.core.constant$keyword$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_35899 = cljs.core.constant$keyword$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_35900 = cljs.pprint.get_column(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35897 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35897) : cljs.core.deref.call(null,G__35897));
})()));
var space_count_35901 = (((current_35900 < colnum_35898))?(colnum_35898 - current_35900):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_35899,(0)))?(0):(colinc_35899 - cljs.core.rem((current_35900 - colnum_35898),colinc_35899))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_35901," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_35904 = cljs.core.constant$keyword$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_35905 = cljs.core.constant$keyword$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_35906 = (colrel_35904 + cljs.pprint.get_column(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1((function (){var G__35903 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__35903) : cljs.core.deref.call(null,G__35903));
})())));
var offset_35907 = (((colinc_35905 > (0)))?cljs.core.rem(start_col_35906,colinc_35905):(0));
var space_count_35908 = (colrel_35904 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_35907))?(0):(colinc_35905 - offset_35907)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_35908," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.constant$keyword$string.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.constant$keyword$string.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__35912 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35912,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35912,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_35913_35915 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_35914_35916 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_35914_35916;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_35913_35915;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.constant$keyword$current:cljs.core.constant$keyword$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.constant$keyword$mandatory:cljs.core.constant$keyword$fill):(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.constant$keyword$miser:cljs.core.constant$keyword$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"A",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.constant$keyword$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.constant$keyword$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (p1__35917_SHARP_,p2__35918_SHARP_,p3__35919_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__35917_SHARP_,p2__35918_SHARP_,p3__35919_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"S",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.constant$keyword$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.constant$keyword$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (p1__35920_SHARP_,p2__35921_SHARP_,p3__35922_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__35920_SHARP_,p2__35921_SHARP_,p3__35922_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"D",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.constant$keyword$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.constant$keyword$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.constant$keyword$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (p1__35923_SHARP_,p2__35924_SHARP_,p3__35925_SHARP_){
return cljs.pprint.format_integer((10),p1__35923_SHARP_,p2__35924_SHARP_,p3__35925_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"B",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.constant$keyword$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.constant$keyword$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.constant$keyword$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (p1__35926_SHARP_,p2__35927_SHARP_,p3__35928_SHARP_){
return cljs.pprint.format_integer((2),p1__35926_SHARP_,p2__35927_SHARP_,p3__35928_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"O",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.constant$keyword$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.constant$keyword$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.constant$keyword$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (p1__35929_SHARP_,p2__35930_SHARP_,p3__35931_SHARP_){
return cljs.pprint.format_integer((8),p1__35929_SHARP_,p2__35930_SHARP_,p3__35931_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"X",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.constant$keyword$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.constant$keyword$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.constant$keyword$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (p1__35932_SHARP_,p2__35933_SHARP_,p3__35934_SHARP_){
return cljs.pprint.format_integer((16),p1__35932_SHARP_,p2__35933_SHARP_,p3__35934_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"R",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.constant$keyword$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.constant$keyword$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.constant$keyword$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__35935_SHARP_,p2__35936_SHARP_,p3__35937_SHARP_){
return cljs.pprint.format_integer(cljs.core.constant$keyword$base.cljs$core$IFn$_invoke$arity$1(p1__35935_SHARP_),p1__35935_SHARP_,p2__35936_SHARP_,p3__35937_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__16470__auto__;
}
})())){
return (function (p1__35938_SHARP_,p2__35939_SHARP_,p3__35940_SHARP_){
return cljs.pprint.format_old_roman(p1__35938_SHARP_,p2__35939_SHARP_,p3__35940_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__35941_SHARP_,p2__35942_SHARP_,p3__35943_SHARP_){
return cljs.pprint.format_new_roman(p1__35941_SHARP_,p2__35942_SHARP_,p3__35943_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__35944_SHARP_,p2__35945_SHARP_,p3__35946_SHARP_){
return cljs.pprint.format_ordinal_english(p1__35944_SHARP_,p2__35945_SHARP_,p3__35946_SHARP_);
});
} else {
return (function (p1__35947_SHARP_,p2__35948_SHARP_,p3__35949_SHARP_){
return cljs.pprint.format_cardinal_english(p1__35947_SHARP_,p2__35948_SHARP_,p3__35949_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"P",cljs.core.constant$keyword$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__35959 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35959,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35959,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"C",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.constant$keyword$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"F",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.constant$keyword$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$at,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"E",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.constant$keyword$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.constant$keyword$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.constant$keyword$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$at,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"G",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.constant$keyword$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.constant$keyword$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.constant$keyword$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$at,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"$",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.constant$keyword$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.constant$keyword$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.constant$keyword$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"%",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.constant$keyword$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.constant$keyword$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__17366__auto___35965 = cljs.core.constant$keyword$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_35966 = (0);
while(true){
if((i_35966 < n__17366__auto___35965)){
cljs.pprint.prn();

var G__35967 = (i_35966 + (1));
i_35966 = G__35967;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"&",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.constant$keyword$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$pretty,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_35968 = cljs.core.constant$keyword$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_35968 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__17366__auto___35969 = (cnt_35968 - (1));
var i_35970 = (0);
while(true){
if((i_35970 < n__17366__auto___35969)){
cljs.pprint.prn();

var G__35971 = (i_35970 + (1));
i_35970 = G__35971;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"|",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.constant$keyword$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.constant$keyword$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__17366__auto___35972 = cljs.core.constant$keyword$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_35973 = (0);
while(true){
if((i_35973 < n__17366__auto___35972)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\f"], 0));

var G__35974 = (i_35973 + (1));
i_35973 = G__35974;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"~",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.constant$keyword$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.constant$keyword$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"\n",cljs.core.constant$keyword$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"T",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.constant$keyword$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.constant$keyword$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$pretty,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__35950_SHARP_,p2__35951_SHARP_,p3__35952_SHARP_){
return cljs.pprint.relative_tabulation(p1__35950_SHARP_,p2__35951_SHARP_,p3__35952_SHARP_);
});
} else {
return (function (p1__35953_SHARP_,p2__35954_SHARP_,p3__35955_SHARP_){
return cljs.pprint.absolute_tabulation(p1__35953_SHARP_,p2__35954_SHARP_,p3__35955_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"*",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.constant$keyword$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.constant$keyword$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"?",cljs.core.constant$keyword$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$at,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__35960 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35960,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35960,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__35961 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35961,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35961,(1),null);
var vec__35962 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"(",cljs.core.constant$keyword$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$right,")",cljs.core.constant$keyword$allows_DASH_separator,null,cljs.core.constant$keyword$else,null], null),cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__16470__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__35956_SHARP_,p2__35957_SHARP_,p3__35958_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__35956_SHARP_,p2__35957_SHARP_,p3__35958_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,")",cljs.core.constant$keyword$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"[",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.constant$keyword$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$right,"]",cljs.core.constant$keyword$allows_DASH_separator,true,cljs.core.constant$keyword$else,cljs.core.constant$keyword$last], null),cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,";",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.constant$keyword$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colon,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$separator,true], null),cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"]",cljs.core.constant$keyword$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"{",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.constant$keyword$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$right,"}",cljs.core.constant$keyword$allows_DASH_separator,false], null),cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__16470__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"}",cljs.core.constant$keyword$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colon,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"<",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.constant$keyword$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.constant$keyword$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.constant$keyword$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null,cljs.core.constant$keyword$pretty,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$right,">",cljs.core.constant$keyword$allows_DASH_separator,true,cljs.core.constant$keyword$else,cljs.core.constant$keyword$first], null),cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,">",cljs.core.constant$keyword$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colon,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"^",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.constant$keyword$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.constant$keyword$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colon,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.constant$keyword$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.constant$keyword$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.constant$keyword$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.constant$keyword$colon_DASH_up_DASH_arrow:cljs.core.constant$keyword$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__16470__auto__ = arg1;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = arg2;
if(cljs.core.truth_(and__16470__auto____$1)){
return arg3;
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__16470__auto__ = arg1;
if(cljs.core.truth_(and__16470__auto__)){
return arg2;
} else {
return and__16470__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.constant$keyword$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.constant$keyword$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"W",cljs.core.constant$keyword$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null,cljs.core.constant$keyword$pretty,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__16482__auto__ = cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$level,null,cljs.core.constant$keyword$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__35963 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35963,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35963,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__35964 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35964,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35964,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"_",cljs.core.constant$keyword$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$colon,null,cljs.core.constant$keyword$at,null,cljs.core.constant$keyword$both,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$directive,"I",cljs.core.constant$keyword$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.constant$keyword$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.constant$keyword$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$colon,null], null), null),cljs.core.constant$keyword$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$remaining_DASH_arg_DASH_count,null,cljs.core.constant$keyword$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__35975){
var vec__35977 = p__35975;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35977,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35977,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35977,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 * representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__35978){
var vec__35980 = p__35978;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35980,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35980,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.constant$keyword$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.constant$keyword$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p)
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.constant$keyword$colon,"@",cljs.core.constant$keyword$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__35983){
var vec__35984 = p__35983;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35984,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35984,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35984,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error([cljs.core.str("Flag \""),cljs.core.str(cljs.core.first(s__$1)),cljs.core.str("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.constant$keyword$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.not(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__16470__auto__){
return cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__16470__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str("\"@\" is an illegal flag for format directive \""),cljs.core.str(cljs.core.constant$keyword$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.not(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__16470__auto__){
return cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__16470__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str("\":\" is an illegal flag for format directive \""),cljs.core.str(cljs.core.constant$keyword$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.not(cljs.core.constant$keyword$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__16470__auto__){
var and__16470__auto____$1 = cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__16470__auto____$1)){
return cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
return cljs.pprint.format_error([cljs.core.str("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str(cljs.core.constant$keyword$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),(function (){var x__16801__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__16802__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__16801__auto__ < y__16802__auto__) ? x__16801__auto__ : y__16802__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.array_seq([cljs.core.constant$keyword$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__35985_SHARP_,p2__35986_SHARP_){
var val = cljs.core.first(p1__35985_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__35986_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error([cljs.core.str("Parameter "),cljs.core.str(cljs.core.name(cljs.core.first(p2__35986_SHARP_))),cljs.core.str(" has bad type in directive \""),cljs.core.str(cljs.core.constant$keyword$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\": "),cljs.core.str(cljs.core.type(val))].join(''),cljs.core.second(p1__35985_SHARP_));
} else {
return null;
}
}),params,cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__17235__auto__ = (function cljs$pprint$map_params_$_iter__36004(s__36005){
return (new cljs.core.LazySeq(null,(function (){
var s__36005__$1 = s__36005;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__36005__$1);
if(temp__4425__auto__){
var s__36005__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36005__$2)){
var c__17233__auto__ = cljs.core.chunk_first(s__36005__$2);
var size__17234__auto__ = cljs.core.count(c__17233__auto__);
var b__36007 = cljs.core.chunk_buffer(size__17234__auto__);
if((function (){var i__36006 = (0);
while(true){
if((i__36006 < size__17234__auto__)){
var vec__36014 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__17233__auto__,i__36006);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36014,(0),null);
var vec__36015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36014,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36015,(0),null);
cljs.core.chunk_append(b__36007,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__36018 = (i__36006 + (1));
i__36006 = G__36018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36007),cljs$pprint$map_params_$_iter__36004(cljs.core.chunk_rest(s__36005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36007),null);
}
} else {
var vec__36016 = cljs.core.first(s__36005__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36016,(0),null);
var vec__36017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36016,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36017,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__36004(cljs.core.rest(s__36005__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17235__auto__(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__35987_SHARP_,p2__35988_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__35987_SHARP_,p2__35988_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35989_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__35989_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__36023 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36023,(0),null);
var vec__36024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36023,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36024,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36024,(1),null);
var vec__36025 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36025,(0),null);
var vec__36026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36025,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36026,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36026,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36026,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error([cljs.core.str("Directive \""),cljs.core.str(directive),cljs.core.str("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.constant$keyword$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.constant$keyword$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.constant$keyword$right.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.constant$keyword$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__16470__auto__ = cljs.core.constant$keyword$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.constant$keyword$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__16470__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__36031 = (function (){var G__36032 = cljs.core.constant$keyword$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__36033 = cljs.core.constant$keyword$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__36034 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__36032,G__36033,G__36034) : cljs.pprint.collect_clauses.call(null,G__36032,G__36033,G__36034));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.constant$keyword$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.constant$keyword$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.constant$keyword$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.constant$keyword$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.constant$keyword$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$right_DASH_bracket,cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$else,null,cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__36039){
var vec__36040 = p__36039;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36040,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36040,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36040,(2),null);
var vec__36041 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36041,(0),null);
var vec__36042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36041,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36042,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36042,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36042,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36042,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.constant$keyword$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap.fromArray([(cljs.core.truth_(saw_else)?cljs.core.constant$keyword$else:cljs.core.constant$keyword$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.constant$keyword$right_DASH_params,right_params], true, false)], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.constant$keyword$else)){
if(cljs.core.truth_(cljs.core.constant$keyword$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.constant$keyword$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$first,cljs.core.constant$keyword$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$first,cljs.core.constant$keyword$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.constant$keyword$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.constant$keyword$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.constant$keyword$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.constant$keyword$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.constant$keyword$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_36046 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_36046){
return (function (p__36047){
var vec__36048 = p__36047;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36048,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36048,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_36046))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_36046;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__16482__auto__ = cljs.core.constant$keyword$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var or__16482__auto____$1 = cljs.core.some(cljs$pprint$needs_pretty,cljs.core.first(cljs.core.constant$keyword$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__16482__auto____$1)){
return or__16482__auto____$1;
} else {
return cljs.core.some(cljs$pprint$needs_pretty,cljs.core.first(cljs.core.constant$keyword$else.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__36049 = cljs.core.next(format__$1);
format__$1 = G__36049;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(){
var args36050 = [];
var len__17521__auto___36056 = arguments.length;
var i__17522__auto___36057 = (0);
while(true){
if((i__17522__auto___36057 < len__17521__auto___36056)){
args36050.push((arguments[i__17522__auto___36057]));

var G__36058 = (i__17522__auto___36057 + (1));
i__17522__auto___36057 = G__36058;
continue;
} else {
}
break;
}

var G__36052 = args36050.length;
switch (G__36052) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36050.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__16470__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__16470__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_36053 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str(sb)].join('');
} else {
if(stream === true){
return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_36053;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__36054 = cljs.pprint.realize_parameter_list(cljs.core.constant$keyword$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36054,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36054,(1),null);
var vec__36055 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36055,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36055,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.constant$keyword$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;
cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value.
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__36061 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__36061) : cljs.pprint.reader_macros.call(null,G__36061));
})();
if(cljs.core.truth_((function (){var and__16470__auto__ = macro_char;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__16470__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36065_36068 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36066_36069 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count36067_36070 = (0);
var alis_36071__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36067_36070 < cljs.core._STAR_print_length_STAR_))){
if(alis_36071__$1){
cljs.pprint.write_out(cljs.core.first(alis_36071__$1));

if(cljs.core.next(alis_36071__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$linear);

var G__36072 = (length_count36067_36070 + (1));
var G__36073 = cljs.core.next(alis_36071__$1);
length_count36067_36070 = G__36072;
alis_36071__$1 = G__36073;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36066_36069;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36065_36068;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36077_36080 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36078_36081 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count36079_36082 = (0);
var aseq_36083 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36079_36082 < cljs.core._STAR_print_length_STAR_))){
if(aseq_36083){
cljs.pprint.write_out(cljs.core.first(aseq_36083));

if(cljs.core.next(aseq_36083)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$linear);

var G__36084 = (length_count36079_36082 + (1));
var G__36085 = cljs.core.next(aseq_36083);
length_count36079_36082 = G__36084;
aseq_36083 = G__36085;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36078_36081;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36077_36080;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__34104__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__){
return (function() { 
var G__36086__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36086 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36087__i = 0, G__36087__a = new Array(arguments.length -  0);
while (G__36087__i < G__36087__a.length) {G__36087__a[G__36087__i] = arguments[G__36087__i + 0]; ++G__36087__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36087__a,0);
} 
return G__36086__delegate.call(this,args__34106__auto__);};
G__36086.cljs$lang$maxFixedArity = 0;
G__36086.cljs$lang$applyTo = (function (arglist__36088){
var args__34106__auto__ = cljs.core.seq(arglist__36088);
return G__36086__delegate(args__34106__auto__);
});
G__36086.cljs$core$IFn$_invoke$arity$variadic = G__36086__delegate;
return G__36086;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36094_36099 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36095_36100 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"{",null,"}");

var length_count36096_36101 = (0);
var aseq_36102 = cljs.core.seq(amap);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36096_36101 < cljs.core._STAR_print_length_STAR_))){
if(aseq_36102){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36097_36103 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36098_36104 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_36102));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_36102)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36098_36104;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36097_36103;
}}


if(cljs.core.next(aseq_36102)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$linear);

var G__36105 = (length_count36096_36101 + (1));
var G__36106 = cljs.core.next(aseq_36102);
length_count36096_36101 = G__36105;
aseq_36102 = G__36106;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36095_36100;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36094_36099;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__34104__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__){
return (function() { 
var G__36107__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36107 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36108__i = 0, G__36108__a = new Array(arguments.length -  0);
while (G__36108__i < G__36108__a.length) {G__36108__a[G__36108__i] = arguments[G__36108__i + 0]; ++G__36108__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36108__a,0);
} 
return G__36107__delegate.call(this,args__34106__auto__);};
G__36107.cljs$lang$maxFixedArity = 0;
G__36107.cljs$lang$applyTo = (function (arglist__36109){
var args__34106__auto__ = cljs.core.seq(arglist__36109);
return G__36107__delegate(args__34106__auto__);
});
G__36107.cljs$core$IFn$_invoke$arity$variadic = G__36107__delegate;
return G__36107;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__16482__auto__ = (function (){var temp__4425__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str("#<"),cljs.core.str(cljs.pprint.map_ref_type(cljs.core.type(o).name)),cljs.core.str("@"),cljs.core.str(goog.getUid(o)),cljs.core.str(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36114_36118 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36115_36119 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.constant$keyword$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.constant$keyword$linear);

cljs.pprint.write_out((((function (){var and__16470__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || (o.cljs$core$IPending$))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__16470__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__16470__auto__;
}
})())?cljs.core.constant$keyword$not_DASH_delivered:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.deref.call(null,o))));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36115_36119;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36114_36118;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__34104__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__){
return (function() { 
var G__36120__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36120 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36121__i = 0, G__36121__a = new Array(arguments.length -  0);
while (G__36121__i < G__36121__a.length) {G__36121__a[G__36121__i] = arguments[G__36121__i + 0]; ++G__36121__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36121__a,0);
} 
return G__36120__delegate.call(this,args__34106__auto__);};
G__36120.cljs$lang$maxFixedArity = 0;
G__36120.cljs$lang$applyTo = (function (arglist__36122){
var args__34106__auto__ = cljs.core.seq(arglist__36122);
return G__36120__delegate(args__34106__auto__);
});
G__36120.cljs$core$IFn$_invoke$arity$variadic = G__36120__delegate;
return G__36120;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.constant$keyword$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (obj.cljs$core$IDeref$))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.constant$keyword$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.constant$keyword$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.constant$keyword$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.constant$keyword$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.constant$keyword$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.constant$keyword$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.constant$keyword$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__17376__auto__ = (function (){var G__36125 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36125) : cljs.core.atom.call(null,G__36125));
})();
var prefer_table__17377__auto__ = (function (){var G__36126 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36126) : cljs.core.atom.call(null,G__36126));
})();
var method_cache__17378__auto__ = (function (){var G__36127 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36127) : cljs.core.atom.call(null,G__36127));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__36128 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36128) : cljs.core.atom.call(null,G__36128));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.constant$keyword$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.constant$keyword$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.constant$keyword$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.constant$keyword$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.constant$keyword$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__36137 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36137,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36137,(1),null);
var vec__36138 = reference;
var keyw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(0),null);
var args = cljs.core.nthnext(vec__36138,(1));
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36139_36145 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36140_36146 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__34104__auto__ = "~w~:i";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args){
return (function() { 
var G__36147__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36147 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36148__i = 0, G__36148__a = new Array(arguments.length -  0);
while (G__36148__i < G__36148__a.length) {G__36148__a[G__36148__i] = arguments[G__36148__i + 0]; ++G__36148__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36148__a,0);
} 
return G__36147__delegate.call(this,args__34106__auto__);};
G__36147.cljs$lang$maxFixedArity = 0;
G__36147.cljs$lang$applyTo = (function (arglist__36149){
var args__34106__auto__ = cljs.core.seq(arglist__36149);
return G__36147__delegate(args__34106__auto__);
});
G__36147.cljs$core$IFn$_invoke$arity$variadic = G__36147__delegate;
return G__36147;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args))
})().call(null,keyw);

var args_36150__$1 = args;
while(true){
if(cljs.core.seq(args_36150__$1)){
(function (){var format_in__34104__auto__ = " ";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (args_36150__$1,format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args){
return (function() { 
var G__36151__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36151 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36152__i = 0, G__36152__a = new Array(arguments.length -  0);
while (G__36152__i < G__36152__a.length) {G__36152__a[G__36152__i] = arguments[G__36152__i + 0]; ++G__36152__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36152__a,0);
} 
return G__36151__delegate.call(this,args__34106__auto__);};
G__36151.cljs$lang$maxFixedArity = 0;
G__36151.cljs$lang$applyTo = (function (arglist__36153){
var args__34106__auto__ = cljs.core.seq(arglist__36153);
return G__36151__delegate(args__34106__auto__);
});
G__36151.cljs$core$IFn$_invoke$arity$variadic = G__36151__delegate;
return G__36151;
})()
;
;})(args_36150__$1,format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args))
})().call(null);

var arg_36154 = cljs.core.first(args_36150__$1);
if(cljs.core.sequential_QMARK_(arg_36154)){
var vec__36141_36155 = cljs.pprint.brackets(arg_36154);
var start_36156__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36141_36155,(0),null);
var end_36157__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36141_36155,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36142_36158 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36143_36159 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_36156__$1,null,end_36157__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_36154),(3))) && ((cljs.core.second(arg_36154) instanceof cljs.core.Keyword))){
var vec__36144_36160 = arg_36154;
var ns_36161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144_36160,(0),null);
var kw_36162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144_36160,(1),null);
var lis_36163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144_36160,(2),null);
(function (){var format_in__34104__auto__ = "~w ~w ";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (args_36150__$1,format_in__34104__auto__,cf__34105__auto__,vec__36144_36160,ns_36161,kw_36162,lis_36163,_STAR_current_level_STAR_36142_36158,_STAR_current_length_STAR_36143_36159,vec__36141_36155,start_36156__$1,end_36157__$1,arg_36154,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args){
return (function() { 
var G__36164__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36164 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36165__i = 0, G__36165__a = new Array(arguments.length -  0);
while (G__36165__i < G__36165__a.length) {G__36165__a[G__36165__i] = arguments[G__36165__i + 0]; ++G__36165__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36165__a,0);
} 
return G__36164__delegate.call(this,args__34106__auto__);};
G__36164.cljs$lang$maxFixedArity = 0;
G__36164.cljs$lang$applyTo = (function (arglist__36166){
var args__34106__auto__ = cljs.core.seq(arglist__36166);
return G__36164__delegate(args__34106__auto__);
});
G__36164.cljs$core$IFn$_invoke$arity$variadic = G__36164__delegate;
return G__36164;
})()
;
;})(args_36150__$1,format_in__34104__auto__,cf__34105__auto__,vec__36144_36160,ns_36161,kw_36162,lis_36163,_STAR_current_level_STAR_36142_36158,_STAR_current_length_STAR_36143_36159,vec__36141_36155,start_36156__$1,end_36157__$1,arg_36154,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args))
})().call(null,ns_36161,kw_36162);

if(cljs.core.sequential_QMARK_(lis_36163)){
(function (){var format_in__34104__auto__ = ((cljs.core.vector_QMARK_(lis_36163))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (args_36150__$1,format_in__34104__auto__,cf__34105__auto__,vec__36144_36160,ns_36161,kw_36162,lis_36163,_STAR_current_level_STAR_36142_36158,_STAR_current_length_STAR_36143_36159,vec__36141_36155,start_36156__$1,end_36157__$1,arg_36154,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args){
return (function() { 
var G__36167__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36167 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36168__i = 0, G__36168__a = new Array(arguments.length -  0);
while (G__36168__i < G__36168__a.length) {G__36168__a[G__36168__i] = arguments[G__36168__i + 0]; ++G__36168__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36168__a,0);
} 
return G__36167__delegate.call(this,args__34106__auto__);};
G__36167.cljs$lang$maxFixedArity = 0;
G__36167.cljs$lang$applyTo = (function (arglist__36169){
var args__34106__auto__ = cljs.core.seq(arglist__36169);
return G__36167__delegate(args__34106__auto__);
});
G__36167.cljs$core$IFn$_invoke$arity$variadic = G__36167__delegate;
return G__36167;
})()
;
;})(args_36150__$1,format_in__34104__auto__,cf__34105__auto__,vec__36144_36160,ns_36161,kw_36162,lis_36163,_STAR_current_level_STAR_36142_36158,_STAR_current_length_STAR_36143_36159,vec__36141_36155,start_36156__$1,end_36157__$1,arg_36154,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args))
})().call(null,lis_36163);
} else {
cljs.pprint.write_out(lis_36163);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__34104__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (args_36150__$1,format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36142_36158,_STAR_current_length_STAR_36143_36159,vec__36141_36155,start_36156__$1,end_36157__$1,arg_36154,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args){
return (function() { 
var G__36170__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36170 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36171__i = 0, G__36171__a = new Array(arguments.length -  0);
while (G__36171__i < G__36171__a.length) {G__36171__a[G__36171__i] = arguments[G__36171__i + 0]; ++G__36171__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36171__a,0);
} 
return G__36170__delegate.call(this,args__34106__auto__);};
G__36170.cljs$lang$maxFixedArity = 0;
G__36170.cljs$lang$applyTo = (function (arglist__36172){
var args__34106__auto__ = cljs.core.seq(arglist__36172);
return G__36170__delegate(args__34106__auto__);
});
G__36170.cljs$core$IFn$_invoke$arity$variadic = G__36170__delegate;
return G__36170;
})()
;
;})(args_36150__$1,format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36142_36158,_STAR_current_length_STAR_36143_36159,vec__36141_36155,start_36156__$1,end_36157__$1,arg_36154,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args))
})(),arg_36154);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36143_36159;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36142_36158;
}}


if(cljs.core.next(args_36150__$1)){
(function (){var format_in__34104__auto__ = "~_";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (args_36150__$1,format_in__34104__auto__,cf__34105__auto__,vec__36141_36155,start_36156__$1,end_36157__$1,arg_36154,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args){
return (function() { 
var G__36173__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36173 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36174__i = 0, G__36174__a = new Array(arguments.length -  0);
while (G__36174__i < G__36174__a.length) {G__36174__a[G__36174__i] = arguments[G__36174__i + 0]; ++G__36174__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36174__a,0);
} 
return G__36173__delegate.call(this,args__34106__auto__);};
G__36173.cljs$lang$maxFixedArity = 0;
G__36173.cljs$lang$applyTo = (function (arglist__36175){
var args__34106__auto__ = cljs.core.seq(arglist__36175);
return G__36173__delegate(args__34106__auto__);
});
G__36173.cljs$core$IFn$_invoke$arity$variadic = G__36173__delegate;
return G__36173;
})()
;
;})(args_36150__$1,format_in__34104__auto__,cf__34105__auto__,vec__36141_36155,start_36156__$1,end_36157__$1,arg_36154,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out(arg_36154);

if(cljs.core.next(args_36150__$1)){
(function (){var format_in__34104__auto__ = "~:_";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (args_36150__$1,format_in__34104__auto__,cf__34105__auto__,arg_36154,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args){
return (function() { 
var G__36176__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36176 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36177__i = 0, G__36177__a = new Array(arguments.length -  0);
while (G__36177__i < G__36177__a.length) {G__36177__a[G__36177__i] = arguments[G__36177__i + 0]; ++G__36177__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36177__a,0);
} 
return G__36176__delegate.call(this,args__34106__auto__);};
G__36176.cljs$lang$maxFixedArity = 0;
G__36176.cljs$lang$applyTo = (function (arglist__36178){
var args__34106__auto__ = cljs.core.seq(arglist__36178);
return G__36176__delegate(args__34106__auto__);
});
G__36176.cljs$core$IFn$_invoke$arity$variadic = G__36176__delegate;
return G__36176;
})()
;
;})(args_36150__$1,format_in__34104__auto__,cf__34105__auto__,arg_36154,_STAR_current_level_STAR_36139_36145,_STAR_current_length_STAR_36140_36146,vec__36137,start,end,vec__36138,keyw,args))
})().call(null);
} else {
}
}

var G__36179 = cljs.core.next(args_36150__$1);
args_36150__$1 = G__36179;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36140_36146;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36139_36145;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__36185 = alis;
var ns_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185,(0),null);
var ns_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36185,(1),null);
var stuff = cljs.core.nthnext(vec__36185,(2));
var vec__36186 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36186,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36186,(1),null);
var vec__36187 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36187,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36187,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36188_36190 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36189_36191 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__34104__auto__ = "~w ~1I~@_~w";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36188_36190,_STAR_current_length_STAR_36189_36191,vec__36185,ns_sym,ns_name,stuff,vec__36186,doc_str,stuff__$1,vec__36187,attr_map,references){
return (function() { 
var G__36192__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36192 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36193__i = 0, G__36193__a = new Array(arguments.length -  0);
while (G__36193__i < G__36193__a.length) {G__36193__a[G__36193__i] = arguments[G__36193__i + 0]; ++G__36193__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36193__a,0);
} 
return G__36192__delegate.call(this,args__34106__auto__);};
G__36192.cljs$lang$maxFixedArity = 0;
G__36192.cljs$lang$applyTo = (function (arglist__36194){
var args__34106__auto__ = cljs.core.seq(arglist__36194);
return G__36192__delegate(args__34106__auto__);
});
G__36192.cljs$core$IFn$_invoke$arity$variadic = G__36192__delegate;
return G__36192;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36188_36190,_STAR_current_length_STAR_36189_36191,vec__36185,ns_sym,ns_name,stuff,vec__36186,doc_str,stuff__$1,vec__36187,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__16482__auto__ = doc_str;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
var or__16482__auto____$1 = attr_map;
if(cljs.core.truth_(or__16482__auto____$1)){
return or__16482__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
(function (){var format_in__34104__auto__ = "~@:_";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36188_36190,_STAR_current_length_STAR_36189_36191,vec__36185,ns_sym,ns_name,stuff,vec__36186,doc_str,stuff__$1,vec__36187,attr_map,references){
return (function() { 
var G__36195__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36195 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36196__i = 0, G__36196__a = new Array(arguments.length -  0);
while (G__36196__i < G__36196__a.length) {G__36196__a[G__36196__i] = arguments[G__36196__i + 0]; ++G__36196__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36196__a,0);
} 
return G__36195__delegate.call(this,args__34106__auto__);};
G__36195.cljs$lang$maxFixedArity = 0;
G__36195.cljs$lang$applyTo = (function (arglist__36197){
var args__34106__auto__ = cljs.core.seq(arglist__36197);
return G__36195__delegate(args__34106__auto__);
});
G__36195.cljs$core$IFn$_invoke$arity$variadic = G__36195__delegate;
return G__36195;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36188_36190,_STAR_current_length_STAR_36189_36191,vec__36185,ns_sym,ns_name,stuff,vec__36186,doc_str,stuff__$1,vec__36187,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.array_seq([doc_str,(function (){var or__16482__auto__ = attr_map;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__34104__auto__ = "~w~:[~;~:@_~]";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36188_36190,_STAR_current_length_STAR_36189_36191,vec__36185,ns_sym,ns_name,stuff,vec__36186,doc_str,stuff__$1,vec__36187,attr_map,references){
return (function() { 
var G__36198__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36198 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36199__i = 0, G__36199__a = new Array(arguments.length -  0);
while (G__36199__i < G__36199__a.length) {G__36199__a[G__36199__i] = arguments[G__36199__i + 0]; ++G__36199__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36199__a,0);
} 
return G__36198__delegate.call(this,args__34106__auto__);};
G__36198.cljs$lang$maxFixedArity = 0;
G__36198.cljs$lang$applyTo = (function (arglist__36200){
var args__34106__auto__ = cljs.core.seq(arglist__36200);
return G__36198__delegate(args__34106__auto__);
});
G__36198.cljs$core$IFn$_invoke$arity$variadic = G__36198__delegate;
return G__36198;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36188_36190,_STAR_current_length_STAR_36189_36191,vec__36185,ns_sym,ns_name,stuff,vec__36186,doc_str,stuff__$1,vec__36187,attr_map,references))
})().call(null,attr_map,cljs.core.seq(references));
} else {
}

var references_36201__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_36201__$1));

var temp__4425__auto___36202 = cljs.core.next(references_36201__$1);
if(temp__4425__auto___36202){
var references_36203__$2 = temp__4425__auto___36202;
cljs.pprint.pprint_newline(cljs.core.constant$keyword$linear);

var G__36204 = references_36203__$2;
references_36201__$1 = G__36204;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36189_36191;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36188_36190;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__34104__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__){
return (function() { 
var G__36205__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36205 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36206__i = 0, G__36206__a = new Array(arguments.length -  0);
while (G__36206__i < G__36206__a.length) {G__36206__a[G__36206__i] = arguments[G__36206__i + 0]; ++G__36206__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36206__a,0);
} 
return G__36205__delegate.call(this,args__34106__auto__);};
G__36205.cljs$lang$maxFixedArity = 0;
G__36205.cljs$lang$applyTo = (function (arglist__36207){
var args__34106__auto__ = cljs.core.seq(arglist__36207);
return G__36205__delegate(args__34106__auto__);
});
G__36205.cljs$core$IFn$_invoke$arity$variadic = G__36205__delegate;
return G__36205;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__34104__auto__ = " ~_";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__){
return (function() { 
var G__36208__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36208 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36209__i = 0, G__36209__a = new Array(arguments.length -  0);
while (G__36209__i < G__36209__a.length) {G__36209__a[G__36209__i] = arguments[G__36209__i + 0]; ++G__36209__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36209__a,0);
} 
return G__36208__delegate.call(this,args__34106__auto__);};
G__36208.cljs$lang$maxFixedArity = 0;
G__36208.cljs$lang$applyTo = (function (arglist__36210){
var args__34106__auto__ = cljs.core.seq(arglist__36210);
return G__36208__delegate(args__34106__auto__);
});
G__36208.cljs$core$IFn$_invoke$arity$variadic = G__36208__delegate;
return G__36208;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__))
})().call(null);
} else {
(function (){var format_in__34104__auto__ = " ~@_";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__){
return (function() { 
var G__36211__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36211 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36212__i = 0, G__36212__a = new Array(arguments.length -  0);
while (G__36212__i < G__36212__a.length) {G__36212__a[G__36212__i] = arguments[G__36212__i + 0]; ++G__36212__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36212__a,0);
} 
return G__36211__delegate.call(this,args__34106__auto__);};
G__36211.cljs$lang$maxFixedArity = 0;
G__36211.cljs$lang$applyTo = (function (arglist__36213){
var args__34106__auto__ = cljs.core.seq(arglist__36213);
return G__36211__delegate(args__34106__auto__);
});
G__36211.cljs$core$IFn$_invoke$arity$variadic = G__36211__delegate;
return G__36211;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__))
})().call(null);
}

return (function (){var format_in__34104__auto__ = "~{~w~^ ~_~}";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__){
return (function() { 
var G__36214__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36214 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36215__i = 0, G__36215__a = new Array(arguments.length -  0);
while (G__36215__i < G__36215__a.length) {G__36215__a[G__36215__i] = arguments[G__36215__i + 0]; ++G__36215__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36215__a,0);
} 
return G__36214__delegate.call(this,args__34106__auto__);};
G__36214.cljs$lang$maxFixedArity = 0;
G__36214.cljs$lang$applyTo = (function (arglist__36216){
var args__34106__auto__ = cljs.core.seq(arglist__36216);
return G__36214__delegate(args__34106__auto__);
});
G__36214.cljs$core$IFn$_invoke$arity$variadic = G__36214__delegate;
return G__36214;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
return (function (){var format_in__34104__auto__ = " ~_~{~w~^ ~_~}";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__){
return (function() { 
var G__36217__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36217 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36218__i = 0, G__36218__a = new Array(arguments.length -  0);
while (G__36218__i < G__36218__a.length) {G__36218__a[G__36218__i] = arguments[G__36218__i + 0]; ++G__36218__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36218__a,0);
} 
return G__36217__delegate.call(this,args__34106__auto__);};
G__36217.cljs$lang$maxFixedArity = 0;
G__36217.cljs$lang$applyTo = (function (arglist__36219){
var args__34106__auto__ = cljs.core.seq(arglist__36219);
return G__36217__delegate(args__34106__auto__);
});
G__36217.cljs$core$IFn$_invoke$arity$variadic = G__36217__delegate;
return G__36217;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__36225 = alis;
var defn_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(0),null);
var defn_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(1),null);
var stuff = cljs.core.nthnext(vec__36225,(2));
var vec__36226 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36226,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36226,(1),null);
var vec__36227 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36227,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36227,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36228_36230 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36229_36231 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__34104__auto__ = "~w ~1I~@_~w";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36228_36230,_STAR_current_length_STAR_36229_36231,vec__36225,defn_sym,defn_name,stuff,vec__36226,doc_str,stuff__$1,vec__36227,attr_map,stuff__$2){
return (function() { 
var G__36232__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36232 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36233__i = 0, G__36233__a = new Array(arguments.length -  0);
while (G__36233__i < G__36233__a.length) {G__36233__a[G__36233__i] = arguments[G__36233__i + 0]; ++G__36233__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36233__a,0);
} 
return G__36232__delegate.call(this,args__34106__auto__);};
G__36232.cljs$lang$maxFixedArity = 0;
G__36232.cljs$lang$applyTo = (function (arglist__36234){
var args__34106__auto__ = cljs.core.seq(arglist__36234);
return G__36232__delegate(args__34106__auto__);
});
G__36232.cljs$core$IFn$_invoke$arity$variadic = G__36232__delegate;
return G__36232;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36228_36230,_STAR_current_length_STAR_36229_36231,vec__36225,defn_sym,defn_name,stuff,vec__36226,doc_str,stuff__$1,vec__36227,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__34104__auto__ = " ~_~w";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36228_36230,_STAR_current_length_STAR_36229_36231,vec__36225,defn_sym,defn_name,stuff,vec__36226,doc_str,stuff__$1,vec__36227,attr_map,stuff__$2){
return (function() { 
var G__36235__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36235 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36236__i = 0, G__36236__a = new Array(arguments.length -  0);
while (G__36236__i < G__36236__a.length) {G__36236__a[G__36236__i] = arguments[G__36236__i + 0]; ++G__36236__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36236__a,0);
} 
return G__36235__delegate.call(this,args__34106__auto__);};
G__36235.cljs$lang$maxFixedArity = 0;
G__36235.cljs$lang$applyTo = (function (arglist__36237){
var args__34106__auto__ = cljs.core.seq(arglist__36237);
return G__36235__delegate(args__34106__auto__);
});
G__36235.cljs$core$IFn$_invoke$arity$variadic = G__36235__delegate;
return G__36235;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36228_36230,_STAR_current_length_STAR_36229_36231,vec__36225,defn_sym,defn_name,stuff,vec__36226,doc_str,stuff__$1,vec__36227,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__34104__auto__ = " ~_~w";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36228_36230,_STAR_current_length_STAR_36229_36231,vec__36225,defn_sym,defn_name,stuff,vec__36226,doc_str,stuff__$1,vec__36227,attr_map,stuff__$2){
return (function() { 
var G__36238__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36238 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36239__i = 0, G__36239__a = new Array(arguments.length -  0);
while (G__36239__i < G__36239__a.length) {G__36239__a[G__36239__i] = arguments[G__36239__i + 0]; ++G__36239__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36239__a,0);
} 
return G__36238__delegate.call(this,args__34106__auto__);};
G__36238.cljs$lang$maxFixedArity = 0;
G__36238.cljs$lang$applyTo = (function (arglist__36240){
var args__34106__auto__ = cljs.core.seq(arglist__36240);
return G__36238__delegate(args__34106__auto__);
});
G__36238.cljs$core$IFn$_invoke$arity$variadic = G__36238__delegate;
return G__36238;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36228_36230,_STAR_current_length_STAR_36229_36231,vec__36225,defn_sym,defn_name,stuff,vec__36226,doc_str,stuff__$1,vec__36227,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__16482__auto__ = doc_str;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__16482__auto__ = doc_str;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36229_36231;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36228_36230;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36246_36251 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36247_36252 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count36248_36253 = (0);
var binding_36254 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36248_36253 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_36254)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36249_36255 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36250_36256 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_36254));

if(cljs.core.next(binding_36254)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$miser);

cljs.pprint.write_out(cljs.core.second(binding_36254));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36250_36256;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36249_36255;
}}


if(cljs.core.next(cljs.core.rest(binding_36254))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$linear);

var G__36257 = (length_count36248_36253 + (1));
var G__36258 = cljs.core.next(cljs.core.rest(binding_36254));
length_count36248_36253 = G__36257;
binding_36254 = G__36258;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36247_36252;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36246_36251;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36261_36263 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36262_36264 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
(function (){var format_in__34104__auto__ = "~w ~1I~@_";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36261_36263,_STAR_current_length_STAR_36262_36264,base_sym){
return (function() { 
var G__36265__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36265 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36266__i = 0, G__36266__a = new Array(arguments.length -  0);
while (G__36266__i < G__36266__a.length) {G__36266__a[G__36266__i] = arguments[G__36266__i + 0]; ++G__36266__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36266__a,0);
} 
return G__36265__delegate.call(this,args__34106__auto__);};
G__36265.cljs$lang$maxFixedArity = 0;
G__36265.cljs$lang$applyTo = (function (arglist__36267){
var args__34106__auto__ = cljs.core.seq(arglist__36267);
return G__36265__delegate(args__34106__auto__);
});
G__36265.cljs$core$IFn$_invoke$arity$variadic = G__36265__delegate;
return G__36265;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36261_36263,_STAR_current_length_STAR_36262_36264,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

(function (){var format_in__34104__auto__ = " ~_~{~w~^ ~_~}";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36261_36263,_STAR_current_length_STAR_36262_36264,base_sym){
return (function() { 
var G__36268__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36268 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36269__i = 0, G__36269__a = new Array(arguments.length -  0);
while (G__36269__i < G__36269__a.length) {G__36269__a[G__36269__i] = arguments[G__36269__i + 0]; ++G__36269__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36269__a,0);
} 
return G__36268__delegate.call(this,args__34106__auto__);};
G__36268.cljs$lang$maxFixedArity = 0;
G__36268.cljs$lang$applyTo = (function (arglist__36270){
var args__34106__auto__ = cljs.core.seq(arglist__36270);
return G__36268__delegate(args__34106__auto__);
});
G__36268.cljs$core$IFn$_invoke$arity$variadic = G__36268__delegate;
return G__36268;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36261_36263,_STAR_current_length_STAR_36262_36264,base_sym))
})().call(null,cljs.core.next(cljs.core.rest(alis)));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36262_36264;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36261_36263;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__34104__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__){
return (function() { 
var G__36271__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36271 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36272__i = 0, G__36272__a = new Array(arguments.length -  0);
while (G__36272__i < G__36272__a.length) {G__36272__a[G__36272__i] = arguments[G__36272__i + 0]; ++G__36272__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36272__a,0);
} 
return G__36271__delegate.call(this,args__34106__auto__);};
G__36271.cljs$lang$maxFixedArity = 0;
G__36271.cljs$lang$applyTo = (function (arglist__36273){
var args__34106__auto__ = cljs.core.seq(arglist__36273);
return G__36271__delegate(args__34106__auto__);
});
G__36271.cljs$core$IFn$_invoke$arity$variadic = G__36271__delegate;
return G__36271;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36279_36284 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36280_36285 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.constant$keyword$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$linear);

var length_count36281_36286 = (0);
var alis_36287__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36281_36286 < cljs.core._STAR_print_length_STAR_))){
if(alis_36287__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36282_36288 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36283_36289 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_36287__$1));

if(cljs.core.next(alis_36287__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$miser);

cljs.pprint.write_out(cljs.core.second(alis_36287__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36283_36289;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36282_36288;
}}


if(cljs.core.next(cljs.core.rest(alis_36287__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$linear);

var G__36290 = (length_count36281_36286 + (1));
var G__36291 = cljs.core.next(cljs.core.rest(alis_36287__$1));
length_count36281_36286 = G__36290;
alis_36287__$1 = G__36291;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36280_36285;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36279_36284;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36297_36302 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36298_36303 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.constant$keyword$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__34104__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36297_36302,_STAR_current_length_STAR_36298_36303){
return (function() { 
var G__36304__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36304 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36305__i = 0, G__36305__a = new Array(arguments.length -  0);
while (G__36305__i < G__36305__a.length) {G__36305__a[G__36305__i] = arguments[G__36305__i + 0]; ++G__36305__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36305__a,0);
} 
return G__36304__delegate.call(this,args__34106__auto__);};
G__36304.cljs$lang$maxFixedArity = 0;
G__36304.cljs$lang$applyTo = (function (arglist__36306){
var args__34106__auto__ = cljs.core.seq(arglist__36306);
return G__36304__delegate(args__34106__auto__);
});
G__36304.cljs$core$IFn$_invoke$arity$variadic = G__36304__delegate;
return G__36304;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__,_STAR_current_level_STAR_36297_36302,_STAR_current_length_STAR_36298_36303))
})(),alis);

var length_count36299_36307 = (0);
var alis_36308__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36299_36307 < cljs.core._STAR_print_length_STAR_))){
if(alis_36308__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36300_36309 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36301_36310 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_36308__$1));

if(cljs.core.next(alis_36308__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$miser);

cljs.pprint.write_out(cljs.core.second(alis_36308__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36301_36310;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36300_36309;
}}


if(cljs.core.next(cljs.core.rest(alis_36308__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$linear);

var G__36311 = (length_count36299_36307 + (1));
var G__36312 = cljs.core.next(cljs.core.rest(alis_36308__$1));
length_count36299_36307 = G__36311;
alis_36308__$1 = G__36312;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36298_36303;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36297_36302;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_36316 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?new cljs.core.PersistentArrayMap.fromArray([cljs.core.first(args),"%"], true, false):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_36316,args,nlis){
return (function (p1__36313_SHARP_,p2__36314_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__36313_SHARP_,[cljs.core.str("%"),cljs.core.str(p2__36314_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_36316,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{return (function (){var format_in__34104__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__34105__auto__ = ((typeof format_in__34104__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__34104__auto__) : cljs.pprint.cached_compile.call(null,format_in__34104__auto__)):format_in__34104__auto__);
return ((function (format_in__34104__auto__,cf__34105__auto__,_STAR_symbol_map_STAR_36316,args,nlis){
return (function() { 
var G__36317__delegate = function (args__34106__auto__){
var navigator__34107__auto__ = cljs.pprint.init_navigator(args__34106__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__34105__auto__,navigator__34107__auto__);
};
var G__36317 = function (var_args){
var args__34106__auto__ = null;
if (arguments.length > 0) {
var G__36318__i = 0, G__36318__a = new Array(arguments.length -  0);
while (G__36318__i < G__36318__a.length) {G__36318__a[G__36318__i] = arguments[G__36318__i + 0]; ++G__36318__i;}
  args__34106__auto__ = new cljs.core.IndexedSeq(G__36318__a,0);
} 
return G__36317__delegate.call(this,args__34106__auto__);};
G__36317.cljs$lang$maxFixedArity = 0;
G__36317.cljs$lang$applyTo = (function (arglist__36319){
var args__34106__auto__ = cljs.core.seq(arglist__36319);
return G__36317__delegate(args__34106__auto__);
});
G__36317.cljs$core$IFn$_invoke$arity$variadic = G__36317__delegate;
return G__36317;
})()
;
;})(format_in__34104__auto__,cf__34105__auto__,_STAR_symbol_map_STAR_36316,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_36316;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_36323_36326 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_36324_36327 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.constant$keyword$block,(1));

var length_count36325_36328 = (0);
var alis_36329__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count36325_36328 < cljs.core._STAR_print_length_STAR_))){
if(alis_36329__$1){
cljs.pprint.write_out(cljs.core.first(alis_36329__$1));

if(cljs.core.next(alis_36329__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.constant$keyword$linear);

var G__36330 = (length_count36325_36328 + (1));
var G__36331 = cljs.core.next(alis_36329__$1);
length_count36325_36328 = G__36330;
alis_36329__$1 = G__36331;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_36324_36327;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_36323_36326;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([(function (){var iter__17235__auto__ = (function cljs$pprint$two_forms_$_iter__36338(s__36339){
return (new cljs.core.LazySeq(null,(function (){
var s__36339__$1 = s__36339;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__36339__$1);
if(temp__4425__auto__){
var s__36339__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36339__$2)){
var c__17233__auto__ = cljs.core.chunk_first(s__36339__$2);
var size__17234__auto__ = cljs.core.count(c__17233__auto__);
var b__36341 = cljs.core.chunk_buffer(size__17234__auto__);
if((function (){var i__36340 = (0);
while(true){
if((i__36340 < size__17234__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__17233__auto__,i__36340);
cljs.core.chunk_append(b__36341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__36344 = (i__36340 + (1));
i__36340 = G__36344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36341),cljs$pprint$two_forms_$_iter__36338(cljs.core.chunk_rest(s__36339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36341),null);
}
} else {
var x = cljs.core.first(s__36339__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__36338(cljs.core.rest(s__36339__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17235__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__36345_SHARP_){
var vec__36347 = p1__36345_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36347,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36347,(1),null);
if(cljs.core.not((function (){var or__16482__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__36345_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__4423__auto__ = (function (){var G__36349 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__36349) : cljs.pprint._STAR_code_table_STAR_.call(null,G__36349));
})();
if(cljs.core.truth_(temp__4423__auto__)){
var special_form = temp__4423__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4423__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__4423__auto__)){
var arg_num = temp__4423__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__17376__auto__ = (function (){var G__36350 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36350) : cljs.core.atom.call(null,G__36350));
})();
var prefer_table__17377__auto__ = (function (){var G__36351 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36351) : cljs.core.atom.call(null,G__36351));
})();
var method_cache__17378__auto__ = (function (){var G__36352 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36352) : cljs.core.atom.call(null,G__36352));
})();
var cached_hierarchy__17379__auto__ = (function (){var G__36353 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__36353) : cljs.core.atom.call(null,G__36353));
})();
var hierarchy__17380__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.constant$keyword$default,hierarchy__17380__auto__,method_table__17376__auto__,prefer_table__17377__auto__,method_cache__17378__auto__,cached_hierarchy__17379__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.constant$keyword$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.constant$keyword$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.constant$keyword$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.constant$keyword$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.constant$keyword$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.constant$keyword$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.constant$keyword$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.constant$keyword$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__16794__auto__ = (0);
var y__16795__auto__ = (width - cljs.core.count(s));
return ((x__16794__auto__ > y__16795__auto__) ? x__16794__auto__ : y__16795__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(){
var args36357 = [];
var len__17521__auto___36375 = arguments.length;
var i__17522__auto___36376 = (0);
while(true){
if((i__17522__auto___36376 < len__17521__auto___36375)){
args36357.push((arguments[i__17522__auto___36376]));

var G__36377 = (i__17522__auto___36376 + (1));
i__17522__auto___36376 = G__36377;
continue;
} else {
}
break;
}

var G__36359 = args36357.length;
switch (G__36359) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36357.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_36360 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_36360){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_36360){
return (function (p1__36354_SHARP_){
return cljs.core.count([cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__36354_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_36360))
,rows));
});})(_STAR_print_newline_STAR_36360))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_36360){
return (function (p1__36355_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__36355_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_36360))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_36360){
return (function (leader,divider,trailer,row){
return [cljs.core.str(leader),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__17235__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_36360){
return (function cljs$pprint$iter__36361(s__36362){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_36360){
return (function (){
var s__36362__$1 = s__36362;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__36362__$1);
if(temp__4425__auto__){
var s__36362__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36362__$2)){
var c__17233__auto__ = cljs.core.chunk_first(s__36362__$2);
var size__17234__auto__ = cljs.core.count(c__17233__auto__);
var b__36364 = cljs.core.chunk_buffer(size__17234__auto__);
if((function (){var i__36363 = (0);
while(true){
if((i__36363 < size__17234__auto__)){
var vec__36369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__17233__auto__,i__36363);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36369,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36369,(1),null);
cljs.core.chunk_append(b__36364,cljs.pprint.add_padding(width,[cljs.core.str(col)].join('')));

var G__36379 = (i__36363 + (1));
i__36363 = G__36379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36364),cljs$pprint$iter__36361(cljs.core.chunk_rest(s__36362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36364),null);
}
} else {
var vec__36370 = cljs.core.first(s__36362__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36370,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36370,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str(col)].join('')),cljs$pprint$iter__36361(cljs.core.rest(s__36362__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_36360))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_36360))
;
return iter__17235__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__17235__auto__,widths,spacers,_STAR_print_newline_STAR_36360){
return (function (p1__36356_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__36356_SHARP_);
});})(iter__17235__auto__,widths,spacers,_STAR_print_newline_STAR_36360))
,ks),widths));
})()))),cljs.core.str(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_36360))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__36371 = cljs.core.seq(rows);
var chunk__36372 = null;
var count__36373 = (0);
var i__36374 = (0);
while(true){
if((i__36374 < count__36373)){
var row = chunk__36372.cljs$core$IIndexed$_nth$arity$2(null,i__36374);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__36380 = seq__36371;
var G__36381 = chunk__36372;
var G__36382 = count__36373;
var G__36383 = (i__36374 + (1));
seq__36371 = G__36380;
chunk__36372 = G__36381;
count__36373 = G__36382;
i__36374 = G__36383;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__36371);
if(temp__4425__auto__){
var seq__36371__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36371__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__36371__$1);
var G__36384 = cljs.core.chunk_rest(seq__36371__$1);
var G__36385 = c__17266__auto__;
var G__36386 = cljs.core.count(c__17266__auto__);
var G__36387 = (0);
seq__36371 = G__36384;
chunk__36372 = G__36385;
count__36373 = G__36386;
i__36374 = G__36387;
continue;
} else {
var row = cljs.core.first(seq__36371__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__36388 = cljs.core.next(seq__36371__$1);
var G__36389 = null;
var G__36390 = (0);
var G__36391 = (0);
seq__36371 = G__36388;
chunk__36372 = G__36389;
count__36373 = G__36390;
i__36374 = G__36391;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36360;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=pprint.js.map?rel=1440458065188