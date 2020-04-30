!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";function r(e){var t=document.createElement("div");return t.textContent=e,t.innerHTML}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e){return new Date(e).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}).replace(/\s*г\./,"")}function s(e){var t=new Date(e),n=new Intl.DateTimeFormat("ru-RU",{day:"numeric"}).format(t),r=new Intl.DateTimeFormat("ru-RU",{weekday:"short"}).format(t);return"".concat(n,", ").concat(r)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(){}setData(e,t){localStorage.setItem("".concat(e),JSON.stringify(t))}getData(e){return JSON.parse(localStorage.getItem("".concat(e)))}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n.p+"./images/not-found.svg";function s(e){return null===e||e.match(/^(https:)$/gim)||""===e?r:e}},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(4),n.p,n.p,n.p,n.p,n.p,n.p,n.p;var r=n(1),s=n(3),a=n(0);class o{constructor(e,t,n,a,o,c){this.link=Object(s.a)(t),this.date=Object(r.a)(n),this.title=e,this.text=a,this.sourcename=o,this.sourcelink=c}create(){var e=document.createElement("div");e.classList.add("results__card");var t='<a href="'.concat(Object(a.a)(this.sourcelink),'" target="_blank" class="content__link"><div class="results__image" style=\'background-image: url(').concat(this.link,')\'></div> \n        <p class="results__date typo typo_fs_sm typo_lh_sm">').concat(Object(a.a)(this.date),'</p>\n        <h3 class="results__cardtitle typo typo_ff_roboto-slab typo_fs_m">').concat(Object(a.a)(this.title),'\n        </h3>\n        <p class="results__paragraph typo typo_fs_s typo_lh_s">').concat(Object(a.a)(this.text),'</p>\n        <p class="results__source typo typo_ff_roboto-slab typo_fs_s typo_lh_s">').concat(Object(a.a)(this.sourcename),"</p>\n        </a>");return e.insertAdjacentHTML("beforeend",t),e}}class c{constructor(e){this.options=e}getNews(){return fetch("".concat(this.options.baseUrl),{headers:this.options.headers}).then(e=>e.ok?e.json():Promise.reject(e.status))}}var i=document.querySelector(".results"),d=document.querySelector(".results__container"),u=document.querySelector(".results__more"),l=document.querySelector(".preloader"),m=document.querySelector(".nothing"),h=(document.forms.search.elements.search.value,document.querySelector(".search__error")),f=document.querySelector(".search__button"),p=document.querySelector(".search__input-text"),_=document.querySelector(".bad-request");var b=new(n(2).a),g=(new Date).toISOString(),v=new Date;v.setDate(v.getDate()-7);var y=v.toISOString(),L=new class{constructor(e){this.callback=e}validate(e){return e.target.checkValidity()?(p.removeAttribute("disabled"),f.removeAttribute("disabled"),h.textContent=""):(f.setAttribute("disabled","disabled"),h.classList.add("error"),h.textContent="Нужно ввести ключевое слово")}}(O),S=new class{constructor(e){this.container=e}clear(){for(var e=this.container;e.firstChild;)e.removeChild(e.firstChild)}render(e){var t=this.container;e.forEach((function(e){var n=e.create();t.appendChild(n)}))}}(d),w=0;function O(e){e.preventDefault(),S.clear();var t=document.forms.search.elements.search.value;p.setAttribute("disabled","disabled"),i.classList.add("segment_hidden"),l.classList.remove("segment_hidden");var n="https://newsapi.org/v2/everything?"+"q=".concat(t,"&")+"from=".concat(y,"&")+"to=".concat(g,"&")+"language=ru&pageSize=100";new c({baseUrl:n,method:"GET",headers:{authorization:"08608a159aee4ba9bd4fe32e49e872a1"}}).getNews().then((function(e){if(0===e.articles.length)_.classList.add("segment_hidden"),f.removeAttribute("disabled"),p.removeAttribute("disabled"),m.classList.remove("segment_hidden"),l.classList.add("segment_hidden"),i.classList.add("segment_hidden");else{_.classList.add("segment_hidden"),i.classList.remove("segment_hidden"),m.classList.add("segment_hidden"),l.classList.add("segment_hidden"),f.removeAttribute("disabled"),p.removeAttribute("disabled");var n=e.articles.map((function(e){return new o(e.title,e.urlToImage,e.publishedAt,e.description,e.source.name,e.url)}));"".concat(t)in localStorage?b.getData("data"):(b.setData("lastInput",t),b.setData("data",e)),j(),n.length<=w?u.classList.add("segment_hidden"):u.classList.remove("segment_hidden"),window.setTimeout((function(){l.classList.add("segment_hidden")}))}})).catch(e=>{console.log("Во время запроса произошла ошибка ".concat(e)),_.classList.remove("segment_hidden"),f.removeAttribute("disabled"),p.removeAttribute("disabled"),l.classList.add("segment_hidden"),i.classList.add("segment_hidden")})}function j(){var e=b.getData("data"),t=e.articles.slice(w,w+3).map((function(e){return new o(e.title,e.urlToImage,e.publishedAt,e.description,e.source.name,e.url)}));S.render(t),w+=3,e.articles.length<=w&&u.classList.add("segment_hidden")}document.forms.search.elements.search.addEventListener("input",L.validate),document.forms.search.addEventListener("submit",L.validate),document.forms.search.addEventListener("submit",O),u.addEventListener("click",()=>{j()})}]);