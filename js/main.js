// Script pour le bouton de retour en haut
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    let isMenuOpen = false;

    // Fonction pour fermer le menu
    function closeMenu() {
        nav.classList.remove('active');
        isMenuOpen = false;
    }

    // Gestionnaire de clic pour le bouton menu
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
        isMenuOpen = !isMenuOpen;
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !nav.contains(e.target) && e.target !== menuToggle) {
            closeMenu();
        }
    });

    // Fermer le menu après avoir cliqué sur un lien
    nav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    });

    // Gestion de l'affichage du menu en fonction de la largeur de l'écran
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            isMenuOpen = false;
        }
    });
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Défilement fluide vers le haut
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Optionnel: Afficher/masquer le bouton en fonction du scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.visibility = 'visible';
            } else {
                backToTopButton.style.opacity = '0.7';
                backToTopButton.style.visibility = 'visible';
            }
        });
    }
});

document.addEventListener('click', function(e) {
    const contact = document.getElementById('contact-link');
    if (e.target === contact) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
});
