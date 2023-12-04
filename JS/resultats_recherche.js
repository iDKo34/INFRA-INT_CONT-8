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