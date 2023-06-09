document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".swiper", {
      slidesPerView: 4, // Define o número de slides visíveis na tela
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  });
  