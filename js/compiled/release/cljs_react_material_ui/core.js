// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('sablono.util');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__5809){
var vec__5810 = p__5809;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5810,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5810,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(k) : t.call(null,k)),v], null);
});
return clojure.walk.postwalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(transform,x));
} else {
return x;
}
}),coll);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,sablono.util.camel_case_keys);
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var G__5814 = arguments.length;
switch (G__5814) {
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
var first_arg = cljs.core.first(args);
var args__$1 = ((((cljs.core.map_QMARK_(first_arg)) || ((first_arg == null))))?args:cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,react_class,(function (){var G__5815 = cljs.core.first(args__$1);
return (cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.cljs$core$IFn$_invoke$arity$1(G__5815) : cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,G__5815));
})(),cljs.core.rest(args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var G__5818 = arguments.length;
switch (G__5818) {
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
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs.core.clj__GT_js(cljs_react_material_ui.core.transform_keys(sablono.util.camel_case,raw_theme)));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][cljs.core.name(sablono.util.camel_case(color_key))]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5822 = arguments.length;
var i__4500__auto___5823 = (0);
while(true){
if((i__4500__auto___5823 < len__4499__auto___5822)){
args__4502__auto__.push((arguments[i__4500__auto___5823]));

var G__5824 = (i__4500__auto___5823 + (1));
i__4500__auto___5823 = G__5824;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((function (){var G__5821 = (MaterialUI["List"]);
return (cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$1 ? cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$1(G__5821) : cljs_react_material_ui.core.make_selectable.call(null,G__5821));
})(),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq5820){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5820));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5826 = arguments.length;
var i__4500__auto___5827 = (0);
while(true){
if((i__4500__auto___5827 < len__4499__auto___5826)){
args__4502__auto__.push((arguments[i__4500__auto___5827]));

var G__5828 = (i__4500__auto___5827 + (1));
i__4500__auto___5827 = G__5828;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("AppBar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args));
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq5825){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5825));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5830 = arguments.length;
var i__4500__auto___5831 = (0);
while(true){
if((i__4500__auto___5831 < len__4499__auto___5830)){
args__4502__auto__.push((arguments[i__4500__auto___5831]));

var G__5832 = (i__4500__auto___5831 + (1));
i__4500__auto___5831 = G__5832;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("AutoComplete",args) : cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args));
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq5829){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5829));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5834 = arguments.length;
var i__4500__auto___5835 = (0);
while(true){
if((i__4500__auto___5835 < len__4499__auto___5834)){
args__4502__auto__.push((arguments[i__4500__auto___5835]));

var G__5836 = (i__4500__auto___5835 + (1));
i__4500__auto___5835 = G__5836;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Avatar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args));
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq5833){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5833));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5838 = arguments.length;
var i__4500__auto___5839 = (0);
while(true){
if((i__4500__auto___5839 < len__4499__auto___5838)){
args__4502__auto__.push((arguments[i__4500__auto___5839]));

var G__5840 = (i__4500__auto___5839 + (1));
i__4500__auto___5839 = G__5840;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Badge",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args));
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq5837){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5837));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5842 = arguments.length;
var i__4500__auto___5843 = (0);
while(true){
if((i__4500__auto___5843 < len__4499__auto___5842)){
args__4502__auto__.push((arguments[i__4500__auto___5843]));

var G__5844 = (i__4500__auto___5843 + (1));
i__4500__auto___5843 = G__5844;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("BottomNavigation",args) : cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args));
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq5841){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5841));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5846 = arguments.length;
var i__4500__auto___5847 = (0);
while(true){
if((i__4500__auto___5847 < len__4499__auto___5846)){
args__4502__auto__.push((arguments[i__4500__auto___5847]));

var G__5848 = (i__4500__auto___5847 + (1));
i__4500__auto___5847 = G__5848;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("BottomNavigationItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args));
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq5845){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5845));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5850 = arguments.length;
var i__4500__auto___5851 = (0);
while(true){
if((i__4500__auto___5851 < len__4499__auto___5850)){
args__4502__auto__.push((arguments[i__4500__auto___5851]));

var G__5852 = (i__4500__auto___5851 + (1));
i__4500__auto___5851 = G__5852;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Card",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Card",args));
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq5849){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5849));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5854 = arguments.length;
var i__4500__auto___5855 = (0);
while(true){
if((i__4500__auto___5855 < len__4499__auto___5854)){
args__4502__auto__.push((arguments[i__4500__auto___5855]));

var G__5856 = (i__4500__auto___5855 + (1));
i__4500__auto___5855 = G__5856;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardActions",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args));
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq5853){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5853));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5858 = arguments.length;
var i__4500__auto___5859 = (0);
while(true){
if((i__4500__auto___5859 < len__4499__auto___5858)){
args__4502__auto__.push((arguments[i__4500__auto___5859]));

var G__5860 = (i__4500__auto___5859 + (1));
i__4500__auto___5859 = G__5860;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardHeader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args));
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq5857){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5857));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5862 = arguments.length;
var i__4500__auto___5863 = (0);
while(true){
if((i__4500__auto___5863 < len__4499__auto___5862)){
args__4502__auto__.push((arguments[i__4500__auto___5863]));

var G__5864 = (i__4500__auto___5863 + (1));
i__4500__auto___5863 = G__5864;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardMedia",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args));
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq5861){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5861));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5866 = arguments.length;
var i__4500__auto___5867 = (0);
while(true){
if((i__4500__auto___5867 < len__4499__auto___5866)){
args__4502__auto__.push((arguments[i__4500__auto___5867]));

var G__5868 = (i__4500__auto___5867 + (1));
i__4500__auto___5867 = G__5868;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardTitle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args));
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq5865){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5865));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5870 = arguments.length;
var i__4500__auto___5871 = (0);
while(true){
if((i__4500__auto___5871 < len__4499__auto___5870)){
args__4502__auto__.push((arguments[i__4500__auto___5871]));

var G__5872 = (i__4500__auto___5871 + (1));
i__4500__auto___5871 = G__5872;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CardText",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args));
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq5869){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5869));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5874 = arguments.length;
var i__4500__auto___5875 = (0);
while(true){
if((i__4500__auto___5875 < len__4499__auto___5874)){
args__4502__auto__.push((arguments[i__4500__auto___5875]));

var G__5876 = (i__4500__auto___5875 + (1));
i__4500__auto___5875 = G__5876;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Checkbox",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args));
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq5873){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5873));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5878 = arguments.length;
var i__4500__auto___5879 = (0);
while(true){
if((i__4500__auto___5879 < len__4499__auto___5878)){
args__4502__auto__.push((arguments[i__4500__auto___5879]));

var G__5880 = (i__4500__auto___5879 + (1));
i__4500__auto___5879 = G__5880;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Chip",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args));
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq5877){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5877));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5882 = arguments.length;
var i__4500__auto___5883 = (0);
while(true){
if((i__4500__auto___5883 < len__4499__auto___5882)){
args__4502__auto__.push((arguments[i__4500__auto___5883]));

var G__5884 = (i__4500__auto___5883 + (1));
i__4500__auto___5883 = G__5884;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("CircularProgress",args) : cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args));
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq5881){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5881));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5886 = arguments.length;
var i__4500__auto___5887 = (0);
while(true){
if((i__4500__auto___5887 < len__4499__auto___5886)){
args__4502__auto__.push((arguments[i__4500__auto___5887]));

var G__5888 = (i__4500__auto___5887 + (1));
i__4500__auto___5887 = G__5888;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DatePicker",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args));
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq5885){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5885));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5890 = arguments.length;
var i__4500__auto___5891 = (0);
while(true){
if((i__4500__auto___5891 < len__4499__auto___5890)){
args__4502__auto__.push((arguments[i__4500__auto___5891]));

var G__5892 = (i__4500__auto___5891 + (1));
i__4500__auto___5891 = G__5892;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Dialog",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args));
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq5889){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5889));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5894 = arguments.length;
var i__4500__auto___5895 = (0);
while(true){
if((i__4500__auto___5895 < len__4499__auto___5894)){
args__4502__auto__.push((arguments[i__4500__auto___5895]));

var G__5896 = (i__4500__auto___5895 + (1));
i__4500__auto___5895 = G__5896;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Divider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args));
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq5893){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5893));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5898 = arguments.length;
var i__4500__auto___5899 = (0);
while(true){
if((i__4500__auto___5899 < len__4499__auto___5898)){
args__4502__auto__.push((arguments[i__4500__auto___5899]));

var G__5900 = (i__4500__auto___5899 + (1));
i__4500__auto___5899 = G__5900;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Drawer",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args));
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq5897){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5897));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5902 = arguments.length;
var i__4500__auto___5903 = (0);
while(true){
if((i__4500__auto___5903 < len__4499__auto___5902)){
args__4502__auto__.push((arguments[i__4500__auto___5903]));

var G__5904 = (i__4500__auto___5903 + (1));
i__4500__auto___5903 = G__5904;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("DropDownMenu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args));
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq5901){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5901));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5906 = arguments.length;
var i__4500__auto___5907 = (0);
while(true){
if((i__4500__auto___5907 < len__4499__auto___5906)){
args__4502__auto__.push((arguments[i__4500__auto___5907]));

var G__5908 = (i__4500__auto___5907 + (1));
i__4500__auto___5907 = G__5908;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FlatButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args));
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq5905){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5905));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5910 = arguments.length;
var i__4500__auto___5911 = (0);
while(true){
if((i__4500__auto___5911 < len__4499__auto___5910)){
args__4502__auto__.push((arguments[i__4500__auto___5911]));

var G__5912 = (i__4500__auto___5911 + (1));
i__4500__auto___5911 = G__5912;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FloatingActionButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args));
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq5909){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5909));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5914 = arguments.length;
var i__4500__auto___5915 = (0);
while(true){
if((i__4500__auto___5915 < len__4499__auto___5914)){
args__4502__auto__.push((arguments[i__4500__auto___5915]));

var G__5916 = (i__4500__auto___5915 + (1));
i__4500__auto___5915 = G__5916;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("FontIcon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args));
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq5913){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5913));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5918 = arguments.length;
var i__4500__auto___5919 = (0);
while(true){
if((i__4500__auto___5919 < len__4499__auto___5918)){
args__4502__auto__.push((arguments[i__4500__auto___5919]));

var G__5920 = (i__4500__auto___5919 + (1));
i__4500__auto___5919 = G__5920;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridList",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args));
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq5917){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5917));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5922 = arguments.length;
var i__4500__auto___5923 = (0);
while(true){
if((i__4500__auto___5923 < len__4499__auto___5922)){
args__4502__auto__.push((arguments[i__4500__auto___5923]));

var G__5924 = (i__4500__auto___5923 + (1));
i__4500__auto___5923 = G__5924;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("GridTile",args) : cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args));
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq5921){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5921));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5926 = arguments.length;
var i__4500__auto___5927 = (0);
while(true){
if((i__4500__auto___5927 < len__4499__auto___5926)){
args__4502__auto__.push((arguments[i__4500__auto___5927]));

var G__5928 = (i__4500__auto___5927 + (1));
i__4500__auto___5927 = G__5928;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("IconButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args));
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq5925){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5925));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5930 = arguments.length;
var i__4500__auto___5931 = (0);
while(true){
if((i__4500__auto___5931 < len__4499__auto___5930)){
args__4502__auto__.push((arguments[i__4500__auto___5931]));

var G__5932 = (i__4500__auto___5931 + (1));
i__4500__auto___5931 = G__5932;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("IconMenu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args));
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq5929){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5929));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5934 = arguments.length;
var i__4500__auto___5935 = (0);
while(true){
if((i__4500__auto___5935 < len__4499__auto___5934)){
args__4502__auto__.push((arguments[i__4500__auto___5935]));

var G__5936 = (i__4500__auto___5935 + (1));
i__4500__auto___5935 = G__5936;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("LinearProgress",args) : cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args));
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq5933){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5933));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5938 = arguments.length;
var i__4500__auto___5939 = (0);
while(true){
if((i__4500__auto___5939 < len__4499__auto___5938)){
args__4502__auto__.push((arguments[i__4500__auto___5939]));

var G__5940 = (i__4500__auto___5939 + (1));
i__4500__auto___5939 = G__5940;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("List",args) : cljs_react_material_ui.core.create_mui_el.call(null,"List",args));
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq5937){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5937));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5942 = arguments.length;
var i__4500__auto___5943 = (0);
while(true){
if((i__4500__auto___5943 < len__4499__auto___5942)){
args__4502__auto__.push((arguments[i__4500__auto___5943]));

var G__5944 = (i__4500__auto___5943 + (1));
i__4500__auto___5943 = G__5944;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ListItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args));
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq5941){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5941));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5946 = arguments.length;
var i__4500__auto___5947 = (0);
while(true){
if((i__4500__auto___5947 < len__4499__auto___5946)){
args__4502__auto__.push((arguments[i__4500__auto___5947]));

var G__5948 = (i__4500__auto___5947 + (1));
i__4500__auto___5947 = G__5948;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Menu",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args));
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq5945){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5945));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5950 = arguments.length;
var i__4500__auto___5951 = (0);
while(true){
if((i__4500__auto___5951 < len__4499__auto___5950)){
args__4502__auto__.push((arguments[i__4500__auto___5951]));

var G__5952 = (i__4500__auto___5951 + (1));
i__4500__auto___5951 = G__5952;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MenuItem",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args));
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq5949){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5949));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5954 = arguments.length;
var i__4500__auto___5955 = (0);
while(true){
if((i__4500__auto___5955 < len__4499__auto___5954)){
args__4502__auto__.push((arguments[i__4500__auto___5955]));

var G__5956 = (i__4500__auto___5955 + (1));
i__4500__auto___5955 = G__5956;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("MuiThemeProvider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args));
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq5953){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5953));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5958 = arguments.length;
var i__4500__auto___5959 = (0);
while(true){
if((i__4500__auto___5959 < len__4499__auto___5958)){
args__4502__auto__.push((arguments[i__4500__auto___5959]));

var G__5960 = (i__4500__auto___5959 + (1));
i__4500__auto___5959 = G__5960;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Paper",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args));
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq5957){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5957));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5962 = arguments.length;
var i__4500__auto___5963 = (0);
while(true){
if((i__4500__auto___5963 < len__4499__auto___5962)){
args__4502__auto__.push((arguments[i__4500__auto___5963]));

var G__5964 = (i__4500__auto___5963 + (1));
i__4500__auto___5963 = G__5964;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Popover",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args));
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq5961){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5961));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5966 = arguments.length;
var i__4500__auto___5967 = (0);
while(true){
if((i__4500__auto___5967 < len__4499__auto___5966)){
args__4502__auto__.push((arguments[i__4500__auto___5967]));

var G__5968 = (i__4500__auto___5967 + (1));
i__4500__auto___5967 = G__5968;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RadioButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args));
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq5965){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5965));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5970 = arguments.length;
var i__4500__auto___5971 = (0);
while(true){
if((i__4500__auto___5971 < len__4499__auto___5970)){
args__4502__auto__.push((arguments[i__4500__auto___5971]));

var G__5972 = (i__4500__auto___5971 + (1));
i__4500__auto___5971 = G__5972;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RadioButtonGroup",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args));
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq5969){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5969));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5974 = arguments.length;
var i__4500__auto___5975 = (0);
while(true){
if((i__4500__auto___5975 < len__4499__auto___5974)){
args__4502__auto__.push((arguments[i__4500__auto___5975]));

var G__5976 = (i__4500__auto___5975 + (1));
i__4500__auto___5975 = G__5976;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RaisedButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args));
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq5973){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5973));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5978 = arguments.length;
var i__4500__auto___5979 = (0);
while(true){
if((i__4500__auto___5979 < len__4499__auto___5978)){
args__4502__auto__.push((arguments[i__4500__auto___5979]));

var G__5980 = (i__4500__auto___5979 + (1));
i__4500__auto___5979 = G__5980;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("RefreshIndicator",args) : cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args));
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq5977){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5977));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5982 = arguments.length;
var i__4500__auto___5983 = (0);
while(true){
if((i__4500__auto___5983 < len__4499__auto___5982)){
args__4502__auto__.push((arguments[i__4500__auto___5983]));

var G__5984 = (i__4500__auto___5983 + (1));
i__4500__auto___5983 = G__5984;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SelectField",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args));
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq5981){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5981));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5986 = arguments.length;
var i__4500__auto___5987 = (0);
while(true){
if((i__4500__auto___5987 < len__4499__auto___5986)){
args__4502__auto__.push((arguments[i__4500__auto___5987]));

var G__5988 = (i__4500__auto___5987 + (1));
i__4500__auto___5987 = G__5988;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Slider",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args));
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq5985){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5985));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5990 = arguments.length;
var i__4500__auto___5991 = (0);
while(true){
if((i__4500__auto___5991 < len__4499__auto___5990)){
args__4502__auto__.push((arguments[i__4500__auto___5991]));

var G__5992 = (i__4500__auto___5991 + (1));
i__4500__auto___5991 = G__5992;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Subheader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args));
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq5989){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5989));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5994 = arguments.length;
var i__4500__auto___5995 = (0);
while(true){
if((i__4500__auto___5995 < len__4499__auto___5994)){
args__4502__auto__.push((arguments[i__4500__auto___5995]));

var G__5996 = (i__4500__auto___5995 + (1));
i__4500__auto___5995 = G__5996;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("SvgIcon",args) : cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args));
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq5993){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5993));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5998 = arguments.length;
var i__4500__auto___5999 = (0);
while(true){
if((i__4500__auto___5999 < len__4499__auto___5998)){
args__4502__auto__.push((arguments[i__4500__auto___5999]));

var G__6000 = (i__4500__auto___5999 + (1));
i__4500__auto___5999 = G__6000;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Step",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Step",args));
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq5997){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5997));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6002 = arguments.length;
var i__4500__auto___6003 = (0);
while(true){
if((i__4500__auto___6003 < len__4499__auto___6002)){
args__4502__auto__.push((arguments[i__4500__auto___6003]));

var G__6004 = (i__4500__auto___6003 + (1));
i__4500__auto___6003 = G__6004;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepButton",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args));
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq6001){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6001));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6006 = arguments.length;
var i__4500__auto___6007 = (0);
while(true){
if((i__4500__auto___6007 < len__4499__auto___6006)){
args__4502__auto__.push((arguments[i__4500__auto___6007]));

var G__6008 = (i__4500__auto___6007 + (1));
i__4500__auto___6007 = G__6008;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepContent",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args));
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq6005){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6005));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6010 = arguments.length;
var i__4500__auto___6011 = (0);
while(true){
if((i__4500__auto___6011 < len__4499__auto___6010)){
args__4502__auto__.push((arguments[i__4500__auto___6011]));

var G__6012 = (i__4500__auto___6011 + (1));
i__4500__auto___6011 = G__6012;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("StepLabel",args) : cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args));
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq6009){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6009));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6014 = arguments.length;
var i__4500__auto___6015 = (0);
while(true){
if((i__4500__auto___6015 < len__4499__auto___6014)){
args__4502__auto__.push((arguments[i__4500__auto___6015]));

var G__6016 = (i__4500__auto___6015 + (1));
i__4500__auto___6015 = G__6016;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Stepper",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args));
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq6013){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6013));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6018 = arguments.length;
var i__4500__auto___6019 = (0);
while(true){
if((i__4500__auto___6019 < len__4499__auto___6018)){
args__4502__auto__.push((arguments[i__4500__auto___6019]));

var G__6020 = (i__4500__auto___6019 + (1));
i__4500__auto___6019 = G__6020;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Snackbar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args));
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq6017){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6017));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6022 = arguments.length;
var i__4500__auto___6023 = (0);
while(true){
if((i__4500__auto___6023 < len__4499__auto___6022)){
args__4502__auto__.push((arguments[i__4500__auto___6023]));

var G__6024 = (i__4500__auto___6023 + (1));
i__4500__auto___6023 = G__6024;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Tabs",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args));
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq6021){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6021));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6026 = arguments.length;
var i__4500__auto___6027 = (0);
while(true){
if((i__4500__auto___6027 < len__4499__auto___6026)){
args__4502__auto__.push((arguments[i__4500__auto___6027]));

var G__6028 = (i__4500__auto___6027 + (1));
i__4500__auto___6027 = G__6028;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Tab",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args));
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq6025){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6025));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6030 = arguments.length;
var i__4500__auto___6031 = (0);
while(true){
if((i__4500__auto___6031 < len__4499__auto___6030)){
args__4502__auto__.push((arguments[i__4500__auto___6031]));

var G__6032 = (i__4500__auto___6031 + (1));
i__4500__auto___6031 = G__6032;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Table",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Table",args));
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq6029){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6029));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6034 = arguments.length;
var i__4500__auto___6035 = (0);
while(true){
if((i__4500__auto___6035 < len__4499__auto___6034)){
args__4502__auto__.push((arguments[i__4500__auto___6035]));

var G__6036 = (i__4500__auto___6035 + (1));
i__4500__auto___6035 = G__6036;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableBody",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args));
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq6033){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6033));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6038 = arguments.length;
var i__4500__auto___6039 = (0);
while(true){
if((i__4500__auto___6039 < len__4499__auto___6038)){
args__4502__auto__.push((arguments[i__4500__auto___6039]));

var G__6040 = (i__4500__auto___6039 + (1));
i__4500__auto___6039 = G__6040;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableFooter",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args));
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq6037){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6037));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6042 = arguments.length;
var i__4500__auto___6043 = (0);
while(true){
if((i__4500__auto___6043 < len__4499__auto___6042)){
args__4502__auto__.push((arguments[i__4500__auto___6043]));

var G__6044 = (i__4500__auto___6043 + (1));
i__4500__auto___6043 = G__6044;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableHeader",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args));
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq6041){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6041));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6046 = arguments.length;
var i__4500__auto___6047 = (0);
while(true){
if((i__4500__auto___6047 < len__4499__auto___6046)){
args__4502__auto__.push((arguments[i__4500__auto___6047]));

var G__6048 = (i__4500__auto___6047 + (1));
i__4500__auto___6047 = G__6048;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableHeaderColumn",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args));
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq6045){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6045));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6050 = arguments.length;
var i__4500__auto___6051 = (0);
while(true){
if((i__4500__auto___6051 < len__4499__auto___6050)){
args__4502__auto__.push((arguments[i__4500__auto___6051]));

var G__6052 = (i__4500__auto___6051 + (1));
i__4500__auto___6051 = G__6052;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableRow",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args));
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq6049){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6049));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6054 = arguments.length;
var i__4500__auto___6055 = (0);
while(true){
if((i__4500__auto___6055 < len__4499__auto___6054)){
args__4502__auto__.push((arguments[i__4500__auto___6055]));

var G__6056 = (i__4500__auto___6055 + (1));
i__4500__auto___6055 = G__6056;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TableRowColumn",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args));
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq6053){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6053));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6058 = arguments.length;
var i__4500__auto___6059 = (0);
while(true){
if((i__4500__auto___6059 < len__4499__auto___6058)){
args__4502__auto__.push((arguments[i__4500__auto___6059]));

var G__6060 = (i__4500__auto___6059 + (1));
i__4500__auto___6059 = G__6060;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TextField",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args));
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq6057){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6057));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6062 = arguments.length;
var i__4500__auto___6063 = (0);
while(true){
if((i__4500__auto___6063 < len__4499__auto___6062)){
args__4502__auto__.push((arguments[i__4500__auto___6063]));

var G__6064 = (i__4500__auto___6063 + (1));
i__4500__auto___6063 = G__6064;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("TimePicker",args) : cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args));
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq6061){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6061));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6066 = arguments.length;
var i__4500__auto___6067 = (0);
while(true){
if((i__4500__auto___6067 < len__4499__auto___6066)){
args__4502__auto__.push((arguments[i__4500__auto___6067]));

var G__6068 = (i__4500__auto___6067 + (1));
i__4500__auto___6067 = G__6068;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Toggle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args));
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq6065){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6065));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6070 = arguments.length;
var i__4500__auto___6071 = (0);
while(true){
if((i__4500__auto___6071 < len__4499__auto___6070)){
args__4502__auto__.push((arguments[i__4500__auto___6071]));

var G__6072 = (i__4500__auto___6071 + (1));
i__4500__auto___6071 = G__6072;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("Toolbar",args) : cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args));
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq6069){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6069));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6074 = arguments.length;
var i__4500__auto___6075 = (0);
while(true){
if((i__4500__auto___6075 < len__4499__auto___6074)){
args__4502__auto__.push((arguments[i__4500__auto___6075]));

var G__6076 = (i__4500__auto___6075 + (1));
i__4500__auto___6075 = G__6076;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarGroup",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args));
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq6073){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6073));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6078 = arguments.length;
var i__4500__auto___6079 = (0);
while(true){
if((i__4500__auto___6079 < len__4499__auto___6078)){
args__4502__auto__.push((arguments[i__4500__auto___6079]));

var G__6080 = (i__4500__auto___6079 + (1));
i__4500__auto___6079 = G__6080;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarSeparator",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args));
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq6077){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6077));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___6082 = arguments.length;
var i__4500__auto___6083 = (0);
while(true){
if((i__4500__auto___6083 < len__4499__auto___6082)){
args__4502__auto__.push((arguments[i__4500__auto___6083]));

var G__6084 = (i__4500__auto___6083 + (1));
i__4500__auto___6083 = G__6084;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2 ? cljs_react_material_ui.core.create_mui_el.cljs$core$IFn$_invoke$arity$2("ToolbarTitle",args) : cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args));
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq6081){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6081));
});

