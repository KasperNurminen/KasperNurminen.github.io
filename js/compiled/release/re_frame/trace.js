// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__10446){
var map__10447 = p__10446;
var map__10447__$1 = ((((!((map__10447 == null)))?(((((map__10447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10447):map__10447);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__10449_10463 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__10450_10464 = null;
var count__10451_10465 = (0);
var i__10452_10466 = (0);
while(true){
if((i__10452_10466 < count__10451_10465)){
var vec__10453_10467 = chunk__10450_10464.cljs$core$IIndexed$_nth$arity$2(null,i__10452_10466);
var k_10468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10453_10467,(0),null);
var cb_10469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10453_10467,(1),null);
try{var G__10457_10470 = cljs.core.deref(re_frame.trace.traces);
(cb_10469.cljs$core$IFn$_invoke$arity$1 ? cb_10469.cljs$core$IFn$_invoke$arity$1(G__10457_10470) : cb_10469.call(null,G__10457_10470));
}catch (e10456){var e_10471 = e10456;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_10468,"while storing",cljs.core.deref(re_frame.trace.traces),e_10471], 0));
}

var G__10472 = seq__10449_10463;
var G__10473 = chunk__10450_10464;
var G__10474 = count__10451_10465;
var G__10475 = (i__10452_10466 + (1));
seq__10449_10463 = G__10472;
chunk__10450_10464 = G__10473;
count__10451_10465 = G__10474;
i__10452_10466 = G__10475;
continue;
} else {
var temp__4657__auto___10476 = cljs.core.seq(seq__10449_10463);
if(temp__4657__auto___10476){
var seq__10449_10477__$1 = temp__4657__auto___10476;
if(cljs.core.chunked_seq_QMARK_(seq__10449_10477__$1)){
var c__4319__auto___10478 = cljs.core.chunk_first(seq__10449_10477__$1);
var G__10479 = cljs.core.chunk_rest(seq__10449_10477__$1);
var G__10480 = c__4319__auto___10478;
var G__10481 = cljs.core.count(c__4319__auto___10478);
var G__10482 = (0);
seq__10449_10463 = G__10479;
chunk__10450_10464 = G__10480;
count__10451_10465 = G__10481;
i__10452_10466 = G__10482;
continue;
} else {
var vec__10458_10483 = cljs.core.first(seq__10449_10477__$1);
var k_10484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10458_10483,(0),null);
var cb_10485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10458_10483,(1),null);
try{var G__10462_10486 = cljs.core.deref(re_frame.trace.traces);
(cb_10485.cljs$core$IFn$_invoke$arity$1 ? cb_10485.cljs$core$IFn$_invoke$arity$1(G__10462_10486) : cb_10485.call(null,G__10462_10486));
}catch (e10461){var e_10487 = e10461;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_10484,"while storing",cljs.core.deref(re_frame.trace.traces),e_10487], 0));
}

var G__10488 = cljs.core.next(seq__10449_10477__$1);
var G__10489 = null;
var G__10490 = (0);
var G__10491 = (0);
seq__10449_10463 = G__10488;
chunk__10450_10464 = G__10489;
count__10451_10465 = G__10490;
i__10452_10466 = G__10491;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
