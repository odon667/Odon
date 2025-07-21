// script.js
function getParam(nom) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nom);
}

window.onload = function () {
  // Remplir les champs avec les données
  document.getElementById("nomClient").textContent = getParam("nom");
  document.getElementById("telClient").textContent = getParam("telephone");
  document.getElementById("adresseClient").textContent = getParam("adresse");

  // Préparer le lien WhatsApp
  const produit = "Produit sélectionné"; // Tu peux aussi passer ce paramètre dans l’URL si tu veux
  const numeroWhatsApp = "243855059661"; // Remplace par ton numéro CallMeBot (sans +)
  const apikey = "9397153"; // Remplace par ta clé API CallMeBot

  const message = `Bonjour, j'ai passé une commande :
- Nom : ${getParam("nom")}
- Téléphone : ${getParam("telephone")}
- Adresse : ${getParam("adresse")}
- Produit : ${produit}
Voici la capture de mon paiement.`;

  const whatsappLink = `https://api.callmebot.com/whatsapp.php?phone=${numeroWhatsApp}&text=${encodeURIComponent(message)}&apikey=${apikey}`;
  document.getElementById("lienWhatsApp").href = whatsappLink;
};
