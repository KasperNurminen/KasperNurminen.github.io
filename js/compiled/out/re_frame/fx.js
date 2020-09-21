// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
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
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_54613 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__54614 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__54615 = null;
var count__54616 = (0);
var i__54617 = (0);
while(true){
if((i__54617 < count__54616)){
var vec__54618 = cljs.core._nth.call(null,chunk__54615,i__54617);
var effect_key = cljs.core.nth.call(null,vec__54618,(0),null);
var effect_value = cljs.core.nth.call(null,vec__54618,(1),null);
var temp__4655__auto___54634 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___54634)){
var effect_fn_54635 = temp__4655__auto___54634;
effect_fn_54635.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54636 = seq__54614;
var G__54637 = chunk__54615;
var G__54638 = count__54616;
var G__54639 = (i__54617 + (1));
seq__54614 = G__54636;
chunk__54615 = G__54637;
count__54616 = G__54638;
i__54617 = G__54639;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54614);
if(temp__4657__auto__){
var seq__54614__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54614__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__54614__$1);
var G__54640 = cljs.core.chunk_rest.call(null,seq__54614__$1);
var G__54641 = c__4319__auto__;
var G__54642 = cljs.core.count.call(null,c__4319__auto__);
var G__54643 = (0);
seq__54614 = G__54640;
chunk__54615 = G__54641;
count__54616 = G__54642;
i__54617 = G__54643;
continue;
} else {
var vec__54621 = cljs.core.first.call(null,seq__54614__$1);
var effect_key = cljs.core.nth.call(null,vec__54621,(0),null);
var effect_value = cljs.core.nth.call(null,vec__54621,(1),null);
var temp__4655__auto___54644 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___54644)){
var effect_fn_54645 = temp__4655__auto___54644;
effect_fn_54645.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54646 = cljs.core.next.call(null,seq__54614__$1);
var G__54647 = null;
var G__54648 = (0);
var G__54649 = (0);
seq__54614 = G__54646;
chunk__54615 = G__54647;
count__54616 = G__54648;
i__54617 = G__54649;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__26506__auto___54650 = re_frame.interop.now.call(null);
var duration__26507__auto___54651 = (end__26506__auto___54650 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26507__auto___54651,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__26506__auto___54650);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_54613;
}} else {
var seq__54624 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__54625 = null;
var count__54626 = (0);
var i__54627 = (0);
while(true){
if((i__54627 < count__54626)){
var vec__54628 = cljs.core._nth.call(null,chunk__54625,i__54627);
var effect_key = cljs.core.nth.call(null,vec__54628,(0),null);
var effect_value = cljs.core.nth.call(null,vec__54628,(1),null);
var temp__4655__auto___54652 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___54652)){
var effect_fn_54653 = temp__4655__auto___54652;
effect_fn_54653.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54654 = seq__54624;
var G__54655 = chunk__54625;
var G__54656 = count__54626;
var G__54657 = (i__54627 + (1));
seq__54624 = G__54654;
chunk__54625 = G__54655;
count__54626 = G__54656;
i__54627 = G__54657;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54624);
if(temp__4657__auto__){
var seq__54624__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54624__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__54624__$1);
var G__54658 = cljs.core.chunk_rest.call(null,seq__54624__$1);
var G__54659 = c__4319__auto__;
var G__54660 = cljs.core.count.call(null,c__4319__auto__);
var G__54661 = (0);
seq__54624 = G__54658;
chunk__54625 = G__54659;
count__54626 = G__54660;
i__54627 = G__54661;
continue;
} else {
var vec__54631 = cljs.core.first.call(null,seq__54624__$1);
var effect_key = cljs.core.nth.call(null,vec__54631,(0),null);
var effect_value = cljs.core.nth.call(null,vec__54631,(1),null);
var temp__4655__auto___54662 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___54662)){
var effect_fn_54663 = temp__4655__auto___54662;
effect_fn_54663.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54664 = cljs.core.next.call(null,seq__54624__$1);
var G__54665 = null;
var G__54666 = (0);
var G__54667 = (0);
seq__54624 = G__54664;
chunk__54625 = G__54665;
count__54626 = G__54666;
i__54627 = G__54667;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__54668 = cljs.core.seq.call(null,value);
var chunk__54669 = null;
var count__54670 = (0);
var i__54671 = (0);
while(true){
if((i__54671 < count__54670)){
var map__54672 = cljs.core._nth.call(null,chunk__54669,i__54671);
var map__54672__$1 = ((((!((map__54672 == null)))?(((((map__54672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54672):map__54672);
var effect = map__54672__$1;
var ms = cljs.core.get.call(null,map__54672__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__54672__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__54668,chunk__54669,count__54670,i__54671,map__54672,map__54672__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__54668,chunk__54669,count__54670,i__54671,map__54672,map__54672__$1,effect,ms,dispatch))
,ms);
}


var G__54676 = seq__54668;
var G__54677 = chunk__54669;
var G__54678 = count__54670;
var G__54679 = (i__54671 + (1));
seq__54668 = G__54676;
chunk__54669 = G__54677;
count__54670 = G__54678;
i__54671 = G__54679;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54668);
if(temp__4657__auto__){
var seq__54668__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54668__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__54668__$1);
var G__54680 = cljs.core.chunk_rest.call(null,seq__54668__$1);
var G__54681 = c__4319__auto__;
var G__54682 = cljs.core.count.call(null,c__4319__auto__);
var G__54683 = (0);
seq__54668 = G__54680;
chunk__54669 = G__54681;
count__54670 = G__54682;
i__54671 = G__54683;
continue;
} else {
var map__54674 = cljs.core.first.call(null,seq__54668__$1);
var map__54674__$1 = ((((!((map__54674 == null)))?(((((map__54674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54674):map__54674);
var effect = map__54674__$1;
var ms = cljs.core.get.call(null,map__54674__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__54674__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__54668,chunk__54669,count__54670,i__54671,map__54674,map__54674__$1,effect,ms,dispatch,seq__54668__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__54668,chunk__54669,count__54670,i__54671,map__54674,map__54674__$1,effect,ms,dispatch,seq__54668__$1,temp__4657__auto__))
,ms);
}


var G__54684 = cljs.core.next.call(null,seq__54668__$1);
var G__54685 = null;
var G__54686 = (0);
var G__54687 = (0);
seq__54668 = G__54684;
chunk__54669 = G__54685;
count__54670 = G__54686;
i__54671 = G__54687;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__54688 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__54689 = null;
var count__54690 = (0);
var i__54691 = (0);
while(true){
if((i__54691 < count__54690)){
var event = cljs.core._nth.call(null,chunk__54689,i__54691);
re_frame.router.dispatch.call(null,event);


var G__54692 = seq__54688;
var G__54693 = chunk__54689;
var G__54694 = count__54690;
var G__54695 = (i__54691 + (1));
seq__54688 = G__54692;
chunk__54689 = G__54693;
count__54690 = G__54694;
i__54691 = G__54695;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54688);
if(temp__4657__auto__){
var seq__54688__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54688__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__54688__$1);
var G__54696 = cljs.core.chunk_rest.call(null,seq__54688__$1);
var G__54697 = c__4319__auto__;
var G__54698 = cljs.core.count.call(null,c__4319__auto__);
var G__54699 = (0);
seq__54688 = G__54696;
chunk__54689 = G__54697;
count__54690 = G__54698;
i__54691 = G__54699;
continue;
} else {
var event = cljs.core.first.call(null,seq__54688__$1);
re_frame.router.dispatch.call(null,event);


var G__54700 = cljs.core.next.call(null,seq__54688__$1);
var G__54701 = null;
var G__54702 = (0);
var G__54703 = (0);
seq__54688 = G__54700;
chunk__54689 = G__54701;
count__54690 = G__54702;
i__54691 = G__54703;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__54704 = cljs.core.seq.call(null,value);
var chunk__54705 = null;
var count__54706 = (0);
var i__54707 = (0);
while(true){
if((i__54707 < count__54706)){
var event = cljs.core._nth.call(null,chunk__54705,i__54707);
clear_event.call(null,event);


var G__54708 = seq__54704;
var G__54709 = chunk__54705;
var G__54710 = count__54706;
var G__54711 = (i__54707 + (1));
seq__54704 = G__54708;
chunk__54705 = G__54709;
count__54706 = G__54710;
i__54707 = G__54711;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54704);
if(temp__4657__auto__){
var seq__54704__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54704__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__54704__$1);
var G__54712 = cljs.core.chunk_rest.call(null,seq__54704__$1);
var G__54713 = c__4319__auto__;
var G__54714 = cljs.core.count.call(null,c__4319__auto__);
var G__54715 = (0);
seq__54704 = G__54712;
chunk__54705 = G__54713;
count__54706 = G__54714;
i__54707 = G__54715;
continue;
} else {
var event = cljs.core.first.call(null,seq__54704__$1);
clear_event.call(null,event);


var G__54716 = cljs.core.next.call(null,seq__54704__$1);
var G__54717 = null;
var G__54718 = (0);
var G__54719 = (0);
seq__54704 = G__54716;
chunk__54705 = G__54717;
count__54706 = G__54718;
i__54707 = G__54719;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1600694554288
