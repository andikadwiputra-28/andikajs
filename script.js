let visitorCount = 0;
const skills = {
    'Microsoft Office': 'Mahir dalam Word, Excel, PowerPoint untuk produktivitas',
    'HTML': 'Mampu membuat struktur halaman web yang semantik',
    'CSS': 'Menguasai styling dan responsive design',
    'PHP': 'Dapat membangun aplikasi web dinamis',
    'JavaScript': 'Membuat website interaktif dan modern'
};
function init() {
    updateVisitorCount();
    displayGreeting();
    animateSkills();
    animateSocialButtons();
    animateOnScroll();
}
function updateVisitorCount() {
    visitorCount = Math.floor(Math.random() * 1000) + 1;
    const counterElement = document.getElementById('visitorCount');
    
    let current = 0;
    const interval = setInterval(() => {
        current += Math.floor(visitorCount / 50);
        if (current >= visitorCount) {
            current = visitorCount;
            clearInterval(interval);
        }
        counterElement.textContent = current;
    }, 30);
}
function displayGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    let greeting;

    if (hour < 12) {
        greeting = '🌅 Selamat Pagi! Saya Andika Dwi Putra';
    } else if (hour < 18) {
        greeting = '☀️ Selamat Siang! Saya Andika Dwi Putra';
    } else {
        greeting = '🌙 Selamat Malam! Saya Andika Dwi Putra';
    }

    greetingElement.textContent = greeting;
}
function showSkillInfo(skillName) {
    const info = skills[skillName];
    alert(`${skillName}\n\n${info}`);
}
function animateSocialButtons() {
    const instagramBtn = document.getElementById('instagramBtn');
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    // Click counter untuk Instagram
    let instagramClicks = 0;
    instagramBtn.addEventListener('click', function(e) {
        instagramClicks++;
        console.log(`Instagram diklik ${instagramClicks} kali`);
    });
    let whatsappClicks = 0;
    whatsappBtn.addEventListener('click', function(e) {
        whatsappClicks++;
        console.log(`WhatsApp diklik ${whatsappClicks} kali`);
    });
}
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    const resultDiv = document.getElementById('resultContact');

    resultDiv.style.display = 'block';
    resultDiv.style.background = '#e7ffe7';
    resultDiv.style.borderLeftColor = '#44ff44';
    resultDiv.innerHTML = `
        <strong>✅ Pesan Terkirim!</strong><br>
        Terima kasih <strong>${name}</strong>!<br>
        Saya akan membalas ke <strong>${email}</strong> segera.
    `;
    document.querySelector('.contact-form').reset();
}
function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        button.textContent = '☀️ Light Mode';
    } else {
        button.textContent = '🌙 Dark Mode';
    }
}
function animateSkills() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.5s ease forwards`;
            
            // Animate skill progress bars
            const progressBar = card.querySelector('.skill-progress');
            if (progressBar) {
                const progress = progressBar.getAttribute('data-progress');
                setTimeout(() => {
                    progressBar.style.width = progress + '%';
                }, 200);
            }
        }, index * 100);
    });
}

// Animate info cards on scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.info-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}
document.addEventListener('DOMContentLoaded', init);
document.getElementById('profileImg').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) rotate(5deg)';
});

document.getElementById('profileImg').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
});
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'd') {
        event.preventDefault();
        toggleTheme();
    }
});
const tableRows = document.querySelectorAll('.info-table tr');
tableRows.forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});