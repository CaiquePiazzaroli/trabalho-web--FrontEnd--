const button = document.querySelector(".switch-theme-div");
let theme= "";

// Verifica se é a primeira vez que o usuário abre o site
if(localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
} else {
    window.onload = getThemeLocalStorage;
}

// Altera o tema
function switchLocalStorage() {
    if(localStorage.getItem("theme") == "light") {
        document.body.classList.add(localStorage.getItem("theme"));
        localStorage.setItem("theme","dark");
        document.body.classList.add(localStorage.getItem("theme"));
        if(document.getElementById("index")) {
            button.children[0].src="assets/sun.png";
        } else {
            button.children[0].src="../assets/sun.png";
        }   
        
    } else {
        document.body.classList.remove(localStorage.getItem("theme"));
        localStorage.setItem("theme","light");
        document.body.classList.add(localStorage.getItem("theme"));
        if(document.getElementById("index")) {
            button.children[0].src="assets/moon.png";
        } else {
            button.children[0].src="../assets/moon.png";
        }   
    }
}

function switchTheme(theme) {
    document.body.classList.toggle(theme);
}

function getThemeLocalStorage() {
    theme = localStorage.getItem("theme");
    switchTheme(theme);
}

button.addEventListener("click", switchLocalStorage);