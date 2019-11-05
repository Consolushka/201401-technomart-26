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
