var marks = document.querySelectorAll(".mark");
var numberOfMarks = document.getElementById("bookmark");
var numberOfBaskets = document.getElementById("basket");
var basketContainer = document.querySelector(".basket");
var basket = document.querySelectorAll(".buy");
var marksValue = 0;
var basketValue=0;

for (var i = 0; i < marks.length; i++) {
    marks[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        marksValue++;
        console.log(marksValue, numberOfMarks);
        numberOfMarks.textContent=marksValue;
    })
}

for(var i=0;i<basket.length; i++){
    basket[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        basketValue++;
        basketContainer.classList.add("not-empty");
        numberOfBaskets.textContent=basketValue;
    })
}
