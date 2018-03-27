!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,o){return void 0===o&&(o="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(o)}:t(window.jQuery)}(function(E){E.extend(E.FE.POPUP_TEMPLATES,{emoticons:"[_BUTTONS_][_EMOTICONS_]"}),E.extend(E.FE.DEFAULTS,{emoticonsStep:8,emoticonsSet:[{code:"1f600",desc:"Grinning face"},{code:"1f601",desc:"Grinning face with smiling eyes"},{code:"1f602",desc:"Face with tears of joy"},{code:"1f603",desc:"Smiling face with open mouth"},{code:"1f604",desc:"Smiling face with open mouth and smiling eyes"},{code:"1f605",desc:"Smiling face with open mouth and cold sweat"},{code:"1f606",desc:"Smiling face with open mouth and tightly-closed eyes"},{code:"1f607",desc:"Smiling face with halo"},{code:"1f608",desc:"Smiling face with horns"},{code:"1f609",desc:"Winking face"},{code:"1f60a",desc:"Smiling face with smiling eyes"},{code:"1f60b",desc:"Face savoring delicious food"},{code:"1f60c",desc:"Relieved face"},{code:"1f60d",desc:"Smiling face with heart-shaped eyes"},{code:"1f60e",desc:"Smiling face with sunglasses"},{code:"1f60f",desc:"Smirking face"},{code:"1f610",desc:"Neutral face"},{code:"1f611",desc:"Expressionless face"},{code:"1f612",desc:"Unamused face"},{code:"1f613",desc:"Face with cold sweat"},{code:"1f614",desc:"Pensive face"},{code:"1f615",desc:"Confused face"},{code:"1f616",desc:"Confounded face"},{code:"1f617",desc:"Kissing face"},{code:"1f618",desc:"Face throwing a kiss"},{code:"1f619",desc:"Kissing face with smiling eyes"},{code:"1f61a",desc:"Kissing face with closed eyes"},{code:"1f61b",desc:"Face with stuck out tongue"},{code:"1f61c",desc:"Face with stuck out tongue and winking eye"},{code:"1f61d",desc:"Face with stuck out tongue and tightly-closed eyes"},{code:"1f61e",desc:"Disappointed face"},{code:"1f61f",desc:"Worried face"},{code:"1f620",desc:"Angry face"},{code:"1f621",desc:"Pouting face"},{code:"1f622",desc:"Crying face"},{code:"1f623",desc:"Persevering face"},{code:"1f624",desc:"Face with look of triumph"},{code:"1f625",desc:"Disappointed but relieved face"},{code:"1f626",desc:"Frowning face with open mouth"},{code:"1f627",desc:"Anguished face"},{code:"1f628",desc:"Fearful face"},{code:"1f629",desc:"Weary face"},{code:"1f62a",desc:"Sleepy face"},{code:"1f62b",desc:"Tired face"},{code:"1f62c",desc:"Grimacing face"},{code:"1f62d",desc:"Loudly crying face"},{code:"1f62e",desc:"Face with open mouth"},{code:"1f62f",desc:"Hushed face"},{code:"1f630",desc:"Face with open mouth and cold sweat"},{code:"1f631",desc:"Face screaming in fear"},{code:"1f632",desc:"Astonished face"},{code:"1f633",desc:"Flushed face"},{code:"1f634",desc:"Sleeping face"},{code:"1f635",desc:"Dizzy face"},{code:"1f636",desc:"Face without mouth"},{code:"1f637",desc:"Face with medical mask"}],emoticonsButtons:["emoticonsBack","|"],emoticonsUseImage:!0}),E.FE.PLUGINS.emoticons=function(h){function e(){var e=h.$tb.find('.fr-command[data-cmd="emoticons"]'),o=h.popups.get("emoticons");if(o||(o=n()),!o.hasClass("fr-active")){h.popups.refresh("emoticons"),h.popups.setContainer("emoticons",h.$tb);var t=e.offset().left+e.outerWidth()/2,s=e.offset().top+(h.opts.toolbarBottom?10:e.outerHeight()-10);h.popups.show("emoticons",t,s,e.outerHeight())}}function o(){h.popups.hide("emoticons")}function n(){var e="";h.opts.toolbarInline&&0<h.opts.emoticonsButtons.length&&(e='<div class="fr-buttons fr-emoticons-buttons">'+h.button.buildList(h.opts.emoticonsButtons)+"</div>");var o={buttons:e,emoticons:s()},t=h.popups.create("emoticons",o);return h.tooltip.bind(t,".fr-emoticon"),i(t),t}function c(){if(!h.selection.isCollapsed())return!1;var e=h.selection.element(),o=h.selection.endElement();if(e&&h.node.hasClass(e,"fr-emoticon"))return e;if(o&&h.node.hasClass(o,"fr-emoticon"))return o;var t=h.selection.ranges(0),s=t.startContainer;if(s.nodeType==Node.ELEMENT_NODE&&0<s.childNodes.length&&0<t.startOffset){var n=s.childNodes[t.startOffset-1];if(h.node.hasClass(n,"fr-emoticon"))return n}return!1}function s(){for(var e='<div style="text-align: center">',o=0;o<h.opts.emoticonsSet.length;o++)0!==o&&o%h.opts.emoticonsStep==0&&(e+="<br>"),e+='<span class="fr-command fr-emoticon" tabIndex="-1" data-cmd="insertEmoticon" title="'+h.language.translate(h.opts.emoticonsSet[o].desc)+'" role="button" data-param1="'+h.opts.emoticonsSet[o].code+'">'+(h.opts.emoticonsUseImage?'<img src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/'+h.opts.emoticonsSet[o].code+'.svg"/>':"&#x"+h.opts.emoticonsSet[o].code+";")+'<span class="fr-sr-only">'+h.language.translate(h.opts.emoticonsSet[o].desc)+"&nbsp;&nbsp;&nbsp;</span></span>";return h.opts.emoticonsUseImage&&(e+='<p style="font-size: 12px; text-align: center; padding: 0 5px;">Emoji free by <a class="fr-link" tabIndex="-1" href="http://emojione.com/" target="_blank" rel="nofollow" role="link" aria-label="Open Emoji One website.">Emoji One</a></p>'),e+"</div>"}function i(p){h.events.on("popup.tab",function(e){var o=E(e.currentTarget);if(!h.popups.isVisible("emoticons")||!o.is("span, a"))return!0;var t,s,n,c=e.which;if(E.FE.KEYCODE.TAB==c){if(o.is("span.fr-emoticon")&&e.shiftKey||o.is("a")&&!e.shiftKey){var i=p.find(".fr-buttons");t=!h.accessibility.focusToolbar(i,!!e.shiftKey)}if(!1!==t){var a=p.find("span.fr-emoticon:focus:first, span.fr-emoticon:visible:first, a");o.is("span.fr-emoticon")&&(a=a.not("span.fr-emoticon:not(:focus)")),s=a.index(o),s=e.shiftKey?((s-1)%a.length+a.length)%a.length:(s+1)%a.length,n=a.get(s),h.events.disableBlur(),n.focus(),t=!1}}else if(E.FE.KEYCODE.ARROW_UP==c||E.FE.KEYCODE.ARROW_DOWN==c||E.FE.KEYCODE.ARROW_LEFT==c||E.FE.KEYCODE.ARROW_RIGHT==c){if(o.is("span.fr-emoticon")){var f=o.parent().find("span.fr-emoticon");s=f.index(o);var d=h.opts.emoticonsStep,r=Math.floor(f.length/d),l=s%d,m=Math.floor(s/d)*d+l,u=r*d;E.FE.KEYCODE.ARROW_UP==c?m=((m-d)%u+u)%u:E.FE.KEYCODE.ARROW_DOWN==c?m=(m+d)%u:E.FE.KEYCODE.ARROW_LEFT==c?m=((m-1)%u+u)%u:E.FE.KEYCODE.ARROW_RIGHT==c&&(m=(m+1)%u),n=E(f.get(m)),h.events.disableBlur(),n.focus(),t=!1}}else E.FE.KEYCODE.ENTER==c&&(o.is("a")?o[0].click():h.button.exec(o),t=!1);return!1===t&&(e.preventDefault(),e.stopPropagation()),t},!0)}function t(e,o){var t=c(),s=h.selection.ranges(0);t?(0===s.startOffset&&h.selection.element()===t?E(t).before(E.FE.MARKERS+E.FE.INVISIBLE_SPACE):0<s.startOffset&&h.selection.element()===t&&s.commonAncestorContainer.parentNode.classList.contains("fr-emoticon")&&E(t).after(E.FE.INVISIBLE_SPACE+E.FE.MARKERS),h.selection.restore(),h.html.insert('<span class="fr-emoticon fr-deletable'+(o?" fr-emoticon-img":"")+'"'+(o?' style="background: url('+o+');"':"")+">"+(o?"&nbsp;":e)+"</span>&nbsp;"+E.FE.MARKERS,!0)):h.html.insert('<span class="fr-emoticon fr-deletable'+(o?" fr-emoticon-img":"")+'"'+(o?' style="background: url('+o+');"':"")+">"+(o?"&nbsp;":e)+"</span>&nbsp;",!0)}function a(){h.popups.hide("emoticons"),h.toolbar.showInline()}function f(){var e=function(){for(var e=h.el.querySelectorAll(".fr-emoticon:not(.fr-deletable)"),o=0;o<e.length;o++)e[o].className+=" fr-deletable"};e(),h.events.on("html.set",e),h.events.on("keydown",function(e){if(h.keys.isCharacter(e.which)&&h.selection.inEditor()){var o=h.selection.ranges(0),t=c();h.node.hasClass(t,"fr-emoticon-img")&&t&&(0===o.startOffset&&h.selection.element()===t?E(t).before(E.FE.MARKERS+E.FE.INVISIBLE_SPACE):E(t).after(E.FE.INVISIBLE_SPACE+E.FE.MARKERS),h.selection.restore())}}),h.events.on("keyup",function(e){for(var o=h.el.querySelectorAll(".fr-emoticon"),t=0;t<o.length;t++)"undefined"!=typeof o[t].textContent&&0===o[t].textContent.replace(/\u200B/gi,"").length&&E(o[t]).remove();if(!(e.which>=E.FE.KEYCODE.ARROW_LEFT&&e.which<=E.FE.KEYCODE.ARROW_DOWN)){var s=c();h.node.hasClass(s,"fr-emoticon-img")&&(E(s).append(E.FE.MARKERS),h.selection.restore())}})}return{_init:f,insert:t,showEmoticonsPopup:e,hideEmoticonsPopup:o,back:a}},E.FE.DefineIcon("emoticons",{NAME:"smile-o",FA5NAME:"smile"}),E.FE.RegisterCommand("emoticons",{title:"Emoticons",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("emoticons")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("emoticons")):this.emoticons.showEmoticonsPopup()},plugin:"emoticons"}),E.FE.RegisterCommand("insertEmoticon",{callback:function(e,o){this.emoticons.insert("&#x"+o+";",this.opts.emoticonsUseImage?"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/"+o+".svg":null),this.emoticons.hideEmoticonsPopup()}}),E.FE.DefineIcon("emoticonsBack",{NAME:"arrow-left"}),E.FE.RegisterCommand("emoticonsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.emoticons.back()}})});