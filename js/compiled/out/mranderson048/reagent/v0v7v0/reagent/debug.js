// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v7v0.reagent.debug.has_console = typeof console !== 'undefined';
mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;
if(typeof mranderson048.reagent.v0v7v0.reagent.debug.warnings !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof mranderson048.reagent.v0v7v0.reagent.debug.track_console !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__59884__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__59884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59885__i = 0, G__59885__a = new Array(arguments.length -  0);
while (G__59885__i < G__59885__a.length) {G__59885__a[G__59885__i] = arguments[G__59885__i + 0]; ++G__59885__i;}
  args = new cljs.core.IndexedSeq(G__59885__a,0,null);
} 
return G__59884__delegate.call(this,args);};
G__59884.cljs$lang$maxFixedArity = 0;
G__59884.cljs$lang$applyTo = (function (arglist__59886){
var args = cljs.core.seq(arglist__59886);
return G__59884__delegate(args);
});
G__59884.cljs$core$IFn$_invoke$arity$variadic = G__59884__delegate;
return G__59884;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__59887__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__59887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59888__i = 0, G__59888__a = new Array(arguments.length -  0);
while (G__59888__i < G__59888__a.length) {G__59888__a[G__59888__i] = arguments[G__59888__i + 0]; ++G__59888__i;}
  args = new cljs.core.IndexedSeq(G__59888__a,0,null);
} 
return G__59887__delegate.call(this,args);};
G__59887.cljs$lang$maxFixedArity = 0;
G__59887.cljs$lang$applyTo = (function (arglist__59889){
var args = cljs.core.seq(arglist__59889);
return G__59887__delegate(args);
});
G__59887.cljs$core$IFn$_invoke$arity$variadic = G__59887__delegate;
return G__59887;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1600694567645
