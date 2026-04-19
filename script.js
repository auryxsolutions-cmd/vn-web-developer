// MENU MOBILE
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// HEADER AO ROLAR
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// BOTÃO TOPO
const btnTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {
    btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ANIMAÇÃO AO SCROLL
const elements = document.querySelectorAll(".section, .projeto");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});
