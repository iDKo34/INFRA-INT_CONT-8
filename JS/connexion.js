// Simulated user database
const users = [
    { firstName: "John", lastName: "Doe", username: "john_doe", password: "password123" },
    { firstName: "Jane", lastName: "Smith", username: "jane_smith", password: "securepass" }
];

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const errorMessageElement = document.getElementById("errorMessage");
    const successMessageElement = document.getElementById("successMessage");

    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        // Successful login
        errorMessageElement.textContent = "";
        successMessageElement.textContent = `Welcome, ${user.firstName} ${user.lastName}!`;
    } else {
        // Failed login
        errorMessageElement.textContent = "Invalid username or password. Please try again.";
        successMessageElement.textContent = "";
    }
}
