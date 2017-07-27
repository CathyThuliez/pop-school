"use strict";

var user = {
  id: 123,
  firstname: "foo",
  lastname: "bar",
  birthyear: 2000,
  scores: [65, 48, 24]
};

console.log(user);
console.log(user.id);
console.log(user.firstname);
console.log(user.lastname);
console.log(user.birthyear);
console.log(user.scores);

for (var score of user.scores) {
  console.log(score);
}

user.lastname = "baz";
user.birthyear = user.birthyear - 100;
user.scores[2] = 100;

console.table(user.lastname);
console.table(user.birthyear);
console.table(user.scores);
