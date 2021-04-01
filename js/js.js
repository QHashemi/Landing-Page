$(document).ready(function(){


const menu = document.querySelector('.container-menu');
const open = document.querySelector('#open');
const close = document.querySelector('#close');
const child = document.querySelector('.mobile-menu');
const main_content = document.querySelector('.main-content');
const hamberger_menu = document.querySelector('.hamberger-menu');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const btn_close = document.querySelector('.btn-close');
const leftSide = document.querySelector('.left-side');
const box = document.querySelector('.box');
const closeLeftSide = document.querySelector(".close-left-side");
const openLeftSide = document.querySelector(".open-left-side");



close.addEventListener("click", function () {
    hamberger_menu.style.height = "";
});

open.addEventListener("click", function () {
    menu.style.width = "100%";


    child.firstElementChild.style.marginLeft = '20vw';
    child.childNodes[3].style.marginLeft = "20vw";

    child.childNodes[3].style.transitionDuration = "1s";
    child.firstElementChild.style.transitionDuration = "0.5s";

    child.childNodes[5].style.marginLeft = "20vw";

    child.childNodes[5].style.transitionDuration = "1.5s";

    child.childNodes[7].style.marginLeft = "20vw";

    child.childNodes[7].style.transitionDuration = "2s";

    child.childNodes[9].style.marginLeft = "20vw";

    child.childNodes[9].style.transitionDuration = "2.5s";

    child.childNodes[11].style.marginLeft = "20vw";

    child.childNodes[11].style.transitionDuration = "3s";

});
close.addEventListener("click", function () {
    menu.style.width = "0";
    child.firstElementChild.style.marginLeft = '0px';
    child.childNodes[3].style.marginLeft = "0";


    child.childNodes[3].style.transitionDuration = "1s";
    child.firstElementChild.style.transitionDuration = "0.5s";

    child.childNodes[5].style.marginLeft = "0";

    child.childNodes[5].style.transitionDuration = "1.5s";
    child.childNodes[7].style.marginLeft = "0";

    child.childNodes[7].style.transitionDuration = "2s";

    child.childNodes[9].style.marginLeft = "0";

    child.childNodes[9].style.transitionDuration = "2.5s";

    child.childNodes[11].style.marginLeft = "0";

    child.childNodes[11].style.transitionDuration = "3s";

});



document.querySelector('#arrow-down').addEventListener("click", function (e) {
    //window.scrollTo(0,1000);
    window.scrollTo({
        top: 750,
        left: 0,
        behavior: "smooth"
    });
});



btn.addEventListener("click", function () {
    search.style.height = "70px";
});

btn.addEventListener("click", function () {
    btn_close.style.opacity = "1";
    btn.style.opacity = "0";

    btn.style.width = "80%";
    btn_close.style.width = "80px";
});



btn_close.addEventListener("click", function () {
    btn.style.opacity = "1";
    search.style.height = "0";
    btn_close.style.opacity = "0";

    btn_close.style.width = "80%";
    btn.style.width = "80px";


});



closeLeftSide.addEventListener("click", function () {
    leftSide.style.width = "0";
    closeLeftSide.style.display = "none";
    openLeftSide.style.display = "block";
    closeLeftSide.style.right = "-35px";
    openLeftSide.style.right = "-30px";


});





openLeftSide.addEventListener("click", function () {
    leftSide.style.width = "350px";
    closeLeftSide.style.display = "block";
    openLeftSide.style.display = "none";
    closeLeftSide.style.right = "-35px";

    closeLeftSide.style.right = "-20px";

});




closeLeftSide.addEventListener("click", hidden);
function hidden() {
    document.querySelector('.text-content').style.opacity = "0";


}


openLeftSide.addEventListener("click", show);
function show() {
    document.querySelector('.text-content').style.opacity = "1";


}

// Bring top button
document.querySelector('body').onscroll = (e) => {
    var windows_height = window.scrollY;
    console.log(windows_height)
    console.log(e)
    if (windows_height < 300) {
        document.querySelector('.top').style.opacity = "0";
    } else {
        document.querySelector('.top').style.opacity = "1";
    }


};

});
