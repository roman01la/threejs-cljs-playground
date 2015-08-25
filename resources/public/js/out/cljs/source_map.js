// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__26324){
var vec__26325 = p__26324;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26325,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__26327 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26327,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26327,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26327,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26327,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26327,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$gcol,gcol,cljs.core.constant$keyword$source,(goog.object.get(source_map,"sources")[source]),cljs.core.constant$keyword$line,line,cljs.core.constant$keyword$col,col,cljs.core.constant$keyword$name,(function (){var temp__4425__auto__ = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__26330 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(4),null);
var vec__26331 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26331,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26331,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26331,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26331,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26331,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__16482__auto__ = source;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__16482__auto__ = line;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__16482__auto__ = col;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 * update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__26334 = segmap;
var map__26334__$1 = ((((!((map__26334 == null)))?((((map__26334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26334):map__26334);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26334__$1,cljs.core.constant$keyword$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26334__$1,cljs.core.constant$keyword$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26334__$1,cljs.core.constant$keyword$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26334__$1,cljs.core.constant$keyword$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26334__$1,cljs.core.constant$keyword$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$gline,gline,cljs.core.constant$keyword$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__26334,map__26334__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__26334,map__26334__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__26334,map__26334__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__26334,map__26334__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26334,map__26334__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__26334,map__26334__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 * mapping original ClojureScript source locations to the generated
 * JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(){
var args26336 = [];
var len__17521__auto___26340 = arguments.length;
var i__17522__auto___26341 = (0);
while(true){
if((i__17522__auto___26341 < len__17521__auto___26340)){
args26336.push((arguments[i__17522__auto___26341]));

var G__26342 = (i__17522__auto___26341 + (1));
i__17522__auto___26341 = G__26342;
continue;
} else {
}
break;
}

var G__26338 = args26336.length;
switch (G__26338) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26336.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__26339 = (cljs.core.truth_(clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__26344 = cljs.core.next(segs__$1);
var G__26345 = nrelseg;
var G__26346 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__26344;
relseg__$1 = G__26345;
result__$1 = G__26346;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26339,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26339,(1),null);
var G__26347 = (gline + (1));
var G__26348 = cljs.core.next(lines__$1);
var G__26349 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__26350 = result__$1;
gline = G__26347;
lines__$1 = G__26348;
relseg = G__26349;
result = G__26350;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 * segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__26354 = segmap;
var map__26354__$1 = ((((!((map__26354 == null)))?((((map__26354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26354):map__26354);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26354__$1,cljs.core.constant$keyword$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26354__$1,cljs.core.constant$keyword$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26354__$1,cljs.core.constant$keyword$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26354__$1,cljs.core.constant$keyword$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26354__$1,cljs.core.constant$keyword$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$line,line,cljs.core.constant$keyword$col,col,cljs.core.constant$keyword$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__26354,map__26354__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__26354,map__26354__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__26351_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__26351_SHARP_,d__$1);
});})(map__26354,map__26354__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26354,map__26354__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 * generated JavaScript source locations to the original
 * ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(){
var args26356 = [];
var len__17521__auto___26360 = arguments.length;
var i__17522__auto___26361 = (0);
while(true){
if((i__17522__auto___26361 < len__17521__auto___26360)){
args26356.push((arguments[i__17522__auto___26361]));

var G__26362 = (i__17522__auto___26361 + (1));
i__17522__auto___26361 = G__26362;
continue;
} else {
}
break;
}

var G__26358 = args26356.length;
switch (G__26358) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26356.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__26359 = (cljs.core.truth_(clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__26364 = cljs.core.next(segs__$1);
var G__26365 = nrelseg;
var G__26366 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__26364;
relseg__$1 = G__26365;
result__$1 = G__26366;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26359,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26359,(1),null);
var G__26367 = (gline + (1));
var G__26368 = cljs.core.next(lines__$1);
var G__26369 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__26370 = result__$1;
gline = G__26367;
lines__$1 = G__26368;
relseg = G__26369;
result = G__26370;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = (function (){var G__26378 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26378) : cljs.core.atom.call(null,G__26378));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__26379){
var vec__26380 = p__26379;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26380,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26380,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26380,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26380,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26380,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__26381){
var vec__26382 = p__26381;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26382,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26382,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26382,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26382,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26382,(4),null);
var seg = vec__26382;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(relseg) : cljs.core.deref.call(null,relseg)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__26382,gcol,sidx,line,col,name,seg,relseg){
return (function (p__26383){
var vec__26384 = p__26383;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26384,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26384,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26384,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26384,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26384,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__16482__auto__ = name;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__26382,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = (function (){var G__26443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26443) : cljs.core.atom.call(null,G__26443));
})();
var names__GT_idx = (function (){var G__26444 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26444) : cljs.core.atom.call(null,G__26444));
})();
var name_idx = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__16482__auto__ = cljs.core.constant$keyword$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx)),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(name_idx) : cljs.core.deref.call(null,name_idx));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__26445 = cljs.core.seq(infos);
var chunk__26446 = null;
var count__26447 = (0);
var i__26448 = (0);
while(true){
if((i__26448 < count__26447)){
var info = chunk__26446.cljs$core$IIndexed$_nth$arity$2(null,i__26448);
var segv_26498 = info__GT_segv(info,source_idx,line,col);
var gline_26499 = cljs.core.constant$keyword$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_26500 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_26499 > (lc_26500 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26445,chunk__26446,count__26447,i__26448,segv_26498,gline_26499,lc_26500,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_26499 - (lc_26500 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_26498], null));
});})(seq__26445,chunk__26446,count__26447,i__26448,segv_26498,gline_26499,lc_26500,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26445,chunk__26446,count__26447,i__26448,segv_26498,gline_26499,lc_26500,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26499], null),cljs.core.conj,segv_26498);
});})(seq__26445,chunk__26446,count__26447,i__26448,segv_26498,gline_26499,lc_26500,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__26501 = seq__26445;
var G__26502 = chunk__26446;
var G__26503 = count__26447;
var G__26504 = (i__26448 + (1));
seq__26445 = G__26501;
chunk__26446 = G__26502;
count__26447 = G__26503;
i__26448 = G__26504;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__26445);
if(temp__4425__auto__){
var seq__26445__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26445__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__26445__$1);
var G__26505 = cljs.core.chunk_rest(seq__26445__$1);
var G__26506 = c__17266__auto__;
var G__26507 = cljs.core.count(c__17266__auto__);
var G__26508 = (0);
seq__26445 = G__26505;
chunk__26446 = G__26506;
count__26447 = G__26507;
i__26448 = G__26508;
continue;
} else {
var info = cljs.core.first(seq__26445__$1);
var segv_26509 = info__GT_segv(info,source_idx,line,col);
var gline_26510 = cljs.core.constant$keyword$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_26511 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_26510 > (lc_26511 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26445,chunk__26446,count__26447,i__26448,segv_26509,gline_26510,lc_26511,info,seq__26445__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_26510 - (lc_26511 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_26509], null));
});})(seq__26445,chunk__26446,count__26447,i__26448,segv_26509,gline_26510,lc_26511,info,seq__26445__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__26445,chunk__26446,count__26447,i__26448,segv_26509,gline_26510,lc_26511,info,seq__26445__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26510], null),cljs.core.conj,segv_26509);
});})(seq__26445,chunk__26446,count__26447,i__26448,segv_26509,gline_26510,lc_26511,info,seq__26445__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__26512 = cljs.core.next(seq__26445__$1);
var G__26513 = null;
var G__26514 = (0);
var G__26515 = (0);
seq__26445 = G__26512;
chunk__26446 = G__26513;
count__26447 = G__26514;
i__26448 = G__26515;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__26449_26516 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__26450_26517 = null;
var count__26451_26518 = (0);
var i__26452_26519 = (0);
while(true){
if((i__26452_26519 < count__26451_26518)){
var vec__26453_26520 = chunk__26450_26517.cljs$core$IIndexed$_nth$arity$2(null,i__26452_26519);
var source_idx_26521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26453_26520,(0),null);
var vec__26454_26522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26453_26520,(1),null);
var __26523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26454_26522,(0),null);
var lines_26524__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26454_26522,(1),null);
var seq__26455_26525 = cljs.core.seq(lines_26524__$1);
var chunk__26456_26526 = null;
var count__26457_26527 = (0);
var i__26458_26528 = (0);
while(true){
if((i__26458_26528 < count__26457_26527)){
var vec__26459_26529 = chunk__26456_26526.cljs$core$IIndexed$_nth$arity$2(null,i__26458_26528);
var line_26530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26459_26529,(0),null);
var cols_26531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26459_26529,(1),null);
var seq__26460_26532 = cljs.core.seq(cols_26531);
var chunk__26461_26533 = null;
var count__26462_26534 = (0);
var i__26463_26535 = (0);
while(true){
if((i__26463_26535 < count__26462_26534)){
var vec__26464_26536 = chunk__26461_26533.cljs$core$IIndexed$_nth$arity$2(null,i__26463_26535);
var col_26537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26464_26536,(0),null);
var infos_26538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26464_26536,(1),null);
encode_cols(infos_26538,source_idx_26521,line_26530,col_26537);

var G__26539 = seq__26460_26532;
var G__26540 = chunk__26461_26533;
var G__26541 = count__26462_26534;
var G__26542 = (i__26463_26535 + (1));
seq__26460_26532 = G__26539;
chunk__26461_26533 = G__26540;
count__26462_26534 = G__26541;
i__26463_26535 = G__26542;
continue;
} else {
var temp__4425__auto___26543 = cljs.core.seq(seq__26460_26532);
if(temp__4425__auto___26543){
var seq__26460_26544__$1 = temp__4425__auto___26543;
if(cljs.core.chunked_seq_QMARK_(seq__26460_26544__$1)){
var c__17266__auto___26545 = cljs.core.chunk_first(seq__26460_26544__$1);
var G__26546 = cljs.core.chunk_rest(seq__26460_26544__$1);
var G__26547 = c__17266__auto___26545;
var G__26548 = cljs.core.count(c__17266__auto___26545);
var G__26549 = (0);
seq__26460_26532 = G__26546;
chunk__26461_26533 = G__26547;
count__26462_26534 = G__26548;
i__26463_26535 = G__26549;
continue;
} else {
var vec__26465_26550 = cljs.core.first(seq__26460_26544__$1);
var col_26551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26465_26550,(0),null);
var infos_26552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26465_26550,(1),null);
encode_cols(infos_26552,source_idx_26521,line_26530,col_26551);

var G__26553 = cljs.core.next(seq__26460_26544__$1);
var G__26554 = null;
var G__26555 = (0);
var G__26556 = (0);
seq__26460_26532 = G__26553;
chunk__26461_26533 = G__26554;
count__26462_26534 = G__26555;
i__26463_26535 = G__26556;
continue;
}
} else {
}
}
break;
}

var G__26557 = seq__26455_26525;
var G__26558 = chunk__26456_26526;
var G__26559 = count__26457_26527;
var G__26560 = (i__26458_26528 + (1));
seq__26455_26525 = G__26557;
chunk__26456_26526 = G__26558;
count__26457_26527 = G__26559;
i__26458_26528 = G__26560;
continue;
} else {
var temp__4425__auto___26561 = cljs.core.seq(seq__26455_26525);
if(temp__4425__auto___26561){
var seq__26455_26562__$1 = temp__4425__auto___26561;
if(cljs.core.chunked_seq_QMARK_(seq__26455_26562__$1)){
var c__17266__auto___26563 = cljs.core.chunk_first(seq__26455_26562__$1);
var G__26564 = cljs.core.chunk_rest(seq__26455_26562__$1);
var G__26565 = c__17266__auto___26563;
var G__26566 = cljs.core.count(c__17266__auto___26563);
var G__26567 = (0);
seq__26455_26525 = G__26564;
chunk__26456_26526 = G__26565;
count__26457_26527 = G__26566;
i__26458_26528 = G__26567;
continue;
} else {
var vec__26466_26568 = cljs.core.first(seq__26455_26562__$1);
var line_26569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26466_26568,(0),null);
var cols_26570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26466_26568,(1),null);
var seq__26467_26571 = cljs.core.seq(cols_26570);
var chunk__26468_26572 = null;
var count__26469_26573 = (0);
var i__26470_26574 = (0);
while(true){
if((i__26470_26574 < count__26469_26573)){
var vec__26471_26575 = chunk__26468_26572.cljs$core$IIndexed$_nth$arity$2(null,i__26470_26574);
var col_26576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26471_26575,(0),null);
var infos_26577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26471_26575,(1),null);
encode_cols(infos_26577,source_idx_26521,line_26569,col_26576);

var G__26578 = seq__26467_26571;
var G__26579 = chunk__26468_26572;
var G__26580 = count__26469_26573;
var G__26581 = (i__26470_26574 + (1));
seq__26467_26571 = G__26578;
chunk__26468_26572 = G__26579;
count__26469_26573 = G__26580;
i__26470_26574 = G__26581;
continue;
} else {
var temp__4425__auto___26582__$1 = cljs.core.seq(seq__26467_26571);
if(temp__4425__auto___26582__$1){
var seq__26467_26583__$1 = temp__4425__auto___26582__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26467_26583__$1)){
var c__17266__auto___26584 = cljs.core.chunk_first(seq__26467_26583__$1);
var G__26585 = cljs.core.chunk_rest(seq__26467_26583__$1);
var G__26586 = c__17266__auto___26584;
var G__26587 = cljs.core.count(c__17266__auto___26584);
var G__26588 = (0);
seq__26467_26571 = G__26585;
chunk__26468_26572 = G__26586;
count__26469_26573 = G__26587;
i__26470_26574 = G__26588;
continue;
} else {
var vec__26472_26589 = cljs.core.first(seq__26467_26583__$1);
var col_26590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26472_26589,(0),null);
var infos_26591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26472_26589,(1),null);
encode_cols(infos_26591,source_idx_26521,line_26569,col_26590);

var G__26592 = cljs.core.next(seq__26467_26583__$1);
var G__26593 = null;
var G__26594 = (0);
var G__26595 = (0);
seq__26467_26571 = G__26592;
chunk__26468_26572 = G__26593;
count__26469_26573 = G__26594;
i__26470_26574 = G__26595;
continue;
}
} else {
}
}
break;
}

var G__26596 = cljs.core.next(seq__26455_26562__$1);
var G__26597 = null;
var G__26598 = (0);
var G__26599 = (0);
seq__26455_26525 = G__26596;
chunk__26456_26526 = G__26597;
count__26457_26527 = G__26598;
i__26458_26528 = G__26599;
continue;
}
} else {
}
}
break;
}

var G__26600 = seq__26449_26516;
var G__26601 = chunk__26450_26517;
var G__26602 = count__26451_26518;
var G__26603 = (i__26452_26519 + (1));
seq__26449_26516 = G__26600;
chunk__26450_26517 = G__26601;
count__26451_26518 = G__26602;
i__26452_26519 = G__26603;
continue;
} else {
var temp__4425__auto___26604 = cljs.core.seq(seq__26449_26516);
if(temp__4425__auto___26604){
var seq__26449_26605__$1 = temp__4425__auto___26604;
if(cljs.core.chunked_seq_QMARK_(seq__26449_26605__$1)){
var c__17266__auto___26606 = cljs.core.chunk_first(seq__26449_26605__$1);
var G__26607 = cljs.core.chunk_rest(seq__26449_26605__$1);
var G__26608 = c__17266__auto___26606;
var G__26609 = cljs.core.count(c__17266__auto___26606);
var G__26610 = (0);
seq__26449_26516 = G__26607;
chunk__26450_26517 = G__26608;
count__26451_26518 = G__26609;
i__26452_26519 = G__26610;
continue;
} else {
var vec__26473_26611 = cljs.core.first(seq__26449_26605__$1);
var source_idx_26612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26473_26611,(0),null);
var vec__26474_26613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26473_26611,(1),null);
var __26614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26474_26613,(0),null);
var lines_26615__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26474_26613,(1),null);
var seq__26475_26616 = cljs.core.seq(lines_26615__$1);
var chunk__26476_26617 = null;
var count__26477_26618 = (0);
var i__26478_26619 = (0);
while(true){
if((i__26478_26619 < count__26477_26618)){
var vec__26479_26620 = chunk__26476_26617.cljs$core$IIndexed$_nth$arity$2(null,i__26478_26619);
var line_26621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26479_26620,(0),null);
var cols_26622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26479_26620,(1),null);
var seq__26480_26623 = cljs.core.seq(cols_26622);
var chunk__26481_26624 = null;
var count__26482_26625 = (0);
var i__26483_26626 = (0);
while(true){
if((i__26483_26626 < count__26482_26625)){
var vec__26484_26627 = chunk__26481_26624.cljs$core$IIndexed$_nth$arity$2(null,i__26483_26626);
var col_26628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26484_26627,(0),null);
var infos_26629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26484_26627,(1),null);
encode_cols(infos_26629,source_idx_26612,line_26621,col_26628);

var G__26630 = seq__26480_26623;
var G__26631 = chunk__26481_26624;
var G__26632 = count__26482_26625;
var G__26633 = (i__26483_26626 + (1));
seq__26480_26623 = G__26630;
chunk__26481_26624 = G__26631;
count__26482_26625 = G__26632;
i__26483_26626 = G__26633;
continue;
} else {
var temp__4425__auto___26634__$1 = cljs.core.seq(seq__26480_26623);
if(temp__4425__auto___26634__$1){
var seq__26480_26635__$1 = temp__4425__auto___26634__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26480_26635__$1)){
var c__17266__auto___26636 = cljs.core.chunk_first(seq__26480_26635__$1);
var G__26637 = cljs.core.chunk_rest(seq__26480_26635__$1);
var G__26638 = c__17266__auto___26636;
var G__26639 = cljs.core.count(c__17266__auto___26636);
var G__26640 = (0);
seq__26480_26623 = G__26637;
chunk__26481_26624 = G__26638;
count__26482_26625 = G__26639;
i__26483_26626 = G__26640;
continue;
} else {
var vec__26485_26641 = cljs.core.first(seq__26480_26635__$1);
var col_26642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26485_26641,(0),null);
var infos_26643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26485_26641,(1),null);
encode_cols(infos_26643,source_idx_26612,line_26621,col_26642);

var G__26644 = cljs.core.next(seq__26480_26635__$1);
var G__26645 = null;
var G__26646 = (0);
var G__26647 = (0);
seq__26480_26623 = G__26644;
chunk__26481_26624 = G__26645;
count__26482_26625 = G__26646;
i__26483_26626 = G__26647;
continue;
}
} else {
}
}
break;
}

var G__26648 = seq__26475_26616;
var G__26649 = chunk__26476_26617;
var G__26650 = count__26477_26618;
var G__26651 = (i__26478_26619 + (1));
seq__26475_26616 = G__26648;
chunk__26476_26617 = G__26649;
count__26477_26618 = G__26650;
i__26478_26619 = G__26651;
continue;
} else {
var temp__4425__auto___26652__$1 = cljs.core.seq(seq__26475_26616);
if(temp__4425__auto___26652__$1){
var seq__26475_26653__$1 = temp__4425__auto___26652__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26475_26653__$1)){
var c__17266__auto___26654 = cljs.core.chunk_first(seq__26475_26653__$1);
var G__26655 = cljs.core.chunk_rest(seq__26475_26653__$1);
var G__26656 = c__17266__auto___26654;
var G__26657 = cljs.core.count(c__17266__auto___26654);
var G__26658 = (0);
seq__26475_26616 = G__26655;
chunk__26476_26617 = G__26656;
count__26477_26618 = G__26657;
i__26478_26619 = G__26658;
continue;
} else {
var vec__26486_26659 = cljs.core.first(seq__26475_26653__$1);
var line_26660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26486_26659,(0),null);
var cols_26661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26486_26659,(1),null);
var seq__26487_26662 = cljs.core.seq(cols_26661);
var chunk__26488_26663 = null;
var count__26489_26664 = (0);
var i__26490_26665 = (0);
while(true){
if((i__26490_26665 < count__26489_26664)){
var vec__26491_26666 = chunk__26488_26663.cljs$core$IIndexed$_nth$arity$2(null,i__26490_26665);
var col_26667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26491_26666,(0),null);
var infos_26668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26491_26666,(1),null);
encode_cols(infos_26668,source_idx_26612,line_26660,col_26667);

var G__26669 = seq__26487_26662;
var G__26670 = chunk__26488_26663;
var G__26671 = count__26489_26664;
var G__26672 = (i__26490_26665 + (1));
seq__26487_26662 = G__26669;
chunk__26488_26663 = G__26670;
count__26489_26664 = G__26671;
i__26490_26665 = G__26672;
continue;
} else {
var temp__4425__auto___26673__$2 = cljs.core.seq(seq__26487_26662);
if(temp__4425__auto___26673__$2){
var seq__26487_26674__$1 = temp__4425__auto___26673__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26487_26674__$1)){
var c__17266__auto___26675 = cljs.core.chunk_first(seq__26487_26674__$1);
var G__26676 = cljs.core.chunk_rest(seq__26487_26674__$1);
var G__26677 = c__17266__auto___26675;
var G__26678 = cljs.core.count(c__17266__auto___26675);
var G__26679 = (0);
seq__26487_26662 = G__26676;
chunk__26488_26663 = G__26677;
count__26489_26664 = G__26678;
i__26490_26665 = G__26679;
continue;
} else {
var vec__26492_26680 = cljs.core.first(seq__26487_26674__$1);
var col_26681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26492_26680,(0),null);
var infos_26682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26492_26680,(1),null);
encode_cols(infos_26682,source_idx_26612,line_26660,col_26681);

var G__26683 = cljs.core.next(seq__26487_26674__$1);
var G__26684 = null;
var G__26685 = (0);
var G__26686 = (0);
seq__26487_26662 = G__26683;
chunk__26488_26663 = G__26684;
count__26489_26664 = G__26685;
i__26490_26665 = G__26686;
continue;
}
} else {
}
}
break;
}

var G__26687 = cljs.core.next(seq__26475_26653__$1);
var G__26688 = null;
var G__26689 = (0);
var G__26690 = (0);
seq__26475_26616 = G__26687;
chunk__26476_26617 = G__26688;
count__26477_26618 = G__26689;
i__26478_26619 = G__26690;
continue;
}
} else {
}
}
break;
}

var G__26691 = cljs.core.next(seq__26449_26605__$1);
var G__26692 = null;
var G__26693 = (0);
var G__26694 = (0);
seq__26449_26516 = G__26691;
chunk__26450_26517 = G__26692;
count__26451_26518 = G__26693;
i__26452_26519 = G__26694;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__26493 = {"version": (3), "file": cljs.core.constant$keyword$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.constant$keyword$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26385_SHARP_){
return [cljs.core.str(p1__26385_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26386_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__26386_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.constant$keyword$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26387_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__26387_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))))))};
var G__26493__$1 = (cljs.core.truth_(cljs.core.constant$keyword$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__26494 = G__26493;
var G__26495_26695 = G__26494;
var G__26496_26696 = "sourcesContent";
var G__26497_26697 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__26495_26695,G__26496_26696,G__26497_26697);

return G__26494;
})():G__26493);
return G__26493__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__26703 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26703,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26703,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__26704 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26704,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26704,(1),null);
var G__26708 = cljs.core.next(col_map_seq);
var G__26709 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__26704,col,infos,vec__26703,line,col_map){
return (function (v,p__26705){
var map__26706 = p__26705;
var map__26706__$1 = ((((!((map__26706 == null)))?((((map__26706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26706):map__26706);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26706__$1,cljs.core.constant$keyword$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26706__$1,cljs.core.constant$keyword$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__26704,col,infos,vec__26703,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__26708;
new_cols = G__26709;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__26710 = cljs.core.next(line_map_seq);
var G__26711 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__26710;
new_lines = G__26711;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = (function (){var G__26763 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26763) : cljs.core.atom.call(null,G__26763));
})();
var seq__26764_26814 = cljs.core.seq(reverse_map);
var chunk__26765_26815 = null;
var count__26766_26816 = (0);
var i__26767_26817 = (0);
while(true){
if((i__26767_26817 < count__26766_26816)){
var vec__26768_26818 = chunk__26765_26815.cljs$core$IIndexed$_nth$arity$2(null,i__26767_26817);
var line_26819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26768_26818,(0),null);
var columns_26820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26768_26818,(1),null);
var seq__26769_26821 = cljs.core.seq(columns_26820);
var chunk__26770_26822 = null;
var count__26771_26823 = (0);
var i__26772_26824 = (0);
while(true){
if((i__26772_26824 < count__26771_26823)){
var vec__26773_26825 = chunk__26770_26822.cljs$core$IIndexed$_nth$arity$2(null,i__26772_26824);
var column_26826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26773_26825,(0),null);
var column_info_26827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26773_26825,(1),null);
var seq__26774_26828 = cljs.core.seq(column_info_26827);
var chunk__26775_26829 = null;
var count__26776_26830 = (0);
var i__26777_26831 = (0);
while(true){
if((i__26777_26831 < count__26776_26830)){
var map__26778_26832 = chunk__26775_26829.cljs$core$IIndexed$_nth$arity$2(null,i__26777_26831);
var map__26778_26833__$1 = ((((!((map__26778_26832 == null)))?((((map__26778_26832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26778_26832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26778_26832):map__26778_26832);
var gline_26834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778_26833__$1,cljs.core.constant$keyword$gline);
var gcol_26835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778_26833__$1,cljs.core.constant$keyword$gcol);
var name_26836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778_26833__$1,cljs.core.constant$keyword$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26834], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__26774_26828,chunk__26775_26829,count__26776_26830,i__26777_26831,seq__26769_26821,chunk__26770_26822,count__26771_26823,i__26772_26824,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26778_26832,map__26778_26833__$1,gline_26834,gcol_26835,name_26836,vec__26773_26825,column_26826,column_info_26827,vec__26768_26818,line_26819,columns_26820,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26826], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$line,line_26819,cljs.core.constant$keyword$col,column_26826,cljs.core.constant$keyword$name,name_26836], null));
});})(seq__26774_26828,chunk__26775_26829,count__26776_26830,i__26777_26831,seq__26769_26821,chunk__26770_26822,count__26771_26823,i__26772_26824,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26778_26832,map__26778_26833__$1,gline_26834,gcol_26835,name_26836,vec__26773_26825,column_26826,column_info_26827,vec__26768_26818,line_26819,columns_26820,inverted))
,cljs.core.sorted_map()));

var G__26837 = seq__26774_26828;
var G__26838 = chunk__26775_26829;
var G__26839 = count__26776_26830;
var G__26840 = (i__26777_26831 + (1));
seq__26774_26828 = G__26837;
chunk__26775_26829 = G__26838;
count__26776_26830 = G__26839;
i__26777_26831 = G__26840;
continue;
} else {
var temp__4425__auto___26841 = cljs.core.seq(seq__26774_26828);
if(temp__4425__auto___26841){
var seq__26774_26842__$1 = temp__4425__auto___26841;
if(cljs.core.chunked_seq_QMARK_(seq__26774_26842__$1)){
var c__17266__auto___26843 = cljs.core.chunk_first(seq__26774_26842__$1);
var G__26844 = cljs.core.chunk_rest(seq__26774_26842__$1);
var G__26845 = c__17266__auto___26843;
var G__26846 = cljs.core.count(c__17266__auto___26843);
var G__26847 = (0);
seq__26774_26828 = G__26844;
chunk__26775_26829 = G__26845;
count__26776_26830 = G__26846;
i__26777_26831 = G__26847;
continue;
} else {
var map__26780_26848 = cljs.core.first(seq__26774_26842__$1);
var map__26780_26849__$1 = ((((!((map__26780_26848 == null)))?((((map__26780_26848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26780_26848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26780_26848):map__26780_26848);
var gline_26850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26780_26849__$1,cljs.core.constant$keyword$gline);
var gcol_26851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26780_26849__$1,cljs.core.constant$keyword$gcol);
var name_26852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26780_26849__$1,cljs.core.constant$keyword$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26850], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__26774_26828,chunk__26775_26829,count__26776_26830,i__26777_26831,seq__26769_26821,chunk__26770_26822,count__26771_26823,i__26772_26824,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26780_26848,map__26780_26849__$1,gline_26850,gcol_26851,name_26852,seq__26774_26842__$1,temp__4425__auto___26841,vec__26773_26825,column_26826,column_info_26827,vec__26768_26818,line_26819,columns_26820,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26826], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$line,line_26819,cljs.core.constant$keyword$col,column_26826,cljs.core.constant$keyword$name,name_26852], null));
});})(seq__26774_26828,chunk__26775_26829,count__26776_26830,i__26777_26831,seq__26769_26821,chunk__26770_26822,count__26771_26823,i__26772_26824,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26780_26848,map__26780_26849__$1,gline_26850,gcol_26851,name_26852,seq__26774_26842__$1,temp__4425__auto___26841,vec__26773_26825,column_26826,column_info_26827,vec__26768_26818,line_26819,columns_26820,inverted))
,cljs.core.sorted_map()));

var G__26853 = cljs.core.next(seq__26774_26842__$1);
var G__26854 = null;
var G__26855 = (0);
var G__26856 = (0);
seq__26774_26828 = G__26853;
chunk__26775_26829 = G__26854;
count__26776_26830 = G__26855;
i__26777_26831 = G__26856;
continue;
}
} else {
}
}
break;
}

var G__26857 = seq__26769_26821;
var G__26858 = chunk__26770_26822;
var G__26859 = count__26771_26823;
var G__26860 = (i__26772_26824 + (1));
seq__26769_26821 = G__26857;
chunk__26770_26822 = G__26858;
count__26771_26823 = G__26859;
i__26772_26824 = G__26860;
continue;
} else {
var temp__4425__auto___26861 = cljs.core.seq(seq__26769_26821);
if(temp__4425__auto___26861){
var seq__26769_26862__$1 = temp__4425__auto___26861;
if(cljs.core.chunked_seq_QMARK_(seq__26769_26862__$1)){
var c__17266__auto___26863 = cljs.core.chunk_first(seq__26769_26862__$1);
var G__26864 = cljs.core.chunk_rest(seq__26769_26862__$1);
var G__26865 = c__17266__auto___26863;
var G__26866 = cljs.core.count(c__17266__auto___26863);
var G__26867 = (0);
seq__26769_26821 = G__26864;
chunk__26770_26822 = G__26865;
count__26771_26823 = G__26866;
i__26772_26824 = G__26867;
continue;
} else {
var vec__26782_26868 = cljs.core.first(seq__26769_26862__$1);
var column_26869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26782_26868,(0),null);
var column_info_26870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26782_26868,(1),null);
var seq__26783_26871 = cljs.core.seq(column_info_26870);
var chunk__26784_26872 = null;
var count__26785_26873 = (0);
var i__26786_26874 = (0);
while(true){
if((i__26786_26874 < count__26785_26873)){
var map__26787_26875 = chunk__26784_26872.cljs$core$IIndexed$_nth$arity$2(null,i__26786_26874);
var map__26787_26876__$1 = ((((!((map__26787_26875 == null)))?((((map__26787_26875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26787_26875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26787_26875):map__26787_26875);
var gline_26877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26787_26876__$1,cljs.core.constant$keyword$gline);
var gcol_26878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26787_26876__$1,cljs.core.constant$keyword$gcol);
var name_26879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26787_26876__$1,cljs.core.constant$keyword$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26877], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__26783_26871,chunk__26784_26872,count__26785_26873,i__26786_26874,seq__26769_26821,chunk__26770_26822,count__26771_26823,i__26772_26824,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26787_26875,map__26787_26876__$1,gline_26877,gcol_26878,name_26879,vec__26782_26868,column_26869,column_info_26870,seq__26769_26862__$1,temp__4425__auto___26861,vec__26768_26818,line_26819,columns_26820,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26869], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$line,line_26819,cljs.core.constant$keyword$col,column_26869,cljs.core.constant$keyword$name,name_26879], null));
});})(seq__26783_26871,chunk__26784_26872,count__26785_26873,i__26786_26874,seq__26769_26821,chunk__26770_26822,count__26771_26823,i__26772_26824,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26787_26875,map__26787_26876__$1,gline_26877,gcol_26878,name_26879,vec__26782_26868,column_26869,column_info_26870,seq__26769_26862__$1,temp__4425__auto___26861,vec__26768_26818,line_26819,columns_26820,inverted))
,cljs.core.sorted_map()));

var G__26880 = seq__26783_26871;
var G__26881 = chunk__26784_26872;
var G__26882 = count__26785_26873;
var G__26883 = (i__26786_26874 + (1));
seq__26783_26871 = G__26880;
chunk__26784_26872 = G__26881;
count__26785_26873 = G__26882;
i__26786_26874 = G__26883;
continue;
} else {
var temp__4425__auto___26884__$1 = cljs.core.seq(seq__26783_26871);
if(temp__4425__auto___26884__$1){
var seq__26783_26885__$1 = temp__4425__auto___26884__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26783_26885__$1)){
var c__17266__auto___26886 = cljs.core.chunk_first(seq__26783_26885__$1);
var G__26887 = cljs.core.chunk_rest(seq__26783_26885__$1);
var G__26888 = c__17266__auto___26886;
var G__26889 = cljs.core.count(c__17266__auto___26886);
var G__26890 = (0);
seq__26783_26871 = G__26887;
chunk__26784_26872 = G__26888;
count__26785_26873 = G__26889;
i__26786_26874 = G__26890;
continue;
} else {
var map__26789_26891 = cljs.core.first(seq__26783_26885__$1);
var map__26789_26892__$1 = ((((!((map__26789_26891 == null)))?((((map__26789_26891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26789_26891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26789_26891):map__26789_26891);
var gline_26893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26789_26892__$1,cljs.core.constant$keyword$gline);
var gcol_26894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26789_26892__$1,cljs.core.constant$keyword$gcol);
var name_26895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26789_26892__$1,cljs.core.constant$keyword$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26893], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__26783_26871,chunk__26784_26872,count__26785_26873,i__26786_26874,seq__26769_26821,chunk__26770_26822,count__26771_26823,i__26772_26824,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26789_26891,map__26789_26892__$1,gline_26893,gcol_26894,name_26895,seq__26783_26885__$1,temp__4425__auto___26884__$1,vec__26782_26868,column_26869,column_info_26870,seq__26769_26862__$1,temp__4425__auto___26861,vec__26768_26818,line_26819,columns_26820,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26869], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$line,line_26819,cljs.core.constant$keyword$col,column_26869,cljs.core.constant$keyword$name,name_26895], null));
});})(seq__26783_26871,chunk__26784_26872,count__26785_26873,i__26786_26874,seq__26769_26821,chunk__26770_26822,count__26771_26823,i__26772_26824,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26789_26891,map__26789_26892__$1,gline_26893,gcol_26894,name_26895,seq__26783_26885__$1,temp__4425__auto___26884__$1,vec__26782_26868,column_26869,column_info_26870,seq__26769_26862__$1,temp__4425__auto___26861,vec__26768_26818,line_26819,columns_26820,inverted))
,cljs.core.sorted_map()));

var G__26896 = cljs.core.next(seq__26783_26885__$1);
var G__26897 = null;
var G__26898 = (0);
var G__26899 = (0);
seq__26783_26871 = G__26896;
chunk__26784_26872 = G__26897;
count__26785_26873 = G__26898;
i__26786_26874 = G__26899;
continue;
}
} else {
}
}
break;
}

var G__26900 = cljs.core.next(seq__26769_26862__$1);
var G__26901 = null;
var G__26902 = (0);
var G__26903 = (0);
seq__26769_26821 = G__26900;
chunk__26770_26822 = G__26901;
count__26771_26823 = G__26902;
i__26772_26824 = G__26903;
continue;
}
} else {
}
}
break;
}

var G__26904 = seq__26764_26814;
var G__26905 = chunk__26765_26815;
var G__26906 = count__26766_26816;
var G__26907 = (i__26767_26817 + (1));
seq__26764_26814 = G__26904;
chunk__26765_26815 = G__26905;
count__26766_26816 = G__26906;
i__26767_26817 = G__26907;
continue;
} else {
var temp__4425__auto___26908 = cljs.core.seq(seq__26764_26814);
if(temp__4425__auto___26908){
var seq__26764_26909__$1 = temp__4425__auto___26908;
if(cljs.core.chunked_seq_QMARK_(seq__26764_26909__$1)){
var c__17266__auto___26910 = cljs.core.chunk_first(seq__26764_26909__$1);
var G__26911 = cljs.core.chunk_rest(seq__26764_26909__$1);
var G__26912 = c__17266__auto___26910;
var G__26913 = cljs.core.count(c__17266__auto___26910);
var G__26914 = (0);
seq__26764_26814 = G__26911;
chunk__26765_26815 = G__26912;
count__26766_26816 = G__26913;
i__26767_26817 = G__26914;
continue;
} else {
var vec__26791_26915 = cljs.core.first(seq__26764_26909__$1);
var line_26916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26791_26915,(0),null);
var columns_26917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26791_26915,(1),null);
var seq__26792_26918 = cljs.core.seq(columns_26917);
var chunk__26793_26919 = null;
var count__26794_26920 = (0);
var i__26795_26921 = (0);
while(true){
if((i__26795_26921 < count__26794_26920)){
var vec__26796_26922 = chunk__26793_26919.cljs$core$IIndexed$_nth$arity$2(null,i__26795_26921);
var column_26923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26796_26922,(0),null);
var column_info_26924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26796_26922,(1),null);
var seq__26797_26925 = cljs.core.seq(column_info_26924);
var chunk__26798_26926 = null;
var count__26799_26927 = (0);
var i__26800_26928 = (0);
while(true){
if((i__26800_26928 < count__26799_26927)){
var map__26801_26929 = chunk__26798_26926.cljs$core$IIndexed$_nth$arity$2(null,i__26800_26928);
var map__26801_26930__$1 = ((((!((map__26801_26929 == null)))?((((map__26801_26929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26801_26929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26801_26929):map__26801_26929);
var gline_26931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26801_26930__$1,cljs.core.constant$keyword$gline);
var gcol_26932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26801_26930__$1,cljs.core.constant$keyword$gcol);
var name_26933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26801_26930__$1,cljs.core.constant$keyword$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26931], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__26797_26925,chunk__26798_26926,count__26799_26927,i__26800_26928,seq__26792_26918,chunk__26793_26919,count__26794_26920,i__26795_26921,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26801_26929,map__26801_26930__$1,gline_26931,gcol_26932,name_26933,vec__26796_26922,column_26923,column_info_26924,vec__26791_26915,line_26916,columns_26917,seq__26764_26909__$1,temp__4425__auto___26908,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26923], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$line,line_26916,cljs.core.constant$keyword$col,column_26923,cljs.core.constant$keyword$name,name_26933], null));
});})(seq__26797_26925,chunk__26798_26926,count__26799_26927,i__26800_26928,seq__26792_26918,chunk__26793_26919,count__26794_26920,i__26795_26921,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26801_26929,map__26801_26930__$1,gline_26931,gcol_26932,name_26933,vec__26796_26922,column_26923,column_info_26924,vec__26791_26915,line_26916,columns_26917,seq__26764_26909__$1,temp__4425__auto___26908,inverted))
,cljs.core.sorted_map()));

var G__26934 = seq__26797_26925;
var G__26935 = chunk__26798_26926;
var G__26936 = count__26799_26927;
var G__26937 = (i__26800_26928 + (1));
seq__26797_26925 = G__26934;
chunk__26798_26926 = G__26935;
count__26799_26927 = G__26936;
i__26800_26928 = G__26937;
continue;
} else {
var temp__4425__auto___26938__$1 = cljs.core.seq(seq__26797_26925);
if(temp__4425__auto___26938__$1){
var seq__26797_26939__$1 = temp__4425__auto___26938__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26797_26939__$1)){
var c__17266__auto___26940 = cljs.core.chunk_first(seq__26797_26939__$1);
var G__26941 = cljs.core.chunk_rest(seq__26797_26939__$1);
var G__26942 = c__17266__auto___26940;
var G__26943 = cljs.core.count(c__17266__auto___26940);
var G__26944 = (0);
seq__26797_26925 = G__26941;
chunk__26798_26926 = G__26942;
count__26799_26927 = G__26943;
i__26800_26928 = G__26944;
continue;
} else {
var map__26803_26945 = cljs.core.first(seq__26797_26939__$1);
var map__26803_26946__$1 = ((((!((map__26803_26945 == null)))?((((map__26803_26945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26803_26945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26803_26945):map__26803_26945);
var gline_26947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26803_26946__$1,cljs.core.constant$keyword$gline);
var gcol_26948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26803_26946__$1,cljs.core.constant$keyword$gcol);
var name_26949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26803_26946__$1,cljs.core.constant$keyword$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26947], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__26797_26925,chunk__26798_26926,count__26799_26927,i__26800_26928,seq__26792_26918,chunk__26793_26919,count__26794_26920,i__26795_26921,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26803_26945,map__26803_26946__$1,gline_26947,gcol_26948,name_26949,seq__26797_26939__$1,temp__4425__auto___26938__$1,vec__26796_26922,column_26923,column_info_26924,vec__26791_26915,line_26916,columns_26917,seq__26764_26909__$1,temp__4425__auto___26908,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26923], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$line,line_26916,cljs.core.constant$keyword$col,column_26923,cljs.core.constant$keyword$name,name_26949], null));
});})(seq__26797_26925,chunk__26798_26926,count__26799_26927,i__26800_26928,seq__26792_26918,chunk__26793_26919,count__26794_26920,i__26795_26921,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26803_26945,map__26803_26946__$1,gline_26947,gcol_26948,name_26949,seq__26797_26939__$1,temp__4425__auto___26938__$1,vec__26796_26922,column_26923,column_info_26924,vec__26791_26915,line_26916,columns_26917,seq__26764_26909__$1,temp__4425__auto___26908,inverted))
,cljs.core.sorted_map()));

var G__26950 = cljs.core.next(seq__26797_26939__$1);
var G__26951 = null;
var G__26952 = (0);
var G__26953 = (0);
seq__26797_26925 = G__26950;
chunk__26798_26926 = G__26951;
count__26799_26927 = G__26952;
i__26800_26928 = G__26953;
continue;
}
} else {
}
}
break;
}

var G__26954 = seq__26792_26918;
var G__26955 = chunk__26793_26919;
var G__26956 = count__26794_26920;
var G__26957 = (i__26795_26921 + (1));
seq__26792_26918 = G__26954;
chunk__26793_26919 = G__26955;
count__26794_26920 = G__26956;
i__26795_26921 = G__26957;
continue;
} else {
var temp__4425__auto___26958__$1 = cljs.core.seq(seq__26792_26918);
if(temp__4425__auto___26958__$1){
var seq__26792_26959__$1 = temp__4425__auto___26958__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26792_26959__$1)){
var c__17266__auto___26960 = cljs.core.chunk_first(seq__26792_26959__$1);
var G__26961 = cljs.core.chunk_rest(seq__26792_26959__$1);
var G__26962 = c__17266__auto___26960;
var G__26963 = cljs.core.count(c__17266__auto___26960);
var G__26964 = (0);
seq__26792_26918 = G__26961;
chunk__26793_26919 = G__26962;
count__26794_26920 = G__26963;
i__26795_26921 = G__26964;
continue;
} else {
var vec__26805_26965 = cljs.core.first(seq__26792_26959__$1);
var column_26966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26805_26965,(0),null);
var column_info_26967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26805_26965,(1),null);
var seq__26806_26968 = cljs.core.seq(column_info_26967);
var chunk__26807_26969 = null;
var count__26808_26970 = (0);
var i__26809_26971 = (0);
while(true){
if((i__26809_26971 < count__26808_26970)){
var map__26810_26972 = chunk__26807_26969.cljs$core$IIndexed$_nth$arity$2(null,i__26809_26971);
var map__26810_26973__$1 = ((((!((map__26810_26972 == null)))?((((map__26810_26972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26810_26972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26810_26972):map__26810_26972);
var gline_26974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26810_26973__$1,cljs.core.constant$keyword$gline);
var gcol_26975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26810_26973__$1,cljs.core.constant$keyword$gcol);
var name_26976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26810_26973__$1,cljs.core.constant$keyword$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26974], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__26806_26968,chunk__26807_26969,count__26808_26970,i__26809_26971,seq__26792_26918,chunk__26793_26919,count__26794_26920,i__26795_26921,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26810_26972,map__26810_26973__$1,gline_26974,gcol_26975,name_26976,vec__26805_26965,column_26966,column_info_26967,seq__26792_26959__$1,temp__4425__auto___26958__$1,vec__26791_26915,line_26916,columns_26917,seq__26764_26909__$1,temp__4425__auto___26908,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26966], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$line,line_26916,cljs.core.constant$keyword$col,column_26966,cljs.core.constant$keyword$name,name_26976], null));
});})(seq__26806_26968,chunk__26807_26969,count__26808_26970,i__26809_26971,seq__26792_26918,chunk__26793_26919,count__26794_26920,i__26795_26921,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26810_26972,map__26810_26973__$1,gline_26974,gcol_26975,name_26976,vec__26805_26965,column_26966,column_info_26967,seq__26792_26959__$1,temp__4425__auto___26958__$1,vec__26791_26915,line_26916,columns_26917,seq__26764_26909__$1,temp__4425__auto___26908,inverted))
,cljs.core.sorted_map()));

var G__26977 = seq__26806_26968;
var G__26978 = chunk__26807_26969;
var G__26979 = count__26808_26970;
var G__26980 = (i__26809_26971 + (1));
seq__26806_26968 = G__26977;
chunk__26807_26969 = G__26978;
count__26808_26970 = G__26979;
i__26809_26971 = G__26980;
continue;
} else {
var temp__4425__auto___26981__$2 = cljs.core.seq(seq__26806_26968);
if(temp__4425__auto___26981__$2){
var seq__26806_26982__$1 = temp__4425__auto___26981__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26806_26982__$1)){
var c__17266__auto___26983 = cljs.core.chunk_first(seq__26806_26982__$1);
var G__26984 = cljs.core.chunk_rest(seq__26806_26982__$1);
var G__26985 = c__17266__auto___26983;
var G__26986 = cljs.core.count(c__17266__auto___26983);
var G__26987 = (0);
seq__26806_26968 = G__26984;
chunk__26807_26969 = G__26985;
count__26808_26970 = G__26986;
i__26809_26971 = G__26987;
continue;
} else {
var map__26812_26988 = cljs.core.first(seq__26806_26982__$1);
var map__26812_26989__$1 = ((((!((map__26812_26988 == null)))?((((map__26812_26988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26812_26988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26812_26988):map__26812_26988);
var gline_26990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26812_26989__$1,cljs.core.constant$keyword$gline);
var gcol_26991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26812_26989__$1,cljs.core.constant$keyword$gcol);
var name_26992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26812_26989__$1,cljs.core.constant$keyword$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26990], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__26806_26968,chunk__26807_26969,count__26808_26970,i__26809_26971,seq__26792_26918,chunk__26793_26919,count__26794_26920,i__26795_26921,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26812_26988,map__26812_26989__$1,gline_26990,gcol_26991,name_26992,seq__26806_26982__$1,temp__4425__auto___26981__$2,vec__26805_26965,column_26966,column_info_26967,seq__26792_26959__$1,temp__4425__auto___26958__$1,vec__26791_26915,line_26916,columns_26917,seq__26764_26909__$1,temp__4425__auto___26908,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_26966], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$line,line_26916,cljs.core.constant$keyword$col,column_26966,cljs.core.constant$keyword$name,name_26992], null));
});})(seq__26806_26968,chunk__26807_26969,count__26808_26970,i__26809_26971,seq__26792_26918,chunk__26793_26919,count__26794_26920,i__26795_26921,seq__26764_26814,chunk__26765_26815,count__26766_26816,i__26767_26817,map__26812_26988,map__26812_26989__$1,gline_26990,gcol_26991,name_26992,seq__26806_26982__$1,temp__4425__auto___26981__$2,vec__26805_26965,column_26966,column_info_26967,seq__26792_26959__$1,temp__4425__auto___26958__$1,vec__26791_26915,line_26916,columns_26917,seq__26764_26909__$1,temp__4425__auto___26908,inverted))
,cljs.core.sorted_map()));

var G__26993 = cljs.core.next(seq__26806_26982__$1);
var G__26994 = null;
var G__26995 = (0);
var G__26996 = (0);
seq__26806_26968 = G__26993;
chunk__26807_26969 = G__26994;
count__26808_26970 = G__26995;
i__26809_26971 = G__26996;
continue;
}
} else {
}
}
break;
}

var G__26997 = cljs.core.next(seq__26792_26959__$1);
var G__26998 = null;
var G__26999 = (0);
var G__27000 = (0);
seq__26792_26918 = G__26997;
chunk__26793_26919 = G__26998;
count__26794_26920 = G__26999;
i__26795_26921 = G__27000;
continue;
}
} else {
}
}
break;
}

var G__27001 = cljs.core.next(seq__26764_26909__$1);
var G__27002 = null;
var G__27003 = (0);
var G__27004 = (0);
seq__26764_26814 = G__27001;
chunk__26765_26815 = G__27002;
count__26766_26816 = G__27003;
i__26767_26817 = G__27004;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inverted) : cljs.core.deref.call(null,inverted));
});

//# sourceMappingURL=source_map.js.map?rel=1440458056455