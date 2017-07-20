"use strict";
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
//
// var stock = Math.floor(getRandomArbitrary(0, 100));
// console.log(stock);
//
//
// //afficher dans la console :
// // - "stock indisponible" si stock = 0
// // - "stock en faible quantité"" si stock < 50
// // - "stock disponible" si stock >= 50
// if (stock == 0)
//    console.log("stock indisponible");
// else if (stock < 50)
//    console.log("stock en faible quantité");
// else
//    console.log("stock disponible");

// -------------------------------------------------------------------------

// var hasValidAddress = false;
// var hasValidatedAgreement = false;

// afficher dans la console :
// - "commande en cours" si hasValidAddress et hasValidatedAgreement sont vrai
// - "vous devez renseigner une adresse" si hasValidAddress est faux
// - "vous devez cocher la case condition de vente" si hasValidatedAgreement est faux
// - "vous devez renseigner une adresse et vous devez cocher la case conditions de vente" si hasValidAddress et hasValidatedAgreement sont faux

// if (hasValidAddress && hasValidatedAgreement) {
//   console.log("commande en cours");
// } else if (!hasValidAddress && !hasValidatedAgreement){
// console.log("vous devez renseigner une adresse et vous devez cocher la case conditions de vente");
// } else if (!hasValidAddress) {
//   console.log("vous devez renseigner une adresse");
// } else {
//   console.log("vous devez cocher la case condition de vente");
// }

// ---------------------------------------------------------------------------------

var hasAuthenticatedWithEmail = false;
var hasAuthenticatedWithPhone = true;

if (hasAuthenticatedWithEmail || hasAuthenticatedWithPhone) {
  console.log("vous êtes authentifié");
} else {
  console.log("vous n'êtes pas authentifié");
}

// ---------------------------------------------------------------------------------------

var hasAdressEmail = false;
var hasNumberPhone = false;

if (hasAdressEmail || hasNumberPhone) {
  console.log("Commande validée!");
} else {
    console.log("Vous devez renseigner votre adresse mail ou votre numéro de téléphone pour valider votre commande !");
}










// var hasCreditCard = false;
// var accountBalance = 0;
// var itemCost = 43;
//
// if (!hasCreditCard && !accountBalance) {
//   console.log("vous n'avez pas de moyen de paiement");
// } else if (accountBalance < itemCost &&!hasCreditCard) {
// console.log("votre compte n'est pas assez approvisionné, il vous manque " + (itemCost - accountBalance));
// } else if (accountBalance >= itemCost hasCreditCard) {
//   console.log("votre compte a été débité de " + itemCost + ", le nouveau solde est " + (accountBalance - itemCost));
// } else {
//   console.log("vous allez être redirigé sur la page de paiement de votre banque");
// }


// un user veut faire un achat
// vérifier qu'il possède une carte bancaire ou que son compte est suffisamment approvisionné
// si les 2 conditions sont vérifiées, privilégiez l'utilisation de son compte

// les alertes :
// - "vous n'avez pas de moyen de paiement" (pas de carte enregistrée et solde à 0)
// - "votre compte n'est pas assez approvisionné, il vous manque X" (si le compte n'est pas assez approvisionné)
// - "votre compte a été débité de X, le nouveau solde est y" (si le compte est approvionné, avec ou sans carte)
// - "vous allez être redirigé sur la page de paiement de votre banque" (si le compte n'est pas suffisamment approvisionné et qu'il y a une carte enregistrée)
