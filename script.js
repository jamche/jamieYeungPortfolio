
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
      $('.menu').toggleClass('show');
    });
    $('.exitMenu').click(function () {
      $('.menu').toggleClass('show');
    });
    // run animate library
  AOS.init();
});