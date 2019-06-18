
$(function () {
  // run flickity
  $('.projectsContainerList').flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    imagesLoaded: true,
    contain: true
    });
    // hamburger
  $('.hamburger').click(function () {
    $('.menu').addClass('show');
    $('.menu').addClass('slide-in-left');
    $('.menu').removeClass('slide-out-left');
    });
    $('.exitMenu').click(function () {
      $('.menu').toggleClass('slide-out-left');
      $('.menu').removeClass('slide-in-left');  
    });
  $('.clickClose').click(function(){
    $('.menu').removeClass('show');
  });  
    // run animate library
  AOS.init();
});