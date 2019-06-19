
$(function () {
  // run flickity
  // $('.projectsContainerList').flickity({
  //   // options
  //   cellAlign: 'left',
  //   wrapAround: true,
  //   imagesLoaded: true,
  //   contain: true
  //   });
    // hamburger
  $('.hamburger').click(function () {
    $('.menu').addClass('show');
    $('.menu').addClass('slide-in-left');
    $('.menu').removeClass('slide-out-left');
    $('.hamburger').css('visibility','hidden');
    });
    $('.exitMenu').click(function () {
      $('.menu').toggleClass('slide-out-left');
      $('.menu').removeClass('slide-in-left');  
      $('.hamburger').css('visibility', 'initial');
    });
  $('.clickClose').click(function(){
    $('.menu').removeClass('show');
    $('.hamburger').css('visibility','visible');
  });  
    // run animate library
  AOS.init({ disable: window.innerWidth < 500 });

});