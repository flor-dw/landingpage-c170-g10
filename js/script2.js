

const slider2 = document.querySelector("#slider2");
let slidersection2 = document.querySelectorAll(".slider__section2");
let slidersectionlast2 = slidersection2[slidersection2.length -1];

const btnleft2 = document.querySelector("#btn-left2");
const btnright2 = document.querySelector("#btn-right2");

slider2.insertAdjacentElement('afterbegin', slidersectionlast2);

function Next2() {
    let slidersectionfirst2 = document.querySelectorAll(".slider__section2")[0];
    slider2.style.marginleft = "-200%";
    slider2.style.transition = "all 0.5s";
    setTimeout(function() {
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('beforeend', slidersectionfirst2);
        slider2.style.marginleft = "-100%";
    }, 500);
}

function Prev2() {
    let slidersection2 = document.querySelectorAll(".slider__section2");
    let slidersectionlast2 = slidersection2[slidersection2.length -1];
    slider2.style.marginleft = "0";
    slider2.style.transition = "all 0.5s";
    setTimeout(function() {
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('afterbegin', slidersectionlast2);
        slider2.style.marginleft = "-100%";
    }, 500);
}

btnright2.addEventListener('click', function(){
    Next2();
});

btnleft2.addEventListener('click', function(){
    Prev2();
});

// setInterval(function(){
//     Next();
// }, 4000);