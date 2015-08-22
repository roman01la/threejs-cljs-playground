// Compiled by ClojureScript 1.7.28 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t30106 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30106 = (function (fn_handler,f,meta30107){
this.fn_handler = fn_handler;
this.f = f;
this.meta30107 = meta30107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30108,meta30107__$1){
var self__ = this;
var _30108__$1 = this;
return (new cljs.core.async.t30106(self__.fn_handler,self__.f,meta30107__$1));
});

cljs.core.async.t30106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30108){
var self__ = this;
var _30108__$1 = this;
return self__.meta30107;
});

cljs.core.async.t30106.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta30107","meta30107",739480091,null)], null);
});

cljs.core.async.t30106.cljs$lang$type = true;

cljs.core.async.t30106.cljs$lang$ctorStr = "cljs.core.async/t30106";

cljs.core.async.t30106.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t30106");
});

cljs.core.async.__GT_t30106 = (function cljs$core$async$fn_handler_$___GT_t30106(fn_handler__$1,f__$1,meta30107){
return (new cljs.core.async.t30106(fn_handler__$1,f__$1,meta30107));
});

}

return (new cljs.core.async.t30106(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args30111 = [];
var len__17521__auto___30114 = arguments.length;
var i__17522__auto___30115 = (0);
while(true){
if((i__17522__auto___30115 < len__17521__auto___30114)){
args30111.push((arguments[i__17522__auto___30115]));

var G__30116 = (i__17522__auto___30115 + (1));
i__17522__auto___30115 = G__30116;
continue;
} else {
}
break;
}

var G__30113 = args30111.length;
switch (G__30113) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30111.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args30118 = [];
var len__17521__auto___30121 = arguments.length;
var i__17522__auto___30122 = (0);
while(true){
if((i__17522__auto___30122 < len__17521__auto___30121)){
args30118.push((arguments[i__17522__auto___30122]));

var G__30123 = (i__17522__auto___30122 + (1));
i__17522__auto___30122 = G__30123;
continue;
} else {
}
break;
}

var G__30120 = args30118.length;
switch (G__30120) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30118.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30125 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30125);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30125,ret){
return (function (){
return fn1.call(null,val_30125);
});})(val_30125,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args30126 = [];
var len__17521__auto___30129 = arguments.length;
var i__17522__auto___30130 = (0);
while(true){
if((i__17522__auto___30130 < len__17521__auto___30129)){
args30126.push((arguments[i__17522__auto___30130]));

var G__30131 = (i__17522__auto___30130 + (1));
i__17522__auto___30130 = G__30131;
continue;
} else {
}
break;
}

var G__30128 = args30126.length;
switch (G__30128) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30126.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17366__auto___30133 = n;
var x_30134 = (0);
while(true){
if((x_30134 < n__17366__auto___30133)){
(a[x_30134] = (0));

var G__30135 = (x_30134 + (1));
x_30134 = G__30135;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30136 = (i + (1));
i = G__30136;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30140 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30140 = (function (alt_flag,flag,meta30141){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30141 = meta30141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30142,meta30141__$1){
var self__ = this;
var _30142__$1 = this;
return (new cljs.core.async.t30140(self__.alt_flag,self__.flag,meta30141__$1));
});})(flag))
;

cljs.core.async.t30140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30142){
var self__ = this;
var _30142__$1 = this;
return self__.meta30141;
});})(flag))
;

cljs.core.async.t30140.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30140.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30141","meta30141",210691730,null)], null);
});})(flag))
;

cljs.core.async.t30140.cljs$lang$type = true;

cljs.core.async.t30140.cljs$lang$ctorStr = "cljs.core.async/t30140";

cljs.core.async.t30140.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t30140");
});})(flag))
;

cljs.core.async.__GT_t30140 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t30140(alt_flag__$1,flag__$1,meta30141){
return (new cljs.core.async.t30140(alt_flag__$1,flag__$1,meta30141));
});})(flag))
;

}

return (new cljs.core.async.t30140(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t30146 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30146 = (function (alt_handler,flag,cb,meta30147){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30147 = meta30147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30148,meta30147__$1){
var self__ = this;
var _30148__$1 = this;
return (new cljs.core.async.t30146(self__.alt_handler,self__.flag,self__.cb,meta30147__$1));
});

cljs.core.async.t30146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30148){
var self__ = this;
var _30148__$1 = this;
return self__.meta30147;
});

cljs.core.async.t30146.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30147","meta30147",-1730398299,null)], null);
});

cljs.core.async.t30146.cljs$lang$type = true;

cljs.core.async.t30146.cljs$lang$ctorStr = "cljs.core.async/t30146";

cljs.core.async.t30146.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t30146");
});

cljs.core.async.__GT_t30146 = (function cljs$core$async$alt_handler_$___GT_t30146(alt_handler__$1,flag__$1,cb__$1,meta30147){
return (new cljs.core.async.t30146(alt_handler__$1,flag__$1,cb__$1,meta30147));
});

}

return (new cljs.core.async.t30146(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30149_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30149_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30150_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30150_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16482__auto__ = wport;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30151 = (i + (1));
i = G__30151;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16482__auto__ = ret;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16470__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16470__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__17528__auto__ = [];
var len__17521__auto___30157 = arguments.length;
var i__17522__auto___30158 = (0);
while(true){
if((i__17522__auto___30158 < len__17521__auto___30157)){
args__17528__auto__.push((arguments[i__17522__auto___30158]));

var G__30159 = (i__17522__auto___30158 + (1));
i__17522__auto___30158 = G__30159;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((1) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17529__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30154){
var map__30155 = p__30154;
var map__30155__$1 = ((((!((map__30155 == null)))?((((map__30155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30155):map__30155);
var opts = map__30155__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30152){
var G__30153 = cljs.core.first.call(null,seq30152);
var seq30152__$1 = cljs.core.next.call(null,seq30152);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30153,seq30152__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args30160 = [];
var len__17521__auto___30210 = arguments.length;
var i__17522__auto___30211 = (0);
while(true){
if((i__17522__auto___30211 < len__17521__auto___30210)){
args30160.push((arguments[i__17522__auto___30211]));

var G__30212 = (i__17522__auto___30211 + (1));
i__17522__auto___30211 = G__30212;
continue;
} else {
}
break;
}

var G__30162 = args30160.length;
switch (G__30162) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30160.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20234__auto___30214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___30214){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___30214){
return (function (state_30186){
var state_val_30187 = (state_30186[(1)]);
if((state_val_30187 === (7))){
var inst_30182 = (state_30186[(2)]);
var state_30186__$1 = state_30186;
var statearr_30188_30215 = state_30186__$1;
(statearr_30188_30215[(2)] = inst_30182);

(statearr_30188_30215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (1))){
var state_30186__$1 = state_30186;
var statearr_30189_30216 = state_30186__$1;
(statearr_30189_30216[(2)] = null);

(statearr_30189_30216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (4))){
var inst_30165 = (state_30186[(7)]);
var inst_30165__$1 = (state_30186[(2)]);
var inst_30166 = (inst_30165__$1 == null);
var state_30186__$1 = (function (){var statearr_30190 = state_30186;
(statearr_30190[(7)] = inst_30165__$1);

return statearr_30190;
})();
if(cljs.core.truth_(inst_30166)){
var statearr_30191_30217 = state_30186__$1;
(statearr_30191_30217[(1)] = (5));

} else {
var statearr_30192_30218 = state_30186__$1;
(statearr_30192_30218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (13))){
var state_30186__$1 = state_30186;
var statearr_30193_30219 = state_30186__$1;
(statearr_30193_30219[(2)] = null);

(statearr_30193_30219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (6))){
var inst_30165 = (state_30186[(7)]);
var state_30186__$1 = state_30186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30186__$1,(11),to,inst_30165);
} else {
if((state_val_30187 === (3))){
var inst_30184 = (state_30186[(2)]);
var state_30186__$1 = state_30186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30186__$1,inst_30184);
} else {
if((state_val_30187 === (12))){
var state_30186__$1 = state_30186;
var statearr_30194_30220 = state_30186__$1;
(statearr_30194_30220[(2)] = null);

(statearr_30194_30220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (2))){
var state_30186__$1 = state_30186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30186__$1,(4),from);
} else {
if((state_val_30187 === (11))){
var inst_30175 = (state_30186[(2)]);
var state_30186__$1 = state_30186;
if(cljs.core.truth_(inst_30175)){
var statearr_30195_30221 = state_30186__$1;
(statearr_30195_30221[(1)] = (12));

} else {
var statearr_30196_30222 = state_30186__$1;
(statearr_30196_30222[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (9))){
var state_30186__$1 = state_30186;
var statearr_30197_30223 = state_30186__$1;
(statearr_30197_30223[(2)] = null);

(statearr_30197_30223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (5))){
var state_30186__$1 = state_30186;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30198_30224 = state_30186__$1;
(statearr_30198_30224[(1)] = (8));

} else {
var statearr_30199_30225 = state_30186__$1;
(statearr_30199_30225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (14))){
var inst_30180 = (state_30186[(2)]);
var state_30186__$1 = state_30186;
var statearr_30200_30226 = state_30186__$1;
(statearr_30200_30226[(2)] = inst_30180);

(statearr_30200_30226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (10))){
var inst_30172 = (state_30186[(2)]);
var state_30186__$1 = state_30186;
var statearr_30201_30227 = state_30186__$1;
(statearr_30201_30227[(2)] = inst_30172);

(statearr_30201_30227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (8))){
var inst_30169 = cljs.core.async.close_BANG_.call(null,to);
var state_30186__$1 = state_30186;
var statearr_30202_30228 = state_30186__$1;
(statearr_30202_30228[(2)] = inst_30169);

(statearr_30202_30228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__20234__auto___30214))
;
return ((function (switch__20169__auto__,c__20234__auto___30214){
return (function() {
var cljs$core$async$state_machine__20170__auto__ = null;
var cljs$core$async$state_machine__20170__auto____0 = (function (){
var statearr_30206 = [null,null,null,null,null,null,null,null];
(statearr_30206[(0)] = cljs$core$async$state_machine__20170__auto__);

(statearr_30206[(1)] = (1));

return statearr_30206;
});
var cljs$core$async$state_machine__20170__auto____1 = (function (state_30186){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_30186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e30207){if((e30207 instanceof Object)){
var ex__20173__auto__ = e30207;
var statearr_30208_30229 = state_30186;
(statearr_30208_30229[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30230 = state_30186;
state_30186 = G__30230;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$state_machine__20170__auto__ = function(state_30186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20170__auto____1.call(this,state_30186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20170__auto____0;
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20170__auto____1;
return cljs$core$async$state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___30214))
})();
var state__20236__auto__ = (function (){var statearr_30209 = f__20235__auto__.call(null);
(statearr_30209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___30214);

return statearr_30209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___30214))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30414){
var vec__30415 = p__30414;
var v = cljs.core.nth.call(null,vec__30415,(0),null);
var p = cljs.core.nth.call(null,vec__30415,(1),null);
var job = vec__30415;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20234__auto___30597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___30597,res,vec__30415,v,p,job,jobs,results){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___30597,res,vec__30415,v,p,job,jobs,results){
return (function (state_30420){
var state_val_30421 = (state_30420[(1)]);
if((state_val_30421 === (1))){
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30420__$1,(2),res,v);
} else {
if((state_val_30421 === (2))){
var inst_30417 = (state_30420[(2)]);
var inst_30418 = cljs.core.async.close_BANG_.call(null,res);
var state_30420__$1 = (function (){var statearr_30422 = state_30420;
(statearr_30422[(7)] = inst_30417);

return statearr_30422;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30420__$1,inst_30418);
} else {
return null;
}
}
});})(c__20234__auto___30597,res,vec__30415,v,p,job,jobs,results))
;
return ((function (switch__20169__auto__,c__20234__auto___30597,res,vec__30415,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0 = (function (){
var statearr_30426 = [null,null,null,null,null,null,null,null];
(statearr_30426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__);

(statearr_30426[(1)] = (1));

return statearr_30426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1 = (function (state_30420){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_30420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e30427){if((e30427 instanceof Object)){
var ex__20173__auto__ = e30427;
var statearr_30428_30598 = state_30420;
(statearr_30428_30598[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30599 = state_30420;
state_30420 = G__30599;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__ = function(state_30420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1.call(this,state_30420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___30597,res,vec__30415,v,p,job,jobs,results))
})();
var state__20236__auto__ = (function (){var statearr_30429 = f__20235__auto__.call(null);
(statearr_30429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___30597);

return statearr_30429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___30597,res,vec__30415,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30430){
var vec__30431 = p__30430;
var v = cljs.core.nth.call(null,vec__30431,(0),null);
var p = cljs.core.nth.call(null,vec__30431,(1),null);
var job = vec__30431;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17366__auto___30600 = n;
var __30601 = (0);
while(true){
if((__30601 < n__17366__auto___30600)){
var G__30432_30602 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30432_30602) {
case "compute":
var c__20234__auto___30604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30601,c__20234__auto___30604,G__30432_30602,n__17366__auto___30600,jobs,results,process,async){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (__30601,c__20234__auto___30604,G__30432_30602,n__17366__auto___30600,jobs,results,process,async){
return (function (state_30445){
var state_val_30446 = (state_30445[(1)]);
if((state_val_30446 === (1))){
var state_30445__$1 = state_30445;
var statearr_30447_30605 = state_30445__$1;
(statearr_30447_30605[(2)] = null);

(statearr_30447_30605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (2))){
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30445__$1,(4),jobs);
} else {
if((state_val_30446 === (3))){
var inst_30443 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30445__$1,inst_30443);
} else {
if((state_val_30446 === (4))){
var inst_30435 = (state_30445[(2)]);
var inst_30436 = process.call(null,inst_30435);
var state_30445__$1 = state_30445;
if(cljs.core.truth_(inst_30436)){
var statearr_30448_30606 = state_30445__$1;
(statearr_30448_30606[(1)] = (5));

} else {
var statearr_30449_30607 = state_30445__$1;
(statearr_30449_30607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (5))){
var state_30445__$1 = state_30445;
var statearr_30450_30608 = state_30445__$1;
(statearr_30450_30608[(2)] = null);

(statearr_30450_30608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (6))){
var state_30445__$1 = state_30445;
var statearr_30451_30609 = state_30445__$1;
(statearr_30451_30609[(2)] = null);

(statearr_30451_30609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (7))){
var inst_30441 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
var statearr_30452_30610 = state_30445__$1;
(statearr_30452_30610[(2)] = inst_30441);

(statearr_30452_30610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30601,c__20234__auto___30604,G__30432_30602,n__17366__auto___30600,jobs,results,process,async))
;
return ((function (__30601,switch__20169__auto__,c__20234__auto___30604,G__30432_30602,n__17366__auto___30600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0 = (function (){
var statearr_30456 = [null,null,null,null,null,null,null];
(statearr_30456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__);

(statearr_30456[(1)] = (1));

return statearr_30456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1 = (function (state_30445){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_30445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e30457){if((e30457 instanceof Object)){
var ex__20173__auto__ = e30457;
var statearr_30458_30611 = state_30445;
(statearr_30458_30611[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30612 = state_30445;
state_30445 = G__30612;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__ = function(state_30445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1.call(this,state_30445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__;
})()
;})(__30601,switch__20169__auto__,c__20234__auto___30604,G__30432_30602,n__17366__auto___30600,jobs,results,process,async))
})();
var state__20236__auto__ = (function (){var statearr_30459 = f__20235__auto__.call(null);
(statearr_30459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___30604);

return statearr_30459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(__30601,c__20234__auto___30604,G__30432_30602,n__17366__auto___30600,jobs,results,process,async))
);


break;
case "async":
var c__20234__auto___30613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30601,c__20234__auto___30613,G__30432_30602,n__17366__auto___30600,jobs,results,process,async){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (__30601,c__20234__auto___30613,G__30432_30602,n__17366__auto___30600,jobs,results,process,async){
return (function (state_30472){
var state_val_30473 = (state_30472[(1)]);
if((state_val_30473 === (1))){
var state_30472__$1 = state_30472;
var statearr_30474_30614 = state_30472__$1;
(statearr_30474_30614[(2)] = null);

(statearr_30474_30614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (2))){
var state_30472__$1 = state_30472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30472__$1,(4),jobs);
} else {
if((state_val_30473 === (3))){
var inst_30470 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30472__$1,inst_30470);
} else {
if((state_val_30473 === (4))){
var inst_30462 = (state_30472[(2)]);
var inst_30463 = async.call(null,inst_30462);
var state_30472__$1 = state_30472;
if(cljs.core.truth_(inst_30463)){
var statearr_30475_30615 = state_30472__$1;
(statearr_30475_30615[(1)] = (5));

} else {
var statearr_30476_30616 = state_30472__$1;
(statearr_30476_30616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (5))){
var state_30472__$1 = state_30472;
var statearr_30477_30617 = state_30472__$1;
(statearr_30477_30617[(2)] = null);

(statearr_30477_30617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (6))){
var state_30472__$1 = state_30472;
var statearr_30478_30618 = state_30472__$1;
(statearr_30478_30618[(2)] = null);

(statearr_30478_30618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (7))){
var inst_30468 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
var statearr_30479_30619 = state_30472__$1;
(statearr_30479_30619[(2)] = inst_30468);

(statearr_30479_30619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30601,c__20234__auto___30613,G__30432_30602,n__17366__auto___30600,jobs,results,process,async))
;
return ((function (__30601,switch__20169__auto__,c__20234__auto___30613,G__30432_30602,n__17366__auto___30600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0 = (function (){
var statearr_30483 = [null,null,null,null,null,null,null];
(statearr_30483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__);

(statearr_30483[(1)] = (1));

return statearr_30483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1 = (function (state_30472){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_30472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e30484){if((e30484 instanceof Object)){
var ex__20173__auto__ = e30484;
var statearr_30485_30620 = state_30472;
(statearr_30485_30620[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30621 = state_30472;
state_30472 = G__30621;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__ = function(state_30472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1.call(this,state_30472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__;
})()
;})(__30601,switch__20169__auto__,c__20234__auto___30613,G__30432_30602,n__17366__auto___30600,jobs,results,process,async))
})();
var state__20236__auto__ = (function (){var statearr_30486 = f__20235__auto__.call(null);
(statearr_30486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___30613);

return statearr_30486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(__30601,c__20234__auto___30613,G__30432_30602,n__17366__auto___30600,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30622 = (__30601 + (1));
__30601 = G__30622;
continue;
} else {
}
break;
}

var c__20234__auto___30623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___30623,jobs,results,process,async){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___30623,jobs,results,process,async){
return (function (state_30508){
var state_val_30509 = (state_30508[(1)]);
if((state_val_30509 === (1))){
var state_30508__$1 = state_30508;
var statearr_30510_30624 = state_30508__$1;
(statearr_30510_30624[(2)] = null);

(statearr_30510_30624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (2))){
var state_30508__$1 = state_30508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30508__$1,(4),from);
} else {
if((state_val_30509 === (3))){
var inst_30506 = (state_30508[(2)]);
var state_30508__$1 = state_30508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30508__$1,inst_30506);
} else {
if((state_val_30509 === (4))){
var inst_30489 = (state_30508[(7)]);
var inst_30489__$1 = (state_30508[(2)]);
var inst_30490 = (inst_30489__$1 == null);
var state_30508__$1 = (function (){var statearr_30511 = state_30508;
(statearr_30511[(7)] = inst_30489__$1);

return statearr_30511;
})();
if(cljs.core.truth_(inst_30490)){
var statearr_30512_30625 = state_30508__$1;
(statearr_30512_30625[(1)] = (5));

} else {
var statearr_30513_30626 = state_30508__$1;
(statearr_30513_30626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (5))){
var inst_30492 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30508__$1 = state_30508;
var statearr_30514_30627 = state_30508__$1;
(statearr_30514_30627[(2)] = inst_30492);

(statearr_30514_30627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (6))){
var inst_30489 = (state_30508[(7)]);
var inst_30494 = (state_30508[(8)]);
var inst_30494__$1 = cljs.core.async.chan.call(null,(1));
var inst_30495 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30496 = [inst_30489,inst_30494__$1];
var inst_30497 = (new cljs.core.PersistentVector(null,2,(5),inst_30495,inst_30496,null));
var state_30508__$1 = (function (){var statearr_30515 = state_30508;
(statearr_30515[(8)] = inst_30494__$1);

return statearr_30515;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30508__$1,(8),jobs,inst_30497);
} else {
if((state_val_30509 === (7))){
var inst_30504 = (state_30508[(2)]);
var state_30508__$1 = state_30508;
var statearr_30516_30628 = state_30508__$1;
(statearr_30516_30628[(2)] = inst_30504);

(statearr_30516_30628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (8))){
var inst_30494 = (state_30508[(8)]);
var inst_30499 = (state_30508[(2)]);
var state_30508__$1 = (function (){var statearr_30517 = state_30508;
(statearr_30517[(9)] = inst_30499);

return statearr_30517;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30508__$1,(9),results,inst_30494);
} else {
if((state_val_30509 === (9))){
var inst_30501 = (state_30508[(2)]);
var state_30508__$1 = (function (){var statearr_30518 = state_30508;
(statearr_30518[(10)] = inst_30501);

return statearr_30518;
})();
var statearr_30519_30629 = state_30508__$1;
(statearr_30519_30629[(2)] = null);

(statearr_30519_30629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20234__auto___30623,jobs,results,process,async))
;
return ((function (switch__20169__auto__,c__20234__auto___30623,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0 = (function (){
var statearr_30523 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__);

(statearr_30523[(1)] = (1));

return statearr_30523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1 = (function (state_30508){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_30508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e30524){if((e30524 instanceof Object)){
var ex__20173__auto__ = e30524;
var statearr_30525_30630 = state_30508;
(statearr_30525_30630[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30631 = state_30508;
state_30508 = G__30631;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__ = function(state_30508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1.call(this,state_30508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___30623,jobs,results,process,async))
})();
var state__20236__auto__ = (function (){var statearr_30526 = f__20235__auto__.call(null);
(statearr_30526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___30623);

return statearr_30526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___30623,jobs,results,process,async))
);


var c__20234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto__,jobs,results,process,async){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto__,jobs,results,process,async){
return (function (state_30564){
var state_val_30565 = (state_30564[(1)]);
if((state_val_30565 === (7))){
var inst_30560 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30566_30632 = state_30564__$1;
(statearr_30566_30632[(2)] = inst_30560);

(statearr_30566_30632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (20))){
var state_30564__$1 = state_30564;
var statearr_30567_30633 = state_30564__$1;
(statearr_30567_30633[(2)] = null);

(statearr_30567_30633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (1))){
var state_30564__$1 = state_30564;
var statearr_30568_30634 = state_30564__$1;
(statearr_30568_30634[(2)] = null);

(statearr_30568_30634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (4))){
var inst_30529 = (state_30564[(7)]);
var inst_30529__$1 = (state_30564[(2)]);
var inst_30530 = (inst_30529__$1 == null);
var state_30564__$1 = (function (){var statearr_30569 = state_30564;
(statearr_30569[(7)] = inst_30529__$1);

return statearr_30569;
})();
if(cljs.core.truth_(inst_30530)){
var statearr_30570_30635 = state_30564__$1;
(statearr_30570_30635[(1)] = (5));

} else {
var statearr_30571_30636 = state_30564__$1;
(statearr_30571_30636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (15))){
var inst_30542 = (state_30564[(8)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30564__$1,(18),to,inst_30542);
} else {
if((state_val_30565 === (21))){
var inst_30555 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30572_30637 = state_30564__$1;
(statearr_30572_30637[(2)] = inst_30555);

(statearr_30572_30637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (13))){
var inst_30557 = (state_30564[(2)]);
var state_30564__$1 = (function (){var statearr_30573 = state_30564;
(statearr_30573[(9)] = inst_30557);

return statearr_30573;
})();
var statearr_30574_30638 = state_30564__$1;
(statearr_30574_30638[(2)] = null);

(statearr_30574_30638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (6))){
var inst_30529 = (state_30564[(7)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30564__$1,(11),inst_30529);
} else {
if((state_val_30565 === (17))){
var inst_30550 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30550)){
var statearr_30575_30639 = state_30564__$1;
(statearr_30575_30639[(1)] = (19));

} else {
var statearr_30576_30640 = state_30564__$1;
(statearr_30576_30640[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (3))){
var inst_30562 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30564__$1,inst_30562);
} else {
if((state_val_30565 === (12))){
var inst_30539 = (state_30564[(10)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30564__$1,(14),inst_30539);
} else {
if((state_val_30565 === (2))){
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30564__$1,(4),results);
} else {
if((state_val_30565 === (19))){
var state_30564__$1 = state_30564;
var statearr_30577_30641 = state_30564__$1;
(statearr_30577_30641[(2)] = null);

(statearr_30577_30641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (11))){
var inst_30539 = (state_30564[(2)]);
var state_30564__$1 = (function (){var statearr_30578 = state_30564;
(statearr_30578[(10)] = inst_30539);

return statearr_30578;
})();
var statearr_30579_30642 = state_30564__$1;
(statearr_30579_30642[(2)] = null);

(statearr_30579_30642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (9))){
var state_30564__$1 = state_30564;
var statearr_30580_30643 = state_30564__$1;
(statearr_30580_30643[(2)] = null);

(statearr_30580_30643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (5))){
var state_30564__$1 = state_30564;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30581_30644 = state_30564__$1;
(statearr_30581_30644[(1)] = (8));

} else {
var statearr_30582_30645 = state_30564__$1;
(statearr_30582_30645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (14))){
var inst_30544 = (state_30564[(11)]);
var inst_30542 = (state_30564[(8)]);
var inst_30542__$1 = (state_30564[(2)]);
var inst_30543 = (inst_30542__$1 == null);
var inst_30544__$1 = cljs.core.not.call(null,inst_30543);
var state_30564__$1 = (function (){var statearr_30583 = state_30564;
(statearr_30583[(11)] = inst_30544__$1);

(statearr_30583[(8)] = inst_30542__$1);

return statearr_30583;
})();
if(inst_30544__$1){
var statearr_30584_30646 = state_30564__$1;
(statearr_30584_30646[(1)] = (15));

} else {
var statearr_30585_30647 = state_30564__$1;
(statearr_30585_30647[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (16))){
var inst_30544 = (state_30564[(11)]);
var state_30564__$1 = state_30564;
var statearr_30586_30648 = state_30564__$1;
(statearr_30586_30648[(2)] = inst_30544);

(statearr_30586_30648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (10))){
var inst_30536 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30587_30649 = state_30564__$1;
(statearr_30587_30649[(2)] = inst_30536);

(statearr_30587_30649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (18))){
var inst_30547 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30588_30650 = state_30564__$1;
(statearr_30588_30650[(2)] = inst_30547);

(statearr_30588_30650[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (8))){
var inst_30533 = cljs.core.async.close_BANG_.call(null,to);
var state_30564__$1 = state_30564;
var statearr_30589_30651 = state_30564__$1;
(statearr_30589_30651[(2)] = inst_30533);

(statearr_30589_30651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__20234__auto__,jobs,results,process,async))
;
return ((function (switch__20169__auto__,c__20234__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0 = (function (){
var statearr_30593 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__);

(statearr_30593[(1)] = (1));

return statearr_30593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1 = (function (state_30564){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_30564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e30594){if((e30594 instanceof Object)){
var ex__20173__auto__ = e30594;
var statearr_30595_30652 = state_30564;
(statearr_30595_30652[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30653 = state_30564;
state_30564 = G__30653;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__ = function(state_30564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1.call(this,state_30564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto__,jobs,results,process,async))
})();
var state__20236__auto__ = (function (){var statearr_30596 = f__20235__auto__.call(null);
(statearr_30596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto__);

return statearr_30596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto__,jobs,results,process,async))
);

return c__20234__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args30654 = [];
var len__17521__auto___30657 = arguments.length;
var i__17522__auto___30658 = (0);
while(true){
if((i__17522__auto___30658 < len__17521__auto___30657)){
args30654.push((arguments[i__17522__auto___30658]));

var G__30659 = (i__17522__auto___30658 + (1));
i__17522__auto___30658 = G__30659;
continue;
} else {
}
break;
}

var G__30656 = args30654.length;
switch (G__30656) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30654.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args30661 = [];
var len__17521__auto___30664 = arguments.length;
var i__17522__auto___30665 = (0);
while(true){
if((i__17522__auto___30665 < len__17521__auto___30664)){
args30661.push((arguments[i__17522__auto___30665]));

var G__30666 = (i__17522__auto___30665 + (1));
i__17522__auto___30665 = G__30666;
continue;
} else {
}
break;
}

var G__30663 = args30661.length;
switch (G__30663) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30661.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args30668 = [];
var len__17521__auto___30721 = arguments.length;
var i__17522__auto___30722 = (0);
while(true){
if((i__17522__auto___30722 < len__17521__auto___30721)){
args30668.push((arguments[i__17522__auto___30722]));

var G__30723 = (i__17522__auto___30722 + (1));
i__17522__auto___30722 = G__30723;
continue;
} else {
}
break;
}

var G__30670 = args30668.length;
switch (G__30670) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30668.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20234__auto___30725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___30725,tc,fc){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___30725,tc,fc){
return (function (state_30696){
var state_val_30697 = (state_30696[(1)]);
if((state_val_30697 === (7))){
var inst_30692 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30698_30726 = state_30696__$1;
(statearr_30698_30726[(2)] = inst_30692);

(statearr_30698_30726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (1))){
var state_30696__$1 = state_30696;
var statearr_30699_30727 = state_30696__$1;
(statearr_30699_30727[(2)] = null);

(statearr_30699_30727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (4))){
var inst_30673 = (state_30696[(7)]);
var inst_30673__$1 = (state_30696[(2)]);
var inst_30674 = (inst_30673__$1 == null);
var state_30696__$1 = (function (){var statearr_30700 = state_30696;
(statearr_30700[(7)] = inst_30673__$1);

return statearr_30700;
})();
if(cljs.core.truth_(inst_30674)){
var statearr_30701_30728 = state_30696__$1;
(statearr_30701_30728[(1)] = (5));

} else {
var statearr_30702_30729 = state_30696__$1;
(statearr_30702_30729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (13))){
var state_30696__$1 = state_30696;
var statearr_30703_30730 = state_30696__$1;
(statearr_30703_30730[(2)] = null);

(statearr_30703_30730[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (6))){
var inst_30673 = (state_30696[(7)]);
var inst_30679 = p.call(null,inst_30673);
var state_30696__$1 = state_30696;
if(cljs.core.truth_(inst_30679)){
var statearr_30704_30731 = state_30696__$1;
(statearr_30704_30731[(1)] = (9));

} else {
var statearr_30705_30732 = state_30696__$1;
(statearr_30705_30732[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (3))){
var inst_30694 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30696__$1,inst_30694);
} else {
if((state_val_30697 === (12))){
var state_30696__$1 = state_30696;
var statearr_30706_30733 = state_30696__$1;
(statearr_30706_30733[(2)] = null);

(statearr_30706_30733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (2))){
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30696__$1,(4),ch);
} else {
if((state_val_30697 === (11))){
var inst_30673 = (state_30696[(7)]);
var inst_30683 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30696__$1,(8),inst_30683,inst_30673);
} else {
if((state_val_30697 === (9))){
var state_30696__$1 = state_30696;
var statearr_30707_30734 = state_30696__$1;
(statearr_30707_30734[(2)] = tc);

(statearr_30707_30734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (5))){
var inst_30676 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30677 = cljs.core.async.close_BANG_.call(null,fc);
var state_30696__$1 = (function (){var statearr_30708 = state_30696;
(statearr_30708[(8)] = inst_30676);

return statearr_30708;
})();
var statearr_30709_30735 = state_30696__$1;
(statearr_30709_30735[(2)] = inst_30677);

(statearr_30709_30735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (14))){
var inst_30690 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
var statearr_30710_30736 = state_30696__$1;
(statearr_30710_30736[(2)] = inst_30690);

(statearr_30710_30736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (10))){
var state_30696__$1 = state_30696;
var statearr_30711_30737 = state_30696__$1;
(statearr_30711_30737[(2)] = fc);

(statearr_30711_30737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30697 === (8))){
var inst_30685 = (state_30696[(2)]);
var state_30696__$1 = state_30696;
if(cljs.core.truth_(inst_30685)){
var statearr_30712_30738 = state_30696__$1;
(statearr_30712_30738[(1)] = (12));

} else {
var statearr_30713_30739 = state_30696__$1;
(statearr_30713_30739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__20234__auto___30725,tc,fc))
;
return ((function (switch__20169__auto__,c__20234__auto___30725,tc,fc){
return (function() {
var cljs$core$async$state_machine__20170__auto__ = null;
var cljs$core$async$state_machine__20170__auto____0 = (function (){
var statearr_30717 = [null,null,null,null,null,null,null,null,null];
(statearr_30717[(0)] = cljs$core$async$state_machine__20170__auto__);

(statearr_30717[(1)] = (1));

return statearr_30717;
});
var cljs$core$async$state_machine__20170__auto____1 = (function (state_30696){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_30696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e30718){if((e30718 instanceof Object)){
var ex__20173__auto__ = e30718;
var statearr_30719_30740 = state_30696;
(statearr_30719_30740[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30741 = state_30696;
state_30696 = G__30741;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$state_machine__20170__auto__ = function(state_30696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20170__auto____1.call(this,state_30696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20170__auto____0;
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20170__auto____1;
return cljs$core$async$state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___30725,tc,fc))
})();
var state__20236__auto__ = (function (){var statearr_30720 = f__20235__auto__.call(null);
(statearr_30720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___30725);

return statearr_30720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___30725,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto__){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto__){
return (function (state_30788){
var state_val_30789 = (state_30788[(1)]);
if((state_val_30789 === (1))){
var inst_30774 = init;
var state_30788__$1 = (function (){var statearr_30790 = state_30788;
(statearr_30790[(7)] = inst_30774);

return statearr_30790;
})();
var statearr_30791_30806 = state_30788__$1;
(statearr_30791_30806[(2)] = null);

(statearr_30791_30806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30789 === (2))){
var state_30788__$1 = state_30788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30788__$1,(4),ch);
} else {
if((state_val_30789 === (3))){
var inst_30786 = (state_30788[(2)]);
var state_30788__$1 = state_30788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30788__$1,inst_30786);
} else {
if((state_val_30789 === (4))){
var inst_30777 = (state_30788[(8)]);
var inst_30777__$1 = (state_30788[(2)]);
var inst_30778 = (inst_30777__$1 == null);
var state_30788__$1 = (function (){var statearr_30792 = state_30788;
(statearr_30792[(8)] = inst_30777__$1);

return statearr_30792;
})();
if(cljs.core.truth_(inst_30778)){
var statearr_30793_30807 = state_30788__$1;
(statearr_30793_30807[(1)] = (5));

} else {
var statearr_30794_30808 = state_30788__$1;
(statearr_30794_30808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30789 === (5))){
var inst_30774 = (state_30788[(7)]);
var state_30788__$1 = state_30788;
var statearr_30795_30809 = state_30788__$1;
(statearr_30795_30809[(2)] = inst_30774);

(statearr_30795_30809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30789 === (6))){
var inst_30774 = (state_30788[(7)]);
var inst_30777 = (state_30788[(8)]);
var inst_30781 = f.call(null,inst_30774,inst_30777);
var inst_30774__$1 = inst_30781;
var state_30788__$1 = (function (){var statearr_30796 = state_30788;
(statearr_30796[(7)] = inst_30774__$1);

return statearr_30796;
})();
var statearr_30797_30810 = state_30788__$1;
(statearr_30797_30810[(2)] = null);

(statearr_30797_30810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30789 === (7))){
var inst_30784 = (state_30788[(2)]);
var state_30788__$1 = state_30788;
var statearr_30798_30811 = state_30788__$1;
(statearr_30798_30811[(2)] = inst_30784);

(statearr_30798_30811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20234__auto__))
;
return ((function (switch__20169__auto__,c__20234__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20170__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20170__auto____0 = (function (){
var statearr_30802 = [null,null,null,null,null,null,null,null,null];
(statearr_30802[(0)] = cljs$core$async$reduce_$_state_machine__20170__auto__);

(statearr_30802[(1)] = (1));

return statearr_30802;
});
var cljs$core$async$reduce_$_state_machine__20170__auto____1 = (function (state_30788){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_30788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e30803){if((e30803 instanceof Object)){
var ex__20173__auto__ = e30803;
var statearr_30804_30812 = state_30788;
(statearr_30804_30812[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30813 = state_30788;
state_30788 = G__30813;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20170__auto__ = function(state_30788){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20170__auto____1.call(this,state_30788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20170__auto____0;
cljs$core$async$reduce_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20170__auto____1;
return cljs$core$async$reduce_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto__))
})();
var state__20236__auto__ = (function (){var statearr_30805 = f__20235__auto__.call(null);
(statearr_30805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto__);

return statearr_30805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto__))
);

return c__20234__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args30814 = [];
var len__17521__auto___30866 = arguments.length;
var i__17522__auto___30867 = (0);
while(true){
if((i__17522__auto___30867 < len__17521__auto___30866)){
args30814.push((arguments[i__17522__auto___30867]));

var G__30868 = (i__17522__auto___30867 + (1));
i__17522__auto___30867 = G__30868;
continue;
} else {
}
break;
}

var G__30816 = args30814.length;
switch (G__30816) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30814.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto__){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto__){
return (function (state_30841){
var state_val_30842 = (state_30841[(1)]);
if((state_val_30842 === (7))){
var inst_30823 = (state_30841[(2)]);
var state_30841__$1 = state_30841;
var statearr_30843_30870 = state_30841__$1;
(statearr_30843_30870[(2)] = inst_30823);

(statearr_30843_30870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30842 === (1))){
var inst_30817 = cljs.core.seq.call(null,coll);
var inst_30818 = inst_30817;
var state_30841__$1 = (function (){var statearr_30844 = state_30841;
(statearr_30844[(7)] = inst_30818);

return statearr_30844;
})();
var statearr_30845_30871 = state_30841__$1;
(statearr_30845_30871[(2)] = null);

(statearr_30845_30871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30842 === (4))){
var inst_30818 = (state_30841[(7)]);
var inst_30821 = cljs.core.first.call(null,inst_30818);
var state_30841__$1 = state_30841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30841__$1,(7),ch,inst_30821);
} else {
if((state_val_30842 === (13))){
var inst_30835 = (state_30841[(2)]);
var state_30841__$1 = state_30841;
var statearr_30846_30872 = state_30841__$1;
(statearr_30846_30872[(2)] = inst_30835);

(statearr_30846_30872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30842 === (6))){
var inst_30826 = (state_30841[(2)]);
var state_30841__$1 = state_30841;
if(cljs.core.truth_(inst_30826)){
var statearr_30847_30873 = state_30841__$1;
(statearr_30847_30873[(1)] = (8));

} else {
var statearr_30848_30874 = state_30841__$1;
(statearr_30848_30874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30842 === (3))){
var inst_30839 = (state_30841[(2)]);
var state_30841__$1 = state_30841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30841__$1,inst_30839);
} else {
if((state_val_30842 === (12))){
var state_30841__$1 = state_30841;
var statearr_30849_30875 = state_30841__$1;
(statearr_30849_30875[(2)] = null);

(statearr_30849_30875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30842 === (2))){
var inst_30818 = (state_30841[(7)]);
var state_30841__$1 = state_30841;
if(cljs.core.truth_(inst_30818)){
var statearr_30850_30876 = state_30841__$1;
(statearr_30850_30876[(1)] = (4));

} else {
var statearr_30851_30877 = state_30841__$1;
(statearr_30851_30877[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30842 === (11))){
var inst_30832 = cljs.core.async.close_BANG_.call(null,ch);
var state_30841__$1 = state_30841;
var statearr_30852_30878 = state_30841__$1;
(statearr_30852_30878[(2)] = inst_30832);

(statearr_30852_30878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30842 === (9))){
var state_30841__$1 = state_30841;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30853_30879 = state_30841__$1;
(statearr_30853_30879[(1)] = (11));

} else {
var statearr_30854_30880 = state_30841__$1;
(statearr_30854_30880[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30842 === (5))){
var inst_30818 = (state_30841[(7)]);
var state_30841__$1 = state_30841;
var statearr_30855_30881 = state_30841__$1;
(statearr_30855_30881[(2)] = inst_30818);

(statearr_30855_30881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30842 === (10))){
var inst_30837 = (state_30841[(2)]);
var state_30841__$1 = state_30841;
var statearr_30856_30882 = state_30841__$1;
(statearr_30856_30882[(2)] = inst_30837);

(statearr_30856_30882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30842 === (8))){
var inst_30818 = (state_30841[(7)]);
var inst_30828 = cljs.core.next.call(null,inst_30818);
var inst_30818__$1 = inst_30828;
var state_30841__$1 = (function (){var statearr_30857 = state_30841;
(statearr_30857[(7)] = inst_30818__$1);

return statearr_30857;
})();
var statearr_30858_30883 = state_30841__$1;
(statearr_30858_30883[(2)] = null);

(statearr_30858_30883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__20234__auto__))
;
return ((function (switch__20169__auto__,c__20234__auto__){
return (function() {
var cljs$core$async$state_machine__20170__auto__ = null;
var cljs$core$async$state_machine__20170__auto____0 = (function (){
var statearr_30862 = [null,null,null,null,null,null,null,null];
(statearr_30862[(0)] = cljs$core$async$state_machine__20170__auto__);

(statearr_30862[(1)] = (1));

return statearr_30862;
});
var cljs$core$async$state_machine__20170__auto____1 = (function (state_30841){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_30841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e30863){if((e30863 instanceof Object)){
var ex__20173__auto__ = e30863;
var statearr_30864_30884 = state_30841;
(statearr_30864_30884[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30885 = state_30841;
state_30841 = G__30885;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$state_machine__20170__auto__ = function(state_30841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20170__auto____1.call(this,state_30841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20170__auto____0;
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20170__auto____1;
return cljs$core$async$state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto__))
})();
var state__20236__auto__ = (function (){var statearr_30865 = f__20235__auto__.call(null);
(statearr_30865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto__);

return statearr_30865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto__))
);

return c__20234__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17118__auto__ = (((_ == null))?null:_);
var m__17119__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,_);
} else {
var m__17119__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17119__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,ch);
} else {
var m__17119__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m);
} else {
var m__17119__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t31111 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31111 = (function (mult,ch,cs,meta31112){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31112 = meta31112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31113,meta31112__$1){
var self__ = this;
var _31113__$1 = this;
return (new cljs.core.async.t31111(self__.mult,self__.ch,self__.cs,meta31112__$1));
});})(cs))
;

cljs.core.async.t31111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31113){
var self__ = this;
var _31113__$1 = this;
return self__.meta31112;
});})(cs))
;

cljs.core.async.t31111.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31111.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31111.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31111.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31111.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31111.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31112","meta31112",1479648451,null)], null);
});})(cs))
;

cljs.core.async.t31111.cljs$lang$type = true;

cljs.core.async.t31111.cljs$lang$ctorStr = "cljs.core.async/t31111";

cljs.core.async.t31111.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t31111");
});})(cs))
;

cljs.core.async.__GT_t31111 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t31111(mult__$1,ch__$1,cs__$1,meta31112){
return (new cljs.core.async.t31111(mult__$1,ch__$1,cs__$1,meta31112));
});})(cs))
;

}

return (new cljs.core.async.t31111(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20234__auto___31332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___31332,cs,m,dchan,dctr,done){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___31332,cs,m,dchan,dctr,done){
return (function (state_31244){
var state_val_31245 = (state_31244[(1)]);
if((state_val_31245 === (7))){
var inst_31240 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31246_31333 = state_31244__$1;
(statearr_31246_31333[(2)] = inst_31240);

(statearr_31246_31333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (20))){
var inst_31145 = (state_31244[(7)]);
var inst_31155 = cljs.core.first.call(null,inst_31145);
var inst_31156 = cljs.core.nth.call(null,inst_31155,(0),null);
var inst_31157 = cljs.core.nth.call(null,inst_31155,(1),null);
var state_31244__$1 = (function (){var statearr_31247 = state_31244;
(statearr_31247[(8)] = inst_31156);

return statearr_31247;
})();
if(cljs.core.truth_(inst_31157)){
var statearr_31248_31334 = state_31244__$1;
(statearr_31248_31334[(1)] = (22));

} else {
var statearr_31249_31335 = state_31244__$1;
(statearr_31249_31335[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (27))){
var inst_31187 = (state_31244[(9)]);
var inst_31116 = (state_31244[(10)]);
var inst_31192 = (state_31244[(11)]);
var inst_31185 = (state_31244[(12)]);
var inst_31192__$1 = cljs.core._nth.call(null,inst_31185,inst_31187);
var inst_31193 = cljs.core.async.put_BANG_.call(null,inst_31192__$1,inst_31116,done);
var state_31244__$1 = (function (){var statearr_31250 = state_31244;
(statearr_31250[(11)] = inst_31192__$1);

return statearr_31250;
})();
if(cljs.core.truth_(inst_31193)){
var statearr_31251_31336 = state_31244__$1;
(statearr_31251_31336[(1)] = (30));

} else {
var statearr_31252_31337 = state_31244__$1;
(statearr_31252_31337[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (1))){
var state_31244__$1 = state_31244;
var statearr_31253_31338 = state_31244__$1;
(statearr_31253_31338[(2)] = null);

(statearr_31253_31338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (24))){
var inst_31145 = (state_31244[(7)]);
var inst_31162 = (state_31244[(2)]);
var inst_31163 = cljs.core.next.call(null,inst_31145);
var inst_31125 = inst_31163;
var inst_31126 = null;
var inst_31127 = (0);
var inst_31128 = (0);
var state_31244__$1 = (function (){var statearr_31254 = state_31244;
(statearr_31254[(13)] = inst_31162);

(statearr_31254[(14)] = inst_31127);

(statearr_31254[(15)] = inst_31128);

(statearr_31254[(16)] = inst_31125);

(statearr_31254[(17)] = inst_31126);

return statearr_31254;
})();
var statearr_31255_31339 = state_31244__$1;
(statearr_31255_31339[(2)] = null);

(statearr_31255_31339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (39))){
var state_31244__$1 = state_31244;
var statearr_31259_31340 = state_31244__$1;
(statearr_31259_31340[(2)] = null);

(statearr_31259_31340[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (4))){
var inst_31116 = (state_31244[(10)]);
var inst_31116__$1 = (state_31244[(2)]);
var inst_31117 = (inst_31116__$1 == null);
var state_31244__$1 = (function (){var statearr_31260 = state_31244;
(statearr_31260[(10)] = inst_31116__$1);

return statearr_31260;
})();
if(cljs.core.truth_(inst_31117)){
var statearr_31261_31341 = state_31244__$1;
(statearr_31261_31341[(1)] = (5));

} else {
var statearr_31262_31342 = state_31244__$1;
(statearr_31262_31342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (15))){
var inst_31127 = (state_31244[(14)]);
var inst_31128 = (state_31244[(15)]);
var inst_31125 = (state_31244[(16)]);
var inst_31126 = (state_31244[(17)]);
var inst_31141 = (state_31244[(2)]);
var inst_31142 = (inst_31128 + (1));
var tmp31256 = inst_31127;
var tmp31257 = inst_31125;
var tmp31258 = inst_31126;
var inst_31125__$1 = tmp31257;
var inst_31126__$1 = tmp31258;
var inst_31127__$1 = tmp31256;
var inst_31128__$1 = inst_31142;
var state_31244__$1 = (function (){var statearr_31263 = state_31244;
(statearr_31263[(14)] = inst_31127__$1);

(statearr_31263[(15)] = inst_31128__$1);

(statearr_31263[(16)] = inst_31125__$1);

(statearr_31263[(17)] = inst_31126__$1);

(statearr_31263[(18)] = inst_31141);

return statearr_31263;
})();
var statearr_31264_31343 = state_31244__$1;
(statearr_31264_31343[(2)] = null);

(statearr_31264_31343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (21))){
var inst_31166 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31268_31344 = state_31244__$1;
(statearr_31268_31344[(2)] = inst_31166);

(statearr_31268_31344[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (31))){
var inst_31192 = (state_31244[(11)]);
var inst_31196 = done.call(null,null);
var inst_31197 = cljs.core.async.untap_STAR_.call(null,m,inst_31192);
var state_31244__$1 = (function (){var statearr_31269 = state_31244;
(statearr_31269[(19)] = inst_31196);

return statearr_31269;
})();
var statearr_31270_31345 = state_31244__$1;
(statearr_31270_31345[(2)] = inst_31197);

(statearr_31270_31345[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (32))){
var inst_31187 = (state_31244[(9)]);
var inst_31186 = (state_31244[(20)]);
var inst_31184 = (state_31244[(21)]);
var inst_31185 = (state_31244[(12)]);
var inst_31199 = (state_31244[(2)]);
var inst_31200 = (inst_31187 + (1));
var tmp31265 = inst_31186;
var tmp31266 = inst_31184;
var tmp31267 = inst_31185;
var inst_31184__$1 = tmp31266;
var inst_31185__$1 = tmp31267;
var inst_31186__$1 = tmp31265;
var inst_31187__$1 = inst_31200;
var state_31244__$1 = (function (){var statearr_31271 = state_31244;
(statearr_31271[(9)] = inst_31187__$1);

(statearr_31271[(20)] = inst_31186__$1);

(statearr_31271[(21)] = inst_31184__$1);

(statearr_31271[(22)] = inst_31199);

(statearr_31271[(12)] = inst_31185__$1);

return statearr_31271;
})();
var statearr_31272_31346 = state_31244__$1;
(statearr_31272_31346[(2)] = null);

(statearr_31272_31346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (40))){
var inst_31212 = (state_31244[(23)]);
var inst_31216 = done.call(null,null);
var inst_31217 = cljs.core.async.untap_STAR_.call(null,m,inst_31212);
var state_31244__$1 = (function (){var statearr_31273 = state_31244;
(statearr_31273[(24)] = inst_31216);

return statearr_31273;
})();
var statearr_31274_31347 = state_31244__$1;
(statearr_31274_31347[(2)] = inst_31217);

(statearr_31274_31347[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (33))){
var inst_31203 = (state_31244[(25)]);
var inst_31205 = cljs.core.chunked_seq_QMARK_.call(null,inst_31203);
var state_31244__$1 = state_31244;
if(inst_31205){
var statearr_31275_31348 = state_31244__$1;
(statearr_31275_31348[(1)] = (36));

} else {
var statearr_31276_31349 = state_31244__$1;
(statearr_31276_31349[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (13))){
var inst_31135 = (state_31244[(26)]);
var inst_31138 = cljs.core.async.close_BANG_.call(null,inst_31135);
var state_31244__$1 = state_31244;
var statearr_31277_31350 = state_31244__$1;
(statearr_31277_31350[(2)] = inst_31138);

(statearr_31277_31350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (22))){
var inst_31156 = (state_31244[(8)]);
var inst_31159 = cljs.core.async.close_BANG_.call(null,inst_31156);
var state_31244__$1 = state_31244;
var statearr_31278_31351 = state_31244__$1;
(statearr_31278_31351[(2)] = inst_31159);

(statearr_31278_31351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (36))){
var inst_31203 = (state_31244[(25)]);
var inst_31207 = cljs.core.chunk_first.call(null,inst_31203);
var inst_31208 = cljs.core.chunk_rest.call(null,inst_31203);
var inst_31209 = cljs.core.count.call(null,inst_31207);
var inst_31184 = inst_31208;
var inst_31185 = inst_31207;
var inst_31186 = inst_31209;
var inst_31187 = (0);
var state_31244__$1 = (function (){var statearr_31279 = state_31244;
(statearr_31279[(9)] = inst_31187);

(statearr_31279[(20)] = inst_31186);

(statearr_31279[(21)] = inst_31184);

(statearr_31279[(12)] = inst_31185);

return statearr_31279;
})();
var statearr_31280_31352 = state_31244__$1;
(statearr_31280_31352[(2)] = null);

(statearr_31280_31352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (41))){
var inst_31203 = (state_31244[(25)]);
var inst_31219 = (state_31244[(2)]);
var inst_31220 = cljs.core.next.call(null,inst_31203);
var inst_31184 = inst_31220;
var inst_31185 = null;
var inst_31186 = (0);
var inst_31187 = (0);
var state_31244__$1 = (function (){var statearr_31281 = state_31244;
(statearr_31281[(9)] = inst_31187);

(statearr_31281[(27)] = inst_31219);

(statearr_31281[(20)] = inst_31186);

(statearr_31281[(21)] = inst_31184);

(statearr_31281[(12)] = inst_31185);

return statearr_31281;
})();
var statearr_31282_31353 = state_31244__$1;
(statearr_31282_31353[(2)] = null);

(statearr_31282_31353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (43))){
var state_31244__$1 = state_31244;
var statearr_31283_31354 = state_31244__$1;
(statearr_31283_31354[(2)] = null);

(statearr_31283_31354[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (29))){
var inst_31228 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31284_31355 = state_31244__$1;
(statearr_31284_31355[(2)] = inst_31228);

(statearr_31284_31355[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (44))){
var inst_31237 = (state_31244[(2)]);
var state_31244__$1 = (function (){var statearr_31285 = state_31244;
(statearr_31285[(28)] = inst_31237);

return statearr_31285;
})();
var statearr_31286_31356 = state_31244__$1;
(statearr_31286_31356[(2)] = null);

(statearr_31286_31356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (6))){
var inst_31176 = (state_31244[(29)]);
var inst_31175 = cljs.core.deref.call(null,cs);
var inst_31176__$1 = cljs.core.keys.call(null,inst_31175);
var inst_31177 = cljs.core.count.call(null,inst_31176__$1);
var inst_31178 = cljs.core.reset_BANG_.call(null,dctr,inst_31177);
var inst_31183 = cljs.core.seq.call(null,inst_31176__$1);
var inst_31184 = inst_31183;
var inst_31185 = null;
var inst_31186 = (0);
var inst_31187 = (0);
var state_31244__$1 = (function (){var statearr_31287 = state_31244;
(statearr_31287[(9)] = inst_31187);

(statearr_31287[(20)] = inst_31186);

(statearr_31287[(21)] = inst_31184);

(statearr_31287[(29)] = inst_31176__$1);

(statearr_31287[(12)] = inst_31185);

(statearr_31287[(30)] = inst_31178);

return statearr_31287;
})();
var statearr_31288_31357 = state_31244__$1;
(statearr_31288_31357[(2)] = null);

(statearr_31288_31357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (28))){
var inst_31203 = (state_31244[(25)]);
var inst_31184 = (state_31244[(21)]);
var inst_31203__$1 = cljs.core.seq.call(null,inst_31184);
var state_31244__$1 = (function (){var statearr_31289 = state_31244;
(statearr_31289[(25)] = inst_31203__$1);

return statearr_31289;
})();
if(inst_31203__$1){
var statearr_31290_31358 = state_31244__$1;
(statearr_31290_31358[(1)] = (33));

} else {
var statearr_31291_31359 = state_31244__$1;
(statearr_31291_31359[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (25))){
var inst_31187 = (state_31244[(9)]);
var inst_31186 = (state_31244[(20)]);
var inst_31189 = (inst_31187 < inst_31186);
var inst_31190 = inst_31189;
var state_31244__$1 = state_31244;
if(cljs.core.truth_(inst_31190)){
var statearr_31292_31360 = state_31244__$1;
(statearr_31292_31360[(1)] = (27));

} else {
var statearr_31293_31361 = state_31244__$1;
(statearr_31293_31361[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (34))){
var state_31244__$1 = state_31244;
var statearr_31294_31362 = state_31244__$1;
(statearr_31294_31362[(2)] = null);

(statearr_31294_31362[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (17))){
var state_31244__$1 = state_31244;
var statearr_31295_31363 = state_31244__$1;
(statearr_31295_31363[(2)] = null);

(statearr_31295_31363[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (3))){
var inst_31242 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31244__$1,inst_31242);
} else {
if((state_val_31245 === (12))){
var inst_31171 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31296_31364 = state_31244__$1;
(statearr_31296_31364[(2)] = inst_31171);

(statearr_31296_31364[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (2))){
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31244__$1,(4),ch);
} else {
if((state_val_31245 === (23))){
var state_31244__$1 = state_31244;
var statearr_31297_31365 = state_31244__$1;
(statearr_31297_31365[(2)] = null);

(statearr_31297_31365[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (35))){
var inst_31226 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31298_31366 = state_31244__$1;
(statearr_31298_31366[(2)] = inst_31226);

(statearr_31298_31366[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (19))){
var inst_31145 = (state_31244[(7)]);
var inst_31149 = cljs.core.chunk_first.call(null,inst_31145);
var inst_31150 = cljs.core.chunk_rest.call(null,inst_31145);
var inst_31151 = cljs.core.count.call(null,inst_31149);
var inst_31125 = inst_31150;
var inst_31126 = inst_31149;
var inst_31127 = inst_31151;
var inst_31128 = (0);
var state_31244__$1 = (function (){var statearr_31299 = state_31244;
(statearr_31299[(14)] = inst_31127);

(statearr_31299[(15)] = inst_31128);

(statearr_31299[(16)] = inst_31125);

(statearr_31299[(17)] = inst_31126);

return statearr_31299;
})();
var statearr_31300_31367 = state_31244__$1;
(statearr_31300_31367[(2)] = null);

(statearr_31300_31367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (11))){
var inst_31145 = (state_31244[(7)]);
var inst_31125 = (state_31244[(16)]);
var inst_31145__$1 = cljs.core.seq.call(null,inst_31125);
var state_31244__$1 = (function (){var statearr_31301 = state_31244;
(statearr_31301[(7)] = inst_31145__$1);

return statearr_31301;
})();
if(inst_31145__$1){
var statearr_31302_31368 = state_31244__$1;
(statearr_31302_31368[(1)] = (16));

} else {
var statearr_31303_31369 = state_31244__$1;
(statearr_31303_31369[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (9))){
var inst_31173 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31304_31370 = state_31244__$1;
(statearr_31304_31370[(2)] = inst_31173);

(statearr_31304_31370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (5))){
var inst_31123 = cljs.core.deref.call(null,cs);
var inst_31124 = cljs.core.seq.call(null,inst_31123);
var inst_31125 = inst_31124;
var inst_31126 = null;
var inst_31127 = (0);
var inst_31128 = (0);
var state_31244__$1 = (function (){var statearr_31305 = state_31244;
(statearr_31305[(14)] = inst_31127);

(statearr_31305[(15)] = inst_31128);

(statearr_31305[(16)] = inst_31125);

(statearr_31305[(17)] = inst_31126);

return statearr_31305;
})();
var statearr_31306_31371 = state_31244__$1;
(statearr_31306_31371[(2)] = null);

(statearr_31306_31371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (14))){
var state_31244__$1 = state_31244;
var statearr_31307_31372 = state_31244__$1;
(statearr_31307_31372[(2)] = null);

(statearr_31307_31372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (45))){
var inst_31234 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31308_31373 = state_31244__$1;
(statearr_31308_31373[(2)] = inst_31234);

(statearr_31308_31373[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (26))){
var inst_31176 = (state_31244[(29)]);
var inst_31230 = (state_31244[(2)]);
var inst_31231 = cljs.core.seq.call(null,inst_31176);
var state_31244__$1 = (function (){var statearr_31309 = state_31244;
(statearr_31309[(31)] = inst_31230);

return statearr_31309;
})();
if(inst_31231){
var statearr_31310_31374 = state_31244__$1;
(statearr_31310_31374[(1)] = (42));

} else {
var statearr_31311_31375 = state_31244__$1;
(statearr_31311_31375[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (16))){
var inst_31145 = (state_31244[(7)]);
var inst_31147 = cljs.core.chunked_seq_QMARK_.call(null,inst_31145);
var state_31244__$1 = state_31244;
if(inst_31147){
var statearr_31312_31376 = state_31244__$1;
(statearr_31312_31376[(1)] = (19));

} else {
var statearr_31313_31377 = state_31244__$1;
(statearr_31313_31377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (38))){
var inst_31223 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31314_31378 = state_31244__$1;
(statearr_31314_31378[(2)] = inst_31223);

(statearr_31314_31378[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (30))){
var state_31244__$1 = state_31244;
var statearr_31315_31379 = state_31244__$1;
(statearr_31315_31379[(2)] = null);

(statearr_31315_31379[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (10))){
var inst_31128 = (state_31244[(15)]);
var inst_31126 = (state_31244[(17)]);
var inst_31134 = cljs.core._nth.call(null,inst_31126,inst_31128);
var inst_31135 = cljs.core.nth.call(null,inst_31134,(0),null);
var inst_31136 = cljs.core.nth.call(null,inst_31134,(1),null);
var state_31244__$1 = (function (){var statearr_31316 = state_31244;
(statearr_31316[(26)] = inst_31135);

return statearr_31316;
})();
if(cljs.core.truth_(inst_31136)){
var statearr_31317_31380 = state_31244__$1;
(statearr_31317_31380[(1)] = (13));

} else {
var statearr_31318_31381 = state_31244__$1;
(statearr_31318_31381[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (18))){
var inst_31169 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31319_31382 = state_31244__$1;
(statearr_31319_31382[(2)] = inst_31169);

(statearr_31319_31382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (42))){
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31244__$1,(45),dchan);
} else {
if((state_val_31245 === (37))){
var inst_31212 = (state_31244[(23)]);
var inst_31203 = (state_31244[(25)]);
var inst_31116 = (state_31244[(10)]);
var inst_31212__$1 = cljs.core.first.call(null,inst_31203);
var inst_31213 = cljs.core.async.put_BANG_.call(null,inst_31212__$1,inst_31116,done);
var state_31244__$1 = (function (){var statearr_31320 = state_31244;
(statearr_31320[(23)] = inst_31212__$1);

return statearr_31320;
})();
if(cljs.core.truth_(inst_31213)){
var statearr_31321_31383 = state_31244__$1;
(statearr_31321_31383[(1)] = (39));

} else {
var statearr_31322_31384 = state_31244__$1;
(statearr_31322_31384[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (8))){
var inst_31127 = (state_31244[(14)]);
var inst_31128 = (state_31244[(15)]);
var inst_31130 = (inst_31128 < inst_31127);
var inst_31131 = inst_31130;
var state_31244__$1 = state_31244;
if(cljs.core.truth_(inst_31131)){
var statearr_31323_31385 = state_31244__$1;
(statearr_31323_31385[(1)] = (10));

} else {
var statearr_31324_31386 = state_31244__$1;
(statearr_31324_31386[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__20234__auto___31332,cs,m,dchan,dctr,done))
;
return ((function (switch__20169__auto__,c__20234__auto___31332,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20170__auto__ = null;
var cljs$core$async$mult_$_state_machine__20170__auto____0 = (function (){
var statearr_31328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31328[(0)] = cljs$core$async$mult_$_state_machine__20170__auto__);

(statearr_31328[(1)] = (1));

return statearr_31328;
});
var cljs$core$async$mult_$_state_machine__20170__auto____1 = (function (state_31244){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_31244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e31329){if((e31329 instanceof Object)){
var ex__20173__auto__ = e31329;
var statearr_31330_31387 = state_31244;
(statearr_31330_31387[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31388 = state_31244;
state_31244 = G__31388;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20170__auto__ = function(state_31244){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20170__auto____1.call(this,state_31244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20170__auto____0;
cljs$core$async$mult_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20170__auto____1;
return cljs$core$async$mult_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___31332,cs,m,dchan,dctr,done))
})();
var state__20236__auto__ = (function (){var statearr_31331 = f__20235__auto__.call(null);
(statearr_31331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___31332);

return statearr_31331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___31332,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args31389 = [];
var len__17521__auto___31392 = arguments.length;
var i__17522__auto___31393 = (0);
while(true){
if((i__17522__auto___31393 < len__17521__auto___31392)){
args31389.push((arguments[i__17522__auto___31393]));

var G__31394 = (i__17522__auto___31393 + (1));
i__17522__auto___31393 = G__31394;
continue;
} else {
}
break;
}

var G__31391 = args31389.length;
switch (G__31391) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31389.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,ch);
} else {
var m__17119__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,ch);
} else {
var m__17119__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m);
} else {
var m__17119__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,state_map);
} else {
var m__17119__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,m,mode);
} else {
var m__17119__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17528__auto__ = [];
var len__17521__auto___31408 = arguments.length;
var i__17522__auto___31409 = (0);
while(true){
if((i__17522__auto___31409 < len__17521__auto___31408)){
args__17528__auto__.push((arguments[i__17522__auto___31409]));

var G__31410 = (i__17522__auto___31409 + (1));
i__17522__auto___31409 = G__31410;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((3) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17529__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31402){
var map__31403 = p__31402;
var map__31403__$1 = ((((!((map__31403 == null)))?((((map__31403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31403):map__31403);
var opts = map__31403__$1;
var statearr_31405_31411 = state;
(statearr_31405_31411[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31403,map__31403__$1,opts){
return (function (val){
var statearr_31406_31412 = state;
(statearr_31406_31412[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31403,map__31403__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31407_31413 = state;
(statearr_31407_31413[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31398){
var G__31399 = cljs.core.first.call(null,seq31398);
var seq31398__$1 = cljs.core.next.call(null,seq31398);
var G__31400 = cljs.core.first.call(null,seq31398__$1);
var seq31398__$2 = cljs.core.next.call(null,seq31398__$1);
var G__31401 = cljs.core.first.call(null,seq31398__$2);
var seq31398__$3 = cljs.core.next.call(null,seq31398__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31399,G__31400,G__31401,seq31398__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t31577 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31577 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31578){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31578 = meta31578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31579,meta31578__$1){
var self__ = this;
var _31579__$1 = this;
return (new cljs.core.async.t31577(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31578__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31579){
var self__ = this;
var _31579__$1 = this;
return self__.meta31578;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31577.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31577.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31577.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t31577.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31577.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31577.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31577.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31577.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31577.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31578","meta31578",978635925,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t31577.cljs$lang$type = true;

cljs.core.async.t31577.cljs$lang$ctorStr = "cljs.core.async/t31577";

cljs.core.async.t31577.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t31577");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t31577 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t31577(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31578){
return (new cljs.core.async.t31577(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31578));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t31577(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20234__auto___31740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___31740,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___31740,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31677){
var state_val_31678 = (state_31677[(1)]);
if((state_val_31678 === (7))){
var inst_31595 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
var statearr_31679_31741 = state_31677__$1;
(statearr_31679_31741[(2)] = inst_31595);

(statearr_31679_31741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (20))){
var inst_31607 = (state_31677[(7)]);
var state_31677__$1 = state_31677;
var statearr_31680_31742 = state_31677__$1;
(statearr_31680_31742[(2)] = inst_31607);

(statearr_31680_31742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (27))){
var state_31677__$1 = state_31677;
var statearr_31681_31743 = state_31677__$1;
(statearr_31681_31743[(2)] = null);

(statearr_31681_31743[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (1))){
var inst_31583 = (state_31677[(8)]);
var inst_31583__$1 = calc_state.call(null);
var inst_31585 = (inst_31583__$1 == null);
var inst_31586 = cljs.core.not.call(null,inst_31585);
var state_31677__$1 = (function (){var statearr_31682 = state_31677;
(statearr_31682[(8)] = inst_31583__$1);

return statearr_31682;
})();
if(inst_31586){
var statearr_31683_31744 = state_31677__$1;
(statearr_31683_31744[(1)] = (2));

} else {
var statearr_31684_31745 = state_31677__$1;
(statearr_31684_31745[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (24))){
var inst_31630 = (state_31677[(9)]);
var inst_31637 = (state_31677[(10)]);
var inst_31651 = (state_31677[(11)]);
var inst_31651__$1 = inst_31630.call(null,inst_31637);
var state_31677__$1 = (function (){var statearr_31685 = state_31677;
(statearr_31685[(11)] = inst_31651__$1);

return statearr_31685;
})();
if(cljs.core.truth_(inst_31651__$1)){
var statearr_31686_31746 = state_31677__$1;
(statearr_31686_31746[(1)] = (29));

} else {
var statearr_31687_31747 = state_31677__$1;
(statearr_31687_31747[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (4))){
var inst_31598 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
if(cljs.core.truth_(inst_31598)){
var statearr_31688_31748 = state_31677__$1;
(statearr_31688_31748[(1)] = (8));

} else {
var statearr_31689_31749 = state_31677__$1;
(statearr_31689_31749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (15))){
var inst_31624 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
if(cljs.core.truth_(inst_31624)){
var statearr_31690_31750 = state_31677__$1;
(statearr_31690_31750[(1)] = (19));

} else {
var statearr_31691_31751 = state_31677__$1;
(statearr_31691_31751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (21))){
var inst_31629 = (state_31677[(12)]);
var inst_31629__$1 = (state_31677[(2)]);
var inst_31630 = cljs.core.get.call(null,inst_31629__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31631 = cljs.core.get.call(null,inst_31629__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31632 = cljs.core.get.call(null,inst_31629__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31677__$1 = (function (){var statearr_31692 = state_31677;
(statearr_31692[(13)] = inst_31631);

(statearr_31692[(9)] = inst_31630);

(statearr_31692[(12)] = inst_31629__$1);

return statearr_31692;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31677__$1,(22),inst_31632);
} else {
if((state_val_31678 === (31))){
var inst_31659 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
if(cljs.core.truth_(inst_31659)){
var statearr_31693_31752 = state_31677__$1;
(statearr_31693_31752[(1)] = (32));

} else {
var statearr_31694_31753 = state_31677__$1;
(statearr_31694_31753[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (32))){
var inst_31636 = (state_31677[(14)]);
var state_31677__$1 = state_31677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31677__$1,(35),out,inst_31636);
} else {
if((state_val_31678 === (33))){
var inst_31629 = (state_31677[(12)]);
var inst_31607 = inst_31629;
var state_31677__$1 = (function (){var statearr_31695 = state_31677;
(statearr_31695[(7)] = inst_31607);

return statearr_31695;
})();
var statearr_31696_31754 = state_31677__$1;
(statearr_31696_31754[(2)] = null);

(statearr_31696_31754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (13))){
var inst_31607 = (state_31677[(7)]);
var inst_31614 = inst_31607.cljs$lang$protocol_mask$partition0$;
var inst_31615 = (inst_31614 & (64));
var inst_31616 = inst_31607.cljs$core$ISeq$;
var inst_31617 = (inst_31615) || (inst_31616);
var state_31677__$1 = state_31677;
if(cljs.core.truth_(inst_31617)){
var statearr_31697_31755 = state_31677__$1;
(statearr_31697_31755[(1)] = (16));

} else {
var statearr_31698_31756 = state_31677__$1;
(statearr_31698_31756[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (22))){
var inst_31636 = (state_31677[(14)]);
var inst_31637 = (state_31677[(10)]);
var inst_31635 = (state_31677[(2)]);
var inst_31636__$1 = cljs.core.nth.call(null,inst_31635,(0),null);
var inst_31637__$1 = cljs.core.nth.call(null,inst_31635,(1),null);
var inst_31638 = (inst_31636__$1 == null);
var inst_31639 = cljs.core._EQ_.call(null,inst_31637__$1,change);
var inst_31640 = (inst_31638) || (inst_31639);
var state_31677__$1 = (function (){var statearr_31699 = state_31677;
(statearr_31699[(14)] = inst_31636__$1);

(statearr_31699[(10)] = inst_31637__$1);

return statearr_31699;
})();
if(cljs.core.truth_(inst_31640)){
var statearr_31700_31757 = state_31677__$1;
(statearr_31700_31757[(1)] = (23));

} else {
var statearr_31701_31758 = state_31677__$1;
(statearr_31701_31758[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (36))){
var inst_31629 = (state_31677[(12)]);
var inst_31607 = inst_31629;
var state_31677__$1 = (function (){var statearr_31702 = state_31677;
(statearr_31702[(7)] = inst_31607);

return statearr_31702;
})();
var statearr_31703_31759 = state_31677__$1;
(statearr_31703_31759[(2)] = null);

(statearr_31703_31759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (29))){
var inst_31651 = (state_31677[(11)]);
var state_31677__$1 = state_31677;
var statearr_31704_31760 = state_31677__$1;
(statearr_31704_31760[(2)] = inst_31651);

(statearr_31704_31760[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (6))){
var state_31677__$1 = state_31677;
var statearr_31705_31761 = state_31677__$1;
(statearr_31705_31761[(2)] = false);

(statearr_31705_31761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (28))){
var inst_31647 = (state_31677[(2)]);
var inst_31648 = calc_state.call(null);
var inst_31607 = inst_31648;
var state_31677__$1 = (function (){var statearr_31706 = state_31677;
(statearr_31706[(7)] = inst_31607);

(statearr_31706[(15)] = inst_31647);

return statearr_31706;
})();
var statearr_31707_31762 = state_31677__$1;
(statearr_31707_31762[(2)] = null);

(statearr_31707_31762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (25))){
var inst_31673 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
var statearr_31708_31763 = state_31677__$1;
(statearr_31708_31763[(2)] = inst_31673);

(statearr_31708_31763[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (34))){
var inst_31671 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
var statearr_31709_31764 = state_31677__$1;
(statearr_31709_31764[(2)] = inst_31671);

(statearr_31709_31764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (17))){
var state_31677__$1 = state_31677;
var statearr_31710_31765 = state_31677__$1;
(statearr_31710_31765[(2)] = false);

(statearr_31710_31765[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (3))){
var state_31677__$1 = state_31677;
var statearr_31711_31766 = state_31677__$1;
(statearr_31711_31766[(2)] = false);

(statearr_31711_31766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (12))){
var inst_31675 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31677__$1,inst_31675);
} else {
if((state_val_31678 === (2))){
var inst_31583 = (state_31677[(8)]);
var inst_31588 = inst_31583.cljs$lang$protocol_mask$partition0$;
var inst_31589 = (inst_31588 & (64));
var inst_31590 = inst_31583.cljs$core$ISeq$;
var inst_31591 = (inst_31589) || (inst_31590);
var state_31677__$1 = state_31677;
if(cljs.core.truth_(inst_31591)){
var statearr_31712_31767 = state_31677__$1;
(statearr_31712_31767[(1)] = (5));

} else {
var statearr_31713_31768 = state_31677__$1;
(statearr_31713_31768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (23))){
var inst_31636 = (state_31677[(14)]);
var inst_31642 = (inst_31636 == null);
var state_31677__$1 = state_31677;
if(cljs.core.truth_(inst_31642)){
var statearr_31714_31769 = state_31677__$1;
(statearr_31714_31769[(1)] = (26));

} else {
var statearr_31715_31770 = state_31677__$1;
(statearr_31715_31770[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (35))){
var inst_31662 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
if(cljs.core.truth_(inst_31662)){
var statearr_31716_31771 = state_31677__$1;
(statearr_31716_31771[(1)] = (36));

} else {
var statearr_31717_31772 = state_31677__$1;
(statearr_31717_31772[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (19))){
var inst_31607 = (state_31677[(7)]);
var inst_31626 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31607);
var state_31677__$1 = state_31677;
var statearr_31718_31773 = state_31677__$1;
(statearr_31718_31773[(2)] = inst_31626);

(statearr_31718_31773[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (11))){
var inst_31607 = (state_31677[(7)]);
var inst_31611 = (inst_31607 == null);
var inst_31612 = cljs.core.not.call(null,inst_31611);
var state_31677__$1 = state_31677;
if(inst_31612){
var statearr_31719_31774 = state_31677__$1;
(statearr_31719_31774[(1)] = (13));

} else {
var statearr_31720_31775 = state_31677__$1;
(statearr_31720_31775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (9))){
var inst_31583 = (state_31677[(8)]);
var state_31677__$1 = state_31677;
var statearr_31721_31776 = state_31677__$1;
(statearr_31721_31776[(2)] = inst_31583);

(statearr_31721_31776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (5))){
var state_31677__$1 = state_31677;
var statearr_31722_31777 = state_31677__$1;
(statearr_31722_31777[(2)] = true);

(statearr_31722_31777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (14))){
var state_31677__$1 = state_31677;
var statearr_31723_31778 = state_31677__$1;
(statearr_31723_31778[(2)] = false);

(statearr_31723_31778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (26))){
var inst_31637 = (state_31677[(10)]);
var inst_31644 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31637);
var state_31677__$1 = state_31677;
var statearr_31724_31779 = state_31677__$1;
(statearr_31724_31779[(2)] = inst_31644);

(statearr_31724_31779[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (16))){
var state_31677__$1 = state_31677;
var statearr_31725_31780 = state_31677__$1;
(statearr_31725_31780[(2)] = true);

(statearr_31725_31780[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (38))){
var inst_31667 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
var statearr_31726_31781 = state_31677__$1;
(statearr_31726_31781[(2)] = inst_31667);

(statearr_31726_31781[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (30))){
var inst_31631 = (state_31677[(13)]);
var inst_31630 = (state_31677[(9)]);
var inst_31637 = (state_31677[(10)]);
var inst_31654 = cljs.core.empty_QMARK_.call(null,inst_31630);
var inst_31655 = inst_31631.call(null,inst_31637);
var inst_31656 = cljs.core.not.call(null,inst_31655);
var inst_31657 = (inst_31654) && (inst_31656);
var state_31677__$1 = state_31677;
var statearr_31727_31782 = state_31677__$1;
(statearr_31727_31782[(2)] = inst_31657);

(statearr_31727_31782[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (10))){
var inst_31583 = (state_31677[(8)]);
var inst_31603 = (state_31677[(2)]);
var inst_31604 = cljs.core.get.call(null,inst_31603,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31605 = cljs.core.get.call(null,inst_31603,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31606 = cljs.core.get.call(null,inst_31603,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31607 = inst_31583;
var state_31677__$1 = (function (){var statearr_31728 = state_31677;
(statearr_31728[(16)] = inst_31606);

(statearr_31728[(17)] = inst_31605);

(statearr_31728[(7)] = inst_31607);

(statearr_31728[(18)] = inst_31604);

return statearr_31728;
})();
var statearr_31729_31783 = state_31677__$1;
(statearr_31729_31783[(2)] = null);

(statearr_31729_31783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (18))){
var inst_31621 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
var statearr_31730_31784 = state_31677__$1;
(statearr_31730_31784[(2)] = inst_31621);

(statearr_31730_31784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (37))){
var state_31677__$1 = state_31677;
var statearr_31731_31785 = state_31677__$1;
(statearr_31731_31785[(2)] = null);

(statearr_31731_31785[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (8))){
var inst_31583 = (state_31677[(8)]);
var inst_31600 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31583);
var state_31677__$1 = state_31677;
var statearr_31732_31786 = state_31677__$1;
(statearr_31732_31786[(2)] = inst_31600);

(statearr_31732_31786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
});})(c__20234__auto___31740,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20169__auto__,c__20234__auto___31740,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20170__auto__ = null;
var cljs$core$async$mix_$_state_machine__20170__auto____0 = (function (){
var statearr_31736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31736[(0)] = cljs$core$async$mix_$_state_machine__20170__auto__);

(statearr_31736[(1)] = (1));

return statearr_31736;
});
var cljs$core$async$mix_$_state_machine__20170__auto____1 = (function (state_31677){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_31677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e31737){if((e31737 instanceof Object)){
var ex__20173__auto__ = e31737;
var statearr_31738_31787 = state_31677;
(statearr_31738_31787[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31788 = state_31677;
state_31677 = G__31788;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20170__auto__ = function(state_31677){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20170__auto____1.call(this,state_31677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20170__auto____0;
cljs$core$async$mix_$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20170__auto____1;
return cljs$core$async$mix_$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___31740,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20236__auto__ = (function (){var statearr_31739 = f__20235__auto__.call(null);
(statearr_31739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___31740);

return statearr_31739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___31740,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17118__auto__ = (((p == null))?null:p);
var m__17119__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17119__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17118__auto__ = (((p == null))?null:p);
var m__17119__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,p,v,ch);
} else {
var m__17119__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args31791 = [];
var len__17521__auto___31794 = arguments.length;
var i__17522__auto___31795 = (0);
while(true){
if((i__17522__auto___31795 < len__17521__auto___31794)){
args31791.push((arguments[i__17522__auto___31795]));

var G__31796 = (i__17522__auto___31795 + (1));
i__17522__auto___31795 = G__31796;
continue;
} else {
}
break;
}

var G__31793 = args31791.length;
switch (G__31793) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31791.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17118__auto__ = (((p == null))?null:p);
var m__17119__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,p);
} else {
var m__17119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17118__auto__ = (((p == null))?null:p);
var m__17119__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return m__17119__auto__.call(null,p,v);
} else {
var m__17119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return m__17119__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args31799 = [];
var len__17521__auto___31924 = arguments.length;
var i__17522__auto___31925 = (0);
while(true){
if((i__17522__auto___31925 < len__17521__auto___31924)){
args31799.push((arguments[i__17522__auto___31925]));

var G__31926 = (i__17522__auto___31925 + (1));
i__17522__auto___31925 = G__31926;
continue;
} else {
}
break;
}

var G__31801 = args31799.length;
switch (G__31801) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31799.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16482__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16482__auto__,mults){
return (function (p1__31798_SHARP_){
if(cljs.core.truth_(p1__31798_SHARP_.call(null,topic))){
return p1__31798_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31798_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16482__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t31802 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31802 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31803){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31803 = meta31803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31804,meta31803__$1){
var self__ = this;
var _31804__$1 = this;
return (new cljs.core.async.t31802(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31803__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t31802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31804){
var self__ = this;
var _31804__$1 = this;
return self__.meta31803;
});})(mults,ensure_mult))
;

cljs.core.async.t31802.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t31802.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t31802.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t31802.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t31802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t31802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t31802.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31803","meta31803",-2035584216,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t31802.cljs$lang$type = true;

cljs.core.async.t31802.cljs$lang$ctorStr = "cljs.core.async/t31802";

cljs.core.async.t31802.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t31802");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t31802 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t31802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31803){
return (new cljs.core.async.t31802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31803));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t31802(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20234__auto___31928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___31928,mults,ensure_mult,p){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___31928,mults,ensure_mult,p){
return (function (state_31876){
var state_val_31877 = (state_31876[(1)]);
if((state_val_31877 === (7))){
var inst_31872 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
var statearr_31878_31929 = state_31876__$1;
(statearr_31878_31929[(2)] = inst_31872);

(statearr_31878_31929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (20))){
var state_31876__$1 = state_31876;
var statearr_31879_31930 = state_31876__$1;
(statearr_31879_31930[(2)] = null);

(statearr_31879_31930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (1))){
var state_31876__$1 = state_31876;
var statearr_31880_31931 = state_31876__$1;
(statearr_31880_31931[(2)] = null);

(statearr_31880_31931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (24))){
var inst_31855 = (state_31876[(7)]);
var inst_31864 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31855);
var state_31876__$1 = state_31876;
var statearr_31881_31932 = state_31876__$1;
(statearr_31881_31932[(2)] = inst_31864);

(statearr_31881_31932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (4))){
var inst_31807 = (state_31876[(8)]);
var inst_31807__$1 = (state_31876[(2)]);
var inst_31808 = (inst_31807__$1 == null);
var state_31876__$1 = (function (){var statearr_31882 = state_31876;
(statearr_31882[(8)] = inst_31807__$1);

return statearr_31882;
})();
if(cljs.core.truth_(inst_31808)){
var statearr_31883_31933 = state_31876__$1;
(statearr_31883_31933[(1)] = (5));

} else {
var statearr_31884_31934 = state_31876__$1;
(statearr_31884_31934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (15))){
var inst_31849 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
var statearr_31885_31935 = state_31876__$1;
(statearr_31885_31935[(2)] = inst_31849);

(statearr_31885_31935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (21))){
var inst_31869 = (state_31876[(2)]);
var state_31876__$1 = (function (){var statearr_31886 = state_31876;
(statearr_31886[(9)] = inst_31869);

return statearr_31886;
})();
var statearr_31887_31936 = state_31876__$1;
(statearr_31887_31936[(2)] = null);

(statearr_31887_31936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (13))){
var inst_31831 = (state_31876[(10)]);
var inst_31833 = cljs.core.chunked_seq_QMARK_.call(null,inst_31831);
var state_31876__$1 = state_31876;
if(inst_31833){
var statearr_31888_31937 = state_31876__$1;
(statearr_31888_31937[(1)] = (16));

} else {
var statearr_31889_31938 = state_31876__$1;
(statearr_31889_31938[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (22))){
var inst_31861 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
if(cljs.core.truth_(inst_31861)){
var statearr_31890_31939 = state_31876__$1;
(statearr_31890_31939[(1)] = (23));

} else {
var statearr_31891_31940 = state_31876__$1;
(statearr_31891_31940[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (6))){
var inst_31855 = (state_31876[(7)]);
var inst_31857 = (state_31876[(11)]);
var inst_31807 = (state_31876[(8)]);
var inst_31855__$1 = topic_fn.call(null,inst_31807);
var inst_31856 = cljs.core.deref.call(null,mults);
var inst_31857__$1 = cljs.core.get.call(null,inst_31856,inst_31855__$1);
var state_31876__$1 = (function (){var statearr_31892 = state_31876;
(statearr_31892[(7)] = inst_31855__$1);

(statearr_31892[(11)] = inst_31857__$1);

return statearr_31892;
})();
if(cljs.core.truth_(inst_31857__$1)){
var statearr_31893_31941 = state_31876__$1;
(statearr_31893_31941[(1)] = (19));

} else {
var statearr_31894_31942 = state_31876__$1;
(statearr_31894_31942[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (25))){
var inst_31866 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
var statearr_31895_31943 = state_31876__$1;
(statearr_31895_31943[(2)] = inst_31866);

(statearr_31895_31943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (17))){
var inst_31831 = (state_31876[(10)]);
var inst_31840 = cljs.core.first.call(null,inst_31831);
var inst_31841 = cljs.core.async.muxch_STAR_.call(null,inst_31840);
var inst_31842 = cljs.core.async.close_BANG_.call(null,inst_31841);
var inst_31843 = cljs.core.next.call(null,inst_31831);
var inst_31817 = inst_31843;
var inst_31818 = null;
var inst_31819 = (0);
var inst_31820 = (0);
var state_31876__$1 = (function (){var statearr_31896 = state_31876;
(statearr_31896[(12)] = inst_31842);

(statearr_31896[(13)] = inst_31820);

(statearr_31896[(14)] = inst_31818);

(statearr_31896[(15)] = inst_31817);

(statearr_31896[(16)] = inst_31819);

return statearr_31896;
})();
var statearr_31897_31944 = state_31876__$1;
(statearr_31897_31944[(2)] = null);

(statearr_31897_31944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (3))){
var inst_31874 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31876__$1,inst_31874);
} else {
if((state_val_31877 === (12))){
var inst_31851 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
var statearr_31898_31945 = state_31876__$1;
(statearr_31898_31945[(2)] = inst_31851);

(statearr_31898_31945[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (2))){
var state_31876__$1 = state_31876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31876__$1,(4),ch);
} else {
if((state_val_31877 === (23))){
var state_31876__$1 = state_31876;
var statearr_31899_31946 = state_31876__$1;
(statearr_31899_31946[(2)] = null);

(statearr_31899_31946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (19))){
var inst_31857 = (state_31876[(11)]);
var inst_31807 = (state_31876[(8)]);
var inst_31859 = cljs.core.async.muxch_STAR_.call(null,inst_31857);
var state_31876__$1 = state_31876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31876__$1,(22),inst_31859,inst_31807);
} else {
if((state_val_31877 === (11))){
var inst_31817 = (state_31876[(15)]);
var inst_31831 = (state_31876[(10)]);
var inst_31831__$1 = cljs.core.seq.call(null,inst_31817);
var state_31876__$1 = (function (){var statearr_31900 = state_31876;
(statearr_31900[(10)] = inst_31831__$1);

return statearr_31900;
})();
if(inst_31831__$1){
var statearr_31901_31947 = state_31876__$1;
(statearr_31901_31947[(1)] = (13));

} else {
var statearr_31902_31948 = state_31876__$1;
(statearr_31902_31948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (9))){
var inst_31853 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
var statearr_31903_31949 = state_31876__$1;
(statearr_31903_31949[(2)] = inst_31853);

(statearr_31903_31949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (5))){
var inst_31814 = cljs.core.deref.call(null,mults);
var inst_31815 = cljs.core.vals.call(null,inst_31814);
var inst_31816 = cljs.core.seq.call(null,inst_31815);
var inst_31817 = inst_31816;
var inst_31818 = null;
var inst_31819 = (0);
var inst_31820 = (0);
var state_31876__$1 = (function (){var statearr_31904 = state_31876;
(statearr_31904[(13)] = inst_31820);

(statearr_31904[(14)] = inst_31818);

(statearr_31904[(15)] = inst_31817);

(statearr_31904[(16)] = inst_31819);

return statearr_31904;
})();
var statearr_31905_31950 = state_31876__$1;
(statearr_31905_31950[(2)] = null);

(statearr_31905_31950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (14))){
var state_31876__$1 = state_31876;
var statearr_31909_31951 = state_31876__$1;
(statearr_31909_31951[(2)] = null);

(statearr_31909_31951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (16))){
var inst_31831 = (state_31876[(10)]);
var inst_31835 = cljs.core.chunk_first.call(null,inst_31831);
var inst_31836 = cljs.core.chunk_rest.call(null,inst_31831);
var inst_31837 = cljs.core.count.call(null,inst_31835);
var inst_31817 = inst_31836;
var inst_31818 = inst_31835;
var inst_31819 = inst_31837;
var inst_31820 = (0);
var state_31876__$1 = (function (){var statearr_31910 = state_31876;
(statearr_31910[(13)] = inst_31820);

(statearr_31910[(14)] = inst_31818);

(statearr_31910[(15)] = inst_31817);

(statearr_31910[(16)] = inst_31819);

return statearr_31910;
})();
var statearr_31911_31952 = state_31876__$1;
(statearr_31911_31952[(2)] = null);

(statearr_31911_31952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (10))){
var inst_31820 = (state_31876[(13)]);
var inst_31818 = (state_31876[(14)]);
var inst_31817 = (state_31876[(15)]);
var inst_31819 = (state_31876[(16)]);
var inst_31825 = cljs.core._nth.call(null,inst_31818,inst_31820);
var inst_31826 = cljs.core.async.muxch_STAR_.call(null,inst_31825);
var inst_31827 = cljs.core.async.close_BANG_.call(null,inst_31826);
var inst_31828 = (inst_31820 + (1));
var tmp31906 = inst_31818;
var tmp31907 = inst_31817;
var tmp31908 = inst_31819;
var inst_31817__$1 = tmp31907;
var inst_31818__$1 = tmp31906;
var inst_31819__$1 = tmp31908;
var inst_31820__$1 = inst_31828;
var state_31876__$1 = (function (){var statearr_31912 = state_31876;
(statearr_31912[(13)] = inst_31820__$1);

(statearr_31912[(14)] = inst_31818__$1);

(statearr_31912[(15)] = inst_31817__$1);

(statearr_31912[(16)] = inst_31819__$1);

(statearr_31912[(17)] = inst_31827);

return statearr_31912;
})();
var statearr_31913_31953 = state_31876__$1;
(statearr_31913_31953[(2)] = null);

(statearr_31913_31953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (18))){
var inst_31846 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
var statearr_31914_31954 = state_31876__$1;
(statearr_31914_31954[(2)] = inst_31846);

(statearr_31914_31954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (8))){
var inst_31820 = (state_31876[(13)]);
var inst_31819 = (state_31876[(16)]);
var inst_31822 = (inst_31820 < inst_31819);
var inst_31823 = inst_31822;
var state_31876__$1 = state_31876;
if(cljs.core.truth_(inst_31823)){
var statearr_31915_31955 = state_31876__$1;
(statearr_31915_31955[(1)] = (10));

} else {
var statearr_31916_31956 = state_31876__$1;
(statearr_31916_31956[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__20234__auto___31928,mults,ensure_mult,p))
;
return ((function (switch__20169__auto__,c__20234__auto___31928,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20170__auto__ = null;
var cljs$core$async$state_machine__20170__auto____0 = (function (){
var statearr_31920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31920[(0)] = cljs$core$async$state_machine__20170__auto__);

(statearr_31920[(1)] = (1));

return statearr_31920;
});
var cljs$core$async$state_machine__20170__auto____1 = (function (state_31876){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_31876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e31921){if((e31921 instanceof Object)){
var ex__20173__auto__ = e31921;
var statearr_31922_31957 = state_31876;
(statearr_31922_31957[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31958 = state_31876;
state_31876 = G__31958;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$state_machine__20170__auto__ = function(state_31876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20170__auto____1.call(this,state_31876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20170__auto____0;
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20170__auto____1;
return cljs$core$async$state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___31928,mults,ensure_mult,p))
})();
var state__20236__auto__ = (function (){var statearr_31923 = f__20235__auto__.call(null);
(statearr_31923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___31928);

return statearr_31923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___31928,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args31959 = [];
var len__17521__auto___31962 = arguments.length;
var i__17522__auto___31963 = (0);
while(true){
if((i__17522__auto___31963 < len__17521__auto___31962)){
args31959.push((arguments[i__17522__auto___31963]));

var G__31964 = (i__17522__auto___31963 + (1));
i__17522__auto___31963 = G__31964;
continue;
} else {
}
break;
}

var G__31961 = args31959.length;
switch (G__31961) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31959.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args31966 = [];
var len__17521__auto___31969 = arguments.length;
var i__17522__auto___31970 = (0);
while(true){
if((i__17522__auto___31970 < len__17521__auto___31969)){
args31966.push((arguments[i__17522__auto___31970]));

var G__31971 = (i__17522__auto___31970 + (1));
i__17522__auto___31970 = G__31971;
continue;
} else {
}
break;
}

var G__31968 = args31966.length;
switch (G__31968) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31966.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args31973 = [];
var len__17521__auto___32044 = arguments.length;
var i__17522__auto___32045 = (0);
while(true){
if((i__17522__auto___32045 < len__17521__auto___32044)){
args31973.push((arguments[i__17522__auto___32045]));

var G__32046 = (i__17522__auto___32045 + (1));
i__17522__auto___32045 = G__32046;
continue;
} else {
}
break;
}

var G__31975 = args31973.length;
switch (G__31975) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31973.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20234__auto___32048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___32048,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___32048,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32014){
var state_val_32015 = (state_32014[(1)]);
if((state_val_32015 === (7))){
var state_32014__$1 = state_32014;
var statearr_32016_32049 = state_32014__$1;
(statearr_32016_32049[(2)] = null);

(statearr_32016_32049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (1))){
var state_32014__$1 = state_32014;
var statearr_32017_32050 = state_32014__$1;
(statearr_32017_32050[(2)] = null);

(statearr_32017_32050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (4))){
var inst_31978 = (state_32014[(7)]);
var inst_31980 = (inst_31978 < cnt);
var state_32014__$1 = state_32014;
if(cljs.core.truth_(inst_31980)){
var statearr_32018_32051 = state_32014__$1;
(statearr_32018_32051[(1)] = (6));

} else {
var statearr_32019_32052 = state_32014__$1;
(statearr_32019_32052[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (15))){
var inst_32010 = (state_32014[(2)]);
var state_32014__$1 = state_32014;
var statearr_32020_32053 = state_32014__$1;
(statearr_32020_32053[(2)] = inst_32010);

(statearr_32020_32053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (13))){
var inst_32003 = cljs.core.async.close_BANG_.call(null,out);
var state_32014__$1 = state_32014;
var statearr_32021_32054 = state_32014__$1;
(statearr_32021_32054[(2)] = inst_32003);

(statearr_32021_32054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (6))){
var state_32014__$1 = state_32014;
var statearr_32022_32055 = state_32014__$1;
(statearr_32022_32055[(2)] = null);

(statearr_32022_32055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (3))){
var inst_32012 = (state_32014[(2)]);
var state_32014__$1 = state_32014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32014__$1,inst_32012);
} else {
if((state_val_32015 === (12))){
var inst_32000 = (state_32014[(8)]);
var inst_32000__$1 = (state_32014[(2)]);
var inst_32001 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32000__$1);
var state_32014__$1 = (function (){var statearr_32023 = state_32014;
(statearr_32023[(8)] = inst_32000__$1);

return statearr_32023;
})();
if(cljs.core.truth_(inst_32001)){
var statearr_32024_32056 = state_32014__$1;
(statearr_32024_32056[(1)] = (13));

} else {
var statearr_32025_32057 = state_32014__$1;
(statearr_32025_32057[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (2))){
var inst_31977 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31978 = (0);
var state_32014__$1 = (function (){var statearr_32026 = state_32014;
(statearr_32026[(9)] = inst_31977);

(statearr_32026[(7)] = inst_31978);

return statearr_32026;
})();
var statearr_32027_32058 = state_32014__$1;
(statearr_32027_32058[(2)] = null);

(statearr_32027_32058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (11))){
var inst_31978 = (state_32014[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32014,(10),Object,null,(9));
var inst_31987 = chs__$1.call(null,inst_31978);
var inst_31988 = done.call(null,inst_31978);
var inst_31989 = cljs.core.async.take_BANG_.call(null,inst_31987,inst_31988);
var state_32014__$1 = state_32014;
var statearr_32028_32059 = state_32014__$1;
(statearr_32028_32059[(2)] = inst_31989);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (9))){
var inst_31978 = (state_32014[(7)]);
var inst_31991 = (state_32014[(2)]);
var inst_31992 = (inst_31978 + (1));
var inst_31978__$1 = inst_31992;
var state_32014__$1 = (function (){var statearr_32029 = state_32014;
(statearr_32029[(10)] = inst_31991);

(statearr_32029[(7)] = inst_31978__$1);

return statearr_32029;
})();
var statearr_32030_32060 = state_32014__$1;
(statearr_32030_32060[(2)] = null);

(statearr_32030_32060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (5))){
var inst_31998 = (state_32014[(2)]);
var state_32014__$1 = (function (){var statearr_32031 = state_32014;
(statearr_32031[(11)] = inst_31998);

return statearr_32031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32014__$1,(12),dchan);
} else {
if((state_val_32015 === (14))){
var inst_32000 = (state_32014[(8)]);
var inst_32005 = cljs.core.apply.call(null,f,inst_32000);
var state_32014__$1 = state_32014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32014__$1,(16),out,inst_32005);
} else {
if((state_val_32015 === (16))){
var inst_32007 = (state_32014[(2)]);
var state_32014__$1 = (function (){var statearr_32032 = state_32014;
(statearr_32032[(12)] = inst_32007);

return statearr_32032;
})();
var statearr_32033_32061 = state_32014__$1;
(statearr_32033_32061[(2)] = null);

(statearr_32033_32061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (10))){
var inst_31982 = (state_32014[(2)]);
var inst_31983 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32014__$1 = (function (){var statearr_32034 = state_32014;
(statearr_32034[(13)] = inst_31982);

return statearr_32034;
})();
var statearr_32035_32062 = state_32014__$1;
(statearr_32035_32062[(2)] = inst_31983);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32015 === (8))){
var inst_31996 = (state_32014[(2)]);
var state_32014__$1 = state_32014;
var statearr_32036_32063 = state_32014__$1;
(statearr_32036_32063[(2)] = inst_31996);

(statearr_32036_32063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});})(c__20234__auto___32048,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20169__auto__,c__20234__auto___32048,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20170__auto__ = null;
var cljs$core$async$state_machine__20170__auto____0 = (function (){
var statearr_32040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32040[(0)] = cljs$core$async$state_machine__20170__auto__);

(statearr_32040[(1)] = (1));

return statearr_32040;
});
var cljs$core$async$state_machine__20170__auto____1 = (function (state_32014){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_32014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e32041){if((e32041 instanceof Object)){
var ex__20173__auto__ = e32041;
var statearr_32042_32064 = state_32014;
(statearr_32042_32064[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32065 = state_32014;
state_32014 = G__32065;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$state_machine__20170__auto__ = function(state_32014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20170__auto____1.call(this,state_32014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20170__auto____0;
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20170__auto____1;
return cljs$core$async$state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___32048,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20236__auto__ = (function (){var statearr_32043 = f__20235__auto__.call(null);
(statearr_32043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___32048);

return statearr_32043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___32048,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args32067 = [];
var len__17521__auto___32123 = arguments.length;
var i__17522__auto___32124 = (0);
while(true){
if((i__17522__auto___32124 < len__17521__auto___32123)){
args32067.push((arguments[i__17522__auto___32124]));

var G__32125 = (i__17522__auto___32124 + (1));
i__17522__auto___32124 = G__32125;
continue;
} else {
}
break;
}

var G__32069 = args32067.length;
switch (G__32069) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32067.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20234__auto___32127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___32127,out){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___32127,out){
return (function (state_32099){
var state_val_32100 = (state_32099[(1)]);
if((state_val_32100 === (7))){
var inst_32078 = (state_32099[(7)]);
var inst_32079 = (state_32099[(8)]);
var inst_32078__$1 = (state_32099[(2)]);
var inst_32079__$1 = cljs.core.nth.call(null,inst_32078__$1,(0),null);
var inst_32080 = cljs.core.nth.call(null,inst_32078__$1,(1),null);
var inst_32081 = (inst_32079__$1 == null);
var state_32099__$1 = (function (){var statearr_32101 = state_32099;
(statearr_32101[(7)] = inst_32078__$1);

(statearr_32101[(8)] = inst_32079__$1);

(statearr_32101[(9)] = inst_32080);

return statearr_32101;
})();
if(cljs.core.truth_(inst_32081)){
var statearr_32102_32128 = state_32099__$1;
(statearr_32102_32128[(1)] = (8));

} else {
var statearr_32103_32129 = state_32099__$1;
(statearr_32103_32129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (1))){
var inst_32070 = cljs.core.vec.call(null,chs);
var inst_32071 = inst_32070;
var state_32099__$1 = (function (){var statearr_32104 = state_32099;
(statearr_32104[(10)] = inst_32071);

return statearr_32104;
})();
var statearr_32105_32130 = state_32099__$1;
(statearr_32105_32130[(2)] = null);

(statearr_32105_32130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (4))){
var inst_32071 = (state_32099[(10)]);
var state_32099__$1 = state_32099;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32099__$1,(7),inst_32071);
} else {
if((state_val_32100 === (6))){
var inst_32095 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
var statearr_32106_32131 = state_32099__$1;
(statearr_32106_32131[(2)] = inst_32095);

(statearr_32106_32131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (3))){
var inst_32097 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32099__$1,inst_32097);
} else {
if((state_val_32100 === (2))){
var inst_32071 = (state_32099[(10)]);
var inst_32073 = cljs.core.count.call(null,inst_32071);
var inst_32074 = (inst_32073 > (0));
var state_32099__$1 = state_32099;
if(cljs.core.truth_(inst_32074)){
var statearr_32108_32132 = state_32099__$1;
(statearr_32108_32132[(1)] = (4));

} else {
var statearr_32109_32133 = state_32099__$1;
(statearr_32109_32133[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (11))){
var inst_32071 = (state_32099[(10)]);
var inst_32088 = (state_32099[(2)]);
var tmp32107 = inst_32071;
var inst_32071__$1 = tmp32107;
var state_32099__$1 = (function (){var statearr_32110 = state_32099;
(statearr_32110[(10)] = inst_32071__$1);

(statearr_32110[(11)] = inst_32088);

return statearr_32110;
})();
var statearr_32111_32134 = state_32099__$1;
(statearr_32111_32134[(2)] = null);

(statearr_32111_32134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (9))){
var inst_32079 = (state_32099[(8)]);
var state_32099__$1 = state_32099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32099__$1,(11),out,inst_32079);
} else {
if((state_val_32100 === (5))){
var inst_32093 = cljs.core.async.close_BANG_.call(null,out);
var state_32099__$1 = state_32099;
var statearr_32112_32135 = state_32099__$1;
(statearr_32112_32135[(2)] = inst_32093);

(statearr_32112_32135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (10))){
var inst_32091 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
var statearr_32113_32136 = state_32099__$1;
(statearr_32113_32136[(2)] = inst_32091);

(statearr_32113_32136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (8))){
var inst_32078 = (state_32099[(7)]);
var inst_32079 = (state_32099[(8)]);
var inst_32071 = (state_32099[(10)]);
var inst_32080 = (state_32099[(9)]);
var inst_32083 = (function (){var cs = inst_32071;
var vec__32076 = inst_32078;
var v = inst_32079;
var c = inst_32080;
return ((function (cs,vec__32076,v,c,inst_32078,inst_32079,inst_32071,inst_32080,state_val_32100,c__20234__auto___32127,out){
return (function (p1__32066_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32066_SHARP_);
});
;})(cs,vec__32076,v,c,inst_32078,inst_32079,inst_32071,inst_32080,state_val_32100,c__20234__auto___32127,out))
})();
var inst_32084 = cljs.core.filterv.call(null,inst_32083,inst_32071);
var inst_32071__$1 = inst_32084;
var state_32099__$1 = (function (){var statearr_32114 = state_32099;
(statearr_32114[(10)] = inst_32071__$1);

return statearr_32114;
})();
var statearr_32115_32137 = state_32099__$1;
(statearr_32115_32137[(2)] = null);

(statearr_32115_32137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__20234__auto___32127,out))
;
return ((function (switch__20169__auto__,c__20234__auto___32127,out){
return (function() {
var cljs$core$async$state_machine__20170__auto__ = null;
var cljs$core$async$state_machine__20170__auto____0 = (function (){
var statearr_32119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32119[(0)] = cljs$core$async$state_machine__20170__auto__);

(statearr_32119[(1)] = (1));

return statearr_32119;
});
var cljs$core$async$state_machine__20170__auto____1 = (function (state_32099){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_32099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e32120){if((e32120 instanceof Object)){
var ex__20173__auto__ = e32120;
var statearr_32121_32138 = state_32099;
(statearr_32121_32138[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32139 = state_32099;
state_32099 = G__32139;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$state_machine__20170__auto__ = function(state_32099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20170__auto____1.call(this,state_32099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20170__auto____0;
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20170__auto____1;
return cljs$core$async$state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___32127,out))
})();
var state__20236__auto__ = (function (){var statearr_32122 = f__20235__auto__.call(null);
(statearr_32122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___32127);

return statearr_32122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___32127,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args32140 = [];
var len__17521__auto___32189 = arguments.length;
var i__17522__auto___32190 = (0);
while(true){
if((i__17522__auto___32190 < len__17521__auto___32189)){
args32140.push((arguments[i__17522__auto___32190]));

var G__32191 = (i__17522__auto___32190 + (1));
i__17522__auto___32190 = G__32191;
continue;
} else {
}
break;
}

var G__32142 = args32140.length;
switch (G__32142) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32140.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20234__auto___32193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___32193,out){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___32193,out){
return (function (state_32166){
var state_val_32167 = (state_32166[(1)]);
if((state_val_32167 === (7))){
var inst_32148 = (state_32166[(7)]);
var inst_32148__$1 = (state_32166[(2)]);
var inst_32149 = (inst_32148__$1 == null);
var inst_32150 = cljs.core.not.call(null,inst_32149);
var state_32166__$1 = (function (){var statearr_32168 = state_32166;
(statearr_32168[(7)] = inst_32148__$1);

return statearr_32168;
})();
if(inst_32150){
var statearr_32169_32194 = state_32166__$1;
(statearr_32169_32194[(1)] = (8));

} else {
var statearr_32170_32195 = state_32166__$1;
(statearr_32170_32195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (1))){
var inst_32143 = (0);
var state_32166__$1 = (function (){var statearr_32171 = state_32166;
(statearr_32171[(8)] = inst_32143);

return statearr_32171;
})();
var statearr_32172_32196 = state_32166__$1;
(statearr_32172_32196[(2)] = null);

(statearr_32172_32196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (4))){
var state_32166__$1 = state_32166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32166__$1,(7),ch);
} else {
if((state_val_32167 === (6))){
var inst_32161 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
var statearr_32173_32197 = state_32166__$1;
(statearr_32173_32197[(2)] = inst_32161);

(statearr_32173_32197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (3))){
var inst_32163 = (state_32166[(2)]);
var inst_32164 = cljs.core.async.close_BANG_.call(null,out);
var state_32166__$1 = (function (){var statearr_32174 = state_32166;
(statearr_32174[(9)] = inst_32163);

return statearr_32174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32166__$1,inst_32164);
} else {
if((state_val_32167 === (2))){
var inst_32143 = (state_32166[(8)]);
var inst_32145 = (inst_32143 < n);
var state_32166__$1 = state_32166;
if(cljs.core.truth_(inst_32145)){
var statearr_32175_32198 = state_32166__$1;
(statearr_32175_32198[(1)] = (4));

} else {
var statearr_32176_32199 = state_32166__$1;
(statearr_32176_32199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (11))){
var inst_32143 = (state_32166[(8)]);
var inst_32153 = (state_32166[(2)]);
var inst_32154 = (inst_32143 + (1));
var inst_32143__$1 = inst_32154;
var state_32166__$1 = (function (){var statearr_32177 = state_32166;
(statearr_32177[(10)] = inst_32153);

(statearr_32177[(8)] = inst_32143__$1);

return statearr_32177;
})();
var statearr_32178_32200 = state_32166__$1;
(statearr_32178_32200[(2)] = null);

(statearr_32178_32200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (9))){
var state_32166__$1 = state_32166;
var statearr_32179_32201 = state_32166__$1;
(statearr_32179_32201[(2)] = null);

(statearr_32179_32201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (5))){
var state_32166__$1 = state_32166;
var statearr_32180_32202 = state_32166__$1;
(statearr_32180_32202[(2)] = null);

(statearr_32180_32202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (10))){
var inst_32158 = (state_32166[(2)]);
var state_32166__$1 = state_32166;
var statearr_32181_32203 = state_32166__$1;
(statearr_32181_32203[(2)] = inst_32158);

(statearr_32181_32203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32167 === (8))){
var inst_32148 = (state_32166[(7)]);
var state_32166__$1 = state_32166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32166__$1,(11),out,inst_32148);
} else {
return null;
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
}
});})(c__20234__auto___32193,out))
;
return ((function (switch__20169__auto__,c__20234__auto___32193,out){
return (function() {
var cljs$core$async$state_machine__20170__auto__ = null;
var cljs$core$async$state_machine__20170__auto____0 = (function (){
var statearr_32185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32185[(0)] = cljs$core$async$state_machine__20170__auto__);

(statearr_32185[(1)] = (1));

return statearr_32185;
});
var cljs$core$async$state_machine__20170__auto____1 = (function (state_32166){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_32166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e32186){if((e32186 instanceof Object)){
var ex__20173__auto__ = e32186;
var statearr_32187_32204 = state_32166;
(statearr_32187_32204[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32205 = state_32166;
state_32166 = G__32205;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$state_machine__20170__auto__ = function(state_32166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20170__auto____1.call(this,state_32166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20170__auto____0;
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20170__auto____1;
return cljs$core$async$state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___32193,out))
})();
var state__20236__auto__ = (function (){var statearr_32188 = f__20235__auto__.call(null);
(statearr_32188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___32193);

return statearr_32188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___32193,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t32213 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32213 = (function (map_LT_,f,ch,meta32214){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32214 = meta32214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32215,meta32214__$1){
var self__ = this;
var _32215__$1 = this;
return (new cljs.core.async.t32213(self__.map_LT_,self__.f,self__.ch,meta32214__$1));
});

cljs.core.async.t32213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32215){
var self__ = this;
var _32215__$1 = this;
return self__.meta32214;
});

cljs.core.async.t32213.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32213.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32213.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32213.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32213.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t32216 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32216 = (function (map_LT_,f,ch,meta32214,_,fn1,meta32217){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32214 = meta32214;
this._ = _;
this.fn1 = fn1;
this.meta32217 = meta32217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32218,meta32217__$1){
var self__ = this;
var _32218__$1 = this;
return (new cljs.core.async.t32216(self__.map_LT_,self__.f,self__.ch,self__.meta32214,self__._,self__.fn1,meta32217__$1));
});})(___$1))
;

cljs.core.async.t32216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32218){
var self__ = this;
var _32218__$1 = this;
return self__.meta32217;
});})(___$1))
;

cljs.core.async.t32216.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t32216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32206_SHARP_){
return f1.call(null,(((p1__32206_SHARP_ == null))?null:self__.f.call(null,p1__32206_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t32216.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32214","meta32214",1908496581,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t32213","cljs.core.async/t32213",-201684938,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32217","meta32217",-277366093,null)], null);
});})(___$1))
;

cljs.core.async.t32216.cljs$lang$type = true;

cljs.core.async.t32216.cljs$lang$ctorStr = "cljs.core.async/t32216";

cljs.core.async.t32216.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t32216");
});})(___$1))
;

cljs.core.async.__GT_t32216 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t32216(map_LT___$1,f__$1,ch__$1,meta32214__$1,___$2,fn1__$1,meta32217){
return (new cljs.core.async.t32216(map_LT___$1,f__$1,ch__$1,meta32214__$1,___$2,fn1__$1,meta32217));
});})(___$1))
;

}

return (new cljs.core.async.t32216(self__.map_LT_,self__.f,self__.ch,self__.meta32214,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16470__auto__ = ret;
if(cljs.core.truth_(and__16470__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16470__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t32213.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32213.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32214","meta32214",1908496581,null)], null);
});

cljs.core.async.t32213.cljs$lang$type = true;

cljs.core.async.t32213.cljs$lang$ctorStr = "cljs.core.async/t32213";

cljs.core.async.t32213.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t32213");
});

cljs.core.async.__GT_t32213 = (function cljs$core$async$map_LT__$___GT_t32213(map_LT___$1,f__$1,ch__$1,meta32214){
return (new cljs.core.async.t32213(map_LT___$1,f__$1,ch__$1,meta32214));
});

}

return (new cljs.core.async.t32213(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t32222 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32222 = (function (map_GT_,f,ch,meta32223){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32223 = meta32223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32224,meta32223__$1){
var self__ = this;
var _32224__$1 = this;
return (new cljs.core.async.t32222(self__.map_GT_,self__.f,self__.ch,meta32223__$1));
});

cljs.core.async.t32222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32224){
var self__ = this;
var _32224__$1 = this;
return self__.meta32223;
});

cljs.core.async.t32222.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32222.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32222.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t32222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32223","meta32223",1317267519,null)], null);
});

cljs.core.async.t32222.cljs$lang$type = true;

cljs.core.async.t32222.cljs$lang$ctorStr = "cljs.core.async/t32222";

cljs.core.async.t32222.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t32222");
});

cljs.core.async.__GT_t32222 = (function cljs$core$async$map_GT__$___GT_t32222(map_GT___$1,f__$1,ch__$1,meta32223){
return (new cljs.core.async.t32222(map_GT___$1,f__$1,ch__$1,meta32223));
});

}

return (new cljs.core.async.t32222(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t32228 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32228 = (function (filter_GT_,p,ch,meta32229){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32229 = meta32229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32230,meta32229__$1){
var self__ = this;
var _32230__$1 = this;
return (new cljs.core.async.t32228(self__.filter_GT_,self__.p,self__.ch,meta32229__$1));
});

cljs.core.async.t32228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32230){
var self__ = this;
var _32230__$1 = this;
return self__.meta32229;
});

cljs.core.async.t32228.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32228.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32228.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t32228.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t32228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32229","meta32229",162064575,null)], null);
});

cljs.core.async.t32228.cljs$lang$type = true;

cljs.core.async.t32228.cljs$lang$ctorStr = "cljs.core.async/t32228";

cljs.core.async.t32228.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t32228");
});

cljs.core.async.__GT_t32228 = (function cljs$core$async$filter_GT__$___GT_t32228(filter_GT___$1,p__$1,ch__$1,meta32229){
return (new cljs.core.async.t32228(filter_GT___$1,p__$1,ch__$1,meta32229));
});

}

return (new cljs.core.async.t32228(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args32231 = [];
var len__17521__auto___32275 = arguments.length;
var i__17522__auto___32276 = (0);
while(true){
if((i__17522__auto___32276 < len__17521__auto___32275)){
args32231.push((arguments[i__17522__auto___32276]));

var G__32277 = (i__17522__auto___32276 + (1));
i__17522__auto___32276 = G__32277;
continue;
} else {
}
break;
}

var G__32233 = args32231.length;
switch (G__32233) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32231.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20234__auto___32279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___32279,out){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___32279,out){
return (function (state_32254){
var state_val_32255 = (state_32254[(1)]);
if((state_val_32255 === (7))){
var inst_32250 = (state_32254[(2)]);
var state_32254__$1 = state_32254;
var statearr_32256_32280 = state_32254__$1;
(statearr_32256_32280[(2)] = inst_32250);

(statearr_32256_32280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32255 === (1))){
var state_32254__$1 = state_32254;
var statearr_32257_32281 = state_32254__$1;
(statearr_32257_32281[(2)] = null);

(statearr_32257_32281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32255 === (4))){
var inst_32236 = (state_32254[(7)]);
var inst_32236__$1 = (state_32254[(2)]);
var inst_32237 = (inst_32236__$1 == null);
var state_32254__$1 = (function (){var statearr_32258 = state_32254;
(statearr_32258[(7)] = inst_32236__$1);

return statearr_32258;
})();
if(cljs.core.truth_(inst_32237)){
var statearr_32259_32282 = state_32254__$1;
(statearr_32259_32282[(1)] = (5));

} else {
var statearr_32260_32283 = state_32254__$1;
(statearr_32260_32283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32255 === (6))){
var inst_32236 = (state_32254[(7)]);
var inst_32241 = p.call(null,inst_32236);
var state_32254__$1 = state_32254;
if(cljs.core.truth_(inst_32241)){
var statearr_32261_32284 = state_32254__$1;
(statearr_32261_32284[(1)] = (8));

} else {
var statearr_32262_32285 = state_32254__$1;
(statearr_32262_32285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32255 === (3))){
var inst_32252 = (state_32254[(2)]);
var state_32254__$1 = state_32254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32254__$1,inst_32252);
} else {
if((state_val_32255 === (2))){
var state_32254__$1 = state_32254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32254__$1,(4),ch);
} else {
if((state_val_32255 === (11))){
var inst_32244 = (state_32254[(2)]);
var state_32254__$1 = state_32254;
var statearr_32263_32286 = state_32254__$1;
(statearr_32263_32286[(2)] = inst_32244);

(statearr_32263_32286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32255 === (9))){
var state_32254__$1 = state_32254;
var statearr_32264_32287 = state_32254__$1;
(statearr_32264_32287[(2)] = null);

(statearr_32264_32287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32255 === (5))){
var inst_32239 = cljs.core.async.close_BANG_.call(null,out);
var state_32254__$1 = state_32254;
var statearr_32265_32288 = state_32254__$1;
(statearr_32265_32288[(2)] = inst_32239);

(statearr_32265_32288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32255 === (10))){
var inst_32247 = (state_32254[(2)]);
var state_32254__$1 = (function (){var statearr_32266 = state_32254;
(statearr_32266[(8)] = inst_32247);

return statearr_32266;
})();
var statearr_32267_32289 = state_32254__$1;
(statearr_32267_32289[(2)] = null);

(statearr_32267_32289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32255 === (8))){
var inst_32236 = (state_32254[(7)]);
var state_32254__$1 = state_32254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32254__$1,(11),out,inst_32236);
} else {
return null;
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
}
});})(c__20234__auto___32279,out))
;
return ((function (switch__20169__auto__,c__20234__auto___32279,out){
return (function() {
var cljs$core$async$state_machine__20170__auto__ = null;
var cljs$core$async$state_machine__20170__auto____0 = (function (){
var statearr_32271 = [null,null,null,null,null,null,null,null,null];
(statearr_32271[(0)] = cljs$core$async$state_machine__20170__auto__);

(statearr_32271[(1)] = (1));

return statearr_32271;
});
var cljs$core$async$state_machine__20170__auto____1 = (function (state_32254){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_32254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e32272){if((e32272 instanceof Object)){
var ex__20173__auto__ = e32272;
var statearr_32273_32290 = state_32254;
(statearr_32273_32290[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32291 = state_32254;
state_32254 = G__32291;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$state_machine__20170__auto__ = function(state_32254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20170__auto____1.call(this,state_32254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20170__auto____0;
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20170__auto____1;
return cljs$core$async$state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___32279,out))
})();
var state__20236__auto__ = (function (){var statearr_32274 = f__20235__auto__.call(null);
(statearr_32274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___32279);

return statearr_32274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___32279,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args32292 = [];
var len__17521__auto___32295 = arguments.length;
var i__17522__auto___32296 = (0);
while(true){
if((i__17522__auto___32296 < len__17521__auto___32295)){
args32292.push((arguments[i__17522__auto___32296]));

var G__32297 = (i__17522__auto___32296 + (1));
i__17522__auto___32296 = G__32297;
continue;
} else {
}
break;
}

var G__32294 = args32292.length;
switch (G__32294) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32292.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20234__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto__){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto__){
return (function (state_32464){
var state_val_32465 = (state_32464[(1)]);
if((state_val_32465 === (7))){
var inst_32460 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32466_32507 = state_32464__$1;
(statearr_32466_32507[(2)] = inst_32460);

(statearr_32466_32507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (20))){
var inst_32430 = (state_32464[(7)]);
var inst_32441 = (state_32464[(2)]);
var inst_32442 = cljs.core.next.call(null,inst_32430);
var inst_32416 = inst_32442;
var inst_32417 = null;
var inst_32418 = (0);
var inst_32419 = (0);
var state_32464__$1 = (function (){var statearr_32467 = state_32464;
(statearr_32467[(8)] = inst_32417);

(statearr_32467[(9)] = inst_32441);

(statearr_32467[(10)] = inst_32416);

(statearr_32467[(11)] = inst_32418);

(statearr_32467[(12)] = inst_32419);

return statearr_32467;
})();
var statearr_32468_32508 = state_32464__$1;
(statearr_32468_32508[(2)] = null);

(statearr_32468_32508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (1))){
var state_32464__$1 = state_32464;
var statearr_32469_32509 = state_32464__$1;
(statearr_32469_32509[(2)] = null);

(statearr_32469_32509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (4))){
var inst_32405 = (state_32464[(13)]);
var inst_32405__$1 = (state_32464[(2)]);
var inst_32406 = (inst_32405__$1 == null);
var state_32464__$1 = (function (){var statearr_32470 = state_32464;
(statearr_32470[(13)] = inst_32405__$1);

return statearr_32470;
})();
if(cljs.core.truth_(inst_32406)){
var statearr_32471_32510 = state_32464__$1;
(statearr_32471_32510[(1)] = (5));

} else {
var statearr_32472_32511 = state_32464__$1;
(statearr_32472_32511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (15))){
var state_32464__$1 = state_32464;
var statearr_32476_32512 = state_32464__$1;
(statearr_32476_32512[(2)] = null);

(statearr_32476_32512[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (21))){
var state_32464__$1 = state_32464;
var statearr_32477_32513 = state_32464__$1;
(statearr_32477_32513[(2)] = null);

(statearr_32477_32513[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (13))){
var inst_32417 = (state_32464[(8)]);
var inst_32416 = (state_32464[(10)]);
var inst_32418 = (state_32464[(11)]);
var inst_32419 = (state_32464[(12)]);
var inst_32426 = (state_32464[(2)]);
var inst_32427 = (inst_32419 + (1));
var tmp32473 = inst_32417;
var tmp32474 = inst_32416;
var tmp32475 = inst_32418;
var inst_32416__$1 = tmp32474;
var inst_32417__$1 = tmp32473;
var inst_32418__$1 = tmp32475;
var inst_32419__$1 = inst_32427;
var state_32464__$1 = (function (){var statearr_32478 = state_32464;
(statearr_32478[(14)] = inst_32426);

(statearr_32478[(8)] = inst_32417__$1);

(statearr_32478[(10)] = inst_32416__$1);

(statearr_32478[(11)] = inst_32418__$1);

(statearr_32478[(12)] = inst_32419__$1);

return statearr_32478;
})();
var statearr_32479_32514 = state_32464__$1;
(statearr_32479_32514[(2)] = null);

(statearr_32479_32514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (22))){
var state_32464__$1 = state_32464;
var statearr_32480_32515 = state_32464__$1;
(statearr_32480_32515[(2)] = null);

(statearr_32480_32515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (6))){
var inst_32405 = (state_32464[(13)]);
var inst_32414 = f.call(null,inst_32405);
var inst_32415 = cljs.core.seq.call(null,inst_32414);
var inst_32416 = inst_32415;
var inst_32417 = null;
var inst_32418 = (0);
var inst_32419 = (0);
var state_32464__$1 = (function (){var statearr_32481 = state_32464;
(statearr_32481[(8)] = inst_32417);

(statearr_32481[(10)] = inst_32416);

(statearr_32481[(11)] = inst_32418);

(statearr_32481[(12)] = inst_32419);

return statearr_32481;
})();
var statearr_32482_32516 = state_32464__$1;
(statearr_32482_32516[(2)] = null);

(statearr_32482_32516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (17))){
var inst_32430 = (state_32464[(7)]);
var inst_32434 = cljs.core.chunk_first.call(null,inst_32430);
var inst_32435 = cljs.core.chunk_rest.call(null,inst_32430);
var inst_32436 = cljs.core.count.call(null,inst_32434);
var inst_32416 = inst_32435;
var inst_32417 = inst_32434;
var inst_32418 = inst_32436;
var inst_32419 = (0);
var state_32464__$1 = (function (){var statearr_32483 = state_32464;
(statearr_32483[(8)] = inst_32417);

(statearr_32483[(10)] = inst_32416);

(statearr_32483[(11)] = inst_32418);

(statearr_32483[(12)] = inst_32419);

return statearr_32483;
})();
var statearr_32484_32517 = state_32464__$1;
(statearr_32484_32517[(2)] = null);

(statearr_32484_32517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (3))){
var inst_32462 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32464__$1,inst_32462);
} else {
if((state_val_32465 === (12))){
var inst_32450 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32485_32518 = state_32464__$1;
(statearr_32485_32518[(2)] = inst_32450);

(statearr_32485_32518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (2))){
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32464__$1,(4),in$);
} else {
if((state_val_32465 === (23))){
var inst_32458 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32486_32519 = state_32464__$1;
(statearr_32486_32519[(2)] = inst_32458);

(statearr_32486_32519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (19))){
var inst_32445 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32487_32520 = state_32464__$1;
(statearr_32487_32520[(2)] = inst_32445);

(statearr_32487_32520[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (11))){
var inst_32416 = (state_32464[(10)]);
var inst_32430 = (state_32464[(7)]);
var inst_32430__$1 = cljs.core.seq.call(null,inst_32416);
var state_32464__$1 = (function (){var statearr_32488 = state_32464;
(statearr_32488[(7)] = inst_32430__$1);

return statearr_32488;
})();
if(inst_32430__$1){
var statearr_32489_32521 = state_32464__$1;
(statearr_32489_32521[(1)] = (14));

} else {
var statearr_32490_32522 = state_32464__$1;
(statearr_32490_32522[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (9))){
var inst_32452 = (state_32464[(2)]);
var inst_32453 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32464__$1 = (function (){var statearr_32491 = state_32464;
(statearr_32491[(15)] = inst_32452);

return statearr_32491;
})();
if(cljs.core.truth_(inst_32453)){
var statearr_32492_32523 = state_32464__$1;
(statearr_32492_32523[(1)] = (21));

} else {
var statearr_32493_32524 = state_32464__$1;
(statearr_32493_32524[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (5))){
var inst_32408 = cljs.core.async.close_BANG_.call(null,out);
var state_32464__$1 = state_32464;
var statearr_32494_32525 = state_32464__$1;
(statearr_32494_32525[(2)] = inst_32408);

(statearr_32494_32525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (14))){
var inst_32430 = (state_32464[(7)]);
var inst_32432 = cljs.core.chunked_seq_QMARK_.call(null,inst_32430);
var state_32464__$1 = state_32464;
if(inst_32432){
var statearr_32495_32526 = state_32464__$1;
(statearr_32495_32526[(1)] = (17));

} else {
var statearr_32496_32527 = state_32464__$1;
(statearr_32496_32527[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (16))){
var inst_32448 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32497_32528 = state_32464__$1;
(statearr_32497_32528[(2)] = inst_32448);

(statearr_32497_32528[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (10))){
var inst_32417 = (state_32464[(8)]);
var inst_32419 = (state_32464[(12)]);
var inst_32424 = cljs.core._nth.call(null,inst_32417,inst_32419);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32464__$1,(13),out,inst_32424);
} else {
if((state_val_32465 === (18))){
var inst_32430 = (state_32464[(7)]);
var inst_32439 = cljs.core.first.call(null,inst_32430);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32464__$1,(20),out,inst_32439);
} else {
if((state_val_32465 === (8))){
var inst_32418 = (state_32464[(11)]);
var inst_32419 = (state_32464[(12)]);
var inst_32421 = (inst_32419 < inst_32418);
var inst_32422 = inst_32421;
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32422)){
var statearr_32498_32529 = state_32464__$1;
(statearr_32498_32529[(1)] = (10));

} else {
var statearr_32499_32530 = state_32464__$1;
(statearr_32499_32530[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__20234__auto__))
;
return ((function (switch__20169__auto__,c__20234__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20170__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20170__auto____0 = (function (){
var statearr_32503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32503[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20170__auto__);

(statearr_32503[(1)] = (1));

return statearr_32503;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20170__auto____1 = (function (state_32464){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_32464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e32504){if((e32504 instanceof Object)){
var ex__20173__auto__ = e32504;
var statearr_32505_32531 = state_32464;
(statearr_32505_32531[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32532 = state_32464;
state_32464 = G__32532;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20170__auto__ = function(state_32464){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20170__auto____1.call(this,state_32464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20170__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20170__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto__))
})();
var state__20236__auto__ = (function (){var statearr_32506 = f__20235__auto__.call(null);
(statearr_32506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto__);

return statearr_32506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto__))
);

return c__20234__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args32533 = [];
var len__17521__auto___32536 = arguments.length;
var i__17522__auto___32537 = (0);
while(true){
if((i__17522__auto___32537 < len__17521__auto___32536)){
args32533.push((arguments[i__17522__auto___32537]));

var G__32538 = (i__17522__auto___32537 + (1));
i__17522__auto___32537 = G__32538;
continue;
} else {
}
break;
}

var G__32535 = args32533.length;
switch (G__32535) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32533.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args32540 = [];
var len__17521__auto___32543 = arguments.length;
var i__17522__auto___32544 = (0);
while(true){
if((i__17522__auto___32544 < len__17521__auto___32543)){
args32540.push((arguments[i__17522__auto___32544]));

var G__32545 = (i__17522__auto___32544 + (1));
i__17522__auto___32544 = G__32545;
continue;
} else {
}
break;
}

var G__32542 = args32540.length;
switch (G__32542) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32540.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args32547 = [];
var len__17521__auto___32598 = arguments.length;
var i__17522__auto___32599 = (0);
while(true){
if((i__17522__auto___32599 < len__17521__auto___32598)){
args32547.push((arguments[i__17522__auto___32599]));

var G__32600 = (i__17522__auto___32599 + (1));
i__17522__auto___32599 = G__32600;
continue;
} else {
}
break;
}

var G__32549 = args32547.length;
switch (G__32549) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32547.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20234__auto___32602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___32602,out){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___32602,out){
return (function (state_32573){
var state_val_32574 = (state_32573[(1)]);
if((state_val_32574 === (7))){
var inst_32568 = (state_32573[(2)]);
var state_32573__$1 = state_32573;
var statearr_32575_32603 = state_32573__$1;
(statearr_32575_32603[(2)] = inst_32568);

(statearr_32575_32603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (1))){
var inst_32550 = null;
var state_32573__$1 = (function (){var statearr_32576 = state_32573;
(statearr_32576[(7)] = inst_32550);

return statearr_32576;
})();
var statearr_32577_32604 = state_32573__$1;
(statearr_32577_32604[(2)] = null);

(statearr_32577_32604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (4))){
var inst_32553 = (state_32573[(8)]);
var inst_32553__$1 = (state_32573[(2)]);
var inst_32554 = (inst_32553__$1 == null);
var inst_32555 = cljs.core.not.call(null,inst_32554);
var state_32573__$1 = (function (){var statearr_32578 = state_32573;
(statearr_32578[(8)] = inst_32553__$1);

return statearr_32578;
})();
if(inst_32555){
var statearr_32579_32605 = state_32573__$1;
(statearr_32579_32605[(1)] = (5));

} else {
var statearr_32580_32606 = state_32573__$1;
(statearr_32580_32606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (6))){
var state_32573__$1 = state_32573;
var statearr_32581_32607 = state_32573__$1;
(statearr_32581_32607[(2)] = null);

(statearr_32581_32607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (3))){
var inst_32570 = (state_32573[(2)]);
var inst_32571 = cljs.core.async.close_BANG_.call(null,out);
var state_32573__$1 = (function (){var statearr_32582 = state_32573;
(statearr_32582[(9)] = inst_32570);

return statearr_32582;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32573__$1,inst_32571);
} else {
if((state_val_32574 === (2))){
var state_32573__$1 = state_32573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32573__$1,(4),ch);
} else {
if((state_val_32574 === (11))){
var inst_32553 = (state_32573[(8)]);
var inst_32562 = (state_32573[(2)]);
var inst_32550 = inst_32553;
var state_32573__$1 = (function (){var statearr_32583 = state_32573;
(statearr_32583[(10)] = inst_32562);

(statearr_32583[(7)] = inst_32550);

return statearr_32583;
})();
var statearr_32584_32608 = state_32573__$1;
(statearr_32584_32608[(2)] = null);

(statearr_32584_32608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (9))){
var inst_32553 = (state_32573[(8)]);
var state_32573__$1 = state_32573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32573__$1,(11),out,inst_32553);
} else {
if((state_val_32574 === (5))){
var inst_32550 = (state_32573[(7)]);
var inst_32553 = (state_32573[(8)]);
var inst_32557 = cljs.core._EQ_.call(null,inst_32553,inst_32550);
var state_32573__$1 = state_32573;
if(inst_32557){
var statearr_32586_32609 = state_32573__$1;
(statearr_32586_32609[(1)] = (8));

} else {
var statearr_32587_32610 = state_32573__$1;
(statearr_32587_32610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (10))){
var inst_32565 = (state_32573[(2)]);
var state_32573__$1 = state_32573;
var statearr_32588_32611 = state_32573__$1;
(statearr_32588_32611[(2)] = inst_32565);

(statearr_32588_32611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (8))){
var inst_32550 = (state_32573[(7)]);
var tmp32585 = inst_32550;
var inst_32550__$1 = tmp32585;
var state_32573__$1 = (function (){var statearr_32589 = state_32573;
(statearr_32589[(7)] = inst_32550__$1);

return statearr_32589;
})();
var statearr_32590_32612 = state_32573__$1;
(statearr_32590_32612[(2)] = null);

(statearr_32590_32612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__20234__auto___32602,out))
;
return ((function (switch__20169__auto__,c__20234__auto___32602,out){
return (function() {
var cljs$core$async$state_machine__20170__auto__ = null;
var cljs$core$async$state_machine__20170__auto____0 = (function (){
var statearr_32594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32594[(0)] = cljs$core$async$state_machine__20170__auto__);

(statearr_32594[(1)] = (1));

return statearr_32594;
});
var cljs$core$async$state_machine__20170__auto____1 = (function (state_32573){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_32573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e32595){if((e32595 instanceof Object)){
var ex__20173__auto__ = e32595;
var statearr_32596_32613 = state_32573;
(statearr_32596_32613[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32614 = state_32573;
state_32573 = G__32614;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$state_machine__20170__auto__ = function(state_32573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20170__auto____1.call(this,state_32573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20170__auto____0;
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20170__auto____1;
return cljs$core$async$state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___32602,out))
})();
var state__20236__auto__ = (function (){var statearr_32597 = f__20235__auto__.call(null);
(statearr_32597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___32602);

return statearr_32597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___32602,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args32615 = [];
var len__17521__auto___32685 = arguments.length;
var i__17522__auto___32686 = (0);
while(true){
if((i__17522__auto___32686 < len__17521__auto___32685)){
args32615.push((arguments[i__17522__auto___32686]));

var G__32687 = (i__17522__auto___32686 + (1));
i__17522__auto___32686 = G__32687;
continue;
} else {
}
break;
}

var G__32617 = args32615.length;
switch (G__32617) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32615.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20234__auto___32689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___32689,out){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___32689,out){
return (function (state_32655){
var state_val_32656 = (state_32655[(1)]);
if((state_val_32656 === (7))){
var inst_32651 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
var statearr_32657_32690 = state_32655__$1;
(statearr_32657_32690[(2)] = inst_32651);

(statearr_32657_32690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (1))){
var inst_32618 = (new Array(n));
var inst_32619 = inst_32618;
var inst_32620 = (0);
var state_32655__$1 = (function (){var statearr_32658 = state_32655;
(statearr_32658[(7)] = inst_32620);

(statearr_32658[(8)] = inst_32619);

return statearr_32658;
})();
var statearr_32659_32691 = state_32655__$1;
(statearr_32659_32691[(2)] = null);

(statearr_32659_32691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (4))){
var inst_32623 = (state_32655[(9)]);
var inst_32623__$1 = (state_32655[(2)]);
var inst_32624 = (inst_32623__$1 == null);
var inst_32625 = cljs.core.not.call(null,inst_32624);
var state_32655__$1 = (function (){var statearr_32660 = state_32655;
(statearr_32660[(9)] = inst_32623__$1);

return statearr_32660;
})();
if(inst_32625){
var statearr_32661_32692 = state_32655__$1;
(statearr_32661_32692[(1)] = (5));

} else {
var statearr_32662_32693 = state_32655__$1;
(statearr_32662_32693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (15))){
var inst_32645 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
var statearr_32663_32694 = state_32655__$1;
(statearr_32663_32694[(2)] = inst_32645);

(statearr_32663_32694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (13))){
var state_32655__$1 = state_32655;
var statearr_32664_32695 = state_32655__$1;
(statearr_32664_32695[(2)] = null);

(statearr_32664_32695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (6))){
var inst_32620 = (state_32655[(7)]);
var inst_32641 = (inst_32620 > (0));
var state_32655__$1 = state_32655;
if(cljs.core.truth_(inst_32641)){
var statearr_32665_32696 = state_32655__$1;
(statearr_32665_32696[(1)] = (12));

} else {
var statearr_32666_32697 = state_32655__$1;
(statearr_32666_32697[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (3))){
var inst_32653 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32655__$1,inst_32653);
} else {
if((state_val_32656 === (12))){
var inst_32619 = (state_32655[(8)]);
var inst_32643 = cljs.core.vec.call(null,inst_32619);
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32655__$1,(15),out,inst_32643);
} else {
if((state_val_32656 === (2))){
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32655__$1,(4),ch);
} else {
if((state_val_32656 === (11))){
var inst_32635 = (state_32655[(2)]);
var inst_32636 = (new Array(n));
var inst_32619 = inst_32636;
var inst_32620 = (0);
var state_32655__$1 = (function (){var statearr_32667 = state_32655;
(statearr_32667[(7)] = inst_32620);

(statearr_32667[(10)] = inst_32635);

(statearr_32667[(8)] = inst_32619);

return statearr_32667;
})();
var statearr_32668_32698 = state_32655__$1;
(statearr_32668_32698[(2)] = null);

(statearr_32668_32698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (9))){
var inst_32619 = (state_32655[(8)]);
var inst_32633 = cljs.core.vec.call(null,inst_32619);
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32655__$1,(11),out,inst_32633);
} else {
if((state_val_32656 === (5))){
var inst_32620 = (state_32655[(7)]);
var inst_32619 = (state_32655[(8)]);
var inst_32623 = (state_32655[(9)]);
var inst_32628 = (state_32655[(11)]);
var inst_32627 = (inst_32619[inst_32620] = inst_32623);
var inst_32628__$1 = (inst_32620 + (1));
var inst_32629 = (inst_32628__$1 < n);
var state_32655__$1 = (function (){var statearr_32669 = state_32655;
(statearr_32669[(12)] = inst_32627);

(statearr_32669[(11)] = inst_32628__$1);

return statearr_32669;
})();
if(cljs.core.truth_(inst_32629)){
var statearr_32670_32699 = state_32655__$1;
(statearr_32670_32699[(1)] = (8));

} else {
var statearr_32671_32700 = state_32655__$1;
(statearr_32671_32700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (14))){
var inst_32648 = (state_32655[(2)]);
var inst_32649 = cljs.core.async.close_BANG_.call(null,out);
var state_32655__$1 = (function (){var statearr_32673 = state_32655;
(statearr_32673[(13)] = inst_32648);

return statearr_32673;
})();
var statearr_32674_32701 = state_32655__$1;
(statearr_32674_32701[(2)] = inst_32649);

(statearr_32674_32701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (10))){
var inst_32639 = (state_32655[(2)]);
var state_32655__$1 = state_32655;
var statearr_32675_32702 = state_32655__$1;
(statearr_32675_32702[(2)] = inst_32639);

(statearr_32675_32702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32656 === (8))){
var inst_32619 = (state_32655[(8)]);
var inst_32628 = (state_32655[(11)]);
var tmp32672 = inst_32619;
var inst_32619__$1 = tmp32672;
var inst_32620 = inst_32628;
var state_32655__$1 = (function (){var statearr_32676 = state_32655;
(statearr_32676[(7)] = inst_32620);

(statearr_32676[(8)] = inst_32619__$1);

return statearr_32676;
})();
var statearr_32677_32703 = state_32655__$1;
(statearr_32677_32703[(2)] = null);

(statearr_32677_32703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__20234__auto___32689,out))
;
return ((function (switch__20169__auto__,c__20234__auto___32689,out){
return (function() {
var cljs$core$async$state_machine__20170__auto__ = null;
var cljs$core$async$state_machine__20170__auto____0 = (function (){
var statearr_32681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32681[(0)] = cljs$core$async$state_machine__20170__auto__);

(statearr_32681[(1)] = (1));

return statearr_32681;
});
var cljs$core$async$state_machine__20170__auto____1 = (function (state_32655){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_32655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e32682){if((e32682 instanceof Object)){
var ex__20173__auto__ = e32682;
var statearr_32683_32704 = state_32655;
(statearr_32683_32704[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32705 = state_32655;
state_32655 = G__32705;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$state_machine__20170__auto__ = function(state_32655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20170__auto____1.call(this,state_32655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20170__auto____0;
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20170__auto____1;
return cljs$core$async$state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___32689,out))
})();
var state__20236__auto__ = (function (){var statearr_32684 = f__20235__auto__.call(null);
(statearr_32684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___32689);

return statearr_32684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___32689,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args32706 = [];
var len__17521__auto___32780 = arguments.length;
var i__17522__auto___32781 = (0);
while(true){
if((i__17522__auto___32781 < len__17521__auto___32780)){
args32706.push((arguments[i__17522__auto___32781]));

var G__32782 = (i__17522__auto___32781 + (1));
i__17522__auto___32781 = G__32782;
continue;
} else {
}
break;
}

var G__32708 = args32706.length;
switch (G__32708) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32706.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20234__auto___32784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20234__auto___32784,out){
return (function (){
var f__20235__auto__ = (function (){var switch__20169__auto__ = ((function (c__20234__auto___32784,out){
return (function (state_32750){
var state_val_32751 = (state_32750[(1)]);
if((state_val_32751 === (7))){
var inst_32746 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32752_32785 = state_32750__$1;
(statearr_32752_32785[(2)] = inst_32746);

(statearr_32752_32785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (1))){
var inst_32709 = [];
var inst_32710 = inst_32709;
var inst_32711 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32750__$1 = (function (){var statearr_32753 = state_32750;
(statearr_32753[(7)] = inst_32711);

(statearr_32753[(8)] = inst_32710);

return statearr_32753;
})();
var statearr_32754_32786 = state_32750__$1;
(statearr_32754_32786[(2)] = null);

(statearr_32754_32786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (4))){
var inst_32714 = (state_32750[(9)]);
var inst_32714__$1 = (state_32750[(2)]);
var inst_32715 = (inst_32714__$1 == null);
var inst_32716 = cljs.core.not.call(null,inst_32715);
var state_32750__$1 = (function (){var statearr_32755 = state_32750;
(statearr_32755[(9)] = inst_32714__$1);

return statearr_32755;
})();
if(inst_32716){
var statearr_32756_32787 = state_32750__$1;
(statearr_32756_32787[(1)] = (5));

} else {
var statearr_32757_32788 = state_32750__$1;
(statearr_32757_32788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (15))){
var inst_32740 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32758_32789 = state_32750__$1;
(statearr_32758_32789[(2)] = inst_32740);

(statearr_32758_32789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (13))){
var state_32750__$1 = state_32750;
var statearr_32759_32790 = state_32750__$1;
(statearr_32759_32790[(2)] = null);

(statearr_32759_32790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (6))){
var inst_32710 = (state_32750[(8)]);
var inst_32735 = inst_32710.length;
var inst_32736 = (inst_32735 > (0));
var state_32750__$1 = state_32750;
if(cljs.core.truth_(inst_32736)){
var statearr_32760_32791 = state_32750__$1;
(statearr_32760_32791[(1)] = (12));

} else {
var statearr_32761_32792 = state_32750__$1;
(statearr_32761_32792[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (3))){
var inst_32748 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32750__$1,inst_32748);
} else {
if((state_val_32751 === (12))){
var inst_32710 = (state_32750[(8)]);
var inst_32738 = cljs.core.vec.call(null,inst_32710);
var state_32750__$1 = state_32750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32750__$1,(15),out,inst_32738);
} else {
if((state_val_32751 === (2))){
var state_32750__$1 = state_32750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32750__$1,(4),ch);
} else {
if((state_val_32751 === (11))){
var inst_32714 = (state_32750[(9)]);
var inst_32718 = (state_32750[(10)]);
var inst_32728 = (state_32750[(2)]);
var inst_32729 = [];
var inst_32730 = inst_32729.push(inst_32714);
var inst_32710 = inst_32729;
var inst_32711 = inst_32718;
var state_32750__$1 = (function (){var statearr_32762 = state_32750;
(statearr_32762[(7)] = inst_32711);

(statearr_32762[(11)] = inst_32728);

(statearr_32762[(12)] = inst_32730);

(statearr_32762[(8)] = inst_32710);

return statearr_32762;
})();
var statearr_32763_32793 = state_32750__$1;
(statearr_32763_32793[(2)] = null);

(statearr_32763_32793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (9))){
var inst_32710 = (state_32750[(8)]);
var inst_32726 = cljs.core.vec.call(null,inst_32710);
var state_32750__$1 = state_32750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32750__$1,(11),out,inst_32726);
} else {
if((state_val_32751 === (5))){
var inst_32714 = (state_32750[(9)]);
var inst_32711 = (state_32750[(7)]);
var inst_32718 = (state_32750[(10)]);
var inst_32718__$1 = f.call(null,inst_32714);
var inst_32719 = cljs.core._EQ_.call(null,inst_32718__$1,inst_32711);
var inst_32720 = cljs.core.keyword_identical_QMARK_.call(null,inst_32711,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32721 = (inst_32719) || (inst_32720);
var state_32750__$1 = (function (){var statearr_32764 = state_32750;
(statearr_32764[(10)] = inst_32718__$1);

return statearr_32764;
})();
if(cljs.core.truth_(inst_32721)){
var statearr_32765_32794 = state_32750__$1;
(statearr_32765_32794[(1)] = (8));

} else {
var statearr_32766_32795 = state_32750__$1;
(statearr_32766_32795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (14))){
var inst_32743 = (state_32750[(2)]);
var inst_32744 = cljs.core.async.close_BANG_.call(null,out);
var state_32750__$1 = (function (){var statearr_32768 = state_32750;
(statearr_32768[(13)] = inst_32743);

return statearr_32768;
})();
var statearr_32769_32796 = state_32750__$1;
(statearr_32769_32796[(2)] = inst_32744);

(statearr_32769_32796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (10))){
var inst_32733 = (state_32750[(2)]);
var state_32750__$1 = state_32750;
var statearr_32770_32797 = state_32750__$1;
(statearr_32770_32797[(2)] = inst_32733);

(statearr_32770_32797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32751 === (8))){
var inst_32714 = (state_32750[(9)]);
var inst_32718 = (state_32750[(10)]);
var inst_32710 = (state_32750[(8)]);
var inst_32723 = inst_32710.push(inst_32714);
var tmp32767 = inst_32710;
var inst_32710__$1 = tmp32767;
var inst_32711 = inst_32718;
var state_32750__$1 = (function (){var statearr_32771 = state_32750;
(statearr_32771[(7)] = inst_32711);

(statearr_32771[(14)] = inst_32723);

(statearr_32771[(8)] = inst_32710__$1);

return statearr_32771;
})();
var statearr_32772_32798 = state_32750__$1;
(statearr_32772_32798[(2)] = null);

(statearr_32772_32798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__20234__auto___32784,out))
;
return ((function (switch__20169__auto__,c__20234__auto___32784,out){
return (function() {
var cljs$core$async$state_machine__20170__auto__ = null;
var cljs$core$async$state_machine__20170__auto____0 = (function (){
var statearr_32776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32776[(0)] = cljs$core$async$state_machine__20170__auto__);

(statearr_32776[(1)] = (1));

return statearr_32776;
});
var cljs$core$async$state_machine__20170__auto____1 = (function (state_32750){
while(true){
var ret_value__20171__auto__ = (function (){try{while(true){
var result__20172__auto__ = switch__20169__auto__.call(null,state_32750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20172__auto__;
}
break;
}
}catch (e32777){if((e32777 instanceof Object)){
var ex__20173__auto__ = e32777;
var statearr_32778_32799 = state_32750;
(statearr_32778_32799[(5)] = ex__20173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32800 = state_32750;
state_32750 = G__32800;
continue;
} else {
return ret_value__20171__auto__;
}
break;
}
});
cljs$core$async$state_machine__20170__auto__ = function(state_32750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20170__auto____1.call(this,state_32750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20170__auto____0;
cljs$core$async$state_machine__20170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20170__auto____1;
return cljs$core$async$state_machine__20170__auto__;
})()
;})(switch__20169__auto__,c__20234__auto___32784,out))
})();
var state__20236__auto__ = (function (){var statearr_32779 = f__20235__auto__.call(null);
(statearr_32779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20234__auto___32784);

return statearr_32779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20236__auto__);
});})(c__20234__auto___32784,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440195222680