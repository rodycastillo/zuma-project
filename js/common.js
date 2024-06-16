document.addEventListener("DOMContentLoaded", function () {

  const main__portlet = document.querySelector(".portlet[data-portlet=zuma]")

  const toScrollStores = main__portlet.querySelectorAll('.toScrollStores');
  toScrollStores.forEach((item) => {
    item.addEventListener('click', () => {
      main__portlet.querySelector('section.section4').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    })
  })

  const slider = main__portlet.querySelector(".section1__slider");
  const slides = main__portlet.querySelectorAll('.section1__slider__item');

  const prevButton = main__portlet.querySelector('.arrow__left');
  const nextButton = main__portlet.querySelector('.arrow__right');

  let currentIndex = 0;
  let slideCount = slides.length;
  let interval;

  const updateSlidePosition = () => {
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
  };

  const startAutoplay = () => {
    interval = setInterval(nextSlide, 3000);
  };

  const stopAutoplay = () => {
    clearInterval(interval);
  };

  nextButton.addEventListener('click', () => {
    stopAutoplay();
    nextSlide();
    startAutoplay();
  });

  prevButton.addEventListener('click', () => {
    stopAutoplay();
    prevSlide();
    startAutoplay();
  });

  startAutoplay();

});