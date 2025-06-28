<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $nom = $_POST['nom'] ?? '';
    $numero = $_POST['numero'] ?? '';
    $produit = $_POST['produit'] ?? '';

    // Sécuriser les données
    $nom = htmlspecialchars($nom);
    $numero = htmlspecialchars($numero);
    $produit = htmlspecialchars($produit);

    // Numéro WhatsApp de destination (le tien) - format international SANS +
    $tonNumero = "243855059661"; // ← remplace par ton numéro (ex. 243899123456)
    
    // Ta clé API CallMeBot (je t'explique après comment l'avoir si tu l'as pas)
    $apikey = " 9397153"; // ← remplace par ta clé API CallMeBot

    // Préparation du message
    $message = "🛒 Nouvelle commande crampons :\nNom : $nom\nProduit : $produit\nNuméro du client : $numero";

    // URL CallMeBot
    $url = "https://api.callmebot.com/whatsapp.php?phone=$tonNumero&text=" . urlencode($message) . "&apikey=$apikey";

    // Envoi de la requête
    $response = file_get_contents($url);

    if ($response !== false) {
        echo "✅ Message WhatsApp envoyé avec succès.";
    } else {
        echo "❌ Échec de l'envoi du message.";
    }
} else {
    echo "Accès direct refusé.";
}
?>
