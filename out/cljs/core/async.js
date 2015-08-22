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
if(typeof cljs.core.async.t31196 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31196 = (function (fn_handler,f,meta31197){
this.fn_handler = fn_handler;
this.f = f;
this.meta31197 = meta31197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31198,meta31197__$1){
var self__ = this;
var _31198__$1 = this;
return (new cljs.core.async.t31196(self__.fn_handler,self__.f,meta31197__$1));
});

cljs.core.async.t31196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31198){
var self__ = this;
var _31198__$1 = this;
return self__.meta31197;
});

cljs.core.async.t31196.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta31197","meta31197",1636478357,null)], null);
});

cljs.core.async.t31196.cljs$lang$type = true;

cljs.core.async.t31196.cljs$lang$ctorStr = "cljs.core.async/t31196";

cljs.core.async.t31196.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t31196");
});

cljs.core.async.__GT_t31196 = (function cljs$core$async$fn_handler_$___GT_t31196(fn_handler__$1,f__$1,meta31197){
return (new cljs.core.async.t31196(fn_handler__$1,f__$1,meta31197));
});

}

return (new cljs.core.async.t31196(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args31201 = [];
var len__17521__auto___31204 = arguments.length;
var i__17522__auto___31205 = (0);
while(true){
if((i__17522__auto___31205 < len__17521__auto___31204)){
args31201.push((arguments[i__17522__auto___31205]));

var G__31206 = (i__17522__auto___31205 + (1));
i__17522__auto___31205 = G__31206;
continue;
} else {
}
break;
}

var G__31203 = args31201.length;
switch (G__31203) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31201.length)].join('')));

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
var args31208 = [];
var len__17521__auto___31211 = arguments.length;
var i__17522__auto___31212 = (0);
while(true){
if((i__17522__auto___31212 < len__17521__auto___31211)){
args31208.push((arguments[i__17522__auto___31212]));

var G__31213 = (i__17522__auto___31212 + (1));
i__17522__auto___31212 = G__31213;
continue;
} else {
}
break;
}

var G__31210 = args31208.length;
switch (G__31210) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31208.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31215 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31215);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31215,ret){
return (function (){
return fn1.call(null,val_31215);
});})(val_31215,ret))
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
var args31216 = [];
var len__17521__auto___31219 = arguments.length;
var i__17522__auto___31220 = (0);
while(true){
if((i__17522__auto___31220 < len__17521__auto___31219)){
args31216.push((arguments[i__17522__auto___31220]));

var G__31221 = (i__17522__auto___31220 + (1));
i__17522__auto___31220 = G__31221;
continue;
} else {
}
break;
}

var G__31218 = args31216.length;
switch (G__31218) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31216.length)].join('')));

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
var n__17366__auto___31223 = n;
var x_31224 = (0);
while(true){
if((x_31224 < n__17366__auto___31223)){
(a[x_31224] = (0));

var G__31225 = (x_31224 + (1));
x_31224 = G__31225;
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

var G__31226 = (i + (1));
i = G__31226;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t31230 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31230 = (function (alt_flag,flag,meta31231){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31231 = meta31231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31232,meta31231__$1){
var self__ = this;
var _31232__$1 = this;
return (new cljs.core.async.t31230(self__.alt_flag,self__.flag,meta31231__$1));
});})(flag))
;

cljs.core.async.t31230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31232){
var self__ = this;
var _31232__$1 = this;
return self__.meta31231;
});})(flag))
;

cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t31230.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t31230.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31231","meta31231",2091065960,null)], null);
});})(flag))
;

cljs.core.async.t31230.cljs$lang$type = true;

cljs.core.async.t31230.cljs$lang$ctorStr = "cljs.core.async/t31230";

cljs.core.async.t31230.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t31230");
});})(flag))
;

cljs.core.async.__GT_t31230 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t31230(alt_flag__$1,flag__$1,meta31231){
return (new cljs.core.async.t31230(alt_flag__$1,flag__$1,meta31231));
});})(flag))
;

}

return (new cljs.core.async.t31230(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t31236 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31236 = (function (alt_handler,flag,cb,meta31237){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31237 = meta31237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31238,meta31237__$1){
var self__ = this;
var _31238__$1 = this;
return (new cljs.core.async.t31236(self__.alt_handler,self__.flag,self__.cb,meta31237__$1));
});

cljs.core.async.t31236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31238){
var self__ = this;
var _31238__$1 = this;
return self__.meta31237;
});

cljs.core.async.t31236.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t31236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t31236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31237","meta31237",174131413,null)], null);
});

cljs.core.async.t31236.cljs$lang$type = true;

cljs.core.async.t31236.cljs$lang$ctorStr = "cljs.core.async/t31236";

cljs.core.async.t31236.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t31236");
});

cljs.core.async.__GT_t31236 = (function cljs$core$async$alt_handler_$___GT_t31236(alt_handler__$1,flag__$1,cb__$1,meta31237){
return (new cljs.core.async.t31236(alt_handler__$1,flag__$1,cb__$1,meta31237));
});

}

return (new cljs.core.async.t31236(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31239_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31239_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31240_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31240_SHARP_,port], null));
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
var G__31241 = (i + (1));
i = G__31241;
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
var len__17521__auto___31247 = arguments.length;
var i__17522__auto___31248 = (0);
while(true){
if((i__17522__auto___31248 < len__17521__auto___31247)){
args__17528__auto__.push((arguments[i__17522__auto___31248]));

var G__31249 = (i__17522__auto___31248 + (1));
i__17522__auto___31248 = G__31249;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((1) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17529__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31244){
var map__31245 = p__31244;
var map__31245__$1 = ((((!((map__31245 == null)))?((((map__31245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31245):map__31245);
var opts = map__31245__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31242){
var G__31243 = cljs.core.first.call(null,seq31242);
var seq31242__$1 = cljs.core.next.call(null,seq31242);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31243,seq31242__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args31250 = [];
var len__17521__auto___31300 = arguments.length;
var i__17522__auto___31301 = (0);
while(true){
if((i__17522__auto___31301 < len__17521__auto___31300)){
args31250.push((arguments[i__17522__auto___31301]));

var G__31302 = (i__17522__auto___31301 + (1));
i__17522__auto___31301 = G__31302;
continue;
} else {
}
break;
}

var G__31252 = args31250.length;
switch (G__31252) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31250.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21335__auto___31304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___31304){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___31304){
return (function (state_31276){
var state_val_31277 = (state_31276[(1)]);
if((state_val_31277 === (7))){
var inst_31272 = (state_31276[(2)]);
var state_31276__$1 = state_31276;
var statearr_31278_31305 = state_31276__$1;
(statearr_31278_31305[(2)] = inst_31272);

(statearr_31278_31305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (1))){
var state_31276__$1 = state_31276;
var statearr_31279_31306 = state_31276__$1;
(statearr_31279_31306[(2)] = null);

(statearr_31279_31306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (4))){
var inst_31255 = (state_31276[(7)]);
var inst_31255__$1 = (state_31276[(2)]);
var inst_31256 = (inst_31255__$1 == null);
var state_31276__$1 = (function (){var statearr_31280 = state_31276;
(statearr_31280[(7)] = inst_31255__$1);

return statearr_31280;
})();
if(cljs.core.truth_(inst_31256)){
var statearr_31281_31307 = state_31276__$1;
(statearr_31281_31307[(1)] = (5));

} else {
var statearr_31282_31308 = state_31276__$1;
(statearr_31282_31308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (13))){
var state_31276__$1 = state_31276;
var statearr_31283_31309 = state_31276__$1;
(statearr_31283_31309[(2)] = null);

(statearr_31283_31309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (6))){
var inst_31255 = (state_31276[(7)]);
var state_31276__$1 = state_31276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31276__$1,(11),to,inst_31255);
} else {
if((state_val_31277 === (3))){
var inst_31274 = (state_31276[(2)]);
var state_31276__$1 = state_31276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31276__$1,inst_31274);
} else {
if((state_val_31277 === (12))){
var state_31276__$1 = state_31276;
var statearr_31284_31310 = state_31276__$1;
(statearr_31284_31310[(2)] = null);

(statearr_31284_31310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (2))){
var state_31276__$1 = state_31276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31276__$1,(4),from);
} else {
if((state_val_31277 === (11))){
var inst_31265 = (state_31276[(2)]);
var state_31276__$1 = state_31276;
if(cljs.core.truth_(inst_31265)){
var statearr_31285_31311 = state_31276__$1;
(statearr_31285_31311[(1)] = (12));

} else {
var statearr_31286_31312 = state_31276__$1;
(statearr_31286_31312[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (9))){
var state_31276__$1 = state_31276;
var statearr_31287_31313 = state_31276__$1;
(statearr_31287_31313[(2)] = null);

(statearr_31287_31313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (5))){
var state_31276__$1 = state_31276;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31288_31314 = state_31276__$1;
(statearr_31288_31314[(1)] = (8));

} else {
var statearr_31289_31315 = state_31276__$1;
(statearr_31289_31315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (14))){
var inst_31270 = (state_31276[(2)]);
var state_31276__$1 = state_31276;
var statearr_31290_31316 = state_31276__$1;
(statearr_31290_31316[(2)] = inst_31270);

(statearr_31290_31316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (10))){
var inst_31262 = (state_31276[(2)]);
var state_31276__$1 = state_31276;
var statearr_31291_31317 = state_31276__$1;
(statearr_31291_31317[(2)] = inst_31262);

(statearr_31291_31317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31277 === (8))){
var inst_31259 = cljs.core.async.close_BANG_.call(null,to);
var state_31276__$1 = state_31276;
var statearr_31292_31318 = state_31276__$1;
(statearr_31292_31318[(2)] = inst_31259);

(statearr_31292_31318[(1)] = (10));


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
});})(c__21335__auto___31304))
;
return ((function (switch__21270__auto__,c__21335__auto___31304){
return (function() {
var cljs$core$async$state_machine__21271__auto__ = null;
var cljs$core$async$state_machine__21271__auto____0 = (function (){
var statearr_31296 = [null,null,null,null,null,null,null,null];
(statearr_31296[(0)] = cljs$core$async$state_machine__21271__auto__);

(statearr_31296[(1)] = (1));

return statearr_31296;
});
var cljs$core$async$state_machine__21271__auto____1 = (function (state_31276){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_31276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e31297){if((e31297 instanceof Object)){
var ex__21274__auto__ = e31297;
var statearr_31298_31319 = state_31276;
(statearr_31298_31319[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31320 = state_31276;
state_31276 = G__31320;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$state_machine__21271__auto__ = function(state_31276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21271__auto____1.call(this,state_31276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21271__auto____0;
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21271__auto____1;
return cljs$core$async$state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___31304))
})();
var state__21337__auto__ = (function (){var statearr_31299 = f__21336__auto__.call(null);
(statearr_31299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___31304);

return statearr_31299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___31304))
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
return (function (p__31504){
var vec__31505 = p__31504;
var v = cljs.core.nth.call(null,vec__31505,(0),null);
var p = cljs.core.nth.call(null,vec__31505,(1),null);
var job = vec__31505;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21335__auto___31687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___31687,res,vec__31505,v,p,job,jobs,results){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___31687,res,vec__31505,v,p,job,jobs,results){
return (function (state_31510){
var state_val_31511 = (state_31510[(1)]);
if((state_val_31511 === (1))){
var state_31510__$1 = state_31510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31510__$1,(2),res,v);
} else {
if((state_val_31511 === (2))){
var inst_31507 = (state_31510[(2)]);
var inst_31508 = cljs.core.async.close_BANG_.call(null,res);
var state_31510__$1 = (function (){var statearr_31512 = state_31510;
(statearr_31512[(7)] = inst_31507);

return statearr_31512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31510__$1,inst_31508);
} else {
return null;
}
}
});})(c__21335__auto___31687,res,vec__31505,v,p,job,jobs,results))
;
return ((function (switch__21270__auto__,c__21335__auto___31687,res,vec__31505,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0 = (function (){
var statearr_31516 = [null,null,null,null,null,null,null,null];
(statearr_31516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__);

(statearr_31516[(1)] = (1));

return statearr_31516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1 = (function (state_31510){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_31510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e31517){if((e31517 instanceof Object)){
var ex__21274__auto__ = e31517;
var statearr_31518_31688 = state_31510;
(statearr_31518_31688[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31689 = state_31510;
state_31510 = G__31689;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__ = function(state_31510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1.call(this,state_31510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___31687,res,vec__31505,v,p,job,jobs,results))
})();
var state__21337__auto__ = (function (){var statearr_31519 = f__21336__auto__.call(null);
(statearr_31519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___31687);

return statearr_31519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___31687,res,vec__31505,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31520){
var vec__31521 = p__31520;
var v = cljs.core.nth.call(null,vec__31521,(0),null);
var p = cljs.core.nth.call(null,vec__31521,(1),null);
var job = vec__31521;
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
var n__17366__auto___31690 = n;
var __31691 = (0);
while(true){
if((__31691 < n__17366__auto___31690)){
var G__31522_31692 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31522_31692) {
case "compute":
var c__21335__auto___31694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31691,c__21335__auto___31694,G__31522_31692,n__17366__auto___31690,jobs,results,process,async){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (__31691,c__21335__auto___31694,G__31522_31692,n__17366__auto___31690,jobs,results,process,async){
return (function (state_31535){
var state_val_31536 = (state_31535[(1)]);
if((state_val_31536 === (1))){
var state_31535__$1 = state_31535;
var statearr_31537_31695 = state_31535__$1;
(statearr_31537_31695[(2)] = null);

(statearr_31537_31695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (2))){
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31535__$1,(4),jobs);
} else {
if((state_val_31536 === (3))){
var inst_31533 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31535__$1,inst_31533);
} else {
if((state_val_31536 === (4))){
var inst_31525 = (state_31535[(2)]);
var inst_31526 = process.call(null,inst_31525);
var state_31535__$1 = state_31535;
if(cljs.core.truth_(inst_31526)){
var statearr_31538_31696 = state_31535__$1;
(statearr_31538_31696[(1)] = (5));

} else {
var statearr_31539_31697 = state_31535__$1;
(statearr_31539_31697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (5))){
var state_31535__$1 = state_31535;
var statearr_31540_31698 = state_31535__$1;
(statearr_31540_31698[(2)] = null);

(statearr_31540_31698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (6))){
var state_31535__$1 = state_31535;
var statearr_31541_31699 = state_31535__$1;
(statearr_31541_31699[(2)] = null);

(statearr_31541_31699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31536 === (7))){
var inst_31531 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31542_31700 = state_31535__$1;
(statearr_31542_31700[(2)] = inst_31531);

(statearr_31542_31700[(1)] = (3));


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
});})(__31691,c__21335__auto___31694,G__31522_31692,n__17366__auto___31690,jobs,results,process,async))
;
return ((function (__31691,switch__21270__auto__,c__21335__auto___31694,G__31522_31692,n__17366__auto___31690,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0 = (function (){
var statearr_31546 = [null,null,null,null,null,null,null];
(statearr_31546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__);

(statearr_31546[(1)] = (1));

return statearr_31546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1 = (function (state_31535){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_31535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e31547){if((e31547 instanceof Object)){
var ex__21274__auto__ = e31547;
var statearr_31548_31701 = state_31535;
(statearr_31548_31701[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31702 = state_31535;
state_31535 = G__31702;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__ = function(state_31535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1.call(this,state_31535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__;
})()
;})(__31691,switch__21270__auto__,c__21335__auto___31694,G__31522_31692,n__17366__auto___31690,jobs,results,process,async))
})();
var state__21337__auto__ = (function (){var statearr_31549 = f__21336__auto__.call(null);
(statearr_31549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___31694);

return statearr_31549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(__31691,c__21335__auto___31694,G__31522_31692,n__17366__auto___31690,jobs,results,process,async))
);


break;
case "async":
var c__21335__auto___31703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31691,c__21335__auto___31703,G__31522_31692,n__17366__auto___31690,jobs,results,process,async){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (__31691,c__21335__auto___31703,G__31522_31692,n__17366__auto___31690,jobs,results,process,async){
return (function (state_31562){
var state_val_31563 = (state_31562[(1)]);
if((state_val_31563 === (1))){
var state_31562__$1 = state_31562;
var statearr_31564_31704 = state_31562__$1;
(statearr_31564_31704[(2)] = null);

(statearr_31564_31704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (2))){
var state_31562__$1 = state_31562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31562__$1,(4),jobs);
} else {
if((state_val_31563 === (3))){
var inst_31560 = (state_31562[(2)]);
var state_31562__$1 = state_31562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31562__$1,inst_31560);
} else {
if((state_val_31563 === (4))){
var inst_31552 = (state_31562[(2)]);
var inst_31553 = async.call(null,inst_31552);
var state_31562__$1 = state_31562;
if(cljs.core.truth_(inst_31553)){
var statearr_31565_31705 = state_31562__$1;
(statearr_31565_31705[(1)] = (5));

} else {
var statearr_31566_31706 = state_31562__$1;
(statearr_31566_31706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (5))){
var state_31562__$1 = state_31562;
var statearr_31567_31707 = state_31562__$1;
(statearr_31567_31707[(2)] = null);

(statearr_31567_31707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (6))){
var state_31562__$1 = state_31562;
var statearr_31568_31708 = state_31562__$1;
(statearr_31568_31708[(2)] = null);

(statearr_31568_31708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31563 === (7))){
var inst_31558 = (state_31562[(2)]);
var state_31562__$1 = state_31562;
var statearr_31569_31709 = state_31562__$1;
(statearr_31569_31709[(2)] = inst_31558);

(statearr_31569_31709[(1)] = (3));


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
});})(__31691,c__21335__auto___31703,G__31522_31692,n__17366__auto___31690,jobs,results,process,async))
;
return ((function (__31691,switch__21270__auto__,c__21335__auto___31703,G__31522_31692,n__17366__auto___31690,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0 = (function (){
var statearr_31573 = [null,null,null,null,null,null,null];
(statearr_31573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__);

(statearr_31573[(1)] = (1));

return statearr_31573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1 = (function (state_31562){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_31562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e31574){if((e31574 instanceof Object)){
var ex__21274__auto__ = e31574;
var statearr_31575_31710 = state_31562;
(statearr_31575_31710[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31711 = state_31562;
state_31562 = G__31711;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__ = function(state_31562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1.call(this,state_31562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__;
})()
;})(__31691,switch__21270__auto__,c__21335__auto___31703,G__31522_31692,n__17366__auto___31690,jobs,results,process,async))
})();
var state__21337__auto__ = (function (){var statearr_31576 = f__21336__auto__.call(null);
(statearr_31576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___31703);

return statearr_31576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(__31691,c__21335__auto___31703,G__31522_31692,n__17366__auto___31690,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31712 = (__31691 + (1));
__31691 = G__31712;
continue;
} else {
}
break;
}

var c__21335__auto___31713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___31713,jobs,results,process,async){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___31713,jobs,results,process,async){
return (function (state_31598){
var state_val_31599 = (state_31598[(1)]);
if((state_val_31599 === (1))){
var state_31598__$1 = state_31598;
var statearr_31600_31714 = state_31598__$1;
(statearr_31600_31714[(2)] = null);

(statearr_31600_31714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (2))){
var state_31598__$1 = state_31598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31598__$1,(4),from);
} else {
if((state_val_31599 === (3))){
var inst_31596 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31598__$1,inst_31596);
} else {
if((state_val_31599 === (4))){
var inst_31579 = (state_31598[(7)]);
var inst_31579__$1 = (state_31598[(2)]);
var inst_31580 = (inst_31579__$1 == null);
var state_31598__$1 = (function (){var statearr_31601 = state_31598;
(statearr_31601[(7)] = inst_31579__$1);

return statearr_31601;
})();
if(cljs.core.truth_(inst_31580)){
var statearr_31602_31715 = state_31598__$1;
(statearr_31602_31715[(1)] = (5));

} else {
var statearr_31603_31716 = state_31598__$1;
(statearr_31603_31716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (5))){
var inst_31582 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31598__$1 = state_31598;
var statearr_31604_31717 = state_31598__$1;
(statearr_31604_31717[(2)] = inst_31582);

(statearr_31604_31717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (6))){
var inst_31584 = (state_31598[(8)]);
var inst_31579 = (state_31598[(7)]);
var inst_31584__$1 = cljs.core.async.chan.call(null,(1));
var inst_31585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31586 = [inst_31579,inst_31584__$1];
var inst_31587 = (new cljs.core.PersistentVector(null,2,(5),inst_31585,inst_31586,null));
var state_31598__$1 = (function (){var statearr_31605 = state_31598;
(statearr_31605[(8)] = inst_31584__$1);

return statearr_31605;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31598__$1,(8),jobs,inst_31587);
} else {
if((state_val_31599 === (7))){
var inst_31594 = (state_31598[(2)]);
var state_31598__$1 = state_31598;
var statearr_31606_31718 = state_31598__$1;
(statearr_31606_31718[(2)] = inst_31594);

(statearr_31606_31718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31599 === (8))){
var inst_31584 = (state_31598[(8)]);
var inst_31589 = (state_31598[(2)]);
var state_31598__$1 = (function (){var statearr_31607 = state_31598;
(statearr_31607[(9)] = inst_31589);

return statearr_31607;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31598__$1,(9),results,inst_31584);
} else {
if((state_val_31599 === (9))){
var inst_31591 = (state_31598[(2)]);
var state_31598__$1 = (function (){var statearr_31608 = state_31598;
(statearr_31608[(10)] = inst_31591);

return statearr_31608;
})();
var statearr_31609_31719 = state_31598__$1;
(statearr_31609_31719[(2)] = null);

(statearr_31609_31719[(1)] = (2));


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
});})(c__21335__auto___31713,jobs,results,process,async))
;
return ((function (switch__21270__auto__,c__21335__auto___31713,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0 = (function (){
var statearr_31613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__);

(statearr_31613[(1)] = (1));

return statearr_31613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1 = (function (state_31598){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_31598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e31614){if((e31614 instanceof Object)){
var ex__21274__auto__ = e31614;
var statearr_31615_31720 = state_31598;
(statearr_31615_31720[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31721 = state_31598;
state_31598 = G__31721;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__ = function(state_31598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1.call(this,state_31598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___31713,jobs,results,process,async))
})();
var state__21337__auto__ = (function (){var statearr_31616 = f__21336__auto__.call(null);
(statearr_31616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___31713);

return statearr_31616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___31713,jobs,results,process,async))
);


var c__21335__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto__,jobs,results,process,async){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto__,jobs,results,process,async){
return (function (state_31654){
var state_val_31655 = (state_31654[(1)]);
if((state_val_31655 === (7))){
var inst_31650 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31656_31722 = state_31654__$1;
(statearr_31656_31722[(2)] = inst_31650);

(statearr_31656_31722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (20))){
var state_31654__$1 = state_31654;
var statearr_31657_31723 = state_31654__$1;
(statearr_31657_31723[(2)] = null);

(statearr_31657_31723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (1))){
var state_31654__$1 = state_31654;
var statearr_31658_31724 = state_31654__$1;
(statearr_31658_31724[(2)] = null);

(statearr_31658_31724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (4))){
var inst_31619 = (state_31654[(7)]);
var inst_31619__$1 = (state_31654[(2)]);
var inst_31620 = (inst_31619__$1 == null);
var state_31654__$1 = (function (){var statearr_31659 = state_31654;
(statearr_31659[(7)] = inst_31619__$1);

return statearr_31659;
})();
if(cljs.core.truth_(inst_31620)){
var statearr_31660_31725 = state_31654__$1;
(statearr_31660_31725[(1)] = (5));

} else {
var statearr_31661_31726 = state_31654__$1;
(statearr_31661_31726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (15))){
var inst_31632 = (state_31654[(8)]);
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31654__$1,(18),to,inst_31632);
} else {
if((state_val_31655 === (21))){
var inst_31645 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31662_31727 = state_31654__$1;
(statearr_31662_31727[(2)] = inst_31645);

(statearr_31662_31727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (13))){
var inst_31647 = (state_31654[(2)]);
var state_31654__$1 = (function (){var statearr_31663 = state_31654;
(statearr_31663[(9)] = inst_31647);

return statearr_31663;
})();
var statearr_31664_31728 = state_31654__$1;
(statearr_31664_31728[(2)] = null);

(statearr_31664_31728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (6))){
var inst_31619 = (state_31654[(7)]);
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31654__$1,(11),inst_31619);
} else {
if((state_val_31655 === (17))){
var inst_31640 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
if(cljs.core.truth_(inst_31640)){
var statearr_31665_31729 = state_31654__$1;
(statearr_31665_31729[(1)] = (19));

} else {
var statearr_31666_31730 = state_31654__$1;
(statearr_31666_31730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (3))){
var inst_31652 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31654__$1,inst_31652);
} else {
if((state_val_31655 === (12))){
var inst_31629 = (state_31654[(10)]);
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31654__$1,(14),inst_31629);
} else {
if((state_val_31655 === (2))){
var state_31654__$1 = state_31654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31654__$1,(4),results);
} else {
if((state_val_31655 === (19))){
var state_31654__$1 = state_31654;
var statearr_31667_31731 = state_31654__$1;
(statearr_31667_31731[(2)] = null);

(statearr_31667_31731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (11))){
var inst_31629 = (state_31654[(2)]);
var state_31654__$1 = (function (){var statearr_31668 = state_31654;
(statearr_31668[(10)] = inst_31629);

return statearr_31668;
})();
var statearr_31669_31732 = state_31654__$1;
(statearr_31669_31732[(2)] = null);

(statearr_31669_31732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (9))){
var state_31654__$1 = state_31654;
var statearr_31670_31733 = state_31654__$1;
(statearr_31670_31733[(2)] = null);

(statearr_31670_31733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (5))){
var state_31654__$1 = state_31654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31671_31734 = state_31654__$1;
(statearr_31671_31734[(1)] = (8));

} else {
var statearr_31672_31735 = state_31654__$1;
(statearr_31672_31735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (14))){
var inst_31632 = (state_31654[(8)]);
var inst_31634 = (state_31654[(11)]);
var inst_31632__$1 = (state_31654[(2)]);
var inst_31633 = (inst_31632__$1 == null);
var inst_31634__$1 = cljs.core.not.call(null,inst_31633);
var state_31654__$1 = (function (){var statearr_31673 = state_31654;
(statearr_31673[(8)] = inst_31632__$1);

(statearr_31673[(11)] = inst_31634__$1);

return statearr_31673;
})();
if(inst_31634__$1){
var statearr_31674_31736 = state_31654__$1;
(statearr_31674_31736[(1)] = (15));

} else {
var statearr_31675_31737 = state_31654__$1;
(statearr_31675_31737[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (16))){
var inst_31634 = (state_31654[(11)]);
var state_31654__$1 = state_31654;
var statearr_31676_31738 = state_31654__$1;
(statearr_31676_31738[(2)] = inst_31634);

(statearr_31676_31738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (10))){
var inst_31626 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31677_31739 = state_31654__$1;
(statearr_31677_31739[(2)] = inst_31626);

(statearr_31677_31739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (18))){
var inst_31637 = (state_31654[(2)]);
var state_31654__$1 = state_31654;
var statearr_31678_31740 = state_31654__$1;
(statearr_31678_31740[(2)] = inst_31637);

(statearr_31678_31740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31655 === (8))){
var inst_31623 = cljs.core.async.close_BANG_.call(null,to);
var state_31654__$1 = state_31654;
var statearr_31679_31741 = state_31654__$1;
(statearr_31679_31741[(2)] = inst_31623);

(statearr_31679_31741[(1)] = (10));


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
});})(c__21335__auto__,jobs,results,process,async))
;
return ((function (switch__21270__auto__,c__21335__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0 = (function (){
var statearr_31683 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__);

(statearr_31683[(1)] = (1));

return statearr_31683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1 = (function (state_31654){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_31654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e31684){if((e31684 instanceof Object)){
var ex__21274__auto__ = e31684;
var statearr_31685_31742 = state_31654;
(statearr_31685_31742[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31743 = state_31654;
state_31654 = G__31743;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__ = function(state_31654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1.call(this,state_31654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto__,jobs,results,process,async))
})();
var state__21337__auto__ = (function (){var statearr_31686 = f__21336__auto__.call(null);
(statearr_31686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto__);

return statearr_31686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto__,jobs,results,process,async))
);

return c__21335__auto__;
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
var args31744 = [];
var len__17521__auto___31747 = arguments.length;
var i__17522__auto___31748 = (0);
while(true){
if((i__17522__auto___31748 < len__17521__auto___31747)){
args31744.push((arguments[i__17522__auto___31748]));

var G__31749 = (i__17522__auto___31748 + (1));
i__17522__auto___31748 = G__31749;
continue;
} else {
}
break;
}

var G__31746 = args31744.length;
switch (G__31746) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31744.length)].join('')));

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
var args31751 = [];
var len__17521__auto___31754 = arguments.length;
var i__17522__auto___31755 = (0);
while(true){
if((i__17522__auto___31755 < len__17521__auto___31754)){
args31751.push((arguments[i__17522__auto___31755]));

var G__31756 = (i__17522__auto___31755 + (1));
i__17522__auto___31755 = G__31756;
continue;
} else {
}
break;
}

var G__31753 = args31751.length;
switch (G__31753) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31751.length)].join('')));

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
var args31758 = [];
var len__17521__auto___31811 = arguments.length;
var i__17522__auto___31812 = (0);
while(true){
if((i__17522__auto___31812 < len__17521__auto___31811)){
args31758.push((arguments[i__17522__auto___31812]));

var G__31813 = (i__17522__auto___31812 + (1));
i__17522__auto___31812 = G__31813;
continue;
} else {
}
break;
}

var G__31760 = args31758.length;
switch (G__31760) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31758.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21335__auto___31815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___31815,tc,fc){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___31815,tc,fc){
return (function (state_31786){
var state_val_31787 = (state_31786[(1)]);
if((state_val_31787 === (7))){
var inst_31782 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
var statearr_31788_31816 = state_31786__$1;
(statearr_31788_31816[(2)] = inst_31782);

(statearr_31788_31816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (1))){
var state_31786__$1 = state_31786;
var statearr_31789_31817 = state_31786__$1;
(statearr_31789_31817[(2)] = null);

(statearr_31789_31817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (4))){
var inst_31763 = (state_31786[(7)]);
var inst_31763__$1 = (state_31786[(2)]);
var inst_31764 = (inst_31763__$1 == null);
var state_31786__$1 = (function (){var statearr_31790 = state_31786;
(statearr_31790[(7)] = inst_31763__$1);

return statearr_31790;
})();
if(cljs.core.truth_(inst_31764)){
var statearr_31791_31818 = state_31786__$1;
(statearr_31791_31818[(1)] = (5));

} else {
var statearr_31792_31819 = state_31786__$1;
(statearr_31792_31819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (13))){
var state_31786__$1 = state_31786;
var statearr_31793_31820 = state_31786__$1;
(statearr_31793_31820[(2)] = null);

(statearr_31793_31820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (6))){
var inst_31763 = (state_31786[(7)]);
var inst_31769 = p.call(null,inst_31763);
var state_31786__$1 = state_31786;
if(cljs.core.truth_(inst_31769)){
var statearr_31794_31821 = state_31786__$1;
(statearr_31794_31821[(1)] = (9));

} else {
var statearr_31795_31822 = state_31786__$1;
(statearr_31795_31822[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (3))){
var inst_31784 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31786__$1,inst_31784);
} else {
if((state_val_31787 === (12))){
var state_31786__$1 = state_31786;
var statearr_31796_31823 = state_31786__$1;
(statearr_31796_31823[(2)] = null);

(statearr_31796_31823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (2))){
var state_31786__$1 = state_31786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31786__$1,(4),ch);
} else {
if((state_val_31787 === (11))){
var inst_31763 = (state_31786[(7)]);
var inst_31773 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31786__$1,(8),inst_31773,inst_31763);
} else {
if((state_val_31787 === (9))){
var state_31786__$1 = state_31786;
var statearr_31797_31824 = state_31786__$1;
(statearr_31797_31824[(2)] = tc);

(statearr_31797_31824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (5))){
var inst_31766 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31767 = cljs.core.async.close_BANG_.call(null,fc);
var state_31786__$1 = (function (){var statearr_31798 = state_31786;
(statearr_31798[(8)] = inst_31766);

return statearr_31798;
})();
var statearr_31799_31825 = state_31786__$1;
(statearr_31799_31825[(2)] = inst_31767);

(statearr_31799_31825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (14))){
var inst_31780 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
var statearr_31800_31826 = state_31786__$1;
(statearr_31800_31826[(2)] = inst_31780);

(statearr_31800_31826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (10))){
var state_31786__$1 = state_31786;
var statearr_31801_31827 = state_31786__$1;
(statearr_31801_31827[(2)] = fc);

(statearr_31801_31827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (8))){
var inst_31775 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
if(cljs.core.truth_(inst_31775)){
var statearr_31802_31828 = state_31786__$1;
(statearr_31802_31828[(1)] = (12));

} else {
var statearr_31803_31829 = state_31786__$1;
(statearr_31803_31829[(1)] = (13));

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
});})(c__21335__auto___31815,tc,fc))
;
return ((function (switch__21270__auto__,c__21335__auto___31815,tc,fc){
return (function() {
var cljs$core$async$state_machine__21271__auto__ = null;
var cljs$core$async$state_machine__21271__auto____0 = (function (){
var statearr_31807 = [null,null,null,null,null,null,null,null,null];
(statearr_31807[(0)] = cljs$core$async$state_machine__21271__auto__);

(statearr_31807[(1)] = (1));

return statearr_31807;
});
var cljs$core$async$state_machine__21271__auto____1 = (function (state_31786){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_31786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e31808){if((e31808 instanceof Object)){
var ex__21274__auto__ = e31808;
var statearr_31809_31830 = state_31786;
(statearr_31809_31830[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31831 = state_31786;
state_31786 = G__31831;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$state_machine__21271__auto__ = function(state_31786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21271__auto____1.call(this,state_31786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21271__auto____0;
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21271__auto____1;
return cljs$core$async$state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___31815,tc,fc))
})();
var state__21337__auto__ = (function (){var statearr_31810 = f__21336__auto__.call(null);
(statearr_31810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___31815);

return statearr_31810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___31815,tc,fc))
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
var c__21335__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto__){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto__){
return (function (state_31878){
var state_val_31879 = (state_31878[(1)]);
if((state_val_31879 === (1))){
var inst_31864 = init;
var state_31878__$1 = (function (){var statearr_31880 = state_31878;
(statearr_31880[(7)] = inst_31864);

return statearr_31880;
})();
var statearr_31881_31896 = state_31878__$1;
(statearr_31881_31896[(2)] = null);

(statearr_31881_31896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31879 === (2))){
var state_31878__$1 = state_31878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31878__$1,(4),ch);
} else {
if((state_val_31879 === (3))){
var inst_31876 = (state_31878[(2)]);
var state_31878__$1 = state_31878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31878__$1,inst_31876);
} else {
if((state_val_31879 === (4))){
var inst_31867 = (state_31878[(8)]);
var inst_31867__$1 = (state_31878[(2)]);
var inst_31868 = (inst_31867__$1 == null);
var state_31878__$1 = (function (){var statearr_31882 = state_31878;
(statearr_31882[(8)] = inst_31867__$1);

return statearr_31882;
})();
if(cljs.core.truth_(inst_31868)){
var statearr_31883_31897 = state_31878__$1;
(statearr_31883_31897[(1)] = (5));

} else {
var statearr_31884_31898 = state_31878__$1;
(statearr_31884_31898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31879 === (5))){
var inst_31864 = (state_31878[(7)]);
var state_31878__$1 = state_31878;
var statearr_31885_31899 = state_31878__$1;
(statearr_31885_31899[(2)] = inst_31864);

(statearr_31885_31899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31879 === (6))){
var inst_31864 = (state_31878[(7)]);
var inst_31867 = (state_31878[(8)]);
var inst_31871 = f.call(null,inst_31864,inst_31867);
var inst_31864__$1 = inst_31871;
var state_31878__$1 = (function (){var statearr_31886 = state_31878;
(statearr_31886[(7)] = inst_31864__$1);

return statearr_31886;
})();
var statearr_31887_31900 = state_31878__$1;
(statearr_31887_31900[(2)] = null);

(statearr_31887_31900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31879 === (7))){
var inst_31874 = (state_31878[(2)]);
var state_31878__$1 = state_31878;
var statearr_31888_31901 = state_31878__$1;
(statearr_31888_31901[(2)] = inst_31874);

(statearr_31888_31901[(1)] = (3));


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
});})(c__21335__auto__))
;
return ((function (switch__21270__auto__,c__21335__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21271__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21271__auto____0 = (function (){
var statearr_31892 = [null,null,null,null,null,null,null,null,null];
(statearr_31892[(0)] = cljs$core$async$reduce_$_state_machine__21271__auto__);

(statearr_31892[(1)] = (1));

return statearr_31892;
});
var cljs$core$async$reduce_$_state_machine__21271__auto____1 = (function (state_31878){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_31878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e31893){if((e31893 instanceof Object)){
var ex__21274__auto__ = e31893;
var statearr_31894_31902 = state_31878;
(statearr_31894_31902[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31903 = state_31878;
state_31878 = G__31903;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21271__auto__ = function(state_31878){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21271__auto____1.call(this,state_31878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21271__auto____0;
cljs$core$async$reduce_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21271__auto____1;
return cljs$core$async$reduce_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto__))
})();
var state__21337__auto__ = (function (){var statearr_31895 = f__21336__auto__.call(null);
(statearr_31895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto__);

return statearr_31895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto__))
);

return c__21335__auto__;
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
var args31904 = [];
var len__17521__auto___31956 = arguments.length;
var i__17522__auto___31957 = (0);
while(true){
if((i__17522__auto___31957 < len__17521__auto___31956)){
args31904.push((arguments[i__17522__auto___31957]));

var G__31958 = (i__17522__auto___31957 + (1));
i__17522__auto___31957 = G__31958;
continue;
} else {
}
break;
}

var G__31906 = args31904.length;
switch (G__31906) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31904.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21335__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto__){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto__){
return (function (state_31931){
var state_val_31932 = (state_31931[(1)]);
if((state_val_31932 === (7))){
var inst_31913 = (state_31931[(2)]);
var state_31931__$1 = state_31931;
var statearr_31933_31960 = state_31931__$1;
(statearr_31933_31960[(2)] = inst_31913);

(statearr_31933_31960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31932 === (1))){
var inst_31907 = cljs.core.seq.call(null,coll);
var inst_31908 = inst_31907;
var state_31931__$1 = (function (){var statearr_31934 = state_31931;
(statearr_31934[(7)] = inst_31908);

return statearr_31934;
})();
var statearr_31935_31961 = state_31931__$1;
(statearr_31935_31961[(2)] = null);

(statearr_31935_31961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31932 === (4))){
var inst_31908 = (state_31931[(7)]);
var inst_31911 = cljs.core.first.call(null,inst_31908);
var state_31931__$1 = state_31931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31931__$1,(7),ch,inst_31911);
} else {
if((state_val_31932 === (13))){
var inst_31925 = (state_31931[(2)]);
var state_31931__$1 = state_31931;
var statearr_31936_31962 = state_31931__$1;
(statearr_31936_31962[(2)] = inst_31925);

(statearr_31936_31962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31932 === (6))){
var inst_31916 = (state_31931[(2)]);
var state_31931__$1 = state_31931;
if(cljs.core.truth_(inst_31916)){
var statearr_31937_31963 = state_31931__$1;
(statearr_31937_31963[(1)] = (8));

} else {
var statearr_31938_31964 = state_31931__$1;
(statearr_31938_31964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31932 === (3))){
var inst_31929 = (state_31931[(2)]);
var state_31931__$1 = state_31931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31931__$1,inst_31929);
} else {
if((state_val_31932 === (12))){
var state_31931__$1 = state_31931;
var statearr_31939_31965 = state_31931__$1;
(statearr_31939_31965[(2)] = null);

(statearr_31939_31965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31932 === (2))){
var inst_31908 = (state_31931[(7)]);
var state_31931__$1 = state_31931;
if(cljs.core.truth_(inst_31908)){
var statearr_31940_31966 = state_31931__$1;
(statearr_31940_31966[(1)] = (4));

} else {
var statearr_31941_31967 = state_31931__$1;
(statearr_31941_31967[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31932 === (11))){
var inst_31922 = cljs.core.async.close_BANG_.call(null,ch);
var state_31931__$1 = state_31931;
var statearr_31942_31968 = state_31931__$1;
(statearr_31942_31968[(2)] = inst_31922);

(statearr_31942_31968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31932 === (9))){
var state_31931__$1 = state_31931;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31943_31969 = state_31931__$1;
(statearr_31943_31969[(1)] = (11));

} else {
var statearr_31944_31970 = state_31931__$1;
(statearr_31944_31970[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31932 === (5))){
var inst_31908 = (state_31931[(7)]);
var state_31931__$1 = state_31931;
var statearr_31945_31971 = state_31931__$1;
(statearr_31945_31971[(2)] = inst_31908);

(statearr_31945_31971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31932 === (10))){
var inst_31927 = (state_31931[(2)]);
var state_31931__$1 = state_31931;
var statearr_31946_31972 = state_31931__$1;
(statearr_31946_31972[(2)] = inst_31927);

(statearr_31946_31972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31932 === (8))){
var inst_31908 = (state_31931[(7)]);
var inst_31918 = cljs.core.next.call(null,inst_31908);
var inst_31908__$1 = inst_31918;
var state_31931__$1 = (function (){var statearr_31947 = state_31931;
(statearr_31947[(7)] = inst_31908__$1);

return statearr_31947;
})();
var statearr_31948_31973 = state_31931__$1;
(statearr_31948_31973[(2)] = null);

(statearr_31948_31973[(1)] = (2));


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
});})(c__21335__auto__))
;
return ((function (switch__21270__auto__,c__21335__auto__){
return (function() {
var cljs$core$async$state_machine__21271__auto__ = null;
var cljs$core$async$state_machine__21271__auto____0 = (function (){
var statearr_31952 = [null,null,null,null,null,null,null,null];
(statearr_31952[(0)] = cljs$core$async$state_machine__21271__auto__);

(statearr_31952[(1)] = (1));

return statearr_31952;
});
var cljs$core$async$state_machine__21271__auto____1 = (function (state_31931){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_31931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e31953){if((e31953 instanceof Object)){
var ex__21274__auto__ = e31953;
var statearr_31954_31974 = state_31931;
(statearr_31954_31974[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31975 = state_31931;
state_31931 = G__31975;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$state_machine__21271__auto__ = function(state_31931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21271__auto____1.call(this,state_31931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21271__auto____0;
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21271__auto____1;
return cljs$core$async$state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto__))
})();
var state__21337__auto__ = (function (){var statearr_31955 = f__21336__auto__.call(null);
(statearr_31955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto__);

return statearr_31955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto__))
);

return c__21335__auto__;
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
if(typeof cljs.core.async.t32201 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32201 = (function (mult,ch,cs,meta32202){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32202 = meta32202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32203,meta32202__$1){
var self__ = this;
var _32203__$1 = this;
return (new cljs.core.async.t32201(self__.mult,self__.ch,self__.cs,meta32202__$1));
});})(cs))
;

cljs.core.async.t32201.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32203){
var self__ = this;
var _32203__$1 = this;
return self__.meta32202;
});})(cs))
;

cljs.core.async.t32201.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32201.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32201.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32201.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32201.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32201.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t32201.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32202","meta32202",571478245,null)], null);
});})(cs))
;

cljs.core.async.t32201.cljs$lang$type = true;

cljs.core.async.t32201.cljs$lang$ctorStr = "cljs.core.async/t32201";

cljs.core.async.t32201.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t32201");
});})(cs))
;

cljs.core.async.__GT_t32201 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t32201(mult__$1,ch__$1,cs__$1,meta32202){
return (new cljs.core.async.t32201(mult__$1,ch__$1,cs__$1,meta32202));
});})(cs))
;

}

return (new cljs.core.async.t32201(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21335__auto___32422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___32422,cs,m,dchan,dctr,done){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___32422,cs,m,dchan,dctr,done){
return (function (state_32334){
var state_val_32335 = (state_32334[(1)]);
if((state_val_32335 === (7))){
var inst_32330 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32336_32423 = state_32334__$1;
(statearr_32336_32423[(2)] = inst_32330);

(statearr_32336_32423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (20))){
var inst_32235 = (state_32334[(7)]);
var inst_32245 = cljs.core.first.call(null,inst_32235);
var inst_32246 = cljs.core.nth.call(null,inst_32245,(0),null);
var inst_32247 = cljs.core.nth.call(null,inst_32245,(1),null);
var state_32334__$1 = (function (){var statearr_32337 = state_32334;
(statearr_32337[(8)] = inst_32246);

return statearr_32337;
})();
if(cljs.core.truth_(inst_32247)){
var statearr_32338_32424 = state_32334__$1;
(statearr_32338_32424[(1)] = (22));

} else {
var statearr_32339_32425 = state_32334__$1;
(statearr_32339_32425[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (27))){
var inst_32277 = (state_32334[(9)]);
var inst_32206 = (state_32334[(10)]);
var inst_32275 = (state_32334[(11)]);
var inst_32282 = (state_32334[(12)]);
var inst_32282__$1 = cljs.core._nth.call(null,inst_32275,inst_32277);
var inst_32283 = cljs.core.async.put_BANG_.call(null,inst_32282__$1,inst_32206,done);
var state_32334__$1 = (function (){var statearr_32340 = state_32334;
(statearr_32340[(12)] = inst_32282__$1);

return statearr_32340;
})();
if(cljs.core.truth_(inst_32283)){
var statearr_32341_32426 = state_32334__$1;
(statearr_32341_32426[(1)] = (30));

} else {
var statearr_32342_32427 = state_32334__$1;
(statearr_32342_32427[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (1))){
var state_32334__$1 = state_32334;
var statearr_32343_32428 = state_32334__$1;
(statearr_32343_32428[(2)] = null);

(statearr_32343_32428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (24))){
var inst_32235 = (state_32334[(7)]);
var inst_32252 = (state_32334[(2)]);
var inst_32253 = cljs.core.next.call(null,inst_32235);
var inst_32215 = inst_32253;
var inst_32216 = null;
var inst_32217 = (0);
var inst_32218 = (0);
var state_32334__$1 = (function (){var statearr_32344 = state_32334;
(statearr_32344[(13)] = inst_32216);

(statearr_32344[(14)] = inst_32217);

(statearr_32344[(15)] = inst_32218);

(statearr_32344[(16)] = inst_32215);

(statearr_32344[(17)] = inst_32252);

return statearr_32344;
})();
var statearr_32345_32429 = state_32334__$1;
(statearr_32345_32429[(2)] = null);

(statearr_32345_32429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (39))){
var state_32334__$1 = state_32334;
var statearr_32349_32430 = state_32334__$1;
(statearr_32349_32430[(2)] = null);

(statearr_32349_32430[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (4))){
var inst_32206 = (state_32334[(10)]);
var inst_32206__$1 = (state_32334[(2)]);
var inst_32207 = (inst_32206__$1 == null);
var state_32334__$1 = (function (){var statearr_32350 = state_32334;
(statearr_32350[(10)] = inst_32206__$1);

return statearr_32350;
})();
if(cljs.core.truth_(inst_32207)){
var statearr_32351_32431 = state_32334__$1;
(statearr_32351_32431[(1)] = (5));

} else {
var statearr_32352_32432 = state_32334__$1;
(statearr_32352_32432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (15))){
var inst_32216 = (state_32334[(13)]);
var inst_32217 = (state_32334[(14)]);
var inst_32218 = (state_32334[(15)]);
var inst_32215 = (state_32334[(16)]);
var inst_32231 = (state_32334[(2)]);
var inst_32232 = (inst_32218 + (1));
var tmp32346 = inst_32216;
var tmp32347 = inst_32217;
var tmp32348 = inst_32215;
var inst_32215__$1 = tmp32348;
var inst_32216__$1 = tmp32346;
var inst_32217__$1 = tmp32347;
var inst_32218__$1 = inst_32232;
var state_32334__$1 = (function (){var statearr_32353 = state_32334;
(statearr_32353[(13)] = inst_32216__$1);

(statearr_32353[(14)] = inst_32217__$1);

(statearr_32353[(15)] = inst_32218__$1);

(statearr_32353[(16)] = inst_32215__$1);

(statearr_32353[(18)] = inst_32231);

return statearr_32353;
})();
var statearr_32354_32433 = state_32334__$1;
(statearr_32354_32433[(2)] = null);

(statearr_32354_32433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (21))){
var inst_32256 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32358_32434 = state_32334__$1;
(statearr_32358_32434[(2)] = inst_32256);

(statearr_32358_32434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (31))){
var inst_32282 = (state_32334[(12)]);
var inst_32286 = done.call(null,null);
var inst_32287 = cljs.core.async.untap_STAR_.call(null,m,inst_32282);
var state_32334__$1 = (function (){var statearr_32359 = state_32334;
(statearr_32359[(19)] = inst_32286);

return statearr_32359;
})();
var statearr_32360_32435 = state_32334__$1;
(statearr_32360_32435[(2)] = inst_32287);

(statearr_32360_32435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (32))){
var inst_32277 = (state_32334[(9)]);
var inst_32274 = (state_32334[(20)]);
var inst_32276 = (state_32334[(21)]);
var inst_32275 = (state_32334[(11)]);
var inst_32289 = (state_32334[(2)]);
var inst_32290 = (inst_32277 + (1));
var tmp32355 = inst_32274;
var tmp32356 = inst_32276;
var tmp32357 = inst_32275;
var inst_32274__$1 = tmp32355;
var inst_32275__$1 = tmp32357;
var inst_32276__$1 = tmp32356;
var inst_32277__$1 = inst_32290;
var state_32334__$1 = (function (){var statearr_32361 = state_32334;
(statearr_32361[(9)] = inst_32277__$1);

(statearr_32361[(20)] = inst_32274__$1);

(statearr_32361[(21)] = inst_32276__$1);

(statearr_32361[(11)] = inst_32275__$1);

(statearr_32361[(22)] = inst_32289);

return statearr_32361;
})();
var statearr_32362_32436 = state_32334__$1;
(statearr_32362_32436[(2)] = null);

(statearr_32362_32436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (40))){
var inst_32302 = (state_32334[(23)]);
var inst_32306 = done.call(null,null);
var inst_32307 = cljs.core.async.untap_STAR_.call(null,m,inst_32302);
var state_32334__$1 = (function (){var statearr_32363 = state_32334;
(statearr_32363[(24)] = inst_32306);

return statearr_32363;
})();
var statearr_32364_32437 = state_32334__$1;
(statearr_32364_32437[(2)] = inst_32307);

(statearr_32364_32437[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (33))){
var inst_32293 = (state_32334[(25)]);
var inst_32295 = cljs.core.chunked_seq_QMARK_.call(null,inst_32293);
var state_32334__$1 = state_32334;
if(inst_32295){
var statearr_32365_32438 = state_32334__$1;
(statearr_32365_32438[(1)] = (36));

} else {
var statearr_32366_32439 = state_32334__$1;
(statearr_32366_32439[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (13))){
var inst_32225 = (state_32334[(26)]);
var inst_32228 = cljs.core.async.close_BANG_.call(null,inst_32225);
var state_32334__$1 = state_32334;
var statearr_32367_32440 = state_32334__$1;
(statearr_32367_32440[(2)] = inst_32228);

(statearr_32367_32440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (22))){
var inst_32246 = (state_32334[(8)]);
var inst_32249 = cljs.core.async.close_BANG_.call(null,inst_32246);
var state_32334__$1 = state_32334;
var statearr_32368_32441 = state_32334__$1;
(statearr_32368_32441[(2)] = inst_32249);

(statearr_32368_32441[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (36))){
var inst_32293 = (state_32334[(25)]);
var inst_32297 = cljs.core.chunk_first.call(null,inst_32293);
var inst_32298 = cljs.core.chunk_rest.call(null,inst_32293);
var inst_32299 = cljs.core.count.call(null,inst_32297);
var inst_32274 = inst_32298;
var inst_32275 = inst_32297;
var inst_32276 = inst_32299;
var inst_32277 = (0);
var state_32334__$1 = (function (){var statearr_32369 = state_32334;
(statearr_32369[(9)] = inst_32277);

(statearr_32369[(20)] = inst_32274);

(statearr_32369[(21)] = inst_32276);

(statearr_32369[(11)] = inst_32275);

return statearr_32369;
})();
var statearr_32370_32442 = state_32334__$1;
(statearr_32370_32442[(2)] = null);

(statearr_32370_32442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (41))){
var inst_32293 = (state_32334[(25)]);
var inst_32309 = (state_32334[(2)]);
var inst_32310 = cljs.core.next.call(null,inst_32293);
var inst_32274 = inst_32310;
var inst_32275 = null;
var inst_32276 = (0);
var inst_32277 = (0);
var state_32334__$1 = (function (){var statearr_32371 = state_32334;
(statearr_32371[(9)] = inst_32277);

(statearr_32371[(27)] = inst_32309);

(statearr_32371[(20)] = inst_32274);

(statearr_32371[(21)] = inst_32276);

(statearr_32371[(11)] = inst_32275);

return statearr_32371;
})();
var statearr_32372_32443 = state_32334__$1;
(statearr_32372_32443[(2)] = null);

(statearr_32372_32443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (43))){
var state_32334__$1 = state_32334;
var statearr_32373_32444 = state_32334__$1;
(statearr_32373_32444[(2)] = null);

(statearr_32373_32444[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (29))){
var inst_32318 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32374_32445 = state_32334__$1;
(statearr_32374_32445[(2)] = inst_32318);

(statearr_32374_32445[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (44))){
var inst_32327 = (state_32334[(2)]);
var state_32334__$1 = (function (){var statearr_32375 = state_32334;
(statearr_32375[(28)] = inst_32327);

return statearr_32375;
})();
var statearr_32376_32446 = state_32334__$1;
(statearr_32376_32446[(2)] = null);

(statearr_32376_32446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (6))){
var inst_32266 = (state_32334[(29)]);
var inst_32265 = cljs.core.deref.call(null,cs);
var inst_32266__$1 = cljs.core.keys.call(null,inst_32265);
var inst_32267 = cljs.core.count.call(null,inst_32266__$1);
var inst_32268 = cljs.core.reset_BANG_.call(null,dctr,inst_32267);
var inst_32273 = cljs.core.seq.call(null,inst_32266__$1);
var inst_32274 = inst_32273;
var inst_32275 = null;
var inst_32276 = (0);
var inst_32277 = (0);
var state_32334__$1 = (function (){var statearr_32377 = state_32334;
(statearr_32377[(9)] = inst_32277);

(statearr_32377[(20)] = inst_32274);

(statearr_32377[(29)] = inst_32266__$1);

(statearr_32377[(21)] = inst_32276);

(statearr_32377[(11)] = inst_32275);

(statearr_32377[(30)] = inst_32268);

return statearr_32377;
})();
var statearr_32378_32447 = state_32334__$1;
(statearr_32378_32447[(2)] = null);

(statearr_32378_32447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (28))){
var inst_32274 = (state_32334[(20)]);
var inst_32293 = (state_32334[(25)]);
var inst_32293__$1 = cljs.core.seq.call(null,inst_32274);
var state_32334__$1 = (function (){var statearr_32379 = state_32334;
(statearr_32379[(25)] = inst_32293__$1);

return statearr_32379;
})();
if(inst_32293__$1){
var statearr_32380_32448 = state_32334__$1;
(statearr_32380_32448[(1)] = (33));

} else {
var statearr_32381_32449 = state_32334__$1;
(statearr_32381_32449[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (25))){
var inst_32277 = (state_32334[(9)]);
var inst_32276 = (state_32334[(21)]);
var inst_32279 = (inst_32277 < inst_32276);
var inst_32280 = inst_32279;
var state_32334__$1 = state_32334;
if(cljs.core.truth_(inst_32280)){
var statearr_32382_32450 = state_32334__$1;
(statearr_32382_32450[(1)] = (27));

} else {
var statearr_32383_32451 = state_32334__$1;
(statearr_32383_32451[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (34))){
var state_32334__$1 = state_32334;
var statearr_32384_32452 = state_32334__$1;
(statearr_32384_32452[(2)] = null);

(statearr_32384_32452[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (17))){
var state_32334__$1 = state_32334;
var statearr_32385_32453 = state_32334__$1;
(statearr_32385_32453[(2)] = null);

(statearr_32385_32453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (3))){
var inst_32332 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32334__$1,inst_32332);
} else {
if((state_val_32335 === (12))){
var inst_32261 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32386_32454 = state_32334__$1;
(statearr_32386_32454[(2)] = inst_32261);

(statearr_32386_32454[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (2))){
var state_32334__$1 = state_32334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32334__$1,(4),ch);
} else {
if((state_val_32335 === (23))){
var state_32334__$1 = state_32334;
var statearr_32387_32455 = state_32334__$1;
(statearr_32387_32455[(2)] = null);

(statearr_32387_32455[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (35))){
var inst_32316 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32388_32456 = state_32334__$1;
(statearr_32388_32456[(2)] = inst_32316);

(statearr_32388_32456[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (19))){
var inst_32235 = (state_32334[(7)]);
var inst_32239 = cljs.core.chunk_first.call(null,inst_32235);
var inst_32240 = cljs.core.chunk_rest.call(null,inst_32235);
var inst_32241 = cljs.core.count.call(null,inst_32239);
var inst_32215 = inst_32240;
var inst_32216 = inst_32239;
var inst_32217 = inst_32241;
var inst_32218 = (0);
var state_32334__$1 = (function (){var statearr_32389 = state_32334;
(statearr_32389[(13)] = inst_32216);

(statearr_32389[(14)] = inst_32217);

(statearr_32389[(15)] = inst_32218);

(statearr_32389[(16)] = inst_32215);

return statearr_32389;
})();
var statearr_32390_32457 = state_32334__$1;
(statearr_32390_32457[(2)] = null);

(statearr_32390_32457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (11))){
var inst_32215 = (state_32334[(16)]);
var inst_32235 = (state_32334[(7)]);
var inst_32235__$1 = cljs.core.seq.call(null,inst_32215);
var state_32334__$1 = (function (){var statearr_32391 = state_32334;
(statearr_32391[(7)] = inst_32235__$1);

return statearr_32391;
})();
if(inst_32235__$1){
var statearr_32392_32458 = state_32334__$1;
(statearr_32392_32458[(1)] = (16));

} else {
var statearr_32393_32459 = state_32334__$1;
(statearr_32393_32459[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (9))){
var inst_32263 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32394_32460 = state_32334__$1;
(statearr_32394_32460[(2)] = inst_32263);

(statearr_32394_32460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (5))){
var inst_32213 = cljs.core.deref.call(null,cs);
var inst_32214 = cljs.core.seq.call(null,inst_32213);
var inst_32215 = inst_32214;
var inst_32216 = null;
var inst_32217 = (0);
var inst_32218 = (0);
var state_32334__$1 = (function (){var statearr_32395 = state_32334;
(statearr_32395[(13)] = inst_32216);

(statearr_32395[(14)] = inst_32217);

(statearr_32395[(15)] = inst_32218);

(statearr_32395[(16)] = inst_32215);

return statearr_32395;
})();
var statearr_32396_32461 = state_32334__$1;
(statearr_32396_32461[(2)] = null);

(statearr_32396_32461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (14))){
var state_32334__$1 = state_32334;
var statearr_32397_32462 = state_32334__$1;
(statearr_32397_32462[(2)] = null);

(statearr_32397_32462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (45))){
var inst_32324 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32398_32463 = state_32334__$1;
(statearr_32398_32463[(2)] = inst_32324);

(statearr_32398_32463[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (26))){
var inst_32266 = (state_32334[(29)]);
var inst_32320 = (state_32334[(2)]);
var inst_32321 = cljs.core.seq.call(null,inst_32266);
var state_32334__$1 = (function (){var statearr_32399 = state_32334;
(statearr_32399[(31)] = inst_32320);

return statearr_32399;
})();
if(inst_32321){
var statearr_32400_32464 = state_32334__$1;
(statearr_32400_32464[(1)] = (42));

} else {
var statearr_32401_32465 = state_32334__$1;
(statearr_32401_32465[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (16))){
var inst_32235 = (state_32334[(7)]);
var inst_32237 = cljs.core.chunked_seq_QMARK_.call(null,inst_32235);
var state_32334__$1 = state_32334;
if(inst_32237){
var statearr_32402_32466 = state_32334__$1;
(statearr_32402_32466[(1)] = (19));

} else {
var statearr_32403_32467 = state_32334__$1;
(statearr_32403_32467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (38))){
var inst_32313 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32404_32468 = state_32334__$1;
(statearr_32404_32468[(2)] = inst_32313);

(statearr_32404_32468[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (30))){
var state_32334__$1 = state_32334;
var statearr_32405_32469 = state_32334__$1;
(statearr_32405_32469[(2)] = null);

(statearr_32405_32469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (10))){
var inst_32216 = (state_32334[(13)]);
var inst_32218 = (state_32334[(15)]);
var inst_32224 = cljs.core._nth.call(null,inst_32216,inst_32218);
var inst_32225 = cljs.core.nth.call(null,inst_32224,(0),null);
var inst_32226 = cljs.core.nth.call(null,inst_32224,(1),null);
var state_32334__$1 = (function (){var statearr_32406 = state_32334;
(statearr_32406[(26)] = inst_32225);

return statearr_32406;
})();
if(cljs.core.truth_(inst_32226)){
var statearr_32407_32470 = state_32334__$1;
(statearr_32407_32470[(1)] = (13));

} else {
var statearr_32408_32471 = state_32334__$1;
(statearr_32408_32471[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (18))){
var inst_32259 = (state_32334[(2)]);
var state_32334__$1 = state_32334;
var statearr_32409_32472 = state_32334__$1;
(statearr_32409_32472[(2)] = inst_32259);

(statearr_32409_32472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (42))){
var state_32334__$1 = state_32334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32334__$1,(45),dchan);
} else {
if((state_val_32335 === (37))){
var inst_32206 = (state_32334[(10)]);
var inst_32293 = (state_32334[(25)]);
var inst_32302 = (state_32334[(23)]);
var inst_32302__$1 = cljs.core.first.call(null,inst_32293);
var inst_32303 = cljs.core.async.put_BANG_.call(null,inst_32302__$1,inst_32206,done);
var state_32334__$1 = (function (){var statearr_32410 = state_32334;
(statearr_32410[(23)] = inst_32302__$1);

return statearr_32410;
})();
if(cljs.core.truth_(inst_32303)){
var statearr_32411_32473 = state_32334__$1;
(statearr_32411_32473[(1)] = (39));

} else {
var statearr_32412_32474 = state_32334__$1;
(statearr_32412_32474[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32335 === (8))){
var inst_32217 = (state_32334[(14)]);
var inst_32218 = (state_32334[(15)]);
var inst_32220 = (inst_32218 < inst_32217);
var inst_32221 = inst_32220;
var state_32334__$1 = state_32334;
if(cljs.core.truth_(inst_32221)){
var statearr_32413_32475 = state_32334__$1;
(statearr_32413_32475[(1)] = (10));

} else {
var statearr_32414_32476 = state_32334__$1;
(statearr_32414_32476[(1)] = (11));

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
});})(c__21335__auto___32422,cs,m,dchan,dctr,done))
;
return ((function (switch__21270__auto__,c__21335__auto___32422,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21271__auto__ = null;
var cljs$core$async$mult_$_state_machine__21271__auto____0 = (function (){
var statearr_32418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32418[(0)] = cljs$core$async$mult_$_state_machine__21271__auto__);

(statearr_32418[(1)] = (1));

return statearr_32418;
});
var cljs$core$async$mult_$_state_machine__21271__auto____1 = (function (state_32334){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_32334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e32419){if((e32419 instanceof Object)){
var ex__21274__auto__ = e32419;
var statearr_32420_32477 = state_32334;
(statearr_32420_32477[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32478 = state_32334;
state_32334 = G__32478;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21271__auto__ = function(state_32334){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21271__auto____1.call(this,state_32334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21271__auto____0;
cljs$core$async$mult_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21271__auto____1;
return cljs$core$async$mult_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___32422,cs,m,dchan,dctr,done))
})();
var state__21337__auto__ = (function (){var statearr_32421 = f__21336__auto__.call(null);
(statearr_32421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___32422);

return statearr_32421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___32422,cs,m,dchan,dctr,done))
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
var args32479 = [];
var len__17521__auto___32482 = arguments.length;
var i__17522__auto___32483 = (0);
while(true){
if((i__17522__auto___32483 < len__17521__auto___32482)){
args32479.push((arguments[i__17522__auto___32483]));

var G__32484 = (i__17522__auto___32483 + (1));
i__17522__auto___32483 = G__32484;
continue;
} else {
}
break;
}

var G__32481 = args32479.length;
switch (G__32481) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32479.length)].join('')));

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
var len__17521__auto___32498 = arguments.length;
var i__17522__auto___32499 = (0);
while(true){
if((i__17522__auto___32499 < len__17521__auto___32498)){
args__17528__auto__.push((arguments[i__17522__auto___32499]));

var G__32500 = (i__17522__auto___32499 + (1));
i__17522__auto___32499 = G__32500;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((3) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17529__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32492){
var map__32493 = p__32492;
var map__32493__$1 = ((((!((map__32493 == null)))?((((map__32493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32493):map__32493);
var opts = map__32493__$1;
var statearr_32495_32501 = state;
(statearr_32495_32501[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__32493,map__32493__$1,opts){
return (function (val){
var statearr_32496_32502 = state;
(statearr_32496_32502[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32493,map__32493__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_32497_32503 = state;
(statearr_32497_32503[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32488){
var G__32489 = cljs.core.first.call(null,seq32488);
var seq32488__$1 = cljs.core.next.call(null,seq32488);
var G__32490 = cljs.core.first.call(null,seq32488__$1);
var seq32488__$2 = cljs.core.next.call(null,seq32488__$1);
var G__32491 = cljs.core.first.call(null,seq32488__$2);
var seq32488__$3 = cljs.core.next.call(null,seq32488__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32489,G__32490,G__32491,seq32488__$3);
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
if(typeof cljs.core.async.t32667 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32667 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32668){
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
this.meta32668 = meta32668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32669,meta32668__$1){
var self__ = this;
var _32669__$1 = this;
return (new cljs.core.async.t32667(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32668__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32667.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32669){
var self__ = this;
var _32669__$1 = this;
return self__.meta32668;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32667.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32667.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32667.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32667.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32667.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32667.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32667.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t32667.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32668","meta32668",-2015257419,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32667.cljs$lang$type = true;

cljs.core.async.t32667.cljs$lang$ctorStr = "cljs.core.async/t32667";

cljs.core.async.t32667.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t32667");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32667 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t32667(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32668){
return (new cljs.core.async.t32667(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32668));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32667(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21335__auto___32830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___32830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___32830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32767){
var state_val_32768 = (state_32767[(1)]);
if((state_val_32768 === (7))){
var inst_32685 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
var statearr_32769_32831 = state_32767__$1;
(statearr_32769_32831[(2)] = inst_32685);

(statearr_32769_32831[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (20))){
var inst_32697 = (state_32767[(7)]);
var state_32767__$1 = state_32767;
var statearr_32770_32832 = state_32767__$1;
(statearr_32770_32832[(2)] = inst_32697);

(statearr_32770_32832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (27))){
var state_32767__$1 = state_32767;
var statearr_32771_32833 = state_32767__$1;
(statearr_32771_32833[(2)] = null);

(statearr_32771_32833[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (1))){
var inst_32673 = (state_32767[(8)]);
var inst_32673__$1 = calc_state.call(null);
var inst_32675 = (inst_32673__$1 == null);
var inst_32676 = cljs.core.not.call(null,inst_32675);
var state_32767__$1 = (function (){var statearr_32772 = state_32767;
(statearr_32772[(8)] = inst_32673__$1);

return statearr_32772;
})();
if(inst_32676){
var statearr_32773_32834 = state_32767__$1;
(statearr_32773_32834[(1)] = (2));

} else {
var statearr_32774_32835 = state_32767__$1;
(statearr_32774_32835[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (24))){
var inst_32720 = (state_32767[(9)]);
var inst_32741 = (state_32767[(10)]);
var inst_32727 = (state_32767[(11)]);
var inst_32741__$1 = inst_32720.call(null,inst_32727);
var state_32767__$1 = (function (){var statearr_32775 = state_32767;
(statearr_32775[(10)] = inst_32741__$1);

return statearr_32775;
})();
if(cljs.core.truth_(inst_32741__$1)){
var statearr_32776_32836 = state_32767__$1;
(statearr_32776_32836[(1)] = (29));

} else {
var statearr_32777_32837 = state_32767__$1;
(statearr_32777_32837[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (4))){
var inst_32688 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
if(cljs.core.truth_(inst_32688)){
var statearr_32778_32838 = state_32767__$1;
(statearr_32778_32838[(1)] = (8));

} else {
var statearr_32779_32839 = state_32767__$1;
(statearr_32779_32839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (15))){
var inst_32714 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
if(cljs.core.truth_(inst_32714)){
var statearr_32780_32840 = state_32767__$1;
(statearr_32780_32840[(1)] = (19));

} else {
var statearr_32781_32841 = state_32767__$1;
(statearr_32781_32841[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (21))){
var inst_32719 = (state_32767[(12)]);
var inst_32719__$1 = (state_32767[(2)]);
var inst_32720 = cljs.core.get.call(null,inst_32719__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32721 = cljs.core.get.call(null,inst_32719__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32722 = cljs.core.get.call(null,inst_32719__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32767__$1 = (function (){var statearr_32782 = state_32767;
(statearr_32782[(12)] = inst_32719__$1);

(statearr_32782[(9)] = inst_32720);

(statearr_32782[(13)] = inst_32721);

return statearr_32782;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32767__$1,(22),inst_32722);
} else {
if((state_val_32768 === (31))){
var inst_32749 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
if(cljs.core.truth_(inst_32749)){
var statearr_32783_32842 = state_32767__$1;
(statearr_32783_32842[(1)] = (32));

} else {
var statearr_32784_32843 = state_32767__$1;
(statearr_32784_32843[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (32))){
var inst_32726 = (state_32767[(14)]);
var state_32767__$1 = state_32767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32767__$1,(35),out,inst_32726);
} else {
if((state_val_32768 === (33))){
var inst_32719 = (state_32767[(12)]);
var inst_32697 = inst_32719;
var state_32767__$1 = (function (){var statearr_32785 = state_32767;
(statearr_32785[(7)] = inst_32697);

return statearr_32785;
})();
var statearr_32786_32844 = state_32767__$1;
(statearr_32786_32844[(2)] = null);

(statearr_32786_32844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (13))){
var inst_32697 = (state_32767[(7)]);
var inst_32704 = inst_32697.cljs$lang$protocol_mask$partition0$;
var inst_32705 = (inst_32704 & (64));
var inst_32706 = inst_32697.cljs$core$ISeq$;
var inst_32707 = (inst_32705) || (inst_32706);
var state_32767__$1 = state_32767;
if(cljs.core.truth_(inst_32707)){
var statearr_32787_32845 = state_32767__$1;
(statearr_32787_32845[(1)] = (16));

} else {
var statearr_32788_32846 = state_32767__$1;
(statearr_32788_32846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (22))){
var inst_32727 = (state_32767[(11)]);
var inst_32726 = (state_32767[(14)]);
var inst_32725 = (state_32767[(2)]);
var inst_32726__$1 = cljs.core.nth.call(null,inst_32725,(0),null);
var inst_32727__$1 = cljs.core.nth.call(null,inst_32725,(1),null);
var inst_32728 = (inst_32726__$1 == null);
var inst_32729 = cljs.core._EQ_.call(null,inst_32727__$1,change);
var inst_32730 = (inst_32728) || (inst_32729);
var state_32767__$1 = (function (){var statearr_32789 = state_32767;
(statearr_32789[(11)] = inst_32727__$1);

(statearr_32789[(14)] = inst_32726__$1);

return statearr_32789;
})();
if(cljs.core.truth_(inst_32730)){
var statearr_32790_32847 = state_32767__$1;
(statearr_32790_32847[(1)] = (23));

} else {
var statearr_32791_32848 = state_32767__$1;
(statearr_32791_32848[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (36))){
var inst_32719 = (state_32767[(12)]);
var inst_32697 = inst_32719;
var state_32767__$1 = (function (){var statearr_32792 = state_32767;
(statearr_32792[(7)] = inst_32697);

return statearr_32792;
})();
var statearr_32793_32849 = state_32767__$1;
(statearr_32793_32849[(2)] = null);

(statearr_32793_32849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (29))){
var inst_32741 = (state_32767[(10)]);
var state_32767__$1 = state_32767;
var statearr_32794_32850 = state_32767__$1;
(statearr_32794_32850[(2)] = inst_32741);

(statearr_32794_32850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (6))){
var state_32767__$1 = state_32767;
var statearr_32795_32851 = state_32767__$1;
(statearr_32795_32851[(2)] = false);

(statearr_32795_32851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (28))){
var inst_32737 = (state_32767[(2)]);
var inst_32738 = calc_state.call(null);
var inst_32697 = inst_32738;
var state_32767__$1 = (function (){var statearr_32796 = state_32767;
(statearr_32796[(15)] = inst_32737);

(statearr_32796[(7)] = inst_32697);

return statearr_32796;
})();
var statearr_32797_32852 = state_32767__$1;
(statearr_32797_32852[(2)] = null);

(statearr_32797_32852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (25))){
var inst_32763 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
var statearr_32798_32853 = state_32767__$1;
(statearr_32798_32853[(2)] = inst_32763);

(statearr_32798_32853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (34))){
var inst_32761 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
var statearr_32799_32854 = state_32767__$1;
(statearr_32799_32854[(2)] = inst_32761);

(statearr_32799_32854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (17))){
var state_32767__$1 = state_32767;
var statearr_32800_32855 = state_32767__$1;
(statearr_32800_32855[(2)] = false);

(statearr_32800_32855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (3))){
var state_32767__$1 = state_32767;
var statearr_32801_32856 = state_32767__$1;
(statearr_32801_32856[(2)] = false);

(statearr_32801_32856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (12))){
var inst_32765 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32767__$1,inst_32765);
} else {
if((state_val_32768 === (2))){
var inst_32673 = (state_32767[(8)]);
var inst_32678 = inst_32673.cljs$lang$protocol_mask$partition0$;
var inst_32679 = (inst_32678 & (64));
var inst_32680 = inst_32673.cljs$core$ISeq$;
var inst_32681 = (inst_32679) || (inst_32680);
var state_32767__$1 = state_32767;
if(cljs.core.truth_(inst_32681)){
var statearr_32802_32857 = state_32767__$1;
(statearr_32802_32857[(1)] = (5));

} else {
var statearr_32803_32858 = state_32767__$1;
(statearr_32803_32858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (23))){
var inst_32726 = (state_32767[(14)]);
var inst_32732 = (inst_32726 == null);
var state_32767__$1 = state_32767;
if(cljs.core.truth_(inst_32732)){
var statearr_32804_32859 = state_32767__$1;
(statearr_32804_32859[(1)] = (26));

} else {
var statearr_32805_32860 = state_32767__$1;
(statearr_32805_32860[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (35))){
var inst_32752 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
if(cljs.core.truth_(inst_32752)){
var statearr_32806_32861 = state_32767__$1;
(statearr_32806_32861[(1)] = (36));

} else {
var statearr_32807_32862 = state_32767__$1;
(statearr_32807_32862[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (19))){
var inst_32697 = (state_32767[(7)]);
var inst_32716 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32697);
var state_32767__$1 = state_32767;
var statearr_32808_32863 = state_32767__$1;
(statearr_32808_32863[(2)] = inst_32716);

(statearr_32808_32863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (11))){
var inst_32697 = (state_32767[(7)]);
var inst_32701 = (inst_32697 == null);
var inst_32702 = cljs.core.not.call(null,inst_32701);
var state_32767__$1 = state_32767;
if(inst_32702){
var statearr_32809_32864 = state_32767__$1;
(statearr_32809_32864[(1)] = (13));

} else {
var statearr_32810_32865 = state_32767__$1;
(statearr_32810_32865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (9))){
var inst_32673 = (state_32767[(8)]);
var state_32767__$1 = state_32767;
var statearr_32811_32866 = state_32767__$1;
(statearr_32811_32866[(2)] = inst_32673);

(statearr_32811_32866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (5))){
var state_32767__$1 = state_32767;
var statearr_32812_32867 = state_32767__$1;
(statearr_32812_32867[(2)] = true);

(statearr_32812_32867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (14))){
var state_32767__$1 = state_32767;
var statearr_32813_32868 = state_32767__$1;
(statearr_32813_32868[(2)] = false);

(statearr_32813_32868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (26))){
var inst_32727 = (state_32767[(11)]);
var inst_32734 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32727);
var state_32767__$1 = state_32767;
var statearr_32814_32869 = state_32767__$1;
(statearr_32814_32869[(2)] = inst_32734);

(statearr_32814_32869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (16))){
var state_32767__$1 = state_32767;
var statearr_32815_32870 = state_32767__$1;
(statearr_32815_32870[(2)] = true);

(statearr_32815_32870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (38))){
var inst_32757 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
var statearr_32816_32871 = state_32767__$1;
(statearr_32816_32871[(2)] = inst_32757);

(statearr_32816_32871[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (30))){
var inst_32720 = (state_32767[(9)]);
var inst_32727 = (state_32767[(11)]);
var inst_32721 = (state_32767[(13)]);
var inst_32744 = cljs.core.empty_QMARK_.call(null,inst_32720);
var inst_32745 = inst_32721.call(null,inst_32727);
var inst_32746 = cljs.core.not.call(null,inst_32745);
var inst_32747 = (inst_32744) && (inst_32746);
var state_32767__$1 = state_32767;
var statearr_32817_32872 = state_32767__$1;
(statearr_32817_32872[(2)] = inst_32747);

(statearr_32817_32872[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (10))){
var inst_32673 = (state_32767[(8)]);
var inst_32693 = (state_32767[(2)]);
var inst_32694 = cljs.core.get.call(null,inst_32693,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32695 = cljs.core.get.call(null,inst_32693,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32696 = cljs.core.get.call(null,inst_32693,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32697 = inst_32673;
var state_32767__$1 = (function (){var statearr_32818 = state_32767;
(statearr_32818[(16)] = inst_32694);

(statearr_32818[(17)] = inst_32695);

(statearr_32818[(7)] = inst_32697);

(statearr_32818[(18)] = inst_32696);

return statearr_32818;
})();
var statearr_32819_32873 = state_32767__$1;
(statearr_32819_32873[(2)] = null);

(statearr_32819_32873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (18))){
var inst_32711 = (state_32767[(2)]);
var state_32767__$1 = state_32767;
var statearr_32820_32874 = state_32767__$1;
(statearr_32820_32874[(2)] = inst_32711);

(statearr_32820_32874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (37))){
var state_32767__$1 = state_32767;
var statearr_32821_32875 = state_32767__$1;
(statearr_32821_32875[(2)] = null);

(statearr_32821_32875[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32768 === (8))){
var inst_32673 = (state_32767[(8)]);
var inst_32690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32673);
var state_32767__$1 = state_32767;
var statearr_32822_32876 = state_32767__$1;
(statearr_32822_32876[(2)] = inst_32690);

(statearr_32822_32876[(1)] = (10));


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
});})(c__21335__auto___32830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21270__auto__,c__21335__auto___32830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21271__auto__ = null;
var cljs$core$async$mix_$_state_machine__21271__auto____0 = (function (){
var statearr_32826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32826[(0)] = cljs$core$async$mix_$_state_machine__21271__auto__);

(statearr_32826[(1)] = (1));

return statearr_32826;
});
var cljs$core$async$mix_$_state_machine__21271__auto____1 = (function (state_32767){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_32767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e32827){if((e32827 instanceof Object)){
var ex__21274__auto__ = e32827;
var statearr_32828_32877 = state_32767;
(statearr_32828_32877[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32878 = state_32767;
state_32767 = G__32878;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21271__auto__ = function(state_32767){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21271__auto____1.call(this,state_32767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21271__auto____0;
cljs$core$async$mix_$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21271__auto____1;
return cljs$core$async$mix_$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___32830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21337__auto__ = (function (){var statearr_32829 = f__21336__auto__.call(null);
(statearr_32829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___32830);

return statearr_32829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___32830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args32881 = [];
var len__17521__auto___32884 = arguments.length;
var i__17522__auto___32885 = (0);
while(true){
if((i__17522__auto___32885 < len__17521__auto___32884)){
args32881.push((arguments[i__17522__auto___32885]));

var G__32886 = (i__17522__auto___32885 + (1));
i__17522__auto___32885 = G__32886;
continue;
} else {
}
break;
}

var G__32883 = args32881.length;
switch (G__32883) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32881.length)].join('')));

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
var args32889 = [];
var len__17521__auto___33014 = arguments.length;
var i__17522__auto___33015 = (0);
while(true){
if((i__17522__auto___33015 < len__17521__auto___33014)){
args32889.push((arguments[i__17522__auto___33015]));

var G__33016 = (i__17522__auto___33015 + (1));
i__17522__auto___33015 = G__33016;
continue;
} else {
}
break;
}

var G__32891 = args32889.length;
switch (G__32891) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32889.length)].join('')));

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
return (function (p1__32888_SHARP_){
if(cljs.core.truth_(p1__32888_SHARP_.call(null,topic))){
return p1__32888_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32888_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16482__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32892 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32892 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32893){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32893 = meta32893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32894,meta32893__$1){
var self__ = this;
var _32894__$1 = this;
return (new cljs.core.async.t32892(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32893__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32894){
var self__ = this;
var _32894__$1 = this;
return self__.meta32893;
});})(mults,ensure_mult))
;

cljs.core.async.t32892.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32892.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32892.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32892.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32892.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t32892.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t32892.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32892.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32893","meta32893",1558268158,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t32892.cljs$lang$type = true;

cljs.core.async.t32892.cljs$lang$ctorStr = "cljs.core.async/t32892";

cljs.core.async.t32892.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t32892");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32892 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t32892(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32893){
return (new cljs.core.async.t32892(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32893));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32892(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21335__auto___33018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___33018,mults,ensure_mult,p){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___33018,mults,ensure_mult,p){
return (function (state_32966){
var state_val_32967 = (state_32966[(1)]);
if((state_val_32967 === (7))){
var inst_32962 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
var statearr_32968_33019 = state_32966__$1;
(statearr_32968_33019[(2)] = inst_32962);

(statearr_32968_33019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (20))){
var state_32966__$1 = state_32966;
var statearr_32969_33020 = state_32966__$1;
(statearr_32969_33020[(2)] = null);

(statearr_32969_33020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (1))){
var state_32966__$1 = state_32966;
var statearr_32970_33021 = state_32966__$1;
(statearr_32970_33021[(2)] = null);

(statearr_32970_33021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (24))){
var inst_32945 = (state_32966[(7)]);
var inst_32954 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32945);
var state_32966__$1 = state_32966;
var statearr_32971_33022 = state_32966__$1;
(statearr_32971_33022[(2)] = inst_32954);

(statearr_32971_33022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (4))){
var inst_32897 = (state_32966[(8)]);
var inst_32897__$1 = (state_32966[(2)]);
var inst_32898 = (inst_32897__$1 == null);
var state_32966__$1 = (function (){var statearr_32972 = state_32966;
(statearr_32972[(8)] = inst_32897__$1);

return statearr_32972;
})();
if(cljs.core.truth_(inst_32898)){
var statearr_32973_33023 = state_32966__$1;
(statearr_32973_33023[(1)] = (5));

} else {
var statearr_32974_33024 = state_32966__$1;
(statearr_32974_33024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (15))){
var inst_32939 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
var statearr_32975_33025 = state_32966__$1;
(statearr_32975_33025[(2)] = inst_32939);

(statearr_32975_33025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (21))){
var inst_32959 = (state_32966[(2)]);
var state_32966__$1 = (function (){var statearr_32976 = state_32966;
(statearr_32976[(9)] = inst_32959);

return statearr_32976;
})();
var statearr_32977_33026 = state_32966__$1;
(statearr_32977_33026[(2)] = null);

(statearr_32977_33026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (13))){
var inst_32921 = (state_32966[(10)]);
var inst_32923 = cljs.core.chunked_seq_QMARK_.call(null,inst_32921);
var state_32966__$1 = state_32966;
if(inst_32923){
var statearr_32978_33027 = state_32966__$1;
(statearr_32978_33027[(1)] = (16));

} else {
var statearr_32979_33028 = state_32966__$1;
(statearr_32979_33028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (22))){
var inst_32951 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
if(cljs.core.truth_(inst_32951)){
var statearr_32980_33029 = state_32966__$1;
(statearr_32980_33029[(1)] = (23));

} else {
var statearr_32981_33030 = state_32966__$1;
(statearr_32981_33030[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (6))){
var inst_32947 = (state_32966[(11)]);
var inst_32897 = (state_32966[(8)]);
var inst_32945 = (state_32966[(7)]);
var inst_32945__$1 = topic_fn.call(null,inst_32897);
var inst_32946 = cljs.core.deref.call(null,mults);
var inst_32947__$1 = cljs.core.get.call(null,inst_32946,inst_32945__$1);
var state_32966__$1 = (function (){var statearr_32982 = state_32966;
(statearr_32982[(11)] = inst_32947__$1);

(statearr_32982[(7)] = inst_32945__$1);

return statearr_32982;
})();
if(cljs.core.truth_(inst_32947__$1)){
var statearr_32983_33031 = state_32966__$1;
(statearr_32983_33031[(1)] = (19));

} else {
var statearr_32984_33032 = state_32966__$1;
(statearr_32984_33032[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (25))){
var inst_32956 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
var statearr_32985_33033 = state_32966__$1;
(statearr_32985_33033[(2)] = inst_32956);

(statearr_32985_33033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (17))){
var inst_32921 = (state_32966[(10)]);
var inst_32930 = cljs.core.first.call(null,inst_32921);
var inst_32931 = cljs.core.async.muxch_STAR_.call(null,inst_32930);
var inst_32932 = cljs.core.async.close_BANG_.call(null,inst_32931);
var inst_32933 = cljs.core.next.call(null,inst_32921);
var inst_32907 = inst_32933;
var inst_32908 = null;
var inst_32909 = (0);
var inst_32910 = (0);
var state_32966__$1 = (function (){var statearr_32986 = state_32966;
(statearr_32986[(12)] = inst_32932);

(statearr_32986[(13)] = inst_32908);

(statearr_32986[(14)] = inst_32909);

(statearr_32986[(15)] = inst_32910);

(statearr_32986[(16)] = inst_32907);

return statearr_32986;
})();
var statearr_32987_33034 = state_32966__$1;
(statearr_32987_33034[(2)] = null);

(statearr_32987_33034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (3))){
var inst_32964 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32966__$1,inst_32964);
} else {
if((state_val_32967 === (12))){
var inst_32941 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
var statearr_32988_33035 = state_32966__$1;
(statearr_32988_33035[(2)] = inst_32941);

(statearr_32988_33035[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (2))){
var state_32966__$1 = state_32966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32966__$1,(4),ch);
} else {
if((state_val_32967 === (23))){
var state_32966__$1 = state_32966;
var statearr_32989_33036 = state_32966__$1;
(statearr_32989_33036[(2)] = null);

(statearr_32989_33036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (19))){
var inst_32947 = (state_32966[(11)]);
var inst_32897 = (state_32966[(8)]);
var inst_32949 = cljs.core.async.muxch_STAR_.call(null,inst_32947);
var state_32966__$1 = state_32966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32966__$1,(22),inst_32949,inst_32897);
} else {
if((state_val_32967 === (11))){
var inst_32921 = (state_32966[(10)]);
var inst_32907 = (state_32966[(16)]);
var inst_32921__$1 = cljs.core.seq.call(null,inst_32907);
var state_32966__$1 = (function (){var statearr_32990 = state_32966;
(statearr_32990[(10)] = inst_32921__$1);

return statearr_32990;
})();
if(inst_32921__$1){
var statearr_32991_33037 = state_32966__$1;
(statearr_32991_33037[(1)] = (13));

} else {
var statearr_32992_33038 = state_32966__$1;
(statearr_32992_33038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (9))){
var inst_32943 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
var statearr_32993_33039 = state_32966__$1;
(statearr_32993_33039[(2)] = inst_32943);

(statearr_32993_33039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (5))){
var inst_32904 = cljs.core.deref.call(null,mults);
var inst_32905 = cljs.core.vals.call(null,inst_32904);
var inst_32906 = cljs.core.seq.call(null,inst_32905);
var inst_32907 = inst_32906;
var inst_32908 = null;
var inst_32909 = (0);
var inst_32910 = (0);
var state_32966__$1 = (function (){var statearr_32994 = state_32966;
(statearr_32994[(13)] = inst_32908);

(statearr_32994[(14)] = inst_32909);

(statearr_32994[(15)] = inst_32910);

(statearr_32994[(16)] = inst_32907);

return statearr_32994;
})();
var statearr_32995_33040 = state_32966__$1;
(statearr_32995_33040[(2)] = null);

(statearr_32995_33040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (14))){
var state_32966__$1 = state_32966;
var statearr_32999_33041 = state_32966__$1;
(statearr_32999_33041[(2)] = null);

(statearr_32999_33041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (16))){
var inst_32921 = (state_32966[(10)]);
var inst_32925 = cljs.core.chunk_first.call(null,inst_32921);
var inst_32926 = cljs.core.chunk_rest.call(null,inst_32921);
var inst_32927 = cljs.core.count.call(null,inst_32925);
var inst_32907 = inst_32926;
var inst_32908 = inst_32925;
var inst_32909 = inst_32927;
var inst_32910 = (0);
var state_32966__$1 = (function (){var statearr_33000 = state_32966;
(statearr_33000[(13)] = inst_32908);

(statearr_33000[(14)] = inst_32909);

(statearr_33000[(15)] = inst_32910);

(statearr_33000[(16)] = inst_32907);

return statearr_33000;
})();
var statearr_33001_33042 = state_32966__$1;
(statearr_33001_33042[(2)] = null);

(statearr_33001_33042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (10))){
var inst_32908 = (state_32966[(13)]);
var inst_32909 = (state_32966[(14)]);
var inst_32910 = (state_32966[(15)]);
var inst_32907 = (state_32966[(16)]);
var inst_32915 = cljs.core._nth.call(null,inst_32908,inst_32910);
var inst_32916 = cljs.core.async.muxch_STAR_.call(null,inst_32915);
var inst_32917 = cljs.core.async.close_BANG_.call(null,inst_32916);
var inst_32918 = (inst_32910 + (1));
var tmp32996 = inst_32908;
var tmp32997 = inst_32909;
var tmp32998 = inst_32907;
var inst_32907__$1 = tmp32998;
var inst_32908__$1 = tmp32996;
var inst_32909__$1 = tmp32997;
var inst_32910__$1 = inst_32918;
var state_32966__$1 = (function (){var statearr_33002 = state_32966;
(statearr_33002[(17)] = inst_32917);

(statearr_33002[(13)] = inst_32908__$1);

(statearr_33002[(14)] = inst_32909__$1);

(statearr_33002[(15)] = inst_32910__$1);

(statearr_33002[(16)] = inst_32907__$1);

return statearr_33002;
})();
var statearr_33003_33043 = state_32966__$1;
(statearr_33003_33043[(2)] = null);

(statearr_33003_33043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (18))){
var inst_32936 = (state_32966[(2)]);
var state_32966__$1 = state_32966;
var statearr_33004_33044 = state_32966__$1;
(statearr_33004_33044[(2)] = inst_32936);

(statearr_33004_33044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32967 === (8))){
var inst_32909 = (state_32966[(14)]);
var inst_32910 = (state_32966[(15)]);
var inst_32912 = (inst_32910 < inst_32909);
var inst_32913 = inst_32912;
var state_32966__$1 = state_32966;
if(cljs.core.truth_(inst_32913)){
var statearr_33005_33045 = state_32966__$1;
(statearr_33005_33045[(1)] = (10));

} else {
var statearr_33006_33046 = state_32966__$1;
(statearr_33006_33046[(1)] = (11));

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
});})(c__21335__auto___33018,mults,ensure_mult,p))
;
return ((function (switch__21270__auto__,c__21335__auto___33018,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21271__auto__ = null;
var cljs$core$async$state_machine__21271__auto____0 = (function (){
var statearr_33010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33010[(0)] = cljs$core$async$state_machine__21271__auto__);

(statearr_33010[(1)] = (1));

return statearr_33010;
});
var cljs$core$async$state_machine__21271__auto____1 = (function (state_32966){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_32966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e33011){if((e33011 instanceof Object)){
var ex__21274__auto__ = e33011;
var statearr_33012_33047 = state_32966;
(statearr_33012_33047[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33048 = state_32966;
state_32966 = G__33048;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$state_machine__21271__auto__ = function(state_32966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21271__auto____1.call(this,state_32966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21271__auto____0;
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21271__auto____1;
return cljs$core$async$state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___33018,mults,ensure_mult,p))
})();
var state__21337__auto__ = (function (){var statearr_33013 = f__21336__auto__.call(null);
(statearr_33013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___33018);

return statearr_33013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___33018,mults,ensure_mult,p))
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
var args33049 = [];
var len__17521__auto___33052 = arguments.length;
var i__17522__auto___33053 = (0);
while(true){
if((i__17522__auto___33053 < len__17521__auto___33052)){
args33049.push((arguments[i__17522__auto___33053]));

var G__33054 = (i__17522__auto___33053 + (1));
i__17522__auto___33053 = G__33054;
continue;
} else {
}
break;
}

var G__33051 = args33049.length;
switch (G__33051) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33049.length)].join('')));

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
var args33056 = [];
var len__17521__auto___33059 = arguments.length;
var i__17522__auto___33060 = (0);
while(true){
if((i__17522__auto___33060 < len__17521__auto___33059)){
args33056.push((arguments[i__17522__auto___33060]));

var G__33061 = (i__17522__auto___33060 + (1));
i__17522__auto___33060 = G__33061;
continue;
} else {
}
break;
}

var G__33058 = args33056.length;
switch (G__33058) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33056.length)].join('')));

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
var args33063 = [];
var len__17521__auto___33134 = arguments.length;
var i__17522__auto___33135 = (0);
while(true){
if((i__17522__auto___33135 < len__17521__auto___33134)){
args33063.push((arguments[i__17522__auto___33135]));

var G__33136 = (i__17522__auto___33135 + (1));
i__17522__auto___33135 = G__33136;
continue;
} else {
}
break;
}

var G__33065 = args33063.length;
switch (G__33065) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33063.length)].join('')));

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
var c__21335__auto___33138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___33138,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___33138,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33104){
var state_val_33105 = (state_33104[(1)]);
if((state_val_33105 === (7))){
var state_33104__$1 = state_33104;
var statearr_33106_33139 = state_33104__$1;
(statearr_33106_33139[(2)] = null);

(statearr_33106_33139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (1))){
var state_33104__$1 = state_33104;
var statearr_33107_33140 = state_33104__$1;
(statearr_33107_33140[(2)] = null);

(statearr_33107_33140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (4))){
var inst_33068 = (state_33104[(7)]);
var inst_33070 = (inst_33068 < cnt);
var state_33104__$1 = state_33104;
if(cljs.core.truth_(inst_33070)){
var statearr_33108_33141 = state_33104__$1;
(statearr_33108_33141[(1)] = (6));

} else {
var statearr_33109_33142 = state_33104__$1;
(statearr_33109_33142[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (15))){
var inst_33100 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
var statearr_33110_33143 = state_33104__$1;
(statearr_33110_33143[(2)] = inst_33100);

(statearr_33110_33143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (13))){
var inst_33093 = cljs.core.async.close_BANG_.call(null,out);
var state_33104__$1 = state_33104;
var statearr_33111_33144 = state_33104__$1;
(statearr_33111_33144[(2)] = inst_33093);

(statearr_33111_33144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (6))){
var state_33104__$1 = state_33104;
var statearr_33112_33145 = state_33104__$1;
(statearr_33112_33145[(2)] = null);

(statearr_33112_33145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (3))){
var inst_33102 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33104__$1,inst_33102);
} else {
if((state_val_33105 === (12))){
var inst_33090 = (state_33104[(8)]);
var inst_33090__$1 = (state_33104[(2)]);
var inst_33091 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33090__$1);
var state_33104__$1 = (function (){var statearr_33113 = state_33104;
(statearr_33113[(8)] = inst_33090__$1);

return statearr_33113;
})();
if(cljs.core.truth_(inst_33091)){
var statearr_33114_33146 = state_33104__$1;
(statearr_33114_33146[(1)] = (13));

} else {
var statearr_33115_33147 = state_33104__$1;
(statearr_33115_33147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (2))){
var inst_33067 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33068 = (0);
var state_33104__$1 = (function (){var statearr_33116 = state_33104;
(statearr_33116[(9)] = inst_33067);

(statearr_33116[(7)] = inst_33068);

return statearr_33116;
})();
var statearr_33117_33148 = state_33104__$1;
(statearr_33117_33148[(2)] = null);

(statearr_33117_33148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (11))){
var inst_33068 = (state_33104[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33104,(10),Object,null,(9));
var inst_33077 = chs__$1.call(null,inst_33068);
var inst_33078 = done.call(null,inst_33068);
var inst_33079 = cljs.core.async.take_BANG_.call(null,inst_33077,inst_33078);
var state_33104__$1 = state_33104;
var statearr_33118_33149 = state_33104__$1;
(statearr_33118_33149[(2)] = inst_33079);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33104__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (9))){
var inst_33068 = (state_33104[(7)]);
var inst_33081 = (state_33104[(2)]);
var inst_33082 = (inst_33068 + (1));
var inst_33068__$1 = inst_33082;
var state_33104__$1 = (function (){var statearr_33119 = state_33104;
(statearr_33119[(10)] = inst_33081);

(statearr_33119[(7)] = inst_33068__$1);

return statearr_33119;
})();
var statearr_33120_33150 = state_33104__$1;
(statearr_33120_33150[(2)] = null);

(statearr_33120_33150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (5))){
var inst_33088 = (state_33104[(2)]);
var state_33104__$1 = (function (){var statearr_33121 = state_33104;
(statearr_33121[(11)] = inst_33088);

return statearr_33121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33104__$1,(12),dchan);
} else {
if((state_val_33105 === (14))){
var inst_33090 = (state_33104[(8)]);
var inst_33095 = cljs.core.apply.call(null,f,inst_33090);
var state_33104__$1 = state_33104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33104__$1,(16),out,inst_33095);
} else {
if((state_val_33105 === (16))){
var inst_33097 = (state_33104[(2)]);
var state_33104__$1 = (function (){var statearr_33122 = state_33104;
(statearr_33122[(12)] = inst_33097);

return statearr_33122;
})();
var statearr_33123_33151 = state_33104__$1;
(statearr_33123_33151[(2)] = null);

(statearr_33123_33151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (10))){
var inst_33072 = (state_33104[(2)]);
var inst_33073 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33104__$1 = (function (){var statearr_33124 = state_33104;
(statearr_33124[(13)] = inst_33072);

return statearr_33124;
})();
var statearr_33125_33152 = state_33104__$1;
(statearr_33125_33152[(2)] = inst_33073);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33104__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33105 === (8))){
var inst_33086 = (state_33104[(2)]);
var state_33104__$1 = state_33104;
var statearr_33126_33153 = state_33104__$1;
(statearr_33126_33153[(2)] = inst_33086);

(statearr_33126_33153[(1)] = (5));


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
});})(c__21335__auto___33138,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21270__auto__,c__21335__auto___33138,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21271__auto__ = null;
var cljs$core$async$state_machine__21271__auto____0 = (function (){
var statearr_33130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33130[(0)] = cljs$core$async$state_machine__21271__auto__);

(statearr_33130[(1)] = (1));

return statearr_33130;
});
var cljs$core$async$state_machine__21271__auto____1 = (function (state_33104){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_33104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e33131){if((e33131 instanceof Object)){
var ex__21274__auto__ = e33131;
var statearr_33132_33154 = state_33104;
(statearr_33132_33154[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33155 = state_33104;
state_33104 = G__33155;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$state_machine__21271__auto__ = function(state_33104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21271__auto____1.call(this,state_33104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21271__auto____0;
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21271__auto____1;
return cljs$core$async$state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___33138,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21337__auto__ = (function (){var statearr_33133 = f__21336__auto__.call(null);
(statearr_33133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___33138);

return statearr_33133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___33138,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33157 = [];
var len__17521__auto___33213 = arguments.length;
var i__17522__auto___33214 = (0);
while(true){
if((i__17522__auto___33214 < len__17521__auto___33213)){
args33157.push((arguments[i__17522__auto___33214]));

var G__33215 = (i__17522__auto___33214 + (1));
i__17522__auto___33214 = G__33215;
continue;
} else {
}
break;
}

var G__33159 = args33157.length;
switch (G__33159) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33157.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21335__auto___33217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___33217,out){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___33217,out){
return (function (state_33189){
var state_val_33190 = (state_33189[(1)]);
if((state_val_33190 === (7))){
var inst_33169 = (state_33189[(7)]);
var inst_33168 = (state_33189[(8)]);
var inst_33168__$1 = (state_33189[(2)]);
var inst_33169__$1 = cljs.core.nth.call(null,inst_33168__$1,(0),null);
var inst_33170 = cljs.core.nth.call(null,inst_33168__$1,(1),null);
var inst_33171 = (inst_33169__$1 == null);
var state_33189__$1 = (function (){var statearr_33191 = state_33189;
(statearr_33191[(7)] = inst_33169__$1);

(statearr_33191[(9)] = inst_33170);

(statearr_33191[(8)] = inst_33168__$1);

return statearr_33191;
})();
if(cljs.core.truth_(inst_33171)){
var statearr_33192_33218 = state_33189__$1;
(statearr_33192_33218[(1)] = (8));

} else {
var statearr_33193_33219 = state_33189__$1;
(statearr_33193_33219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (1))){
var inst_33160 = cljs.core.vec.call(null,chs);
var inst_33161 = inst_33160;
var state_33189__$1 = (function (){var statearr_33194 = state_33189;
(statearr_33194[(10)] = inst_33161);

return statearr_33194;
})();
var statearr_33195_33220 = state_33189__$1;
(statearr_33195_33220[(2)] = null);

(statearr_33195_33220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (4))){
var inst_33161 = (state_33189[(10)]);
var state_33189__$1 = state_33189;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33189__$1,(7),inst_33161);
} else {
if((state_val_33190 === (6))){
var inst_33185 = (state_33189[(2)]);
var state_33189__$1 = state_33189;
var statearr_33196_33221 = state_33189__$1;
(statearr_33196_33221[(2)] = inst_33185);

(statearr_33196_33221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (3))){
var inst_33187 = (state_33189[(2)]);
var state_33189__$1 = state_33189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33189__$1,inst_33187);
} else {
if((state_val_33190 === (2))){
var inst_33161 = (state_33189[(10)]);
var inst_33163 = cljs.core.count.call(null,inst_33161);
var inst_33164 = (inst_33163 > (0));
var state_33189__$1 = state_33189;
if(cljs.core.truth_(inst_33164)){
var statearr_33198_33222 = state_33189__$1;
(statearr_33198_33222[(1)] = (4));

} else {
var statearr_33199_33223 = state_33189__$1;
(statearr_33199_33223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (11))){
var inst_33161 = (state_33189[(10)]);
var inst_33178 = (state_33189[(2)]);
var tmp33197 = inst_33161;
var inst_33161__$1 = tmp33197;
var state_33189__$1 = (function (){var statearr_33200 = state_33189;
(statearr_33200[(11)] = inst_33178);

(statearr_33200[(10)] = inst_33161__$1);

return statearr_33200;
})();
var statearr_33201_33224 = state_33189__$1;
(statearr_33201_33224[(2)] = null);

(statearr_33201_33224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (9))){
var inst_33169 = (state_33189[(7)]);
var state_33189__$1 = state_33189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33189__$1,(11),out,inst_33169);
} else {
if((state_val_33190 === (5))){
var inst_33183 = cljs.core.async.close_BANG_.call(null,out);
var state_33189__$1 = state_33189;
var statearr_33202_33225 = state_33189__$1;
(statearr_33202_33225[(2)] = inst_33183);

(statearr_33202_33225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (10))){
var inst_33181 = (state_33189[(2)]);
var state_33189__$1 = state_33189;
var statearr_33203_33226 = state_33189__$1;
(statearr_33203_33226[(2)] = inst_33181);

(statearr_33203_33226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (8))){
var inst_33169 = (state_33189[(7)]);
var inst_33170 = (state_33189[(9)]);
var inst_33168 = (state_33189[(8)]);
var inst_33161 = (state_33189[(10)]);
var inst_33173 = (function (){var cs = inst_33161;
var vec__33166 = inst_33168;
var v = inst_33169;
var c = inst_33170;
return ((function (cs,vec__33166,v,c,inst_33169,inst_33170,inst_33168,inst_33161,state_val_33190,c__21335__auto___33217,out){
return (function (p1__33156_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33156_SHARP_);
});
;})(cs,vec__33166,v,c,inst_33169,inst_33170,inst_33168,inst_33161,state_val_33190,c__21335__auto___33217,out))
})();
var inst_33174 = cljs.core.filterv.call(null,inst_33173,inst_33161);
var inst_33161__$1 = inst_33174;
var state_33189__$1 = (function (){var statearr_33204 = state_33189;
(statearr_33204[(10)] = inst_33161__$1);

return statearr_33204;
})();
var statearr_33205_33227 = state_33189__$1;
(statearr_33205_33227[(2)] = null);

(statearr_33205_33227[(1)] = (2));


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
});})(c__21335__auto___33217,out))
;
return ((function (switch__21270__auto__,c__21335__auto___33217,out){
return (function() {
var cljs$core$async$state_machine__21271__auto__ = null;
var cljs$core$async$state_machine__21271__auto____0 = (function (){
var statearr_33209 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33209[(0)] = cljs$core$async$state_machine__21271__auto__);

(statearr_33209[(1)] = (1));

return statearr_33209;
});
var cljs$core$async$state_machine__21271__auto____1 = (function (state_33189){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_33189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e33210){if((e33210 instanceof Object)){
var ex__21274__auto__ = e33210;
var statearr_33211_33228 = state_33189;
(statearr_33211_33228[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33229 = state_33189;
state_33189 = G__33229;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$state_machine__21271__auto__ = function(state_33189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21271__auto____1.call(this,state_33189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21271__auto____0;
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21271__auto____1;
return cljs$core$async$state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___33217,out))
})();
var state__21337__auto__ = (function (){var statearr_33212 = f__21336__auto__.call(null);
(statearr_33212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___33217);

return statearr_33212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___33217,out))
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
var args33230 = [];
var len__17521__auto___33279 = arguments.length;
var i__17522__auto___33280 = (0);
while(true){
if((i__17522__auto___33280 < len__17521__auto___33279)){
args33230.push((arguments[i__17522__auto___33280]));

var G__33281 = (i__17522__auto___33280 + (1));
i__17522__auto___33280 = G__33281;
continue;
} else {
}
break;
}

var G__33232 = args33230.length;
switch (G__33232) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33230.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21335__auto___33283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___33283,out){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___33283,out){
return (function (state_33256){
var state_val_33257 = (state_33256[(1)]);
if((state_val_33257 === (7))){
var inst_33238 = (state_33256[(7)]);
var inst_33238__$1 = (state_33256[(2)]);
var inst_33239 = (inst_33238__$1 == null);
var inst_33240 = cljs.core.not.call(null,inst_33239);
var state_33256__$1 = (function (){var statearr_33258 = state_33256;
(statearr_33258[(7)] = inst_33238__$1);

return statearr_33258;
})();
if(inst_33240){
var statearr_33259_33284 = state_33256__$1;
(statearr_33259_33284[(1)] = (8));

} else {
var statearr_33260_33285 = state_33256__$1;
(statearr_33260_33285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (1))){
var inst_33233 = (0);
var state_33256__$1 = (function (){var statearr_33261 = state_33256;
(statearr_33261[(8)] = inst_33233);

return statearr_33261;
})();
var statearr_33262_33286 = state_33256__$1;
(statearr_33262_33286[(2)] = null);

(statearr_33262_33286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (4))){
var state_33256__$1 = state_33256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33256__$1,(7),ch);
} else {
if((state_val_33257 === (6))){
var inst_33251 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
var statearr_33263_33287 = state_33256__$1;
(statearr_33263_33287[(2)] = inst_33251);

(statearr_33263_33287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (3))){
var inst_33253 = (state_33256[(2)]);
var inst_33254 = cljs.core.async.close_BANG_.call(null,out);
var state_33256__$1 = (function (){var statearr_33264 = state_33256;
(statearr_33264[(9)] = inst_33253);

return statearr_33264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33256__$1,inst_33254);
} else {
if((state_val_33257 === (2))){
var inst_33233 = (state_33256[(8)]);
var inst_33235 = (inst_33233 < n);
var state_33256__$1 = state_33256;
if(cljs.core.truth_(inst_33235)){
var statearr_33265_33288 = state_33256__$1;
(statearr_33265_33288[(1)] = (4));

} else {
var statearr_33266_33289 = state_33256__$1;
(statearr_33266_33289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (11))){
var inst_33233 = (state_33256[(8)]);
var inst_33243 = (state_33256[(2)]);
var inst_33244 = (inst_33233 + (1));
var inst_33233__$1 = inst_33244;
var state_33256__$1 = (function (){var statearr_33267 = state_33256;
(statearr_33267[(8)] = inst_33233__$1);

(statearr_33267[(10)] = inst_33243);

return statearr_33267;
})();
var statearr_33268_33290 = state_33256__$1;
(statearr_33268_33290[(2)] = null);

(statearr_33268_33290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (9))){
var state_33256__$1 = state_33256;
var statearr_33269_33291 = state_33256__$1;
(statearr_33269_33291[(2)] = null);

(statearr_33269_33291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (5))){
var state_33256__$1 = state_33256;
var statearr_33270_33292 = state_33256__$1;
(statearr_33270_33292[(2)] = null);

(statearr_33270_33292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (10))){
var inst_33248 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
var statearr_33271_33293 = state_33256__$1;
(statearr_33271_33293[(2)] = inst_33248);

(statearr_33271_33293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (8))){
var inst_33238 = (state_33256[(7)]);
var state_33256__$1 = state_33256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33256__$1,(11),out,inst_33238);
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
});})(c__21335__auto___33283,out))
;
return ((function (switch__21270__auto__,c__21335__auto___33283,out){
return (function() {
var cljs$core$async$state_machine__21271__auto__ = null;
var cljs$core$async$state_machine__21271__auto____0 = (function (){
var statearr_33275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33275[(0)] = cljs$core$async$state_machine__21271__auto__);

(statearr_33275[(1)] = (1));

return statearr_33275;
});
var cljs$core$async$state_machine__21271__auto____1 = (function (state_33256){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_33256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e33276){if((e33276 instanceof Object)){
var ex__21274__auto__ = e33276;
var statearr_33277_33294 = state_33256;
(statearr_33277_33294[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33295 = state_33256;
state_33256 = G__33295;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$state_machine__21271__auto__ = function(state_33256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21271__auto____1.call(this,state_33256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21271__auto____0;
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21271__auto____1;
return cljs$core$async$state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___33283,out))
})();
var state__21337__auto__ = (function (){var statearr_33278 = f__21336__auto__.call(null);
(statearr_33278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___33283);

return statearr_33278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___33283,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t33303 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33303 = (function (map_LT_,f,ch,meta33304){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33304 = meta33304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33305,meta33304__$1){
var self__ = this;
var _33305__$1 = this;
return (new cljs.core.async.t33303(self__.map_LT_,self__.f,self__.ch,meta33304__$1));
});

cljs.core.async.t33303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33305){
var self__ = this;
var _33305__$1 = this;
return self__.meta33304;
});

cljs.core.async.t33303.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33303.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33303.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33306 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33306 = (function (map_LT_,f,ch,meta33304,_,fn1,meta33307){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33304 = meta33304;
this._ = _;
this.fn1 = fn1;
this.meta33307 = meta33307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33308,meta33307__$1){
var self__ = this;
var _33308__$1 = this;
return (new cljs.core.async.t33306(self__.map_LT_,self__.f,self__.ch,self__.meta33304,self__._,self__.fn1,meta33307__$1));
});})(___$1))
;

cljs.core.async.t33306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33308){
var self__ = this;
var _33308__$1 = this;
return self__.meta33307;
});})(___$1))
;

cljs.core.async.t33306.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33296_SHARP_){
return f1.call(null,(((p1__33296_SHARP_ == null))?null:self__.f.call(null,p1__33296_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33306.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33304","meta33304",-1671634224,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t33303","cljs.core.async/t33303",-1212640628,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33307","meta33307",1579055410,null)], null);
});})(___$1))
;

cljs.core.async.t33306.cljs$lang$type = true;

cljs.core.async.t33306.cljs$lang$ctorStr = "cljs.core.async/t33306";

cljs.core.async.t33306.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t33306");
});})(___$1))
;

cljs.core.async.__GT_t33306 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t33306(map_LT___$1,f__$1,ch__$1,meta33304__$1,___$2,fn1__$1,meta33307){
return (new cljs.core.async.t33306(map_LT___$1,f__$1,ch__$1,meta33304__$1,___$2,fn1__$1,meta33307));
});})(___$1))
;

}

return (new cljs.core.async.t33306(self__.map_LT_,self__.f,self__.ch,self__.meta33304,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t33303.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33304","meta33304",-1671634224,null)], null);
});

cljs.core.async.t33303.cljs$lang$type = true;

cljs.core.async.t33303.cljs$lang$ctorStr = "cljs.core.async/t33303";

cljs.core.async.t33303.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t33303");
});

cljs.core.async.__GT_t33303 = (function cljs$core$async$map_LT__$___GT_t33303(map_LT___$1,f__$1,ch__$1,meta33304){
return (new cljs.core.async.t33303(map_LT___$1,f__$1,ch__$1,meta33304));
});

}

return (new cljs.core.async.t33303(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t33312 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33312 = (function (map_GT_,f,ch,meta33313){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33313 = meta33313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33314,meta33313__$1){
var self__ = this;
var _33314__$1 = this;
return (new cljs.core.async.t33312(self__.map_GT_,self__.f,self__.ch,meta33313__$1));
});

cljs.core.async.t33312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33314){
var self__ = this;
var _33314__$1 = this;
return self__.meta33313;
});

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33313","meta33313",-45000776,null)], null);
});

cljs.core.async.t33312.cljs$lang$type = true;

cljs.core.async.t33312.cljs$lang$ctorStr = "cljs.core.async/t33312";

cljs.core.async.t33312.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t33312");
});

cljs.core.async.__GT_t33312 = (function cljs$core$async$map_GT__$___GT_t33312(map_GT___$1,f__$1,ch__$1,meta33313){
return (new cljs.core.async.t33312(map_GT___$1,f__$1,ch__$1,meta33313));
});

}

return (new cljs.core.async.t33312(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t33318 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33318 = (function (filter_GT_,p,ch,meta33319){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33319 = meta33319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33320,meta33319__$1){
var self__ = this;
var _33320__$1 = this;
return (new cljs.core.async.t33318(self__.filter_GT_,self__.p,self__.ch,meta33319__$1));
});

cljs.core.async.t33318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33320){
var self__ = this;
var _33320__$1 = this;
return self__.meta33319;
});

cljs.core.async.t33318.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33318.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33318.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33318.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33319","meta33319",461306362,null)], null);
});

cljs.core.async.t33318.cljs$lang$type = true;

cljs.core.async.t33318.cljs$lang$ctorStr = "cljs.core.async/t33318";

cljs.core.async.t33318.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write.call(null,writer__17062__auto__,"cljs.core.async/t33318");
});

cljs.core.async.__GT_t33318 = (function cljs$core$async$filter_GT__$___GT_t33318(filter_GT___$1,p__$1,ch__$1,meta33319){
return (new cljs.core.async.t33318(filter_GT___$1,p__$1,ch__$1,meta33319));
});

}

return (new cljs.core.async.t33318(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33321 = [];
var len__17521__auto___33365 = arguments.length;
var i__17522__auto___33366 = (0);
while(true){
if((i__17522__auto___33366 < len__17521__auto___33365)){
args33321.push((arguments[i__17522__auto___33366]));

var G__33367 = (i__17522__auto___33366 + (1));
i__17522__auto___33366 = G__33367;
continue;
} else {
}
break;
}

var G__33323 = args33321.length;
switch (G__33323) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33321.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21335__auto___33369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___33369,out){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___33369,out){
return (function (state_33344){
var state_val_33345 = (state_33344[(1)]);
if((state_val_33345 === (7))){
var inst_33340 = (state_33344[(2)]);
var state_33344__$1 = state_33344;
var statearr_33346_33370 = state_33344__$1;
(statearr_33346_33370[(2)] = inst_33340);

(statearr_33346_33370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (1))){
var state_33344__$1 = state_33344;
var statearr_33347_33371 = state_33344__$1;
(statearr_33347_33371[(2)] = null);

(statearr_33347_33371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (4))){
var inst_33326 = (state_33344[(7)]);
var inst_33326__$1 = (state_33344[(2)]);
var inst_33327 = (inst_33326__$1 == null);
var state_33344__$1 = (function (){var statearr_33348 = state_33344;
(statearr_33348[(7)] = inst_33326__$1);

return statearr_33348;
})();
if(cljs.core.truth_(inst_33327)){
var statearr_33349_33372 = state_33344__$1;
(statearr_33349_33372[(1)] = (5));

} else {
var statearr_33350_33373 = state_33344__$1;
(statearr_33350_33373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (6))){
var inst_33326 = (state_33344[(7)]);
var inst_33331 = p.call(null,inst_33326);
var state_33344__$1 = state_33344;
if(cljs.core.truth_(inst_33331)){
var statearr_33351_33374 = state_33344__$1;
(statearr_33351_33374[(1)] = (8));

} else {
var statearr_33352_33375 = state_33344__$1;
(statearr_33352_33375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (3))){
var inst_33342 = (state_33344[(2)]);
var state_33344__$1 = state_33344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33344__$1,inst_33342);
} else {
if((state_val_33345 === (2))){
var state_33344__$1 = state_33344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33344__$1,(4),ch);
} else {
if((state_val_33345 === (11))){
var inst_33334 = (state_33344[(2)]);
var state_33344__$1 = state_33344;
var statearr_33353_33376 = state_33344__$1;
(statearr_33353_33376[(2)] = inst_33334);

(statearr_33353_33376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (9))){
var state_33344__$1 = state_33344;
var statearr_33354_33377 = state_33344__$1;
(statearr_33354_33377[(2)] = null);

(statearr_33354_33377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (5))){
var inst_33329 = cljs.core.async.close_BANG_.call(null,out);
var state_33344__$1 = state_33344;
var statearr_33355_33378 = state_33344__$1;
(statearr_33355_33378[(2)] = inst_33329);

(statearr_33355_33378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (10))){
var inst_33337 = (state_33344[(2)]);
var state_33344__$1 = (function (){var statearr_33356 = state_33344;
(statearr_33356[(8)] = inst_33337);

return statearr_33356;
})();
var statearr_33357_33379 = state_33344__$1;
(statearr_33357_33379[(2)] = null);

(statearr_33357_33379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33345 === (8))){
var inst_33326 = (state_33344[(7)]);
var state_33344__$1 = state_33344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33344__$1,(11),out,inst_33326);
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
});})(c__21335__auto___33369,out))
;
return ((function (switch__21270__auto__,c__21335__auto___33369,out){
return (function() {
var cljs$core$async$state_machine__21271__auto__ = null;
var cljs$core$async$state_machine__21271__auto____0 = (function (){
var statearr_33361 = [null,null,null,null,null,null,null,null,null];
(statearr_33361[(0)] = cljs$core$async$state_machine__21271__auto__);

(statearr_33361[(1)] = (1));

return statearr_33361;
});
var cljs$core$async$state_machine__21271__auto____1 = (function (state_33344){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_33344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e33362){if((e33362 instanceof Object)){
var ex__21274__auto__ = e33362;
var statearr_33363_33380 = state_33344;
(statearr_33363_33380[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33381 = state_33344;
state_33344 = G__33381;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$state_machine__21271__auto__ = function(state_33344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21271__auto____1.call(this,state_33344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21271__auto____0;
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21271__auto____1;
return cljs$core$async$state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___33369,out))
})();
var state__21337__auto__ = (function (){var statearr_33364 = f__21336__auto__.call(null);
(statearr_33364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___33369);

return statearr_33364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___33369,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args33382 = [];
var len__17521__auto___33385 = arguments.length;
var i__17522__auto___33386 = (0);
while(true){
if((i__17522__auto___33386 < len__17521__auto___33385)){
args33382.push((arguments[i__17522__auto___33386]));

var G__33387 = (i__17522__auto___33386 + (1));
i__17522__auto___33386 = G__33387;
continue;
} else {
}
break;
}

var G__33384 = args33382.length;
switch (G__33384) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33382.length)].join('')));

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
var c__21335__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto__){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto__){
return (function (state_33554){
var state_val_33555 = (state_33554[(1)]);
if((state_val_33555 === (7))){
var inst_33550 = (state_33554[(2)]);
var state_33554__$1 = state_33554;
var statearr_33556_33597 = state_33554__$1;
(statearr_33556_33597[(2)] = inst_33550);

(statearr_33556_33597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (20))){
var inst_33520 = (state_33554[(7)]);
var inst_33531 = (state_33554[(2)]);
var inst_33532 = cljs.core.next.call(null,inst_33520);
var inst_33506 = inst_33532;
var inst_33507 = null;
var inst_33508 = (0);
var inst_33509 = (0);
var state_33554__$1 = (function (){var statearr_33557 = state_33554;
(statearr_33557[(8)] = inst_33507);

(statearr_33557[(9)] = inst_33531);

(statearr_33557[(10)] = inst_33506);

(statearr_33557[(11)] = inst_33508);

(statearr_33557[(12)] = inst_33509);

return statearr_33557;
})();
var statearr_33558_33598 = state_33554__$1;
(statearr_33558_33598[(2)] = null);

(statearr_33558_33598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (1))){
var state_33554__$1 = state_33554;
var statearr_33559_33599 = state_33554__$1;
(statearr_33559_33599[(2)] = null);

(statearr_33559_33599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (4))){
var inst_33495 = (state_33554[(13)]);
var inst_33495__$1 = (state_33554[(2)]);
var inst_33496 = (inst_33495__$1 == null);
var state_33554__$1 = (function (){var statearr_33560 = state_33554;
(statearr_33560[(13)] = inst_33495__$1);

return statearr_33560;
})();
if(cljs.core.truth_(inst_33496)){
var statearr_33561_33600 = state_33554__$1;
(statearr_33561_33600[(1)] = (5));

} else {
var statearr_33562_33601 = state_33554__$1;
(statearr_33562_33601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (15))){
var state_33554__$1 = state_33554;
var statearr_33566_33602 = state_33554__$1;
(statearr_33566_33602[(2)] = null);

(statearr_33566_33602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (21))){
var state_33554__$1 = state_33554;
var statearr_33567_33603 = state_33554__$1;
(statearr_33567_33603[(2)] = null);

(statearr_33567_33603[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (13))){
var inst_33507 = (state_33554[(8)]);
var inst_33506 = (state_33554[(10)]);
var inst_33508 = (state_33554[(11)]);
var inst_33509 = (state_33554[(12)]);
var inst_33516 = (state_33554[(2)]);
var inst_33517 = (inst_33509 + (1));
var tmp33563 = inst_33507;
var tmp33564 = inst_33506;
var tmp33565 = inst_33508;
var inst_33506__$1 = tmp33564;
var inst_33507__$1 = tmp33563;
var inst_33508__$1 = tmp33565;
var inst_33509__$1 = inst_33517;
var state_33554__$1 = (function (){var statearr_33568 = state_33554;
(statearr_33568[(8)] = inst_33507__$1);

(statearr_33568[(10)] = inst_33506__$1);

(statearr_33568[(11)] = inst_33508__$1);

(statearr_33568[(12)] = inst_33509__$1);

(statearr_33568[(14)] = inst_33516);

return statearr_33568;
})();
var statearr_33569_33604 = state_33554__$1;
(statearr_33569_33604[(2)] = null);

(statearr_33569_33604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (22))){
var state_33554__$1 = state_33554;
var statearr_33570_33605 = state_33554__$1;
(statearr_33570_33605[(2)] = null);

(statearr_33570_33605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (6))){
var inst_33495 = (state_33554[(13)]);
var inst_33504 = f.call(null,inst_33495);
var inst_33505 = cljs.core.seq.call(null,inst_33504);
var inst_33506 = inst_33505;
var inst_33507 = null;
var inst_33508 = (0);
var inst_33509 = (0);
var state_33554__$1 = (function (){var statearr_33571 = state_33554;
(statearr_33571[(8)] = inst_33507);

(statearr_33571[(10)] = inst_33506);

(statearr_33571[(11)] = inst_33508);

(statearr_33571[(12)] = inst_33509);

return statearr_33571;
})();
var statearr_33572_33606 = state_33554__$1;
(statearr_33572_33606[(2)] = null);

(statearr_33572_33606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (17))){
var inst_33520 = (state_33554[(7)]);
var inst_33524 = cljs.core.chunk_first.call(null,inst_33520);
var inst_33525 = cljs.core.chunk_rest.call(null,inst_33520);
var inst_33526 = cljs.core.count.call(null,inst_33524);
var inst_33506 = inst_33525;
var inst_33507 = inst_33524;
var inst_33508 = inst_33526;
var inst_33509 = (0);
var state_33554__$1 = (function (){var statearr_33573 = state_33554;
(statearr_33573[(8)] = inst_33507);

(statearr_33573[(10)] = inst_33506);

(statearr_33573[(11)] = inst_33508);

(statearr_33573[(12)] = inst_33509);

return statearr_33573;
})();
var statearr_33574_33607 = state_33554__$1;
(statearr_33574_33607[(2)] = null);

(statearr_33574_33607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (3))){
var inst_33552 = (state_33554[(2)]);
var state_33554__$1 = state_33554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33554__$1,inst_33552);
} else {
if((state_val_33555 === (12))){
var inst_33540 = (state_33554[(2)]);
var state_33554__$1 = state_33554;
var statearr_33575_33608 = state_33554__$1;
(statearr_33575_33608[(2)] = inst_33540);

(statearr_33575_33608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (2))){
var state_33554__$1 = state_33554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33554__$1,(4),in$);
} else {
if((state_val_33555 === (23))){
var inst_33548 = (state_33554[(2)]);
var state_33554__$1 = state_33554;
var statearr_33576_33609 = state_33554__$1;
(statearr_33576_33609[(2)] = inst_33548);

(statearr_33576_33609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (19))){
var inst_33535 = (state_33554[(2)]);
var state_33554__$1 = state_33554;
var statearr_33577_33610 = state_33554__$1;
(statearr_33577_33610[(2)] = inst_33535);

(statearr_33577_33610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (11))){
var inst_33506 = (state_33554[(10)]);
var inst_33520 = (state_33554[(7)]);
var inst_33520__$1 = cljs.core.seq.call(null,inst_33506);
var state_33554__$1 = (function (){var statearr_33578 = state_33554;
(statearr_33578[(7)] = inst_33520__$1);

return statearr_33578;
})();
if(inst_33520__$1){
var statearr_33579_33611 = state_33554__$1;
(statearr_33579_33611[(1)] = (14));

} else {
var statearr_33580_33612 = state_33554__$1;
(statearr_33580_33612[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (9))){
var inst_33542 = (state_33554[(2)]);
var inst_33543 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33554__$1 = (function (){var statearr_33581 = state_33554;
(statearr_33581[(15)] = inst_33542);

return statearr_33581;
})();
if(cljs.core.truth_(inst_33543)){
var statearr_33582_33613 = state_33554__$1;
(statearr_33582_33613[(1)] = (21));

} else {
var statearr_33583_33614 = state_33554__$1;
(statearr_33583_33614[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (5))){
var inst_33498 = cljs.core.async.close_BANG_.call(null,out);
var state_33554__$1 = state_33554;
var statearr_33584_33615 = state_33554__$1;
(statearr_33584_33615[(2)] = inst_33498);

(statearr_33584_33615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (14))){
var inst_33520 = (state_33554[(7)]);
var inst_33522 = cljs.core.chunked_seq_QMARK_.call(null,inst_33520);
var state_33554__$1 = state_33554;
if(inst_33522){
var statearr_33585_33616 = state_33554__$1;
(statearr_33585_33616[(1)] = (17));

} else {
var statearr_33586_33617 = state_33554__$1;
(statearr_33586_33617[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (16))){
var inst_33538 = (state_33554[(2)]);
var state_33554__$1 = state_33554;
var statearr_33587_33618 = state_33554__$1;
(statearr_33587_33618[(2)] = inst_33538);

(statearr_33587_33618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33555 === (10))){
var inst_33507 = (state_33554[(8)]);
var inst_33509 = (state_33554[(12)]);
var inst_33514 = cljs.core._nth.call(null,inst_33507,inst_33509);
var state_33554__$1 = state_33554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33554__$1,(13),out,inst_33514);
} else {
if((state_val_33555 === (18))){
var inst_33520 = (state_33554[(7)]);
var inst_33529 = cljs.core.first.call(null,inst_33520);
var state_33554__$1 = state_33554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33554__$1,(20),out,inst_33529);
} else {
if((state_val_33555 === (8))){
var inst_33508 = (state_33554[(11)]);
var inst_33509 = (state_33554[(12)]);
var inst_33511 = (inst_33509 < inst_33508);
var inst_33512 = inst_33511;
var state_33554__$1 = state_33554;
if(cljs.core.truth_(inst_33512)){
var statearr_33588_33619 = state_33554__$1;
(statearr_33588_33619[(1)] = (10));

} else {
var statearr_33589_33620 = state_33554__$1;
(statearr_33589_33620[(1)] = (11));

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
});})(c__21335__auto__))
;
return ((function (switch__21270__auto__,c__21335__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21271__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21271__auto____0 = (function (){
var statearr_33593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33593[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21271__auto__);

(statearr_33593[(1)] = (1));

return statearr_33593;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21271__auto____1 = (function (state_33554){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_33554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e33594){if((e33594 instanceof Object)){
var ex__21274__auto__ = e33594;
var statearr_33595_33621 = state_33554;
(statearr_33595_33621[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33622 = state_33554;
state_33554 = G__33622;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21271__auto__ = function(state_33554){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21271__auto____1.call(this,state_33554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21271__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21271__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto__))
})();
var state__21337__auto__ = (function (){var statearr_33596 = f__21336__auto__.call(null);
(statearr_33596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto__);

return statearr_33596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto__))
);

return c__21335__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args33623 = [];
var len__17521__auto___33626 = arguments.length;
var i__17522__auto___33627 = (0);
while(true){
if((i__17522__auto___33627 < len__17521__auto___33626)){
args33623.push((arguments[i__17522__auto___33627]));

var G__33628 = (i__17522__auto___33627 + (1));
i__17522__auto___33627 = G__33628;
continue;
} else {
}
break;
}

var G__33625 = args33623.length;
switch (G__33625) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33623.length)].join('')));

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
var args33630 = [];
var len__17521__auto___33633 = arguments.length;
var i__17522__auto___33634 = (0);
while(true){
if((i__17522__auto___33634 < len__17521__auto___33633)){
args33630.push((arguments[i__17522__auto___33634]));

var G__33635 = (i__17522__auto___33634 + (1));
i__17522__auto___33634 = G__33635;
continue;
} else {
}
break;
}

var G__33632 = args33630.length;
switch (G__33632) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33630.length)].join('')));

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
var args33637 = [];
var len__17521__auto___33688 = arguments.length;
var i__17522__auto___33689 = (0);
while(true){
if((i__17522__auto___33689 < len__17521__auto___33688)){
args33637.push((arguments[i__17522__auto___33689]));

var G__33690 = (i__17522__auto___33689 + (1));
i__17522__auto___33689 = G__33690;
continue;
} else {
}
break;
}

var G__33639 = args33637.length;
switch (G__33639) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33637.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21335__auto___33692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___33692,out){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___33692,out){
return (function (state_33663){
var state_val_33664 = (state_33663[(1)]);
if((state_val_33664 === (7))){
var inst_33658 = (state_33663[(2)]);
var state_33663__$1 = state_33663;
var statearr_33665_33693 = state_33663__$1;
(statearr_33665_33693[(2)] = inst_33658);

(statearr_33665_33693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (1))){
var inst_33640 = null;
var state_33663__$1 = (function (){var statearr_33666 = state_33663;
(statearr_33666[(7)] = inst_33640);

return statearr_33666;
})();
var statearr_33667_33694 = state_33663__$1;
(statearr_33667_33694[(2)] = null);

(statearr_33667_33694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (4))){
var inst_33643 = (state_33663[(8)]);
var inst_33643__$1 = (state_33663[(2)]);
var inst_33644 = (inst_33643__$1 == null);
var inst_33645 = cljs.core.not.call(null,inst_33644);
var state_33663__$1 = (function (){var statearr_33668 = state_33663;
(statearr_33668[(8)] = inst_33643__$1);

return statearr_33668;
})();
if(inst_33645){
var statearr_33669_33695 = state_33663__$1;
(statearr_33669_33695[(1)] = (5));

} else {
var statearr_33670_33696 = state_33663__$1;
(statearr_33670_33696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (6))){
var state_33663__$1 = state_33663;
var statearr_33671_33697 = state_33663__$1;
(statearr_33671_33697[(2)] = null);

(statearr_33671_33697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (3))){
var inst_33660 = (state_33663[(2)]);
var inst_33661 = cljs.core.async.close_BANG_.call(null,out);
var state_33663__$1 = (function (){var statearr_33672 = state_33663;
(statearr_33672[(9)] = inst_33660);

return statearr_33672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33663__$1,inst_33661);
} else {
if((state_val_33664 === (2))){
var state_33663__$1 = state_33663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33663__$1,(4),ch);
} else {
if((state_val_33664 === (11))){
var inst_33643 = (state_33663[(8)]);
var inst_33652 = (state_33663[(2)]);
var inst_33640 = inst_33643;
var state_33663__$1 = (function (){var statearr_33673 = state_33663;
(statearr_33673[(10)] = inst_33652);

(statearr_33673[(7)] = inst_33640);

return statearr_33673;
})();
var statearr_33674_33698 = state_33663__$1;
(statearr_33674_33698[(2)] = null);

(statearr_33674_33698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (9))){
var inst_33643 = (state_33663[(8)]);
var state_33663__$1 = state_33663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33663__$1,(11),out,inst_33643);
} else {
if((state_val_33664 === (5))){
var inst_33643 = (state_33663[(8)]);
var inst_33640 = (state_33663[(7)]);
var inst_33647 = cljs.core._EQ_.call(null,inst_33643,inst_33640);
var state_33663__$1 = state_33663;
if(inst_33647){
var statearr_33676_33699 = state_33663__$1;
(statearr_33676_33699[(1)] = (8));

} else {
var statearr_33677_33700 = state_33663__$1;
(statearr_33677_33700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (10))){
var inst_33655 = (state_33663[(2)]);
var state_33663__$1 = state_33663;
var statearr_33678_33701 = state_33663__$1;
(statearr_33678_33701[(2)] = inst_33655);

(statearr_33678_33701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33664 === (8))){
var inst_33640 = (state_33663[(7)]);
var tmp33675 = inst_33640;
var inst_33640__$1 = tmp33675;
var state_33663__$1 = (function (){var statearr_33679 = state_33663;
(statearr_33679[(7)] = inst_33640__$1);

return statearr_33679;
})();
var statearr_33680_33702 = state_33663__$1;
(statearr_33680_33702[(2)] = null);

(statearr_33680_33702[(1)] = (2));


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
});})(c__21335__auto___33692,out))
;
return ((function (switch__21270__auto__,c__21335__auto___33692,out){
return (function() {
var cljs$core$async$state_machine__21271__auto__ = null;
var cljs$core$async$state_machine__21271__auto____0 = (function (){
var statearr_33684 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33684[(0)] = cljs$core$async$state_machine__21271__auto__);

(statearr_33684[(1)] = (1));

return statearr_33684;
});
var cljs$core$async$state_machine__21271__auto____1 = (function (state_33663){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_33663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e33685){if((e33685 instanceof Object)){
var ex__21274__auto__ = e33685;
var statearr_33686_33703 = state_33663;
(statearr_33686_33703[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33704 = state_33663;
state_33663 = G__33704;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$state_machine__21271__auto__ = function(state_33663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21271__auto____1.call(this,state_33663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21271__auto____0;
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21271__auto____1;
return cljs$core$async$state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___33692,out))
})();
var state__21337__auto__ = (function (){var statearr_33687 = f__21336__auto__.call(null);
(statearr_33687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___33692);

return statearr_33687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___33692,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args33705 = [];
var len__17521__auto___33775 = arguments.length;
var i__17522__auto___33776 = (0);
while(true){
if((i__17522__auto___33776 < len__17521__auto___33775)){
args33705.push((arguments[i__17522__auto___33776]));

var G__33777 = (i__17522__auto___33776 + (1));
i__17522__auto___33776 = G__33777;
continue;
} else {
}
break;
}

var G__33707 = args33705.length;
switch (G__33707) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33705.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21335__auto___33779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___33779,out){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___33779,out){
return (function (state_33745){
var state_val_33746 = (state_33745[(1)]);
if((state_val_33746 === (7))){
var inst_33741 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33747_33780 = state_33745__$1;
(statearr_33747_33780[(2)] = inst_33741);

(statearr_33747_33780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (1))){
var inst_33708 = (new Array(n));
var inst_33709 = inst_33708;
var inst_33710 = (0);
var state_33745__$1 = (function (){var statearr_33748 = state_33745;
(statearr_33748[(7)] = inst_33709);

(statearr_33748[(8)] = inst_33710);

return statearr_33748;
})();
var statearr_33749_33781 = state_33745__$1;
(statearr_33749_33781[(2)] = null);

(statearr_33749_33781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (4))){
var inst_33713 = (state_33745[(9)]);
var inst_33713__$1 = (state_33745[(2)]);
var inst_33714 = (inst_33713__$1 == null);
var inst_33715 = cljs.core.not.call(null,inst_33714);
var state_33745__$1 = (function (){var statearr_33750 = state_33745;
(statearr_33750[(9)] = inst_33713__$1);

return statearr_33750;
})();
if(inst_33715){
var statearr_33751_33782 = state_33745__$1;
(statearr_33751_33782[(1)] = (5));

} else {
var statearr_33752_33783 = state_33745__$1;
(statearr_33752_33783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (15))){
var inst_33735 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33753_33784 = state_33745__$1;
(statearr_33753_33784[(2)] = inst_33735);

(statearr_33753_33784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (13))){
var state_33745__$1 = state_33745;
var statearr_33754_33785 = state_33745__$1;
(statearr_33754_33785[(2)] = null);

(statearr_33754_33785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (6))){
var inst_33710 = (state_33745[(8)]);
var inst_33731 = (inst_33710 > (0));
var state_33745__$1 = state_33745;
if(cljs.core.truth_(inst_33731)){
var statearr_33755_33786 = state_33745__$1;
(statearr_33755_33786[(1)] = (12));

} else {
var statearr_33756_33787 = state_33745__$1;
(statearr_33756_33787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (3))){
var inst_33743 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33745__$1,inst_33743);
} else {
if((state_val_33746 === (12))){
var inst_33709 = (state_33745[(7)]);
var inst_33733 = cljs.core.vec.call(null,inst_33709);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33745__$1,(15),out,inst_33733);
} else {
if((state_val_33746 === (2))){
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33745__$1,(4),ch);
} else {
if((state_val_33746 === (11))){
var inst_33725 = (state_33745[(2)]);
var inst_33726 = (new Array(n));
var inst_33709 = inst_33726;
var inst_33710 = (0);
var state_33745__$1 = (function (){var statearr_33757 = state_33745;
(statearr_33757[(10)] = inst_33725);

(statearr_33757[(7)] = inst_33709);

(statearr_33757[(8)] = inst_33710);

return statearr_33757;
})();
var statearr_33758_33788 = state_33745__$1;
(statearr_33758_33788[(2)] = null);

(statearr_33758_33788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (9))){
var inst_33709 = (state_33745[(7)]);
var inst_33723 = cljs.core.vec.call(null,inst_33709);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33745__$1,(11),out,inst_33723);
} else {
if((state_val_33746 === (5))){
var inst_33709 = (state_33745[(7)]);
var inst_33713 = (state_33745[(9)]);
var inst_33710 = (state_33745[(8)]);
var inst_33718 = (state_33745[(11)]);
var inst_33717 = (inst_33709[inst_33710] = inst_33713);
var inst_33718__$1 = (inst_33710 + (1));
var inst_33719 = (inst_33718__$1 < n);
var state_33745__$1 = (function (){var statearr_33759 = state_33745;
(statearr_33759[(12)] = inst_33717);

(statearr_33759[(11)] = inst_33718__$1);

return statearr_33759;
})();
if(cljs.core.truth_(inst_33719)){
var statearr_33760_33789 = state_33745__$1;
(statearr_33760_33789[(1)] = (8));

} else {
var statearr_33761_33790 = state_33745__$1;
(statearr_33761_33790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (14))){
var inst_33738 = (state_33745[(2)]);
var inst_33739 = cljs.core.async.close_BANG_.call(null,out);
var state_33745__$1 = (function (){var statearr_33763 = state_33745;
(statearr_33763[(13)] = inst_33738);

return statearr_33763;
})();
var statearr_33764_33791 = state_33745__$1;
(statearr_33764_33791[(2)] = inst_33739);

(statearr_33764_33791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (10))){
var inst_33729 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33765_33792 = state_33745__$1;
(statearr_33765_33792[(2)] = inst_33729);

(statearr_33765_33792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (8))){
var inst_33709 = (state_33745[(7)]);
var inst_33718 = (state_33745[(11)]);
var tmp33762 = inst_33709;
var inst_33709__$1 = tmp33762;
var inst_33710 = inst_33718;
var state_33745__$1 = (function (){var statearr_33766 = state_33745;
(statearr_33766[(7)] = inst_33709__$1);

(statearr_33766[(8)] = inst_33710);

return statearr_33766;
})();
var statearr_33767_33793 = state_33745__$1;
(statearr_33767_33793[(2)] = null);

(statearr_33767_33793[(1)] = (2));


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
});})(c__21335__auto___33779,out))
;
return ((function (switch__21270__auto__,c__21335__auto___33779,out){
return (function() {
var cljs$core$async$state_machine__21271__auto__ = null;
var cljs$core$async$state_machine__21271__auto____0 = (function (){
var statearr_33771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33771[(0)] = cljs$core$async$state_machine__21271__auto__);

(statearr_33771[(1)] = (1));

return statearr_33771;
});
var cljs$core$async$state_machine__21271__auto____1 = (function (state_33745){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_33745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e33772){if((e33772 instanceof Object)){
var ex__21274__auto__ = e33772;
var statearr_33773_33794 = state_33745;
(statearr_33773_33794[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33795 = state_33745;
state_33745 = G__33795;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$state_machine__21271__auto__ = function(state_33745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21271__auto____1.call(this,state_33745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21271__auto____0;
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21271__auto____1;
return cljs$core$async$state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___33779,out))
})();
var state__21337__auto__ = (function (){var statearr_33774 = f__21336__auto__.call(null);
(statearr_33774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___33779);

return statearr_33774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___33779,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args33796 = [];
var len__17521__auto___33870 = arguments.length;
var i__17522__auto___33871 = (0);
while(true){
if((i__17522__auto___33871 < len__17521__auto___33870)){
args33796.push((arguments[i__17522__auto___33871]));

var G__33872 = (i__17522__auto___33871 + (1));
i__17522__auto___33871 = G__33872;
continue;
} else {
}
break;
}

var G__33798 = args33796.length;
switch (G__33798) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33796.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21335__auto___33874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21335__auto___33874,out){
return (function (){
var f__21336__auto__ = (function (){var switch__21270__auto__ = ((function (c__21335__auto___33874,out){
return (function (state_33840){
var state_val_33841 = (state_33840[(1)]);
if((state_val_33841 === (7))){
var inst_33836 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33842_33875 = state_33840__$1;
(statearr_33842_33875[(2)] = inst_33836);

(statearr_33842_33875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (1))){
var inst_33799 = [];
var inst_33800 = inst_33799;
var inst_33801 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33840__$1 = (function (){var statearr_33843 = state_33840;
(statearr_33843[(7)] = inst_33800);

(statearr_33843[(8)] = inst_33801);

return statearr_33843;
})();
var statearr_33844_33876 = state_33840__$1;
(statearr_33844_33876[(2)] = null);

(statearr_33844_33876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (4))){
var inst_33804 = (state_33840[(9)]);
var inst_33804__$1 = (state_33840[(2)]);
var inst_33805 = (inst_33804__$1 == null);
var inst_33806 = cljs.core.not.call(null,inst_33805);
var state_33840__$1 = (function (){var statearr_33845 = state_33840;
(statearr_33845[(9)] = inst_33804__$1);

return statearr_33845;
})();
if(inst_33806){
var statearr_33846_33877 = state_33840__$1;
(statearr_33846_33877[(1)] = (5));

} else {
var statearr_33847_33878 = state_33840__$1;
(statearr_33847_33878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (15))){
var inst_33830 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33848_33879 = state_33840__$1;
(statearr_33848_33879[(2)] = inst_33830);

(statearr_33848_33879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (13))){
var state_33840__$1 = state_33840;
var statearr_33849_33880 = state_33840__$1;
(statearr_33849_33880[(2)] = null);

(statearr_33849_33880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (6))){
var inst_33800 = (state_33840[(7)]);
var inst_33825 = inst_33800.length;
var inst_33826 = (inst_33825 > (0));
var state_33840__$1 = state_33840;
if(cljs.core.truth_(inst_33826)){
var statearr_33850_33881 = state_33840__$1;
(statearr_33850_33881[(1)] = (12));

} else {
var statearr_33851_33882 = state_33840__$1;
(statearr_33851_33882[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (3))){
var inst_33838 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33840__$1,inst_33838);
} else {
if((state_val_33841 === (12))){
var inst_33800 = (state_33840[(7)]);
var inst_33828 = cljs.core.vec.call(null,inst_33800);
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33840__$1,(15),out,inst_33828);
} else {
if((state_val_33841 === (2))){
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33840__$1,(4),ch);
} else {
if((state_val_33841 === (11))){
var inst_33808 = (state_33840[(10)]);
var inst_33804 = (state_33840[(9)]);
var inst_33818 = (state_33840[(2)]);
var inst_33819 = [];
var inst_33820 = inst_33819.push(inst_33804);
var inst_33800 = inst_33819;
var inst_33801 = inst_33808;
var state_33840__$1 = (function (){var statearr_33852 = state_33840;
(statearr_33852[(11)] = inst_33820);

(statearr_33852[(12)] = inst_33818);

(statearr_33852[(7)] = inst_33800);

(statearr_33852[(8)] = inst_33801);

return statearr_33852;
})();
var statearr_33853_33883 = state_33840__$1;
(statearr_33853_33883[(2)] = null);

(statearr_33853_33883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (9))){
var inst_33800 = (state_33840[(7)]);
var inst_33816 = cljs.core.vec.call(null,inst_33800);
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33840__$1,(11),out,inst_33816);
} else {
if((state_val_33841 === (5))){
var inst_33808 = (state_33840[(10)]);
var inst_33804 = (state_33840[(9)]);
var inst_33801 = (state_33840[(8)]);
var inst_33808__$1 = f.call(null,inst_33804);
var inst_33809 = cljs.core._EQ_.call(null,inst_33808__$1,inst_33801);
var inst_33810 = cljs.core.keyword_identical_QMARK_.call(null,inst_33801,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33811 = (inst_33809) || (inst_33810);
var state_33840__$1 = (function (){var statearr_33854 = state_33840;
(statearr_33854[(10)] = inst_33808__$1);

return statearr_33854;
})();
if(cljs.core.truth_(inst_33811)){
var statearr_33855_33884 = state_33840__$1;
(statearr_33855_33884[(1)] = (8));

} else {
var statearr_33856_33885 = state_33840__$1;
(statearr_33856_33885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (14))){
var inst_33833 = (state_33840[(2)]);
var inst_33834 = cljs.core.async.close_BANG_.call(null,out);
var state_33840__$1 = (function (){var statearr_33858 = state_33840;
(statearr_33858[(13)] = inst_33833);

return statearr_33858;
})();
var statearr_33859_33886 = state_33840__$1;
(statearr_33859_33886[(2)] = inst_33834);

(statearr_33859_33886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (10))){
var inst_33823 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33860_33887 = state_33840__$1;
(statearr_33860_33887[(2)] = inst_33823);

(statearr_33860_33887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (8))){
var inst_33808 = (state_33840[(10)]);
var inst_33804 = (state_33840[(9)]);
var inst_33800 = (state_33840[(7)]);
var inst_33813 = inst_33800.push(inst_33804);
var tmp33857 = inst_33800;
var inst_33800__$1 = tmp33857;
var inst_33801 = inst_33808;
var state_33840__$1 = (function (){var statearr_33861 = state_33840;
(statearr_33861[(14)] = inst_33813);

(statearr_33861[(7)] = inst_33800__$1);

(statearr_33861[(8)] = inst_33801);

return statearr_33861;
})();
var statearr_33862_33888 = state_33840__$1;
(statearr_33862_33888[(2)] = null);

(statearr_33862_33888[(1)] = (2));


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
});})(c__21335__auto___33874,out))
;
return ((function (switch__21270__auto__,c__21335__auto___33874,out){
return (function() {
var cljs$core$async$state_machine__21271__auto__ = null;
var cljs$core$async$state_machine__21271__auto____0 = (function (){
var statearr_33866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33866[(0)] = cljs$core$async$state_machine__21271__auto__);

(statearr_33866[(1)] = (1));

return statearr_33866;
});
var cljs$core$async$state_machine__21271__auto____1 = (function (state_33840){
while(true){
var ret_value__21272__auto__ = (function (){try{while(true){
var result__21273__auto__ = switch__21270__auto__.call(null,state_33840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21273__auto__;
}
break;
}
}catch (e33867){if((e33867 instanceof Object)){
var ex__21274__auto__ = e33867;
var statearr_33868_33889 = state_33840;
(statearr_33868_33889[(5)] = ex__21274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33890 = state_33840;
state_33840 = G__33890;
continue;
} else {
return ret_value__21272__auto__;
}
break;
}
});
cljs$core$async$state_machine__21271__auto__ = function(state_33840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21271__auto____1.call(this,state_33840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21271__auto____0;
cljs$core$async$state_machine__21271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21271__auto____1;
return cljs$core$async$state_machine__21271__auto__;
})()
;})(switch__21270__auto__,c__21335__auto___33874,out))
})();
var state__21337__auto__ = (function (){var statearr_33869 = f__21336__auto__.call(null);
(statearr_33869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21335__auto___33874);

return statearr_33869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21337__auto__);
});})(c__21335__auto___33874,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map