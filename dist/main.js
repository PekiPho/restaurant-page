(()=>{"use strict";let e=document.querySelector(".Home"),t=document.querySelector(".Reservations"),n=document.querySelector(".Events");e.addEventListener("click",(function(){document.querySelector(".Home").disabled=!0;let e=document.querySelector("#content"),t=new Array(3),n=document.createElement("div");n.classList.add("container");for(let e=0;e<3;e++)t[e]=document.createElement("p"),t[e].classList.add("homep");t[0].textContent="At Orion Bakery, we pride ourselves on using only the finest ingredients, meticulously sourced to ensure every bite is a moment of pure delight. From our freshly baked bread to our decadent pastries and cakes, each creation is a testament to our commitment to quality and craftsmanship.",t[1].textContent="Whether you're stopping by for your morning croissant and coffee or planning a special celebration with one of our custom-designed cakes, our dedicated team is here to make your experience unforgettable.",t[2].textContent="Come lose yourself in the enchanting world of Orion Bakery, where every bite tells a story of passion, creativity, and above all, flavor. Your journey to pastry perfection starts here.";for(let e=0;e<3;e++)n.appendChild(t[e]),n.appendChild(document.createElement("br"));e.appendChild(n)})),t.addEventListener("click",(function(){document.querySelector(".Reservations").disabled=!0;let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("container"),document.createElement("div").classList.add("container-input"),document.createElement("input");let n=new Array(2);for(let e=0;e<2;e++)n[e]=document.createElement("img"),n[e].classList.add("icon");n[0].src="../assets/phone-in-talk.svg",n[1].src="../assets/map-marker-outline.svg",t.appendChild(n[0]),t.appendChild(n[1]),e.appendChild(t)})),n.addEventListener("click",(function(){console.log("hi")}))})();