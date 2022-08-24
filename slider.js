let slideIndex = 1;
let conIn = 1;

showSlides(slideIndex);
deContents(conIn);

function move(n) {
  showSlides(slideIndex += n);
  deContents(conIn += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  deContents(conIn = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function deContents(n) {
  let i;
  let dc = document.getElementsByClassName("deContents");
  let dots = document.getElementsByClassName("dot");
  if (n > dc.length) {conIn = 1}    
  if (n < 1) {conIn = dc.length}
  for (i = 0; i < dc.length; i++) {
    dc[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dc[conIn-1].style.display = "block";  
  dots[conIn-1].className += " active";
}