// connexion.js
const users = [
    { firstName: "John", lastName: "Doe", username: "john_doe", password: "password123" },
    { firstName: "Jane", lastName: "Smith", username: "jane_smith", password: "securepass" }
];

function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        return { success: true, message: `Welcome, ${user.firstName} ${user.lastName}!` };
    } else {
        return { success: false, message: "Invalid username or password. Please try again." };
    }
}

function performLogin() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const errorMessageElement = document.getElementById("errorMessage");
    const successMessageElement = document.getElementById("successMessage");

    const result = login(usernameInput, passwordInput);

    if (result.success) {
        // Successful login
        errorMessageElement.textContent = "";
        successMessageElement.textContent = result.message;
    } else {
        // Failed login
        errorMessageElement.textContent = result.message;
        successMessageElement.textContent = "";
    }
}

module.exports = { login, users, performLogin };