// Smooth scrolling and navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing animation for hero section
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const fullText = "Ethical Hacker & Cybersecurity Enthusiast";
    let currentIndex = 0;
    
    function typeWriter() {
        if (currentIndex < fullText.length) {
            typingText.textContent += fullText.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 1000);
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    navLinks.classList.toggle('active');
    mobileBtn.classList.toggle('active');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.glass-card, .skill-card, .project-card, .stat-card, .soft-skill');
    animatedElements.forEach(el => observer.observe(el));
});

// Contact form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.form-submit');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            // Show loading state
            btnText.style.display = 'none';
            btnLoading.style.display = 'flex';
            submitBtn.disabled = true;
            
            // Simulate form submission
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Show success message
                showToast('Message Sent!', 'Thank you for reaching out. I\'ll get back to you within 24 hours.', 'success');
                
                // Reset form
                contactForm.reset();
                
            } catch (error) {
                showToast('Error', 'Something went wrong. Please try again.', 'error');
            } finally {
                // Reset button state
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
    }
});

// Toast notification system
function showToast(title, message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add toast styles if not already present
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            .toast {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--card);
                border: 1px solid var(--border);
                border-radius: 0.5rem;
                padding: 1rem;
                box-shadow: var(--shadow-card);
                z-index: 10000;
                display: flex;
                align-items: flex-start;
                gap: 1rem;
                max-width: 400px;
                animation: slideInRight 0.3s ease-out;
            }
            
            .toast-success {
                border-left: 4px solid var(--cyber-green);
            }
            
            .toast-error {
                border-left: 4px solid #ef4444;
            }
            
            .toast-content {
                flex: 1;
            }
            
            .toast-title {
                font-weight: 600;
                color: var(--foreground);
                margin-bottom: 0.25rem;
            }
            
            .toast-message {
                font-size: 0.875rem;
                color: var(--muted-foreground);
                line-height: 1.4;
            }
            
            .toast-close {
                background: none;
                border: none;
                color: var(--muted-foreground);
                font-size: 1.25rem;
                cursor: pointer;
                padding: 0;
                width: 1.5rem;
                height: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: var(--transition-smooth);
            }
            
            .toast-close:hover {
                color: var(--foreground);
            }
            
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to DOM
    document.body.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Glowing effect on hover for cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card, .skill-card, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('glow-hover');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('glow-hover');
        });
    });
});

// Terminal cursor blinking effect
document.addEventListener('DOMContentLoaded', () => {
    const terminalCursors = document.querySelectorAll('.cursor-terminal');
    
    terminalCursors.forEach(cursor => {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    });
});

// Lazy loading for images (if you add real images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileBtn.classList.remove('active');
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 16)); // ~60fps

// Add mobile menu styles
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100vh;
                background: var(--background);
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 2rem;
                transition: left 0.3s ease;
                z-index: 999;
            }
            
            .nav-links.active {
                left: 0;
            }
            
            .nav-links a {
                font-size: 1.5rem;
                font-weight: 600;
            }
            
            .mobile-menu-btn.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-btn.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `;
    document.head.appendChild(style);
});

// Console greeting message
console.log(`
    ██████╗██╗   ██╗██████╗ ███████╗██████╗ ███████╗███████╗ ██████╗
    ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝
    ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝███████╗█████╗  ██║     
    ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗╚════██║██╔══╝  ██║     
    ╚██████╗   ██║   ██████╔╝███████╗██║  ██║███████║███████╗╚██████╗
     ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝
                                                                       
    👋 Hello there! Welcome to my cybersecurity portfolio.
    🔍 Feel free to explore the code and let me know if you find any vulnerabilities!
    📧 Contact: alex.chen@cybersec.dev
    🚨 Remember: Always hack ethically and responsibly!
`);

// Add some security headers simulation (for demonstration)
console.log("🔒 Security Headers Enabled:");
console.log("• Content Security Policy: Enabled");
console.log("• X-Frame-Options: DENY");
console.log("• X-XSS-Protection: 1; mode=block");
console.log("• X-Content-Type-Options: nosniff");
console.log("• Strict-Transport-Security: max-age=31536000");

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode = konamiCode.slice(-konamiSequence.length);
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        showToast(
            '🎉 Konami Code Activated!', 
            'You found the easter egg! You must be a real hacker 😉', 
            'success'
        );
        
        // Add special effect
        document.body.style.animation = 'glowPulse 2s ease-in-out 3';
        
        konamiCode = [];
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio initialized successfully!');
    console.log('🛡️ All security measures active.');
    console.log('💻 Ready for ethical hacking discussions!');
});