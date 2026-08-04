/*=========================================
    MOBILE HAMBURGER MENU
=========================================*/

const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        const isOpen = navLinks.classList.contains("show");
        menuBtn.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    // close menu when a link is tapped
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    // close menu when resizing up to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 900) {
            navLinks.classList.remove("show");
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
}

/*=========================================
    SCROLL TO TOP BUTTON
=========================================*/

const scrollBtn = document.createElement("div");
scrollBtn.className = "scroll-top";
scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/*=========================================
    ACTIVE NAV LINK ON SCROLL (only runs
    on pages that have <section id="..."> targets)
=========================================*/

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a[href^='#'], .nav-links a[href*='#']");

if (sections.length && navItems.length) {

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 160;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach((link) => {
            link.classList.remove("active");
            const href = link.getAttribute("href") || "";
            if (current && href.endsWith("#" + current)) {
                link.classList.add("active");
            }
        });

    });
}
