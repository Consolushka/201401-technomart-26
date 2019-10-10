var buttonLeft = document.querySelector(".left-arrow");
var buttonRight = document.querySelector(".right-arrow");
var cardsArray = document.querySelectorAll(".card");
var activeCard = document.querySelector(".card.active");
var ActiveList = document.querySelector(".number-of-img.active");
var list = document.querySelectorAll(".number-of-img");
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
            notActiveList= list[1];
        }
        else {
            notActiveList= list[0];
        }
    }
}
buttonLeft.addEventListener("click", function () {
    activeCard.classList.remove("active");
    notActiveCard.classList.add("active");
    var dop = notActiveCard;
    notActiveCard=activeCard;
    activeCard=dop;
    ActiveList.classList.remove("active");
    notActiveList.classList.add("active");
    var dop1 = notActiveList;
    notActiveList=ActiveList;
    ActiveList=dop1;
})

buttonRight.addEventListener("click", function(){
    activeCard.classList.remove("active");
    notActiveCard.classList.add("active");
    var dop = notActiveCard;
    notActiveCard=activeCard;
    activeCard=dop;
    ActiveList.classList.remove("active");
    notActiveList.classList.add("active");
    var dop1 = notActiveList;
    notActiveList=ActiveList;
    ActiveList=dop1;
})