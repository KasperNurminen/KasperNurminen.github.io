// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure_cv.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"modal-open","modal-open",-845881300),(function (p1__54927_SHARP_){
return cljs.core.get.call(null,p1__54927_SHARP_,new cljs.core.Keyword(null,"modal-open","modal-open",-845881300));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-section","current-section",1519906460),(function (p1__54928_SHARP_){
return cljs.core.get.call(null,p1__54928_SHARP_,new cljs.core.Keyword(null,"current-section","current-section",1519906460));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),(function (p1__54929_SHARP_){
return cljs.core.get.call(null,p1__54929_SHARP_,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"scroll-is-at-beginning","scroll-is-at-beginning",881196327),(function (p1__54930_SHARP_){
return cljs.core.get.call(null,p1__54930_SHARP_,new cljs.core.Keyword(null,"scroll-is-at-beginning","scroll-is-at-beginning",881196327));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-year","current-year",1688248883),(function (){
return (new Date()).getFullYear();
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"image-enlarged","image-enlarged",-1374926525),(function (p1__54931_SHARP_){
return cljs.core.get.call(null,p1__54931_SHARP_,new cljs.core.Keyword(null,"image-enlarged","image-enlarged",-1374926525));
}));
clojure_cv.subs.month_diff = (function clojure_cv$subs$month_diff(d1,d2){
var months = (((((d2.getFullYear() - d1.getFullYear()) * (12)) - ((1) + d1.getMonth())) + d2.getMonth()) + (2));
var x__4006__auto__ = (0);
var y__4007__auto__ = months;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"vincit-months-working","vincit-months-working",1937066251),(function (_){
var start_date = (new Date((2020),(1),(1)));
var summers_worked = (0);
var extra_months = (0);
var month_diff = clojure_cv.subs.month_diff.call(null,start_date,(new Date()));
var full_time = (extra_months + (summers_worked * (3)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"full-time","full-time",-1131330916),full_time,new cljs.core.Keyword(null,"part-time","part-time",-523546538),(month_diff - full_time)], null);
}));

//# sourceMappingURL=subs.js.map?rel=1600694554825
