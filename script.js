// Плавная прокрутка к секциям
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Обработка формы
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время!');
        form.reset();
    });
});

// Добавляем активный класс в навигацию при прокрутке
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});