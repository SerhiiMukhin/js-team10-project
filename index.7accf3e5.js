!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a);var i=a("dIxxU");const s="https://api.themoviedb.org/3/",r="a59dfea75e9e40e203f0819879862061";class l{async getMovieByName(){const e=`${s}search/movie?api_key=${r}&query=${this.searchQuary}&page=${this.page}&language=${this.lang}&include_adult=false`;return(await i.default.get(e)).data}async getPopularFilms(){const e=`${s}/trending/movie/day?api_key=${r}&language=${this.lang}&page=${this.page}`;return(await i.default.get(e)).data}async getInfoByMovieId(){const e=`${s}movie/${this.movieId}?api_key=${r}&language=${this.lang}`;return(await i.default.get(e)).data}async getMovieGenres(){const e=`${s}genre/movie/list?api_key=${r}`;return(await i.default.get(e)).data}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get quary(){return this.searchQuary}set quary(e){this.searchQuary=e}constructor(){this.searchQuary="",this.page=1,this.movieId="",this.lang="en-US"}}const c=new l,u="data-genresArr";function d(e){let t=[];return function(){try{if(localStorage.getItem(u)){return JSON.parse(localStorage.getItem(u))}return}catch{return!1}}().map((({id:n,name:o})=>{e.map((e=>{e===n&&t.push(o)}))})),t}var h=e(a("WMajR")).template({1:function(e,t,n,o,a){var i,s,r=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='card' data-id='"+u(typeof(s=null!=(s=d(n,"id")||(null!=t?d(t,"id"):t))?s:l)===c?s.call(r,{name:"id",hash:{},data:a,loc:{start:{line:2,column:28},end:{line:2,column:34}}}):s)+"'>\n"+(null!=(i=d(n,"if").call(r,null!=t?d(t,"poster_path"):t,{name:"if",hash:{},fn:e.program(2,a,0),inverse:e.program(4,a,0),data:a,loc:{start:{line:3,column:4},end:{line:18,column:11}}}))?i:"")+"    <h2 class='card__title'>"+u(typeof(s=null!=(s=d(n,"title")||(null!=t?d(t,"title"):t))?s:l)===c?s.call(r,{name:"title",hash:{},data:a,loc:{start:{line:19,column:28},end:{line:19,column:37}}}):s)+"</h2>\n\n    <div class='card__data'>\n      "+(null!=(i=d(n,"if").call(r,null!=t?d(t,"genre_ids"):t,{name:"if",hash:{},fn:e.program(6,a,0),inverse:e.program(8,a,0),data:a,loc:{start:{line:22,column:6},end:{line:24,column:23}}}))?i:"")+"\n\n      "+(null!=(i=d(n,"if").call(r,null!=t?d(t,"release_date"):t,{name:"if",hash:{},fn:e.program(10,a,0),inverse:e.program(12,a,0),data:a,loc:{start:{line:26,column:6},end:{line:28,column:84}}}))?i:"")+"\n    </div>\n\n  </li>\n"},2:function(e,t,n,o,a){var i,s=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,l="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"\n      <img\n        class='card__img'\n        src='https://image.tmdb.org/t/p/w500"+c(typeof(i=null!=(i=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?i:r)===l?i.call(s,{name:"poster_path",hash:{},data:a,loc:{start:{line:7,column:44},end:{line:7,column:59}}}):i)+"'\n        alt='"+c(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:r)===l?i.call(s,{name:"title",hash:{},data:a,loc:{start:{line:8,column:13},end:{line:8,column:22}}}):i)+"'\n        data-id='"+c(typeof(i=null!=(i=u(n,"id")||(null!=t?u(t,"id"):t))?i:r)===l?i.call(s,{name:"id",hash:{},data:a,loc:{start:{line:9,column:17},end:{line:9,column:23}}}):i)+"'\n      />\n"},4:function(e,t,n,o,a){var i,s=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,l="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"      <img\n        class='card__img'\n        src='http://cdn.differencebetween.net/wp-content/uploads/2019/12/Difference-Between-Film-and-Movie--768x497.jpg'\n        alt='"+c(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:r)===l?i.call(s,{name:"title",hash:{},data:a,loc:{start:{line:15,column:13},end:{line:15,column:22}}}):i)+"'\n        data-id='"+c(typeof(i=null!=(i=u(n,"id")||(null!=t?u(t,"id"):t))?i:r)===l?i.call(s,{name:"id",hash:{},data:a,loc:{start:{line:16,column:17},end:{line:16,column:23}}}):i)+"'\n      />\n"},6:function(e,t,n,o,a){var i,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<span class='card__genres'>"+e.escapeExpression("function"==typeof(i=null!=(i=s(n,"genre_ids")||(null!=t?s(t,"genre_ids"):t))?i:e.hooks.helperMissing)?i.call(null!=t?t:e.nullContext||{},{name:"genre_ids",hash:{},data:a,loc:{start:{line:22,column:50},end:{line:22,column:63}}}):i)+"</span>"},8:function(e,t,n,o,a){return"<p\n          class='card__undefined'\n        >N/A</p>"},10:function(e,t,n,o,a){var i,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<span class='card__year'>\n          |\n          "+e.escapeExpression("function"==typeof(i=null!=(i=s(n,"release_date")||(null!=t?s(t,"release_date"):t))?i:e.hooks.helperMissing)?i.call(null!=t?t:e.nullContext||{},{name:"release_date",hash:{},data:a,loc:{start:{line:28,column:10},end:{line:28,column:26}}}):i)+"</span>"},12:function(e,t,n,o,a){return"<p class='card__undefined'>| N/A</p>"},compiler:[8,">= 4.3.0"],main:function(e,t,n,o,a){var i;return null!=(i=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:32,column:9}}}))?i:""},useData:!0}),p=a("diaKp");a("gyo0n");p=a("diaKp");var f=a("gyo0n");function g(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function m(e,t){return n=e,(o=g(e,t,"get")).get?o.get.call(n):o.value;var n,o}function v(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function y(e,t,n){v(e,t),t.set(e,n)}function b(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,g(e,t,"set"),n),n}function w(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function _(e,t){v(e,t),t.add(e)}const O=document.createElement("template"),L=String.raw;O.innerHTML=L`
  <style>
    :host {
      all: initial;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
    }
    :host button {
      position: fixed;
      bottom: 16px;
      right: 16px;
      cursor: pointer;
    }
    :host([hidden]) button {
      opacity: 0;
      visibility: hidden;
    }
  </style>
  <button type="button" part="button"><slot>Scroll to top</slot></button>
`;var k=new WeakMap,E=new WeakSet,q=new WeakSet,x=new WeakMap;class M extends HTMLElement{get visibleAfter(){return this.getAttribute("visible-after")}set visibleAfter(e){this.setAttribute("visible-after",e)}get smoothScrolling(){return this.hasAttribute("smooth-scrolling")}set smoothScrolling(e){e?this.setAttribute("smooth-scrolling",""):this.removeAttribute("smooth-scrolling")}get topOffset(){return Number(this.getAttribute("top-offset"))||0}set topOffset(e){const t=Number(e)||0;this.setAttribute("top-offset",t>0?t:0)}static get observedAttributes(){return["visible-after"]}attributeChangedCallback(e,t,n){"visible-after"===e&&w(this,q,S).call(this,n)}connectedCallback(){w(this,E,P).call(this,"visibleAfter"),w(this,E,P).call(this,"smoothScrolling"),w(this,E,P).call(this,"topOffset"),this.topOffset||(this.topOffset=0),this.visibleAfter||(this.visibleAfter="50vh"),b(this,k,this.shadowRoot.querySelector("button")),w(this,q,S).call(this,this.visibleAfter);try{this.observer=new IntersectionObserver((([e])=>{this.hidden=e.isIntersecting,m(this,k).part.toggle("button--hidden",e.isIntersecting),this.dispatchEvent(new CustomEvent("scroll-top:visibility-change",{bubbles:!0,composed:!0,detail:{visible:!e.isIntersecting}}))})),this.observer.observe(this)}catch(e){console.error(e)}m(this,k).addEventListener("click",m(this,x))}disconnectedCallback(){this.observer&&(this.observer.disconnect(),this.observer=null),m(this,k).removeEventListener("click",m(this,x))}static defineCustomElement(e="scroll-top"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,M)}constructor(){super(),_(this,E),_(this,q),y(this,k,{writable:!0,value:void 0}),y(this,x,{writable:!0,value:e=>{e.preventDefault();const t={top:this.topOffset};this.smoothScrolling&&(t.behavior="smooth"),document.scrollingElement.scrollTo(t)}}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(O.content.cloneNode(!0))}}function P(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}}function S(e){"string"==typeof e&&(this.style.height=e)}var T=a("1VFfL");const C=new l;const Q=document.querySelector(".js-search-form"),W=document.querySelector(".js-card-collection"),A=document.querySelector(".js-error-notify"),j=new l;async function I(e){try{if((0,p.spinerOn)(),j.resetPage(),j.quary=Q.query.value.trim(),!j.quary)return A.innerHTML="Search result not successful.",setTimeout(N,3e3),void(0,p.spinerOff)();j.page=e;const{page:t,results:n,total_pages:o,total_results:a}=await j.getMovieByName();if(setTimeout(p.spinerOff,500),0===a)return A.innerHTML="Enter the correct movie name and try again.",void setTimeout(N,3e3);W.innerHTML="",function(e){const t=h($(e));W.insertAdjacentHTML("beforeend",t)}(n)}catch(e){(0,p.spinerOff)(),console.log(e.message)}}function $(e){const t=e.map((e=>(e.genre_ids=d(e.genre_ids).join(", "),e.release_date=e.release_date.slice(0,4),e)));return(0,f.addLocal)(t),t}function N(){A.innerHTML=""}Q.addEventListener("submit",(async function(t){t.preventDefault();const n=await C.getPopularFilms(),o=document.querySelector("#pagination"),a={totalItems:n.total_results,itemsPerPage:20,visiblePages:5,centerAlign:!1},i=new(e(T))(o,a);i.on("beforeMove",(e=>{n.page=e.page,I(n.page)})),i.movePageTo(0)})),M.defineCustomElement(),A.innerHTML="";T=a("1VFfL");const H=new l;const D=document.getElementById("film-cards");async function F(e){try{(0,p.spinerOn)();const n=new l;n.page=e;const o=await n.getPopularFilms();setTimeout(p.spinerOff,500),t=o.results,D.innerHTML=h($(t))}catch(e){console.log(e.message)}var t}document.addEventListener("DOMContentLoaded",async function(){const t=await H.getPopularFilms(),n=document.querySelector("#pagination"),o={totalItems:t.total_results,itemsPerPage:20,visiblePages:5,centerAlign:!1},a=new(e(T))(n,o);a.on("beforeMove",(e=>{F(e.page)})),a.movePageTo(0)}()),async function(){try{const{genres:e}=await c.getMovieGenres();!function(e){try{localStorage.setItem(u,JSON.stringify(e))}catch{return!1}}(e)}catch(e){console.log(e.message)}}(),F(),a("bvnla"),a("dN6xn"),a("gyo0n"),a("cDXQO");f=a("gyo0n");var B=a("dN6xn"),K=a("bvnla");const R=document.querySelector(".backdrop"),G="js-watched-modal",U="js-queue-modal",z="reviewed",J="in your turn";function V(e){const t={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};B.toWatched.getWatchedOne(e)&&B.toWatched.getWatchedOne(e).length>0&&X(t.btn_watched),K.toQueue.getQueueOne(e)&&K.toQueue.getQueueOne(e).length>0&&Y(t.btn_queue)}function X(e){e.classList.add(G),e.textContent=z}function Y(e){e.classList.add(U),e.textContent=J}function Z(e){e.classList.remove(G),e.textContent="add to watched"}function ee(e){e.classList.remove(U),e.textContent="add to queue"}R.addEventListener("click",(function(e){const t=+e.target.dataset.id,n={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};if(e.target.classList.contains("btn_watched"))if(!B.toWatched.getWatchedOne(t)||B.toWatched.getWatchedOne(t).length<1){B.toWatched.setWatchedOne(...(0,f.getLocalOne)(t)),X(n.btn_watched);try{void 0!==K.toQueue.getQueueAll()&&K.toQueue.getQueueOne(t).length>0&&(K.toQueue.removeQueueOneEl(t),ee(n.btn_queue))}finally{return}}else B.toWatched.removeWatchedOneEl(t),Z(n.btn_watched);if(e.target.classList.contains("btn_queue"))if(!K.toQueue.getQueueOne(t)||K.toQueue.getQueueOne(t).length<1){K.toQueue.setQueueOne(...(0,f.getLocalOne)(t)),Y(n.btn_queue);try{void 0!==B.toWatched.getWatchedAll&&B.toWatched.getWatchedOne(t).length>0&&(B.toWatched.removeWatchedOneEl(t),Z(n.btn_watched))}finally{return}}else K.toQueue.removeQueueOneEl(t),ee(n.btn_queue)})),a("3vKGz");var te=a("3vKGz"),ne=(f=a("gyo0n"),a("1cIrP"));function oe(){te.refs.backdrop.classList.add("is-hidden"),se()}function ae(e){e.target.classList.contains("modal")&&te.refs.backdrop.classList.add("is-hidden"),se()}function ie(e){"Escape"===e.key&&(te.refs.backdrop.classList.add("is-hidden"),se())}function se(){te.refs.backdrop.classList.contains("is-hidden")&&(te.refs.modalClose.removeEventListener("click",oe),te.refs.backdrop.removeEventListener("click",ae),document.removeEventListener("keydown",ie),te.refs.body.classList.remove("disable-scroll"))}document.querySelector(".container").addEventListener("click",(function(e){if(e.preventDefault(),!e.target.classList.contains("card__img"))return;const t=+e.target.dataset.id;te.refs.body.classList.add("disable-scroll"),te.refs.modalClose.addEventListener("click",oe),te.refs.backdrop.addEventListener("click",ae),document.addEventListener("keydown",ie),te.refs.backdrop.classList.remove("is-hidden"),te.refs.modalMovie.innerHTML=(0,ne.default)((0,f.getLocalOne)(t)),V(t)})),a("diaKp")}();
//# sourceMappingURL=index.7accf3e5.js.map
