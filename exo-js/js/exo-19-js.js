result = localStorage.getItem("result");
console.log(localStorage.getItem("result"));

var sumOfComptences = function(agility, strength, stamina) {
  return parseInt(agility) + parseInt(strength) + parseInt(stamina);
}

var validateComptences = function() {
  var totalComp = sumOfComptences(
    document.getElementById("agility").value,
    document.getElementById("strength").value,
    document.getElementById("stamina").value
  );
  if(totalComp <100){
    return true;
  }
  else {
    return false;
  }
}

var printForm = function() {
  if (validateComptences()) {
    var box = document.getElementById("box");
    box.innerHTML =
    "name : " + document.getElementById("name").value +"<br>" +
    "agility : " + document.getElementById("agility").value +"<br>" +
    "strength : " + document.getElementById("strength").value + "<br>" +
    "stamina : " + document.getElementById("stamina").value + "<br>";

    result = [document.getElementById("name").value,
    document.getElementById("agility").value,
    document.getElementById("strength").value,
    document.getElementById("stamina").value,
  ];
  
}
else {
  var box = document.getElementById("box");
  box.innerHTML = "error";
}
localStorage.setItem("result",result);
}
