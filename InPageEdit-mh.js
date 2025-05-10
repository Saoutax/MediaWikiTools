/*
Compiled version of https://github.com/lihaohong6/inpageedit-v2
Original author: 机智的小鱼君/Dragon Fish
License: GPLv3
*/
(function(oe){typeof define=="function"&&define.amd?define(oe):oe()})(function(){"use strict";const oe=Le(document?.currentScript?.src);function Le(e=""){return e=e.split("?")[0],e.endsWith(".js")?e.includes("/dist/")?e.split("/dist/")[0]:e.split("/").slice(0,-1).join("/"):e.replace(/\/$/,"")}function De(e=""){return`${oe}/${e.replace(/^\/+/,"")}`}function Re(){(function(e,t){e.ssi_modal=t(e.jQuery)})(globalThis,function(e){var t=D(),r=0,c=0,s={stackModal:0,normalModal:0},a=0,p=!1,l=function(i){this.numberId=a,i.stack?this.pluginName="stackModal":this.pluginName="normalModal",this.backdropId="",this.showbd=!0,this.setOptions(i)};l.prototype.setOptions=function(i,n){if(typeof i=="object"){var d={content:"",bodyScroll:!1,keepContent:!1,position:"",backdrop:!0,stack:!1,onClickClose:!1,bodyElement:!1,className:"",backdropClassName:"",preview:{icon:!1,hideIcons:!1,state:"normal"},closeAfter:!1,outSideClose:!0,onClose:"",onShow:"",beforeClose:"",beforeShow:"",iframe:{allowFullScreen:!0,className:""},center:!1,closeIcon:!0,navigation:!1,sizeClass:"medium",animation:!1,modalAnimation:void 0,backdropAnimation:void 0,animationSpeed:300,buttons:[],iconButtons:[],title:"",fixedHeight:!1,fitScreen:!1},f=this;this.options=e.extend(!0,d,i),this.options.iconButtons=N(this.options.iconButtons),this.options.preview.icon&&this.options.iconButtons.push({className:"ssi-displayIcon",method:function(){f.changePreviewState()}}),this.options.closeIcon&&this.options.iconButtons.push({className:"ssi-closeIcon",keyPress:"escape",method:function(){f.close()}}),k(this)}else this.options[i]=n,(i==="animation"||i==="modalAnimation"||i==="backdropAnimation")&&k(this);return this},l.prototype.init=function(){return this.options.backdrop&&this.backdropInit(),this.modalInit(),a++,this},l.prototype.get$content=function(){return this.get$modal().find("#ssi-modalContent")},l.prototype.get$modal=function(i){return i=i||this.modalId,this.$modal||e(document.getElementById(i))},l.prototype.get$title=function(){return this.get$modal().find("#ssi-modalTitle")},l.prototype.destroyTitle=function(){return this.get$title().remove(),this.options.title="",this},l.prototype.destroyContent=function(){return this.get$content().remove(),this.options.content="",this},l.prototype.destroyButtons=function(i){return this.get$buttons(i).remove(),this.options.buttons=[],this},l.prototype.destroyIcons=function(){return this.get$icons().remove(),this.options.icons=[],this},l.prototype.get$icons=function(){return this.get$modal().find(".ssi-topIcons")},l.prototype.get$buttons=function(i){return i=i||"buttons",this.get$modal().find("#ssi-"+i)},l.prototype.get$window=function(){return this.get$modal().find("#ssi-modalWindow")},l.prototype.get$wrapper=function(){return this.options.stack?this.get$modal().parent():this.get$modal().find("#ssi-modalWrapper")},l.prototype.get$backdrop=function(){return this.$backdrop||e(document.getElementById(this.backdropId))};var u=null;l.prototype.changePreviewState=function(){var i=this.get$modal();if(this.options.preview.state==="fullScreen")i.removeClass("ssi-fullScreen"),this.options.preview.state="normal",i.find("#ssi-modalContent").css("height",""),(this.options.fixedHeight||this.options.fitScreen)&&this.setModalHeight(),clearTimeout(u),i.off("mousemove.ssi-modal");else{if(this.options.preview.hideIcons){var n=i.find(".ssi-topIcons");if(this.options.buttons)var d=i.find("#ssi-buttons");i.on("mousemove.ssi-modal",function(){clearTimeout(u),n.fadeIn(),d.slideDown(),u=setTimeout(function(){d.slideUp(),n.fadeOut()},2e3)})}this.setModalHeight(40,"height"),i.addClass("ssi-fullScreen"),this.options.preview.state="fullScreen"}return this},l.prototype.setPluginName=function(i){return this.pluginName=i,s[i]=0,this},l.prototype.setContent=function(i,n){n=n||"html";var d;this.options.content!==!0?(d=e('<div id="ssi-modalContent" class="ssi-modalContent '+(this.options.fixedHeight?"ssi-overflow ":"")+'"></div>'),this.options.content===""&&(this.options.title===!0?this.get$title().after(d):this.get$window().prepend(d),this.setModalHeight()),this.options.content=!0):d=this.get$content();var f=i;if(i instanceof e&&this.options.bodyElement===!0){if(this.options.extendOriginalContent===!0){var b=this.options.beforeClose;this.options.beforeClose=function(W){var M;if(typeof b=="function"&&(M=b(W)),M!==!1)i.eq(0).after(W.get$content().contents().unwrap().css("display","")).remove();else return M}}f=i.eq(0).clone(),f.is(":visible")||f.show()}return d[n](f),d},l.prototype.setButtons=function(i,n,d){var f,b=!1;i=N(i),n!==!1&&(n=typeof n<"u"?e(n):this.get$window(),f=n.find("#ssi-buttons"),f=f[0]),f||(f=e('<div id="ssi-buttons" class="ssi-buttons"><div  id="ssi-leftButtons" class="ssi-leftButtons"></div><div id="ssi-rightButtons" class="ssi-rightButtons"></div></div>'),n&&(b=!0,n.append(f)),this.options.buttons=!0);for(var W=i.length,M=f.find("#ssi-leftButtons"),_=f.find("#ssi-rightButtons"),j=[],B=[],q=0,Z;q<W;q++)Z=this.generateButton(i[q],d),i[q].side==="left"?j.push(Z):B.push(Z);return M.append(j),_.append(B),b&&this.setModalHeight(),f};var y=function(i,n){switch(typeof i){case"boolean":n==="show"?i=i?"anim ssi-fadeIn":"ssi-show":i=i?"anim ssi-fadeOut":"ssi-hidden";break;case"undefined":n==="show"?i="ssi-show":i="ssi-hidden"}return i},k=function(i){var n=i.options.modalAnimation||i.options.animation||!1,d=i.options.backdropAnimation||i.options.animation||!1,f,b;f=y(typeof n.show<"u"?n.show:n,"show"),b=y(typeof n.hide<"u"?n.hide:n,"hide"),i.options.modalAnimation={show:f,hide:b},f=y(typeof d.show<"u"?d.show:d,"show"),b=y(typeof d.hide<"u"?d.hide:d,"hide"),i.options.backdropAnimation={show:f,hide:b},t===!1&&(i.options.modalAnimation={show:i.options.modalAnimation.show!=="ssi-show"?"anim ssi-fadeIn":"ssi-show",hide:i.options.modalAnimation.hide!=="ssi-hidden"?"anim ssi-fadeOut":"ssi-hidden"},i.options.backdropAnimation={show:i.options.backdropAnimation.show!=="ssi-show"?"anim ssi-fadeIn":"ssi-show",hide:i.options.backdropAnimation.hide!=="ssi-hidden"?"anim ssi-fadeOut":"ssi-hidden"})},g=function(i){var n=i.get$modal();if(i.time=setTimeout(function(){i.close()},i.options.closeAfter.time*1e3),i.options.closeAfter.displayTime&&i.options.title){var d=n.find("span.ssi-displayTime").html(i.options.closeAfter.time);S(i,d,function(){i.$displayTime.remove()})}i.options.closeAfter.resetOnHover&&(n.on("mouseenter.ssi-modal",function(){clearTimeout(i.time),d&&(d.html(i.options.closeAfter.time),clearInterval(i.countDown))}),n.on("mouseleave.ssi-modal",function(){i.time=setTimeout(function(){i.close()},i.options.closeAfter.time*1e3),i.options.closeAfter.displayTime&&i.options.title&&S(i,d,function(){d.parent().remove()})}))};l.prototype.backdropInit=function(){var i;if(typeof p=="string"){var n=e(document.getElementById(p));this.backdropId=p,i=n.attr("class","ssi-backdrop "+this.pluginName+" "+this.options.backdropClassName),this.showbd=!1,p=!0}else{if(i=e('<div id="ssi-backdrop'+this.numberId+'" class="ssi-backdrop ssi-hidden '+this.options.backdropClassName+" "+this.pluginName+'"></div>'),this.options.backdrop==="shared"||this.options.backdrop==="byKindShared"){var d;this.options.backdrop==="byKindShared"?d=e(".ssi-backdrop.ssi-openedDialog."+this.pluginName):d=e(".ssi-backdrop.ssi-openedDialog"),d[0]?(this.backdropId=d.attr("id"),this.showbd=!1,i=d):(e("body").append(i),this.backdropId="ssi-backdrop"+this.numberId,this.showbd=!0)}else this.options.backdrop===!0&&(e("body").append(i),this.backdropId="ssi-backdrop"+this.numberId,this.showbd=!0);this.$backdrop=i}if(this.options.outSideClose&&this.options.position){var f=this;i.on("click.ssi-modal"+this.numberId,function(b){b.preventDefault(),f.close()})}return i};var C=function(i){return e('<div class="ssi-modalOuter '+(i.options.stack?" ssi-stack":""+i.options.className)+(i.options.center?" ssi-center ":" ")+" "+(i.options.position?" ssi-modalPositioned "+i.options.position:"")+'"></div>')},h=function(i){return e('<div id="ssi-modalWrapper" class=" ssi-modalWrapper '+i.options.sizeClass+'"></div>')};l.prototype.setIcons=function(i,n){var d,f=[];this.options.iconButtons!==!0?(d=e('<div class="ssi-topIcons"></div>'),this.options.iconButtons=!0):d=this.get$icons();for(var b=this,W=i.length,M=0,_;M<W;M++)_=i[M],function(j){var B=e('<a class="'+j.className+'"></a>').on("click",function(q){q.preventDefault(),typeof j.method=="function"&&e.proxy(j.method,this)(q,b)});f.push(B),j.keyPress&&(n&&!j.keyPressBody&&n.prop("tabindex",-1),j.keyPress=j.keyPress.replace(/(ctrl|shift|alt)[-+]/gi,function(q,Z){return j[Z.toLowerCase()]=!0,""}).toLowerCase(),(j.keyPressBody||n===void 0?e(document.body):n).on("keydown.ssi_modal",function(q){(q.ctrlKey||q.metaKey)==!!j.ctrl&&q.shiftKey==!!j.shift&&q.altKey==!!j.alt&&q.key.toLowerCase()==j.keyPress&&(q.preventDefault(),B.trigger("click"))}))}(_);return d.append(f),d};var x=function(i){var n=e('<div id="ssi-modalWindow" class="ssi-modalWindow '+(i.options.center?i.options.sizeClass:"")+(i.options.stack?" "+i.options.sizeClass+" "+i.options.className+" ":"")+'"></div>'),d="",f=[];return i.options.content&&(d=i.setContent(i.options.content,"html")),i.options.title&&f.push(i.setTitle(i.options.title)),i.options.onClickClose&&n.addClass("ssi-hover").on("click",function(b){var W=e(b.target);!W.is("a")&&!W.is("button")&&i.close()}),i.options.iconButtons.length>0&&f.push(i.setIcons(i.options.iconButtons,n)),f.push(d),typeof i.options.buttons<"u"&&!e.isEmptyObject(i.options.buttons)&&f.push(i.setButtons(i.options.buttons,!1,n)),n.append(f),n};l.prototype.generateButton=function(i,n){var d={className:"",enableAfter:!1,method:function(){},type:"button",focused:!1,id:"",label:"",modalAnimation:"",backdropAnimation:""};i=e.extend({},d,i);var f="button",b="",W=this,M;i.type==="link"&&(f="a",b=' href="#"');var _=e("<"+f+b+(i.id?' id="'+i.id+'"':" ")+(i.enableAfter?"disabled ":"")+' class="ssi-modalBtn '+(i.className||"")+'">'+i.label+"</"+f+">");if(typeof i.enableAfter=="number"){var j=e('<span class="ssi-countDown">'+i.enableAfter+"</span>");S(W,j,function(){_.removeClass("disabled"),_.removeAttr("disabled"),j.remove()}),_.append(j)}return i.keyPress&&(n&&!i.keyPressBody&&n.prop("tabindex",-1),i.keyPress=i.keyPress.replace(/(ctrl|shift|alt)[-+]/gi,function(B,q){return i[q.toLowerCase()]=!0,""}).toLowerCase(),(i.keyPressBody||n===void 0?e(document.body):n).on("keydown.ssi_modal",function(B){(B.ctrlKey||B.metaKey)==!!i.ctrl&&B.shiftKey==!!i.shift&&B.altKey==!!i.alt&&B.key.toLowerCase()==i.keyPress&&!_.is(":disabled")&&(B.preventDefault(),_.trigger("click"))})),i.focused&&setTimeout(function(){_.focus()},100),_.on("click",function(B){B.preventDefault(),i.clearTimeOut&&w(W),typeof i.method=="function"&&(M=e.proxy(i.method,this)(B,W)),M!==!1&&(typeof i.keepContent=="boolean"&&i.keepContent!==W.options.keepContent&&(W.options.keepContent=i.keepContent),i.closeAfter&&W.close())})},l.prototype.modalInit=function(){var i=x(this),n=this;if(this.options.position&&this.options.stack){var d="append";this.options.position.indexOf("bottom")>-1&&(d="prepend");var f=this.options.position.replace(" ","."),b=e("div.ssi-modalOuter.ssi-stack."+f);b[0]&&b.find("#ssi-modalWrapper")[d](i),this.$modal=i}if(!this.options.stack||!b[0]){var W=h(this),M=C(this).append(W.append(i)).appendTo(e("body"));this.options.stack||(this.$modal=M,M.one("onShow.ssi-modal",function(){if(n.options.outSideClose===!0){var _=!1;M.on("mousedown",function(j){j.which===1&&!j.target.closest("#ssi-modalWindow")&&(_=!0)}).on("click",function(j){_&&j.which===1&&!j.target.closest("#ssi-modalWindow")?n.close():_=!1})}}))}return this.modalId="ssi-"+this.pluginName+this.numberId,this.$modal.attr("id","ssi-"+this.pluginName+this.numberId),this.$modal.addClass(this.pluginName+" ssi-modal"),this.$modal.data("ssi-modal",this).addClass("ssi-hidden"),typeof p=="string"&&this.backdropInit(),this.$modal},l.prototype.setTitle=function(i){var n,d=!1;return this.options.title!==!0?(n=e('<div id="ssi-modalTitle" class="ssi-modalTitle '+(this.options.content?"":"ssi-borderOut ")+'">'+this.options.title+"</div>"),this.options.title===""&&(this.get$window().prepend(n),d=!0),this.options.title=!0):n=this.get$title(),n.html(i),d&&this.setModalHeight(),n},l.prototype.showModal=function(){var i=this.get$modal(),n=this;setTimeout(function(){i.trigger("beforeShow.ssi-modal")},0),this.options.bodyScroll===!1&&(e("body").addClass("ssi-modalOpen"),r++),this.options.backdrop==="shared"?c++:this.options.backdrop==="byKindShared"&&s[this.pluginName]++,i.addClass("ssi-openedDialog");var d=function(){e(this).removeClass("ssi-hidden"),typeof n.options.onShow=="function"&&n.options.onShow(n),setTimeout(function(){i.trigger("onShow.ssi-modal")},0)};i.addAnimation(this.options.modalAnimation.show,function(){d()}).removeClass("ssi-hidden"),this.options.center&&i.css("display",""),n.options.preview.state==="fullScreen"&&(n.options.preview.state="normal",n.changePreviewState()),this.setModalHeight(),typeof this.options.closeAfter.time=="number"&&g(this),delete this.$modal},l.prototype.showBackdrop=function(){var i=this.get$backdrop().addClass("ssi-openedDialog");i.addAnimation(this.options.backdropAnimation.show).removeClass("ssi-hidden"),delete this.$backdrop},l.prototype.show=function(){if(typeof this.options.beforeShow=="function"){var i=this.options.beforeShow(this);if(i===!1)return this}return this.showModal(),p===!1&&this.options.backdrop&&this.showbd===!0&&this.showBackdrop(),document.activeElement.blur(),this},l.prototype.destroyBackdrop=function(){var i=this.get$backdrop(),n=this;this.options.keepContent!==!0&&i.off("click.ssi-modal"+this.numberId);var d=this,f=function(){if(d.options.backdrop===!0||(d.options.backdrop==="shared"&&c<1||d.options.backdrop==="byKindShared"&&s[d.pluginName]<1)&&(!d.get$modal(d.modalId.replace(d.numberId.toString(),d.backdropId.replace("ssi-backdrop","")))[0]||d.backdropId.replace("ssi-backdrop","")==d.numberId)){var b=function(){i.addClass("ssi-hidden").removeClass("ssi-openedDialog"),i.trigger("backdropClose.ssi-modal"),n.options.keepContent!==!0&&i.remove()};i.addAnimation(d.options.backdropAnimation.hide,b)}p===d.backdropId&&(p=!1)};return this.options.stack&&this.options.outSideClose?setTimeout(f,10):f(),this},l.prototype.destroyModal=function(){var i=this.get$modal(),n=this;i.off(".ssi_modal"),i.trigger("beforeClose.ssi-modal"),this.options.backdrop==="shared"?c--:this.options.backdrop==="byKindShared"&&s[this.pluginName]--,i.hasClass("ssi-openedDialog")&&(i.removeClass("ssi-openedDialog"),this.options.bodyScroll===!1&&r--);var d=function(){i.addClass("ssi-hidden"),n.options.stack?i.addClass("ssi-smoothSlide").slideUp("500",function(){i.removeClass("ssi-smoothSlide"),i.trigger("onClose.ssi-modal"),n.options.keepContent!==!0&&i.remove()}):(i.trigger("onClose.ssi-modal"),n.options.keepContent!==!0&&i.remove()),typeof n.options.onClose=="function"&&n.options.onClose(n),n.options.keepContent!==!0&&i.off(".ssi-modal").find("#ssi-modalWrapper").off(".ssi-modal")};return i.addAnimation(this.options.modalAnimation.hide,d),this.options.icons=[],this.options.buttons=[],this.options.content="",this.options.title="",p=this.backdropId,this},l.prototype.close=function(){if(typeof this.options.beforeClose=="function"){var i=this.options.beforeClose(this);if(i===!1)return this}var n=e("body");return n.off(".ssi_modal"),this.destroyModal(),this.destroyBackdrop(),r<1&&n.removeClass("ssi-modalOpen"),w(this),this},l.prototype.setModalHeight=function(i,n){if(!this.options.fitScreen&&!this.options.fixedHeight&&!n)return this;typeof i!="number"&&(i=100);var d=this.get$content(),f=e(window).height(),b=0,W=0;this.options.buttons&&(b=d.next().innerHeight()),this.options.title&&(W=this.get$title().innerHeight());var M=b+W+i,_=0;return n?typeof n=="string"&&d.css(n,f-M):this.options.fitScreen&&this.options.fixedHeight?(typeof this.options.fitScreen=="number"&&(_=Math.abs((this.options.fitScreen+this.options.fixedHeight)/2-i)),d.css("height",f-M-_)):(this.options.fitScreen&&(typeof this.options.fitScreen=="number"&&(_=Math.abs(this.options.fitScreen-i)),d.css("min-height",f-M-_)),this.options.fixedHeight&&(_=0,typeof this.options.fixedHeight=="number"&&(_=Math.abs(this.options.fixedHeight-i)),d.css("max-height",f-M-_))),M};var w=function(i){clearTimeout(i.time),i.time=null,clearInterval(i.countDown)},S=function(i,n,d){var f=function(){var b=parseInt(n.html());b-1!==0?n.html(b-1):(d&&d(),clearInterval(i.countDown))};i.countDown=setInterval(f,1e3)};e.fn.extend({hasClasses:function(i){var n=this;for(var d in i)if(e(n).hasClass(i[d]))return!0;return!1}});var v={checkElement:function(i){var n=e(i);if(n[0]){var d=n.data("ssi-modal");if(d&&!document.getElementById(d.modalId))return n.data("ssi-modal",""),!1}return d||!1},createObject:function(i,n){var d,f,b;return typeof n<"u"?(d=e(n),b=d.data("ssi-modal")):i.keepContent=!1,b?f=b:(f=new l(i),typeof n<"u"&&d.data("ssi-modal",f)),f},show:function(i,n){var d=!1;if(n&&(d=this.checkElement(n)),d===!1)return this.createObject(i,n).init().show();if(typeof d=="object")return d.show()},close:function(i){if(!i){var n=e(".ssi-modalOuter");i=n.eq(n.length-1)}return i.data("ssi-modal").close()},proto:l.prototype,closeAll:function(i,n){n=N(n);var d,f=typeof i;if(f==="string"&&i!==""||f==="array"){i=N(i);for(var b=i.length,W=0;W<b;W++)d=e(".ssi-modal.ssi-openedDialog."+i[W]),M(d)}else d=e(".ssi-modal.ssi-openedDialog"),M(d);function M(_){for(var j=_.length,B=j-1;B>=0;B--){var q=_.eq(B);q.hasClasses(n)||q.data("ssi-modal").close()}}},removeAll:function(){e(".ssi-modalOuter").addClass("ssi-hidden").remove(),e(".ssi-backdrop").addClass("ssi-hidden").remove(),e("body").removeClass("ssi-modalOpen"),r=0,c=0,s={stackModal:0,normalModal:0},a=0}};v.dialog=function(i,n){var d={sizeClass:"dialog",okBtn:{className:"",label:"Ok"},title:"",closeIcon:!1,outSideClose:!1};return i.okBtn=e.extend({},d.okBtn,i.okBtn),i=e.extend({},d,i),i.buttons=[{className:i.okBtn.className,label:i.okBtn.label,closeAfter:!0,method:n}],new l(i).init().show()},v.confirm=function(i,n){var d={okBtn:{className:"",keyPress:"Enter",keyPressBody:!0,label:"Ok"},cancelBtn:{className:"",label:"Cancel"},closeIcon:!1,sizeClass:"dialog",title:"",outSideClose:!1};return i.okBtn=e.extend({},d.okBtn,i.okBtn),i.cancelBtn=e.extend({},d.cancelBtn,i.cancelBtn),i=e.extend({},d,i),i.buttons=[{className:i.okBtn.className,label:i.okBtn.label,closeAfter:!0,method:function(f,b){typeof n=="function"&&n(!0,f,b)}},{className:i.cancelBtn.className,label:i.cancelBtn.label,closeAfter:!0,method:function(f,b){typeof n=="function"&&n(!1,f,b)}}],new l(i).init().show()};function m(i){return!!i.match(m.regex)}m.regex=/^\s*data:([a-z]+\/[a-z0-9\-+]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i;var P={"ssi-mainOption":{}};v.imgBox=function(i,n){n=n||"ssi-mainOption",P[n]=e.extend({},P["ssi-mainOption"],i)};var z,T,I;v.proto.navigate=function(i){var n=e('a[data-ssi_imgGroup="'+I.attr("data-ssi_imgGroup")+'"]');return z||(z=n.index(I)),T||(T=n.length),i==="next"&&z+1>=T||i==="prev"&&z<0?this:(this.destroyModal(),i==="next"?z++:i==="prev"&&z--,n.eq(z).trigger("click.ssi-imgBox"),this)},v.imgBox.show=function(i,n){var d={backdrop:"byKindShared",fixedHeight:!0,navigation:!0,closeIcon:!0,title:!1,allowIframe:!0,hideImgButtons:!0};n=e.extend(!0,d,n),e.extend(n,{img:!0,content:'<div class="ssi-loader"></div>',sizeClass:""});var f=v.createObject(n).setPluginName("imgBox");f.imgUrl=i,f.imgTitle=n.title,f.init(),n.title&&f.get$icons().addClass("inTitle"),f.show(),E(f,i)},e("body").on("click.ssi-imgBox","a.ssi-imgBox",function(i){i.preventDefault(),i.stopPropagation(),I=e(i.currentTarget);var n=I.attr("data-ssi_imgGroup")||"ssi-mainOption",d=P[n]||P["ssi-mainOption"],f=I.attr("href");if(d.imgButtons!==""&&!e.isEmptyObject(d.imgButtons)){for(var b=0;b<d.imgButtons.length;b++)if(d.imgButtons[b].exclude){for(var W=d.imgButtons[b].exclude.split(","),M=0;M<W.length;M++)if(I.hasClass(W[M])){d.imgButtons.splice(b,1);break}}}d.title&&d.title===!0&&(d.title=I.attr("title")),v.imgBox.show(f,d,I)});function E(i,n){var d=i.get$wrapper(),f=d.find("#ssi-modalContent");if(!n||n=="#"){var b=I?I.attr("data-alt"):"";q="<h3>Image not found</h3><br>"+(typeof b<"u"?"<h4>"+b+"</h4>":""),de(!0);return}var W,M,_="naturalWidth"in new Image,j=e(window).height(),B=e(window).width(),q=[""],Z=0;i.options.navigation&&I&&f.append(xi);var yi=["jpg","jpeg","png","gif","bmp"];!i.options.allowIframe||e.inArray(n.split(".").pop().toLowerCase(),yi)!==-1||m(n)?(q=e('<img src="'+n+'" class="ssi-modalImg"/>').on("load",function(){if(!_){var H=new Image;H.src=q.attr("src");var V=H.width,U=H.height;xe(V,U)}}).error(function(){var H=I?I.attr("data-alt"):"";q="<h3>Image not found</h3><br>"+(typeof H<"u"?"<h4>"+H+"</h4>":""),de(!0)}),Be(),M&&(W=setInterval(function(){d.addClass("ssi-imgBorder"),Be(),Z++},50))):(typeof i.options.iframe.allowFullScreen!="boolean"&&(i.options.iframe.allowFullScreen=!0),i.options.iframe.className=i.options.iframe.className||"",q=e('<iframe src="'+n+'" frameborder="0" '+(i.options.iframe.allowFullScreen?"allowfullscreen":"")+"></iframe>"),i.options.center?d.addClass("ssi-iframe ").find("#ssi-modalWindow"+i.numberId).addClass(i.options.iframe.className):d.addClass("ssi-iframe "+i.options.iframe.className),de());function xi(){var H=e('a[data-ssi_imgGroup="'+I.attr("data-ssi_imgGroup")+'"]');if(H.length){var V=H.index(I),U=H.length;if(!(V+1>=U&&V<1)){var G=e('<div class="ssi-modalNavigation"></divid>').mouseover(function(){G.addClass("ssi-navFadeIn")}).mouseleave(function(){G.removeClass("ssi-navFadeIn")}),X=e('<div class="ssi-modalNext '+(V+1>=U?"ssi-hidden":"")+'"><span></span></div>'),ae=e('<div class="ssi-modalPrev '+(V<1?"ssi-hidden":"")+'"><span></span></div>');return G.append(X,ae),i.get$backdrop().one("backdropClose.ssi-modal",function(){T="",z=""}),i.get$modal().one("beforeClose.ssi-modal",function(){G.remove()}).one("onShow.ssi-modal",function(){X.one("click",function($e){$e.preventDefault(),i.navigate("next"),e(this).off("click.ssi_modal")}),ae.one("click",function($e){$e.preventDefault(),i.navigate("prev"),e(this).off("click.ssi_modal")})}),G}}}function de(H){f.find(".ssi-loader").remove();var V=[];if(!H&&i.options.imgButtons!==""&&!e.isEmptyObject(i.options.imgButtons)){var U=i.setButtons(i.options.imgButtons,i.get$content()).addClass("ssi-imgButtons");i.options.hideImgButtons===!0&&(U.addClass("ssi-navFade ssi-navFadeOut"),i.get$wrapper().mouseover(function(){U.addClass("ssi-navFadeIn")}).mouseleave(function(){U.removeClass("ssi-navFadeIn")})),V.push(U)}V.push(q),f.append(V)}function $i(H,V,U,G){var X=Math.min(U/H,G/V);return{width:H*X,height:V*X}}function xe(H,V){clearInterval(W);var U=H||(_?q[0].naturalWidth:q.width()),G=V||(_?q[0].naturalHeight:q.height()),X=i.setModalHeight(120,!0);if((G>j-X||U>B)&&i.options.fixedHeight===!0){var ae=$i(U,G,B-100,j-X);U=ae.width,G=ae.height,Z>2&&d.addClass("ssi-overHeight")}f.css("height",G),i.options.center&&f.parent().css({width:U,height:G}),d.css("width",U),de(),d.addClass("ssi-imgBorder")}function Be(){if(_){if(q[0].naturalWidth>0){xe();return}}else if(clearInterval(W),q.width()>50){xe();return}M=!0}}v.notify=function(i,n,d){var f={closeIcon:!1,overrideOther:!1,sizeClass:"dialog",onClickClose:!0,bodyScroll:!0,animation:!0,className:"",backdrop:!1,outSideClose:!1,position:"right top",topZIndex:!0,okBtn:{className:"",label:"Ok"},cancelBtn:{className:"",label:"Cancel"},stack:!0,closeAfter:{time:4,resetOnHover:!0}};(i==="confirm"||i==="dialog")&&(n.okBtn=e.extend({},f.okBtn,n.okBtn),n.cancelBtn=e.extend({},f.cancelBtn,n.cancelBtn));var b=function(j){return j===""?"":'<span class="ssi-icon '+j+'"></span>'},W="",M="";switch(i){case"success":f.className=" ssi-success";break;case"error":f.className=" ssi-error";break;case"info":f.className=" ssi-info";break;case"warning":f.className=" ssi-warning";break;case"confirm":f.closeAfter=!1,f.onClickClose=!1,f.outSideClose=!1,f.icon=!1,f.title=!1,f.buttons=[{className:n.okBtn.className,label:n.okBtn.label,closeAfter:!0,method:function(){typeof d=="function"&&d(!0)}},{className:n.cancelBtn.className,label:n.cancelBtn.label,closeAfter:!0,method:function(){typeof d=="function"&&d(!1)}}];break;case"dialog":f.onClickClose=!1,f.closeAfter=!1,f.outSideClose=!1,f.title=!1,f.icon=!1,f.buttons=[{className:n.okBtn.className,label:n.okBtn.label,closeAfter:!0,method:d}];break;default:f.className=i}if(n.className&&(n.className+=f.className||""),n=e.extend(!0,f,n),n.icon!=!1&&(W=n.icon||i||""),n.title!=!1&&(M=n.title||i),n.icon!=!1&&n.title!=!1&&W!=""&&(n.title=b(W)+" "+M),n.backdrop===!0&&(n.backdrop="byKndShared"),n.keepContent=!1,n.overrideOther){var _=n.position.split(" ");e("body").find("div."+_[0]+"."+_[1]).children().empty()}return v.createObject(n).setPluginName("notify").init().show()},e.fn.ssi_modal=function(){var i;if(typeof arguments[1]=="object"){var n=arguments[0];i=arguments[1]||{};var d=arguments[2]}else i=arguments[0]||{};return this.each(function(){var f=e(this),b;if(i.content)f.on("click",function(){switch(n){case"show":v.show(i,f);break;default:v[n](i,d)}});else{var W,M,_=f.attr("data-ssi_modal");_?f.on("click",function(){W=e(_),M={content:W},b=e.extend({},i,M),v.createObject(b).init().show()}):(M={content:f},b=e.extend({},i,M),v.createObject(b).init().show())}})};function D(){var i=!1,n="Webkit Moz O ms Khtml".split(" "),d=document.createElement("div");if(d.style.animationName!==void 0&&(i=!0),i===!1){for(var f=0;f<n.length;f++)if(d.style[n[f]+"AnimationName"]!==void 0){i=!0;break}}return i}e.fn.addAnimation=function(i,n){var d="mozAnimationEnd webkitAnimationEnd  MSAnimationEnd oanimationend animationend";return i.indexOf("ssi-fade")!==-1&&t===!1?e(this)[i.replace("anim ssi-","")](300,function(){typeof n=="function"&&n()}):(e(this).addClass(i).one(d,function(){e(this).removeClass(i),typeof n=="function"&&n()}),(i==="ssi-show"||i==="ssi-hidden"||i==="")&&e(this).trigger("animationend"),this.each(function(){e(this)}))};function N(i){return i instanceof Array||(i=[i]),i}return mw&&mw.hook&&mw.hook("ssi_modal").fire(),v})}function He(){mw.hook("InPageEdit").add(({_analytics:e,_msg:t,InPageEdit:r})=>{var c=mw.config.get();if($("#ipe-edit-toolbox").length>0){console.warn("[InPageEdit] Toolbox 已经加载过了");return}if(!c.wgIsArticle){console.warn("[InPageEdit] 不是文章页面"),$("<div>",{id:"ipe-edit-toolbox"}).append($("<div>",{id:"ipe-toolbox-placeholder",style:"width:0.75rem;height:0.75rem;border-radius:50%;background:#3f51b5;line-height:1;pointer-events:none;"}).append($("<i>",{class:"fa fa-check",style:"font-size:0.5em;color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)"}))).appendTo("body");return}var s=$("<div>",{id:"ipe-edit-toolbox"}).append($("<ul>",{class:"btn-group group1"}).append($("<li>",{class:"btn-tip-group"}).append($("<div>",{class:"btn-tip",text:t("quick-edit")}),$("<button>",{id:"edit-btn",class:"ipe-toolbox-btn",html:'<i class="fa fa-pencil fa-pencil-alt"></i>'}).click(function(){r.quickEdit({page:c.wgPageName,revision:c.wgRevisionId})})),$("<li>",{class:"btn-tip-group"}).append($("<div>",{class:"btn-tip",text:t("redirect-from")}),$("<button>",{id:"redirectfrom-btn",class:"ipe-toolbox-btn",html:'<i class="fa fa-sign-in fa-sign-in-alt"></i>'}).click(function(){r.quickRedirect("from")})),$("<li>",{class:"btn-tip-group"}).append($("<div>",{class:"btn-tip",text:t("redirect-to")}),$("<button>",{id:"redirectto-btn",class:"ipe-toolbox-btn",html:'<i class="fa fa-sign-out fa-sign-out-alt"></i>'}).click(function(){r.quickRedirect("to")}))),$("<ul>",{class:"btn-group group2"}).append($("<div>",{style:"display: flex;"}).append($("<li>",{class:"btn-tip-group"}).append($("<div>",{class:"btn-tip",text:t("quick-delete")}),$("<button>",{id:"deletepage-btn",class:"ipe-toolbox-btn",html:'<i class="fa fa-trash"></i>'}).click(function(){r.quickDelete()})),$("<li>",{class:"btn-tip-group"}).append($("<div>",{class:"btn-tip",text:t("quick-rename")}),$("<button>",{id:"renamepage-btn",class:"ipe-toolbox-btn",html:'<i class="fa fa-italic"></i>'}).click(function(){r.quickRename()})),$("<li>",{class:"btn-tip-group"}).append($("<div>",{class:"btn-tip",text:t("ipe-preference")}),$("<button>",{id:"preference-btn",class:"ipe-toolbox-btn",html:'<i class="fa fa-gear"></i>'}).click(function(){r.preference.modal()})))),$("<button>",{class:"ipe-toolbox-btn",id:"toolbox-toggle",html:'<i class="fa fa-plus"></i>'}));s.appendTo("body"),s.find(".btn-group button").click(function(){e("tool_box")});var a=s.find("#toolbox-toggle, .btn-group");s.find("#toolbox-toggle").click(function(){$(this).hasClass("opened")&&!$(this).hasClass("click")?(r.preference.set({lockToolBox:!0}),a.addClass("click")):$(this).hasClass("click")?(r.preference.set({lockToolBox:!1}),a.removeClass("click")):(r.preference.set({lockToolBox:!0}),a.addClass("click opened"))}),r.preference.get("lockToolBox")===!0&&a.addClass("click opened"),s.mouseover(function(){a.addClass("hover opened")}),s.mouseout(function(){a.removeClass("hover"),s.find("#toolbox-toggle").hasClass("click")||a.removeClass("opened")}),mw.hook("InPageEdit.toolbox").fire({$toolbox:s})}),(()=>{const e=new Date("2024-04-01T00:00:00+08:00").getTime(),t=new Date("2024-04-02T00:00:00+08:00").getTime(),r=Date.now();r>=e&&r<t&&mw.loader.load("https://plugins.ipe.wiki/plugins/april-fool-2024/style.css","text/css")})()}function Ue(){mw.hook("InPageEdit").add(({_msg:e})=>{const t=window.InPageEdit||{};t.i18n=t.i18n||{};const r={en:{anypage_btn:"Edit any page",anypage_title:"Quick edit any page",anypage_label:"Please enter the page name"},"zh-hans":{anypage_btn:"编辑任意页面",anypage_title:"快速编辑任意页面",anypage_label:"请指定页面名"}};$.each(r,(c,s)=>{t.i18n[c]=t.i18n[c]||{},t.i18n[c]={...t.i18n[c],...s}}),mw.hook("InPageEdit.toolbox").add(({$toolbox:c})=>{c.find(".btn-group.group1").append($("<li>",{class:"btn-tip-group"}).append($("<div>",{class:"btn-tip",text:e("anypage_btn")}),$("<button>",{class:"ipe-toolbox-btn fa fa-edit"}).click(function(){ssi_modal.show({className:"in-page-edit",sizeClass:"dialog",center:!0,outSideClose:!1,title:e("anypage_title"),content:$("<div>").append($("<label>").append($("<b>",{text:e("anypage_label")}),$("<br>"),$("<input>",{id:"which-page",style:"width: 96%",value:mw.config.get("wgPageName")}).click(function(){$(this).css("box-shadow","")}))),buttons:[{label:e("ok"),className:"btn btn-primary IPE-anypage-ok",keyPress:"Enter",keyPressBody:!0,method:function(s,a){var p=$("#which-page").val();if(p===""||p===void 0)return $("#which-page").css("box-shadow","0 0 4px red"),!1;a.close(),InPageEdit.quickEdit({page:p,reload:!1})}},{label:e("cancel"),className:"btn btn-secondary IPE-anypage-cancel",keyPressBody:!0,method:function(s,a){a.close()}}]})})))})})}function Oe(){mw.hook("InPageEdit.quickEdit").add(({$editArea:e,$editTools:t})=>(async()=>{(mw.loader.getState("ext.wikiEditor")!=="loaded"||!$.fn.wikiEditor)&&await mw.loader.using("ext.wikiEditor");const r=c=>c.replace(/([\\{}()|.?*+\-^$\[\]])/g,"\\$1");t?.hide(),e.wikiEditor("addModule",{toolbar:{main:{type:"toolbar",groups:{format:{tools:{bold:{labelMsg:"wikieditor-toolbar-tool-bold",type:"button",oouiIcon:"bold",action:{type:"encapsulate",options:{pre:"'''",periMsg:"wikieditor-toolbar-tool-bold-example",post:"'''"}}},italic:{section:"main",group:"format",id:"italic",labelMsg:"wikieditor-toolbar-tool-italic",type:"button",oouiIcon:"italic",action:{type:"encapsulate",options:{pre:"''",periMsg:"wikieditor-toolbar-tool-italic-example",post:"''"}}},link:{section:"main",group:"format",id:"link",labelMsg:"wikieditor-toolbar-tool-link",type:"button",oouiIcon:"link",action:{type:"encapsulate",options:{pre:"[[",periMsg:"wikieditor-toolbar-help-content-ilink-description",post:"]]"}}},file:{labelMsg:"wikieditor-toolbar-tool-file",type:"button",oouiIcon:"image",action:{type:"encapsulate",options:{pre:"[[File:",periMsg:"wikieditor-toolbar-tool-file-example",post:"|thumb]]"}}},reference:{labelMsg:"wikieditor-toolbar-tool-reference",filters:["body.ns-subject"],type:"button",oouiIcon:"book",action:{type:"encapsulate",options:{pre:"<ref>",periMsg:"wikieditor-toolbar-tool-reference-text",post:"</ref>"}}}}}}},advanced:{labelMsg:"wikieditor-toolbar-section-advanced",type:"toolbar",groups:{heading:{tools:{heading:{labelMsg:"wikieditor-toolbar-tool-heading",type:"select",list:{"heading-2":{labelMsg:"wikieditor-toolbar-tool-heading-2",action:{type:"encapsulate",options:{pre:"== ",periMsg:"wikieditor-toolbar-tool-heading-example",post:" ==",regex:/^(\s*)(={1,6})(.*?)\2(\s*)$/,regexReplace:"$1==$3==$4",ownline:!0}}},"heading-3":{labelMsg:"wikieditor-toolbar-tool-heading-3",action:{type:"encapsulate",options:{pre:"=== ",periMsg:"wikieditor-toolbar-tool-heading-example",post:" ===",regex:/^(\s*)(={1,6})(.*?)\2(\s*)$/,regexReplace:"$1===$3===$4",ownline:!0}}},"heading-4":{labelMsg:"wikieditor-toolbar-tool-heading-4",action:{type:"encapsulate",options:{pre:"==== ",periMsg:"wikieditor-toolbar-tool-heading-example",post:" ====",regex:/^(\s*)(={1,6})(.*?)\2(\s*)$/,regexReplace:"$1====$3====$4",ownline:!0}}},"heading-5":{labelMsg:"wikieditor-toolbar-tool-heading-5",action:{type:"encapsulate",options:{pre:"===== ",periMsg:"wikieditor-toolbar-tool-heading-example",post:" =====",regex:/^(\s*)(={1,6})(.*?)\2(\s*)$/,regexReplace:"$1=====$3=====$4",ownline:!0}}}}}}},format:{labelMsg:"wikieditor-toolbar-group-format",tools:{ulist:{labelMsg:"wikieditor-toolbar-tool-ulist",type:"button",oouiIcon:"listBullet",action:{type:"encapsulate",options:{pre:"* ",periMsg:"wikieditor-toolbar-tool-ulist-example",post:"",ownline:!0,splitlines:!0}}},olist:{labelMsg:"wikieditor-toolbar-tool-olist",type:"button",oouiIcon:"listNumbered",action:{type:"encapsulate",options:{pre:"# ",periMsg:"wikieditor-toolbar-tool-olist-example",post:"",ownline:!0,splitlines:!0}}},nowiki:{labelMsg:"wikieditor-toolbar-tool-nowiki",type:"button",oouiIcon:"noWikiText",action:{type:"encapsulate",options:{pre:"<nowiki>",periMsg:"wikieditor-toolbar-tool-nowiki-example",post:"</nowiki>"}}},newline:{labelMsg:"wikieditor-toolbar-tool-newline",type:"button",oouiIcon:"newline",action:{type:"encapsulate",options:{pre:`<br>
`}}}}},size:{tools:{superscript:{labelMsg:"wikieditor-toolbar-tool-superscript",type:"button",oouiIcon:"superscript",action:{type:"encapsulate",options:{pre:"<sup>",periMsg:"wikieditor-toolbar-tool-superscript-example",post:"</sup>"}}},subscript:{labelMsg:"wikieditor-toolbar-tool-subscript",type:"button",oouiIcon:"subscript",action:{type:"encapsulate",options:{pre:"<sub>",periMsg:"wikieditor-toolbar-tool-subscript-example",post:"</sub>"}}}}},insert:{labelMsg:"wikieditor-toolbar-group-insert",tools:{gallery:{labelMsg:"wikieditor-toolbar-tool-gallery",type:"button",oouiIcon:"imageGallery",action:{type:"encapsulate",options:{pre:`<gallery>
`,periMsg:["wikieditor-toolbar-tool-gallery-example","File:"],post:`
</gallery>`,ownline:!0}}},redirect:{labelMsg:"wikieditor-toolbar-tool-redirect",type:"button",oouiIcon:"articleRedirect",action:{type:"encapsulate",options:{pre:"#REDIRECT [[",periMsg:"wikieditor-toolbar-tool-redirect-example",post:"]]",ownline:!0}}}}}}},help:{labelMsg:"wikieditor-toolbar-section-help",type:"booklet",deferLoad:!0,pages:{format:{labelMsg:"wikieditor-toolbar-help-page-format",layout:"table",headings:[{textMsg:"wikieditor-toolbar-help-heading-description"},{textMsg:"wikieditor-toolbar-help-heading-syntax"},{textMsg:"wikieditor-toolbar-help-heading-result"}],rows:[{description:{htmlMsg:"wikieditor-toolbar-help-content-italic-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-italic-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-italic-result"}},{description:{htmlMsg:"wikieditor-toolbar-help-content-bold-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-bold-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-bold-result"}},{description:{htmlMsg:"wikieditor-toolbar-help-content-bolditalic-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-bolditalic-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-bolditalic-result"}}]},link:{labelMsg:"wikieditor-toolbar-help-page-link",layout:"table",headings:[{textMsg:"wikieditor-toolbar-help-heading-description"},{textMsg:"wikieditor-toolbar-help-heading-syntax"},{textMsg:"wikieditor-toolbar-help-heading-result"}],rows:[{description:{htmlMsg:"wikieditor-toolbar-help-content-ilink-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-ilink-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-ilink-result"}},{description:{htmlMsg:"wikieditor-toolbar-help-content-xlink-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-xlink-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-xlink-result"}}]},heading:{labelMsg:"wikieditor-toolbar-help-page-heading",layout:"table",headings:[{textMsg:"wikieditor-toolbar-help-heading-description"},{textMsg:"wikieditor-toolbar-help-heading-syntax"},{textMsg:"wikieditor-toolbar-help-heading-result"}],rows:[{description:{htmlMsg:"wikieditor-toolbar-help-content-heading2-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-heading2-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-heading2-result"}},{description:{htmlMsg:"wikieditor-toolbar-help-content-heading3-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-heading3-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-heading3-result"}},{description:{htmlMsg:"wikieditor-toolbar-help-content-heading4-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-heading4-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-heading4-result"}},{description:{htmlMsg:"wikieditor-toolbar-help-content-heading5-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-heading5-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-heading5-result"}}]},list:{labelMsg:"wikieditor-toolbar-help-page-list",layout:"table",headings:[{textMsg:"wikieditor-toolbar-help-heading-description"},{textMsg:"wikieditor-toolbar-help-heading-syntax"},{textMsg:"wikieditor-toolbar-help-heading-result"}],rows:[{description:{htmlMsg:"wikieditor-toolbar-help-content-ulist-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-ulist-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-ulist-result"}},{description:{htmlMsg:"wikieditor-toolbar-help-content-olist-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-olist-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-olist-result"}}]},file:{labelMsg:"wikieditor-toolbar-help-page-file",layout:"table",headings:[{textMsg:"wikieditor-toolbar-help-heading-description"},{textMsg:"wikieditor-toolbar-help-heading-syntax"},{textMsg:"wikieditor-toolbar-help-heading-result"}],rows:[{description:{htmlMsg:"wikieditor-toolbar-help-content-file-description"},syntax:{htmlMsg:["wikieditor-toolbar-help-content-file-syntax","File","thump",mw.message("wikieditor-toolbar-help-content-file-caption").text()]},result:{html:'<div class="thumbinner" style="width: 102px;"><a class="image"><img alt="" src="'+$.wikiEditor.imgPath+'toolbar/example-image.png" width="100" height="50" class="thumbimage"/></a><div class="thumbcaption"><div class="magnify"><a title="'+mw.message("thumbnail-more").escaped()+'" class="internal"></a></div>'+mw.message("wikieditor-toolbar-help-content-file-caption").escaped()+"</div></div>"}}]},reference:{labelMsg:"wikieditor-toolbar-help-page-reference",layout:"table",headings:[{textMsg:"wikieditor-toolbar-help-heading-description"},{textMsg:"wikieditor-toolbar-help-heading-syntax"},{textMsg:"wikieditor-toolbar-help-heading-result"}],rows:[{description:{htmlMsg:"wikieditor-toolbar-help-content-reference-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-reference-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-reference-result"}},{description:{htmlMsg:"wikieditor-toolbar-help-content-named-reference-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-named-reference-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-named-reference-result"}},{description:{htmlMsg:"wikieditor-toolbar-help-content-rereference-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-rereference-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-rereference-result"}},{description:{htmlMsg:"wikieditor-toolbar-help-content-showreferences-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-showreferences-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-showreferences-result"}}]},discussion:{labelMsg:"wikieditor-toolbar-help-page-discussion",layout:"table",headings:[{textMsg:"wikieditor-toolbar-help-heading-description"},{textMsg:"wikieditor-toolbar-help-heading-syntax"},{textMsg:"wikieditor-toolbar-help-heading-result"}],rows:[{description:{htmlMsg:"wikieditor-toolbar-help-content-signaturetimestamp-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-signaturetimestamp-syntax"},result:{htmlMsg:["wikieditor-toolbar-help-content-signaturetimestamp-result",mw.config.get("wgFormattedNamespaces")[2],mw.config.get("wgFormattedNamespaces")[3]]}},{description:{htmlMsg:"wikieditor-toolbar-help-content-signature-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-signature-syntax"},result:{htmlMsg:["wikieditor-toolbar-help-content-signature-result",mw.config.get("wgFormattedNamespaces")[2],mw.config.get("wgFormattedNamespaces")[3]]}},{description:{htmlMsg:"wikieditor-toolbar-help-content-indent-description"},syntax:{htmlMsg:"wikieditor-toolbar-help-content-indent-syntax"},result:{htmlMsg:"wikieditor-toolbar-help-content-indent-result"}}]}}}},dialogs:{titleMsg:"wikieditor-toolbar-tool-replace-title",id:"wikieditor-toolbar-replace-dialog",init:function(){$(this).html(`<div id="wikieditor-toolbar-replace-message">
            <div id="wikieditor-toolbar-replace-nomatch" rel="wikieditor-toolbar-tool-replace-nomatch"></div>
            <div id="wikieditor-toolbar-replace-success"></div>
            <div id="wikieditor-toolbar-replace-emptysearch" rel="wikieditor-toolbar-tool-replace-emptysearch"></div>
            <div id="wikieditor-toolbar-replace-invalidregex"></div>
          </div>
          <fieldset>
            <div class="wikieditor-toolbar-field-wrapper">
              <label for="wikieditor-toolbar-replace-search" rel="wikieditor-toolbar-tool-replace-search"></label>
              <input type="text" id="wikieditor-toolbar-replace-search"/>
            </div>
            <div class="wikieditor-toolbar-field-wrapper">
              <label for="wikieditor-toolbar-replace-replace" rel="wikieditor-toolbar-tool-replace-replace"></label>
              <input type="text" id="wikieditor-toolbar-replace-replace"/>
            </div>
            <div class="wikieditor-toolbar-field-wrapper">
              <input type="checkbox" id="wikieditor-toolbar-replace-case"/>
              <label for="wikieditor-toolbar-replace-case" rel="wikieditor-toolbar-tool-replace-case"></label>
            </div>
            <div class="wikieditor-toolbar-field-wrapper">
              <input type="checkbox" id="wikieditor-toolbar-replace-word"/>
              <label for="wikieditor-toolbar-replace-word" rel="wikieditor-toolbar-tool-replace-word"></label>
            </div>
            <div class="wikieditor-toolbar-field-wrapper">
              <input type="checkbox" id="wikieditor-toolbar-replace-regex"/>
              <label for="wikieditor-toolbar-replace-regex" rel="wikieditor-toolbar-tool-replace-regex"></label>
            </div>
          </fieldset>`),$(this).find("[rel]").each(function(){$(this).text(mw.msg($(this).attr("rel")))}),$(this).data("replaceCallback",function(c){var s,a,p,l,u,y,k,g,C,h,x,w,S,v,m;if($("#wikieditor-toolbar-replace-nomatch, #wikieditor-toolbar-replace-success, #wikieditor-toolbar-replace-emptysearch, #wikieditor-toolbar-replace-invalidregex").hide(),l=$("#wikieditor-toolbar-replace-search").val(),l===""){$("#wikieditor-toolbar-replace-emptysearch").show();return}u=$("#wikieditor-toolbar-replace-replace").val(),y="m",k=$("#wikieditor-toolbar-replace-case").is(":checked"),k||(y+="i"),C=$("#wikieditor-toolbar-replace-regex").is(":checked"),C||(l=r(l)),g=$("#wikieditor-toolbar-replace-word").is(":checked"),g&&(l="\\b(?:"+l+")\\b"),c==="replaceAll"&&(y+="g");try{p=new RegExp(l,y)}catch(P){$("#wikieditor-toolbar-replace-invalidregex").text(mw.msg("wikieditor-toolbar-tool-replace-invalidregex",P.message)).show();return}h=$(this).data("context").$textarea,x=h.textSelection("getContents"),w=!1,c!=="replaceAll"&&(c==="replace"?s=$(this).data("matchIndex"):s=$(this).data("offset"),a=x.substr(s),w=a.match(p)),w||(s=0,a=x,w=a.match(p)),w?c==="replaceAll"?(h.textSelection("setContents",x.replace(p,u)),$("#wikieditor-toolbar-replace-success").text(mw.msg("wikieditor-toolbar-tool-replace-success",mw.language.convertNumber(w.length))).show(),$(this).data("offset",0)):(c==="replace"?(C?S=w[0].replace(p,u):S=u,w&&(h.textSelection("encapsulateSelection",{peri:S,replace:!0,selectionStart:s+w.index,selectionEnd:s+w.index+w[0].length,selectPeri:!0}),x=h.textSelection("getContents")),s=s+w.index+S.length,a=x.substr(s),w=a.match(p),w?(v=s+w.index,m=v+w[0].length):(a=x,w=a.match(p),w?(v=w.index,m=v+w[0].length):(v=0,m=0))):(v=s+w.index,m=v+w[0].length),$(this).data("matchIndex",v),h.textSelection("setSelection",{start:v,end:m}),h.textSelection("scrollToCaretPosition"),$(this).data("offset",m),h[0].focus()):$("#wikieditor-toolbar-replace-nomatch").show()})}}}),e.wikiEditor("addToToolbar",{section:"advanced",groups:{search:{tools:{replace:{labelMsg:"wikieditor-toolbar-tool-replace",type:"button",oouiIcon:"articleSearch",action:{type:"dialog",module:"search-and-replace"}}}}}}),e.wikiEditor("addModule",{dialogs:{"search-and-replace":{titleMsg:"wikieditor-toolbar-tool-replace-title",id:"wikieditor-toolbar-replace-dialog",htmlTemplate:"dialogReplace.html",init:function(){$(this).find("[rel]").each(function(){$(this).text(mw.msg($(this).attr("rel")))}),$(this).data("replaceCallback",function(c){var s,a,p,l,u,y,k,g,C,h,x,w,S,v,m;if($("#wikieditor-toolbar-replace-nomatch, #wikieditor-toolbar-replace-success, #wikieditor-toolbar-replace-emptysearch, #wikieditor-toolbar-replace-invalidregex").hide(),l=$("#wikieditor-toolbar-replace-search").val(),l===""){$("#wikieditor-toolbar-replace-emptysearch").show();return}u=$("#wikieditor-toolbar-replace-replace").val(),y="m",k=$("#wikieditor-toolbar-replace-case").is(":checked"),k||(y+="i"),C=$("#wikieditor-toolbar-replace-regex").is(":checked"),C||(l=r(l)),g=$("#wikieditor-toolbar-replace-word").is(":checked"),g&&(l="\\b(?:"+l+")\\b"),c==="replaceAll"&&(y+="g");try{p=new RegExp(l,y)}catch(P){$("#wikieditor-toolbar-replace-invalidregex").text(mw.msg("wikieditor-toolbar-tool-replace-invalidregex",P.message)).show();return}h=$(this).data("context").$textarea,x=h.textSelection("getContents"),w=!1,c!=="replaceAll"&&(c==="replace"?s=$(this).data("matchIndex"):s=$(this).data("offset"),a=x.substr(s),w=a.match(p)),w||(s=0,a=x,w=a.match(p)),w?c==="replaceAll"?(h.textSelection("setContents",x.replace(p,u)),$("#wikieditor-toolbar-replace-success").text(mw.msg("wikieditor-toolbar-tool-replace-success",mw.language.convertNumber(w.length))).show(),$(this).data("offset",0)):(c==="replace"?(C?S=w[0].replace(p,u):S=u,w&&(h.textSelection("encapsulateSelection",{peri:S,replace:!0,selectionStart:s+w.index,selectionEnd:s+w.index+w[0].length,selectPeri:!0}),x=h.textSelection("getContents")),s=s+w.index+S.length,a=x.substr(s),w=a.match(p),w?(v=s+w.index,m=v+w[0].length):(a=x,w=a.match(p),w?(v=w.index,m=v+w[0].length):(v=0,m=0))):(v=s+w.index,m=v+w[0].length),$(this).data("matchIndex",v),h.textSelection("setSelection",{start:v,end:m}),h.textSelection("scrollToCaretPosition"),$(this).data("offset",m),h[0].focus()):$("#wikieditor-toolbar-replace-nomatch").show()})},dialog:{width:500,dialogClass:"wikiEditor-toolbar-dialog",modal:!1,buttons:{"wikieditor-toolbar-tool-replace-button-findnext":function(c){$(this).closest(".ui-dialog").data("dialogaction",c.target),$(this).data("replaceCallback").call(this,"find")},"wikieditor-toolbar-tool-replace-button-replace":function(c){$(this).closest(".ui-dialog").data("dialogaction",c.target),$(this).data("replaceCallback").call(this,"replace")},"wikieditor-toolbar-tool-replace-button-replaceall":function(c){$(this).closest(".ui-dialog").data("dialogaction",c.target),$(this).data("replaceCallback").call(this,"replaceAll")},"wikieditor-toolbar-tool-replace-close":function(){$(this).dialog("close")}},open:function(){var c,s,a,p=this;$(this).data("offset",0),$(this).data("matchIndex",0),$("#wikieditor-toolbar-replace-search").trigger("focus"),$("#wikieditor-toolbar-replace-nomatch, #wikieditor-toolbar-replace-success, #wikieditor-toolbar-replace-emptysearch, #wikieditor-toolbar-replace-invalidregex").hide(),$(this).data("onetimeonlystuff")||($(this).data("onetimeonlystuff",!0),$(this).closest(".ui-dialog").on("keypress",function(l){var u;(l.keyCode||l.which)===13&&(u=$(this).data("dialogaction")||$(this).find("button").first(),u.trigger("click"),l.preventDefault())}),$(this).closest(".ui-dialog").find("button").on("focus",function(){$(this).closest(".ui-dialog").data("dialogaction",this)})),c=$(this).closest(".ui-dialog"),p=this,s=$(this).data("context"),a=s.$textarea,a.on("keypress.srdialog",function(l){var u;l.which===13?(u=c.data("dialogaction")||c.find("button").first(),u.trigger("click"),l.preventDefault()):l.which===27&&$(p).dialog("close")})},close:function(){var c=$(this).data("context"),s=c.$textarea;s.off("keypress.srdialog"),$(this).closest(".ui-dialog").data("dialogaction",!1)}}}}})})()),mw.hook("InPageEdit").add(({InPageEdit:e})=>{e.preference.get("plugins").some(t=>/code-mirror/i.test(t))&&mw.loader.using("ext.wikiEditor")})}function Ve(){mw.hook("InPageEdit").add(({InPageEdit:e})=>(async()=>{const t="https://fastly.jsdelivr.net/npm/codemirror@5.65.1",r="https://fastly.jsdelivr.net/gh/wikimedia/mediawiki-extensions-CodeMirror@REL1_37",c=(e.endpoints||e.api).pluginCDN,s=mw.loader.getState("ext.CodeMirror")!==null,a=e.preference.get("codeMirrorTheme")||"solarized light",p=mw.config.get(),l=JSON.parse(localStorage.getItem("InPageEditMwConfig")||"{}"),u=`${p.wgServerName}${p.wgScriptPath}`,y=l[u],k=s?{css:["ext.CodeMirror.lib.mode.css"],javascript:["ext.CodeMirror.lib.mode.javascript"],lua:`${t}/mode/lua/lua.min.js`,mediawiki:["ext.CodeMirror.mode.mediawiki","ext.CodeMirror.data"],widget:["ext.CodeMirror.lib.mode.htmlmixed","ext.CodeMirror.mode.mediawiki","ext.CodeMirror.data"]}:{css:`${t}/mode/css/css.min.js`,javascript:`${t}/mode/javascript/javascript.min.js`,lua:`${t}/mode/lua/lua.min.js`,mediawiki:`${r}/resources/mode/mediawiki/mediawiki.min.js`,htmlmixed:`${t}/mode/htmlmixed/htmlmixed.min.js`,xml:`${t}/mode/xml/xml.min.js`,widget:[]};s||mw.loader.load(`${t}/lib/codemirror.min.css`,"text/css"),mw.loader.load(`${c}/plugins/code-mirror/style.css`,"text/css"),e.preference.get("codeMirrorThemeNoCSS")||mw.loader.load(`${t}/theme/${a.split(" ")[0]}.min.css`,"text/css");function g(m){return typeof m=="string"?$.ajax({url:m,dataType:"script",crossDomain:!0,cache:!0}):mw.loader.using(m.flat())}s?await mw.loader.using("ext.CodeMirror.lib"):await g(`${t}/lib/codemirror.min.js`);const C=["selection/active-line.min.js","dialog/dialog.js","search/searchcursor.js","search/search.js"];await Promise.all(C.map(m=>g(`${t}/addon/${m}`)));const h={};async function x(m){return h[m]===!0?!0:k[m]===void 0?!1:(m==="widget"?(s?(await g(k[m]),h.css=!0,h.javascript=!0,h.mediawiki=!0):await Promise.all(["css","javascript","mediawiki","htmlmixed","xml"].map(x)),CodeMirror.defineMIME("widget",{name:"htmlmixed",tags:{noinclude:[[null,null,"mediawiki"]]}})):(m==="mediawiki"&&!s&&mw.loader.load(`${r}/resources/mode/mediawiki/mediawiki.min.css`,"text/css"),await g(k[m])),h[m]=!0,!0)}const w=async m=>{if(!["mediawiki","widget"].includes(m))return;let P=mw.config.get("extCodeMirrorConfig");if(P)return P;if(y?.time>Date.now()-86400*1e3*3)return P=y.config,mw.config.set("extCodeMirrorConfig",P),P;P={};const{query:{magicwords:z,extensiontags:T,functionhooks:I,variables:E}}=await new mw.Api().get({action:"query",meta:"siteinfo",siprop:"magicwords|extensiontags|functionhooks|variables",format:"json",formatversion:2}),D=b=>b.flatMap(({aliases:W})=>W),N=b=>Object.fromEntries(b.map(W=>[W.replace(/:$/,""),!0]));P.tagModes={pre:"mw-tag-pre",nowiki:"mw-tag-nowiki"},P.tags=Object.fromEntries(T.map(b=>[b.slice(1,-1),!0]));const i=new Set([...I,...E]),n=z.filter(({name:b,aliases:W})=>W.some(M=>/^__.+__$/.test(M))||i.has(b)),d=D(n.filter(b=>b["case-sensitive"])),f=[...D(n.filter(b=>!b["case-sensitive"])).map(b=>b.toLowerCase()),"msg","raw","msgnw","subst","safesubst"];return P.doubleUnderscore=[N(f.filter(b=>/^__.+__$/.test(b))),N(d.filter(b=>/^__.+__$/.test(b)))],P.functionSynonyms=[N(f.filter(b=>!/^__.+__|^#$/.test(b))),N(d.filter(b=>!/^__.+__|^#$/.test(b)))],P.urlProtocols=p.wgUrlProtocols,mw.config.set("extCodeMirrorConfig",P),l[u]={config:P,time:Date.now()},localStorage.setItem("InPageEditMwConfig",JSON.stringify(l)),P};function S(m){const P=mw.util.escapeRegExp||mw.RegExp.escape,z=p.wgFormattedNamespaces[828]||"Module",T=p.wgFormattedNamespaces[214]||"Widget",I=new RegExp(`^(?:${Object.entries(p.wgFormattedNamespaces).filter(([E])=>E%2===0).map(([,E])=>P(E)).join("|")}):`);return m.endsWith(".css")&&I.test(m)?"css":(m.endsWith(".js")||m.endsWith(".json"))&&I.test(m)?"javascript":m.startsWith(`${z}:`)&&!m.endsWith("/doc")?"lua":m.startsWith(`${T}:`)&&!m.endsWith("/doc")?"widget":"mediawiki"}async function v(m,P){const z='<div style="clear: both"></div>';m.before(z),m.after(z);let T=S(P);const[I]=await Promise.all([w(T),x(T)]);if(m.length){const E=CodeMirror.fromTextArea(m[0],{lineNumbers:!0,lineWrapping:!0,styleActiveLine:!0,extraKeys:{"Alt-F":"findPersistent"},theme:a,mode:T,mwConfig:I});if(E.refresh(),E.on("change",function(N,{origin:i}){i!="setValue"&&(m.trigger("input"),m.trigger("change"))}),$.valHooks.textarea={get:function(N){return N===m[0]?E.getValue():N.value},set:function(N,i){N===m[0]?E.setValue(i):N.value=i}},mw.loader.getState("jquery.textSelection")!=="ready")return E;const D={getContents(){return E.getValue()},setContents(N){return E.setValue(N),this},getSelection(){return E.getSelection()},setSelection(N){return E.setSelection(E.posFromIndex(N.start),E.posFromIndex(N.end)),E.focus(),this},replaceSelection(N){return E.replaceSelection(N),this},getCaretPosition(N){const i=E.indexFromPos(E.getCursor(!0)),n=E.indexFromPos(E.getCursor(!1));return N.startAndEnd?[i,n]:i},scrollToCaretPosition(){return E.scrollIntoView(null),this}};return m.textSelection("register",D),E}}mw.hook("InPageEdit.quickEdit").add(({$editArea:m,$modalTitle:P})=>(async()=>{const z=P.find(".editPage").text(),T=await v(m,z);mw.hook("InPageEdit.quickEdit.codemirror").fire({$editArea:m,cm:T})})())})())}function Fe(){/**
* MediaWiki Gadget MonacoEditor
* @author Dragon-Fish <dragon-fish@qq.com>
* @author Bhsd <https://github.com/bhsd-harry>
* @license MIT
*/mw.hook("InPageEdit.quickEdit").add(({$editArea:e,$modalContent:t,$modalTitle:r})=>{(async()=>{await mw.loader.using(["mediawiki.Title","mediawiki.util"]);const c=e.get(0),s=w(r.find(".editPage").text());if(!c)return console.warn("Missing textarea.",c,s);const a=c.value,p=[window.MONACO_EXTRA_LIBS||[],["https://cdn.jsdelivr.net/npm/@wikimedia/types-wikimedia@0.4.2/MediaWiki.d.ts","MediaWiki.d.ts"],["https://cdn.jsdelivr.net/npm/@types/jquery@3.5.29/JQuery.d.ts","jquery/JQuery.d.ts"],["https://cdn.jsdelivr.net/npm/@types/jquery@3.5.29/JQueryStatic.d.ts","jquery/JQueryStatic.d.ts"],["declare const $: JQueryStatic","jquery/JQueryGlobal.d.ts"]];await x("https://cdn.jsdelivr.net/npm/monaco-wiki/dist/all.min.js");const l=await window.monaco;mw.hook("InPageEdit.monaco").fire(l);const u=document.createElement("div");u.classList.add("inpageedit-monaco"),u.style.width="100%",u.style.height="70vh",t.after(u),t.hide();const y=l.editor.createModel(a,s),k={model:y,automaticLayout:!0,theme:"vs-dark",tabSize:2,glyphMargin:!0};s==="wikitext"&&(k.wordWrap="on",k.wordBreak="keepAll",k.unicodeHighlight={ambiguousCharacters:!1});const g=l.editor.create(u,k);let C=!!a;const h=()=>{y.onDidChangeContent(()=>{c.value=y.getValue(),c.dispatchEvent(new Event("input")),c.dispatchEvent(new Event("change"))})};if(C)h();else{g.updateOptions({readOnly:!0});const P=Date.now()+10*1e3,z=setInterval(()=>{(Date.now()>P||c.value.trim())&&(clearInterval(z),g.updateOptions({readOnly:!1}),y.setValue(c.value),h(),C=!0)},50)}mw.hook("InPageEdit.monaco.editor").fire({container:u,editor:g,model:y,addExtraLib:S,addExternalExtraLib:v}),s==="javascript"&&m(l,y,p);async function x(P){return"monaco"in window||$.ajax(P,{dataType:"script",cache:!0})}function w(P=""){const z=new mw.Title(P),T=z.getNamespaceId(),I=z.getMainText(),E=z.getExtension();return E==="js"?"javascript":E==="css"?"css":T===828&&!I.endsWith("/doc")?"lua":T===274?"html":E==="json"?"json":"wikitext"}function S(P,z,T,I=""){const E="ts:mw";I=I||`${crypto.randomUUID()}.d.ts`,P.languages.typescript.javascriptDefaults.addExtraLib(T,`${E}/${I}`),z.updateOptions({uri:P.Uri.parse(`${E}/main.js`)})}async function v(P,z,T,I){const E=await fetch(T).then(D=>D.text());return I=I||E.split("/").pop()?.split("?")[0],S(P,z,E,I)}async function m(P,z,T=[]){return Promise.all(T.map(I=>(typeof I=="string"&&(I=[I]),!Array.isArray(I)||typeof I?.[0]!="string"?Promise.resolve(null):(I[0]?.startsWith("http")?v:S)(P,z,I[0],I[1]))))}})()})}function Ge(){(function(){function e(a){var r=$("<p>",{id:"preview-color-sample"}),c=$("<input>",{type:"color",id:"color-input"}),s=$("<input>",{type:"text",id:"color-text-input",maxlength:"6"}),a=$(a)||$("#editform");a.prepend($("<div>",{id:"preview-color"}).append($("<strong>",{text:"预览颜色"}),$("<div>",{id:"color-area"}).append($("<div>",{id:"hex-input"}).append($("<span>",{text:"#"}),s.keyup(function(){p("#"+$(this).val())}).val("ffffff"),$("<div>",{id:"bottom-line"}),$("<div>",{id:"color-input-container"}).append(c.change(function(){p($(this).val())}).val("#ffffff")))),r));function p(l){s.val(function(){return s.val().replace("#","")}),r.html(function(){return $("<div>",{style:"display: flex; text-align: center"}).append($("<div>",{style:"width: 25%; background-color: transparent"}).append($("<span>",{text:l}).css("color",l)),$("<div>",{style:"width: 25%; background-color: #fff"}).append($("<span>",{text:l}).css("color",l)),$("<div>",{style:"width: 25%; background-color: #000"}).append($("<span>",{text:l}).css("color",l)),$("<div>",{style:"width: 25%; background-color: "+l}).append($("<span>",{text:"#ffffff"}).css("color","#ffffff"),"&emsp;",$("<span>",{text:"#000000"}).css("color","#000000")))}),c.val(l),s.val(l.replace(/#/g,""))}}typeof mw<"u"?(mw.config.get("wgAction")==="edit"&&e("#editform"),mw.hook("InPageEdit.quickEdit").add(({$modalContent:t})=>{e(t)})):e($("#app")),$("head").append($("<style>",{"data-ipe":"style","data-plugin":"color-preview.js"}).text('#preview-color{font-size:18px;line-height:1.4;}#preview-color #color-area #hex-input{display:inline-block;position:relative}#preview-color #color-area #hex-input span{font-weight:bold;color:#bbbbbb;user-select:none}#preview-color #color-area #hex-input #bottom-line{background-color:#bbbbbb;position:absolute;height:2px;width:100%;bottom:0;left:0}#preview-color #color-area #hex-input #bottom-line::before{content:"";position:absolute;height:2px;width:100%;transform:scaleX(0);background-color:#008a00;transition:all ease .6s}#preview-color #color-area #hex-input #color-text-input{border:0 !important;background-color:transparent;box-shadow:none;padding:2px;width:120px}#preview-color #color-area #hex-input #color-text-input:focus+#bottom-line::before{transform:scaleX(1)}#preview-color #color-input-container{position:relative;display:inline-block;cursor:pointer;border:0;border-radius:50%;overflow:hidden;height:1rem;width:1rem;box-shadow:0 0 4px gray;}#preview-color #color-area #hex-input #color-input{padding:0;margin:0;width:1rem;height:1rem;border:0;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(5);}#preview-color #preview-color-sample{width:100%}'))})()}function Je(){mw.hook("InPageEdit").add(({_msg:e})=>{const t=mw.config.get(),r=window.InPageEdit||{};r.i18n=r.i18n||{};const c={en:{thank_btn:"Quick Thank",thank_title:"Quick thank",thank_label:"Please enter a revision ID",thank_success:"Thanked",thank_error:"Error while thanking: $1",thank_query_btn:"Query",thank_progress:"Requesting...",thank_all:"Thank all!"},"zh-hans":{thank_btn:"快速感谢",thank_title:"快速感谢",thank_label:"请指定修订版本ID",thank_success:"已感谢",thank_error:"无法感谢：$1",thank_query_btn:"查询",thank_progress:"处理中...",thank_all:"我特么谢谢宁！"}};$.each(c,(k,g)=>{r.i18n[k]=r.i18n[k]||{},r.i18n[k]={...r.i18n[k],...g}});function s(){let k=localStorage.getItem("InPageEditThank")||"";return k=k.split("|"),k}function a(k){k=String(k);let g=s();g.includes(k)||g.push(k),localStorage.setItem("InPageEditThank",g.join("|"))}function p({revid:k,user:g}){return k=String(k),!(s().includes(k)||g===t.wgUserName)}async function l(k){return await new mw.Api().postWithToken("csrf",{action:"thank",format:"json",rev:k,source:"diff"})}async function u(k){const{query:g}=await new mw.Api().get({action:"query",format:"json",prop:"revisions",titles:k,rvprop:"user|comment|timestamp|ids",rvlimit:"10"}),C=Object.keys(g.pages);return g?.pages?.[C]?.revisions||[]}function y(){const k=$("<div>"),g=$("<div>",{class:"rev-list"}),C=()=>$('<div class="ipe-progress" style="width: 100%"><div class="ipe-progress-bar"></div></div>'),h=$("<input>").css({flex:1}),x=$("<button>",{class:"btn btn-primary",text:e("thank_query_btn")}).click(function(){const m=h.val();m&&S(m)}),w=$("<label>").append(h,x).css({display:"flex"});k.append(w,g);async function S(m){g.html("").append(C);const P=await u(m),z=$("<ul>");$.each(P,(T,{revid:I,parentid:E,timestamp:D,user:N,comment:i})=>{const n=$("<a>",{href:"javascript:;",text:p({revid:I,user:N})?e("thank_btn"):e("thank_success"),class:"thank-btn"}).on("click",async function(){const f=$(this);if(!f.attr("disabled")){f.attr("disabled","");try{const{result:b}=await l(I);if(console.log(b),b?.success===1){f.text(e("thank_success")),a(I);return}throw"unknown error"}catch(b){f.removeAttr("disabled",""),ssi_modal.notify("error",{className:"in-page-edit",title:e("error"),content:e("thank_error",b)})}}});p({revid:I,user:N})||n.attr("disabled","");const d=$("<a>",{href:"javascript:;",text:e("quick-diff")}).on("click",async function(){InPageEdit.quickDiff({fromrev:E,torev:I})});z.append($("<li>").append($("<strong>",{text:I,title:D})," ",$("<a>",{text:N,class:"mw-user",href:mw.util.getUrl(`User:${N}`)})," ",$("<span>",{text:i?`(${i})`:""})," [",d," | ",n,"]"))}),$thankAll=$("<div>",{class:"thank-all"}).css({"text-align":"center"}).append($("<button>",{class:"btn btn-danger thank-all-btn",text:e("thank_all")}).click(function(){$(this).attr("disabled",""),z.find(".thank-btn").each((T,I)=>{$(I).click()})})),g.html("").append(z,$thankAll)}const v=ssi_modal.show({className:"in-page-edit ipe-thank",sizeClass:"small",center:!0,outSideClose:!1,title:e("thank_title"),content:k});return h.val(t.wgPageName),x.click(),v}mw.hook("InPageEdit.toolbox").add(({$toolbox:k})=>{k.find(".btn-group.group1").append($("<li>",{class:"btn-tip-group"}).append($("<div>",{class:"btn-tip",text:e("thank_btn")}),$("<button>",{class:"ipe-toolbox-btn fa fa-smile-o"}).click(y)))}),mw.util.addCSS(`
    .ipe-thank .thank-btn[disabled] {
      color: gray;
      text-decoration: line-through;
      cursor: not-allowed;
    }
    `),r.quickThank=y})}function Qe(){mw.hook("InPageEdit").add(()=>{$(".mw-editsection").each((e,t)=>{$(t).find(".in-page-edit-article-link-group").each((r,c)=>{r>0&&$(c).hide()})})})}function Ke(){const e=`/* Disable editTools */
.in-page-edit.ipe-editor .editTools {
  display: none;
}

/* Minor fix */
.in-page-edit .CodeMirror,
.in-page-edit .cm-editor {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro',
    monospace;
  min-height: 400px;
  font-size: 14px;
  border: 1px solid #c8ccd1;
}

/* Dialog */
.in-page-edit .CodeMirror-dialog {
  position: absolute;
  left: 0;
  right: 0;
  background: inherit;
  z-index: 15;
  padding: 0.1em 0.8em;
  overflow: hidden;
  color: inherit;
}
.in-page-edit .CodeMirror-dialog-top {
  border-bottom: 1px solid #eee;
  top: 0;
}
.in-page-edit .CodeMirror-dialog-bottom {
  border-top: 1px solid #eee;
  bottom: 0;
}
.in-page-edit .CodeMirror-dialog input {
  border: none;
  outline: none;
  background: transparent;
  width: 20em;
  color: inherit;
  font-family: monospace;
}
.in-page-edit .CodeMirror-dialog button {
  font-size: 70%;
}

/* Fix WikiEditor popup */
.wikiEditor-ui-toolbar {
  z-index: 10;
}`;mw.hook("InPageEdit").add(()=>(async()=>{const t="https://cdn.jsdelivr.net/npm/@bhsd/codemirror-mediawiki",r=document.createElement("style");r.innerHTML=e,document.head.appendChild(r),await Promise.all([mw.loader.using("mediawiki.Title"),window.CodeMirror6||import(`${t}/dist/mw.min.js`)]);function c(a){const{namespace:p,title:l}=a,u=a.getExtension()?.toLowerCase(),y=p%2===0;return u==="css"&&y?"css":u==="js"&&y?"javascript":u==="json"&&y?"json":p===828&&!l.endsWith("/doc")?"lua":p===274&&!l.endsWith("/doc")?"html":"mediawiki"}async function s(a,p){if(a.length){const l='<div style="clear: both"></div>';a.before(l),a.after(l);const u=c(p);InPageEdit.preference.get("plugins").some(g=>/wiki-editor/.test(g))&&await new Promise(g=>{a.on("wikiEditor-toolbar-doneInitialSections",g)});const k=await CodeMirror6.fromTextArea(a[0],u,p.namespace);if(u==="mediawiki"){const g=mw.config.get("extCodeMirrorConfig");g?.urlProtocols.includes("\\:")&&(g.urlProtocols=g.urlProtocols.replace(/\\:/g,":"),k.setLanguage("mediawiki",g))}}}mw.hook("InPageEdit.quickEdit").add(({$editArea:a,$modalTitle:p})=>(async()=>{const l=new mw.Title(p.find(".editPage").text()),u=await s(a,l);mw.hook("InPageEdit.quickEdit.codemirror6").fire({$editArea:a,cm:u})})())})())}const Se={"ssi-modal":Re,"toolbox.js":He,"edit-any-page.js":Ue,"wiki-editor.js":Oe,"code-mirror/script.js":Ve,"code-mirror/cm6.js":Ke,"monaco/script.js":Fe,"color-preview.js":Ge,"quick-thank.js":Je,"fix-double-entrance.js":Qe};function Ie(e,t){return Se[e]?new Promise(r=>{setTimeout(()=>{r(Se[e]())},10)}):Promise.reject(new Error("Cannot load script "+e))}const F="14.5.2",A=mw.config.get(),Q=()=>new mw.Api({parameters:{formatversion:2,format:"json"},ajax:{headers:{"Api-User-Agent":`InPageEdit-v2/${F}`}}});async function Ye(){mw.config.set("wgUserRights",[]),mw.config.set("wgUserIsBlocked",!1),mw.config.set("wgSpecialPageAliases",[]);const{query:{users:e,userinfo:t,specialpagealiases:r}}=await Q().get({action:"query",ususers:A.wgUserName,meta:["userinfo","siteinfo"],list:["users"],uiprop:["rights"],siprop:["specialpagealiases"],usprop:["blockinfo"]});return e?.[0].blockid&&mw.config.set("wgUserIsBlocked",!0),mw.config.set("wgUserRights",t?.rights||[]),mw.config.set("wgSpecialPageAliases",r),{users:e,userinfo:t,specialpagealiases:r}}const Ze=[`
/**
 * GNU Public License
 *
 * InPageEdit default skin
 * @author 机智的小鱼君
 */
/* 编辑器 */
.in-page-edit .mw-editsection,
.in-page-edit .hide-for-ipe {
  display: none;
}

.in-page-edit {
  color: #252525;
  font-size: 16px;
}

/* @FIX For WikiEditor dialogs */
.ssi-backdrop,
.ssi-modalOuter.in-page-edit {
  z-index: 800;
}

.in-page-edit .ssi-modalWindow {
  padding: 0;
  border-radius: 0;
  line-height: normal;
}

.in-page-edit .ssi-overflow {
  background-image: radial-gradient(
      farthest-side at 50% 0,
      rgba(26, 26, 26, 0.12),
      transparent
    ),
    radial-gradient(
      farthest-side at 50% 100%,
      rgba(26, 26, 26, 0.12),
      transparent
    );
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 9px;
  position: relative;
  z-index: 1;
  padding-top: 0;
  padding-bottom: 0;
}

.in-page-edit .ssi-overflow:before,
.in-page-edit .ssi-overflow:after {
  content: '';
  display: block;
  background-color: #fff;
  height: 30px;
  position: relative;
  z-index: -1;
  margin: 0 0 -30px;
}

.in-page-edit .ssi-overflow:after {
  margin: 0 0 -29px;
}

.ssi-center .ssi-modalContent {
  max-height: 70vh;
  overflow-y: auto;
}

.in-page-edit .ssi-topIcons {
  text-align: center;
  box-sizing: content-box;
}

.in-page-edit .ssi-topIcons .ssi-closeIcon {
  background: 0 0;
  color: #d33;
  font-size: 20px;
  margin: 0;
  padding: 8px 12px;
}

.in-page-edit .ssi-topIcons .ssi-closeIcon:hover {
  color: #f22;
}

.in-page-edit .ssi-closeIcon:before {
  content: '✕';
  display: unset !important;
}

.in-page-edit:not(.notify) .ssi-modalTitle {
  font-style: normal;
  font-family: sans-serif;
  font-weight: bold;
  background: #ffffff;
  color: #252525;
  font-size: 1.1em;
  line-height: 1.8em;
  text-align: center;
}

.ipe-editor .editTools {
  background: #eaf3ff;
  border: 1px solid #c8ccd1;
  border-bottom: none;
  float: left;
  width: calc(100% - 1px);
}

.ipe-editor .editTools .btnGroup {
  float: left;
  padding-right: 6px;
  border-right: 1px solid #c8ccd1;
  margin: 3px;
}

.ipe-editor .editTools .btnGroup .fa-stack {
  width: 1em;
  height: 1em;
  line-height: 1;
}

.ipe-editor .editTools .btnGroup.special-tools {
  border-right: none;
  border-left: 1px solid #c8ccd1;
  padding-right: 3px;
  padding-left: 6px;
}

.ipe-editor .editTools .label {
  color: #888;
  padding-right: 6px;
  cursor: default;
}

.ipe-editor .editTools .btn {
  color: #47494d;
  font-size: 14px;
  background: none;
  box-shadow: none;
  margin: 0 2px;
  padding: 2px 6px;
}

.in-page-edit.ipe-editor .toolSelect {
  display: block;
  position: relative;
  margin: 0;
}

.in-page-edit.ipe-editor .toolSelect .label {
  color: #222222;
  background-color: #ffffff;
  background-image: linear-gradient(transparent, transparent),
    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEzLjAwMiA2LjAwMWwtNSA1LjAwMS01LTUuMDAxeiIgZmlsbD0iIzc5Nzk3OSIvPjwvc3ZnPg==');
  background-repeat: no-repeat;
  background-position: calc(100% - 2px);
  padding: 2px 20px 2px 4px;
  border: 1px solid #c8ccd1;
  cursor: default;
}

.in-page-edit.ipe-editor .toolSelect .ul-list {
  list-style: none;
  margin: 0;
  padding: 0;
  background: #ffffff;
  border: 1px solid #c8ccd1;
  position: absolute;
  z-index: 50;
  width: 100%;
  display: none;
}

.in-page-edit.ipe-editor .toolSelect .ul-list .editToolBtn {
  padding: 4px;
  cursor: pointer;
}

.in-page-edit.ipe-editor .toolSelect .ul-list .editToolBtn:hover {
  background-color: #eaf3ff;
}

.in-page-edit.ipe-editor .toolSelect:hover .ul-list {
  display: unset;
}

.ipe-editor .editArea {
  border: 1px solid #c8ccd1;
  border-top: none;
  border-radius: 0;
  max-width: 100%;
  min-width: 100%;
  min-height: 350px;
  margin: 0;
}

.notify .ssi-modalTitle {
  font-style: normal;
  font-family: inherit;
}

.in-page-edit .ssi-modalTitle .showEditNotice {
  font-size: small;
  display: block;
  line-height: 0;
}

.in-page-edit.ipe-editor .ssi-buttons {
  background-color: #eaecf0;
  color: #222;
  /* border: 1px solid #c8ccd1; */
  border-top: 0;
  padding: 1em 1em 0.5em 1em;
  margin-bottom: 0;
}

.in-page-edit .editSummary,
.in-page-edit .newSectionTitleInput {
  width: 98%;
  margin: 4px auto 8px 0.5em;
}

.in-page-edit .editOptionsLabel {
  margin: 0 auto 16px auto;
}

.in-page-edit h4 {
  margin: 2px 0 0 0;
}

.in-page-edit .btn {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #222;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 0.25em 0.8em;
  transition: all 0.1s;
}

.in-page-edit .btn:focus {
  box-shadow: inset 0 0 0 1px #36c;
}

.in-page-edit .btn.btn-primary {
  color: #fff;
  background-color: #36c;
  border-color: #36c;
}

.in-page-edit .btn.btn-primary:hover {
  background-color: #447ff5;
  border-color: #447ff5;
}

.in-page-edit .btn.btn-primary:active {
  background-color: #2a4b8d;
}

.in-page-edit .btn.btn-secondary {
  color: #252525;
  border-color: #c8ccd1;
  background-color: #f8f9fa;
}

.in-page-edit .btn.btn-secondary:hover {
  background-color: #ffffff;
  color: #454545;
}

.in-page-edit .btn.btn-secondary:active {
  border: 1px solid #36c;
}

.in-page-edit .btn.btn-danger {
  background: transparent;
  color: #d33;
  background-color: #f4f4f4;
}

.in-page-edit .btn.btn-danger:hover {
  color: #ff4242;
  background-color: #fafafa;
}

.in-page-edit .btn.btn-danger:active {
  color: #d00;
  border: 1px solid #36c;
}

.in-page-edit .btn:disabled {
  background-color: #c8ccd1 !important;
  color: #ffffff !important;
  cursor: not-allowed;
}

.in-page-edit .btn:disabled:hover {
  background-color: #c8ccd1 !important;
  color: #ffffff !important;
}

.in-page-edit .btn:disabled .ssi-countDown {
  color: #fff;
}

.in-page-edit input {
  padding: 0.25em 0.35em;
  border: 1px solid #ccc;
  border-radius: 2px;
  transition: all 0.2s;
  line-height: 1.5em;
}

.in-page-edit input:focus {
  border-color: #36c;
  box-shadow: inset 0 0 0 1px #36c;
}

.in-page-edit .dialog .ssi-modalContent {
  padding-top: 18px;
  font-size: large;
}

.in-page-edit .dialog .ssi-buttons .btn {
  margin: 0;
  padding: 0.5em;
  background: transparent;
  color: #252525;
  border: 1px solid #efefef;
  border-radius: 0;
  width: 50%;
}

.in-page-edit .dialog .ssi-buttons .btn:hover {
  background: #f8f8f8 !important;
}

.in-page-edit .btn.btn-single {
  width: 100% !important;
}

.in-page-edit .dialog .ssi-buttons .btn.btn-danger {
  color: #c33;
}

.in-page-edit .btn.btn-primary.btn-danger {
  background: #d33;
  border-color: #d33;
  color: #ffffff;
}

.in-page-edit .btn.btn-primary.btn-danger:hover {
  background: #f33;
}

.in-page-edit .btn.btn-primary.btn-danger:focus {
  background: #c22;
  border-color: #c22;
  box-shadow: inset 0 0 0 1px #fff;
}

.in-page-edit .dialog .ssi-buttons {
  padding: 0;
}

.in-page-edit .dialog .ssi-buttons .ssi-rightButtons {
  width: 100%;
}

.in-page-edit-article-link-group:before {
  content: '[';
}

.in-page-edit-article-link-group:after {
  content: ']';
}

.mw-editsection .in-page-edit-article-link-group:before {
  content: ' | ';
}

.mw-editsection .in-page-edit-article-link-group:after {
  content: '';
}

.mw-diff-undo .in-page-edit-article-link-group {
  display: none;
}

.in-page-edit .detailArea .detailBtnGroup {
  margin-left: 1.25em;
}

/** 快速差异 **/
.quick-diff .diff-hidden-history {
  color: #a8a8a8;
  text-decoration: line-through;
}

/** 个人设置 **/
.ipe-preference .preference-tabber .tab-list {
  display: flex;
  list-style: none;
  margin: 0;
  white-space: nowrap;
  overflow-x: auto;
}

.ipe-preference .preference-tabber .tab-list li {
  flex: auto;
  padding: 0;
  margin: 0;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
}

.ipe-preference .preference-tabber .tab-list li a {
  display: block;
  padding: 4px 8px;
  color: #08d;
  text-decoration: none;
}

.ipe-preference .preference-tabber .tab-list li:hover a {
  box-shadow: 0 -2px 0 rgba(0, 136, 221, 0.25) inset;
}

.ipe-preference .preference-tabber .tab-list li a.active {
  box-shadow: 0 -2px 0 #08d inset;
}

.ipe-preference .preference-tabber .tab-content {
  height: 60vh;
  overflow-y: auto;
}

.ipe-preference .preference-tabber .tab-content section {
  display: none;
}

.ipe-preference .preference-tabber .tab-content section.active {
  display: block;
}

.ipe-preference .preference-tabber .tab-content section label {
  display: block;
}

.ipe-preference #plugin-container ul {
  margin: 0;
  list-style: none;
  border: 1px solid #ccc;
}

.ipe-preference #plugin-container li:not(:last-of-type) {
  border-bottom: 1px solid #ccc;
}

.ipe-preference #plugin-container li {
  padding: 4px 30px 4px 8px;
}

.ipe-preference #plugin-container li:hover {
  background-color: #efefef;
}

.ipe-preference #plugin-container li label {
  padding: 0;
  cursor: pointer;
}

.ipe-preference #plugin-container li label input + span {
  position: absolute;
  right: 0;
}

.ipe-preference #plugin-container li .plugin-name {
  display: block;
  font-weight: bold;
}

.ipe-preference #plugin-container li .plugin-author {
  display: block;
  font-style: italic;
  font-size: 12px;
}

/* 
.ipe-preference #analysis-container ul {
  list-style: none;
  margin: 0;
}

.ipe-preference #analysis-container li > div {
  position: relative;
  color: #ffffff;
  text-shadow: 0 0 2px #222;
  background-color: #c23531;
  height: 100%;
}

.ipe-preference #analysis-container li > div > div:first-of-type {
  padding-left: 2px;
  font-weight: bold;
}

.ipe-preference #analysis-container li > div > div:last-of-type {
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 2px;
}
 */

.ipe-preference .plugin-footer {
  font-size: 12px;
  font-style: italic;
  margin-top: 1rem;
}

/** 进度条 **/
.ipe-progress {
  height: 1em;
  border: 1px solid #c5c5c5;
  border-radius: 2px;
  background: white;
  overflow: hidden;
}

.ipe-progress .ipe-progress-bar {
  height: 100%;
  width: auto;
  background: #3360c3;
  animation: progress 2s linear infinite;
  opacity: 1;
}

.ipe-progress.done {
  background: #3360c3;
  transition: all 0.8s;
}

.ipe-progress.done .ipe-progress-bar {
  animation: none;
  width: 0%;
  margin: auto 0;
  opacity: 0;
  transition: all 0.8s;
}

@keyframes progress {
  from {
    margin-left: -40%;
    margin-right: 110%;
  }

  to {
    margin-left: 110%;
    margin-right: -40%;
  }
}

/* 通知框 */
.in-page-edit.notify {
  border-radius: 0;
  font-family: unset;
}

.in-page-edit.notify .ssi-modalTitle {
  background: none;
  color: unset;
}

/** 背景颜色 **/
.ssi-backdrop {
  background: rgba(255, 255, 255, 0.5);
}

/** 修改checkbox样式 **/
.in-page-edit label input[type='checkbox'] + span,
.in-page-edit label input[type='radio'] + span {
  user-select: none;
  line-height: 1.2em;
}

.in-page-edit label input[type='checkbox'] + span::before,
.in-page-edit label input[type='radio'] + span::before {
  /* 不换行空格可以保持选择框的高度 */
  content: '\\a0';
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  margin-top: 0.15em;
  margin-right: 0.375em;
  border-radius: 2px;
  background-color: #f8f8f8;
  border: 1px solid #72777d;
  cursor: pointer;
  transition: all 0.12s;
}

.in-page-edit label input[type='radio'] + span::before {
  border-radius: 50%;
  box-sizing: border-box;
  vertical-align: text-bottom;
}

.in-page-edit label input[type='checkbox']:checked + span::before {
  content: '\\a0';
  background-color: #36c;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxnIGlkPSJjaGVja21hcmsiPjxwYXRoIGQ9Ik0xMy43NDkyKzMuNDkwOTVMNS44NjMxMisxMS42MzM3TDIuMjUwNzcrNy45NjA4MkwxLjQ4NzYrOC43NTc3OEw1Ljg2MzEyKzEzLjE5M0wxNC41MTI0KzQuMjg3OUwxMy43NDkyKzMuNDkwOTVaIiBvcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+PC9nPjwvc3ZnPg==);
  background-repeat: no-repeat;
}

.in-page-edit label input[type='radio']:checked + span::before {
  border-color: #36c;
  border-width: 6px;
}

.in-page-edit label input[type='checkbox']:checked + span:hover::before {
  background-color: #447ff5;
}

.in-page-edit label input[type='radio']:checked + span:hover::before {
  border-color: #447ff5;
}

.in-page-edit label input[type='checkbox']:active + span::before,
.in-page-edit label input[type='checkbox']:focus + span::before {
  box-shadow: inset 0 0px 0px 1px rgb(255, 255, 255);
  border-color: #3366cc;
}

.in-page-edit label input[type='checkbox'],
.in-page-edit label input[type='radio'] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

.in-page-edit .cm-panel label input[type='checkbox'],
.in-page-edit .cm-panel label input[type='radio'] {
  position: initial;
  clip: initial;
}

.in-page-edit label input[type='checkbox']:disabled + span::before {
  border-color: #d6d6d6;
}

.in-page-edit label input[type='radio']:disabled + span::before {
  background-color: #c8ccd1;
  border-color: #c8ccd1;
}

.in-page-edit label input[type='checkbox']:disabled:checked + span::before {
  background-color: #a0a0a0;
}

.in-page-edit label input[type='radio']:disabled:checked + span::before {
  background-color: #fff;
}

/** 右下角小工具箱 **/
#ipe-edit-toolbox {
  position: fixed;
  right: 32px;
  bottom: 32px;
  user-select: none;
  z-index: 199;
}

@media print {
  #ipe-edit-toolbox {
    display: none;
  }
}

#ipe-edit-toolbox .ipe-toolbox-btn {
  color: white;
  background: #bebebe;
  text-align: center;
  height: 35px;
  width: 35px;
  font-size: 20px;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 5px gray;
  text-shadow: 0 0 2px #4c4c4c;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

#ipe-edit-toolbox #toolbox-toggle {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 42px;
  height: 42px;
  background: #3f51b5;
  font-size: 24px;
  line-height: 1;
  margin: 0;
  transition: all 0.26s ease-in-out;
  transform: rotate(0deg);
}

#ipe-edit-toolbox #toolbox-toggle.opened {
  transform: rotate(45deg);
}

#ipe-edit-toolbox .btn-group.group1 .btn-tip-group {
  transform: translate3d(0, 100%, 0);
}

#ipe-edit-toolbox .btn-group.group2 .btn-tip-group {
  transform: translate3d(100%, 0, 0);
}

#ipe-edit-toolbox .btn-group .btn-tip-group {
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  opacity: 0;
}

#ipe-edit-toolbox .btn-group.opened .btn-tip-group {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}

#ipe-edit-toolbox .btn-group.opened .btn-tip-group:nth-of-type(1),
#ipe-edit-toolbox .btn-group:not(.opened) .btn-tip-group:nth-of-type(3) {
  transition-delay: 0s;
}

#ipe-edit-toolbox .btn-group .btn-tip-group:nth-of-type(2) {
  transition-delay: 0.06s;
}

#ipe-edit-toolbox .btn-group:not(.opened) .btn-tip-group:nth-of-type(1),
#ipe-edit-toolbox .btn-group.opened .btn-tip-group:nth-of-type(3) {
  transition-delay: 0.108s;
}

/* 不显示时使其完全缩小到没有，以防被点到 */
#ipe-edit-toolbox .btn-group:not(.opened) {
  transform: scaleZ(0);
  transition-delay: 0.408s;
}

#ipe-edit-toolbox .btn-group.opened {
  transform: scaleZ(1);
}

#ipe-edit-toolbox .ipe-toolbox-btn#toolbox-toggle.click {
  box-shadow: 0 0 4px gray, 0 0 10px #444 inset;
}

#toolbox-toggle.click:before {
  content: '\\f023'; /*fa-lock*/
  font-family: 'FontAwesome';
  display: block;
  position: absolute;
  bottom: 50%;
  right: 0;
  font-size: 12px;
  transform: rotateZ(-45deg);
}

#ipe-edit-toolbox .ipe-toolbox-btn#edit-btn {
  background: #2196f3;
}

#ipe-edit-toolbox .ipe-toolbox-btn#redirectfrom-btn {
  background: #00bcd4;
}

#ipe-edit-toolbox .ipe-toolbox-btn#redirectto-btn {
  background: #009688;
}

#ipe-edit-toolbox .ipe-toolbox-btn#deletepage-btn {
  background: #e91e63;
}

#ipe-edit-toolbox .ipe-toolbox-btn#renamepage-btn {
  background: #ff5722;
}

#ipe-edit-toolbox .ipe-toolbox-btn#preference-btn {
  background: #ffc107;
}

#ipe-edit-toolbox .btn-group {
  position: absolute;
  float: right;
  list-style: none;
  margin: 0;
}

#ipe-edit-toolbox .btn-group.group1 {
  bottom: calc(35px + 6px);
  right: 2px;
}

#ipe-edit-toolbox .btn-group.group2 {
  bottom: 0;
  right: calc(35px + 6px);
}

#ipe-edit-toolbox .btn-group.group1 .btn-tip-group {
  margin-bottom: 6px;
}

#ipe-edit-toolbox .btn-group.group2 .btn-tip-group {
  margin-right: 6px;
}

#ipe-edit-toolbox .btn-group.opened {
  visibility: visible;
}

#ipe-edit-toolbox .btn-tip-group .btn-tip {
  position: absolute;
  text-align: center;
  font-size: 12px;
  width: 6em;
  right: -20px;
  top: -2.1em;
  background: white;
  padding: 0px 4px;
  box-shadow: 0 0 4px gray;
  pointer-events: none;
  display: none;
}

#ipe-edit-toolbox .btn-tip-group:hover .btn-tip {
  display: block;
}

#ipe-edit-toolbox .btn-tip-group .btn-tip:after {
  content: '';
  display: block;
  border: 5px solid transparent;
  border-right-color: #fff;
  border-bottom-color: #fff;
  position: absolute;
  bottom: -4px;
  left: calc(50% - 2.5px);
  transform: rotate(45deg);
}

/** 
 * Animate.css Lite
 * Only zoomIn & zoomOut
 **/
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.faster {
  -webkit-animation-duration: 500ms;
  animation-duration: 500ms;
}
`,`
.ssi-modal .icon,
.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow .ssi-displayIcon,
.ssi-topIcons .ssi-displayIcon,
.ssi-topIcons .ssi-closeIcon,
.ssi-modalNavigation .ssi-modalPrev span,
.ssi-modalNavigation .ssi-modalNext span,
.notify.ssi-success .ssi-modalTitle span.success,
.notify.ssi-info .ssi-modalTitle span.success,
.notify.ssi-warning .ssi-modalTitle span.success,
.notify.ssi-error .ssi-modalTitle span.success,
.notify.ssi-info .ssi-modalTitle span.info,
.notify.ssi-warning .ssi-modalTitle span.warning,
.notify.ssi-error .ssi-modalTitle span.error {
  background-image: url('images/sprite.png');
}

body.ssi-modalOpen {
  overflow: hidden;
}

.ssi-backdrop {
  position: fixed;
  overflow: hidden;
  z-index: 50; /* changed by gh:lihaohong6/User:PetraMagna */
  top: 0;
  left: 0;
  background: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='#B3000000', endColorstr='#B3000000');
  /* IE */
}

.ssi-modalOuter {
  position: fixed;
  z-index: 1500;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWrapper {
  width: 100% !important;
  margin: 0;
  border-radius: 0;
  height: 100%;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow {
  overflow: auto;
  border-radius: 0;
  min-height: 100%;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow .ssi-modalContent {
  padding-bottom: 0;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow .ssi-buttons {
  position: fixed;
  width: 100%;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow .ssi-displayIcon {
  background-position: 0px -120px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-modalOuter.ssi-fullScreen .ssi-modalWindow .ssi-displayIcon:hover {
  background-position: 0px -96px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-center {
  display: table;
}

.ssi-center .ssi-modalWrapper {
  display: table-cell;
  vertical-align: middle;
}

.ssi-center .ssi-modalWindow {
  margin-left: auto;
  margin-right: auto;
}

.ssi-modalWrapper {
  position: relative;
  margin: 30px auto 20px;
  z-index: 1501;
}

.ssi-modalWrapper.full {
  width: 100%;
}

.ssi-modalWrapper.auto,
.ssi-modalWrapper .ssi-modalWindow.auto {
  display: table;
  width: auto;
}

.ssi-modalWrapper.large,
.ssi-modalWrapper .ssi-modalWindow.large {
  width: 80%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.large,
  .ssi-modalWrapper .ssi-modalWindow.large {
    width: 85%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.large,
  .ssi-modalWrapper .ssi-modalWindow.large {
    width: 95%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.large,
  .ssi-modalWrapper .ssi-modalWindow.large {
    width: 98%;
  }
  .ssi-modalWrapper.large .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.large .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWrapper.mediumToLarge,
.ssi-modalWrapper .ssi-modalWindow.mediumToLarge {
  width: 70%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.mediumToLarge,
  .ssi-modalWrapper .ssi-modalWindow.mediumToLarge {
    width: 80%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.mediumToLarge,
  .ssi-modalWrapper .ssi-modalWindow.mediumToLarge {
    width: 90%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.mediumToLarge,
  .ssi-modalWrapper .ssi-modalWindow.mediumToLarge {
    width: 95%;
  }
  .ssi-modalWrapper.mediumToLarge .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.mediumToLarge .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWrapper.medium,
.ssi-modalWrapper .ssi-modalWindow.medium {
  width: 62%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.medium,
  .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 72%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.medium,
  .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 82%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.medium,
  .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 95%;
  }
  .ssi-modalWrapper.medium .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.medium .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWrapper.smallToMedium,
.ssi-modalWrapper .ssi-modalWindow.smallToMedium {
  width: 50%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.smallToMedium,
  .ssi-modalWrapper .ssi-modalWindow.smallToMedium {
    width: 70%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.smallToMedium,
  .ssi-modalWrapper .ssi-modalWindow.smallToMedium {
    width: 80%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.smallToMedium,
  .ssi-modalWrapper .ssi-modalWindow.smallToMedium {
    width: 90%;
  }
  .ssi-modalWrapper.smallToMedium .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.smallToMedium .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWrapper.small,
.ssi-modalWrapper .ssi-modalWindow.small {
  width: 45%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.small,
  .ssi-modalWrapper .ssi-modalWindow.small {
    width: 65%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.small,
  .ssi-modalWrapper .ssi-modalWindow.small {
    width: 75%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.small,
  .ssi-modalWrapper .ssi-modalWindow.small {
    width: 85%;
  }
  .ssi-modalWrapper.small .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.small .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWrapper.dialog,
.ssi-modalWrapper .ssi-modalWindow.dialog {
  width: 30%;
}

@media only screen and (max-width: 900px) {
  .ssi-modalWrapper.dialog,
  .ssi-modalWrapper .ssi-modalWindow.dialog {
    width: 50%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalWrapper.dialog,
  .ssi-modalWrapper .ssi-modalWindow.dialog {
    width: 60%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalWrapper.dialog,
  .ssi-modalWrapper .ssi-modalWindow.dialog {
    width: 80%;
  }
  .ssi-modalWrapper.dialog .ssi-modalTitle,
  .ssi-modalWrapper .ssi-modalWindow.dialog .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalWindow {
  width: 100%;
  background: #ffffff;
  border: 1px solid #c3c3c3;
  position: relative;
  border-radius: 8px;
  padding: 18px 6px 5px 6px;
}

.ssi-topIcons {
  padding-left: 5px;
  font-weight: 600;
  position: absolute;
  top: 0;
  line-height: 25px;
  right: 0;
  z-index: 1;
}

.ssi-topIcons a {
  float: left;
  color: #8c8c8c;
  font-size: 30px;
  text-decoration: none;
  margin-right: 5px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-color: inherit;
}

.ssi-topIcons a:hover {
  color: #265067;
}

.ssi-topIcons .ssi-displayIcon {
  background-position: 0px 0px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-topIcons .ssi-displayIcon:hover {
  background-position: 0px -144px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-topIcons .ssi-closeIcon {
  background-position: 0px -72px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-topIcons .ssi-closeIcon:hover {
  background-position: 0px -24px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.ssi-modalTitle {
  padding: 0 0 5px 15px;
  font: italic 600 25px Georgia, serif;
  border-bottom: 1px solid #dddddd;
}

.ssi-modalTitle .ssi-displayTime {
  font-size: 18px;
}

.ssi-modalContent {
  min-height: 50px;
  margin-top: 0px;
  padding: 5px 15px 10px 15px;
  z-index: 1501;
  position: relative;
}

.ssi-modalContent:after {
  content: ' ';
  display: table;
  clear: both;
}

.ssi-modalContent::-webkit-scrollbar {
  -webkit-appearance: none;
}

.ssi-modalContent::-webkit-scrollbar:vertical {
  width: 15px;
}

.ssi-modalContent::-webkit-scrollbar:horizontal {
  height: 12px;
}

.ssi-modalContent::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 2px solid #ffffff;
}

.ssi-modalContent::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #ffffff;
}

.ssi-modalContent.ssi-overflow {
  overflow: auto;
}

.ssi-buttons {
  position: relative;
  bottom: 0;
  padding: 5px 5px 1px 5px;
  border-top: 1px solid #dddddd;
}

.ssi-buttons:after {
  content: ' ';
  display: block;
  height: 0;
  clear: both;
}

.ssi-buttons .ssi-leftButtons {
  float: left;
}

.ssi-buttons .ssi-rightButtons {
  float: right;
}

.ssi-buttons .ssi-modalBtn {
  margin: 2px;
}

.ssi-buttons .ssi-countDown {
  color: #d1d1d1;
  font-size: 12px;
  margin-left: 5px;
}

.ssi-modalPositioned {
  overflow: visible;
  height: 0;
}

.ssi-modalPositioned.right .ssi-modalWrapper {
  float: right;
}

.ssi-modalPositioned.right .ssi-modalWrapper .ssi-modalWindow {
  float: right;
}

.ssi-modalPositioned.left .ssi-modalWrapper {
  float: left;
}

.ssi-modalPositioned.left .ssi-modalWrapper:after {
  content: ' ';
  display: block;
  height: 0;
  clear: both;
}

.ssi-modalPositioned.left .ssi-modalWindow {
  float: left;
}

.ssi-modalPositioned.bottom {
  top: auto;
  height: auto;
  bottom: 0;
}

.ssi-modalPositioned.bottom .ssi-modalWrapper {
  height: auto;
}

.ssi-modalPositioned.top {
  top: 0;
}

.ssi-modalPositioned.center .ssi-modalWrapper {
  margin-left: auto !important;
  margin-right: auto !important;
}

.ssi-modalPositioned.center .ssi-modalWrapper .ssi-modalWindow {
  margin-left: auto !important;
  margin-right: auto !important;
}

.ssi-modalPositioned .ssi-modalWrapper {
  margin: 15px 3px;
  padding: 0;
  height: 0;
}

.ssi-modalPositioned .ssi-modalWrapper .ssi-modalWindow {
  margin: 10px 0;
  clear: both;
  z-index: 1500;
}

.ssi-modalPositioned.ssi-stack {
  pointer-events: none;
  z-index: 3000;
}

.ssi-modalPositioned.ssi-stack.center .ssi-modalWrapper .ssi-modalWindow {
  margin: 4px;
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper {
  width: 100%;
  margin: 0;
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow:first-child {
  margin-top: 10px;
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow {
  pointer-events: auto;
  margin: 2px 7px;
  box-shadow: -1px 1px 28px -2px #a196a1;
}

.ssi-modalPositioned.ssi-stack
  .ssi-modalWrapper
  .ssi-modalWindow.ssi-smoothSlide {
  visibility: hidden;
  display: block !important;
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.full {
  width: 99.9%;
  margin: 1px 1px;
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.full {
    width: 99.5%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.full
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.large {
  width: 800px;
}

@media only screen and (max-width: 900px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.large {
    width: 90%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.large {
    width: 85%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.large {
    width: 99.5%;
    margin: 1px 1px;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.large
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack
  .ssi-modalWrapper
  .ssi-modalWindow.mediumToLarge {
  width: 700px;
}

@media only screen and (max-width: 900px) {
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.mediumToLarge {
    width: 85%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.mediumToLarge {
    width: 75%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.mediumToLarge {
    width: 80%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.mediumToLarge
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.medium {
  width: 600px;
}

@media only screen and (max-width: 900px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 80%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 75%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.medium {
    width: 80%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.medium
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack
  .ssi-modalWrapper
  .ssi-modalWindow.smallToMedium {
  width: 500px;
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.smallToMedium {
    width: 60%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.smallToMedium {
    width: 55%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.smallToMedium
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.small {
  width: 400px;
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.small {
    width: 60%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.small {
    width: 55%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.small
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.dialog {
  width: 300px;
}

@media only screen and (max-width: 600px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.dialog {
    width: 45%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalPositioned.ssi-stack .ssi-modalWrapper .ssi-modalWindow.dialog {
    width: 55%;
  }
  .ssi-modalPositioned.ssi-stack
    .ssi-modalWrapper
    .ssi-modalWindow.dialog
    .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-hover {
  cursor: pointer;
}

.ssi-hover:hover {
  box-shadow: -1px 1px 17px 0px #757175;
}

.ssi-hidden {
  display: none;
}

.ssi-borderOut {
  border: none !important;
}

.anim {
  -webkit-animation-duration: 0.4s;
  animation-duration: 0.4s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes ssi-fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes ssi-fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.ssi-fadeIn {
  -webkit-animation-name: ssi-fadeIn;
  animation-name: ssi-fadeIn;
}

@-webkit-keyframes ssi-fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes ssi-fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.ssi-fadeOut {
  -webkit-animation-name: ssi-fadeOut;
  animation-name: ssi-fadeOut;
}

/*------------------------Start of imgBox plugin------------------------------*/
.ssi-backdrop.imgBox {
  background: rgba(0, 0, 0, 0.87);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='#CC000000', endColorstr='#CC000000');
  /* IE */
}

.imgBox {
  overflow: auto;
}

.imgBox.ssi-center .ssi-modalWindow {
  width: 300px;
}

.imgBox .ssi-modalWrapper {
  margin-top: 55px;
  z-index: 11111;
  width: 300px;
}

.imgBox .ssi-modalWrapper .ssi-topIcons {
  margin-right: -15px;
  margin-top: -12px;
  z-index: 11111;
}

.imgBox .ssi-modalWrapper .ssi-topIcons a {
  background-color: #5c5c5e;
  color: #fff;
  width: 24px;
  height: 24px;
  line-height: 0;
  border-radius: 30px;
}

.imgBox .ssi-modalWrapper .ssi-topIcons a:hover {
  color: #e9e9e9;
}

.imgBox .ssi-modalWrapper .ssi-topIcons .ssi-closeIcon {
  background-position: 0px -48px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.imgBox .ssi-modalWrapper .ssi-topIcons .ssi-closeIcon:hover {
  background-position: 0px -48px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 24px;
  height: 24px;
}

.imgBox .ssi-modalWrapper .ssi-topIcons.inTitle {
  margin-top: 25px;
}

@media only screen and (max-width: 450px) {
  .imgBox .ssi-modalWrapper .ssi-topIcons.inTitle {
    margin-top: 15px;
  }
  .imgBox .ssi-modalWrapper .ssi-topIcons.inTitle .ssi-modalTitle {
    font-size: 18px;
  }
}

.imgBox .ssi-modalWrapper.ssi-imgBorder .ssi-modalContent {
  --webkit-box-shadow: 0px 0px 31px -1px rgba(245, 245, 245, 0.3);
  box-shadow: 0px 0px 31px -1px rgba(245, 245, 245, 0.3);
  border: 1px solid white;
}

.imgBox .ssi-modalWrapper.ssi-overHeight,
.imgBox .ssi-modalWrapper.ssi-overHeight .ssi-modalWindow {
  -webkit-transition: height 0.6s, width 0.6s;
  transition: height 0.6s, width 0.6s;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow {
  border: none;
  border-radius: 2px;
  padding: 0;
  background: none;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalTitle {
  padding-left: 0;
  text-align: center;
  font-weight: 300;
  color: white !important;
  border-bottom: none;
}

@media only screen and (max-width: 450px) {
  .imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalTitle {
    font-size: 15px;
  }
  .imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalTitle .ssi-modalTitle {
    font-size: 18px;
  }
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-buttons {
  border: none;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalContent {
  position: relative;
  overflow: hidden;
  text-align: center;
  border-radius: 0;
  background: none;
  margin: 0 auto;
  padding: 0;
  height: 300px;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalContent h3,
.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalContent h4 {
  color: #5e5e5e;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalContent .ssi-modalImg {
  width: 100%;
}

.imgBox .ssi-modalWrapper .ssi-modalWindow .ssi-modalContent .ssi-imgButtons {
  position: absolute;
  left: 0;
  bottom: auto;
  width: 100%;
  z-index: 101000001;
  padding: 8px;
}

.imgBox
  .ssi-modalWrapper
  .ssi-modalWindow
  .ssi-modalContent
  .ssi-imgButtons
  .ssi-leftButtons {
  float: left;
}

.imgBox
  .ssi-modalWrapper
  .ssi-modalWindow
  .ssi-modalContent
  .ssi-imgButtons
  .ssi-rightButtons {
  float: right;
}

.imgBox
  .ssi-modalWrapper
  .ssi-modalWindow
  .ssi-modalContent
  .ssi-imgButtons
  .ssi-imgBtn {
  margin: 2px;
  padding: 3px;
}

.ssi-modalNavigation {
  position: fixed;
  top: 50%;
  z-index: 1500;
  margin-top: -150px;
  left: 0;
  height: 300px;
  width: 100%;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  filter: alpha(opacity=0);
  opacity: 0;
}

@media only screen and (max-width: 900px) {
  .ssi-modalNavigation {
    height: 200px;
    margin-top: -100px;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-modalNavigation {
    height: 100px;
    margin-top: -50px;
  }
  .ssi-modalNavigation .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-modalNavigation .ssi-modalPrev,
.ssi-modalNavigation .ssi-modalNext {
  top: 0;
  outline: 0;
  height: 100%;
  cursor: pointer;
}

.ssi-modalNavigation .ssi-modalPrev span,
.ssi-modalNavigation .ssi-modalNext span {
  position: relative;
  top: 40%;
}

.ssi-modalNavigation .ssi-modalPrev {
  width: 40%;
  left: 0;
  float: left;
}

.ssi-modalNavigation .ssi-modalPrev span {
  background-position: 0px -356px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 56px;
  height: 56px;
}

.ssi-modalNavigation .ssi-modalPrev:hover span {
  background-position: 0px -300px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 56px;
  height: 56px;
}

.ssi-modalNavigation .ssi-modalNext {
  width: 60%;
  float: right;
  right: 0;
}

.ssi-modalNavigation .ssi-modalNext span {
  float: right;
  background-position: 0px -468px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 56px;
  height: 56px;
}

.ssi-modalNavigation .ssi-modalNext:hover span {
  background-position: 0px -412px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 56px;
  height: 56px;
}

.imgBox .ssi-modalWrapper.ssi-iframe {
  width: 50%;
  height: 55%;
}

@media only screen and (max-width: 900px) {
  .imgBox .ssi-modalWrapper.ssi-iframe {
    padding: 10px;
    width: 90%;
  }
}

@media only screen and (max-width: 600px) {
  .imgBox .ssi-modalWrapper.ssi-iframe {
    width: 100%;
  }
}

@media only screen and (max-width: 450px) {
  .imgBox .ssi-modalWrapper.ssi-iframe {
    padding: 0;
    width: 100%;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalTitle {
    font-size: 18px;
  }
}

.imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow {
  height: 100%;
}

.imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-topIcons {
  margin-right: 8%;
  z-index: 2001;
}

.imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-imgButtons {
  width: 0%;
}

@media only screen and (max-width: 900px) {
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow {
    padding: 10px;
    width: 90%;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-topIcons {
    margin-top: 0;
    margin-right: 9%;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-topIcons.inTitle {
    margin-top: 35px;
  }
}

@media only screen and (max-width: 600px) {
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow {
    width: 100%;
  }
}

@media only screen and (max-width: 450px) {
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow {
    padding: 0;
    width: 100%;
    max-height: 400px;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-modalTitle {
    font-size: 18px;
  }
  .imgBox
    .ssi-modalWrapper.ssi-iframe
    .ssi-modalWindow
    .ssi-modalContent
    .ssi-modalNext
    span {
    background-position-x: 15px;
  }
  .imgBox
    .ssi-modalWrapper.ssi-iframe
    .ssi-modalWindow
    .ssi-modalContent
    .ssi-modalNext:hover
    span {
    background-position-x: 15px;
  }
  .imgBox
    .ssi-modalWrapper.ssi-iframe
    .ssi-modalWindow
    .ssi-modalContent
    .ssi-modalPrev
    span {
    background-position-x: -15px;
  }
  .imgBox
    .ssi-modalWrapper.ssi-iframe
    .ssi-modalWindow
    .ssi-modalContent
    .ssi-modalPrev:hover
    span {
    background-position-x: -15px;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-topIcons {
    margin-top: -10px;
    margin-right: 5%;
  }
  .imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalWindow .ssi-topIcons.inTitle {
    margin-top: 15px;
  }
}

.imgBox .ssi-modalWrapper.ssi-iframe .ssi-modalContent {
  width: 100%;
  height: 90% !important;
}

.imgBox .ssi-modalWrapper.ssi-iframe iframe {
  position: relative;
  z-index: 2000;
  width: 80%;
  height: 100%;
}

.ssi-center.imgBox .ssi-iframe {
  width: 100%;
  height: 100%;
}

.ssi-center.imgBox .ssi-iframe .ssi-modalWindow {
  width: 60%;
  height: 55%;
}

@media only screen and (max-width: 900px) {
  .ssi-center.imgBox .ssi-iframe .ssi-modalWindow {
    padding: 10px;
    width: 90%;
  }
}

@media only screen and (max-width: 600px) {
  .ssi-center.imgBox .ssi-iframe .ssi-modalWindow {
    width: 100%;
  }
}

@media only screen and (max-width: 450px) {
  .ssi-center.imgBox .ssi-iframe .ssi-modalWindow {
    width: 100%;
    max-height: 400px;
    padding: 0;
  }
  .ssi-center.imgBox .ssi-iframe .ssi-modalWindow .ssi-modalTitle {
    font-size: 18px;
  }
}

.ssi-center.imgBox .ssi-iframe .ssi-modalContent {
  width: 100%;
  height: 90%;
}

.ssi-center.imgBox .ssi-iframe iframe {
  position: relative;
  z-index: 2000;
  width: 80%;
  height: 100%;
}

.ssi-loader {
  position: relative;
  margin: auto auto;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: url('images/loader.gif') no-repeat;
}

.ssi-navFadeOut {
  opacity: 0 !important;
}

.ssi-navFadeIn {
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)' !important;
  filter: alpha(opacity=100) !important;
  opacity: 1 !important;
}

.ssi-navFade {
  -webkit-transition: opacity 0.4s;
  transition: opacity 0.4s;
}

/*------------------------End of imgBox plugin------------------------------*/
/*------------------------Start of notify plugin------------------------------*/
.notify.ssi-modalWindow {
  padding-top: 12px;
}

.notify .ssi-icon {
  max-width: 30px;
  max-height: 30px;
  float: left;
  clear: left;
}

.notify .ssi-modalContent {
  max-height: 150px;
  overflow: auto;
  padding: 5px 15px;
  margin-top: 0;
  min-height: 30px;
}

.notify .ssi-modalContent::-webkit-scrollbar:vertical {
  width: 6px;
}

.notify .ssi-modalContent::-webkit-scrollbar:horizontal {
  height: 6px;
}

.notify .ssi-modalTitle {
  line-height: 32px;
  padding-bottom: 5px;
}

.notify .ssi-modalTitle:after {
  content: ' ';
  display: block;
  clear: both;
}

.notify.ssi-success,
.notify.ssi-info,
.notify.ssi-warning,
.notify.ssi-error {
  padding: 3px 5px;
  margin: 2px 0;
  font: 500 18px 'Times New Roman';
  color: #ffffff;
  background-color: #2ea53a;
}

.notify.ssi-success .ssi-modalTitle,
.notify.ssi-info .ssi-modalTitle,
.notify.ssi-warning .ssi-modalTitle,
.notify.ssi-error .ssi-modalTitle {
  text-transform: capitalize;
  padding-left: 5px;
}

.notify.ssi-success .ssi-modalTitle span.success,
.notify.ssi-info .ssi-modalTitle span.success,
.notify.ssi-warning .ssi-modalTitle span.success,
.notify.ssi-error .ssi-modalTitle span.success {
  background-position: 0px -234px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 33px;
  height: 33px;
}

.notify.ssi-success .ssi-modalContent::-webkit-scrollbar-thumb,
.notify.ssi-info .ssi-modalContent::-webkit-scrollbar-thumb,
.notify.ssi-warning .ssi-modalContent::-webkit-scrollbar-thumb,
.notify.ssi-error .ssi-modalContent::-webkit-scrollbar-thumb {
  background-color: #3c7e28;
}

@media only screen and (max-width: 900px) {
  .notify.ssi-success,
  .notify.ssi-info,
  .notify.ssi-warning,
  .notify.ssi-error {
    font-size: 15px;
  }
  .notify.ssi-success .ssi-modalTitle,
  .notify.ssi-info .ssi-modalTitle,
  .notify.ssi-warning .ssi-modalTitle,
  .notify.ssi-error .ssi-modalTitle {
    padding-bottom: 1px;
    font-size: 20px;
  }
}

@media only screen and (max-width: 600px) {
  .notify.ssi-success,
  .notify.ssi-info,
  .notify.ssi-warning,
  .notify.ssi-error {
    width: 45%;
  }
}

@media only screen and (max-width: 450px) {
  .notify.ssi-success,
  .notify.ssi-info,
  .notify.ssi-warning,
  .notify.ssi-error {
    font-size: 12px;
  }
  .notify.ssi-success .ssi-modalTitle,
  .notify.ssi-info .ssi-modalTitle,
  .notify.ssi-warning .ssi-modalTitle,
  .notify.ssi-error .ssi-modalTitle {
    font-size: 18px;
  }
}

.notify.ssi-success:hover,
.notify.ssi-info:hover,
.notify.ssi-warning:hover,
.notify.ssi-error:hover {
  background-color: #2c9738;
}

.notify.ssi-info {
  background-color: #006cbc;
}

.notify.ssi-info .ssi-modalTitle span.info {
  background-position: 0px -201px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 33px;
  height: 33px;
}

.notify.ssi-info .ssi-modalContent::-webkit-scrollbar-thumb {
  background-color: #5d6ad6;
}

.notify.ssi-info:hover {
  background-color: #00529d;
}

.notify.ssi-warning {
  background-color: #db9100;
}

.notify.ssi-warning .ssi-modalTitle span.warning {
  background-position: 0px -267px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 33px;
  height: 33px;
}

.notify.ssi-warning .ssi-modalContent::-webkit-scrollbar-thumb {
  background-color: #b57300;
}

.notify.ssi-warning:hover {
  background-color: #c68200;
}

.notify.ssi-error {
  background-color: #bd3630;
}

.notify.ssi-error .ssi-modalTitle span.error {
  background-position: 0px -168px;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  width: 33px;
  height: 33px;
}

.notify.ssi-error .ssi-modalContent::-webkit-scrollbar-thumb {
  background-color: #9d1d2a;
}

.notify.ssi-error:hover {
  background-color: #a73832;
}

/*------------------------End of notify plugin------------------------------*/
`,"https://fastly.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"];function Xe(e=!1){Ze.forEach(t=>{if(t.startsWith("http")){if(e){const r=new URL(t);r.searchParams.set(Date.now(),"no_cache"),t=""+r}$("head").prepend($("<link>",{href:t,rel:"stylesheet","data-ipe":"style"}))}else{const r=document.createElement("style");r.type="text/css",r.appendChild(document.createTextNode(t)),document.head.appendChild(r)}})}const ei=`{
    "_metadata": {
        "noTranslate": [
            "noticeid",
            "noticeid-canary"
        ]
    },
    "en": {
        "noticeid": "build_2311_notify",
        "noticeid-canary": "canary",
        "version-notice-title": "Install successful",
        "version-notice": "Hello, thanks for using InPageEdit~です! The plug-in may collect your information, which will not be used for business purposes, and will not collect any of your personal cookies and privacy information. You can find the plug-in's analysis link in the preference window. If you do not want any of your information to be collected, please stop using this plug-in. For feedback, please file issues in GitHub.",
        "version-notice-canary-title": "Canary stability warning",
        "version-notice-canary": "Canary version is the version used by the author for debugging and development. Any untested experimental features may appear in this version, or even may not work normally at some time. For your experience, it is recommended to switch to the normal version!",
        "updatelog-update-success-title": "InPageEdit update successful",
        "updatelog-update-success": "InPageEdit $1 has been installed.",
        "updatelog-button-versioninfo": "View version info",
        "updatelog-after-close": "This pop-up window will not pop up again until the next version update. Find all release info at $1. If you find issues with the plug-in. $2",
        "updatelog-dismiss": "DISMISS",
        "updatelog-file-issue": "Submit it at GitHub.",
        "updatelog-title": "Update Log",
        "updatelog-about": "About",
        "quick-edit": "Quick Edit",
        "redirect-from": "Redirect from",
        "redirect-to": "Redirect to",
        "quick-delete": "Quick Delete",
        "quick-rename": "Quick Rename",
        "quick-diff": "Quick Diff",
        "ipe-preference": "Preferences",
        "confirm": "confirm",
        "cancel": "cancel",
        "close": "close",
        "done": "Done",
        "ok": "OK",
        "notify-success": "Success",
        "notify-info": "Info",
        "notify-error": "Error",
        "notify-editing-history": "You are editing old version of this page",
        "editor-title-editRevision": "Revision",
        "editor-summary-revision": "Edit from",
        "editor-title-editSection": "Part $1",
        "editor-title-editing": "Editing",
        "editor-new-section": "Subject (required)",
        "editor-new-section-missing-content": "The subject or content of the new section cannot be empty.",
        "editSummary": "Summary",
        "markAsMinor": "This is a minor edit",
        "watchThisPage": "Watch this page",
        "unlockWatchList": "Unlock to manually add or remove the page from my watchlist",
        "editor-button-save": "Save changes",
        "editor-confirm-save": "Are you sure you want to save the changes?",
        "editor-button-preview": "Show preview",
        "editor-button-diff": "Show changes",
        "editor-detail-button-toggle": "Page details",
        "editor-detail-button-templates": "Templates used",
        "editor-detail-title-templates": "Templates used on this page",
        "editor-detail-button-files": "File used",
        "editor-detail-title-files": "Files used on this page",
        "editor-detail-images-quickview": "Quick View",
        "editor-detail-images-upload": "(Re)upload",
        "window-leave-confirm": "Are you sure you want to leave this tab? Your text will NOT be saved.",
        "notify-no-right": "No permission",
        "editor-no-right": "You do NOT have permission to edit this page. You can leave comments on this page's talk page.",
        "editor-title-editNotice": "Editnotice",
        "editor-has-editNotice": "This page has editnotice!",
        "editor-leave-confirm": "Are you sure you want to leave the editor? Your text will NOT be saved.",
        "notify-no-change": "Nothing changed.",
        "editor-title-saving": "Publishing...",
        "notify-save-success": "Saved successfully. Refreshing page...",
        "notify-save-success-noreload": "Saved successfully.",
        "editor-save-error": "Some error(s) occurred while saving",
        "redirect-summary": "Quick redirect",
        "redirect-question-to": "Which page do you want to redirect $1 to?",
        "redirect-question-from": "Which page do you want to redirect to $1?",
        "redirect-question-fragment": "Which section of this page do you want to redirect to? (optional)",
        "redirect-title": "Quick Redirect",
        "notify-redirect-success": "Redirect successful.",
        "notify-redirect-error": "Some error(s) occurred while creating redirect",
        "notify-redirect-converted-error": "A page of the target name or its converted name already exists. Please choose another name.",
        "delete-reason-default": "No longer used",
        "delete-title": "Quick Delete",
        "delete-no-right": "You do NOT have permission to delete the page.",
        "delete-reason": "Why are you want to deleting $1 ?",
        "delete-confirm-title": "Delete confirm",
        "delete-confirm-content": "Are you sure you want to delete this page? You can restore it later in [[Special:DeletedPages]]",
        "notify-delete-success": "Deletion successful",
        "notify-delete-error": "Some error(s) occurred while deleting the page",
        "rename-title": "Quick Rename Page",
        "rename-moveTo": "Choose a new name for $1",
        "rename-movetalk": "Move talk page",
        "rename-movesubpages": "Move subpage(s) (up to 100)",
        "rename-noredirect": "Don't leave a redirect behind",
        "rename-summary": "Quick rename",
        "notify-rename-success": "Rename successful",
        "notify-rename-error": "Some error(s) occurred while moving the page",
        "rename-articleexists-title": "Target page exist",
        "rename-articleexists": "Page with new page name already exists. The force move function is under development, stay tuned.",
        "rename-articleexists-reason": "To move the page [[$1]] here.",
        "rename-no-right": "You do NOT have permission to delete the page.",
        "preference-title": "InPageEdit preferences",
        "preference-editor-label": "Editor settings",
        "preference-outSideClose": "Click out side to close editor",
        "preference-setMinor": "Minor edit as default",
        "preference-noConfirmEdit": "No confirmation required before submitting edits",
        "preference-summary-label": "Edit summary",
        "preference-editSummary": "<code>$section</code> - will be replaced by <code>/<!-- -->* Section header */</code><br><code>$oldid</code> - will be replaced by <code>Edit from [<!-- -->[Special:Diff/oldid]]</code>",
        "preference-analysis-label": "Analysis",
        "preference-analysis-view": "We will collect some of your non-sensitive information to record the usage of the plugin. Information will be used to improve the experience. You can find the information we collected at $1.",
        "preference-about-label": "About InPageEdit",
        "preference-aboutAndHelp": "About&Help",
        "preference-updatelog": "Update Log",
        "preference-savelocal-label": "You can save your InPageEdit-v2 preferences here.",
        "preference-savelocal": "Attention: Your preferences will save in your browser. That means you must save again when you change your device.",
        "preference-savelocal-btn": "Save locally",
        "preference-reset": "reset",
        "preference-save": "save",
        "preference-summary-default": "[InPageEdit] $section No summary given $oldid",
        "preference-savelocal-popup-title": "Save preferences locally",
        "preference-savelocal-popup": "Add the following code above the code that calls this plugin on your personal JS page:",
        "preference-savelocal-popup-notice": "Attention: If you save the settings locally, you will not be able to use this window for configuration. Although the wrong settings will be ignored, it will not prompt you what went wrong.",
        "preference-savelocal-popup-haslocal": "You are saving your preferences locally. You should modify your preferences at [[Special:Mypage/common.js|your personal JS page]] or global.js.",
        "preference-savelocal-popup-yourjspage": "your personal JS page",
        "preference-translate": "translate",
        "preference-discord": "Discord",
        "diff-loading": "Loading difference",
        "diff-button-todiffpage": "Jump to diff page",
        "diff-usertalk": "talk",
        "diff-usercontrib": "contribs",
        "diff-userblock": "block",
        "diff-title": "Difference",
        "diff-edit": "edit",
        "diff-version": "Revision",
        "diff-prev": "Older edit",
        "diff-nextv": "Newer edit",
        "diff-bytes": "bytes",
        "diff-title-original-content": "Original text",
        "diff-title-your-content": "Your text",
        "diff-error": "Failed to load difference.",
        "preview-placeholder": "Loading preview...",
        "preview-title": "Preview",
        "preview-error": "Failed to load preview.",
        "editor-edittool-header": "Header",
        "editor-edittool-header-text": "Header text",
        "editor-edittool-bold": "Bold",
        "editor-edittool-italic": "Italic",
        "editor-edittool-internal-link": "Internal link",
        "editor-edittool-list-bulleted": "Unordered list",
        "editor-edittool-list-numbered": "Ordered list",
        "editor-edittool-nowiki": "Nowiki text",
        "editor-edittool-format-label": "Format",
        "editor-edittool-insert-label": "Insert",
        "editor-edittool-custom-label": "Custom",
        "editor-reload-page": "Reload the page after saving",
        "preference-reset-confirm-title": "Restore your preferences",
        "preference-reset-confirm": "Are you sure you want to restore your preferences to default?",
        "target-exists-title": "Target page exists",
        "target-exists-no-delete": "Page [[$1]] already exists. Do you want to view this page?",
        "target-exists-can-delete": "Page [[$1]] already exists. Do you want to view this page or just delete it?",
        "preference-tab-editor": "editor",
        "preference-tab-plugin": "plugin",
        "preference-tab-analysis": "analysis",
        "preference-tab-about": "about",
        "preference-tab-another": "another",
        "preference-editor-title": "Editor settings",
        "preference-plugin-title": "Plugin store",
        "preference-analysis-title": "Analysis data",
        "preference-another-title": "Another settings",
        "preference-editHobbies-label": "Edit hobbies",
        "preference-watchList-label": "Watchlist preference",
        "preference-watchList-nochange": "Do not change my watchlist when editing",
        "preference-watchList-preferences": "Conform to [[Special:Preferences]]",
        "preference-watchList-unwatch": "Remove edited pages from my watchlist",
        "preference-watchList-watch": "Add edited pages to my watchlist",
        "preference-redLinkQuickEdit": "Add quick edit buttons after red links",
        "preference-plugin-footer": "You can choose the official plugins here. And welcome to [$1 InPageEdit-Plugins] to contribute your code! Some plugins need to reload the page to take effect.",
        "preference-analysis-totaluse": "<strong>Total use</strong>: $1 {{PLURAL:$1|time|times}}",
        "preference-display-label": "Display settings",
        "links-here": "Links here",
        "links-here-title": "{{PLURAL:$2|Page|Pages}} that {{PLURAL:$2|links|link}} to \\"<u>$1</u>\\"",
        "links-here-isRedirect": "redirect page",
        "links-here-no-page": "No page links to \\"<strong>$1</strong>\\" :(",
        "links-here-not-exist": "Attention: Page \\"<strong>$1</strong>\\" seems not exist"
    },
    "ar": {
        "version-notice-title": "نجاح التثبيت",
        "version-notice": "مرحبا ، شكرا لاستخدام انبايجاديت۔ قد يقوم المكون الإضافي بجمع معلوماتك ، والتي لن يتم استخدامها لأغراض العمل ، ولن تجمع أيًا من ملفات تعريف الارتباط الشخصية ومعلومات الخصوصية۔ يمكنك العثور على رابط تحليلات المكون الإضافي في نافذة التفضيل۔ إذا كنت لا ترغب في جمع أي من معلوماتك ، يرجى التوقف عن استخدام هذا المكون الإضافي۔ للحصول على ملاحظات  يرجى تقديم مشاكل في جيتهوب۔",
        "version-notice-canary-title": "تحذير استقرار الكناري",
        "version-notice-canary": "إصدار الكناري هو الإصدار الذي يستخدمه المؤلف لتصحيح الأخطاء والتطوير۔ قد تظهر أي ميزات تجريبية غير مجربة في هذا الإصدار ، أو قد لا تعمل بشكل طبيعي في وقت ما۔ لتجربتك ، يوصى بالتبديل إلى الإصدار العادي۔",
        "updatelog-update-success-title": "InPageEdit نجاح تحديث",
        "updatelog-update-success": "InPageEdit $1 تم تثبيت",
        "updatelog-button-versioninfo": "عرض معلومات الإصدار",
        "updatelog-after-close": "لن تظهر هذه النافذة المنبثقة مرة أخرى حتى يتم تحديث الإصدار التالي. البحث عن جميع معلومات الإصدار في 1$. إذا وجدت مشكلات في المكون الإضافي ",
        "updatelog-dismiss": "رفض",
        "updatelog-file-issue": "قم بتقديمه في جيتهوب",
        "updatelog-title": "سجل التحديث",
        "updatelog-about": "حول",
        "quick-edit": "تحرير سريع",
        "redirect-from": "إعادة التوجيه من",
        "redirect-to": "إعادة توجيه ل",
        "quick-delete": "حذف سريع",
        "quick-rename": "إعادة تسمية سريعة",
        "quick-diff": "الاختلاف السريع",
        "ipe-preference": "التفضيلات",
        "confirm": "تؤكد",
        "cancel": "إلغاء",
        "close": "أغلق",
        "done": "منجز",
        "ok": "حسنا",
        "notify-success": "نجاح",
        "notify-info": "معلومات",
        "notify-error": "خطأ",
        "notify-editing-history": "أنت تقوم بتحرير نسخة قديمة من هذه الصفحة",
        "editor-title-editRevision": "الارتداد",
        "editor-summary-revision": "تحرير من",
        "editor-title-editSection": "الجزء $1",
        "editor-title-editing": "التحرير",
        "editSummary": "ملخص",
        "markAsMinor": "هذا تعديل طفيف",
        "editor-button-save": "احفظ التغييرات",
        "editor-confirm-save": "هل أنت متأكد أنك تريد حفظ التغييرات؟",
        "editor-button-preview": "عرض المعاينة",
        "editor-button-diff": "إظهار التغييرات",
        "window-leave-confirm": "هل أنت متأكد أنك تريد ترك علامة التبويب هذه؟ لن يتم حفظ النص الخاص بك",
        "notify-no-right": "لا يوجد إذن",
        "editor-no-right": "ليس لديك إذن بتحرير هذه الصفحة ولكن يمكنك ترك تعليقات على صفحة نقاش هذه الصفحة",
        "editor-title-editNotice": "ملاحظة التحرير",
        "editor-has-editNotice": "تحتوي هذه الصفحة على إشعار تحرير ، انقر هنا.",
        "editor-leave-confirm": "هل أنت متأكد أنك تريد مغادرة المحرر؟ لن يتم حفظ النص الخاص بك",
        "notify-no-change": "لا شيء تغير",
        "editor-title-saving": "...نشر",
        "notify-save-success": "...حفظ الصفحة بنجاح ومنعش",
        "editor-save-error": "حدثت بعض الأخطاء أثناء الحفظ",
        "redirect-summary": "إعادة توجيه سريعة",
        "redirect-question-to": "ما الصفحة التي تريد إعادة توجيه 1$ إليها؟",
        "redirect-question-from": "ما هي الصفحة التي تريد إعادة توجيهها إلى 1$؟",
        "redirect-title": "إعادة التوجيه السريع",
        "notify-redirect-success": "تمت إعادة التوجيه بنجاح",
        "notify-redirect-error": "حدثت بعض الأخطاء أثناء إنشاء إعادة التوجيه",
        "delete-reason-default": "حدثت بعض الأخطاء أثناء إنشاء إعادة التوجيه",
        "delete-title": "حذف سريع",
        "delete-no-right": "ليس لديك إذن بحذف الصفحة",
        "delete-confirm-title": "تأكيد الحذف",
        "delete-confirm-content": "هل أنت متأكد أنك تريد حذف هذه الصفحة؟ يمكنك استعادته لاحقًا في الصفحة الخاصة بالصفحات المحذوفة",
        "notify-delete-success": "حذف بنجاح",
        "notify-delete-error": "حدثت بعض الأخطاء أثناء حذف الصفحة",
        "rename-title": "صفحة إعادة تسمية سريعة",
        "rename-moveTo": "اختر اسمًا جديدًا لـ $1",
        "rename-movetalk": "الخامس",
        "rename-movesubpages": "نقل الصفحات الفرعية حتى ١٠٠",
        "rename-noredirect": "لا تترك إعادة توجيه خلفك",
        "rename-summary": "إعادة تسمية سريعة",
        "notify-rename-success": "تمت إعادة التسمية بنجاح",
        "notify-rename-error": "حدثت بعض الأخطاء أثناء نقل الصفحة",
        "rename-articleexists-title": "الصفحة المستهدفة موجودة",
        "rename-articleexists": ".الصفحة التي تحتوي على اسم الصفحة الجديدة موجودة بالفعل. وظيفة تحريك القوة قيد التطوير ، ترقبوا",
        "rename-no-right": "ليس لديك إذن بحذف الصفحة",
        "preference-title": "تفضيلات هذا البرنامج المساعد",
        "preference-editor-label": "إعدادات المحرر",
        "preference-outSideClose": "انقر خارج لإغلاق المحرر",
        "preference-setMinor": "تعديل طفيف كافتراضي",
        "preference-summary-label": "تحرير الملخص",
        "preference-analysis-label": "تحليل",
        "preference-analysis-view": "سنقوم بجمع بعض المعلومات غير الحساسة الخاصة بك لتسجيل استخدام البرنامج المساعد۔ سيتم استخدام المعلومات لتحسين التجربة۔ يمكنك العثور على المعلومات التي جمعناها في 1$۔",
        "preference-about-label": "حول هذا البرنامج المساعد",
        "preference-aboutAndHelp": "حول ومساعدة",
        "preference-updatelog": "سجل التحديث",
        "preference-savelocal-label": "يمكنك حفظ تفضيلاتك لهذا البرنامج المساعد هنا",
        "preference-savelocal": ".تنبيه: سيتم حفظ تفضيلاتك في متصفحك. هذا يعني أنه يجب عليك الحفظ مرة أخرى عند تغيير جهازك",
        "preference-reset": "إعادة تعيين",
        "preference-save": "حفظ",
        "preference-summary-default": "$section $oldid لا يوجد ملخص معطى [InPageEdit] ",
        "preference-savelocal-popup": ":أضف الكود التالي أعلى الكود الذي يستدعي هذا البرنامج المساعد في صفحة جافا سكريبت الشخصية الخاصة بك",
        "preference-savelocal-popup-yourjspage": "صفحة جافا سكريبت الشخصية",
        "diff-loading": "فرق التحميل",
        "diff-button-todiffpage": "انتقل إلى صفحة الفروق",
        "diff-usertalk": "حديث",
        "diff-usercontrib": "يساهم",
        "diff-userblock": "منع",
        "diff-title": "فرق",
        "diff-edit": "تعديل",
        "diff-version": "مراجعة",
        "diff-prev": "تحرير أقدم",
        "diff-nextv": "تحرير أحدث",
        "diff-bytes": "بايت",
        "diff-title-original-content": "النص الأصلي",
        "diff-title-your-content": "نصك",
        "diff-error": "فشل تحميل الفرق",
        "preview-placeholder": "...تحميل المعاينة",
        "preview-title": "معاينة",
        "preview-error": "فشل تحميل المعاينة"
    },
    "fr": {
        "version-notice-title": "Installation réussie",
        "version-notice": "Salut, merci pour l'utilisation de InPageEdit ! Ce plug-in peut collecter vos informations qui ne seront pas utilisées à but commercial et ne collecte pas tous vos cookies personnel et vos renseignements personnels. Vous pouvez trouver les liens d'analyses de ce plug-in dans la fenêtre de préférences. Si vous ne voulez pas que vos informations sont collectés, désactivez ce plug-in. Pour des suggestions, veuillez signaler des problèmes sur GitHub.",
        "version-notice-canary-title": "Avertissement de stabilité de Canary",
        "version-notice-canary": "La version Canary est une version utilisée par l'auteur pour le développement et le débogage. Toutes les fonctionnalités expérimentales non testés peuvent apparaître dans cette version et peuvent ne pas fonctionner correctement à un moment. Pour votre expérience, il est recommandé de passer à la version normale !",
        "updatelog-update-success-title": "Mise à jour de InPageEdit réussie",
        "updatelog-update-success": "InPageEdit $1 a été installée.",
        "updatelog-button-versioninfo": "À propos de cette version",
        "updatelog-after-close": "Cette fenêtre secondaire n'apparaîtra plus jusqu'à la prochaine mise à jour. Toutes ces informations de cette mise à jour se trouvent $1. Si vous décelez des problèmes avec ce plug-in, $2",
        "updatelog-dismiss": "REJETER",
        "updatelog-file-issue": "Soumettez-le sur GitHub.",
        "updatelog-title": "Journal des mises à jour",
        "updatelog-about": "À propos",
        "quick-edit": "Modification rapide",
        "redirect-from": "Redirection de",
        "redirect-to": "Redirection à",
        "quick-delete": "Suppression rapide",
        "quick-rename": "Renommage rapide",
        "quick-diff": "Diff rapide",
        "ipe-preference": "Préférences",
        "confirm": "confirmer",
        "cancel": "annuler",
        "close": "fermer",
        "done": "Fait",
        "ok": "OK",
        "notify-success": "Réussi",
        "notify-info": "Info",
        "notify-error": "Erreur",
        "notify-editing-history": "Vous êtes en train de modifier une ancienne version de cette page",
        "editor-title-editRevision": "Réversion",
        "editor-summary-revision": "Modification de",
        "editor-title-editSection": "Partie $1",
        "editor-title-editing": "Modification en cours",
        "editSummary": "Résumé de modification",
        "markAsMinor": "C'est une modification mineure",
        "editor-button-save": "Sauvegarder la modification",
        "editor-confirm-save": "Êtes-vous {{GENDER:|sûr|sûre|sûr(e)}} de vouloir sauvegarder des modifications ?",
        "editor-button-preview": "Afficher la prévisualisation",
        "editor-button-diff": "Voir la différence",
        "window-leave-confirm": "Voulez-vous vraiment quitter cet onglet ? Votre texte ne sera PAS sauvegardé.",
        "notify-no-right": "Aucune permission",
        "editor-no-right": "Vous n'avez pas la permission de modifier cette page. Vous pouvez laisser vos commentaires sur cette page de discussion de cette page.",
        "editor-title-editNotice": "Editnotice",
        "editor-has-editNotice": "Cette page a editnotice!",
        "editor-leave-confirm": "Voulez-vous vraiment quitter l'éditeur? Votre texte ne sera PAS enregistré.",
        "notify-no-change": "Aucune différence.",
        "editor-title-saving": "Publication en cours...",
        "notify-save-success": "Publication effectuée, page en cours d'actualisation...",
        "editor-save-error": "Certaines erreurs se sont produites lors de sauvegarde",
        "redirect-summary": "Redirection rapide",
        "redirect-question-to": "Quelle page que vous voulez rediriger $1 à ?",
        "redirect-question-from": "Quelle page que vous voulez rediriger à $1 ?",
        "redirect-title": "Redirection rapide",
        "notify-redirect-success": "Redirection établie.",
        "notify-redirect-error": "Certaines erreurs se sont produites lors de la création de redirection",
        "delete-reason-default": "N'est plus utilisée",
        "delete-title": "Supprimer rapidement",
        "delete-no-right": "Vous n'avez pas la permission de supprimer cette page.",
        "delete-confirm-title": "Confirmer la suppression",
        "delete-confirm-content": "Voulez-vous vraiment supprimer cette page? Vous pouvez la restaurer dans Special:DeletedPages plus tard",
        "notify-delete-success": "Suppression effectuée",
        "notify-delete-error": "Certaines erreurs se sont produites lors de la suppression de cette page",
        "rename-title": "Renommage rapide d'une page",
        "rename-moveTo": "Choisissez le nouveau nom pour $1",
        "rename-movetalk": "Renommer la page de discussion",
        "rename-movesubpages": "Renommer des sous-pages (jusqu'à 100 pages)",
        "rename-noredirect": "Ne pas laisser la redirection",
        "rename-summary": "Renommage rapide",
        "notify-rename-success": "Renommage effectué",
        "notify-rename-error": "Certaines erreurs se sont produites lors du renommage de cette page",
        "rename-articleexists-title": "Page cible existant",
        "rename-articleexists": "La page avec un nouveau nom de page existe déjà. La fonction de déplacement forcé est en cours de développement, restez au courant.",
        "rename-no-right": "Vous n'avez pas la permission de supprimer cette page.",
        "preference-title": "Préférences de InPageEdit",
        "preference-editor-label": "Paramètres de l'éditeur",
        "preference-outSideClose": "Cliquez en dehors pour fermer l'éditeur",
        "preference-setMinor": "Modification mineure par défaut",
        "preference-summary-label": "Résumé de modification",
        "preference-analysis-label": "Analyses",
        "preference-analysis-view": "Nous collecterons certaines de vos informations non sensibles pour enregistrer l'utilisation du plug-in. Les informations seront utilisées pour améliorer l'expérience. Vous pouvez trouver les informations que nous avons collectées sur $1.",
        "preference-about-label": "À propos de InPageEdit",
        "preference-aboutAndHelp": "À-propos&Aide",
        "preference-updatelog": "Journal des mises à jour",
        "preference-savelocal-label": "Vous pouvez sauvegarder vos préférences de InPageEdit-v2 ici.",
        "preference-savelocal": "Attention : Vos préférences seront enregistrées dans votre navigateur. Cela signifie que vous devez enregistrer à nouveau lorsque vous changez votre appareil.",
        "preference-reset": "réinitialiser",
        "preference-save": "sauvegarder",
        "preference-summary-default": "[InPageEdit] $section Aucun résumé de modification $oldid",
        "preference-savelocal-popup": "Ajoutez le code suivant au-dessus du code qui invoque ce plugin sur votre page JS personnelle :",
        "preference-savelocal-popup-yourjspage": "votre page personnelle de JS",
        "diff-loading": "Chargement de la différence",
        "diff-button-todiffpage": "Basculer à une page de diff",
        "diff-usertalk": "discuter",
        "diff-usercontrib": "contributions",
        "diff-userblock": "bloquer",
        "diff-title": "Différence",
        "diff-edit": "modifier",
        "diff-version": "Révision",
        "diff-prev": "Modification précédente",
        "diff-nextv": "Modification suivante",
        "diff-bytes": "octets",
        "diff-title-original-content": "Texte original",
        "diff-title-your-content": "Votre texte",
        "diff-error": "Échec lors du chargement de la différence.",
        "preview-placeholder": "Chargement de la prévisualisation...",
        "preview-title": "Prévisualisation",
        "preview-error": "Échec lors du chargement de la prévisualisation."
    },
    "hi": {
        "version-notice-title": "स्थापना सफल हुआ",
        "version-notice": "नमस्ते, इनपेजएडिट का इस्तेमाल करने के लिए शुक्रिया! यह प्लग-इन आपकी जानकारी ले सकता है, पर यह इसका व्यवसाय के लिए इस्तेमाल नहीं करेगा, और आपकी कोई कुकी या व्यक्तिगत जानकारी इकठ्ठा नहीं करेगा। आप प्रैफरेंसेज विंडो पर प्लग-इन का विश्लेषण लिंक देख सकते हैं। अगर आप अपनी जानकारी किसी को देना नहीं चाहतें, कृपया इस प्लग-इन को इस्तेमाल न करें। फीडबैक के लिए कृपया गिटहब पर इशू फाइल करें।",
        "version-notice-canary-title": "कैनरी स्थिरता सूचना",
        "version-notice-canary": "कैनरी संस्करण को लेखक/लेखिका ने डिबग और विकसित करने के लिए इस्तेमाल किया है। कोई भी बिना परीक्षण का सुविधा इस संस्करण में आ सकता है, और ठीक से काम नहीं भी कर सकता है। आपके अच्छे अनुभव के लिए, सामान्य संस्करण का इस्तेमाल करने की सिफारिश है।",
        "updatelog-update-success-title": "इनपेजएडिट अपडेट सफल हुआ",
        "updatelog-update-success": "इनपेजएडिट $1 को स्थापित कर दिया जा चुका है।",
        "updatelog-button-versioninfo": "संस्करण की जानकारी देखें",
        "updatelog-after-close": "यह पॉप-अप विंडो अगले अपडेट के आने तक नहीं आएगा। $1 पर सारे प्रकाशनों की जानकारी पाएँ। अगर आपको प्लग-इन में मुश्किलें नज़र आती है, $2।",
        "updatelog-dismiss": "ठीक है",
        "updatelog-file-issue": "इसे गिटहब पर प्रस्तुत करें।",
        "updatelog-title": "अपडेट लॉग",
        "updatelog-about": "बारे में",
        "quick-edit": "क्विक एडिट",
        "redirect-from": "रेडिरेक्ट का साधन",
        "redirect-to": "रेडिरेक्ट का लक्ष्य",
        "quick-delete": "क्विक डिलीट",
        "quick-rename": "क्विक रीनेम",
        "quick-diff": "क्विक डिफ",
        "ipe-preference": "प्रैफरेंसेस",
        "confirm": "पुष्टि करें",
        "cancel": "रद्द करें",
        "close": "बंद करें",
        "done": "हो गया",
        "ok": "ठीक है",
        "notify-success": "सफल हुआ",
        "notify-info": "जानकारी",
        "notify-error": "गलती",
        "notify-editing-history": "आप पृष्ठ के पुराने संस्करण को सम्पादित कर रहे हैं",
        "editor-title-editRevision": "रिवर्शन",
        "editor-summary-revision": "सम्पादना का साधन",
        "editor-title-editSection": "भाग $1",
        "editor-title-editing": "सम्पादित हो रहा है:",
        "editSummary": "सार",
        "markAsMinor": "यह एक छोटी सम्पादना है",
        "editor-button-save": "बदलाव सेव करें",
        "editor-confirm-save": "क्या आप सच में इसे बदलना चाहते हैं?",
        "editor-button-preview": "पूर्वावलोकन",
        "editor-button-diff": "बदलाव देखें",
        "editor-detail-button-toggle": "पृष्ठ का विस्तार",
        "editor-detail-button-templates": "इस्तेमाल किए गए टेम्पलेट",
        "editor-detail-title-templates": "इस पृष्ठ पर इस्तेमाल किए गए टेम्पलेट",
        "editor-detail-button-files": "इस्तेमाल की गई फ़ाइलें",
        "editor-detail-title-files": "इस पृष्ठ पर प्रयुक्त फ़ाइलें",
        "editor-detail-images-quickview": "क्विक व्यू",
        "editor-detail-images-upload": "(री)अपलोड",
        "window-leave-confirm": "क्या आप सच में इस टैब को बंद करना चाहते हैं? आपका टेक्स्ट सेव नहीं होगा।",
        "notify-no-right": "अनुमति नहीं है",
        "editor-no-right": "आपको इस पृष्ठ को सम्पादित करने की अनुमति नहीं है। आप इस पृष्ठ के टॉक/वार्ता पृष्ठ पर कमेंट छोड़ सकते हैं।",
        "editor-title-editNotice": "एडिटनोटिस",
        "editor-has-editNotice": "इस पृष्ठ पर एडिटनोटिस है!",
        "editor-leave-confirm": "क्या आप सच में एडिटर को बंद करना चाहते हैं? आपका टेक्स्ट सेव नहीं होगा।",
        "notify-no-change": "कुछ नहीं बदला।",
        "editor-title-saving": "प्रकाशित हो रहा है...",
        "notify-save-success": "सेव सफल हुआ। पृष्ठ को रिफ्रेश किया जा रहा है...",
        "notify-save-success-noreload": "सफलता से सेव हुआ।",
        "editor-save-error": "सेव करते समय कुछ त्रुटि(याँ) आई।",
        "redirect-summary": "क्विक रेडिरेक्ट",
        "redirect-question-to": "आप $1 को किस पृष्ठ पर रेडिरेक्ट करना चाहते हैं?",
        "redirect-question-from": "आप $1 पर किस पृष्ठ को रेडिरेक्ट करना चाहते हैं?",
        "redirect-title": "क्विक रेडिरेक्ट",
        "notify-redirect-success": "रेडिरेक्ट सफल हुआ।",
        "notify-redirect-error": "रेडिरेक्ट बनाते वक़्त कुछ त्रुटि(याँ) आई।",
        "delete-reason-default": "और इस्तेमाल नहीं होता",
        "delete-title": "क्विक डिलीट",
        "delete-no-right": "आपको इस पृष्ठ को डिलीट करने की अनुमति नहीं है।",
        "delete-reason": "आप $1 को क्यों डिलीट करना चाहते हैं?",
        "delete-confirm-title": "डिलीशन की पुष्टि करें",
        "delete-confirm-content": "क्या आप सच में इस पृष्ठ को डिलीट करना चाहते हैं? आप इसे बाद में [[Special:DeletedPages]] पर रिस्टोर कर सकते हैं।",
        "notify-delete-success": "डिलीशन सफल हुआ",
        "notify-delete-error": "पृष्ठ डिलीट करते वक़्त कुछ त्रुटि(याँ) आई।",
        "rename-title": "क्विक रीनेम पेज",
        "rename-moveTo": "$1 के लिए एक नया नाम चुनें",
        "rename-movetalk": "टॉक पृष्ठ भी रीनेम करना है?",
        "rename-movesubpages": "उप-पृष्ठों को भी मूव करना है (१०० तक)?",
        "rename-noredirect": "रेडिरेक्ट छोड़ देना है।",
        "rename-summary": "क्विक रीनेम",
        "notify-rename-success": "रीनेम सफल रहा",
        "notify-rename-error": "पृष्ठ रीनेम करते समय कुछ त्रुटि(याँ) आई।",
        "rename-articleexists-title": "लक्ष्य पृष्ठ पहले से ही मौजूद है",
        "rename-articleexists": "लक्ष्य पृष्ठ पहले से ही मौजूद है। फाॅर्स-मूव सुविधा विकास में है; हमारे साथ बने रहें।",
        "rename-no-right": "आपको इस पृष्ठ को डिलीट करने की अनुमति नहीं है।",
        "preference-title": "इनपेजएडिट प्रैफरेंसेस",
        "preference-editor-label": "एडिटर सेटिंग्स",
        "preference-outSideClose": "एडिटर बंद करने के लिए बाहर क्लिक करें",
        "preference-setMinor": "डिफ़ॉल्ट से छोटी सम्पादना",
        "preference-summary-label": "सम्पादना सार",
        "preference-editSummary": "<code>$section</code> - को <code>/<!-- -->* सेक्शन हैडर */</code> से बदल दिया जाएगा<br/><code>$oldid</code> - को <code>[<!-- -->[Special:Diff/oldid]] से एडिट</code> से बदल दिया जाएगा",
        "preference-analysis-label": "विश्लेषण",
        "preference-analysis-view": "हम आपके कुछ गैर-व्यक्तिगत जानकारी को प्लग-इन की प्रयोग को रिकॉर्ड करने के लिए इकट्ठा करेंगे। इकट्ठा किए गए जानकारी से हम आपके अनुभव को भतार बनाएँगे। इकट्ठा किया गया डेटा $1 पर है।",
        "preference-about-label": "इनपेजएडिट के बारे में",
        "preference-aboutAndHelp": "जानकारी और सहायता",
        "preference-updatelog": "अपडेट लॉग",
        "preference-savelocal-label": "आप इनपेजएडिट-v२ की प्रैफरेंसेस यहाँ सेट कर सकते हैं।",
        "preference-savelocal": "ध्यान रखें: आपके प्रैफरेंसेज आपके ब्राउज़र पर सेट होंगे। इसका मतलब डिवाइस बदलने पर आपको इन्हें फिर सेट करना होगा।",
        "preference-savelocal-btn": "स्थानीय रूप से सेव करें",
        "preference-reset": "रिसेट",
        "preference-save": "सेव",
        "preference-summary-default": "[InPageEdit] $section कोई सार नहीं दिया गया $oldid",
        "preference-savelocal-popup-title": "स्थानीय रूप से प्रैफरेंसेस सेव करें",
        "preference-savelocal-popup": "अपने व्यक्तिगत JS पृष्ठ पर इस प्लग-इन को सक्षम करने वाले कोड के पहले इस कोड को जोड़ें:",
        "preference-savelocal-popup-notice": "ध्यान रखें: अगर आप इसे स्थानीय रूप से सेव करते हैं, आप इसे कॉन्फ़िगरेशन के लिए इस्तेमाल नहीं कर सकतें। हालाँकि यह गलत सेटिंग को अनदेखा कर देगा, यह आपको यह नहीं बताएगा कि गलती क्या थी।",
        "preference-savelocal-popup-haslocal": "आप प्रैफरेंसेस स्थानीय रूप से सेव कर रहे हैं। आपको अपने प्रैफरेंसेस [[Special:Mypage/common.js|आपके व्यक्तिगत JS पृष्ठ]] या global.js पर संशोदित करना चाहिए।",
        "preference-savelocal-popup-yourjspage": "आपका व्यक्तिगत JS पृष्ठ",
        "preference-translate": "अनुवाद करें",
        "preference-discord": "डिस्कॉर्ड",
        "diff-loading": "बदलाव लोड हो रहा है",
        "diff-button-todiffpage": "डिफ पृष्ठ पर जाएँ",
        "diff-usertalk": "टॉक/वार्ता",
        "diff-usercontrib": "कॉन्ट्रिब्स",
        "diff-userblock": "ब्लॉक",
        "diff-title": "अंतर",
        "diff-edit": "सम्पादित करें",
        "diff-version": "रिवीशन",
        "diff-prev": "पुरानी सम्पादना",
        "diff-nextv": "नई सम्पादना",
        "diff-bytes": "बाइट",
        "diff-title-original-content": "असली टेक्स्ट",
        "diff-title-your-content": "आपका टेक्स्ट",
        "diff-error": "अंतर लोड नहीं हो पाया।",
        "preview-placeholder": "पूर्वावलोकन लोड हो रहा है...",
        "preview-title": "पूर्वावलोकन",
        "preview-error": "पूर्वावलोकन लोड होने में असफल रहा।",
        "editor-edittool-header": "हैडर",
        "editor-edittool-header-text": "हैडर टेक्स्ट",
        "editor-edittool-bold": "बोल्ड",
        "editor-edittool-italic": "इटैलिक",
        "editor-edittool-internal-link": "आंतरिक लिंक",
        "editor-edittool-list-bulleted": "बिना क्रम की सूचि",
        "editor-edittool-list-numbered": "क्रम वाली सूचि",
        "editor-edittool-nowiki": "नोविकी टेक्स्ट",
        "editor-edittool-format-label": "फॉर्मेट",
        "editor-edittool-insert-label": "इन्सर्ट",
        "editor-edittool-custom-label": "कस्टम",
        "editor-reload-page": "सेव करने के बाद पृष्ठ को रीलोड करें",
        "preference-reset-confirm-title": "प्रैफरेंसेस रिस्टोर करें",
        "preference-reset-confirm": "क्या आप सच में अपने प्रैफरेंसेस को डिफ़ॉल्ट में रिस्टोर करना चाहते हैं?",
        "target-exists-title": "लक्ष्य पृष्ठ पहले से ही मौजूद है",
        "target-exists-no-delete": "पृष्ठ [[$1]] पहले से ही मौजूद है। क्या आप इसे देखना चाहेंगे?",
        "target-exists-can-delete": "पृष्ठ [[$1]] पहले से ही मौजूद है। क्या आप इसे देखना चाहेंगे या बस डिलीट कर देंगे?",
        "preference-tab-editor": "एडिटर",
        "preference-tab-plugin": "प्लग-इन",
        "preference-tab-analysis": "विश्लेषण",
        "preference-tab-about": "बारे में",
        "preference-tab-another": "दूसरा",
        "preference-editor-title": "एडिटर सेटिंग्स",
        "preference-plugin-title": "प्लग-इन स्टोर",
        "preference-analysis-title": "विश्लेषण डेटा",
        "preference-another-title": "दूसरे सेटिंग्स",
        "preference-editHobbies-label": "हॉबिट को सम्पादित करें",
        "preference-watchList": "डिफ़ॉल्ट से वाच करें",
        "preference-redLinkQuickEdit": "रेड-लिंकों के बाद एक क्विक-बटन लगा दें",
        "preference-plugin-footer": "आप यहाँ आधिकारिक प्लग-इन चुन सकते हैं। और [$1 InPageEdit-Plugins] अपने कोड से योगदान देने के लिए हम आपका स्वागत करते हैं! कुछ प्लग-इनों को प्रभाव दिखाने के लिए पृष्ठ को रीलोड करना पड़ता है।",
        "preference-analysis-totaluse": "<strong>पूरा इस्तेमाल</strong>: $1 {{PLURAL:$1|बार|बार}}",
        "preference-display-label": "डिस्प्ले सेटिंग्स"
    },
    "ja": {
        "noticeid": "build_2311_notify",
        "noticeid-canary": "canary",
        "version-notice-title": "インスコ完",
        "version-notice": "InPageEditを使ってくれてありがとなんよ。 プラグインはお客様の情報を収集することがあるんよ、でもこれはビジネス目的で使用されるものではないんよ、個人のクッキーやプライバシー情報を収集するものでもないんよ。 プラグインの分析リンクは、環境設定ウィンドウにあるんよ。 お客様の情報を収集したくない場合は、このプラグインの使用を中止した方がいいんよ。 フィードバックはGitHubにして欲しいんよ。",
        "version-notice-canary-title": "Canary不安定ナリ",
        "version-notice-canary": "Canary version is the version used by the author for debugging and development. Any untested experimental features may appear in this version, or even may not work normally at some time. For your experience, it is recommended to switch to the normal version!",
        "updatelog-update-success-title": "InPageEdit 更新完了",
        "updatelog-update-success": "InPageEdit $1 をインスコしたんよ",
        "updatelog-button-versioninfo": "バージョン情報を見る",
        "updatelog-after-close": "This pop-up window will not pop up again until the next version update. Find all release info at $1. If you find issues with the plug-in. $2",
        "updatelog-dismiss": "DISMISS",
        "updatelog-file-issue": "GitHubに送る",
        "updatelog-title": "更新記録",
        "updatelog-about": "アバウト",
        "quick-edit": "高速編集",
        "redirect-from": "転送元",
        "redirect-to": "転送先",
        "quick-delete": "高速削除",
        "quick-rename": "高速移動",
        "quick-diff": "高速差分",
        "ipe-preference": "設定",
        "confirm": "決定",
        "cancel": "キャンセル",
        "close": "閉じる",
        "done": "完",
        "ok": "OK",
        "notify-success": "成功",
        "notify-info": "情報",
        "notify-error": "エラー",
        "notify-editing-history": "古い版を編集中なんよ",
        "editor-title-editRevision": "版",
        "editor-summary-revision": "編集元",
        "editor-title-editSection": "$1番目の見出し",
        "editor-title-editing": "編集中",
        "editSummary": "要約",
        "markAsMinor": "小規模",
        "editor-button-save": "編集を保存",
        "editor-confirm-save": "Are you sure you want to save the changes?",
        "editor-button-preview": "プレビュー",
        "editor-button-diff": "差分",
        "editor-detail-button-toggle": "Page details",
        "editor-detail-button-templates": "使用したテンプレート",
        "editor-detail-title-templates": "このページで使用しているテンプレート",
        "editor-detail-button-files": "使用したファイル",
        "editor-detail-title-files": "このページで使用しているファイル",
        "editor-detail-images-quickview": "Quick View",
        "editor-detail-images-upload": "(Re)upload",
        "window-leave-confirm": "Are you sure you want to leave this tab? Your text will NOT be saved.",
        "notify-no-right": "権限ナシ",
        "editor-no-right": "You do NOT have permission to edit this page. You can leave comments on this page's talk page.",
        "editor-title-editNotice": "編集通知",
        "editor-has-editNotice": "このページには編集通知があるんよ",
        "editor-leave-confirm": "Are you sure you want to leave the editor? Your text will NOT be saved.",
        "notify-no-change": "変更無",
        "editor-title-saving": "投稿中・・・",
        "notify-save-success": "保存完。更新・・・",
        "notify-save-success-noreload": "保存完。",
        "editor-save-error": "Some error(s) occurred while saving",
        "redirect-summary": "即転送",
        "redirect-question-to": "Which page do you want to redirect $1 to?",
        "redirect-question-from": "Which page do you want to redirect to $1?",
        "redirect-title": "即転送",
        "notify-redirect-success": "転送完",
        "notify-redirect-error": "Some error(s) occurred while creating redirect",
        "delete-reason-default": "不用",
        "delete-title": "即削除",
        "delete-no-right": "You do NOT have permission to delete the page.",
        "delete-reason": "Why are you want to deleting $1 ?",
        "delete-confirm-title": "こうかいしませんね？",
        "delete-confirm-content": "Are you sure you want to delete this page? You can restore it later in [[Special:DeletedPages]]",
        "notify-delete-success": "Deletion successful",
        "notify-delete-error": "Some error(s) occurred while deleting the page",
        "rename-title": "Quick Rename Page",
        "rename-moveTo": "Choose a new name for $1",
        "rename-movetalk": "Move talk page",
        "rename-movesubpages": "Move subpage(s) (up to 100)",
        "rename-noredirect": "Don't leave a redirect behind",
        "rename-summary": "Quick rename",
        "notify-rename-success": "Rename successful",
        "notify-rename-error": "Some error(s) occurred while moving the page",
        "rename-articleexists-title": "Target page exist",
        "rename-articleexists": "Page with new page name already exists. The force move function is under development, stay tuned.",
        "rename-no-right": "You do NOT have permission to delete the page.",
        "preference-title": "InPageEdit preferences",
        "preference-editor-label": "Editor settings",
        "preference-outSideClose": "Click out side to close editor",
        "preference-setMinor": "Minor edit as default",
        "preference-summary-label": "Edit summary",
        "preference-editSummary": "<code>$section</code> - を <code>/<!-- -->* 見出し */</code>に変換<br><code>$oldid</code> - を <code>[<!-- -->[Special:Diff/oldid]]から</code>に変換",
        "preference-analysis-label": "解析",
        "preference-analysis-view": "We will collect some of your non-sensitive information to record the usage of the plugin. Information will be used to improve the experience. You can find the information we collected at $1.",
        "preference-about-label": "InPageEditについて",
        "preference-aboutAndHelp": "About&Help",
        "preference-updatelog": "Update Log",
        "preference-savelocal-label": "You can save your InPageEdit-v2 preferences here.",
        "preference-savelocal": "Attention: Your preferences will save in your browser. That means you must save again when you change your device.",
        "preference-savelocal-btn": "Save locally",
        "preference-reset": "リセット",
        "preference-save": "セーブ",
        "preference-summary-default": "[InPageEdit] $section No summary given $oldid",
        "preference-savelocal-popup-title": "Save preferences locally",
        "preference-savelocal-popup": "Add the following code above the code that calls this plugin on your personal JS page:",
        "preference-savelocal-popup-notice": "Attention: If you save the settings locally, you will not be able to use this window for configuration. Although the wrong settings will be ignored, it will not prompt you what went wrong.",
        "preference-savelocal-popup-haslocal": "You are saving your preferences locally. You should modify your preferences at [[Special:Mypage/common.js|your personal JS page]] or global.js.",
        "preference-savelocal-popup-yourjspage": "your personal JS page",
        "preference-translate": "ほんやく",
        "preference-discord": "Discord",
        "diff-loading": "差分読込中",
        "diff-button-todiffpage": "差分に移動",
        "diff-usertalk": "会話",
        "diff-usercontrib": "編集記録",
        "diff-userblock": "ブロック",
        "diff-title": "差分",
        "diff-edit": "編集",
        "diff-version": "版",
        "diff-prev": "Older edit",
        "diff-nextv": "Newer edit",
        "diff-bytes": "バイト",
        "diff-title-original-content": "編集前",
        "diff-title-your-content": "編集後",
        "diff-error": "差分読込に失敗",
        "preview-placeholder": "プレビュー読込中",
        "preview-title": "プレビュー",
        "preview-error": "プレビュー読込に失敗",
        "editor-edittool-header": "見出し",
        "editor-edittool-header-text": "見出しテキスト",
        "editor-edittool-bold": "太",
        "editor-edittool-italic": "斜",
        "editor-edittool-internal-link": "内部リンク",
        "editor-edittool-list-bulleted": "点リスト",
        "editor-edittool-list-numbered": "数リスト",
        "editor-edittool-nowiki": "Nowiki",
        "editor-edittool-format-label": "フォーマット",
        "editor-edittool-insert-label": "挿入",
        "editor-edittool-custom-label": "カスタム",
        "editor-reload-page": "Reload the page after saving",
        "preference-reset-confirm-title": "Restore your preferences",
        "preference-reset-confirm": "Are you sure you want to restore your preferences to default?",
        "target-exists-title": "Target page exists",
        "target-exists-no-delete": "Page [[$1]] already exists. Do you want to view this page?",
        "target-exists-can-delete": "Page [[$1]] already exists. Do you want to view this page or just delete it?",
        "preference-tab-editor": "editor",
        "preference-tab-plugin": "plugin",
        "preference-tab-analysis": "解析",
        "preference-tab-about": "about",
        "preference-tab-another": "他",
        "preference-editor-title": "Editor settings",
        "preference-plugin-title": "Plugin store",
        "preference-analysis-title": "Analysis data",
        "preference-another-title": "Another settings",
        "preference-editHobbies-label": "Edit hobbies",
        "preference-watchList": "Watch by default",
        "preference-redLinkQuickEdit": "Add quick edit buttons after red links",
        "preference-plugin-footer": "You can choose the official plugins here. And welcome to [$1 InPageEdit-Plugins] to contribute your code!",
        "preference-analysis-totaluse": "<strong>総使用回数</strong>: $1回",
        "preference-display-label": "表示設定"
    },
    "nl": {
        "version-notice-title": "Installatie successvol",
        "version-notice": "Hallo, bedankt voor het gebruiken van InPageEdit~です! De plug-in kan je informatie verzamelen. Dit zal niet gebruikt worden voor zakelijke doeleinden en zal geen persoonlijke cookies en privacygevoelige informatie verzamelen. U kan de plug-in's analyse link in het voorkeurvenster vinden. Als U geen informatie verzameld wil hebben, stop alstublieft met het gebruiken van deze plug-in. Voor feedback, dien problemen alstublieft in op GitHub.",
        "version-notice-canary-title": "Canary stabiliteit waarschuwing",
        "version-notice-canary": "Canary versie is de versie gebruikt door de auteur voor debuggen en ontwikkeling. Niet geteste, experimentele kenmerken kunnen voorkomen in deze versie, of kunnen soms niet normaal werken. Voor uw ervaring is het aangeraden om over te schakelen naar de normale versie!",
        "updatelog-update-success-title": "InPageEdit update success",
        "updatelog-update-success": "InPageEdit $1 is geïnstalleerd.",
        "updatelog-button-versioninfo": "Bekijk versie informatie",
        "updatelog-after-close": "Dit pop-up venster zal niet meer verschijnen tot de volgende versie-update. Vind alle release-informatie bij $1. Als u problemen ondervindt met de plug-in. $2",
        "updatelog-dismiss": "AFWIJZEN",
        "updatelog-file-issue": "Dien het in op GitHub.",
        "updatelog-title": "Update Log",
        "updatelog-about": "Over",
        "quick-edit": "Snelle Bewerking",
        "redirect-from": "Verwijs van",
        "redirect-to": "Verwijs naar",
        "quick-delete": "Snel verwijderen",
        "quick-rename": "Snel hernoemen",
        "quick-diff": "Snelle Diff",
        "ipe-preference": "Voorkeuren",
        "confirm": "bevestigen",
        "cancel": "annuleren",
        "close": "sluiten",
        "done": "Klaar",
        "ok": "OK",
        "notify-success": "Succesvol",
        "notify-info": "Info",
        "notify-error": "Fout",
        "notify-editing-history": "U bewerkt een oudere versie van deze pagina",
        "editor-title-editRevision": "Herziening",
        "editor-summary-revision": "Bewerking van",
        "editor-title-editSection": "Deel $1",
        "editor-title-editing": "Aan het bewerken",
        "editSummary": "Samenvatting",
        "markAsMinor": "Dit is een kleine bewerking",
        "editor-button-save": "Veranderingen opslaan",
        "editor-confirm-save": "Weet u zeker dat u de verandering wilt opslaan?",
        "editor-button-preview": "Toon preview",
        "editor-button-diff": "Toon veranderingen",
        "window-leave-confirm": "Weet u zeker dat u dit tabblad wilt verlaten? Uw tekst zal NIET opgeslagen worden.",
        "notify-no-right": "Geen toestemming",
        "editor-no-right": "U heeft GEEN toestemming om deze pagina te bewerking. U kan commentaar achterlaten op de discussie-pagina van deze pagina.",
        "editor-title-editNotice": "Bewerkingsbericht",
        "editor-has-editNotice": "Deze pagina heeft een bewerkingsbericht!",
        "editor-leave-confirm": "Weet u zeker dat u de bewerker wilt verlaten? Uw tekst zal NIET opgeslagen worden.",
        "notify-no-change": "Niets is verandert",
        "editor-title-saving": "Publiceren...",
        "notify-save-success": "Opslaan succesvol, pagina wordt herladen...",
        "editor-save-error": "Er zijn enkele fout(en) opgetreden tijdens het opslaan",
        "redirect-summary": "Snel verwijzen",
        "redirect-question-to": "Welke pagina wilt u $1 naar verwijzen?",
        "redirect-question-from": "Welke pagina wilt u verwijzen naar $1?",
        "redirect-title": "Snel Verwijzen",
        "notify-redirect-success": "Verwijzing succesvol.",
        "notify-redirect-error": "Er zijn enkele fout(en) opgetreden tijdens het maken van de verwijzing.",
        "delete-reason-default": "Niet langer gebruikt",
        "delete-title": "Snel Verwijderen",
        "delete-no-right": "U heeft GEEN toestemming om deze pagina te verwijderen.",
        "delete-confirm-title": "Verwijderen bevestigen",
        "delete-confirm-content": "Weet u zeker dat u deze pagina wilt verwijderen? You can restore it later in Special:DeletedPages",
        "notify-delete-success": "Succesvol verwijderd",
        "notify-delete-error": "Er zijn enkele fout(en) opgetreden tijdens het verwijderen van de pagina.",
        "rename-title": "Snel Pagina Hernoemen",
        "rename-moveTo": "Kies een nieuwe naam voor $1",
        "rename-movetalk": "Discussie-pagina verplaatsen",
        "rename-movesubpages": "Sub-pagina('s) verplaatsen (up to 100)",
        "rename-noredirect": "Laat geen verwijzing achter",
        "rename-summary": "Snel hernoemen",
        "notify-rename-success": "Hernoemen succesvol",
        "notify-rename-error": "Er zijn enkele fout(en) opgetreden tijdens het verplaatsen van de pagina.",
        "rename-articleexists-title": "Doelpagina bestaat",
        "rename-articleexists": "Er bestaat al een pagina met deze naam. De \\"verplaatsing forceren\\"-functie is in ontwikkeling, blijf op de hoogte.",
        "rename-no-right": "U hebt GEEN toestemming om de pagina te verwijderen.",
        "preference-title": "InPageEdit voorkeuren",
        "preference-editor-label": "Bewerker instellingen",
        "preference-outSideClose": "Klik buiten om de bewerker te sluiten",
        "preference-setMinor": "Kleine bewerking als standaard",
        "preference-summary-label": "Bewerk samenvatting",
        "preference-analysis-label": "Analyse",
        "preference-analysis-view": "We zullen een deel van uw niet-gevoelige informatie verzamelen om het gebruik van de plug-in vast te leggen. Informatie zal worden gebruikt om de ervaring te verbeteren. U kunt de informatie die we hebben verzameld vinden bij $1.",
        "preference-about-label": "Over InPageEdit",
        "preference-aboutAndHelp": "Over&Help",
        "preference-updatelog": "Update Log",
        "preference-savelocal-label": "U kunt uw InPageEdit-v2 voorkeuren hier opslaan.",
        "preference-savelocal": "Waarschuwing: Uw voorkeuren zullen opgeslagen worden in uw browser. Dat betekent dat u ze opnieuw moet opslaan wanneer u uw toestel wijzigt.",
        "preference-reset": "opnieuw instellen",
        "preference-save": "bewaren",
        "preference-summary-default": "[InPageEdit] $section Geen samenvatting gegeven $oldid",
        "preference-savelocal-popup": "Voeg de volgende code toe boven de code die deze plug-in oproept op uw persoonlijke JS-pagina:",
        "preference-savelocal-popup-yourjspage": "Je persoonlijke JS-pagina.",
        "diff-loading": "Verschil aan het laden",
        "diff-button-todiffpage": "Spring naar diff-pagina",
        "diff-usertalk": "discussie",
        "diff-usercontrib": "bijdragen",
        "diff-userblock": "blokkeren",
        "diff-title": "Verschil",
        "diff-edit": "bewerken",
        "diff-version": "Herziening",
        "diff-prev": "Oudere bewerking",
        "diff-nextv": "Nieuwere bewerking",
        "diff-bytes": "bytes",
        "diff-title-original-content": "Originele tekst",
        "diff-title-your-content": "Uw tekst",
        "diff-error": "Kan het verschil niet laden",
        "preview-placeholder": "Preview aan het laden...",
        "preview-title": "Preview",
        "preview-error": "Kan het preview niet laden."
    },
    "pl": {
        "quick-edit": "Szybka edycja",
        "redirect-from": "Przekieruj z",
        "redirect-to": "Przekieruj do",
        "quick-delete": "Szybkie usuwanie",
        "quick-rename": "Szybka zmiana nazwy",
        "quick-diff": "Quick Diff",
        "ipe-preference": "Preferencje",
        "confirm": "potwierdź",
        "cancel": "anuluj",
        "done": "Gotowe",
        "ok": "OK",
        "notify-success": "Sukces",
        "notify-info": "Informacje",
        "notify-error": "Błąd",
        "notify-editing-history": "Edytujesz starją wersję tej strony",
        "editor-title-editRevision": "Wersja",
        "editor-summary-revision": "Edytuj z",
        "editor-title-editSection": "Część $1",
        "editor-title-editing": "Edycja",
        "editSummary": "Opis zmian",
        "markAsMinor": "To jest drobna edycja",
        "editor-button-save": "Zapisz zmiany",
        "editor-confirm-save": "Czy na pewno chcesz zapisać zmiany?",
        "editor-button-preview": "Pokaż podgląd",
        "editor-button-diff": "Pokaż zmiany",
        "window-leave-confirm": "Czy na pewno chcesz opuścić tę zakładkę? Tekst NIE zostanie zapisany.",
        "notify-no-right": "Brak uprawnień",
        "editor-no-right": "NIE posiadasz uprawnień do edycji tej strony. Możesz zostawić uwagi na jej stronie dyskusji.",
        "editor-title-editNotice": "Komunikaty",
        "editor-has-editNotice": "Ta strona posiada komunikaty!",
        "editor-leave-confirm": "Czy na pewno chcesz opuścić edytor? Tekst NIE zostanie zapisany.",
        "notify-no-change": "Nic nie zmieniono.",
        "editor-title-saving": "Publikowanie…",
        "notify-save-success": "Pomyślnie zapisano, odświeżanie…",
        "editor-save-error": "Podczas zapiswania wystąpiły błędy",
        "redirect-summary": "Szybkie przekierowanie",
        "redirect-question-to": "Do jakiej strony chcesz przekierować „$1”?",
        "redirect-question-from": "Jaka strona ma kierować do „$1”?",
        "redirect-title": "Szybkie przekierowanie",
        "notify-redirect-success": "Przekierowano pomyślnie",
        "notify-redirect-error": "Podczas przekierowywania wystąpiły błędy",
        "delete-reason-default": "Nieużywane",
        "delete-title": "Szybkie usuwanie",
        "delete-no-right": "NIE posiadasz uprawnień do usuwania tej strony.",
        "delete-confirm-title": "Potwierdź usuwanie",
        "delete-confirm-content": "Czy na pewno chcesz usunąć tę stronę? Możesz ją później przywrócić na Specjalna:Odtwórz",
        "notify-delete-success": "Usunięto pomyślnie",
        "notify-delete-error": "Podczas usuwania wystąpiły błędy",
        "rename-title": "Szybka zmiana nazwy strony",
        "rename-moveTo": "Wybierz nową nazwę dla „$1”",
        "rename-movetalk": "Przenieś stronę edyskusji",
        "rename-movesubpages": "Przenieś podstrony (do 100)",
        "rename-noredirect": "Nie pozostawiaj przekierowania pod dotychczasowym tytułem",
        "rename-summary": "Szybka zmiana nazwy",
        "notify-rename-success": "Zmieniono nazwę pomyślnie",
        "notify-rename-error": "Podczas zmieniania nazwy wystąpiły błędy",
        "rename-articleexists-title": "Strona docelowa istnieje",
        "rename-articleexists": "Pod nowym tytułem istnieje już inne strona. Funkcja wymuszonego przenoszenia jest ciągle tworzona, prosimy o cierpliwość.",
        "rename-no-right": "NIE posiadasz uprawnień do usuwania strony.",
        "preference-title": "Preferencje InPageEdita",
        "preference-editor-label": "Ustawienia edytora",
        "preference-outSideClose": "Kliknij z boku aby zamknąć edytor",
        "preference-setMinor": "Domyślnie oznaczaj edycje jako drobne",
        "preference-summary-label": "Opis zmian",
        "preference-analysis-label": "Telemetria",
        "preference-analysis-view": "Zbieramy niewielkie ilości niewrażliwych informacji, aby badać użycie wtyczki. Informacje te zostaną wykorzystane do poprawienia doświadczenia. Możesz znaleźć informacje które zbieramy na $1",
        "preference-about-label": "O InPageEdit",
        "preference-aboutAndHelp": "O nas & pomoc",
        "preference-updatelog": "Dziennik zmian",
        "preference-savelocal-label": "Tutaj możesz zapisać swoje preferencje InPageEdit-v2.",
        "preference-savelocal": "Uwaga: Preferencje zostaną zapisane w przeglądarce. Oznacza to, że musisz zapisać je ponownie po zmianie urządzenia.",
        "preference-reset": "resetuj",
        "preference-save": "zapisz",
        "preference-summary-default": "[InPageEdit] $section Nie podano opisu zmian $oldid",
        "preference-savelocal-popup": "Dodaj poniższy kod nad kodem wywołującym wtyczkę w swoim osobistym JS-ie:",
        "preference-savelocal-popup-yourjspage": "swojej osobistej stronie JS",
        "diff-loading": "Ładowanie różnicy",
        "diff-button-todiffpage": "Przejdź do strony różnicy",
        "diff-usertalk": "dyskusja",
        "diff-usercontrib": "wkład",
        "diff-userblock": "zablokuj",
        "diff-title": "Różnica",
        "diff-edit": "edytuj",
        "diff-version": "Wersja",
        "diff-prev": "Poprzednia",
        "diff-nextv": "Następna",
        "diff-bytes": "bajtów",
        "diff-title-original-content": "Oryginalny tekst",
        "diff-title-your-content": "Twój tekst",
        "diff-error": "Ładowanie różnicy nie powiodło się.",
        "preview-placeholder": "Ładowanie podglądu…",
        "preview-title": "Podgląd",
        "preview-error": "Ładowanie podglądu nie powiodło się."
    },
    "pt-br": {
        "noticeid": "build_2311_notify",
        "noticeid-canary": "canary",
        "version-notice-title": "Instalação com sucesso",
        "version-notice": "Olá, obrigado por usar o InPageEdit ~ で す! O plug-in pode coletar suas informações, que não serão usadas para fins comerciais, e não coletará nenhum de seus cookies pessoais e informações de privacidade. Você pode encontrar o link de análise do plug-in na janela de preferências. Se você não deseja que nenhuma de suas informações seja coletada, pare de usar este plug-in. Para comentários, registre os problemas no GitHub.",
        "version-notice-canary-title": "Aviso de estabilidade instável",
        "version-notice-canary": "A versão instável é a versão usada pelo autor para depuração e desenvolvimento. Qualquer recurso experimental não testado pode aparecer nesta versão, ou mesmo pode não funcionar normalmente em algum momento. Para sua experiência, é recomendável mudar para a versão normal!",
        "updatelog-update-success-title": "Atualização do InPageEdit com sucesso",
        "updatelog-update-success": "InPageEdit $1 foi instalado.",
        "updatelog-button-versioninfo": "Ver informações da versão",
        "updatelog-after-close": "Esta janela pop-up não aparecerá novamente até a próxima atualização da versão. Encontre todas as informações de lançamento em $1. Se você encontrar problemas com o plug-in. $2",
        "updatelog-dismiss": "DISPENSAR",
        "updatelog-url": "https://common.wjghj.cn/wiki/InPageEdit-v2/Version_info",
        "updatelog-file-issue": "Envie-o no GitHub.",
        "updatelog-title": "Registro de atualização",
        "updatelog-about": "Sobre",
        "quick-edit": "Edição rápida",
        "redirect-from": "Redirecionar de",
        "redirect-to": "Redirecionar para",
        "quick-delete": "Excluir rapidamente",
        "quick-rename": "Renomear rapidamente",
        "quick-diff": "Diff rapidamente",
        "ipe-preference": "Preferências",
        "confirm": "confirmar",
        "cancel": "cancelar",
        "close": "fechar",
        "done": "Feito",
        "ok": "OK",
        "notify-success": "Sucesso",
        "notify-info": "Informação",
        "notify-error": "Erro",
        "notify-editing-history": "Você está editando a versão antiga desta página",
        "editor-title-editRevision": "Reversão",
        "editor-summary-revision": "Editar de",
        "editor-title-editSection": "Parte de $1",
        "editor-title-editing": "Editando",
        "editSummary": "Resumo",
        "markAsMinor": "Esta é uma edição menor",
        "editor-button-save": "Salvar mudanças",
        "editor-confirm-save": "Tem certeza que deseja salvar as mudanças?",
        "editor-button-preview": "Mostrar pré-visualização",
        "editor-button-diff": "Mostrar mudanças",
        "editor-detail-button-toggle": "Detalhes da página",
        "editor-detail-button-templates": "Predefinições usadas",
        "editor-detail-title-templates": "Predefinições usadas nesta página",
        "editor-detail-button-files": "Arquivos usados",
        "editor-detail-title-files": "Arquivos usados nesta página",
        "editor-detail-images-quickview": "Visualização rápida",
        "editor-detail-images-upload": "Re-carregamento",
        "window-leave-confirm": "Tem certeza de que deseja sair desta guia? Seu texto NÃO será salvo.",
        "notify-no-right": "Sem permissão",
        "editor-no-right": "Você NÃO tem permissão para editar esta página. Você pode deixar comentários na página de discussão desta página.",
        "editor-title-editNotice": "Editnotice",
        "editor-has-editNotice": "Esta página possui nota de edição, clique aqui.",
        "editor-leave-confirm": "Tem certeza de que deseja sair do editor? Seu texto NÃO será salvo.",
        "notify-no-change": "Nada mudou.",
        "editor-title-saving": "Publicando...",
        "notify-save-success": "Salvo com sucesso. Atualizando a página...",
        "notify-save-success-noreload": "Salvo com sucesso.",
        "editor-save-error": "Alguns erros ocorreram ao salvar",
        "redirect-summary": "Redirecionamento rápido",
        "redirect-question-to": "Para qual página você deseja redirecionar $1?",
        "redirect-question-from": "Qual página você deseja redirecionar para $1?",
        "redirect-title": "Redirecionamento rápido",
        "notify-redirect-success": "Redirecionamento bem-sucedido.",
        "notify-redirect-error": "Ocorreram alguns erros ao criar o redirecionamento",
        "delete-reason-default": "Não mais usado",
        "delete-title": "Excluir rapidamente",
        "delete-no-right": "Você NÃO tem permissão para excluir a página.",
        "delete-reason": "Por que você deseja excluir esta página?",
        "delete-confirm-title": "Confirmar exclusão",
        "delete-confirm-content": "Tem certeza que deseja deletar esta página? Você pode restaurá-lo mais tarde em Special:DeletedPages",
        "notify-delete-success": "Exclusão bem-sucedida",
        "notify-delete-error": "Ocorreram alguns erros ao excluir a página",
        "rename-title": "Renomeação rápida de página",
        "rename-moveTo": "Escolha um novo nome para $1",
        "rename-movetalk": "Mover página de discussão",
        "rename-movesubpages": "Mover subpágina(s) (até 100)",
        "rename-noredirect": "Não deixe um redirecionamento para trás",
        "rename-summary": "Renomear rapidamente",
        "notify-rename-success": "Renomear com sucesso",
        "notify-rename-error": "Ocorreram alguns erros ao mover a página",
        "rename-articleexists-title": "Página de destino existe",
        "rename-articleexists": "Já existe uma página com um novo nome de página. A função de movimento de força está em desenvolvimento, fique atento.",
        "rename-no-right": "Você NÃO tem permissão para excluir a página.",
        "preference-title": "Preferências do InPageEdit",
        "preference-editor-label": "Configurações do editor",
        "preference-outSideClose": "Clique fora para fechar o editor",
        "preference-setMinor": "Edição menor como padrão",
        "preference-summary-label": "Editar resumo",
        "preference-editSummary": "$1 - será substituído por $2%br%$3 - será substituído por $4",
        "preference-analysis-label": "Análise",
        "preference-analysis-view": "Vamos coletar algumas de suas informações não confidenciais para registrar o uso do plugin. As informações serão usadas para melhorar a experiência. Você pode encontrar as informações que coletamos em $1.",
        "preference-about-label": "Sobre InPageEdit",
        "preference-aboutAndHelp": "Sobre e ajuda",
        "preference-updatelog": "Registro de atualização",
        "preference-savelocal-label": "Você pode salvar suas preferências do InPageEdit-v2 preferences aqui.",
        "preference-savelocal": "Atenção: Suas preferências serão salvas em seu navegador. Isso significa que você deve salvar novamente quando alterar o dispositivo.",
        "preference-savelocal-btn": "Forçar salvamento",
        "preference-reset": "redefinir",
        "preference-save": "salvar",
        "preference-summary-default": "[InPageEdit] Nenhum resumo fornecido $section$oldid",
        "preference-savelocal-popup-title": "Forçar preferências de salvamento",
        "preference-savelocal-popup-notrecommended": "NÃO RECOMENDADO",
        "preference-savelocal-popup": "Adicione o seguinte código acima do código que chama este plug-in em sua página JS pessoal:",
        "preference-savelocal-popup-notice": "Atenção: Embora isso permita que você mantenha as configurações ao alterar os dispositivos. Mas o plug-in não tem função de correção de erro de parâmetro. Você deve confirmar se a configuração json está correta",
        "preference-savelocal-popup-haslocal": "Você é forçado a salvar suas preferências. Você deve modificar suas preferências em $1 ou global.js.",
        "preference-savelocal-popup-yourjspage": "sua página JS pessoal",
        "diff-loading": "Carregando diferença",
        "diff-button-todiffpage": "Ir para a página de diferenças",
        "diff-usertalk": "discussão",
        "diff-usercontrib": "contribs",
        "diff-userblock": "bloquear",
        "diff-title": "Diferença",
        "diff-edit": "editar",
        "diff-version": "Revisão",
        "diff-prev": "Edição anterior",
        "diff-nextv": "Edição mais recente",
        "diff-bytes": "bytes",
        "diff-title-original-content": "Texto original",
        "diff-title-your-content": "Seu texto",
        "diff-error": "Falha ao carregar a diferença.",
        "preview-placeholder": "Carregando a pré-visualização...",
        "preview-title": "Pré-visualização",
        "preview-error": "Falha ao carregar a pré-visualização.",
        "editor-edittool-header": "Cabeçalho",
        "editor-edittool-header-text": "Texto do cabeçalho",
        "editor-edittool-bold": "Negrito",
        "editor-edittool-italic": "Itálico",
        "editor-edittool-internal-link": "Link interno",
        "editor-edittool-list-bulleted": "Lista não ordenada",
        "editor-edittool-list-numbered": "Lista ordenada",
        "editor-edittool-nowiki": "Nowiki text",
        "editor-edittool-format-label": "Formato",
        "editor-edittool-insert-label": "Inserir",
        "editor-edittool-custom-label": "Personalizar",
        "editor-reload-page": "Recarregue a página após salvar",
        "preference-reset-confirm-title": "Restaurar suas preferências",
        "preference-reset-confirm": "Tem certeza de que deseja restaurar suas preferências para o padrão?",
        "preference-translate": "traduzir",
        "preference-discord": "Discord",
        "target-exists-title": "A página de destino existe",
        "target-exists-no-delete": "A página [[$1]] já existe. Você quer ver esta página?",
        "target-exists-can-delete": "A página [[$1]] já existe. Quer ver esta página ou apenas apagá-la?",
        "preference-tab-editor": "editor",
        "preference-tab-plugin": "plugin",
        "preference-tab-analysis": "analysis",
        "preference-tab-about": "sobre",
        "preference-tab-another": "outro",
        "preference-editor-title": "Configurações do editor",
        "preference-plugin-title": "Loja de plugins",
        "preference-analysis-title": "Dados de análise",
        "preference-another-title": "Outras configuraçãos",
        "preference-editHobbies-label": "Editar hobits",
        "preference-watchList": "Vigiar por padrão",
        "preference-redLinkQuickEdit": "Adicionar botões de edição rápida após links vermelhos",
        "preference-plugin-footer": "Você pode escolher os plug-ins oficiais aqui. E bem vindo no [$1 InPageEdit-Plugins] para contribuir com seu código! Alguns plug-ins precisam recarregar a página para fazer efeito.",
        "preference-analysis-totaluse": "<strong>Total use</strong>: $1 {{PLURAL:$1|veze|vezes}}",
        "preference-display-label": "Configurações do visor"
    },
    "zh-hans": {
        "quick-edit": "快速编辑",
        "redirect-from": "重定向至此",
        "redirect-to": "重定向到",
        "quick-delete": "快速删除",
        "quick-rename": "快速重命名",
        "ipe-preference": "偏好设置",
        "confirm": "确定",
        "cancel": "取消",
        "done": "完成",
        "ok": "好的",
        "notify-success": "成功",
        "notify-info": "注意",
        "notify-error": "警告",
        "notify-editing-history": "您正在编辑此页面的历史版本",
        "editor-title-editRevision": "历史版本",
        "editor-summary-revision": "编辑自",
        "editor-title-editSection": "第$1部分",
        "editor-title-editing": "正在编辑",
        "editor-new-section": "主题 (必填)",
        "editor-new-section-missing-content": "新增段落的主题或内容不能为空。",
        "editSummary": "编辑摘要",
        "markAsMinor": "标记为小编辑",
        "watchThisPage": "监视此页面",
        "unlockWatchList": "点击解锁该选项，覆盖预设的监视行为",
        "editor-button-save": "保存更改",
        "editor-confirm-save": "确定要保存编辑吗？",
        "editor-button-preview": "显示预览",
        "editor-button-diff": "比较差异",
        "window-leave-confirm": "确定离开页面吗？您的编辑不会被保存。",
        "notify-no-right": "权限不足",
        "editor-no-right": "您没有编辑此页面的权限，您可以在讨论页提交修改建议。",
        "editor-title-editNotice": "编辑提示",
        "editor-has-editNotice": "当前页面有编辑提示！",
        "editor-leave-confirm": "您输入的内容尚未保存，确定关闭窗口吗？",
        "notify-no-change": "没有进行任何改动",
        "editor-title-saving": "正在保存……",
        "notify-save-success": "保存成功，正在刷新页面……",
        "notify-save-success-noreload": "保存成功！",
        "editor-save-error": "保存时出现错误",
        "redirect-summary": "快速重定向到",
        "redirect-question-to": "要将$1重定向到哪个页面？",
        "redirect-question-from": "将哪个页面重定向到$1？",
        "redirect-question-fragment": "要重定向到页面的哪个章节？（可选）",
        "redirect-title": "快速重定向",
        "notify-redirect-success": "创建重定向成功！",
        "notify-redirect-error": "创建重定向时出现错误。",
        "delete-reason-default": "不再需要的页面",
        "delete-title": "快速删除",
        "delete-no-right": "您没有删除页面（delete）的权限。",
        "delete-confirm-title": "确认删除",
        "delete-confirm-content": "确定要删除这个页面吗？之后您可以从已删除页面中恢复。",
        "notify-delete-success": "成功删除页面",
        "notify-delete-error": "删除页面时发生错误",
        "rename-title": "快速重命名",
        "rename-moveTo": "您要将$1重命名为什么？",
        "rename-movetalk": "同时移动讨论页",
        "rename-movesubpages": "同时移动子页面（最多100个）",
        "rename-noredirect": "不留重定向",
        "rename-summary": "快速重命名",
        "notify-rename-success": "重命名成功，正在刷新页面……",
        "notify-rename-error": "重命名时遇到错误",
        "rename-articleexists-title": "目标页面已存在",
        "rename-articleexists": "以新页面名命名的页面存在内容，强制移动页面的功能正在开发中，敬请期待。",
        "rename-articleexists-reason": "将页面[[$1]]移动至此。",
        "rename-no-right": "您没有移动页面（move）的权限。",
        "preference-title": "InPageEdit偏好设置",
        "preference-editor-label": "编辑器设置",
        "preference-outSideClose": "点击编辑器外侧关闭",
        "preference-setMinor": "预设编辑为小编辑",
        "preference-summary-label": "编辑摘要",
        "preference-editSummary": "<code>$section</code> - 将会被替换为<code>/<!-- -->* 段落名字 */</code><br><code>$oldid</code> - 将会被替换为<code>编辑自[<!-- -->[Special:Diff/oldid]]</code>",
        "preference-analysis-label": "数据收集",
        "preference-analysis-view": "此插件会收集您的一些非敏感信息，用于记录插件的使用情况以便研究发展的方向，您可以在$1找到此插件收集的信息。",
        "preference-about-label": "关于InPageEdit",
        "preference-aboutAndHelp": "关于&帮助",
        "preference-updatelog": "更新日志",
        "preference-savelocal-label": "您可以在这里保存InPageEdit-v2的个人偏好设定。",
        "preference-savelocal": "注意：这些设置保存在您的浏览器本地，这意味着你必须在不同的设备上分别保存设置。",
        "preference-savelocal-btn": "永久保存",
        "preference-reset": "重置",
        "preference-save": "保存",
        "preference-summary-default": "[InPageEdit] $section 没有编辑摘要 $oldid",
        "preference-savelocal-popup-title": "参数设置另存为",
        "preference-savelocal-popup": "在您个人JS页调用本插件的代码的上方添加以下代码：",
        "preference-savelocal-popup-notice": "注意：如果将设置保存在本地，则将无法使用此窗口进行配置。尽管错误的设置将被忽略，但不会提示您哪里出了问题。",
        "preference-savelocal-popup-haslocal": "您使用个人JS将偏好设置保存在本地，您应当在[[Special:Mypage/common.js|您的个人JS页面]]或者global.js修改您的偏好设置。",
        "preference-savelocal-popup-yourjspage": "您的个人JS页面",
        "preference-translate": "改进翻译",
        "preference-discord": "Discord",
        "diff-loading": "正在加载差异……",
        "diff-button-todiffpage": "转到原版比较页面",
        "diff-usertalk": "讨论",
        "diff-usercontrib": "贡献",
        "diff-userblock": "封禁",
        "diff-title": "比较差异",
        "diff-edit": "编辑",
        "diff-version": "版本",
        "diff-prev": "上一版本",
        "diff-nextv": "下一版本",
        "diff-bytes": "字节",
        "diff-title-original-content": "原始内容",
        "diff-title-your-content": "您的编辑",
        "diff-error": "加载差异时遇到问题",
        "preview-placeholder": "正在加载预览……",
        "preview-title": "预览",
        "preview-error": "加载预览时出现错误。",
        "quick-diff": "快速差异",
        "version-notice-title": "安装成功",
        "version-notice": "您好，感谢您使用InPageEdit！此插件可能会收集您的使用信息，但这些信息不会用于商业目的，也不会收集您的个人Cookie和隐私信息。您可以在设定中查看插件收集的信息统计链接。如果您不想让此插件收集您的任何信息，请停止使用此插件。如需反馈，请在GitHub中提交issue。",
        "version-notice-canary-title": "Canary版本稳定性警告",
        "version-notice-canary": "Canary版本是作者用于测试与开发的版本。未经测试的实验功能可能会出现在此版本中，甚至某些时候可能无法使用。为获得更好的体验，建议您切换至正常版本！",
        "updatelog-update-success-title": "InPageEdit升级成功",
        "updatelog-update-success": "InPageEdit已升级到$1",
        "updatelog-button-versioninfo": "查看更新",
        "updatelog-after-close": "在下一个版本更新之前，此窗口将不再弹出，您可以在$1找到更新信息。如果您发现了任何问题，$2",
        "updatelog-dismiss": "不再显示",
        "updatelog-file-issue": "请提交至GitHub。",
        "updatelog-title": "更新日志",
        "updatelog-about": "关于",
        "close": "关闭",
        "editor-detail-button-toggle": "页面详情",
        "editor-detail-button-templates": "使用的模板",
        "editor-detail-title-templates": "本页面引用的模板",
        "editor-detail-button-files": "使用的文件",
        "editor-detail-title-files": "本页面使用的文件",
        "editor-detail-images-quickview": "快速查看",
        "editor-detail-images-upload": "(重新)上传",
        "delete-reason": "您为什么要删除$1？",
        "editor-edittool-header": "标题",
        "editor-edittool-header-text": "标题文字",
        "editor-edittool-bold": "粗体文字",
        "editor-edittool-italic": "斜体文字",
        "editor-edittool-internal-link": "内部链接",
        "editor-edittool-list-bulleted": "无序列表",
        "editor-edittool-list-numbered": "有序列表",
        "editor-edittool-nowiki": "去格式化",
        "editor-edittool-format-label": "格式",
        "editor-edittool-insert-label": "插入",
        "editor-edittool-custom-label": "自定",
        "editor-reload-page": "保存后刷新页面",
        "preference-reset-confirm-title": "还原偏好设置",
        "preference-reset-confirm": "确定要将您的偏好设置还原为默认状态吗？",
        "target-exists-title": "目标页面已存在",
        "target-exists-no-delete": "页面 [[$1]] 已存在，你想查看此页面吗？",
        "target-exists-can-delete": "页面 [[$1]] 已存在，您可以查看或者删除该页面",
        "preference-tab-editor": "编辑器",
        "preference-tab-plugin": "插件",
        "preference-tab-analysis": "数据分析",
        "preference-tab-about": "关于",
        "preference-tab-another": "其他",
        "preference-editor-title": "编辑器设定",
        "preference-plugin-title": "插件商店",
        "preference-analysis-title": "数据分析",
        "preference-another-title": "其他设定",
        "preference-editHobbies-label": "编辑习惯",
        "preference-watchList-label": "监视设置",
        "preference-watchList-nochange": "不改变监视状态",
        "preference-watchList-preferences": "使用[[Special:Preferences]]中的值",
        "preference-watchList-unwatch": "移除监视",
        "preference-watchList-watch": "总是监视",
        "preference-watchList": "预设进行监视",
        "preference-redLinkQuickEdit": "在红链后添加快速编辑按钮",
        "preference-plugin-footer": "你可以在这里选用官方插件，欢迎前往[$1 InPageEdit-Plugins]贡献你的代码！一些插件需要重新加载页面才能生效。",
        "preference-analysis-totaluse": "<strong>使用总次数</strong>：$1 次",
        "preference-display-label": "显示设置",
        "links-here": "链入页面",
        "links-here-title": "链接至“<u>$1</u>”的页面",
        "links-here-isRedirect": "重定向页面",
        "links-here-no-page": "没有页面链接到“<strong>$1</strong>” QAQ",
        "links-here-not-exist": "注意：页面“<strong>$1</strong>”似乎不存在",
        "preference-noConfirmEdit": "提交编辑前无需再次点击确认"
    },
    "zh-hant": {
        "quick-edit": "快速編輯",
        "redirect-from": "重新導向至此",
        "redirect-to": "重新導向到",
        "quick-delete": "快速刪除",
        "quick-rename": "快速移動",
        "ipe-preference": "偏好設定",
        "confirm": "確認",
        "cancel": "取消",
        "done": "完成",
        "ok": "好的",
        "notify-success": "成功",
        "notify-info": "注意",
        "notify-error": "警告",
        "notify-editing-history": "您正在編輯本頁面的舊版本",
        "editor-title-editRevision": "舊版本",
        "editor-summary-revision": "編輯自",
        "editor-title-editSection": "第$1部分",
        "editor-title-editing": "正在編輯",
        "editSummary": "編輯摘要",
        "markAsMinor": "標記為次要修訂",
        "editor-button-save": "儲存變更",
        "editor-confirm-save": "確定要儲存變更嗎？",
        "editor-button-preview": "顯示預覽",
        "editor-button-diff": "比較差異",
        "window-leave-confirm": "確定離開頁面嗎？您的變更不會被儲存。",
        "notify-no-right": "權限不足",
        "editor-no-right": "您沒有編輯此頁面的權限，您可以在討論頁提交修改建議。",
        "editor-title-editNotice": "編輯提示",
        "editor-has-editNotice": "當前頁面有編輯提示！",
        "editor-leave-confirm": "您輸入的內容尚未儲存，確定關閉視窗嗎？",
        "notify-no-change": "沒有進行任何改動",
        "editor-title-saving": "正在儲存……",
        "notify-save-success": "儲存成功，正在刷新頁面……",
        "editor-save-error": "儲存時出現錯誤",
        "redirect-summary": "快速導向到",
        "redirect-question-to": "要將$1重新導向到哪個頁面？",
        "redirect-question-from": "將哪個頁面重新導向到$1？",
        "redirect-title": "快速導向",
        "notify-redirect-success": "成功建立重新導向！",
        "notify-redirect-error": "建立重新導向時出現錯誤。",
        "delete-reason-default": "不再需要的頁面",
        "delete-title": "快速刪除",
        "delete-no-right": "您沒有刪除頁面的權限。",
        "delete-confirm-title": "確認刪除",
        "delete-confirm-content": "確定要刪除這個頁面嗎？之後您可以從已刪除頁面中恢復。",
        "notify-delete-success": "成功刪除頁面",
        "notify-delete-error": "刪除頁面時發生錯誤",
        "rename-title": "快速移動",
        "rename-moveTo": "您要將$1移動至哪裡？",
        "rename-movetalk": "同時移動討論頁",
        "rename-movesubpages": "同時移動子頁面（最多100個）",
        "rename-noredirect": "不留重新導向",
        "rename-summary": "快速移動",
        "notify-rename-success": "移動成功，正在刷新頁面……",
        "notify-rename-error": "移動時遇到錯誤",
        "rename-articleexists-title": "目標頁面已存在",
        "rename-articleexists": "以新頁面名命名的頁面存在內容，強制移動頁面的功能正在開發中，敬請期待。",
        "rename-articleexists-reason": "將頁面[[$1]]移動至此。",
        "rename-no-right": "您沒有移動頁面的權限。",
        "preference-title": "InPageEdit偏好設定",
        "preference-editor-label": "編輯器設定",
        "preference-outSideClose": "點擊編輯器外側關閉",
        "preference-setMinor": "預設編輯為次要修訂",
        "preference-summary-label": "變更摘要",
        "preference-editSummary": "<code>$section</code> - 將會被替換為<code>/<!-- -->* 段落名稱 */</code><br><code>$oldid</code> - 將會被替換為<code>編輯自[<!-- -->[Special:Diff/oldid]]</code>",
        "preference-analysis-label": "資料收集",
        "preference-analysis-view": "此外掛程式會收集您一些非敏感的資訊，用於記錄外掛的使用情況以便研究發展的方向，您可以在$1找到此外掛收集的資訊。",
        "preference-about-label": "關於InPageEdit",
        "preference-aboutAndHelp": "關於&說明",
        "preference-updatelog": "更新紀錄",
        "preference-savelocal-label": "您可以在這裡儲存InPageEdit-v2的偏好設定。",
        "preference-savelocal": "注意：這些設定會儲存在您的瀏覽器本地端，這意味著您必須在不同的裝置上分別儲存設定",
        "preference-savelocal-btn": "永久儲存",
        "preference-reset": "重設",
        "preference-save": "儲存",
        "preference-summary-default": "[InPageEdit] $section 沒有編輯摘要 $oldid",
        "preference-savelocal-popup-title": "偏好設定另存為",
        "preference-savelocal-popup": "在您個人JS頁調用本外掛的代碼的上方加入以下代碼：",
        "preference-savelocal-popup-notice": "注意：如果將偏好設定保存在本地，則將無法使用此窗口進行配置。儘管錯誤的設定將被忽略，但不會提示您哪裡出了問題。",
        "preference-savelocal-popup-haslocal": "您使用個人JS將偏好設定儲存在本地端，您應當在[[Special:Mypage/common.js|您的個人JS頁]]或者global.js修改您的偏好設定。",
        "preference-savelocal-popup-yourjspage": "您的個人JS頁",
        "preference-translate": "改進翻譯",
        "preference-discord": "Discord",
        "diff-loading": "正在載入差異……",
        "diff-button-todiffpage": "轉到原版比較頁面",
        "diff-usertalk": "討論",
        "diff-usercontrib": "貢獻",
        "diff-userblock": "封鎖",
        "diff-title": "比較差異",
        "diff-edit": "變更",
        "diff-version": "版本",
        "diff-prev": "上一版本",
        "diff-nextv": "下一版本",
        "diff-bytes": "位元組",
        "diff-title-original-content": "原始內容",
        "diff-title-your-content": "您的編輯",
        "diff-error": "載入差異時遇到問題",
        "preview-placeholder": "正在載入預覽……",
        "preview-title": "預覽",
        "preview-error": "載入預覽時出現錯誤。",
        "quick-diff": "快速差異",
        "preference-noConfirmEdit": "變更儲存前無需再次確認"
    },
    "de": {
        "noticeid": "build_2311_notify",
        "noticeid-canary": "canary",
        "version-notice-title": "Installation erfolgreich",
        "version-notice": "Hallo, vielen Dank, dass Sie InPageEdit~です verwenden! Das Plug-in kann Ihre Informationen sammeln, die nicht für Geschäftszwecke verwendet werden und keine Ihrer persönlichen Cookies und Datenschutzinformationen sammeln. Sie können den Analyse-Link des Plug-ins im Einstellungsfenster finden. Wenn Sie nicht möchten, dass Ihre Informationen gesammelt werden, hören Sie bitte auf, dieses Plug-in zu verwenden. Für Feedback erstellen Sie bitte Issues in GitHub.",
        "version-notice-canary-title": "Canary-Stabilitätswarnung",
        "version-notice-canary": "Die Canary-Version ist die Version, die der Autor für Debugging und Entwicklung verwendet. Jede ungetestete experimentelle Funktion kann in dieser Version auftreten oder sogar zu einem bestimmten Zeitpunkt nicht normal funktionieren. Für Ihre Erfahrung wird empfohlen, zur normalen Version zu wechseln!",
        "updatelog-update-success-title": "InPageEdit-Update erfolgreich",
        "updatelog-update-success": "InPageEdit $1 wurde installiert.",
        "updatelog-button-versioninfo": "Versionsinformationen anzeigen",
        "updatelog-after-close": "Dieses Pop-up-Fenster wird erst bei der nächsten Versionsaktualisierung wieder angezeigt. Alle Veröffentlichungsinformationen finden Sie unter $1. Wenn Sie Probleme mit dem Plug-in haben, $2",
        "updatelog-dismiss": "SCHLIESSEN",
        "updatelog-file-issue": "Melden Sie es bei GitHub.",
        "updatelog-title": "Revisionsverlaufs",
        "updatelog-about": "Über",
        "quick-edit": "Schnell bearbeiten",
        "redirect-from": "Weiterleitung von",
        "redirect-to": "Weiterleitung nach",
        "quick-delete": "Schnell löschen",
        "quick-rename": "Schnell umbenennen",
        "quick-diff": "Schnell Unterschied anzeigen",
        "ipe-preference": "Einstellungen",
        "confirm": "Bestätigen",
        "cancel": "Abbrechen",
        "close": "Schließen",
        "done": "Fertig",
        "ok": "OK",
        "notify-success": "Erfolg",
        "notify-info": "Information",
        "notify-error": "Fehler",
        "notify-editing-history": "Sie bearbeiten eine alte Version dieser Seite",
        "editor-title-editRevision": "Revision",
        "editor-summary-revision": "Bearbeiten von",
        "editor-title-editSection": "Teil $1",
        "editor-title-editing": "Bearbeitung",
        "editor-new-section": "Betreff (erforderlich)",
        "editor-new-section-missing-content": "Der Betreff oder Inhalt des neuen Abschnitts darf nicht leer sein.",
        "editSummary": "Zusammenfassung",
        "markAsMinor": "Nur Kleinigkeiten wurden verändert",
        "watchThisPage": "Diese Seite beobachten",
        "unlockWatchList": "Entsperren, um die Seite manuell zur Beobachtungsliste hinzuzufügen oder zu entfernen",
        "editor-button-save": "Änderungen speichern",
        "editor-confirm-save": "Sind Sie sicher, dass Sie die Änderungen speichern möchten?",
        "editor-button-preview": "Vorschau zeigen",
        "editor-button-diff": "Änderungen zeigen",
        "editor-detail-button-toggle": "Seitendetails",
        "editor-detail-button-templates": "Verwendete Vorlagen",
        "editor-detail-title-templates": "Auf dieser Seite verwendete Vorlagen",
        "editor-detail-button-files": "Verwendete Dateien",
        "editor-detail-title-files": "Auf dieser Seite verwendete Dateien",
        "editor-detail-images-quickview": "Schnellansicht",
        "editor-detail-images-upload": "(Erneut) hochladen",
        "window-leave-confirm": "Sind Sie sicher, dass Sie diesen Tab verlassen möchten? Ihr Text wird NICHT gespeichert.",
        "notify-no-right": "Keine Berechtigung",
        "editor-no-right": "Sie haben KEINE Berechtigung, diese Seite zu bearbeiten. Sie können jedoch Kommentare auf der Diskussionsseite dieser Seite hinterlassen.",
        "editor-title-editNotice": "Bearbeitungshinweis",
        "editor-has-editNotice": "Diese Seite hat einen Bearbeitungshinweis!",
        "editor-leave-confirm": "Sind Sie sicher, dass Sie den Editor verlassen möchten? Ihr Text wird NICHT gespeichert.",
        "notify-no-change": "Kein Unterschied.",
        "editor-title-saving": "Veröffentlichen…",
        "notify-save-success": "Erfolgreich gespeichert. Seite wird neu geladen…",
        "notify-save-success-noreload": "Erfolgreich gespeichert.",
        "editor-save-error": "Beim Speichern sind einige Fehler aufgetreten",
        "redirect-summary": "Schnelle Weiterleitung nach",
        "redirect-question-to": "Auf welche Seite möchten Sie von $1 weiterleiten?",
        "redirect-question-from": "Auf welche Seite möchten Sie nach $1 weiterleiten?",
        "redirect-question-fragment": "Auf welchen Abschnitt dieser Seite möchten Sie weiterleiten? (optional)",
        "redirect-title": "Schnelle Weiterleitung",
        "notify-redirect-success": "Weiterleitung erfolgreich",
        "notify-redirect-error": "Beim Erstellen der Weiterleitung sind einige Fehler aufgetreten",
        "notify-redirect-converted-error": "Eine Seite mit dem Zielnamen oder ihrem konvertierten Namen existiert bereits. Bitte wählen Sie einen anderen Namen.",
        "delete-reason-default": "Nicht mehr verwendet",
        "delete-title": "Schnelles Löschen",
        "delete-no-right": "Sie haben KEINE Berechtigung, die Seite zu löschen.",
        "delete-reason": "Warum möchten Sie $1 löschen?",
        "delete-confirm-title": "Löschen bestätigen",
        "delete-confirm-content": "Sind Sie sicher, dass Sie diese Seite löschen möchten? Sie können sie später in [[Special:DeletedPages]] wiederherstellen.",
        "notify-delete-success": "Löschen erfolgreich",
        "notify-delete-error": "Beim Löschen der Seite ist ein Fehler aufgetreten.",
        "rename-title": "Schnelle Umbenennung der Seite",
        "rename-moveTo": "Wählen Sie einen neuen Namen für $1",
        "rename-movetalk": "Verschieben Sie die Diskussionsseite",
        "rename-movesubpages": "Verschieben Sie Unterseiten (bis zu 100)",
        "rename-noredirect": "Keine Umleitung hinterlassen",
        "rename-summary": "Schnelle Umbenennung",
        "notify-rename-success": "Umbenennen erfolgreich",
        "notify-rename-error": "Beim Verschieben der Seite ist ein Fehler aufgetreten.",
        "rename-articleexists-title": "Zielseite existiert",
        "rename-articleexists": "Eine Seite mit dem neuen Seitennamen existiert bereits. Die Funktion zum erzwungenen Verschieben befindet sich in der Entwicklung, bleiben Sie dran.",
        "rename-no-right": "Sie haben KEINE Berechtigung, die Seite zu löschen.",
        "preference-title": "InPageEdit-Einstellungen",
        "preference-editor-label": "Editor-Einstellungen",
        "preference-outSideClose": "Klicken Sie außerhalb, um den Editor zu schließen",
        "preference-setMinor": "Kleine Änderung als Standard",
        "preference-noConfirmEdit": "Keine Bestätigung erforderlich, bevor Änderungen übermittelt werden",
        "preference-summary-label": "Zusammenfassung",
        "preference-editSummary": "<code>$section</code> - wird ersetzt durch <code>/<!-- -->* Abschnittsüberschrift */</code><br><code>$oldid</code> - wird ersetzt durch <code>Bearbeitung von [<!-- -->[Spezial:Diff/oldid]]</code>",
        "preference-analysis-label": "Analyse",
        "preference-analysis-view": "Wir werden einige Ihrer nicht sensiblen Informationen sammeln, um die Nutzung des Plugins aufzuzeichnen. Die Informationen werden zur Verbesserung der Erfahrung verwendet. Sie können die von uns gesammelten Informationen unter $1 finden.",
        "preference-about-label": "Über InPageEdit",
        "preference-aboutAndHelp": "Über & Hilfe",
        "preference-updatelog": "Revisionsverlaufs",
        "preference-savelocal-label": "Sie können Ihre InPageEdit-v2-Einstellungen hier speichern.",
        "preference-savelocal": "Achtung: Ihre Einstellungen werden in Ihrem Browser gespeichert. Das bedeutet, dass Sie erneut speichern müssen, wenn Sie Ihr Gerät ändern.",
        "preference-savelocal-btn": "Lokal speichern",
        "preference-reset": "zurücksetzen",
        "preference-save": "speichern",
        "preference-summary-default": "[InPageEdit] $section Keine Zusammenfassung angegeben $oldid",
        "preference-savelocal-popup-title": "Einstellungen lokal speichern",
        "preference-savelocal-popup": "Fügen Sie den folgenden Code über dem Code ein, der dieses Plugin auf Ihrer persönlichen JS-Seite aufruft:",
        "preference-savelocal-popup-notice": "Achtung: Wenn Sie die Einstellungen lokal speichern, können Sie dieses Fenster nicht mehr für die Konfiguration verwenden. Obwohl falsche Einstellungen ignoriert werden, wird es Sie nicht darauf hinweisen, was schief gelaufen ist.",
        "preference-savelocal-popup-haslocal": "Sie speichern Ihre Einstellungen lokal. Sie sollten Ihre Einstellungen auf [[Spezial:Meine_Seite/common.js|Ihrer persönlichen JS-Seite]] oder global.js ändern.",
        "preference-savelocal-popup-yourjspage": "Ihrer persönlichen JS-Seite",
        "preference-translate": "übersetzen",
        "preference-discord": "Discord",
        "diff-loading": "Unterschied wird geladen",
        "diff-button-todiffpage": "Zur Unterschiedsseite springen",
        "diff-usertalk": "Diskussion",
        "diff-usercontrib": "Beiträge",
        "diff-userblock": "Blockieren",
        "diff-title": "Unterschied",
        "diff-edit": "bearbeiten",
        "diff-version": "Revision",
        "diff-prev": "Ältere Bearbeitung",
        "diff-nextv": "Neuere Bearbeitung",
        "diff-bytes": "Bytes",
        "diff-title-original-content": "Ursprünglicher Text",
        "diff-title-your-content": "Ihr Text",
        "diff-error": "Unterschied konnte nicht geladen werden.",
        "preview-placeholder": "Vorschau wird geladen…",
        "preview-title": "Vorschau",
        "preview-error": "Vorschau konnte nicht geladen werden.",
        "editor-edittool-header": "Überschrift",
        "editor-edittool-header-text": "Überschrift-Text",
        "editor-edittool-bold": "Fett",
        "editor-edittool-italic": "Kursiv",
        "editor-edittool-internal-link": "Interner Link",
        "editor-edittool-list-bulleted": "Aufgezählte Liste",
        "editor-edittool-list-numbered": "Nummerierte Liste",
        "editor-edittool-nowiki": "Keine Wikiformatierung",
        "editor-edittool-format-label": "Format",
        "editor-edittool-insert-label": "Einfügen",
        "editor-edittool-custom-label": "Benutzerdefiniert",
        "editor-reload-page": "Seite nach dem Speichern neu laden",
        "preference-reset-confirm-title": "Einstellungen zurücksetzen",
        "preference-reset-confirm": "Möchten Sie Ihre Einstellungen wirklich auf die Standardeinstellungen zurücksetzen?",
        "target-exists-title": "Zielseite existiert",
        "target-exists-no-delete": "Die Seite [[$1]] existiert bereits. Möchten Sie diese Seite anzeigen?",
        "target-exists-can-delete": "Die Seite [[$1]] existiert bereits. Möchten Sie diese Seite anzeigen oder einfach löschen?",
        "preference-tab-editor": "Editor",
        "preference-tab-plugin": "Plugin",
        "preference-tab-analysis": "Analyse",
        "preference-tab-about": "Über",
        "preference-tab-another": "Andere",
        "preference-editor-title": "Editor-Einstellungen",
        "preference-plugin-title": "Plugin-Store",
        "preference-analysis-title": "Analyse-Daten",
        "preference-another-title": "Andere Einstellungen",
        "preference-editHobbies-label": "Hobbys bearbeiten",
        "preference-watchList-label": "Watchlist-Einstellungen",
        "preference-watchList-nochange": "Meine Watchlist beim Bearbeiten nicht ändern",
        "preference-watchList-preferences": "[[Special:Preferences|Benutzereinstellungen]] übernehmen",
        "preference-watchList-unwatch": "Bearbeitete Seiten von meiner Watchlist entfernen",
        "preference-watchList-watch": "Bearbeitete Seiten zu meiner Watchlist hinzufügen",
        "preference-redLinkQuickEdit": "Schnellbearbeitungs-Buttons nach roten Links hinzufügen",
        "preference-plugin-footer": "Sie können hier die offiziellen Plugins auswählen. Und willkommen bei [$1 InPageEdit-Plugins], um Ihren Code beizutragen! Einige Plugins müssen die Seite neu laden, um wirksam zu sein.",
        "preference-analysis-totaluse": "<strong>Gesamtverwendung</strong>: $1 {{PLURAL:$1|Mal}}",
        "preference-display-label": "Anzeigeeinstellungen",
        "links-here": "Links hierher",
        "links-here-title": "{{PLURAL:$2|Seite|Seiten}}, die auf \\"<u>$1</u>\\" verlinken",
        "links-here-isRedirect": "Weiterleitungsseite",
        "links-here-no-page": "Keine Seite verlinkt auf \\"<strong>$1</strong>\\" :(",
        "links-here-not-exist": "Achtung: Die Seite \\"<strong>$1</strong>\\" scheint nicht zu existieren"
    }
}
`,ii=2*60*60*1e3;De("/dist/i18n/languages.json");const Pe="InPageEdit",ce="i18n-cache-"+Pe+"-content",Ee="i18n-cache-"+Pe+"-timestamp";async function ti(e){const t=new Date().getTime();if(A.wgUserLanguage==="qqx")return console.warn("[InPageEdit] User language is qqx"),!0;if(localStorage.getItem(ce)&&t-localStorage.getItem(Ee)<ii&&!e){var r={};try{r=JSON.parse(localStorage.getItem(ce))}catch{return console.warn("[InPageEdit] i18n 数据不合法"),await pe(),!0}return r.en||(console.warn("[InPageEdit] i18n 数据可能已损坏"),await pe()),!0}else return await pe(),!0}function oi(e){const t=new Date().getTime();e=JSON.stringify(e),localStorage.setItem(ce,e),localStorage.setItem(Ee,t)}async function pe(){const e=JSON.parse(ei);return oi(e),e}const fe="https://www.ipe.wiki/",se="https://github.com/inpageedit/inpageedit-v2",Ce="https://ipe-plugins.js.org",ze="https://github.com/inpageedit/Plugins",ni="https://ipe-plugins.js.org/specialNotice.json",We="https://www.ipe.wiki/update/",ri=Object.freeze(Object.defineProperty({__proto__:null,aboutUrl:fe,githubLink:se,pluginCDN:Ce,pluginGithub:ze,specialNotice:ni,updatelogsUrl:We},Symbol.toStringTag,{value:"Module"}));function R(e){console.log(e)}const ue="InPageEdit",ai=A.wgUserLanguage,si={ab:"ru",ace:"id",aln:"sq",als:"gsw",an:"es",anp:"hi",arn:"es",arz:"ar",av:"ru",ay:"es",ba:"ru",bar:"de","bat-smg":"sgs",bcc:"fa","be-x-old":"be-tarask",bh:"bho",bjn:"id",bm:"fr",bpy:"bn",bqi:"fa",bug:"id","cbk-zam":"es",ce:"ru",ckb:"ckb-arab",crh:"crh-latn","crh-cyrl":"ru",csb:"pl",cv:"ru","de-at":"de","de-ch":"de","de-formal":"de",dsb:"de",dtp:"ms",eml:"it",ff:"fr","fiu-vro":"vro",frc:"fr",frp:"fr",frr:"de",fur:"it",gag:"tr",gan:"gan-hant","gan-hans":"zh-hans","gan-hant":"zh-hant",gl:"pt",glk:"fa",gn:"es",gsw:"de",hif:"hif-latn",hsb:"de",ht:"fr",ii:"zh-cn",inh:"ru",iu:"ike-cans",jut:"da",jv:"id",kaa:"kk-latn",kbd:"kbd-cyrl","kbd-cyrl":"ru",khw:"ur",kiu:"tr",kk:"kk-cyrl","kk-arab":"kk-cyrl","kk-cn":"kk-arab","kk-kz":"kk-cyrl","kk-latn":"kk-cyrl","kk-tr":"kk-latn",kl:"da",koi:"ru","ko-kp":"ko",krc:"ru",ks:"ks-arab",ksh:"de",ku:"ku-latn","ku-arab":"ckb",kv:"ru",lad:"es",lb:"de",lbe:"ru",lez:"ru",li:"nl",lij:"it",liv:"et",lmo:"it",ln:"fr",ltg:"lv",lzz:"tr",mai:"hi","map-bms":"jv",mg:"fr",mhr:"ru",min:"id",mo:"ro",mrj:"ru",mwl:"pt",myv:"ru",mzn:"fa",nah:"es",nap:"it",nds:"de","nds-nl":"nl","nl-informal":"nl",no:"nb",os:"ru",pcd:"fr",pdc:"de",pdt:"de",pfl:"de",pms:"it","pt-br":"pt",qu:"es",qug:"qu",rgn:"it",rmy:"ro",rue:"uk",ruq:"ruq-latn","ruq-cyrl":"mk","ruq-latn":"ro",sa:"hi",sah:"ru",scn:"it",sg:"fr",sgs:"lt",shi:"ar",simple:"en",sli:"de",sr:"sr-ec",srn:"nl",stq:"de",su:"id",szl:"pl",tcy:"kn",tg:"tg-cyrl",tt:"tt-cyrl","tt-cyrl":"ru",ty:"fr",udm:"ru",ug:"ug-arab",uk:"ru",vec:"it",vep:"et",vls:"nl",vmf:"de",vot:"fi",vro:"et",wa:"fr",wo:"fr",wuu:"zh-hans",xal:"ru",xmf:"ka",yi:"he",za:"zh-hans",zea:"nl",zh:"zh-hans","zh-classical":"lzh","zh-cn":"zh-hans","zh-hant":"zh-hans","zh-hk":"zh-hant","zh-min-nan":"nan","zh-mo":"zh-hk","zh-my":"zh-sg","zh-sg":"zh-hans","zh-tw":"zh-hant","zh-yue":"yue"};function li(e){try{return JSON.parse(e)}catch{return{}}}function di(e,...t){return t.forEach(function(r,c){var s=new RegExp("\\$"+(c+1),"g");e=e.replace(s,r)}),e}function me(e,t,r,c){return t=t||e,e=r?e:mw.util.getUrl(e),t=mw.html.escape(t),e=mw.html.escape(e),c=c?'rel="noopener" target="_blank"':"",'<a href="'+e+'" title="'+t+'"'+c+">"+t+"</a>"}function ci(e){var t=document.implementation.createHTMLDocument(""),r=$.parseHTML(e,t,!1),c=$("<div>",t).append(r),s=["title","style","class"],a=["b","br","code","del","em","i","s","strong","span","u"];return c.find("*").each(function(){var p=$(this),l=p.prop("tagName").toLowerCase(),u,y,k;if(a.indexOf(l)===-1){mw.log("[I18n-js] Disallowed tag in message: "+l),p.remove();return}u=p.prop("attributes"),y=Array.prototype.slice.call(u),y.forEach(function(g){if(s.indexOf(g.name)===-1){mw.log("[I18n-js] Disallowed attribute in message: "+g.name+", tag: "+l),p.removeAttr(g.name);return}g.name==="style"&&(k=p.attr("style"),k.indexOf("url(")>-1?(mw.log("[I18n-js] Disallowed url() in style attribute"),p.removeAttr("style")):k.indexOf("var(")>-1&&(mw.log("[I18n-js] Disallowed var() in style attribute"),p.removeAttr("style")))})}),c.prop("innerHTML")}function pi(e){var t=/\[((?:https?:)?\/\/.+?) (.+?)\]/g,r=/\[\[([^|]*?)\]\]/g,c=/\[\[(.+?)\|(.+?)\]\]/g,s=/\{\{PLURAL:(\d+)\|(.+?)\}\}/gi,a=/\{\{GENDER:([^|]+)\|(.+?)\}\}/gi;return e.indexOf("<")>-1&&(e=ci(e)),e.replace(t,function(p,l,u){return me(l,u,!0,!0)}).replace(r,function(p,l){return me(l)}).replace(c,function(p,l,u){return me(l,u)}).replace(s,function(p,l,u){return mw.language.convertPlural(Number(l),u.split("|"))}).replace(a,function(p,l,u){return mw.language.gender(l,u.split("|"))})}function ge(e,...t){return e=di(e,...t),e=pi(e),e}function Ne(e,t,...r){const c=localStorage.getItem("i18n-cache-"+ue+"-content")||"{}";if(e==="qqx"){var s="";return r.length>0&&(s=": "+r.join(", ")),`(${ue.toLowerCase()}-${t}${s})`}var a=li(c),p=window.InPageEdit||{},l=p.i18n||{};return l[e]&&l[e][t]?ge(l[e][t],...r):l[t]?ge(l[t],...r):a[e]&&a[e][t]?ge(a[e][t],...r):e==="en"?`(${ue}-${t})`:(e=si[e]||"en",Ne(e,t,...r))}const o=function(e,...t){return Ne(ai,e,...t)},fi=function(){ssi_modal.show({title:o("preference-about-label"),className:"in-page-edit in-page-edit-about",content:$("<section>").append($("<iframe>",{style:"margin: 0;padding: 0;width: 100%;height: 80vh;border: 0;",src:fe}))})},{getUrl:ui}=mw.util,L="<br>",mi="<hr>",he=({page:e,link:t,href:r,text:c,html:s})=>{r=r||t||"javascript:void(0);",e&&(r=ui(e)),s=s||c,e&&!s&&(s=e),s||(s=r);let a="";return/^https?:\/\//.test(r)&&(a="_blank"),$("<a>",{href:r,rel:"noopener",target:a,html:s})},J='<div class="ipe-progress" style="width: 100%"><div class="ipe-progress-bar"></div></div>';class te{static get(){return Promise.resolve(JSON.parse(`{"toolbox.js":{"_force":true,"name":"InPageEdit Toolbox","author":"dragon-fish","description":"Adds a toolbox in the bottom-right corner of your screen. Lets you quickly access frequently used IPE functions."},"edit-any-page.js":{"name":"Edit any page","author":"dragon-fish","description":"Adds a button into IPE Toolbox that lets you edit any page anywhere","dependency":["toolbox.js"]},"wiki-editor.js":{"name":"WikiEditor","description":"Make InPageEdit use native WikiEditor (2010 editor) instead of IPE's custom editTools.","author":"dragon-fish"},"code-mirror/script.js":{"name":"CodeMirror 5","description":"Syntaxhighlight editor for InPageEdit. Currently supported languages: Wikitext, CSS, JavaScript, JSON, Lua. In conflict with CodeMirror 6.","author":"InPageEdit"},"code-mirror/cm6.js":{"name":"[BETA] CodeMirror 6","description":"Syntaxhighlight editor for InPageEdit. Currently supported languages: Wikitext, CSS, JavaScript, JSON, Lua. [!] In conflict with CodeMirror 5.","author":"InPageEdit"},"monaco/script.js":{"name":"Monaco Editor","description":"Provides the advanced editor VSCode is using. Currently supported languages: Wikitext, CSS, JavaScript, JSON, Lua. [!] In conflict with CodeMirror. ([https://github.com/inpageedit/plugins/blob/HEAD/src/plugins/monaco/README.md More info])","author":"InPageEdit"},"color-preview.js":{"name":"Color preview","author":"dragon-fish","description":"Adds a box above the edit textarea to quickly preview the hexadecimal color"},"quick-thank.js":{"name":"Quick thank","author":"Leranjun","description":"Adds a button into IPE Toolbox that lets you thank any page anywhere","dependency":["toolbox.js"]},"fix-double-entrance.js":{"name":"Fix double entrance","description":"Fix the bug that two Quick Edit link appear in section edit area when the Visual Editor is enabled"},"april-fool-2023/autoload.js":{"name":"My Little IPE","author":"dragon-fish","description":"IPE Chan - Your powerful MediaWiki AI assistant (Of course it's just a joke)"}}`))}static saveCache(t){var r=window.InPageEdit||{};r.cache=r.cache||{},r.cache.pluginList=t,window.InPageEdit=r}static loadCache(){var t=window.InPageEdit||{};return t.cache=t.cache||{},t.cache.pluginList}static load(t){/^https?:\/\//.test(t)?(mw.loader.load(t,/\.css$/i.test(t)?"text/css":void 0),console.info("[InPageEdit] 从远程加载非官方插件",t)):(Ie(t).then(()=>console.info("[InPageEdit] 插件 "+t+" 加载成功"),r=>console.warn("[InPageEdit] 插件 "+t+" 加载失败",r)),console.info("[InPageEdit] 从官方插件商店加载插件",t))}static initUserPlugin(){const t=fetch;window.fetch=async(s,a)=>(typeof s=="string"&&s.includes("testingcf.jsdelivr.net")&&(s=s.replace("testingcf.jsdelivr.net","cdn.jsdelivr.net")),t(s,a));const r=mw.loader.load;mw.loader.load=async(s,a)=>(typeof s=="string"&&s.includes("testingcf.jsdelivr.net")&&(s=s.replace("testingcf.jsdelivr.net","cdn.jsdelivr.net")),r(s,a));var c=O.get("plugins");typeof c=="object"&&c.length>0&&$.each(c,(s,a)=>{te.load(a)})}}const ne=window.InPageEdit||{},O={_defaults:{doNotCollectMyInfo:!1,editMinor:!1,editSummary:o("preference-summary-default"),lockToolBox:!1,redLinkQuickEdit:!0,outSideClose:!0,watchList:"preferences",noConfirmEdit:!1,plugins:["toolbox.js","wiki-editor.js"]},get(e){var t=localStorage.getItem("InPageEditPreference")||"{}";try{t=JSON.parse(t)}catch{t={}}typeof ne.myPreference=="object"&&Object.assign(t,ne.myPreference);var r=$.extend({},O._defaults,t);return["watch","unwatch","preferences","nochange"].includes(r.watchList)||(r.watchList="preferences"),typeof e=="string"&&e!==""?r[e]?r[e]:null:r},set(e={},t=void 0){var r={};if(typeof e=="string"&&t!==void 0)r[e]=t;else if(typeof e=="object")r=e;else return;r=$.extend({},O.get(),r),r=JSON.stringify(r),localStorage.setItem("InPageEditPreference",r)},modal(){if($("#ipe-preference-form").length>0)return;mw.hook("pluginPreference").fire(),O.set();var e=O.get();R("plugin_setting");var t=$("<ul>",{class:"tab-list"}).append($("<li>").append($("<a>",{text:o("preference-tab-editor"),href:"#editor"})),$("<li>").append($("<a>",{text:o("preference-tab-plugin"),href:"#plugin"})),$("<li>").append($("<a>",{text:o("preference-tab-analysis"),href:"#analysis"})),$("<li>").append($("<a>",{text:o("preference-tab-another"),href:"#another"})),$("<li>").append($("<a>",{text:o("preference-tab-about"),href:"#about"})));function r(){const p=$("<section>").append(o("preference-savelocal-popup"),L,$("<textarea>",{style:"font-size: 12px; resize: none; width: 100%; height: 10em;",readonly:!0}).on("click",function(){this.select()}).val(`/** InPageEdit Preferences */
;(window.InPageEdit = window.InPageEdit || {}).myPreference = ${JSON.stringify(s.data(),null,2)}`));ssi_modal.dialog({className:"in-page-edit",center:!0,title:o("preference-savelocal-popup-title"),content:p,okBtn:{className:"btn btn-primary btn-single",label:o("ok")}})}var c=$("<div>",{class:"tab-content",style:"position: relative;"}).append($("<section>",{id:"editor"}).append($("<h3>",{text:o("preference-editor-title")}),$("<h4>",{text:o("preference-editHobbies-label")}),$("<label>").append($("<input>",{type:"checkbox",id:"editMinor"}),$("<span>",{text:o("preference-setMinor")})),$("<label>").append($("<input>",{type:"checkbox",id:"outSideClose"}),$("<span>",{text:o("preference-outSideClose")})),$("<label>").append($("<input>",{type:"checkbox",id:"noConfirmEdit"}),$("<span>",{text:o("preference-noConfirmEdit")})),$("<h4>",{text:o("preference-watchList-label")}),$("<label>").append($("<input>",{type:"radio",name:"watchList",value:"nochange"}),$("<span>",{text:o("preference-watchList-nochange")})),$("<label>").append($("<input>",{type:"radio",name:"watchList",value:"preferences"}),$("<span>",{html:o("preference-watchList-preferences")})),$("<label>").append($("<input>",{type:"radio",name:"watchList",value:"unwatch"}),$("<span>",{text:o("preference-watchList-unwatch")})),$("<label>").append($("<input>",{type:"radio",name:"watchList",value:"watch"}),$("<span>",{text:o("preference-watchList-watch")})),$("<h4>",{text:o("preference-summary-label")}),$("<label>",{for:"editSummary",style:"padding-left: 0; font-size: small",html:o("preference-editSummary")}),$("<input>",{id:"editSummary",style:"width: 96%",placeholder:"Edit via InPageEdit, yeah~"})),$("<section>",{id:"plugin"}).append($("<h3>",{text:o("preference-plugin-title")}),$("<div>",{id:"plugin-container",html:$(J).css({width:"96%",position:"absolute",top:"50%",transform:"translateY(-50%)"})}),$("<div>",{class:"plugin-footer"}).html(o("preference-plugin-footer",ze))),$("<section>",{id:"analysis"}).append($("<h3>",{text:o("preference-analysis-title")}),$("<div>",{id:"analysis-container",html:$(J).css({width:"96%",position:"absolute",top:"50%",transform:"translateY(-50%)"})})),$("<section>",{id:"another"}).append($("<h3>",{text:o("preference-another-title")}),$("<h4>",{text:o("preference-display-label")}),$("<label>").append($("<input>",{type:"checkbox",id:"redLinkQuickEdit"}),$("<span>",{text:o("preference-redLinkQuickEdit")})),$("<div>").append($("<h4>",{text:"Custom skin (Not available yet)"}),$("<label>",{class:"choose-skin"}).append($("<input>",{type:"checkbox",id:"customSkinEnable",disabled:!0}),$("<span>"),$("<input>",{id:"customSkinUrl",disabled:!0,style:"width: calc(96% - 30px)",value:`${Ce}/skins/ipe-default.css`}))),$("<h4>",{text:o("preference-savelocal-popup-title")}),$("<button>",{class:"btn btn-secondary",id:"ipeSaveLocalShow",text:o("preference-savelocal-btn")}).on("click",r)),$("<section>",{id:"about"}).append($("<h3>",{text:o("preference-about-label")}),$("<div>",{style:"font-size: 12px; font-style: italic;"}).html(function(){return F.includes("-")?`v${F} (Canary)<br>${o("version-notice-canary")}`:`v${F}`}),$("<h4>",{text:"Portal"}),$("<button>",{class:"btn btn-secondary btn-single",onclick:"InPageEdit.about()",text:o("preference-aboutAndHelp")}),$("<button>",{class:"btn btn-secondary btn-single",style:"margin-top: .5em;",onclick:"InPageEdit.versionInfo()",text:o("preference-updatelog")}),$("<h4>",{text:"Join us"}),$("<p>").append($("<strong>",{text:"GitHub"}),": ",$("<a>",{href:se,text:se,rel:"noopener",target:"_blank"})),$("<p>").append($("<strong>",{text:"QQ Group"}),": ","1026023666"),mi,$("<p>",{text:"InPageEdit is a useful MediaWiki JavaScript Plugin written with jQuery"}),$("<p>").append("© InPageEdit Copyright (C)"," 2019 - "+new Date().getFullYear()," Wjghj Project (机智的小鱼君), ",$("<a>",{href:"https://www.gnu.org/licenses/gpl-3.0-standalone.html",text:"GNU General Public License 3.0"})))),s=$("<div>",{class:"preference-tabber"}).append(t,c);t.find("a").on("click",function(p){p.preventDefault();var l=$(this),u=l.attr("href");u&&(t.find("a").removeClass("active"),c.find("section").removeClass("active"),l.addClass("active"),c.find(""+u).addClass("active"))}),c.find("input").on("change",function(){var p=$(this),l=p.attr("id")||p.prop("name"),u;p.prop("type")==="checkbox"?u=p.prop("checked"):u=p.val(),s.data(l,u),console.log("[InPageEdit] Preset preference",s.data())}),t.find("a:first").addClass("active"),c.find("section:first").addClass("active");function a(p){$.each(p,(l,u)=>{if(l==="plugins"){s.data(l,u.concat([])),c.find(".plugin-checkbox").each(function(){this.checked=u.includes(this.id)});return}s.data(l,u);const y=c.find("#"+l);y.length>0?typeof u=="string"?y.val(u):typeof u=="boolean"&&y.prop("checked",u):c.find("input[name="+l+"]").each(function(){this.checked=this.value===u})})}ssi_modal.show({sizeClass:"dialog",className:"in-page-edit ipe-preference",outSideClose:!1,title:o("preference-title")+" - "+F,content:s,buttons:[{label:o("preference-reset"),className:"btn btn-danger",method:function(p,l){ssi_modal.confirm({title:o("preference-reset-confirm-title"),content:o("preference-reset-confirm"),className:"in-page-edit",center:!0,okBtn:{label:o("ok"),className:"btn btn-danger"},cancelBtn:{label:o("cancel"),className:"btn"}},u=>{if(u)typeof ne.myPreference<"u"?a(O._defaults):(O.set(O._defaults),l.close());else return!1})}},{label:o("preference-save"),className:"btn btn-primary",method:function(p,l){typeof ne.myPreference<"u"?r():(O.set(s.data()),l.close())}}],onShow(p){var l=$("#"+p.modalId);mw.hook("InPageEdit.preference.modal").fire({$modal:p,$modalWindow:l}),typeof ne.myPreference<"u"&&t.before($("<div>",{class:"has-local-warn",style:"padding-left: 8px; border-left: 6px solid orange; font-size: small;",html:o("preference-savelocal-popup-haslocal")})),a(e);var u=O.get("plugins"),y=te.loadCache();y?k(y):te.get().then(g=>{te.saveCache(g),k(g)});function k(g){c.find("#plugin-container").html($("<ul>")),$.each(g,(C,h)=>{var x=h.name||"Unknown",w=h.description||"",S=h.author?$("<a>",{href:"https://github.com/"+h.author,target:"_balnk",text:"@"+h.author}):"-";c.find("#plugin-container > ul").append($("<li>").append($("<label>").append($("<input>",{class:"plugin-checkbox",id:C,type:"checkbox",checked:u.indexOf(C)>=0||h._force===!0,disabled:h._force===!0}).on("change",function(){var v=$(this),m=v.prop("checked"),P=s.data("plugins"),z=P.indexOf(C);m&&z<0&&P.push(C),!m&&z>=0&&P.splice(z,1)}),$("<span>"),$("<div>",{class:"plugin-name",text:x}),$("<div>",{class:"plugin-author",html:S}),$("<div>",{class:"plugin-description",text:w}))))})}}})}},ee=function(e){const t=mw.config.get();return console.info("[InPageEdit] _hasRight",e,t.wgUserIsBlocked,t.wgUserRights),t.wgUserIsBlocked?!1:(t.wgUserRights||[]).includes(e)};function K(e){if(e===!0)$(".in-page-edit.loadingbox .ssi-modalTitle").html(o("done")),$(".in-page-edit.loadingbox .ipe-progress").addClass("done");else if(e===!1)$(".in-page-edit.loadingbox").length>0&&($(".in-page-edit.loadingbox").appendTo("body"),ssi_modal.close());else{if($(".in-page-edit.loadingbox").length>0)return;typeof e>"u"&&(e="Loading..."),ssi_modal.show({title:e,content:J,className:"in-page-edit loadingbox",center:!0,sizeClass:"dialog",closeIcon:!1,outSideClose:!1})}}function be(e,t="large",r=!1){var c={action:"parse",preview:!0,disableeditsection:!0,prop:"text",format:"json"},s=$.extend({},c,e);mw.hook("InPageEdit.quickPreview").fire(),console.time("[InPageEdit] Request preview");const a=$("<div>").append(J),p=$("<div>",{class:"InPageEditPreview",style:"display:none",text:o("preview-placeholder")});p.on("click",function(l){l.preventDefault(),l.stopPropagation()}),ssi_modal.show({sizeClass:["dialog","small","smallToMedium","medium","mediumToLarge","large","full","auto"].includes(t)?t:"large",center:!!r,className:"in-page-edit previewbox",title:o("preview-title"),content:$("<section>").append(a,p),fixedHeight:!0,fitScreen:!0,buttons:[{label:"",className:"hideThisBtn"}],onShow(){a.css("margin-top",window.innerHeight/2-100),$(".previewbox .hideThisBtn").hide(),Q().post(s).then(function(l){console.timeEnd("[InPageEdit] Request preview");const u=l.parse.text;a.hide(150),p.fadeIn(500).html(u)}).fail(function(){console.timeEnd("[InPageEdit] Request preview"),console.warn("[InPageEdit] 预览失败"),a.hide(150),p.fadeIn(500).html(o("preview-error"))})}})}function Y(e){mw.hook("InPageEdit.quickDiff").fire(),R("quick_diff"),mw.loader.load(["mediawiki.diff.styles"]);var t,r,c,s=$(".quick-diff");s.length>0?(console.info("[InPageEdit] Quick diff 正在加载新内容"),t=s.find(".pageName"),r=s.find(".diffArea"),c=s.find(".ipe-progress"),t.text(o("diff-loading")),r.hide(),s.appendTo(document.body)):(t=$("<span>",{class:"pageName",text:o("diff-loading")}),r=$("<div>",{class:"diffArea",style:"display: none"}),c=$(J),ssi_modal.show({className:"in-page-edit quick-diff",sizeClass:"large",fixedHeight:!0,fitScreen:!0,title:t,content:$("<div>").append(c,r),buttons:[{label:o("diff-button-todiffpage"),className:"btn btn-secondary toDiffPage"}]}),s=$(".quick-diff")),c.show().css("margin-top",s.find(".ssi-modalContent").height()/2),s.find(".toDiffPage").off("click"),e.action="compare",e.prop="diff|rel|ids|title|user|parsedcomment|size|timestamp",e.format="json",e.totext?e.topst=!0:e.fromtext&&(e.frompst=!0),Q().post(e).done(function(a){const p=a.compare.body;let l;c.hide(),e.pageName===void 0?l=a.compare.totitle:l=e.pageName;function u(k){const g=$("<a>",{class:"diff-user",href:mw.util.getUrl("User:"+k),text:k}),C=$("<a>",{href:mw.util.getUrl("User_talk:"+k),text:o("diff-usertalk")}),h=$("<a>",{href:mw.util.getUrl("Special:Contributions/"+k),text:o("diff-usercontrib")}),x=$("<a>",{href:mw.util.getUrl("Special:Block/"+k),text:o("diff-userblock")});return $("<span>",{class:"diff-user-links"}).append(g," (",C," | ",h," | ",x,")")}function y(k){const g=new Date(k),C=Intl.DateTimeFormat("default",{weekday:"narrow"}).format(g);return`${Intl.DateTimeFormat("default",{dateStyle:"medium",timeStyle:"short"}).format(g)} (${C})`}t.html(o("diff-title")+": <u>"+l+"</u>"),r.show().empty().append($("<table>",{class:"diff difftable"}).append($("<colgroup>").append($("<col>",{class:"diff-marker"}),$("<col>",{class:"diff-content"}),$("<col>",{class:"diff-marker"}),$("<col>",{class:"diff-content"})),$("<tbody>").append($("<tr>").append($("<td>",{colspan:2,class:"diff-otitle"}).append($("<a>",{href:mw.util.getUrl("",{oldid:a.compare.fromrevid}),text:a.compare.fromtitle})," (",$("<span>",{class:"diff-version",text:o("diff-version")+a.compare.fromrevid}),") (",$("<a>",{class:"editLink",href:mw.util.getUrl(a.compare.fromtitle,{action:"edit",oldid:a.compare.fromrevid}),text:o("diff-edit")}),")",L,u(a.compare.fromuser),a.compare.fromtimestamp?[L,y(a.compare.fromtimestamp)]:"",a.compare.fromparsedcomment?[L,$("<span>",{class:"diff-comment"}).append(" (",a.compare.fromparsedcomment,") ")]:"",L,$("<a>",{class:"prevVersion ipe-analysis-quick_diff_modalclick",href:"javascript:void(0);",text:"←"+o("diff-prev")}).toggle(!!a.compare.prev).on("click",()=>{Y({fromrev:a.compare.prev,torev:a.compare.fromrevid})})),$("<td>",{colspan:2,class:"diff-ntitle"}).append($("<a>",{href:mw.util.getUrl("",{oldid:a.compare.torevid}),text:a.compare.totitle})," (",$("<span>",{class:"diff-version",text:o("diff-version")+a.compare.torevid}),") (",$("<a>",{class:"editLink",href:mw.util.getUrl(a.compare.totitle,{action:"edit",oldid:a.compare.torevid}),text:o("diff-edit")}),")",L,u(a.compare.touser),a.compare.totimestamp?L+y(a.compare.totimestamp):"",a.compare.toparsedcomment?[L,$("<span>",{class:"diff-comment"}).append(" (",a.compare.toparsedcomment,") ")]:"",L,$("<a>",{class:"nextVersion ipe-analysis-quick_diff_modalclick",href:"javascript:void(0);",text:o("diff-nextv")+"→"}).toggle(!!a.compare.next).on("click",()=>{R("quick_diff_modalclick"),Y({fromrev:a.compare.torevid,torev:a.compare.next})}))),p,$("<tr>",{class:"diffSize",style:"text-align: center"}).append($("<td>",{colspan:"2",text:a.compare.fromsize+o("diff-bytes")}),$("<td>",{colspan:"2",text:a.compare.tosize+o("diff-bytes")}))))),s.find("button.toDiffPage").on("click",function(){location.href=mw.util.getUrl("",{oldid:a.compare.fromrevid,diff:a.compare.torevid})}),ve(s.find(".editLink")),e.isPreview===!0&&(s.find("button.toDiffPage").hide(),r.find(".diff-otitle").html("<b>"+o("diff-title-original-content")+"</b>"),r.find(".diff-ntitle").html("<b>"+o("diff-title-your-content")+"</b>")),(a.compare.fromsize===void 0||a.compare.tosize===void 0)&&r.find(".diffSize").hide(),!a.compare?.fromrevid&&!e.isPreview&&r.find(".diff-otitle").empty().append($("<span>",{class:"noPrevVerson",text:a?.warnings?.compare?.info||"Previous version not exist"})),!a.compare?.torevid&&!e.isPreview&&r.find(".diff-otitle").empty().append($("<span>",{class:"noNextVerson",text:a?.warnings?.compare?.info||"Next version not exist"})),a.compare.fromtexthidden!==void 0&&r.find(".diff-otitle .diff-version").addClass("diff-hidden-history"),a.compare.totexthidden!==void 0&&r.find(".diff-ntitle .diff-version").addClass("diff-hidden-history"),a.compare.fromuserhidden!==void 0&&r.find(".diff-otitle .diff-user").addClass("diff-hidden-history"),a.compare.touserhidden!==void 0&&r.find(".diff-ntitle .diff-user").addClass("diff-hidden-history"),a.compare.fromcommenthidden!==void 0&&r.find(".diff-comment").addClass("diff-hidden-history"),a.compare.tocommenthidden!==void 0&&r.find(".diff-ntitle .diff-comment").addClass("diff-hidden-history")}).fail(function(a,p){console.warn("[InPageEdit] 快速差异获取失败"),c.hide(),p.error&&p.error.info&&p.error.code?r.show().html(o("diff-error")+": "+p.error.info+"(<code>"+p.error.code+"</code>)"):r.show().html(o("diff-error"))})}const we=e=>new RegExp(`^(File|${A.wgFormattedNamespaces[6]}):`).test(e),gi=e=>{var t={format:"json",action:"query",prop:we(e)?"fileusage":"linkshere",titles:e};return we(e)?t.fulimit="max":t.lhlimit="max",Q().get(t)},hi=e=>{var t=$("<ol>",{class:"ipe-links-here-list"});return $.each(e,(r,{title:c,redirect:s})=>{t.append($("<li>").append(he({page:c}).attr({rel:"noopener",target:"_blank"}),s!==void 0?" (<i>"+o("links-here-isRedirect")+"</i>)":""," (",he({text:"← "+o("links-here")}).on("click",function(){re(c)})," | ",he({text:o("quick-edit")}).on("click",function(){ie({page:c,reload:!1})}),")"))}),t};async function re(e=A.wgPageName){R("linkshere"),(!e||typeof e!="string")&&(e=A.wgPageName);var t=$(J),r=$("<div>").append(t),c=ssi_modal.createObject({className:"in-page-edit ipe-links-here",center:!0,sizeClass:"dialog",onShow(l){mw.hook("InPageEdit.linksHere").fire({modal:l,$modal:$("#"+l.modalId)})}}).init();c.setTitle(o("links-here-title",e,2)),c.setContent(r),c.show();try{console.info("[InPageEdit] linksHere","开始获取页面信息");const l=await gi(e),{pages:u}=l.query;console.info("[InPageEdit] linksHere","成功获取页面信息");var s=Object.keys(u)[0],a=[];if(we(e)?a=u[s].fileusage||[]:a=u[s].linkshere||[],t.hide(),a.length>0){var p=hi(a);r.append(p)}else r.append($("<div>",{class:"ipe-links-here-no-page",html:o("links-here-no-page",e)}));return a.length<2&&c.setTitle(o("links-here-title",e,1)),s==="-1"&&r.append($("<div>",{html:o("links-here-not-exist",e),class:"ipe-links-here-not-exist"})),mw.hook("InPageEdit.linksHere.pageList").fire(a),a}catch(l){return t.hide(),r.append($("<p>",{class:"error",html:l})),console.error("[InPageEdit] linksHere","获取页面信息时出现问题",l),l}}function ie(e){const t=Q();e=e||{},typeof e=="string"&&(e={page:e||A.wgPageName});var r={page:A.wgPageName,pageId:-1,revision:null,summaryRevision:"",section:null,editText:"",editMinor:!1,editSummary:o("preference-summary-default"),editNotice:"",outSideClose:!0,jsonGet:{action:"parse",page:e.page||A.wgPageName,prop:"wikitext|langlinks|categories|templates|images|sections",format:"json"},jsonPost:{},pageDetail:{},jumpTo:"",reload:!0,watchList:"preferences"},c=O.get(),s=new Date,a=s.getTime(),p=s.toISOString();e=$.extend({},r,e,c),R("quick_edit"),e.revision&&e.revision!==A.wgCurRevisionId&&(ssi_modal.notify("warning",{className:"in-page-edit",content:o("notify-editing-history"),title:o("notify-info")}),delete e.jsonGet.page,e.jsonGet.oldid=e.revision,e.summaryRevision=`(${o("editor-summary-revision")} [[Special:Permalink/${e.revision}]])`),e.section&&e.section!=="new"&&(e.jsonGet.section=e.section),e.section==="new"&&delete e.revision;var l=$("<span>").append(o("editor-title-editing")+': <u class="editPage">'+e.page.replace(/_/g," ")+"</u>"),u=$("<textarea>",{class:"editArea",style:"margin-top: 0;"}),y=$("<div>",{class:"editOptionsLabel hideBeforeLoaded"}).append($("<section>",{class:"detailArea"}).append($("<label>",{class:"detailToggle",text:o("editor-detail-button-toggle")}),$("<div>",{class:"detailBtnGroup"}).append($("<a>",{href:"javascript:;",class:"detailBtn",id:"showTemplates",text:o("editor-detail-button-templates")})," | ",$("<a>",{href:"javascript:;",class:"detailBtn",id:"showImages",text:o("editor-detail-button-files")})," | ",$("<a>",{href:"javascript:;",class:"detailBtn",id:"linksHereBtn",text:o("links-here"),"data-page-name":e.page}).on("click",function(){re(e.page)}))),$("<label>",{for:"editSummary",text:o("editSummary")}),L,$("<input>",{class:"editSummary",id:"editSummary",placeholder:"Edit via InPageEdit~",value:e.editSummary.replace(/\$oldid/gi,e.summaryRevision)}),L,$("<label>").append($("<input>",{type:"checkbox",class:"editMinor",id:"editMinor",checked:e.editMinor}),$("<span>",{text:o("markAsMinor")}))," ",$("<label>").append($("<input>",{type:"checkbox",class:"watchList",id:"watchList",checked:e.watchList==="watch",disabled:["nochange","preferences"].includes(e.watchList)}),$("<span>",{text:o("watchThisPage")}))," ",L,$("<label>").append($("<input>",{type:"checkbox",class:"reloadPage",id:"reloadPage",checked:e.reload}),$("<span>",{text:o("editor-reload-page")})));["nochange","preferences"].includes(e.watchList)&&y.find(".watchList").parent().one("click",function(h){h.preventDefault(),$(this).removeAttr("title").children("input").prop("disabled",!1)}).attr("title",o("unlockWatchList"));var k=$("<input>",{type:"text",class:"newSectionTitleInput",placeholder:o("editor-new-section")}),g=$("<div>").append(J,$("<section>",{class:"hideBeforeLoaded"}).append(u));e.section==="new"&&g.prepend($("<label>",{class:"newSectionTitleArea"}).append(o("editor-new-section"),"<br>",k)),console.time("[InPageEdit] 获取页面源代码"),console.info("[InPageEdit] QuickEdit options",e),ssi_modal.show({title:l,content:g,outSideClose:e.outSideClose,className:"in-page-edit ipe-editor timestamp-"+a,sizeClass:"large",buttons:[{side:"left",label:o("editor-button-save"),className:"btn btn-primary leftBtn hideBeforeLoaded save-btn",keyPress:"ctrl-s",method(h,x){if(console.log({title:k.val(),content:u.val()}),e.section==="new"&&(!k.val().trim()||!u.val().trim())){ssi_modal.notify("error",{className:"in-page-edit",position:"right top",closeAfter:{time:15},title:o("notify-error"),content:o("editor-new-section-missing-content")});return}async function w(S){if(S){let v=y.find(".editSummary").val(),m;if(e.section==="new"){m=k.val();const N=(await t.post({action:"parse",text:`==${m}==`,contentmodel:"wikitext",prop:"sections",formatversion:2})).parse.sections[0].anchor;v=v.replace(/\$section/gi,`/* ${N} */`)}const P=u.val(),z=y.find(".editMinor").prop("checked"),T=e.section,I=v,E=y.find(".watchList").prop("checked")?"watch":"unwatch",D=y.find(".watchList").prop("disabled")?e.watchList:E;C({text:P,page:e.page,minor:z,section:T,sectiontitle:m,summary:I,watchlist:D},x)}}e.noConfirmEdit?w(!0):ssi_modal.confirm({className:"in-page-edit",center:!0,content:o("editor-confirm-save"),okBtn:{className:"btn btn-primary",label:o("confirm")},cancelBtn:{className:"btn btn-secondary",label:o("cancel")}},w)}},{side:"left",label:o("editor-button-preview"),className:"btn btn-secondary leftBtn hideBeforeLoaded",method(){R("preview_edit");var h=u.val();be({title:e.page,text:h,pst:!0,section:e.section==="new"?"new":void 0,sectiontitle:e.section==="new"?k.val():void 0})}},{side:"left",label:o("editor-button-diff"),className:"btn btn-secondary leftBtn hideBeforeLoaded diff-btn"},{label:o("cancel"),className:"btn btn-danger",method(h,x){x.close()}}],beforeShow(h){var x=$("#"+h.modalId);x.find(".hideBeforeLoaded").hide(),g.find(".ipe-progress").css("margin",Number($(window).height()/3-50)+"px 0"),u.css("height",$(window).height()/3*2-100),x.find(".ssi-buttons").prepend(y),x.find(".ssi-modalTitle").append($("<a>",{class:"showEditNotice",href:"javascript:void(0);",html:'<i class="fa fa-info-circle"></i> '+o("editor-has-editNotice"),style:"display: none;"}).on("click",function(){ssi_modal.show({className:"in-page-edit",center:!0,title:o("editor-title-editNotice"),content:'<section class="editNotice">'+g.data("editNotice")+"</section>"})}))},onShow(h){h.options.onShow="";var x=$("#"+h.modalId);mw.hook("InPageEdit.quickEdit").fire({$modal:h,$modalWindow:x,$modalTitle:l,$modalContent:g,$editArea:u,$optionsLabel:y}),u.change(function(){$(this).attr("data-modifiled","true"),$(window).bind("beforeunload",function(){return o("window-leave-confirm")})}),ee("edit")||(ssi_modal.notify("dialog",{className:"in-page-edit",position:"center bottom",title:o("notify-no-right"),content:o("editor-no-right"),okBtn:{label:o("ok"),className:"btn btn-primary",method(S,v){v.close()}}}),x.find(".save-btn").addClass("btn-danger")),t.get(e.jsonGet).done(function(S){console.timeEnd("[InPageEdit] 获取页面源代码"),w(S)}).fail(function(S,v,m){console.timeEnd("[InPageEdit] 获取页面源代码"),console.warn("[InPageEdit]警告：无法获取页面内容");var P=m;w(P)});function w(S){e.pageDetail=S,S.error?(console.warn("[InPageEdit]警告：无法获取页面内容"),e.editText="<!-- "+S.error.info+" -->",e.pageId=-1,y.find(".detailArea").hide()):(e.editText=e.section==="new"?"":S.parse.wikitext,e.pageId=S.parse.pageid),g.find(".ipe-progress").hide(),x.find(".hideBeforeLoaded").fadeIn(500),u.val(e.editText+`
`);var v;e.section&&e.section!=="new"?(v=y.find(".editSummary").val(),v=v.replace(/\$section/gi,`/* ${S.parse.sections[0].anchor} */`),y.find(".editSummary").val(v),l.find(".editPage").after('<span class="editSection"> → '+S.parse.sections[0].line+"</span>"),e.jumpTo="#"+S.parse.sections[0].anchor):e.section!=="new"&&(v=y.find(".editSummary").val(),v=v.replace(/\$section/gi,""),y.find(".editSummary").val(v),e.jumpTo=""),e.revision!==null&&e.revision!==""&&e.revision!==A.wgCurRevisionId&&e.section!=="new"?(l.find(".editPage").after('<span class="editRevision">('+o("editor-title-editRevision")+"："+e.revision+")</span>"),x.find(".diff-btn").on("click",function(){R("quick_diff_edit");var z=u.val(),T={fromrev:e.revision,totext:z,hideBtn:!0,pageName:e.page,isPreview:!0};e.section&&(T.fromsection=e.section),Y(T)})):x.find(".diff-btn").attr("disabled",!0),console.time("[InPageEdit] 获取页面基础信息");var m={action:"query",prop:"revisions|info",inprop:"protection|watched",format:"json"};e.pageId!==-1?m.pageids=e.pageId:m.titles=e.page,t.get(m).done(function(z){console.info("[InPageEdit] 获取页面基础信息成功"),console.timeEnd("[InPageEdit] 获取页面基础信息"),g.data("basetimestamp",z.query.pages?.[0]?.revisions?.[0]?.timestamp??p),g.data("starttimestamp",z.query.pages?.[0]?.touched,p),P(z)}).fail(function(z,T,I){var E=I;console.timeEnd("[InPageEdit] 获取页面基础信息"),console.warn("[InPageEdit] 获取页面基础信息失败"),g.data("basetimestamp",p),g.data("starttimestamp",p),P(E)});function P(z){const T=z.query.pages[0];if(e.namespace=T?.ns??0,e.protection=T?.protection||[],e.revision=T?.revisions?.[0]?.revid,e.page=T.title,l.find(".editPage").text(e.page),e.watchList==="nochange"&&y.find(".watchList").prop("disabled",!1).prop("checked",T.watched).off("click").removeAttr("title"),e.revision&&e.section!=="new"&&x.find(".diff-btn").removeAttr("disabled").on("click",function(){R("quick_diff_edit");var D=u.val(),N={fromrev:e.revision,totext:D,hideBtn:!0,pageName:e.page,isPreview:!0};e.section&&(N.fromsection=e.section),Y(N)}),e.protection.length>0){const D=i=>i?ee(i.replace("sysop","editprotected").replace("autoconfirmed","editsemiprotected")):!0,N=e.protection.find(({type:i})=>i==="edit");(!D(N?.level)||e.namespace===8&&!ee("editinterface"))&&x.find(".save-btn").addClass("btn-danger").attr("title",o("editor-no-right"))}const I="Editnotice-"+e.namespace,E=I+"-"+e.page.replace(/_/g," ").replace(A.wgFormattedNamespaces[e.namespace]+":","");t.get({action:"query",meta:"allmessages",ammessages:[I,E],amenableparser:1}).done(function(D){const N=D.query.allmessages[0].content||"",i=D.query.allmessages[1].content||"",n=N+`
`+i;n.trim()&&t.post({action:"parse",text:n,title:e.page,preview:!0,disablelimitreport:!0,disableeditsection:!0,disabletoc:!0}).then(d=>{const f=d.parse.text;g.data("editNotice",f),x.find(".showEditNotice").show()})})}}},beforeClose(h){if(u.attr("data-modifiled")!=="true"){x();return}else if(u.attr("data-confirmclose")==="true"){w();return}ssi_modal.confirm({className:"in-page-edit",center:!0,content:o("editor-leave-confirm"),okBtn:{className:"btn btn-danger",label:o("confirm")},cancelBtn:{className:"btn btn-secondary",label:o("cancel")}},function(S){S===!0&&x()});function x(){$(window).off("beforeunload"),h.options.keepContent=!1,h.options.beforeClose="",h.close(),ssi_modal.notify("info",{className:"in-page-edit",position:"right top",title:o("cancel"),content:o("notify-no-change")})}function w(){$(window).off("beforeunload"),h.options.keepContent=!1,h.options.beforeClose="",h.close()}return!1}}),y.find(".detailBtnGroup .detailBtn").on("click",function(){R("quick_edit_pagedetail");var h=$(this),x=h.attr("id"),w=$("<ul>");switch(x){case"showTemplates":{const S=e.pageDetail.parse.templates;console.info("[InPageEdit] QuickEdit","模板列表",S);for(let v=0;v<S.length;v++){let m=S[v].title;$("<li>").append($("<a>",{href:mw.util.getUrl(m),rel:"noopener",target:"_blank",text:m})," (",$("<a>",{href:"javascript:;",text:o("quick-edit"),class:"quickEditTemplate","data-template-name":m})," | ",$("<a>",{href:"javascript:;",text:o("links-here"),class:"quickEditLinksHere"}).on("click",function(){re(m)}),")").appendTo(w)}ssi_modal.show({className:"in-page-edit quick-edit-detail",sizeClass:"dialog",title:o("editor-detail-title-templates"),content:w});break}case"showImages":{const S=e.pageDetail.parse.images;for(let v=0;v<S.length;v++){const m=S[v];$("<li>").append($("<a>",{href:mw.util.getUrl("File:"+m),target:"_balnk",text:m})," (",$("<a>",{href:"javascript:;",class:"quickViewImage",text:o("editor-detail-images-quickview"),"data-image-name":m})," | ",$("<a>",{href:A.wgScript+"?title=Special:Upload&wpDestFile="+m+"&wpForReUpload=1",target:"_balnk",text:o("editor-detail-images-upload")}),"|",$("<a>",{href:"javascript:;",text:o("links-here"),class:"quickEditLinksHere"}).on("click",function(){re(`File:${m}`)}),")").appendTo(w)}ssi_modal.show({className:"in-page-edit quick-edit-detail",sizeClass:"dialog",title:o("editor-detail-title-files"),content:w});break}}$(".in-page-edit.quick-edit-detail .quickEditTemplate").on("click",function(){R("quick_edit_pagedetail_edit_template");var S=$(this),v=S.attr("data-template-name");ie({page:v})}),$(".in-page-edit.quick-edit-detail .quickViewImage").on("click",function(){R("quick_edit_pagedetail_view_image");var S=$(this),v=S.attr("data-image-name");ssi_modal.show({className:"in-page-edit quick-view-image",center:!0,title:v.replace(/_/g," "),content:$("<center>",{id:"imageLayer"}).append(J),buttons:[{label:o("editor-detail-images-upload"),className:"btn btn-primary",method(){window.open(mw.util.getUrl("Special:Upload",{wpDestFile:v,wpForReUpload:1}))}},{label:o("close"),className:"btn btn-secondary",method(m,P){P.close()}}],onShow(){t.get({action:"query",format:"json",prop:"imageinfo",titles:`File:${v.replace(/file:/g,"")}`,iiprop:"url"}).done(function(m){$(".quick-view-image .ipe-progress").hide(),$(".quick-view-image #imageLayer").append($("<img>",{src:m.query.pages[-1].imageinfo[0].url,class:"loading",style:"max-width: 80%; max-height: 60vh"})),$(".quick-view-image #imageLayer img").load(function(){$(this).removeClass("loading")})})}})})});function C({text:h,page:x,minor:w,summary:S,section:v,sectiontitle:m,watchlist:P},z){R("quick_edit_save"),K(o("editor-title-saving")),e.jsonPost={action:"edit",starttimestamp:g.data("starttimestamp"),basetimestamp:g.data("basetimestamp"),text:h,title:x,watchlist:P,summary:S,errorformat:"plaintext",...w?{minor:!0}:{notminor:!0}},v!==void 0&&v!==""&&v!==null&&(e.jsonPost.section=v),m!==void 0&&m!==""&&(e.jsonPost.sectiontitle=m,e.jumpTo="#"+m),t.postWithToken("csrf",e.jsonPost).done(T).fail(I);function T(E,D,N){if(E.edit.result==="Success"){if(K(!0),y.find(".reloadPage").prop("checked")){var i;$(window).unbind("beforeunload"),i=o("notify-save-success"),setTimeout(function(){x===A.wgPageName&&(window.location=mw.util.getUrl(x)+e.jumpTo),window.location.reload()},500)}else console.info("[InPageEdit] 将不会重载页面！"),i=o("notify-save-success-noreload"),setTimeout(function(){K(!1),u.attr("data-confirmclose","true"),z.close()},1500);ssi_modal.notify("success",{className:"in-page-edit",position:"right top",title:o("notify-success"),content:i})}else I(E,D,N)}function I(E,D,N){K(!1);var i=N||E,n,d="";i.errors!==void 0?(E=i.errors[0].code,n=i.errors[0]["*"],d=""):i.edit.result!=="Success"?(E=i.edit.code||"Unknown",n=i.edit.info||"Reason unknown.",d=i.edit.warning||""):(E="unknown",n="Reason unknown.",d="Please contact plug-in author or try again."),ssi_modal.show({className:"in-page-edit",sizeClass:"dialog",center:!0,title:o("editor-save-error"),content:n+'<hr style="clear: both" />'+d}),ssi_modal.notify("error",{className:"in-page-edit",position:"right top",closeAfter:{time:15},title:o("notify-error"),content:o("editor-save-error")+"：<code>"+E+"</code>"}),console.error(`[InPageEdit] Submit failed: 
Code: `+E)}}}function ve(e){e||(O.get("redLinkQuickEdit")===!0?e=$("#mw-content-text a, #firstHeading a"):e=$("#mw-content-text a:not(.new), #firstHeading a:not(.new)")),$(e).each(function(r,c){const s=c.getAttribute("href");if(!s||/^(?:#|javascript:|vbscript:|data:)/i.test(s))return;const a=c.href,p=A.wgArticlePath.replace("$1",""),l=`${location.protocol}//${A.wgServer.split("//")[1]}`,u=`${l}${p}`,y=`${l}${A.wgScriptPath}`;if(!a.startsWith(u)&&!a.startsWith(y))return;const k=new URL(a),g=k.searchParams,C=g.get("action")||g.get("veaction"),h=g.get("title")||decodeURI(k.pathname.substring(p.length))||null,x=g.get("section")?.replace(/^T-/,"")||null,w=g.get("oldid");if(!h||h.endsWith(".php")||!["edit","editsource","editredlink","submit"].includes(C)||g.get("undo")||g.get("preload"))return;const S=$("<span>",{class:"in-page-edit-article-link-group"}).append($("<a>",{href:a,class:"in-page-edit-article-link",text:o("quick-edit")}).on("click",function(v){v.preventDefault();var m={};m.page=h,w!==null?m.revision=w:x!==null&&(m.section=x),A.wgIsArticle||(m.reload=!1),ie(m)}));$(c).addClass("ipe-articleLink-resolved").after(S)})}const bi=e=>{const t=e.originalEvent||e;return t.altKey||t.ctrlKey||t.metaKey||t.shiftKey},Me=e=>(e.originalEvent||e).button===0&&!bi(e),{getParamValue:le}=mw.util;function wi(e){$(e||"#mw-content-text").find("a[href]:not(.ipe-diff-mounted)").toArray().forEach(t=>{const r=$(t),c=r.attr("href");let s=le("diff",c),a=le("curid",c),p=le("oldid",c),l=le("timestamp",c);const u=["prev","next","cur"],y=(mw.config.get("wgSpecialPageAliases",[]).find(({realname:S})=>S==="Diff")?.aliases.map(S=>[S,encodeURI(S)]).flat()||["Diff"]).join("|"),k=A.wgArticlePath.replace("$1",""),g=`Special|${A.wgFormattedNamespaces[-1]}`,C=new RegExp(`^${k}(?:${g}):(?:${y})/(\\d+|${u.join("|")})(?:/(\\d+|${u.join("|")}))?$`),h=c.match(C);if(h&&(s=h[2]||h[1],p=h[2]?h[1]:"prev"),s===null||l!==null)return;!p&&!a&&(p="prev"),u.includes(p)&&([s,p]=[p,s]),r.addClass("ipe-diff-mounted");const x={},w=S=>u.includes(S)||S===null?"relative":S==="0"?"id":"rev";x[`from${w(p)}`]=p,x[`to${w(s)}`]=s!=="0"?s:a,r.attr("ipe-diff-params",JSON.stringify(x)),r.on("click",function(S){if(Me(S))return S.preventDefault(),R("quick_diff_recentchanges"),Y(x)})})}function Te(e){wi(e),A.wgAction==="history"&&($(".historysubmit.mw-history-compareselectedversions-button").after($("<button>").text(o("quick-diff")).on("click",function(t){if(!Me(t))return;t.preventDefault(),R("quick_diff_history_page");const r=$(".selected.before").attr("data-mw-revid"),c=$(".selected.after").attr("data-mw-revid");Y({fromrev:c,torev:r})})),$("[data-mw-revid]").each(function(){var t=$(this),r=t.attr("data-mw-revid");t.find(".mw-history-undo").after($("<span>").append(" | ",$("<a>",{href:"javascript:;",class:"in-page-edit-article-link",text:o("quick-edit")}).on("click",function(){ie({page:A.wgPageName,revision:r})})))}))}function ke(e,t=""){mw.hook("InPageEdit.quickDelete").fire(),console.log("Quick delete",e,t);let r="";e=e||A.wgPageName,ssi_modal.show({outSideClose:!1,className:"in-page-edit quick-delete",center:!0,sizeClass:"dialog",title:o("delete-title"),content:$("<div>").append($("<section>",{id:"InPageEditDeletepage"}).append($("<span>",{html:o("delete-reason","<b>"+e.replace(/_/g," ")+"</b>")}),L,$("<label>",{for:"delete-reason",text:o("editSummary")}),$("<input>",{id:"delete-reason",style:"width:96%",onclick:"$(this).css('box-shadow', '')",value:t}))),beforeShow:function(){if(!ee("delete"))return ssi_modal.dialog({title:o("notify-no-right"),content:o("delete-no-right"),className:"in-page-edit quick-deletepage",center:!0,okBtn:{className:"btn btn-primary btn-single"}}),!1},buttons:[{label:o("cancel"),className:"btn btn-primary",method:function(c,s){s.close()}},{label:o("confirm"),className:"btn btn-danger",method:function(c,s){if(r=$("#InPageEditDeletepage #delete-reason").val(),r===""){$("#InPageEditDeletepage #delete-reason").css("box-shadow","0 0 4px #f00");return}R("quick_delete"),ssi_modal.confirm({center:!0,className:"in-page-edit",title:o("delete-confirm-title"),content:o("delete-confirm-content"),okBtn:{label:o("confirm"),className:"btn btn-danger"},cancelBtn:{label:o("cancel"),className:"btn"}},function(a){if(a)r=o("delete-title")+" ("+r+")",Q().postWithToken("csrf",{action:"delete",title:e,reason:r,format:"json"}).then(()=>{ssi_modal.notify("success",{className:"in-page-edit",title:o("notify-success"),content:o("notify-delete-success",e)})}).fail(function(p,l,u){ssi_modal.notify("error",{className:"in-page-edit",title:o("notify-error"),content:o("notify-delete-error")+': <br/><span style="font-size:amall">'+u.error.info+"(<code>"+u.error.code+"</code>)</span>"})}),s.close();else return!1})}}]})}const _e=function(e,t={}){const r=ee("delete");typeof t=="string"&&(t={delete:t,edit:t}),ssi_modal.show({className:"in-page-edit resovle-exists",sizeClass:"dialog",center:!0,outSideClose:!1,title:o("target-exists-title"),content:o(r?"target-exists-can-delete":"target-exists-no-delete",e),buttons:[{className:"btn btn-danger btn-exists-delete-target",label:o("quick-delete"),method(c,s){s.close(),ke(e,t.delete||null)}},{className:"btn btn-primary",label:o("quick-edit"),method(){ie({page:e,summary:t.edit?"[InPageEdit] "+t:null,reload:!1})}},{className:"btn btn-secondary"+(r?" btn-single":""),label:o("cancel"),method:(c,s)=>{s.close()}}],onShow:()=>{r||$(".btn-exists-delete-target").hide()}})};function Ae(e="to"){mw.hook("InPageEdit.quickRedirect").fire();const t=Q();var r="#REDIRECT [[:$1]]",c,s,a={action:"edit",createonly:1,minor:O.get("editMinor"),format:"json",errorformat:"plaintext"},p;if(e==="to")a.title=A.wgPageName,c=o("redirect-question-to","<b>"+A.wgPageName.replace(/_/g," ")+"</b>");else if(e==="from")c=o("redirect-question-from","<b>"+A.wgPageName.replace(/_/g," ")+"</b>"),p=o("redirect-summary")+" → [[:"+A.wgPageName+"]]";else{console.error('[InPageEdit] quickRedirect only accept "from" or "to"');return}ssi_modal.show({outSideClose:!1,className:"in-page-edit quick-redirect",center:!0,sizeClass:"dialog",title:o("redirect-title"),content:$("<div>").append($("<section>").append($("<span>",{html:c}),L,$("<input>",{id:"redirect-page",style:"width:96%"}).on("click",function(){$(this).css("box-shadow","")}),...e==="from"?[L,$("<label>",{for:"redirect-fragment",text:o("redirect-question-fragment")}),$("<input>",{id:"redirect-fragment",style:"width:96%"})]:[],L,$("<label>",{for:"redirect-reason",text:o("editSummary")}),$("<input>",{id:"redirect-reason",style:"width:96%"})),$(J).css("display","none")),buttons:[{label:o("confirm"),className:"btn btn-primary btn-single okBtn",method:function(l,u){if(s=$(".in-page-edit.quick-redirect #redirect-page").val(),s===""||s.replace(/_/g," ")===A.wgPageName.replace(/_/g," ")){$(".in-page-edit.quick-redirect #redirect-page").css("box-shadow","0 0 4px #f00");return}if(R("quick_redirect"),e==="to")p=o("redirect-summary")+" → [[:"+s+"]]",a.text=r.replace("$1",s);else if(e==="from"){let C=$(".in-page-edit.quick-redirect #redirect-fragment").val().trim();C&&!C.startsWith("#")&&(C=`#${C}`),a.title=s,a.text=r.replace("$1",`${A.wgPageName}${C}`)}$(".in-page-edit.quick-redirect #redirect-reason").val()!==""&&(p=p+" ("+$(".in-page-edit.quick-redirect #redirect-reason").val()+")"),a.summary=p,$(".in-page-edit.quick-redirect .ipe-progress").show(),$(".in-page-edit.quick-redirect section").hide(),$(".in-page-edit.quick-redirect .okBtn").attr("disabled","disabled");let y=Promise.resolve();O.get("noRedirectIfConvertedTitleExists")&&(y=t.get({titles:a.title,converttitles:1}).done(C=>{const h=C.query.pages[0];if(h?.missing!==!0)throw g("articleexists",{fromPage:h.title,errors:[{info:o("notify-redirect-converted-error")}]}),null}).fail((C,h)=>{throw g(C,h),null})),y.then(()=>{t.postWithToken("csrf",a).done(k).fail(g)},()=>{});function k(C){if(C.errors){g(C.errors[0].code,C);return}$(".in-page-edit.quick-redirect .ipe-progress").addClass("done"),ssi_modal.notify("success",{className:"in-page-edit",content:o("notify-redirect-success"),title:o("notify-success")}),e==="to"?window.location.reload():($(".in-page-edit.quick-redirect .ipe-progress").addClass("done"),setTimeout(function(){u.close()},2e3))}function g(C,h){if($(".in-page-edit.quick-redirect .ipe-progress").hide(),$(".in-page-edit.quick-redirect section").show(),$(".in-page-edit.quick-redirect .okBtn").attr("disabled",!1),$(".in-page-edit.quick-redirect .ipe-progress").addClass("done"),ssi_modal.notify("error",{className:"in-page-edit",content:o("notify-redirect-error")+"<br>"+h.errors[0].info+" (<code>"+C+"</code>)",title:o("notify-error")}),C==="articleexists"){var x,w;e==="from"?(x=h.fromPage??s,w=A.wgPageName):e==="to"&&(x=h.fromPage??A.wgPageName,w=s),_e(x,{delete:"Delete for redirect to [["+w+"]]",edit:"Modify for redirect"})}}}}]})}function ye(e,t){mw.hook("InPageEdit.quickRename").fire(),e=e||A.wgPageName,t=t||"";var r,c,s,a;ssi_modal.show({outSideClose:!1,className:"in-page-edit quick-rename",center:!0,sizeClass:"dialog",title:o("rename-title"),content:$("<section>").append($("<label>",{for:"move-to",html:o("rename-moveTo","<b>"+e.replace(/_/g," ")+"</b>")}),L,$("<input>",{id:"move-to",style:"width:96%",onclick:"$(this).css('box-shadow','')"}),L,$("<label>",{for:"move-reason",text:o("editSummary")}),L,$("<input>",{id:"move-reason",style:"width:96%"}),L,$("<label>").append($("<input>",{type:"checkbox",id:"movetalk",checked:"checked"}),$("<span>",{text:o("rename-movetalk")})),L,$("<label>").append($("<input>",{type:"checkbox",id:"movesubpages",checked:"checked"}),$("<span>",{text:o("rename-movesubpages")})),L,$("<label>").append($("<input>",{type:"checkbox",id:"noredirect",disabled:!ee("suppressredirect")}),$("<span>",{text:o("rename-noredirect")}))),buttons:[{label:o("cancel"),className:"btn btn-secondary",method:function(p,l){l.close()}},{label:o("confirm"),className:"btn btn-primary",method:function(){if(t=$(".in-page-edit.quick-rename #move-to").val(),t===""||t===A.wgPageName||t===A.wgPageName.replace(/_/g," ")){$(".in-page-edit.quick-rename #move-to").css("box-shadow","0 0 4px #f00");return}R("quick_move"),K(o("editor-title-saving")),c=$(".in-page-edit.quick-rename #movetalk").prop("checked"),s=$(".in-page-edit.quick-rename #movesubpages").prop("checked"),a=$(".in-page-edit.quick-rename #noredirect").prop("checked"),r=$(".in-page-edit.quick-rename #move-reason").val(),r===""?r=o("rename-summary")+" → [[:"+t+"]]":r=o("rename-summary")+" → [[:"+t+"]] ("+r+")",Q().postWithToken("csrf",{action:"move",from:e,to:t,reason:r,movetalk:c,movesubpages:s,noredirect:a}).done(function(){K(!0),ssi_modal.notify("success",{className:"in-page-edit",content:o("notify-rename-success"),title:o("notify-success")}),location.href=A.wgArticlePath.replace("$1",encodeURI(t))}).fail(function(p,l,u){K(!1),ssi_modal.notify("error",{className:"in-page-edit",content:o("notify-rename-error")+": "+u.error.info+"<code>"+u.error.code+"</code>",title:o("notify-error")}),u.error.code==="articleexists"&&_e(t,o("rename-articleexists-reason",e))})}}],beforeShow:function(){if(!ee("move"))return ssi_modal.dialog({title:o("notify-no-right"),content:o("rename-no-right"),className:"in-page-edit quick-deletepage",center:!0,okBtn:{className:"btn btn-primary btn-single"}}),!1}})}function je(){ssi_modal.notify("dialog",{className:"in-page-edit ipe-special-notice",title:o("version-notice-title"),content:o("version-notice"),okBtn:{label:o("updatelog-dismiss"),className:"btn btn-primary"}},function(e,t){localStorage.setItem("InPageEditNoticeId",o("noticeid")),t.close()})}function qe(){ssi_modal.show({className:"in-page-edit update-logs-modal",title:o("updatelog-title")+' - <span id="yourVersion">'+F+"</span>",content:$("<section>").append($("<iframe>",{style:"margin: 0;padding: 0;width: 100%;height: 80vh;border: 0;",src:We})),buttons:[{label:"GitHub",className:"btn btn-secondary",method:function(){window.open(se)}},{label:o("updatelog-about"),className:"btn btn-secondary",method:function(){window.open(fe)}},{label:o("close"),className:"btn btn-primary",method:function(e,t){t.close()}}]})}function vi(){localStorage.getItem("InPageEditVersion")!==F&&ssi_modal.notify("",{title:o("updatelog-update-success-title"),content:o("updatelog-update-success",F),className:"in-page-edit",buttons:[{className:"btn btn-primary",label:o("updatelog-button-versioninfo"),method(e,t){localStorage.setItem("InPageEditVersion",F),qe(),t.close()}}],closeAfter:{time:10,resetOnHover:!0},onClose(){localStorage.setItem("InPageEditVersion",F)}}),localStorage.getItem("InPageEditNoticeId")!==o("noticeid")&&je()}async function ki(){mw.hook("InPageEdit.init.before").fire(),await mw.loader.using(["mediawiki.api","mediawiki.util","mediawiki.user"]);const e=!!(mw.util.getParamValue("ipedev",location.href)||F!==localStorage.getItem("InPageEditVersion"));Xe(e),await Promise.all([ti(e),Ie("ssi-modal"),Ye()]),mw.hook("InPageEdit.init.i18n").fire({_msg:o}),mw.hook("InPageEdit.init.modal").fire({ssi_modal:window.ssi_modal}),O.set(),mw.hook("wikipage.content").add(Te),await $.ready,ve(),vi(),te.initUserPlugin();const t={_dir:oe,about:fi,endpoints:ri,articleLink:ve,linksHere:re,loadQuickDiff:Te,preference:O,progress:K,quickDelete:ke,quickDiff:Y,quickEdit:ie,quickPreview:be,quickRedirect:Ae,quickRename:ye,specialNotice:je,version:F,versionInfo:qe,delete:ke,diff:Y,edit:ie,preview:be,redirect:Ae,quickMove:ye,rename:ye};return mw.hook("InPageEdit").fire({_analytics:R,_msg:o,InPageEdit:t}),window["".concat("console")].info(`    ____      ____                   ______    ___ __ 
   /  _/___  / __ \\____ _____ ____  / ____/___/ (_) /_
   / // __ \\/ /_/ / __ \`/ __ \`/ _ \\/ __/ / __  / / __/
 _/ // / / / ____/ /_/ / /_/ /  __/ /___/ /_/ / / /_  
/___/_/ /_/_/    \\__,_/\\__, /\\___/_____/\\__,_/_/\\__/  
                      /____/                v`+F),t}/**
 * @license GPL-3.0 GNU GENERAL PUBLIC LICENSE 3.0
 *
 * @name InPageEdit
 * @description A useful MediaWiki JavaScript Plugin written with jQuery
 * @author 机智的小鱼君 Dragon-Fish <dragon-fish@qq.com>
 * @url https://github.com/Dragon-Fish/InPageEdit-v2
 */(async function(){const e=window.InPageEdit||{};if(e.__loaded)throw"[InPageEdit] InPageEdit 被多次加载。";e.__loaded=!0;const t=await ki();window.InPageEdit={...e,...t}})()});
//# sourceMappingURL=InPageEdit.min.js.map
