// Contenu du fichier client.js

document.addEventListener("DOMContentLoaded", function () {
    // Tableau de données utilisateurs (simulation de base de données)
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
        // Ajoutez d'autres utilisateurs au besoin
    ];

    // Fonction pour obtenir les informations de l'utilisateur actuel (simulé)
    function getCurrentUser() {
        // Simulons l'utilisateur actuel comme le premier utilisateur du tableau
        return usersDatabase[0];
    }

    // Fonction pour afficher les informations de l'utilisateur sur la page
    function displayUserInfo(user) {
        // Affichage des informations de l'utilisateur sur la page
        document.querySelector('.profile-image img').src = user.profileImage;
        document.querySelector('.user-info h2:nth-child(1)').innerText = 'Nom : ' + user.lastName;
        document.querySelector('.user-info h2:nth-child(2)').innerText = 'Prénom : ' + user.firstName;
    }

    // Fonction pour afficher l'historique des commandes de l'utilisateur sur la page
    function displayOrderHistory(user) {
        const orderHistorySection = document.querySelector('.order-history');
        
        // Affichage de l'historique des commandes
        user.orders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.classList.add('order');
            orderElement.innerHTML = `<p>Commande #${order.orderId} - Date: ${order.date}</p><p>Articles: ${order.items.join(', ')}</p>`;
            orderHistorySection.appendChild(orderElement);
        });
    }

    // Obtenez l'utilisateur actuel (simulé) et affichez ses informations
    const currentUser = getCurrentUser();
    displayUserInfo(currentUser);
    displayOrderHistory(currentUser);
});
