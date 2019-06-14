
// for toggling through slides
const slideIndex = 1;
showProject(slideIndex);

function plusDivs(n) {
  showProject(slideIndex += n);
}

function showProject(n) {
  const i;
  const x = $(".project");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}