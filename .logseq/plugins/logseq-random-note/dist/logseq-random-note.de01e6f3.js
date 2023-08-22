// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"JoaV":[function(require,module,exports) {
var define;
var global = arguments[3];
/*! For license information please see lsplugin.user.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.LSPluginEntry=e():t.LSPluginEntry=e()}(self,(()=>(()=>{var t={227:(t,e,n)=>{var r=n(155);e.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;e.splice(1,0,n,"color: inherit");let r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(t=>{"%%"!==t&&(r++,"%c"===t&&(o=r))})),e.splice(o,0,n)},e.save=function(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug")}catch(t){}},e.load=function(){let t;try{t=e.storage.getItem("debug")}catch(t){}!t&&void 0!==r&&"env"in r&&(t=r.env.DEBUG);return t},e.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage=function(){try{return localStorage}catch(t){}}(),e.destroy=(()=>{let t=!1;return()=>{t||(t=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.log=console.debug||console.log||(()=>{}),t.exports=n(447)(e);const{formatters:o}=t.exports;o.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}},447:(t,e,n)=>{t.exports=function(t){function e(t){let n,o,i,s=null;function a(...t){if(!a.enabled)return;const r=a,o=Number(new Date),i=o-(n||o);r.diff=i,r.prev=n,r.curr=o,n=o,t[0]=e.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");let s=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return"%";s++;const i=e.formatters[o];if("function"==typeof i){const e=t[s];n=i.call(r,e),t.splice(s,1),s--}return n})),e.formatArgs.call(r,t);(r.log||e.log).apply(r,t)}return a.namespace=t,a.useColors=e.useColors(),a.color=e.selectColor(t),a.extend=r,a.destroy=e.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(o!==e.namespaces&&(o=e.namespaces,i=e.enabled(t)),i),set:t=>{s=t}}),"function"==typeof e.init&&e.init(a),a}function r(t,n){const r=e(this.namespace+(void 0===n?":":n)+t);return r.log=this.log,r}function o(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}return e.debug=e,e.default=e,e.coerce=function(t){if(t instanceof Error)return t.stack||t.message;return t},e.disable=function(){const t=[...e.names.map(o),...e.skips.map(o).map((t=>"-"+t))].join(",");return e.enable(""),t},e.enable=function(t){let n;e.save(t),e.namespaces=t,e.names=[],e.skips=[];const r=("string"==typeof t?t:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(t=r[n].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")))},e.enabled=function(t){if("*"===t[t.length-1])return!0;let n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1},e.humanize=n(824),e.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(t).forEach((n=>{e[n]=t[n]})),e.names=[],e.skips=[],e.formatters={},e.selectColor=function(t){let n=0;for(let e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;return e.colors[Math.abs(n)%e.colors.length]},e.enable(e.load()),e}},856:function(t){t.exports=function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,n){return e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(t,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function r(t,o,i){return r=n()?Reflect.construct:function(t,n,r){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return r&&e(i,r.prototype),i},r.apply(null,arguments)}function o(t){return i(t)||s(t)||a(t)||l()}function i(t){if(Array.isArray(t))return c(t)}function s(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function a(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=Object.hasOwnProperty,f=Object.setPrototypeOf,p=Object.isFrozen,d=Object.getPrototypeOf,h=Object.getOwnPropertyDescriptor,m=Object.freeze,g=Object.seal,v=Object.create,y="undefined"!=typeof Reflect&&Reflect,b=y.apply,_=y.construct;b||(b=function(t,e,n){return t.apply(e,n)}),m||(m=function(t){return t}),g||(g=function(t){return t}),_||(_=function(t,e){return r(t,o(e))});var w=I(Array.prototype.forEach),x=I(Array.prototype.pop),C=I(Array.prototype.push),O=I(String.prototype.toLowerCase),S=I(String.prototype.match),j=I(String.prototype.replace),A=I(String.prototype.indexOf),k=I(String.prototype.trim),E=I(RegExp.prototype.test),T=F(TypeError);function I(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return b(t,e,r)}}function F(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return _(t,n)}}function L(t,e){f&&f(t,null);for(var n=e.length;n--;){var r=e[n];if("string"==typeof r){var o=O(r);o!==r&&(p(e)||(e[n]=o),r=o)}t[r]=!0}return t}function N(t){var e,n=v(null);for(e in t)b(u,t,[e])&&(n[e]=t[e]);return n}function M(t,e){for(;null!==t;){var n=h(t,e);if(n){if(n.get)return I(n.get);if("function"==typeof n.value)return I(n.value)}t=d(t)}function r(t){return console.warn("fallback value for",t),null}return r}var P=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),R=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),D=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),U=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),$=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),z=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=m(["#text"]),B=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),q=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),W=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),G=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),J=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Z=g(/<%[\w\W]*|[\w\W]*%>/gm),V=g(/^data-[\-\w.\u00B7-\uFFFF]/),K=g(/^aria-[\-\w]+$/),Y=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Q=g(/^(?:\w+script|data):/i),X=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),tt=g(/^html$/i),et=function(){return"undefined"==typeof window?null:window},nt=function(e,n){if("object"!==t(e)||"function"!=typeof e.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function rt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et(),n=function(t){return rt(t)};if(n.version="2.3.8",n.removed=[],!e||!e.document||9!==e.document.nodeType)return n.isSupported=!1,n;var r=e.document,i=e.document,s=e.DocumentFragment,a=e.HTMLTemplateElement,c=e.Node,l=e.Element,u=e.NodeFilter,f=e.NamedNodeMap,p=void 0===f?e.NamedNodeMap||e.MozNamedAttrMap:f,d=e.HTMLFormElement,h=e.DOMParser,g=e.trustedTypes,v=l.prototype,y=M(v,"cloneNode"),b=M(v,"nextSibling"),_=M(v,"childNodes"),I=M(v,"parentNode");if("function"==typeof a){var F=i.createElement("template");F.content&&F.content.ownerDocument&&(i=F.content.ownerDocument)}var ot=nt(g,r),it=ot?ot.createHTML(""):"",st=i,at=st.implementation,ct=st.createNodeIterator,lt=st.createDocumentFragment,ut=st.getElementsByTagName,ft=r.importNode,pt={};try{pt=N(i).documentMode?i.documentMode:{}}catch(t){}var dt={};n.isSupported="function"==typeof I&&at&&void 0!==at.createHTMLDocument&&9!==pt;var ht,mt,gt=J,vt=Z,yt=V,bt=K,_t=Q,wt=X,xt=Y,Ct=null,Ot=L({},[].concat(o(P),o(R),o(D),o($),o(H))),St=null,jt=L({},[].concat(o(B),o(q),o(W),o(G))),At=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),kt=null,Et=null,Tt=!0,It=!0,Ft=!1,Lt=!1,Nt=!1,Mt=!1,Pt=!1,Rt=!1,Dt=!1,Ut=!1,$t=!0,zt=!0,Ht=!1,Bt={},qt=null,Wt=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Gt=null,Jt=L({},["audio","video","img","source","image","track"]),Zt=null,Vt=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Kt="http://www.w3.org/1998/Math/MathML",Yt="http://www.w3.org/2000/svg",Qt="http://www.w3.org/1999/xhtml",Xt=Qt,te=!1,ee=["application/xhtml+xml","text/html"],ne="text/html",re=null,oe=i.createElement("form"),ie=function(t){return t instanceof RegExp||t instanceof Function},se=function(e){re&&re===e||(e&&"object"===t(e)||(e={}),e=N(e),Ct="ALLOWED_TAGS"in e?L({},e.ALLOWED_TAGS):Ot,St="ALLOWED_ATTR"in e?L({},e.ALLOWED_ATTR):jt,Zt="ADD_URI_SAFE_ATTR"in e?L(N(Vt),e.ADD_URI_SAFE_ATTR):Vt,Gt="ADD_DATA_URI_TAGS"in e?L(N(Jt),e.ADD_DATA_URI_TAGS):Jt,qt="FORBID_CONTENTS"in e?L({},e.FORBID_CONTENTS):Wt,kt="FORBID_TAGS"in e?L({},e.FORBID_TAGS):{},Et="FORBID_ATTR"in e?L({},e.FORBID_ATTR):{},Bt="USE_PROFILES"in e&&e.USE_PROFILES,Tt=!1!==e.ALLOW_ARIA_ATTR,It=!1!==e.ALLOW_DATA_ATTR,Ft=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Lt=e.SAFE_FOR_TEMPLATES||!1,Nt=e.WHOLE_DOCUMENT||!1,Rt=e.RETURN_DOM||!1,Dt=e.RETURN_DOM_FRAGMENT||!1,Ut=e.RETURN_TRUSTED_TYPE||!1,Pt=e.FORCE_BODY||!1,$t=!1!==e.SANITIZE_DOM,zt=!1!==e.KEEP_CONTENT,Ht=e.IN_PLACE||!1,xt=e.ALLOWED_URI_REGEXP||xt,Xt=e.NAMESPACE||Qt,e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(At.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ie(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(At.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(At.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ht=ht=-1===ee.indexOf(e.PARSER_MEDIA_TYPE)?ne:e.PARSER_MEDIA_TYPE,mt="application/xhtml+xml"===ht?function(t){return t}:O,Lt&&(It=!1),Dt&&(Rt=!0),Bt&&(Ct=L({},o(H)),St=[],!0===Bt.html&&(L(Ct,P),L(St,B)),!0===Bt.svg&&(L(Ct,R),L(St,q),L(St,G)),!0===Bt.svgFilters&&(L(Ct,D),L(St,q),L(St,G)),!0===Bt.mathMl&&(L(Ct,$),L(St,W),L(St,G))),e.ADD_TAGS&&(Ct===Ot&&(Ct=N(Ct)),L(Ct,e.ADD_TAGS)),e.ADD_ATTR&&(St===jt&&(St=N(St)),L(St,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&L(Zt,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(qt===Wt&&(qt=N(qt)),L(qt,e.FORBID_CONTENTS)),zt&&(Ct["#text"]=!0),Nt&&L(Ct,["html","head","body"]),Ct.table&&(L(Ct,["tbody"]),delete kt.tbody),m&&m(e),re=e)},ae=L({},["mi","mo","mn","ms","mtext"]),ce=L({},["foreignobject","desc","title","annotation-xml"]),le=L({},["title","style","font","a","script"]),ue=L({},R);L(ue,D),L(ue,U);var fe=L({},$);L(fe,z);var pe=function(t){var e=I(t);e&&e.tagName||(e={namespaceURI:Qt,tagName:"template"});var n=O(t.tagName),r=O(e.tagName);return t.namespaceURI===Yt?e.namespaceURI===Qt?"svg"===n:e.namespaceURI===Kt?"svg"===n&&("annotation-xml"===r||ae[r]):Boolean(ue[n]):t.namespaceURI===Kt?e.namespaceURI===Qt?"math"===n:e.namespaceURI===Yt?"math"===n&&ce[r]:Boolean(fe[n]):t.namespaceURI===Qt&&!(e.namespaceURI===Yt&&!ce[r])&&!(e.namespaceURI===Kt&&!ae[r])&&!fe[n]&&(le[n]||!ue[n])},de=function(t){C(n.removed,{element:t});try{t.parentNode.removeChild(t)}catch(e){try{t.outerHTML=it}catch(e){t.remove()}}},he=function(t,e){try{C(n.removed,{attribute:e.getAttributeNode(t),from:e})}catch(t){C(n.removed,{attribute:null,from:e})}if(e.removeAttribute(t),"is"===t&&!St[t])if(Rt||Dt)try{de(e)}catch(t){}else try{e.setAttribute(t,"")}catch(t){}},me=function(t){var e,n;if(Pt)t="<remove></remove>"+t;else{var r=S(t,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ht&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var o=ot?ot.createHTML(t):t;if(Xt===Qt)try{e=(new h).parseFromString(o,ht)}catch(t){}if(!e||!e.documentElement){e=at.createDocument(Xt,"template",null);try{e.documentElement.innerHTML=te?"":o}catch(t){}}var s=e.body||e.documentElement;return t&&n&&s.insertBefore(i.createTextNode(n),s.childNodes[0]||null),Xt===Qt?ut.call(e,Nt?"html":"body")[0]:Nt?e.documentElement:s},ge=function(t){return ct.call(t.ownerDocument||t,t,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ve=function(t){return t instanceof d&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||!(t.attributes instanceof p)||"function"!=typeof t.removeAttribute||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore)},ye=function(e){return"object"===t(c)?e instanceof c:e&&"object"===t(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},be=function(t,e,r){dt[t]&&w(dt[t],(function(t){t.call(n,e,r,re)}))},_e=function(t){var e;if(be("beforeSanitizeElements",t,null),ve(t))return de(t),!0;if(E(/[\u0080-\uFFFF]/,t.nodeName))return de(t),!0;var r=mt(t.nodeName);if(be("uponSanitizeElement",t,{tagName:r,allowedTags:Ct}),t.hasChildNodes()&&!ye(t.firstElementChild)&&(!ye(t.content)||!ye(t.content.firstElementChild))&&E(/<[/\w]/g,t.innerHTML)&&E(/<[/\w]/g,t.textContent))return de(t),!0;if("select"===r&&E(/<template/i,t.innerHTML))return de(t),!0;if(!Ct[r]||kt[r]){if(!kt[r]&&xe(r)){if(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,r))return!1;if(At.tagNameCheck instanceof Function&&At.tagNameCheck(r))return!1}if(zt&&!qt[r]){var o=I(t)||t.parentNode,i=_(t)||t.childNodes;if(i&&o)for(var s=i.length-1;s>=0;--s)o.insertBefore(y(i[s],!0),b(t))}return de(t),!0}return t instanceof l&&!pe(t)?(de(t),!0):"noscript"!==r&&"noembed"!==r||!E(/<\/no(script|embed)/i,t.innerHTML)?(Lt&&3===t.nodeType&&(e=t.textContent,e=j(e,gt," "),e=j(e,vt," "),t.textContent!==e&&(C(n.removed,{element:t.cloneNode()}),t.textContent=e)),be("afterSanitizeElements",t,null),!1):(de(t),!0)},we=function(t,e,n){if($t&&("id"===e||"name"===e)&&(n in i||n in oe))return!1;if(It&&!Et[e]&&E(yt,e));else if(Tt&&E(bt,e));else if(!St[e]||Et[e]){if(!(xe(t)&&(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,t)||At.tagNameCheck instanceof Function&&At.tagNameCheck(t))&&(At.attributeNameCheck instanceof RegExp&&E(At.attributeNameCheck,e)||At.attributeNameCheck instanceof Function&&At.attributeNameCheck(e))||"is"===e&&At.allowCustomizedBuiltInElements&&(At.tagNameCheck instanceof RegExp&&E(At.tagNameCheck,n)||At.tagNameCheck instanceof Function&&At.tagNameCheck(n))))return!1}else if(Zt[e]);else if(E(xt,j(n,wt,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==A(n,"data:")||!Gt[t])if(Ft&&!E(_t,j(n,wt,"")));else if(n)return!1;return!0},xe=function(t){return t.indexOf("-")>0},Ce=function(t){var e,r,o,i;be("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:St};for(i=s.length;i--;){var c=e=s[i],l=c.name,u=c.namespaceURI;if(r="value"===l?e.value:k(e.value),o=mt(l),a.attrName=o,a.attrValue=r,a.keepAttr=!0,a.forceKeepAttr=void 0,be("uponSanitizeAttribute",t,a),r=a.attrValue,!a.forceKeepAttr&&(he(l,t),a.keepAttr))if(E(/\/>/i,r))he(l,t);else{Lt&&(r=j(r,gt," "),r=j(r,vt," "));var f=mt(t.nodeName);if(we(f,o,r))try{u?t.setAttributeNS(u,l,r):t.setAttribute(l,r),x(n.removed)}catch(t){}}}be("afterSanitizeAttributes",t,null)}},Oe=function t(e){var n,r=ge(e);for(be("beforeSanitizeShadowDOM",e,null);n=r.nextNode();)be("uponSanitizeShadowNode",n,null),_e(n)||(n.content instanceof s&&t(n.content),Ce(n));be("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(o,i){var a,l,u,f,p;if((te=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!ye(o)){if("function"!=typeof o.toString)throw T("toString is not a function");if("string"!=typeof(o=o.toString()))throw T("dirty is not a string, aborting")}if(!n.isSupported){if("object"===t(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof o)return e.toStaticHTML(o);if(ye(o))return e.toStaticHTML(o.outerHTML)}return o}if(Mt||se(i),n.removed=[],"string"==typeof o&&(Ht=!1),Ht){if(o.nodeName){var d=mt(o.nodeName);if(!Ct[d]||kt[d])throw T("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(a=me("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else{if(!Rt&&!Lt&&!Nt&&-1===o.indexOf("<"))return ot&&Ut?ot.createHTML(o):o;if(!(a=me(o)))return Rt?null:Ut?it:""}a&&Pt&&de(a.firstChild);for(var h=ge(Ht?o:a);u=h.nextNode();)3===u.nodeType&&u===f||_e(u)||(u.content instanceof s&&Oe(u.content),Ce(u),f=u);if(f=null,Ht)return o;if(Rt){if(Dt)for(p=lt.call(a.ownerDocument);a.firstChild;)p.appendChild(a.firstChild);else p=a;return St.shadowroot&&(p=ft.call(r,p,!0)),p}var m=Nt?a.outerHTML:a.innerHTML;return Nt&&Ct["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&E(tt,a.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+m),Lt&&(m=j(m,gt," "),m=j(m,vt," ")),ot&&Ut?ot.createHTML(m):m},n.setConfig=function(t){se(t),Mt=!0},n.clearConfig=function(){re=null,Mt=!1},n.isValidAttribute=function(t,e,n){re||se({});var r=mt(t),o=mt(e);return we(r,o,n)},n.addHook=function(t,e){"function"==typeof e&&(dt[t]=dt[t]||[],C(dt[t],e))},n.removeHook=function(t){if(dt[t])return x(dt[t])},n.removeHooks=function(t){dt[t]&&(dt[t]=[])},n.removeAllHooks=function(){dt={}},n}return rt()}()},729:t=>{"use strict";var e=Object.prototype.hasOwnProperty,n="~";function r(){}function o(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function i(t,e,r,i,s){if("function"!=typeof r)throw new TypeError("The listener must be a function");var a=new o(r,i||t,s),c=n?n+e:e;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],a]:t._events[c].push(a):(t._events[c]=a,t._eventsCount++),t}function s(t,e){0==--t._eventsCount?t._events=new r:delete t._events[e]}function a(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),a.prototype.eventNames=function(){var t,r,o=[];if(0===this._eventsCount)return o;for(r in t=this._events)e.call(t,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},a.prototype.listeners=function(t){var e=n?n+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,s=new Array(i);o<i;o++)s[o]=r[o].fn;return s},a.prototype.listenerCount=function(t){var e=n?n+t:t,r=this._events[e];return r?r.fn?1:r.length:0},a.prototype.emit=function(t,e,r,o,i,s){var a=n?n+t:t;if(!this._events[a])return!1;var c,l,u=this._events[a],f=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),f){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,r),!0;case 4:return u.fn.call(u.context,e,r,o),!0;case 5:return u.fn.call(u.context,e,r,o,i),!0;case 6:return u.fn.call(u.context,e,r,o,i,s),!0}for(l=1,c=new Array(f-1);l<f;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var p,d=u.length;for(l=0;l<d;l++)switch(u[l].once&&this.removeListener(t,u[l].fn,void 0,!0),f){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,e);break;case 3:u[l].fn.call(u[l].context,e,r);break;case 4:u[l].fn.call(u[l].context,e,r,o);break;default:if(!c)for(p=1,c=new Array(f-1);p<f;p++)c[p-1]=arguments[p];u[l].fn.apply(u[l].context,c)}}return!0},a.prototype.on=function(t,e,n){return i(this,t,e,n,!1)},a.prototype.once=function(t,e,n){return i(this,t,e,n,!0)},a.prototype.removeListener=function(t,e,r,o){var i=n?n+t:t;if(!this._events[i])return this;if(!e)return s(this,i),this;var a=this._events[i];if(a.fn)a.fn!==e||o&&!a.once||r&&a.context!==r||s(this,i);else{for(var c=0,l=[],u=a.length;c<u;c++)(a[c].fn!==e||o&&!a[c].once||r&&a[c].context!==r)&&l.push(a[c]);l.length?this._events[i]=1===l.length?l[0]:l:s(this,i)}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&s(this,e)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a},717:t=>{"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},824:t=>{var e=1e3,n=60*e,r=60*n,o=24*r,i=7*o,s=365.25*o;function a(t,e,n,r){var o=e>=1.5*n;return Math.round(t/n)+" "+r+(o?"s":"")}t.exports=function(t,c){c=c||{};var l=typeof t;if("string"===l&&t.length>0)return function(t){if((t=String(t)).length>100)return;var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"weeks":case"week":case"w":return c*i;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(t);if("number"===l&&isFinite(t))return c.long?function(t){var i=Math.abs(t);if(i>=o)return a(t,i,o,"day");if(i>=r)return a(t,i,r,"hour");if(i>=n)return a(t,i,n,"minute");if(i>=e)return a(t,i,e,"second");return t+" ms"}(t):function(t){var i=Math.abs(t);if(i>=o)return Math.round(t/o)+"d";if(i>=r)return Math.round(t/r)+"h";if(i>=n)return Math.round(t/n)+"m";if(i>=e)return Math.round(t/e)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},520:(t,e,n)=>{"use strict";var r=n(155),o="win32"===r.platform,i=n(539);function s(t,e){for(var n=[],r=0;r<t.length;r++){var o=t[r];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():e&&n.push(".."):n.push(o))}return n}function a(t){for(var e=t.length-1,n=0;n<=e&&!t[n];n++);for(var r=e;r>=0&&!t[r];r--);return 0===n&&r===e?t:n>r?[]:t.slice(n,r+1)}var c=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,l=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,u={};function f(t){var e=c.exec(t),n=(e[1]||"")+(e[2]||""),r=e[3]||"",o=l.exec(r);return[n,o[1],o[2],o[3]]}function p(t){var e=c.exec(t),n=e[1]||"",r=!!n&&":"!==n[1];return{device:n,isUnc:r,isAbsolute:r||!!e[2],tail:e[3]}}function d(t){return"\\\\"+t.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}u.resolve=function(){for(var t="",e="",n=!1,o=arguments.length-1;o>=-1;o--){var a;if(o>=0?a=arguments[o]:t?(a=r.env["="+t])&&a.substr(0,3).toLowerCase()===t.toLowerCase()+"\\"||(a=t+"\\"):a=r.cwd(),!i.isString(a))throw new TypeError("Arguments to path.resolve must be strings");if(a){var c=p(a),l=c.device,u=c.isUnc,f=c.isAbsolute,h=c.tail;if((!l||!t||l.toLowerCase()===t.toLowerCase())&&(t||(t=l),n||(e=h+"\\"+e,n=f),t&&n))break}}return u&&(t=d(t)),t+(n?"\\":"")+(e=s(e.split(/[\\\/]+/),!n).join("\\"))||"."},u.normalize=function(t){var e=p(t),n=e.device,r=e.isUnc,o=e.isAbsolute,i=e.tail,a=/[\\\/]$/.test(i);return(i=s(i.split(/[\\\/]+/),!o).join("\\"))||o||(i="."),i&&a&&(i+="\\"),r&&(n=d(n)),n+(o?"\\":"")+i},u.isAbsolute=function(t){return p(t).isAbsolute},u.join=function(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&t.push(n)}var r=t.join("\\");return/^[\\\/]{2}[^\\\/]/.test(t[0])||(r=r.replace(/^[\\\/]{2,}/,"\\")),u.normalize(r)},u.relative=function(t,e){t=u.resolve(t),e=u.resolve(e);for(var n=t.toLowerCase(),r=e.toLowerCase(),o=a(e.split("\\")),i=a(n.split("\\")),s=a(r.split("\\")),c=Math.min(i.length,s.length),l=c,f=0;f<c;f++)if(i[f]!==s[f]){l=f;break}if(0==l)return e;var p=[];for(f=l;f<i.length;f++)p.push("..");return(p=p.concat(o.slice(l))).join("\\")},u._makeLong=function(t){if(!i.isString(t))return t;if(!t)return"";var e=u.resolve(t);return/^[a-zA-Z]\:\\/.test(e)?"\\\\?\\"+e:/^\\\\[^?.]/.test(e)?"\\\\?\\UNC\\"+e.substring(2):t},u.dirname=function(t){var e=f(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},u.basename=function(t,e){var n=f(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},u.extname=function(t){return f(t)[3]},u.format=function(t){if(!i.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!i.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);var n=t.dir,r=t.base||"";return n?n[n.length-1]===u.sep?n+r:n+u.sep+r:r},u.parse=function(t){if(!i.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=f(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},u.sep="\\",u.delimiter=";";var h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,m={};function g(t){return h.exec(t).slice(1)}m.resolve=function(){for(var t="",e=!1,n=arguments.length-1;n>=-1&&!e;n--){var o=n>=0?arguments[n]:r.cwd();if(!i.isString(o))throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,e="/"===o[0])}return(e?"/":"")+(t=s(t.split("/"),!e).join("/"))||"."},m.normalize=function(t){var e=m.isAbsolute(t),n=t&&"/"===t[t.length-1];return(t=s(t.split("/"),!e).join("/"))||e||(t="."),t&&n&&(t+="/"),(e?"/":"")+t},m.isAbsolute=function(t){return"/"===t.charAt(0)},m.join=function(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];if(!i.isString(n))throw new TypeError("Arguments to path.join must be strings");n&&(t+=t?"/"+n:n)}return m.normalize(t)},m.relative=function(t,e){t=m.resolve(t).substr(1),e=m.resolve(e).substr(1);for(var n=a(t.split("/")),r=a(e.split("/")),o=Math.min(n.length,r.length),i=o,s=0;s<o;s++)if(n[s]!==r[s]){i=s;break}var c=[];for(s=i;s<n.length;s++)c.push("..");return(c=c.concat(r.slice(i))).join("/")},m._makeLong=function(t){return t},m.dirname=function(t){var e=g(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},m.basename=function(t,e){var n=g(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},m.extname=function(t){return g(t)[3]},m.format=function(t){if(!i.isObject(t))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof t);var e=t.root||"";if(!i.isString(e))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof t.root);return(t.dir?t.dir+m.sep:"")+(t.base||"")},m.parse=function(t){if(!i.isString(t))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof t);var e=g(t);if(!e||4!==e.length)throw new TypeError("Invalid path '"+t+"'");return e[1]=e[1]||"",e[2]=e[2]||"",e[3]=e[3]||"",{root:e[0],dir:e[0]+e[1].slice(0,-1),base:e[2],ext:e[3],name:e[2].slice(0,e[2].length-e[3].length)}},m.sep="/",m.delimiter=":",t.exports=o?u:m,t.exports.posix=m,t.exports.win32=u},155:t=>{var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var a,c=[],l=!1,u=-1;function f(){l&&a&&(l=!1,a.length?c=a.concat(c):u=-1,c.length&&p())}function p(){if(!l){var t=s(f);l=!0;for(var e=c.length;e;){for(a=c,c=[];++u<e;)a&&a[u].run();u=-1,e=c.length}a=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function h(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||l||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},384:t=>{t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},539:(t,e,n)=>{var r=n(155),o=/%[sdj%]/g;e.format=function(t){if(!v(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(t).replace(o,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}})),c=r[n];n<i;c=r[++n])m(c)||!_(c)?s+=" "+c:s+=" "+a(c);return s},e.deprecate=function(t,o){if(y(n.g.process))return function(){return e.deprecate(t,o).apply(this,arguments)};if(!0===r.noDeprecation)return t;var i=!1;return function(){if(!i){if(r.throwDeprecation)throw new Error(o);r.traceDeprecation?console.trace(o):console.error(o),i=!0}return t.apply(this,arguments)}};var i,s={};function a(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&e._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),u(r,t,r.depth)}function c(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function l(t,e){return t}function u(t,n,r){if(t.customInspect&&n&&C(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return v(o)||(o=u(t,o,r)),o}var i=function(t,e){if(y(e))return t.stylize("undefined","undefined");if(v(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(g(e))return t.stylize(""+e,"number");if(h(e))return t.stylize(""+e,"boolean");if(m(e))return t.stylize("null","null")}(t,n);if(i)return i;var s=Object.keys(n),a=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),x(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(n);if(0===s.length){if(C(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(b(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return t.stylize(Date.prototype.toString.call(n),"date");if(x(n))return f(n)}var l,_="",O=!1,S=["{","}"];(d(n)&&(O=!0,S=["[","]"]),C(n))&&(_=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(_=" "+RegExp.prototype.toString.call(n)),w(n)&&(_=" "+Date.prototype.toUTCString.call(n)),x(n)&&(_=" "+f(n)),0!==s.length||O&&0!=n.length?r<0?b(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=O?function(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)k(e,String(s))?i.push(p(t,e,n,r,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0))})),i}(t,n,r,a,s):s.map((function(e){return p(t,n,r,a,e,O)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(l,_,S)):S[0]+_+S[1]}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var s,a,c;if((c=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),k(r,o)||(s="["+o+"]"),a||(t.seen.indexOf(c.value)<0?(a=m(n)?u(t,c.value,null):u(t,c.value,n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return"   "+t})).join("\n")):a=t.stylize("[Circular]","special")),y(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function d(t){return Array.isArray(t)}function h(t){return"boolean"==typeof t}function m(t){return null===t}function g(t){return"number"==typeof t}function v(t){return"string"==typeof t}function y(t){return void 0===t}function b(t){return _(t)&&"[object RegExp]"===O(t)}function _(t){return"object"==typeof t&&null!==t}function w(t){return _(t)&&"[object Date]"===O(t)}function x(t){return _(t)&&("[object Error]"===O(t)||t instanceof Error)}function C(t){return"function"==typeof t}function O(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(t){if(y(i)&&(i=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!s[t])if(new RegExp("\\b"+t+"\\b","i").test(i)){var n=r.pid;s[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r)}}else s[t]=function(){};return s[t]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=h,e.isNull=m,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=v,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=y,e.isRegExp=b,e.isObject=_,e.isDate=w,e.isError=x,e.isFunction=C,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(384);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var t=new Date,e=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":");return[t.getDate(),j[t.getMonth()],e].join(" ")}function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",A(),e.format.apply(e,arguments))},e.inherits=n(717),e._extend=function(t,e){if(!e||!_(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{LSPluginUser:()=>Co,setupPluginUserInstance:()=>Oo});var t=n(520);n(856);const e=function(){this.__data__=[],this.size=0};const o=function(t,e){return t===e||t!=t&&e!=e};const i=function(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1};var s=Array.prototype.splice;const a=function(t){var e=this.__data__,n=i(e,t);return!(n<0)&&(n==e.length-1?e.pop():s.call(e,n,1),--this.size,!0)};const c=function(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]};const l=function(t){return i(this.__data__,t)>-1};const u=function(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function f(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}f.prototype.clear=e,f.prototype.delete=a,f.prototype.get=c,f.prototype.has=l,f.prototype.set=u;const p=f;const d=function(){this.__data__=new p,this.size=0};const h=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};const m=function(t){return this.__data__.get(t)};const g=function(t){return this.__data__.has(t)};const v="object"==typeof global&&global&&global.Object===Object&&global;var y="object"==typeof self&&self&&self.Object===Object&&self;const b=v||y||Function("return this")();const _=b.Symbol;var w=Object.prototype,x=w.hasOwnProperty,C=w.toString,O=_?_.toStringTag:void 0;const S=function(t){var e=x.call(t,O),n=t[O];try{t[O]=void 0;var r=!0}catch(t){}var o=C.call(t);return r&&(e?t[O]=n:delete t[O]),o};var j=Object.prototype.toString;const A=function(t){return j.call(t)};var k=_?_.toStringTag:void 0;const E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":k&&k in Object(t)?S(t):A(t)};const T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};const I=function(t){if(!T(t))return!1;var e=E(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};const F=b["__core-js_shared__"];var L,N=(L=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";const M=function(t){return!!N&&N in t};var P=Function.prototype.toString;const R=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var D=/^\[object .+?Constructor\]$/,U=Function.prototype,$=Object.prototype,z=U.toString,H=$.hasOwnProperty,B=RegExp("^"+z.call(H).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const q=function(t){return!(!T(t)||M(t))&&(I(t)?B:D).test(R(t))};const W=function(t,e){return null==t?void 0:t[e]};const G=function(t,e){var n=W(t,e);return q(n)?n:void 0};const J=G(b,"Map");const Z=G(Object,"create");const V=function(){this.__data__=Z?Z(null):{},this.size=0};const K=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var Y=Object.prototype.hasOwnProperty;const Q=function(t){var e=this.__data__;if(Z){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Y.call(e,t)?e[t]:void 0};var X=Object.prototype.hasOwnProperty;const tt=function(t){var e=this.__data__;return Z?void 0!==e[t]:X.call(e,t)};const et=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Z&&void 0===e?"__lodash_hash_undefined__":e,this};function nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}nt.prototype.clear=V,nt.prototype.delete=K,nt.prototype.get=Q,nt.prototype.has=tt,nt.prototype.set=et;const rt=nt;const ot=function(){this.size=0,this.__data__={hash:new rt,map:new(J||p),string:new rt}};const it=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const st=function(t,e){var n=t.__data__;return it(e)?n["string"==typeof e?"string":"hash"]:n.map};const at=function(t){var e=st(this,t).delete(t);return this.size-=e?1:0,e};const ct=function(t){return st(this,t).get(t)};const lt=function(t){return st(this,t).has(t)};const ut=function(t,e){var n=st(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ft(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ft.prototype.clear=ot,ft.prototype.delete=at,ft.prototype.get=ct,ft.prototype.has=lt,ft.prototype.set=ut;const pt=ft;const dt=function(t,e){var n=this.__data__;if(n instanceof p){var r=n.__data__;if(!J||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new pt(r)}return n.set(t,e),this.size=n.size,this};function ht(t){var e=this.__data__=new p(t);this.size=e.size}ht.prototype.clear=d,ht.prototype.delete=h,ht.prototype.get=m,ht.prototype.has=g,ht.prototype.set=dt;const mt=ht;const gt=function(){try{var t=G(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();const vt=function(t,e,n){"__proto__"==e&&gt?gt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n};const yt=function(t,e,n){(void 0!==n&&!o(t[e],n)||void 0===n&&!(e in t))&&vt(t,e,n)};const bt=function(t){return function(e,n,r){for(var o=-1,i=Object(e),s=r(e),a=s.length;a--;){var c=s[t?a:++o];if(!1===n(i[c],c,i))break}return e}}();var _t="object"==typeof exports&&exports&&!exports.nodeType&&exports,wt=_t&&"object"==typeof module&&module&&!module.nodeType&&module,xt=wt&&wt.exports===_t?b.Buffer:void 0,Ct=xt?xt.allocUnsafe:void 0;const Ot=function(t,e){if(e)return t.slice();var n=t.length,r=Ct?Ct(n):new t.constructor(n);return t.copy(r),r};const St=b.Uint8Array;const jt=function(t){var e=new t.constructor(t.byteLength);return new St(e).set(new St(t)),e};const At=function(t,e){var n=e?jt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};const kt=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e};var Et=Object.create;const Tt=function(){function t(){}return function(e){if(!T(e))return{};if(Et)return Et(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const It=function(t,e){return function(n){return t(e(n))}};const Ft=It(Object.getPrototypeOf,Object);var Lt=Object.prototype;const Nt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Lt)};const Mt=function(t){return"function"!=typeof t.constructor||Nt(t)?{}:Tt(Ft(t))};const Pt=function(t){return null!=t&&"object"==typeof t};const Rt=function(t){return Pt(t)&&"[object Arguments]"==E(t)};var Dt=Object.prototype,Ut=Dt.hasOwnProperty,$t=Dt.propertyIsEnumerable;const zt=Rt(function(){return arguments}())?Rt:function(t){return Pt(t)&&Ut.call(t,"callee")&&!$t.call(t,"callee")};const Ht=Array.isArray;const Bt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};const qt=function(t){return null!=t&&Bt(t.length)&&!I(t)};const Wt=function(t){return Pt(t)&&qt(t)};const Gt=function(){return!1};var Jt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Zt=Jt&&"object"==typeof module&&module&&!module.nodeType&&module,Vt=Zt&&Zt.exports===Jt?b.Buffer:void 0;const Kt=(Vt?Vt.isBuffer:void 0)||Gt;var Yt=Function.prototype,Qt=Object.prototype,Xt=Yt.toString,te=Qt.hasOwnProperty,ee=Xt.call(Object);const ne=function(t){if(!Pt(t)||"[object Object]"!=E(t))return!1;var e=Ft(t);if(null===e)return!0;var n=te.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Xt.call(n)==ee};var re={};re["[object Float32Array]"]=re["[object Float64Array]"]=re["[object Int8Array]"]=re["[object Int16Array]"]=re["[object Int32Array]"]=re["[object Uint8Array]"]=re["[object Uint8ClampedArray]"]=re["[object Uint16Array]"]=re["[object Uint32Array]"]=!0,re["[object Arguments]"]=re["[object Array]"]=re["[object ArrayBuffer]"]=re["[object Boolean]"]=re["[object DataView]"]=re["[object Date]"]=re["[object Error]"]=re["[object Function]"]=re["[object Map]"]=re["[object Number]"]=re["[object Object]"]=re["[object RegExp]"]=re["[object Set]"]=re["[object String]"]=re["[object WeakMap]"]=!1;const oe=function(t){return Pt(t)&&Bt(t.length)&&!!re[E(t)]};const ie=function(t){return function(e){return t(e)}};var se="object"==typeof exports&&exports&&!exports.nodeType&&exports,ae=se&&"object"==typeof module&&module&&!module.nodeType&&module,ce=ae&&ae.exports===se&&v.process,le=function(){try{var t=ae&&ae.require&&ae.require("util").types;return t||ce&&ce.binding&&ce.binding("util")}catch(t){}}();var ue=le&&le.isTypedArray;const fe=ue?ie(ue):oe;const pe=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var de=Object.prototype.hasOwnProperty;const he=function(t,e,n){var r=t[e];de.call(t,e)&&o(r,n)&&(void 0!==n||e in t)||vt(t,e,n)};const me=function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=r?r(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?vt(n,a,c):he(n,a,c)}return n};const ge=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r};var ve=/^(?:0|[1-9]\d*)$/;const ye=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&ve.test(t))&&t>-1&&t%1==0&&t<e};var be=Object.prototype.hasOwnProperty;const _e=function(t,e){var n=Ht(t),r=!n&&zt(t),o=!n&&!r&&Kt(t),i=!n&&!r&&!o&&fe(t),s=n||r||o||i,a=s?ge(t.length,String):[],c=a.length;for(var l in t)!e&&!be.call(t,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ye(l,c))||a.push(l);return a};const we=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e};var xe=Object.prototype.hasOwnProperty;const Ce=function(t){if(!T(t))return we(t);var e=Nt(t),n=[];for(var r in t)("constructor"!=r||!e&&xe.call(t,r))&&n.push(r);return n};const Oe=function(t){return qt(t)?_e(t,!0):Ce(t)};const Se=function(t){return me(t,Oe(t))};const je=function(t,e,n,r,o,i,s){var a=pe(t,n),c=pe(e,n),l=s.get(c);if(l)yt(t,n,l);else{var u=i?i(a,c,n+"",t,e,s):void 0,f=void 0===u;if(f){var p=Ht(c),d=!p&&Kt(c),h=!p&&!d&&fe(c);u=c,p||d||h?Ht(a)?u=a:Wt(a)?u=kt(a):d?(f=!1,u=Ot(c,!0)):h?(f=!1,u=At(c,!0)):u=[]:ne(c)||zt(c)?(u=a,zt(a)?u=Se(a):T(a)&&!I(a)||(u=Mt(c))):f=!1}f&&(s.set(c,u),o(u,c,r,i,s),s.delete(c)),yt(t,n,u)}};const Ae=function t(e,n,r,o,i){e!==n&&bt(n,(function(s,a){if(i||(i=new mt),T(s))je(e,n,a,r,t,o,i);else{var c=o?o(pe(e,a),s,a+"",e,n,i):void 0;void 0===c&&(c=s),yt(e,a,c)}}),Oe)};const ke=function(t){return t};const Ee=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)};var Te=Math.max;const Ie=function(t,e,n){return e=Te(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=Te(r.length-e,0),s=Array(i);++o<i;)s[o]=r[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=r[o];return a[e]=n(s),Ee(t,this,a)}};const Fe=function(t){return function(){return t}};const Le=gt?function(t,e){return gt(t,"toString",{configurable:!0,enumerable:!1,value:Fe(e),writable:!0})}:ke;var Ne=Date.now;const Me=function(t){var e=0,n=0;return function(){var r=Ne(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Le);const Pe=function(t,e){return Me(Ie(t,e,ke),t+"")};const Re=function(t,e,n){if(!T(n))return!1;var r=typeof e;return!!("number"==r?qt(n)&&ye(e,n.length):"string"==r&&e in n)&&o(n[e],t)};const De=function(t){return Pe((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,s&&Re(n[0],n[1],s)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var a=n[r];a&&t(e,a,r,i)}return e}))}((function(t,e,n){Ae(t,e,n)}));var Ue=function(){return Ue=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Ue.apply(this,arguments)};Object.create;Object.create;function $e(t){return t.toLowerCase()}var ze=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],He=/[^A-Z0-9]+/gi;function Be(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}function qe(t,e){return void 0===e&&(e={}),function(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,r=void 0===n?ze:n,o=e.stripRegexp,i=void 0===o?He:o,s=e.transform,a=void 0===s?$e:s,c=e.delimiter,l=void 0===c?" ":c,u=Be(Be(t,r,"$1\0$2"),i,"\0"),f=0,p=u.length;"\0"===u.charAt(f);)f++;for(;"\0"===u.charAt(p-1);)p--;return u.slice(f,p).split("\0").map(a).join(l)}(t,Ue({delimiter:"."},e))}var We=n(729),Ge=n.n(We);function Je(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const Ze="win32"===navigator.platform.toLowerCase()?t.win32:t.posix;const Ve=function(t,e){return void 0===e&&(e={}),qe(t,Ue({delimiter:"_"},e))};const Ke=De;class Ye extends(Ge()){constructor(t,e){super(),Je(this,"_tag",void 0),Je(this,"_opts",void 0),Je(this,"_logs",[]),this._tag=t,this._opts=e}write(t,e,n){var r;null!=e&&e.length&&!0===e[e.length-1]&&(n=!0,e.pop());const o=e.reduce(((t,e)=>(e&&e instanceof Error?t+=`${e.message} ${e.stack}`:t+=e.toString(),t)),`[${this._tag}][${(new Date).toLocaleTimeString()}] `);var i;(this._logs.push([t,o]),n||null!==(r=this._opts)&&void 0!==r&&r.console)&&(null===(i=console)||void 0===i||i["ERROR"===t?"error":"debug"](`${t}: ${o}`));this.emit("change")}clear(){this._logs=[],this.emit("change")}info(...t){this.write("INFO",t)}error(...t){this.write("ERROR",t)}warn(...t){this.write("WARN",t)}setTag(t){this._tag=t}toJSON(){return this._logs}}function Qe(t,...e){try{const n=new URL(t);if(!n.origin)throw new Error(null);const r=Ze.join(t.substr(n.origin.length),...e);return n.origin+r}catch(n){return Ze.join(t,...e)}}function Xe(t,e){let n,r,o=!1;const i=e=>n=>{t&&clearTimeout(t),e(n),o=!0},s=new Promise(((o,s)=>{n=i(o),r=i(s),t&&(t=setTimeout((()=>r(new Error(`[deferred timeout] ${e}`))),t))}));return{created:Date.now(),setTag:t=>e=t,resolve:n,reject:r,promise:s,get settled(){return o}}}const tn=new Map;window.__injectedUIEffects=tn;var en=n(227),nn=n.n(en);function rn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const on="application/x-postmate-v1+json";let sn=0;const an={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},cn=(t,e)=>("string"!=typeof e||t.origin===e)&&(!!t.data&&(("object"!=typeof t.data||"postmate"in t.data)&&(t.data.type===on&&!!an[t.data.postmate])));class ln{constructor(t){rn(this,"parent",void 0),rn(this,"frame",void 0),rn(this,"child",void 0),rn(this,"events",{}),rn(this,"childOrigin",void 0),rn(this,"listener",void 0),this.parent=t.parent,this.frame=t.frame,this.child=t.child,this.childOrigin=t.childOrigin,this.listener=t=>{if(!cn(t,this.childOrigin))return!1;const{data:e,name:n}=((t||{}).data||{}).value||{};"emit"===t.data.postmate&&n in this.events&&this.events[n].forEach((t=>{t.call(this,e)}))},this.parent.addEventListener("message",this.listener,!1)}get(t,...e){return new Promise((n=>{const r=++sn,o=t=>{t.data.uid===r&&"reply"===t.data.postmate&&(this.parent.removeEventListener("message",o,!1),n(t.data.value))};this.parent.addEventListener("message",o,!1),this.child.postMessage({postmate:"request",type:on,property:t,args:e,uid:r},this.childOrigin)}))}call(t,e){this.child.postMessage({postmate:"call",type:on,property:t,data:e},this.childOrigin)}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)}destroy(){window.removeEventListener("message",this.listener,!1),this.frame.parentNode.removeChild(this.frame)}}class un{constructor(t){rn(this,"model",void 0),rn(this,"parent",void 0),rn(this,"parentOrigin",void 0),rn(this,"child",void 0),this.model=t.model,this.parent=t.parent,this.parentOrigin=t.parentOrigin,this.child=t.child,this.child.addEventListener("message",(t=>{if(!cn(t,this.parentOrigin))return;const{property:e,uid:n,data:r,args:o}=t.data;"call"!==t.data.postmate?((t,e,n)=>{const r="function"==typeof t[e]?t[e].apply(null,n):t[e];return Promise.resolve(r)})(this.model,e,o).then((r=>{t.source.postMessage({property:e,postmate:"reply",type:on,uid:n,value:r},t.origin)})):e in this.model&&"function"==typeof this.model[e]&&this.model[e](r)}))}emit(t,e){this.parent.postMessage({postmate:"emit",type:on,value:{name:t,data:e}},this.parentOrigin)}}class fn{constructor(t){rn(this,"container",void 0),rn(this,"parent",void 0),rn(this,"frame",void 0),rn(this,"child",void 0),rn(this,"childOrigin",void 0),rn(this,"url",void 0),rn(this,"model",void 0),this.container=t.container,this.url=t.url,this.parent=window,this.frame=document.createElement("iframe"),t.id&&(this.frame.id=t.id),t.name&&(this.frame.name=t.name),this.frame.classList.add.apply(this.frame.classList,t.classListArray||[]),this.container.appendChild(this.frame),this.child=this.frame.contentWindow,this.model=t.model||{}}sendHandshake(t){const e=(t=>{const e=document.createElement("a");e.href=t;const n=e.protocol.length>4?e.protocol:window.location.protocol,r=e.host.length?"80"===e.port||"443"===e.port?e.hostname:e.host:window.location.host;return e.origin||`${n}//${r}`})(t=t||this.url);let n,r=0;return new Promise(((o,i)=>{const s=t=>!!cn(t,e)&&("handshake-reply"===t.data.postmate?(clearInterval(n),this.parent.removeEventListener("message",s,!1),this.childOrigin=t.origin,o(new ln(this))):i("Failed handshake"));this.parent.addEventListener("message",s,!1);const a=()=>{r++,this.child.postMessage({postmate:"handshake",type:on,model:this.model},e),5===r&&clearInterval(n)};this.frame.addEventListener("load",(()=>{a(),n=setInterval(a,500)})),this.frame.src=t}))}destroy(){this.frame.parentNode.removeChild(this.frame)}}rn(fn,"debug",!1),rn(fn,"Model",void 0);class pn{constructor(t){rn(this,"child",void 0),rn(this,"model",void 0),rn(this,"parent",void 0),rn(this,"parentOrigin",void 0),this.child=window,this.model=t,this.parent=this.child.parent}sendHandshakeReply(){return new Promise(((t,e)=>{const n=r=>{if(r.data.postmate){if("handshake"===r.data.postmate){0,this.child.removeEventListener("message",n,!1),r.source.postMessage({postmate:"handshake-reply",type:on},r.origin),this.parentOrigin=r.origin;const e=r.data.model;return e&&Object.keys(e).forEach((t=>{this.model[t]=e[t]})),t(new un(this))}return e("Handshake Reply Failed")}};this.child.addEventListener("message",n,!1)}))}}function dn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const{importHTML:hn,createSandboxContainer:mn}=window.QSandbox||{};function gn(t,e){return t.startsWith("http")?fetch(t,e):(t=t.replace("file://",""),new Promise((async(e,n)=>{try{const n=await window.apis.doAction(["readFile",t]);e({text:()=>n})}catch(t){console.error(t),n(t)}})))}class vn extends(Ge()){constructor(t){super(),dn(this,"_pluginLocal",void 0),dn(this,"_frame",void 0),dn(this,"_root",void 0),dn(this,"_loaded",!1),dn(this,"_unmountFns",[]),this._pluginLocal=t,t._dispose((()=>{this._unmount()}))}async load(){const{name:t,entry:e}=this._pluginLocal.options;if(this.loaded||!e)return;const{template:n,execScripts:r}=await hn(e,{fetch:gn});this._mount(n,document.body);const o=mn(t,{elementGetter:()=>{var t;return null===(t=this._root)||void 0===t?void 0:t.firstChild}}).instance.proxy;o.__shadow_mode__=!0,o.LSPluginLocal=this._pluginLocal,o.LSPluginShadow=this,o.LSPluginUser=o.logseq=new Co(this._pluginLocal.toJSON(),this._pluginLocal.caller);const i=await r(o,!0);this._unmountFns.push(i.unmount),this._loaded=!0}_mount(t,e){const n=this._frame=document.createElement("div");n.classList.add("lsp-shadow-sandbox"),n.id=this._pluginLocal.id,this._root=n.attachShadow({mode:"open"}),this._root.innerHTML=`<div>${t}</div>`,e.appendChild(n),this.emit("mounted")}_unmount(){for(const t of this._unmountFns)t&&t.call(null)}destroy(){var t,e;null===(t=this.frame)||void 0===t||null===(e=t.parentNode)||void 0===e||e.removeChild(this.frame)}get loaded(){return this._loaded}get document(){var t;return null===(t=this._root)||void 0===t?void 0:t.firstChild}get frame(){return this._frame}}function yn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const bn=nn()("LSPlugin:caller"),_n="#await#response#",wn="#lspmsg#",xn="#lspmsg#error#",Cn=t=>`#lspmsg#${t}`;class On extends(Ge()){constructor(t){super(),yn(this,"_pluginLocal",void 0),yn(this,"_connected",!1),yn(this,"_parent",void 0),yn(this,"_child",void 0),yn(this,"_shadow",void 0),yn(this,"_status",void 0),yn(this,"_userModel",{}),yn(this,"_call",void 0),yn(this,"_callUserModel",void 0),yn(this,"_debugTag",""),this._pluginLocal=t,t&&(this._debugTag=t.debugTag)}async connectToChild(){if(this._connected)return;const{shadow:t}=this._pluginLocal;t?await this._setupShadowSandbox():await this._setupIframeSandbox()}async connectToParent(t={}){if(this._connected)return;const e=this,n=null!=this._pluginLocal;let r=0,o=0;const i=new Map,s=Xe(6e4),a=this._extendUserModel({"#lspmsg#ready#":async t=>{a[Cn(null==t?void 0:t.pid)]=({type:t,payload:n})=>{bn(`[host (_call) -> *user] ${this._debugTag}`,t,n),e.emit(t,n)},await s.resolve()},"#lspmsg#beforeunload#":async t=>{const n=Xe(1e4);e.emit("beforeunload",Object.assign({actor:n},t)),await n.promise},"#lspmsg#settings#":async({type:t,payload:n})=>{e.emit("settings:changed",n)},[wn]:async({ns:t,type:n,payload:r})=>{bn(`[host (async) -> *user] ${this._debugTag} ns=${t} type=${n}`,r),t&&t.startsWith("hook")?e.emit(`${t}:${n}`,r):e.emit(n,r)},"#lspmsg#reply#":({_sync:t,result:e})=>{if(bn(`[sync host -> *user] #${t}`,e),i.has(t)){const n=i.get(t);n&&(null!=e&&e.hasOwnProperty(xn)?n.reject(e[xn]):n.resolve(e),i.delete(t))}},...t});var c;if(n)return await s.promise,JSON.parse(JSON.stringify(null===(c=this._pluginLocal)||void 0===c?void 0:c.toJSON()));const l=new pn(a).sendHandshakeReply();return this._status="pending",await l.then((t=>{this._child=t,this._connected=!0,this._call=async(e,n={},r)=>{if(r){const t=++o;i.set(t,r),n._sync=t,r.setTag(`async call #${t}`),bn(`async call #${t}`)}return t.emit(Cn(a.baseInfo.id),{type:e,payload:n}),null==r?void 0:r.promise},this._callUserModel=async(t,e)=>{try{a[t](e)}catch(e){bn(`[model method] #${t} not existed`)}},r=setInterval((()=>{if(i.size>100)for(const[t,e]of i)e.settled&&i.delete(t)}),18e5)})).finally((()=>{this._status=void 0})),await s.promise,a.baseInfo}async call(t,e={}){var n;return null===(n=this._call)||void 0===n?void 0:n.call(this,t,e)}async callAsync(t,e={}){var n;const r=Xe(1e4);return null===(n=this._call)||void 0===n?void 0:n.call(this,t,e,r)}async callUserModel(t,...e){var n;return null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[t,...e])}async callUserModelAsync(t,...e){var n;return t=`${_n}${t}`,null===(n=this._callUserModel)||void 0===n?void 0:n.apply(this,[t,...e])}async _setupIframeSandbox(){const t=this._pluginLocal,e=t.id,n=`${e}_lsp_main`,r=new URL(t.options.entry);r.searchParams.set("__v__",t.options.version);const o=document.querySelector(`#${n}`);o&&o.parentElement.removeChild(o);const i=document.createElement("div");i.classList.add("lsp-iframe-sandbox-container"),i.id=n,i.dataset.pid=e;try{var s;const t=null===(s=await this._pluginLocal._loadLayoutsData())||void 0===s?void 0:s.$$0;if(t){i.dataset.inited_layout="true";let{width:e,height:n,left:r,top:o,vw:s,vh:a}=t;r=Math.max(r,0),r="number"==typeof s?`${Math.min(100*r/s,99)}%`:`${r}px`,o=Math.max(o,45),o="number"==typeof a?`${Math.min(100*o/a,99)}%`:`${o}px`,Object.assign(i.style,{width:e+"px",height:n+"px",left:r,top:o})}}catch(t){console.error("[Restore Layout Error]",t)}document.body.appendChild(i);const a=new fn({id:e+"_iframe",container:i,url:r.href,classListArray:["lsp-iframe-sandbox"],model:{baseInfo:JSON.parse(JSON.stringify(t.toJSON()))}});let c,l=a.sendHandshake();return this._status="pending",new Promise(((e,n)=>{c=setTimeout((()=>{n(new Error("handshake Timeout")),a.destroy()}),4e3),l.then((n=>{this._parent=n,this._connected=!0,this.emit("connected"),n.on(Cn(t.id),(({type:t,payload:e})=>{var n,r;bn("[user -> *host] ",t,e),null===(n=this._pluginLocal)||void 0===n||n.emit(t,e||{}),null===(r=this._pluginLocal)||void 0===r||r.caller.emit(t,e||{})})),this._call=async(...e)=>{await n.call(Cn(t.id),{type:e[0],payload:Object.assign(e[1]||{},{$$pid:t.id})})},this._callUserModel=async(t,...e)=>{if(t.startsWith(_n))return await n.get(t.replace(_n,""),...e);n.call(t,null==e?void 0:e[0])},e(null)})).catch((t=>{n(t)})).finally((()=>{clearTimeout(c)}))})).catch((t=>{throw bn("[iframe sandbox] error",t),t})).finally((()=>{this._status=void 0}))}async _setupShadowSandbox(){const t=this._pluginLocal,e=this._shadow=new vn(t);try{this._status="pending",await e.load(),this._connected=!0,this.emit("connected"),this._call=async(e,n={},r)=>{var o;return r&&(n.actor=r),null===(o=this._pluginLocal)||void 0===o||o.emit(e,Object.assign(n,{$$pid:t.id})),null==r?void 0:r.promise},this._callUserModel=async(...t)=>{var e;let n=t[0];null!==(e=n)&&void 0!==e&&e.startsWith(_n)&&(n=n.replace(_n,""));const r=t[1]||{},o=this._userModel[n];"function"==typeof o&&await o.call(null,r)}}catch(t){throw bn("[shadow sandbox] error",t),t}finally{this._status=void 0}}_extendUserModel(t){return Object.assign(this._userModel,t)}_getSandboxIframeContainer(){var t;return null===(t=this._parent)||void 0===t?void 0:t.frame.parentNode}_getSandboxShadowContainer(){var t;return null===(t=this._shadow)||void 0===t?void 0:t.frame.parentNode}_getSandboxIframeRoot(){var t;return null===(t=this._parent)||void 0===t?void 0:t.frame}_getSandboxShadowRoot(){var t;return null===(t=this._shadow)||void 0===t?void 0:t.frame}set debugTag(t){this._debugTag=t}async destroy(){var t;let e=null;this._parent&&(e=this._getSandboxIframeContainer(),await this._parent.destroy()),this._shadow&&(e=this._getSandboxShadowContainer(),this._shadow.destroy()),null===(t=e)||void 0===t||t.parentNode.removeChild(e)}}function Sn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class jn{constructor(t,e){Sn(this,"ctx",void 0),Sn(this,"opts",void 0),this.ctx=t,this.opts=e}get ctxId(){return this.ctx.baseInfo.id}setItem(t,e){var n;return this.ctx.caller.callAsync("api:call",{method:"write-plugin-storage-file",args:[this.ctxId,t,e,null===(n=this.opts)||void 0===n?void 0:n.assets]})}getItem(t){var e;return this.ctx.caller.callAsync("api:call",{method:"read-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}removeItem(t){var e;return this.ctx.caller.call("api:call",{method:"unlink-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}allKeys(){var t;return this.ctx.caller.callAsync("api:call",{method:"list-plugin-storage-files",args:[this.ctxId,null===(t=this.opts)||void 0===t?void 0:t.assets]})}clear(){var t;return this.ctx.caller.call("api:call",{method:"clear-plugin-storage-files",args:[this.ctxId,null===(t=this.opts)||void 0===t?void 0:t.assets]})}hasItem(t){var e;return this.ctx.caller.callAsync("api:call",{method:"exist-plugin-storage-file",args:[this.ctxId,t,null===(e=this.opts)||void 0===e?void 0:e.assets]})}}class An{constructor(t){var e,n,r;r=void 0,(n="ctx")in(e=this)?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,this.ctx=t}get React(){return this.ensureHostScope().React}get ReactDOM(){return this.ensureHostScope().ReactDOM}get pluginLocal(){return this.ensureHostScope().LSPluginCore.ensurePlugin(this.ctx.baseInfo.id)}invokeExperMethod(t,...e){var n,r;const o=this.ensureHostScope();return t=null===(n=Ve(t))||void 0===n?void 0:n.toLowerCase(),null===(r=o.logseq.api["exper_"+t])||void 0===r?void 0:r.apply(o,e)}async loadScripts(...t){(t=t.map((t=>null!=t&&t.startsWith("http")?t:this.ctx.resolveResourceFullUrl(t)))).unshift(this.ctx.baseInfo.id),await this.invokeExperMethod("loadScripts",...t)}registerFencedCodeRenderer(t,e){return this.ensureHostScope().logseq.api.exper_register_fenced_code_renderer(this.ctx.baseInfo.id,t,e)}registerExtensionsEnhancer(t,e){const n=this.ensureHostScope();if("katex"===t)n.katex&&e(n.katex).catch(console.error);return n.logseq.api.exper_register_extensions_enhancer(this.ctx.baseInfo.id,t,e)}ensureHostScope(){if(window===top)throw new Error("Can not access host scope!");return top}}function kn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const En=t=>`task_callback_${t}`;class Tn{constructor(t,e,n={}){kn(this,"_client",void 0),kn(this,"_requestId",void 0),kn(this,"_requestOptions",void 0),kn(this,"_promise",void 0),kn(this,"_aborted",!1),this._client=t,this._requestId=e,this._requestOptions=n,this._promise=new Promise(((t,e)=>{if(!this._requestId)return e(null);this._client.once(En(this._requestId),(n=>{n&&n instanceof Error?e(n):t(n)}))}));const{success:r,fail:o,final:i}=this._requestOptions;this._promise.then((t=>{null==r||r(t)})).catch((t=>{null==o||o(t)})).finally((()=>{null==i||i()}))}abort(){this._requestOptions.abortable&&!this._aborted&&(this._client.ctx._execCallableAPI("http_request_abort",this._requestId),this._aborted=!0)}get promise(){return this._promise}get client(){return this._client}get requestId(){return this._requestId}}class In extends We.EventEmitter{constructor(t){super(),kn(this,"_ctx",void 0),this._ctx=t,this.ctx.caller.on("#lsp#request#callback",(t=>{const e=null==t?void 0:t.requestId;e&&this.emit(En(e),null==t?void 0:t.payload)}))}static createRequestTask(t,e,n){return new Tn(t,e,n)}async _request(t){const e=this.ctx.baseInfo.id,{success:n,fail:r,final:o,...i}=t,s=this.ctx.Experiments.invokeExperMethod("request",e,i),a=In.createRequestTask(this.ctx.Request,s,t);return i.abortable?a:a.promise}get ctx(){return this._ctx}}const Fn=It(Object.keys,Object);var Ln=Object.prototype.hasOwnProperty;const Nn=function(t){if(!Nt(t))return Fn(t);var e=[];for(var n in Object(t))Ln.call(t,n)&&"constructor"!=n&&e.push(n);return e};const Mn=function(t){return qt(t)?_e(t):Nn(t)};const Pn=function(t,e){return t&&bt(t,e,Mn)};const Rn=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};const Dn=function(t){return this.__data__.has(t)};function Un(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new pt;++e<n;)this.add(t[e])}Un.prototype.add=Un.prototype.push=Rn,Un.prototype.has=Dn;const $n=Un;const zn=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1};const Hn=function(t,e){return t.has(e)};const Bn=function(t,e,n,r,o,i){var s=1&n,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=i.get(t),u=i.get(e);if(l&&u)return l==e&&u==t;var f=-1,p=!0,d=2&n?new $n:void 0;for(i.set(t,e),i.set(e,t);++f<a;){var h=t[f],m=e[f];if(r)var g=s?r(m,h,f,e,t,i):r(h,m,f,t,e,i);if(void 0!==g){if(g)continue;p=!1;break}if(d){if(!zn(e,(function(t,e){if(!Hn(d,e)&&(h===t||o(h,t,n,r,i)))return d.push(e)}))){p=!1;break}}else if(h!==m&&!o(h,m,n,r,i)){p=!1;break}}return i.delete(t),i.delete(e),p};const qn=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n};const Wn=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n};var Gn=_?_.prototype:void 0,Jn=Gn?Gn.valueOf:void 0;const Zn=function(t,e,n,r,i,s,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!s(new St(t),new St(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var c=qn;case"[object Set]":var l=1&r;if(c||(c=Wn),t.size!=e.size&&!l)return!1;var u=a.get(t);if(u)return u==e;r|=2,a.set(t,e);var f=Bn(c(t),c(e),r,i,s,a);return a.delete(t),f;case"[object Symbol]":if(Jn)return Jn.call(t)==Jn.call(e)}return!1};const Vn=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t};const Kn=function(t,e,n){var r=e(t);return Ht(t)?r:Vn(r,n(t))};const Yn=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var s=t[n];e(s,n,t)&&(i[o++]=s)}return i};const Qn=function(){return[]};var Xn=Object.prototype.propertyIsEnumerable,tr=Object.getOwnPropertySymbols;const er=tr?function(t){return null==t?[]:(t=Object(t),Yn(tr(t),(function(e){return Xn.call(t,e)})))}:Qn;const nr=function(t){return Kn(t,Mn,er)};var rr=Object.prototype.hasOwnProperty;const or=function(t,e,n,r,o,i){var s=1&n,a=nr(t),c=a.length;if(c!=nr(e).length&&!s)return!1;for(var l=c;l--;){var u=a[l];if(!(s?u in e:rr.call(e,u)))return!1}var f=i.get(t),p=i.get(e);if(f&&p)return f==e&&p==t;var d=!0;i.set(t,e),i.set(e,t);for(var h=s;++l<c;){var m=t[u=a[l]],g=e[u];if(r)var v=s?r(g,m,u,e,t,i):r(m,g,u,t,e,i);if(!(void 0===v?m===g||o(m,g,n,r,i):v)){d=!1;break}h||(h="constructor"==u)}if(d&&!h){var y=t.constructor,b=e.constructor;y==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(d=!1)}return i.delete(t),i.delete(e),d};const ir=G(b,"DataView");const sr=G(b,"Promise");const ar=G(b,"Set");const cr=G(b,"WeakMap");var lr="[object Map]",ur="[object Promise]",fr="[object Set]",pr="[object WeakMap]",dr="[object DataView]",hr=R(ir),mr=R(J),gr=R(sr),vr=R(ar),yr=R(cr),br=E;(ir&&br(new ir(new ArrayBuffer(1)))!=dr||J&&br(new J)!=lr||sr&&br(sr.resolve())!=ur||ar&&br(new ar)!=fr||cr&&br(new cr)!=pr)&&(br=function(t){var e=E(t),n="[object Object]"==e?t.constructor:void 0,r=n?R(n):"";if(r)switch(r){case hr:return dr;case mr:return lr;case gr:return ur;case vr:return fr;case yr:return pr}return e});const _r=br;var wr="[object Arguments]",xr="[object Array]",Cr="[object Object]",Or=Object.prototype.hasOwnProperty;const Sr=function(t,e,n,r,o,i){var s=Ht(t),a=Ht(e),c=s?xr:_r(t),l=a?xr:_r(e),u=(c=c==wr?Cr:c)==Cr,f=(l=l==wr?Cr:l)==Cr,p=c==l;if(p&&Kt(t)){if(!Kt(e))return!1;s=!0,u=!1}if(p&&!u)return i||(i=new mt),s||fe(t)?Bn(t,e,n,r,o,i):Zn(t,e,c,n,r,o,i);if(!(1&n)){var d=u&&Or.call(t,"__wrapped__"),h=f&&Or.call(e,"__wrapped__");if(d||h){var m=d?t.value():t,g=h?e.value():e;return i||(i=new mt),o(m,g,n,r,i)}}return!!p&&(i||(i=new mt),or(t,e,n,r,o,i))};const jr=function t(e,n,r,o,i){return e===n||(null==e||null==n||!Pt(e)&&!Pt(n)?e!=e&&n!=n:Sr(e,n,r,o,t,i))};const Ar=function(t,e,n,r){var o=n.length,i=o,s=!r;if(null==t)return!i;for(t=Object(t);o--;){var a=n[o];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<i;){var c=(a=n[o])[0],l=t[c],u=a[1];if(s&&a[2]){if(void 0===l&&!(c in t))return!1}else{var f=new mt;if(r)var p=r(l,u,c,t,e,f);if(!(void 0===p?jr(u,l,3,r,f):p))return!1}}return!0};const kr=function(t){return t==t&&!T(t)};const Er=function(t){for(var e=Mn(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,kr(o)]}return e};const Tr=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}};const Ir=function(t){var e=Er(t);return 1==e.length&&e[0][2]?Tr(e[0][0],e[0][1]):function(n){return n===t||Ar(n,t,e)}};const Fr=function(t){return"symbol"==typeof t||Pt(t)&&"[object Symbol]"==E(t)};var Lr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nr=/^\w*$/;const Mr=function(t,e){if(Ht(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Fr(t))||(Nr.test(t)||!Lr.test(t)||null!=e&&t in Object(e))};function Pr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var s=t.apply(this,r);return n.cache=i.set(o,s)||i,s};return n.cache=new(Pr.Cache||pt),n}Pr.Cache=pt;const Rr=Pr;var Dr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ur=/\\(\\)?/g;const $r=function(t){var e=Rr(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Dr,(function(t,n,r,o){e.push(r?o.replace(Ur,"$1"):n||t)})),e}));const zr=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o};var Hr=_?_.prototype:void 0,Br=Hr?Hr.toString:void 0;const qr=function t(e){if("string"==typeof e)return e;if(Ht(e))return zr(e,t)+"";if(Fr(e))return Br?Br.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};const Wr=function(t){return null==t?"":qr(t)};const Gr=function(t,e){return Ht(t)?t:Mr(t,e)?[t]:$r(Wr(t))};const Jr=function(t){if("string"==typeof t||Fr(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};const Zr=function(t,e){for(var n=0,r=(e=Gr(e,t)).length;null!=t&&n<r;)t=t[Jr(e[n++])];return n&&n==r?t:void 0};const Vr=function(t,e,n){var r=null==t?void 0:Zr(t,e);return void 0===r?n:r};const Kr=function(t,e){return null!=t&&e in Object(t)};const Yr=function(t,e,n){for(var r=-1,o=(e=Gr(e,t)).length,i=!1;++r<o;){var s=Jr(e[r]);if(!(i=null!=t&&n(t,s)))break;t=t[s]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Bt(o)&&ye(s,o)&&(Ht(t)||zt(t))};const Qr=function(t,e){return null!=t&&Yr(t,e,Kr)};const Xr=function(t,e){return Mr(t)&&kr(e)?Tr(Jr(t),e):function(n){var r=Vr(n,t);return void 0===r&&r===e?Qr(n,t):jr(e,r,3)}};const to=function(t){return function(e){return null==e?void 0:e[t]}};const eo=function(t){return function(e){return Zr(e,t)}};const no=function(t){return Mr(t)?to(Jr(t)):eo(t)};const ro=function(t){return"function"==typeof t?t:null==t?ke:"object"==typeof t?Ht(t)?Xr(t[0],t[1]):Ir(t):no(t)};const oo=function(t,e){var n={};return e=ro(e,3),Pn(t,(function(t,r,o){vt(n,e(t,r,o),t)})),n};function io(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class so{constructor(t,e){io(this,"ctx",void 0),io(this,"serviceHooks",void 0),this.ctx=t,this.serviceHooks=e,t._execCallableAPI("register-search-service",t.baseInfo.id,e.name,e.options);Object.entries({query:{f:"onQuery",args:["graph","q",!0],reply:!0,transformOutput:t=>(Ht(null==t?void 0:t.blocks)&&(t.blocks=t.blocks.map((t=>t&&oo(t,((t,e)=>`block/${e}`))))),t)},rebuildBlocksIndice:{f:"onIndiceInit",args:["graph","blocks"]},transactBlocks:{f:"onBlocksChanged",args:["graph","data"]},truncateBlocks:{f:"onIndiceReset",args:["graph"]},removeDb:{f:"onGraph",args:["graph"]}}).forEach((([n,r])=>{const o=(t=>`service:search:${t}:${e.name}`)(n);t.caller.on(o,(async n=>{if(I(null==e?void 0:e[r.f])){let i=null;try{i=await e[r.f].apply(e,(r.args||[]).map((t=>{if(n){if(!0===t)return n;if(n.hasOwnProperty(t)){const e=n[t];return delete n[t],e}}}))),r.transformOutput&&(i=r.transformOutput(i))}catch(t){console.error("[SearchService] ",t),i=t}finally{r.reply&&t.caller.call(`${o}:reply`,i)}}}))}))}}function ao(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const co=Symbol.for("proxy-continue"),lo=nn()("LSPlugin:user"),uo=new Ye("",{console:!0});function fo(t,e,n){var r;if("function"!=typeof n)return!1;const{key:o,label:i,desc:s,palette:a,keybinding:c,extras:l}=e,u=`SimpleCommandHook${o}${++vo}`;this.Editor["on"+u](n),null===(r=this.caller)||void 0===r||r.call("api:call",{method:"register-plugin-simple-command",args:[this.baseInfo.id,[{key:o,label:i,type:t,desc:s,keybinding:c,extras:l},["editor/hook",u]],a]})}function po(t){return!("string"!=typeof(e=t)||36!==e.length||!/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(e))||(uo.error(`#${t} is not a valid UUID string.`),!1);var e}let ho=null,mo=new Map;const go={async getInfo(t){return ho||(ho=await this._execCallableAPIAsync("get-app-info")),"string"==typeof t?ho[t]:ho},registerCommand:fo,registerSearchService(t){if(mo.has(t.name))throw new Error(`SearchService: #${t.name} has registered!`);mo.set(t.name,new so(this,t))},registerCommandPalette(t,e){const{key:n,label:r,keybinding:o}=t;return fo.call(this,"$palette$",{key:n,label:r,palette:!0,keybinding:o},e)},registerCommandShortcut(t,e){const{binding:n}=t,r="$shortcut$",o=r+Ve(n);return fo.call(this,r,{key:o,palette:!1,keybinding:t},e)},registerUIItem(t,e){var n;const r=this.baseInfo.id;null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-ui-item",args:[r,t,e]})},registerPageMenuItem(t,e){if("function"!=typeof e)return!1;const n=t+"_"+this.baseInfo.id,r=t;fo.call(this,"page-menu-item",{key:n,label:r},e)},onBlockRendererSlotted(t,e){if(!po(t))return;const n=this.baseInfo.id,r=`hook:editor:${Ve(`slot:${t}`)}`;return this.caller.on(r,e),this.App._installPluginHook(n,r),()=>{this.caller.off(r,e),this.App._uninstallPluginHook(n,r)}},invokeExternalPlugin(t,...e){var n;if(!(t=null===(n=t)||void 0===n?void 0:n.trim()))return;let[r,o]=t.split(".");if(!["models","commands"].includes(null==o?void 0:o.toLowerCase()))throw new Error("Type only support '.models' or '.commands' currently.");const i=t.replace(`${r}.${o}.`,"");if(!r||!o||!i)throw new Error(`Illegal type of #${t} to invoke external plugin.`);return this._execCallableAPIAsync("invoke_external_plugin_cmd",r,o.toLowerCase(),i,e)},setFullScreen(t){const e=(...t)=>this._callWin("setFullScreen",...t);"toggle"===t?this._callWin("isFullScreen").then((t=>{t?e():e(!0)})):t?e(!0):e()}};let vo=0;const yo={newBlockUUID(){return this._execCallableAPIAsync("new_block_uuid")},registerSlashCommand(t,e){var n;lo("Register slash command #",this.baseInfo.id,t,e),"function"==typeof e&&(e=[["editor/clear-current-slash",!1],["editor/restore-saved-cursor"],["editor/hook",e]]),e=e.map((t=>{const[e,...n]=t;if("editor/hook"===e){let r=n[0],o=()=>{var t;null===(t=this.caller)||void 0===t||t.callUserModel(r)};"function"==typeof r&&(o=r);const i=`SlashCommandHook${e}${++vo}`;t[1]=i,this.Editor["on"+i](o)}return t})),null===(n=this.caller)||void 0===n||n.call("api:call",{method:"register-plugin-slash-command",args:[this.baseInfo.id,[t,e]]})},registerBlockContextMenuItem(t,e){if("function"!=typeof e)return!1;const n=t+"_"+this.baseInfo.id;fo.call(this,"block-context-menu-item",{key:n,label:t},e)},registerHighlightContextMenuItem(t,e,n){if("function"!=typeof e)return!1;const r=t+"_"+this.baseInfo.id;fo.call(this,"highlight-context-menu-item",{key:r,label:t,extras:n},e)},scrollToBlockInPage(t,e,n){const r="block-content-"+e;null!=n&&n.replaceState?this.App.replaceState("page",{name:t},{anchor:r}):this.App.pushState("page",{name:t},{anchor:r})}},bo={onBlockChanged(t,e){if(!po(t))return;const n=this.baseInfo.id,r=`hook:db:${Ve(`block:${t}`)}`,o=({block:n,txData:r,txMeta:o})=>{n.uuid===t&&e(n,r,o)};return this.caller.on(r,o),this.App._installPluginHook(n,r),()=>{this.caller.off(r,o),this.App._uninstallPluginHook(n,r)}},datascriptQuery(t,...e){if(e.pop(),null!=e&&e.some((t=>"function"==typeof t))){return this.Experiments.ensureHostScope().logseq.api.datascript_query(t,...e)}return this._execCallableAPIAsync("datascript_query",t,...e)}},_o={},wo={},xo={makeSandboxStorage(){return new jn(this,{assets:!0})}};class Co extends(Ge()){constructor(t,e){super(),ao(this,"_baseInfo",void 0),ao(this,"_caller",void 0),ao(this,"_version","0.0.14"),ao(this,"_debugTag",""),ao(this,"_settingsSchema",void 0),ao(this,"_connected",!1),ao(this,"_ui",new Map),ao(this,"_mFileStorage",void 0),ao(this,"_mRequest",void 0),ao(this,"_mExperiments",void 0),ao(this,"_beforeunloadCallback",void 0),this._baseInfo=t,this._caller=e,e.on("sys:ui:visible",(t=>{null!=t&&t.toggle&&this.toggleMainUI()})),e.on("settings:changed",(t=>{const e=Object.assign({},this.settings),n=Object.assign(this._baseInfo.settings,t);this.emit("settings:changed",{...n},e)})),e.on("beforeunload",(async t=>{const{actor:n,...r}=t,o=this._beforeunloadCallback;try{o&&await o(r),null==n||n.resolve(null)}catch(t){console.debug(`${e.debugTag} [beforeunload] `,t),null==n||n.reject(t)}}))}async ready(t,e){if(!this._connected)try{var n;"function"==typeof t&&(e=t,t={});let r=await this._caller.connectToParent(t);this._connected=!0,r=Ke(this._baseInfo,r),null!==(n=r)&&void 0!==n&&n.id&&(this._debugTag=this._caller.debugTag=`#${r.id} [${r.name}]`,this.logger.setTag(this._debugTag)),this._settingsSchema&&(r.settings=function(t,e){const n=(e||[]).reduce(((t,e)=>("default"in e&&(t[e.key]=e.default),t)),{});return Object.assign(n,t)}(r.settings,this._settingsSchema),await this.useSettingsSchema(this._settingsSchema));try{await this._execCallableAPIAsync("setSDKMetadata",{version:this._version})}catch(t){console.warn(t)}e&&e.call(this,r)}catch(t){console.error(`${this._debugTag} [Ready Error]`,t)}}ensureConnected(){if(!this._connected)throw new Error("not connected")}beforeunload(t){"function"==typeof t&&(this._beforeunloadCallback=t)}provideModel(t){return this.caller._extendUserModel(t),this}provideTheme(t){return this.caller.call("provider:theme",t),this}provideStyle(t){return this.caller.call("provider:style",t),this}provideUI(t){return this.caller.call("provider:ui",t),this}useSettingsSchema(t){return this.connected&&this.caller.call("settings:schema",{schema:t,isSync:!0}),this._settingsSchema=t,this}updateSettings(t){this.caller.call("settings:update",t)}onSettingsChanged(t){const e="settings:changed";return this.on(e,t),()=>this.off(e,t)}showSettingsUI(){this.caller.call("settings:visible:changed",{visible:!0})}hideSettingsUI(){this.caller.call("settings:visible:changed",{visible:!1})}setMainUIAttrs(t){this.caller.call("main-ui:attrs",t)}setMainUIInlineStyle(t){this.caller.call("main-ui:style",t)}hideMainUI(t){const e={key:0,visible:!1,cursor:null==t?void 0:t.restoreEditingCursor};this.caller.call("main-ui:visible",e),this.emit("ui:visible:changed",e),this._ui.set(e.key,e)}showMainUI(t){const e={key:0,visible:!0,autoFocus:null==t?void 0:t.autoFocus};this.caller.call("main-ui:visible",e),this.emit("ui:visible:changed",e),this._ui.set(e.key,e)}toggleMainUI(){const t=0,e=this._ui.get(t);e&&e.visible?this.hideMainUI():this.showMainUI()}get version(){return this._version}get isMainUIVisible(){const t=this._ui.get(0);return Boolean(t&&t.visible)}get connected(){return this._connected}get baseInfo(){return this._baseInfo}get effect(){return(t=this)&&((null===(e=t.baseInfo)||void 0===e?void 0:e.effect)||!(null!==(n=t.baseInfo)&&void 0!==n&&n.iir));var t,e,n}get logger(){return uo}get settings(){var t;return null===(t=this.baseInfo)||void 0===t?void 0:t.settings}get caller(){return this._caller}resolveResourceFullUrl(t){if(this.ensureConnected(),t)return t=t.replace(/^[.\\/]+/,""),Qe(this._baseInfo.lsr,t)}_makeUserProxy(t,e){const n=this,r=this.caller;return new Proxy(t,{get(t,o,i){const s=t[o];return function(...t){if(s){const r=s.apply(n,t.concat(e));if(r!==co)return r}if(e){const i=o.toString().match(/^(once|off|on)/i);if(null!=i){const o=i[0].toLowerCase(),s=i.input.slice(o.length),a="off"===o,c=n.baseInfo.id,l=`hook:${e}:${Ve(s)}`,u=t[0];r[o](l,u);const f=()=>{r.off(l,u),r.listenerCount(l)||n.App._uninstallPluginHook(c,l)};return a?void f():(n.App._installPluginHook(c,l),f)}}let i=o;return["git","ui","assets"].includes(e)&&(i=e+"_"+i),r.callAsync("api:call",{tag:e,method:i,args:t})}}})}_execCallableAPIAsync(t,...e){return this._caller.callAsync("api:call",{method:t,args:e})}_execCallableAPI(t,...e){this._caller.call("api:call",{method:t,args:e})}_callWin(...t){return this._execCallableAPIAsync("_callMainWin",...t)}get App(){return this._makeUserProxy(go,"app")}get Editor(){return this._makeUserProxy(yo,"editor")}get DB(){return this._makeUserProxy(bo,"db")}get Git(){return this._makeUserProxy(_o,"git")}get UI(){return this._makeUserProxy(wo,"ui")}get Assets(){return this._makeUserProxy(xo,"assets")}get FileStorage(){let t=this._mFileStorage;return t||(t=this._mFileStorage=new jn(this)),t}get Request(){let t=this._mRequest;return t||(t=this._mRequest=new In(this)),t}get Experiments(){let t=this._mExperiments;return t||(t=this._mExperiments=new An(this)),t}}function Oo(t,e){return new Co(t,e)}if(null==window.__LSP__HOST__){const t=new On(null);window.logseq=Oo({},t)}})(),r})()));
},{}],"hRTX":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bind;
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
},{}],"Feqj":[function(require,module,exports) {
var global = arguments[3];
var define;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _bind = _interopRequireDefault(require("./helpers/bind.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// utils is a library of generic helper functions non-specific to axios

const {
  toString
} = Object.prototype;
const {
  getPrototypeOf
} = Object;
const kindOf = (cache => thing => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
const kindOfTest = type => {
  type = type.toLowerCase();
  return thing => kindOf(thing) === type;
};
const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {
  isArray
} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = thing => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = val => {
  if (kindOf(val) !== 'object') {
    return false;
  }
  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = val => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = thing => {
  let kind;
  return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
  // detect form-data instance
  kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {
  allOwnKeys = false
} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
})();
const isContextDefined = context => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */
) {
  const {
    caseless
  } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {
  allOwnKeys
} = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0, _bind.default)(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {
    allOwnKeys
  });
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = content => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = thing => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({
  hasOwnProperty
}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = obj => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = arr => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {};
const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {
    length
  } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}
const toJSONObject = obj => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest('AsyncFunction');
const isThenable = thing => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
var _default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};
exports.default = _default;
},{"./helpers/bind.js":"hRTX"}],"Cb9L":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("../utils.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
_utils.default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils.default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const prototype = AxiosError.prototype;
const descriptors = {};
['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {
    value: code
  };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {
  value: true
});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  _utils.default.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var _default = AxiosError;
exports.default = _default;
},{"../utils.js":"Feqj"}],"zNfz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// eslint-disable-next-line strict
var _default = null;
exports.default = _default;
},{}],"FRly":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"Quj6":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"aqZJ":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"aMB2":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"FRly","ieee754":"Quj6","isarray":"aqZJ","buffer":"aMB2"}],"wxxD":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("../utils.js"));
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
var _FormData = _interopRequireDefault(require("../platform/node/classes/FormData.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils.default.isPlainObject(thing) || _utils.default.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils.default.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils.default.isArray(arr) && !arr.some(isVisitable);
}
const predicates = _utils.default.toFlatObject(_utils.default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils.default.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_FormData.default || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils.default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils.default.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils.default.isSpecCompliantForm(formData);
  if (!_utils.default.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (_utils.default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && _utils.default.isBlob(value)) {
      throw new _AxiosError.default('Blob is not supported. Use a Buffer instead.');
    }
    if (_utils.default.isArrayBuffer(value) || _utils.default.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === 'object') {
      if (_utils.default.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (_utils.default.isArray(value) && isFlatArray(value) || (_utils.default.isFileList(value) || _utils.default.endsWith(key, '[]')) && (arr = _utils.default.toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(_utils.default.isUndefined(el) || el === null) && formData.append(
          // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (_utils.default.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    _utils.default.forEach(value, function each(el, key) {
      const result = !(_utils.default.isUndefined(el) || el === null) && visitor.call(formData, el, _utils.default.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!_utils.default.isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}
var _default = toFormData;
exports.default = _default;
},{"../utils.js":"Feqj","../core/AxiosError.js":"Cb9L","../platform/node/classes/FormData.js":"zNfz","buffer":"aMB2"}],"xqzv":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toFormData = _interopRequireDefault(require("./toFormData.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && (0, _toFormData.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  const _encode = encoder ? function (value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};
var _default = AxiosURLSearchParams;
exports.default = _default;
},{"./toFormData.js":"wxxD"}],"phSU":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildURL;
var _utils = _interopRequireDefault(require("../utils.js"));
var _AxiosURLSearchParams = _interopRequireDefault(require("../helpers/AxiosURLSearchParams.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils.default.isURLSearchParams(params) ? params.toString() : new _AxiosURLSearchParams.default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}
},{"../utils.js":"Feqj","../helpers/AxiosURLSearchParams.js":"xqzv"}],"xpeW":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./../utils.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils.default.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
var _default = InterceptorManager;
exports.default = _default;
},{"./../utils.js":"Feqj"}],"hU1T":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
exports.default = _default;
},{}],"FMy3":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AxiosURLSearchParams = _interopRequireDefault(require("../../../helpers/AxiosURLSearchParams.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = typeof URLSearchParams !== 'undefined' ? URLSearchParams : _AxiosURLSearchParams.default;
exports.default = _default;
},{"../../../helpers/AxiosURLSearchParams.js":"xqzv"}],"V4Qo":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = typeof FormData !== 'undefined' ? FormData : null;
exports.default = _default;
},{}],"f5XU":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = typeof Blob !== 'undefined' ? Blob : null;
exports.default = _default;
},{}],"HKjI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _URLSearchParams = _interopRequireDefault(require("./classes/URLSearchParams.js"));
var _FormData = _interopRequireDefault(require("./classes/FormData.js"));
var _Blob = _interopRequireDefault(require("./classes/Blob.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && ((product = navigator.product) === 'ReactNative' || product === 'NativeScript' || product === 'NS')) {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const isStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
var _default = {
  isBrowser: true,
  classes: {
    URLSearchParams: _URLSearchParams.default,
    FormData: _FormData.default,
    Blob: _Blob.default
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};
exports.default = _default;
},{"./classes/URLSearchParams.js":"FMy3","./classes/FormData.js":"V4Qo","./classes/Blob.js":"f5XU"}],"VfMV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
var _index = _interopRequireDefault(require("./node/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./node/index.js":"HKjI"}],"oiJV":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toURLEncodedForm;
var _utils = _interopRequireDefault(require("../utils.js"));
var _toFormData = _interopRequireDefault(require("./toFormData.js"));
var _index = _interopRequireDefault(require("../platform/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function toURLEncodedForm(data, options) {
  return (0, _toFormData.default)(data, new _index.default.classes.URLSearchParams(), Object.assign({
    visitor: function (value, key, path, helpers) {
      if (_index.default.isNode && _utils.default.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}
},{"../utils.js":"Feqj","./toFormData.js":"wxxD","../platform/index.js":"VfMV"}],"NTPf":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("../utils.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils.default.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils.default.isArray(target) ? target.length : name;
    if (isLast) {
      if (_utils.default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !_utils.default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && _utils.default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (_utils.default.isFormData(formData) && _utils.default.isFunction(formData.entries)) {
    const obj = {};
    _utils.default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var _default = formDataToJSON;
exports.default = _default;
},{"../utils.js":"Feqj"}],"r0tr":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("../utils.js"));
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
var _transitional = _interopRequireDefault(require("./transitional.js"));
var _toFormData = _interopRequireDefault(require("../helpers/toFormData.js"));
var _toURLEncodedForm = _interopRequireDefault(require("../helpers/toURLEncodedForm.js"));
var _index = _interopRequireDefault(require("../platform/index.js"));
var _formDataToJSON = _interopRequireDefault(require("../helpers/formDataToJSON.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils.default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils.default.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: _transitional.default,
  adapter: ['xhr', 'http'],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils.default.isObject(data);
    if (isObjectPayload && _utils.default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData = _utils.default.isFormData(data);
    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0, _formDataToJSON.default)(data)) : data;
    }
    if (_utils.default.isArrayBuffer(data) || _utils.default.isBuffer(data) || _utils.default.isStream(data) || _utils.default.isFile(data) || _utils.default.isBlob(data)) {
      return data;
    }
    if (_utils.default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils.default.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    let isFileList;
    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0, _toURLEncodedForm.default)(data, this.formSerializer).toString();
      }
      if ((isFileList = _utils.default.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;
        return (0, _toFormData.default)(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), this.formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';
    if (data && _utils.default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _AxiosError.default.from(e, _AxiosError.default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _index.default.classes.FormData,
    Blob: _index.default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};
_utils.default.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
_utils.default.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = _utils.default.merge(DEFAULT_CONTENT_TYPE);
});
var _default = defaults;
exports.default = _default;
},{"../utils.js":"Feqj","../core/AxiosError.js":"Cb9L","./transitional.js":"hU1T","../helpers/toFormData.js":"wxxD","../helpers/toURLEncodedForm.js":"oiJV","../platform/index.js":"VfMV","../helpers/formDataToJSON.js":"NTPf"}],"Zn5P":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./../utils.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils.default.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var _default = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
};
exports.default = _default;
},{"./../utils.js":"Feqj"}],"sDZl":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("../utils.js"));
var _parseHeaders = _interopRequireDefault(require("../helpers/parseHeaders.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return _utils.default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils.default.isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!_utils.default.isString(value)) return;
  if (_utils.default.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (_utils.default.isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = _utils.default.toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }
      const key = _utils.default.findKey(self, lHeader);
      if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
        self[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => _utils.default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (_utils.default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (_utils.default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0, _parseHeaders.default)(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = _utils.default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (_utils.default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (_utils.default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = _utils.default.findKey(this, header);
      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = _utils.default.findKey(self, _header);
        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];
          deleted = true;
        }
      }
    }
    if (_utils.default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self = this;
    const headers = {};
    _utils.default.forEach(this, (value, header) => {
      const key = _utils.default.findKey(headers, header);
      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self[header];
      }
      self[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = Object.create(null);
    _utils.default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils.default.isArray(value) ? value.join(', ') : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach(target => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }
    _utils.default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
_utils.default.freezeMethods(AxiosHeaders.prototype);
_utils.default.freezeMethods(AxiosHeaders);
var _default = AxiosHeaders;
exports.default = _default;
},{"../utils.js":"Feqj","../helpers/parseHeaders.js":"Zn5P"}],"IAOH":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformData;
var _utils = _interopRequireDefault(require("./../utils.js"));
var _index = _interopRequireDefault(require("../defaults/index.js"));
var _AxiosHeaders = _interopRequireDefault(require("../core/AxiosHeaders.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _index.default;
  const context = response || config;
  const headers = _AxiosHeaders.default.from(context.headers);
  let data = context.data;
  _utils.default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}
},{"./../utils.js":"Feqj","../defaults/index.js":"r0tr","../core/AxiosHeaders.js":"sDZl"}],"mXc0":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCancel;
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}
},{}],"lyDU":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
var _utils = _interopRequireDefault(require("../utils.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _AxiosError.default.call(this, message == null ? 'canceled' : message, _AxiosError.default.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}
_utils.default.inherits(CanceledError, _AxiosError.default, {
  __CANCEL__: true
});
var _default = CanceledError;
exports.default = _default;
},{"../core/AxiosError.js":"Cb9L","../utils.js":"Feqj"}],"Ztkp":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = settle;
var _AxiosError = _interopRequireDefault(require("./AxiosError.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError.default('Request failed with status code ' + response.status, [_AxiosError.default.ERR_BAD_REQUEST, _AxiosError.default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}
},{"./AxiosError.js":"Cb9L"}],"MLCl":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./../utils.js"));
var _index = _interopRequireDefault(require("../platform/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _index.default.isStandardBrowserEnv ?
// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      const cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));
      if (_utils.default.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }
      if (_utils.default.isString(path)) {
        cookie.push('path=' + path);
      }
      if (_utils.default.isString(domain)) {
        cookie.push('domain=' + domain);
      }
      if (secure === true) {
        cookie.push('secure');
      }
      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :
// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();
exports.default = _default;
},{"./../utils.js":"Feqj","../platform/index.js":"VfMV"}],"R56a":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAbsoluteURL;
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
},{}],"uRyQ":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineURLs;
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}
},{}],"dm4E":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildFullPath;
var _isAbsoluteURL = _interopRequireDefault(require("../helpers/isAbsoluteURL.js"));
var _combineURLs = _interopRequireDefault(require("../helpers/combineURLs.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0, _isAbsoluteURL.default)(requestedURL)) {
    return (0, _combineURLs.default)(baseURL, requestedURL);
  }
  return requestedURL;
}
},{"../helpers/isAbsoluteURL.js":"R56a","../helpers/combineURLs.js":"uRyQ"}],"Rpqp":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./../utils.js"));
var _index = _interopRequireDefault(require("../platform/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = _index.default.isStandardBrowserEnv ?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  const msie = /(msie|trident)/i.test(navigator.userAgent);
  const urlParsingNode = document.createElement('a');
  let originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    let href = url;
    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    const parsed = _utils.default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :
// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();
exports.default = _default;
},{"./../utils.js":"Feqj","../platform/index.js":"VfMV"}],"zNKq":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseProtocol;
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}
},{}],"muTE":[function(require,module,exports) {
'use strict';

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}
var _default = speedometer;
exports.default = _default;
},{}],"akUF":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./../utils.js"));
var _settle = _interopRequireDefault(require("./../core/settle.js"));
var _cookies = _interopRequireDefault(require("./../helpers/cookies.js"));
var _buildURL = _interopRequireDefault(require("./../helpers/buildURL.js"));
var _buildFullPath = _interopRequireDefault(require("../core/buildFullPath.js"));
var _isURLSameOrigin = _interopRequireDefault(require("./../helpers/isURLSameOrigin.js"));
var _transitional = _interopRequireDefault(require("../defaults/transitional.js"));
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
var _CanceledError = _interopRequireDefault(require("../cancel/CanceledError.js"));
var _parseProtocol = _interopRequireDefault(require("../helpers/parseProtocol.js"));
var _index = _interopRequireDefault(require("../platform/index.js"));
var _AxiosHeaders = _interopRequireDefault(require("../core/AxiosHeaders.js"));
var _speedometer2 = _interopRequireDefault(require("../helpers/speedometer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = (0, _speedometer2.default)(50, 250);
  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };
    data[isDownloadStream ? 'download' : 'upload'] = true;
    listener(data);
  };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
var _default = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = _AxiosHeaders.default.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    if (_utils.default.isFormData(requestData)) {
      if (_index.default.isStandardBrowserEnv || _index.default.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else {
        requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }
    const fullPath = (0, _buildFullPath.default)(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), (0, _buildURL.default)(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _AxiosHeaders.default.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      (0, _settle.default)(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new _AxiosError.default('Request aborted', _AxiosError.default.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _AxiosError.default('Network Error', _AxiosError.default.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || _transitional.default;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _AxiosError.default(timeoutErrorMessage, transitional.clarifyTimeoutError ? _AxiosError.default.ETIMEDOUT : _AxiosError.default.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (_index.default.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || (0, _isURLSameOrigin.default)(fullPath)) && config.xsrfCookieName && _cookies.default.read(config.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils.default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils.default.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _CanceledError.default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }
    const protocol = (0, _parseProtocol.default)(fullPath);
    if (protocol && _index.default.protocols.indexOf(protocol) === -1) {
      reject(new _AxiosError.default('Unsupported protocol ' + protocol + ':', _AxiosError.default.ERR_BAD_REQUEST, config));
      return;
    }

    // Send the request
    request.send(requestData || null);
  });
};
exports.default = _default;
},{"./../utils.js":"Feqj","./../core/settle.js":"Ztkp","./../helpers/cookies.js":"MLCl","./../helpers/buildURL.js":"phSU","../core/buildFullPath.js":"dm4E","./../helpers/isURLSameOrigin.js":"Rpqp","../defaults/transitional.js":"hU1T","../core/AxiosError.js":"Cb9L","../cancel/CanceledError.js":"lyDU","../helpers/parseProtocol.js":"zNKq","../platform/index.js":"VfMV","../core/AxiosHeaders.js":"sDZl","../helpers/speedometer.js":"muTE"}],"aHrQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("../utils.js"));
var _http = _interopRequireDefault(require("./http.js"));
var _xhr = _interopRequireDefault(require("./xhr.js"));
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const knownAdapters = {
  http: _http.default,
  xhr: _xhr.default
};
_utils.default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {
        value
      });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {
      value
    });
  }
});
var _default = {
  getAdapter: adapters => {
    adapters = _utils.default.isArray(adapters) ? adapters : [adapters];
    const {
      length
    } = adapters;
    let nameOrAdapter;
    let adapter;
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if (adapter = _utils.default.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
        break;
      }
    }
    if (!adapter) {
      if (adapter === false) {
        throw new _AxiosError.default(`Adapter ${nameOrAdapter} is not supported by the environment`, 'ERR_NOT_SUPPORT');
      }
      throw new Error(_utils.default.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
    }
    if (!_utils.default.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }
    return adapter;
  },
  adapters: knownAdapters
};
exports.default = _default;
},{"../utils.js":"Feqj","./http.js":"zNfz","./xhr.js":"akUF","../core/AxiosError.js":"Cb9L"}],"HALK":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dispatchRequest;
var _transformData = _interopRequireDefault(require("./transformData.js"));
var _isCancel = _interopRequireDefault(require("../cancel/isCancel.js"));
var _index = _interopRequireDefault(require("../defaults/index.js"));
var _CanceledError = _interopRequireDefault(require("../cancel/CanceledError.js"));
var _AxiosHeaders = _interopRequireDefault(require("../core/AxiosHeaders.js"));
var _adapters = _interopRequireDefault(require("../adapters/adapters.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new _CanceledError.default(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = _AxiosHeaders.default.from(config.headers);

  // Transform request data
  config.data = _transformData.default.call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  const adapter = _adapters.default.getAdapter(config.adapter || _index.default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData.default.call(config, config.transformResponse, response);
    response.headers = _AxiosHeaders.default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!(0, _isCancel.default)(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData.default.call(config, config.transformResponse, reason.response);
        reason.response.headers = _AxiosHeaders.default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
},{"./transformData.js":"IAOH","../cancel/isCancel.js":"mXc0","../defaults/index.js":"r0tr","../cancel/CanceledError.js":"lyDU","../core/AxiosHeaders.js":"sDZl","../adapters/adapters.js":"aHrQ"}],"fBI1":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeConfig;
var _utils = _interopRequireDefault(require("../utils.js"));
var _AxiosHeaders = _interopRequireDefault(require("./AxiosHeaders.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const headersToObject = thing => thing instanceof _AxiosHeaders.default ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (_utils.default.isPlainObject(target) && _utils.default.isPlainObject(source)) {
      return _utils.default.merge.call({
        caseless
      }, target, source);
    } else if (_utils.default.isPlainObject(source)) {
      return _utils.default.merge({}, source);
    } else if (_utils.default.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils.default.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils.default.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils.default.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils.default.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils.default.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };
  _utils.default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    _utils.default.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}
},{"../utils.js":"Feqj","./AxiosHeaders.js":"sDZl"}],"xOzr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = void 0;
const VERSION = "1.4.0";
exports.VERSION = VERSION;
},{}],"bSmC":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _data = require("../env/data.js");
var _AxiosError = _interopRequireDefault(require("../core/AxiosError.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _data.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _AxiosError.default(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), _AxiosError.default.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _AxiosError.default('options must be an object', _AxiosError.default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _AxiosError.default('option ' + opt + ' must be ' + result, _AxiosError.default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _AxiosError.default('Unknown option ' + opt, _AxiosError.default.ERR_BAD_OPTION);
    }
  }
}
var _default = {
  assertOptions,
  validators
};
exports.default = _default;
},{"../env/data.js":"xOzr","../core/AxiosError.js":"Cb9L"}],"trUU":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./../utils.js"));
var _buildURL = _interopRequireDefault(require("../helpers/buildURL.js"));
var _InterceptorManager = _interopRequireDefault(require("./InterceptorManager.js"));
var _dispatchRequest = _interopRequireDefault(require("./dispatchRequest.js"));
var _mergeConfig = _interopRequireDefault(require("./mergeConfig.js"));
var _buildFullPath = _interopRequireDefault(require("./buildFullPath.js"));
var _validator = _interopRequireDefault(require("../helpers/validator.js"));
var _AxiosHeaders = _interopRequireDefault(require("./AxiosHeaders.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const validators = _validator.default.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager.default(),
      response: new _InterceptorManager.default()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = (0, _mergeConfig.default)(this.defaults, config);
    const {
      transitional,
      paramsSerializer,
      headers
    } = config;
    if (transitional !== undefined) {
      _validator.default.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (_utils.default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        _validator.default.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();
    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && _utils.default.merge(headers.common, headers[config.method]);
    contextHeaders && _utils.default.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], method => {
      delete headers[method];
    });
    config.headers = _AxiosHeaders.default.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest.default.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = _dispatchRequest.default.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = (0, _mergeConfig.default)(this.defaults, config);
    const fullPath = (0, _buildFullPath.default)(config.baseURL, config.url);
    return (0, _buildURL.default)(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils.default.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request((0, _mergeConfig.default)(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
_utils.default.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0, _mergeConfig.default)(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
var _default = Axios;
exports.default = _default;
},{"./../utils.js":"Feqj","../helpers/buildURL.js":"phSU","./InterceptorManager.js":"xpeW","./dispatchRequest.js":"HALK","./mergeConfig.js":"fBI1","./buildFullPath.js":"dm4E","../helpers/validator.js":"bSmC","./AxiosHeaders.js":"sDZl"}],"VgQU":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CanceledError = _interopRequireDefault(require("./CanceledError.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new _CanceledError.default(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}
var _default = CancelToken;
exports.default = _default;
},{"./CanceledError.js":"lyDU"}],"yisB":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = spread;
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
},{}],"FbOI":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAxiosError;
var _utils = _interopRequireDefault(require("./../utils.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils.default.isObject(payload) && payload.isAxiosError === true;
}
},{"./../utils.js":"Feqj"}],"Qnwc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var _default = HttpStatusCode;
exports.default = _default;
},{}],"Wzmt":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = _interopRequireDefault(require("./utils.js"));
var _bind = _interopRequireDefault(require("./helpers/bind.js"));
var _Axios = _interopRequireDefault(require("./core/Axios.js"));
var _mergeConfig = _interopRequireDefault(require("./core/mergeConfig.js"));
var _index = _interopRequireDefault(require("./defaults/index.js"));
var _formDataToJSON = _interopRequireDefault(require("./helpers/formDataToJSON.js"));
var _CanceledError = _interopRequireDefault(require("./cancel/CanceledError.js"));
var _CancelToken = _interopRequireDefault(require("./cancel/CancelToken.js"));
var _isCancel = _interopRequireDefault(require("./cancel/isCancel.js"));
var _data = require("./env/data.js");
var _toFormData = _interopRequireDefault(require("./helpers/toFormData.js"));
var _AxiosError = _interopRequireDefault(require("./core/AxiosError.js"));
var _spread = _interopRequireDefault(require("./helpers/spread.js"));
var _isAxiosError = _interopRequireDefault(require("./helpers/isAxiosError.js"));
var _AxiosHeaders = _interopRequireDefault(require("./core/AxiosHeaders.js"));
var _HttpStatusCode = _interopRequireDefault(require("./helpers/HttpStatusCode.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _Axios.default(defaultConfig);
  const instance = (0, _bind.default)(_Axios.default.prototype.request, context);

  // Copy axios.prototype to instance
  _utils.default.extend(instance, _Axios.default.prototype, context, {
    allOwnKeys: true
  });

  // Copy context to instance
  _utils.default.extend(instance, context, null, {
    allOwnKeys: true
  });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0, _mergeConfig.default)(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_index.default);

// Expose Axios class to allow class inheritance
axios.Axios = _Axios.default;

// Expose Cancel & CancelToken
axios.CanceledError = _CanceledError.default;
axios.CancelToken = _CancelToken.default;
axios.isCancel = _isCancel.default;
axios.VERSION = _data.VERSION;
axios.toFormData = _toFormData.default;

// Expose AxiosError class
axios.AxiosError = _AxiosError.default;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = _spread.default;

// Expose isAxiosError
axios.isAxiosError = _isAxiosError.default;

// Expose mergeConfig
axios.mergeConfig = _mergeConfig.default;
axios.AxiosHeaders = _AxiosHeaders.default;
axios.formToJSON = thing => (0, _formDataToJSON.default)(_utils.default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = _HttpStatusCode.default;
axios.default = axios;

// this module should only have a default export
var _default = axios;
exports.default = _default;
},{"./utils.js":"Feqj","./helpers/bind.js":"hRTX","./core/Axios.js":"trUU","./core/mergeConfig.js":"fBI1","./defaults/index.js":"r0tr","./helpers/formDataToJSON.js":"NTPf","./cancel/CanceledError.js":"lyDU","./cancel/CancelToken.js":"VgQU","./cancel/isCancel.js":"mXc0","./env/data.js":"xOzr","./helpers/toFormData.js":"wxxD","./core/AxiosError.js":"Cb9L","./helpers/spread.js":"yisB","./helpers/isAxiosError.js":"FbOI","./core/AxiosHeaders.js":"sDZl","./helpers/HttpStatusCode.js":"Qnwc"}],"O4Aa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = exports.VERSION = exports.HttpStatusCode = exports.CanceledError = exports.CancelToken = exports.Cancel = exports.AxiosHeaders = exports.AxiosError = exports.Axios = void 0;
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _axios.default;
  }
});
exports.toFormData = exports.spread = exports.mergeConfig = exports.isCancel = exports.isAxiosError = exports.formToJSON = void 0;
var _axios = _interopRequireDefault(require("./lib/axios.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  mergeConfig
} = _axios.default;
exports.mergeConfig = mergeConfig;
exports.formToJSON = formToJSON;
exports.HttpStatusCode = HttpStatusCode;
exports.AxiosHeaders = AxiosHeaders;
exports.toFormData = toFormData;
exports.spread = spread;
exports.isAxiosError = isAxiosError;
exports.Cancel = Cancel;
exports.all = all;
exports.VERSION = VERSION;
exports.CancelToken = CancelToken;
exports.isCancel = isCancel;
exports.CanceledError = CanceledError;
exports.AxiosError = AxiosError;
exports.Axios = Axios;
},{"./lib/axios.js":"Wzmt"}],"Focm":[function(require,module,exports) {
"use strict";

require("@logseq/libs");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const settingsTemplate = [{
  key: "keyboard",
  type: "string",
  default: "r n",
  description: 'Type in the key or key combination you wish to use to toggle. If you want multiple key combinations, add a space or "+" between the keys ("r n" or "ctrl+r"). \n\rIMPORTANT: After changing the hotkey, you must restart Logseq to take effect.',
  title: "Keyboard Hotkey"
}, {
  key: "randomMode",
  type: "enum",
  default: "page",
  title: "Random Mode",
  description: "Page, card, tags or advanced query",
  enumChoices: ["page", "card", "tags", "query"],
  enumPicker: "radio"
}, {
  key: "includeJournals",
  type: "boolean",
  default: false,
  title: "Page mode",
  description: "Include Journals?"
}, {
  key: "randomTags",
  type: "string",
  default: "",
  title: "Tags mode",
  description: "Comma separated the tags. e.g. programing,design,sports"
}, {
  key: "advancedQuery",
  type: "string",
  default: "",
  title: "Query mode",
  inputAs: "textarea",
  description: 'Your custom query. e.g. [:find (pull ?b [*]) :where [?b :block/refs ?bp] [?bp :block/name "book"]]'
}, {
  key: "randomStepSize",
  type: "enum",
  default: "1",
  title: "Random walk step size.",
  description: "Random walk step size. Use it with caution. One shows in main area, others show in the right sidebar.",
  enumChoices: ["1", "3", "5", "7", "10"],
  enumPicker: "radio"
}, {
  key: "enableTelegramBot",
  title: "Enable telegram bot",
  description: "Enable telegram bot. It doesn't work in page mode.",
  type: "boolean",
  default: false
}, {
  key: "telegramBotToken",
  type: "string",
  default: "",
  title: "Telegram bot token",
  description: ""
}, {
  key: "telegramBotChatId",
  type: "string",
  default: "",
  title: "Telegram bot chatId",
  description: ""
}, {
  key: "activeHours",
  title: "Telegram bot active hours",
  type: "enum",
  enumChoices: Array.from({
    length: 24
  }, (_, i) => i + ""),
  enumPicker: "checkbox",
  default: [],
  description: ""
}, {
  key: "activeMinutes",
  title: "Telegram bot active minutes",
  type: "enum",
  enumChoices: Array.from({
    length: 60
  }, (_, i) => i + ""),
  enumPicker: "checkbox",
  default: ["0"],
  description: ""
}];
logseq.useSettingsSchema(settingsTemplate);
async function openRandomNote() {
  const queryScript = getQueryScript();
  let stepSize = parseInt(logseq.settings.randomStepSize || 1);
  try {
    let ret = await logseq.DB.datascriptQuery(queryScript);
    const pages = ret === null || ret === void 0 ? void 0 : ret.flat();
    for (let i = 0; i < pages.length; i++) {
      const block = pages[i];
      if (block["pre-block?"]) {
        pages[i] = await logseq.Editor.getPage(block.page.id);
      }
    }
    openRandomNoteInMain(pages);
    if (stepSize > 1) {
      openRandomNoteInSidebar(pages, stepSize - 1);
    }
  } catch (err) {
    logseq.UI.showMsg(err.message || "Maybe something wrong with the query", "error");
    console.log(err);
  }
}

/**
 * open random note in main area.
 * @param {*} pages
 */
async function openRandomNoteInMain(pages) {
  if (pages && pages.length > 0) {
    const index = Math.floor(Math.random() * pages.length);
    const page = pages[index];
    if (page && page.name) {
      logseq.App.pushState("page", {
        name: page.name
      });
    } else if (page && page.page) {
      const blockInfo = (await logseq.Editor.getBlock(page.id)) || {
        uuid: ""
      };
      logseq.App.pushState("page", {
        name: blockInfo.uuid
      });
    }
  }
}

/**
 * open random notes in right sidebar.
 * @param {*} pages
 * @param {*} counts
 */
async function openRandomNoteInSidebar(pages, counts) {
  for (var i = 0; i < counts; i++) {
    const index = Math.floor(Math.random() * pages.length);
    const page = pages[index];
    logseq.Editor.openInRightSidebar(page.uuid);
  }
}

/**
 * 发送消息到telegram bot
 * @param {*} msg
 */
async function sendToTelegramBot(msg) {
  const token = logseq.settings.telegramBotToken;
  const chatId = logseq.settings.telegramBotChatId;
  const sendUrl = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(msg);
  if (token && chatId) {
    _axios.default.get(sendUrl).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
}
function getQueryScript() {
  const randomMode = logseq.settings.randomMode;
  const includeJournals = logseq.settings.includeJournals;
  const randomTags = logseq.settings.randomTags.split(",");
  const defaultQuery = `
  [:find (pull ?p [*])
    :where
    [_ :block/page ?p]]`;
  switch (randomMode) {
    case "page":
      if (includeJournals) {
        return `
        [:find (pull ?p [*])
          :where
          [_ :block/page ?p]]`;
      } else {
        return `
        [:find (pull ?p [*])
          :where
          [_ :block/page ?p]
          [?p :block/journal? false]]`;
      }
    case "tags":
      const tags = randomTags.map(item => '"' + item.toLowerCase() + '"').join(",");
      if (!logseq.settings.randomTags) {
        logseq.UI.showMsg("Random tags are required.", "warning");
      }
      return `
      [:find (pull ?b [*])
        :where
        [?b :block/refs ?bp]
        [?bp :block/name ?name]
        [(contains? #{` + tags + `} ?name)]]
      `;
    case "card":
      return `
        [:find (pull ?b [*])
          :where
          [?b :block/refs ?bp]
          [?bp :block/name ?name]
          [(contains? #{"card"} ?name)]]
        `;
    case "query":
      return logseq.settings.advancedQuery;
    default:
      console.log("unknown");
      return defaultQuery;
  }
}
async function getRandomNoteInfo() {
  const queryScript = getQueryScript();
  const ret = await logseq.DB.datascriptQuery(queryScript);
  const blocks = ret === null || ret === void 0 ? void 0 : ret.flat();
  if (blocks && blocks.length > 0) {
    const index = Math.floor(Math.random() * blocks.length);
    const randomNoteInfo = await getBlockReadableContent(blocks[index].uuid);
    console.log("randomNoteInfo=" + randomNoteInfo);
    return randomNoteInfo;
  }
  return "";
}
async function getBlockReadableContent(uid) {
  const blockInfo = await logseq.Editor.getBlock(uid);
  console.log(blockInfo);
  console.log("before replace =>", blockInfo === null || blockInfo === void 0 ? void 0 : blockInfo.content);
  const content = (blockInfo === null || blockInfo === void 0 ? void 0 : blockInfo.content.split(/\n.*::/)[0].replace("/\n.*::/", "")) || "";
  console.log("after replace =>", content);
  if (hasRefUuid(content)) {
    const parts = content.split("))");
    const childContent = await getBlockReadableContent(parts[0].replace("((", ""));
    return childContent + parts[1];
  }
  return content;
}
const hasRefUuid = content => {
  return !!content && content.indexOf("((") > -1 && content.indexOf("))") > -1;
};
function main() {
  logseq.provideModel({
    handleRandomNote() {
      openRandomNote();
    }
  });
  logseq.App.registerUIItem("toolbar", {
    key: "logseq-random-note-toolbar",
    template: `
      <span class="logseq-random-note-toolbar">
        <a title="I'm Feeling Lucky(r n)" class="button" data-on-click="handleRandomNote">
          <i class="ti ti-windmill"></i>
        </a>
      </span>
    `
  });
  logseq.App.registerCommandPalette({
    key: "logseq-random-note",
    label: "Random note => Let's go",
    keybinding: {
      mode: "non-editing",
      binding: logseq.settings.keyboard || "r n"
    }
  }, () => {
    openRandomNote();
  });
  logseq.App.registerCommandPalette({
    key: "logseq-random-note:page-mode",
    label: "Random note => page mode"
  }, () => {
    logseq.updateSettings({
      randomMode: "page"
    });
  });
  logseq.App.registerCommandPalette({
    key: "logseq-random-note:tags-mode",
    label: "Random note => tags mode"
  }, () => {
    logseq.updateSettings({
      randomMode: "tags"
    });
  });
  logseq.App.registerCommandPalette({
    key: "logseq-random-note:card-mode",
    label: "Random note => card mode"
  }, () => {
    logseq.updateSettings({
      randomMode: "card"
    });
  });
  logseq.App.registerCommandPalette({
    key: "logseq-random-note:query-mode",
    label: "Random note => query mode"
  }, () => {
    logseq.updateSettings({
      randomMode: "query"
    });
  });
  logseq.App.registerCommandPalette({
    key: "logseq-random-note:toggle-telegram-bot",
    label: "Random note => Toggle Telegram Bot"
  }, () => {
    const enable = logseq.settings.enableTelegramBot;
    logseq.updateSettings({
      enableTelegramBot: !enable
    });
    logseq.UI.showMsg("RandomNote Telegram Bot " + (enable ? "Disabled" : "Enabled"), "success");
  });
  const sendContentInterval = setInterval(() => {
    console.log("sendContentInterval running...");
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    console.log("hour: " + hour + " minute: " + minute);
    const activeHours = logseq.settings.activeHours;
    const activeMinutes = logseq.settings.activeMinutes;
    const enableTelegramBot = logseq.settings.enableTelegramBot;
    if (enableTelegramBot && activeHours.indexOf(hour + "") > -1 && activeMinutes.indexOf(minute + "") > -1) {
      getRandomNoteInfo().then(content => {
        console.log(content);
        !!content && sendToTelegramBot(content);
      });
    }
  }, 60 * 1000);
  logseq.beforeunload(() => {
    window.clearInterval(sendContentInterval);
    console.log("logseq.beforeunload => clear sendContentInterval");
    return Promise.resolve();
  });
}
logseq.ready(main).catch(console.error);
},{"@logseq/libs":"JoaV","axios":"O4Aa"}]},{},["Focm"], null)