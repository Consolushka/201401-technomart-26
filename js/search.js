var focus = document.querySelector(".search-field");
var searchForm = document.querySelector(".search-form");
focus.addEventListener("focus", function () {
    searchForm.classList.add("active");
    focus.addEventListener("blur", function () {
        searchForm.classList.remove("active");
    })
})