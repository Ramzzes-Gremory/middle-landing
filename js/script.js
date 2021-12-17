$(document).ready(function(){
  $('.fourth-section__content').slick({
		arrows:true,
    slidesToShow:4,
    draggable:true,
    responsive:[
      {
        breakpoint: 1266,
        settings: {
          slidesToShow:2,
        }
      },{
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
	})
  $('.ninth-section__content-slider').slick({
    arrows: true,
    slidesToShow: 1,
    draggable: false,
  })
  $('.ninth-section__content__left-big-slider').slick({
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    asNavFor: ".ninth-section__content__left-small-slider",
  })
  $('.ninth-section__content__left-small-slider').slick({
    arrows: true,
    slidesToShow: 3,
    draggable: false,
    vertical: true,
    asNavFor: ".ninth-section__content__left-big-slider",
    focusOnSelect: true,
    responsive:[
      {
        breakpoint: 541,
        settings: {
          vertical: false,
          slidesToShow: 3,
          
        }
      }
    ]
  })
  $('.pop-up__btn').on('click', function () {
    $('.pop-up').toggleClass('pop-up-open');
  })
  $('.pop-up-close').on('click', function () {
    $('.pop-up').removeClass('pop-up-open');
  })
  $('.burger-container').on('click', function () {
    $('.first-section__nav').toggleClass('burger-menu');
  })
  $('.burger-close').on('click', function () {
    $('.first-section__nav').removeClass('burger-menu');
  })

});
window.onscroll = function headerScroll() {
  var header = document.querySelector('.header-scroll');
  if(window.pageYOffset > 80){
      header.classList.add('header-scroll-focus');
  }  else{
      header.classList.remove('header-scroll-focus')
  }
}