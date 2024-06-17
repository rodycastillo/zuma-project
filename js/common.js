document.addEventListener("DOMContentLoaded", function () {

  // VARIABLES
  const main__portlet = document.querySelector(".portlet[data-portlet=zuma]")
  const toScrollStores = main__portlet.querySelectorAll('.toScrollStores');
  const slider = main__portlet.querySelector(".section1__slider");
  const slides = main__portlet.querySelectorAll('.section1__slider__item');
  const prevButton = main__portlet.querySelector('.arrow__left');
  const nextButton = main__portlet.querySelector('.arrow__right');
  const section__video = main__portlet.querySelector('section.section3');
  const desktopVideo = section__video.querySelector('video.desktop');
  const mobileVideo = section__video.querySelector('video.mobile');


  desktopVideo.removeAttribute('autoplay');
  desktopVideo.controls = false;

  mobileVideo.removeAttribute('autoplay');
  mobileVideo.controls = false;


  // VIDEO
  const checkVideoVisibility = () => {
    const rect = section__video.getBoundingClientRect();
    const isAtTop = rect.top <= 60 && rect.bottom >= 220;

    console.table(rect);

    if (isAtTop) {
      if (window.innerWidth > 768) {
        desktopVideo.play();
        mobileVideo.pause();
        // mobileVideo.currentTime = 0;
      } else {
        mobileVideo.play();
        desktopVideo.pause();
        // desktopVideo.currentTime = 0;
      }
    } else {
      desktopVideo.pause();
      // desktopVideo.currentTime = 0;
      mobileVideo.pause();
      // mobileVideo.currentTime = 0;
    }
  };

  window.addEventListener('scroll', checkVideoVisibility);
  window.addEventListener('resize', checkVideoVisibility);
  checkVideoVisibility();




  // TO SCROLL
  toScrollStores.forEach((item) => {
    item.addEventListener('click', () => {
      main__portlet.querySelector('section.section4').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    })
  })


  // SLIDER SECTION 1
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