var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var s=n("i8szs"),c=n("gffsD"),i=n("eMQH7");const o=document.querySelector(".library-section__card-set"),u=document.querySelector(".js-watch"),l=document.querySelector(".js-queue");function a(){if(d(s.toQueue.getQueueAll()),!l.classList.contains("current"))return l.classList.add("current"),void u.classList.remove("current");l.classList.remove("current")}function d(e){try{e.length>0&&(o.innerHTML=(0,i.default)(e))}catch{return o.innerHTML="🐷"}}u.addEventListener("click",(function(){if(d((0,c.toWatched).getWatchedAll()),!u.classList.contains("current"))return u.classList.add("current"),void l.classList.remove("current");u.classList.remove("current")})),l.addEventListener("click",a),l.focus(),a(),n("i8szs"),n("gffsD"),n("2ezs4"),n("lpPzL"),n("kyRuT");
//# sourceMappingURL=library.1dd96aa4.js.map