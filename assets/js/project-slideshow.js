/* slideshow modified from https://www.w3schools.com/howto/howto_js_slideshow.asp */

var slideIndex = [1, 1, 1];
var slideId = ["slides0", "slides1", "slides2"]
var dotsId = ["dots0", "dots1", "dots2"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var y = document.getElementsByClassName(dotsId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < y.length; i++) {
    y[i].className = y[i].className.replace(" active", "");
  }
  x[slideIndex[no] - 1].style.display = "block";
  y[slideIndex[no] - 1].className += " active";
}