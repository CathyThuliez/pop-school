"use strict";

var data = [
  {
    id: 243,
    name: "hoshiko",
    scores: [76, 64, 10, 67, 64]
  },
  {
    id: 123,
    name: "kimiko",
    scores: [42, 100, 54, 65,32]
  },
  {
    id: 768,
    name: "kakashi",
    scores: [93, 2, 56, 78, 100]
  }
];

// Intégrer bootstrap
// A partir de ces données :
// - afficher un tableau html contenant le nom des users et leurs scores
// - afficher un autre tableau html contenant le noms des users et leur score moyen, triés par nom de user
// - afficher un tableau html contenant les 5 meilleurs scores et le nom de l'user, triés par ordre décroissant et par nom de user
// indice :
// pour lire le user name :
//               - boucle for avec index : data[i].name
//               - boucle for in : data [].name
//               - boucle for of : user.name
//
// pour lire le tableau des scores :
//               - boucle for avec index : data[i].scores
//               - boucle for in : data[].scores
//               - boucle for of : user.scores

// vous pouvez parcourir le tableau avec une boucle for (avec index, for in, for of)
// -------------------------------------------------------------------------------------------------------

// exemple de création de code html en js et injection du code dans un élément
// var data = [];
window.onload = function() {
  // premier tableau : user trié par ordre alphabétique
  var html;
  html = "<table>";

  data.sort(function(a, b) {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    // a doit être égal à b
    return 0;
  });

  for (var i = 0; i < data.length; i++) {

    html += "<tr>";
    html += "<td>" + data[i].name + "</td>";
    html += "<td>" + data[i].scores + "</td>";
    html += "</tr>";
  }
  html += "</table>";
  document.querySelector("#list").innerHTML = html;

  // deuxième tableau : trié par ordre alphabétique + calcul de la moyenne de chaque user
  var usersAverageScores = [];
  for (var user of data){
    var sum = 0;

    for (var score of user.scores) {
      sum += score;
    }
    let average = sum / user.scores.length;
    usersAverageScores.push( {
      name: user.name,
      averageScore: average
    });
  }

  html = "<table>";
  for (var user of usersAverageScores) {
    html += "<tr>";
    html += "<td>" + user.name + "</td>";
    html += "<td>" + user.averageScore + "</td>";
    html += "</tr>";
  }
  html += "</table>";
  document.querySelector("#list-average").innerHTML += html;

  // troisième tableau : 5 meilleurs scores, triés par ordre alphabétique + décroissant.
  var allScores = [];
  html = "<table>";
  for (var user of data){
    for (var score of user.scores){
      allScores.push({
        name: user.name,
        score: score,
      });
    };
  };

  //bon, là on a donc notre tableau avec tous les scores. Pour avoir l'ordre souhaité, il faut d'abord les classer par ordre alphabetique, puis par score decroissant.

  //ça marche pas pour l'odre alphabetique, je capte pas trop pourquoi...
  function compare(a,b){
  //   if (a.score===b.score){
  //         //  return (a.name-b.name);
  //       } else if(a.score<b.score){
  //          return 1;
  //       } else if(a.score>b.score){
  //          return -1;
  //       }
  // };

  function compareScores(a, b) {
    return b.score - a.score;
  };

  allScores.sort(compare)
  console.table(allScores);
  //on a donc les scores triés par ordre décroissant, maintenant il nous faudrait isoler les 5 meilleurs.

  //on crée notre variables bestscores,
  var bestScores = [];

  //on va ajouter les 5 premieres valeurs du tableau Scores, donc les meilleurs scores.
  for (var i = 0 ; i < 5 ; i++){
    bestScores.push(allScores[i]);
  };


  //bon voilà. Maintenant il faut rajouter ces valeurs dans notre HTML
  console.table(bestScores);
  for (var i = 0; i < bestScores.length; i++) {
    html += "<tr>";
    html += "<td>" + bestScores[i].name + "</td>";
    html += "<td>" + bestScores[i].score + "</td>";
    html += "</tr>";
  }
  html += "</table>";


  document.querySelector("#list-best-scores").innerHTML += html;
}
