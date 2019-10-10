var map = document.querySelector(".map");
console.log(map);
var mapButton = document.querySelector(".open-map");
console.log(mapButton);
var closeMap = map.querySelector(".close");
mapButton.addEventListener("click", function(){
   map.classList.add("modal-active");
   closeMap.addEventListener("click", function(){
       map.classList.remove("modal-active");
   })
});