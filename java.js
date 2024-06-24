const tagsLinks = document.querySelectorAll('.tags nav ul li a');

tagsLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
    
        link.style.transform = 'scale(1.2)';
    });

    link.addEventListener('mouseleave', () => {
        
        link.style.transform = 'scale(1)';
    });
});

new window.VLibras.Widget('https://vlibras.gov.br/app');




