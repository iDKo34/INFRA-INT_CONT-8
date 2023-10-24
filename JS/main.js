// main.js

// Ajoutez vos images ici (remplacez les noms de fichier par les vôtres)
const images = ['IMG/pasta1.jpg', 'IMG/pasta2.jpg', 'IMG/pasta3.jpg', 'IMG/pasta4.jpg', 'IMG/pasta5.jpg', 'IMG/pasta6.jpg', 'IMG/pasta7.jpg', 'IMG/pasta8.jpg'];

// Sélectionnez le conteneur du carousel
const carouselContainer = document.getElementById('carousel');

// Créez les éléments de la liste pour chaque image
images.forEach(image => {
    const item = document.createElement('div');
    item.classList.add('item');

    const img = document.createElement('img');
    img.src = image;
    img.alt = 'Pasta Image';

    // Ajoutez l'image à l'élément de liste
    item.appendChild(img);

    // Ajoutez l'élément de liste au conteneur du carousel
    carouselContainer.appendChild(item);
});

// Initialisez le carousel avec Owl Carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000, // 3 secondes
        autoplayHoverPause: true,
        responsive: {
            // Ajustez ces valeurs selon vos besoins
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
