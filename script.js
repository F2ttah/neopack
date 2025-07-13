// ضبط الشعار
function setupLogo() {
    const logoImage = document.querySelector('.logo-image');
    const logoIcon = document.querySelector('.logo-icon');
    
    // التحقق من وجود الشعار
    logoImage.addEventListener('load', function() {
        // الشعار موجود - إخفاء الأيقونة
        logoIcon.style.display = 'none';
        console.log('✅ تم تحميل الشعار بنجاح');
    });
    
    logoImage.addEventListener('error', function() {
        // الشعار غير موجود - إظهار الأيقونة
        this.style.display = 'none';
        logoIcon.style.display = 'flex';
        console.log('⚠️ لم يتم العثور على الشعار، تم استخدام الأيقونة المؤقتة');
    });
}

// تشغيل ضبط الشعار عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    setupLogo();
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
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

// AI Designer Functionality
const styleButtons = document.querySelectorAll('.style-btn');
const colorOptions = document.querySelectorAll('.color-option');
const generateBtn = document.querySelector('.generate-btn');
const previewText = document.querySelector('.preview-text');
const designDescription = document.querySelector('.design-description');

// Style button functionality
styleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        styleButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updatePreview();
    });
});

// Color option functionality
colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        colorOptions.forEach(o => o.style.borderColor = 'transparent');
        option.style.borderColor = '#000879C';
        updatePreview();
    });
});

// Generate design functionality
generateBtn.addEventListener('click', () => {
    const description = designDescription.value;
    if (!description.trim()) {
        alert('يرجى إدخال وصف للتصميم');
        return;
    }
    
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التصميم...';
    generateBtn.disabled = true;
    
    // Simulate AI generation
    setTimeout(() => {
        const designs = [
            'NEOPACK',
            'كوفي شوب',
            'شركة التقنية',
            'مطعم الشرق',
            'صالون التجميل'
        ];
        
        const randomDesign = designs[Math.floor(Math.random() * designs.length)];
        previewText.textContent = randomDesign;
        
        generateBtn.innerHTML = '<i class="fas fa-magic"></i> أنشئ التصميم بالذكاء الاصطناعي';
        generateBtn.disabled = false;
        
        // Add success animation
        const previewCup = document.querySelector('.cup-body-preview');
        previewCup.style.transform = 'scale(1.1)';
        setTimeout(() => {
            previewCup.style.transform = 'scale(1)';
        }, 300);
        
        showNotification('تم إنشاء التصميم بنجاح! 🎨');
    }, 2000);
});

function updatePreview() {
    const activeStyle = document.querySelector('.style-btn.active').dataset.style;
    const selectedColor = document.querySelector('.color-option[style*="border-color"]');
    
    // Update preview based on selections
    const previewCup = document.querySelector('.cup-body-preview');
    
    if (activeStyle === 'modern') {
        previewCup.style.background = 'linear-gradient(135deg, #000879C, #5DBA26)';
    } else if (activeStyle === 'vintage') {
        previewCup.style.background = 'linear-gradient(135deg, #536462, #8B7355)';
    } else if (activeStyle === 'minimal') {
        previewCup.style.background = 'linear-gradient(135deg, #DFDFDF, #B0B0B0)';
    } else if (activeStyle === 'colorful') {
        previewCup.style.background = 'linear-gradient(135deg, #5DBA26, #FF6B6B)';
    }
}

// Products Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
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

// Customize buttons
document.querySelectorAll('.customize-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('#ai-designer').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Preview controls
const previewButtons = document.querySelectorAll('.preview-btn');
const previewCup = document.querySelector('.preview-cup');

previewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        previewButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const view = btn.dataset.view;
        
        if (view === 'front') {
            previewCup.style.transform = 'rotateY(0deg)';
        } else if (view === 'back') {
            previewCup.style.transform = 'rotateY(180deg)';
        } else if (view === 'side') {
            previewCup.style.transform = 'rotateY(90deg)';
        }
    });
});

// Action buttons
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.classList.contains('edit') ? 'تعديل' : 
                      btn.classList.contains('save') ? 'حفظ' : 'طلب';
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري...';
        btn.disabled = true;
        
        setTimeout(() => {
            if (action === 'حفظ') {
                showNotification('تم حفظ التصميم بنجاح! 💾');
            } else if (action === 'طلب') {
                document.querySelector('#contact').scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            btn.disabled = false;
            btn.innerHTML = btn.classList.contains('edit') ? '<i class="fas fa-edit"></i> تعديل' :
                           btn.classList.contains('save') ? '<i class="fas fa-save"></i> حفظ التصميم' :
                           '<i class="fas fa-shopping-cart"></i> اطلب الآن';
        }, 1500);
    });
});

// AI Chat Widget
const chatToggle = document.querySelector('.chat-toggle');
const chatContainer = document.querySelector('.chat-container');
const closeChat = document.querySelector('.close-chat');
const chatInput = document.querySelector('.chat-input input');
const sendBtn = document.querySelector('.send-btn');
const chatMessages = document.querySelector('.chat-messages');

chatToggle.addEventListener('click', () => {
    chatContainer.classList.toggle('active');
});

closeChat.addEventListener('click', () => {
    chatContainer.classList.remove('active');
});

function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'ai'}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    const icon = document.createElement('i');
    icon.className = isUser ? 'fas fa-user' : 'fas fa-robot';
    
    const textP = document.createElement('p');
    textP.textContent = text;
    
    messageContent.appendChild(icon);
    messageContent.appendChild(textP);
    messageDiv.appendChild(messageContent);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    addMessage(message, true);
    chatInput.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const responses = [
            'أهلاً! كيف يمكنني مساعدتك في تصميم كوبك؟',
            'ممتاز! ما هو نوع الكوب الذي تريده؟',
            'يمكنني مساعدتك في اختيار الألوان والتصميم المناسب',
            'هل تريد كوب للكافيه أم للمناسبات؟',
            'أقترح عليك التصميم العصري مع الألوان الزرقاء'
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, false);
    }, 1000);
}

// Scroll animations
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

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// CTA Button click handler
document.querySelector('.cta-button.primary').addEventListener('click', () => {
    document.querySelector('#ai-designer').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form submission handler
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = this.querySelector('input[type="text"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const cupType = this.querySelector('select').value;
    const details = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !phone || !email || !cupType || !details) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('تم إرسال طلبك بنجاح! سنتواصل معك قريباً. 📧');
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.ai-cup-showcase');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add hover effects to product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// WhatsApp button enhancement
document.querySelector('.contact-btn.whatsapp').addEventListener('click', function(e) {
    // Add click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 2rem 0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
    
    .loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
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

// Add floating animation to features
document.querySelectorAll('.feature').forEach((feature, index) => {
    feature.style.animationDelay = `${index * 0.2}s`;
    feature.classList.add('fade-in-up');
});

// Add counter animation for testimonials
const testimonials = document.querySelectorAll('.testimonial');
testimonials.forEach((testimonial, index) => {
    testimonial.style.animationDelay = `${index * 0.3}s`;
    testimonial.classList.add('fade-in-up');
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #000879C, #5DBA26);
    z-index: 1001;
    transition: width 0.3s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add hover effect to social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add click effect to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #000879C, #5DBA26);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,8,121,0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
            statsObserver.unobserve(entry.target);
        }
    });
});

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// AI Badge animation
document.querySelectorAll('.ai-badge, .ai-badge-product, .ai-badge-testimonial').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

console.log('NEOPACK Store - AI Enhanced JavaScript loaded successfully! 🚀🤖'); 