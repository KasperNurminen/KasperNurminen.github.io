// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"cofx","cofx",2013202907),null,new cljs.core.Keyword(null,"fx","fx",-1237829572),null], null), null);
mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler = (function mranderson048$re_frame$v0v10v2$re_frame$registrar$get_handler(var_args){
var G__60239 = arguments.length;
switch (G__60239) {
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1 = (function (kind){
return cljs.core.get.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler),kind);
});

mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler),kind),id);
});

mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3 = (function (kind,id,required_QMARK_){
var handler = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,kind,id);
if(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_((function (){var and__3911__auto__ = required_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return (handler == null);
} else {
return and__3911__auto__;
}
})())){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)].join('')," handler registered for: ",id);
} else {
}
} else {
}

return handler;
});

mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$lang$maxFixedArity = 3;

mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler = (function mranderson048$re_frame$v0v10v2$re_frame$registrar$register_handler(kind,id,handler_fn){
if(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,kind,id,false))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: overwriting",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)].join(''),"handler for:",id);
} else {
}
} else {
}

cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null),handler_fn);

return handler_fn;
});
mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers = (function mranderson048$re_frame$v0v10v2$re_frame$registrar$clear_handlers(var_args){
var G__60242 = arguments.length;
switch (G__60242) {
case 0:
return mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,cljs.core.PersistentArrayMap.EMPTY);
});

mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1 = (function (kind){
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,kind))){
} else {
throw (new Error("Assert failed: (kinds kind)"));
}

return cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,cljs.core.dissoc,kind);
});

mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,kind))){
} else {
throw (new Error("Assert failed: (kinds kind)"));
}

if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,kind,id))){
return cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.kind__GT_id__GT_handler,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind], null),cljs.core.dissoc,id);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: can't clear",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)].join(''),"handler for",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),". Handler not found."].join(''));
}
});

mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=registrar.js.map?rel=1600694569088
