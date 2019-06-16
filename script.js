
$(function () {
  $('.projectsContainerList').flickity({
  // options
  cellAlign: 'left',
  wrapAround: true,
  imagesLoaded: true,
  contain: true
  });
  $('.hamburger').click(function () {
      $('.menu').toggleClass('show');
    });
    $('.exitMenu').click(function () {
      $('.menu').toggleClass('show');
    });
});