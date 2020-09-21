// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure_cv.views.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('cljsjs.react_tooltip');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('clojure_cv.views.sections');
goog.require('accountant.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljs_react_material_ui.icons');
clojure_cv.views.core.menu_button = (function clojure_cv$views$core$menu_button(label,id){
var current_section = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-section","current-section",1519906460)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,cljs.core.merge.call(null,((cljs.core._EQ_.call(null,id,cljs.core.deref.call(null,current_section)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"primary","primary",817773892),true], null):null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_section){
return (function (){
window.setTimeout(((function (current_section){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-section","set-current-section",942818627),id], null));
});})(current_section))
,(600));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scroll-into-view","scroll-into-view",-549713383),id], null));
});})(current_section))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null),new cljs.core.Keyword(null,"label","label",1718410804),label], null))], null);
});
clojure_cv.views.core.portfolio_pages = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["kaspernurminenfi",null,"oloscreen",null,"ilmomasiina",null,"infodisplay",null,"ydinbook",null,"gameservice",null,"asumistukilaskuri",null], null), null);
clojure_cv.views.core.menu_icons = (function clojure_cv$views$core$menu_icons(menu_open){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mr-2.menu-icons","div.mr-2.menu-icons",1624701375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(menu_open)?"menu-icons-expanded":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Basic Information","main"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Skills","skills"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Job Experience","job-experience"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Education","education"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Achievements","achievements"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Portfolio","portfolio"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_button,"Contact me","contact"], null)], null);
});
clojure_cv.views.core.header = (function clojure_cv$views$core$header(){
var menu_open = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null));
var scroll_is_at_beginning = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scroll-is-at-beginning","scroll-is-at-beginning",881196327)], null));
var current_section = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-section","current-section",1519906460)], null));
var is_portfolio_page_QMARK_ = cljs.core.contains_QMARK_.call(null,clojure_cv.views.core.portfolio_pages,cljs.core.deref.call(null,current_section));
var image_enlarged = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image-enlarged","image-enlarged",-1374926525)], null));
var header_class_names = (function (){var G__54961 = "";
var G__54961__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54961),"header"].join('')
;
var G__54961__$2 = (cljs.core.truth_(cljs.core.deref.call(null,menu_open))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54961__$1)," header-expanded"].join(''):G__54961__$1);
var G__54961__$3 = (cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"main",cljs.core.deref.call(null,current_section));
if(and__3911__auto__){
return cljs.core.deref.call(null,scroll_is_at_beginning);
} else {
return and__3911__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54961__$2)," black"].join(''):G__54961__$2);
var G__54961__$4 = ((is_portfolio_page_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54961__$3)," pos-absolute"].join(''):G__54961__$3);
if(cljs.core.truth_(cljs.core.deref.call(null,image_enlarged))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54961__$4)," hidden"].join('');
} else {
return G__54961__$4;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.paper,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),header_class_names], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.ml-4","h3.ml-4",542198822),"CV - Kasper Nurminen"], null),((is_portfolio_page_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (menu_open,scroll_is_at_beginning,current_section,is_portfolio_page_QMARK_,image_enlarged,header_class_names){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate-to-portfolio","navigate-to-portfolio",-144572198)], null));
});})(menu_open,scroll_is_at_beginning,current_section,is_portfolio_page_QMARK_,image_enlarged,header_class_names))
], null),"Back"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.menu_icons,cljs.core.deref.call(null,menu_open)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.icon_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"menu-select",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (menu_open,scroll_is_at_beginning,current_section,is_portfolio_page_QMARK_,image_enlarged,header_class_names){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-menu","toggle-menu",-1127424735)], null));
});})(menu_open,scroll_is_at_beginning,current_section,is_portfolio_page_QMARK_,image_enlarged,header_class_names))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.icons.navigation_menu], null)], null)], null))], null);
});
clojure_cv.views.core.on_scroll = (function clojure_cv$views$core$on_scroll(sections){
var scroll_y = window.scrollY;
var prev_section = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-section","current-section",1519906460)], null));
var inner_height = window.innerHeight;
var identity_or_last_section = ((function (scroll_y,prev_section,inner_height){
return (function (p1__54962_SHARP_){
if(cljs.core.truth_(p1__54962_SHARP_)){
return p1__54962_SHARP_;
} else {
return cljs.core.last.call(null,sections);
}
});})(scroll_y,prev_section,inner_height))
;
var current_section = identity_or_last_section.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (scroll_y,prev_section,inner_height,identity_or_last_section){
return (function (p1__54963_SHARP_){
return ((0) < ((p1__54963_SHARP_.offsetTop - scroll_y) - (- (inner_height / (2)))));
});})(scroll_y,prev_section,inner_height,identity_or_last_section))
,sections))).id;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scroll-is-at-beginning","scroll-is-at-beginning",881196327),cljs.core._EQ_.call(null,(0),scroll_y)], null));

if(!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,prev_section),current_section))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-section","set-current-section",942818627),current_section], null));
} else {
return null;
}
});
clojure_cv.views.core.on_resize = (function clojure_cv$views$core$on_resize(){
var menu_open = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null));
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref.call(null,menu_open);
if(cljs.core.truth_(and__3911__auto__)){
return ((1080) < window.innerWidth);
} else {
return and__3911__auto__;
}
})())){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-menu","toggle-menu",-1127424735)], null));
} else {
return null;
}
});
clojure_cv.views.core.main_page = (function clojure_cv$views$core$main_page(){
var menu_open = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295)], null));
var current_section = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-section","current-section",1519906460)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (menu_open,current_section){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,menu_open))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-menu","toggle-menu",-1127424735)], null));
} else {
return null;
}
});})(menu_open,current_section))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-image","div.main-image",-1287994214),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-title","div.main-title",-761722117),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"Kasper Nurminen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(0)], null)], null),"Software Engineer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.floating_action_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mini","mini",1024876972),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (menu_open,current_section){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scroll-into-view","scroll-into-view",-549713383),"main"], null));
});})(menu_open,current_section))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.icons.hardware_keyboard_arrow_down,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"42px"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slanted-bar","div.slanted-bar",1244285795)], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid.p-0","div.container-fluid.p-0",-50017250),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.about], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.skills], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.job_experience], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.education], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.achievements], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.portfolio], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.contact], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.sections.copyright], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.floating_action_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"secondary","secondary",-669381460),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (menu_open,current_section){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scroll-into-view","scroll-into-view",-549713383),"main"], null));
});})(menu_open,current_section))
,new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_section),"main"))?"hidden top-button":"top-button")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.icons.hardware_keyboard_arrow_up,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"52px"], null)], null)], null)], null)], null)], null);
});
clojure_cv.views.core.main_panel = (function clojure_cv$views$core$main_panel(page){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var sections = document.getElementsByTagName("section");
window.addEventListener("resize",clojure_cv.views.core.on_resize);

return document.addEventListener("scroll",((function (sections){
return (function (){
return clojure_cv.views.core.on_scroll.call(null,Array.from(sections));
});})(sections))
);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
document.removeEventListener("scroll",clojure_cv.views.core.on_scroll);

return window.removeEventListener("resize",clojure_cv.views.core.on_resize);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"floating-action-button","floating-action-button",-935765260),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#4199ee",new cljs.core.Keyword(null,"secondary-color","secondary-color",1338634739),"#ffffff"], null),new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary-1-color","primary-1-color",236487096),"#4199ee",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Lato', sans-serif"], null),new cljs.core.Keyword(null,"icon-button","icon-button",-1094997778),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"300"], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null)], null);
})], null));
});

//# sourceMappingURL=core.js.map?rel=1600694555124
