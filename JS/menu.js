// menu.js

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez le menu principal
    const mainMenu = document.getElementById("main-menu");

    // Ajoutez des événements aux éléments du menu pour montrer/cacher le sous-menu
    const menuItems = mainMenu.querySelectorAll("li");

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseenter", function () {
            const subMenu = this.querySelector("ul");
            if (subMenu) {
                subMenu.style.display = "block";
            }
        });

        menuItem.addEventListener("mouseleave", function () {
            const subMenu = this.querySelector("ul");
            if (subMenu) {
                subMenu.style.display = "none";
            }
        });
    });
});
