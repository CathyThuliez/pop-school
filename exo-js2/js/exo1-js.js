"use strict";

function check() {
  // var gas = document.getElementById("gas").checked;
  //
  // console.log("gas");


  var inputs = document.getElementsByTagName("input");
    for (var input of inputs) {
    console.log(input.checked);
  }

  inputs = document.getElementsByClassName("checklist-item");
  for (var input of inputs) {
    console.log(input.checked);
  }

  inputs = document.querySelectorAll("div label input.checkedlist-item");
  for (var input of inputs) {
    console.log(input.checked);
  }
}

function check() {
  var result = true;
  var inputs = document.querySelectorAll("div label input.checklist-item");
  for (var input of inputs) {
    if (!input.checked) {
      result = false;
      // document.querySelector("#message").innerHTML = "Attendez, il reste des choses à faire !";
      break;//casse la boucle
    }
  }

  if (result) {
    document.querySelector("#message").innerHTML = "Vous pouvez y aller !";
  } else {
    document.querySelector("#message").innerHTML = "Attendez, il reste des choses à faire !";
  }
}
