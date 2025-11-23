/**
 * SVCE MUN 2026 - Main JavaScript
 * Handles countdown, navigation, animations, and interactivity
 */

// ==================== CONFIGURATION ====================
// TODO: Update these values before deployment

const CONFIG = {
    // Event date and time (IST timezone)
    EVENT_DATETIME: '2026-01-30T09:00:00+05:30',

    // Registration URL (update with actual Google Form or registration page)
    REGISTER_URL: 'https://forms.google.com/your-registration-form',

    // Reduced motion preference
    respectReducedMotion: true
};

// ==================== UTILITY FUNCTIONS ====================

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion() {
    return CONFIG.respectReducedMotion &&
           window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Smooth scroll to element
 */
function smoothScrollTo(elementId) {
    const element = document.querySelector(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Add animation class if motion is allowed
 */
function addAnimation(element, animationClass) {
    if (!prefersReducedMotion()) {
        element.classList.add(animationClass);
    }
}

// ==================== COUNTDOWN TIMER ====================

let countdownInterval;
let previousValues = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null
};

function updateCountdown() {
    const eventDate = new Date(CONFIG.EVENT_DATETIME);
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        // Event has started or passed
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update with animation
    updateCountdownElement('days', days);
    updateCountdownElement('hours', hours);
    updateCountdownElement('minutes', minutes);
    updateCountdownElement('seconds', seconds);
}

function updateCountdownElement(id, value) {
    const element = document.getElementById(id);
    const formattedValue = String(value).padStart(2, '0');

    // Only animate if value changed and motion is allowed
    if (previousValues[id] !== formattedValue) {
        if (!prefersReducedMotion()) {
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
        element.textContent = formattedValue;
        previousValues[id] = formattedValue;
    }
}

// ==================== NAVBAR ====================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Exit early if required elements don't exist
    if (!navbar) {
        console.warn('Navbar element not found - skipping navbar initialization');
        return;
    }

    // Only initialize mobile menu if elements exist
    if (!mobileMenuBtn || !mobileMenu) {
        console.warn('Mobile menu elements not found - skipping mobile menu initialization');
    }

    const menuIcon = mobileMenuBtn?.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn?.querySelector('.close-icon');

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('bg-main-black', 'bg-opacity-95', 'backdrop-blur-md', 'shadow-lg');
        } else {
            navbar.classList.remove('bg-main-black', 'bg-opacity-95', 'backdrop-blur-md', 'shadow-lg');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle (only if elements exist)
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('hidden');

            if (isOpen) {
                mobileMenu.classList.remove('hidden');
                menuIcon?.classList.add('hidden');
                closeIcon?.classList.remove('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon?.classList.remove('hidden');
                closeIcon?.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon?.classList.remove('hidden');
                closeIcon?.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });
}

// ==================== REGISTRATION BUTTONS ====================

function initRegistrationButtons() {
    const registerButtons = [
        document.getElementById('register-btn-nav'),
        document.getElementById('register-btn-mobile'),
        document.getElementById('register-btn-hero')
    ];

    registerButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(CONFIG.REGISTER_URL, '_blank');
            });
        }
    });
}

// ==================== ITINERARY TABS ====================

function initItineraryTabs() {
    const dayTabs = document.querySelectorAll('.day-tab');
    const day1Timeline = document.getElementById('day1-timeline');
    const day2Timeline = document.getElementById('day2-timeline');

    dayTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            dayTabs.forEach(t => {
                t.classList.remove('active', 'bg-gold', 'text-main-black');
                t.classList.add('text-light-text');
            });

            // Add active class to clicked tab
            tab.classList.add('active', 'bg-gold', 'text-main-black');
            tab.classList.remove('text-light-text');

            // Show/hide timelines
            const selectedDay = tab.dataset.day;
            if (selectedDay === 'day1') {
                day1Timeline.classList.remove('hidden');
                day2Timeline.classList.add('hidden');
            } else {
                day1Timeline.classList.add('hidden');
                day2Timeline.classList.remove('hidden');
            }
        });
    });

    // Set initial active state
    if (dayTabs.length > 0) {
        dayTabs[0].classList.add('active', 'bg-gold', 'text-main-black');
        dayTabs[0].classList.remove('text-light-text');
    }
}

// ==================== FAQ ACCORDION ====================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    otherAnswer.style.maxHeight = '0px';
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current item
            if (isOpen) {
                answer.style.maxHeight = '0px';
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// ==================== TEAM CARD FLIP ====================

function initTeamCards() {
    const teamCards = document.querySelectorAll('.team-card');

    teamCards.forEach(card => {
        const isTouchDevice = 'ontouchstart' in window;

        if (isTouchDevice) {
            // Mobile: tap to flip
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        } else {
            // Desktop: hover to flip
            card.addEventListener('mouseenter', () => {
                if (!prefersReducedMotion()) {
                    card.classList.add('flipped');
                }
            });
            card.addEventListener('mouseleave', () => {
                if (!prefersReducedMotion()) {
                    card.classList.remove('flipped');
                }
            });
        }
    });
}

// ==================== SCROLL ANIMATIONS ====================

function initScrollAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined' && !prefersReducedMotion()) {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 100,
            disable: prefersReducedMotion()
        });
    }
}

// ==================== SMOOTH SCROLL BEHAVIOR ====================

function initSmoothScroll() {
    // Fallback for browsers that don't support scroll-behavior: smooth
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });
}

// ==================== FOCUS MANAGEMENT (ACCESSIBILITY) ====================

function initAccessibility() {
    // Add focus-visible polyfill behavior
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('user-is-tabbing');
    });

    // Trap focus in mobile menu when open
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenuBtn.click();
        }
    });
}

// ==================== PERFORMANCE OPTIMIZATION ====================

function initLazyLoading() {
    // Lazy load images with loading="lazy" attribute (already in HTML)
    // Additional lazy loading can be implemented here if needed

    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    console.log('SVCE MUN 2026 - Initializing...');

    // Initialize countdown timer
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);

    // Initialize all features
    initNavbar();
    initRegistrationButtons();
    initItineraryTabs();
    initFAQ();
    initTeamCards();
    initScrollAnimations();
    initSmoothScroll();
    initAccessibility();
    initLazyLoading();

    console.log('SVCE MUN 2026 - Initialized successfully!');
    console.log('Event Date:', CONFIG.EVENT_DATETIME);
    console.log('Reduced Motion:', prefersReducedMotion());
});

// ==================== ERROR HANDLING ====================

window.addEventListener('error', (e) => {
    console.error('Runtime error:', e.error);
});

// ==================== PERFORMANCE MONITORING ====================

if ('PerformanceObserver' in window) {
    // Monitor loading performance
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page loaded in ${pageLoadTime}ms`);
        }, 0);
    });
}

// Export for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG,
        updateCountdown,
        prefersReducedMotion,
        smoothScrollTo
    };
}
