// "Base de données" de produits (pour un exemple)
const produitsDatabase = [
    { nom: 'Spaghetti', description: 'Pâtes longues, fines et cylindriques. Un incontournable de la cuisine italienne traditionnelle.', page: '../Products/spaghetti.html' },
    { nom: 'Penne', description: 'Pâtes tubulaires avec des extrémités diagonales. Une des formes de pâtes les plus célèbres.', page: '../Products/penne.html' },
    { nom: 'Fusilli', description: 'Pâtes longues, épaisses et en forme de tire-bouchon. Idéales pour les salades de pâtes et les sauces épaisses.', page: '../Products/fusilli.html' },
    { nom: 'Pâtes Fraîches Maison', description: 'Des pâtes fraîches, préparées quotidiennement avec des ingrédients de première qualité.', page: '../Products/pate-fraiche.html' },
    // Ajouter d'autres produits au besoin
];

function rechercher() {
    // Récupérer la valeur du champ de recherche
    const motsCles = document.getElementById('search-input').value.toLowerCase();

    // Filtrer les produits en fonction des mots-clés
    const resultatsRecherche = produitsDatabase.filter(produit =>
        produit.nom.toLowerCase().includes(motsCles) ||
        produit.description.toLowerCase().includes(motsCles)
    );

    // Afficher les résultats de la recherche
    afficherResultatsRecherche(resultatsRecherche);
}

function afficherResultatsRecherche(resultats) {
    const conteneurResultats = document.getElementById('search-results');

    // Effacer les résultats précédents
    conteneurResultats.innerHTML = '';

    // Afficher les nouveaux résultats
    if (resultats.length > 0) {
        resultats.forEach(resultat => {
            // Créer un lien autour de chaque résultat
            const lienResultat = document.createElement('a');
            lienResultat.setAttribute('href', resultat.page);
            lienResultat.innerHTML = `<h3>${resultat.nom}</h3><p>${resultat.description}</p>`;
            conteneurResultats.appendChild(lienResultat);
        });
    } else {
        conteneurResultats.innerHTML = '<p>Aucun résultat trouvé.</p>';
    }
}

// Ajoutez un gestionnaire d'événements au clic du bouton
document.getElementById('search-button').addEventListener('click', function() {
    // Obtenez les mots-clés
    const motsCles = document.getElementById('search-input').value.toLowerCase();

    // Redirigez l'utilisateur vers la page de résultats avec les mots-clés en paramètre
    window.location.href = `./Recherche/resultats_recherche.html?keywords=${encodeURIComponent(motsCles)}`;
});