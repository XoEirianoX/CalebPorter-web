var menubttns = document.querySelector(".menu");
var menulists = document.querySelector(".menu-list");
var socialbttns = document.querySelector(".menu-list li");

menubttns.addEventListener("click", function(){
    this.classList.toggle("click");
    menulists.classList.toggle("open");
});