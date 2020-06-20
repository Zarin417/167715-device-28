var writeButton = document.querySelector(".write-us-btn");
var writeUsPopup = document.querySelector(".write-us");
var writeUsClose = writeUsPopup.querySelector(".btn-close");
var letterForm = writeUsPopup.querySelector(".letter-form");
var letterUserName = writeUsPopup.querySelector(".letter-user-name");
var letterEmail = writeUsPopup.querySelector(".letter-email");
var letterText = writeUsPopup.querySelector(".letter-text");

var isStorageSupport = true;
var storage = "";

// Проверка работы localStorage
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

// Нажатие кнопки "Напишите нам", поиск значений в localStorage, установка фокуса в поля
writeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("write-us-show");
  if (storage) {
    letterUserName.value = storage;
    letterEmail.focus();
  } else {
    letterUserName.focus();
  }
});

// Нажатие на кнопку "Закрыть" поп-апа
writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("write-us-show");
});

// Блокировка отправки формы, запись имени пользователя в localStorage
letterForm.addEventListener("submit", function (evt) {
  if (!letterUserName.value || !letterEmail.value || !letterText.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", letterUserName.value);
    }
  }
});

// Закрытие поп-апа по нажатию на Esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("write-us-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("write-us-show");
    }
  }
});
