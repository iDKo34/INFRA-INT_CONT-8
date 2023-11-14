document.addEventListener("DOMContentLoaded", function () {
    // Déplacez la déclaration de usersDatabase à l'extérieur de la fonction checkLogin
    const usersDatabase = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            username: 'john_doe',
            password: 'motdepasse1',
            profileImage: 'path/to/image1.jpg',
            orders: [
                { orderId: 101, date: '2023-11-01', items: ['Spaghetti', 'Penne'] },
                { orderId: 102, date: '2023-11-05', items: ['Fusilli'] }
            ]
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            username: 'jane_smith',
            password: 'motdepasse2',
            profileImage: 'path/to/image2.jpg',
            orders: [
                { orderId: 103, date: '2023-11-02', items: ['Penne', 'Fusilli'] }
            ]
        }
    ];

    function checkLogin() {
        const username = document.getElementById('login-box-username').value;
        const password = document.getElementById('login-box-password').value;

        // Utilisez la variable usersDatabase définie à l'extérieur de cette fonction
        const userExists = checkUserExists(username, password, usersDatabase);

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

    function checkUserExists(username, password, usersDatabase) {
        // Utilisez la variable usersDatabase fournie en paramètre
        for (const user of usersDatabase) {
            if (user.username === username && user.password === password) {
                return true;
            }
        }
        return false;
    }
});
