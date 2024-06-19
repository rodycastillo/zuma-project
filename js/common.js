document.addEventListener("DOMContentLoaded", function () {

  AOS.init();

  // VARIABLES
  const main__portlet = document.querySelector(".portlet[data-portlet=zuma]")
  const toScrollStores = main__portlet.querySelectorAll('.toScrollStores');
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
  const unmuteButton = section__video.querySelector('.section3__main__video__icon');

  const toggleMute = () => {
    if (window.innerWidth >= 641) {
      desktopVideo.removeAttribute('autoplay');
      desktopVideo.controls = false;
      if (desktopVideo.muted) {
        unmuteButton.classList.add('active');
        desktopVideo.muted = false;
      } else {
        desktopVideo.muted = true;
        unmuteButton.classList.remove('active');
      }
    } else {
      mobileVideo.removeAttribute('autoplay');
      mobileVideo.controls = false;
      if (mobileVideo.muted) {
        unmuteButton.classList.add('active');
        mobileVideo.muted = false;
      } else {
        unmuteButton.classList.remove('active');
        mobileVideo.muted = true;
      }
    }
  };

  unmuteButton.addEventListener('click', toggleMute);

  const checkVideoVisibility = () => {
    const rect = section__video.getBoundingClientRect();
    const isAtTop = rect.top <= 60 && rect.bottom >= 220;

    if (isAtTop) {
      if (window.innerWidth >= 641) {
        desktopVideo.play();
        mobileVideo.pause();
      } else {
        mobileVideo.play();
        desktopVideo.pause();
      }
    } else {
      desktopVideo.pause();
      mobileVideo.pause();
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
  // const slider = main__portlet.querySelector(".section1__slider");
  const slides = Array.from(main__portlet.querySelectorAll('.section1__slider__item'));
  let currentIndex = 0;
  let slideCount = slides.length;
  let interval;

  const updateSlidePosition = () => {
    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === currentIndex) {
        slide.classList.add('active');
      }
    });
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

  updateSlidePosition();
  startAutoplay();


  const contenedor = document.querySelector('.section2__main__list');
  const elementos = Array.from(document.querySelectorAll('.section2__main__item'));
  let index = elementos.length - 1;
  const showNextGroup = () => {
    contenedor.innerHTML = '';
    [...Array(5)].forEach((_, i) => {
      const currentIndex = (index - i + elementos.length) % elementos.length;
      contenedor.appendChild(elementos[currentIndex]);
    });
    index = (index - 1 + elementos.length) % elementos.length;
  };
  showNextGroup();
  setInterval(showNextGroup, 3000);

});