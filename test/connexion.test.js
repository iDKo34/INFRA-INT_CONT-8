const { assert } = require('chai');
const { login, users } = require('../JS/connexion');

describe('Login Function', function () {
    it('should return success for valid credentials', function () {
        const result = login('john_doe', 'password123');
        assert.isTrue(result.success, 'Login should be successful');
        assert.strictEqual(result.message, 'Welcome, John Doe!', 'Success message incorrect');
    });

    it('should return failure for invalid credentials', function () {
        const result = login('invalid_user', 'invalid_password');
        assert.isFalse(result.success, 'Login should fail');
        assert.strictEqual(result.message, 'Invalid username or password. Please try again.', 'Error message incorrect');
    });
});
