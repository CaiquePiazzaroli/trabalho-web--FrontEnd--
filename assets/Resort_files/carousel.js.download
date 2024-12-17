
let buttonLeft = document.querySelector(".carousel_button_left");
let buttonRight = document.querySelector(".carousel_button_right");
let carousel = document.querySelector(".carousel");

let switchToLeft = () => {
    carousel.scrollBy({
        top: 0,
        left: 1000,
        behavior: "smooth",
        });
}

let switchToRight = () => {
    carousel.scrollBy({
        top: 0,
        left: -1000,
        behavior: "smooth",
    });
}

buttonLeft.addEventListener("click", () => {
    switchToRight();
})

buttonRight.addEventListener("click", () => {
    switchToLeft();
})

// let switchCount = 0;
// window.setInterval(() => {
//     if(switchCount != carousel.children.length) {
//         switchToLeft(); 
//     } else {
//         carousel.scroll({
//             top: 0,
//             left: 0,
//             behavior: "smooth",
//         })
//         switchCount = 0;
//     } 
//     switchCount++;
// }, 8000)
