// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__5261__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5262__i = 0, G__5262__a = new Array(arguments.length -  0);
while (G__5262__i < G__5262__a.length) {G__5262__a[G__5262__i] = arguments[G__5262__i + 0]; ++G__5262__i;}
  args = new cljs.core.IndexedSeq(G__5262__a,0,null);
} 
return G__5261__delegate.call(this,args);};
G__5261.cljs$lang$maxFixedArity = 0;
G__5261.cljs$lang$applyTo = (function (arglist__5263){
var args = cljs.core.seq(arglist__5263);
return G__5261__delegate(args);
});
G__5261.cljs$core$IFn$_invoke$arity$variadic = G__5261__delegate;
return G__5261;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5264__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5265__i = 0, G__5265__a = new Array(arguments.length -  0);
while (G__5265__i < G__5265__a.length) {G__5265__a[G__5265__i] = arguments[G__5265__i + 0]; ++G__5265__i;}
  args = new cljs.core.IndexedSeq(G__5265__a,0,null);
} 
return G__5264__delegate.call(this,args);};
G__5264.cljs$lang$maxFixedArity = 0;
G__5264.cljs$lang$applyTo = (function (arglist__5266){
var args = cljs.core.seq(arglist__5266);
return G__5264__delegate(args);
});
G__5264.cljs$core$IFn$_invoke$arity$variadic = G__5264__delegate;
return G__5264;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
