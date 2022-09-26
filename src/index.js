const opensource = [
    "lodash",
    "react",
    "next",
    "strapi",
    "axios",
    "typescript"];


console.log(opensource);


const reversed = opensource.reverse();
console.log('reversed:', reversed);


const alphabet = opensource.sort();



opensource.forEach(function (element) { console.log(element) });

// function list(item){
//     console.log()

// }


const car = {
    brand: "Honda",
    model: "Civic",
    year: 1998
};

console.log(car);

//destrukce objektu
const { brand, model, year } = car;

console.log(`znacka: ${brand}, model: ${model}, cislo: ${car}`);
//

let randomNumber = Math.floor(Math.random() * 556);
console.log(randomNumber);