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


  const contenedor = document.querySelector('.section2__main__list');
  const elementos = Array.from(document.querySelectorAll('.section2__main__item'));
  let index = 0;

  const showNextGroup = () => {
    contenedor.innerHTML = '';
    [...Array(5)].forEach(() => {
      contenedor.appendChild(elementos[index]);
      index = (index + 1) % elementos.length;
    });
  };

  showNextGroup();
  setInterval(showNextGroup, 3000);



  // gsap.registerPlugin(ScrollTrigger);

  // gsap.registerPlugin(ScrollTrigger);

  // gsap.to(".section2__main__list", {
  //   xPercent: -100,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".section2",
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true,
  //     pin: true,
  //     anticipatePin: 1
  //   }
  // });



  // $('.section2__main__list').slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 300,
  //   slidesToShow: 5,
  //   centerMode: true,
  //   initialState: 0,
  //   autoplay: true,
  //   autoplaySpeed: 600,
  //   cssEase: 'linear',
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //         variableWidth: false,
  //       }
  //     }
  //   ]

  // })


  // // Function to apply transformations
  // function applyTransformations() {
  //   const slides = document.querySelectorAll('.slick-slide');
  //   slides.forEach(slide => {
  //     slide.style.transform = 'translateY(0)';
  //   });

  //   const current = document.querySelector('.slick-slide.slick-center');

  //   if (current) {
  //     const prev = current.previousElementSibling;
  //     const prevPrev = prev ? prev.previousElementSibling : null;
  //     const next = current.nextElementSibling;
  //     const nextNext = next ? next.nextElementSibling : null;

  //     if (prev) prev.style.transform = 'translateY(80px)';
  //     if (prevPrev) prevPrev.style.transform = 'translateY(160px)';
  //     if (next) next.style.transform = 'translateY(80px)';
  //     if (nextNext) nextNext.style.transform = 'translateY(160px)';
  //   }
  // }

  // // Apply transformations after slide change
  // $('.section2__main__list').on('afterChange', function (event, slick, currentSlide) {
  //   applyTransformations();
  // });

  // // Initial application
  // applyTransformations();




});