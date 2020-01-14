// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure_cv.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__11024_11026 = cljs.core.cst$kw$modal_DASH_open;
var G__11025_11027 = ((function (G__11024_11026){
return (function (p1__11023_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__11023_SHARP_,cljs.core.cst$kw$modal_DASH_open);
});})(G__11024_11026))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__11024_11026,G__11025_11027) : re_frame.core.reg_sub.call(null,G__11024_11026,G__11025_11027));
var G__11029_11031 = cljs.core.cst$kw$current_DASH_section;
var G__11030_11032 = ((function (G__11029_11031){
return (function (p1__11028_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__11028_SHARP_,cljs.core.cst$kw$current_DASH_section);
});})(G__11029_11031))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__11029_11031,G__11030_11032) : re_frame.core.reg_sub.call(null,G__11029_11031,G__11030_11032));
var G__11034_11036 = cljs.core.cst$kw$menu_DASH_open;
var G__11035_11037 = ((function (G__11034_11036){
return (function (p1__11033_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__11033_SHARP_,cljs.core.cst$kw$menu_DASH_open);
});})(G__11034_11036))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__11034_11036,G__11035_11037) : re_frame.core.reg_sub.call(null,G__11034_11036,G__11035_11037));
var G__11039_11041 = cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning;
var G__11040_11042 = ((function (G__11039_11041){
return (function (p1__11038_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__11038_SHARP_,cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning);
});})(G__11039_11041))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__11039_11041,G__11040_11042) : re_frame.core.reg_sub.call(null,G__11039_11041,G__11040_11042));
var G__11043_11045 = cljs.core.cst$kw$current_DASH_year;
var G__11044_11046 = ((function (G__11043_11045){
return (function (){
return (new Date()).getFullYear();
});})(G__11043_11045))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__11043_11045,G__11044_11046) : re_frame.core.reg_sub.call(null,G__11043_11045,G__11044_11046));
var G__11048_11050 = cljs.core.cst$kw$image_DASH_enlarged;
var G__11049_11051 = ((function (G__11048_11050){
return (function (p1__11047_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__11047_SHARP_,cljs.core.cst$kw$image_DASH_enlarged);
});})(G__11048_11050))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__11048_11050,G__11049_11051) : re_frame.core.reg_sub.call(null,G__11048_11050,G__11049_11051));
clojure_cv.subs.month_diff = (function clojure_cv$subs$month_diff(d1,d2){
var months = (((((d2.getFullYear() - d1.getFullYear()) * (12)) - ((1) + d1.getMonth())) + d2.getMonth()) + (2));
var x__4006__auto__ = (0);
var y__4007__auto__ = months;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
});
var G__11052_11054 = cljs.core.cst$kw$vincit_DASH_months_DASH_working;
var G__11053_11055 = ((function (G__11052_11054){
return (function (_){
var start_date = (new Date((2020),(1),(1)));
var summers_worked = (0);
var extra_months = (0);
var month_diff = clojure_cv.subs.month_diff(start_date,(new Date()));
var full_time = (extra_months + (summers_worked * (3)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$full_DASH_time,full_time,cljs.core.cst$kw$part_DASH_time,(month_diff - full_time)], null);
});})(G__11052_11054))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__11052_11054,G__11053_11055) : re_frame.core.reg_sub.call(null,G__11052_11054,G__11053_11055));
