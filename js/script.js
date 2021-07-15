

$(document).ready(function() {
   $('.droppingout__lang, .arrow1').click(function(event) {
      $('.sub-list__1,.arrow1').toggleClass('active1');
   });
});

$(document).ready(function() {
   $('.droppingout__country, .arrow2').click(function(event) {
      $('.sub-list__2,.arrow2').toggleClass('active1');
   });
});

$(document).ready(function() {
   $('.serv-back__location3, .arrow3, .arrowbg3').click(function(event) {
      $('.sub-list__3,.arrow3, .arrowbg3').toggleClass('active1');
   });
});

$(document).ready(function() {
   $('.serv-back__location4, .arrow4, .arrowbg4').click(function(event) {
      $('.sub-list__4,.arrow4, .arrowbg4').toggleClass('active1');
   });
});

$(document).ready(function() {
   $('.serv-back__location5, .arrow5, .arrowbg5').click(function(event) {
      $('.sub-list__5,.arrow5, .arrowbg5').toggleClass('active1');
   });
});

$(document).ready(function() {
   $('.serv-back__location6, .arrow6, .arrowbg6').click(function(event) {
      $('.sub-list__6,.arrow6, .arrowbg6').toggleClass('active1');
   });
});


$(document).ready(function() {
   $('.accord-item__trigger').click(function() {
      $(this).parent('.accord-item').toggleClass('accord-item--active');
   });
});





$(document).ready(function() {
   $('.footer__item-top--1, .footer__arrow--1').click(function(event) {
      $('.footer__ul--1, .footer__arrow--1').toggleClass('active4');
   });
});

$(document).ready(function() {
   $('.footer__item-top--2, .footer__arrow--2').click(function(event) {
      $('.footer__ul--2, .footer__arrow--2').toggleClass('active4');
   });
});
$(document).ready(function() {
   $('.footer__item-top--3, .footer__arrow--3').click(function(event) {
      $('.footer__ul--3, .footer__arrow--3').toggleClass('active4');
   });
});


$(document).ready(function(){
   $('.add-tabs__item').click(function(e){
      e.preventDefault();

      $('.add-tabs__item').removeClass('active5');
      $('.add-tabs__block').removeClass('active5');

      $(this).addClass('active5');
      $($(this).attr('href')).addClass('active5');
   });

   $('.add-tabs__item:first').click();
});










$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

function ibg(){

      let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if(ibg[i].querySelector('img')){
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }
   }
}
   
ibg();


$(document).ready(function(){
   $('.slider').slick({
      adaptiveHeight:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      easing: 'ease',
      autoplay: true,
      autoplaySpead: 300,
      speed: 1000,
      draggable: true,
      swipe: true,
      centerMode:true,
      responsive:[
         {
         breakpoint:1000,
         settings:{
            slidesToShow:2,
         }
         },
         {
            breakpoint:700,
            settings:{
               slidesToShow:1,
            }
            }
      ]
   });
});