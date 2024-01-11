// Installez Chai si vous ne l'avez pas déjà fait
// npm install chai --save-dev

const { assert } = require('chai');
const { login, users } = require('../JS/connexion');

describe('Login Function', function () {
  it('should return success message for valid credentials (John Doe)', function () {
    const errorMessageElement = { textContent: "" };
    const successMessageElement = { textContent: "" };

    // Appeler la fonction login avec les identifiants de John Doe
    login('john_doe', 'password123', errorMessageElement, successMessageElement);

    // Vérifier que le message de succès est correct
    assert.strictEqual(successMessageElement.textContent, 'Welcome, John Doe!');
  });

  it('should return error message for invalid credentials (Test Test)', function () {
    const errorMessageElement = { textContent: "" };
    const successMessageElement = { textContent: "" };

    // Appeler la fonction login avec des identifiants incorrects
    login('test', 'test', errorMessageElement, successMessageElement);

    // Vérifier que le message d'erreur est correct
    assert.strictEqual(errorMessageElement.textContent, 'Invalid username or password. Please try again.');
  });
});
