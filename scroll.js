document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = navLink.getAttribute('href');

            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
