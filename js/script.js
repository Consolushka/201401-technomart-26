//Форма поиска
var focus = document.querySelector(".search-field");
console.log(focus);
var searchForm = document.querySelector(".search-form");
focus.addEventListener("focus", function () {
  console.log("sd;klfjlksjdhf");
  searchForm.classList.add("active");
  focus.addEventListener("blur", function () {
    searchForm.classList.remove("active");
  })
});

//Добавление в корзину
var marks = document.querySelectorAll(".mark");
var popupbook = document.querySelector(".bookmarking");
var closeBookPopup = popupbook.querySelectorAll(".close-book");
var numberOfMarks = document.getElementById("bookmark");
var numberOfBaskets = document.getElementById("basket");
var basketContainer = document.querySelector(".basket");
var basket = document.querySelectorAll(".buy");
var marksValue = 0;
var basketValue = numberOfBaskets.textContent;
for (var i = 0; i < marks.length; i++) {
  marks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    marksValue++;
    numberOfMarks.textContent = marksValue;

  })
}

console.log(closeBookPopup);
for (var i = 0; i < basket.length; i++) {
  basket[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    basketValue++;
    basketContainer.classList.add("not-empty");
    numberOfBaskets.textContent = basketValue;
    popupbook.classList.add("modal-active");
    popupbook.classList.add("open-bookmarking");
    for (var j = 0; j < closeBookPopup.length; j++) {
      closeBookPopup[j].addEventListener("click", function () {
        popupbook.classList.remove("modal-active");
      })
    }
  })
}

//Сортировка
var up = document.querySelector(".sort-up");
var down = document.querySelector(".sort-down");
var sort = document.querySelectorAll(".sort-name");

for (var i = 0; i < sort.length; i++) {
  sort[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var j = 0; j < sort.length; j++) {
      sort[j].classList.remove("active");
    }
    this.classList.add("active");
  })
}

up.addEventListener("click", function (evt) {
  evt.preventDefault();
  down.classList.remove("active");
  up.classList.add("active");
});


down.addEventListener("click", function (evt) {
  evt.preventDefault();
  down.classList.add("active");
  up.classList.remove("active");
});


//Слайдер
var buttonLeft = document.querySelector(".left-arrow");
var buttonRight = document.querySelector(".right-arrow");
var cardsArray = document.querySelectorAll(".card");
var activeCard = document.querySelector(".card.active");
var ActiveList = document.querySelector(".list-img");
console.log(ActiveList);
var list = document.querySelectorAll(".list-img");
var notActiveList;
var notActiveCard;
for (var i = 0; i < cardsArray.length; i++) {
  if (cardsArray[i] === activeCard) {
    if (i === 0) {
      notActiveCard = cardsArray[1];
    }
    else {
      notActiveCard = cardsArray[0];
    }
  }
}
for (var i = 0; i < list.length; i++) {
  if (list[i] === ActiveList) {
    if (i === 0) {
      notActiveList = list[1];
    }
    else {
      notActiveList = list[0];
    }
  }
}
buttonLeft.addEventListener("click", function () {
  activeCard.classList.remove("active");
  notActiveCard.classList.add("active");
  var dop = notActiveCard;
  notActiveCard = activeCard;
  activeCard = dop;
  ActiveList.classList.remove("active");
  notActiveList.classList.add("active");
  var dop1 = notActiveList;
  notActiveList = ActiveList;
  ActiveList = dop1;
})

buttonRight.addEventListener("click", function () {
  activeCard.classList.remove("active");
  notActiveCard.classList.add("active");
  var dop = notActiveCard;
  notActiveCard = activeCard;
  activeCard = dop;
  ActiveList.classList.remove("active");
  notActiveList.classList.add("active");
  var dop1 = notActiveList;
  notActiveList = ActiveList;
  ActiveList = dop1;
})


//Достоинства
var advantagesButtonArray = document.querySelectorAll(".advantages-button"),
  advantagesArray = document.querySelectorAll(".advantage"),
  advantagesImageArray = document.querySelectorAll(".interactive-image"),
  imageList = {},
  advList = {};


for (var i = 0; i < advantagesButtonArray.length; i++) {
  var cur = advantagesButtonArray[i],
    tabId = cur.dataset.tabId;

  advList[tabId] = document.querySelector(".advantage." + tabId);
  imageList[tabId] = document.querySelector(".interactive-image." + tabId);

  advantagesButtonArray[i].addEventListener("click", function () {
    for (var j = 0; j < advantagesButtonArray.length; j++) {
      advantagesArray[j].classList.remove("active");
      advantagesButtonArray[j].classList.remove("active");
      advantagesImageArray[j].classList.remove("active");
    }

    this.classList.add("active");
    advList[this.dataset.tabId].classList.add("active");
    imageList[this.dataset.tabId].classList.add("active");
  })
}


console.log(closeBookPopup);
for (var i = 0; i < basket.length; i++) {
  basket[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    basketValue++;
    basketContainer.classList.add("not-empty");
    numberOfBaskets.textContent = basketValue;
    popupbook.classList.add("modal-active");
    popupbook.classList.add("open-bookmarking");
    for (var j = 0; j < closeBookPopup.length; j++) {
      closeBookPopup[j].addEventListener("click", function () {
        popupbook.classList.remove("modal-active");
      })
    }
  })
}


//Карта
var map = document.querySelector(".map");
var mapButton = document.querySelector(".open-map");
var closeMap = map.querySelector(".close");
mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-active");
  map.classList.remove("closing-map");
  map.classList.add("opening-map");
  closeMap.addEventListener("click", function () {
    map.classList.remove("modal-active");
    map.classList.remove("opening-map");
    map.classList.add("closing-map");
  })
});


//Попап "Напишите нам"
var writeUsPopup = document.querySelector(".write-us");
var writeUsForm = writeUsPopup.querySelector(".write-us-form");
var writeUs = document.querySelector(".location");
var name = writeUsPopup.querySelector("[name=name]");
var mail = writeUsPopup.querySelector("[name=mail]");
var comment = writeUsPopup.querySelector("[name=comment]");
console.log(writeUsForm);
writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-active");
  writeUsPopup.classList.add("opening-write-us");
});
writeUsForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!name.value || !mail.value || !comment.value) {
    writeUsPopup.classList.remove("opening-write-us");
    writeUsPopup.classList.add("modal-error");
  }
});
var closeWriteUs = writeUsPopup.querySelector(".close");
closeWriteUs.addEventListener("click", function () {
  writeUsPopup.classList.remove("modal-error");
  writeUsPopup.classList.remove("modal-active");
});

