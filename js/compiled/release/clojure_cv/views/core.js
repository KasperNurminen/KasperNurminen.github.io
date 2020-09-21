// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure_cv.views.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('clojure_cv.views.sections');
goog.require('accountant.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljs_react_material_ui.icons');
clojure_cv.views.core.menu_button = (function clojure_cv$views$core$menu_button(label,id){
var current_section = (function (){var G__4620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_section], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4620) : re_frame.core.subscribe.call(null,G__4620));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(current_section)))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$primary,true], null):null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_click,((function (current_section){
return (function (){
window.setTimeout(((function (current_section){
return (function (){
var G__4621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_current_DASH_section,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4621) : re_frame.core.dispatch.call(null,G__4621));
});})(current_section))
,(600));

var G__4622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_into_DASH_view,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4622) : re_frame.core.dispatch.call(null,G__4622));
});})(current_section))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"left"], null),cljs.core.cst$kw$label,label], null)], 0))], null);
});
clojure_cv.views.core.portfolio_pages = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["kaspernurminenfi",null,"oloscreen",null,"ilmomasiina",null,"infodisplay",null], null), null);
clojure_cv.views.core.menu_icons = (function clojure_cv$views$core$menu_icons(menu_open){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$mr_DASH_2$menu_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,(cljs.core.truth_(menu_open)?"menu-icons-expanded":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Basic Information","main"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Skills","skills"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Job Experience","job-experience"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Education","education"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Achievements","achievements"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Portfolio","portfolio"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Contact me","contact"], null)], null);
});
clojure_cv.views.core.header = (function clojure_cv$views$core$header(){
var menu_open = (function (){var G__4623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_open], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4623) : re_frame.core.subscribe.call(null,G__4623));
})();
var scroll_is_at_beginning = (function (){var G__4624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4624) : re_frame.core.subscribe.call(null,G__4624));
})();
var current_section = (function (){var G__4625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_section], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4625) : re_frame.core.subscribe.call(null,G__4625));
})();
var is_portfolio_page_QMARK_ = cljs.core.contains_QMARK_(clojure_cv.views.core.portfolio_pages,cljs.core.deref(current_section));
var image_enlarged = (function (){var G__4626 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image_DASH_enlarged], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4626) : re_frame.core.subscribe.call(null,G__4626));
})();
var header_class_names = (function (){var G__4627 = "";
var G__4627__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4627),"header"].join('')
;
var G__4627__$2 = (cljs.core.truth_(cljs.core.deref(menu_open))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4627__$1)," header-expanded"].join(''):G__4627__$1);
var G__4627__$3 = (cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("main",cljs.core.deref(current_section));
if(and__3911__auto__){
return cljs.core.deref(scroll_is_at_beginning);
} else {
return and__3911__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4627__$2)," black"].join(''):G__4627__$2);
var G__4627__$4 = ((is_portfolio_page_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4627__$3)," pos-absolute"].join(''):G__4627__$3);
if(cljs.core.truth_(cljs.core.deref(image_enlarged))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4627__$4)," hidden"].join('');
} else {
return G__4627__$4;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.paper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,header_class_names], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$ml_DASH_4,"CV - Kasper Nurminen"], null),((is_portfolio_page_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (menu_open,scroll_is_at_beginning,current_section,is_portfolio_page_QMARK_,image_enlarged,header_class_names){
return (function (){
var G__4628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigate_DASH_to_DASH_portfolio], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4628) : re_frame.core.dispatch.call(null,G__4628));
});})(menu_open,scroll_is_at_beginning,current_section,is_portfolio_page_QMARK_,image_enlarged,header_class_names))
], null),"Back"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_icons,cljs.core.deref(menu_open)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.icon_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class_DASH_name,"menu-select",cljs.core.cst$kw$on_DASH_click,((function (menu_open,scroll_is_at_beginning,current_section,is_portfolio_page_QMARK_,image_enlarged,header_class_names){
return (function (){
var G__4629 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4629) : re_frame.core.dispatch.call(null,G__4629));
});})(menu_open,scroll_is_at_beginning,current_section,is_portfolio_page_QMARK_,image_enlarged,header_class_names))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.icons.navigation_menu], null)], null)], null))], null);
});
clojure_cv.views.core.on_scroll = (function clojure_cv$views$core$on_scroll(sections){
var scroll_y = window.scrollY;
var prev_section = (function (){var G__4632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_section], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4632) : re_frame.core.subscribe.call(null,G__4632));
})();
var inner_height = window.innerHeight;
var identity_or_last_section = ((function (scroll_y,prev_section,inner_height){
return (function (p1__4630_SHARP_){
if(cljs.core.truth_(p1__4630_SHARP_)){
return p1__4630_SHARP_;
} else {
return cljs.core.last(sections);
}
});})(scroll_y,prev_section,inner_height))
;
var current_section = identity_or_last_section(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (scroll_y,prev_section,inner_height,identity_or_last_section){
return (function (p1__4631_SHARP_){
return ((0) < ((p1__4631_SHARP_.offsetTop - scroll_y) - (- (inner_height / (2)))));
});})(scroll_y,prev_section,inner_height,identity_or_last_section))
,sections))).id;
var G__4633_4635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_is_DASH_at_DASH_beginning,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),scroll_y)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4633_4635) : re_frame.core.dispatch.call(null,G__4633_4635));

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(prev_section),current_section))){
var G__4634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_current_DASH_section,current_section], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4634) : re_frame.core.dispatch.call(null,G__4634));
} else {
return null;
}
});
clojure_cv.views.core.on_resize = (function clojure_cv$views$core$on_resize(){
var menu_open = (function (){var G__4636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_open], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4636) : re_frame.core.subscribe.call(null,G__4636));
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref(menu_open);
if(cljs.core.truth_(and__3911__auto__)){
return ((1080) < window.innerWidth);
} else {
return and__3911__auto__;
}
})())){
var G__4637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4637) : re_frame.core.dispatch.call(null,G__4637));
} else {
return null;
}
});
clojure_cv.views.core.main_page = (function clojure_cv$views$core$main_page(){
var menu_open = (function (){var G__4638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$menu_DASH_open], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4638) : re_frame.core.subscribe.call(null,G__4638));
})();
var current_section = (function (){var G__4639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_section], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__4639) : re_frame.core.subscribe.call(null,G__4639));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (menu_open,current_section){
return (function (){
if(cljs.core.truth_(cljs.core.deref(menu_open))){
var G__4640 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_menu], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4640) : re_frame.core.dispatch.call(null,G__4640));
} else {
return null;
}
});})(menu_open,current_section))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_image,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$margin,(0)], null)], null),"Kasper Nurminen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$padding_DASH_top,(0)], null)], null),"Software Engineer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.floating_action_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mini,true,cljs.core.cst$kw$on_DASH_click,((function (menu_open,current_section){
return (function (){
var G__4641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_into_DASH_view,"main"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4641) : re_frame.core.dispatch.call(null,G__4641));
});})(menu_open,current_section))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.icons.hardware_keyboard_arrow_down,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"42px"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$slanted_DASH_bar], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_fluid$p_DASH_0,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.about], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.skills], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.job_experience], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.education], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.achievements], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.portfolio], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.contact], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.copyright], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.floating_action_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$secondary,true,cljs.core.cst$kw$on_DASH_click,((function (menu_open,current_section){
return (function (){
var G__4642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroll_DASH_into_DASH_view,"main"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__4642) : re_frame.core.dispatch.call(null,G__4642));
});})(menu_open,current_section))
,cljs.core.cst$kw$class_DASH_name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_section),"main"))?"hidden top-button":"top-button")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.icons.hardware_keyboard_arrow_up,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"52px"], null)], null)], null)], null)], null)], null);
});
clojure_cv.views.core.main_panel = (function clojure_cv$views$core$main_panel(page){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
var sections = document.getElementsByTagName("section");
window.addEventListener("resize",clojure_cv.views.core.on_resize);

return document.addEventListener("scroll",((function (sections){
return (function (){
return clojure_cv.views.core.on_scroll(Array.from(sections));
});})(sections))
);
}),cljs.core.cst$kw$component_DASH_will_DASH_unmount,(function (){
document.removeEventListener("scroll",clojure_cv.views.core.on_scroll);

return window.removeEventListener("resize",clojure_cv.views.core.on_resize);
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mui_DASH_theme,cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$floating_DASH_action_DASH_button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#4199ee",cljs.core.cst$kw$secondary_DASH_color,"#ffffff"], null),cljs.core.cst$kw$palette,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$primary_DASH_1_DASH_color,"#4199ee",cljs.core.cst$kw$font_DASH_family,"'Lato', sans-serif"], null),cljs.core.cst$kw$icon_DASH_button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null),cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"300"], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null)], null);
})], null));
});
