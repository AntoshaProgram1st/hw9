const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body");function r(){intervalId=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.removeEventListener("click",r)}e.addEventListener("click",r),t.addEventListener("click",(function n(){clearInterval(intervalId),e.addEventListener("click",r),t.removeEventListener("click",n)}));
//# sourceMappingURL=01-color-switcher.b81224a5.js.map
