for(var up=document.querySelector(".sort-up"),down=document.querySelector(".sort-down"),sort=document.querySelectorAll(".sort-name"),i=0;i<sort.length;i++)sort[i].addEventListener("click",function(e){e.preventDefault();for(var t=0;t<sort.length;t++)sort[t].classList.remove("active");this.classList.add("active")});up.addEventListener("click",function(e){e.preventDefault(),down.classList.remove("active"),up.classList.add("active")}),down.addEventListener("click",function(e){e.preventDefault(),down.classList.add("active"),up.classList.remove("active")});