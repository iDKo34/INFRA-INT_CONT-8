const chai = require('chai');
const expect = chai.expect;

 const { rechercher } = require('../src/Rechercher.js');

describe('Fonction rechercher', () => {
    it('devrait retourner des résultats corrects pour des mots-clés spécifiques', () => {
        // "Base de données" de produits (pour un exemple)
        const produitsDatabase = [
            { nom: 'Spaghetti', description: 'Pâtes longues, fines et cylindriques. Un incontournable de la cuisine italienne traditionnelle.', page: '../Products/spaghetti.html' },
            { nom: 'Penne', description: 'Pâtes tubulaires avec des extrémités diagonales. Une des formes de pâtes les plus célèbres.', page: '../Products/penne.html' },
            { nom: 'Fusilli', description: 'Pâtes longues, épaisses et en forme de tire-bouchon. Idéales pour les salades de pâtes et les sauces épaisses.', page: '../Products/fusilli.html' },
            { nom: 'Pâtes Fraîches Maison', description: 'Des pâtes fraîches, préparées quotidiennement avec des ingrédients de première qualité.', page: '../Products/pate-fraiche.html' },
            
        ];

        // Appel de la fonction de recherche
        const resultatsRecherche = rechercher(produitsDatabase, 'spaghetti');

        // Vérifiez que le résultat affiché est conforme à votre attente
        expect(resultatsRecherche).to.have.lengthOf(1);
        expect(resultatsRecherche[0].nom).to.equal('Spaghetti');
    });

    it('devrait afficher un message approprié si aucun résultat n\'est trouvé', () => {
        const produitsDatabase = [
            { nom: 'Spaghetti', description: 'Pâtes longues, fines et cylindriques. Un incontournable de la cuisine italienne traditionnelle.', page: '../Products/spaghetti.html' },
            { nom: 'Penne', description: 'Pâtes tubulaires avec des extrémités diagonales. Une des formes de pâtes les plus célèbres.', page: '../Products/penne.html' },
            { nom: 'Fusilli', description: 'Pâtes longues, épaisses et en forme de tire-bouchon. Idéales pour les salades de pâtes et les sauces épaisses.', page: '../Products/fusilli.html' },
            { nom: 'Pâtes Fraîches Maison', description: 'Des pâtes fraîches, préparées quotidiennement avec des ingrédients de première qualité.', page: '../Products/pate-fraiche.html' },
            
        ];
       
        // Appel de la fonction de recherche
        const resultatsRecherche = rechercher(produitsDatabase, 'tagliatelle');

        // Vérifiez que le résultat affiché est conforme à votre attente
        expect(resultatsRecherche).to.have.lengthOf(0);

    });
});
