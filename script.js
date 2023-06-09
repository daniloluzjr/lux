document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1, // Altera o número de slides visíveis para 1
    spaceBetween: 20, // Define o espaço entre os slides
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3 // Define o número de slides visíveis para 3 em telas com largura menor que 768px
      }
    }
  });
});
