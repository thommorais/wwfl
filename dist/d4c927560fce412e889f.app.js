!function(t){function e(e){for(var n,o,i=e[0],a=e[1],c=0,u=[];c<i.length;c++)o=i[c],r[o]&&u.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(s&&s(e);u.length;)u.shift()()}var n={},r={0:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=i);var a,c=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=function(t){return o.p+""+{1:"dd93624c831ec2380ab3",2:"4651a1ce6ab80c77fe64",3:"9a6a4dea49c96adf2ce0",4:"00b62051fce3b8d347ab"}[t]+".app.js"}(t),a=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,c.appendChild(s)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var s=a;o(o.s=8)}([function(t,e,n){t.exports=n(5)},function(t,e){function n(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)})}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){},function(t,e,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(6),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=b;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==r&&o.call(m,a)&&(y=m);var w=O.prototype=E.prototype=Object.create(y);L.prototype=w.constructor=O,O.constructor=L,O[s]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},S(k.prototype),k.prototype[c]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,n,r){var o=new k(b(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},S(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),a=new N(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=A(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?p:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function E(){}function L(){}function O(){}function S(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,a){var c=x(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(c.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function A(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,A(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e){function n(){return"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}function r(){n()&&navigator.serviceWorker.getRegistration().then(function(t){if(t)return t.update()})}setInterval(r,15e3),e.install=function(t){t||(t={}),n()&&navigator.serviceWorker.register("/sw.js",{})},e.applyUpdate=function(t,e){},e.update=r},function(t,e,n){"use strict";n.r(e);n(4);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),c=n(2),s=n.n(c),u=n(3),l=n.n(u),f=!1,d=function(){function t(){if(s()(this,t),f)return f;f=this,this.modals={},this.isOpen=null,this.started=!1,this.closeEvent=new Event("modalCloses",{bubbles:!0})}return l()(t,[{key:"close",value:function(){this.isOpen&&(this.isOpen.classList.remove("open"),"map"===this.currentModal&&document.dispatchEvent(this.closeEvent))}},{key:"updateScore",value:function(t,e){var n=t.querySelector(".total"),r=t.querySelector(".score");n.innerText=e.total,r.innerText=e.score}},{key:"open",value:function(t,e){this.started&&t&&(this.close(),this.modals[t]||(this.modals[t]=document.querySelector('[data-id="'.concat(t,'"]'))),this.modals[t].classList.add("open"),this.isOpen=this.modals[t],this.currentModal=t,"prepared-to-play"===t&&(this.score=this.score||this.modals[t].querySelector(".score-title"),this.updateScore(this.score,e)))}},{key:"start",value:function(){var t=this;this.started||(this.started=!0,this.closeButtons=[].slice.call(document.querySelectorAll(".close-modal")),this.closeButtons.forEach(function(e){return e.addEventListener("click",function(){return t.close()})}))}},{key:"stop",value:function(){this.started=!1}}]),t}();function h(t,e){return e.find(function(e){return e.title===t}).isRight}var p={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/WPDesktop/i)},any:function(){return p.Android()||p.BlackBerry()||p.iOS()||p.Opera()||p.Windows()}};function v(t,e){return 100*t/e}function y(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";gtag("event",n,{event_category:t,event_label:e,value:1})}var g={getRight:0,totalOfQuestions:0};function m(t,e){var n=document.querySelector("#question"),r=document.querySelector("#answer"),o=document.querySelector("#oxford-link");return t.map(function(t){var i=t.title,a=t.zynga_question_options,c=t.dictionary_link,s=document.importNode(n.content,!0),u=s.querySelector(".question"),l=s.querySelector(".answers"),f=i.rendered;u.innerText=f;var p=document.importNode(o.content,!0),m=p.querySelector(".oxford-explains-btn");m.href=c;var w=a.map(function(t){return{isRight:t.is_right,events:t.total_events,title:t.title}}),b=a.map(function(t){var e=document.importNode(r.content,!0),n=e.querySelector(".answer"),o=v(t.total_events+1,function(t){return t.reduce(function(t,e){return t+e.events},0)}(w)+3);n.style.setProperty("--size","".concat(o,"%"));var i=e.querySelector("h6"),a=e.querySelector(".count"),c=t.title;return i.innerText=c,n.dataset.answer=c,a.innerText=parseInt(t.total_events,10)+1,{answerWrpTmp:n,cloneAnswer:e}});return b.forEach(function(t){return l.appendChild(t.cloneAnswer)}),function(t,e,n,r,o){var i=t.answerElements,a=t.answersData,c=o.replace(/(?:^.|[A-Z]|\b.)/g,function(t,e){return 0===e?t.toLowerCase():t.toUpperCase()}).replace(/\s+/g,""),s=new d;g[c]={answered:!1},i.forEach(function(t){var i=t.answerWrpTmp,u=i.dataset.answer,l=h(u,a);g[c]&&(g[c].rightAnswer=l?i:g[c].rightAnswer),i.addEventListener("click",function(){g[c].answered||(g[c].answered=!0,g[c].rightAnswer.classList.add("right"),h(u,a)?g.getRight+=1:i.classList.add("wrong"),g.totalOfQuestions+=1,e.classList.add("show"),r.classList.add("answered"),n.isEnd?setTimeout(function(){s.open("prepared-to-play",{score:g.getRight,total:g.totalOfQuestions}),g.getRight=0,g.totalOfQuestions=0},2e3):n.$el[0].classList.remove("hide-navigation"),y(o,u,"click_any_answer"))})})}({answerElements:b,answersData:w},m,e,l,f),l.appendChild(p),s})}function w(t,e,r){return"fetch"in window?new Promise(function(n,o){fetch(t+e+r).then(function(t){return n(t.json().then(function(t){return t}))}).catch(function(){return o(new Error("something bad happened"))})}):(n.e(1).then(n.t.bind(null,43,7)).then(function(n){var i=n.default.create({baseURL:t});return a()(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get(e+r);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,this)}))}),!1)}var b="https://wwf.fuerzastudio.com/wp-json",x="/wp/v2/questions-api/?per_page=12&offset=",E="/zynga/v1/reports/final-answer",L={autoHeight:!0,init:!1,fadeEffect:{crossFade:!0},allowTouchMove:!1,pagination:{el:".fraction",type:"fraction"},navigation:{nextEl:".swiper-button-next"}},O=[0,12,24,48];var S={AL:"Alabama",AK:"Alaska",AS:"American Samoa",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District Of Columbia",FM:"Federated States Of Micronesia",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MH:"Marshall Islands",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",MP:"Northern Mariana Islands",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PW:"Palau",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VI:"Virgin Islands",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"};function k(){return A.apply(this,arguments)}function A(){return(A=a()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=O[Math.floor(Math.random()*O.length)],t.abrupt("return",w(b,x,e).then(function(t){return t.sort(function(){return.5-Math.random()})}));case 2:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}n(7).install(),"serviceWorker"in navigator&&(p.any()&&navigator.serviceWorker.getRegistrations().then(function(t){var e=!0,n=!1,r=void 0;try{for(var o,i=t[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){o.value.unregister()}}catch(t){n=!0,r=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw r}}}),navigator.serviceWorker.register("/sw.js").then(function(t){console.log("Registration succeeded."),t.update()}));var M=k();Promise.all([n.e(2),n.e(3)]).then(n.bind(null,42)).then(function(t){var e,n;!function(t,e){var n=new d;function r(e){e.then(function(e){var n=m(e,t)||[];t.appendSlide(n),t.update(),t.slideTo(0,0)})}t.init(),t.on("reachEnd",function(){return n.start()}),t.on("slideChange",function(){return t.$el[0].classList.add("hide-navigation")}),r(e),document.addEventListener("modalCloses",function(){t.removeAllSlides(),r(k())})}((e=t.default,new e(document.querySelector(".swiper-container"),L)),M),n=new d,[].slice.call(document.querySelectorAll('[data-id="prepared-to-play"] .response')).forEach(function(t){return t.addEventListener("click",function(t){n.open("map");var e=t.target.dataset,r=e.response;y(e.question,r,"click_final_answer")})}),function(t,e){function n(t,e){return t.find(function(t){return t["ga:region"]===e})}w(b,E,"").then(function(r){var o=r["i-like-a-challenge"].filter(function(t){return"United States"===t["ga:country"]}),i=r["give-me-the-money"].filter(function(t){return"United States"===t["ga:country"]}),a=function(t,e){return[t,"#2251b6","#2351b6","#2552b7","#2752b7","#2852b8","#2a52b8","#2c52b9","#2d53ba","#2f53ba","#3153bb","#3353bb","#3454bc","#3654bc","#3854bd","#3954be","#3b54be","#3d55bf","#3e55bf","#4055c0","#4255c1","#4355c1","#4556c2","#4756c2","#4856c3","#4a56c3","#4c57c4","#4e57c5","#4f57c5","#5157c6","#5357c6","#5458c7","#5658c7","#5858c8","#5958c9","#5b58c9","#5d59ca","#5e59ca","#6059cb","#6259cb","#6359cc","#655acd","#675acd","#695ace","#6a5ace","#6c5bcf","#6e5bcf","#6f5bd0","#715bd1","#735bd1","#745cd2","#765cd2","#785cd3","#795cd4","#7b5cd4","#7d5dd5","#7e5dd5","#805dd6","#825dd6","#845ed7","#855ed8","#875ed8","#895ed9","#8a5ed9","#8c5fda","#8e5fda","#8f5fdb","#915fdc","#935fdc","#9460dd","#9660dd","#9860de","#9960de","#9b60df","#9d61e0","#9f61e0","#a061e1","#a261e1","#a462e2","#a562e2","#a762e3","#a962e4","#aa62e4","#ac63e5","#ae63e5","#af63e6","#b163e7","#b363e7","#b464e8","#b664e8","#b864e9","#ba64e9","#bb65ea","#bd65eb","#bf65eb","#c065ec","#c265ec","#c466ed","#c566ed",e]}(t,e),c=document.getElementById("usa-map");[].slice.call(c.querySelectorAll("path")).forEach(function(t){var e=t.id,r=50,c=n(o,S[e]),s=c?parseInt(c.totalEvents,10):0,u=n(i,S[e]),l=u?parseInt(u.totalEvents,10):0,f=s+l,d=v(s,f)||0,h=v(l,f)||0;d>h?r=d-1:h>d&&(r=h-1),t.setAttribute("fill",a[parseInt(r,10)])})})}("#2051b5","#c766ee")}),[].slice.call(document.querySelectorAll("[data-event]")).forEach(function(t){t.addEventListener("click",function(){var e=t.dataset;y(e.eventcategory,e.eventlabel,"click-events")})}),p.any()||n.e(4).then(n.t.bind(null,44,7)).then(function(t){[].slice.call(document.querySelectorAll(".shape")).forEach(function(e){var n=e.dataset,r=n.modifier,o=n.y,i=n.from,a=n.to;t.create({elem:e,from:i,to:a,direct:!0,props:{"--ty":{from:"".concat(o,"%"),to:"".concat(-10*r,"%")}}}).start()})})}]);