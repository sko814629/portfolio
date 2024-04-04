$(document).ready(function(){





let hamberger = document.querySelector('.hamberger');
let time = document.querySelector('.time');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open'); 

});
time.addEventListener('click', function(){
    mobileNav.classList.remove('open'); 

});


});