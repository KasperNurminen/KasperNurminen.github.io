// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure_cv.views.portfolio');
goog.require('cljs.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('re_frame.core');
goog.require('accountant.core');
goog.require('reagent.core');
goog.require('clojure_cv.subs');
goog.require('clojure_cv.texts');
clojure_cv.views.portfolio.render_buttons = (function clojure_cv$views$portfolio$render_buttons(buttons){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.flex-wrap.justify-content-center","div.d-flex.flex-wrap.justify-content-center",-109420154),cljs.core.map.call(null,(function (button){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"github","github",567794498),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(button)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"label-position","label-position",-1546831329),"before",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"icon","icon",1679606541),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"32px",new cljs.core.Keyword(null,"width","width",-384071477),"32px",new cljs.core.Keyword(null,"src","src",-1651076051),"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"], null)], null))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(button)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(button)], null));
}),buttons)], null);
});
clojure_cv.views.portfolio.render_portfolio_section = (function clojure_cv$views$portfolio$render_portfolio_section(key){
var with_let58340 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let58340","with-let58340",1074428599));
var temp__4661__auto___58342 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___58342 == null)){
} else {
var c__26290__auto___58343 = temp__4661__auto___58342;
if((with_let58340.generation === c__26290__auto___58343.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let58340.generation = c__26290__auto___58343.ratomGeneration;
}


var init58341 = (with_let58340.length === (0));
var _ = ((init58341)?(with_let58340[(0)] = re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-section","set-current-section",942818627),cljs.core.name.call(null,key)], null))):(with_let58340[(0)]));
var res__26291__auto__ = (function (){var image_enlarged = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image-enlarged","image-enlarged",-1374926525)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.align-items-center","div.row.align-items-center",1483268845),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-7","div.col-md-7",-21738748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-center","h1.text-center",-1568361949),cljs.core.get_in.call(null,clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"title","title",636505583)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"Used technologies:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get_in.call(null,clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"technologies","technologies",2141321343)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(cljs.core.truth_(cljs.core.deref.call(null,image_enlarged))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cover","div.cover",-408755428)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.portfolio-image.detail-page","div.portfolio-image.detail-page",-1647271094),cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.deref.call(null,image_enlarged))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"enlarged"], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (image_enlarged,init58341,_,with_let58340){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-image-enlargement","toggle-image-enlargement",-1709845865)], null));
});})(image_enlarged,init58341,_,with_let58340))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(../../assets/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key)),".webp)"].join('')], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.m-4","div.row.m-4",-957510847),cljs.core.get_in.call(null,clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"text","text",-1790561697)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.flex-column","div.row.flex-column",-260832741),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_buttons,cljs.core.get_in.call(null,clojure_cv.texts.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"buttons","buttons",-1953831197)], null))], null)], null)], null);
})();

return res__26291__auto__;
});
clojure_cv.views.portfolio.ilmomasiina = (function clojure_cv$views$portfolio$ilmomasiina(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_portfolio_section,new cljs.core.Keyword(null,"ilmomasiina","ilmomasiina",-1135755978)], null);
});
clojure_cv.views.portfolio.kaspernurminen = (function clojure_cv$views$portfolio$kaspernurminen(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_portfolio_section,new cljs.core.Keyword(null,"kaspernurminenfi","kaspernurminenfi",-340247127)], null);
});
clojure_cv.views.portfolio.oloscreen = (function clojure_cv$views$portfolio$oloscreen(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_portfolio_section,new cljs.core.Keyword(null,"oloscreen","oloscreen",1025292673)], null);
});
clojure_cv.views.portfolio.infodisplay = (function clojure_cv$views$portfolio$infodisplay(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_portfolio_section,new cljs.core.Keyword(null,"infodisplay","infodisplay",-1687607920)], null);
});
clojure_cv.views.portfolio.gameservice = (function clojure_cv$views$portfolio$gameservice(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_portfolio_section,new cljs.core.Keyword(null,"gameservice","gameservice",-630960815)], null);
});
clojure_cv.views.portfolio.asumistukilaskuri = (function clojure_cv$views$portfolio$asumistukilaskuri(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_portfolio_section,new cljs.core.Keyword(null,"asumistukilaskuri","asumistukilaskuri",-705936544)], null);
});
clojure_cv.views.portfolio.ydinbook = (function clojure_cv$views$portfolio$ydinbook(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_cv.views.portfolio.render_portfolio_section,new cljs.core.Keyword(null,"ydinbook","ydinbook",110938336)], null);
});

//# sourceMappingURL=portfolio.js.map?rel=1600694563229
