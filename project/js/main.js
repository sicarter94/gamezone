document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active link logic
window.addEventListener('scroll', () => {
    const sections = ['pc', 'tarifs', 'etapes', 'contact'];
    const navLinks = document.querySelectorAll('nav .hidden.md\\:flex a');
    
    let current = '';
    sections.forEach(section => {
        const sectionEl = document.getElementById(section);
        if (window.pageYOffset >= (sectionEl.offsetTop - 150)) {
            current = section;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-primary', 'border-b-2', 'border-primary', 'pb-1');
        link.classList.add('text-on-surface-variant');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('text-primary', 'border-b-2', 'border-primary', 'pb-1');
            link.classList.remove('text-on-surface-variant');
        }
    });
});
