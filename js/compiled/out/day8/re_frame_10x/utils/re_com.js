// Compiled by ClojureScript 1.10.238 {}
goog.provide('day8.re_frame_10x.utils.re_com');
goog.require('cljs.core');
goog.require('mranderson048.reagent.v0v7v0.reagent.ratom');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.common_styles');
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
day8.re_frame_10x.utils.re_com.px = (function day8$re_frame_10x$utils$re_com$px(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62567 = arguments.length;
var i__4500__auto___62568 = (0);
while(true){
if((i__4500__auto___62568 < len__4499__auto___62567)){
args__4502__auto__.push((arguments[i__4500__auto___62568]));

var G__62569 = (i__4500__auto___62568 + (1));
i__4500__auto___62568 = G__62569;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
});

day8.re_frame_10x.utils.re_com.px.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.px.cljs$lang$applyTo = (function (seq62565){
var G__62566 = cljs.core.first.call(null,seq62565);
var seq62565__$1 = cljs.core.next.call(null,seq62565);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62566,seq62565__$1);
});

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
day8.re_frame_10x.utils.re_com.deref_or_value_peek = (function day8$re_frame_10x$utils$re_com$deref_or_value_peek(val_or_atom){
if(((!((val_or_atom == null)))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof mranderson048.reagent.v0v7v0.reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof mranderson048.reagent.v0v7v0.reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof mranderson048.reagent.v0v7v0.reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof mranderson048.reagent.v0v7v0.reagent.ratom.Track)){
return cljs.core.deref.call(null,val_or_atom);
} else {
if((val_or_atom instanceof mranderson048.reagent.v0v7v0.reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
day8.re_frame_10x.utils.re_com.deref_or_value = (function day8$re_frame_10x$utils$re_com$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
day8.re_frame_10x.utils.re_com.deep_merge = (function day8$re_frame_10x$utils$re_com$deep_merge(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62573 = arguments.length;
var i__4500__auto___62574 = (0);
while(true){
if((i__4500__auto___62574 < len__4499__auto___62573)){
args__4502__auto__.push((arguments[i__4500__auto___62574]));

var G__62575 = (i__4500__auto___62574 + (1));
i__4500__auto___62574 = G__62575;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,day8.re_frame_10x.utils.re_com.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

day8.re_frame_10x.utils.re_com.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.deep_merge.cljs$lang$applyTo = (function (seq62572){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62572));
});

/**
 * A cross-browser helper function to output flex-flow with all it's potential browser prefixes
 */
day8.re_frame_10x.utils.re_com.flex_flow_style = (function day8$re_frame_10x$utils$re_com$flex_flow_style(flex_flow){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex-flow","-webkit-flex-flow",667076810),flex_flow,new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),flex_flow], null);
});
/**
 * Determines the value for the 'flex' attribute (which has grow, shrink and basis), based on the :size parameter.
 * IMPORTANT: The term 'size' means width of the item in the case of flex-direction 'row' OR height of the item in the case of flex-direction 'column'.
 * Flex property explanation:
 *  - grow    Integer ratio (used with other siblings) to determined how a flex item grows it's size if there is extra space to distribute. 0 for no growing.
 *  - shrink  Integer ratio (used with other siblings) to determined how a flex item shrinks it's size if space needs to be removed. 0 for no shrinking.
 *  - basis   Initial size (width, actually) of item before any growing or shrinking. Can be any size value, e.g. 60%, 100px, auto
 *            Note: auto will cause the initial size to be calculated to take up as much space as possible, in conjunction with it's siblings :flex settings.
 * Supported values:
 *  - initial            '0 1 auto'  - Use item's width/height for dimensions (or content dimensions if w/h not specifed). Never grow. Shrink (to min-size) if necessary.
 *                                     Good for creating boxes with fixed maximum size, but that can shrink to a fixed smaller size (min-width/height) if space becomes tight.
 *                                     NOTE: When using initial, you should also set a width/height value (depending on flex-direction) to specify it's default size
 *                                           and an optional min-width/height value to specify the size it can shrink to.
 *  - auto               '1 1 auto'  - Use item's width/height for dimensions. Grow if necessary. Shrink (to min-size) if necessary.
 *                                     Good for creating really flexible boxes that will gobble as much available space as they are allowed or shrink as much as they are forced to.
 *  - none               '0 0 auto'  - Use item's width/height for dimensions (or content dimensions if not specifed). Never grow. Never shrink.
 *                                     Good for creating rigid boxes that stick to their width/height if specified, otherwise their content size.
 *  - 100px              '0 0 100px' - Non flexible 100px size (in the flex direction) box.
 *                                     Good for fixed headers/footers and side bars of an exact size.
 *  - 60%                '60 1 0px'  - Set the item's size (it's width/height depending on flex-direction) to be 60% of the parent container's width/height.
 *                                     NOTE: If you use this, then all siblings with percentage values must add up to 100%.
 *  - 60                 '60 1 0px'  - Same as percentage above.
 *  - grow shrink basis  'grow shrink basis' - If none of the above common valaues above meet your needs, this gives you precise control.
 * If number of words is not 1 or 3, an exception is thrown.
 * Reference: http://www.w3.org/TR/css3-flexbox/#flexibility
 * Diagram:   http://www.w3.org/TR/css3-flexbox/#flex-container
 * Regex101 testing: ^(initial|auto|none)|(\d+)(px|%|em)|(\d+)\w(\d+)\w(.*) - remove double backslashes
 */
day8.re_frame_10x.utils.re_com.flex_child_style = (function day8$re_frame_10x$utils$re_com$flex_child_style(size){
var split_size = clojure.string.split.call(null,clojure.string.trim.call(null,size),/\s+/);
var split_count = cljs.core.count.call(null,split_size);
var _ = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(3),null], null), null),split_count))?null:(function(){throw (new Error(["Assert failed: ","Must pass either 1 or 3 words to flex-child-style","\n","(contains? #{1 3} split-count)"].join('')))})());
var size_only = ((cljs.core._EQ_.call(null,split_count,(1)))?cljs.core.first.call(null,split_size):null);
var split_size_only = (cljs.core.truth_(size_only)?clojure.string.split.call(null,size_only,/(\d+)(.*)/):null);
var vec__62576 = (cljs.core.truth_(size_only)?split_size_only:null);
var ___$1 = cljs.core.nth.call(null,vec__62576,(0),null);
var num = cljs.core.nth.call(null,vec__62576,(1),null);
var units = cljs.core.nth.call(null,vec__62576,(2),null);
var pass_through_QMARK_ = (num == null);
var grow_ratio_QMARK_ = ((cljs.core._EQ_.call(null,units,"%")) || (cljs.core._EQ_.call(null,units,"")) || ((units == null)));
var grow = ((grow_ratio_QMARK_)?num:"0");
var shrink = ((grow_ratio_QMARK_)?"1":"0");
var basis = ((grow_ratio_QMARK_)?"0px":size);
var flex = (cljs.core.truth_((function (){var and__3911__auto__ = size_only;
if(cljs.core.truth_(and__3911__auto__)){
return !(pass_through_QMARK_);
} else {
return and__3911__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(grow)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shrink)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(basis)].join(''):size);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex","-webkit-flex",-1736517621),flex,new cljs.core.Keyword(null,"flex","flex",-1425124628),flex], null);
});
/**
 * Determines the value for the flex 'justify-content' attribute.
 * This parameter determines how children are aligned along the main axis.
 * The justify parameter is a keyword.
 * Reference: http://www.w3.org/TR/css3-flexbox/#justify-content-property
 */
day8.re_frame_10x.utils.re_com.justify_style = (function day8$re_frame_10x$utils$re_com$justify_style(justify){
var js = (function (){var G__62579 = justify;
var G__62579__$1 = (((G__62579 instanceof cljs.core.Keyword))?G__62579.fqn:null);
switch (G__62579__$1) {
case "start":
return "flex-start";

break;
case "end":
return "flex-end";

break;
case "center":
return "center";

break;
case "between":
return "space-between";

break;
case "around":
return "space-around";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62579__$1)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-justify-content","-webkit-justify-content",205818059),js,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),js], null);
});
/**
 * Determines the value for the flex align type attributes.
 * This parameter determines how children are aligned on the cross axis.
 * The justify parameter is a keyword.
 * Reference: http://www.w3.org/TR/css3-flexbox/#align-items-property
 */
day8.re_frame_10x.utils.re_com.align_style = (function day8$re_frame_10x$utils$re_com$align_style(attribute,align){
var attribute_wk = cljs.core.keyword.call(null,["-webkit-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,attribute))].join(''));
var as = (function (){var G__62581 = align;
var G__62581__$1 = (((G__62581 instanceof cljs.core.Keyword))?G__62581.fqn:null);
switch (G__62581__$1) {
case "start":
return "flex-start";

break;
case "end":
return "flex-end";

break;
case "center":
return "center";

break;
case "baseline":
return "baseline";

break;
case "stretch":
return "stretch";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62581__$1)].join('')));

}
})();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute_wk,as,attribute,as]);
});
/**
 * Returns a component which produces a gap between children in a v-box/h-box along the main axis
 */
day8.re_frame_10x.utils.re_com.gap_f = (function day8$re_frame_10x$utils$re_com$gap_f(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62587 = arguments.length;
var i__4500__auto___62588 = (0);
while(true){
if((i__4500__auto___62588 < len__4499__auto___62587)){
args__4502__auto__.push((arguments[i__4500__auto___62588]));

var G__62589 = (i__4500__auto___62588 + (1));
i__4500__auto___62588 = G__62589;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.gap_f.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.gap_f.cljs$core$IFn$_invoke$arity$variadic = (function (p__62584){
var map__62585 = p__62584;
var map__62585__$1 = ((((!((map__62585 == null)))?(((((map__62585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62585):map__62585);
var args = map__62585__$1;
var size = cljs.core.get.call(null,map__62585__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var width = cljs.core.get.call(null,map__62585__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__62585__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var class$ = cljs.core.get.call(null,map__62585__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__62585__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__62585__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var s = cljs.core.merge.call(null,(cljs.core.truth_(size)?day8.re_frame_10x.utils.re_com.flex_child_style.call(null,size):null),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),style);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-gap ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null);
});

day8.re_frame_10x.utils.re_com.gap_f.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.gap_f.cljs$lang$applyTo = (function (seq62583){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62583));
});

/**
 * Returns hiccup which produces a horizontal box.
 * It's primary role is to act as a container for components and lays it's children from left to right.
 * By default, it also acts as a child under it's parent
 */
day8.re_frame_10x.utils.re_com.h_box = (function day8$re_frame_10x$utils$re_com$h_box(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62594 = arguments.length;
var i__4500__auto___62595 = (0);
while(true){
if((i__4500__auto___62595 < len__4499__auto___62594)){
args__4502__auto__.push((arguments[i__4500__auto___62595]));

var G__62596 = (i__4500__auto___62595 + (1));
i__4500__auto___62595 = G__62596;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.h_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.h_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__62591){
var map__62592 = p__62591;
var map__62592__$1 = ((((!((map__62592 == null)))?(((((map__62592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62592):map__62592);
var args = map__62592__$1;
var align_self = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var children = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var align = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var max_height = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var justify = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"start","start",-355208981));
var width = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var style = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var gap = cljs.core.get.call(null,map__62592__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var s = cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_flow_style.call(null,"row nowrap"),day8.re_frame_10x.utils.re_com.flex_child_style.call(null,size),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),day8.re_frame_10x.utils.re_com.justify_style.call(null,justify),day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),align),(cljs.core.truth_(align_self)?day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null):null),style);
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),gap,new cljs.core.Keyword(null,"width","width",-384071477),gap], null):null);
var children__$1 = (cljs.core.truth_(gap)?cljs.core.interpose.call(null,gap_form,cljs.core.filter.call(null,cljs.core.identity,children)):children);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-h-box display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null),children__$1);
});

day8.re_frame_10x.utils.re_com.h_box.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.h_box.cljs$lang$applyTo = (function (seq62590){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62590));
});

/**
 * Returns hiccup which produces a vertical box.
 * It's primary role is to act as a container for components and lays it's children from top to bottom.
 * By default, it also acts as a child under it's parent
 */
day8.re_frame_10x.utils.re_com.v_box = (function day8$re_frame_10x$utils$re_com$v_box(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62601 = arguments.length;
var i__4500__auto___62602 = (0);
while(true){
if((i__4500__auto___62602 < len__4499__auto___62601)){
args__4502__auto__.push((arguments[i__4500__auto___62602]));

var G__62603 = (i__4500__auto___62602 + (1));
i__4500__auto___62602 = G__62603;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.v_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.v_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__62598){
var map__62599 = p__62598;
var map__62599__$1 = ((((!((map__62599 == null)))?(((((map__62599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62599):map__62599);
var args = map__62599__$1;
var align_self = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var children = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var align = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var max_height = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var justify = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"start","start",-355208981));
var width = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var style = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var gap = cljs.core.get.call(null,map__62599__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var s = cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_flow_style.call(null,"column nowrap"),day8.re_frame_10x.utils.re_com.flex_child_style.call(null,size),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),day8.re_frame_10x.utils.re_com.justify_style.call(null,justify),day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),align),(cljs.core.truth_(align_self)?day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null):null),style);
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),gap,new cljs.core.Keyword(null,"height","height",1025178622),gap], null):null);
var children__$1 = (cljs.core.truth_(gap)?cljs.core.interpose.call(null,gap_form,cljs.core.filter.call(null,cljs.core.identity,children)):children);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-box display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null),children__$1);
});

day8.re_frame_10x.utils.re_com.v_box.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.v_box.cljs$lang$applyTo = (function (seq62597){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62597));
});

/**
 * Determines the value for the 'overflow' attribute.
 * The scroll parameter is a keyword.
 * Because we're translating scroll into overflow, the keyword doesn't appear to match the attribute value
 */
day8.re_frame_10x.utils.re_com.scroll_style = (function day8$re_frame_10x$utils$re_com$scroll_style(attribute,scroll){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,(function (){var G__62604 = scroll;
var G__62604__$1 = (((G__62604 instanceof cljs.core.Keyword))?G__62604.fqn:null);
switch (G__62604__$1) {
case "auto":
return "auto";

break;
case "off":
return "hidden";

break;
case "on":
return "scroll";

break;
case "spill":
return "visible";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62604__$1)].join('')));

}
})()]);
});
/**
 * This should generally NOT be used as it is the basis for the box, scroller and border components
 */
day8.re_frame_10x.utils.re_com.box_base = (function day8$re_frame_10x$utils$re_com$box_base(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62610 = arguments.length;
var i__4500__auto___62611 = (0);
while(true){
if((i__4500__auto___62611 < len__4499__auto___62610)){
args__4502__auto__.push((arguments[i__4500__auto___62611]));

var G__62612 = (i__4500__auto___62611 + (1));
i__4500__auto___62611 = G__62612;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.box_base.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.box_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__62607){
var map__62608 = p__62607;
var map__62608__$1 = ((((!((map__62608 == null)))?(((((map__62608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62608):map__62608);
var child = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"child","child",623967545));
var align_self = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var border = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"border","border",1444987323));
var v_scroll = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668));
var height = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var align = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var bk_color = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"bk-color","bk-color",2004848163));
var max_height = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var r_border = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"r-border","r-border",610773511));
var justify = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"justify","justify",-722524056));
var h_scroll = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"h-scroll","h-scroll",-1200000150));
var width = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var b_border = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"b-border","b-border",-1277965683));
var max_width = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var radius = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var size = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var style = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var scroll = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779));
var class$ = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var l_border = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"l-border","l-border",383143028));
var padding = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var t_border = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"t-border","t-border",1110748502));
var class_name = cljs.core.get.call(null,map__62608__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var s = cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_flow_style.call(null,"inherit"),day8.re_frame_10x.utils.re_com.flex_child_style.call(null,size),(cljs.core.truth_(scroll)?day8.re_frame_10x.utils.re_com.scroll_style.call(null,new cljs.core.Keyword(null,"overflow","overflow",2058931880),scroll):null),(cljs.core.truth_(h_scroll)?day8.re_frame_10x.utils.re_com.scroll_style.call(null,new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),h_scroll):null),(cljs.core.truth_(v_scroll)?day8.re_frame_10x.utils.re_com.scroll_style.call(null,new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),v_scroll):null),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),(cljs.core.truth_(justify)?day8.re_frame_10x.utils.re_com.justify_style.call(null,justify):null),(cljs.core.truth_(align)?day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),align):null),(cljs.core.truth_(align_self)?day8.re_frame_10x.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null):null),(cljs.core.truth_(border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),border], null):null),(cljs.core.truth_(l_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),l_border], null):null),(cljs.core.truth_(r_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),r_border], null):null),(cljs.core.truth_(t_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),t_border], null):null),(cljs.core.truth_(b_border)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),b_border], null):null),(cljs.core.truth_(radius)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),radius], null):null),(cljs.core.truth_(bk_color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),bk_color], null):null),style);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name),"display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr),child], null);
});

day8.re_frame_10x.utils.re_com.box_base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.box_base.cljs$lang$applyTo = (function (seq62606){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62606));
});

/**
 * Returns hiccup which produces a box, which is generally used as a child of a v-box or an h-box.
 * By default, it also acts as a container for further child compenents, or another h-box or v-box
 */
day8.re_frame_10x.utils.re_com.box = (function day8$re_frame_10x$utils$re_com$box(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62617 = arguments.length;
var i__4500__auto___62618 = (0);
while(true){
if((i__4500__auto___62618 < len__4499__auto___62617)){
args__4502__auto__.push((arguments[i__4500__auto___62618]));

var G__62619 = (i__4500__auto___62618 + (1));
i__4500__auto___62618 = G__62619;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.box.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.box.cljs$core$IFn$_invoke$arity$variadic = (function (p__62614){
var map__62615 = p__62614;
var map__62615__$1 = ((((!((map__62615 == null)))?(((((map__62615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62615):map__62615);
var args = map__62615__$1;
var child = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"child","child",623967545));
var align_self = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var align = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var max_height = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var justify = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"justify","justify",-722524056));
var width = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var style = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__62615__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
return day8.re_frame_10x.utils.re_com.box_base.call(null,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width,new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height,new cljs.core.Keyword(null,"justify","justify",-722524056),justify,new cljs.core.Keyword(null,"align","align",1964212802),align,new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self,new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"padding","padding",1660304693),padding,new cljs.core.Keyword(null,"child","child",623967545),child,new cljs.core.Keyword(null,"class-name","class-name",945142584),"rc-box ",new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
});

day8.re_frame_10x.utils.re_com.box.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.box.cljs$lang$applyTo = (function (seq62613){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62613));
});

/**
 * Returns a component which produces a line between children in a v-box/h-box along the main axis.
 * Specify size in pixels and a stancard CSS color. Defaults to a 1px lightgray line
 */
day8.re_frame_10x.utils.re_com.line = (function day8$re_frame_10x$utils$re_com$line(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62624 = arguments.length;
var i__4500__auto___62625 = (0);
while(true){
if((i__4500__auto___62625 < len__4499__auto___62624)){
args__4502__auto__.push((arguments[i__4500__auto___62625]));

var G__62626 = (i__4500__auto___62625 + (1));
i__4500__auto___62625 = G__62626;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.line.cljs$core$IFn$_invoke$arity$variadic = (function (p__62621){
var map__62622 = p__62621;
var map__62622__$1 = ((((!((map__62622 == null)))?(((((map__62622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62622):map__62622);
var args = map__62622__$1;
var size = cljs.core.get.call(null,map__62622__$1,new cljs.core.Keyword(null,"size","size",1098693007),"1px");
var color = cljs.core.get.call(null,map__62622__$1,new cljs.core.Keyword(null,"color","color",1011675173),"lightgray");
var class$ = cljs.core.get.call(null,map__62622__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__62622__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__62622__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var s = cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null),style);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null);
});

day8.re_frame_10x.utils.re_com.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.line.cljs$lang$applyTo = (function (seq62620){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62620));
});

/**
 * Returns markup for a basic text input label
 */
day8.re_frame_10x.utils.re_com.input_text_base = (function day8$re_frame_10x$utils$re_com$input_text_base(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62638 = arguments.length;
var i__4500__auto___62639 = (0);
while(true){
if((i__4500__auto___62639 < len__4499__auto___62638)){
args__4502__auto__.push((arguments[i__4500__auto___62639]));

var G__62640 = (i__4500__auto___62639 + (1));
i__4500__auto___62639 = G__62640;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.input_text_base.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.input_text_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__62628){
var map__62629 = p__62628;
var map__62629__$1 = ((((!((map__62629 == null)))?(((((map__62629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62629):map__62629);
var args = map__62629__$1;
var model = cljs.core.get.call(null,map__62629__$1,new cljs.core.Keyword(null,"model","model",331153215));
var input_type = cljs.core.get.call(null,map__62629__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840));
var external_model = mranderson048.reagent.v0v7v0.reagent.ratom.atom.call(null,day8.re_frame_10x.utils.re_com.deref_or_value.call(null,model));
var internal_model = mranderson048.reagent.v0v7v0.reagent.ratom.atom.call(null,(((cljs.core.deref.call(null,external_model) == null))?"":cljs.core.deref.call(null,external_model)));
return ((function (external_model,internal_model,map__62629,map__62629__$1,args,model,input_type){
return (function() { 
var G__62641__delegate = function (p__62631){
var map__62632 = p__62631;
var map__62632__$1 = ((((!((map__62632 == null)))?(((((map__62632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62632):map__62632);
var args__$1 = map__62632__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var status_icon_QMARK_ = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model__$1 = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var placeholder = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var width = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rows = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var style = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true);
var on_submit = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));
var validation_regex = cljs.core.get.call(null,map__62632__$1,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361));
var latest_ext_model = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,model__$1);
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,disabled_QMARK_);
var change_on_blur_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,change_on_blur_QMARK_);
var showing_QMARK_ = mranderson048.reagent.v0v7v0.reagent.ratom.atom.call(null,false);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,external_model),latest_ext_model)){
cljs.core.reset_BANG_.call(null,external_model,latest_ext_model);

cljs.core.reset_BANG_.call(null,internal_model,latest_ext_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-input-text ",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width)?width:"250px"),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-input-text-inner ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__62634 = status;
var G__62634__$1 = (((G__62634 instanceof cljs.core.Keyword))?G__62634.fqn:null);
switch (G__62634__$1) {
case "success":
return "has-success ";

break;
case "warning":
return "has-warning ";

break;
case "error":
return "has-error ";

break;
default:
return "";

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3911__auto__ = status;
if(cljs.core.truth_(and__3911__auto__)){
return status_icon_QMARK_;
} else {
return and__3911__auto__;
}
})())?"has-feedback":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"auto")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,input_type,new cljs.core.Keyword(null,"password","password",417022471)))?new cljs.core.Keyword(null,"input","input",556931961):input_type),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[placeholder,disabled_QMARK___$1,cljs.core.deref.call(null,internal_model),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__62632,map__62632__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__62629,map__62629__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_((function (){var and__3911__auto__ = on_change;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,internal_model),cljs.core.deref.call(null,external_model));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
on_change.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__62632,map__62632__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__62629,map__62629__$1,args,model,input_type))
,(function (){var G__62635 = input_type;
var G__62635__$1 = (((G__62635 instanceof cljs.core.Keyword))?G__62635.fqn:null);
switch (G__62635__$1) {
case "input":
return "text";

break;
case "password":
return "password";

break;
default:
return null;

}
})(),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null),style),((cljs.core._EQ_.call(null,input_type,new cljs.core.Keyword(null,"textarea","textarea",-650375824)))?(function (){var or__3922__auto__ = rows;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (3);
}
})():null),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__62632,map__62632__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__62629,map__62629__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
event.preventDefault();
} else {
var G__62636_62644 = event.which;
switch (G__62636_62644) {
case (27):
cljs.core.reset_BANG_.call(null,internal_model,cljs.core.deref.call(null,external_model));

break;
default:

}
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__62632,map__62632__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__62629,map__62629__$1,args,model,input_type))
,["form-control ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__62632,map__62632__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__62629,map__62629__$1,args,model,input_type){
return (function (event){
var new_val_62646 = event.target.value;
if(cljs.core.truth_((function (){var and__3911__auto__ = on_change;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = cljs.core.not.call(null,disabled_QMARK___$1);
if(and__3911__auto____$1){
if(cljs.core.truth_(validation_regex)){
return cljs.core.re_find.call(null,validation_regex,new_val_62646);
} else {
return true;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,internal_model,new_val_62646);

if(cljs.core.truth_(change_on_blur_QMARK___$1)){
} else {
on_change.call(null,cljs.core.deref.call(null,internal_model));
}
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__62632,map__62632__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__62629,map__62629__$1,args,model,input_type))
,((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__62632,map__62632__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__62629,map__62629__$1,args,model,input_type){
return (function (event){
var G__62637_62647 = event.which;
switch (G__62637_62647) {
case (13):
if(cljs.core.truth_(on_submit)){
on_submit.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

break;
default:

}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__62632,map__62632__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__62629,map__62629__$1,args,model,input_type))
]),attr)], null)], null)], null)], null);
};
var G__62641 = function (var_args){
var p__62631 = null;
if (arguments.length > 0) {
var G__62649__i = 0, G__62649__a = new Array(arguments.length -  0);
while (G__62649__i < G__62649__a.length) {G__62649__a[G__62649__i] = arguments[G__62649__i + 0]; ++G__62649__i;}
  p__62631 = new cljs.core.IndexedSeq(G__62649__a,0,null);
} 
return G__62641__delegate.call(this,p__62631);};
G__62641.cljs$lang$maxFixedArity = 0;
G__62641.cljs$lang$applyTo = (function (arglist__62650){
var p__62631 = cljs.core.seq(arglist__62650);
return G__62641__delegate(p__62631);
});
G__62641.cljs$core$IFn$_invoke$arity$variadic = G__62641__delegate;
return G__62641;
})()
;
;})(external_model,internal_model,map__62629,map__62629__$1,args,model,input_type))
});

day8.re_frame_10x.utils.re_com.input_text_base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.input_text_base.cljs$lang$applyTo = (function (seq62627){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62627));
});

day8.re_frame_10x.utils.re_com.input_text = (function day8$re_frame_10x$utils$re_com$input_text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62652 = arguments.length;
var i__4500__auto___62653 = (0);
while(true){
if((i__4500__auto___62653 < len__4499__auto___62652)){
args__4502__auto__.push((arguments[i__4500__auto___62653]));

var G__62654 = (i__4500__auto___62653 + (1));
i__4500__auto___62653 = G__62654;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.input_text.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.input_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame_10x.utils.re_com.input_text_base,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"input","input",556931961),args);
});

day8.re_frame_10x.utils.re_com.input_text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.input_text.cljs$lang$applyTo = (function (seq62651){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62651));
});

/**
 * Returns markup for a basic label
 */
day8.re_frame_10x.utils.re_com.label = (function day8$re_frame_10x$utils$re_com$label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62659 = arguments.length;
var i__4500__auto___62660 = (0);
while(true){
if((i__4500__auto___62660 < len__4499__auto___62659)){
args__4502__auto__.push((arguments[i__4500__auto___62660]));

var G__62661 = (i__4500__auto___62660 + (1));
i__4500__auto___62660 = G__62661;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.label.cljs$core$IFn$_invoke$arity$variadic = (function (p__62656){
var map__62657 = p__62656;
var map__62657__$1 = ((((!((map__62657 == null)))?(((((map__62657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62657):map__62657);
var args = map__62657__$1;
var label = cljs.core.get.call(null,map__62657__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.call(null,map__62657__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var width = cljs.core.get.call(null,map__62657__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var class$ = cljs.core.get.call(null,map__62657__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__62657__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__62657__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-label-wrapper display-inline-flex",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-label ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),style)], null),(cljs.core.truth_(on_click)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__62657,map__62657__$1,args,label,on_click,width,class$,style,attr){
return (function (event){
on_click.call(null);

return null;
});})(map__62657,map__62657__$1,args,label,on_click,width,class$,style,attr))
], null):null),attr),label], null)], null);
});

day8.re_frame_10x.utils.re_com.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.label.cljs$lang$applyTo = (function (seq62655){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62655));
});

/**
 * acts like [:p ]
 * Creates a paragraph of body text, expected to have a font-szie of 14px or 15px,
 * which should have limited width.
 * Why limited text width?  See http://baymard.com/blog/line-length-readability
 * The actual font-size is inherited.
 * At 14px, 450px will yield between 69 and 73 chars.
 * At 15px, 450px will yield about 66 to 70 chars.
 * So we're at the upper end of the prefered 50 to 75 char range.
 * If the first child is a map, it is interpreted as a map of styles / attributes.
 */
day8.re_frame_10x.utils.re_com.p = (function day8$re_frame_10x$utils$re_com$p(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62666 = arguments.length;
var i__4500__auto___62667 = (0);
while(true){
if((i__4500__auto___62667 < len__4499__auto___62666)){
args__4502__auto__.push((arguments[i__4500__auto___62667]));

var G__62668 = (i__4500__auto___62667 + (1));
i__4500__auto___62667 = G__62668;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.p.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var child1 = cljs.core.first.call(null,children);
var vec__62663 = ((cljs.core.map_QMARK_.call(null,child1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child1,cljs.core.rest.call(null,children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,children], null));
var m = cljs.core.nth.call(null,vec__62663,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__62663,(1),null);
var m__$1 = day8.re_frame_10x.utils.re_com.deep_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"none",new cljs.core.Keyword(null,"width","width",-384071477),"450px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"450px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),m);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),m__$1,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),children__$1)], null);
});

day8.re_frame_10x.utils.re_com.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.p.cljs$lang$applyTo = (function (seq62662){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62662));
});

/**
 * Returns the markup for a basic button
 */
day8.re_frame_10x.utils.re_com.button = (function day8$re_frame_10x$utils$re_com$button(){
var showing_QMARK_ = mranderson048.reagent.v0v7v0.reagent.ratom.atom.call(null,false);
return ((function (showing_QMARK_){
return (function() { 
var G__62672__delegate = function (p__62669){
var map__62670 = p__62669;
var map__62670__$1 = ((((!((map__62670 == null)))?(((((map__62670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62670):map__62670);
var args = map__62670__$1;
var label = cljs.core.get.call(null,map__62670__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.call(null,map__62670__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var disabled_QMARK_ = cljs.core.get.call(null,map__62670__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.call(null,map__62670__$1,new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default");
var style = cljs.core.get.call(null,map__62670__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__62670__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-button btn noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),style),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (disabled_QMARK___$1,map__62670,map__62670__$1,args,label,on_click,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
if(cljs.core.truth_((function (){var and__3911__auto__ = on_click;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__3911__auto__;
}
})())){
on_click.call(null,event);
} else {
}

return null;
});})(disabled_QMARK___$1,map__62670,map__62670__$1,args,label,on_click,disabled_QMARK_,class$,style,attr,showing_QMARK_))
], null),attr),label], null);
if(cljs.core.truth_(disabled_QMARK___$1)){
cljs.core.reset_BANG_.call(null,showing_QMARK_,false);
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-button-wrapper display-inline-flex",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),the_button], null);
};
var G__62672 = function (var_args){
var p__62669 = null;
if (arguments.length > 0) {
var G__62673__i = 0, G__62673__a = new Array(arguments.length -  0);
while (G__62673__i < G__62673__a.length) {G__62673__a[G__62673__i] = arguments[G__62673__i + 0]; ++G__62673__i;}
  p__62669 = new cljs.core.IndexedSeq(G__62673__a,0,null);
} 
return G__62672__delegate.call(this,p__62669);};
G__62672.cljs$lang$maxFixedArity = 0;
G__62672.cljs$lang$applyTo = (function (arglist__62674){
var p__62669 = cljs.core.seq(arglist__62674);
return G__62672__delegate(p__62669);
});
G__62672.cljs$core$IFn$_invoke$arity$variadic = G__62672__delegate;
return G__62672;
})()
;
;})(showing_QMARK_))
});
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
day8.re_frame_10x.utils.re_com.hyperlink = (function day8$re_frame_10x$utils$re_com$hyperlink(){
var showing_QMARK_ = mranderson048.reagent.v0v7v0.reagent.ratom.atom.call(null,false);
return ((function (showing_QMARK_){
return (function() { 
var G__62678__delegate = function (p__62675){
var map__62676 = p__62675;
var map__62676__$1 = ((((!((map__62676 == null)))?(((((map__62676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62676):map__62676);
var args = map__62676__$1;
var label = cljs.core.get.call(null,map__62676__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.call(null,map__62676__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var disabled_QMARK_ = cljs.core.get.call(null,map__62676__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.call(null,map__62676__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__62676__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__62676__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label__$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,label);
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-hyperlink noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK___$1)?"not-allowed":"pointer"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(disabled_QMARK___$1)?"grey":null)], null),style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (label__$1,disabled_QMARK___$1,map__62676,map__62676__$1,args,label,on_click,disabled_QMARK_,class$,style,attr,showing_QMARK_){
return (function (event){
if(cljs.core.truth_((function (){var and__3911__auto__ = on_click;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__3911__auto__;
}
})())){
on_click.call(null,event);
} else {
}

return null;
});})(label__$1,disabled_QMARK___$1,map__62676,map__62676__$1,args,label,on_click,disabled_QMARK_,class$,style,attr,showing_QMARK_))
], null),attr),label__$1], null)], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-hyperlink-wrapper display-inline-flex",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),the_button], null);
};
var G__62678 = function (var_args){
var p__62675 = null;
if (arguments.length > 0) {
var G__62679__i = 0, G__62679__a = new Array(arguments.length -  0);
while (G__62679__i < G__62679__a.length) {G__62679__a[G__62679__i] = arguments[G__62679__i + 0]; ++G__62679__i;}
  p__62675 = new cljs.core.IndexedSeq(G__62679__a,0,null);
} 
return G__62678__delegate.call(this,p__62675);};
G__62678.cljs$lang$maxFixedArity = 0;
G__62678.cljs$lang$applyTo = (function (arglist__62680){
var p__62675 = cljs.core.seq(arglist__62680);
return G__62678__delegate(p__62675);
});
G__62678.cljs$core$IFn$_invoke$arity$variadic = G__62678__delegate;
return G__62678;
})()
;
;})(showing_QMARK_))
});
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
day8.re_frame_10x.utils.re_com.hyperlink_href = (function day8$re_frame_10x$utils$re_com$hyperlink_href(){
var showing_QMARK_ = mranderson048.reagent.v0v7v0.reagent.ratom.atom.call(null,false);
return ((function (showing_QMARK_){
return (function() { 
var G__62684__delegate = function (p__62681){
var map__62682 = p__62681;
var map__62682__$1 = ((((!((map__62682 == null)))?(((((map__62682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62682):map__62682);
var args = map__62682__$1;
var label = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var href = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var target = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tooltip = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var tooltip_position = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var class$ = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__62682__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_.call(null,showing_QMARK_,false);
}

var label__$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,label);
var href__$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,href);
var target__$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,target);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-hyperlink-href noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),style),new cljs.core.Keyword(null,"href","href",-793805698),href__$1,new cljs.core.Keyword(null,"target","target",253001721),target__$1], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (label__$1,href__$1,target__$1,map__62682,map__62682__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,showing_QMARK_,true);

return null;
});})(label__$1,href__$1,target__$1,map__62682,map__62682__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (label__$1,href__$1,target__$1,map__62682,map__62682__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,showing_QMARK_,false);

return null;
});})(label__$1,href__$1,target__$1,map__62682,map__62682__$1,args,label,href,target,tooltip,tooltip_position,class$,style,attr,showing_QMARK_))
], null):null),attr),label__$1], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-hyperlink-href-wrapper display-inline-flex",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),the_button], null);
};
var G__62684 = function (var_args){
var p__62681 = null;
if (arguments.length > 0) {
var G__62685__i = 0, G__62685__a = new Array(arguments.length -  0);
while (G__62685__i < G__62685__a.length) {G__62685__a[G__62685__i] = arguments[G__62685__i + 0]; ++G__62685__i;}
  p__62681 = new cljs.core.IndexedSeq(G__62685__a,0,null);
} 
return G__62684__delegate.call(this,p__62681);};
G__62684.cljs$lang$maxFixedArity = 0;
G__62684.cljs$lang$applyTo = (function (arglist__62686){
var p__62681 = cljs.core.seq(arglist__62686);
return G__62684__delegate(p__62681);
});
G__62684.cljs$core$IFn$_invoke$arity$variadic = G__62684__delegate;
return G__62684;
})()
;
;})(showing_QMARK_))
});
day8.re_frame_10x.utils.re_com.hyperlink_info = (function day8$re_frame_10x$utils$re_com$hyperlink_info(url){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"container--info-button",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),"?"], null)], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),url], null);
});
day8.re_frame_10x.utils.re_com.link = (function day8$re_frame_10x$utils$re_com$link(p__62687){
var map__62688 = p__62687;
var map__62688__$1 = ((((!((map__62688 == null)))?(((((map__62688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62688):map__62688);
var label = cljs.core.get.call(null,map__62688__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var href = cljs.core.get.call(null,map__62688__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var style = cljs.core.get.call(null,map__62688__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer",new cljs.core.Keyword(null,"class","class",-2030961996),"rc-hyperlink-href noselect ",new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),label], null);
});
/**
 * I return the markup for a checkbox, with an optional RHS label
 */
day8.re_frame_10x.utils.re_com.checkbox = (function day8$re_frame_10x$utils$re_com$checkbox(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62694 = arguments.length;
var i__4500__auto___62695 = (0);
while(true){
if((i__4500__auto___62695 < len__4499__auto___62694)){
args__4502__auto__.push((arguments[i__4500__auto___62695]));

var G__62696 = (i__4500__auto___62695 + (1));
i__4500__auto___62695 = G__62696;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__62691){
var map__62692 = p__62691;
var map__62692__$1 = ((((!((map__62692 == null)))?(((((map__62692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62692):map__62692);
var args = map__62692__$1;
var model = cljs.core.get.call(null,map__62692__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_change = cljs.core.get.call(null,map__62692__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label = cljs.core.get.call(null,map__62692__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var disabled_QMARK_ = cljs.core.get.call(null,map__62692__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var label_class = cljs.core.get.call(null,map__62692__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var label_style = cljs.core.get.call(null,map__62692__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
var class$ = cljs.core.get.call(null,map__62692__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__62692__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__62692__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var cursor = "default";
var model__$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,model);
var disabled_QMARK___$1 = day8.re_frame_10x.utils.re_com.deref_or_value.call(null,disabled_QMARK_);
var callback_fn = ((function (cursor,model__$1,disabled_QMARK___$1,map__62692,map__62692__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr){
return (function (){
if(cljs.core.truth_((function (){var and__3911__auto__ = on_change;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__3911__auto__;
}
})())){
return on_change.call(null,cljs.core.not.call(null,model__$1));
} else {
return null;
}
});})(cursor,model__$1,disabled_QMARK___$1,map__62692,map__62692__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-checkbox-wrapper noselect",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-checkbox ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),style),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$.call(null,model__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__62692,map__62692__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__62692,map__62692__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr))
], null),attr)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),label_class,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,day8.re_frame_10x.utils.re_com.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),label_style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__62692,map__62692__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__62692,map__62692__$1,args,model,on_change,label,disabled_QMARK_,label_class,label_style,class$,style,attr))
], null),label], null):null)], null)], null);
});

day8.re_frame_10x.utils.re_com.checkbox.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.checkbox.cljs$lang$applyTo = (function (seq62690){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62690));
});

day8.re_frame_10x.utils.re_com.close_button = (function day8$re_frame_10x$utils$re_com$close_button(){
var over_QMARK_ = mranderson048.reagent.v0v7v0.reagent.ratom.atom.call(null,false);
return ((function (over_QMARK_){
return (function() { 
var day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate = function (p__62697){
var map__62698 = p__62697;
var map__62698__$1 = ((((!((map__62698 == null)))?(((((map__62698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62698):map__62698);
var tooltip = cljs.core.get.call(null,map__62698__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var attr = cljs.core.get.call(null,map__62698__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var left_offset = cljs.core.get.call(null,map__62698__$1,new cljs.core.Keyword(null,"left-offset","left-offset",-331155643));
var color = cljs.core.get.call(null,map__62698__$1,new cljs.core.Keyword(null,"color","color",1011675173),"#ccc");
var font_size = cljs.core.get.call(null,map__62698__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16));
var div_size = cljs.core.get.call(null,map__62698__$1,new cljs.core.Keyword(null,"div-size","div-size",1661625995),(16));
var on_click = cljs.core.get.call(null,map__62698__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var style = cljs.core.get.call(null,map__62698__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var top_offset = cljs.core.get.call(null,map__62698__$1,new cljs.core.Keyword(null,"top-offset","top-offset",1235816245));
var hover_color = cljs.core.get.call(null,map__62698__$1,new cljs.core.Keyword(null,"hover-color","hover-color",663962326),"#999");
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-close-button noselect",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.utils.re_com.px.call(null,div_size),new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.utils.re_com.px.call(null,div_size)], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),day8.re_frame_10x.utils.re_com.px.call(null,font_size),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?hover_color:color),new cljs.core.Keyword(null,"top","top",-1856271961),day8.re_frame_10x.utils.re_com.px.call(null,(((font_size - div_size) / (2)) - top_offset),new cljs.core.Keyword(null,"negative","negative",-1562068438)),new cljs.core.Keyword(null,"left","left",-399115937),day8.re_frame_10x.utils.re_com.px.call(null,(((font_size - div_size) / (2)) - left_offset),new cljs.core.Keyword(null,"negative","negative",-1562068438))], null),style),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),tooltip,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__62698,map__62698__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_){
return (function (event){
on_click.call(null);

event.stopPropagation();

return null;
});})(map__62698,map__62698__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (map__62698,map__62698__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,over_QMARK_,true);

return null;
});})(map__62698,map__62698__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (map__62698,map__62698__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,over_QMARK_,false);

return null;
});})(map__62698,map__62698__$1,tooltip,attr,left_offset,color,font_size,div_size,on_click,style,top_offset,hover_color,over_QMARK_))
], null),attr),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00D7"], null)], null)], null);
};
var day8$re_frame_10x$utils$re_com$close_button_$_close_button_render = function (var_args){
var p__62697 = null;
if (arguments.length > 0) {
var G__62700__i = 0, G__62700__a = new Array(arguments.length -  0);
while (G__62700__i < G__62700__a.length) {G__62700__a[G__62700__i] = arguments[G__62700__i + 0]; ++G__62700__i;}
  p__62697 = new cljs.core.IndexedSeq(G__62700__a,0,null);
} 
return day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate.call(this,p__62697);};
day8$re_frame_10x$utils$re_com$close_button_$_close_button_render.cljs$lang$maxFixedArity = 0;
day8$re_frame_10x$utils$re_com$close_button_$_close_button_render.cljs$lang$applyTo = (function (arglist__62701){
var p__62697 = cljs.core.seq(arglist__62701);
return day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate(p__62697);
});
day8$re_frame_10x$utils$re_com$close_button_$_close_button_render.cljs$core$IFn$_invoke$arity$variadic = day8$re_frame_10x$utils$re_com$close_button_$_close_button_render__delegate;
return day8$re_frame_10x$utils$re_com$close_button_$_close_button_render;
})()
;
;})(over_QMARK_))
});
day8.re_frame_10x.utils.re_com.css_join = (function day8$re_frame_10x$utils$re_com$css_join(var_args){
var args__4502__auto__ = [];
var len__4499__auto___62703 = arguments.length;
var i__4500__auto___62704 = (0);
while(true){
if((i__4500__auto___62704 < len__4499__auto___62703)){
args__4502__auto__.push((arguments[i__4500__auto___62704]));

var G__62705 = (i__4500__auto___62704 + (1));
i__4500__auto___62704 = G__62705;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return clojure.string.join.call(null," ",args);
});

day8.re_frame_10x.utils.re_com.css_join.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.utils.re_com.css_join.cljs$lang$applyTo = (function (seq62702){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62702));
});

day8.re_frame_10x.utils.re_com.re_com_css = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".display-flex",".display-flex",1723609359),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".display-inline-flex",".display-inline-flex",485976066),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);

//# sourceMappingURL=re_com.js.map?rel=1600694576667
