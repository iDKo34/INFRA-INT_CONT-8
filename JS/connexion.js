document.addEventListener("DOMContentLoaded", function () {
    function checkLogin() {
        const username = document.getElementById('login-box-username').value;
        const password = document.getElementById('login-box-password').value;

        // Remplacez ceci par la logique de vérification dans votre fichier client.js
        const userExists = checkUserExists(username, password);

        if (userExists) {
            // Affichez le message de connexion réussie
            document.getElementById('login-success-message').innerText = 'Connexion réussie ! Redirection vers l\'espace client...';

            // Redirigez vers la page de l'espace client ou effectuez d'autres actions nécessaires
            setTimeout(function () {
                window.location.href = 'client.html';
            }, 2000);  // Redirection après 2 secondes (ajustez le délai selon vos besoins)
        } else {
            alert('Nom d\'utilisateur ou mot de passe incorrect.');
        }
    }

    function checkUserExists(username, password) {
        // Vous devez implémenter la logique pour vérifier si l'utilisateur existe
        // en comparant le nom d'utilisateur et le mot de passe dans le fichier client.js

        // Dans votre cas, vous pouvez itérer sur le tableau des utilisateurs
        // et vérifier si le nom d'utilisateur et le mot de passe correspondent à un utilisateur

        // Voici un exemple simple (à améliorer pour une application réelle) :
        for (const user of usersDatabase) {
            if (user.username === username && user.password === password) {
                return true;
            }
        }
        return false;
    }
});
