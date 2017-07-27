<?php

// function addition($a, $b) {
//   return $a + $b;
// }
//
// $result = addition(2, 3);
//
// echo $result;
// echo "<br />\n";

//créer une fonction qui :
// - prend une variable en paramètre
// - renvoie la chaîne de caractères "vrai" si la variable est true
// - renvoie la chaîne de caractères "faux" si la variable est false

// appeler cette fonction avec :
//  - une valeur true et afficher le résultat
//  - une valeur false et afficher le résultat

function echoBoolean($bool) {
  if ($bool) {
    return "vrai";
  } else {
    return "faux";
  }
}

echo echoBoolean(true);
echo "<br />\n";

// variante
function echoBoolean2($bool) {
  return $bool ? "vrai" : "faux";
}

$result = echoBoolean2(true);
echo $result;
echo "<br />\n";

$result = echoBoolean2(false);
echo $result;
echo "<br />\n";

// autre variante
function echoBoolean3($bool) {
  if ($bool === true) {
    return "vrai";
  } else if ($bool === false) {
    return "faux";
  } else {
    return false;
  }
}

$result = echoBoolean3("foo bar baz");

if ($result == false) {
  echo "bool n'est pas une valeur bolléenne";
  echo "<br />\n";
}

// autre variante : définition d'une fonction avec déclaration de type
function echoBoolean4(bool $bool) {
  return ($bool) ? "vrai" : "faux";
}
echo echoBoolean4(true);
echo "<br />\n";

echo echoBoolean4(false);
echo "<br />\n";

echo echoBoolean4("foo bar baz");
echo "<br />\n";
