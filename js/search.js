var focus = document.querySelector(".search-field");
var searchForm = document.querySelector(".search-form");

console.log(focus,searchForm);
focus.addEventListener("focus", function(){
    searchForm.classList.add("active");
    focus.addEventListener("blur", function(){
        searchForm.classList.remove("active");
    })
})