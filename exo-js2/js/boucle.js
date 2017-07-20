"use strict";

var index = 0;
while (index < 10) {
  console.log("ok");
  index++;
}
// même chose mais codée différemment :
for (var index = 0; index < 10; index++) {
  console.log("ok");
}
// une seule fois
do {
  console.log("ok");
} while (false);






// -----------------------------------------------------------------------------------------

var myArray = [123, 42, 3.14, 100, 1, -2];

// boucle for avec un index
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// boucle for commençant par la fin
for (var i = myArray.length -1; i >= 0; i--) {
  console.log(myArray[i]);
}

//boucle for in
for (var i in myArray) {
  // console.log(i);
  console.log(myArray[i]);
}

//boucle for of
for (var value of myArray) {
  console.log(value);
}

// afficher les nombrres supérieurs à 50
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] > 50) {
    console.log(myArray[i]);
  }
}

// afficher les nombrres compris entre 0 et 50
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] > 0 && myArray[i] < 50) {
    console.log(myArray[i]);
  }
}

// afficher les nombres à virgule
for (var value of myArray) {
  if (Number.isInteger(value)) {
  console.log(value);
  }
}

// afficher les nombres à virgule (méthode alternative)
for (var value of myArray) {
  if (value - Math.round(value) != 0) {
    console.log(value);
  }
}
