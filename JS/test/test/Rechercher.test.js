const chai = require('chai');
const expect = chai.expect;

/* const { rechercher } = require('../../Rechercher'); */

describe('Fonction rechercher', () => {
    it('devrait retourner des résultats corrects pour des mots-clés spécifiques', () => {
        // "Base de données" de produits (pour un exemple)
        const produitsDatabase = [
            { nom: 'Spaghetti', description: 'Pâtes longues, fines et cylindriques. Un incontournable de la cuisine italienne traditionnelle.', page: '../Products/spaghetti.html' },
            { nom: 'Penne', description: 'Pâtes tubulaires avec des extrémités diagonales. Une des formes de pâtes les plus célèbres.', page: '../Products/penne.html' },
            { nom: 'Fusilli', description: 'Pâtes longues, épaisses et en forme de tire-bouchon. Idéales pour les salades de pâtes et les sauces épaisses.', page: '../Products/fusilli.html' },
            { nom: 'Pâtes Fraîches Maison', description: 'Des pâtes fraîches, préparées quotidiennement avec des ingrédients de première qualité.', page: '../Products/pate-fraiche.html' },
            // Ajouter d'autres produits au besoin
        ];

        // Mettez en place les données nécessaires pour le test
        document.body.innerHTML = `
            <input type="text" id="search-input" value="spaghetti">
            <div id="search-results"></div>
        `;

        // Appel de la fonction de recherche
        rechercher();

        // Vérifiez que le résultat affiché est conforme à votre attente
        const resultatsRecherche = document.getElementById('search-results').innerHTML;
        expect(resultatsRecherche).to.include('Spaghetti');
        expect(resultatsRecherche).to.include('Pâtes longues, fines et cylindriques');
    });

    it('devrait afficher un message approprié si aucun résultat n\'est trouvé', () => {
        // Mettez en place les données nécessaires pour le test
        document.body.innerHTML = `
            <input type="text" id="search-input" value="non-existent-product">
            <div id="search-results"></div>
        `;

        // Appel de la fonction de recherche
        rechercher();

        // Vérifiez que le résultat affiché est conforme à votre attente
        const resultatsRecherche = document.getElementById('search-results').innerHTML;
        expect(resultatsRecherche).to.include('Aucun résultat trouvé.');
    });
});
