// Enhanced mobile menu functionality
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

function closeMenu() {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.remove('active');
    toggle.classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    if (!navbar.contains(event.target)) {
        closeMenu();
    }
});



// Enhanced 3D hover effects with better performance
document.addEventListener('DOMContentLoaded', function() {
    const aboutDiv = document.getElementById('about');
    const qualificationsDiv = document.getElementById('qualifications');

    function handleMouseMove(event, element) {
        if (!element || window.innerWidth <= 768) return;

        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        const rotateY = (x / (rect.width / 2)) * 8;
        const rotateX = (y / (rect.height / 2)) * -8;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    }

    function resetTransform(element) {
        if (!element) return;
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }

    let isHovering = false;

    [aboutDiv, qualificationsDiv].forEach(div => {
        if (div) {
            div.addEventListener('mouseenter', () => isHovering = true);
            div.addEventListener('mouseleave', () => {
                isHovering = false;
                resetTransform(div);
            });
            
            div.addEventListener('mousemove', (event) => {
                if (isHovering) {
                    requestAnimationFrame(() => handleMouseMove(event, div));
                }
            });
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});  

// TOGGLE/SLIDER FUNCTIONALITY FOR ABOUT/QUALIFICATIONS
function initToggleSections() {
    const aboutBtn = document.getElementById('about-btn');
    const qualificationsBtn = document.getElementById('qualifications-btn');
    const aboutSection = document.getElementById('about');
    const qualificationsSection = document.getElementById('qualifications');
    
    function showSection(section) {
        if (section === 'about') {
            aboutSection.classList.add('active');
            qualificationsSection.classList.remove('active');
            aboutBtn.classList.add('active');
            qualificationsBtn.classList.remove('active');
        } else { // 'qualifications'
            aboutSection.classList.remove('active');
            qualificationsSection.classList.add('active');
            aboutBtn.classList.remove('active');
            qualificationsBtn.classList.add('active');
        }
    }

    if(aboutBtn && qualificationsBtn) {
        aboutBtn.addEventListener('click', function() {
            showSection('about');
        });
        qualificationsBtn.addEventListener('click', function() {
            showSection('qualifications');
        });
    }

    function handleResize() {
        if (window.innerWidth <= 768) {
            // On mobile, it's a slider, default to 'about'
            showSection('about');
        } else {
            // On desktop, both sections are visible.
            if(aboutSection && qualificationsSection) {
                aboutSection.classList.add('active');
                qualificationsSection.classList.add('active');
            }
            // Set default button state for other potential uses, though buttons are hidden.
            if(aboutBtn && qualificationsBtn) {
                aboutBtn.classList.add('active');
                qualificationsBtn.classList.remove('active');
            }
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
}

document.addEventListener('DOMContentLoaded', function() {
    initToggleSections();
});
