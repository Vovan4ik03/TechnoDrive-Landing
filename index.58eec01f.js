var e=document.querySelector(".page"),t=document.querySelector(".theme-switcher");t.addEventListener("click",function(){e.classList.contains("page--themeblue")?(e.classList.remove("page--themeblue"),t.classList.remove("theme-switcher--themeblue")):(e.classList.add("page--themeblue"),t.classList.add("theme-switcher--themeblue"))}),document.querySelector(".header__slider");var c=document.querySelectorAll(".slider"),n=document.querySelector(".icon--arrow-l"),o=document.querySelector(".icon--arrow-r"),r=0,l=c.length;function s(e){c[r].classList.remove("active"),c[r=(e+l)%l].classList.add("active")}n.addEventListener("click",function(){s(r-1)}),o.addEventListener("click",function(){s(r+1)}),s(r);var a=document.querySelector(".icon--close"),i=document.querySelector(".icon--menu"),u=document.querySelector(".menu");a.addEventListener("click",function(){u.style.transform="translateX(-100%)",document.body.style.overflow="auto"}),i.addEventListener("click",function(){u.style.transform="translateX(0)",document.body.style.overflow="hidden"}),document.querySelectorAll(".nav__link--menu").forEach(function(e){e.addEventListener("click",function(){u.style.transform="translateX(-100%)",document.body.style.overflow="auto"})});
//# sourceMappingURL=index.58eec01f.js.map
