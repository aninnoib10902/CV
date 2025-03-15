// Theme Switcher
const themeSwitch = document.querySelector('.theme-switch');
const body = document.body;

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    const icon = themeSwitch.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Progress Bars Animation
const animateProgressBars = () => {
    document.querySelectorAll('.progress').forEach(progress => {
        progress.style.width = `${progress.getAttribute('data-percent')}%`;
    });
};

// Intersection Observer for progress bars
const observer = new IntersectionObserver(entries => 
    entries.forEach(entry => {
        if (entry.isIntersecting) animateProgressBars();
    })
);

const skillsSection = document.querySelector('#habilidades');
if (skillsSection) observer.observe(skillsSection);

// Navigation Menu
let menuVisible = false;

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.style.display = menuVisible ? "none" : "block";
    menuVisible = !menuVisible;
}

// Close menu when clicking outside
document.addEventListener('click', e => {
    const nav = document.getElementById('nav');
    const navBar = document.querySelector('.nav-bar');
    if (!nav.contains(e.target) && !navBar.contains(e.target)) {
        nav.style.display = "none";
        menuVisible = false;
    }
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Mensaje enviado correctamente!');
        contactForm.reset();
    });
}