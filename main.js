(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{A:()=>a});let t=document.querySelector(".Home"),n=document.querySelector(".Reservations"),o=document.querySelector(".Events");t.addEventListener("click",(function(){a(),document.querySelector(".Home").disabled=!0;let e=document.querySelector("#content"),t=new Array(3),n=document.createElement("div");n.classList.add("container");for(let e=0;e<3;e++)t[e]=document.createElement("p"),t[e].classList.add("homep");t[0].textContent="At Orion Bakery, we pride ourselves on using only the finest ingredients, meticulously sourced to ensure every bite is a moment of pure delight. From our freshly baked bread to our decadent pastries and cakes, each creation is a testament to our commitment to quality and craftsmanship.",t[1].textContent="Whether you're stopping by for your morning croissant and coffee or planning a special celebration with one of our custom-designed cakes, our dedicated team is here to make your experience unforgettable.",t[2].textContent="Come lose yourself in the enchanting world of Orion Bakery, where every bite tells a story of passion, creativity, and above all, flavor. Your journey to pastry perfection starts here.";for(let e=0;e<3;e++)n.appendChild(t[e]),n.appendChild(document.createElement("br"));e.appendChild(n)})),n.addEventListener("click",(function(){a(),document.querySelector(".Reservations").disabled=!0;let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("container"),document.createElement("div"),t.classList.add("container-input","flexy");let n=document.createElement("textarea"),o=new Array(2),r=new Array(2),d=document.createElement("button");d.classList.add("submit"),d.textContent="Submit";let i=document.createElement("p");i.classList.add("restxt"),i.textContent="+381 123456789";let s=document.createElement("p");s.classList.add("restxt"),s.textContent="Your Location";for(let e=0;e<2;e++)o[e]=document.createElement("img"),o[e].classList.add("icon"),r[e]=document.createElement("div"),r[e].classList.add("box","flex-lay"),r[e].appendChild(o[e]);o[0].src="../assets/phone-in-talk.svg",o[1].src="../assets/map-marker-outline.svg",r[0].appendChild(i),r[1].appendChild(s),t.appendChild(r[0]),t.appendChild(r[1]),t.appendChild(n),t.appendChild(d),e.appendChild(t),d.addEventListener("click",(()=>{n.value=""}))})),o.addEventListener("click",(function(){console.log("hi")}));let r=document.querySelector("#content");function a(){for(;r.firstChild;)r.removeChild(r.lastChild);t.disabled=!1,n.disabled=!1,o.disabled=!1}})();