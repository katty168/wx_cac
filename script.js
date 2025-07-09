const trackContainer = document.querySelector('.carousel-track-container');
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');

const scrollStep = 270;

prevBtn.addEventListener('click', () => {
  trackContainer.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  trackContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
});
