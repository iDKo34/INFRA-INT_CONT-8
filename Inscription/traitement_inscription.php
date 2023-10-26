<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $motdepasse = $_POST["motdepasse"];
    $adresse = $_POST["adresse"];
    
    // À ce stade, vous pouvez ajouter une logique pour enregistrer les données dans une base de données ou effectuer d'autres actions de traitement.
    
    // Exemple : Affichage des données soumises pour le test
    echo "Inscription réussie !<br>";
    echo "Nom : " . $nom . "<br>";
    echo "Prénom : " . $prenom . "<br>";
    echo "Email : " . $email . "<br>";
    echo "Adresse de livraison : " . $adresse . "<br>";
} else {
    echo "Accès interdit.";
}
?>