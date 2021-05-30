"use strict";
document.querySelector("#MenuRespo").addEventListener('touchstart',ShowMenu);
function ShowMenu(){
    document.querySelector("#Items-Menu").classList.toggle("MenuResponsive");
}