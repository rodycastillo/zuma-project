document.addEventListener("DOMContentLoaded", function () {

  AOS.init();

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
  const unmuteButton = section__video.querySelector('.section3__main__video__icon');

  const toggleMute = () => {
    if (window.innerWidth >= 641) {
      desktopVideo.removeAttribute('autoplay');
      desktopVideo.controls = false;
      if (desktopVideo.muted) {
        desktopVideo.muted = false;
      } else {
        desktopVideo.muted = true;
      }
    } else {
      mobileVideo.removeAttribute('autoplay');
      mobileVideo.controls = false;
      if (mobileVideo.muted) {
        mobileVideo.muted = false;
      } else {
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


  const section = document.querySelector('.section2');
  const list = document.querySelector('.section2__main__list');
  const items = document.querySelectorAll('.section2__main__item');
  let lastScrollTop = 0;

  const handleScroll = () => {
    const st = window.pageYOffset || section.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // Scroll down
      list.appendChild(list.firstElementChild);
    } else {
      // Scroll up
      list.insertBefore(list.lastElementChild, list.firstElementChild);
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

    // Add active class to the new first element
    items.forEach((item, index) => {
      item.classList.remove('active');
      if (index === Math.floor(items.length / 4)) {
        item.classList.add('active');
      }
    });
  };

  // window.addEventListener('scroll', handleScroll);




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


  // const contenedor = document.querySelector('.section2__main__list');
  // const elementos = Array.from(document.querySelectorAll('.section2__main__item'));
  // let index = 0;
  // const showNextGroup = () => {
  //   contenedor.innerHTML = '';
  //   [...Array(5)].forEach((_, i) => {
  //     const currentIndex = (index + i) % elementos.length;
  //     const elemento = elementos[currentIndex];
  //     const nuevoElemento = elemento.cloneNode(true);
  //     contenedor.appendChild(nuevoElemento);
  //   });
  //   index = (index + 1) % elementos.length;
  // };
  // showNextGroup();
  // setInterval(showNextGroup, 3000);

  const contenedor = document.querySelector('.section2__main__list');
  const elementos = Array.from(document.querySelectorAll('.section2__main__item'));
  let index = elementos.length - 1;
  const showNextGroup = () => {
    contenedor.innerHTML = '';
    [...Array(5)].forEach((_, i) => {
      const currentIndex = (index - i + elementos.length) % elementos.length;
      const elemento = elementos[currentIndex];
      const nuevoElemento = elemento.cloneNode(true);
      contenedor.appendChild(elementos[currentIndex]);
    });
    index = (index - 1 + elementos.length) % elementos.length;
  };
  showNextGroup();
  setInterval(showNextGroup, 3000);

});