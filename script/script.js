"use strict";

var swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  breakpoints: {
    988: {
      slidesPerView: 3
    }
  },
  spaceBetween: 30,
  keyboard: {
    enabled: true
  }
});
var nav = document.querySelector('.nav'),
  intro = document.querySelector('.intro'),
  social = document.querySelector('.intro .social');
function scroll() {
  scrollY > nav.clientHeight ? (nav.classList.add('scrolled'), social.classList.add('scrolled')) : (nav.classList.remove('scrolled'), social.classList.remove('scrolled'));
}
window.addEventListener('scroll', function () {
  return scroll();
});

//BURGER

var list = document.querySelector('.nav__wrapper-list'),
  burgerMenu = document.querySelector('.nav__wrapper-burger'),
  body = document.querySelector('body');
burgerMenu.addEventListener('click', function () {
  burgerMenu.classList.toggle('open'), list.classList.toggle('open'), body.classList.toggle('open');
});