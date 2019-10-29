var marks = document.querySelectorAll(".mark");
var popupbook = document.querySelector(".bookmarking");
var closepopup = popupbook.querySelectorAll(".close-book");
var numberOfMarks = document.getElementById("bookmark");
var numberOfBaskets = document.getElementById("basket");
var basketContainer = document.querySelector(".basket");
var basket = document.querySelectorAll(".buy");
var marksValue = 0;
var basketValue = 0;
for (var i = 0; i < marks.length; i++) {
    marks[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        marksValue++;
        numberOfMarks.textContent = marksValue;

    })
}

console.log(closepopup);
for (var i = 0; i < basket.length; i++) {
    basket[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        basketValue++;
        basketContainer.classList.add("not-empty");
        numberOfBaskets.textContent = basketValue;
        popupbook.classList.add("modal-active");
        popupbook.classList.add("open-bookmarking");
        for (var j = 0; j < closepopup.length; j++) {
            closepopup[j].addEventListener("click", function () {
                popupbook.classList.remove("modal-active");
            })
        }
    })
}
