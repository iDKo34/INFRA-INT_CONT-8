//reinitialiser le mot de passe de l'utilisateur.

document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour ouvrir la fenêtre contextuelle
    function openModal() {
        const modal = document.getElementById("passwordResetModal");
        modal.style.display = "block";
    }

    // Fonction pour fermer la fenêtre contextuelle
    function closeModal() {
        const modal = document.getElementById("passwordResetModal");
        modal.style.display = "none";
    }

    // Fermer la fenêtre contextuelle en cliquant sur la bouton "X"
    document.getElementById("closeModal").addEventListener("click", closeModal);

    // Fermer la fenêtre contextuelle en cliquant en dehors de la fenêtre
    window.addEventListener("click", function (event) {
        const modal = document.getElementById("passwordResetModal");
        if (event.target === modal) {
            closeModal();
        }
    });

    // Afficher la fenêtre contextuelle lorsque le bouton est cliqué
    document.querySelector(".reset-password-button").addEventListener("click", openModal);

    // Gérer la soumission du formulaire de réinitialisation du mot de passe
    document.getElementById("passwordResetForm").addEventListener("submit", function (e) {
        e.preventDefault();
        // Logique de réinitialisation du mot de passe ici
        closeModal();
    });
});