const slider = document.querySelector("#slider");
let slidersection = document.querySelectorAll(".slider__section");
let slidersectionlast = slidersection[slidersection.length -1];

const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', slidersectionlast);

function Next() {
    let slidersectionfirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginleft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', slidersectionfirst);
        slider.style.marginleft = "-100%";
        
    }, 500);
}

function Prev() {
    let slidersection = document.querySelectorAll(".slider__section");
    let slidersectionlast = slidersection[slidersection.length -1];
    slider.style.marginleft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', slidersectionlast);
        slider.style.marginleft = "-100%";
    }, 500);
}

btnright.addEventListener('click', function(){
    Next();
});

btnleft.addEventListener('click', function(){
    Prev();
});

setInterval(function(){
    Next();
}, 2000);
