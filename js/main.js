// Script pour le bouton de retour en haut
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    let isMenuOpen = false;

    if (menuToggle && nav) {
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    // Fonction pour fermer le menu
    function closeMenu() {
        if (!nav || !menuToggle) {
            return;
        }
        nav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        isMenuOpen = false;
    }

    function openMenu() {
        if (!nav || !menuToggle) {
            return;
        }
        nav.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        isMenuOpen = true;
    }

    // Gestionnaire de clic pour le bouton menu
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            if (isMenuOpen) {
                closeMenu();
                return;
            }
            openMenu();
        });
    }

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', function(e) {
        if (!menuToggle || !nav) {
            return;
        }
        if (isMenuOpen && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Fermer le menu après avoir cliqué sur un lien
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link) {
                closeMenu();
            }
        });
    }

    // Fermer le menu avec la touche Echap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });

    // Gestion de l'affichage du menu en fonction de la largeur de l'écran
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            closeMenu();
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
