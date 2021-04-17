const swiper = new Swiper('.main-swiper', {
    // Optional parameters
    loop: true,
    autoplay: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.main-swiper-button-right',
      prevEl: '.main-swiper-button-left',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });