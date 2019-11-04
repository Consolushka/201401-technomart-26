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