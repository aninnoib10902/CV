// Theme Switcher
const themeSwitch = document.querySelector('.theme-switch');
const body = document.body;

// Set dark mode by default
if (!body.classList.contains('dark-mode')) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    const icon = themeSwitch.querySelector('i');
    if (icon) {
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    }
}

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    const icon = themeSwitch.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Progress Bars Animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    let completed = 0;

    progressBars.forEach((bar, index) => {
        const targetPercent = parseInt(bar.getAttribute('data-percent'));
        let currentWidth = 0;

        const interval = setInterval(() => {
            if (currentWidth < targetPercent) {
                currentWidth++;
                bar.style.width = currentWidth + '%';
            } else {
                clearInterval(interval);
                completed++;
                
                if (completed === progressBars.length) {
                    setTimeout(() => {
                        progressBars.forEach(bar => bar.style.width = '0%');
                        setTimeout(() => animateProgressBars(), 100);
                    }, 3000); // Changed to 3000ms (3 seconds)
                }
            }
        }, 20);
    });
}

// Start animation when page loads
window.addEventListener('load', animateProgressBars);

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

// Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});