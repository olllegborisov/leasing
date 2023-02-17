$(document).ready(function(){
  $('.menu-icon').on('click', function() {
		$('.header__nav3').slideToggle(300);
	});
});
var swiperFirst = new Swiper(".mySwiper",
 {
    loop: true,
		freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },
     // Default parameters  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    // when window width is >= 1100px
    930: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    // when window width is >= 1280px
    1300: {
      slidesPerView: 2,
      spaceBetween: 30
    }, 
  }
});
var swiperSecond = new Swiper(".mySwiper-2", 
  {
      loop: true,
      freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
    },
     // Default parameters  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    551: {
      slidesPerView: 2,
      spaceBetween: 12
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    // when window width is >= 1100px
    930: {
      slidesPerView: 3,
      spaceBetween: 18
    },
    // when window width is >= 1280px
    1301: {
      slidesPerView: 5,
      spaceBetween: 22
    }, 
  }
});
var swiperThird = new Swiper(".mySwiper-3", 
  {
      loop: true,
      freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next-3",
      prevEl: ".swiper-button-prev-3",
    },
     // Default parameters  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    // when window width is >= 1100px
    931: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    // when window width is >= 1280px
    1301: {
      slidesPerView: 3,
      spaceBetween: 30
    }, 
  }
});
var swiperFourth = new Swiper(".mySwiper-4",
 {
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next-4",
      prevEl: ".swiper-button-prev-4",
    },
     // Default parameters  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    // when window width is >= 1100px
    930: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    // when window width is >= 1280px
    1301: {
      slidesPerView: 2,
      spaceBetween: 30
    }, 
  }
});
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ],
  });