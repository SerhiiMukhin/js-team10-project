var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("2shzp");const s="https://api.themoviedb.org/3/",r="a59dfea75e9e40e203f0819879862061";class a{async getMovieByName(){const e=`${s}search/movie?api_key=${r}&query=${this.searchQuary}&page=${this.page}&language=${this.lang}&include_adult=false`;return(await i.default.get(e)).data}async getPopularFilms(){const e=`${s}/trending/movie/day?api_key=${r}&language=${this.lang}`;return(await i.default.get(e)).data}async getInfoByMovieId(){const e=`${s}movie/${this.movieId}?api_key=${r}&language=${this.lang}`;return(await i.default.get(e)).data}async getMovieGenres(){const e=`${s}genre/movie/list?api_key=${r}`;return(await i.default.get(e)).data}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get quary(){return this.searchQuary}set quary(e){this.searchQuary=e}constructor(){this.searchQuary="",this.page=1,this.movieId="",this.lang="en-US"}}const c=new a,u="data-genresArr";function d(e){let t=[];return function(){try{if(localStorage.getItem(u)){return JSON.parse(localStorage.getItem(u))}return}catch{return!1}}().map((({id:n,name:o})=>{e.map((e=>{e===n&&t.push(o)}))})),t}!async function(){try{const{genres:e}=await c.getMovieGenres();!function(e){try{localStorage.setItem(u,JSON.stringify(e))}catch{return!1}}(e)}catch(e){console.log(e.message)}}(),o("i8szs"),o("gffsD"),o("2ezs4"),o("37v9V");var l=o("2ezs4"),h=o("gffsD"),f=o("i8szs");const g=document.querySelector(".backdrop"),m="js-watched-modal",p="js-queue-modal",b="reviewed",v="in your turn";function y(e){const t={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};h.toWatched.getWatchedOne(e)&&h.toWatched.getWatchedOne(e).length>0&&w(t.btn_watched),f.toQueue.getQueueOne(e)&&f.toQueue.getQueueOne(e).length>0&&L(t.btn_queue)}function w(e){e.classList.add(m),e.textContent=b}function L(e){e.classList.add(p),e.textContent=v}function x(e){e.classList.remove(m),e.textContent="add to watched"}function C(e){e.classList.remove(p),e.textContent="add to queue"}g.addEventListener("click",(function(e){const t=+e.target.dataset.id,n={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};if(e.target.classList.contains("btn_watched"))if(!h.toWatched.getWatchedOne(t)||h.toWatched.getWatchedOne(t).length<1){h.toWatched.setWatchedOne(...(0,l.getLocalOne)(t)),w(n.btn_watched);try{void 0!==f.toQueue.getQueueAll()&&f.toQueue.getQueueOne(t).length>0&&(f.toQueue.removeQueueOneEl(t),C(n.btn_queue))}finally{return}}else h.toWatched.removeWatchedOneEl(t),x(n.btn_watched);if(e.target.classList.contains("btn_queue"))if(!f.toQueue.getQueueOne(t)||f.toQueue.getQueueOne(t).length<1){f.toQueue.setQueueOne(...(0,l.getLocalOne)(t)),L(n.btn_queue);try{void 0!==h.toWatched.getWatchedAll&&h.toWatched.getWatchedOne(t).length>0&&(h.toWatched.removeWatchedOneEl(t),x(n.btn_watched))}finally{return}}else f.toQueue.removeQueueOneEl(t),C(n.btn_queue)}));var q=o("eMQH7"),O=o("kyRuT");l=o("2ezs4");const E=document.getElementById("film-cards");document.addEventListener("DOMContentLoaded",(async function(){try{(0,O.spinerOn)();const t=new a,n=await t.getPopularFilms();setTimeout(O.spinerOff,500),e=n.results,E.innerHTML=(0,q.default)(e),(0,l.addLocal)(n.results)}catch(e){console.log(e.message)}var e})),o("lpPzL");q=o("eMQH7"),O=o("kyRuT"),l=o("2ezs4");function S(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function k(e,t){return n=e,(o=S(e,t,"get")).get?o.get.call(n):o.value;var n,o}function _(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function N(e,t,n){_(e,t),t.set(e,n)}function T(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,S(e,t,"set"),n),n}function Q(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function M(e,t){_(e,t),t.add(e)}const W=document.createElement("template"),A=String.raw;W.innerHTML=A`
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
`;var H=new WeakMap,$=new WeakSet,I=new WeakSet,z=new WeakMap;class P extends HTMLElement{get visibleAfter(){return this.getAttribute("visible-after")}set visibleAfter(e){this.setAttribute("visible-after",e)}get smoothScrolling(){return this.hasAttribute("smooth-scrolling")}set smoothScrolling(e){e?this.setAttribute("smooth-scrolling",""):this.removeAttribute("smooth-scrolling")}get topOffset(){return Number(this.getAttribute("top-offset"))||0}set topOffset(e){const t=Number(e)||0;this.setAttribute("top-offset",t>0?t:0)}static get observedAttributes(){return["visible-after"]}attributeChangedCallback(e,t,n){"visible-after"===e&&Q(this,I,D).call(this,n)}connectedCallback(){Q(this,$,j).call(this,"visibleAfter"),Q(this,$,j).call(this,"smoothScrolling"),Q(this,$,j).call(this,"topOffset"),this.topOffset||(this.topOffset=0),this.visibleAfter||(this.visibleAfter="50vh"),T(this,H,this.shadowRoot.querySelector("button")),Q(this,I,D).call(this,this.visibleAfter);try{this.observer=new IntersectionObserver((([e])=>{this.hidden=e.isIntersecting,k(this,H).part.toggle("button--hidden",e.isIntersecting),this.dispatchEvent(new CustomEvent("scroll-top:visibility-change",{bubbles:!0,composed:!0,detail:{visible:!e.isIntersecting}}))})),this.observer.observe(this)}catch(e){console.error(e)}k(this,H).addEventListener("click",k(this,z))}disconnectedCallback(){this.observer&&(this.observer.disconnect(),this.observer=null),k(this,H).removeEventListener("click",k(this,z))}static defineCustomElement(e="scroll-top"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,P)}constructor(){super(),M(this,$),M(this,I),N(this,H,{writable:!0,value:void 0}),N(this,z,{writable:!0,value:e=>{e.preventDefault();const t={top:this.topOffset};this.smoothScrolling&&(t.behavior="smooth"),document.scrollingElement.scrollTo(t)}}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(W.content.cloneNode(!0))}}function j(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}}function D(e){"string"==typeof e&&(this.style.height=e)}const R=document.querySelector(".js-search-form"),B=document.querySelector(".js-card-collection"),U=document.querySelector(".js-error-notify"),F=new a;function G(){B.innerHTML=""}function J(){U.innerHTML=""}R.addEventListener("submit",(async function(e){e.preventDefault();try{if((0,O.spinerOn)(),F.resetPage(),F.quary=R.query.value.trim(),!F.quary)return U.innerHTML="Search result not successful.",setTimeout(J,3e3),void(0,O.spinerOff)();const{page:e,results:t,total_pages:n,total_results:o}=await F.getMovieByName();if(setTimeout(O.spinerOff,500),0===o)return G(),U.innerHTML="Enter the correct movie name and try again.",void setTimeout(J,3e3);(0,l.addLocal)(t),G(),function(e){const t=(0,q.default)(function(e){let t=[];return e.map((({poster_path:e,title:n,release_date:o,genre_ids:i,id:s})=>{const r=d(i).join(", "),a={poster_path:e,title:n,filmDate:o.slice(0,4),filmGenres:r,id:s};t.push(a)})),t}(e));B.insertAdjacentHTML("beforeend",t)}(t)}catch(e){(0,O.spinerOff)(),console.log(e.message)}})),P.defineCustomElement(),U.innerHTML="";var V=o("lpPzL"),K=(l=o("2ezs4"),o("9x1Bf"));function X(){V.refs.backdrop.classList.add("is-hidden"),ee()}function Y(e){e.target.classList.contains("modal")&&V.refs.backdrop.classList.add("is-hidden"),ee()}function Z(e){"Escape"===e.key&&(V.refs.backdrop.classList.add("is-hidden"),ee())}function ee(){V.refs.backdrop.classList.contains("is-hidden")&&(V.refs.modalClose.removeEventListener("click",X),V.refs.backdrop.removeEventListener("click",Y),document.removeEventListener("keydown",Z),V.refs.body.classList.remove("disable-scroll"))}document.querySelector(".container").addEventListener("click",(function(e){if(e.preventDefault(),!e.target.classList.contains("card__img"))return;const t=+e.target.dataset.id;V.refs.body.classList.add("disable-scroll"),V.refs.modalClose.addEventListener("click",X),V.refs.backdrop.addEventListener("click",Y),document.addEventListener("keydown",Z),V.refs.backdrop.classList.remove("is-hidden"),V.refs.modalMovie.innerHTML=(0,K.default)((0,l.getLocalOne)(t)),y(t)})),o("kyRuT");const te=document.querySelector('[data-index="1"]'),ne=document.querySelector('[data-index="2"]'),oe=document.querySelector('[data-index="3"]'),ie=document.querySelector('[data-index="4"]'),se=document.querySelector('[data-index="5"]'),re=document.querySelector(".first-button"),ae=document.querySelector(".last-button"),ce=document.querySelector(".pagination-container"),ue=document.querySelector(".arrow-right"),de=document.querySelector(".arrow-left"),le=document.querySelector("#previous"),he=document.querySelector("#after");ce.addEventListener("click",(function(e){"BUTTON"===e.target.tagName&&(Number(e.target.textContent)&&(fe=Number(e.target.textContent)),le.hidden=!0,he.hidden=!0,e.target.classList.contains("pagination-button")&&(ge.forEach((e=>e.classList.remove("pagination--current"))),e.target.classList.add("pagination--current")),e.target.classList.contains("arrow-right")&&fe<1e3&&(ge.forEach((e=>e.classList.remove("pagination--current"))),te.classList.add("pagination--current"),te.textContent=Number(te.textContent)+5,ne.textContent=Number(ne.textContent)+5,oe.textContent=Number(oe.textContent)+5,ie.textContent=Number(ie.textContent)+5,se.textContent=Number(se.textContent)+5,fe=te.textContent),e.target.classList.contains("arrow-left")&&fe>=5&&(ge.forEach((e=>e.classList.remove("pagination--current"))),te.textContent=Number(te.textContent)-5,ne.textContent=Number(ne.textContent)-5,oe.textContent=Number(oe.textContent)-5,ie.textContent=Number(ie.textContent)-5,se.textContent=Number(se.textContent)-5,se.classList.add("pagination--current"),fe=se.textContent),e.target.classList.contains("first-button")&&(ge.forEach((e=>e.classList.remove("pagination--current"))),te.textContent=1,ne.textContent=2,oe.textContent=3,ie.textContent=4,se.textContent=5,te.classList.add("pagination--current"),fe=te.textContent,de.hidden=!0,le.hidden=!0,re.hidden=!0),e.target.classList.contains("last-button")&&(ge.forEach((e=>e.classList.remove("pagination--current"))),te.textContent=Number(ae.textContent)-4,ne.textContent=Number(ae.textContent)-3,oe.textContent=Number(ae.textContent)-2,ie.textContent=Number(ae.textContent)-1,se.textContent=ae.textContent,se.classList.add("pagination--current"),fe=se.textContent,ue.hidden=!0,he.hidden=!0,ae.hidden=!0),Number(fe)>5?(de.hidden=!1,le.hidden=!1,re.hidden=!1):(de.hidden=!0,le.hidden=!0,re.hidden=!0),Number(fe)<996&&(ue.hidden=!1,he.hidden=!1,ae.hidden=!1),gallery.innerHTML="",window.scrollTo({top:0,behavior:"smooth"}),""!==inputRef.value?movieSearcher(inputRef.value,fe):startPage())}));let fe=1,ge=document.querySelectorAll(".pagination-button");le.hidden=!0,de.hidden=!0,re.hidden=!0;o("eMQH7");
//# sourceMappingURL=index.a162a4ed.js.map
