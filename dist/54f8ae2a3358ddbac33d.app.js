!function(t){function e(e){for(var r,o,i=e[0],a=e[1],c=0,s=[];c<i.length;c++)o=i[c],n[o]&&s.push(n[o][0]),n[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(u&&u(e);s.length;)s.shift()()}var r={},n={0:0};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,o){r=n[t]=[e,o]});e.push(r[2]=i);var a,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(t){return o.p+""+{1:"c3f377a5ad67c8f3e9fd",2:"6e534c2f81cfa3942bc1",3:"95aecba583327ed4e064",4:"0b8d92227ac499551674"}[t]+".app.js"}(t),a=function(e){u.onerror=u.onload=null,clearTimeout(s);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,r[1](a)}n[t]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,c.appendChild(u)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=a;o(o.s=12)}([function(t,e,r){t.exports=r(9)},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){var n=r(6),o=r(7),i=r(8);t.exports=function(t,e){return n(t)||o(t,e)||i()}},function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)})}}},function(t,e,r){},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(10),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=e.regeneratorRuntime=s?t.exports:{}).wrap=w;var l="suspendedStart",d="suspendedYield",h="executing",p="completed",y={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(T([])));g&&g!==n&&o.call(g,a)&&(v=g);var b=_.prototype=E.prototype=Object.create(v);L.prototype=b.constructor=_,_.constructor=L,_[u]=L.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},f.awrap=function(t){return{__await:t}},O(S.prototype),S.prototype[c]=function(){return this},f.AsyncIterator=S,f.async=function(t,e,r,n){var o=new S(w(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(b),b[u]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(q),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;q(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,e,r,n){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function E(){}function L(){}function _(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e){function r(){return"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}e.install=function(t){t||(t={}),r()&&navigator.serviceWorker.register("sw.js",{})},e.applyUpdate=function(t,e){},e.update=function(){r()&&navigator.serviceWorker.getRegistration().then(function(t){if(t)return t.update()})}},function(t,e,r){"use strict";r.r(e);r(5);var n=r(3),o=r.n(n),i=r(1),a=r.n(i),c=r(2),u=r.n(c),s=!1,f=function(){function t(){if(a()(this,t),s)return s;s=this,this.modals={},this.isOpen=null,this.started=!1}return u()(t,[{key:"close",value:function(){this.isOpen&&this.isOpen.classList.remove("open")}},{key:"open",value:function(t){this.started&&t&&(this.close(),this.modals[t]||(this.modals[t]=document.querySelector('[data-id="'.concat(t,'"]'))),this.modals[t].classList.add("open"),this.isOpen=this.modals[t])}},{key:"start",value:function(){var t=this;this.started=!0,this.closeButtons=[].slice.call(document.querySelectorAll(".close-modal")),this.closeButtons.forEach(function(e){return e.addEventListener("click",function(){return t.close()})})}}]),t}(),l=[{transform:"scale3d(0, 1, 1)"},{transform:"scale3d(1, 1, 1)"}];function d(t,e,r){var n=document.querySelector("#question"),o=document.querySelector("#answer"),i=document.querySelector("#oxford-link"),a=null;return t.map(function(t){var c=t.title,u=t.zynga_question_options,s=t.dictionary_link,f=document.importNode(n.content,!0),d=f.querySelector(".question"),h=f.querySelector(".answers"),p=c.rendered;d.innerText=p;var y=document.importNode(i.content,!0),v=y.querySelector(".oxford-explains-btn");return v.href=s,u.forEach(function(t){var n=t.is_right,i=document.importNode(o.content,!0),c=i.querySelector(".answer");c.style.setProperty("--size","".concat(Math.floor(99*Math.random())+1,"%")),n&&(a=c);var u=i.querySelector("h6"),s=i.querySelector(".count"),f=t.title;u.innerText=f,s.innerText=0,h.appendChild(i),function(t,e,r,n,o,i){var a=t.answerWrpTmp,c=t.is_right,u=t.question,s=t.answer,f=n.querySelector(".progress");a.addEventListener("click",function(){c||a.classList.add("wrong"),i.classList.add("right"),o.classList.add("answered"),gtag("event","click_any_answer",{event_category:u,event_label:s,value:1}),f.animate(l,{duration:1e3,easing:"cubic-bezier(0.5, 0, 0.5, 1)"}).onfinish=function(){r.isEnd&&e.open("prepared-to-play"),r.slideNext()}})}({answerWrpTmp:c,is_right:n,question:p,answer:f},r,e,v,h,a)}),h.appendChild(y),f})}var h=r(0),p=r.n(h),y=r(4),v=r.n(y);var m,g,b="http://wwf.fuerzastudio.com/wp-json",w="/wp/v2/questions-api/?per_page=12&offset=";function x(t){var e=new f,n=new t(".swiper-container",{fadeEffect:{crossFade:!0},allowTouchMove:!1,init:!1,pagination:{el:".fraction",type:"fraction"}});n.on("reachEnd",function(){return e.start()});var i=[0,12,24,48],a=i[Math.floor(Math.random()*i.length)];(function(t,e,n){return"fetch"in window?new Promise(function(r,o){fetch(t+e+n).then(function(t){r(t.json().then(function(t){return t}))}).catch(function(){return o(new Error("something bad happened"))})}):(r.e(1).then(r.t.bind(null,47,7)).then(function(r){var o=r.default.create({baseURL:t});return v()(p.a.mark(function t(){var r;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get(e+n);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t,this)}))}),!1)})(b,w,a).then(function(t){var r=o()(t,2),i=r[0],a=r[1];console.log(i,a),n.appendSlide(d([i,a],n,e)),n.init()})}r(11).install(),r.e(4).then(r.t.bind(null,48,7)).then(function(t){[].slice.call(document.querySelectorAll(".shape")).forEach(function(e){var r=e.dataset,n=r.modifier,o=r.y,i=r.from,a=r.to;t.create({elem:e,from:i,to:a,direct:!0,props:{"--ty":{from:"".concat(o,"%"),to:"".concat(-10*n,"%")}}}).start()})}),Promise.all([r.e(2),r.e(3)]).then(r.bind(null,46)).then(function(t){var e;x(t.default),e=new f,[].slice.call(document.querySelectorAll('[data-id="prepared-to-play"] .response')).forEach(function(t){return t.addEventListener("click",function(t){e.open("map");var r=t.target.dataset,n=r.response,o=r.question;gtag("event","click_final_answer",{event_category:o,event_label:n,value:1})})})}),m=function(t,e){return[t,"#2251b6","#2351b6","#2552b7","#2752b7","#2852b8","#2a52b8","#2c52b9","#2d53ba","#2f53ba","#3153bb","#3353bb","#3454bc","#3654bc","#3854bd","#3954be","#3b54be","#3d55bf","#3e55bf","#4055c0","#4255c1","#4355c1","#4556c2","#4756c2","#4856c3","#4a56c3","#4c57c4","#4e57c5","#4f57c5","#5157c6","#5357c6","#5458c7","#5658c7","#5858c8","#5958c9","#5b58c9","#5d59ca","#5e59ca","#6059cb","#6259cb","#6359cc","#655acd","#675acd","#695ace","#6a5ace","#6c5bcf","#6e5bcf","#6f5bd0","#715bd1","#735bd1","#745cd2","#765cd2","#785cd3","#795cd4","#7b5cd4","#7d5dd5","#7e5dd5","#805dd6","#825dd6","#845ed7","#855ed8","#875ed8","#895ed9","#8a5ed9","#8c5fda","#8e5fda","#8f5fdb","#915fdc","#935fdc","#9460dd","#9660dd","#9860de","#9960de","#9b60df","#9d61e0","#9f61e0","#a061e1","#a261e1","#a462e2","#a562e2","#a762e3","#a962e4","#aa62e4","#ac63e5","#ae63e5","#af63e6","#b163e7","#b363e7","#b464e8","#b664e8","#b864e9","#ba64e9","#bb65ea","#bd65eb","#bf65eb","#c065ec","#c265ec","#c466ed","#c566ed",e]}("#2051b5","#c766ee"),g=document.getElementById("usa-map"),[].slice.call(g.querySelectorAll("path")).forEach(function(t){return t.setAttribute("fill",m[Math.floor(Math.random()*m.length-1)+1])})}]);