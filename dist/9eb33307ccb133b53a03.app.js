!function(e){function t(t){for(var n,o,a=t[0],i=t[1],c=0,u=[];c<a.length;c++)o=a[c],r[o]&&u.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);u.length;)u.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=a);var i,c=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(e){return o.p+""+{1:"dd93624c831ec2380ab3",2:"4651a1ce6ab80c77fe64",3:"8a70703a2b7f22f0bb4a",4:"00b62051fce3b8d347ab"}[e]+".app.js"}(e),i=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,c.appendChild(s)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var s=i;o(o.s=8)}([function(e,t,n){e.exports=n(5)},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){function n(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,s,"next",e)}function s(e){n(i,o,a,c,s,"throw",e)}c(void 0)})}}},function(e,t,n){},function(e,t,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(6),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"==typeof e,l=t.regeneratorRuntime;if(l)u&&(e.exports=l);else{(l=t.regeneratorRuntime=u?e.exports:{}).wrap=b;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={},y={};y[i]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==r&&o.call(m,i)&&(y=m);var w=S.prototype=x.prototype=Object.create(y);L.prototype=w.constructor=S,S.constructor=L,S[s]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===L||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,S):(e.__proto__=S,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(w),e},l.awrap=function(e){return{__await:e}},O(k.prototype),k.prototype[c]=function(){return this},l.AsyncIterator=k,l.async=function(e,t,n,r){var o=new k(b(e,t,n,r));return l.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},O(w),w[s]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=P,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return c.type="throw",c.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(e,t,n,r){var o=t&&t.prototype instanceof x?t:x,a=Object.create(o.prototype),i=new N(r||[]);return a._invoke=function(e,t,n){var r=f;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=A(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=E(e,t,n);if("normal"===s.type){if(r=n.done?p:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(e,n,i),a}function E(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function x(){}function L(){}function S(){}function O(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function k(e){var t;this._invoke=function(n,r){function a(){return new Promise(function(t,a){!function t(n,r,a,i){var c=E(e[n],e,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(u).then(function(e){s.value=e,a(s)},function(e){return t("throw",e,a,i)})}i(c.arg)}(n,r,t,a)})}return t=t?t.then(a,a):a()}}function A(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,A(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=E(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,v;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,v):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function P(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(e,t){function n(){return"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}function r(){n()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()})}setInterval(r,30),t.install=function(e){e||(e={}),n()&&navigator.serviceWorker.register("/sw.js",{})},t.applyUpdate=function(e,t){},t.update=r},function(e,t,n){"use strict";n.r(t);n(4);var r=n(1),o=n.n(r),a=n(2),i=n.n(a),c=!1,s=function(){function e(){if(o()(this,e),c)return c;c=this,this.modals={},this.isOpen=null,this.started=!1,this.closeEvent=new Event("modalCloses",{bubbles:!0})}return i()(e,[{key:"close",value:function(){this.isOpen&&(this.isOpen.classList.remove("open"),"map"===this.currentModal&&document.dispatchEvent(this.closeEvent))}},{key:"updateScore",value:function(e,t){var n=e.querySelector(".total"),r=e.querySelector(".score");n.innerText=t.total,r.innerText=t.score}},{key:"open",value:function(e,t){this.started&&e&&(this.close(),this.modals[e]||(this.modals[e]=document.querySelector('[data-id="'.concat(e,'"]'))),this.modals[e].classList.add("open"),this.isOpen=this.modals[e],this.currentModal=e,"prepared-to-play"===e&&(this.score=this.score||this.modals[e].querySelector(".score-title"),this.updateScore(this.score,t)))}},{key:"start",value:function(){var e=this;this.started||(this.started=!0,this.closeButtons=[].slice.call(document.querySelectorAll(".close-modal")),this.closeButtons.forEach(function(t){return t.addEventListener("click",function(){return e.close()})}))}},{key:"stop",value:function(){this.started=!1}}]),e}();function u(e,t){return t.find(function(t){return t.title===e}).isRight}var l={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/WPDesktop/i)},any:function(){return l.Android()||l.BlackBerry()||l.iOS()||l.Opera()||l.Windows()}};function f(e,t){return 100*e/t}var d={getRight:0,totalOfQuestions:0},h=document.querySelector(".swiper-container");function p(e,t,n){var r=document.querySelector("#question"),o=document.querySelector("#answer"),a=document.querySelector("#oxford-link");return e.map(function(e){var i=e.title,c=e.zynga_question_options,s=e.dictionary_link,l=document.importNode(r.content,!0),p=l.querySelector(".question"),v=l.querySelector(".answers"),y=i.rendered;p.innerText=y;var g=document.importNode(a.content,!0),m=g.querySelector(".oxford-explains-btn");m.href=s;var w=c.map(function(e){return{isRight:e.is_right,events:e.total_events,title:e.title}}),b=c.map(function(e){var t=document.importNode(o.content,!0),n=t.querySelector(".answer"),r=f(e.total_events,function(e){return e.reduce(function(e,t){return e+t.events},0)}(w))||0;n.style.setProperty("--size","".concat(r,"%"));var a=t.querySelector("h6"),i=t.querySelector(".count"),c=e.title;return a.innerText=c,n.dataset.answer=c,i.innerText=e.total_events,{answerWrpTmp:n,cloneAnswer:t}});return b.forEach(function(e){return v.appendChild(e.cloneAnswer)}),function(e,t,n,r,o,a){var i=e.answerElements,c=e.answersData,s=a.replace(/(?:^.|[A-Z]|\b.)/g,function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"");d[s]={answered:!1},i.forEach(function(e){var i=e.answerWrpTmp,l=i.dataset.answer,f=u(l,c);d[s]&&(d[s].rightAnswer=f?i:d[s].rightAnswer),i.addEventListener("click",function(){d[s].answered||(d[s].answered=!0,d[s].rightAnswer.classList.add("right"),u(l,c)?d.getRight+=1:i.classList.add("wrong"),d.totalOfQuestions+=1,r.classList.add("show"),o.classList.add("answered"),n.isEnd?(t.open("prepared-to-play",{score:d.getRight,total:d.totalOfQuestions}),d.getRight=0,d.totalOfQuestions=0):h.classList.remove("hide-navigation"),gtag("event","click_any_answer",{event_category:a,event_label:l,value:1}))})})}({answerElements:b,answersData:w},n,t,m,v,y),v.appendChild(g),l})}var v=n(0),y=n.n(v),g=n(3),m=n.n(g);function w(e,t,r){return"fetch"in window?new Promise(function(n,o){fetch(e+t+r).then(function(e){return n(e.json().then(function(e){return e}))}).catch(function(){return o(new Error("something bad happened"))})}):(n.e(1).then(n.t.bind(null,43,7)).then(function(n){var o=n.default.create({baseURL:e});return m()(y.a.mark(function e(){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get(t+r);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}))}),!1)}var b="https://wwf.fuerzastudio.com/wp-json",E="/wp/v2/questions-api/?per_page=12&offset=",x="/zynga/v1/reports/final-answer";var L={AL:"Alabama",AK:"Alaska",AS:"American Samoa",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District Of Columbia",FM:"Federated States Of Micronesia",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MH:"Marshall Islands",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",MP:"Northern Mariana Islands",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PW:"Palau",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VI:"Virgin Islands",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"},S={autoHeight:!0,init:!1,fadeEffect:{crossFade:!0},allowTouchMove:!1,pagination:{el:".fraction",type:"fraction"},navigation:{nextEl:".swiper-button-next"}},O=null,k=[0,12,24,48];(n(7).install(),Promise.all([n.e(2),n.e(3)]).then(n.bind(null,42)).then(function(e){var t;!function(e){var t=new s,n=document.querySelector(".swiper-container");function r(){var r=k[Math.floor(Math.random()*k.length)];w(b,E,r).then(function(r){O=new e(n,S);var o=r.sort(function(){return.5-Math.random()});O.appendSlide(p(o,O,t)),O.on("reachEnd",function(){return t.start()}),O.on("slideChange",function(){return n.classList.add("hide-navigation")}),O.init()})}r(),document.addEventListener("modalCloses",function(){O.removeAllSlides(),O.destroy(!0,!0),r()})}(e.default),t=new s,[].slice.call(document.querySelectorAll('[data-id="prepared-to-play"] .response')).forEach(function(e){return e.addEventListener("click",function(e){t.open("map");var n=e.target.dataset,r=n.response,o=n.question;gtag("event","click_final_answer",{event_category:o,event_label:r,value:1})})}),function(e,t){function n(e,t){return e.find(function(e){return e["ga:region"]===t})}w(b,x,"").then(function(r){var o=r["i-like-a-challenge"].filter(function(e){return"United States"===e["ga:country"]}),a=r["give-me-the-money"].filter(function(e){return"United States"===e["ga:country"]}),i=function(e,t){return[e,"#2251b6","#2351b6","#2552b7","#2752b7","#2852b8","#2a52b8","#2c52b9","#2d53ba","#2f53ba","#3153bb","#3353bb","#3454bc","#3654bc","#3854bd","#3954be","#3b54be","#3d55bf","#3e55bf","#4055c0","#4255c1","#4355c1","#4556c2","#4756c2","#4856c3","#4a56c3","#4c57c4","#4e57c5","#4f57c5","#5157c6","#5357c6","#5458c7","#5658c7","#5858c8","#5958c9","#5b58c9","#5d59ca","#5e59ca","#6059cb","#6259cb","#6359cc","#655acd","#675acd","#695ace","#6a5ace","#6c5bcf","#6e5bcf","#6f5bd0","#715bd1","#735bd1","#745cd2","#765cd2","#785cd3","#795cd4","#7b5cd4","#7d5dd5","#7e5dd5","#805dd6","#825dd6","#845ed7","#855ed8","#875ed8","#895ed9","#8a5ed9","#8c5fda","#8e5fda","#8f5fdb","#915fdc","#935fdc","#9460dd","#9660dd","#9860de","#9960de","#9b60df","#9d61e0","#9f61e0","#a061e1","#a261e1","#a462e2","#a562e2","#a762e3","#a962e4","#aa62e4","#ac63e5","#ae63e5","#af63e6","#b163e7","#b363e7","#b464e8","#b664e8","#b864e9","#ba64e9","#bb65ea","#bd65eb","#bf65eb","#c065ec","#c265ec","#c466ed","#c566ed",t]}(e,t),c=document.getElementById("usa-map");[].slice.call(c.querySelectorAll("path")).forEach(function(e){var t=e.id,r=50,c=n(o,L[t]),s=c?parseInt(c.totalEvents,10):0,u=n(a,L[t]),l=u?parseInt(u.totalEvents,10):0,d=s+l,h=f(s,d)||0,p=f(l,d)||0;h>p?r=h-1:p>h&&(r=p-1),e.setAttribute("fill",i[r])})})}("#2051b5","#c766ee")}),[].slice.call(document.querySelectorAll("[data-event]")).forEach(function(e){e.addEventListener("click",function(){var t=e.dataset,n=t.event,r=t.eventname;gtag("event","click_any_answer",{event_category:n,event_label:r,value:1})})}),l.any())?document.querySelector("video").remove():n.e(4).then(n.t.bind(null,44,7)).then(function(e){[].slice.call(document.querySelectorAll(".shape")).forEach(function(t){var n=t.dataset,r=n.modifier,o=n.y,a=n.from,i=n.to;e.create({elem:t,from:a,to:i,direct:!0,props:{"--ty":{from:"".concat(o,"%"),to:"".concat(-10*r,"%")}}}).start()})})}]);