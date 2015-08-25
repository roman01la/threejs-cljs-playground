// Compiled by ClojureScript 1.7.28 {:static-fns true, :optimize-constants true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$figwheel_DASH_event,"callback",cljs.core.constant$keyword$callback_DASH_name,"figwheel-repl-print",cljs.core.constant$keyword$content,args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29367__delegate = function (args){
return figwheel.client.figwheel_repl_print(figwheel.client.console_print(args));
};
var G__29367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29368__i = 0, G__29368__a = new Array(arguments.length -  0);
while (G__29368__i < G__29368__a.length) {G__29368__a[G__29368__i] = arguments[G__29368__i + 0]; ++G__29368__i;}
  args = new cljs.core.IndexedSeq(G__29368__a,0);
} 
return G__29367__delegate.call(this,args);};
G__29367.cljs$lang$maxFixedArity = 0;
G__29367.cljs$lang$applyTo = (function (arglist__29369){
var args = cljs.core.seq(arglist__29369);
return G__29367__delegate(args);
});
G__29367.cljs$core$IFn$_invoke$arity$variadic = G__29367__delegate;
return G__29367;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$message,cljs.core.constant$keyword$class], null)),figwheel$client$get_essential_messages(cljs.core.constant$keyword$cause.cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29371){
var map__29374 = p__29371;
var map__29374__$1 = ((((!((map__29374 == null)))?((((map__29374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29374):map__29374);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29374__$1,cljs.core.constant$keyword$message);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29374__$1,cljs.core.constant$keyword$class);
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons(cljs.core.first(msg_hist),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(name_set,cljs.core.constant$keyword$msg_DASH_name),cljs.core.rest(msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16482__auto__ = cljs.core.constant$keyword$load_DASH_warninged_DASH_code.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16482__auto__)){
return or__16482__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.constant$keyword$compile_DASH_warning);
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16470__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(msg_names),cljs.core.constant$keyword$files_DASH_changed);
if(and__16470__auto__){
return figwheel.client.reload_file_QMARK__STAR_(cljs.core.second(msg_names),opts);
} else {
return and__16470__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(msg_names),cljs.core.constant$keyword$files_DASH_changed)) && (cljs.core.not(figwheel.client.reload_file_QMARK__STAR_(cljs.core.second(msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$compile_DASH_warning,cljs.core.constant$keyword$compile_DASH_warning], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$compile_DASH_warning,cljs.core.first(msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$compile_DASH_warning,cljs.core.constant$keyword$files_DASH_changed,cljs.core.constant$keyword$compile_DASH_warning], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$compile_DASH_failed,cljs.core.first(msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$compile_DASH_failed,cljs.core.constant$keyword$compile_DASH_failed], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$css_DASH_files_DASH_changed,cljs.core.first(msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__20550__auto___29504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___29504,ch){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___29504,ch){
return (function (state_29478){
var state_val_29479 = (state_29478[(1)]);
if((state_val_29479 === (7))){
var inst_29474 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29480_29505 = state_29478__$1;
(statearr_29480_29505[(2)] = inst_29474);

(statearr_29480_29505[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29479 === (1))){
var state_29478__$1 = state_29478;
var statearr_29481_29506 = state_29478__$1;
(statearr_29481_29506[(2)] = null);

(statearr_29481_29506[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29479 === (4))){
var inst_29442 = (state_29478[(7)]);
var inst_29442__$1 = (state_29478[(2)]);
var state_29478__$1 = (function (){var statearr_29482 = state_29478;
(statearr_29482[(7)] = inst_29442__$1);

return statearr_29482;
})();
if(cljs.core.truth_(inst_29442__$1)){
var statearr_29483_29507 = state_29478__$1;
(statearr_29483_29507[(1)] = (5));

} else {
var statearr_29484_29508 = state_29478__$1;
(statearr_29484_29508[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29479 === (13))){
var state_29478__$1 = state_29478;
var statearr_29485_29509 = state_29478__$1;
(statearr_29485_29509[(2)] = null);

(statearr_29485_29509[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29479 === (6))){
var state_29478__$1 = state_29478;
var statearr_29486_29510 = state_29478__$1;
(statearr_29486_29510[(2)] = null);

(statearr_29486_29510[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29479 === (3))){
var inst_29476 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29478__$1,inst_29476);
} else {
if((state_val_29479 === (12))){
var inst_29449 = (state_29478[(8)]);
var inst_29462 = cljs.core.constant$keyword$files.cljs$core$IFn$_invoke$arity$1(inst_29449);
var inst_29463 = cljs.core.first(inst_29462);
var inst_29464 = cljs.core.constant$keyword$file.cljs$core$IFn$_invoke$arity$1(inst_29463);
var inst_29465 = console.warn("Figwheel: Not loading code with warnings - ",inst_29464);
var state_29478__$1 = state_29478;
var statearr_29487_29511 = state_29478__$1;
(statearr_29487_29511[(2)] = inst_29465);

(statearr_29487_29511[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29479 === (2))){
var state_29478__$1 = state_29478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29478__$1,(4),ch);
} else {
if((state_val_29479 === (11))){
var inst_29458 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29488_29512 = state_29478__$1;
(statearr_29488_29512[(2)] = inst_29458);

(statearr_29488_29512[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29479 === (9))){
var inst_29448 = (state_29478[(9)]);
var inst_29460 = figwheel.client.block_reload_file_state_QMARK_(inst_29448,opts);
var state_29478__$1 = state_29478;
if(cljs.core.truth_(inst_29460)){
var statearr_29489_29513 = state_29478__$1;
(statearr_29489_29513[(1)] = (12));

} else {
var statearr_29490_29514 = state_29478__$1;
(statearr_29490_29514[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29479 === (5))){
var inst_29442 = (state_29478[(7)]);
var inst_29448 = (state_29478[(9)]);
var inst_29444 = [cljs.core.constant$keyword$compile_DASH_warning,null,cljs.core.constant$keyword$files_DASH_changed,null];
var inst_29445 = (new cljs.core.PersistentArrayMap(null,2,inst_29444,null));
var inst_29446 = (new cljs.core.PersistentHashSet(null,inst_29445,null));
var inst_29447 = figwheel.client.focus_msgs(inst_29446,inst_29442);
var inst_29448__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$msg_DASH_name,inst_29447);
var inst_29449 = cljs.core.first(inst_29447);
var inst_29450 = figwheel.client.reload_file_state_QMARK_(inst_29448__$1,opts);
var state_29478__$1 = (function (){var statearr_29491 = state_29478;
(statearr_29491[(8)] = inst_29449);

(statearr_29491[(9)] = inst_29448__$1);

return statearr_29491;
})();
if(cljs.core.truth_(inst_29450)){
var statearr_29492_29515 = state_29478__$1;
(statearr_29492_29515[(1)] = (8));

} else {
var statearr_29493_29516 = state_29478__$1;
(statearr_29493_29516[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29479 === (14))){
var inst_29468 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29494_29517 = state_29478__$1;
(statearr_29494_29517[(2)] = inst_29468);

(statearr_29494_29517[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29479 === (10))){
var inst_29470 = (state_29478[(2)]);
var state_29478__$1 = (function (){var statearr_29495 = state_29478;
(statearr_29495[(10)] = inst_29470);

return statearr_29495;
})();
var statearr_29496_29518 = state_29478__$1;
(statearr_29496_29518[(2)] = null);

(statearr_29496_29518[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29479 === (8))){
var inst_29449 = (state_29478[(8)]);
var inst_29452 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29453 = figwheel.client.file_reloading.reload_js_files(opts,inst_29449);
var inst_29454 = cljs.core.async.timeout((1000));
var inst_29455 = [inst_29453,inst_29454];
var inst_29456 = (new cljs.core.PersistentVector(null,2,(5),inst_29452,inst_29455,null));
var state_29478__$1 = state_29478;
return cljs.core.async.ioc_alts_BANG_(state_29478__$1,(11),inst_29456);
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
});})(c__20550__auto___29504,ch))
;
return ((function (switch__20483__auto__,c__20550__auto___29504,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20484__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20484__auto____0 = (function (){
var statearr_29500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29500[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20484__auto__);

(statearr_29500[(1)] = (1));

return statearr_29500;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20484__auto____1 = (function (state_29478){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_29478);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e29501){if((e29501 instanceof Object)){
var ex__20487__auto__ = e29501;
var statearr_29502_29519 = state_29478;
(statearr_29502_29519[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29478);

return cljs.core.constant$keyword$recur;
} else {
throw e29501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__29520 = state_29478;
state_29478 = G__29520;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20484__auto__ = function(state_29478){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20484__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20484__auto____1.call(this,state_29478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20484__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20484__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___29504,ch))
})();
var state__20552__auto__ = (function (){var statearr_29503 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_29503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___29504);

return statearr_29503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___29504,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__29521_SHARP_){
return cljs.core.not(cljs.core.re_matches(/.*eval_javascript_STAR__STAR_.*/,p1__29521_SHARP_));
}),clojure.string.split_lines(stack_str));
});
var base_path_29534 = figwheel.client.utils.base_url_path();
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29534){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29531 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29532 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29531,_STAR_print_newline_STAR_29532,base_path_29534){
return (function() { 
var G__29535__delegate = function (args){
return figwheel.client.figwheel_repl_print(figwheel.client.console_print(args));
};
var G__29535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29536__i = 0, G__29536__a = new Array(arguments.length -  0);
while (G__29536__i < G__29536__a.length) {G__29536__a[G__29536__i] = arguments[G__29536__i + 0]; ++G__29536__i;}
  args = new cljs.core.IndexedSeq(G__29536__a,0);
} 
return G__29535__delegate.call(this,args);};
G__29535.cljs$lang$maxFixedArity = 0;
G__29535.cljs$lang$applyTo = (function (arglist__29537){
var args = cljs.core.seq(arglist__29537);
return G__29535__delegate(args);
});
G__29535.cljs$core$IFn$_invoke$arity$variadic = G__29535__delegate;
return G__29535;
})()
;})(_STAR_print_fn_STAR_29531,_STAR_print_newline_STAR_29532,base_path_29534))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{var G__29533 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$status,cljs.core.constant$keyword$success,cljs.core.constant$keyword$value,[cljs.core.str(figwheel.client.utils.eval_helper(code,opts))].join('')], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__29533) : result_handler.call(null,G__29533));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29532;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29531;
}}catch (e29528){if((e29528 instanceof Error)){
var e = e29528;
var G__29529 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$status,cljs.core.constant$keyword$exception,cljs.core.constant$keyword$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$stacktrace,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",figwheel.client.truncate_stack_trace(e.stack)),cljs.core.constant$keyword$base_DASH_path,base_path_29534], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__29529) : result_handler.call(null,G__29529));
} else {
var e = e29528;
var G__29530 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$status,cljs.core.constant$keyword$exception,cljs.core.constant$keyword$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$stacktrace,"No stacktrace available."], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__29530) : result_handler.call(null,G__29530));

}
}});})(base_path_29534))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29538){
var map__29545 = p__29538;
var map__29545__$1 = ((((!((map__29545 == null)))?((((map__29545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29545):map__29545);
var opts = map__29545__$1;
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29545__$1,cljs.core.constant$keyword$build_DASH_id);
return ((function (map__29545,map__29545__$1,opts,build_id){
return (function (p__29547){
var vec__29548 = p__29547;
var map__29549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29548,(0),null);
var map__29549__$1 = ((((!((map__29549 == null)))?((((map__29549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29549):map__29549);
var msg = map__29549__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29549__$1,cljs.core.constant$keyword$msg_DASH_name);
var _ = cljs.core.nthnext(vec__29548,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$repl_DASH_eval,msg_name)){
figwheel.client.ensure_cljs_user();

return figwheel.client.eval_javascript_STAR__STAR_(cljs.core.constant$keyword$code.cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29548,map__29549,map__29549__$1,msg,msg_name,_,map__29545,map__29545__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$figwheel_DASH_event,"callback",cljs.core.constant$keyword$callback_DASH_name,cljs.core.constant$keyword$callback_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.constant$keyword$content,res], null));
});})(vec__29548,map__29549,map__29549__$1,msg,msg_name,_,map__29545,map__29545__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29545,map__29545__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29555){
var vec__29556 = p__29555;
var map__29557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29556,(0),null);
var map__29557__$1 = ((((!((map__29557 == null)))?((((map__29557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29557):map__29557);
var msg = map__29557__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29557__$1,cljs.core.constant$keyword$msg_DASH_name);
var _ = cljs.core.nthnext(vec__29556,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.constant$keyword$css_DASH_files_DASH_changed)){
return figwheel.client.file_reloading.reload_css_files(opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29559){
var map__29569 = p__29559;
var map__29569__$1 = ((((!((map__29569 == null)))?((((map__29569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29569):map__29569);
var on_compile_warning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29569__$1,cljs.core.constant$keyword$on_DASH_compile_DASH_warning);
var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29569__$1,cljs.core.constant$keyword$on_DASH_compile_DASH_fail);
return ((function (map__29569,map__29569__$1,on_compile_warning,on_compile_fail){
return (function (p__29571){
var vec__29572 = p__29571;
var map__29573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29572,(0),null);
var map__29573__$1 = ((((!((map__29573 == null)))?((((map__29573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29573):map__29573);
var msg = map__29573__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29573__$1,cljs.core.constant$keyword$msg_DASH_name);
var _ = cljs.core.nthnext(vec__29572,(1));
var pred__29575 = cljs.core._EQ_;
var expr__29576 = msg_name;
if(cljs.core.truth_((pred__29575.cljs$core$IFn$_invoke$arity$2 ? pred__29575.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$compile_DASH_warning,expr__29576) : pred__29575.call(null,cljs.core.constant$keyword$compile_DASH_warning,expr__29576)))){
return (on_compile_warning.cljs$core$IFn$_invoke$arity$1 ? on_compile_warning.cljs$core$IFn$_invoke$arity$1(msg) : on_compile_warning.call(null,msg));
} else {
if(cljs.core.truth_((pred__29575.cljs$core$IFn$_invoke$arity$2 ? pred__29575.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$compile_DASH_failed,expr__29576) : pred__29575.call(null,cljs.core.constant$keyword$compile_DASH_failed,expr__29576)))){
return (on_compile_fail.cljs$core$IFn$_invoke$arity$1 ? on_compile_fail.cljs$core$IFn$_invoke$arity$1(msg) : on_compile_fail.call(null,msg));
} else {
return null;
}
}
});
;})(map__29569,map__29569__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$compile_DASH_failed,null,cljs.core.constant$keyword$compile_DASH_warning,null,cljs.core.constant$keyword$files_DASH_changed,null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$msg_DASH_name,msg_hist);
var msg = cljs.core.first(msg_hist);
var c__20550__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto__,msg_hist,msg_names,msg){
return (function (state_29777){
var state_val_29778 = (state_29777[(1)]);
if((state_val_29778 === (7))){
var inst_29711 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29779_29820 = state_29777__$1;
(statearr_29779_29820[(2)] = inst_29711);

(statearr_29779_29820[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (20))){
var inst_29739 = figwheel.client.rewarning_state_QMARK_(msg_names);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29739)){
var statearr_29780_29821 = state_29777__$1;
(statearr_29780_29821[(1)] = (22));

} else {
var statearr_29781_29822 = state_29777__$1;
(statearr_29781_29822[(1)] = (23));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (27))){
var inst_29751 = cljs.core.constant$keyword$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_29752 = figwheel.client.heads_up.display_warning(inst_29751);
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29777__$1,(30),inst_29752);
} else {
if((state_val_29778 === (1))){
var inst_29699 = figwheel.client.reload_file_state_QMARK_(msg_names,opts);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29699)){
var statearr_29782_29823 = state_29777__$1;
(statearr_29782_29823[(1)] = (2));

} else {
var statearr_29783_29824 = state_29777__$1;
(statearr_29783_29824[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (24))){
var inst_29767 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29784_29825 = state_29777__$1;
(statearr_29784_29825[(2)] = inst_29767);

(statearr_29784_29825[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (4))){
var inst_29775 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29777__$1,inst_29775);
} else {
if((state_val_29778 === (15))){
var inst_29727 = cljs.core.constant$keyword$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_29728 = (figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(inst_29727) : figwheel.client.format_messages.call(null,inst_29727));
var inst_29729 = cljs.core.constant$keyword$cause.cljs$core$IFn$_invoke$arity$1(msg);
var inst_29730 = figwheel.client.heads_up.display_error(inst_29728,inst_29729);
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29777__$1,(18),inst_29730);
} else {
if((state_val_29778 === (21))){
var inst_29769 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29785_29826 = state_29777__$1;
(statearr_29785_29826[(2)] = inst_29769);

(statearr_29785_29826[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (31))){
var inst_29758 = figwheel.client.heads_up.flash_loaded();
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29777__$1,(34),inst_29758);
} else {
if((state_val_29778 === (32))){
var state_29777__$1 = state_29777;
var statearr_29786_29827 = state_29777__$1;
(statearr_29786_29827[(2)] = null);

(statearr_29786_29827[(1)] = (33));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (33))){
var inst_29763 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29787_29828 = state_29777__$1;
(statearr_29787_29828[(2)] = inst_29763);

(statearr_29787_29828[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (13))){
var inst_29717 = (state_29777[(2)]);
var inst_29718 = cljs.core.constant$keyword$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_29719 = (figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(inst_29718) : figwheel.client.format_messages.call(null,inst_29718));
var inst_29720 = cljs.core.constant$keyword$cause.cljs$core$IFn$_invoke$arity$1(msg);
var inst_29721 = figwheel.client.heads_up.display_error(inst_29719,inst_29720);
var state_29777__$1 = (function (){var statearr_29788 = state_29777;
(statearr_29788[(7)] = inst_29717);

return statearr_29788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29777__$1,(14),inst_29721);
} else {
if((state_val_29778 === (22))){
var inst_29741 = figwheel.client.heads_up.clear();
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29777__$1,(25),inst_29741);
} else {
if((state_val_29778 === (29))){
var inst_29765 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29789_29829 = state_29777__$1;
(statearr_29789_29829[(2)] = inst_29765);

(statearr_29789_29829[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (6))){
var inst_29707 = figwheel.client.heads_up.clear();
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29777__$1,(9),inst_29707);
} else {
if((state_val_29778 === (28))){
var inst_29756 = figwheel.client.css_loaded_state_QMARK_(msg_names);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29756)){
var statearr_29790_29830 = state_29777__$1;
(statearr_29790_29830[(1)] = (31));

} else {
var statearr_29791_29831 = state_29777__$1;
(statearr_29791_29831[(1)] = (32));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (25))){
var inst_29743 = (state_29777[(2)]);
var inst_29744 = cljs.core.constant$keyword$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_29745 = figwheel.client.heads_up.display_warning(inst_29744);
var state_29777__$1 = (function (){var statearr_29792 = state_29777;
(statearr_29792[(8)] = inst_29743);

return statearr_29792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29777__$1,(26),inst_29745);
} else {
if((state_val_29778 === (34))){
var inst_29760 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29793_29832 = state_29777__$1;
(statearr_29793_29832[(2)] = inst_29760);

(statearr_29793_29832[(1)] = (33));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (17))){
var inst_29771 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29794_29833 = state_29777__$1;
(statearr_29794_29833[(2)] = inst_29771);

(statearr_29794_29833[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (3))){
var inst_29713 = figwheel.client.compile_refail_state_QMARK_(msg_names);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29713)){
var statearr_29795_29834 = state_29777__$1;
(statearr_29795_29834[(1)] = (10));

} else {
var statearr_29796_29835 = state_29777__$1;
(statearr_29796_29835[(1)] = (11));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (12))){
var inst_29773 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29797_29836 = state_29777__$1;
(statearr_29797_29836[(2)] = inst_29773);

(statearr_29797_29836[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (2))){
var inst_29701 = cljs.core.constant$keyword$autoload.cljs$core$IFn$_invoke$arity$1(opts);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29701)){
var statearr_29798_29837 = state_29777__$1;
(statearr_29798_29837[(1)] = (5));

} else {
var statearr_29799_29838 = state_29777__$1;
(statearr_29799_29838[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (23))){
var inst_29749 = figwheel.client.warning_state_QMARK_(msg_names);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29749)){
var statearr_29800_29839 = state_29777__$1;
(statearr_29800_29839[(1)] = (27));

} else {
var statearr_29801_29840 = state_29777__$1;
(statearr_29801_29840[(1)] = (28));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (19))){
var inst_29736 = cljs.core.constant$keyword$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_29737 = figwheel.client.heads_up.append_message(inst_29736);
var state_29777__$1 = state_29777;
var statearr_29802_29841 = state_29777__$1;
(statearr_29802_29841[(2)] = inst_29737);

(statearr_29802_29841[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (11))){
var inst_29725 = figwheel.client.compile_fail_state_QMARK_(msg_names);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29725)){
var statearr_29803_29842 = state_29777__$1;
(statearr_29803_29842[(1)] = (15));

} else {
var statearr_29804_29843 = state_29777__$1;
(statearr_29804_29843[(1)] = (16));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (9))){
var inst_29709 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29805_29844 = state_29777__$1;
(statearr_29805_29844[(2)] = inst_29709);

(statearr_29805_29844[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (5))){
var inst_29703 = figwheel.client.heads_up.flash_loaded();
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29777__$1,(8),inst_29703);
} else {
if((state_val_29778 === (14))){
var inst_29723 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29806_29845 = state_29777__$1;
(statearr_29806_29845[(2)] = inst_29723);

(statearr_29806_29845[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (26))){
var inst_29747 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29807_29846 = state_29777__$1;
(statearr_29807_29846[(2)] = inst_29747);

(statearr_29807_29846[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (16))){
var inst_29734 = figwheel.client.warning_append_state_QMARK_(msg_names);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29734)){
var statearr_29808_29847 = state_29777__$1;
(statearr_29808_29847[(1)] = (19));

} else {
var statearr_29809_29848 = state_29777__$1;
(statearr_29809_29848[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (30))){
var inst_29754 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29810_29849 = state_29777__$1;
(statearr_29810_29849[(2)] = inst_29754);

(statearr_29810_29849[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (10))){
var inst_29715 = figwheel.client.heads_up.clear();
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29777__$1,(13),inst_29715);
} else {
if((state_val_29778 === (18))){
var inst_29732 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29811_29850 = state_29777__$1;
(statearr_29811_29850[(2)] = inst_29732);

(statearr_29811_29850[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29778 === (8))){
var inst_29705 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29812_29851 = state_29777__$1;
(statearr_29812_29851[(2)] = inst_29705);

(statearr_29812_29851[(1)] = (7));


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
});})(c__20550__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20483__auto__,c__20550__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto____0 = (function (){
var statearr_29816 = [null,null,null,null,null,null,null,null,null];
(statearr_29816[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto__);

(statearr_29816[(1)] = (1));

return statearr_29816;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto____1 = (function (state_29777){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_29777);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e29817){if((e29817 instanceof Object)){
var ex__20487__auto__ = e29817;
var statearr_29818_29852 = state_29777;
(statearr_29818_29852[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29777);

return cljs.core.constant$keyword$recur;
} else {
throw e29817;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__29853 = state_29777;
state_29777 = G__29853;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto__ = function(state_29777){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto____1.call(this,state_29777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto__,msg_hist,msg_names,msg))
})();
var state__20552__auto__ = (function (){var statearr_29819 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_29819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto__);

return statearr_29819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto__,msg_hist,msg_names,msg))
);

return c__20550__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20550__auto___29916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto___29916,ch){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto___29916,ch){
return (function (state_29899){
var state_val_29900 = (state_29899[(1)]);
if((state_val_29900 === (1))){
var state_29899__$1 = state_29899;
var statearr_29901_29917 = state_29899__$1;
(statearr_29901_29917[(2)] = null);

(statearr_29901_29917[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29900 === (2))){
var state_29899__$1 = state_29899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29899__$1,(4),ch);
} else {
if((state_val_29900 === (3))){
var inst_29897 = (state_29899[(2)]);
var state_29899__$1 = state_29899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29899__$1,inst_29897);
} else {
if((state_val_29900 === (4))){
var inst_29887 = (state_29899[(7)]);
var inst_29887__$1 = (state_29899[(2)]);
var state_29899__$1 = (function (){var statearr_29902 = state_29899;
(statearr_29902[(7)] = inst_29887__$1);

return statearr_29902;
})();
if(cljs.core.truth_(inst_29887__$1)){
var statearr_29903_29918 = state_29899__$1;
(statearr_29903_29918[(1)] = (5));

} else {
var statearr_29904_29919 = state_29899__$1;
(statearr_29904_29919[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_29900 === (5))){
var inst_29887 = (state_29899[(7)]);
var inst_29889 = figwheel.client.heads_up_plugin_msg_handler(opts,inst_29887);
var state_29899__$1 = state_29899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29899__$1,(8),inst_29889);
} else {
if((state_val_29900 === (6))){
var state_29899__$1 = state_29899;
var statearr_29905_29920 = state_29899__$1;
(statearr_29905_29920[(2)] = null);

(statearr_29905_29920[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29900 === (7))){
var inst_29895 = (state_29899[(2)]);
var state_29899__$1 = state_29899;
var statearr_29906_29921 = state_29899__$1;
(statearr_29906_29921[(2)] = inst_29895);

(statearr_29906_29921[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_29900 === (8))){
var inst_29891 = (state_29899[(2)]);
var state_29899__$1 = (function (){var statearr_29907 = state_29899;
(statearr_29907[(8)] = inst_29891);

return statearr_29907;
})();
var statearr_29908_29922 = state_29899__$1;
(statearr_29908_29922[(2)] = null);

(statearr_29908_29922[(1)] = (2));


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
});})(c__20550__auto___29916,ch))
;
return ((function (switch__20483__auto__,c__20550__auto___29916,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20484__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20484__auto____0 = (function (){
var statearr_29912 = [null,null,null,null,null,null,null,null,null];
(statearr_29912[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20484__auto__);

(statearr_29912[(1)] = (1));

return statearr_29912;
});
var figwheel$client$heads_up_plugin_$_state_machine__20484__auto____1 = (function (state_29899){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_29899);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e29913){if((e29913 instanceof Object)){
var ex__20487__auto__ = e29913;
var statearr_29914_29923 = state_29899;
(statearr_29914_29923[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29899);

return cljs.core.constant$keyword$recur;
} else {
throw e29913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__29924 = state_29899;
state_29899 = G__29924;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20484__auto__ = function(state_29899){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20484__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20484__auto____1.call(this,state_29899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20484__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20484__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto___29916,ch))
})();
var state__20552__auto__ = (function (){var statearr_29915 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_29915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto___29916);

return statearr_29915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto___29916,ch))
);


figwheel.client.heads_up.ensure_container();

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count(cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$project_DASH_id,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),msg_hist)))))){
figwheel.client.socket.close_BANG_();

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(cljs.core.constant$keyword$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(opts))){
var c__20550__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__20550__auto__){
return (function (){
var f__20551__auto__ = (function (){var switch__20483__auto__ = ((function (c__20550__auto__){
return (function (state_29945){
var state_val_29946 = (state_29945[(1)]);
if((state_val_29946 === (1))){
var inst_29940 = cljs.core.async.timeout((3000));
var state_29945__$1 = state_29945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29945__$1,(2),inst_29940);
} else {
if((state_val_29946 === (2))){
var inst_29942 = (state_29945[(2)]);
var inst_29943 = figwheel.client.heads_up.display_system_warning("Connection from different project","Shutting connection down!!!!!");
var state_29945__$1 = (function (){var statearr_29947 = state_29945;
(statearr_29947[(7)] = inst_29942);

return statearr_29947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29945__$1,inst_29943);
} else {
return null;
}
}
});})(c__20550__auto__))
;
return ((function (switch__20483__auto__,c__20550__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20484__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20484__auto____0 = (function (){
var statearr_29951 = [null,null,null,null,null,null,null,null];
(statearr_29951[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20484__auto__);

(statearr_29951[(1)] = (1));

return statearr_29951;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20484__auto____1 = (function (state_29945){
while(true){
var ret_value__20485__auto__ = (function (){try{while(true){
var result__20486__auto__ = switch__20483__auto__(state_29945);
if(cljs.core.keyword_identical_QMARK_(result__20486__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__20486__auto__;
}
break;
}
}catch (e29952){if((e29952 instanceof Object)){
var ex__20487__auto__ = e29952;
var statearr_29953_29955 = state_29945;
(statearr_29953_29955[(5)] = ex__20487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29945);

return cljs.core.constant$keyword$recur;
} else {
throw e29952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20485__auto__,cljs.core.constant$keyword$recur)){
var G__29956 = state_29945;
state_29945 = G__29956;
continue;
} else {
return ret_value__20485__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20484__auto__ = function(state_29945){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20484__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20484__auto____1.call(this,state_29945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20484__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20484__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20484__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20484__auto__;
})()
;})(switch__20483__auto__,c__20550__auto__))
})();
var state__20552__auto__ = (function (){var statearr_29954 = (f__20551__auto__.cljs$core$IFn$_invoke$arity$0 ? f__20551__auto__.cljs$core$IFn$_invoke$arity$0() : f__20551__auto__.call(null));
(statearr_29954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20550__auto__);

return statearr_29954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20552__auto__);
});})(c__20550__auto__))
);

return c__20550__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29957){
var map__29964 = p__29957;
var map__29964__$1 = ((((!((map__29964 == null)))?((((map__29964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29964):map__29964);
var ed = map__29964__$1;
var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29964__$1,cljs.core.constant$keyword$formatted_DASH_exception);
var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29964__$1,cljs.core.constant$keyword$exception_DASH_data);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29964__$1,cljs.core.constant$keyword$cause);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: Compile Exception");

var seq__29966_29970 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));
var chunk__29967_29971 = null;
var count__29968_29972 = (0);
var i__29969_29973 = (0);
while(true){
if((i__29969_29973 < count__29968_29972)){
var msg_29974 = chunk__29967_29971.cljs$core$IIndexed$_nth$arity$2(null,i__29969_29973);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$info,msg_29974);

var G__29975 = seq__29966_29970;
var G__29976 = chunk__29967_29971;
var G__29977 = count__29968_29972;
var G__29978 = (i__29969_29973 + (1));
seq__29966_29970 = G__29975;
chunk__29967_29971 = G__29976;
count__29968_29972 = G__29977;
i__29969_29973 = G__29978;
continue;
} else {
var temp__4425__auto___29979 = cljs.core.seq(seq__29966_29970);
if(temp__4425__auto___29979){
var seq__29966_29980__$1 = temp__4425__auto___29979;
if(cljs.core.chunked_seq_QMARK_(seq__29966_29980__$1)){
var c__17266__auto___29981 = cljs.core.chunk_first(seq__29966_29980__$1);
var G__29982 = cljs.core.chunk_rest(seq__29966_29980__$1);
var G__29983 = c__17266__auto___29981;
var G__29984 = cljs.core.count(c__17266__auto___29981);
var G__29985 = (0);
seq__29966_29970 = G__29982;
chunk__29967_29971 = G__29983;
count__29968_29972 = G__29984;
i__29969_29973 = G__29985;
continue;
} else {
var msg_29986 = cljs.core.first(seq__29966_29980__$1);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$info,msg_29986);

var G__29987 = cljs.core.next(seq__29966_29980__$1);
var G__29988 = null;
var G__29989 = (0);
var G__29990 = (0);
seq__29966_29970 = G__29987;
chunk__29967_29971 = G__29988;
count__29968_29972 = G__29989;
i__29969_29973 = G__29990;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$info,[cljs.core.str("Error on file "),cljs.core.str(cljs.core.constant$keyword$file.cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(cljs.core.constant$keyword$line.cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(cljs.core.constant$keyword$column.cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29991){
var map__29994 = p__29991;
var map__29994__$1 = ((((!((map__29994 == null)))?((((map__29994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29994):map__29994);
var w = map__29994__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29994__$1,cljs.core.constant$keyword$message);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$warn,[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$debug,"Figwheel: loaded CSS files");

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$info,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$file,files)], 0)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$load_DASH_unchanged_DASH_files,cljs.core.constant$keyword$on_DASH_compile_DASH_warning,cljs.core.constant$keyword$on_DASH_jsload,cljs.core.constant$keyword$on_DASH_compile_DASH_fail,cljs.core.constant$keyword$debug,cljs.core.constant$keyword$heads_DASH_up_DASH_display,cljs.core.constant$keyword$websocket_DASH_url,cljs.core.constant$keyword$before_DASH_jsload,cljs.core.constant$keyword$load_DASH_warninged_DASH_code,cljs.core.constant$keyword$eval_DASH_fn,cljs.core.constant$keyword$retry_DASH_count,cljs.core.constant$keyword$autoload,cljs.core.constant$keyword$url_DASH_rewriter,cljs.core.constant$keyword$on_DASH_cssload],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(cljs.core.constant$keyword$jsload_DASH_callback.cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,cljs.core.constant$keyword$on_DASH_jsload,cljs.core.constant$keyword$jsload_DASH_callback.cljs$core$IFn$_invoke$arity$1(config)),cljs.core.constant$keyword$jsload_DASH_callback);
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$enforce_DASH_project_DASH_plugin,figwheel.client.enforce_project_plugin,cljs.core.constant$keyword$file_DASH_reloader_DASH_plugin,figwheel.client.file_reloader_plugin,cljs.core.constant$keyword$comp_DASH_fail_DASH_warning_DASH_plugin,figwheel.client.compile_fail_warning_plugin,cljs.core.constant$keyword$css_DASH_reloader_DASH_plugin,figwheel.client.css_reloader_plugin,cljs.core.constant$keyword$repl_DASH_plugin,figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not(figwheel.client.utils.html_env_QMARK_()))?cljs.core.select_keys(base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$file_DASH_reloader_DASH_plugin,cljs.core.constant$keyword$comp_DASH_fail_DASH_warning_DASH_plugin,cljs.core.constant$keyword$repl_DASH_plugin], null)):base);
var base__$2 = ((cljs.core.constant$keyword$autoload.cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base__$1,cljs.core.constant$keyword$file_DASH_reloader_DASH_plugin):base__$1);
if(cljs.core.truth_((function (){var and__16470__auto__ = cljs.core.constant$keyword$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16470__auto__)){
return figwheel.client.utils.html_env_QMARK_();
} else {
return and__16470__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base__$2,cljs.core.constant$keyword$heads_DASH_up_DASH_display_DASH_plugin,figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30002 = cljs.core.seq(plugins);
var chunk__30003 = null;
var count__30004 = (0);
var i__30005 = (0);
while(true){
if((i__30005 < count__30004)){
var vec__30006 = chunk__30003.cljs$core$IIndexed$_nth$arity$2(null,i__30005);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30006,(0),null);
var plugin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30006,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30008 = (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(system_options) : plugin.call(null,system_options));
cljs.core.add_watch(figwheel.client.socket.message_history_atom,k,((function (seq__30002,chunk__30003,count__30004,i__30005,pl_30008,vec__30006,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return (pl_30008.cljs$core$IFn$_invoke$arity$1 ? pl_30008.cljs$core$IFn$_invoke$arity$1(msg_hist) : pl_30008.call(null,msg_hist));
});})(seq__30002,chunk__30003,count__30004,i__30005,pl_30008,vec__30006,k,plugin))
);
} else {
}

var G__30009 = seq__30002;
var G__30010 = chunk__30003;
var G__30011 = count__30004;
var G__30012 = (i__30005 + (1));
seq__30002 = G__30009;
chunk__30003 = G__30010;
count__30004 = G__30011;
i__30005 = G__30012;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__30002);
if(temp__4425__auto__){
var seq__30002__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30002__$1)){
var c__17266__auto__ = cljs.core.chunk_first(seq__30002__$1);
var G__30013 = cljs.core.chunk_rest(seq__30002__$1);
var G__30014 = c__17266__auto__;
var G__30015 = cljs.core.count(c__17266__auto__);
var G__30016 = (0);
seq__30002 = G__30013;
chunk__30003 = G__30014;
count__30004 = G__30015;
i__30005 = G__30016;
continue;
} else {
var vec__30007 = cljs.core.first(seq__30002__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30007,(0),null);
var plugin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30007,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30017 = (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(system_options) : plugin.call(null,system_options));
cljs.core.add_watch(figwheel.client.socket.message_history_atom,k,((function (seq__30002,chunk__30003,count__30004,i__30005,pl_30017,vec__30007,k,plugin,seq__30002__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return (pl_30017.cljs$core$IFn$_invoke$arity$1 ? pl_30017.cljs$core$IFn$_invoke$arity$1(msg_hist) : pl_30017.call(null,msg_hist));
});})(seq__30002,chunk__30003,count__30004,i__30005,pl_30017,vec__30007,k,plugin,seq__30002__$1,temp__4425__auto__))
);
} else {
}

var G__30018 = cljs.core.next(seq__30002__$1);
var G__30019 = null;
var G__30020 = (0);
var G__30021 = (0);
seq__30002 = G__30018;
chunk__30003 = G__30019;
count__30004 = G__30020;
i__30005 = G__30021;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args30022 = [];
var len__17521__auto___30026 = arguments.length;
var i__17522__auto___30027 = (0);
while(true){
if((i__17522__auto___30027 < len__17521__auto___30026)){
args30022.push((arguments[i__17522__auto___30027]));

var G__30028 = (i__17522__auto___30027 + (1));
i__17522__auto___30027 = G__30028;
continue;
} else {
}
break;
}

var G__30024 = args30022.length;
switch (G__30024) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30022.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var G__30025 = (function (){
var plugins_SINGLEQUOTE_ = cljs.core.constant$keyword$plugins.cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = cljs.core.constant$keyword$merge_DASH_plugins.cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([figwheel.client.config_defaults,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$plugins,cljs.core.array_seq([cljs.core.constant$keyword$merge_DASH_plugins], 0))], 0)));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([figwheel.client.base_plugins(system_options),merge_plugins], 0)));
figwheel.client.utils._STAR_print_debug_STAR_ = cljs.core.constant$keyword$debug.cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins(plugins,system_options);

figwheel.client.file_reloading.patch_goog_base();

return figwheel.client.socket.open(system_options);
});
return setTimeout(G__30025);
})();
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17528__auto__ = [];
var len__17521__auto___30034 = arguments.length;
var i__17522__auto___30035 = (0);
while(true){
if((i__17522__auto___30035 < len__17521__auto___30034)){
args__17528__auto__.push((arguments[i__17522__auto___30035]));

var G__30036 = (i__17522__auto___30035 + (1));
i__17522__auto___30035 = G__30036;
continue;
} else {
}
break;
}

var argseq__17529__auto__ = ((((0) < args__17528__auto__.length))?(new cljs.core.IndexedSeq(args__17528__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17529__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30031){
var map__30032 = p__30031;
var map__30032__$1 = ((((!((map__30032 == null)))?((((map__30032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30032):map__30032);
var opts = map__30032__$1;
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1(opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30030){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30030));
});

//# sourceMappingURL=client.js.map?rel=1440458059524