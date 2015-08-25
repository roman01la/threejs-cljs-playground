// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = {};

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 == null)))){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__17118__auto__ = (((port == null))?null:port);
var m__17119__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$2(port,fn1_handler) : m__17119__auto__.call(null,port,fn1_handler));
} else {
var m__17119__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2(port,fn1_handler) : m__17119__auto____$1.call(null,port,fn1_handler));
} else {
throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
}
});


cljs.core.async.impl.protocols.WritePort = {};

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 * Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 == null)))){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__17118__auto__ = (((port == null))?null:port);
var m__17119__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$3 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$3(port,val,fn1_handler) : m__17119__auto__.call(null,port,val,fn1_handler));
} else {
var m__17119__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$3(port,val,fn1_handler) : m__17119__auto____$1.call(null,port,val,fn1_handler));
} else {
throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
}
});


cljs.core.async.impl.protocols.Channel = {};

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__17118__auto__ = (((chan == null))?null:chan);
var m__17119__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$1(chan) : m__17119__auto__.call(null,chan));
} else {
var m__17119__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1(chan) : m__17119__auto____$1.call(null,chan));
} else {
throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__17118__auto__ = (((chan == null))?null:chan);
var m__17119__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$1(chan) : m__17119__auto__.call(null,chan));
} else {
var m__17119__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1(chan) : m__17119__auto____$1.call(null,chan));
} else {
throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
}
});


cljs.core.async.impl.protocols.Handler = {};

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__17118__auto__ = (((h == null))?null:h);
var m__17119__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$1(h) : m__17119__auto__.call(null,h));
} else {
var m__17119__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1(h) : m__17119__auto____$1.call(null,h));
} else {
throw cljs.core.missing_protocol("Handler.active?",h);
}
}
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$commit$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__17118__auto__ = (((h == null))?null:h);
var m__17119__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$1(h) : m__17119__auto__.call(null,h));
} else {
var m__17119__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1(h) : m__17119__auto____$1.call(null,h));
} else {
throw cljs.core.missing_protocol("Handler.commit",h);
}
}
}
});


cljs.core.async.impl.protocols.Buffer = {};

cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__17118__auto__ = (((b == null))?null:b);
var m__17119__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$1(b) : m__17119__auto__.call(null,b));
} else {
var m__17119__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1(b) : m__17119__auto____$1.call(null,b));
} else {
throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__17118__auto__ = (((b == null))?null:b);
var m__17119__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$1(b) : m__17119__auto__.call(null,b));
} else {
var m__17119__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1(b) : m__17119__auto____$1.call(null,b));
} else {
throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__17118__auto__ = (((b == null))?null:b);
var m__17119__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$2(b,itm) : m__17119__auto__.call(null,b,itm));
} else {
var m__17119__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2(b,itm) : m__17119__auto____$1.call(null,b,itm));
} else {
throw cljs.core.missing_protocol("Buffer.add!*",b);
}
}
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(){
var args33977 = [];
var len__17521__auto___33980 = arguments.length;
var i__17522__auto___33981 = (0);
while(true){
if((i__17522__auto___33981 < len__17521__auto___33980)){
args33977.push((arguments[i__17522__auto___33981]));

var G__33982 = (i__17522__auto___33981 + (1));
i__17522__auto___33981 = G__33982;
continue;
} else {
}
break;
}

var G__33979 = args33977.length;
switch (G__33979) {
case 1:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33977.length)].join('')));

}
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return b;
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"itm","itm",-713282527,null)))], 0)))].join('')));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_(b,itm);
});

cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = 2;

cljs.core.async.impl.protocols.UnblockingBuffer = {};


//# sourceMappingURL=protocols.js.map?rel=1440458061480