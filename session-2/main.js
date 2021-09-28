document.getElementById('dateNow').innerHTML = new Date();

const PI = 3.1345;

// Naming Conventions 
let lastName; // camel-case
let age_of_person = 23; //snake-case

// Variables can start with letter, $ or _

// DO NOT DO THIS 
let a;
let b;
let c;

// DATATYPES 

// Int
let numberOfSubscribers = 10000;
let zooAnimals = 20;

// String 
let reviewComments = 'String boss';
// Backticks also interpreted as string e.g. $ used for string literal
let zooComments = `The number of animals in a zoo is ${zooAnimals}`;
console.log(zooComments);

// Arrays
let names = [ 'Jonh', 'Jill', 'Art'];

let mixedArr = [12, 'hello', 99.99];

countries = ["england", "france", "spain"];

// Objects 
const person = {
    name: "Dalen",
    height: "165cm",
    race: "china",
    color: "beige",
    review: [],
};


// Adding another object into = push review object into person object -> array of review
const review = {
    date: new Date(),
    comment: "nice dude",
    stars: 3
};

person.review.push(review);

// Other method to add obj into obj
person["review"].push(
    {
        date: new Date(),
        comment: "Another review",
        stars: 4
    });

    console.log(person);

// Boolean 
let isItRaining;

console.log(isItRaining); // Returns undefined 

isItRaining = false;

console.log(isItRaining); // Returns false

// Null 
let response = null;

// Undefined 
let score; // Undefined variable 

// Multi-dimensional array 
let shoppingBasket = [
    ["Apples", 2, 0.43],
    ["Pears", 4, 0.5],
];

// JSON 
const person1 = {
    name: "Dalen Chan",
    age: 23, 
    address: {
        Street: "Benjamin lane"
    }
};

console.log(person1);

// JSON.stringify - turns JS object into JSON string
console.log(JSON.stringify(person1));

// Object containing function 
 const car = {
     manufacturer: "Ford",
     model: "Ka",
     describe() {
         return `${this.manufacturer}, ${this.model}`;
     },
 }

 console.log(car.describe());

//  JSON.parse - turns JSON string into JS object
const personAsStr = JSON.stringify(person1);

console.log(JSON.parse(personAsStr));

/* If property (key) name is the same as one that has already been declared you can use it
without using key-value pair structure*/
let name = 'Specialized';
let bike =  {
    name,
} 
console.log(bike);

// Date 
const dateNow = new Date();

console.log(dateNow);