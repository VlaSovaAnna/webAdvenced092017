!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){const n=o(1),r=o(2),l=o(3),i=o(4),s=o(5),a=o(6);n(),l(),r(),i(),s(),a()},function(e,t){e.exports=function(){document.addEventListener("click",function(e){e.target.classList.contains("authorization-button")&&(document.querySelector(".authorization-button").classList.add("off"),document.querySelector(".welcome").classList.add("off"),document.querySelector(".authorization").classList.remove("off"))})}},function(e,t){e.exports=function(){let e=document.querySelector(".blog__content");if(e){let o=e.querySelectorAll(".blog__text-block"),n=document.querySelector(".blog__menu"),r=document.querySelector(".blog-menu");o.forEach(function(e,t){e.id="text"+(t+1).toString();let o=document.createElement("li");o.classList.add("blog-menu__item"),o.id="menu-"+e.id,o.innerText=e.querySelector(".blog__text-title").innerText,0==t&&o.classList.add("blog-menu__item--active"),r.appendChild(o)}),o[o.length-1].style.minHeight=r.clientHeight+"px",document.addEventListener("scroll",function(){o.forEach(function(e,l){let i=window.pageYOffset,s=i+100;i<=e.offsetTop&&e.offsetTop<s&&t(o[l]),n.offsetTop<window.pageYOffset?r.style.position="fixed":r.style.position="absolute"})});function t(e){o.forEach(function(t){t!=e&&(t.classList.remove("blog__text-block--active"),document.querySelector("#menu-"+t.id).classList.remove("blog-menu__item--active"))}),e.classList.add("blog__text-block--active"),document.querySelector("#menu-"+e.id).classList.add("blog-menu__item--active")}}}},function(e,t){e.exports=function(){let e=document.querySelector(".hamburger");e&&function(e){e.addEventListener("click",function(e){e.preventDefault();let t=document.querySelector(".menu");console.log(t),!0===this.classList.contains("hamburger--active")?this.classList.remove("hamburger--active"):this.classList.add("hamburger--active"),!0===t.classList.contains("menu--active")?t.classList.remove("menu--active"):t.classList.add("menu--active")})}(e)}},function(e,t){e.exports=function(){function e(e,t){e.addEventListener("click",function(e){function o(e){null===i&&(i=e);var t=e-i,s=null;s=l<=0?Math.max(r-t/n,r+l):Math.min(r+t/n,r+l),window.scrollTo(0,s),s!=r+l&&requestAnimationFrame(o)}e.preventDefault();var n=.5,r=window.pageYOffset,l="down"==t?window.innerHeight:-window.pageYOffset,i=null;requestAnimationFrame(o)})}let t=document.querySelector(".arrow-down"),o=document.querySelector(".arrow-up");(o||t)&&(t&&e(t,"down"),o&&e(o,"up"))}},function(e,t){e.exports=function(){var e=[{featureType:"water",elementType:"geometry",stylers:[{color:"#61dac9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#dedede"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#dedede"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f1f1f1"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}],t=document.getElementById("google-container");if(t){var o={center:new google.maps.LatLng(55.769,37.677),zoom:13,panControl:!1,zoomControl:!1,mapTypeControl:!1,streetViewControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:e},n=new google.maps.Map(t,o);function r(e,t){var o=document.getElementById("zoom-in"),n=document.getElementById("zoom-out");e.appendChild(o),e.appendChild(n),google.maps.event.addDomListener(o,"click",function(){t.setZoom(t.getZoom()+1)}),google.maps.event.addDomListener(n,"click",function(){t.setZoom(t.getZoom()-1)})}var l=document.createElement("div");new r(l,n),n.controls[google.maps.ControlPosition.LEFT_TOP].push(l)}}},function(e,t){function o(e){window.addEventListener("load",function(t){function o(t){null===i&&(i=t);var s=t-i,a=Math.max(r-s/n,l);e.setAttribute("stroke-dashoffset",a),a!=l&&requestAnimationFrame(o)}var n=.5,r=e.getAttribute("stroke-dashoffset"),l=e.dataset.part,i=null;requestAnimationFrame(o)})}e.exports=function(){document.querySelectorAll(".skill__sector").forEach(function(e){o(e)})}}]);