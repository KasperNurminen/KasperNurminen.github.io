// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.impl.util');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.create_react_class');
goog.require('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('mranderson048.reagent.v0v7v0.reagent.interop');
goog.require('clojure.string');
if(typeof mranderson048.reagent.v0v7v0.reagent.impl.util.react !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.impl.util.react = ((typeof React !== 'undefined')?React:((typeof require !== 'undefined')?(function (){var or__3922__auto__ = require("react");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw (new Error("require('react') failed"));
}
})():(function(){throw (new Error("js/React is missing"))})()
));
}
if(typeof mranderson048.reagent.v0v7v0.reagent.impl.util.create_class !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.impl.util.create_class = ((typeof createReactClass !== 'undefined')?createReactClass:((typeof require !== 'undefined')?(function (){var or__3922__auto__ = require("create-react-class");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw (new Error("require('create-react-class') failed"));
}
})():(function(){throw (new Error("js/createReactClass is missing"))})()
));
}
mranderson048.reagent.v0v7v0.reagent.impl.util.is_client = ((typeof window !== 'undefined') && (!(((window["document"]) == null))));
mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_non_reactive_STAR_ = false;
mranderson048.reagent.v0v7v0.reagent.impl.util.memoize_1 = (function mranderson048$reagent$v0v7v0$reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
mranderson048.reagent.v0v7v0.reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
mranderson048.reagent.v0v7v0.reagent.impl.util.capitalize = (function mranderson048$reagent$v0v7v0$reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join('');
}
});
mranderson048.reagent.v0v7v0.reagent.impl.util.dash_to_camel = (function mranderson048$reagent$v0v7v0$reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__59892 = clojure.string.split.call(null,name_str,/-/);
var seq__59893 = cljs.core.seq.call(null,vec__59892);
var first__59894 = cljs.core.first.call(null,seq__59893);
var seq__59893__$1 = cljs.core.next.call(null,seq__59893);
var start = first__59894;
var parts = seq__59893__$1;
if(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,mranderson048.reagent.v0v7v0.reagent.impl.util.capitalize,parts));
}
}
});
mranderson048.reagent.v0v7v0.reagent.impl.util.fun_name = (function mranderson048$reagent$v0v7v0$reagent$impl$util$fun_name(f){
var n = (function (){var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(and__3911__auto__){
var or__3922__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (f["name"]);
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var and__3911__auto__ = ((!((f == null)))?(((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$))))?true:false):false);
if(and__3911__auto__){
return cljs.core.name.call(null,f);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
return clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),"$",".");
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.Fn}
*/
mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn = (function (pfn,f,args){
this.pfn = pfn;
this.f = f;
this.args = args;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$Fn$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.call = (function() {
var G__59900 = null;
var G__59900__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null);
});
var G__59900__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a);
});
var G__59900__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b);
});
var G__59900__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c);
});
var G__59900__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d);
});
var G__59900__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e);
});
var G__59900__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
});
var G__59900__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
});
var G__59900__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
});
var G__59900__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
});
var G__59900__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
});
var G__59900__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
});
var G__59900__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
});
var G__59900__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
});
var G__59900__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
});
var G__59900__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
});
var G__59900__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
});
var G__59900__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
});
var G__59900__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__59900__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__59900__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__59900__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__59900 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__59900__1.call(this,self__);
case 2:
return G__59900__2.call(this,self__,a);
case 3:
return G__59900__3.call(this,self__,a,b);
case 4:
return G__59900__4.call(this,self__,a,b,c);
case 5:
return G__59900__5.call(this,self__,a,b,c,d);
case 6:
return G__59900__6.call(this,self__,a,b,c,d,e);
case 7:
return G__59900__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__59900__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__59900__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__59900__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__59900__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__59900__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__59900__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__59900__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__59900__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__59900__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__59900__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__59900__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__59900__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__59900__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__59900__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__59900__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__59900.cljs$core$IFn$_invoke$arity$1 = G__59900__1;
G__59900.cljs$core$IFn$_invoke$arity$2 = G__59900__2;
G__59900.cljs$core$IFn$_invoke$arity$3 = G__59900__3;
G__59900.cljs$core$IFn$_invoke$arity$4 = G__59900__4;
G__59900.cljs$core$IFn$_invoke$arity$5 = G__59900__5;
G__59900.cljs$core$IFn$_invoke$arity$6 = G__59900__6;
G__59900.cljs$core$IFn$_invoke$arity$7 = G__59900__7;
G__59900.cljs$core$IFn$_invoke$arity$8 = G__59900__8;
G__59900.cljs$core$IFn$_invoke$arity$9 = G__59900__9;
G__59900.cljs$core$IFn$_invoke$arity$10 = G__59900__10;
G__59900.cljs$core$IFn$_invoke$arity$11 = G__59900__11;
G__59900.cljs$core$IFn$_invoke$arity$12 = G__59900__12;
G__59900.cljs$core$IFn$_invoke$arity$13 = G__59900__13;
G__59900.cljs$core$IFn$_invoke$arity$14 = G__59900__14;
G__59900.cljs$core$IFn$_invoke$arity$15 = G__59900__15;
G__59900.cljs$core$IFn$_invoke$arity$16 = G__59900__16;
G__59900.cljs$core$IFn$_invoke$arity$17 = G__59900__17;
G__59900.cljs$core$IFn$_invoke$arity$18 = G__59900__18;
G__59900.cljs$core$IFn$_invoke$arity$19 = G__59900__19;
G__59900.cljs$core$IFn$_invoke$arity$20 = G__59900__20;
G__59900.cljs$core$IFn$_invoke$arity$21 = G__59900__21;
G__59900.cljs$core$IFn$_invoke$arity$22 = G__59900__22;
return G__59900;
})()
;

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.apply = (function (self__,args59899){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args59899)));
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.pfn.call(null);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return self__.pfn.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.call(null,self__.pfn,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)));
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pfn","pfn",-513383568,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.cljs$lang$type = true;

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.cljs$lang$ctorStr = "mranderson048.reagent.v0v7v0.reagent.impl.util/PartialFn";

mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"mranderson048.reagent.v0v7v0.reagent.impl.util/PartialFn");
});

/**
 * Positional factory function for mranderson048.reagent.v0v7v0.reagent.impl.util/PartialFn.
 */
mranderson048.reagent.v0v7v0.reagent.impl.util.__GT_PartialFn = (function mranderson048$reagent$v0v7v0$reagent$impl$util$__GT_PartialFn(pfn,f,args){
return (new mranderson048.reagent.v0v7v0.reagent.impl.util.PartialFn(pfn,f,args));
});

mranderson048.reagent.v0v7v0.reagent.impl.util.make_partial_fn = (function mranderson048$reagent$v0v7v0$reagent$impl$util$make_partial_fn(f,args){
return mranderson048.reagent.v0v7v0.reagent.impl.util.__GT_PartialFn.call(null,cljs.core.apply.call(null,cljs.core.partial,f,args),f,args);
});
mranderson048.reagent.v0v7v0.reagent.impl.util.merge_class = (function mranderson048$reagent$v0v7v0$reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var c1 = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var c2 = temp__4657__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
mranderson048.reagent.v0v7v0.reagent.impl.util.merge_style = (function mranderson048$reagent$v0v7v0$reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4657__auto__)){
var s1 = temp__4657__auto__;
var temp__4657__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4657__auto____$1)){
var s2 = temp__4657__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
mranderson048.reagent.v0v7v0.reagent.impl.util.merge_props = (function mranderson048$reagent$v0v7v0$reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Property must be a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,p1))].join('')),"\n","(map? p1)"].join('')));
}

return mranderson048.reagent.v0v7v0.reagent.impl.util.merge_style.call(null,p1,mranderson048.reagent.v0v7v0.reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = false;
mranderson048.reagent.v0v7v0.reagent.impl.util.force_update = (function mranderson048$reagent$v0v7v0$reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR_59901 = mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (comp["forceUpdate"])();
}finally {mranderson048.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_59901;
}} else {
return (comp["forceUpdate"])();
}
});

//# sourceMappingURL=util.js.map?rel=1600694567898
