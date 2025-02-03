// for the scroller
let lastScrollTop = 0;
const header = document.querySelector("header");
const footer = document.querySelector("footer");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // scrolling down
        header.style.transform = "translateY(-100%)"; // hide header
        footer.style.bottom = "0"; // show footer
    } else {
        // scrolling upp
        header.style.transform = "translateY(0)"; // Show header
        footer.style.bottom = "-100px"; // hide footer
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// for the side nav/menu
function toggleNav() {
    const sideNav = document.getElementById("side-nav");
    const mainContent = document.querySelector(".main-content");

    sideNav.classList.toggle("show");
    mainContent.classList.toggle("show-nav-show");
}

document.getElementById("menu-button").addEventListener("click", toggleNav);
document.getElementById("close-nav").addEventListener("click", toggleNav);
document.addEventListener("click", function(event) {
    const sideNav = document.getElementById("side-nav");
    const menuButton = document.getElementById("menu-button");

    if (!sideNav.contains(event.target) && !menuButton.contains(event.target) && sideNav.classList.contains("show")) {
        toggleNav();
    }
});
document.getElementById("menu-button").addEventListener("click", () => {
    console.log("Menu button clicked!");
});
