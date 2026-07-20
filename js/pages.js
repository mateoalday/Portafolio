/* ========================================
   PAGES JS - Page-specific logic
======================================== */
document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // HOME PAGE - Typewriter + Particles + Counters
    // ========================================
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        const roles = [
            'TÉCNICO DE SOPORTE IT',
            'DESARROLLADOR FULL STACK',
            'ESPECIALISTA EN INFRAESTRUCTURA',
            'DESARROLLADOR FRONTEND',
            'DESARROLLADOR BACKEND'
        ];
        let roleIndex = 0, charIndex = 0, isDeleting = false, typeSpeed = 80;

        function typeWriter() {
            const currentRole = roles[roleIndex];
            if (!isDeleting) {
                typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentRole.length) {
                    isDeleting = true;
                    typeSpeed = 2000;
                } else {
                    typeSpeed = 80 + Math.random() * 40;
                }
            } else {
                typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    typeSpeed = 400;
                } else {
                    typeSpeed = 40;
                }
            }
            setTimeout(typeWriter, typeSpeed);
        }
        typeWriter();
    }

    // Floating Particles
    const particlesContainer = document.getElementById('heroParticles');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 6 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.bottom = '-20px';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Counter Animation
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const statNumbers = document.querySelectorAll('.stat-number');
        let countersAnimated = false;

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    statNumbers.forEach(counter => {
                        const target = parseInt(counter.dataset.count);
                        const duration = 2000;
                        const startTime = Date.now();
                        function updateCounter() {
                            const elapsed = Date.now() - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const eased = 1 - Math.pow(1 - progress, 3);
                            counter.textContent = Math.floor(eased * target);
                            if (progress < 1) {
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.textContent = target;
                            }
                        }
                        updateCounter();
                    });
                }
            });
        }, { threshold: 0.5 });
        counterObserver.observe(heroStats);
    }

    // ========================================
    // PROJECTS PAGE - Filter Gallery
    // ========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;

                projectCards.forEach((card, index) => {
                    const category = card.dataset.category;
                    const shouldShow = filter === 'all' || category === filter;
                    if (!shouldShow) {
                        card.classList.add('hiding');
                        card.classList.remove('showing');
                        setTimeout(() => { card.style.display = 'none'; }, 400);
                    } else {
                        card.classList.remove('hiding');
                        card.style.display = '';
                        setTimeout(() => { card.classList.add('showing'); }, index * 80);
                    }
                });
            });
        });
    }

    // ========================================
    // CONTACT PAGE - Form Validation
    // ========================================
    const contactForm = document.getElementById('contactForm');
    const formResult = document.getElementById('formMessageResult');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('formName').value.trim();
            const email = document.getElementById('formEmail').value.trim();
            const message = document.getElementById('formMessage').value.trim();

            formResult.className = 'form-message';
            formResult.style.display = 'none';

            if (!name || name.length < 2) {
                showFormMessage('Por favor, ingresa tu nombre completo.', 'error');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showFormMessage('Por favor, ingresa un email válido.', 'error');
                return;
            }
            if (!message || message.length < 10) {
                showFormMessage('El mensaje debe tener al menos 10 caracteres.', 'error');
                return;
            }

            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Enviando...</span>';
            submitBtn.disabled = true;

            setTimeout(() => {
                showFormMessage('✅ ¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    function showFormMessage(msg, type) {
        if (!formResult) return;
        formResult.textContent = msg;
        formResult.className = 'form-message ' + type;
        formResult.style.display = 'block';
        setTimeout(() => { formResult.style.display = 'none'; }, 5000);
    }

    // ========================================
    // SKILLS PAGE - Code typing animation
    // ========================================
    const codeBody = document.querySelector('.code-body');
    if (codeBody) {
        const codeLines = codeBody.querySelectorAll('.code-line');
        codeLines.forEach((line, i) => {
            line.style.opacity = '0';
            line.style.transform = 'translateX(-10px)';
            line.style.transition = 'all 0.4s ease';
        });

        const codeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    codeLines.forEach((line, i) => {
                        setTimeout(() => {
                            line.style.opacity = '1';
                            line.style.transform = 'translateX(0)';
                        }, i * 120);
                    });
                    codeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        codeObserver.observe(codeBody);
    }
});
