!function(t){function e(e){for(var n,o,i=e[0],a=e[1],c=0,s=[];c<i.length;c++)o=i[c],r[o]&&s.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(u&&u(e);s.length;)s.shift()()}var n={},r={0:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=i);var a,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(t){return o.p+""+{1:"c3f377a5ad67c8f3e9fd",2:"6e534c2f81cfa3942bc1",3:"95aecba583327ed4e064",4:"0b8d92227ac499551674"}[t]+".app.js"}(t),a=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[t]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,c.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=a;o(o.s=12)}([function(t,e,n){t.exports=n(9)},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(6),o=n(7),i=n(8);t.exports=function(t,e){return r(t)||o(t,e)||i()}},function(t,e){function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)})}}},function(t,e,n){},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(10),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{(l=e.regeneratorRuntime=s?t.exports:{}).wrap=w;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(T([])));g&&g!==r&&o.call(g,a)&&(y=g);var b=_.prototype=E.prototype=Object.create(y);L.prototype=b.constructor=_,_.constructor=L,_[u]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},O(S.prototype),S.prototype[c]=function(){return this},l.AsyncIterator=S,l.async=function(t,e,n,r){var o=new S(w(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(b),b[u]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(q),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),q(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;q(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),a=new P(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return N()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=x(t,e,n);if("normal"===u.type){if(r=n.done?p:d,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function E(){}function L(){}function _(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var c=x(t[n],t,r);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e){function n(){return"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}e.install=function(t){t||(t={}),n()&&navigator.serviceWorker.register("sw.js",{})},e.applyUpdate=function(t,e){},e.update=function(){n()&&navigator.serviceWorker.getRegistration().then(function(t){if(t)return t.update()})}},function(t,e,n){"use strict";n.r(e);n(5);var r=n(3),o=n.n(r),i=n(1),a=n.n(i),c=n(2),u=n.n(c),s=!1,l=function(){function t(){if(a()(this,t),s)return s;s=this,this.modals={},this.isOpen=null,this.started=!1,this.closeEvent=new Event("modalCloses",{bubbles:!0})}return u()(t,[{key:"close",value:function(){this.isOpen&&(this.isOpen.classList.remove("open"),"map"===this.currentModal&&document.dispatchEvent(this.closeEvent))}},{key:"open",value:function(t){this.started&&t&&(this.close(),this.modals[t]||(this.modals[t]=document.querySelector('[data-id="'.concat(t,'"]'))),this.modals[t].classList.add("open"),this.isOpen=this.modals[t],this.currentModal=t)}},{key:"start",value:function(){var t=this;this.started=!0,this.closeButtons=[].slice.call(document.querySelectorAll(".close-modal")),this.closeButtons.forEach(function(e){return e.addEventListener("click",function(){return t.close()})})}}]),t}(),f=[{transform:"scale3d(0, 1, 1)"},{transform:"scale3d(1, 1, 1)"}];function d(t,e,n){var r=document.querySelector("#question"),o=document.querySelector("#answer"),i=document.querySelector("#oxford-link"),a=null;return t.map(function(t){var c=t.title,u=t.zynga_question_options,s=t.dictionary_link,l=document.importNode(r.content,!0),d=l.querySelector(".question"),h=l.querySelector(".answers"),p=c.rendered;d.innerText=p;var v=document.importNode(i.content,!0),y=v.querySelector(".oxford-explains-btn");return y.href=s,u.forEach(function(t){var r=t.is_right,i=document.importNode(o.content,!0),c=i.querySelector(".answer");c.style.setProperty("--size","".concat(Math.floor(99*Math.random())+1,"%")),r&&(a=c);var u=i.querySelector("h6"),s=i.querySelector(".count"),l=t.title;u.innerText=l,s.innerText=0,h.appendChild(i),function(t,e,n,r,o,i){var a=t.answerWrpTmp,c=t.is_right,u=t.question,s=t.answer,l=r.querySelector(".progress");a.addEventListener("click",function(){c||a.classList.add("wrong"),i.classList.add("right"),o.classList.add("answered"),gtag("event","click_any_answer",{event_category:u,event_label:s,value:1}),l.animate(f,{duration:1e3,easing:"cubic-bezier(0.5, 0, 0.5, 1)"}).onfinish=function(){n.isEnd&&e.open("prepared-to-play"),n.slideNext()}})}({answerWrpTmp:c,is_right:r,question:p,answer:l},n,e,y,h,a)}),h.appendChild(v),l})}var h=n(0),p=n.n(h),v=n(4),y=n.n(v);var m,g,b="http://wwf.fuerzastudio.com/wp-json",w="/wp/v2/questions-api/?per_page=12&offset=";function x(t){var e=new l,r=new t(".swiper-container",{fadeEffect:{crossFade:!0},allowTouchMove:!1,init:!1,pagination:{el:".fraction",type:"fraction"}});r.on("reachEnd",function(){return e.start()});var i=[0,12,24,48];function a(){var t=i[Math.floor(Math.random()*i.length)];(function(t,e,r){return"fetch"in window?new Promise(function(n,o){fetch(t+e+r).then(function(t){n(t.json().then(function(t){return t}))}).catch(function(){return o(new Error("something bad happened"))})}):(n.e(1).then(n.t.bind(null,47,7)).then(function(n){var o=n.default.create({baseURL:t});return y()(p.a.mark(function t(){var n;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get(e+r);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,this)}))}),!1)})(b,w,t).then(function(t){var n=o()(t,2),i=n[0],a=n[1];r.appendSlide(d([i,a],r,e)),r.init()})}a(),document.addEventListener("modalCloses",function(){r.removeAllSlides(),a()})}n(11).install(),n.e(4).then(n.t.bind(null,48,7)).then(function(t){[].slice.call(document.querySelectorAll(".shape")).forEach(function(e){var n=e.dataset,r=n.modifier,o=n.y,i=n.from,a=n.to;t.create({elem:e,from:i,to:a,direct:!0,props:{"--ty":{from:"".concat(o,"%"),to:"".concat(-10*r,"%")}}}).start()})}),Promise.all([n.e(2),n.e(3)]).then(n.bind(null,46)).then(function(t){var e;x(t.default),e=new l,[].slice.call(document.querySelectorAll('[data-id="prepared-to-play"] .response')).forEach(function(t){return t.addEventListener("click",function(t){e.open("map");var n=t.target.dataset,r=n.response,o=n.question;gtag("event","click_final_answer",{event_category:o,event_label:r,value:1})})})}),m=function(t,e){return[t,"#2251b6","#2351b6","#2552b7","#2752b7","#2852b8","#2a52b8","#2c52b9","#2d53ba","#2f53ba","#3153bb","#3353bb","#3454bc","#3654bc","#3854bd","#3954be","#3b54be","#3d55bf","#3e55bf","#4055c0","#4255c1","#4355c1","#4556c2","#4756c2","#4856c3","#4a56c3","#4c57c4","#4e57c5","#4f57c5","#5157c6","#5357c6","#5458c7","#5658c7","#5858c8","#5958c9","#5b58c9","#5d59ca","#5e59ca","#6059cb","#6259cb","#6359cc","#655acd","#675acd","#695ace","#6a5ace","#6c5bcf","#6e5bcf","#6f5bd0","#715bd1","#735bd1","#745cd2","#765cd2","#785cd3","#795cd4","#7b5cd4","#7d5dd5","#7e5dd5","#805dd6","#825dd6","#845ed7","#855ed8","#875ed8","#895ed9","#8a5ed9","#8c5fda","#8e5fda","#8f5fdb","#915fdc","#935fdc","#9460dd","#9660dd","#9860de","#9960de","#9b60df","#9d61e0","#9f61e0","#a061e1","#a261e1","#a462e2","#a562e2","#a762e3","#a962e4","#aa62e4","#ac63e5","#ae63e5","#af63e6","#b163e7","#b363e7","#b464e8","#b664e8","#b864e9","#ba64e9","#bb65ea","#bd65eb","#bf65eb","#c065ec","#c265ec","#c466ed","#c566ed",e]}("#2051b5","#c766ee"),g=document.getElementById("usa-map"),[].slice.call(g.querySelectorAll("path")).forEach(function(t){return t.setAttribute("fill",m[Math.floor(Math.random()*m.length-1)+1])})}]);