const leftButton = document.querySelector('.slider__button_type_left');
const rightButton = document.querySelector('.slider__button_type_right');
const slider = document.querySelector('.slider');
const sliderBlock = slider.querySelectorAll('.slider__block');

const slides = [
  './assets/russia.jpg',
  './assets/britain.jpg',
  './assets/france.jpg',
  './assets/germany.jpg',
  './assets/states.jpg',
];

let index = 0;

function showSlide(currentSlide) {
  if (currentSlide > (slides.length - 1)) {
    index = 0;
  }
  if (currentSlide < 0) {
    index = slides.length - 1;
  }

  sliderBlock.forEach((slide) => {
    slide.style.display = 'none';
  })

  sliderBlock[index].style.display = 'block';
}

showSlide(index);

function nextSlide() {
  showSlide(index += 1);
}

function previousSlide() {
  showSlide(index -= 1);
}

rightButton.addEventListener('click', nextSlide);

leftButton.addEventListener('click', previousSlide);
