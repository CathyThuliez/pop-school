"use strict";
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var stock = Math.floor(getRandomArbitrary(0, 100));
console.log(stock);


//afficher dans la console :
// - "stock indisponible" si stock = 0
// - "stock en faible quantité"" si stock < 50
// - "stock disponible" si stock >= 50
if (stock == 0)
   console.log("stock indisponible");
else if (stock < 50)
   console.log("stock en faible quantité");
else
   console.log("stock disponible");

// -------------------------------------------------------------------------

var hasValidAddress = false;
var hasValidatedAgreement = false;

// afficher dans la console :
// - "commande en cours" si hasValidAddress et hasValidatedAgreement sont vrai
// - "vous devez renseigner une adresse" si hasValidAddress est faux
// - "vous devez cocher la case condition de vente" si hasValidatedAgreement est faux
// - "vous devez renseigner une adresse et vous devez cocher la case conditions de vente" si hasValidAddress et hasValidatedAgreement sont faux

if (hasValidAddress && hasValidatedAgreement) {
  console.log("commande en cours");
} else if (!hasValidAddress && !hasValidatedAgreement){
console.log("vous devez renseigner une adresse et vous devez cocher la case conditions de vente");
} else if (!hasValidAddress) {
  console.log("vous devez renseigner une adresse");
} else {
  console.log("vous devez cocher la case condition de vente");
}
