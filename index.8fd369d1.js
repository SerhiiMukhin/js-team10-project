var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("2shzp");const s="https://api.themoviedb.org/3/",r="a59dfea75e9e40e203f0819879862061";class a{async getMovieByName(){const e=`${s}search/movie?api_key=${r}&query=${this.searchQuary}&page=${this.page}&language=${this.lang}&include_adult=false`;return(await i.default.get(e)).data}async getPopularFilms(){const e=`${s}/trending/movie/day?api_key=${r}&language=${this.lang}`;return(await i.default.get(e)).data}async getInfoByMovieId(){const e=`${s}movie/${this.movieId}?api_key=${r}&language=${this.lang}`;return(await i.default.get(e)).data}async getMovieGenres(){const e=`${s}genre/movie/list?api_key=${r}`;return(await i.default.get(e)).data}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get quary(){return this.searchQuary}set quary(e){this.searchQuary=e}constructor(){this.searchQuary="",this.page=1,this.movieId="",this.lang="en-US"}}const c=new a,u="data-genresArr";function d(e){let t=[];return function(){try{if(localStorage.getItem(u)){return JSON.parse(localStorage.getItem(u))}return}catch{return!1}}().map((({id:n,name:o})=>{e.map((e=>{e===n&&t.push(o)}))})),t}!async function(){try{const{genres:e}=await c.getMovieGenres();!function(e){try{localStorage.setItem(u,JSON.stringify(e))}catch{return!1}}(e)}catch(e){console.log(e.message)}}(),o("i8szs"),o("gffsD"),o("2ezs4"),o("37v9V");var l=o("2ezs4"),h=o("gffsD"),f=o("i8szs");const g=document.querySelector(".backdrop"),m="js-watched-modal",p="js-queue-modal",b="reviewed",v="in your turn";function y(e){const t={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};h.toWatched.getWatchedOne(e)&&h.toWatched.getWatchedOne(e).length>0&&w(t.btn_watched),f.toQueue.getQueueOne(e)&&f.toQueue.getQueueOne(e).length>0&&L(t.btn_queue)}function w(e){e.classList.add(m),e.textContent=b}function L(e){e.classList.add(p),e.textContent=v}function x(e){e.classList.remove(m),e.textContent="add to watched"}function C(e){e.classList.remove(p),e.textContent="add to queue"}g.addEventListener("click",(function(e){const t=+e.target.dataset.id,n={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};if(e.target.classList.contains("btn_watched"))if(!h.toWatched.getWatchedOne(t)||h.toWatched.getWatchedOne(t).length<1){h.toWatched.setWatchedOne(...(0,l.getLocalOne)(t)),w(n.btn_watched);try{void 0!==f.toQueue.getQueueAll()&&f.toQueue.getQueueOne(t).length>0&&(f.toQueue.removeQueueOneEl(t),C(n.btn_queue))}finally{return}}else h.toWatched.removeWatchedOneEl(t),x(n.btn_watched);if(e.target.classList.contains("btn_queue"))if(!f.toQueue.getQueueOne(t)||f.toQueue.getQueueOne(t).length<1){f.toQueue.setQueueOne(...(0,l.getLocalOne)(t)),L(n.btn_queue);try{void 0!==h.toWatched.getWatchedAll&&h.toWatched.getWatchedOne(t).length>0&&(h.toWatched.removeWatchedOneEl(t),x(n.btn_watched))}finally{return}}else f.toQueue.removeQueueOneEl(t),C(n.btn_queue)}));var q=o("eMQH7"),O=o("kyRuT");l=o("2ezs4"),q=o("eMQH7"),O=o("kyRuT"),l=o("2ezs4");function E(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function S(e,t){return n=e,(o=E(e,t,"get")).get?o.get.call(n):o.value;var n,o}function k(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _(e,t,n){k(e,t),t.set(e,n)}function N(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,E(e,t,"set"),n),n}function T(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function Q(e,t){k(e,t),t.add(e)}const M=document.createElement("template"),W=String.raw;M.innerHTML=W`
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
`;var A=new WeakMap,H=new WeakSet,$=new WeakSet,I=new WeakMap;class z extends HTMLElement{get visibleAfter(){return this.getAttribute("visible-after")}set visibleAfter(e){this.setAttribute("visible-after",e)}get smoothScrolling(){return this.hasAttribute("smooth-scrolling")}set smoothScrolling(e){e?this.setAttribute("smooth-scrolling",""):this.removeAttribute("smooth-scrolling")}get topOffset(){return Number(this.getAttribute("top-offset"))||0}set topOffset(e){const t=Number(e)||0;this.setAttribute("top-offset",t>0?t:0)}static get observedAttributes(){return["visible-after"]}attributeChangedCallback(e,t,n){"visible-after"===e&&T(this,$,j).call(this,n)}connectedCallback(){T(this,H,P).call(this,"visibleAfter"),T(this,H,P).call(this,"smoothScrolling"),T(this,H,P).call(this,"topOffset"),this.topOffset||(this.topOffset=0),this.visibleAfter||(this.visibleAfter="50vh"),N(this,A,this.shadowRoot.querySelector("button")),T(this,$,j).call(this,this.visibleAfter);try{this.observer=new IntersectionObserver((([e])=>{this.hidden=e.isIntersecting,S(this,A).part.toggle("button--hidden",e.isIntersecting),this.dispatchEvent(new CustomEvent("scroll-top:visibility-change",{bubbles:!0,composed:!0,detail:{visible:!e.isIntersecting}}))})),this.observer.observe(this)}catch(e){console.error(e)}S(this,A).addEventListener("click",S(this,I))}disconnectedCallback(){this.observer&&(this.observer.disconnect(),this.observer=null),S(this,A).removeEventListener("click",S(this,I))}static defineCustomElement(e="scroll-top"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,z)}constructor(){super(),Q(this,H),Q(this,$),_(this,A,{writable:!0,value:void 0}),_(this,I,{writable:!0,value:e=>{e.preventDefault();const t={top:this.topOffset};this.smoothScrolling&&(t.behavior="smooth"),document.scrollingElement.scrollTo(t)}}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(M.content.cloneNode(!0))}}function P(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}}function j(e){"string"==typeof e&&(this.style.height=e)}const D=document.querySelector(".js-search-form"),R=document.querySelector(".js-card-collection"),B=document.querySelector(".js-error-notify"),U=new a;function F(e){let t=[];return e.map((({poster_path:e,title:n,release_date:o,genre_ids:i,id:s})=>{const r=d(i).join(", "),a={poster_path:e,title:n,filmDate:o.slice(0,4),filmGenres:r,id:s};t.push(a)})),t}function G(){R.innerHTML=""}function J(){B.innerHTML=""}D.addEventListener("submit",(async function(e){e.preventDefault();try{if((0,O.spinerOn)(),U.resetPage(),U.quary=D.query.value.trim(),!U.quary)return B.innerHTML="Search result not successful.",setTimeout(J,3e3),void(0,O.spinerOff)();const{page:e,results:t,total_pages:n,total_results:o}=await U.getMovieByName();if(setTimeout(O.spinerOff,500),0===o)return G(),B.innerHTML="Enter the correct movie name and try again.",void setTimeout(J,3e3);(0,l.addLocal)(t),G(),function(e){const t=(0,q.default)(F(e));R.insertAdjacentHTML("beforeend",t)}(t)}catch(e){(0,O.spinerOff)(),console.log(e.message)}})),z.defineCustomElement(),B.innerHTML="";const V=document.getElementById("film-cards");document.addEventListener("DOMContentLoaded",(async function(){try{(0,O.spinerOn)();const t=new a,n=await t.getPopularFilms();setTimeout(O.spinerOff,500),e=n.results,V.innerHTML=(0,q.default)(F(e)),(0,l.addLocal)(n.results)}catch(e){console.log(e.message)}var e})),o("lpPzL");var K=o("lpPzL"),X=(l=o("2ezs4"),o("9x1Bf"));function Y(){K.refs.backdrop.classList.add("is-hidden"),te()}function Z(e){e.target.classList.contains("modal")&&K.refs.backdrop.classList.add("is-hidden"),te()}function ee(e){"Escape"===e.key&&(K.refs.backdrop.classList.add("is-hidden"),te())}function te(){K.refs.backdrop.classList.contains("is-hidden")&&(K.refs.modalClose.removeEventListener("click",Y),K.refs.backdrop.removeEventListener("click",Z),document.removeEventListener("keydown",ee),K.refs.body.classList.remove("disable-scroll"))}document.querySelector(".container").addEventListener("click",(function(e){if(e.preventDefault(),!e.target.classList.contains("card__img"))return;const t=+e.target.dataset.id;K.refs.body.classList.add("disable-scroll"),K.refs.modalClose.addEventListener("click",Y),K.refs.backdrop.addEventListener("click",Z),document.addEventListener("keydown",ee),K.refs.backdrop.classList.remove("is-hidden"),K.refs.modalMovie.innerHTML=(0,X.default)((0,l.getLocalOne)(t)),y(t)})),o("kyRuT");const ne=document.querySelector('[data-index="1"]'),oe=document.querySelector('[data-index="2"]'),ie=document.querySelector('[data-index="3"]'),se=document.querySelector('[data-index="4"]'),re=document.querySelector('[data-index="5"]'),ae=document.querySelector(".first-button"),ce=document.querySelector(".last-button"),ue=document.querySelector(".pagination-container"),de=document.querySelector(".arrow-right"),le=document.querySelector(".arrow-left"),he=document.querySelector("#previous"),fe=document.querySelector("#after");ue.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&(Number(e.target.textContent)&&(ge=Number(e.target.textContent)),he.hidden=!0,fe.hidden=!0,e.target.classList.contains("pagination-button")&&(me.forEach((e=>e.classList.remove("pagination--current"))),e.target.classList.add("pagination--current")),e.target.classList.contains("arrow-right")&&ge<1e3&&(me.forEach((e=>e.classList.remove("pagination--current"))),ne.classList.add("pagination--current"),ne.textContent=Number(ne.textContent)+5,oe.textContent=Number(oe.textContent)+5,ie.textContent=Number(ie.textContent)+5,se.textContent=Number(se.textContent)+5,re.textContent=Number(re.textContent)+5,ge=ne.textContent),e.target.classList.contains("arrow-left")&&ge>=5&&(me.forEach((e=>e.classList.remove("pagination--current"))),ne.textContent=Number(ne.textContent)-5,oe.textContent=Number(oe.textContent)-5,ie.textContent=Number(ie.textContent)-5,se.textContent=Number(se.textContent)-5,re.textContent=Number(re.textContent)-5,re.classList.add("pagination--current"),ge=re.textContent),e.target.classList.contains("first-button")&&(me.forEach((e=>e.classList.remove("pagination--current"))),ne.textContent=1,oe.textContent=2,ie.textContent=3,se.textContent=4,re.textContent=5,ne.classList.add("pagination--current"),ge=ne.textContent,le.hidden=!0,he.hidden=!0,ae.hidden=!0),e.target.classList.contains("last-button")&&(me.forEach((e=>e.classList.remove("pagination--current"))),ne.textContent=Number(ce.textContent)-4,oe.textContent=Number(ce.textContent)-3,ie.textContent=Number(ce.textContent)-2,se.textContent=Number(ce.textContent)-1,re.textContent=ce.textContent,re.classList.add("pagination--current"),ge=re.textContent,de.hidden=!0,fe.hidden=!0,ce.hidden=!0),Number(ge)>5?(le.hidden=!1,he.hidden=!1,ae.hidden=!1):(le.hidden=!0,he.hidden=!0,ae.hidden=!0),Number(ge)<996&&(de.hidden=!1,fe.hidden=!1,ce.hidden=!1),gallery.innerHTML="",window.scrollTo({top:0,behavior:"smooth"}),""!==inputRef.value?movieSearcher(inputRef.value,ge):startPage())}));let ge=1,me=document.querySelectorAll(".pagination-button");he.hidden=!0,le.hidden=!0,ae.hidden=!0;o("eMQH7");
//# sourceMappingURL=index.8fd369d1.js.map
