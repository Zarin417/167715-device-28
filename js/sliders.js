var popularSlides = document.querySelectorAll(".slider-products-item");
var popularSlidesButtons = document.querySelectorAll(".slider-products-control");
var servicesSlides = document.querySelectorAll(".slider-services-descriptions-item");
var servicesSlidesButtons = document.querySelectorAll(".slider-services-item");

// Слайдер с популярными товарами
for (var i = 0; i < popularSlidesButtons.length; i++) {
  (function(i) {
    popularSlidesButtons[i].addEventListener("click", function () {
      for (var j = 0; j < popularSlides.length; j++) {
        popularSlides[j].classList.remove("active");
        popularSlidesButtons[j].classList.remove("active");
      }
      popularSlides[i].classList.add("active");
      popularSlidesButtons[i].classList.add("active");
    })
  })(i)
};

// Слайдер услуг
for (var i = 0; i < servicesSlidesButtons.length; i++) {
  (function (i) {
    servicesSlidesButtons[i].addEventListener("click", function (evt) {
      for (var j = 0; j < servicesSlides.length; j++) {
        evt.preventDefault();
        servicesSlides[j].classList.remove("active");
        servicesSlidesButtons[j].classList.remove("active");
      }
      servicesSlides[i].classList.add("active");
      servicesSlidesButtons[i].classList.add("active");
    })
  })(i)
};
