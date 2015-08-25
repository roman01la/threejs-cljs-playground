// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t33926 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t33926 = (function (fn_handler,f,meta33927){
this.fn_handler = fn_handler;
this.f = f;
this.meta33927 = meta33927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.ioc_helpers.t33926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33928,meta33927__$1){
var self__ = this;
var _33928__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t33926(self__.fn_handler,self__.f,meta33927__$1));
});

cljs.core.async.impl.ioc_helpers.t33926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33928){
var self__ = this;
var _33928__$1 = this;
return self__.meta33927;
});

cljs.core.async.impl.ioc_helpers.t33926.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t33926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t33926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t33926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$private,true,cljs.core.constant$keyword$arglists,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta33927","meta33927",-354453741,null)], null);
});

cljs.core.async.impl.ioc_helpers.t33926.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t33926.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t33926";

cljs.core.async.impl.ioc_helpers.t33926.cljs$lang$ctorPrWriter = (function (this__17061__auto__,writer__17062__auto__,opt__17063__auto__){
return cljs.core._write(writer__17062__auto__,"cljs.core.async.impl.ioc-helpers/t33926");
});

cljs.core.async.impl.ioc_helpers.__GT_t33926 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t33926(fn_handler__$1,f__$1,meta33927){
return (new cljs.core.async.impl.ioc_helpers.t33926(fn_handler__$1,f__$1,meta33927));
});

}

return (new cljs.core.async.impl.ioc_helpers.t33926(cljs$core$async$impl$ioc_helpers$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e33930){if((e33930 instanceof Object)){
var ex = e33930;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e33930;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4423__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_33933_33935 = state;
(statearr_33933_33935[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_33933_33935[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_33934_33936 = state;
(statearr_33934_33936[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));

(statearr_33934_33936[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4423__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_33939_33941 = state;
(statearr_33939_33941[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_33939_33941[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_33940_33942 = state;
(statearr_33940_33942[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));

(statearr_33940_33942[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17077__auto__,k__17078__auto__){
var self__ = this;
var this__17077__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__17077__auto____$1,k__17078__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17079__auto__,k33944,else__17080__auto__){
var self__ = this;
var this__17079__auto____$1 = this;
var G__33946 = (((k33944 instanceof cljs.core.Keyword))?k33944.fqn:null);
switch (G__33946) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33944,else__17080__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17091__auto__,writer__17092__auto__,opts__17093__auto__){
var self__ = this;
var this__17091__auto____$1 = this;
var pr_pair__17094__auto__ = ((function (this__17091__auto____$1){
return (function (keyval__17095__auto__){
return cljs.core.pr_sequential_writer(writer__17092__auto__,cljs.core.pr_writer,""," ","",opts__17093__auto__,keyval__17095__auto__);
});})(this__17091__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__17092__auto__,pr_pair__17094__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__17093__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$ = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33943){
var self__ = this;
var G__33943__$1 = this;
return (new cljs.core.RecordIter((0),G__33943__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$catch_DASH_block,cljs.core.constant$keyword$catch_DASH_exception,cljs.core.constant$keyword$finally_DASH_block,cljs.core.constant$keyword$continue_DASH_block,cljs.core.constant$keyword$prev], null),cljs.core._iterator(self__.__extmap)));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17075__auto__){
var self__ = this;
var this__17075__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17071__auto__){
var self__ = this;
var this__17071__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17081__auto__){
var self__ = this;
var this__17081__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17072__auto__){
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

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17073__auto__,other__17074__auto__){
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

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17086__auto__,k__17087__auto__){
var self__ = this;
var this__17086__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$finally_DASH_block,null,cljs.core.constant$keyword$catch_DASH_block,null,cljs.core.constant$keyword$catch_DASH_exception,null,cljs.core.constant$keyword$prev,null,cljs.core.constant$keyword$continue_DASH_block,null], null), null),k__17087__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__17086__auto____$1),self__.__meta),k__17087__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__17087__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17084__auto__,k__17085__auto__,G__33943){
var self__ = this;
var this__17084__auto____$1 = this;
var pred__33947 = cljs.core.keyword_identical_QMARK_;
var expr__33948 = k__17085__auto__;
if(cljs.core.truth_((pred__33947.cljs$core$IFn$_invoke$arity$2 ? pred__33947.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$catch_DASH_block,expr__33948) : pred__33947.call(null,cljs.core.constant$keyword$catch_DASH_block,expr__33948)))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__33943,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33947.cljs$core$IFn$_invoke$arity$2 ? pred__33947.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$catch_DASH_exception,expr__33948) : pred__33947.call(null,cljs.core.constant$keyword$catch_DASH_exception,expr__33948)))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__33943,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33947.cljs$core$IFn$_invoke$arity$2 ? pred__33947.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$finally_DASH_block,expr__33948) : pred__33947.call(null,cljs.core.constant$keyword$finally_DASH_block,expr__33948)))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__33943,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33947.cljs$core$IFn$_invoke$arity$2 ? pred__33947.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$continue_DASH_block,expr__33948) : pred__33947.call(null,cljs.core.constant$keyword$continue_DASH_block,expr__33948)))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__33943,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33947.cljs$core$IFn$_invoke$arity$2 ? pred__33947.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$prev,expr__33948) : pred__33947.call(null,cljs.core.constant$keyword$prev,expr__33948)))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__33943,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__17085__auto__,G__33943),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17089__auto__){
var self__ = this;
var this__17089__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17076__auto__,G__33943){
var self__ = this;
var this__17076__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__33943,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17082__auto__,entry__17083__auto__){
var self__ = this;
var this__17082__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__17083__auto__)){
return cljs.core._assoc(this__17082__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__17083__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__17082__auto____$1,entry__17083__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",-1479223021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"catch-exception","catch-exception",-356775268,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$tag,new cljs.core.Symbol(null,"Class","Class",2064526977,null)], null)),new cljs.core.Symbol(null,"finally-block","finally-block",-1821453297,null),new cljs.core.Symbol(null,"continue-block","continue-block",-211516323,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__17111__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__17111__auto__,writer__17112__auto__){
return cljs.core._write(writer__17112__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__33945){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(G__33945),cljs.core.constant$keyword$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(G__33945),cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(G__33945),cljs.core.constant$keyword$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(G__33945),cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(G__33945),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33945,cljs.core.constant$keyword$catch_DASH_block,cljs.core.array_seq([cljs.core.constant$keyword$catch_DASH_exception,cljs.core.constant$keyword$finally_DASH_block,cljs.core.constant$keyword$continue_DASH_block,cljs.core.constant$keyword$prev], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_33952 = state;
(statearr_33952[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_33952;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__16470__auto__ = exception;
if(cljs.core.truth_(and__16470__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__16470__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__16470__auto__ = exception;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = catch_block;
if(cljs.core.truth_(and__16470__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
var statearr_33958 = state;
(statearr_33958[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_33958[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_33958[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_33958[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$catch_DASH_block,null,cljs.core.array_seq([cljs.core.constant$keyword$catch_DASH_exception,null], 0)));

return statearr_33958;
} else {
if(cljs.core.truth_((function (){var and__16470__auto__ = exception;
if(cljs.core.truth_(and__16470__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__16470__auto__;
}
})())){
var statearr_33959_33963 = state;
(statearr_33959_33963[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__33964 = state;
state = G__33964;
continue;
} else {
if(cljs.core.truth_((function (){var and__16470__auto__ = exception;
if(cljs.core.truth_(and__16470__auto__)){
var and__16470__auto____$1 = cljs.core.not(catch_block);
if(and__16470__auto____$1){
return cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__16470__auto____$1;
}
} else {
return and__16470__auto__;
}
})())){
var statearr_33960 = state;
(statearr_33960[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_33960[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$finally_DASH_block,null));

return statearr_33960;
} else {
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.not(exception);
if(and__16470__auto__){
return cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__16470__auto__;
}
})())){
var statearr_33961 = state;
(statearr_33961[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_33961[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$finally_DASH_block,null));

return statearr_33961;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_33962 = state;
(statearr_33962[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_33962[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_33962;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=ioc_helpers.js.map?rel=1440458061423