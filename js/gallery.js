/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Open the Modal
function openModal() {
  document.getElementById('modal_lightbox').style.display = 'block';
}

// Close the Modal
function closeModal() {
  document.getElementById('modal_lightbox').style.display = 'none';
}

let slideIndex = 0;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'flex';
}

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

showSlides(slideIndex);
