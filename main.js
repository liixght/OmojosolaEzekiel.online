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

// Enhanced header animation
document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.getElementById('animatedHeaderTitle');
    const headerText = document.querySelector('.header-text');

    if (headerText) {
        headerText.style.opacity = '0';
        headerText.style.transform = 'translateY(40px)';
        headerText.style.transition = 'opacity 0.6s, transform 0.6s';
    }

    if (titleElement) {
        const originalText = titleElement.textContent.trim();
        titleElement.textContent = '';

        const animatedContainer = document.createElement('span');
        animatedContainer.style.display = 'inline-block';
        animatedContainer.style.position = 'relative';
        animatedContainer.style.opacity = '0';
        titleElement.appendChild(animatedContainer);

        const letterSpans = [];
        for (let i = 0; i < originalText.length; i++) {
            const span = document.createElement('span');
            span.textContent = originalText[i] === ' ' ? '\u00A0' : originalText[i];
            span.style.opacity = '0';
            span.style.transition = 'opacity 0.3s';
            animatedContainer.appendChild(span);
            letterSpans.push(span);
        }

        let i = 0;
        const speed = 150;
        function fadeInLetter() {
            if (i < letterSpans.length) {
                letterSpans[i].style.opacity = '1';
                i++;
                setTimeout(fadeInLetter, speed);
            }
        }

        setTimeout(function() {
            animatedContainer.style.opacity = '1';
            fadeInLetter();
            if (headerText) {
                setTimeout(function() {
                    headerText.style.opacity = '1';
                    headerText.style.transform = 'translateY(0)';
                }, speed * letterSpans.length + 200);
            }
        }, 100);
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

// SLIDER FUNCTIONALITY FOR MOBILE
function initSlider() {
    const slides = document.querySelectorAll('.slider-slide');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    let current = 0;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
    }

    function handleResize() {
        if (window.innerWidth <= 768) {
            showSlide(current);
        } else {
            slides.forEach(slide => slide.classList.add('active'));
        }
    }

    if (prevBtn && nextBtn) {
        prevBtn.onclick = function() {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        };
        nextBtn.onclick = function() {
            current = (current + 1) % slides.length;
            showSlide(current);
        };
    }

    window.addEventListener('resize', handleResize);
    handleResize();
}

// TOGGLE FUNCTIONALITY FOR ABOUT/QUALIFICATIONS
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
        } else {
            aboutSection.classList.remove('active');
            qualificationsSection.classList.add('active');
            aboutBtn.classList.remove('active');
            qualificationsBtn.classList.add('active');
        }
    }

    aboutBtn.addEventListener('click', function() {
        showSection('about');
    });
    qualificationsBtn.addEventListener('click', function() {
        showSection('qualifications');
    });

    // On mobile, show both expanded by default
    function handleResize() {
        if (window.innerWidth <= 768) {
            aboutSection.classList.add('active');
            qualificationsSection.classList.add('active');
            aboutBtn.classList.remove('active');
            qualificationsBtn.classList.remove('active');
        } else {
            showSection('about');
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
}

document.addEventListener('DOMContentLoaded', function() {
    initToggleSections();
});
document.addEventListener('DOMContentLoaded', function() {
    initSlider();
});
