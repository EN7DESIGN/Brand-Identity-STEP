document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.Button');
    const mainSections = document.querySelectorAll('main[id^="Main"]'); // Sélectionne tous les éléments <main> dont l'ID commence par "Main"

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const clickedButton = event.currentTarget; // Le bouton qui a été cliqué
            const buttonId = clickedButton.id; // L'ID du bouton cliqué

            // 1. Gestion de la classe "Inactive" pour les boutons
            buttons.forEach(btn => {
                if (btn === clickedButton) {
                    // Si le bouton cliqué a la classe "Inactive", on la retire
                    if (btn.classList.contains('Inactive')) {
                        btn.classList.remove('Inactive');
                    }
                } else {
                    // Pour les autres boutons, on ajoute la classe "Inactive" s'ils ne l'ont pas
                    if (!btn.classList.contains('Inactive')) {
                        btn.classList.add('Inactive');
                    }
                }
            });

            // 2. Gestion de l'affichage des sections <main>
            const targetMainId = `Main${buttonId}`; // Construit l'ID de la section main cible (ex: "MainStep")

            mainSections.forEach(mainSection => {
                if (mainSection.id === targetMainId) {
                    mainSection.style.display = 'flex'; // Affiche la section main correspondante
                } else {
                    mainSection.style.display = 'none'; // Masque les autres sections main
                }
            });
        });
    });
});
