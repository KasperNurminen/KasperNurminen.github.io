// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (){
});

reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(){
return (new reagent.impl.template.NativeWrapper());
});

reagent.impl.template.named_QMARK_ = (function reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.template.named_QMARK_(x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x)) || ((x instanceof reagent.impl.template.NativeWrapper)));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.template.named_QMARK_(k)){
var temp__4659__auto__ = reagent.impl.template.cache_get(reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__4659__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name(k)] = reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__4659__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.js_val_QMARK_ = (function reagent$impl$template$js_val_QMARK_(x){
return !(("object" === goog.typeOf(x)));
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__5613 = o;
(G__5613[reagent.impl.template.cached_prop_name(k)] = (reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : reagent.impl.template.convert_prop_value.call(null,v)));

return G__5613;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__5614__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__5614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5615__i = 0, G__5615__a = new Array(arguments.length -  0);
while (G__5615__i < G__5615__a.length) {G__5615__a[G__5615__i] = arguments[G__5615__i + 0]; ++G__5615__i;}
  args = new cljs.core.IndexedSeq(G__5615__a,0,null);
} 
return G__5614__delegate.call(this,args);};
G__5614.cljs$lang$maxFixedArity = 0;
G__5614.cljs$lang$applyTo = (function (arglist__5616){
var args = cljs.core.seq(arglist__5616);
return G__5614__delegate(args);
});
G__5614.cljs$core$IFn$_invoke$arity$variadic = G__5614__delegate;
return G__5614;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
reagent.impl.template.oset = (function reagent$impl$template$oset(o,k,v){
var G__5617 = (((o == null))?({}):o);
(G__5617[k] = v);

return G__5617;
});
reagent.impl.template.oget = (function reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(p,id_class){
var id = (id_class["id"]);
var p__$1 = ((((!((id == null))) && ((reagent.impl.template.oget(p,"id") == null))))?reagent.impl.template.oset(p,"id",id):p);
var temp__4659__auto__ = (id_class["className"]);
if((temp__4659__auto__ == null)){
return p__$1;
} else {
var class$ = temp__4659__auto__;
var old = reagent.impl.template.oget(p__$1,"className");
return reagent.impl.template.oset(p__$1,"className",(((old == null))?class$:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old)].join('')));
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
return reagent.impl.template.set_id_class(reagent.impl.template.convert_prop_value(props),id_class);
});
if(typeof reagent.impl.template.find_dom_node !== 'undefined'){
} else {
reagent.impl.template.find_dom_node = null;
}
reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.template.has_selection_api_QMARK_ = (function reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(reagent.impl.template.these_inputs_have_selection_api,input_type);
});
reagent.impl.template.input_set_value = (function reagent$impl$template$input_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = (reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1(this$) : reagent.impl.template.find_dom_node.call(null,this$));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
if(!((((node === (document["activeElement"]))) && (reagent.impl.template.has_selection_api_QMARK_((node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string')))){
(this$["cljsDOMValue"] = rendered_value);

return (node["value"] = rendered_value);
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
return reagent.impl.batching.do_after_render(((function (node_value,rendered_value,dom_value,node){
return (function (){
return (reagent.impl.template.input_set_value.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.input_set_value.cljs$core$IFn$_invoke$arity$1(this$) : reagent.impl.template.input_set_value.call(null,this$));
});})(node_value,rendered_value,dom_value,node))
);
} else {
var existing_offset_from_end = (cljs.core.count(node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
(this$["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
} else {
return null;
}
} else {
return null;
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_after_render((function (){
return reagent.impl.template.input_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__3911__auto__ = !((jsprops == null));
if(and__3911__auto__){
var and__3911__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__3911__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
if(cljs.core.truth_(reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__5619 = jsprops;
(G__5619["defaultValue"] = value);

(G__5619["onChange"] = ((function (G__5619,v,value,on_change){
return (function (p1__5618_SHARP_){
return reagent.impl.template.input_handle_change(this$,on_change,p1__5618_SHARP_);
});})(G__5619,v,value,on_change))
);

return G__5619;
} else {
return null;
}
});
reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
var G__5620 = x;
switch (G__5620) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"ReagentInput",cljs.core.cst$kw$component_DASH_did_DASH_update,reagent.impl.template.input_set_value,cljs.core.cst$kw$component_DASH_will_DASH_unmount,reagent.impl.template.input_unmount,cljs.core.cst$kw$reagent_DASH_render,(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup(this$,jsprops);

return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child));
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class(reagent.impl.template.input_spec);
} else {
}

return reagent.impl.template.reagent_input_class;
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__5622 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5622,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5622,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5622,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace(class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name())].join('')),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "className": class$__$1});
});
reagent.impl.template.try_get_key = (function reagent$impl$template$try_get_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$key);
}catch (e5625){var e = e5625;
return null;
}});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return reagent.impl.template.try_get_key(x);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__4659__auto__ = reagent.impl.template.get_key(cljs.core.meta(v));
if((temp__4659__auto__ == null)){
return reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__4659__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.component.as_class(tag);
var jsprops = ({"argv": v});
var temp__4661__auto___5626 = reagent.impl.template.key_from_vec(v);
if((temp__4661__auto___5626 == null)){
} else {
var key_5627 = temp__4661__auto___5626;
(jsprops["key"] = key_5627);
}

return (reagent.impl.util.react["createElement"])(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
var G__5628 = reagent.impl.template.__GT_NativeWrapper();
(G__5628["name"] = c);

(G__5628["id"] = null);

(G__5628["class"] = null);

return G__5628;
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__4659__auto__ = reagent.impl.template.cache_get(reagent.impl.template.tag_name_cache,x);
if((temp__4659__auto__ == null)){
return (reagent.impl.template.tag_name_cache[x] = reagent.impl.template.parse_tag(x));
} else {
var s = temp__4659__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.template.input_component_QMARK_(comp)){
var G__5629 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input(),argv,comp,jsprops,first_child], null),cljs.core.meta(argv));
return (reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__5629) : reagent.impl.template.as_element.call(null,G__5629));
} else {
var key = reagent.impl.template.get_key(cljs.core.meta(argv));
var p = (((key == null))?jsprops:reagent.impl.template.oset(jsprops,"key",key));
return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,p,first_child) : reagent.impl.template.make_element.call(null,argv,comp,p,first_child));
}
});
reagent.impl.template.str_coll = (function reagent$impl$template$str_coll(coll){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = reagent.impl.util.fun_name(x);
var G__5630 = n;
switch (G__5630) {
case "":
return x;

break;
default:
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
} else {
return x;
}
}),coll))].join('');

});
reagent.impl.template.hiccup_err = (function reagent$impl$template$hiccup_err(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5634 = arguments.length;
var i__4500__auto___5635 = (0);
while(true){
if((i__4500__auto___5635 < len__4499__auto___5634)){
args__4502__auto__.push((arguments[i__4500__auto___5635]));

var G__5636 = (i__4500__auto___5635 + (1));
i__4500__auto___5635 = G__5636;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.str_coll(v)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name())].join('');
});

reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq5632){
var G__5633 = cljs.core.first(seq5632);
var seq5632__$1 = cljs.core.next(seq5632);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5633,seq5632__$1);
});

reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0))),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0))),"\n","(valid-tag? tag)"].join('')));
}

if(reagent.impl.template.hiccup_tag_QMARK_(tag)){
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__5637 = pos;
switch (G__5637) {
case (-1):
return reagent.impl.template.native_element(reagent.impl.template.cached_parse(n),v,(1));

break;
case (0):
var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0))),"\n","(= \">\" n)"].join('')));
}

if(((typeof comp === 'string') || (cljs.core.fn_QMARK_(comp)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected React component in"], 0))),"\n","(or (string? comp) (fn? comp))"].join('')));
}

return reagent.impl.template.native_element(({"name": comp}),v,(2));

break;
default:
var G__5639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null);
v = G__5639;
continue;

}
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element(tag,v,(1));
} else {
return reagent.impl.template.reag_element(tag,v);

}
}
break;
}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return (reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1(x) : reagent.impl.template.expand_seq_check.call(null,x));

} else {
if(reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
reagent.impl.component.as_element = reagent.impl.template.as_element;
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4376__auto___5641 = a.length;
var i_5642 = (0);
while(true){
if((i_5642 < n__4376__auto___5641)){
(a[i_5642] = reagent.impl.template.as_element((a[i_5642])));

var G__5643 = (i_5642 + (1));
i_5642 = G__5643;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4376__auto___5644 = a.length;
var i_5645 = (0);
while(true){
if((i_5645 < n__4376__auto___5644)){
var val_5646 = (a[i_5645]);
if(((cljs.core.vector_QMARK_(val_5646)) && ((reagent.impl.template.key_from_vec(val_5646) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_5645] = reagent.impl.template.as_element(val_5646));

var G__5647 = (i_5645 + (1));
i_5645 = G__5647;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__5648 = reagent.ratom.check_derefs(((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev(x,ctx);
});})(ctx))
);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5648,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5648,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0)))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0)))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__5651 = (cljs.core.count(argv) - first_child);
switch (G__5651) {
case (0):
return (reagent.impl.util.react["createElement"])(comp,jsprops);

break;
case (1):
return (reagent.impl.util.react["createElement"])(comp,jsprops,reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null)));

break;
default:
return (reagent.impl.util.react["createElement"]).apply(null,cljs.core.reduce_kv(((function (G__5651){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element(v));
} else {
}

return a;
});})(G__5651))
,[comp,jsprops],argv));

}
});
