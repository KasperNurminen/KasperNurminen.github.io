// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('clojure.walk');
goog.require('sablono.util');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__50344){
var vec__50345 = p__50344;
var k = cljs.core.nth.call(null,vec__50345,(0),null);
var v = cljs.core.nth.call(null,vec__50345,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.call(null,k),v], null);
});
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,transform,x));
} else {
return x;
}
}),coll);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,sablono.util.camel_case_keys);
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var G__50349 = arguments.length;
switch (G__50349) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = ((((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null))))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,react_class,cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,(root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var G__50352 = arguments.length;
switch (G__50352) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs.core.clj__GT_js.call(null,cljs_react_material_ui.core.transform_keys.call(null,sablono.util.camel_case,raw_theme)));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][cljs.core.name.call(null,sablono.util.camel_case.call(null,color_key))]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50355 = arguments.length;
var i__4500__auto___50356 = (0);
while(true){
if((i__4500__auto___50356 < len__4499__auto___50355)){
args__4502__auto__.push((arguments[i__4500__auto___50356]));

var G__50357 = (i__4500__auto___50356 + (1));
i__4500__auto___50356 = G__50357;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,(MaterialUI["List"])),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq50354){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50354));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50359 = arguments.length;
var i__4500__auto___50360 = (0);
while(true){
if((i__4500__auto___50360 < len__4499__auto___50359)){
args__4502__auto__.push((arguments[i__4500__auto___50360]));

var G__50361 = (i__4500__auto___50360 + (1));
i__4500__auto___50360 = G__50361;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq50358){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50358));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50363 = arguments.length;
var i__4500__auto___50364 = (0);
while(true){
if((i__4500__auto___50364 < len__4499__auto___50363)){
args__4502__auto__.push((arguments[i__4500__auto___50364]));

var G__50365 = (i__4500__auto___50364 + (1));
i__4500__auto___50364 = G__50365;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq50362){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50362));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50367 = arguments.length;
var i__4500__auto___50368 = (0);
while(true){
if((i__4500__auto___50368 < len__4499__auto___50367)){
args__4502__auto__.push((arguments[i__4500__auto___50368]));

var G__50369 = (i__4500__auto___50368 + (1));
i__4500__auto___50368 = G__50369;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq50366){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50366));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50371 = arguments.length;
var i__4500__auto___50372 = (0);
while(true){
if((i__4500__auto___50372 < len__4499__auto___50371)){
args__4502__auto__.push((arguments[i__4500__auto___50372]));

var G__50373 = (i__4500__auto___50372 + (1));
i__4500__auto___50372 = G__50373;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq50370){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50370));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50375 = arguments.length;
var i__4500__auto___50376 = (0);
while(true){
if((i__4500__auto___50376 < len__4499__auto___50375)){
args__4502__auto__.push((arguments[i__4500__auto___50376]));

var G__50377 = (i__4500__auto___50376 + (1));
i__4500__auto___50376 = G__50377;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq50374){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50374));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50379 = arguments.length;
var i__4500__auto___50380 = (0);
while(true){
if((i__4500__auto___50380 < len__4499__auto___50379)){
args__4502__auto__.push((arguments[i__4500__auto___50380]));

var G__50381 = (i__4500__auto___50380 + (1));
i__4500__auto___50380 = G__50381;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq50378){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50378));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50383 = arguments.length;
var i__4500__auto___50384 = (0);
while(true){
if((i__4500__auto___50384 < len__4499__auto___50383)){
args__4502__auto__.push((arguments[i__4500__auto___50384]));

var G__50385 = (i__4500__auto___50384 + (1));
i__4500__auto___50384 = G__50385;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq50382){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50382));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50387 = arguments.length;
var i__4500__auto___50388 = (0);
while(true){
if((i__4500__auto___50388 < len__4499__auto___50387)){
args__4502__auto__.push((arguments[i__4500__auto___50388]));

var G__50389 = (i__4500__auto___50388 + (1));
i__4500__auto___50388 = G__50389;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq50386){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50386));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50391 = arguments.length;
var i__4500__auto___50392 = (0);
while(true){
if((i__4500__auto___50392 < len__4499__auto___50391)){
args__4502__auto__.push((arguments[i__4500__auto___50392]));

var G__50393 = (i__4500__auto___50392 + (1));
i__4500__auto___50392 = G__50393;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq50390){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50390));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50395 = arguments.length;
var i__4500__auto___50396 = (0);
while(true){
if((i__4500__auto___50396 < len__4499__auto___50395)){
args__4502__auto__.push((arguments[i__4500__auto___50396]));

var G__50397 = (i__4500__auto___50396 + (1));
i__4500__auto___50396 = G__50397;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq50394){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50394));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50399 = arguments.length;
var i__4500__auto___50400 = (0);
while(true){
if((i__4500__auto___50400 < len__4499__auto___50399)){
args__4502__auto__.push((arguments[i__4500__auto___50400]));

var G__50401 = (i__4500__auto___50400 + (1));
i__4500__auto___50400 = G__50401;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq50398){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50398));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50403 = arguments.length;
var i__4500__auto___50404 = (0);
while(true){
if((i__4500__auto___50404 < len__4499__auto___50403)){
args__4502__auto__.push((arguments[i__4500__auto___50404]));

var G__50405 = (i__4500__auto___50404 + (1));
i__4500__auto___50404 = G__50405;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq50402){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50402));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50407 = arguments.length;
var i__4500__auto___50408 = (0);
while(true){
if((i__4500__auto___50408 < len__4499__auto___50407)){
args__4502__auto__.push((arguments[i__4500__auto___50408]));

var G__50409 = (i__4500__auto___50408 + (1));
i__4500__auto___50408 = G__50409;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq50406){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50406));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50411 = arguments.length;
var i__4500__auto___50412 = (0);
while(true){
if((i__4500__auto___50412 < len__4499__auto___50411)){
args__4502__auto__.push((arguments[i__4500__auto___50412]));

var G__50413 = (i__4500__auto___50412 + (1));
i__4500__auto___50412 = G__50413;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq50410){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50410));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50415 = arguments.length;
var i__4500__auto___50416 = (0);
while(true){
if((i__4500__auto___50416 < len__4499__auto___50415)){
args__4502__auto__.push((arguments[i__4500__auto___50416]));

var G__50417 = (i__4500__auto___50416 + (1));
i__4500__auto___50416 = G__50417;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq50414){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50414));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50419 = arguments.length;
var i__4500__auto___50420 = (0);
while(true){
if((i__4500__auto___50420 < len__4499__auto___50419)){
args__4502__auto__.push((arguments[i__4500__auto___50420]));

var G__50421 = (i__4500__auto___50420 + (1));
i__4500__auto___50420 = G__50421;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq50418){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50418));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50423 = arguments.length;
var i__4500__auto___50424 = (0);
while(true){
if((i__4500__auto___50424 < len__4499__auto___50423)){
args__4502__auto__.push((arguments[i__4500__auto___50424]));

var G__50425 = (i__4500__auto___50424 + (1));
i__4500__auto___50424 = G__50425;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq50422){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50422));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50427 = arguments.length;
var i__4500__auto___50428 = (0);
while(true){
if((i__4500__auto___50428 < len__4499__auto___50427)){
args__4502__auto__.push((arguments[i__4500__auto___50428]));

var G__50429 = (i__4500__auto___50428 + (1));
i__4500__auto___50428 = G__50429;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq50426){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50426));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50431 = arguments.length;
var i__4500__auto___50432 = (0);
while(true){
if((i__4500__auto___50432 < len__4499__auto___50431)){
args__4502__auto__.push((arguments[i__4500__auto___50432]));

var G__50433 = (i__4500__auto___50432 + (1));
i__4500__auto___50432 = G__50433;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq50430){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50430));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50435 = arguments.length;
var i__4500__auto___50436 = (0);
while(true){
if((i__4500__auto___50436 < len__4499__auto___50435)){
args__4502__auto__.push((arguments[i__4500__auto___50436]));

var G__50437 = (i__4500__auto___50436 + (1));
i__4500__auto___50436 = G__50437;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq50434){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50434));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50439 = arguments.length;
var i__4500__auto___50440 = (0);
while(true){
if((i__4500__auto___50440 < len__4499__auto___50439)){
args__4502__auto__.push((arguments[i__4500__auto___50440]));

var G__50441 = (i__4500__auto___50440 + (1));
i__4500__auto___50440 = G__50441;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq50438){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50438));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50443 = arguments.length;
var i__4500__auto___50444 = (0);
while(true){
if((i__4500__auto___50444 < len__4499__auto___50443)){
args__4502__auto__.push((arguments[i__4500__auto___50444]));

var G__50445 = (i__4500__auto___50444 + (1));
i__4500__auto___50444 = G__50445;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq50442){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50442));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50447 = arguments.length;
var i__4500__auto___50448 = (0);
while(true){
if((i__4500__auto___50448 < len__4499__auto___50447)){
args__4502__auto__.push((arguments[i__4500__auto___50448]));

var G__50449 = (i__4500__auto___50448 + (1));
i__4500__auto___50448 = G__50449;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq50446){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50446));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50451 = arguments.length;
var i__4500__auto___50452 = (0);
while(true){
if((i__4500__auto___50452 < len__4499__auto___50451)){
args__4502__auto__.push((arguments[i__4500__auto___50452]));

var G__50453 = (i__4500__auto___50452 + (1));
i__4500__auto___50452 = G__50453;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq50450){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50450));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50455 = arguments.length;
var i__4500__auto___50456 = (0);
while(true){
if((i__4500__auto___50456 < len__4499__auto___50455)){
args__4502__auto__.push((arguments[i__4500__auto___50456]));

var G__50457 = (i__4500__auto___50456 + (1));
i__4500__auto___50456 = G__50457;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq50454){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50454));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50459 = arguments.length;
var i__4500__auto___50460 = (0);
while(true){
if((i__4500__auto___50460 < len__4499__auto___50459)){
args__4502__auto__.push((arguments[i__4500__auto___50460]));

var G__50461 = (i__4500__auto___50460 + (1));
i__4500__auto___50460 = G__50461;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq50458){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50458));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50463 = arguments.length;
var i__4500__auto___50464 = (0);
while(true){
if((i__4500__auto___50464 < len__4499__auto___50463)){
args__4502__auto__.push((arguments[i__4500__auto___50464]));

var G__50465 = (i__4500__auto___50464 + (1));
i__4500__auto___50464 = G__50465;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq50462){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50462));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50467 = arguments.length;
var i__4500__auto___50468 = (0);
while(true){
if((i__4500__auto___50468 < len__4499__auto___50467)){
args__4502__auto__.push((arguments[i__4500__auto___50468]));

var G__50469 = (i__4500__auto___50468 + (1));
i__4500__auto___50468 = G__50469;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq50466){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50466));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50471 = arguments.length;
var i__4500__auto___50472 = (0);
while(true){
if((i__4500__auto___50472 < len__4499__auto___50471)){
args__4502__auto__.push((arguments[i__4500__auto___50472]));

var G__50473 = (i__4500__auto___50472 + (1));
i__4500__auto___50472 = G__50473;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq50470){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50470));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50475 = arguments.length;
var i__4500__auto___50476 = (0);
while(true){
if((i__4500__auto___50476 < len__4499__auto___50475)){
args__4502__auto__.push((arguments[i__4500__auto___50476]));

var G__50477 = (i__4500__auto___50476 + (1));
i__4500__auto___50476 = G__50477;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq50474){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50474));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50479 = arguments.length;
var i__4500__auto___50480 = (0);
while(true){
if((i__4500__auto___50480 < len__4499__auto___50479)){
args__4502__auto__.push((arguments[i__4500__auto___50480]));

var G__50481 = (i__4500__auto___50480 + (1));
i__4500__auto___50480 = G__50481;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq50478){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50478));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50483 = arguments.length;
var i__4500__auto___50484 = (0);
while(true){
if((i__4500__auto___50484 < len__4499__auto___50483)){
args__4502__auto__.push((arguments[i__4500__auto___50484]));

var G__50485 = (i__4500__auto___50484 + (1));
i__4500__auto___50484 = G__50485;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq50482){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50482));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50487 = arguments.length;
var i__4500__auto___50488 = (0);
while(true){
if((i__4500__auto___50488 < len__4499__auto___50487)){
args__4502__auto__.push((arguments[i__4500__auto___50488]));

var G__50489 = (i__4500__auto___50488 + (1));
i__4500__auto___50488 = G__50489;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq50486){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50486));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50491 = arguments.length;
var i__4500__auto___50492 = (0);
while(true){
if((i__4500__auto___50492 < len__4499__auto___50491)){
args__4502__auto__.push((arguments[i__4500__auto___50492]));

var G__50493 = (i__4500__auto___50492 + (1));
i__4500__auto___50492 = G__50493;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq50490){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50490));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50495 = arguments.length;
var i__4500__auto___50496 = (0);
while(true){
if((i__4500__auto___50496 < len__4499__auto___50495)){
args__4502__auto__.push((arguments[i__4500__auto___50496]));

var G__50497 = (i__4500__auto___50496 + (1));
i__4500__auto___50496 = G__50497;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq50494){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50494));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50499 = arguments.length;
var i__4500__auto___50500 = (0);
while(true){
if((i__4500__auto___50500 < len__4499__auto___50499)){
args__4502__auto__.push((arguments[i__4500__auto___50500]));

var G__50501 = (i__4500__auto___50500 + (1));
i__4500__auto___50500 = G__50501;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq50498){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50498));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50503 = arguments.length;
var i__4500__auto___50504 = (0);
while(true){
if((i__4500__auto___50504 < len__4499__auto___50503)){
args__4502__auto__.push((arguments[i__4500__auto___50504]));

var G__50505 = (i__4500__auto___50504 + (1));
i__4500__auto___50504 = G__50505;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq50502){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50502));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50507 = arguments.length;
var i__4500__auto___50508 = (0);
while(true){
if((i__4500__auto___50508 < len__4499__auto___50507)){
args__4502__auto__.push((arguments[i__4500__auto___50508]));

var G__50509 = (i__4500__auto___50508 + (1));
i__4500__auto___50508 = G__50509;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq50506){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50506));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50511 = arguments.length;
var i__4500__auto___50512 = (0);
while(true){
if((i__4500__auto___50512 < len__4499__auto___50511)){
args__4502__auto__.push((arguments[i__4500__auto___50512]));

var G__50513 = (i__4500__auto___50512 + (1));
i__4500__auto___50512 = G__50513;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq50510){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50510));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50515 = arguments.length;
var i__4500__auto___50516 = (0);
while(true){
if((i__4500__auto___50516 < len__4499__auto___50515)){
args__4502__auto__.push((arguments[i__4500__auto___50516]));

var G__50517 = (i__4500__auto___50516 + (1));
i__4500__auto___50516 = G__50517;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq50514){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50514));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50519 = arguments.length;
var i__4500__auto___50520 = (0);
while(true){
if((i__4500__auto___50520 < len__4499__auto___50519)){
args__4502__auto__.push((arguments[i__4500__auto___50520]));

var G__50521 = (i__4500__auto___50520 + (1));
i__4500__auto___50520 = G__50521;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq50518){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50518));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50523 = arguments.length;
var i__4500__auto___50524 = (0);
while(true){
if((i__4500__auto___50524 < len__4499__auto___50523)){
args__4502__auto__.push((arguments[i__4500__auto___50524]));

var G__50525 = (i__4500__auto___50524 + (1));
i__4500__auto___50524 = G__50525;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq50522){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50522));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50527 = arguments.length;
var i__4500__auto___50528 = (0);
while(true){
if((i__4500__auto___50528 < len__4499__auto___50527)){
args__4502__auto__.push((arguments[i__4500__auto___50528]));

var G__50529 = (i__4500__auto___50528 + (1));
i__4500__auto___50528 = G__50529;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq50526){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50526));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50531 = arguments.length;
var i__4500__auto___50532 = (0);
while(true){
if((i__4500__auto___50532 < len__4499__auto___50531)){
args__4502__auto__.push((arguments[i__4500__auto___50532]));

var G__50533 = (i__4500__auto___50532 + (1));
i__4500__auto___50532 = G__50533;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq50530){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50530));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50535 = arguments.length;
var i__4500__auto___50536 = (0);
while(true){
if((i__4500__auto___50536 < len__4499__auto___50535)){
args__4502__auto__.push((arguments[i__4500__auto___50536]));

var G__50537 = (i__4500__auto___50536 + (1));
i__4500__auto___50536 = G__50537;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq50534){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50534));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50539 = arguments.length;
var i__4500__auto___50540 = (0);
while(true){
if((i__4500__auto___50540 < len__4499__auto___50539)){
args__4502__auto__.push((arguments[i__4500__auto___50540]));

var G__50541 = (i__4500__auto___50540 + (1));
i__4500__auto___50540 = G__50541;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq50538){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50538));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50543 = arguments.length;
var i__4500__auto___50544 = (0);
while(true){
if((i__4500__auto___50544 < len__4499__auto___50543)){
args__4502__auto__.push((arguments[i__4500__auto___50544]));

var G__50545 = (i__4500__auto___50544 + (1));
i__4500__auto___50544 = G__50545;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq50542){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50542));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50547 = arguments.length;
var i__4500__auto___50548 = (0);
while(true){
if((i__4500__auto___50548 < len__4499__auto___50547)){
args__4502__auto__.push((arguments[i__4500__auto___50548]));

var G__50549 = (i__4500__auto___50548 + (1));
i__4500__auto___50548 = G__50549;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq50546){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50546));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50551 = arguments.length;
var i__4500__auto___50552 = (0);
while(true){
if((i__4500__auto___50552 < len__4499__auto___50551)){
args__4502__auto__.push((arguments[i__4500__auto___50552]));

var G__50553 = (i__4500__auto___50552 + (1));
i__4500__auto___50552 = G__50553;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq50550){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50550));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50555 = arguments.length;
var i__4500__auto___50556 = (0);
while(true){
if((i__4500__auto___50556 < len__4499__auto___50555)){
args__4502__auto__.push((arguments[i__4500__auto___50556]));

var G__50557 = (i__4500__auto___50556 + (1));
i__4500__auto___50556 = G__50557;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq50554){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50554));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50559 = arguments.length;
var i__4500__auto___50560 = (0);
while(true){
if((i__4500__auto___50560 < len__4499__auto___50559)){
args__4502__auto__.push((arguments[i__4500__auto___50560]));

var G__50561 = (i__4500__auto___50560 + (1));
i__4500__auto___50560 = G__50561;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq50558){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50558));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50563 = arguments.length;
var i__4500__auto___50564 = (0);
while(true){
if((i__4500__auto___50564 < len__4499__auto___50563)){
args__4502__auto__.push((arguments[i__4500__auto___50564]));

var G__50565 = (i__4500__auto___50564 + (1));
i__4500__auto___50564 = G__50565;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq50562){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50562));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50567 = arguments.length;
var i__4500__auto___50568 = (0);
while(true){
if((i__4500__auto___50568 < len__4499__auto___50567)){
args__4502__auto__.push((arguments[i__4500__auto___50568]));

var G__50569 = (i__4500__auto___50568 + (1));
i__4500__auto___50568 = G__50569;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq50566){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50566));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50571 = arguments.length;
var i__4500__auto___50572 = (0);
while(true){
if((i__4500__auto___50572 < len__4499__auto___50571)){
args__4502__auto__.push((arguments[i__4500__auto___50572]));

var G__50573 = (i__4500__auto___50572 + (1));
i__4500__auto___50572 = G__50573;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq50570){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50570));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50575 = arguments.length;
var i__4500__auto___50576 = (0);
while(true){
if((i__4500__auto___50576 < len__4499__auto___50575)){
args__4502__auto__.push((arguments[i__4500__auto___50576]));

var G__50577 = (i__4500__auto___50576 + (1));
i__4500__auto___50576 = G__50577;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq50574){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50574));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50579 = arguments.length;
var i__4500__auto___50580 = (0);
while(true){
if((i__4500__auto___50580 < len__4499__auto___50579)){
args__4502__auto__.push((arguments[i__4500__auto___50580]));

var G__50581 = (i__4500__auto___50580 + (1));
i__4500__auto___50580 = G__50581;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq50578){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50578));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50583 = arguments.length;
var i__4500__auto___50584 = (0);
while(true){
if((i__4500__auto___50584 < len__4499__auto___50583)){
args__4502__auto__.push((arguments[i__4500__auto___50584]));

var G__50585 = (i__4500__auto___50584 + (1));
i__4500__auto___50584 = G__50585;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq50582){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50582));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50587 = arguments.length;
var i__4500__auto___50588 = (0);
while(true){
if((i__4500__auto___50588 < len__4499__auto___50587)){
args__4502__auto__.push((arguments[i__4500__auto___50588]));

var G__50589 = (i__4500__auto___50588 + (1));
i__4500__auto___50588 = G__50589;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq50586){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50586));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50591 = arguments.length;
var i__4500__auto___50592 = (0);
while(true){
if((i__4500__auto___50592 < len__4499__auto___50591)){
args__4502__auto__.push((arguments[i__4500__auto___50592]));

var G__50593 = (i__4500__auto___50592 + (1));
i__4500__auto___50592 = G__50593;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq50590){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50590));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50595 = arguments.length;
var i__4500__auto___50596 = (0);
while(true){
if((i__4500__auto___50596 < len__4499__auto___50595)){
args__4502__auto__.push((arguments[i__4500__auto___50596]));

var G__50597 = (i__4500__auto___50596 + (1));
i__4500__auto___50596 = G__50597;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq50594){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50594));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50599 = arguments.length;
var i__4500__auto___50600 = (0);
while(true){
if((i__4500__auto___50600 < len__4499__auto___50599)){
args__4502__auto__.push((arguments[i__4500__auto___50600]));

var G__50601 = (i__4500__auto___50600 + (1));
i__4500__auto___50600 = G__50601;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq50598){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50598));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50603 = arguments.length;
var i__4500__auto___50604 = (0);
while(true){
if((i__4500__auto___50604 < len__4499__auto___50603)){
args__4502__auto__.push((arguments[i__4500__auto___50604]));

var G__50605 = (i__4500__auto___50604 + (1));
i__4500__auto___50604 = G__50605;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq50602){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50602));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50607 = arguments.length;
var i__4500__auto___50608 = (0);
while(true){
if((i__4500__auto___50608 < len__4499__auto___50607)){
args__4502__auto__.push((arguments[i__4500__auto___50608]));

var G__50609 = (i__4500__auto___50608 + (1));
i__4500__auto___50608 = G__50609;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq50606){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50606));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50611 = arguments.length;
var i__4500__auto___50612 = (0);
while(true){
if((i__4500__auto___50612 < len__4499__auto___50611)){
args__4502__auto__.push((arguments[i__4500__auto___50612]));

var G__50613 = (i__4500__auto___50612 + (1));
i__4500__auto___50612 = G__50613;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq50610){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50610));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___50615 = arguments.length;
var i__4500__auto___50616 = (0);
while(true){
if((i__4500__auto___50616 < len__4499__auto___50615)){
args__4502__auto__.push((arguments[i__4500__auto___50616]));

var G__50617 = (i__4500__auto___50616 + (1));
i__4500__auto___50616 = G__50617;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq50614){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50614));
});


//# sourceMappingURL=core.js.map?rel=1600694547109
