var openMap = document.querySelector(".map-link");
var mapPopUp = document.querySelector(".pop-up-map");
var closeMap = mapPopUp.querySelector(".btn-close");
// Показ модального окна с картой
openMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopUp.classList.add("pop-up-map-show");
});

// Закрытие карты
closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopUp.classList.remove("pop-up-map-show");
});

// Закрытие поп-апа по нажатию на Esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopUp.classList.contains("pop-up-map-show")) {
      evt.preventDefault();
      mapPopUp.classList.remove("pop-up-map-show");
    }
  }
});
