if(!lt.util.load.provided_QMARK_('lt.plugins.groovy.graph')) {
goog.provide('lt.plugins.groovy.graph');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.plugins');
goog.require('lt.util.load');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
lt.plugins.groovy.graph.plugin_dir = lt.objs.plugins.find_plugin.call(null,"Groovy");
lt.plugins.groovy.graph.dependency_graph_ui = (function dependency_graph_ui(this$){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph","div.graph",2030351651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dependency-graph","div.dependency-graph",3039800187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:svg","svg:svg",3472817088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),"650",new cljs.core.Keyword(null,"height","height",4087841945),"680"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg:g","svg:g",1123725379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(20,20)"], null)], null)], null)], null)], null));var seq__8382_8503 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8383_8504 = null;var count__8384_8505 = 0;var i__8385_8506 = 0;while(true){
if((i__8385_8506 < count__8384_8505))
{var vec__8386_8507 = cljs.core._nth.call(null,chunk__8383_8504,i__8385_8506);var ev__7756__auto___8508 = cljs.core.nth.call(null,vec__8386_8507,0,null);var func__7757__auto___8509 = cljs.core.nth.call(null,vec__8386_8507,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8508,func__7757__auto___8509);
{
var G__8510 = seq__8382_8503;
var G__8511 = chunk__8383_8504;
var G__8512 = count__8384_8505;
var G__8513 = (i__8385_8506 + 1);
seq__8382_8503 = G__8510;
chunk__8383_8504 = G__8511;
count__8384_8505 = G__8512;
i__8385_8506 = G__8513;
continue;
}
} else
{var temp__4092__auto___8514 = cljs.core.seq.call(null,seq__8382_8503);if(temp__4092__auto___8514)
{var seq__8382_8515__$1 = temp__4092__auto___8514;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8382_8515__$1))
{var c__7112__auto___8516 = cljs.core.chunk_first.call(null,seq__8382_8515__$1);{
var G__8517 = cljs.core.chunk_rest.call(null,seq__8382_8515__$1);
var G__8518 = c__7112__auto___8516;
var G__8519 = cljs.core.count.call(null,c__7112__auto___8516);
var G__8520 = 0;
seq__8382_8503 = G__8517;
chunk__8383_8504 = G__8518;
count__8384_8505 = G__8519;
i__8385_8506 = G__8520;
continue;
}
} else
{var vec__8387_8521 = cljs.core.first.call(null,seq__8382_8515__$1);var ev__7756__auto___8522 = cljs.core.nth.call(null,vec__8387_8521,0,null);var func__7757__auto___8523 = cljs.core.nth.call(null,vec__8387_8521,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8522,func__7757__auto___8523);
{
var G__8524 = cljs.core.next.call(null,seq__8382_8515__$1);
var G__8525 = null;
var G__8526 = 0;
var G__8527 = 0;
seq__8382_8503 = G__8524;
chunk__8383_8504 = G__8525;
count__8384_8505 = G__8526;
i__8385_8506 = G__8527;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy.graph","dependency-graph","lt.plugins.groovy.graph/dependency-graph",4128469128),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph.dependency","graph.dependency",3487754077)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Dependency graph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.util.load.js.call(null,lt.objs.files.join.call(null,lt.plugins.groovy.graph.plugin_dir,"js/d3.v3.min.js"),new cljs.core.Keyword(null,"sync","sync",1017449997));
lt.util.load.js.call(null,lt.objs.files.join.call(null,lt.plugins.groovy.graph.plugin_dir,"js/dagre-d3.js"),new cljs.core.Keyword(null,"sync","sync",1017449997));
var content = lt.plugins.groovy.graph.dependency_graph_ui.call(null,this$);return content;
}));
lt.plugins.groovy.graph.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8528 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8528))
{var ts_8529 = temp__4092__auto___8528;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8529))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8529);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy.graph","on-close-destroy","lt.plugins.groovy.graph/on-close-destroy",1885650739),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.graph.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.groovy.graph.select_values = (function select_values(map,ks){return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.reduce.call(null,(function (p1__8388_SHARP_,p2__8389_SHARP_){return cljs.core.conj.call(null,p1__8388_SHARP_,map.call(null,p2__8389_SHARP_));
}),cljs.core.PersistentVector.EMPTY,ks));
});
lt.plugins.groovy.graph.dep_id = (function dep_id(dep){return clojure.string.join.call(null,":",lt.plugins.groovy.graph.select_values.call(null,dep,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"group","group",1112533489),new cljs.core.Keyword(null,"version","version",1365512266)], null)));
});
/**
* @param {...*} var_args
*/
lt.plugins.groovy.graph.create_graph = (function() { 
var create_graph__delegate = function (this$,conf_name,p__8390){var vec__8400 = p__8390;var proj = cljs.core.nth.call(null,vec__8400,0,null);var g = (new dagreD3.Digraph());var conf = (cljs.core.truth_(proj)?cljs.core.get.call(null,new cljs.core.Keyword(null,"configurations","configurations",799677871).cljs$core$IFn$_invoke$arity$1(lt.plugins.groovy.graph.proj_by_name.call(null,this$,proj)),cljs.core.keyword.call(null,conf_name)):cljs.core.get.call(null,new cljs.core.Keyword(null,"configurations","configurations",799677871).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rootDeps","rootDeps",846570936).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),cljs.core.keyword.call(null,conf_name)));g.addNode(cljs.core.name.call(null,conf_name),{"label": cljs.core.name.call(null,conf_name)});
var seq__8401_8530 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(conf));var chunk__8402_8531 = null;var count__8403_8532 = 0;var i__8404_8533 = 0;while(true){
if((i__8404_8533 < count__8403_8532))
{var x_8534 = cljs.core._nth.call(null,chunk__8402_8531,i__8404_8533);g.addNode(lt.plugins.groovy.graph.dep_id.call(null,x_8534),{"label": [cljs.core.str("<div class='graph-label "),cljs.core.str(((cljs.core._EQ_.call(null,"project",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(x_8534)))?[cljs.core.str(" clickable' data-proj-name='"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x_8534))].join(''):null)),cljs.core.str("' title='"),cljs.core.str(lt.plugins.groovy.graph.dep_id.call(null,x_8534)),cljs.core.str("'>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x_8534)),cljs.core.str("<br/>"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(x_8534)),cljs.core.str("</div>")].join('')});
{
var G__8535 = seq__8401_8530;
var G__8536 = chunk__8402_8531;
var G__8537 = count__8403_8532;
var G__8538 = (i__8404_8533 + 1);
seq__8401_8530 = G__8535;
chunk__8402_8531 = G__8536;
count__8403_8532 = G__8537;
i__8404_8533 = G__8538;
continue;
}
} else
{var temp__4092__auto___8539 = cljs.core.seq.call(null,seq__8401_8530);if(temp__4092__auto___8539)
{var seq__8401_8540__$1 = temp__4092__auto___8539;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8401_8540__$1))
{var c__7112__auto___8541 = cljs.core.chunk_first.call(null,seq__8401_8540__$1);{
var G__8542 = cljs.core.chunk_rest.call(null,seq__8401_8540__$1);
var G__8543 = c__7112__auto___8541;
var G__8544 = cljs.core.count.call(null,c__7112__auto___8541);
var G__8545 = 0;
seq__8401_8530 = G__8542;
chunk__8402_8531 = G__8543;
count__8403_8532 = G__8544;
i__8404_8533 = G__8545;
continue;
}
} else
{var x_8546 = cljs.core.first.call(null,seq__8401_8540__$1);g.addNode(lt.plugins.groovy.graph.dep_id.call(null,x_8546),{"label": [cljs.core.str("<div class='graph-label "),cljs.core.str(((cljs.core._EQ_.call(null,"project",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(x_8546)))?[cljs.core.str(" clickable' data-proj-name='"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x_8546))].join(''):null)),cljs.core.str("' title='"),cljs.core.str(lt.plugins.groovy.graph.dep_id.call(null,x_8546)),cljs.core.str("'>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x_8546)),cljs.core.str("<br/>"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(x_8546)),cljs.core.str("</div>")].join('')});
{
var G__8547 = cljs.core.next.call(null,seq__8401_8540__$1);
var G__8548 = null;
var G__8549 = 0;
var G__8550 = 0;
seq__8401_8530 = G__8547;
chunk__8402_8531 = G__8548;
count__8403_8532 = G__8549;
i__8404_8533 = G__8550;
continue;
}
}
} else
{}
}
break;
}
var seq__8405_8551 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(conf));var chunk__8406_8552 = null;var count__8407_8553 = 0;var i__8408_8554 = 0;while(true){
if((i__8408_8554 < count__8407_8553))
{var x_8555 = cljs.core._nth.call(null,chunk__8406_8552,i__8408_8554);g.addEdge(null,new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_8555),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_8555),{"label": ""});
{
var G__8556 = seq__8405_8551;
var G__8557 = chunk__8406_8552;
var G__8558 = count__8407_8553;
var G__8559 = (i__8408_8554 + 1);
seq__8405_8551 = G__8556;
chunk__8406_8552 = G__8557;
count__8407_8553 = G__8558;
i__8408_8554 = G__8559;
continue;
}
} else
{var temp__4092__auto___8560 = cljs.core.seq.call(null,seq__8405_8551);if(temp__4092__auto___8560)
{var seq__8405_8561__$1 = temp__4092__auto___8560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8405_8561__$1))
{var c__7112__auto___8562 = cljs.core.chunk_first.call(null,seq__8405_8561__$1);{
var G__8563 = cljs.core.chunk_rest.call(null,seq__8405_8561__$1);
var G__8564 = c__7112__auto___8562;
var G__8565 = cljs.core.count.call(null,c__7112__auto___8562);
var G__8566 = 0;
seq__8405_8551 = G__8563;
chunk__8406_8552 = G__8564;
count__8407_8553 = G__8565;
i__8408_8554 = G__8566;
continue;
}
} else
{var x_8567 = cljs.core.first.call(null,seq__8405_8561__$1);g.addEdge(null,new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_8567),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_8567),{"label": ""});
{
var G__8568 = cljs.core.next.call(null,seq__8405_8561__$1);
var G__8569 = null;
var G__8570 = 0;
var G__8571 = 0;
seq__8405_8551 = G__8568;
chunk__8406_8552 = G__8569;
count__8407_8553 = G__8570;
i__8408_8554 = G__8571;
continue;
}
}
} else
{}
}
break;
}
return g;
};
var create_graph = function (this$,conf_name,var_args){
var p__8390 = null;if (arguments.length > 2) {
  p__8390 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return create_graph__delegate.call(this,this$,conf_name,p__8390);};
create_graph.cljs$lang$maxFixedArity = 2;
create_graph.cljs$lang$applyTo = (function (arglist__8572){
var this$ = cljs.core.first(arglist__8572);
arglist__8572 = cljs.core.next(arglist__8572);
var conf_name = cljs.core.first(arglist__8572);
var p__8390 = cljs.core.rest(arglist__8572);
return create_graph__delegate(this$,conf_name,p__8390);
});
create_graph.cljs$core$IFn$_invoke$arity$variadic = create_graph__delegate;
return create_graph;
})()
;
lt.plugins.groovy.graph.on_select_project = (function on_select_project(ev){var proj = lt.util.dom.attr.call(null,ev.target,"data-proj-name");lt.plugins.groovy.graph.render_confs.call(null,lt.plugins.groovy.graph.dependency_graph,proj);
return lt.plugins.groovy.graph.render_deps.call(null,lt.plugins.groovy.graph.dependency_graph,new cljs.core.Keyword(null,"compile","compile",1964395941),proj);
});
lt.plugins.groovy.graph.bind_select_project = (function bind_select_project(this$){var seq__8413 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,".graph-label.clickable",new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var chunk__8414 = null;var count__8415 = 0;var i__8416 = 0;while(true){
if((i__8416 < count__8415))
{var x = cljs.core._nth.call(null,chunk__8414,i__8416);lt.util.dom.on.call(null,x,"click",lt.plugins.groovy.graph.on_select_project);
{
var G__8573 = seq__8413;
var G__8574 = chunk__8414;
var G__8575 = count__8415;
var G__8576 = (i__8416 + 1);
seq__8413 = G__8573;
chunk__8414 = G__8574;
count__8415 = G__8575;
i__8416 = G__8576;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8413);if(temp__4092__auto__)
{var seq__8413__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8413__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8413__$1);{
var G__8577 = cljs.core.chunk_rest.call(null,seq__8413__$1);
var G__8578 = c__7112__auto__;
var G__8579 = cljs.core.count.call(null,c__7112__auto__);
var G__8580 = 0;
seq__8413 = G__8577;
chunk__8414 = G__8578;
count__8415 = G__8579;
i__8416 = G__8580;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8413__$1);lt.util.dom.on.call(null,x,"click",lt.plugins.groovy.graph.on_select_project);
{
var G__8581 = cljs.core.next.call(null,seq__8413__$1);
var G__8582 = null;
var G__8583 = 0;
var G__8584 = 0;
seq__8413 = G__8581;
chunk__8414 = G__8582;
count__8415 = G__8583;
i__8416 = G__8584;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.groovy.graph.unbind_select_project = (function unbind_select_project(this$){var seq__8421 = cljs.core.seq.call(null,lt.util.dom.$$.call(null,".graph-label.clickable",new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var chunk__8422 = null;var count__8423 = 0;var i__8424 = 0;while(true){
if((i__8424 < count__8423))
{var x = cljs.core._nth.call(null,chunk__8422,i__8424);lt.util.dom.off.call(null,x,"click",lt.plugins.groovy.graph.on_select_project);
{
var G__8585 = seq__8421;
var G__8586 = chunk__8422;
var G__8587 = count__8423;
var G__8588 = (i__8424 + 1);
seq__8421 = G__8585;
chunk__8422 = G__8586;
count__8423 = G__8587;
i__8424 = G__8588;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8421);if(temp__4092__auto__)
{var seq__8421__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8421__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8421__$1);{
var G__8589 = cljs.core.chunk_rest.call(null,seq__8421__$1);
var G__8590 = c__7112__auto__;
var G__8591 = cljs.core.count.call(null,c__7112__auto__);
var G__8592 = 0;
seq__8421 = G__8589;
chunk__8422 = G__8590;
count__8423 = G__8591;
i__8424 = G__8592;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__8421__$1);lt.util.dom.off.call(null,x,"click",lt.plugins.groovy.graph.on_select_project);
{
var G__8593 = cljs.core.next.call(null,seq__8421__$1);
var G__8594 = null;
var G__8595 = 0;
var G__8596 = 0;
seq__8421 = G__8593;
chunk__8422 = G__8594;
count__8423 = G__8595;
i__8424 = G__8596;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.groovy.graph.create_multiproject_graph = (function create_multiproject_graph(this$){var g = (new dagreD3.Digraph());var seq__8433_8597 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(lt.plugins.groovy.graph.multi_proj_deps.call(null,this$)));var chunk__8434_8598 = null;var count__8435_8599 = 0;var i__8436_8600 = 0;while(true){
if((i__8436_8600 < count__8435_8599))
{var x_8601 = cljs.core._nth.call(null,chunk__8434_8598,i__8436_8600);g.addNode(lt.plugins.groovy.graph.dep_id.call(null,x_8601),{"label": [cljs.core.str("<div class='graph-label clickable' data-proj-name='"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x_8601)),cljs.core.str("' title='"),cljs.core.str(lt.plugins.groovy.graph.dep_id.call(null,x_8601)),cljs.core.str("'>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x_8601)),cljs.core.str("<br/>"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(x_8601)),cljs.core.str("</div>")].join('')});
{
var G__8602 = seq__8433_8597;
var G__8603 = chunk__8434_8598;
var G__8604 = count__8435_8599;
var G__8605 = (i__8436_8600 + 1);
seq__8433_8597 = G__8602;
chunk__8434_8598 = G__8603;
count__8435_8599 = G__8604;
i__8436_8600 = G__8605;
continue;
}
} else
{var temp__4092__auto___8606 = cljs.core.seq.call(null,seq__8433_8597);if(temp__4092__auto___8606)
{var seq__8433_8607__$1 = temp__4092__auto___8606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8433_8607__$1))
{var c__7112__auto___8608 = cljs.core.chunk_first.call(null,seq__8433_8607__$1);{
var G__8609 = cljs.core.chunk_rest.call(null,seq__8433_8607__$1);
var G__8610 = c__7112__auto___8608;
var G__8611 = cljs.core.count.call(null,c__7112__auto___8608);
var G__8612 = 0;
seq__8433_8597 = G__8609;
chunk__8434_8598 = G__8610;
count__8435_8599 = G__8611;
i__8436_8600 = G__8612;
continue;
}
} else
{var x_8613 = cljs.core.first.call(null,seq__8433_8607__$1);g.addNode(lt.plugins.groovy.graph.dep_id.call(null,x_8613),{"label": [cljs.core.str("<div class='graph-label clickable' data-proj-name='"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x_8613)),cljs.core.str("' title='"),cljs.core.str(lt.plugins.groovy.graph.dep_id.call(null,x_8613)),cljs.core.str("'>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x_8613)),cljs.core.str("<br/>"),cljs.core.str(new cljs.core.Keyword(null,"version","version",1365512266).cljs$core$IFn$_invoke$arity$1(x_8613)),cljs.core.str("</div>")].join('')});
{
var G__8614 = cljs.core.next.call(null,seq__8433_8607__$1);
var G__8615 = null;
var G__8616 = 0;
var G__8617 = 0;
seq__8433_8597 = G__8614;
chunk__8434_8598 = G__8615;
count__8435_8599 = G__8616;
i__8436_8600 = G__8617;
continue;
}
}
} else
{}
}
break;
}
var seq__8437_8618 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(lt.plugins.groovy.graph.multi_proj_deps.call(null,this$)));var chunk__8438_8619 = null;var count__8439_8620 = 0;var i__8440_8621 = 0;while(true){
if((i__8440_8621 < count__8439_8620))
{var x_8622 = cljs.core._nth.call(null,chunk__8438_8619,i__8440_8621);g.addEdge(null,new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_8622),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_8622),{"label": ""});
{
var G__8623 = seq__8437_8618;
var G__8624 = chunk__8438_8619;
var G__8625 = count__8439_8620;
var G__8626 = (i__8440_8621 + 1);
seq__8437_8618 = G__8623;
chunk__8438_8619 = G__8624;
count__8439_8620 = G__8625;
i__8440_8621 = G__8626;
continue;
}
} else
{var temp__4092__auto___8627 = cljs.core.seq.call(null,seq__8437_8618);if(temp__4092__auto___8627)
{var seq__8437_8628__$1 = temp__4092__auto___8627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8437_8628__$1))
{var c__7112__auto___8629 = cljs.core.chunk_first.call(null,seq__8437_8628__$1);{
var G__8630 = cljs.core.chunk_rest.call(null,seq__8437_8628__$1);
var G__8631 = c__7112__auto___8629;
var G__8632 = cljs.core.count.call(null,c__7112__auto___8629);
var G__8633 = 0;
seq__8437_8618 = G__8630;
chunk__8438_8619 = G__8631;
count__8439_8620 = G__8632;
i__8440_8621 = G__8633;
continue;
}
} else
{var x_8634 = cljs.core.first.call(null,seq__8437_8628__$1);g.addEdge(null,new cljs.core.Keyword(null,"a","a",1013904339).cljs$core$IFn$_invoke$arity$1(x_8634),new cljs.core.Keyword(null,"b","b",1013904340).cljs$core$IFn$_invoke$arity$1(x_8634),{"label": ""});
{
var G__8635 = cljs.core.next.call(null,seq__8437_8628__$1);
var G__8636 = null;
var G__8637 = 0;
var G__8638 = 0;
seq__8437_8618 = G__8635;
chunk__8438_8619 = G__8636;
count__8439_8620 = G__8637;
i__8440_8621 = G__8638;
continue;
}
}
} else
{}
}
break;
}
return g;
});
lt.plugins.groovy.graph.dimensions = (function dimensions(this$){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clientWidth,new cljs.core.Keyword(null,"h","h",1013904346),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clientHeight], null);
});
lt.plugins.groovy.graph.d3_sel = (function d3_sel(selector){return window.d3.select(selector);
});
lt.plugins.groovy.graph.on_zoom2 = (function on_zoom2(){var ev = window.d3.event;return lt.plugins.groovy.graph.d3_sel.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.graph.dependency_graph)))).attr("transform",[cljs.core.str("translate("),cljs.core.str(ev.translate),cljs.core.str(") scale("),cljs.core.str(ev.scale),cljs.core.str(")")].join(''));
});
lt.plugins.groovy.graph.curr_transform = (function curr_transform(this$){return window.d3.transform(lt.plugins.groovy.graph.d3_sel.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))).attr("transform"));
});
lt.plugins.groovy.graph.curr_scale = (function curr_scale(this$){return cljs.core.first.call(null,lt.plugins.groovy.graph.curr_transform.call(null,this$).scale);
});
lt.plugins.groovy.graph.curr_translate = (function curr_translate(this$){var t = lt.plugins.groovy.graph.curr_transform.call(null,this$).translate;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.first.call(null,t),new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.last.call(null,t)], null);
});
lt.plugins.groovy.graph.zoom = (function zoom(this$,delta){var s = lt.plugins.groovy.graph.curr_scale.call(null,this$);var t = lt.plugins.groovy.graph.curr_translate.call(null,this$);var svg = lt.plugins.groovy.graph.d3_sel.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.plugins.groovy.graph.zoom_listener.scale((s + delta));
lt.plugins.groovy.graph.zoom_listener.translate([(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(t) + delta),(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(t) + delta)]);
return lt.plugins.groovy.graph.zoom_listener.event(svg.transition().duration(500));
});
/**
* @param {...*} var_args
*/
lt.plugins.groovy.graph.render_deps = (function() { 
var render_deps__delegate = function (this$,conf_name,p__8441){var vec__8443 = p__8441;var proj = cljs.core.nth.call(null,vec__8443,0,null);var renderer = (new dagreD3.Renderer());var g = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var svg = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var layout = renderer.run(lt.plugins.groovy.graph.create_graph.call(null,this$,conf_name,proj),lt.plugins.groovy.graph.d3_sel.call(null,g));var dim = lt.plugins.groovy.graph.dimensions.call(null,this$);lt.plugins.groovy.graph.unbind_select_project.call(null,this$);
lt.plugins.groovy.graph.bind_select_project.call(null,this$);
lt.plugins.groovy.graph.d3_sel.call(null,svg).attr("width",(new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(dim) + 20));
return lt.plugins.groovy.graph.d3_sel.call(null,svg).attr("height",(new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(dim) + 20));
};
var render_deps = function (this$,conf_name,var_args){
var p__8441 = null;if (arguments.length > 2) {
  p__8441 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return render_deps__delegate.call(this,this$,conf_name,p__8441);};
render_deps.cljs$lang$maxFixedArity = 2;
render_deps.cljs$lang$applyTo = (function (arglist__8639){
var this$ = cljs.core.first(arglist__8639);
arglist__8639 = cljs.core.next(arglist__8639);
var conf_name = cljs.core.first(arglist__8639);
var p__8441 = cljs.core.rest(arglist__8639);
return render_deps__delegate(this$,conf_name,p__8441);
});
render_deps.cljs$core$IFn$_invoke$arity$variadic = render_deps__delegate;
return render_deps;
})()
;
lt.plugins.groovy.graph.render_multi_deps = (function render_multi_deps(this$){lt.plugins.groovy.graph.maybe_remove_confs_div.call(null,this$);
lt.plugins.groovy.graph.render_header_only.call(null,this$);
var renderer = (new dagreD3.Renderer());var g = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"g","g",1013904345),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var svg = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var layout = renderer.run(lt.plugins.groovy.graph.create_multiproject_graph.call(null,this$),lt.plugins.groovy.graph.d3_sel.call(null,g));var dim = lt.plugins.groovy.graph.dimensions.call(null,this$);lt.plugins.groovy.graph.unbind_select_project.call(null,this$);
lt.plugins.groovy.graph.bind_select_project.call(null,this$);
lt.plugins.groovy.graph.d3_sel.call(null,svg).attr("width",(new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(dim) + 20));
return lt.plugins.groovy.graph.d3_sel.call(null,svg).attr("height",(new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(dim) + 20));
});
/**
* @param {...*} var_args
*/
lt.plugins.groovy.graph.conf_ui = (function() { 
var conf_ui__delegate = function (this$,conf,p__8444){var vec__8452 = p__8444;var proj = cljs.core.nth.call(null,vec__8452,0,null);var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),cljs.core.key.call(null,conf)], null));var seq__8453_8640 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__,vec__8452,proj){
return (function (e){return lt.plugins.groovy.graph.render_deps.call(null,this$,cljs.core.key.call(null,conf),proj);
});})(e__7755__auto__,vec__8452,proj))
], null)));var chunk__8454_8641 = null;var count__8455_8642 = 0;var i__8456_8643 = 0;while(true){
if((i__8456_8643 < count__8455_8642))
{var vec__8457_8644 = cljs.core._nth.call(null,chunk__8454_8641,i__8456_8643);var ev__7756__auto___8645 = cljs.core.nth.call(null,vec__8457_8644,0,null);var func__7757__auto___8646 = cljs.core.nth.call(null,vec__8457_8644,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8645,func__7757__auto___8646);
{
var G__8647 = seq__8453_8640;
var G__8648 = chunk__8454_8641;
var G__8649 = count__8455_8642;
var G__8650 = (i__8456_8643 + 1);
seq__8453_8640 = G__8647;
chunk__8454_8641 = G__8648;
count__8455_8642 = G__8649;
i__8456_8643 = G__8650;
continue;
}
} else
{var temp__4092__auto___8651 = cljs.core.seq.call(null,seq__8453_8640);if(temp__4092__auto___8651)
{var seq__8453_8652__$1 = temp__4092__auto___8651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8453_8652__$1))
{var c__7112__auto___8653 = cljs.core.chunk_first.call(null,seq__8453_8652__$1);{
var G__8654 = cljs.core.chunk_rest.call(null,seq__8453_8652__$1);
var G__8655 = c__7112__auto___8653;
var G__8656 = cljs.core.count.call(null,c__7112__auto___8653);
var G__8657 = 0;
seq__8453_8640 = G__8654;
chunk__8454_8641 = G__8655;
count__8455_8642 = G__8656;
i__8456_8643 = G__8657;
continue;
}
} else
{var vec__8458_8658 = cljs.core.first.call(null,seq__8453_8652__$1);var ev__7756__auto___8659 = cljs.core.nth.call(null,vec__8458_8658,0,null);var func__7757__auto___8660 = cljs.core.nth.call(null,vec__8458_8658,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8659,func__7757__auto___8660);
{
var G__8661 = cljs.core.next.call(null,seq__8453_8652__$1);
var G__8662 = null;
var G__8663 = 0;
var G__8664 = 0;
seq__8453_8640 = G__8661;
chunk__8454_8641 = G__8662;
count__8455_8642 = G__8663;
i__8456_8643 = G__8664;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
};
var conf_ui = function (this$,conf,var_args){
var p__8444 = null;if (arguments.length > 2) {
  p__8444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return conf_ui__delegate.call(this,this$,conf,p__8444);};
conf_ui.cljs$lang$maxFixedArity = 2;
conf_ui.cljs$lang$applyTo = (function (arglist__8665){
var this$ = cljs.core.first(arglist__8665);
arglist__8665 = cljs.core.next(arglist__8665);
var conf = cljs.core.first(arglist__8665);
var p__8444 = cljs.core.rest(arglist__8665);
return conf_ui__delegate(this$,conf,p__8444);
});
conf_ui.cljs$core$IFn$_invoke$arity$variadic = conf_ui__delegate;
return conf_ui;
})()
;
/**
* @param {...*} var_args
*/
lt.plugins.groovy.graph.header_ui = (function() { 
var header_ui__delegate = function (this$,p__8459){var vec__8467 = p__8459;var proj = cljs.core.nth.call(null,vec__8467,0,null);var overview = cljs.core.nth.call(null,vec__8467,1,null);var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.graph-header","div.graph-header",929785243),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.clickable","span.clickable",1628405936),"Dependency graph"], null),[cljs.core.str((cljs.core.truth_(overview)?" - Overview":null)),cljs.core.str(" - "),cljs.core.str((cljs.core.truth_(proj)?proj:new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rootDeps","rootDeps",846570936).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))].join('')], null)], null));var seq__8468_8666 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7755__auto__,vec__8467,proj,overview){
return (function (ev){return lt.plugins.groovy.graph.default_display.call(null,this$);
});})(e__7755__auto__,vec__8467,proj,overview))
], null)));var chunk__8469_8667 = null;var count__8470_8668 = 0;var i__8471_8669 = 0;while(true){
if((i__8471_8669 < count__8470_8668))
{var vec__8472_8670 = cljs.core._nth.call(null,chunk__8469_8667,i__8471_8669);var ev__7756__auto___8671 = cljs.core.nth.call(null,vec__8472_8670,0,null);var func__7757__auto___8672 = cljs.core.nth.call(null,vec__8472_8670,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8671,func__7757__auto___8672);
{
var G__8673 = seq__8468_8666;
var G__8674 = chunk__8469_8667;
var G__8675 = count__8470_8668;
var G__8676 = (i__8471_8669 + 1);
seq__8468_8666 = G__8673;
chunk__8469_8667 = G__8674;
count__8470_8668 = G__8675;
i__8471_8669 = G__8676;
continue;
}
} else
{var temp__4092__auto___8677 = cljs.core.seq.call(null,seq__8468_8666);if(temp__4092__auto___8677)
{var seq__8468_8678__$1 = temp__4092__auto___8677;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8468_8678__$1))
{var c__7112__auto___8679 = cljs.core.chunk_first.call(null,seq__8468_8678__$1);{
var G__8680 = cljs.core.chunk_rest.call(null,seq__8468_8678__$1);
var G__8681 = c__7112__auto___8679;
var G__8682 = cljs.core.count.call(null,c__7112__auto___8679);
var G__8683 = 0;
seq__8468_8666 = G__8680;
chunk__8469_8667 = G__8681;
count__8470_8668 = G__8682;
i__8471_8669 = G__8683;
continue;
}
} else
{var vec__8473_8684 = cljs.core.first.call(null,seq__8468_8678__$1);var ev__7756__auto___8685 = cljs.core.nth.call(null,vec__8473_8684,0,null);var func__7757__auto___8686 = cljs.core.nth.call(null,vec__8473_8684,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8685,func__7757__auto___8686);
{
var G__8687 = cljs.core.next.call(null,seq__8468_8678__$1);
var G__8688 = null;
var G__8689 = 0;
var G__8690 = 0;
seq__8468_8666 = G__8687;
chunk__8469_8667 = G__8688;
count__8470_8668 = G__8689;
i__8471_8669 = G__8690;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
};
var header_ui = function (this$,var_args){
var p__8459 = null;if (arguments.length > 1) {
  p__8459 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return header_ui__delegate.call(this,this$,p__8459);};
header_ui.cljs$lang$maxFixedArity = 1;
header_ui.cljs$lang$applyTo = (function (arglist__8691){
var this$ = cljs.core.first(arglist__8691);
var p__8459 = cljs.core.rest(arglist__8691);
return header_ui__delegate(this$,p__8459);
});
header_ui.cljs$core$IFn$_invoke$arity$variadic = header_ui__delegate;
return header_ui;
})()
;
/**
* @param {...*} var_args
*/
lt.plugins.groovy.graph.confs_ui = (function() { 
var confs_ui__delegate = function (this$,p__8476){var vec__8484 = p__8476;var proj = cljs.core.nth.call(null,vec__8484,0,null);var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.conf","div.conf",1323665875),lt.plugins.groovy.graph.header_ui.call(null,this$,proj),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.map.call(null,((function (vec__8484,proj){
return (function (p1__8474_SHARP_){return lt.plugins.groovy.graph.conf_ui.call(null,this$,p1__8474_SHARP_,proj);
});})(vec__8484,proj))
,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__8484,proj){
return (function (p1__8475_SHARP_){return cljs.core.seq.call(null,new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__8475_SHARP_)));
});})(vec__8484,proj))
,(cljs.core.truth_(proj)?new cljs.core.Keyword(null,"configurations","configurations",799677871).cljs$core$IFn$_invoke$arity$1(lt.plugins.groovy.graph.proj_by_name.call(null,this$,proj)):new cljs.core.Keyword(null,"configurations","configurations",799677871).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rootDeps","rootDeps",846570936).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))))], null)], null));var seq__8485_8692 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8486_8693 = null;var count__8487_8694 = 0;var i__8488_8695 = 0;while(true){
if((i__8488_8695 < count__8487_8694))
{var vec__8489_8696 = cljs.core._nth.call(null,chunk__8486_8693,i__8488_8695);var ev__7756__auto___8697 = cljs.core.nth.call(null,vec__8489_8696,0,null);var func__7757__auto___8698 = cljs.core.nth.call(null,vec__8489_8696,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8697,func__7757__auto___8698);
{
var G__8699 = seq__8485_8692;
var G__8700 = chunk__8486_8693;
var G__8701 = count__8487_8694;
var G__8702 = (i__8488_8695 + 1);
seq__8485_8692 = G__8699;
chunk__8486_8693 = G__8700;
count__8487_8694 = G__8701;
i__8488_8695 = G__8702;
continue;
}
} else
{var temp__4092__auto___8703 = cljs.core.seq.call(null,seq__8485_8692);if(temp__4092__auto___8703)
{var seq__8485_8704__$1 = temp__4092__auto___8703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8485_8704__$1))
{var c__7112__auto___8705 = cljs.core.chunk_first.call(null,seq__8485_8704__$1);{
var G__8706 = cljs.core.chunk_rest.call(null,seq__8485_8704__$1);
var G__8707 = c__7112__auto___8705;
var G__8708 = cljs.core.count.call(null,c__7112__auto___8705);
var G__8709 = 0;
seq__8485_8692 = G__8706;
chunk__8486_8693 = G__8707;
count__8487_8694 = G__8708;
i__8488_8695 = G__8709;
continue;
}
} else
{var vec__8490_8710 = cljs.core.first.call(null,seq__8485_8704__$1);var ev__7756__auto___8711 = cljs.core.nth.call(null,vec__8490_8710,0,null);var func__7757__auto___8712 = cljs.core.nth.call(null,vec__8490_8710,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8711,func__7757__auto___8712);
{
var G__8713 = cljs.core.next.call(null,seq__8485_8704__$1);
var G__8714 = null;
var G__8715 = 0;
var G__8716 = 0;
seq__8485_8692 = G__8713;
chunk__8486_8693 = G__8714;
count__8487_8694 = G__8715;
i__8488_8695 = G__8716;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
};
var confs_ui = function (this$,var_args){
var p__8476 = null;if (arguments.length > 1) {
  p__8476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return confs_ui__delegate.call(this,this$,p__8476);};
confs_ui.cljs$lang$maxFixedArity = 1;
confs_ui.cljs$lang$applyTo = (function (arglist__8717){
var this$ = cljs.core.first(arglist__8717);
var p__8476 = cljs.core.rest(arglist__8717);
return confs_ui__delegate(this$,p__8476);
});
confs_ui.cljs$core$IFn$_invoke$arity$variadic = confs_ui__delegate;
return confs_ui;
})()
;
lt.plugins.groovy.graph.maybe_remove_header_div = (function maybe_remove_header_div(this$){var temp__4092__auto__ = lt.util.dom.$.call(null,".graph-header",new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(temp__4092__auto__))
{var header_div = temp__4092__auto__;return lt.util.dom.remove.call(null,header_div);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
lt.plugins.groovy.graph.render_header_only = (function() { 
var render_header_only__delegate = function (this$,p__8491){var vec__8493 = p__8491;var proj = cljs.core.nth.call(null,vec__8493,0,null);lt.plugins.groovy.graph.maybe_remove_header_div.call(null,this$);
return lt.util.dom.prepend.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),lt.plugins.groovy.graph.header_ui.call(null,this$,proj,true));
};
var render_header_only = function (this$,var_args){
var p__8491 = null;if (arguments.length > 1) {
  p__8491 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return render_header_only__delegate.call(this,this$,p__8491);};
render_header_only.cljs$lang$maxFixedArity = 1;
render_header_only.cljs$lang$applyTo = (function (arglist__8718){
var this$ = cljs.core.first(arglist__8718);
var p__8491 = cljs.core.rest(arglist__8718);
return render_header_only__delegate(this$,p__8491);
});
render_header_only.cljs$core$IFn$_invoke$arity$variadic = render_header_only__delegate;
return render_header_only;
})()
;
lt.plugins.groovy.graph.maybe_remove_confs_div = (function maybe_remove_confs_div(this$){var temp__4092__auto__ = lt.util.dom.$.call(null,".conf",new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(cljs.core.truth_(temp__4092__auto__))
{var conf_div = temp__4092__auto__;return lt.util.dom.remove.call(null,conf_div);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
lt.plugins.groovy.graph.render_confs = (function() { 
var render_confs__delegate = function (this$,p__8494){var vec__8496 = p__8494;var proj = cljs.core.nth.call(null,vec__8496,0,null);lt.plugins.groovy.graph.maybe_remove_header_div.call(null,this$);
lt.plugins.groovy.graph.maybe_remove_confs_div.call(null,this$);
return lt.util.dom.prepend.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),lt.plugins.groovy.graph.confs_ui.call(null,this$,proj));
};
var render_confs = function (this$,var_args){
var p__8494 = null;if (arguments.length > 1) {
  p__8494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return render_confs__delegate.call(this,this$,p__8494);};
render_confs.cljs$lang$maxFixedArity = 1;
render_confs.cljs$lang$applyTo = (function (arglist__8719){
var this$ = cljs.core.first(arglist__8719);
var p__8494 = cljs.core.rest(arglist__8719);
return render_confs__delegate(this$,p__8494);
});
render_confs.cljs$core$IFn$_invoke$arity$variadic = render_confs__delegate;
return render_confs;
})()
;
lt.plugins.groovy.graph.project_node = (function project_node(node){return cljs.core.assoc.call(null,cljs.core.select_keys.call(null,node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"group","group",1112533489),new cljs.core.Keyword(null,"version","version",1365512266)], null)),new cljs.core.Keyword(null,"type","type",1017479852),"project");
});
lt.plugins.groovy.graph.root_node = (function root_node(this$){return lt.plugins.groovy.graph.project_node.call(null,new cljs.core.Keyword(null,"rootDeps","rootDeps",846570936).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.groovy.graph.sub_nodes = (function sub_nodes(this$){return cljs.core.map.call(null,lt.plugins.groovy.graph.project_node,new cljs.core.Keyword(null,"subDeps","subDeps",3439854614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.groovy.graph.project_deps_by_conf = (function project_deps_by_conf(x){return cljs.core.filter.call(null,(function (p1__8497_SHARP_){return cljs.core._EQ_.call(null,"project",new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(p1__8497_SHARP_));
}),new cljs.core.Keyword(null,"nodes","nodes",1118897699).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,x)));
});
lt.plugins.groovy.graph.project_deps_by_proj = (function project_deps_by_proj(x){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8498_SHARP_){return lt.plugins.groovy.graph.project_deps_by_conf.call(null,p1__8498_SHARP_);
}),new cljs.core.Keyword(null,"configurations","configurations",799677871).cljs$core$IFn$_invoke$arity$1(x))));
});
lt.plugins.groovy.graph.sub_edges = (function sub_edges(sub){return cljs.core.map.call(null,(function (p1__8499_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340)],[lt.plugins.groovy.graph.dep_id.call(null,sub),lt.plugins.groovy.graph.dep_id.call(null,p1__8499_SHARP_)]);
}),lt.plugins.groovy.graph.project_deps_by_proj.call(null,sub));
});
lt.plugins.groovy.graph.subs_edges = (function subs_edges(this$){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__8500_SHARP_){return lt.plugins.groovy.graph.sub_edges.call(null,p1__8500_SHARP_);
}),new cljs.core.Keyword(null,"subDeps","subDeps",3439854614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
});
lt.plugins.groovy.graph.multi_child_edges = (function multi_child_edges(this$){return cljs.core.map.call(null,(function (p1__8501_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.Keyword(null,"b","b",1013904340)],[lt.plugins.groovy.graph.dep_id.call(null,lt.plugins.groovy.graph.root_node.call(null,this$)),lt.plugins.groovy.graph.dep_id.call(null,p1__8501_SHARP_)]);
}),lt.plugins.groovy.graph.sub_nodes.call(null,this$));
});
lt.plugins.groovy.graph.multi_proj_deps = (function multi_proj_deps(this$){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",1118897699),cljs.core.conj.call(null,lt.plugins.groovy.graph.sub_nodes.call(null,this$),lt.plugins.groovy.graph.root_node.call(null,this$)),new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.concat.call(null,lt.plugins.groovy.graph.multi_child_edges.call(null,this$),lt.plugins.groovy.graph.subs_edges.call(null,this$))], null);
});
lt.plugins.groovy.graph.proj_by_name = (function proj_by_name(this$,x){if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rootDeps","rootDeps",846570936).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))
{return new cljs.core.Keyword(null,"rootDeps","rootDeps",846570936).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));
} else
{return cljs.core.some.call(null,(function (p1__8502_SHARP_){if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8502_SHARP_)))
{return p1__8502_SHARP_;
} else
{return null;
}
}),new cljs.core.Keyword(null,"subDeps","subDeps",3439854614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
});
lt.plugins.groovy.graph.default_display = (function default_display(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"rootDeps","rootDeps",846570936).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"subDeps","subDeps",3439854614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.plugins.groovy.graph.render_multi_deps.call(null,this$);
} else
{lt.plugins.groovy.graph.render_confs.call(null,this$);
if(cljs.core.truth_(new cljs.core.Keyword(null,"compile","compile",1964395941).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"configurations","configurations",799677871).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rootDeps","rootDeps",846570936).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))))
{return lt.plugins.groovy.graph.render_deps.call(null,this$,new cljs.core.Keyword(null,"compile","compile",1964395941));
} else
{return null;
}
}
} else
{return null;
}
});
lt.plugins.groovy.graph.__BEH__on_dependencies_loaded = (function __BEH__on_dependencies_loaded(this$,rootDeps,subDeps){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rootDeps","rootDeps",846570936),rootDeps,new cljs.core.Keyword(null,"subDeps","subDeps",3439854614),subDeps], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy.graph","on-dependencies-loaded","lt.plugins.groovy.graph/on-dependencies-loaded",687665335),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.graph.__BEH__on_dependencies_loaded,new cljs.core.Keyword(null,"desc","desc",1016984067),"Gradle dependencies loaded for selected project",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph.set.dependencies","graph.set.dependencies",724186951),null], null), null));
lt.plugins.groovy.graph.__BEH__on_show_dependencies = (function __BEH__on_show_dependencies(this$,root_deps){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.groovy.graph.dependency_graph);
return lt.plugins.groovy.graph.default_display.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy.graph","on-show-dependencies","lt.plugins.groovy.graph/on-show-dependencies",3356702407),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.graph.__BEH__on_show_dependencies,new cljs.core.Keyword(null,"desc","desc",1016984067),"Show dependency graph",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph.show.dependencies","graph.show.dependencies",3347099468),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"graph.zoom-in","graph.zoom-in",3401528369),new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Zoom in dependency graph",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.groovy.graph.zoom.call(null,lt.plugins.groovy.graph.dependency_graph,0.1);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"graph.zoom-out","graph.zoom-out",2015814246),new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Zoom out dependency graph",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.groovy.graph.zoom.call(null,lt.plugins.groovy.graph.dependency_graph,-0.1);
})], null));
lt.plugins.groovy.graph.dependency_graph = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.groovy.graph","dependency-graph","lt.plugins.groovy.graph/dependency-graph",4128469128));
lt.plugins.groovy.graph.zoom_listener = window.d3.behavior.zoom().scaleExtent([0.1,3]).on("zoom",lt.plugins.groovy.graph.on_zoom2);
lt.plugins.groovy.graph.zoom_listener.call(null,lt.plugins.groovy.graph.d3_sel.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"svg","svg",1014018518),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.graph.dependency_graph)))));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.groovy')) {
goog.provide('lt.plugins.groovy');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.groovy.graph');
goog.require('lt.plugins.groovy.graph');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.objs.sidebar.command');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.console');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.plugins.groovy.shell = lt.util.load.node_module.call(null,"shelljs");
lt.plugins.groovy.plugin_dir = lt.objs.plugins.find_plugin.call(null,"Groovy");
lt.plugins.groovy.binary_path = lt.objs.files.join.call(null,lt.plugins.groovy.plugin_dir,"./run-server.sh");
lt.plugins.groovy.server_path = lt.objs.files.join.call(null,lt.plugins.groovy.plugin_dir,"lib/ltserver.jar");
lt.plugins.groovy.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,out);
if((out.indexOf("Connected") > -1))
{lt.objs.notifos.done_working.call(null);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),true], null));
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-out","lt.plugins.groovy/on-out",1239098084),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.groovy.__BEH__on_error = (function __BEH__on_error(this$,data){var out = data.toString();if((new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).indexOf("Connected") > -1))
{return null;
} else
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),cljs.core.str,data);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-error","lt.plugins.groovy/on-error",2638843290),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.groovy.__BEH__on_exit = (function __BEH__on_exit(this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{} else
{lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't connect.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Looks like there was an issue trying to connect\n                                              to the project. Here's what we got:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"close"], null)], null)], null));
lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-exit","lt.plugins.groovy/on-exit",624270544),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","connecting-notifier","lt.plugins.groovy/connecting-notifier",2578157599),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.groovy","on-exit","lt.plugins.groovy/on-exit",624270544),new cljs.core.Keyword("lt.plugins.groovy","on-error","lt.plugins.groovy/on-error",2638843290),new cljs.core.Keyword("lt.plugins.groovy","on-out","lt.plugins.groovy/on-out",1239098084)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,client){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",3951159101),client,new cljs.core.Keyword(null,"buffer","buffer",3930752946),""], null));
return null;
}));
lt.plugins.groovy.escape_spaces = (function escape_spaces(s){if(cljs.core._EQ_.call(null,lt.objs.files.separator,"\\"))
{return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
} else
{return s;
}
});
lt.plugins.groovy.bash_escape_spaces = (function bash_escape_spaces(s){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,s," ","\\ ");
} else
{return null;
}
});
lt.plugins.groovy.run_groovy = (function run_groovy(p__7972){var map__7974 = p__7972;var map__7974__$1 = ((cljs.core.seq_QMARK_.call(null,map__7974))?cljs.core.apply.call(null,cljs.core.hash_map,map__7974):map__7974);var info = map__7974__$1;var client = cljs.core.get.call(null,map__7974__$1,new cljs.core.Keyword(null,"client","client",3951159101));var name = cljs.core.get.call(null,map__7974__$1,new cljs.core.Keyword(null,"name","name",1017277949));var path = cljs.core.get.call(null,map__7974__$1,new cljs.core.Keyword(null,"path","path",1017337751));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.groovy","connecting-notifier","lt.plugins.groovy/connecting-notifier",2578157599),info);var client_id = lt.objs.clients.__GT_id.call(null,client);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"port","port",1017351155),lt.objs.clients.tcp.port,new cljs.core.Keyword(null,"proc","proc",1017353928),obj], null));
lt.objs.notifos.working.call(null,"Connecting..");
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),lt.plugins.groovy.binary_path,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.clients.tcp.port,client_id,(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,path))?lt.plugins.groovy.bash_escape_spaces.call(null,path):null)], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.groovy.plugin_dir,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"LT_GROOVY_LOG","LT_GROOVY_LOG",4465086972),new cljs.core.Keyword("lt.plugins.groovy","enable-client-logging?","lt.plugins.groovy/enable-client-logging?",4091824316).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy))], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.plugins.groovy.check_groovy = (function check_groovy(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"groovy","groovy",4071405440),(function (){var or__6364__auto__ = new cljs.core.Keyword("lt.plugins.groovy","groovy-exe","lt.plugins.groovy/groovy-exe",2429698647).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return lt.plugins.groovy.shell.which("groovy");
}
})());
});
lt.plugins.groovy.check_server = (function check_server(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"groovy-server","groovy-server",2729950548),lt.objs.files.exists_QMARK_.call(null,lt.plugins.groovy.server_path));
});
lt.plugins.groovy.handle_no_groovy = (function handle_no_groovy(client){lt.objs.clients.rem_BANG_.call(null,client);
lt.objs.notifos.done_working.call(null);
return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't find Groovy.",new cljs.core.Keyword(null,"body","body",1016933652),"In order to evaluate in Groovy files, Groovy must be installed and on your system PATH.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Download Groovy",new cljs.core.Keyword(null,"action","action",3885920680),(function (){return lt.objs.platform.open.call(null,"http://gvmtool.net/");
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
});
lt.plugins.groovy.notify = (function notify(obj){var map__7976 = obj;var map__7976__$1 = ((cljs.core.seq_QMARK_.call(null,map__7976))?cljs.core.apply.call(null,cljs.core.hash_map,map__7976):map__7976);var client = cljs.core.get.call(null,map__7976__$1,new cljs.core.Keyword(null,"client","client",3951159101));var groovy_server = cljs.core.get.call(null,map__7976__$1,new cljs.core.Keyword(null,"groovy-server","groovy-server",2729950548));var path = cljs.core.get.call(null,map__7976__$1,new cljs.core.Keyword(null,"path","path",1017337751));var groovy = cljs.core.get.call(null,map__7976__$1,new cljs.core.Keyword(null,"groovy","groovy",4071405440));if((cljs.core.not.call(null,groovy)) || (cljs.core.empty_QMARK_.call(null,groovy)))
{lt.plugins.groovy.handle_no_groovy.call(null,client);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.plugins.groovy.run_groovy.call(null,obj);
} else
{}
}
return obj;
});
lt.plugins.groovy.check_all = (function check_all(obj){return lt.plugins.groovy.notify.call(null,lt.plugins.groovy.check_server.call(null,lt.plugins.groovy.check_groovy.call(null,obj)));
});
lt.plugins.groovy.try_connect = (function try_connect(p__7977){var map__7979 = p__7977;var map__7979__$1 = ((cljs.core.seq_QMARK_.call(null,map__7979))?cljs.core.apply.call(null,cljs.core.hash_map,map__7979):map__7979);var info = cljs.core.get.call(null,map__7979__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"groovy.client","groovy.client",3165568285));lt.plugins.groovy.check_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return client;
});
lt.plugins.groovy.__BEH__on_eval = (function __BEH__on_eval(editor){return lt.object.raise.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),0,new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.editor.last_line.call(null,editor)], null))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-eval","lt.plugins.groovy/on-eval",624285258),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_eval,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Eval current editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.plugins.groovy.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = cljs.core.conj.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null)], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null)], null)));return lt.object.raise.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-eval.one","lt.plugins.groovy/on-eval.one",656487106),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Eval current selection",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.groovy.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__7981 = event;var map__7981__$1 = ((cljs.core.seq_QMARK_.call(null,map__7981))?cljs.core.apply.call(null,cljs.core.hash_map,map__7981):map__7981);var origin = cljs.core.get.call(null,map__7981__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__7981__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"Evaluating groovy...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.groovy","editor.eval.groovy",2695176721),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.groovy.try_connect], null)),new cljs.core.Keyword(null,"editor.eval.groovy","editor.eval.groovy",2695176721),info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","eval!","lt.plugins.groovy/eval!",2342640133),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.groovy.__BEH__on_clear_bindings = (function __BEH__on_clear_bindings(editor){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var cl = lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.clear.groovy","editor.clear.groovy",2933057826),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.groovy.try_connect], null));return lt.objs.clients.send.call(null,cl,new cljs.core.Keyword(null,"editor.clear.groovy","editor.clear.groovy",2933057826),info,new cljs.core.Keyword(null,"only","only",1017320222),editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-clear-bindings","lt.plugins.groovy/on-clear-bindings",2767221312),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_clear_bindings,new cljs.core.Keyword(null,"desc","desc",1016984067),"Clear cached bindings for this editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on.clear.bindings","on.clear.bindings",1493420144),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"clear-bindings","clear-bindings",3103631744),new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Clear bindings for current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"on.clear.bindings","on.clear.bindings",1493420144));
} else
{return null;
}
})], null));
lt.plugins.groovy.notify_of_results = (function notify_of_results(editor,res){var seq__7986 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res));var chunk__7987 = null;var count__7988 = 0;var i__7989 = 0;while(true){
if((i__7989 < count__7988))
{var ln = cljs.core._nth.call(null,chunk__7987,i__7989);var lineNo_8006 = ((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ln) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),clojure.string.join.call(null," ",new cljs.core.Keyword(null,"values","values",4485058708).cljs$core$IFn$_invoke$arity$1(ln)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),lineNo_8006,new cljs.core.Keyword(null,"start-line","start-line",3689311729),lineNo_8006], null));
{
var G__8007 = seq__7986;
var G__8008 = chunk__7987;
var G__8009 = count__7988;
var G__8010 = (i__7989 + 1);
seq__7986 = G__8007;
chunk__7987 = G__8008;
count__7988 = G__8009;
i__7989 = G__8010;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7986);if(temp__4092__auto__)
{var seq__7986__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7986__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__7986__$1);{
var G__8011 = cljs.core.chunk_rest.call(null,seq__7986__$1);
var G__8012 = c__7112__auto__;
var G__8013 = cljs.core.count.call(null,c__7112__auto__);
var G__8014 = 0;
seq__7986 = G__8011;
chunk__7987 = G__8012;
count__7988 = G__8013;
i__7989 = G__8014;
continue;
}
} else
{var ln = cljs.core.first.call(null,seq__7986__$1);var lineNo_8015 = ((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ln) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),clojure.string.join.call(null," ",new cljs.core.Keyword(null,"values","values",4485058708).cljs$core$IFn$_invoke$arity$1(ln)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),lineNo_8015,new cljs.core.Keyword(null,"start-line","start-line",3689311729),lineNo_8015], null));
{
var G__8016 = cljs.core.next.call(null,seq__7986__$1);
var G__8017 = null;
var G__8018 = 0;
var G__8019 = 0;
seq__7986 = G__8016;
chunk__7987 = G__8017;
count__7988 = G__8018;
i__7989 = G__8019;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.groovy.__BEH__groovy_res = (function __BEH__groovy_res(editor,res){lt.objs.notifos.done_working.call(null,"Groovy evaluated");
var temp__4092__auto___8020 = new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(temp__4092__auto___8020))
{var o_8021 = temp__4092__auto___8020;console.log(o_8021);
} else
{}
return lt.plugins.groovy.notify_of_results.call(null,editor,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-res","lt.plugins.groovy/groovy-res",2429694689),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__groovy_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"groovy.res","groovy.res",1460052530),null], null), null));
lt.plugins.groovy.notify_of_error = (function notify_of_error(editor,res){var lineNo = ((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res)) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1);return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),lineNo,new cljs.core.Keyword(null,"start-line","start-line",3689311729),lt.plugins.groovy.lineNo_SINGLEQUOTE_], null));
});
lt.plugins.groovy.__BEH__groovy_err = (function __BEH__groovy_err(editor,res){lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"groovy.res","groovy.res",1460052530),res);
return lt.plugins.groovy.notify_of_error.call(null,editor,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-err","lt.plugins.groovy/groovy-err",2429698598),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__groovy_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"groovy.err","groovy.err",1460040439),null], null), null));
lt.plugins.groovy.__BEH__on_project_provided = (function __BEH__on_project_provided(this$,path){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project-path","project-path",1907176907),path], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-project-provided","lt.plugins.groovy/on-project-provided",3507617989),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_project_provided,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project.provided","project.provided",1503595658),null], null), null));
lt.plugins.groovy.__BEH__connect = (function __BEH__connect(this$,path){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"project.provided","project.provided",1503595658),path);
return lt.plugins.groovy.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","connect","lt.plugins.groovy/connect",2930767210),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.groovy.__BEH__client_enable_logging = (function __BEH__client_enable_logging(this$){return lt.object.merge_BANG_.call(null,lt.plugins.groovy.groovy,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.groovy","enable-client-logging?","lt.plugins.groovy/enable-client-logging?",4091824316),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","client-enable-logging","lt.plugins.groovy/client-enable-logging",4685259227),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__client_enable_logging,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Log groovy client output to lt_groovy.log",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.plugins.groovy.__BEH__on_gradle_progress = (function __BEH__on_gradle_progress(this$,info){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Gradle progress: "),cljs.core.str(new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(info))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-progress","lt.plugins.groovy/on-gradle-progress",597431301),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_progress,new cljs.core.Keyword(null,"desc","desc",1016984067),"Reporting of progress from gradle related tasks",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.progress","gradle.progress",4086975334),null], null), null));
lt.plugins.groovy.__BEH__on_gradle_err = (function __BEH__on_gradle_err(this$,info){lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Gradle failure: "),cljs.core.str(new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(info))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,[cljs.core.str(new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(info)))].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-err","lt.plugins.groovy/on-gradle-err",1876247181),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_err,new cljs.core.Keyword(null,"desc","desc",1016984067),"Gradle error",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.err","gradle.err",1353131696),null], null), null));
lt.plugins.groovy.__BEH__on_gradle_execute_err = (function __BEH__on_gradle_execute_err(this$,info){lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Gradle failure")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"error",new cljs.core.Keyword(null,"timeout","timeout",3994960083),5000], null));
return lt.objs.console.error.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(info)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-execute-err","lt.plugins.groovy/on-gradle-execute-err",3493810229),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_execute_err,new cljs.core.Keyword(null,"desc","desc",1016984067),"Error executing gradle task(s)",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.execute.err","gradle.execute.err",2054904759),null], null), null));
lt.plugins.groovy.__BEH__on_gradle_execute_success = (function __BEH__on_gradle_execute_success(this$,info){return lt.objs.notifos.msg_STAR_.call(null,[cljs.core.str("Gradle success!")].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-execute-success","lt.plugins.groovy/on-gradle-execute-success",3490845271),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_execute_success,new cljs.core.Keyword(null,"desc","desc",1016984067),"Succesful gradle task(s) execution",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.execute.success","gradle.execute.success",988062293),null], null), null));
lt.plugins.groovy.__BEH__on_gradle_projectinfo = (function __BEH__on_gradle_projectinfo(this$,info){lt.object.merge_BANG_.call(null,lt.plugins.groovy.groovy,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.groovy","gradle-project-info","lt.plugins.groovy/gradle-project-info",2486425516),info], null));
lt.object.raise.call(null,lt.plugins.groovy.graph.dependency_graph,new cljs.core.Keyword(null,"graph.set.dependencies","graph.set.dependencies",724186951),new cljs.core.Keyword(null,"rootDeps","rootDeps",846570936).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"subProjDeps","subProjDeps",1328739603).cljs$core$IFn$_invoke$arity$1(info));
return lt.object.assoc_in_BANG_.call(null,lt.objs.command.manager,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.Keyword(null,"gradle.task.select","gradle.task.select",4003269072),new cljs.core.Keyword(null,"options","options",4059396624)], null),lt.plugins.groovy.add_selector.call(null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-projectinfo","lt.plugins.groovy/on-gradle-projectinfo",3032946675),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_projectinfo,new cljs.core.Keyword(null,"desc","desc",1016984067),"Gradle project model information",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.projectinfo","gradle.projectinfo",1576218514),null], null), null));
lt.plugins.groovy.__BEH__on_gradle_execute = (function __BEH__on_gradle_execute(this$,task){return lt.objs.clients.send.call(null,lt.objs.clients.by_name.call(null,"Groovy"),new cljs.core.Keyword(null,"gradle.execute","gradle.execute",1349779520),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tasks","tasks",1124036352),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(task)], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-gradle-execute","lt.plugins.groovy/on-gradle-execute",3546228893),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_gradle_execute,new cljs.core.Keyword(null,"desc","desc",1016984067),"Gradle execute task(s)",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gradle.execute","gradle.execute",1349779520),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-lang","lt.plugins.groovy/groovy-lang",2937586893),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"groovy.lang","groovy.lang",1959416640),null], null), null));
lt.plugins.groovy.groovy = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-lang","lt.plugins.groovy/groovy-lang",2937586893));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Groovy",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your groovy project. (Must be a gradle project)",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
lt.plugins.groovy.__BEH__set_selected = (function __BEH__set_selected(this$,v){return lt.objs.sidebar.command.exec_active_BANG_.call(null,v);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","set-selected","lt.plugins.groovy/set-selected",2986854054),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__set_selected,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.groovy.selector = (function selector(opts){var G__7991 = lt.objs.sidebar.command.filter_list.call(null,opts);lt.object.add_behavior_BANG_.call(null,G__7991,new cljs.core.Keyword("lt.plugins.groovy","set-selected","lt.plugins.groovy/set-selected",2986854054));
return G__7991;
});
lt.plugins.groovy.get_tasks = (function get_tasks(){return new cljs.core.Keyword(null,"tasks","tasks",1124036352).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lt.plugins.groovy","gradle-project-info","lt.plugins.groovy/gradle-project-info",2486425516).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy)));
});
lt.plugins.groovy.add_selector = (function add_selector(){return lt.plugins.groovy.selector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.groovy.get_tasks.call(null),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"transform","transform",2066570974),(function (p1__7993_SHARP_,p2__7994_SHARP_,p3__7995_SHARP_,p4__7992_SHARP_){return [cljs.core.str("<p>"),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(p4__7992_SHARP_)),cljs.core.str("</p>"),cljs.core.str("<p class='binding'>"),cljs.core.str(new cljs.core.Keyword(null,"description","description",3584325486).cljs$core$IFn$_invoke$arity$1(p4__7992_SHARP_)),cljs.core.str("</p>")].join('');
})], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gradle.task.select","gradle.task.select",4003269072),new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Select Gradle task",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.groovy.add_selector.call(null),new cljs.core.Keyword(null,"exec","exec",1017031683),(function (item){return lt.object.raise.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"gradle.execute","gradle.execute",1349779520),item);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"gradle.show.deps","gradle.show.deps",809421088),new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Shows gradle dependencies",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.groovy.graph.dependency_graph,new cljs.core.Keyword(null,"graph.show.dependencies","graph.show.dependencies",3347099468),new cljs.core.Keyword(null,"rootDeps","rootDeps",846570936).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lt.plugins.groovy","gradle-project-info","lt.plugins.groovy/gradle-project-info",2486425516).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy))));
})], null));
}

//# sourceMappingURL=groovy_compiled.js.map