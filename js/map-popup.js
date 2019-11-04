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