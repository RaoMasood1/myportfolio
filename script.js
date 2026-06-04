// ==================== Hamburger Menu ==================== //
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==================== Smooth Scroll Navigation ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==================== Active Navigation Link ==================== //
const updateActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
};

updateActiveNavLink();

// ==================== Intersection Observer for Animations ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ==================== Form Submission ==================== //
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const btn = this.querySelector('.btn-submit');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        
        const formData = new FormData(this);
        const actionUrl = this.getAttribute('action');
        
        try {
            // Agar Formspree id setup hy toh email background main send karega
            if (actionUrl && !actionUrl.includes('YOUR_FORM_ID_HERE')) {
                const response = await fetch(actionUrl, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                
                if (!response.ok) throw new Error("Network response error");
                
                btn.textContent = '✓ Message Sent!';
                btn.style.background = '#27ae60';
                this.reset();
            } else {
                // Jab tak ID setup nahi hogi tb tk popup show kryga msg
                alert("Emails will start working once you add your Formspree ID to index.html (action URL)!");
                btn.textContent = '✓ Message Sent! (Simulated)';
                btn.style.background = '#27ae60';
                this.reset();
            }
        } catch (error) {
            btn.textContent = '❌ Error Sending';
            btn.style.background = '#e74c3c';
        }
        
        // Reset button after 3 seconds
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    });
}

// ==================== Navbar Background on Scroll ==================== //
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(44, 62, 80, 0.99)';
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'rgba(44, 62, 80, 0.98)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
    }
});

// ==================== Scroll to Top Button ==================== //
const createScrollToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #1E88E5 0%, #0099ff 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 30px rgba(30, 136, 229, 0.3);
        transition: all 0.3s ease;
        z-index: 999;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
};

createScrollToTop();

// ==================== Lazy Loading Images ==================== //
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[src*="placeholder"]');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });
};

lazyLoadImages();

// ==================== Responsive Menu Toggle ==================== //
const handleResize = () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
};

window.addEventListener('resize', handleResize);

// ==================== Keyboard Navigation ==================== //
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ==================== Initialize on Load ==================== //
window.addEventListener('load', () => {
    console.log('Portfolio website loaded successfully!');
    
    // Add animation delay to fade-in elements
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el, index) => {
        el.style.setProperty('--delay', `${index * 0.1}s`);
    });
});

// ==================== Add CSS for animations ==================== //
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        animation: fadeInUp 0.8s ease-out forwards;
        animation-delay: var(--delay, 0s);
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
