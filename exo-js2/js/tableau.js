"use strict";

//déclaration et initialisation d'un tableau vide
var myArray = [];
//déclaration et initialisation d'un tableau avec 3 éléments
var myArray2 = [123, 42, "Hello"];

//inspection des tableaux dans la cosole
console.log(myArray);
console.log(myArray2);

//ajout d'éléments dans un tableau
myArray.push(123);
myArray.push(42);
myArray.push(3.14);
myArray.push("Hello");

//inspection des tableaux dans la cosole
console.log(myArray);
console.log(myArray2);

//afficher la taille d'un tableau
console.log(myArray.length);

// si le tableau contient au moins élément,
// afficher le premier élément d'un tableau
if (myArray.length > 0); {
console.log(myArray[0]);
}

//modifier le premier élément
if (myArray.length > 0) {
  myArray[0] = 1;
}

//modifier le dernier élément
if (myArray.length > 0) {
  myArray[myArray.length - 1] = "salut";
}

//afficher le dernier élément d'un tableau
console.log(myArray[myArray.length - 1]);

//supprimer le deuxième élément d'un tableau
  myArray.splice(1, 1);
  console.log(myArray);

//supprimer 3.14 du tableau
  myArray.splice(1, 1)
  console.log(myArray);
