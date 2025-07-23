// script.js
function getParam(nom) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nom);
}

window.onload = function () {
  
  document.getElementById("nomClient").textContent = getParam("nom");
  document.getElementById("telClient").textContent = getParam("telephone");
  document.getElementById("adresseClient").textContent = getParam("adresse");

  
  const produit = "Produit sélectionné"; 
  const numeroWhatsApp = "243855059661"; 
  const apikey = "9397153"; 

  const message = `Bonjour, j'ai passé une commande :
- Nom : ${getParam("nom")}
- Téléphone : ${getParam("telephone")}
- Adresse : ${getParam("adresse")}
- Produit : ${produit}
Voici la capture de mon paiement.`;

  const whatsappLink = `https://api.callmebot.com/whatsapp.php?phone=${numeroWhatsApp}&text=${encodeURIComponent(message)}&apikey=${apikey}`;
  document.getElementById("lienWhatsApp").href = whatsappLink;
};
