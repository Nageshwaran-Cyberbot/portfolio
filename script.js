// ===== CUSTOM CURSOR =====
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
});

// Cursor hover effects on interactive elements
document.querySelectorAll('a, button, .nav-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.borderColor = 'var(--matrix-green)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = 'var(--accent)';
    });
});

// ===== SMOOTH SCROLL NAVIGATION =====
document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== MATRIX RAIN EFFECT =====
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters
const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
const fontSize = 14;
let columns = canvas.width / fontSize;

// Array of drops - one per column
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

// Draw the matrix rain
function drawMatrix() {
    // Semi-transparent black to create fade effect
    ctx.fillStyle = 'rgba(30, 30, 30, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Matrix green text
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';
    
    // Loop through drops
    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop to top randomly after it crosses screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        // Increment Y coordinate
        drops[i]++;
    }
}

// Run the animation
setInterval(drawMatrix, 35);

// Update columns on resize
window.addEventListener('resize', () => {
    columns = canvas.width / fontSize;
    drops.length = 0;
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
});

// ===== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ===== TERMINAL TYPING ANIMATION =====
const commands = [
    'whoami',
    'cat about.txt',
    'ls skills/',
    'git status'
];

const outputs = {
    'whoami': 'Full-Stack Developer/ SDE',
    'cat about.txt': 'Building scalable web applications',
    'ls skills/': 'Python/ JavaScript/ C++/ SQL/',
    'git status': 'On branch main - Everything up to date'
};

let commandIndex = 0;
const commandElement = document.querySelector('.typing-animation');
const outputElement = document.querySelector('.terminal-output');

function typeCommand() {
    const command = commands[commandIndex];
    
    if (commandElement && outputElement) {
        commandElement.textContent = command;
        outputElement.textContent = outputs[command];
    }
    
    commandIndex = (commandIndex + 1) % commands.length;
}

// Change terminal command every 4 seconds
setInterval(typeCommand, 4000);

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.getElementById('navbar');
let navbarTicking = false;

window.addEventListener('scroll', () => {
    if (!navbarTicking) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;
            
            // Always show navbar at top
            if (currentScroll <= 0) {
                navbar.style.transform = 'translateY(0)';
                navbarTicking = false;
                return;
            }
            
            // Hide on scroll down, show on scroll up
            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
            navbarTicking = false;
        });
        navbarTicking = true;
    }
});

// ===== PARALLAX EFFECT ON HERO SECTION =====
let parallaxTicking = false;

window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');
            const heroLabel = document.querySelector('.hero-label');
            const terminalWindow = document.querySelector('.terminal-window');
            
            // Only apply parallax in hero section
            if (scrolled < window.innerHeight) {
                if (heroTitle) {
                    heroTitle.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
                    heroTitle.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
                }
                if (heroSubtitle) {
                    heroSubtitle.style.transform = `translate3d(0, ${scrolled * 0.2}px, 0)`;
                    heroSubtitle.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
                }
                if (heroLabel) {
                    heroLabel.style.transform = `translate3d(0, ${scrolled * 0.15}px, 0)`;
                }
                if (terminalWindow) {
                    terminalWindow.style.transform = `translate3d(0, ${scrolled * 0.1}px, 0)`;
                }
            }
            
            parallaxTicking = false;
        });
        parallaxTicking = true;
    }
});

// ===== GLITCH EFFECT ON HERO TITLE =====
const heroTitle = document.querySelector('.hero-title');

if (heroTitle) {
    let glitchInterval;
    
    heroTitle.addEventListener('mouseenter', () => {
        heroTitle.style.animation = 'glitch 0.3s infinite';
        
        // Stop glitch after 2 seconds
        glitchInterval = setTimeout(() => {
            heroTitle.style.animation = 'none';
        }, 2000);
    });
    
    heroTitle.addEventListener('mouseleave', () => {
        clearTimeout(glitchInterval);
        heroTitle.style.animation = 'none';
    });
}

// ===== DYNAMIC GLITCH ANIMATION =====
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% {
            transform: translate(0);
            text-shadow: 0 0 0 transparent;
        }
        20% {
            transform: translate(-2px, 2px);
            text-shadow: 2px 0 #ff6b6b, -2px 0 #00ff41;
        }
        40% {
            transform: translate(-2px, -2px);
            text-shadow: -2px 0 #ff6b6b, 2px 0 #00ff41;
        }
        60% {
            transform: translate(2px, 2px);
            text-shadow: 0 2px #ff6b6b, 0 -2px #00ff41;
        }
        80% {
            transform: translate(2px, -2px);
            text-shadow: 2px 0 #ff6b6b, -2px 0 #00ff41;
        }
        100% {
            transform: translate(0);
            text-shadow: 0 0 0 transparent;
        }
    }
`;
document.head.appendChild(style);

// ===== CONSOLE EASTER EGG =====
console.log('%c🚀 Hey there, fellow developer!', 'color: #ff6b6b; font-size: 20px; font-weight: bold;');
console.log('%c👨‍💻 I see you checking the console. I like your style!', 'color: #00ff41; font-size: 14px;');
console.log('%c💡 Interested in the code? Check out the GitHub repos!', 'color: #f5f5f0; font-size: 12px;');
console.log('%c📧 Want to work together? Reach out at nageshwaran.manikumar@gmail.com', 'color: #f5f5f0; font-size: 12px;');

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== SCROLL PROGRESS INDICATOR =====
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // You can add a progress bar element in HTML and update it here
    // For now, we'll just log it for debugging
    // console.log('Scroll progress:', scrolled + '%');
}

window.addEventListener('scroll', debounce(updateScrollProgress, 10));

// ===== ACCESSIBILITY: REDUCE MOTION =====
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (mediaQuery.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('scroll-behavior', 'auto');
    
    // Stop matrix rain
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
        canvas.style.display = 'none';
    }
}

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== ACTIVE SECTION HIGHLIGHTING =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', debounce(highlightNavigation, 10));

// ===== INITIALIZE =====
console.log('%c✅ Portfolio loaded successfully!', 'color: #00ff41; font-size: 14px; font-weight: bold;');