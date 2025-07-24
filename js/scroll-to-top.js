// Script pour le bouton de retour en haut
document.addEventListener('DOMContentLoaded', function() {
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
