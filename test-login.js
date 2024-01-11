// test-login.js
const assert = require('assert');
const { login } = require('./JS/connexion');

describe('Login Function', function () {
    it('should return success message for valid credentials', function () {
        const result = login('john_doe', 'password123');
        assert.strictEqual(result.success, true);
        assert.strictEqual(result.message, 'Welcome, John Doe!');
    });

    it('should return error message for invalid credentials', function () {
        const result = login('invalid_user', 'invalid_password');
        assert.strictEqual(result.success, false);
        assert.strictEqual(result.message, 'Invalid username or password. Please try again.');
    });
});
