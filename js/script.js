// Effect slide
const btnToggle = document.querySelector(".btn-toggle")
const navSlider = document.querySelector(".nav-slider")
const navSliderLink = document.querySelectorAll(".nav-slider__link")

btnToggle.addEventListener("click", toggleNav)
navSliderLink.forEach(a => a.addEventListener("click", () => toggleNav()))

function toggleNav() {
    btnToggle.classList.toggle("active")
    navSlider.classList.toggle("active")
}

// Change theme
const iconJ = document.querySelector("#iconJ")
const sun = document.querySelector(".nav-fix__sun")
const moon = document.querySelector(".nav-fix__moon")

const theme = document.querySelectorAll(".theme")
const body = document.querySelector("body")

const modeTxt = document.querySelector(".nav-fix__mode-txt")
const btnTheme = document.querySelector(".nav-fix__btn-theme")

if (localStorage.getItem("theme") === "light") {
    lightMode()
} else {
    darkMode()
}

iconJ.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "dark") {
        lightMode()
    } else {
        darkMode()
    }
})

btnTheme.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "dark") {
        lightMode()
    } else {
        darkMode()
    }
})

function darkMode() {
    sun.classList.remove("hidden")
    moon.classList.add("hidden")
    theme.forEach(a => a.classList.remove("changeColor"))
    body.classList.remove("changeTheme")
    localStorage.setItem("theme", "dark");
    modeTxt.textContent = "Light Mode"
}

function lightMode() {
    sun.classList.add("hidden")
    moon.classList.remove("hidden")
    theme.forEach(a => a.classList.add("changeColor"))
    body.classList.add("changeTheme")
    localStorage.setItem("theme", "light");
    modeTxt.textContent = "Dark Mode"
}

//  Clock
const hours = document.querySelector('.clock__hours');
const minutes = document.querySelector('.clock__minutes');
const seconds = document.querySelector('.clock__seconds');

clock = () => {
    let today = new Date();

    let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
    let m = today.getMinutes(); // 0 - 59
    let s = today.getSeconds(); // 0 - 59

    h *= 30; // 12 * 30 = 360deg
    m *= 6; // 60 * 6 = 360deg
    s *= 6; // 60 * 6 = 360deg

    rotation(hours, h);
    rotation(minutes, m);
    rotation(seconds, s);

    // call every second
    setTimeout(clock, 1000);
}

rotation = (target, val) => {
    target.style.transform = `rotate(${val}deg)`;
}

window.onload = clock();