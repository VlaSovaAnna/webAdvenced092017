!function(e){function t(n){if(o[n])return o[n].exports;var c=o[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){const n=o(1),c=o(2),i=o(3);n(),i(),c()},function(e,t){e.exports=function(){document.addEventListener("click",function(e){e.target.classList.contains("authorization-button")&&(document.querySelector(".authorization-button").classList.add("off"),document.querySelector(".welcome").classList.add("off"),document.querySelector(".authorization").classList.remove("off"))})}},function(e,t){e.exports=function(){function e(e){t.forEach(function(t){t!=e&&(t.classList.remove("blog__text-block--active"),document.querySelector("#menu-"+t.id).classList.remove("blog-menu__item--active"))}),e.classList.add("blog__text-block--active"),document.querySelector("#menu-"+e.id).classList.add("blog-menu__item--active")}var t=document.querySelector(".blog__content").querySelectorAll(".blog__text-block"),o=document.querySelector(".blog__menu"),n=document.querySelector(".blog-menu");t.forEach(function(e,t){e.id="text"+(t+1).toString();var o=document.createElement("li");o.classList.add("blog-menu__item"),o.id="menu-"+e.id,o.innerText=e.querySelector(".blog__text-title").innerText,0==t&&o.classList.add("blog-menu__item--active"),n.appendChild(o)}),document.addEventListener("scroll",function(){t.forEach(function(c,i){var r=window.pageYOffset,u=r+100;r<=c.offsetTop&&c.offsetTop<u&&e(t[i]),o.offsetTop<window.pageYOffset?n.style.position="fixed":n.style.position="absolute"})})}},function(e,t){e.exports=function(){document.querySelector(".hamburger").addEventListener("click",function(e){e.preventDefault(),!0===this.classList.contains("hamburger_active")?this.classList.remove("hamburger_active"):this.classList.add("hamburger_active")})}}]);