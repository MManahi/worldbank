!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t)}:n(window.jQuery)}(function(f){f.extend(f.FE.DEFAULTS,{fontSize:["8","9","10","11","12","14","18","24","30","36","48","60","72","96"],fontSizeSelection:!1,fontSizeDefaultSelection:"12"}),f.FE.PLUGINS.fontSize=function(r){function e(e){r.format.applyStyle("font-size",e)}function t(e,t){var n=f(r.selection.element()).css("font-size");t.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected",!1),t.find('.fr-command[data-param1="'+n+'"]').addClass("fr-active").attr("aria-selected",!0);var o=t.find(".fr-dropdown-list"),i=t.find(".fr-active").parent();i.length?o.parent().scrollTop(i.offset().top-o.offset().top-(o.parent().outerHeight()/2-i.outerHeight()/2)):o.parent().scrollTop(0)}function n(e){if(r.opts.fontSizeSelection){var t=r.helpers.getPX(f(r.selection.element()).css("font-size"));e.find("> span").text(t)}}return{apply:e,refreshOnShow:t,refresh:n}},f.FE.RegisterCommand("fontSize",{type:"dropdown",title:"Font Size",displaySelection:function(e){return e.opts.fontSizeSelection},displaySelectionWidth:30,defaultSelection:function(e){return e.opts.fontSizeDefaultSelection},html:function(){for(var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.fontSize,n=0;n<t.length;n++){var o=t[n];e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontSize" data-param1="'+o+'px" title="'+o+'">'+o+"</a></li>"}return e+"</ul>"},callback:function(e,t){this.fontSize.apply(t)},refresh:function(e){this.fontSize.refresh(e)},refreshOnShow:function(e,t){this.fontSize.refreshOnShow(e,t)},plugin:"fontSize"}),f.FE.DefineIcon("fontSize",{NAME:"text-height"})});