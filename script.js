// NEOPACK Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initAIDesigner();
    initProductFilters();
    initTestimonials();
    initContactForm();
    initAIChat();
    initAnimations();
    initMobileMenu();
    
    // Show page after loading
    document.body.classList.add('loaded');
});

// Navigation functionality
function initNavigation() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
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
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

// AI Designer functionality
function initAIDesigner() {
    const styleButtons = document.querySelectorAll('.style-btn');
    const colorOptions = document.querySelectorAll('.color-option');
    const generateBtn = document.querySelector('.generate-btn');
    const previewCup = document.querySelector('.preview-cup');
    const designDescription = document.querySelector('.design-description');
    
    // Style button selection
    styleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            styleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updatePreview();
        });
    });
    
    // Color selection
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(o => o.style.borderColor = 'transparent');
            option.style.borderColor = 'var(--primary-blue)';
            updatePreview();
        });
    });
    
    // Generate design
    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            generateDesign();
        });
    }
    
    // Real-time preview update
    if (designDescription) {
        designDescription.addEventListener('input', updatePreview);
    }
    
    function updatePreview() {
        const activeStyle = document.querySelector('.style-btn.active');
        const selectedColor = document.querySelector('.color-option[style*="border-color"]');
        const description = designDescription ? designDescription.value : '';
        
        if (previewCup) {
            // Update cup appearance based on selections
            const cupBody = previewCup.querySelector('.cup-body-preview');
            if (cupBody) {
                // Apply different gradients based on style
                if (activeStyle && activeStyle.dataset.style === 'modern') {
                    cupBody.style.background = 'linear-gradient(135deg, var(--primary-blue), var(--primary-green))';
                } else if (activeStyle && activeStyle.dataset.style === 'vintage') {
                    cupBody.style.background = 'linear-gradient(135deg, #8B4513, #D2691E)';
                } else if (activeStyle && activeStyle.dataset.style === 'minimal') {
                    cupBody.style.background = 'linear-gradient(135deg, #F5F5F5, #E0E0E0)';
                } else if (activeStyle && activeStyle.dataset.style === 'colorful') {
                    cupBody.style.background = 'linear-gradient(135deg, #FF6B6B, #4ECDC4)';
                }
                
                // Update text content based on description
                const previewText = cupBody.querySelector('.preview-text');
                if (previewText) {
                    if (description) {
                        previewText.textContent = description.substring(0, 20) + (description.length > 20 ? '...' : '');
                    } else {
                        previewText.textContent = 'NEOPACK';
                    }
                }
            }
        }
    }
    
    function generateDesign() {
        const generateBtn = document.querySelector('.generate-btn');
        const originalText = generateBtn.innerHTML;
        
        // Show loading state
        generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التصميم...';
        generateBtn.disabled = true;
        
        // Simulate AI generation
        setTimeout(() => {
            generateBtn.innerHTML = '<i class="fas fa-check"></i> تم التصميم!';
            
            // Show success animation
            if (previewCup) {
                previewCup.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    previewCup.style.transform = 'scale(1)';
                }, 300);
            }
            
            // Reset button after 2 seconds
            setTimeout(() => {
                generateBtn.innerHTML = originalText;
                generateBtn.disabled = false;
            }, 2000);
        }, 2000);
    }
}

// Product filters
function initProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter products
            productCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Product card hover effects
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Testimonials functionality
function initTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    
    // Add hover effects
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', () => {
            testimonial.style.transform = 'translateY(-5px)';
        });
        
        testimonial.addEventListener('mouseleave', () => {
            testimonial.style.transform = 'translateY(0)';
        });
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> تم الإرسال!';
                
                // Show success message
                showNotification('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            }, 2000);
        });
    }
}

// AI Chat functionality
function initAIChat() {
    const chatToggle = document.querySelector('.chat-toggle');
    const chatContainer = document.querySelector('.chat-container');
    const closeChat = document.querySelector('.close-chat');
    const chatInput = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');
    
    // Toggle chat
    if (chatToggle) {
        chatToggle.addEventListener('click', () => {
            chatContainer.classList.toggle('active');
        });
    }
    
    // Close chat
    if (closeChat) {
        closeChat.addEventListener('click', () => {
            chatContainer.classList.remove('active');
        });
    }
    
    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, 'user');
            chatInput.value = '';
            
            // Simulate AI response
            setTimeout(() => {
                const aiResponse = generateAIResponse(message);
                addMessage(aiResponse, 'ai');
            }, 1000);
        }
    }
    
    // Send button click
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }
    
    // Enter key press
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const icon = sender === 'ai' ? 'fas fa-robot' : 'fas fa-user';
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <i class="${icon}"></i>
                <p>${text}</p>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function generateAIResponse(userMessage) {
        const responses = [
            'أهلاً! كيف يمكنني مساعدتك في تصميم كوبك المثالي؟',
            'ممتاز! يمكنني مساعدتك في اختيار الألوان والتصميم المناسب.',
            'هل تريد كوب للكافيه أم للمناسبات؟',
            'أقترح عليك التصميم العصري مع ألوان NEOPACK.',
            'يمكنني إنشاء تصميم مخصص لك في دقائق!',
            'هل تريد رؤية بعض الأمثلة على التصاميم؟'
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Animations
function initAnimations() {
    // Intersection Observer for scroll animations
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
    const animateElements = document.querySelectorAll('.product-card, .testimonial, .step, .feature');
    animateElements.forEach(el => observer.observe(el));
    
    // Floating animation for cup
    const cup3d = document.querySelector('.cup-3d');
    if (cup3d) {
        setInterval(() => {
            cup3d.style.transform = 'translateY(-10px) rotateY(5deg)';
            setTimeout(() => {
                cup3d.style.transform = 'translateY(0) rotateY(0deg)';
            }, 1000);
        }, 3000);
    }
}

// Mobile menu
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary-green)' : 'var(--primary-blue)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Statistics counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('K') ? 'K+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = counter.textContent.replace(/[^\d]/g, '') + (counter.textContent.includes('K') ? 'K+' : '');
            }
        };
        
        updateCounter();
    });
}

// Initialize counter animation when in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('button, .cta-button').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.disabled) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        }
    });
});

// Add hover effects to interactive elements
document.querySelectorAll('.product-card, .testimonial, .step, .feature').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Initialize tooltips for social media links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        const title = this.getAttribute('title');
        if (title) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = title;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 0.5rem;
                border-radius: 5px;
                font-size: 0.8rem;
                z-index: 1000;
                pointer-events: none;
                white-space: nowrap;
            `;
            
            this.appendChild(tooltip);
        }
    });
    
    link.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    
    if (hero && heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Initialize form validation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#ef4444';
                
                // Reset border color after 3 seconds
                setTimeout(() => {
                    field.style.borderColor = '';
                }, 3000);
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        }
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key to close chat
    if (e.key === 'Escape') {
        const chatContainer = document.querySelector('.chat-container');
        if (chatContainer && chatContainer.classList.contains('active')) {
            chatContainer.classList.remove('active');
        }
    }
    
    // Enter key to submit forms
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = e.target.closest('form');
        if (form) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.click();
            }
        }
    }
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add service worker for offline functionality (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for global access
window.NEOPACK = {
    showNotification,
    initAIDesigner,
    initProductFilters,
    initAIChat
}; 