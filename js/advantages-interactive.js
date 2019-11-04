var advantagesButtonArray = document.querySelectorAll(".advantages-button"),
    advantagesArray = document.querySelectorAll(".advantage"),
    advantagesImageArray = document.querySelectorAll(".interactive-image"),
    imageList = {},
    advList = {};


for (var i = 0; i < advantagesButtonArray.length; i++) {
    var cur = advantagesButtonArray[i],
        tabId = cur.dataset.tabId;

    advList[tabId] = document.querySelector(".advantage." + tabId);
    imageList[tabId] = document.querySelector(".interactive-image." + tabId);

    advantagesButtonArray[i].addEventListener("click", function () {
        for (var j = 0; j < advantagesButtonArray.length; j++) {
            advantagesArray[j].classList.remove("active");
            advantagesButtonArray[j].classList.remove("active");
            advantagesImageArray[j].classList.remove("active");
        }

        this.classList.add("active");
        advList[this.dataset.tabId].classList.add("active");
        imageList[this.dataset.tabId].classList.add("active");
    })
}