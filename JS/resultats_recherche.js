/* // "Base de données" de produits (pour un exemple)
const produitsDatabase = [
    { nom: 'Spaghetti', description: 'Pâtes longues, fines et cylindriques. Un incontournable de la cuisine italienne traditionnelle.', page: '../Products/spaghetti.html' },
    { nom: 'Penne', description: 'Pâtes tubulaires avec des extrémités diagonales. Une des formes de pâtes les plus célèbres.', page: '../Products/penne.html' },
    { nom: 'Fusilli', description: 'Pâtes longues, épaisses et en forme de tire-bouchon. Idéales pour les salades de pâtes et les sauces épaisses.', page: '../Products/fusilli.html' },
    { nom: 'Pâtes Fraîches Maison', description: 'Des pâtes fraîches, préparées quotidiennement avec des ingrédients de première qualité.', page: '../Products/pate-fraiche.html' },
    // Ajouter d'autres produits au besoin
]; */


// Ajoutez cette fonction pour obtenir les mots-clés de l'URL
function obtenirMotsClesDeURL() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get('keywords') || '';
}

// Ajoutez cette fonction pour afficher les résultats de la recherche initialement
function afficherResultatsInitiaux() {
    const motsCles = obtenirMotsClesDeURL();
    const resultatsRecherche = produitsDatabase.filter(produit =>
        produit.nom.toLowerCase().includes(motsCles) ||
        produit.description.toLowerCase().includes(motsCles)
    );
    afficherResultatsRecherche(resultatsRecherche);
}

// Appelez cette fonction lors du chargement de la page
window.addEventListener('load', afficherResultatsInitiaux);