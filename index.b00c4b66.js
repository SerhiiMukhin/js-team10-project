function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a);var s=a("2shzp");const i="https://api.themoviedb.org/3/",r="a59dfea75e9e40e203f0819879862061";class l{async getMovieByName(){const e=`${i}search/movie?api_key=${r}&query=${this.searchQuary}&page=${this.page}&language=${this.lang}&include_adult=false`;return(await s.default.get(e)).data}async getPopularFilms(){const e=`${i}/trending/movie/day?api_key=${r}&language=${this.lang}&page=${this.page}`;return(await s.default.get(e)).data}async getInfoByMovieId(){const e=`${i}movie/${this.movieId}?api_key=${r}&language=${this.lang}`;return(await s.default.get(e)).data}async getMovieGenres(){const e=`${i}genre/movie/list?api_key=${r}`;return(await s.default.get(e)).data}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get quary(){return this.searchQuary}set quary(e){this.searchQuary=e}constructor(){this.searchQuary="",this.page=1,this.movieId="",this.lang="en-US"}}const c=new l,u="data-genresArr";function d(e){let t=[];return function(){try{if(localStorage.getItem(u)){return JSON.parse(localStorage.getItem(u))}return}catch{return!1}}().map((({id:n,name:o})=>{e.map((e=>{e===n&&t.push(o)}))})),t}var h=e(a("amrNH")).template({1:function(e,t,n,o,a){var s,i,r=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='card' data-id='"+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:l)===c?i.call(r,{name:"id",hash:{},data:a,loc:{start:{line:2,column:28},end:{line:2,column:34}}}):i)+"'>\n"+(null!=(s=d(n,"if").call(r,null!=t?d(t,"poster_path"):t,{name:"if",hash:{},fn:e.program(2,a,0),inverse:e.program(4,a,0),data:a,loc:{start:{line:3,column:4},end:{line:18,column:11}}}))?s:"")+"    <h2 class='card__title'>"+u(typeof(i=null!=(i=d(n,"title")||(null!=t?d(t,"title"):t))?i:l)===c?i.call(r,{name:"title",hash:{},data:a,loc:{start:{line:19,column:28},end:{line:19,column:37}}}):i)+"</h2>\n\n    <div class='card__data'>\n      "+(null!=(s=d(n,"if").call(r,null!=t?d(t,"genre_ids"):t,{name:"if",hash:{},fn:e.program(6,a,0),inverse:e.program(8,a,0),data:a,loc:{start:{line:22,column:6},end:{line:24,column:23}}}))?s:"")+"\n\n      "+(null!=(s=d(n,"if").call(r,null!=t?d(t,"release_date"):t,{name:"if",hash:{},fn:e.program(10,a,0),inverse:e.program(12,a,0),data:a,loc:{start:{line:26,column:6},end:{line:28,column:84}}}))?s:"")+"\n    </div>\n\n  </li>\n"},2:function(e,t,n,o,a){var s,i=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,l="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"\n      <img\n        class='card__img'\n        src='https://image.tmdb.org/t/p/w500"+c(typeof(s=null!=(s=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?s:r)===l?s.call(i,{name:"poster_path",hash:{},data:a,loc:{start:{line:7,column:44},end:{line:7,column:59}}}):s)+"'\n        alt='"+c(typeof(s=null!=(s=u(n,"title")||(null!=t?u(t,"title"):t))?s:r)===l?s.call(i,{name:"title",hash:{},data:a,loc:{start:{line:8,column:13},end:{line:8,column:22}}}):s)+"'\n        data-id='"+c(typeof(s=null!=(s=u(n,"id")||(null!=t?u(t,"id"):t))?s:r)===l?s.call(i,{name:"id",hash:{},data:a,loc:{start:{line:9,column:17},end:{line:9,column:23}}}):s)+"'\n      />\n"},4:function(e,t,n,o,a){var s,i=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,l="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"      <img\n        class='card__img'\n        src='http://cdn.differencebetween.net/wp-content/uploads/2019/12/Difference-Between-Film-and-Movie--768x497.jpg'\n        alt='"+c(typeof(s=null!=(s=u(n,"title")||(null!=t?u(t,"title"):t))?s:r)===l?s.call(i,{name:"title",hash:{},data:a,loc:{start:{line:15,column:13},end:{line:15,column:22}}}):s)+"'\n        data-id='"+c(typeof(s=null!=(s=u(n,"id")||(null!=t?u(t,"id"):t))?s:r)===l?s.call(i,{name:"id",hash:{},data:a,loc:{start:{line:16,column:17},end:{line:16,column:23}}}):s)+"'\n      />\n"},6:function(e,t,n,o,a){var s,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<span class='card__genres'>"+e.escapeExpression("function"==typeof(s=null!=(s=i(n,"genre_ids")||(null!=t?i(t,"genre_ids"):t))?s:e.hooks.helperMissing)?s.call(null!=t?t:e.nullContext||{},{name:"genre_ids",hash:{},data:a,loc:{start:{line:22,column:50},end:{line:22,column:63}}}):s)+"</span>"},8:function(e,t,n,o,a){return"<p\n          class='card__undefined'\n        >N/A</p>"},10:function(e,t,n,o,a){var s,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<span class='card__year'>\n          |\n          "+e.escapeExpression("function"==typeof(s=null!=(s=i(n,"release_date")||(null!=t?i(t,"release_date"):t))?s:e.hooks.helperMissing)?s.call(null!=t?t:e.nullContext||{},{name:"release_date",hash:{},data:a,loc:{start:{line:28,column:10},end:{line:28,column:26}}}):s)+"</span>"},12:function(e,t,n,o,a){return"<p class='card__undefined'>| N/A</p>"},compiler:[8,">= 4.3.0"],main:function(e,t,n,o,a){var s;return null!=(s=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:32,column:9}}}))?s:""},useData:!0}),p=a("kyRuT");a("2ezs4");p=a("kyRuT");var f=a("2ezs4");function m(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function g(e,t){return n=e,(o=m(e,t,"get")).get?o.get.call(n):o.value;var n,o}function v(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function y(e,t,n){v(e,t),t.set(e,n)}function b(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,m(e,t,"set"),n),n}function w(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function _(e,t){v(e,t),t.add(e)}const O=document.createElement("template"),k=String.raw;O.innerHTML=k`
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
`;var L=new WeakMap,E=new WeakSet,q=new WeakSet,P=new WeakMap;class M extends HTMLElement{get visibleAfter(){return this.getAttribute("visible-after")}set visibleAfter(e){this.setAttribute("visible-after",e)}get smoothScrolling(){return this.hasAttribute("smooth-scrolling")}set smoothScrolling(e){e?this.setAttribute("smooth-scrolling",""):this.removeAttribute("smooth-scrolling")}get topOffset(){return Number(this.getAttribute("top-offset"))||0}set topOffset(e){const t=Number(e)||0;this.setAttribute("top-offset",t>0?t:0)}static get observedAttributes(){return["visible-after"]}attributeChangedCallback(e,t,n){"visible-after"===e&&w(this,q,x).call(this,n)}connectedCallback(){w(this,E,S).call(this,"visibleAfter"),w(this,E,S).call(this,"smoothScrolling"),w(this,E,S).call(this,"topOffset"),this.topOffset||(this.topOffset=0),this.visibleAfter||(this.visibleAfter="50vh"),b(this,L,this.shadowRoot.querySelector("button")),w(this,q,x).call(this,this.visibleAfter);try{this.observer=new IntersectionObserver((([e])=>{this.hidden=e.isIntersecting,g(this,L).part.toggle("button--hidden",e.isIntersecting),this.dispatchEvent(new CustomEvent("scroll-top:visibility-change",{bubbles:!0,composed:!0,detail:{visible:!e.isIntersecting}}))})),this.observer.observe(this)}catch(e){console.error(e)}g(this,L).addEventListener("click",g(this,P))}disconnectedCallback(){this.observer&&(this.observer.disconnect(),this.observer=null),g(this,L).removeEventListener("click",g(this,P))}static defineCustomElement(e="scroll-top"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,M)}constructor(){super(),_(this,E),_(this,q),y(this,L,{writable:!0,value:void 0}),y(this,P,{writable:!0,value:e=>{e.preventDefault();const t={top:this.topOffset};this.smoothScrolling&&(t.behavior="smooth"),document.scrollingElement.scrollTo(t)}}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(O.content.cloneNode(!0))}}function S(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}}function x(e){"string"==typeof e&&(this.style.height=e)}var T=a("fb9GJ");const C=new l;const A=document.querySelector(".js-search-form"),Q=document.querySelector(".js-card-collection"),W=document.querySelector(".js-error-notify"),j=new l;async function $(e){try{if((0,p.spinerOn)(),j.resetPage(),j.quary=A.query.value.trim(),!j.quary)return W.innerHTML="Search result not successful.",setTimeout(N,3e3),void(0,p.spinerOff)();j.page=e;const{page:t,results:n,total_pages:o,total_results:a}=await j.getMovieByName();if(setTimeout(p.spinerOff,500),0===a)return W.innerHTML="Enter the correct movie name and try again.",void setTimeout(N,3e3);Q.innerHTML="",function(e){const t=h(I(e));Q.insertAdjacentHTML("beforeend",t)}(n)}catch(e){(0,p.spinerOff)(),console.log(e.message)}}function I(e){const t=e.map((e=>(e.genre_ids=d(e.genre_ids).join(", "),e.release_date=e.release_date.slice(0,4),e)));return(0,f.addLocal)(t),t}function N(){W.innerHTML=""}A.addEventListener("submit",(async function(t){t.preventDefault();const n=await C.getPopularFilms(),o=document.querySelector("#pagination"),a={totalItems:n.total_results,itemsPerPage:20,visiblePages:5,centerAlign:!1},s=new(e(T))(o,a);s.on("beforeMove",(e=>{n.page=e.page,$(n.page)})),s.movePageTo(0)})),M.defineCustomElement(),W.innerHTML="";T=a("fb9GJ");const z=new l;const H=document.getElementById("film-cards");async function D(e){try{(0,p.spinerOn)();const n=new l;n.page=e;const o=await n.getPopularFilms();setTimeout(p.spinerOff,500),t=o.results,H.innerHTML=h(I(t))}catch(e){console.log(e.message)}var t}document.addEventListener("DOMContentLoaded",async function(){const t=await z.getPopularFilms(),n=document.querySelector("#pagination"),o={totalItems:t.total_results,itemsPerPage:20,visiblePages:5,centerAlign:!1},a=new(e(T))(n,o);a.on("beforeMove",(e=>{D(e.page)})),a.movePageTo(0)}()),async function(){try{const{genres:e}=await c.getMovieGenres();!function(e){try{localStorage.setItem(u,JSON.stringify(e))}catch{return!1}}(e)}catch(e){console.log(e.message)}}(),D(),a("i8szs"),a("gffsD"),a("2ezs4"),a("37v9V");f=a("2ezs4");var R=a("gffsD"),B=a("i8szs");const F=document.querySelector(".backdrop"),G="js-watched-modal",J="js-queue-modal",U="reviewed",V="in your turn";function K(e){const t={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};R.toWatched.getWatchedOne(e)&&R.toWatched.getWatchedOne(e).length>0&&X(t.btn_watched),B.toQueue.getQueueOne(e)&&B.toQueue.getQueueOne(e).length>0&&Y(t.btn_queue)}function X(e){e.classList.add(G),e.textContent=U}function Y(e){e.classList.add(J),e.textContent=V}function Z(e){e.classList.remove(G),e.textContent="add to watched"}function ee(e){e.classList.remove(J),e.textContent="add to queue"}F.addEventListener("click",(function(e){const t=+e.target.dataset.id,n={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};if(e.target.classList.contains("btn_watched"))if(!R.toWatched.getWatchedOne(t)||R.toWatched.getWatchedOne(t).length<1){R.toWatched.setWatchedOne(...(0,f.getLocalOne)(t)),X(n.btn_watched);try{void 0!==B.toQueue.getQueueAll()&&B.toQueue.getQueueOne(t).length>0&&(B.toQueue.removeQueueOneEl(t),ee(n.btn_queue))}finally{return}}else R.toWatched.removeWatchedOneEl(t),Z(n.btn_watched);if(e.target.classList.contains("btn_queue"))if(!B.toQueue.getQueueOne(t)||B.toQueue.getQueueOne(t).length<1){B.toQueue.setQueueOne(...(0,f.getLocalOne)(t)),Y(n.btn_queue);try{void 0!==R.toWatched.getWatchedAll&&R.toWatched.getWatchedOne(t).length>0&&(R.toWatched.removeWatchedOneEl(t),Z(n.btn_watched))}finally{return}}else B.toQueue.removeQueueOneEl(t),ee(n.btn_queue)})),a("lpPzL");var te=a("lpPzL"),ne=(f=a("2ezs4"),a("9x1Bf"));function oe(){te.refs.backdrop.classList.add("is-hidden"),ie()}function ae(e){e.target.classList.contains("modal")&&te.refs.backdrop.classList.add("is-hidden"),ie()}function se(e){"Escape"===e.key&&(te.refs.backdrop.classList.add("is-hidden"),ie())}function ie(){te.refs.backdrop.classList.contains("is-hidden")&&(te.refs.modalClose.removeEventListener("click",oe),te.refs.backdrop.removeEventListener("click",ae),document.removeEventListener("keydown",se),te.refs.body.classList.remove("disable-scroll"))}document.querySelector(".container").addEventListener("click",(function(e){if(e.preventDefault(),!e.target.classList.contains("card__img"))return;const t=+e.target.dataset.id;te.refs.body.classList.add("disable-scroll"),te.refs.modalClose.addEventListener("click",oe),te.refs.backdrop.addEventListener("click",ae),document.addEventListener("keydown",se),te.refs.backdrop.classList.remove("is-hidden"),te.refs.modalMovie.innerHTML=(0,ne.default)((0,f.getLocalOne)(t)),K(t)})),a("kyRuT");
//# sourceMappingURL=index.b00c4b66.js.map
