let lastScrollTop = 0;
const header = document.querySelector("header");
const footer = document.querySelector("footer");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // scrolling Down
        header.style.transform = "translateY(-100%)"; // hide header
        footer.style.bottom = "0"; // Show footer
    } else {
        // scrolling Up
        header.style.transform = "translateY(0)"; // Show header
        footer.style.bottom = "-100px"; // hide footer
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
