// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure_cv.views.portfolio');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_react_material_ui.reagent');
goog.require('re_frame.core');
goog.require('accountant.core');
goog.require('reagent.core');
goog.require('clojure_cv.subs');
goog.require('clojure_cv.texts');
clojure_cv.views.portfolio.render_buttons = (function clojure_cv$views$portfolio$render_buttons(buttons){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$d_DASH_flex$flex_DASH_wrap$justify_DASH_content_DASH_center,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (button){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$github,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(button)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$label,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(button),cljs.core.cst$kw$label_DASH_position,"before",cljs.core.cst$kw$target,"_blank",cljs.core.cst$kw$href,cljs.core.cst$kw$href.cljs$core$IFn$_invoke$arity$1(button),cljs.core.cst$kw$icon,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"32px",cljs.core.cst$kw$width,"32px",cljs.core.cst$kw$src,"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"], null)], null))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(button),cljs.core.cst$kw$target,"_blank",cljs.core.cst$kw$href,cljs.core.cst$kw$href.cljs$core$IFn$_invoke$arity$1(button)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(button)], null));
}),buttons)], null);
});
clojure_cv.views.portfolio.render_portfolio_section = (function clojure_cv$views$portfolio$render_portfolio_section(key){
var with_let15538 = reagent.ratom.with_let_values(cljs.core.cst$kw$with_DASH_let15538);
var temp__4661__auto___15543 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___15543 == null)){
} else {
var c__5404__auto___15544 = temp__4661__auto___15543;
if((with_let15538.generation === c__5404__auto___15544.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let15538.generation = c__5404__auto___15544.ratomGeneration;
}


var init15539 = (with_let15538.length === (0));
var _ = ((init15539)?(with_let15538[(0)] = (function (){var G__15540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_current_DASH_section,cljs.core.name(key)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15540) : re_frame.core.dispatch.call(null,G__15540));
})()):(with_let15538[(0)]));
var res__5405__auto__ = (function (){var image_enlarged = (function (){var G__15541 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image_DASH_enlarged], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15541) : re_frame.core.subscribe.call(null,G__15541));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$align_DASH_items_DASH_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_7,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_center,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.cst$kw$title], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,"monospace"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,"Used technologies:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.cst$kw$technologies], null))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,(cljs.core.truth_(cljs.core.deref(image_enlarged))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$cover], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$portfolio_DASH_image$detail_DASH_page,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.deref(image_enlarged))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"enlarged"], null):null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (image_enlarged,init15539,_,with_let15538){
return (function (){
var G__15542 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_image_DASH_enlargement], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15542) : re_frame.core.dispatch.call(null,G__15542));
});})(image_enlarged,init15539,_,with_let15538))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_image,["url(../../assets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key)),".webp)"].join('')], null)], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$m_DASH_4,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.cst$kw$text], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$flex_DASH_column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_buttons,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.cst$kw$buttons], null))], null)], null)], null);
})();

return res__5405__auto__;
});
clojure_cv.views.portfolio.ilmomasiina = (function clojure_cv$views$portfolio$ilmomasiina(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_portfolio_section,cljs.core.cst$kw$ilmomasiina], null);
});
clojure_cv.views.portfolio.kaspernurminen = (function clojure_cv$views$portfolio$kaspernurminen(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_portfolio_section,cljs.core.cst$kw$kaspernurminenfi], null);
});
clojure_cv.views.portfolio.oloscreen = (function clojure_cv$views$portfolio$oloscreen(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_portfolio_section,cljs.core.cst$kw$oloscreen], null);
});
clojure_cv.views.portfolio.infodisplay = (function clojure_cv$views$portfolio$infodisplay(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_portfolio_section,cljs.core.cst$kw$infodisplay], null);
});
