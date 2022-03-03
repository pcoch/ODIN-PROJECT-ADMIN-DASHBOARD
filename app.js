const darkLightBtn = document.getElementById('dark-light');

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const sidebar = document.querySelector('.sidebar');
const h2 = document.querySelector('h2');
const h1 = document.querySelector('h1');
const cards = document.querySelectorAll('[id=cards]');
const btns = document.querySelectorAll('[id=btn]');
const search = document.querySelector('.search-box');

darkLightBtn.addEventListener('click', () => {

    //toggle css styles
    header.classList.toggle("dark-mode-main");
    main.classList.toggle("dark-mode-main");
    sidebar.classList.toggle("dark-mode-sidebar");
    h2.classList.toggle("dark-mode-header");
    h1.classList.toggle("dark-mode-header");
    search.classList.toggle('dark-mode-search')

    cards.forEach(el => {
        el.classList.toggle('dark-mode-cards');
    })

    btns.forEach(el => {
        el.classList.toggle('dark-mode-btns');
    })

    //toggle light mode / dark mode btn
    toggleLightDark()

});

function toggleLightDark() {
    if (darkLightBtn.innerHTML === "light_mode") {
        darkLightBtn.innerHTML = "dark_mode";
    } else {
        darkLightBtn.innerHTML = "light_mode";
    }
}