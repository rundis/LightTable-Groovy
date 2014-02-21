if(!lt.util.load.provided_QMARK_('lt.plugins.groovy')) {
goog.provide('lt.plugins.groovy');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.util.cljs');
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
lt.plugins.groovy.groovy_watch = (function groovy_watch(meta,src){var meta_str = [cljs.core.str("%q("),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,meta))),cljs.core.str(")")].join('');return [cljs.core.str("LtWatch.watch("),cljs.core.str(src),cljs.core.str(", JSON.parse("),cljs.core.str(meta_str),cljs.core.str("))")].join('');
});
lt.plugins.groovy.run_groovy = (function run_groovy(p__10959){var map__10961 = p__10959;var map__10961__$1 = ((cljs.core.seq_QMARK_.call(null,map__10961))?cljs.core.apply.call(null,cljs.core.hash_map,map__10961):map__10961);var info = map__10961__$1;var client = cljs.core.get.call(null,map__10961__$1,new cljs.core.Keyword(null,"client","client",3951159101));var name = cljs.core.get.call(null,map__10961__$1,new cljs.core.Keyword(null,"name","name",1017277949));var path = cljs.core.get.call(null,map__10961__$1,new cljs.core.Keyword(null,"path","path",1017337751));var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.groovy","connecting-notifier","lt.plugins.groovy/connecting-notifier",2578157599),info);var client_id = lt.objs.clients.__GT_id.call(null,client);var project_dir = lt.objs.files.parent.call(null,path);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"port","port",1017351155),lt.objs.clients.tcp.port,new cljs.core.Keyword(null,"proc","proc",1017353928),obj], null));
lt.objs.notifos.working.call(null,"Connecting..");
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),lt.plugins.groovy.binary_path,new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.objs.clients.tcp.port,client_id,project_dir], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.groovy.plugin_dir,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"LT_GROOVY_LOG","LT_GROOVY_LOG",4465086972),new cljs.core.Keyword("lt.plugins.groovy","enable-client-logging?","lt.plugins.groovy/enable-client-logging?",4091824316).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy))], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});
lt.plugins.groovy.check_groovy = (function check_groovy(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"groovy","groovy",4071405440),(function (){var or__8884__auto__ = new cljs.core.Keyword("lt.plugins.groovy","groovy-exe","lt.plugins.groovy/groovy-exe",2429698647).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.groovy.groovy));if(cljs.core.truth_(or__8884__auto__))
{return or__8884__auto__;
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
lt.plugins.groovy.notify = (function notify(obj){var map__10963 = obj;var map__10963__$1 = ((cljs.core.seq_QMARK_.call(null,map__10963))?cljs.core.apply.call(null,cljs.core.hash_map,map__10963):map__10963);var client = cljs.core.get.call(null,map__10963__$1,new cljs.core.Keyword(null,"client","client",3951159101));var groovy_server = cljs.core.get.call(null,map__10963__$1,new cljs.core.Keyword(null,"groovy-server","groovy-server",2729950548));var path = cljs.core.get.call(null,map__10963__$1,new cljs.core.Keyword(null,"path","path",1017337751));var groovy = cljs.core.get.call(null,map__10963__$1,new cljs.core.Keyword(null,"groovy","groovy",4071405440));if((cljs.core.not.call(null,groovy)) || (cljs.core.empty_QMARK_.call(null,groovy)))
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
lt.plugins.groovy.try_connect = (function try_connect(p__10964){var map__10966 = p__10964;var map__10966__$1 = ((cljs.core.seq_QMARK_.call(null,map__10966))?cljs.core.apply.call(null,cljs.core.hash_map,map__10966):map__10966);var info = cljs.core.get.call(null,map__10966__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"groovy.client","groovy.client",3165568285));lt.plugins.groovy.check_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return client;
});
lt.plugins.groovy.__BEH__on_eval = (function __BEH__on_eval(editor){return lt.object.raise.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"code","code",1016963423),lt.plugins.watches.watched_range.call(null,editor,null,null,lt.plugins.groovy.groovy_watch),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),0,new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.editor.last_line.call(null,editor)], null))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-eval","lt.plugins.groovy/on-eval",624285258),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_eval,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Eval current editor",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.plugins.groovy.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var code = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?lt.plugins.watches.watched_range.call(null,editor,null,null,lt.plugins.groovy.groovy_watch):lt.objs.editor.line.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)));var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null)):cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos)], null)));return lt.object.raise.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$1], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","on-eval.one","lt.plugins.groovy/on-eval.one",656487106),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Eval current selection",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.groovy.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__10968 = event;var map__10968__$1 = ((cljs.core.seq_QMARK_.call(null,map__10968))?cljs.core.apply.call(null,cljs.core.hash_map,map__10968):map__10968);var origin = cljs.core.get.call(null,map__10968__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__10968__$1,new cljs.core.Keyword(null,"info","info",1017141280));var client = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,origin)));lt.objs.notifos.working.call(null,"Evaluating groovy...");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.groovy","editor.eval.groovy",2695176721),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"create","create",3956577390),lt.plugins.groovy.try_connect], null)),new cljs.core.Keyword(null,"editor.eval.groovy","editor.eval.groovy",2695176721),info,new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","eval!","lt.plugins.groovy/eval!",2342640133),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.groovy.notify_of_results = (function notify_of_results(editor,res){console.log(lt.plugins.groovy.result);
var seq__10973 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res));var chunk__10974 = null;var count__10975 = 0;var i__10976 = 0;while(true){
if((i__10976 < count__10975))
{var ln = cljs.core._nth.call(null,chunk__10974,i__10976);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),clojure.string.join.call(null," ",new cljs.core.Keyword(null,"values","values",4485058708).cljs$core$IFn$_invoke$arity$1(ln)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ln) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1),new cljs.core.Keyword(null,"start-line","start-line",3689311729),((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ln) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1)], null));
{
var G__10977 = seq__10973;
var G__10978 = chunk__10974;
var G__10979 = count__10975;
var G__10980 = (i__10976 + 1);
seq__10973 = G__10977;
chunk__10974 = G__10978;
count__10975 = G__10979;
i__10976 = G__10980;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10973);if(temp__4092__auto__)
{var seq__10973__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10973__$1))
{var c__9626__auto__ = cljs.core.chunk_first.call(null,seq__10973__$1);{
var G__10981 = cljs.core.chunk_rest.call(null,seq__10973__$1);
var G__10982 = c__9626__auto__;
var G__10983 = cljs.core.count.call(null,c__9626__auto__);
var G__10984 = 0;
seq__10973 = G__10981;
chunk__10974 = G__10982;
count__10975 = G__10983;
i__10976 = G__10984;
continue;
}
} else
{var ln = cljs.core.first.call(null,seq__10973__$1);lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),clojure.string.join.call(null," ",new cljs.core.Keyword(null,"values","values",4485058708).cljs$core$IFn$_invoke$arity$1(ln)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ln) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1),new cljs.core.Keyword(null,"start-line","start-line",3689311729),((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ln) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1)], null));
{
var G__10985 = cljs.core.next.call(null,seq__10973__$1);
var G__10986 = null;
var G__10987 = 0;
var G__10988 = 0;
seq__10973 = G__10985;
chunk__10974 = G__10986;
count__10975 = G__10987;
i__10976 = G__10988;
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
lt.plugins.groovy.__BEH__groovy_res = (function __BEH__groovy_res(editor,res){lt.objs.notifos.done_working.call(null);
var temp__4092__auto___10989 = new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(temp__4092__auto___10989))
{var o_10990 = temp__4092__auto___10989;console.log(o_10990);
} else
{}
return lt.plugins.groovy.notify_of_results.call(null,editor,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-res","lt.plugins.groovy/groovy-res",2429694689),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__groovy_res,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"groovy.res","groovy.res",1460052530),null], null), null));
lt.plugins.groovy.notify_of_error = (function notify_of_error(editor,res){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res)) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1),new cljs.core.Keyword(null,"start-line","start-line",3689311729),((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(res)) + new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))) + -1)], null));
});
lt.plugins.groovy.__BEH__groovy_err = (function __BEH__groovy_err(editor,res){lt.objs.notifos.done_working.call(null);
var temp__4092__auto___10991 = new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(res);if(cljs.core.truth_(temp__4092__auto___10991))
{var o_10992 = temp__4092__auto___10991;console.log(o_10992);
} else
{}
lt.plugins.groovy.notify_of_results.call(null,editor,res);
return lt.plugins.groovy.notify_of_error.call(null,editor,res);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-err","lt.plugins.groovy/groovy-err",2429698598),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__groovy_err,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"groovy.err","groovy.err",1460040439),null], null), null));
lt.plugins.groovy.__BEH__connect = (function __BEH__connect(this$,path){return lt.plugins.groovy.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","connect","lt.plugins.groovy/connect",2930767210),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.groovy.__BEH__client_enable_logging = (function __BEH__client_enable_logging(this$){return lt.object.merge_BANG_.call(null,lt.plugins.groovy.groovy,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.groovy","enable-client-logging?","lt.plugins.groovy/enable-client-logging?",4091824316),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","client-enable-logging","lt.plugins.groovy/client-enable-logging",4685259227),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.groovy.__BEH__client_enable_logging,new cljs.core.Keyword(null,"desc","desc",1016984067),"Groovy: Log groovy client output to lt_groovy.log",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-lang","lt.plugins.groovy/groovy-lang",2937586893),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"groovy.lang","groovy.lang",1959416640),null], null), null));
lt.plugins.groovy.groovy = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.groovy","groovy-lang","lt.plugins.groovy/groovy-lang",2937586893));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Groovy",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directory to serve as the root of your groovy project. (Currently not in use!)",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.groovy.groovy,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
}

//# sourceMappingURL=groovy_compiled.js.map