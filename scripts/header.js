const menuNavListItens = document.querySelectorAll(".menu-nav-list > li");
const bottomBar = document.querySelector(".bottom-bar");
const menuNavList = document.getElementById("menu-nav-list");
const buttonMenu = document.getElementById("button-menu");
const nav = document.querySelector(".nav");

menuNavListItens.forEach((li) => {
    li.addEventListener("mouseover", () => {
        li.children[1].classList.toggle("bottom-bar-activated");
    })
    li.addEventListener("mouseout", () => {
         li.children[1].classList.toggle("bottom-bar-activated");
    })
})

buttonMenu.addEventListener("click", () => {
    if(!menuNavList.classList.contains("menu-nav-list-activated")){
        menuNavList.classList.add("menu-nav-list-activated");
        nav.classList.add("nav-enabled");
    } else {
        menuNavList.classList.remove("menu-nav-list-activated");
        nav.classList.remove("nav-enabled");
    }
})


window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        nav.classList.add("nav-Roll-Down");
    } else {
        nav.classList.remove("nav-Roll-Down");
    }
 })
