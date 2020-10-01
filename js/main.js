$(document).ready(function () {
  $('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn next"></button>',
    prevArrow: '<button type="button" class="slick-btn prev"></button>',
    dots: false,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });


  $(window).scroll(function () {
    if ($(window).scrollTop() <= 1000) {
      $('.solution__items').addClass('animated fadeInUp delay-1s');
    } else {
      $('.solution__items').removeClass('animated fadeInUp delay-1s');
    }
  });
  
});

const burgerMenu = document.querySelector('.burger__menu');
const listUl = document.querySelector('.list');

  burgerMenu.addEventListener('click', toggleLink);

function toggleLink(){
  listUl.classList.toggle('open');
}

//плавная прокрутка страницы вверх
window.onload = function() {

    var scrolled;
    var timer;

    document.querySelector('.back__top').onclick = function () {
      scrolled = window.pageYOffset;
      scrollToTop();
    }
  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 150;
      timer = setTimeout(scrollToTop, 50);
    }
    else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
}


  



 




