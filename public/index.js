"use strict";

var opensource = ["lodash", "react", "next", "strapi", "axios", "typescript"];
console.log(opensource);
var reversed = opensource.reverse();
console.log('reversed:', reversed);
var alphabet = opensource.sort();
opensource.forEach(function (element) {
  console.log(element);
}); // function list(item){
//     console.log()
// }

var car = {
  brand: "Honda",
  model: "Civic",
  year: 1998
};
console.log(car); //destrukce objektu

var brand = car.brand,
    model = car.model,
    year = car.year;
console.log("znacka: ".concat(brand, ", model: ").concat(model, ", cislo: ").concat(car)); //

var randomNumber = Math.floor(Math.random() * 556);
console.log(randomNumber);