const chai = require('chai');
const expect = chai.expect;

const { afficherResultatsInitiaux } = require('..resultats_recherche');

describe('Fonction afficherResultatsInitiaux', () => {
    it('devrait afficher les résultats initiaux corrects en fonction des mots-clés de l\'URL', () => {
       // "Base de données" de produits (pour un exemple)
       const produitsDatabase = [
        { nom: 'Spaghetti', description: 'Pâtes longues, fines et cylindriques. Un incontournable de la cuisine italienne traditionnelle.', page: '../Products/spaghetti.html' },
        { nom: 'Penne', description: 'Pâtes tubulaires avec des extrémités diagonales. Une des formes de pâtes les plus célèbres.', page: '../Products/penne.html' },
        { nom: 'Fusilli', description: 'Pâtes longues, épaisses et en forme de tire-bouchon. Idéales pour les salades de pâtes et les sauces épaisses.', page: '../Products/fusilli.html' },
        { nom: 'Pâtes Fraîches Maison', description: 'Des pâtes fraîches, préparées quotidiennement avec des ingrédients de première qualité.', page: '../Products/pate-fraiche.html' },
        // Ajouter d'autres produits au besoin
    ];

        // Mettez en place les données nécessaires pour le test
        global.window = { location: { search: '?keywords=penne' } };

        // Appel de la fonction d'affichage des résultats initiaux
        afficherResultatsInitiaux();

        // Vérifiez que le résultat affiché est conforme à votre attente
        const resultatsRecherche = document.getElementById('search-results').innerHTML;
        expect(resultatsRecherche).to.include('Penne');
        expect(resultatsRecherche).to.include('Pâtes tubulaires avec des extrémités diagonales');
    });

    it('devrait afficher un message approprié si aucun résultat n\'est trouvé pour les mots-clés de l\'URL', () => {
        // Mettez en place les données nécessaires pour le test
        global.window = { location: { search: '?keywords=non-existent-product' } };

        // Appel de la fonction d'affichage des résultats initiaux
        afficherResultatsInitiaux();

        // Vérifiez que le résultat affiché est conforme à votre attente
        const resultatsRecherche = document.getElementById('search-results').innerHTML;
        expect(resultatsRecherche).to.include('Aucun résultat trouvé.');
    });
});
