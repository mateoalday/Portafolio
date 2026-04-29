/* ========================================
   GLOBAL JS - Shared across all pages
======================================== */
document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // 1. THEME TOGGLE
    // ========================================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeIcon.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    }

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        themeIcon.textContent = newTheme === 'light' ? '☀️' : '🌙';
        themeIcon.style.transform = 'rotate(360deg)';
        setTimeout(() => { themeIcon.style.transform = ''; }, 500);
    });

    // ========================================
    // 2. SCROLL PROGRESS BAR
    // ========================================
    const scrollProgress = document.getElementById('scrollProgress');

    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
            scrollProgress.style.width = (scrollTop / docHeight) * 100 + '%';
        }
    }

    // ========================================
    // 3. NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.getElementById('navbar');

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Combined scroll handler
    window.addEventListener('scroll', () => {
        updateScrollProgress();
        updateNavbar();
    }, { passive: true });

    // ========================================
    // 4. SCROLL REVEAL (Intersection Observer)
    // ========================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Animate skill bars if inside
                const skillFills = entry.target.querySelectorAll('.skill-fill');
                skillFills.forEach((fill, index) => {
                    setTimeout(() => {
                        fill.style.width = fill.dataset.width + '%';
                    }, index * 150);
                });
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ========================================
    // 5. MOBILE MENU
    // ========================================
    const hamburger = document.getElementById('navHamburger');
    const navLinksContainer = document.getElementById('navLinks');

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinksContainer.classList.toggle('open');
        });

        navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinksContainer.classList.remove('open');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && navLinksContainer.classList.contains('open')) {
                hamburger.classList.remove('active');
                navLinksContainer.classList.remove('open');
            }
        });
    }

    // ========================================
    // 6. SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ========================================
    // 7. ACTIVE NAV LINK BASED ON CURRENT PAGE
    // ========================================
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith('/') && (href === '../index.html' || href === 'index.html' || href === './')) {
            // on home
        } else if (href && currentPath.includes(href.replace('../', '').replace('./', ''))) {
            link.classList.add('active');
        }
    });
});
