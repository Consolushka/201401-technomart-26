var writeUsPopup = document.querySelector(".write-us");
var writeUs = document.querySelector(".location");
console.log(writeUsPopup);
console.log(writeUs);
writeUs.addEventListener("click", function(){
    writeUsPopup.classList.add("modal-active");
});
var closeWriteUs = writeUsPopup.querySelector(".close");
console.log(closeWriteUs);
closeWriteUs.addEventListener("click", function(){
   writeUsPopup.classList.remove("modal-active");
});