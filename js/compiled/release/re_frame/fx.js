// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_10591 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__10592 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__10593 = null;
var count__10594 = (0);
var i__10595 = (0);
while(true){
if((i__10595 < count__10594)){
var vec__10596 = chunk__10593.cljs$core$IIndexed$_nth$arity$2(null,i__10595);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10596,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10596,(1),null);
var temp__4655__auto___10612 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___10612)){
var effect_fn_10613 = temp__4655__auto___10612;
(effect_fn_10613.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10613.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10613.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10614 = seq__10592;
var G__10615 = chunk__10593;
var G__10616 = count__10594;
var G__10617 = (i__10595 + (1));
seq__10592 = G__10614;
chunk__10593 = G__10615;
count__10594 = G__10616;
i__10595 = G__10617;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__10592);
if(temp__4657__auto__){
var seq__10592__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10592__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10592__$1);
var G__10618 = cljs.core.chunk_rest(seq__10592__$1);
var G__10619 = c__4319__auto__;
var G__10620 = cljs.core.count(c__4319__auto__);
var G__10621 = (0);
seq__10592 = G__10618;
chunk__10593 = G__10619;
count__10594 = G__10620;
i__10595 = G__10621;
continue;
} else {
var vec__10599 = cljs.core.first(seq__10592__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10599,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10599,(1),null);
var temp__4655__auto___10622 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___10622)){
var effect_fn_10623 = temp__4655__auto___10622;
(effect_fn_10623.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10623.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10623.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10624 = cljs.core.next(seq__10592__$1);
var G__10625 = null;
var G__10626 = (0);
var G__10627 = (0);
seq__10592 = G__10624;
chunk__10593 = G__10625;
count__10594 = G__10626;
i__10595 = G__10627;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__10424__auto___10628 = re_frame.interop.now();
var duration__10425__auto___10629 = (end__10424__auto___10628 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__10425__auto___10629,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__10424__auto___10628);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10591;
}} else {
var seq__10602 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__10603 = null;
var count__10604 = (0);
var i__10605 = (0);
while(true){
if((i__10605 < count__10604)){
var vec__10606 = chunk__10603.cljs$core$IIndexed$_nth$arity$2(null,i__10605);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10606,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10606,(1),null);
var temp__4655__auto___10630 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___10630)){
var effect_fn_10631 = temp__4655__auto___10630;
(effect_fn_10631.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10631.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10631.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10632 = seq__10602;
var G__10633 = chunk__10603;
var G__10634 = count__10604;
var G__10635 = (i__10605 + (1));
seq__10602 = G__10632;
chunk__10603 = G__10633;
count__10604 = G__10634;
i__10605 = G__10635;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__10602);
if(temp__4657__auto__){
var seq__10602__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10602__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10602__$1);
var G__10636 = cljs.core.chunk_rest(seq__10602__$1);
var G__10637 = c__4319__auto__;
var G__10638 = cljs.core.count(c__4319__auto__);
var G__10639 = (0);
seq__10602 = G__10636;
chunk__10603 = G__10637;
count__10604 = G__10638;
i__10605 = G__10639;
continue;
} else {
var vec__10609 = cljs.core.first(seq__10602__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10609,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10609,(1),null);
var temp__4655__auto___10640 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___10640)){
var effect_fn_10641 = temp__4655__auto___10640;
(effect_fn_10641.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10641.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10641.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10642 = cljs.core.next(seq__10602__$1);
var G__10643 = null;
var G__10644 = (0);
var G__10645 = (0);
seq__10602 = G__10642;
chunk__10603 = G__10643;
count__10604 = G__10644;
i__10605 = G__10645;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__10646 = cljs.core.seq(value);
var chunk__10647 = null;
var count__10648 = (0);
var i__10649 = (0);
while(true){
if((i__10649 < count__10648)){
var map__10650 = chunk__10647.cljs$core$IIndexed$_nth$arity$2(null,i__10649);
var map__10650__$1 = ((((!((map__10650 == null)))?(((((map__10650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10650):map__10650);
var effect = map__10650__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10650__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10650__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__10646,chunk__10647,count__10648,i__10649,map__10650,map__10650__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__10646,chunk__10647,count__10648,i__10649,map__10650,map__10650__$1,effect,ms,dispatch))
,ms);
}


var G__10654 = seq__10646;
var G__10655 = chunk__10647;
var G__10656 = count__10648;
var G__10657 = (i__10649 + (1));
seq__10646 = G__10654;
chunk__10647 = G__10655;
count__10648 = G__10656;
i__10649 = G__10657;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__10646);
if(temp__4657__auto__){
var seq__10646__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10646__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10646__$1);
var G__10658 = cljs.core.chunk_rest(seq__10646__$1);
var G__10659 = c__4319__auto__;
var G__10660 = cljs.core.count(c__4319__auto__);
var G__10661 = (0);
seq__10646 = G__10658;
chunk__10647 = G__10659;
count__10648 = G__10660;
i__10649 = G__10661;
continue;
} else {
var map__10652 = cljs.core.first(seq__10646__$1);
var map__10652__$1 = ((((!((map__10652 == null)))?(((((map__10652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10652):map__10652);
var effect = map__10652__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10652__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10652__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__10646,chunk__10647,count__10648,i__10649,map__10652,map__10652__$1,effect,ms,dispatch,seq__10646__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__10646,chunk__10647,count__10648,i__10649,map__10652,map__10652__$1,effect,ms,dispatch,seq__10646__$1,temp__4657__auto__))
,ms);
}


var G__10662 = cljs.core.next(seq__10646__$1);
var G__10663 = null;
var G__10664 = (0);
var G__10665 = (0);
seq__10646 = G__10662;
chunk__10647 = G__10663;
count__10648 = G__10664;
i__10649 = G__10665;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__10666 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__10667 = null;
var count__10668 = (0);
var i__10669 = (0);
while(true){
if((i__10669 < count__10668)){
var event = chunk__10667.cljs$core$IIndexed$_nth$arity$2(null,i__10669);
re_frame.router.dispatch(event);


var G__10670 = seq__10666;
var G__10671 = chunk__10667;
var G__10672 = count__10668;
var G__10673 = (i__10669 + (1));
seq__10666 = G__10670;
chunk__10667 = G__10671;
count__10668 = G__10672;
i__10669 = G__10673;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__10666);
if(temp__4657__auto__){
var seq__10666__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10666__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10666__$1);
var G__10674 = cljs.core.chunk_rest(seq__10666__$1);
var G__10675 = c__4319__auto__;
var G__10676 = cljs.core.count(c__4319__auto__);
var G__10677 = (0);
seq__10666 = G__10674;
chunk__10667 = G__10675;
count__10668 = G__10676;
i__10669 = G__10677;
continue;
} else {
var event = cljs.core.first(seq__10666__$1);
re_frame.router.dispatch(event);


var G__10678 = cljs.core.next(seq__10666__$1);
var G__10679 = null;
var G__10680 = (0);
var G__10681 = (0);
seq__10666 = G__10678;
chunk__10667 = G__10679;
count__10668 = G__10680;
i__10669 = G__10681;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__10682 = cljs.core.seq(value);
var chunk__10683 = null;
var count__10684 = (0);
var i__10685 = (0);
while(true){
if((i__10685 < count__10684)){
var event = chunk__10683.cljs$core$IIndexed$_nth$arity$2(null,i__10685);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__10686 = seq__10682;
var G__10687 = chunk__10683;
var G__10688 = count__10684;
var G__10689 = (i__10685 + (1));
seq__10682 = G__10686;
chunk__10683 = G__10687;
count__10684 = G__10688;
i__10685 = G__10689;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__10682);
if(temp__4657__auto__){
var seq__10682__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10682__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__10682__$1);
var G__10690 = cljs.core.chunk_rest(seq__10682__$1);
var G__10691 = c__4319__auto__;
var G__10692 = cljs.core.count(c__4319__auto__);
var G__10693 = (0);
seq__10682 = G__10690;
chunk__10683 = G__10691;
count__10684 = G__10692;
i__10685 = G__10693;
continue;
} else {
var event = cljs.core.first(seq__10682__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__10694 = cljs.core.next(seq__10682__$1);
var G__10695 = null;
var G__10696 = (0);
var G__10697 = (0);
seq__10682 = G__10694;
chunk__10683 = G__10695;
count__10684 = G__10696;
i__10685 = G__10697;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
