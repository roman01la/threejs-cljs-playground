// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t31150 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31150 = (function (fn_handler,f,meta31151){
this.fn_handler = fn_handler;
this.f = f;
this.meta31151 = meta31151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31152,meta31151__$1){
var self__ = this;
var _31152__$1 = this;
return (new cljs.core.async.t31150(self__.fn_handler,self__.f,meta31151__$1));
});

cljs.core.async.t31150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31152){
var self__ = this;
var _31152__$1 = this;
return self__.meta31151;
});

cljs.core.async.t31150.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$private,true,cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta31151","meta31151",1168511302,null)], null);
});

cljs.core.async.t31150.cljs$lang$type = true;

cljs.core.async.t31150.cljs$lang$ctorStr = "cljs.core.async/t31150";

cljs.core.async.t31150.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.core.async/t31150");
});

cljs.core.async.__GT_t31150 = (function cljs$core$async$fn_handler_$___GT_t31150(fn_handler__$1,f__$1,meta31151){
return (new cljs.core.async.t31150(fn_handler__$1,f__$1,meta31151));
});

}

return (new cljs.core.async.t31150(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args31155 = [];
var len__17521__auto___31158 = arguments.length;
var i__17522__auto___31159 = (0);
while(true){
if((i__17522__auto___31159 < len__17521__auto___31158)){
args31155.push((arguments[i__17522__auto___31159]));

var G__31160 = (i__17522__auto___31159 + (1));
i__17522__auto___31159 = G__31160;
continue;
} else {
}
break;
}

var G__31157 = args31155.length;
switch (G__31157) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31155.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var args31162 = [];
var len__17521__auto___31165 = arguments.length;
var i__17522__auto___31166 = (0);
while(true){
if((i__17522__auto___31166 < len__17521__auto___31165)){
args31162.push((arguments[i__17522__auto___31166]));

var G__31167 = (i__17522__auto___31166 + (1));
i__17522__auto___31166 = G__31167;
continue;
} else {
}
break;
}

var G__31164 = args31162.length;
switch (G__31164) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31162.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_31169 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31169) : fn1.call(null,val_31169));
} else {
cljs.core.async.impl.dispatch.run(((function (val_31169,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31169) : fn1.call(null,val_31169));
});})(val_31169,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
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
var args31170 = [];
var len__17521__auto___31173 = arguments.length;
var i__17522__auto___31174 = (0);
while(true){
if((i__17522__auto___31174 < len__17521__auto___31173)){
args31170.push((arguments[i__17522__auto___31174]));

var G__31175 = (i__17522__auto___31174 + (1));
i__17522__auto___31174 = G__31175;
continue;
} else {
}
break;
}

var G__31172 = args31170.length;
switch (G__31172) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31170.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17366__auto___31177 = n;
var x_31178 = (0);
while(true){
if((x_31178 < n__17366__auto___31177)){
(a[x_31178] = (0));

var G__31179 = (x_31178 + (1));
x_31178 = G__31179;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__31180 = (i + (1));
i = G__31180;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t31184 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31184 = (function (alt_flag,flag,meta31185){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31185 = meta31185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31186,meta31185__$1){
var self__ = this;
var _31186__$1 = this;
return (new cljs.core.async.t31184(self__.alt_flag,self__.flag,meta31185__$1));
});})(flag))
;

cljs.core.async.t31184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31186){
var self__ = this;
var _31186__$1 = this;
return self__.meta31185;
});})(flag))
;

cljs.core.async.t31184.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t31184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t31184.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$private,true,cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31185","meta31185",-1115900231,null)], null);
});})(flag))
;

cljs.core.async.t31184.cljs$lang$type = true;

cljs.core.async.t31184.cljs$lang$ctorStr = "cljs.core.async/t31184";

cljs.core.async.t31184.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.core.async/t31184");
});})(flag))
;

cljs.core.async.__GT_t31184 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t31184(alt_flag__$1,flag__$1,meta31185){
return (new cljs.core.async.t31184(alt_flag__$1,flag__$1,meta31185));
});})(flag))
;

}

return (new cljs.core.async.t31184(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t31190 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31190 = (function (alt_handler,flag,cb,meta31191){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31191 = meta31191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31192,meta31191__$1){
var self__ = this;
var _31192__$1 = this;
return (new cljs.core.async.t31190(self__.alt_handler,self__.flag,self__.cb,meta31191__$1));
});

cljs.core.async.t31190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31192){
var self__ = this;
var _31192__$1 = this;
return self__.meta31191;
});

cljs.core.async.t31190.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t31190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t31190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$private,true,cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31191","meta31191",-317361458,null)], null);
});

cljs.core.async.t31190.cljs$lang$type = true;

cljs.core.async.t31190.cljs$lang$ctorStr = "cljs.core.async/t31190";

cljs.core.async.t31190.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.core.async/t31190");
});

cljs.core.async.__GT_t31190 = (function cljs$core$async$alt_handler_$___GT_t31190(alt_handler__$1,flag__$1,cb__$1,meta31191){
return (new cljs.core.async.t31190(alt_handler__$1,flag__$1,cb__$1,meta31191));
});

}

return (new cljs.core.async.t31190(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31193_SHARP_){
var G__31197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31193_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31197) : fret.call(null,G__31197));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31194_SHARP_){
var G__31198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31194_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31198) : fret.call(null,G__31198));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__16482__auto__ = wport;
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31199 = (i + (1));
i = G__31199;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$default)){
var temp__4425__auto__ = (function (){var and__16470__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__16470__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$default], null));
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
var len__17521__auto___31205 = arguments.length;
var i__17522__auto___31206 = (0);
while(true){
if((i__17522__auto___31206 < len__17521__auto___31205)){
args__17528__auto__.push((arguments[i__17522__auto___31206]));

var G__31207 = (i__17522__auto___31206 + (1));
i__17522__auto___31206 = G__31207;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((1) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17529__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31202){
var map__31203 = p__31202;
var map__31203__$1 = ((((!((map__31203 == null)))?((((map__31203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31203):map__31203);
var opts = map__31203__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31200){
var G__31201 = cljs.core.first(seq31200);
var seq31200__$1 = cljs.core.next(seq31200);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31201,seq31200__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args31208 = [];
var len__17521__auto___31258 = arguments.length;
var i__17522__auto___31259 = (0);
while(true){
if((i__17522__auto___31259 < len__17521__auto___31258)){
args31208.push((arguments[i__17522__auto___31259]));

var G__31260 = (i__17522__auto___31259 + (1));
i__17522__auto___31259 = G__31260;
continue;
} else {
}
break;
}

var G__31210 = args31208.length;
switch (G__31210) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31208.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20550__auto___31262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___31262){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___31262){
return (function (state_31234){
var state_val_31235 = (state_31234[(1)]);
if((state_val_31235 === (7))){
var inst_31230 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31236_31263 = state_31234__$1;
(statearr_31236_31263[(2)] = inst_31230);

(statearr_31236_31263[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31235 === (1))){
var state_31234__$1 = state_31234;
var statearr_31237_31264 = state_31234__$1;
(statearr_31237_31264[(2)] = null);

(statearr_31237_31264[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31235 === (4))){
var inst_31213 = (state_31234[(7)]);
var inst_31213__$1 = (state_31234[(2)]);
var inst_31214 = (inst_31213__$1 == null);
var state_31234__$1 = (function (){var statearr_31238 = state_31234;
(statearr_31238[(7)] = inst_31213__$1);

return statearr_31238;
})();
if(cljs.core.truth_(inst_31214)){
var statearr_31239_31265 = state_31234__$1;
(statearr_31239_31265[(1)] = (5));

} else {
var statearr_31240_31266 = state_31234__$1;
(statearr_31240_31266[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31235 === (13))){
var state_31234__$1 = state_31234;
var statearr_31241_31267 = state_31234__$1;
(statearr_31241_31267[(2)] = null);

(statearr_31241_31267[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31235 === (6))){
var inst_31213 = (state_31234[(7)]);
var state_31234__$1 = state_31234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31234__$1,(11),to,inst_31213);
} else {
if((state_val_31235 === (3))){
var inst_31232 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31234__$1,inst_31232);
} else {
if((state_val_31235 === (12))){
var state_31234__$1 = state_31234;
var statearr_31242_31268 = state_31234__$1;
(statearr_31242_31268[(2)] = null);

(statearr_31242_31268[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31235 === (2))){
var state_31234__$1 = state_31234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31234__$1,(4),from);
} else {
if((state_val_31235 === (11))){
var inst_31223 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
if(cljs.core.truth_(inst_31223)){
var statearr_31243_31269 = state_31234__$1;
(statearr_31243_31269[(1)] = (12));

} else {
var statearr_31244_31270 = state_31234__$1;
(statearr_31244_31270[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31235 === (9))){
var state_31234__$1 = state_31234;
var statearr_31245_31271 = state_31234__$1;
(statearr_31245_31271[(2)] = null);

(statearr_31245_31271[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31235 === (5))){
var state_31234__$1 = state_31234;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31246_31272 = state_31234__$1;
(statearr_31246_31272[(1)] = (8));

} else {
var statearr_31247_31273 = state_31234__$1;
(statearr_31247_31273[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31235 === (14))){
var inst_31228 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31248_31274 = state_31234__$1;
(statearr_31248_31274[(2)] = inst_31228);

(statearr_31248_31274[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31235 === (10))){
var inst_31220 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31249_31275 = state_31234__$1;
(statearr_31249_31275[(2)] = inst_31220);

(statearr_31249_31275[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31235 === (8))){
var inst_31217 = cljs.core.async.close_BANG_(to);
var state_31234__$1 = state_31234;
var statearr_31250_31276 = state_31234__$1;
(statearr_31250_31276[(2)] = inst_31217);

(statearr_31250_31276[(1)] = (10));


return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto___31262))
;
return ((function (switch__20483__auto__,c__20550__auto___31262){
return (function() {
var cljs$core$async$state_machine__20484__auto__ = null;
var cljs$core$async$state_machine__20484__auto____0 = (function (){
var statearr_31254 = [null,null,null,null,null,null,null,null];
(statearr_31254[(0)] = cljs$core$async$state_machine__20484__auto__);

(statearr_31254[(1)] = (1));

return statearr_31254;
});
var cljs$core$async$state_machine__20484__auto____1 = (function (state_31234){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_31234);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e31255){if((e31255 instanceof Object)){
var ex__20487__auto__ = e31255;
var statearr_31256_31277 = state_31234;
(statearr_31256_31277[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31234);

return cljs.core.constant$keyword$recur;
} else {
throw e31255;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__31278 = state_31234;
state_31234 = G__31278;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$state_machine__20484__auto__ = function(state_31234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20484__auto____1.call(this,state_31234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20484__auto____0;
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20484__auto____1;
return cljs$core$async$state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___31262))
})();
var state__20552__auto__ = (function (){var statearr_31257 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_31257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___31262);

return statearr_31257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___31262))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31462){
var vec__31463 = p__31462;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31463,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31463,(1),null);
var job = vec__31463;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__20550__auto___31645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___31645,res,vec__31463,v,p,job,jobs,results){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___31645,res,vec__31463,v,p,job,jobs,results){
return (function (state_31468){
var state_val_31469 = (state_31468[(1)]);
if((state_val_31469 === (1))){
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31468__$1,(2),res,v);
} else {
if((state_val_31469 === (2))){
var inst_31465 = (state_31468[(2)]);
var inst_31466 = cljs.core.async.close_BANG_(res);
var state_31468__$1 = (function (){var statearr_31470 = state_31468;
(statearr_31470[(7)] = inst_31465);

return statearr_31470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31468__$1,inst_31466);
} else {
return null;
}
}
});})(c__20550__auto___31645,res,vec__31463,v,p,job,jobs,results))
;
return ((function (switch__20483__auto__,c__20550__auto___31645,res,vec__31463,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0 = (function (){
var statearr_31474 = [null,null,null,null,null,null,null,null];
(statearr_31474[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__);

(statearr_31474[(1)] = (1));

return statearr_31474;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1 = (function (state_31468){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_31468);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e31475){if((e31475 instanceof Object)){
var ex__20487__auto__ = e31475;
var statearr_31476_31646 = state_31468;
(statearr_31476_31646[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31468);

return cljs.core.constant$keyword$recur;
} else {
throw e31475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__31647 = state_31468;
state_31468 = G__31647;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__ = function(state_31468){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1.call(this,state_31468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___31645,res,vec__31463,v,p,job,jobs,results))
})();
var state__20552__auto__ = (function (){var statearr_31477 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_31477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___31645);

return statearr_31477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___31645,res,vec__31463,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31478){
var vec__31479 = p__31478;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31479,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31479,(1),null);
var job = vec__31479;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__17366__auto___31648 = n;
var __31649 = (0);
while(true){
if((__31649 < n__17366__auto___31648)){
var G__31480_31650 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31480_31650) {
case "compute":
var c__20550__auto___31652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31649,c__20550__auto___31652,G__31480_31650,n__17366__auto___31648,jobs,results,process,async){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (__31649,c__20550__auto___31652,G__31480_31650,n__17366__auto___31648,jobs,results,process,async){
return (function (state_31493){
var state_val_31494 = (state_31493[(1)]);
if((state_val_31494 === (1))){
var state_31493__$1 = state_31493;
var statearr_31495_31653 = state_31493__$1;
(statearr_31495_31653[(2)] = null);

(statearr_31495_31653[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31494 === (2))){
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31493__$1,(4),jobs);
} else {
if((state_val_31494 === (3))){
var inst_31491 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31493__$1,inst_31491);
} else {
if((state_val_31494 === (4))){
var inst_31483 = (state_31493[(2)]);
var inst_31484 = process(inst_31483);
var state_31493__$1 = state_31493;
if(cljs.core.truth_(inst_31484)){
var statearr_31496_31654 = state_31493__$1;
(statearr_31496_31654[(1)] = (5));

} else {
var statearr_31497_31655 = state_31493__$1;
(statearr_31497_31655[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31494 === (5))){
var state_31493__$1 = state_31493;
var statearr_31498_31656 = state_31493__$1;
(statearr_31498_31656[(2)] = null);

(statearr_31498_31656[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31494 === (6))){
var state_31493__$1 = state_31493;
var statearr_31499_31657 = state_31493__$1;
(statearr_31499_31657[(2)] = null);

(statearr_31499_31657[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31494 === (7))){
var inst_31489 = (state_31493[(2)]);
var state_31493__$1 = state_31493;
var statearr_31500_31658 = state_31493__$1;
(statearr_31500_31658[(2)] = inst_31489);

(statearr_31500_31658[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__31649,c__20550__auto___31652,G__31480_31650,n__17366__auto___31648,jobs,results,process,async))
;
return ((function (__31649,switch__20483__auto__,c__20550__auto___31652,G__31480_31650,n__17366__auto___31648,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0 = (function (){
var statearr_31504 = [null,null,null,null,null,null,null];
(statearr_31504[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__);

(statearr_31504[(1)] = (1));

return statearr_31504;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1 = (function (state_31493){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_31493);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e31505){if((e31505 instanceof Object)){
var ex__20487__auto__ = e31505;
var statearr_31506_31659 = state_31493;
(statearr_31506_31659[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31493);

return cljs.core.constant$keyword$recur;
} else {
throw e31505;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__31660 = state_31493;
state_31493 = G__31660;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__ = function(state_31493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1.call(this,state_31493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__;
})()
;})(__31649,switch__20483__auto__,c__20550__auto___31652,G__31480_31650,n__17366__auto___31648,jobs,results,process,async))
})();
var state__20552__auto__ = (function (){var statearr_31507 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_31507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___31652);

return statearr_31507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(__31649,c__20550__auto___31652,G__31480_31650,n__17366__auto___31648,jobs,results,process,async))
);


break;
case "async":
var c__20550__auto___31661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31649,c__20550__auto___31661,G__31480_31650,n__17366__auto___31648,jobs,results,process,async){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (__31649,c__20550__auto___31661,G__31480_31650,n__17366__auto___31648,jobs,results,process,async){
return (function (state_31520){
var state_val_31521 = (state_31520[(1)]);
if((state_val_31521 === (1))){
var state_31520__$1 = state_31520;
var statearr_31522_31662 = state_31520__$1;
(statearr_31522_31662[(2)] = null);

(statearr_31522_31662[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31521 === (2))){
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31520__$1,(4),jobs);
} else {
if((state_val_31521 === (3))){
var inst_31518 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31520__$1,inst_31518);
} else {
if((state_val_31521 === (4))){
var inst_31510 = (state_31520[(2)]);
var inst_31511 = async(inst_31510);
var state_31520__$1 = state_31520;
if(cljs.core.truth_(inst_31511)){
var statearr_31523_31663 = state_31520__$1;
(statearr_31523_31663[(1)] = (5));

} else {
var statearr_31524_31664 = state_31520__$1;
(statearr_31524_31664[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31521 === (5))){
var state_31520__$1 = state_31520;
var statearr_31525_31665 = state_31520__$1;
(statearr_31525_31665[(2)] = null);

(statearr_31525_31665[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31521 === (6))){
var state_31520__$1 = state_31520;
var statearr_31526_31666 = state_31520__$1;
(statearr_31526_31666[(2)] = null);

(statearr_31526_31666[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31521 === (7))){
var inst_31516 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31527_31667 = state_31520__$1;
(statearr_31527_31667[(2)] = inst_31516);

(statearr_31527_31667[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__31649,c__20550__auto___31661,G__31480_31650,n__17366__auto___31648,jobs,results,process,async))
;
return ((function (__31649,switch__20483__auto__,c__20550__auto___31661,G__31480_31650,n__17366__auto___31648,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0 = (function (){
var statearr_31531 = [null,null,null,null,null,null,null];
(statearr_31531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__);

(statearr_31531[(1)] = (1));

return statearr_31531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1 = (function (state_31520){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_31520);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e31532){if((e31532 instanceof Object)){
var ex__20487__auto__ = e31532;
var statearr_31533_31668 = state_31520;
(statearr_31533_31668[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31520);

return cljs.core.constant$keyword$recur;
} else {
throw e31532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__31669 = state_31520;
state_31520 = G__31669;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__ = function(state_31520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1.call(this,state_31520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__;
})()
;})(__31649,switch__20483__auto__,c__20550__auto___31661,G__31480_31650,n__17366__auto___31648,jobs,results,process,async))
})();
var state__20552__auto__ = (function (){var statearr_31534 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_31534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___31661);

return statearr_31534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(__31649,c__20550__auto___31661,G__31480_31650,n__17366__auto___31648,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31670 = (__31649 + (1));
__31649 = G__31670;
continue;
} else {
}
break;
}

var c__20550__auto___31671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___31671,jobs,results,process,async){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___31671,jobs,results,process,async){
return (function (state_31556){
var state_val_31557 = (state_31556[(1)]);
if((state_val_31557 === (1))){
var state_31556__$1 = state_31556;
var statearr_31558_31672 = state_31556__$1;
(statearr_31558_31672[(2)] = null);

(statearr_31558_31672[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31557 === (2))){
var state_31556__$1 = state_31556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31556__$1,(4),from);
} else {
if((state_val_31557 === (3))){
var inst_31554 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31556__$1,inst_31554);
} else {
if((state_val_31557 === (4))){
var inst_31537 = (state_31556[(7)]);
var inst_31537__$1 = (state_31556[(2)]);
var inst_31538 = (inst_31537__$1 == null);
var state_31556__$1 = (function (){var statearr_31559 = state_31556;
(statearr_31559[(7)] = inst_31537__$1);

return statearr_31559;
})();
if(cljs.core.truth_(inst_31538)){
var statearr_31560_31673 = state_31556__$1;
(statearr_31560_31673[(1)] = (5));

} else {
var statearr_31561_31674 = state_31556__$1;
(statearr_31561_31674[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31557 === (5))){
var inst_31540 = cljs.core.async.close_BANG_(jobs);
var state_31556__$1 = state_31556;
var statearr_31562_31675 = state_31556__$1;
(statearr_31562_31675[(2)] = inst_31540);

(statearr_31562_31675[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31557 === (6))){
var inst_31542 = (state_31556[(8)]);
var inst_31537 = (state_31556[(7)]);
var inst_31542__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31544 = [inst_31537,inst_31542__$1];
var inst_31545 = (new cljs.core.PersistentVector(null,2,(5),inst_31543,inst_31544,null));
var state_31556__$1 = (function (){var statearr_31563 = state_31556;
(statearr_31563[(8)] = inst_31542__$1);

return statearr_31563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31556__$1,(8),jobs,inst_31545);
} else {
if((state_val_31557 === (7))){
var inst_31552 = (state_31556[(2)]);
var state_31556__$1 = state_31556;
var statearr_31564_31676 = state_31556__$1;
(statearr_31564_31676[(2)] = inst_31552);

(statearr_31564_31676[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31557 === (8))){
var inst_31542 = (state_31556[(8)]);
var inst_31547 = (state_31556[(2)]);
var state_31556__$1 = (function (){var statearr_31565 = state_31556;
(statearr_31565[(9)] = inst_31547);

return statearr_31565;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31556__$1,(9),results,inst_31542);
} else {
if((state_val_31557 === (9))){
var inst_31549 = (state_31556[(2)]);
var state_31556__$1 = (function (){var statearr_31566 = state_31556;
(statearr_31566[(10)] = inst_31549);

return statearr_31566;
})();
var statearr_31567_31677 = state_31556__$1;
(statearr_31567_31677[(2)] = null);

(statearr_31567_31677[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto___31671,jobs,results,process,async))
;
return ((function (switch__20483__auto__,c__20550__auto___31671,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0 = (function (){
var statearr_31571 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__);

(statearr_31571[(1)] = (1));

return statearr_31571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1 = (function (state_31556){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_31556);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e31572){if((e31572 instanceof Object)){
var ex__20487__auto__ = e31572;
var statearr_31573_31678 = state_31556;
(statearr_31573_31678[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31556);

return cljs.core.constant$keyword$recur;
} else {
throw e31572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__31679 = state_31556;
state_31556 = G__31679;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__ = function(state_31556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1.call(this,state_31556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___31671,jobs,results,process,async))
})();
var state__20552__auto__ = (function (){var statearr_31574 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_31574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___31671);

return statearr_31574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___31671,jobs,results,process,async))
);


var c__20550__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto__,jobs,results,process,async){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto__,jobs,results,process,async){
return (function (state_31612){
var state_val_31613 = (state_31612[(1)]);
if((state_val_31613 === (7))){
var inst_31608 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
var statearr_31614_31680 = state_31612__$1;
(statearr_31614_31680[(2)] = inst_31608);

(statearr_31614_31680[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (20))){
var state_31612__$1 = state_31612;
var statearr_31615_31681 = state_31612__$1;
(statearr_31615_31681[(2)] = null);

(statearr_31615_31681[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (1))){
var state_31612__$1 = state_31612;
var statearr_31616_31682 = state_31612__$1;
(statearr_31616_31682[(2)] = null);

(statearr_31616_31682[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (4))){
var inst_31577 = (state_31612[(7)]);
var inst_31577__$1 = (state_31612[(2)]);
var inst_31578 = (inst_31577__$1 == null);
var state_31612__$1 = (function (){var statearr_31617 = state_31612;
(statearr_31617[(7)] = inst_31577__$1);

return statearr_31617;
})();
if(cljs.core.truth_(inst_31578)){
var statearr_31618_31683 = state_31612__$1;
(statearr_31618_31683[(1)] = (5));

} else {
var statearr_31619_31684 = state_31612__$1;
(statearr_31619_31684[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (15))){
var inst_31590 = (state_31612[(8)]);
var state_31612__$1 = state_31612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31612__$1,(18),to,inst_31590);
} else {
if((state_val_31613 === (21))){
var inst_31603 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
var statearr_31620_31685 = state_31612__$1;
(statearr_31620_31685[(2)] = inst_31603);

(statearr_31620_31685[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (13))){
var inst_31605 = (state_31612[(2)]);
var state_31612__$1 = (function (){var statearr_31621 = state_31612;
(statearr_31621[(9)] = inst_31605);

return statearr_31621;
})();
var statearr_31622_31686 = state_31612__$1;
(statearr_31622_31686[(2)] = null);

(statearr_31622_31686[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (6))){
var inst_31577 = (state_31612[(7)]);
var state_31612__$1 = state_31612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31612__$1,(11),inst_31577);
} else {
if((state_val_31613 === (17))){
var inst_31598 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
if(cljs.core.truth_(inst_31598)){
var statearr_31623_31687 = state_31612__$1;
(statearr_31623_31687[(1)] = (19));

} else {
var statearr_31624_31688 = state_31612__$1;
(statearr_31624_31688[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (3))){
var inst_31610 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31612__$1,inst_31610);
} else {
if((state_val_31613 === (12))){
var inst_31587 = (state_31612[(10)]);
var state_31612__$1 = state_31612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31612__$1,(14),inst_31587);
} else {
if((state_val_31613 === (2))){
var state_31612__$1 = state_31612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31612__$1,(4),results);
} else {
if((state_val_31613 === (19))){
var state_31612__$1 = state_31612;
var statearr_31625_31689 = state_31612__$1;
(statearr_31625_31689[(2)] = null);

(statearr_31625_31689[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (11))){
var inst_31587 = (state_31612[(2)]);
var state_31612__$1 = (function (){var statearr_31626 = state_31612;
(statearr_31626[(10)] = inst_31587);

return statearr_31626;
})();
var statearr_31627_31690 = state_31612__$1;
(statearr_31627_31690[(2)] = null);

(statearr_31627_31690[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (9))){
var state_31612__$1 = state_31612;
var statearr_31628_31691 = state_31612__$1;
(statearr_31628_31691[(2)] = null);

(statearr_31628_31691[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (5))){
var state_31612__$1 = state_31612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31629_31692 = state_31612__$1;
(statearr_31629_31692[(1)] = (8));

} else {
var statearr_31630_31693 = state_31612__$1;
(statearr_31630_31693[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (14))){
var inst_31590 = (state_31612[(8)]);
var inst_31592 = (state_31612[(11)]);
var inst_31590__$1 = (state_31612[(2)]);
var inst_31591 = (inst_31590__$1 == null);
var inst_31592__$1 = cljs.core.not(inst_31591);
var state_31612__$1 = (function (){var statearr_31631 = state_31612;
(statearr_31631[(8)] = inst_31590__$1);

(statearr_31631[(11)] = inst_31592__$1);

return statearr_31631;
})();
if(inst_31592__$1){
var statearr_31632_31694 = state_31612__$1;
(statearr_31632_31694[(1)] = (15));

} else {
var statearr_31633_31695 = state_31612__$1;
(statearr_31633_31695[(1)] = (16));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (16))){
var inst_31592 = (state_31612[(11)]);
var state_31612__$1 = state_31612;
var statearr_31634_31696 = state_31612__$1;
(statearr_31634_31696[(2)] = inst_31592);

(statearr_31634_31696[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (10))){
var inst_31584 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
var statearr_31635_31697 = state_31612__$1;
(statearr_31635_31697[(2)] = inst_31584);

(statearr_31635_31697[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (18))){
var inst_31595 = (state_31612[(2)]);
var state_31612__$1 = state_31612;
var statearr_31636_31698 = state_31612__$1;
(statearr_31636_31698[(2)] = inst_31595);

(statearr_31636_31698[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31613 === (8))){
var inst_31581 = cljs.core.async.close_BANG_(to);
var state_31612__$1 = state_31612;
var statearr_31637_31699 = state_31612__$1;
(statearr_31637_31699[(2)] = inst_31581);

(statearr_31637_31699[(1)] = (10));


return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto__,jobs,results,process,async))
;
return ((function (switch__20483__auto__,c__20550__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0 = (function (){
var statearr_31641 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__);

(statearr_31641[(1)] = (1));

return statearr_31641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1 = (function (state_31612){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_31612);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e31642){if((e31642 instanceof Object)){
var ex__20487__auto__ = e31642;
var statearr_31643_31700 = state_31612;
(statearr_31643_31700[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31612);

return cljs.core.constant$keyword$recur;
} else {
throw e31642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__31701 = state_31612;
state_31612 = G__31701;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__ = function(state_31612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1.call(this,state_31612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto__,jobs,results,process,async))
})();
var state__20552__auto__ = (function (){var statearr_31644 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_31644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto__);

return statearr_31644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto__,jobs,results,process,async))
);

return c__20550__auto__;
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
var args31702 = [];
var len__17521__auto___31705 = arguments.length;
var i__17522__auto___31706 = (0);
while(true){
if((i__17522__auto___31706 < len__17521__auto___31705)){
args31702.push((arguments[i__17522__auto___31706]));

var G__31707 = (i__17522__auto___31706 + (1));
i__17522__auto___31706 = G__31707;
continue;
} else {
}
break;
}

var G__31704 = args31702.length;
switch (G__31704) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31702.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$async);
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
var args31709 = [];
var len__17521__auto___31712 = arguments.length;
var i__17522__auto___31713 = (0);
while(true){
if((i__17522__auto___31713 < len__17521__auto___31712)){
args31709.push((arguments[i__17522__auto___31713]));

var G__31714 = (i__17522__auto___31713 + (1));
i__17522__auto___31713 = G__31714;
continue;
} else {
}
break;
}

var G__31711 = args31709.length;
switch (G__31711) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31709.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$compute);
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
var args31716 = [];
var len__17521__auto___31769 = arguments.length;
var i__17522__auto___31770 = (0);
while(true){
if((i__17522__auto___31770 < len__17521__auto___31769)){
args31716.push((arguments[i__17522__auto___31770]));

var G__31771 = (i__17522__auto___31770 + (1));
i__17522__auto___31770 = G__31771;
continue;
} else {
}
break;
}

var G__31718 = args31716.length;
switch (G__31718) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31716.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__20550__auto___31773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___31773,tc,fc){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___31773,tc,fc){
return (function (state_31744){
var state_val_31745 = (state_31744[(1)]);
if((state_val_31745 === (7))){
var inst_31740 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31746_31774 = state_31744__$1;
(statearr_31746_31774[(2)] = inst_31740);

(statearr_31746_31774[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31745 === (1))){
var state_31744__$1 = state_31744;
var statearr_31747_31775 = state_31744__$1;
(statearr_31747_31775[(2)] = null);

(statearr_31747_31775[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31745 === (4))){
var inst_31721 = (state_31744[(7)]);
var inst_31721__$1 = (state_31744[(2)]);
var inst_31722 = (inst_31721__$1 == null);
var state_31744__$1 = (function (){var statearr_31748 = state_31744;
(statearr_31748[(7)] = inst_31721__$1);

return statearr_31748;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31749_31776 = state_31744__$1;
(statearr_31749_31776[(1)] = (5));

} else {
var statearr_31750_31777 = state_31744__$1;
(statearr_31750_31777[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31745 === (13))){
var state_31744__$1 = state_31744;
var statearr_31751_31778 = state_31744__$1;
(statearr_31751_31778[(2)] = null);

(statearr_31751_31778[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31745 === (6))){
var inst_31721 = (state_31744[(7)]);
var inst_31727 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31721) : p.call(null,inst_31721));
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31727)){
var statearr_31752_31779 = state_31744__$1;
(statearr_31752_31779[(1)] = (9));

} else {
var statearr_31753_31780 = state_31744__$1;
(statearr_31753_31780[(1)] = (10));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31745 === (3))){
var inst_31742 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31744__$1,inst_31742);
} else {
if((state_val_31745 === (12))){
var state_31744__$1 = state_31744;
var statearr_31754_31781 = state_31744__$1;
(statearr_31754_31781[(2)] = null);

(statearr_31754_31781[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31745 === (2))){
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31744__$1,(4),ch);
} else {
if((state_val_31745 === (11))){
var inst_31721 = (state_31744[(7)]);
var inst_31731 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31744__$1,(8),inst_31731,inst_31721);
} else {
if((state_val_31745 === (9))){
var state_31744__$1 = state_31744;
var statearr_31755_31782 = state_31744__$1;
(statearr_31755_31782[(2)] = tc);

(statearr_31755_31782[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31745 === (5))){
var inst_31724 = cljs.core.async.close_BANG_(tc);
var inst_31725 = cljs.core.async.close_BANG_(fc);
var state_31744__$1 = (function (){var statearr_31756 = state_31744;
(statearr_31756[(8)] = inst_31724);

return statearr_31756;
})();
var statearr_31757_31783 = state_31744__$1;
(statearr_31757_31783[(2)] = inst_31725);

(statearr_31757_31783[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31745 === (14))){
var inst_31738 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
var statearr_31758_31784 = state_31744__$1;
(statearr_31758_31784[(2)] = inst_31738);

(statearr_31758_31784[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31745 === (10))){
var state_31744__$1 = state_31744;
var statearr_31759_31785 = state_31744__$1;
(statearr_31759_31785[(2)] = fc);

(statearr_31759_31785[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31745 === (8))){
var inst_31733 = (state_31744[(2)]);
var state_31744__$1 = state_31744;
if(cljs.core.truth_(inst_31733)){
var statearr_31760_31786 = state_31744__$1;
(statearr_31760_31786[(1)] = (12));

} else {
var statearr_31761_31787 = state_31744__$1;
(statearr_31761_31787[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto___31773,tc,fc))
;
return ((function (switch__20483__auto__,c__20550__auto___31773,tc,fc){
return (function() {
var cljs$core$async$state_machine__20484__auto__ = null;
var cljs$core$async$state_machine__20484__auto____0 = (function (){
var statearr_31765 = [null,null,null,null,null,null,null,null,null];
(statearr_31765[(0)] = cljs$core$async$state_machine__20484__auto__);

(statearr_31765[(1)] = (1));

return statearr_31765;
});
var cljs$core$async$state_machine__20484__auto____1 = (function (state_31744){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_31744);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e31766){if((e31766 instanceof Object)){
var ex__20487__auto__ = e31766;
var statearr_31767_31788 = state_31744;
(statearr_31767_31788[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31744);

return cljs.core.constant$keyword$recur;
} else {
throw e31766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__31789 = state_31744;
state_31744 = G__31789;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$state_machine__20484__auto__ = function(state_31744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20484__auto____1.call(this,state_31744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20484__auto____0;
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20484__auto____1;
return cljs$core$async$state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___31773,tc,fc))
})();
var state__20552__auto__ = (function (){var statearr_31768 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_31768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___31773);

return statearr_31768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___31773,tc,fc))
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
var c__20550__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto__){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto__){
return (function (state_31836){
var state_val_31837 = (state_31836[(1)]);
if((state_val_31837 === (1))){
var inst_31822 = init;
var state_31836__$1 = (function (){var statearr_31838 = state_31836;
(statearr_31838[(7)] = inst_31822);

return statearr_31838;
})();
var statearr_31839_31854 = state_31836__$1;
(statearr_31839_31854[(2)] = null);

(statearr_31839_31854[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31837 === (2))){
var state_31836__$1 = state_31836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31836__$1,(4),ch);
} else {
if((state_val_31837 === (3))){
var inst_31834 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31836__$1,inst_31834);
} else {
if((state_val_31837 === (4))){
var inst_31825 = (state_31836[(8)]);
var inst_31825__$1 = (state_31836[(2)]);
var inst_31826 = (inst_31825__$1 == null);
var state_31836__$1 = (function (){var statearr_31840 = state_31836;
(statearr_31840[(8)] = inst_31825__$1);

return statearr_31840;
})();
if(cljs.core.truth_(inst_31826)){
var statearr_31841_31855 = state_31836__$1;
(statearr_31841_31855[(1)] = (5));

} else {
var statearr_31842_31856 = state_31836__$1;
(statearr_31842_31856[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31837 === (5))){
var inst_31822 = (state_31836[(7)]);
var state_31836__$1 = state_31836;
var statearr_31843_31857 = state_31836__$1;
(statearr_31843_31857[(2)] = inst_31822);

(statearr_31843_31857[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31837 === (6))){
var inst_31822 = (state_31836[(7)]);
var inst_31825 = (state_31836[(8)]);
var inst_31829 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31822,inst_31825) : f.call(null,inst_31822,inst_31825));
var inst_31822__$1 = inst_31829;
var state_31836__$1 = (function (){var statearr_31844 = state_31836;
(statearr_31844[(7)] = inst_31822__$1);

return statearr_31844;
})();
var statearr_31845_31858 = state_31836__$1;
(statearr_31845_31858[(2)] = null);

(statearr_31845_31858[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31837 === (7))){
var inst_31832 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31846_31859 = state_31836__$1;
(statearr_31846_31859[(2)] = inst_31832);

(statearr_31846_31859[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__20550__auto__))
;
return ((function (switch__20483__auto__,c__20550__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20484__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20484__auto____0 = (function (){
var statearr_31850 = [null,null,null,null,null,null,null,null,null];
(statearr_31850[(0)] = cljs$core$async$reduce_$_state_machine__20484__auto__);

(statearr_31850[(1)] = (1));

return statearr_31850;
});
var cljs$core$async$reduce_$_state_machine__20484__auto____1 = (function (state_31836){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_31836);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e31851){if((e31851 instanceof Object)){
var ex__20487__auto__ = e31851;
var statearr_31852_31860 = state_31836;
(statearr_31852_31860[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31836);

return cljs.core.constant$keyword$recur;
} else {
throw e31851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__31861 = state_31836;
state_31836 = G__31861;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20484__auto__ = function(state_31836){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20484__auto____1.call(this,state_31836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20484__auto____0;
cljs$core$async$reduce_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20484__auto____1;
return cljs$core$async$reduce_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto__))
})();
var state__20552__auto__ = (function (){var statearr_31853 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_31853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto__);

return statearr_31853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto__))
);

return c__20550__auto__;
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
var args31862 = [];
var len__17521__auto___31914 = arguments.length;
var i__17522__auto___31915 = (0);
while(true){
if((i__17522__auto___31915 < len__17521__auto___31914)){
args31862.push((arguments[i__17522__auto___31915]));

var G__31916 = (i__17522__auto___31915 + (1));
i__17522__auto___31915 = G__31916;
continue;
} else {
}
break;
}

var G__31864 = args31862.length;
switch (G__31864) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31862.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20550__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto__){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto__){
return (function (state_31889){
var state_val_31890 = (state_31889[(1)]);
if((state_val_31890 === (7))){
var inst_31871 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31891_31918 = state_31889__$1;
(statearr_31891_31918[(2)] = inst_31871);

(statearr_31891_31918[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31890 === (1))){
var inst_31865 = cljs.core.seq(coll);
var inst_31866 = inst_31865;
var state_31889__$1 = (function (){var statearr_31892 = state_31889;
(statearr_31892[(7)] = inst_31866);

return statearr_31892;
})();
var statearr_31893_31919 = state_31889__$1;
(statearr_31893_31919[(2)] = null);

(statearr_31893_31919[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31890 === (4))){
var inst_31866 = (state_31889[(7)]);
var inst_31869 = cljs.core.first(inst_31866);
var state_31889__$1 = state_31889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31889__$1,(7),ch,inst_31869);
} else {
if((state_val_31890 === (13))){
var inst_31883 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31894_31920 = state_31889__$1;
(statearr_31894_31920[(2)] = inst_31883);

(statearr_31894_31920[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31890 === (6))){
var inst_31874 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
if(cljs.core.truth_(inst_31874)){
var statearr_31895_31921 = state_31889__$1;
(statearr_31895_31921[(1)] = (8));

} else {
var statearr_31896_31922 = state_31889__$1;
(statearr_31896_31922[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31890 === (3))){
var inst_31887 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31889__$1,inst_31887);
} else {
if((state_val_31890 === (12))){
var state_31889__$1 = state_31889;
var statearr_31897_31923 = state_31889__$1;
(statearr_31897_31923[(2)] = null);

(statearr_31897_31923[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31890 === (2))){
var inst_31866 = (state_31889[(7)]);
var state_31889__$1 = state_31889;
if(cljs.core.truth_(inst_31866)){
var statearr_31898_31924 = state_31889__$1;
(statearr_31898_31924[(1)] = (4));

} else {
var statearr_31899_31925 = state_31889__$1;
(statearr_31899_31925[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31890 === (11))){
var inst_31880 = cljs.core.async.close_BANG_(ch);
var state_31889__$1 = state_31889;
var statearr_31900_31926 = state_31889__$1;
(statearr_31900_31926[(2)] = inst_31880);

(statearr_31900_31926[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31890 === (9))){
var state_31889__$1 = state_31889;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31901_31927 = state_31889__$1;
(statearr_31901_31927[(1)] = (11));

} else {
var statearr_31902_31928 = state_31889__$1;
(statearr_31902_31928[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_31890 === (5))){
var inst_31866 = (state_31889[(7)]);
var state_31889__$1 = state_31889;
var statearr_31903_31929 = state_31889__$1;
(statearr_31903_31929[(2)] = inst_31866);

(statearr_31903_31929[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31890 === (10))){
var inst_31885 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31904_31930 = state_31889__$1;
(statearr_31904_31930[(2)] = inst_31885);

(statearr_31904_31930[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_31890 === (8))){
var inst_31866 = (state_31889[(7)]);
var inst_31876 = cljs.core.next(inst_31866);
var inst_31866__$1 = inst_31876;
var state_31889__$1 = (function (){var statearr_31905 = state_31889;
(statearr_31905[(7)] = inst_31866__$1);

return statearr_31905;
})();
var statearr_31906_31931 = state_31889__$1;
(statearr_31906_31931[(2)] = null);

(statearr_31906_31931[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto__))
;
return ((function (switch__20483__auto__,c__20550__auto__){
return (function() {
var cljs$core$async$state_machine__20484__auto__ = null;
var cljs$core$async$state_machine__20484__auto____0 = (function (){
var statearr_31910 = [null,null,null,null,null,null,null,null];
(statearr_31910[(0)] = cljs$core$async$state_machine__20484__auto__);

(statearr_31910[(1)] = (1));

return statearr_31910;
});
var cljs$core$async$state_machine__20484__auto____1 = (function (state_31889){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_31889);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e31911){if((e31911 instanceof Object)){
var ex__20487__auto__ = e31911;
var statearr_31912_31932 = state_31889;
(statearr_31912_31932[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31889);

return cljs.core.constant$keyword$recur;
} else {
throw e31911;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__31933 = state_31889;
state_31889 = G__31933;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$state_machine__20484__auto__ = function(state_31889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20484__auto____1.call(this,state_31889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20484__auto____0;
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20484__auto____1;
return cljs$core$async$state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto__))
})();
var state__20552__auto__ = (function (){var statearr_31913 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_31913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto__);

return statearr_31913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto__))
);

return c__20550__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__17119__auto__.call(null,_));
} else {
var m__17119__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__17119__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$3 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__17119__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__17119__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__17119__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__17119__auto__.call(null,m,ch));
} else {
var m__17119__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__17119__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__17119__auto__.call(null,m));
} else {
var m__17119__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__17119__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = (function (){var G__32162 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32162) : cljs.core.atom.call(null,G__32162));
})();
var m = (function (){
if(typeof cljs.core.async.t32163 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32163 = (function (mult,ch,cs,meta32164){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32164 = meta32164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32165,meta32164__$1){
var self__ = this;
var _32165__$1 = this;
return (new cljs.core.async.t32163(self__.mult,self__.ch,self__.cs,meta32164__$1));
});})(cs))
;

cljs.core.async.t32163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32165){
var self__ = this;
var _32165__$1 = this;
return self__.meta32164;
});})(cs))
;

cljs.core.async.t32163.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32163.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32163.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32163.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32163.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32166_32386 = self__.cs;
var G__32167_32387 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32166_32386,G__32167_32387) : cljs.core.reset_BANG_.call(null,G__32166_32386,G__32167_32387));

return null;
});})(cs))
;

cljs.core.async.t32163.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),cljs.core.constant$keyword$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32164","meta32164",-1499367209,null)], null);
});})(cs))
;

cljs.core.async.t32163.cljs$lang$type = true;

cljs.core.async.t32163.cljs$lang$ctorStr = "cljs.core.async/t32163";

cljs.core.async.t32163.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.core.async/t32163");
});})(cs))
;

cljs.core.async.__GT_t32163 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t32163(mult__$1,ch__$1,cs__$1,meta32164){
return (new cljs.core.async.t32163(mult__$1,ch__$1,cs__$1,meta32164));
});})(cs))
;

}

return (new cljs.core.async.t32163(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20550__auto___32388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___32388,cs,m,dchan,dctr,done){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___32388,cs,m,dchan,dctr,done){
return (function (state_32298){
var state_val_32299 = (state_32298[(1)]);
if((state_val_32299 === (7))){
var inst_32294 = (state_32298[(2)]);
var state_32298__$1 = state_32298;
var statearr_32300_32389 = state_32298__$1;
(statearr_32300_32389[(2)] = inst_32294);

(statearr_32300_32389[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (20))){
var inst_32199 = (state_32298[(7)]);
var inst_32209 = cljs.core.first(inst_32199);
var inst_32210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32209,(0),null);
var inst_32211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32209,(1),null);
var state_32298__$1 = (function (){var statearr_32301 = state_32298;
(statearr_32301[(8)] = inst_32210);

return statearr_32301;
})();
if(cljs.core.truth_(inst_32211)){
var statearr_32302_32390 = state_32298__$1;
(statearr_32302_32390[(1)] = (22));

} else {
var statearr_32303_32391 = state_32298__$1;
(statearr_32303_32391[(1)] = (23));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (27))){
var inst_32170 = (state_32298[(9)]);
var inst_32246 = (state_32298[(10)]);
var inst_32241 = (state_32298[(11)]);
var inst_32239 = (state_32298[(12)]);
var inst_32246__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32239,inst_32241);
var inst_32247 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32246__$1,inst_32170,done);
var state_32298__$1 = (function (){var statearr_32304 = state_32298;
(statearr_32304[(10)] = inst_32246__$1);

return statearr_32304;
})();
if(cljs.core.truth_(inst_32247)){
var statearr_32305_32392 = state_32298__$1;
(statearr_32305_32392[(1)] = (30));

} else {
var statearr_32306_32393 = state_32298__$1;
(statearr_32306_32393[(1)] = (31));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (1))){
var state_32298__$1 = state_32298;
var statearr_32307_32394 = state_32298__$1;
(statearr_32307_32394[(2)] = null);

(statearr_32307_32394[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (24))){
var inst_32199 = (state_32298[(7)]);
var inst_32216 = (state_32298[(2)]);
var inst_32217 = cljs.core.next(inst_32199);
var inst_32179 = inst_32217;
var inst_32180 = null;
var inst_32181 = (0);
var inst_32182 = (0);
var state_32298__$1 = (function (){var statearr_32308 = state_32298;
(statearr_32308[(13)] = inst_32216);

(statearr_32308[(14)] = inst_32179);

(statearr_32308[(15)] = inst_32181);

(statearr_32308[(16)] = inst_32182);

(statearr_32308[(17)] = inst_32180);

return statearr_32308;
})();
var statearr_32309_32395 = state_32298__$1;
(statearr_32309_32395[(2)] = null);

(statearr_32309_32395[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (39))){
var state_32298__$1 = state_32298;
var statearr_32313_32396 = state_32298__$1;
(statearr_32313_32396[(2)] = null);

(statearr_32313_32396[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (4))){
var inst_32170 = (state_32298[(9)]);
var inst_32170__$1 = (state_32298[(2)]);
var inst_32171 = (inst_32170__$1 == null);
var state_32298__$1 = (function (){var statearr_32314 = state_32298;
(statearr_32314[(9)] = inst_32170__$1);

return statearr_32314;
})();
if(cljs.core.truth_(inst_32171)){
var statearr_32315_32397 = state_32298__$1;
(statearr_32315_32397[(1)] = (5));

} else {
var statearr_32316_32398 = state_32298__$1;
(statearr_32316_32398[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (15))){
var inst_32179 = (state_32298[(14)]);
var inst_32181 = (state_32298[(15)]);
var inst_32182 = (state_32298[(16)]);
var inst_32180 = (state_32298[(17)]);
var inst_32195 = (state_32298[(2)]);
var inst_32196 = (inst_32182 + (1));
var tmp32310 = inst_32179;
var tmp32311 = inst_32181;
var tmp32312 = inst_32180;
var inst_32179__$1 = tmp32310;
var inst_32180__$1 = tmp32312;
var inst_32181__$1 = tmp32311;
var inst_32182__$1 = inst_32196;
var state_32298__$1 = (function (){var statearr_32317 = state_32298;
(statearr_32317[(18)] = inst_32195);

(statearr_32317[(14)] = inst_32179__$1);

(statearr_32317[(15)] = inst_32181__$1);

(statearr_32317[(16)] = inst_32182__$1);

(statearr_32317[(17)] = inst_32180__$1);

return statearr_32317;
})();
var statearr_32318_32399 = state_32298__$1;
(statearr_32318_32399[(2)] = null);

(statearr_32318_32399[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (21))){
var inst_32220 = (state_32298[(2)]);
var state_32298__$1 = state_32298;
var statearr_32322_32400 = state_32298__$1;
(statearr_32322_32400[(2)] = inst_32220);

(statearr_32322_32400[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (31))){
var inst_32246 = (state_32298[(10)]);
var inst_32250 = done(null);
var inst_32251 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32246);
var state_32298__$1 = (function (){var statearr_32323 = state_32298;
(statearr_32323[(19)] = inst_32250);

return statearr_32323;
})();
var statearr_32324_32401 = state_32298__$1;
(statearr_32324_32401[(2)] = inst_32251);

(statearr_32324_32401[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (32))){
var inst_32240 = (state_32298[(20)]);
var inst_32238 = (state_32298[(21)]);
var inst_32241 = (state_32298[(11)]);
var inst_32239 = (state_32298[(12)]);
var inst_32253 = (state_32298[(2)]);
var inst_32254 = (inst_32241 + (1));
var tmp32319 = inst_32240;
var tmp32320 = inst_32238;
var tmp32321 = inst_32239;
var inst_32238__$1 = tmp32320;
var inst_32239__$1 = tmp32321;
var inst_32240__$1 = tmp32319;
var inst_32241__$1 = inst_32254;
var state_32298__$1 = (function (){var statearr_32325 = state_32298;
(statearr_32325[(22)] = inst_32253);

(statearr_32325[(20)] = inst_32240__$1);

(statearr_32325[(21)] = inst_32238__$1);

(statearr_32325[(11)] = inst_32241__$1);

(statearr_32325[(12)] = inst_32239__$1);

return statearr_32325;
})();
var statearr_32326_32402 = state_32298__$1;
(statearr_32326_32402[(2)] = null);

(statearr_32326_32402[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (40))){
var inst_32266 = (state_32298[(23)]);
var inst_32270 = done(null);
var inst_32271 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32266);
var state_32298__$1 = (function (){var statearr_32327 = state_32298;
(statearr_32327[(24)] = inst_32270);

return statearr_32327;
})();
var statearr_32328_32403 = state_32298__$1;
(statearr_32328_32403[(2)] = inst_32271);

(statearr_32328_32403[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (33))){
var inst_32257 = (state_32298[(25)]);
var inst_32259 = cljs.core.chunked_seq_QMARK_(inst_32257);
var state_32298__$1 = state_32298;
if(inst_32259){
var statearr_32329_32404 = state_32298__$1;
(statearr_32329_32404[(1)] = (36));

} else {
var statearr_32330_32405 = state_32298__$1;
(statearr_32330_32405[(1)] = (37));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (13))){
var inst_32189 = (state_32298[(26)]);
var inst_32192 = cljs.core.async.close_BANG_(inst_32189);
var state_32298__$1 = state_32298;
var statearr_32331_32406 = state_32298__$1;
(statearr_32331_32406[(2)] = inst_32192);

(statearr_32331_32406[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (22))){
var inst_32210 = (state_32298[(8)]);
var inst_32213 = cljs.core.async.close_BANG_(inst_32210);
var state_32298__$1 = state_32298;
var statearr_32332_32407 = state_32298__$1;
(statearr_32332_32407[(2)] = inst_32213);

(statearr_32332_32407[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (36))){
var inst_32257 = (state_32298[(25)]);
var inst_32261 = cljs.core.chunk_first(inst_32257);
var inst_32262 = cljs.core.chunk_rest(inst_32257);
var inst_32263 = cljs.core.count(inst_32261);
var inst_32238 = inst_32262;
var inst_32239 = inst_32261;
var inst_32240 = inst_32263;
var inst_32241 = (0);
var state_32298__$1 = (function (){var statearr_32333 = state_32298;
(statearr_32333[(20)] = inst_32240);

(statearr_32333[(21)] = inst_32238);

(statearr_32333[(11)] = inst_32241);

(statearr_32333[(12)] = inst_32239);

return statearr_32333;
})();
var statearr_32334_32408 = state_32298__$1;
(statearr_32334_32408[(2)] = null);

(statearr_32334_32408[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (41))){
var inst_32257 = (state_32298[(25)]);
var inst_32273 = (state_32298[(2)]);
var inst_32274 = cljs.core.next(inst_32257);
var inst_32238 = inst_32274;
var inst_32239 = null;
var inst_32240 = (0);
var inst_32241 = (0);
var state_32298__$1 = (function (){var statearr_32335 = state_32298;
(statearr_32335[(20)] = inst_32240);

(statearr_32335[(27)] = inst_32273);

(statearr_32335[(21)] = inst_32238);

(statearr_32335[(11)] = inst_32241);

(statearr_32335[(12)] = inst_32239);

return statearr_32335;
})();
var statearr_32336_32409 = state_32298__$1;
(statearr_32336_32409[(2)] = null);

(statearr_32336_32409[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (43))){
var state_32298__$1 = state_32298;
var statearr_32337_32410 = state_32298__$1;
(statearr_32337_32410[(2)] = null);

(statearr_32337_32410[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (29))){
var inst_32282 = (state_32298[(2)]);
var state_32298__$1 = state_32298;
var statearr_32338_32411 = state_32298__$1;
(statearr_32338_32411[(2)] = inst_32282);

(statearr_32338_32411[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (44))){
var inst_32291 = (state_32298[(2)]);
var state_32298__$1 = (function (){var statearr_32339 = state_32298;
(statearr_32339[(28)] = inst_32291);

return statearr_32339;
})();
var statearr_32340_32412 = state_32298__$1;
(statearr_32340_32412[(2)] = null);

(statearr_32340_32412[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (6))){
var inst_32230 = (state_32298[(29)]);
var inst_32229 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_32230__$1 = cljs.core.keys(inst_32229);
var inst_32231 = cljs.core.count(inst_32230__$1);
var inst_32232 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_32231) : cljs.core.reset_BANG_.call(null,dctr,inst_32231));
var inst_32237 = cljs.core.seq(inst_32230__$1);
var inst_32238 = inst_32237;
var inst_32239 = null;
var inst_32240 = (0);
var inst_32241 = (0);
var state_32298__$1 = (function (){var statearr_32341 = state_32298;
(statearr_32341[(20)] = inst_32240);

(statearr_32341[(30)] = inst_32232);

(statearr_32341[(21)] = inst_32238);

(statearr_32341[(29)] = inst_32230__$1);

(statearr_32341[(11)] = inst_32241);

(statearr_32341[(12)] = inst_32239);

return statearr_32341;
})();
var statearr_32342_32413 = state_32298__$1;
(statearr_32342_32413[(2)] = null);

(statearr_32342_32413[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (28))){
var inst_32238 = (state_32298[(21)]);
var inst_32257 = (state_32298[(25)]);
var inst_32257__$1 = cljs.core.seq(inst_32238);
var state_32298__$1 = (function (){var statearr_32343 = state_32298;
(statearr_32343[(25)] = inst_32257__$1);

return statearr_32343;
})();
if(inst_32257__$1){
var statearr_32344_32414 = state_32298__$1;
(statearr_32344_32414[(1)] = (33));

} else {
var statearr_32345_32415 = state_32298__$1;
(statearr_32345_32415[(1)] = (34));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (25))){
var inst_32240 = (state_32298[(20)]);
var inst_32241 = (state_32298[(11)]);
var inst_32243 = (inst_32241 < inst_32240);
var inst_32244 = inst_32243;
var state_32298__$1 = state_32298;
if(cljs.core.truth_(inst_32244)){
var statearr_32346_32416 = state_32298__$1;
(statearr_32346_32416[(1)] = (27));

} else {
var statearr_32347_32417 = state_32298__$1;
(statearr_32347_32417[(1)] = (28));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (34))){
var state_32298__$1 = state_32298;
var statearr_32348_32418 = state_32298__$1;
(statearr_32348_32418[(2)] = null);

(statearr_32348_32418[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (17))){
var state_32298__$1 = state_32298;
var statearr_32349_32419 = state_32298__$1;
(statearr_32349_32419[(2)] = null);

(statearr_32349_32419[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (3))){
var inst_32296 = (state_32298[(2)]);
var state_32298__$1 = state_32298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32298__$1,inst_32296);
} else {
if((state_val_32299 === (12))){
var inst_32225 = (state_32298[(2)]);
var state_32298__$1 = state_32298;
var statearr_32350_32420 = state_32298__$1;
(statearr_32350_32420[(2)] = inst_32225);

(statearr_32350_32420[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (2))){
var state_32298__$1 = state_32298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32298__$1,(4),ch);
} else {
if((state_val_32299 === (23))){
var state_32298__$1 = state_32298;
var statearr_32351_32421 = state_32298__$1;
(statearr_32351_32421[(2)] = null);

(statearr_32351_32421[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (35))){
var inst_32280 = (state_32298[(2)]);
var state_32298__$1 = state_32298;
var statearr_32352_32422 = state_32298__$1;
(statearr_32352_32422[(2)] = inst_32280);

(statearr_32352_32422[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (19))){
var inst_32199 = (state_32298[(7)]);
var inst_32203 = cljs.core.chunk_first(inst_32199);
var inst_32204 = cljs.core.chunk_rest(inst_32199);
var inst_32205 = cljs.core.count(inst_32203);
var inst_32179 = inst_32204;
var inst_32180 = inst_32203;
var inst_32181 = inst_32205;
var inst_32182 = (0);
var state_32298__$1 = (function (){var statearr_32353 = state_32298;
(statearr_32353[(14)] = inst_32179);

(statearr_32353[(15)] = inst_32181);

(statearr_32353[(16)] = inst_32182);

(statearr_32353[(17)] = inst_32180);

return statearr_32353;
})();
var statearr_32354_32423 = state_32298__$1;
(statearr_32354_32423[(2)] = null);

(statearr_32354_32423[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (11))){
var inst_32199 = (state_32298[(7)]);
var inst_32179 = (state_32298[(14)]);
var inst_32199__$1 = cljs.core.seq(inst_32179);
var state_32298__$1 = (function (){var statearr_32355 = state_32298;
(statearr_32355[(7)] = inst_32199__$1);

return statearr_32355;
})();
if(inst_32199__$1){
var statearr_32356_32424 = state_32298__$1;
(statearr_32356_32424[(1)] = (16));

} else {
var statearr_32357_32425 = state_32298__$1;
(statearr_32357_32425[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (9))){
var inst_32227 = (state_32298[(2)]);
var state_32298__$1 = state_32298;
var statearr_32358_32426 = state_32298__$1;
(statearr_32358_32426[(2)] = inst_32227);

(statearr_32358_32426[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (5))){
var inst_32177 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_32178 = cljs.core.seq(inst_32177);
var inst_32179 = inst_32178;
var inst_32180 = null;
var inst_32181 = (0);
var inst_32182 = (0);
var state_32298__$1 = (function (){var statearr_32359 = state_32298;
(statearr_32359[(14)] = inst_32179);

(statearr_32359[(15)] = inst_32181);

(statearr_32359[(16)] = inst_32182);

(statearr_32359[(17)] = inst_32180);

return statearr_32359;
})();
var statearr_32360_32427 = state_32298__$1;
(statearr_32360_32427[(2)] = null);

(statearr_32360_32427[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (14))){
var state_32298__$1 = state_32298;
var statearr_32361_32428 = state_32298__$1;
(statearr_32361_32428[(2)] = null);

(statearr_32361_32428[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (45))){
var inst_32288 = (state_32298[(2)]);
var state_32298__$1 = state_32298;
var statearr_32362_32429 = state_32298__$1;
(statearr_32362_32429[(2)] = inst_32288);

(statearr_32362_32429[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (26))){
var inst_32230 = (state_32298[(29)]);
var inst_32284 = (state_32298[(2)]);
var inst_32285 = cljs.core.seq(inst_32230);
var state_32298__$1 = (function (){var statearr_32363 = state_32298;
(statearr_32363[(31)] = inst_32284);

return statearr_32363;
})();
if(inst_32285){
var statearr_32364_32430 = state_32298__$1;
(statearr_32364_32430[(1)] = (42));

} else {
var statearr_32365_32431 = state_32298__$1;
(statearr_32365_32431[(1)] = (43));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (16))){
var inst_32199 = (state_32298[(7)]);
var inst_32201 = cljs.core.chunked_seq_QMARK_(inst_32199);
var state_32298__$1 = state_32298;
if(inst_32201){
var statearr_32366_32432 = state_32298__$1;
(statearr_32366_32432[(1)] = (19));

} else {
var statearr_32367_32433 = state_32298__$1;
(statearr_32367_32433[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (38))){
var inst_32277 = (state_32298[(2)]);
var state_32298__$1 = state_32298;
var statearr_32368_32434 = state_32298__$1;
(statearr_32368_32434[(2)] = inst_32277);

(statearr_32368_32434[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (30))){
var state_32298__$1 = state_32298;
var statearr_32369_32435 = state_32298__$1;
(statearr_32369_32435[(2)] = null);

(statearr_32369_32435[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (10))){
var inst_32182 = (state_32298[(16)]);
var inst_32180 = (state_32298[(17)]);
var inst_32188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32180,inst_32182);
var inst_32189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32188,(0),null);
var inst_32190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32188,(1),null);
var state_32298__$1 = (function (){var statearr_32370 = state_32298;
(statearr_32370[(26)] = inst_32189);

return statearr_32370;
})();
if(cljs.core.truth_(inst_32190)){
var statearr_32371_32436 = state_32298__$1;
(statearr_32371_32436[(1)] = (13));

} else {
var statearr_32372_32437 = state_32298__$1;
(statearr_32372_32437[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (18))){
var inst_32223 = (state_32298[(2)]);
var state_32298__$1 = state_32298;
var statearr_32373_32438 = state_32298__$1;
(statearr_32373_32438[(2)] = inst_32223);

(statearr_32373_32438[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (42))){
var state_32298__$1 = state_32298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32298__$1,(45),dchan);
} else {
if((state_val_32299 === (37))){
var inst_32266 = (state_32298[(23)]);
var inst_32170 = (state_32298[(9)]);
var inst_32257 = (state_32298[(25)]);
var inst_32266__$1 = cljs.core.first(inst_32257);
var inst_32267 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32266__$1,inst_32170,done);
var state_32298__$1 = (function (){var statearr_32374 = state_32298;
(statearr_32374[(23)] = inst_32266__$1);

return statearr_32374;
})();
if(cljs.core.truth_(inst_32267)){
var statearr_32375_32439 = state_32298__$1;
(statearr_32375_32439[(1)] = (39));

} else {
var statearr_32376_32440 = state_32298__$1;
(statearr_32376_32440[(1)] = (40));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32299 === (8))){
var inst_32181 = (state_32298[(15)]);
var inst_32182 = (state_32298[(16)]);
var inst_32184 = (inst_32182 < inst_32181);
var inst_32185 = inst_32184;
var state_32298__$1 = state_32298;
if(cljs.core.truth_(inst_32185)){
var statearr_32377_32441 = state_32298__$1;
(statearr_32377_32441[(1)] = (10));

} else {
var statearr_32378_32442 = state_32298__$1;
(statearr_32378_32442[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto___32388,cs,m,dchan,dctr,done))
;
return ((function (switch__20483__auto__,c__20550__auto___32388,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20484__auto__ = null;
var cljs$core$async$mult_$_state_machine__20484__auto____0 = (function (){
var statearr_32382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32382[(0)] = cljs$core$async$mult_$_state_machine__20484__auto__);

(statearr_32382[(1)] = (1));

return statearr_32382;
});
var cljs$core$async$mult_$_state_machine__20484__auto____1 = (function (state_32298){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_32298);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e32383){if((e32383 instanceof Object)){
var ex__20487__auto__ = e32383;
var statearr_32384_32443 = state_32298;
(statearr_32384_32443[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32298);

return cljs.core.constant$keyword$recur;
} else {
throw e32383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__32444 = state_32298;
state_32298 = G__32444;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20484__auto__ = function(state_32298){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20484__auto____1.call(this,state_32298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20484__auto____0;
cljs$core$async$mult_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20484__auto____1;
return cljs$core$async$mult_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___32388,cs,m,dchan,dctr,done))
})();
var state__20552__auto__ = (function (){var statearr_32385 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_32385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___32388);

return statearr_32385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___32388,cs,m,dchan,dctr,done))
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
var args32445 = [];
var len__17521__auto___32448 = arguments.length;
var i__17522__auto___32449 = (0);
while(true){
if((i__17522__auto___32449 < len__17521__auto___32448)){
args32445.push((arguments[i__17522__auto___32449]));

var G__32450 = (i__17522__auto___32449 + (1));
i__17522__auto___32449 = G__32450;
continue;
} else {
}
break;
}

var G__32447 = args32445.length;
switch (G__32447) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32445.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17118__auto__ = (((m == null))?null:m);
var m__17119__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__17119__auto__.call(null,m,ch));
} else {
var m__17119__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__17119__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__17119__auto__.call(null,m,ch));
} else {
var m__17119__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__17119__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__17119__auto__.call(null,m));
} else {
var m__17119__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__17119__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__17119__auto__.call(null,m,state_map));
} else {
var m__17119__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__17119__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__17119__auto__.call(null,m,mode));
} else {
var m__17119__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__17119__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17528__auto__ = [];
var len__17521__auto___32464 = arguments.length;
var i__17522__auto___32465 = (0);
while(true){
if((i__17522__auto___32465 < len__17521__auto___32464)){
args__17528__auto__.push((arguments[i__17522__auto___32465]));

var G__32466 = (i__17522__auto___32465 + (1));
i__17522__auto___32465 = G__32466;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((3) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17529__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32458){
var map__32459 = p__32458;
var map__32459__$1 = ((((!((map__32459 == null)))?((((map__32459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32459):map__32459);
var opts = map__32459__$1;
var statearr_32461_32467 = state;
(statearr_32461_32467[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__32459,map__32459__$1,opts){
return (function (val){
var statearr_32462_32468 = state;
(statearr_32462_32468[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32459,map__32459__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_32463_32469 = state;
(statearr_32463_32469[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32454){
var G__32455 = cljs.core.first(seq32454);
var seq32454__$1 = cljs.core.next(seq32454);
var G__32456 = cljs.core.first(seq32454__$1);
var seq32454__$2 = cljs.core.next(seq32454__$1);
var G__32457 = cljs.core.first(seq32454__$2);
var seq32454__$3 = cljs.core.next(seq32454__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32455,G__32456,G__32457,seq32454__$3);
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
var cs = (function (){var G__32636 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32636) : cljs.core.atom.call(null,G__32636));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$pause,null,cljs.core.constant$keyword$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$mute) : cljs.core.atom.call(null,cljs.core.constant$keyword$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.constant$keyword$solo,chs);
var pauses = pick(cljs.core.constant$keyword$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$solos,solos,cljs.core.constant$keyword$mutes,pick(cljs.core.constant$keyword$mute,chs),cljs.core.constant$keyword$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32637 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32637 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32638){
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
this.meta32638 = meta32638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32639,meta32638__$1){
var self__ = this;
var _32639__$1 = this;
return (new cljs.core.async.t32637(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32638__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32639){
var self__ = this;
var _32639__$1 = this;
return self__.meta32638;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32637.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32637.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32637.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32637.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32637.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32640_32802 = self__.cs;
var G__32641_32803 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32640_32802,G__32641_32803) : cljs.core.reset_BANG_.call(null,G__32640_32802,G__32641_32803));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32637.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32637.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32637.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),cljs.core.constant$keyword$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32638","meta32638",-1033984365,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32637.cljs$lang$type = true;

cljs.core.async.t32637.cljs$lang$ctorStr = "cljs.core.async/t32637";

cljs.core.async.t32637.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.core.async/t32637");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32637 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t32637(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32638){
return (new cljs.core.async.t32637(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32638));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32637(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20550__auto___32804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___32804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___32804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32739){
var state_val_32740 = (state_32739[(1)]);
if((state_val_32740 === (7))){
var inst_32657 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
var statearr_32741_32805 = state_32739__$1;
(statearr_32741_32805[(2)] = inst_32657);

(statearr_32741_32805[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (20))){
var inst_32669 = (state_32739[(7)]);
var state_32739__$1 = state_32739;
var statearr_32742_32806 = state_32739__$1;
(statearr_32742_32806[(2)] = inst_32669);

(statearr_32742_32806[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (27))){
var state_32739__$1 = state_32739;
var statearr_32743_32807 = state_32739__$1;
(statearr_32743_32807[(2)] = null);

(statearr_32743_32807[(1)] = (28));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (1))){
var inst_32645 = (state_32739[(8)]);
var inst_32645__$1 = calc_state();
var inst_32647 = (inst_32645__$1 == null);
var inst_32648 = cljs.core.not(inst_32647);
var state_32739__$1 = (function (){var statearr_32744 = state_32739;
(statearr_32744[(8)] = inst_32645__$1);

return statearr_32744;
})();
if(inst_32648){
var statearr_32745_32808 = state_32739__$1;
(statearr_32745_32808[(1)] = (2));

} else {
var statearr_32746_32809 = state_32739__$1;
(statearr_32746_32809[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (24))){
var inst_32692 = (state_32739[(9)]);
var inst_32713 = (state_32739[(10)]);
var inst_32699 = (state_32739[(11)]);
var inst_32713__$1 = (inst_32692.cljs$core$IFn$_invoke$arity$1 ? inst_32692.cljs$core$IFn$_invoke$arity$1(inst_32699) : inst_32692.call(null,inst_32699));
var state_32739__$1 = (function (){var statearr_32747 = state_32739;
(statearr_32747[(10)] = inst_32713__$1);

return statearr_32747;
})();
if(cljs.core.truth_(inst_32713__$1)){
var statearr_32748_32810 = state_32739__$1;
(statearr_32748_32810[(1)] = (29));

} else {
var statearr_32749_32811 = state_32739__$1;
(statearr_32749_32811[(1)] = (30));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (4))){
var inst_32660 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
if(cljs.core.truth_(inst_32660)){
var statearr_32750_32812 = state_32739__$1;
(statearr_32750_32812[(1)] = (8));

} else {
var statearr_32751_32813 = state_32739__$1;
(statearr_32751_32813[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (15))){
var inst_32686 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
if(cljs.core.truth_(inst_32686)){
var statearr_32752_32814 = state_32739__$1;
(statearr_32752_32814[(1)] = (19));

} else {
var statearr_32753_32815 = state_32739__$1;
(statearr_32753_32815[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (21))){
var inst_32691 = (state_32739[(12)]);
var inst_32691__$1 = (state_32739[(2)]);
var inst_32692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32691__$1,cljs.core.constant$keyword$solos);
var inst_32693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32691__$1,cljs.core.constant$keyword$mutes);
var inst_32694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32691__$1,cljs.core.constant$keyword$reads);
var state_32739__$1 = (function (){var statearr_32754 = state_32739;
(statearr_32754[(13)] = inst_32693);

(statearr_32754[(9)] = inst_32692);

(statearr_32754[(12)] = inst_32691__$1);

return statearr_32754;
})();
return cljs.core.async.ioc_alts_BANG_(state_32739__$1,(22),inst_32694);
} else {
if((state_val_32740 === (31))){
var inst_32721 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
if(cljs.core.truth_(inst_32721)){
var statearr_32755_32816 = state_32739__$1;
(statearr_32755_32816[(1)] = (32));

} else {
var statearr_32756_32817 = state_32739__$1;
(statearr_32756_32817[(1)] = (33));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (32))){
var inst_32698 = (state_32739[(14)]);
var state_32739__$1 = state_32739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32739__$1,(35),out,inst_32698);
} else {
if((state_val_32740 === (33))){
var inst_32691 = (state_32739[(12)]);
var inst_32669 = inst_32691;
var state_32739__$1 = (function (){var statearr_32757 = state_32739;
(statearr_32757[(7)] = inst_32669);

return statearr_32757;
})();
var statearr_32758_32818 = state_32739__$1;
(statearr_32758_32818[(2)] = null);

(statearr_32758_32818[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (13))){
var inst_32669 = (state_32739[(7)]);
var inst_32676 = inst_32669.cljs$lang$protocol_mask$partition0$;
var inst_32677 = (inst_32676 & (64));
var inst_32678 = inst_32669.cljs$core$ISeq$;
var inst_32679 = (inst_32677) || (inst_32678);
var state_32739__$1 = state_32739;
if(cljs.core.truth_(inst_32679)){
var statearr_32759_32819 = state_32739__$1;
(statearr_32759_32819[(1)] = (16));

} else {
var statearr_32760_32820 = state_32739__$1;
(statearr_32760_32820[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (22))){
var inst_32699 = (state_32739[(11)]);
var inst_32698 = (state_32739[(14)]);
var inst_32697 = (state_32739[(2)]);
var inst_32698__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32697,(0),null);
var inst_32699__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32697,(1),null);
var inst_32700 = (inst_32698__$1 == null);
var inst_32701 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32699__$1,change);
var inst_32702 = (inst_32700) || (inst_32701);
var state_32739__$1 = (function (){var statearr_32761 = state_32739;
(statearr_32761[(11)] = inst_32699__$1);

(statearr_32761[(14)] = inst_32698__$1);

return statearr_32761;
})();
if(cljs.core.truth_(inst_32702)){
var statearr_32762_32821 = state_32739__$1;
(statearr_32762_32821[(1)] = (23));

} else {
var statearr_32763_32822 = state_32739__$1;
(statearr_32763_32822[(1)] = (24));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (36))){
var inst_32691 = (state_32739[(12)]);
var inst_32669 = inst_32691;
var state_32739__$1 = (function (){var statearr_32764 = state_32739;
(statearr_32764[(7)] = inst_32669);

return statearr_32764;
})();
var statearr_32765_32823 = state_32739__$1;
(statearr_32765_32823[(2)] = null);

(statearr_32765_32823[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (29))){
var inst_32713 = (state_32739[(10)]);
var state_32739__$1 = state_32739;
var statearr_32766_32824 = state_32739__$1;
(statearr_32766_32824[(2)] = inst_32713);

(statearr_32766_32824[(1)] = (31));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (6))){
var state_32739__$1 = state_32739;
var statearr_32767_32825 = state_32739__$1;
(statearr_32767_32825[(2)] = false);

(statearr_32767_32825[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (28))){
var inst_32709 = (state_32739[(2)]);
var inst_32710 = calc_state();
var inst_32669 = inst_32710;
var state_32739__$1 = (function (){var statearr_32768 = state_32739;
(statearr_32768[(15)] = inst_32709);

(statearr_32768[(7)] = inst_32669);

return statearr_32768;
})();
var statearr_32769_32826 = state_32739__$1;
(statearr_32769_32826[(2)] = null);

(statearr_32769_32826[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (25))){
var inst_32735 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
var statearr_32770_32827 = state_32739__$1;
(statearr_32770_32827[(2)] = inst_32735);

(statearr_32770_32827[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (34))){
var inst_32733 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
var statearr_32771_32828 = state_32739__$1;
(statearr_32771_32828[(2)] = inst_32733);

(statearr_32771_32828[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (17))){
var state_32739__$1 = state_32739;
var statearr_32772_32829 = state_32739__$1;
(statearr_32772_32829[(2)] = false);

(statearr_32772_32829[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (3))){
var state_32739__$1 = state_32739;
var statearr_32773_32830 = state_32739__$1;
(statearr_32773_32830[(2)] = false);

(statearr_32773_32830[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (12))){
var inst_32737 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32739__$1,inst_32737);
} else {
if((state_val_32740 === (2))){
var inst_32645 = (state_32739[(8)]);
var inst_32650 = inst_32645.cljs$lang$protocol_mask$partition0$;
var inst_32651 = (inst_32650 & (64));
var inst_32652 = inst_32645.cljs$core$ISeq$;
var inst_32653 = (inst_32651) || (inst_32652);
var state_32739__$1 = state_32739;
if(cljs.core.truth_(inst_32653)){
var statearr_32774_32831 = state_32739__$1;
(statearr_32774_32831[(1)] = (5));

} else {
var statearr_32775_32832 = state_32739__$1;
(statearr_32775_32832[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (23))){
var inst_32698 = (state_32739[(14)]);
var inst_32704 = (inst_32698 == null);
var state_32739__$1 = state_32739;
if(cljs.core.truth_(inst_32704)){
var statearr_32776_32833 = state_32739__$1;
(statearr_32776_32833[(1)] = (26));

} else {
var statearr_32777_32834 = state_32739__$1;
(statearr_32777_32834[(1)] = (27));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (35))){
var inst_32724 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
if(cljs.core.truth_(inst_32724)){
var statearr_32778_32835 = state_32739__$1;
(statearr_32778_32835[(1)] = (36));

} else {
var statearr_32779_32836 = state_32739__$1;
(statearr_32779_32836[(1)] = (37));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (19))){
var inst_32669 = (state_32739[(7)]);
var inst_32688 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32669);
var state_32739__$1 = state_32739;
var statearr_32780_32837 = state_32739__$1;
(statearr_32780_32837[(2)] = inst_32688);

(statearr_32780_32837[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (11))){
var inst_32669 = (state_32739[(7)]);
var inst_32673 = (inst_32669 == null);
var inst_32674 = cljs.core.not(inst_32673);
var state_32739__$1 = state_32739;
if(inst_32674){
var statearr_32781_32838 = state_32739__$1;
(statearr_32781_32838[(1)] = (13));

} else {
var statearr_32782_32839 = state_32739__$1;
(statearr_32782_32839[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (9))){
var inst_32645 = (state_32739[(8)]);
var state_32739__$1 = state_32739;
var statearr_32783_32840 = state_32739__$1;
(statearr_32783_32840[(2)] = inst_32645);

(statearr_32783_32840[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (5))){
var state_32739__$1 = state_32739;
var statearr_32784_32841 = state_32739__$1;
(statearr_32784_32841[(2)] = true);

(statearr_32784_32841[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (14))){
var state_32739__$1 = state_32739;
var statearr_32785_32842 = state_32739__$1;
(statearr_32785_32842[(2)] = false);

(statearr_32785_32842[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (26))){
var inst_32699 = (state_32739[(11)]);
var inst_32706 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32699);
var state_32739__$1 = state_32739;
var statearr_32786_32843 = state_32739__$1;
(statearr_32786_32843[(2)] = inst_32706);

(statearr_32786_32843[(1)] = (28));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (16))){
var state_32739__$1 = state_32739;
var statearr_32787_32844 = state_32739__$1;
(statearr_32787_32844[(2)] = true);

(statearr_32787_32844[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (38))){
var inst_32729 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
var statearr_32788_32845 = state_32739__$1;
(statearr_32788_32845[(2)] = inst_32729);

(statearr_32788_32845[(1)] = (34));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (30))){
var inst_32693 = (state_32739[(13)]);
var inst_32692 = (state_32739[(9)]);
var inst_32699 = (state_32739[(11)]);
var inst_32716 = cljs.core.empty_QMARK_(inst_32692);
var inst_32717 = (inst_32693.cljs$core$IFn$_invoke$arity$1 ? inst_32693.cljs$core$IFn$_invoke$arity$1(inst_32699) : inst_32693.call(null,inst_32699));
var inst_32718 = cljs.core.not(inst_32717);
var inst_32719 = (inst_32716) && (inst_32718);
var state_32739__$1 = state_32739;
var statearr_32789_32846 = state_32739__$1;
(statearr_32789_32846[(2)] = inst_32719);

(statearr_32789_32846[(1)] = (31));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (10))){
var inst_32645 = (state_32739[(8)]);
var inst_32665 = (state_32739[(2)]);
var inst_32666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32665,cljs.core.constant$keyword$solos);
var inst_32667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32665,cljs.core.constant$keyword$mutes);
var inst_32668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32665,cljs.core.constant$keyword$reads);
var inst_32669 = inst_32645;
var state_32739__$1 = (function (){var statearr_32790 = state_32739;
(statearr_32790[(16)] = inst_32667);

(statearr_32790[(17)] = inst_32668);

(statearr_32790[(18)] = inst_32666);

(statearr_32790[(7)] = inst_32669);

return statearr_32790;
})();
var statearr_32791_32847 = state_32739__$1;
(statearr_32791_32847[(2)] = null);

(statearr_32791_32847[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (18))){
var inst_32683 = (state_32739[(2)]);
var state_32739__$1 = state_32739;
var statearr_32792_32848 = state_32739__$1;
(statearr_32792_32848[(2)] = inst_32683);

(statearr_32792_32848[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (37))){
var state_32739__$1 = state_32739;
var statearr_32793_32849 = state_32739__$1;
(statearr_32793_32849[(2)] = null);

(statearr_32793_32849[(1)] = (38));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32740 === (8))){
var inst_32645 = (state_32739[(8)]);
var inst_32662 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32645);
var state_32739__$1 = state_32739;
var statearr_32794_32850 = state_32739__$1;
(statearr_32794_32850[(2)] = inst_32662);

(statearr_32794_32850[(1)] = (10));


return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto___32804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20483__auto__,c__20550__auto___32804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20484__auto__ = null;
var cljs$core$async$mix_$_state_machine__20484__auto____0 = (function (){
var statearr_32798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32798[(0)] = cljs$core$async$mix_$_state_machine__20484__auto__);

(statearr_32798[(1)] = (1));

return statearr_32798;
});
var cljs$core$async$mix_$_state_machine__20484__auto____1 = (function (state_32739){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_32739);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e32799){if((e32799 instanceof Object)){
var ex__20487__auto__ = e32799;
var statearr_32800_32851 = state_32739;
(statearr_32800_32851[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32739);

return cljs.core.constant$keyword$recur;
} else {
throw e32799;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__32852 = state_32739;
state_32739 = G__32852;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20484__auto__ = function(state_32739){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20484__auto____1.call(this,state_32739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20484__auto____0;
cljs$core$async$mix_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20484__auto____1;
return cljs$core$async$mix_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___32804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20552__auto__ = (function (){var statearr_32801 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_32801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___32804);

return statearr_32801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___32804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17118__auto__ = (((p == null))?null:p);
var m__17119__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$4 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__17119__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__17119__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__17119__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$3 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__17119__auto__.call(null,p,v,ch));
} else {
var m__17119__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__17119__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args32855 = [];
var len__17521__auto___32858 = arguments.length;
var i__17522__auto___32859 = (0);
while(true){
if((i__17522__auto___32859 < len__17521__auto___32858)){
args32855.push((arguments[i__17522__auto___32859]));

var G__32860 = (i__17522__auto___32859 + (1));
i__17522__auto___32859 = G__32860;
continue;
} else {
}
break;
}

var G__32857 = args32855.length;
switch (G__32857) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32855.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17118__auto__ = (((p == null))?null:p);
var m__17119__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17118__auto__)]);
if(!((m__17119__auto__ == null))){
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__17119__auto__.call(null,p));
} else {
var m__17119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__17119__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__17119__auto__.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__17119__auto__.call(null,p,v));
} else {
var m__17119__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17119__auto____$1 == null))){
return (m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__17119__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__17119__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var args32863 = [];
var len__17521__auto___32991 = arguments.length;
var i__17522__auto___32992 = (0);
while(true){
if((i__17522__auto___32992 < len__17521__auto___32991)){
args32863.push((arguments[i__17522__auto___32992]));

var G__32993 = (i__17522__auto___32992 + (1));
i__17522__auto___32992 = G__32993;
continue;
} else {
}
break;
}

var G__32865 = args32863.length;
switch (G__32865) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32863.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__32866 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32866) : cljs.core.atom.call(null,G__32866));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__16482__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__16482__auto__,mults){
return (function (p1__32862_SHARP_){
if(cljs.core.truth_((p1__32862_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32862_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32862_SHARP_.call(null,topic)))){
return p1__32862_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32862_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__16482__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32867 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32867 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32868){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32868 = meta32868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32869,meta32868__$1){
var self__ = this;
var _32869__$1 = this;
return (new cljs.core.async.t32867(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32868__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32869){
var self__ = this;
var _32869__$1 = this;
return self__.meta32868;
});})(mults,ensure_mult))
;

cljs.core.async.t32867.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32867.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32867.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32867.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32867.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t32867.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__32870 = self__.mults;
var G__32871 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32870,G__32871) : cljs.core.reset_BANG_.call(null,G__32870,G__32871));
});})(mults,ensure_mult))
;

cljs.core.async.t32867.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32867.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32868","meta32868",929502530,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t32867.cljs$lang$type = true;

cljs.core.async.t32867.cljs$lang$ctorStr = "cljs.core.async/t32867";

cljs.core.async.t32867.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.core.async/t32867");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32867 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t32867(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32868){
return (new cljs.core.async.t32867(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32868));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32867(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20550__auto___32995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___32995,mults,ensure_mult,p){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___32995,mults,ensure_mult,p){
return (function (state_32943){
var state_val_32944 = (state_32943[(1)]);
if((state_val_32944 === (7))){
var inst_32939 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32945_32996 = state_32943__$1;
(statearr_32945_32996[(2)] = inst_32939);

(statearr_32945_32996[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (20))){
var state_32943__$1 = state_32943;
var statearr_32946_32997 = state_32943__$1;
(statearr_32946_32997[(2)] = null);

(statearr_32946_32997[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (1))){
var state_32943__$1 = state_32943;
var statearr_32947_32998 = state_32943__$1;
(statearr_32947_32998[(2)] = null);

(statearr_32947_32998[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (24))){
var inst_32922 = (state_32943[(7)]);
var inst_32931 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32922);
var state_32943__$1 = state_32943;
var statearr_32948_32999 = state_32943__$1;
(statearr_32948_32999[(2)] = inst_32931);

(statearr_32948_32999[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (4))){
var inst_32874 = (state_32943[(8)]);
var inst_32874__$1 = (state_32943[(2)]);
var inst_32875 = (inst_32874__$1 == null);
var state_32943__$1 = (function (){var statearr_32949 = state_32943;
(statearr_32949[(8)] = inst_32874__$1);

return statearr_32949;
})();
if(cljs.core.truth_(inst_32875)){
var statearr_32950_33000 = state_32943__$1;
(statearr_32950_33000[(1)] = (5));

} else {
var statearr_32951_33001 = state_32943__$1;
(statearr_32951_33001[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (15))){
var inst_32916 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32952_33002 = state_32943__$1;
(statearr_32952_33002[(2)] = inst_32916);

(statearr_32952_33002[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (21))){
var inst_32936 = (state_32943[(2)]);
var state_32943__$1 = (function (){var statearr_32953 = state_32943;
(statearr_32953[(9)] = inst_32936);

return statearr_32953;
})();
var statearr_32954_33003 = state_32943__$1;
(statearr_32954_33003[(2)] = null);

(statearr_32954_33003[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (13))){
var inst_32898 = (state_32943[(10)]);
var inst_32900 = cljs.core.chunked_seq_QMARK_(inst_32898);
var state_32943__$1 = state_32943;
if(inst_32900){
var statearr_32955_33004 = state_32943__$1;
(statearr_32955_33004[(1)] = (16));

} else {
var statearr_32956_33005 = state_32943__$1;
(statearr_32956_33005[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (22))){
var inst_32928 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
if(cljs.core.truth_(inst_32928)){
var statearr_32957_33006 = state_32943__$1;
(statearr_32957_33006[(1)] = (23));

} else {
var statearr_32958_33007 = state_32943__$1;
(statearr_32958_33007[(1)] = (24));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (6))){
var inst_32922 = (state_32943[(7)]);
var inst_32924 = (state_32943[(11)]);
var inst_32874 = (state_32943[(8)]);
var inst_32922__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32874) : topic_fn.call(null,inst_32874));
var inst_32923 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_32924__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32923,inst_32922__$1);
var state_32943__$1 = (function (){var statearr_32959 = state_32943;
(statearr_32959[(7)] = inst_32922__$1);

(statearr_32959[(11)] = inst_32924__$1);

return statearr_32959;
})();
if(cljs.core.truth_(inst_32924__$1)){
var statearr_32960_33008 = state_32943__$1;
(statearr_32960_33008[(1)] = (19));

} else {
var statearr_32961_33009 = state_32943__$1;
(statearr_32961_33009[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (25))){
var inst_32933 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32962_33010 = state_32943__$1;
(statearr_32962_33010[(2)] = inst_32933);

(statearr_32962_33010[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (17))){
var inst_32898 = (state_32943[(10)]);
var inst_32907 = cljs.core.first(inst_32898);
var inst_32908 = cljs.core.async.muxch_STAR_(inst_32907);
var inst_32909 = cljs.core.async.close_BANG_(inst_32908);
var inst_32910 = cljs.core.next(inst_32898);
var inst_32884 = inst_32910;
var inst_32885 = null;
var inst_32886 = (0);
var inst_32887 = (0);
var state_32943__$1 = (function (){var statearr_32963 = state_32943;
(statearr_32963[(12)] = inst_32885);

(statearr_32963[(13)] = inst_32909);

(statearr_32963[(14)] = inst_32887);

(statearr_32963[(15)] = inst_32886);

(statearr_32963[(16)] = inst_32884);

return statearr_32963;
})();
var statearr_32964_33011 = state_32943__$1;
(statearr_32964_33011[(2)] = null);

(statearr_32964_33011[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (3))){
var inst_32941 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32943__$1,inst_32941);
} else {
if((state_val_32944 === (12))){
var inst_32918 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32965_33012 = state_32943__$1;
(statearr_32965_33012[(2)] = inst_32918);

(statearr_32965_33012[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (2))){
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32943__$1,(4),ch);
} else {
if((state_val_32944 === (23))){
var state_32943__$1 = state_32943;
var statearr_32966_33013 = state_32943__$1;
(statearr_32966_33013[(2)] = null);

(statearr_32966_33013[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (19))){
var inst_32924 = (state_32943[(11)]);
var inst_32874 = (state_32943[(8)]);
var inst_32926 = cljs.core.async.muxch_STAR_(inst_32924);
var state_32943__$1 = state_32943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32943__$1,(22),inst_32926,inst_32874);
} else {
if((state_val_32944 === (11))){
var inst_32898 = (state_32943[(10)]);
var inst_32884 = (state_32943[(16)]);
var inst_32898__$1 = cljs.core.seq(inst_32884);
var state_32943__$1 = (function (){var statearr_32967 = state_32943;
(statearr_32967[(10)] = inst_32898__$1);

return statearr_32967;
})();
if(inst_32898__$1){
var statearr_32968_33014 = state_32943__$1;
(statearr_32968_33014[(1)] = (13));

} else {
var statearr_32969_33015 = state_32943__$1;
(statearr_32969_33015[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (9))){
var inst_32920 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32970_33016 = state_32943__$1;
(statearr_32970_33016[(2)] = inst_32920);

(statearr_32970_33016[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (5))){
var inst_32881 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_32882 = cljs.core.vals(inst_32881);
var inst_32883 = cljs.core.seq(inst_32882);
var inst_32884 = inst_32883;
var inst_32885 = null;
var inst_32886 = (0);
var inst_32887 = (0);
var state_32943__$1 = (function (){var statearr_32971 = state_32943;
(statearr_32971[(12)] = inst_32885);

(statearr_32971[(14)] = inst_32887);

(statearr_32971[(15)] = inst_32886);

(statearr_32971[(16)] = inst_32884);

return statearr_32971;
})();
var statearr_32972_33017 = state_32943__$1;
(statearr_32972_33017[(2)] = null);

(statearr_32972_33017[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (14))){
var state_32943__$1 = state_32943;
var statearr_32976_33018 = state_32943__$1;
(statearr_32976_33018[(2)] = null);

(statearr_32976_33018[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (16))){
var inst_32898 = (state_32943[(10)]);
var inst_32902 = cljs.core.chunk_first(inst_32898);
var inst_32903 = cljs.core.chunk_rest(inst_32898);
var inst_32904 = cljs.core.count(inst_32902);
var inst_32884 = inst_32903;
var inst_32885 = inst_32902;
var inst_32886 = inst_32904;
var inst_32887 = (0);
var state_32943__$1 = (function (){var statearr_32977 = state_32943;
(statearr_32977[(12)] = inst_32885);

(statearr_32977[(14)] = inst_32887);

(statearr_32977[(15)] = inst_32886);

(statearr_32977[(16)] = inst_32884);

return statearr_32977;
})();
var statearr_32978_33019 = state_32943__$1;
(statearr_32978_33019[(2)] = null);

(statearr_32978_33019[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (10))){
var inst_32885 = (state_32943[(12)]);
var inst_32887 = (state_32943[(14)]);
var inst_32886 = (state_32943[(15)]);
var inst_32884 = (state_32943[(16)]);
var inst_32892 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32885,inst_32887);
var inst_32893 = cljs.core.async.muxch_STAR_(inst_32892);
var inst_32894 = cljs.core.async.close_BANG_(inst_32893);
var inst_32895 = (inst_32887 + (1));
var tmp32973 = inst_32885;
var tmp32974 = inst_32886;
var tmp32975 = inst_32884;
var inst_32884__$1 = tmp32975;
var inst_32885__$1 = tmp32973;
var inst_32886__$1 = tmp32974;
var inst_32887__$1 = inst_32895;
var state_32943__$1 = (function (){var statearr_32979 = state_32943;
(statearr_32979[(12)] = inst_32885__$1);

(statearr_32979[(17)] = inst_32894);

(statearr_32979[(14)] = inst_32887__$1);

(statearr_32979[(15)] = inst_32886__$1);

(statearr_32979[(16)] = inst_32884__$1);

return statearr_32979;
})();
var statearr_32980_33020 = state_32943__$1;
(statearr_32980_33020[(2)] = null);

(statearr_32980_33020[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (18))){
var inst_32913 = (state_32943[(2)]);
var state_32943__$1 = state_32943;
var statearr_32981_33021 = state_32943__$1;
(statearr_32981_33021[(2)] = inst_32913);

(statearr_32981_33021[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_32944 === (8))){
var inst_32887 = (state_32943[(14)]);
var inst_32886 = (state_32943[(15)]);
var inst_32889 = (inst_32887 < inst_32886);
var inst_32890 = inst_32889;
var state_32943__$1 = state_32943;
if(cljs.core.truth_(inst_32890)){
var statearr_32982_33022 = state_32943__$1;
(statearr_32982_33022[(1)] = (10));

} else {
var statearr_32983_33023 = state_32943__$1;
(statearr_32983_33023[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto___32995,mults,ensure_mult,p))
;
return ((function (switch__20483__auto__,c__20550__auto___32995,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20484__auto__ = null;
var cljs$core$async$state_machine__20484__auto____0 = (function (){
var statearr_32987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32987[(0)] = cljs$core$async$state_machine__20484__auto__);

(statearr_32987[(1)] = (1));

return statearr_32987;
});
var cljs$core$async$state_machine__20484__auto____1 = (function (state_32943){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_32943);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e32988){if((e32988 instanceof Object)){
var ex__20487__auto__ = e32988;
var statearr_32989_33024 = state_32943;
(statearr_32989_33024[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32943);

return cljs.core.constant$keyword$recur;
} else {
throw e32988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__33025 = state_32943;
state_32943 = G__33025;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$state_machine__20484__auto__ = function(state_32943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20484__auto____1.call(this,state_32943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20484__auto____0;
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20484__auto____1;
return cljs$core$async$state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___32995,mults,ensure_mult,p))
})();
var state__20552__auto__ = (function (){var statearr_32990 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_32990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___32995);

return statearr_32990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___32995,mults,ensure_mult,p))
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
var args33026 = [];
var len__17521__auto___33029 = arguments.length;
var i__17522__auto___33030 = (0);
while(true){
if((i__17522__auto___33030 < len__17521__auto___33029)){
args33026.push((arguments[i__17522__auto___33030]));

var G__33031 = (i__17522__auto___33030 + (1));
i__17522__auto___33030 = G__33031;
continue;
} else {
}
break;
}

var G__33028 = args33026.length;
switch (G__33028) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33026.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args33033 = [];
var len__17521__auto___33036 = arguments.length;
var i__17522__auto___33037 = (0);
while(true){
if((i__17522__auto___33037 < len__17521__auto___33036)){
args33033.push((arguments[i__17522__auto___33037]));

var G__33038 = (i__17522__auto___33037 + (1));
i__17522__auto___33037 = G__33038;
continue;
} else {
}
break;
}

var G__33035 = args33033.length;
switch (G__33035) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33033.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var args33040 = [];
var len__17521__auto___33111 = arguments.length;
var i__17522__auto___33112 = (0);
while(true){
if((i__17522__auto___33112 < len__17521__auto___33111)){
args33040.push((arguments[i__17522__auto___33112]));

var G__33113 = (i__17522__auto___33112 + (1));
i__17522__auto___33112 = G__33113;
continue;
} else {
}
break;
}

var G__33042 = args33040.length;
switch (G__33042) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33040.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__20550__auto___33115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___33115,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___33115,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33081){
var state_val_33082 = (state_33081[(1)]);
if((state_val_33082 === (7))){
var state_33081__$1 = state_33081;
var statearr_33083_33116 = state_33081__$1;
(statearr_33083_33116[(2)] = null);

(statearr_33083_33116[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (1))){
var state_33081__$1 = state_33081;
var statearr_33084_33117 = state_33081__$1;
(statearr_33084_33117[(2)] = null);

(statearr_33084_33117[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (4))){
var inst_33045 = (state_33081[(7)]);
var inst_33047 = (inst_33045 < cnt);
var state_33081__$1 = state_33081;
if(cljs.core.truth_(inst_33047)){
var statearr_33085_33118 = state_33081__$1;
(statearr_33085_33118[(1)] = (6));

} else {
var statearr_33086_33119 = state_33081__$1;
(statearr_33086_33119[(1)] = (7));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (15))){
var inst_33077 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33087_33120 = state_33081__$1;
(statearr_33087_33120[(2)] = inst_33077);

(statearr_33087_33120[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (13))){
var inst_33070 = cljs.core.async.close_BANG_(out);
var state_33081__$1 = state_33081;
var statearr_33088_33121 = state_33081__$1;
(statearr_33088_33121[(2)] = inst_33070);

(statearr_33088_33121[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (6))){
var state_33081__$1 = state_33081;
var statearr_33089_33122 = state_33081__$1;
(statearr_33089_33122[(2)] = null);

(statearr_33089_33122[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (3))){
var inst_33079 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33081__$1,inst_33079);
} else {
if((state_val_33082 === (12))){
var inst_33067 = (state_33081[(8)]);
var inst_33067__$1 = (state_33081[(2)]);
var inst_33068 = cljs.core.some(cljs.core.nil_QMARK_,inst_33067__$1);
var state_33081__$1 = (function (){var statearr_33090 = state_33081;
(statearr_33090[(8)] = inst_33067__$1);

return statearr_33090;
})();
if(cljs.core.truth_(inst_33068)){
var statearr_33091_33123 = state_33081__$1;
(statearr_33091_33123[(1)] = (13));

} else {
var statearr_33092_33124 = state_33081__$1;
(statearr_33092_33124[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (2))){
var inst_33044 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_33045 = (0);
var state_33081__$1 = (function (){var statearr_33093 = state_33081;
(statearr_33093[(9)] = inst_33044);

(statearr_33093[(7)] = inst_33045);

return statearr_33093;
})();
var statearr_33094_33125 = state_33081__$1;
(statearr_33094_33125[(2)] = null);

(statearr_33094_33125[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (11))){
var inst_33045 = (state_33081[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_33081,(10),Object,null,(9));
var inst_33054 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33045) : chs__$1.call(null,inst_33045));
var inst_33055 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33045) : done.call(null,inst_33045));
var inst_33056 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33054,inst_33055);
var state_33081__$1 = state_33081;
var statearr_33095_33126 = state_33081__$1;
(statearr_33095_33126[(2)] = inst_33056);


cljs.core.async.impl.ioc_helpers.process_exception(state_33081__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (9))){
var inst_33045 = (state_33081[(7)]);
var inst_33058 = (state_33081[(2)]);
var inst_33059 = (inst_33045 + (1));
var inst_33045__$1 = inst_33059;
var state_33081__$1 = (function (){var statearr_33096 = state_33081;
(statearr_33096[(10)] = inst_33058);

(statearr_33096[(7)] = inst_33045__$1);

return statearr_33096;
})();
var statearr_33097_33127 = state_33081__$1;
(statearr_33097_33127[(2)] = null);

(statearr_33097_33127[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (5))){
var inst_33065 = (state_33081[(2)]);
var state_33081__$1 = (function (){var statearr_33098 = state_33081;
(statearr_33098[(11)] = inst_33065);

return statearr_33098;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33081__$1,(12),dchan);
} else {
if((state_val_33082 === (14))){
var inst_33067 = (state_33081[(8)]);
var inst_33072 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33067);
var state_33081__$1 = state_33081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33081__$1,(16),out,inst_33072);
} else {
if((state_val_33082 === (16))){
var inst_33074 = (state_33081[(2)]);
var state_33081__$1 = (function (){var statearr_33099 = state_33081;
(statearr_33099[(12)] = inst_33074);

return statearr_33099;
})();
var statearr_33100_33128 = state_33081__$1;
(statearr_33100_33128[(2)] = null);

(statearr_33100_33128[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (10))){
var inst_33049 = (state_33081[(2)]);
var inst_33050 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33081__$1 = (function (){var statearr_33101 = state_33081;
(statearr_33101[(13)] = inst_33049);

return statearr_33101;
})();
var statearr_33102_33129 = state_33081__$1;
(statearr_33102_33129[(2)] = inst_33050);


cljs.core.async.impl.ioc_helpers.process_exception(state_33081__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33082 === (8))){
var inst_33063 = (state_33081[(2)]);
var state_33081__$1 = state_33081;
var statearr_33103_33130 = state_33081__$1;
(statearr_33103_33130[(2)] = inst_33063);

(statearr_33103_33130[(1)] = (5));


return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto___33115,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20483__auto__,c__20550__auto___33115,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20484__auto__ = null;
var cljs$core$async$state_machine__20484__auto____0 = (function (){
var statearr_33107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33107[(0)] = cljs$core$async$state_machine__20484__auto__);

(statearr_33107[(1)] = (1));

return statearr_33107;
});
var cljs$core$async$state_machine__20484__auto____1 = (function (state_33081){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_33081);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e33108){if((e33108 instanceof Object)){
var ex__20487__auto__ = e33108;
var statearr_33109_33131 = state_33081;
(statearr_33109_33131[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33081);

return cljs.core.constant$keyword$recur;
} else {
throw e33108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__33132 = state_33081;
state_33081 = G__33132;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$state_machine__20484__auto__ = function(state_33081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20484__auto____1.call(this,state_33081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20484__auto____0;
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20484__auto____1;
return cljs$core$async$state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___33115,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20552__auto__ = (function (){var statearr_33110 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_33110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___33115);

return statearr_33110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___33115,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33134 = [];
var len__17521__auto___33190 = arguments.length;
var i__17522__auto___33191 = (0);
while(true){
if((i__17522__auto___33191 < len__17521__auto___33190)){
args33134.push((arguments[i__17522__auto___33191]));

var G__33192 = (i__17522__auto___33191 + (1));
i__17522__auto___33191 = G__33192;
continue;
} else {
}
break;
}

var G__33136 = args33134.length;
switch (G__33136) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33134.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20550__auto___33194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___33194,out){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___33194,out){
return (function (state_33166){
var state_val_33167 = (state_33166[(1)]);
if((state_val_33167 === (7))){
var inst_33146 = (state_33166[(7)]);
var inst_33145 = (state_33166[(8)]);
var inst_33145__$1 = (state_33166[(2)]);
var inst_33146__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33145__$1,(0),null);
var inst_33147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33145__$1,(1),null);
var inst_33148 = (inst_33146__$1 == null);
var state_33166__$1 = (function (){var statearr_33168 = state_33166;
(statearr_33168[(7)] = inst_33146__$1);

(statearr_33168[(8)] = inst_33145__$1);

(statearr_33168[(9)] = inst_33147);

return statearr_33168;
})();
if(cljs.core.truth_(inst_33148)){
var statearr_33169_33195 = state_33166__$1;
(statearr_33169_33195[(1)] = (8));

} else {
var statearr_33170_33196 = state_33166__$1;
(statearr_33170_33196[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33167 === (1))){
var inst_33137 = cljs.core.vec(chs);
var inst_33138 = inst_33137;
var state_33166__$1 = (function (){var statearr_33171 = state_33166;
(statearr_33171[(10)] = inst_33138);

return statearr_33171;
})();
var statearr_33172_33197 = state_33166__$1;
(statearr_33172_33197[(2)] = null);

(statearr_33172_33197[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33167 === (4))){
var inst_33138 = (state_33166[(10)]);
var state_33166__$1 = state_33166;
return cljs.core.async.ioc_alts_BANG_(state_33166__$1,(7),inst_33138);
} else {
if((state_val_33167 === (6))){
var inst_33162 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
var statearr_33173_33198 = state_33166__$1;
(statearr_33173_33198[(2)] = inst_33162);

(statearr_33173_33198[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33167 === (3))){
var inst_33164 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33166__$1,inst_33164);
} else {
if((state_val_33167 === (2))){
var inst_33138 = (state_33166[(10)]);
var inst_33140 = cljs.core.count(inst_33138);
var inst_33141 = (inst_33140 > (0));
var state_33166__$1 = state_33166;
if(cljs.core.truth_(inst_33141)){
var statearr_33175_33199 = state_33166__$1;
(statearr_33175_33199[(1)] = (4));

} else {
var statearr_33176_33200 = state_33166__$1;
(statearr_33176_33200[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33167 === (11))){
var inst_33138 = (state_33166[(10)]);
var inst_33155 = (state_33166[(2)]);
var tmp33174 = inst_33138;
var inst_33138__$1 = tmp33174;
var state_33166__$1 = (function (){var statearr_33177 = state_33166;
(statearr_33177[(11)] = inst_33155);

(statearr_33177[(10)] = inst_33138__$1);

return statearr_33177;
})();
var statearr_33178_33201 = state_33166__$1;
(statearr_33178_33201[(2)] = null);

(statearr_33178_33201[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33167 === (9))){
var inst_33146 = (state_33166[(7)]);
var state_33166__$1 = state_33166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33166__$1,(11),out,inst_33146);
} else {
if((state_val_33167 === (5))){
var inst_33160 = cljs.core.async.close_BANG_(out);
var state_33166__$1 = state_33166;
var statearr_33179_33202 = state_33166__$1;
(statearr_33179_33202[(2)] = inst_33160);

(statearr_33179_33202[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33167 === (10))){
var inst_33158 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
var statearr_33180_33203 = state_33166__$1;
(statearr_33180_33203[(2)] = inst_33158);

(statearr_33180_33203[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33167 === (8))){
var inst_33146 = (state_33166[(7)]);
var inst_33145 = (state_33166[(8)]);
var inst_33138 = (state_33166[(10)]);
var inst_33147 = (state_33166[(9)]);
var inst_33150 = (function (){var cs = inst_33138;
var vec__33143 = inst_33145;
var v = inst_33146;
var c = inst_33147;
return ((function (cs,vec__33143,v,c,inst_33146,inst_33145,inst_33138,inst_33147,state_val_33167,c__20550__auto___33194,out){
return (function (p1__33133_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33133_SHARP_);
});
;})(cs,vec__33143,v,c,inst_33146,inst_33145,inst_33138,inst_33147,state_val_33167,c__20550__auto___33194,out))
})();
var inst_33151 = cljs.core.filterv(inst_33150,inst_33138);
var inst_33138__$1 = inst_33151;
var state_33166__$1 = (function (){var statearr_33181 = state_33166;
(statearr_33181[(10)] = inst_33138__$1);

return statearr_33181;
})();
var statearr_33182_33204 = state_33166__$1;
(statearr_33182_33204[(2)] = null);

(statearr_33182_33204[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto___33194,out))
;
return ((function (switch__20483__auto__,c__20550__auto___33194,out){
return (function() {
var cljs$core$async$state_machine__20484__auto__ = null;
var cljs$core$async$state_machine__20484__auto____0 = (function (){
var statearr_33186 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33186[(0)] = cljs$core$async$state_machine__20484__auto__);

(statearr_33186[(1)] = (1));

return statearr_33186;
});
var cljs$core$async$state_machine__20484__auto____1 = (function (state_33166){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_33166);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e33187){if((e33187 instanceof Object)){
var ex__20487__auto__ = e33187;
var statearr_33188_33205 = state_33166;
(statearr_33188_33205[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33166);

return cljs.core.constant$keyword$recur;
} else {
throw e33187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__33206 = state_33166;
state_33166 = G__33206;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$state_machine__20484__auto__ = function(state_33166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20484__auto____1.call(this,state_33166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20484__auto____0;
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20484__auto____1;
return cljs$core$async$state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___33194,out))
})();
var state__20552__auto__ = (function (){var statearr_33189 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_33189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___33194);

return statearr_33189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___33194,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args33207 = [];
var len__17521__auto___33256 = arguments.length;
var i__17522__auto___33257 = (0);
while(true){
if((i__17522__auto___33257 < len__17521__auto___33256)){
args33207.push((arguments[i__17522__auto___33257]));

var G__33258 = (i__17522__auto___33257 + (1));
i__17522__auto___33257 = G__33258;
continue;
} else {
}
break;
}

var G__33209 = args33207.length;
switch (G__33209) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33207.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20550__auto___33260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___33260,out){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___33260,out){
return (function (state_33233){
var state_val_33234 = (state_33233[(1)]);
if((state_val_33234 === (7))){
var inst_33215 = (state_33233[(7)]);
var inst_33215__$1 = (state_33233[(2)]);
var inst_33216 = (inst_33215__$1 == null);
var inst_33217 = cljs.core.not(inst_33216);
var state_33233__$1 = (function (){var statearr_33235 = state_33233;
(statearr_33235[(7)] = inst_33215__$1);

return statearr_33235;
})();
if(inst_33217){
var statearr_33236_33261 = state_33233__$1;
(statearr_33236_33261[(1)] = (8));

} else {
var statearr_33237_33262 = state_33233__$1;
(statearr_33237_33262[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33234 === (1))){
var inst_33210 = (0);
var state_33233__$1 = (function (){var statearr_33238 = state_33233;
(statearr_33238[(8)] = inst_33210);

return statearr_33238;
})();
var statearr_33239_33263 = state_33233__$1;
(statearr_33239_33263[(2)] = null);

(statearr_33239_33263[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33234 === (4))){
var state_33233__$1 = state_33233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33233__$1,(7),ch);
} else {
if((state_val_33234 === (6))){
var inst_33228 = (state_33233[(2)]);
var state_33233__$1 = state_33233;
var statearr_33240_33264 = state_33233__$1;
(statearr_33240_33264[(2)] = inst_33228);

(statearr_33240_33264[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33234 === (3))){
var inst_33230 = (state_33233[(2)]);
var inst_33231 = cljs.core.async.close_BANG_(out);
var state_33233__$1 = (function (){var statearr_33241 = state_33233;
(statearr_33241[(9)] = inst_33230);

return statearr_33241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33233__$1,inst_33231);
} else {
if((state_val_33234 === (2))){
var inst_33210 = (state_33233[(8)]);
var inst_33212 = (inst_33210 < n);
var state_33233__$1 = state_33233;
if(cljs.core.truth_(inst_33212)){
var statearr_33242_33265 = state_33233__$1;
(statearr_33242_33265[(1)] = (4));

} else {
var statearr_33243_33266 = state_33233__$1;
(statearr_33243_33266[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33234 === (11))){
var inst_33210 = (state_33233[(8)]);
var inst_33220 = (state_33233[(2)]);
var inst_33221 = (inst_33210 + (1));
var inst_33210__$1 = inst_33221;
var state_33233__$1 = (function (){var statearr_33244 = state_33233;
(statearr_33244[(10)] = inst_33220);

(statearr_33244[(8)] = inst_33210__$1);

return statearr_33244;
})();
var statearr_33245_33267 = state_33233__$1;
(statearr_33245_33267[(2)] = null);

(statearr_33245_33267[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33234 === (9))){
var state_33233__$1 = state_33233;
var statearr_33246_33268 = state_33233__$1;
(statearr_33246_33268[(2)] = null);

(statearr_33246_33268[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33234 === (5))){
var state_33233__$1 = state_33233;
var statearr_33247_33269 = state_33233__$1;
(statearr_33247_33269[(2)] = null);

(statearr_33247_33269[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33234 === (10))){
var inst_33225 = (state_33233[(2)]);
var state_33233__$1 = state_33233;
var statearr_33248_33270 = state_33233__$1;
(statearr_33248_33270[(2)] = inst_33225);

(statearr_33248_33270[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33234 === (8))){
var inst_33215 = (state_33233[(7)]);
var state_33233__$1 = state_33233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33233__$1,(11),out,inst_33215);
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
});})(c__20550__auto___33260,out))
;
return ((function (switch__20483__auto__,c__20550__auto___33260,out){
return (function() {
var cljs$core$async$state_machine__20484__auto__ = null;
var cljs$core$async$state_machine__20484__auto____0 = (function (){
var statearr_33252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33252[(0)] = cljs$core$async$state_machine__20484__auto__);

(statearr_33252[(1)] = (1));

return statearr_33252;
});
var cljs$core$async$state_machine__20484__auto____1 = (function (state_33233){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_33233);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e33253){if((e33253 instanceof Object)){
var ex__20487__auto__ = e33253;
var statearr_33254_33271 = state_33233;
(statearr_33254_33271[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33233);

return cljs.core.constant$keyword$recur;
} else {
throw e33253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__33272 = state_33233;
state_33233 = G__33272;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$state_machine__20484__auto__ = function(state_33233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20484__auto____1.call(this,state_33233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20484__auto____0;
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20484__auto____1;
return cljs$core$async$state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___33260,out))
})();
var state__20552__auto__ = (function (){var statearr_33255 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_33255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___33260);

return statearr_33255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___33260,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t33282 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33282 = (function (map_LT_,f,ch,meta33283){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33283 = meta33283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33284,meta33283__$1){
var self__ = this;
var _33284__$1 = this;
return (new cljs.core.async.t33282(self__.map_LT_,self__.f,self__.ch,meta33283__$1));
});

cljs.core.async.t33282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33284){
var self__ = this;
var _33284__$1 = this;
return self__.meta33283;
});

cljs.core.async.t33282.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33282.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t33282.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t33285 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33285 = (function (map_LT_,f,ch,meta33283,_,fn1,meta33286){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33283 = meta33283;
this._ = _;
this.fn1 = fn1;
this.meta33286 = meta33286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33287,meta33286__$1){
var self__ = this;
var _33287__$1 = this;
return (new cljs.core.async.t33285(self__.map_LT_,self__.f,self__.ch,self__.meta33283,self__._,self__.fn1,meta33286__$1));
});})(___$1))
;

cljs.core.async.t33285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33287){
var self__ = this;
var _33287__$1 = this;
return self__.meta33286;
});})(___$1))
;

cljs.core.async.t33285.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t33285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33273_SHARP_){
var G__33288 = (((p1__33273_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33273_SHARP_) : self__.f.call(null,p1__33273_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33288) : f1.call(null,G__33288));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33285.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),cljs.core.constant$keyword$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33283","meta33283",1319032549,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$tag,new cljs.core.Symbol("cljs.core.async","t33282","cljs.core.async/t33282",102842959,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33286","meta33286",1983693379,null)], null);
});})(___$1))
;

cljs.core.async.t33285.cljs$lang$type = true;

cljs.core.async.t33285.cljs$lang$ctorStr = "cljs.core.async/t33285";

cljs.core.async.t33285.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.core.async/t33285");
});})(___$1))
;

cljs.core.async.__GT_t33285 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t33285(map_LT___$1,f__$1,ch__$1,meta33283__$1,___$2,fn1__$1,meta33286){
return (new cljs.core.async.t33285(map_LT___$1,f__$1,ch__$1,meta33283__$1,___$2,fn1__$1,meta33286));
});})(___$1))
;

}

return (new cljs.core.async.t33285(self__.map_LT_,self__.f,self__.ch,self__.meta33283,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16470__auto__ = ret;
if(cljs.core.truth_(and__16470__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__16470__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33289 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33289) : self__.f.call(null,G__33289));
})());
} else {
return ret;
}
});

cljs.core.async.t33282.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t33282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),cljs.core.constant$keyword$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33283","meta33283",1319032549,null)], null);
});

cljs.core.async.t33282.cljs$lang$type = true;

cljs.core.async.t33282.cljs$lang$ctorStr = "cljs.core.async/t33282";

cljs.core.async.t33282.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.core.async/t33282");
});

cljs.core.async.__GT_t33282 = (function cljs$core$async$map_LT__$___GT_t33282(map_LT___$1,f__$1,ch__$1,meta33283){
return (new cljs.core.async.t33282(map_LT___$1,f__$1,ch__$1,meta33283));
});

}

return (new cljs.core.async.t33282(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t33293 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33293 = (function (map_GT_,f,ch,meta33294){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33294 = meta33294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33295,meta33294__$1){
var self__ = this;
var _33295__$1 = this;
return (new cljs.core.async.t33293(self__.map_GT_,self__.f,self__.ch,meta33294__$1));
});

cljs.core.async.t33293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33295){
var self__ = this;
var _33295__$1 = this;
return self__.meta33294;
});

cljs.core.async.t33293.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33293.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33293.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33293.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t33293.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t33293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),cljs.core.constant$keyword$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33294","meta33294",944875892,null)], null);
});

cljs.core.async.t33293.cljs$lang$type = true;

cljs.core.async.t33293.cljs$lang$ctorStr = "cljs.core.async/t33293";

cljs.core.async.t33293.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.core.async/t33293");
});

cljs.core.async.__GT_t33293 = (function cljs$core$async$map_GT__$___GT_t33293(map_GT___$1,f__$1,ch__$1,meta33294){
return (new cljs.core.async.t33293(map_GT___$1,f__$1,ch__$1,meta33294));
});

}

return (new cljs.core.async.t33293(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t33299 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33299 = (function (filter_GT_,p,ch,meta33300){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33300 = meta33300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33301,meta33300__$1){
var self__ = this;
var _33301__$1 = this;
return (new cljs.core.async.t33299(self__.filter_GT_,self__.p,self__.ch,meta33300__$1));
});

cljs.core.async.t33299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33301){
var self__ = this;
var _33301__$1 = this;
return self__.meta33300;
});

cljs.core.async.t33299.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t33299.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t33299.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t33299.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t33299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),cljs.core.constant$keyword$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33300","meta33300",-2079693023,null)], null);
});

cljs.core.async.t33299.cljs$lang$type = true;

cljs.core.async.t33299.cljs$lang$ctorStr = "cljs.core.async/t33299";

cljs.core.async.t33299.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.core.async/t33299");
});

cljs.core.async.__GT_t33299 = (function cljs$core$async$filter_GT__$___GT_t33299(filter_GT___$1,p__$1,ch__$1,meta33300){
return (new cljs.core.async.t33299(filter_GT___$1,p__$1,ch__$1,meta33300));
});

}

return (new cljs.core.async.t33299(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args33302 = [];
var len__17521__auto___33346 = arguments.length;
var i__17522__auto___33347 = (0);
while(true){
if((i__17522__auto___33347 < len__17521__auto___33346)){
args33302.push((arguments[i__17522__auto___33347]));

var G__33348 = (i__17522__auto___33347 + (1));
i__17522__auto___33347 = G__33348;
continue;
} else {
}
break;
}

var G__33304 = args33302.length;
switch (G__33304) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33302.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20550__auto___33350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___33350,out){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___33350,out){
return (function (state_33325){
var state_val_33326 = (state_33325[(1)]);
if((state_val_33326 === (7))){
var inst_33321 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
var statearr_33327_33351 = state_33325__$1;
(statearr_33327_33351[(2)] = inst_33321);

(statearr_33327_33351[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33326 === (1))){
var state_33325__$1 = state_33325;
var statearr_33328_33352 = state_33325__$1;
(statearr_33328_33352[(2)] = null);

(statearr_33328_33352[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33326 === (4))){
var inst_33307 = (state_33325[(7)]);
var inst_33307__$1 = (state_33325[(2)]);
var inst_33308 = (inst_33307__$1 == null);
var state_33325__$1 = (function (){var statearr_33329 = state_33325;
(statearr_33329[(7)] = inst_33307__$1);

return statearr_33329;
})();
if(cljs.core.truth_(inst_33308)){
var statearr_33330_33353 = state_33325__$1;
(statearr_33330_33353[(1)] = (5));

} else {
var statearr_33331_33354 = state_33325__$1;
(statearr_33331_33354[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33326 === (6))){
var inst_33307 = (state_33325[(7)]);
var inst_33312 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33307) : p.call(null,inst_33307));
var state_33325__$1 = state_33325;
if(cljs.core.truth_(inst_33312)){
var statearr_33332_33355 = state_33325__$1;
(statearr_33332_33355[(1)] = (8));

} else {
var statearr_33333_33356 = state_33325__$1;
(statearr_33333_33356[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33326 === (3))){
var inst_33323 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33325__$1,inst_33323);
} else {
if((state_val_33326 === (2))){
var state_33325__$1 = state_33325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33325__$1,(4),ch);
} else {
if((state_val_33326 === (11))){
var inst_33315 = (state_33325[(2)]);
var state_33325__$1 = state_33325;
var statearr_33334_33357 = state_33325__$1;
(statearr_33334_33357[(2)] = inst_33315);

(statearr_33334_33357[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33326 === (9))){
var state_33325__$1 = state_33325;
var statearr_33335_33358 = state_33325__$1;
(statearr_33335_33358[(2)] = null);

(statearr_33335_33358[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33326 === (5))){
var inst_33310 = cljs.core.async.close_BANG_(out);
var state_33325__$1 = state_33325;
var statearr_33336_33359 = state_33325__$1;
(statearr_33336_33359[(2)] = inst_33310);

(statearr_33336_33359[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33326 === (10))){
var inst_33318 = (state_33325[(2)]);
var state_33325__$1 = (function (){var statearr_33337 = state_33325;
(statearr_33337[(8)] = inst_33318);

return statearr_33337;
})();
var statearr_33338_33360 = state_33325__$1;
(statearr_33338_33360[(2)] = null);

(statearr_33338_33360[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33326 === (8))){
var inst_33307 = (state_33325[(7)]);
var state_33325__$1 = state_33325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33325__$1,(11),out,inst_33307);
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
});})(c__20550__auto___33350,out))
;
return ((function (switch__20483__auto__,c__20550__auto___33350,out){
return (function() {
var cljs$core$async$state_machine__20484__auto__ = null;
var cljs$core$async$state_machine__20484__auto____0 = (function (){
var statearr_33342 = [null,null,null,null,null,null,null,null,null];
(statearr_33342[(0)] = cljs$core$async$state_machine__20484__auto__);

(statearr_33342[(1)] = (1));

return statearr_33342;
});
var cljs$core$async$state_machine__20484__auto____1 = (function (state_33325){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_33325);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e33343){if((e33343 instanceof Object)){
var ex__20487__auto__ = e33343;
var statearr_33344_33361 = state_33325;
(statearr_33344_33361[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33325);

return cljs.core.constant$keyword$recur;
} else {
throw e33343;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__33362 = state_33325;
state_33325 = G__33362;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$state_machine__20484__auto__ = function(state_33325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20484__auto____1.call(this,state_33325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20484__auto____0;
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20484__auto____1;
return cljs$core$async$state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___33350,out))
})();
var state__20552__auto__ = (function (){var statearr_33345 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_33345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___33350);

return statearr_33345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___33350,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args33363 = [];
var len__17521__auto___33366 = arguments.length;
var i__17522__auto___33367 = (0);
while(true){
if((i__17522__auto___33367 < len__17521__auto___33366)){
args33363.push((arguments[i__17522__auto___33367]));

var G__33368 = (i__17522__auto___33367 + (1));
i__17522__auto___33367 = G__33368;
continue;
} else {
}
break;
}

var G__33365 = args33363.length;
switch (G__33365) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33363.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20550__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto__){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto__){
return (function (state_33535){
var state_val_33536 = (state_33535[(1)]);
if((state_val_33536 === (7))){
var inst_33531 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33537_33578 = state_33535__$1;
(statearr_33537_33578[(2)] = inst_33531);

(statearr_33537_33578[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (20))){
var inst_33501 = (state_33535[(7)]);
var inst_33512 = (state_33535[(2)]);
var inst_33513 = cljs.core.next(inst_33501);
var inst_33487 = inst_33513;
var inst_33488 = null;
var inst_33489 = (0);
var inst_33490 = (0);
var state_33535__$1 = (function (){var statearr_33538 = state_33535;
(statearr_33538[(8)] = inst_33487);

(statearr_33538[(9)] = inst_33512);

(statearr_33538[(10)] = inst_33488);

(statearr_33538[(11)] = inst_33489);

(statearr_33538[(12)] = inst_33490);

return statearr_33538;
})();
var statearr_33539_33579 = state_33535__$1;
(statearr_33539_33579[(2)] = null);

(statearr_33539_33579[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (1))){
var state_33535__$1 = state_33535;
var statearr_33540_33580 = state_33535__$1;
(statearr_33540_33580[(2)] = null);

(statearr_33540_33580[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (4))){
var inst_33476 = (state_33535[(13)]);
var inst_33476__$1 = (state_33535[(2)]);
var inst_33477 = (inst_33476__$1 == null);
var state_33535__$1 = (function (){var statearr_33541 = state_33535;
(statearr_33541[(13)] = inst_33476__$1);

return statearr_33541;
})();
if(cljs.core.truth_(inst_33477)){
var statearr_33542_33581 = state_33535__$1;
(statearr_33542_33581[(1)] = (5));

} else {
var statearr_33543_33582 = state_33535__$1;
(statearr_33543_33582[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (15))){
var state_33535__$1 = state_33535;
var statearr_33547_33583 = state_33535__$1;
(statearr_33547_33583[(2)] = null);

(statearr_33547_33583[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (21))){
var state_33535__$1 = state_33535;
var statearr_33548_33584 = state_33535__$1;
(statearr_33548_33584[(2)] = null);

(statearr_33548_33584[(1)] = (23));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (13))){
var inst_33487 = (state_33535[(8)]);
var inst_33488 = (state_33535[(10)]);
var inst_33489 = (state_33535[(11)]);
var inst_33490 = (state_33535[(12)]);
var inst_33497 = (state_33535[(2)]);
var inst_33498 = (inst_33490 + (1));
var tmp33544 = inst_33487;
var tmp33545 = inst_33488;
var tmp33546 = inst_33489;
var inst_33487__$1 = tmp33544;
var inst_33488__$1 = tmp33545;
var inst_33489__$1 = tmp33546;
var inst_33490__$1 = inst_33498;
var state_33535__$1 = (function (){var statearr_33549 = state_33535;
(statearr_33549[(8)] = inst_33487__$1);

(statearr_33549[(10)] = inst_33488__$1);

(statearr_33549[(11)] = inst_33489__$1);

(statearr_33549[(12)] = inst_33490__$1);

(statearr_33549[(14)] = inst_33497);

return statearr_33549;
})();
var statearr_33550_33585 = state_33535__$1;
(statearr_33550_33585[(2)] = null);

(statearr_33550_33585[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (22))){
var state_33535__$1 = state_33535;
var statearr_33551_33586 = state_33535__$1;
(statearr_33551_33586[(2)] = null);

(statearr_33551_33586[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (6))){
var inst_33476 = (state_33535[(13)]);
var inst_33485 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33476) : f.call(null,inst_33476));
var inst_33486 = cljs.core.seq(inst_33485);
var inst_33487 = inst_33486;
var inst_33488 = null;
var inst_33489 = (0);
var inst_33490 = (0);
var state_33535__$1 = (function (){var statearr_33552 = state_33535;
(statearr_33552[(8)] = inst_33487);

(statearr_33552[(10)] = inst_33488);

(statearr_33552[(11)] = inst_33489);

(statearr_33552[(12)] = inst_33490);

return statearr_33552;
})();
var statearr_33553_33587 = state_33535__$1;
(statearr_33553_33587[(2)] = null);

(statearr_33553_33587[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (17))){
var inst_33501 = (state_33535[(7)]);
var inst_33505 = cljs.core.chunk_first(inst_33501);
var inst_33506 = cljs.core.chunk_rest(inst_33501);
var inst_33507 = cljs.core.count(inst_33505);
var inst_33487 = inst_33506;
var inst_33488 = inst_33505;
var inst_33489 = inst_33507;
var inst_33490 = (0);
var state_33535__$1 = (function (){var statearr_33554 = state_33535;
(statearr_33554[(8)] = inst_33487);

(statearr_33554[(10)] = inst_33488);

(statearr_33554[(11)] = inst_33489);

(statearr_33554[(12)] = inst_33490);

return statearr_33554;
})();
var statearr_33555_33588 = state_33535__$1;
(statearr_33555_33588[(2)] = null);

(statearr_33555_33588[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (3))){
var inst_33533 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33535__$1,inst_33533);
} else {
if((state_val_33536 === (12))){
var inst_33521 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33556_33589 = state_33535__$1;
(statearr_33556_33589[(2)] = inst_33521);

(statearr_33556_33589[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (2))){
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33535__$1,(4),in$);
} else {
if((state_val_33536 === (23))){
var inst_33529 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33557_33590 = state_33535__$1;
(statearr_33557_33590[(2)] = inst_33529);

(statearr_33557_33590[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (19))){
var inst_33516 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33558_33591 = state_33535__$1;
(statearr_33558_33591[(2)] = inst_33516);

(statearr_33558_33591[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (11))){
var inst_33487 = (state_33535[(8)]);
var inst_33501 = (state_33535[(7)]);
var inst_33501__$1 = cljs.core.seq(inst_33487);
var state_33535__$1 = (function (){var statearr_33559 = state_33535;
(statearr_33559[(7)] = inst_33501__$1);

return statearr_33559;
})();
if(inst_33501__$1){
var statearr_33560_33592 = state_33535__$1;
(statearr_33560_33592[(1)] = (14));

} else {
var statearr_33561_33593 = state_33535__$1;
(statearr_33561_33593[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (9))){
var inst_33523 = (state_33535[(2)]);
var inst_33524 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33535__$1 = (function (){var statearr_33562 = state_33535;
(statearr_33562[(15)] = inst_33523);

return statearr_33562;
})();
if(cljs.core.truth_(inst_33524)){
var statearr_33563_33594 = state_33535__$1;
(statearr_33563_33594[(1)] = (21));

} else {
var statearr_33564_33595 = state_33535__$1;
(statearr_33564_33595[(1)] = (22));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (5))){
var inst_33479 = cljs.core.async.close_BANG_(out);
var state_33535__$1 = state_33535;
var statearr_33565_33596 = state_33535__$1;
(statearr_33565_33596[(2)] = inst_33479);

(statearr_33565_33596[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (14))){
var inst_33501 = (state_33535[(7)]);
var inst_33503 = cljs.core.chunked_seq_QMARK_(inst_33501);
var state_33535__$1 = state_33535;
if(inst_33503){
var statearr_33566_33597 = state_33535__$1;
(statearr_33566_33597[(1)] = (17));

} else {
var statearr_33567_33598 = state_33535__$1;
(statearr_33567_33598[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (16))){
var inst_33519 = (state_33535[(2)]);
var state_33535__$1 = state_33535;
var statearr_33568_33599 = state_33535__$1;
(statearr_33568_33599[(2)] = inst_33519);

(statearr_33568_33599[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33536 === (10))){
var inst_33488 = (state_33535[(10)]);
var inst_33490 = (state_33535[(12)]);
var inst_33495 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33488,inst_33490);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33535__$1,(13),out,inst_33495);
} else {
if((state_val_33536 === (18))){
var inst_33501 = (state_33535[(7)]);
var inst_33510 = cljs.core.first(inst_33501);
var state_33535__$1 = state_33535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33535__$1,(20),out,inst_33510);
} else {
if((state_val_33536 === (8))){
var inst_33489 = (state_33535[(11)]);
var inst_33490 = (state_33535[(12)]);
var inst_33492 = (inst_33490 < inst_33489);
var inst_33493 = inst_33492;
var state_33535__$1 = state_33535;
if(cljs.core.truth_(inst_33493)){
var statearr_33569_33600 = state_33535__$1;
(statearr_33569_33600[(1)] = (10));

} else {
var statearr_33570_33601 = state_33535__$1;
(statearr_33570_33601[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto__))
;
return ((function (switch__20483__auto__,c__20550__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20484__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20484__auto____0 = (function (){
var statearr_33574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33574[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20484__auto__);

(statearr_33574[(1)] = (1));

return statearr_33574;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20484__auto____1 = (function (state_33535){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_33535);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e33575){if((e33575 instanceof Object)){
var ex__20487__auto__ = e33575;
var statearr_33576_33602 = state_33535;
(statearr_33576_33602[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33535);

return cljs.core.constant$keyword$recur;
} else {
throw e33575;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__33603 = state_33535;
state_33535 = G__33603;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20484__auto__ = function(state_33535){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20484__auto____1.call(this,state_33535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20484__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20484__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto__))
})();
var state__20552__auto__ = (function (){var statearr_33577 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_33577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto__);

return statearr_33577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto__))
);

return c__20550__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args33604 = [];
var len__17521__auto___33607 = arguments.length;
var i__17522__auto___33608 = (0);
while(true){
if((i__17522__auto___33608 < len__17521__auto___33607)){
args33604.push((arguments[i__17522__auto___33608]));

var G__33609 = (i__17522__auto___33608 + (1));
i__17522__auto___33608 = G__33609;
continue;
} else {
}
break;
}

var G__33606 = args33604.length;
switch (G__33606) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33604.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args33611 = [];
var len__17521__auto___33614 = arguments.length;
var i__17522__auto___33615 = (0);
while(true){
if((i__17522__auto___33615 < len__17521__auto___33614)){
args33611.push((arguments[i__17522__auto___33615]));

var G__33616 = (i__17522__auto___33615 + (1));
i__17522__auto___33615 = G__33616;
continue;
} else {
}
break;
}

var G__33613 = args33611.length;
switch (G__33613) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33611.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args33618 = [];
var len__17521__auto___33669 = arguments.length;
var i__17522__auto___33670 = (0);
while(true){
if((i__17522__auto___33670 < len__17521__auto___33669)){
args33618.push((arguments[i__17522__auto___33670]));

var G__33671 = (i__17522__auto___33670 + (1));
i__17522__auto___33670 = G__33671;
continue;
} else {
}
break;
}

var G__33620 = args33618.length;
switch (G__33620) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33618.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20550__auto___33673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___33673,out){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___33673,out){
return (function (state_33644){
var state_val_33645 = (state_33644[(1)]);
if((state_val_33645 === (7))){
var inst_33639 = (state_33644[(2)]);
var state_33644__$1 = state_33644;
var statearr_33646_33674 = state_33644__$1;
(statearr_33646_33674[(2)] = inst_33639);

(statearr_33646_33674[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33645 === (1))){
var inst_33621 = null;
var state_33644__$1 = (function (){var statearr_33647 = state_33644;
(statearr_33647[(7)] = inst_33621);

return statearr_33647;
})();
var statearr_33648_33675 = state_33644__$1;
(statearr_33648_33675[(2)] = null);

(statearr_33648_33675[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33645 === (4))){
var inst_33624 = (state_33644[(8)]);
var inst_33624__$1 = (state_33644[(2)]);
var inst_33625 = (inst_33624__$1 == null);
var inst_33626 = cljs.core.not(inst_33625);
var state_33644__$1 = (function (){var statearr_33649 = state_33644;
(statearr_33649[(8)] = inst_33624__$1);

return statearr_33649;
})();
if(inst_33626){
var statearr_33650_33676 = state_33644__$1;
(statearr_33650_33676[(1)] = (5));

} else {
var statearr_33651_33677 = state_33644__$1;
(statearr_33651_33677[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33645 === (6))){
var state_33644__$1 = state_33644;
var statearr_33652_33678 = state_33644__$1;
(statearr_33652_33678[(2)] = null);

(statearr_33652_33678[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33645 === (3))){
var inst_33641 = (state_33644[(2)]);
var inst_33642 = cljs.core.async.close_BANG_(out);
var state_33644__$1 = (function (){var statearr_33653 = state_33644;
(statearr_33653[(9)] = inst_33641);

return statearr_33653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33644__$1,inst_33642);
} else {
if((state_val_33645 === (2))){
var state_33644__$1 = state_33644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33644__$1,(4),ch);
} else {
if((state_val_33645 === (11))){
var inst_33624 = (state_33644[(8)]);
var inst_33633 = (state_33644[(2)]);
var inst_33621 = inst_33624;
var state_33644__$1 = (function (){var statearr_33654 = state_33644;
(statearr_33654[(10)] = inst_33633);

(statearr_33654[(7)] = inst_33621);

return statearr_33654;
})();
var statearr_33655_33679 = state_33644__$1;
(statearr_33655_33679[(2)] = null);

(statearr_33655_33679[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33645 === (9))){
var inst_33624 = (state_33644[(8)]);
var state_33644__$1 = state_33644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33644__$1,(11),out,inst_33624);
} else {
if((state_val_33645 === (5))){
var inst_33624 = (state_33644[(8)]);
var inst_33621 = (state_33644[(7)]);
var inst_33628 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33624,inst_33621);
var state_33644__$1 = state_33644;
if(inst_33628){
var statearr_33657_33680 = state_33644__$1;
(statearr_33657_33680[(1)] = (8));

} else {
var statearr_33658_33681 = state_33644__$1;
(statearr_33658_33681[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33645 === (10))){
var inst_33636 = (state_33644[(2)]);
var state_33644__$1 = state_33644;
var statearr_33659_33682 = state_33644__$1;
(statearr_33659_33682[(2)] = inst_33636);

(statearr_33659_33682[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33645 === (8))){
var inst_33621 = (state_33644[(7)]);
var tmp33656 = inst_33621;
var inst_33621__$1 = tmp33656;
var state_33644__$1 = (function (){var statearr_33660 = state_33644;
(statearr_33660[(7)] = inst_33621__$1);

return statearr_33660;
})();
var statearr_33661_33683 = state_33644__$1;
(statearr_33661_33683[(2)] = null);

(statearr_33661_33683[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto___33673,out))
;
return ((function (switch__20483__auto__,c__20550__auto___33673,out){
return (function() {
var cljs$core$async$state_machine__20484__auto__ = null;
var cljs$core$async$state_machine__20484__auto____0 = (function (){
var statearr_33665 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33665[(0)] = cljs$core$async$state_machine__20484__auto__);

(statearr_33665[(1)] = (1));

return statearr_33665;
});
var cljs$core$async$state_machine__20484__auto____1 = (function (state_33644){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_33644);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e33666){if((e33666 instanceof Object)){
var ex__20487__auto__ = e33666;
var statearr_33667_33684 = state_33644;
(statearr_33667_33684[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33644);

return cljs.core.constant$keyword$recur;
} else {
throw e33666;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__33685 = state_33644;
state_33644 = G__33685;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$state_machine__20484__auto__ = function(state_33644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20484__auto____1.call(this,state_33644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20484__auto____0;
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20484__auto____1;
return cljs$core$async$state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___33673,out))
})();
var state__20552__auto__ = (function (){var statearr_33668 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_33668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___33673);

return statearr_33668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___33673,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args33686 = [];
var len__17521__auto___33756 = arguments.length;
var i__17522__auto___33757 = (0);
while(true){
if((i__17522__auto___33757 < len__17521__auto___33756)){
args33686.push((arguments[i__17522__auto___33757]));

var G__33758 = (i__17522__auto___33757 + (1));
i__17522__auto___33757 = G__33758;
continue;
} else {
}
break;
}

var G__33688 = args33686.length;
switch (G__33688) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33686.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20550__auto___33760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___33760,out){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___33760,out){
return (function (state_33726){
var state_val_33727 = (state_33726[(1)]);
if((state_val_33727 === (7))){
var inst_33722 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33728_33761 = state_33726__$1;
(statearr_33728_33761[(2)] = inst_33722);

(statearr_33728_33761[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33727 === (1))){
var inst_33689 = (new Array(n));
var inst_33690 = inst_33689;
var inst_33691 = (0);
var state_33726__$1 = (function (){var statearr_33729 = state_33726;
(statearr_33729[(7)] = inst_33691);

(statearr_33729[(8)] = inst_33690);

return statearr_33729;
})();
var statearr_33730_33762 = state_33726__$1;
(statearr_33730_33762[(2)] = null);

(statearr_33730_33762[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33727 === (4))){
var inst_33694 = (state_33726[(9)]);
var inst_33694__$1 = (state_33726[(2)]);
var inst_33695 = (inst_33694__$1 == null);
var inst_33696 = cljs.core.not(inst_33695);
var state_33726__$1 = (function (){var statearr_33731 = state_33726;
(statearr_33731[(9)] = inst_33694__$1);

return statearr_33731;
})();
if(inst_33696){
var statearr_33732_33763 = state_33726__$1;
(statearr_33732_33763[(1)] = (5));

} else {
var statearr_33733_33764 = state_33726__$1;
(statearr_33733_33764[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33727 === (15))){
var inst_33716 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33734_33765 = state_33726__$1;
(statearr_33734_33765[(2)] = inst_33716);

(statearr_33734_33765[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33727 === (13))){
var state_33726__$1 = state_33726;
var statearr_33735_33766 = state_33726__$1;
(statearr_33735_33766[(2)] = null);

(statearr_33735_33766[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33727 === (6))){
var inst_33691 = (state_33726[(7)]);
var inst_33712 = (inst_33691 > (0));
var state_33726__$1 = state_33726;
if(cljs.core.truth_(inst_33712)){
var statearr_33736_33767 = state_33726__$1;
(statearr_33736_33767[(1)] = (12));

} else {
var statearr_33737_33768 = state_33726__$1;
(statearr_33737_33768[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33727 === (3))){
var inst_33724 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33726__$1,inst_33724);
} else {
if((state_val_33727 === (12))){
var inst_33690 = (state_33726[(8)]);
var inst_33714 = cljs.core.vec(inst_33690);
var state_33726__$1 = state_33726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33726__$1,(15),out,inst_33714);
} else {
if((state_val_33727 === (2))){
var state_33726__$1 = state_33726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33726__$1,(4),ch);
} else {
if((state_val_33727 === (11))){
var inst_33706 = (state_33726[(2)]);
var inst_33707 = (new Array(n));
var inst_33690 = inst_33707;
var inst_33691 = (0);
var state_33726__$1 = (function (){var statearr_33738 = state_33726;
(statearr_33738[(7)] = inst_33691);

(statearr_33738[(10)] = inst_33706);

(statearr_33738[(8)] = inst_33690);

return statearr_33738;
})();
var statearr_33739_33769 = state_33726__$1;
(statearr_33739_33769[(2)] = null);

(statearr_33739_33769[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33727 === (9))){
var inst_33690 = (state_33726[(8)]);
var inst_33704 = cljs.core.vec(inst_33690);
var state_33726__$1 = state_33726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33726__$1,(11),out,inst_33704);
} else {
if((state_val_33727 === (5))){
var inst_33691 = (state_33726[(7)]);
var inst_33699 = (state_33726[(11)]);
var inst_33690 = (state_33726[(8)]);
var inst_33694 = (state_33726[(9)]);
var inst_33698 = (inst_33690[inst_33691] = inst_33694);
var inst_33699__$1 = (inst_33691 + (1));
var inst_33700 = (inst_33699__$1 < n);
var state_33726__$1 = (function (){var statearr_33740 = state_33726;
(statearr_33740[(11)] = inst_33699__$1);

(statearr_33740[(12)] = inst_33698);

return statearr_33740;
})();
if(cljs.core.truth_(inst_33700)){
var statearr_33741_33770 = state_33726__$1;
(statearr_33741_33770[(1)] = (8));

} else {
var statearr_33742_33771 = state_33726__$1;
(statearr_33742_33771[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33727 === (14))){
var inst_33719 = (state_33726[(2)]);
var inst_33720 = cljs.core.async.close_BANG_(out);
var state_33726__$1 = (function (){var statearr_33744 = state_33726;
(statearr_33744[(13)] = inst_33719);

return statearr_33744;
})();
var statearr_33745_33772 = state_33726__$1;
(statearr_33745_33772[(2)] = inst_33720);

(statearr_33745_33772[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33727 === (10))){
var inst_33710 = (state_33726[(2)]);
var state_33726__$1 = state_33726;
var statearr_33746_33773 = state_33726__$1;
(statearr_33746_33773[(2)] = inst_33710);

(statearr_33746_33773[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33727 === (8))){
var inst_33699 = (state_33726[(11)]);
var inst_33690 = (state_33726[(8)]);
var tmp33743 = inst_33690;
var inst_33690__$1 = tmp33743;
var inst_33691 = inst_33699;
var state_33726__$1 = (function (){var statearr_33747 = state_33726;
(statearr_33747[(7)] = inst_33691);

(statearr_33747[(8)] = inst_33690__$1);

return statearr_33747;
})();
var statearr_33748_33774 = state_33726__$1;
(statearr_33748_33774[(2)] = null);

(statearr_33748_33774[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto___33760,out))
;
return ((function (switch__20483__auto__,c__20550__auto___33760,out){
return (function() {
var cljs$core$async$state_machine__20484__auto__ = null;
var cljs$core$async$state_machine__20484__auto____0 = (function (){
var statearr_33752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33752[(0)] = cljs$core$async$state_machine__20484__auto__);

(statearr_33752[(1)] = (1));

return statearr_33752;
});
var cljs$core$async$state_machine__20484__auto____1 = (function (state_33726){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_33726);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e33753){if((e33753 instanceof Object)){
var ex__20487__auto__ = e33753;
var statearr_33754_33775 = state_33726;
(statearr_33754_33775[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33726);

return cljs.core.constant$keyword$recur;
} else {
throw e33753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__33776 = state_33726;
state_33726 = G__33776;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$state_machine__20484__auto__ = function(state_33726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20484__auto____1.call(this,state_33726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20484__auto____0;
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20484__auto____1;
return cljs$core$async$state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___33760,out))
})();
var state__20552__auto__ = (function (){var statearr_33755 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_33755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___33760);

return statearr_33755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___33760,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args33777 = [];
var len__17521__auto___33851 = arguments.length;
var i__17522__auto___33852 = (0);
while(true){
if((i__17522__auto___33852 < len__17521__auto___33851)){
args33777.push((arguments[i__17522__auto___33852]));

var G__33853 = (i__17522__auto___33852 + (1));
i__17522__auto___33852 = G__33853;
continue;
} else {
}
break;
}

var G__33779 = args33777.length;
switch (G__33779) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33777.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__20550__auto___33855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___33855,out){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___33855,out){
return (function (state_33821){
var state_val_33822 = (state_33821[(1)]);
if((state_val_33822 === (7))){
var inst_33817 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
var statearr_33823_33856 = state_33821__$1;
(statearr_33823_33856[(2)] = inst_33817);

(statearr_33823_33856[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33822 === (1))){
var inst_33780 = [];
var inst_33781 = inst_33780;
var inst_33782 = cljs.core.constant$keyword$cljs$core$async_SLASH_nothing;
var state_33821__$1 = (function (){var statearr_33824 = state_33821;
(statearr_33824[(7)] = inst_33782);

(statearr_33824[(8)] = inst_33781);

return statearr_33824;
})();
var statearr_33825_33857 = state_33821__$1;
(statearr_33825_33857[(2)] = null);

(statearr_33825_33857[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33822 === (4))){
var inst_33785 = (state_33821[(9)]);
var inst_33785__$1 = (state_33821[(2)]);
var inst_33786 = (inst_33785__$1 == null);
var inst_33787 = cljs.core.not(inst_33786);
var state_33821__$1 = (function (){var statearr_33826 = state_33821;
(statearr_33826[(9)] = inst_33785__$1);

return statearr_33826;
})();
if(inst_33787){
var statearr_33827_33858 = state_33821__$1;
(statearr_33827_33858[(1)] = (5));

} else {
var statearr_33828_33859 = state_33821__$1;
(statearr_33828_33859[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33822 === (15))){
var inst_33811 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
var statearr_33829_33860 = state_33821__$1;
(statearr_33829_33860[(2)] = inst_33811);

(statearr_33829_33860[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33822 === (13))){
var state_33821__$1 = state_33821;
var statearr_33830_33861 = state_33821__$1;
(statearr_33830_33861[(2)] = null);

(statearr_33830_33861[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33822 === (6))){
var inst_33781 = (state_33821[(8)]);
var inst_33806 = inst_33781.length;
var inst_33807 = (inst_33806 > (0));
var state_33821__$1 = state_33821;
if(cljs.core.truth_(inst_33807)){
var statearr_33831_33862 = state_33821__$1;
(statearr_33831_33862[(1)] = (12));

} else {
var statearr_33832_33863 = state_33821__$1;
(statearr_33832_33863[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33822 === (3))){
var inst_33819 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33821__$1,inst_33819);
} else {
if((state_val_33822 === (12))){
var inst_33781 = (state_33821[(8)]);
var inst_33809 = cljs.core.vec(inst_33781);
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33821__$1,(15),out,inst_33809);
} else {
if((state_val_33822 === (2))){
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33821__$1,(4),ch);
} else {
if((state_val_33822 === (11))){
var inst_33789 = (state_33821[(10)]);
var inst_33785 = (state_33821[(9)]);
var inst_33799 = (state_33821[(2)]);
var inst_33800 = [];
var inst_33801 = inst_33800.push(inst_33785);
var inst_33781 = inst_33800;
var inst_33782 = inst_33789;
var state_33821__$1 = (function (){var statearr_33833 = state_33821;
(statearr_33833[(11)] = inst_33799);

(statearr_33833[(7)] = inst_33782);

(statearr_33833[(8)] = inst_33781);

(statearr_33833[(12)] = inst_33801);

return statearr_33833;
})();
var statearr_33834_33864 = state_33821__$1;
(statearr_33834_33864[(2)] = null);

(statearr_33834_33864[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33822 === (9))){
var inst_33781 = (state_33821[(8)]);
var inst_33797 = cljs.core.vec(inst_33781);
var state_33821__$1 = state_33821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33821__$1,(11),out,inst_33797);
} else {
if((state_val_33822 === (5))){
var inst_33782 = (state_33821[(7)]);
var inst_33789 = (state_33821[(10)]);
var inst_33785 = (state_33821[(9)]);
var inst_33789__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33785) : f.call(null,inst_33785));
var inst_33790 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33789__$1,inst_33782);
var inst_33791 = cljs.core.keyword_identical_QMARK_(inst_33782,cljs.core.constant$keyword$cljs$core$async_SLASH_nothing);
var inst_33792 = (inst_33790) || (inst_33791);
var state_33821__$1 = (function (){var statearr_33835 = state_33821;
(statearr_33835[(10)] = inst_33789__$1);

return statearr_33835;
})();
if(cljs.core.truth_(inst_33792)){
var statearr_33836_33865 = state_33821__$1;
(statearr_33836_33865[(1)] = (8));

} else {
var statearr_33837_33866 = state_33821__$1;
(statearr_33837_33866[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_33822 === (14))){
var inst_33814 = (state_33821[(2)]);
var inst_33815 = cljs.core.async.close_BANG_(out);
var state_33821__$1 = (function (){var statearr_33839 = state_33821;
(statearr_33839[(13)] = inst_33814);

return statearr_33839;
})();
var statearr_33840_33867 = state_33821__$1;
(statearr_33840_33867[(2)] = inst_33815);

(statearr_33840_33867[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33822 === (10))){
var inst_33804 = (state_33821[(2)]);
var state_33821__$1 = state_33821;
var statearr_33841_33868 = state_33821__$1;
(statearr_33841_33868[(2)] = inst_33804);

(statearr_33841_33868[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_33822 === (8))){
var inst_33781 = (state_33821[(8)]);
var inst_33789 = (state_33821[(10)]);
var inst_33785 = (state_33821[(9)]);
var inst_33794 = inst_33781.push(inst_33785);
var tmp33838 = inst_33781;
var inst_33781__$1 = tmp33838;
var inst_33782 = inst_33789;
var state_33821__$1 = (function (){var statearr_33842 = state_33821;
(statearr_33842[(7)] = inst_33782);

(statearr_33842[(8)] = inst_33781__$1);

(statearr_33842[(14)] = inst_33794);

return statearr_33842;
})();
var statearr_33843_33869 = state_33821__$1;
(statearr_33843_33869[(2)] = null);

(statearr_33843_33869[(1)] = (2));


return cljs.core.constant$keyword$recur;
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
});})(c__20550__auto___33855,out))
;
return ((function (switch__20483__auto__,c__20550__auto___33855,out){
return (function() {
var cljs$core$async$state_machine__20484__auto__ = null;
var cljs$core$async$state_machine__20484__auto____0 = (function (){
var statearr_33847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33847[(0)] = cljs$core$async$state_machine__20484__auto__);

(statearr_33847[(1)] = (1));

return statearr_33847;
});
var cljs$core$async$state_machine__20484__auto____1 = (function (state_33821){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_33821);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e33848){if((e33848 instanceof Object)){
var ex__20487__auto__ = e33848;
var statearr_33849_33870 = state_33821;
(statearr_33849_33870[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33821);

return cljs.core.constant$keyword$recur;
} else {
throw e33848;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__33871 = state_33821;
state_33821 = G__33871;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
cljs$core$async$state_machine__20484__auto__ = function(state_33821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20484__auto____1.call(this,state_33821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20484__auto____0;
cljs$core$async$state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20484__auto____1;
return cljs$core$async$state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___33855,out))
})();
var state__20552__auto__ = (function (){var statearr_33850 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_33850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___33855);

return statearr_33850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___33855,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440458061250