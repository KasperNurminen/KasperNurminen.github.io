// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.std_interceptors');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('clojure.data');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.cofx');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.utils');
/**
 * An interceptor which logs/instruments an event handler's actions to
 *   `js/console.debug`. See examples/todomvc/src/events.cljs for use.
 * 
 *   Output includes:
 *   1. the event vector
 *   2. a `clojure.data/diff` of db, before vs after, which shows
 *   the changes caused by the event handler.  You will absolutely have
 *   to understand https://clojuredocs.org/clojure.data/diff to
 *   understand the output.
 * 
 *   You'd typically include this interceptor after (to the right of) any
 *   path interceptor.
 * 
 *   Warning:  calling clojure.data/diff on large, complex data structures
 *   can be slow. So, you won't want this interceptor present in production
 *   code. So condition it out like this :
 * 
 *  (mranderson048.re-frame.v0v10v2.re-frame.core/reg-event-db
 *     :evt-id
 *     [(when ^boolean goog.DEBUG mranderson048.re-frame.v0v10v2.re-frame.core/debug)]  ;; <-- conditional
 *     (fn [db v]
 *       ...))
 * 
 *   To make this code fragment work, you'll also have to set goog.DEBUG to
 *   false in your production builds - look in `project.clj` of /examples/todomvc.
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.debug = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$debug_before(context){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"Handling mranderson048.re-frame.v0v10v2.re-frame event:",mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442)));

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$debug_after(context){
var event = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("mranderson048.re-frame.v0v10v2.re-frame.std-interceptors","not-found","mranderson048.re-frame.v0v10v2.re-frame.std-interceptors/not-found",1152811618));
if(cljs.core._EQ_.call(null,new_db,new cljs.core.Keyword("mranderson048.re-frame.v0v10v2.re-frame.std-interceptors","not-found","mranderson048.re-frame.v0v10v2.re-frame.std-interceptors/not-found",1152811618))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"No :db changes caused by:",event);
} else {
var vec__60257_60260 = clojure.data.diff.call(null,orig_db,new_db);
var only_before_60261 = cljs.core.nth.call(null,vec__60257_60260,(0),null);
var only_after_60262 = cljs.core.nth.call(null,vec__60257_60260,(1),null);
var db_changed_QMARK__60263 = ((!((only_before_60261 == null))) || (!((only_after_60262 == null))));
if(db_changed_QMARK__60263){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"group","group",582596132),"db clojure.data/diff for:",event);

mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only before:",only_before_60261);

mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"only after :",only_after_60262);

mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),"no app-db changes caused by:",event);
}
}

return context;
}));
/**
 * An interceptor which removes the first element of the event vector,
 *   allowing you to write more aesthetically pleasing event handlers. No
 *   leading underscore on the event-v!
 *   Your event handlers will look like this:
 * 
 *    (defn my-handler
 *      [db [x y z]]    ;; <-- instead of [_ x y z]
 *      ....)
 */
mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.trim_v = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"trim-v","trim-v",-1274938640),new cljs.core.Keyword(null,"before","before",-1633692388),(function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$trimv_before(context){
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null),cljs.core.subvec,(1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword("mranderson048.re-frame.v0v10v2.re-frame.std-interceptors","untrimmed-event","mranderson048.re-frame.v0v10v2.re-frame.std-interceptors/untrimmed-event",643476892)], null),mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442)));
}),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$trimv_after(context){
return cljs.core.assoc_in.call(null,mranderson048.re_frame.v0v10v2.re_frame.utils.dissoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword("mranderson048.re-frame.v0v10v2.re-frame.std-interceptors","untrimmed-event","mranderson048.re-frame.v0v10v2.re-frame.std-interceptors/untrimmed-event",643476892)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null),mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword("mranderson048.re-frame.v0v10v2.re-frame.std-interceptors","untrimmed-event","mranderson048.re-frame.v0v10v2.re-frame.std-interceptors/untrimmed-event",643476892)));
}));
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *   (fn [db event]
 *   ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.db_handler__GT_interceptor = (function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$db_handler__GT_interceptor(handler_fn){
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"db-handler","db-handler",579530098),new cljs.core.Keyword(null,"before","before",-1633692388),(function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$db_handler__GT_interceptor_$_db_handler_before(context){
var map__60264 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__60264__$1 = ((((!((map__60264 == null)))?(((((map__60264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60264):map__60264);
var db = cljs.core.get.call(null,map__60264__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.call(null,map__60264__$1,new cljs.core.Keyword(null,"event","event",301435442));
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),handler_fn.call(null,db,event));
}));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *   (fn [coeffects event]
 *   {:db ...
 *    :dispatch ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.fx_handler__GT_interceptor = (function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$fx_handler__GT_interceptor(handler_fn){
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),new cljs.core.Keyword(null,"before","before",-1633692388),(function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$fx_handler__GT_interceptor_$_fx_handler_before(context){
var map__60266 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__60266__$1 = ((((!((map__60266 == null)))?(((((map__60266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60266):map__60266);
var coeffects = map__60266__$1;
var event = cljs.core.get.call(null,map__60266__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"effects","effects",-282369292),handler_fn.call(null,coeffects,event));
}));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 *   (fn [context]
 *      (enqueue context [more interceptors]))
 */
mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.ctx_handler__GT_interceptor = (function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$ctx_handler__GT_interceptor(handler_fn){
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ctx-handler","ctx-handler",-1777672230),new cljs.core.Keyword(null,"before","before",-1633692388),handler_fn);
});
/**
 * returns an interceptor whose `:before` substitutes the coeffects `:db` with
 *   a sub-path of `:db`. Within `:after` it grafts the handler's return value
 *   back into db, at the right path.
 * 
 *   So, its overall action is to make the event handler behave like the function
 *   you might give to clojure's `update-in`.
 * 
 *   Examples:
 *  (path :some :path)
 *  (path [:some :path])
 *  (path [:some :path] :to :here)
 *  (path [:some :path] [:to] :here)
 * 
 *   Example Use:
 * 
 *  (reg-event-db
 *    :event-id
 *    (path [:a :b])  ;; used here, in interceptor chain
 *    (fn [b v]       ;; 1st arg is now not db. Is the value from path [:a :b] within db
 *      ... new-b))   ;; returns a new value for that path (not the entire db)
 * 
 *   Notes:
 *  1. `path` may appear more than once in an interceptor chain. Progressive narrowing.
 *  2. if `:effects` contains no `:db` effect, can't graft a value back in.
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.path = (function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$path(var_args){
var args__4502__auto__ = [];
var len__4499__auto___60269 = arguments.length;
var i__4500__auto___60270 = (0);
while(true){
if((i__4500__auto___60270 < len__4499__auto___60269)){
args__4502__auto__.push((arguments[i__4500__auto___60270]));

var G__60271 = (i__4500__auto___60270 + (1));
i__4500__auto___60270 = G__60271;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten.call(null,args);
var db_store_key = new cljs.core.Keyword("re-frame-path","db-store","re-frame-path/db-store",655758490);
if(cljs.core.empty_QMARK_.call(null,path)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \"path\" interceptor given no params");
} else {
}

return mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"before","before",-1633692388),((function (path,db_store_key){
return (function (context){
var original_db = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect.call(null,cljs.core.update.call(null,context,db_store_key,cljs.core.conj,original_db),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.get_in.call(null,original_db,path));
});})(path,db_store_key))
,new cljs.core.Keyword(null,"after","after",594996914),((function (path,db_store_key){
return (function (context){
var db_store = db_store_key.cljs$core$IFn$_invoke$arity$1(context);
var original_db = cljs.core.peek.call(null,db_store);
var new_db_store = cljs.core.pop.call(null,db_store);
var context_SINGLEQUOTE_ = mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_coeffect.call(null,cljs.core.assoc.call(null,context,db_store_key,new_db_store),new cljs.core.Keyword(null,"db","db",993250759),original_db);
var db = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("mranderson048.re-frame.v0v10v2.re-frame.std-interceptors","not-found","mranderson048.re-frame.v0v10v2.re-frame.std-interceptors/not-found",1152811618));
if(cljs.core._EQ_.call(null,db,new cljs.core.Keyword("mranderson048.re-frame.v0v10v2.re-frame.std-interceptors","not-found","mranderson048.re-frame.v0v10v2.re-frame.std-interceptors/not-found",1152811618))){
return context_SINGLEQUOTE_;
} else {
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_effect.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,original_db,path,db));
}
});})(path,db_store_key))
);
});

mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq60268){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60268));
});

/**
 * Interceptor factory which runs the given function `f` in the `after handler`
 *   position.  `f` is called with two arguments: `db` and `v`, and is expected to
 *   return a modified `db`.
 * 
 *   Unlike the `after` interceptor which is only about side effects, `enrich`
 *   expects `f` to process and alter the given `db` coeffect in some useful way,
 *   contributing to the derived data, flowing vibe.
 * 
 *   Example Use:
 *   ------------
 * 
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them via a warning
 *   at the bottom of the panel.
 * 
 *   Almost any user action (edit text, add new todo, remove a todo) requires a
 *   complete reassessment of duplication errors and warnings. Eg: that edit
 *   just made might have introduced a new duplicate, or removed one. Same with
 *   any todo removal. So we need to re-calculate warnings after any CRUD events
 *   associated with the todos list.
 * 
 *   Unless we are careful, we might end up coding subtly different checks
 *   for each kind of CRUD operation.  The duplicates check made after
 *   'delete todo' event might be subtly different to that done after an
 *   editing operation. Nice and efficient, but fiddly. A bug generator
 *   approach.
 * 
 *   So, instead, we create an `f` which recalculates ALL warnings from scratch
 *   every time there is ANY change. It will inspect all the todos, and
 *   reset ALL FLAGS every time (overwriting what was there previously)
 *   and fully recalculate the list of duplicates (displayed at the bottom?).
 * 
 *   https://twitter.com/nathanmarz/status/879722740776939520
 * 
 *   By applying `f` in an `:enrich` interceptor, after every CRUD event,
 *   we keep the handlers simple and yet we ensure this important step
 *   (of getting warnings right) is not missed on any change.
 * 
 *   We can test `f` easily - it is a pure function - independently of
 *   any CRUD operation.
 * 
 *   This brings huge simplicity at the expense of some re-computation
 *   each time. This may be a very satisfactory trade-off in many cases.
 */
mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.enrich = (function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$enrich(f){
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enrich","enrich",-2108921925),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$enrich_$_enrich_after(context){
var event = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
var db = (function (){var or__3922__auto__ = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
}
})();
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),f.call(null,db,event));
}));
});
/**
 * returns an interceptor which runs a given function `f` in the `:after`
 *   position, presumably for side effects.
 * 
 *   `f` is called with two arguments: the `:effects` value for `:db`
 *   (or the `coeffect` value of db if no db effect is returned) and the event.
 *   Its return value is ignored, so `f` can only side-effect.
 * 
 *   Examples use can be seen in the /examples/todomvc:
 *   - `f` runs schema validation (reporting any errors found).
 *   - `f` writes to localstorage.
 */
mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.after = (function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$after(f){
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$after_$_after_after(context){
var db = (function (){var or__3922__auto__ = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
}
})();
var event = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"event","event",301435442));
f.call(null,db,event);

return context;
}));
});
/**
 * Interceptor factory which acts a bit like `reaction`  (but it flows into
 *   `db`, rather than out). It observes N paths within `db` and if any of them
 *   test not identical? to their previous value  (as a result of a event handler
 *   being run) then it runs `f` to compute a new value, which is then assoc-ed
 *   into the given `out-path` within `db`.
 * 
 *   Usage:
 * 
 *   (defn my-f
 *  [a-val b-val]
 *  ... some computation on a and b in here)
 * 
 *   (on-changes my-f [:c]  [:a] [:b])
 * 
 *   Put this Interceptor on the right handlers (ones which might change :a or :b).
 *   It will:
 *   - call `f` each time the value at path [:a] or [:b] changes
 *   - call `f` with the values extracted from [:a] [:b]
 *   - assoc the return value from `f` into the path  [:c]
 *   
 */
mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.on_changes = (function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$on_changes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___60277 = arguments.length;
var i__4500__auto___60278 = (0);
while(true){
if((i__4500__auto___60278 < len__4499__auto___60277)){
args__4502__auto__.push((arguments[i__4500__auto___60278]));

var G__60279 = (i__4500__auto___60278 + (1));
i__4500__auto___60278 = G__60279;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-changes","on-changes",1345912602),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$std_interceptors$on_change_after(context){
var new_db = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var old_db = mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_coeffect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759));
var new_ins = cljs.core.map.call(null,((function (new_db,old_db){
return (function (p1__60272_SHARP_){
return cljs.core.get_in.call(null,new_db,p1__60272_SHARP_);
});})(new_db,old_db))
,in_paths);
var old_ins = cljs.core.map.call(null,((function (new_db,old_db,new_ins){
return (function (p1__60273_SHARP_){
return cljs.core.get_in.call(null,old_db,p1__60273_SHARP_);
});})(new_db,old_db,new_ins))
,in_paths);
var changed_ins_QMARK_ = (function (){var and__3911__auto__ = cljs.core.contains_QMARK_.call(null,mranderson048.re_frame.v0v10v2.re_frame.interceptor.get_effect.call(null,context),new cljs.core.Keyword(null,"db","db",993250759));
if(and__3911__auto__){
return cljs.core.some.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs.core.identical_QMARK_,new_ins,old_ins));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(changed_ins_QMARK_)){
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.assoc_effect.call(null,context,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new_db,out_path,cljs.core.apply.call(null,f,new_ins)));
} else {
return context;
}
}));
});

mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mranderson048.re_frame.v0v10v2.re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq60274){
var G__60275 = cljs.core.first.call(null,seq60274);
var seq60274__$1 = cljs.core.next.call(null,seq60274);
var G__60276 = cljs.core.first.call(null,seq60274__$1);
var seq60274__$2 = cljs.core.next.call(null,seq60274__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60275,G__60276,seq60274__$2);
});


//# sourceMappingURL=std_interceptors.js.map?rel=1600694569204
