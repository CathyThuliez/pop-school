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

// exemple de création de code html en js et injection du code dans un élément
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
  function compare(a,b){
    if (a.score===b.score){
       return (a.name-b.name);
    } else if(a.score<b.score){
      return 1;
    } else if(a.score>b.score){
      return -1;
    }
  };

  function compareScores(a, b) {
    return b.score - a.score;
  };


  allScores.sort(compare)
  console.table(allScores);

  var bestScores = [];

  //on va ajouter les 5 premieres valeurs du tableau Scores, donc les meilleurs scores.
  for (var i = 0 ; i < 5 ; i++){
    bestScores.push(allScores[i]);
  };
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
