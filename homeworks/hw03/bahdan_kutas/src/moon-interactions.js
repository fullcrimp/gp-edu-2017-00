let moon = document.querySelector('.moon-wraper');
let showMoon = document.querySelector('.button__moon-switch');
let hideMoon = document.querySelector('.moon__button');

let moonSwitch = function() {
    moon.classList.toggle('moon-wraper--toggled');
    document.body.classList.toggle('scroll-hander');
}    

showMoon.addEventListener('click', moonSwitch, false);
hideMoon.addEventListener('click', moonSwitch, false);