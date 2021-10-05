const album = {
    title: '21', 
    artist: 'Adele',
    year: 2000, 
    songs: [{
        name: 'Hello'
    },{ 
        name: 'Rolling in the deep'
     },
    ],
    // Function inside object
    info () {
        return `${this.title} was created by ${this.artist}`;
    },
};

// Access prop through dot notation
console.log(album);
console.log(`Artist is ${album.artist}`);
console.log(album.info());

// JSON: 

const product = {
    "name": "Samsung TV", 
    "saleItem": false, 
    "dimensions": [
        {
            width: 1220,
            height: 900
        },
    ],
};

let productString = JSON.stringify(product);
console.log(JSON.stringify(product));

// Parse JSON 
let productObject = JSON.parse(productString);
console.log(productObject)

// You can also create an object EXPLIXITLY using the 'new' keyword and the object class
let car = new Object();``
car.model = "Ford";

console.log(car);


// ------------------------------------------ 


// Session 3: 

const firstName = 'Bob Smith';

// String length 
console.log(firstName.length);
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// Substring - 0 indexed, selects certain characters 
const bob = firstName.substr(0, 3);
console.log(bob);

// Split - outputs array, splits using specified delimitation
const phoneNumber = "07840 376 294";
const phoneParts = phoneNumber.split(' ');
console.log(phoneParts);

// indexOf - locate characted in str
const emailAddress = 'foo@bar.com';
const indexOfAtSymbol = emailAddress.indexOf("@");
console.log(indexOfAtSymbol);

// Arrays: 

// ------------ HIGHER ORDER FUNCTIONS ------------
// - function that takes another function as an argument r Returns a functions as its result

// .filter .startsWith

const countries = [
    'England', 
    'France', 
    'Germany', 
    'Spain', 
    'Zimbabwe', 
    'Haiti'
];

const matchedCountries = countries.filter(
    function(country) {
        return country.startsWith("F");
    });

    console.log("Matched", matchedCountries);

// ES6 Arrow functions: 
// Implied return and no need for explicit function definition
const meditarranean = countries.filter(country => 
    country.startsWith("S"));

console.log(meditarranean);

// .map - Creates a new array populated with result from calling a provided function 
// On every element in the array
const people = [
    { name: "John", title: "Mr" },
    { name: "Jill", title: "Mrs" },
];

// ES5
const peopleWithDateCreation = people.map(function (person) {
    return {
        name: person.name.toUpperCase(),
        title: person.title,
        dateCreated: new Date(),
    };
});
console.log(peopleWithDateCreation);

// ES6 
const es6 = people.map((person) => {
    return {
        name: person.name.toUpperCase(),
        title: person.title,
        dateCreated: new Date(),
    };
});

// .some - Case sensitive 
const fruits = ['Bannana', 'Apple', 'Pear'];

const fruitResult = fruits.some(fruit => fruit === "Apple");

console.log(fruitResult);

// .some with object
const team = [{
    name: "Manchester United",
    nationalities: ['Portugeuese', 'English', 'French']
},
{
    name: "Liverpool",
    nationalities: ['Egyptian', 'Brazillian']
}];

const englishPlayers = team.some(team => {
    return team.nationalities.includes("English");
});

// .sort - Comparison function/cases sensitive 
let letters = ['b', 'a', 'c'];
// Naturally ordered, assumes string 
console.log(letters.sort());

// E.g. Numbers 
let numbers = [1, 2, 30, 4];
// ES6
const sortedNumbers = numbers.sort((a,b) => {
    return a > b
});
console.log("Unsorted", numbers, "Sorted", sortedNumbers);

// .length 
let arr = [1, 2, 3, 4];

console.log(`Array length is:`, arr.length);

// .indexOf - tells you location of item in array
console.log(arr.indexOf(1));

// .push - add to an array 
const places = [];

places.push({
    name: 'Bolton',
    population: 10_000,
});

places.push({
    name: 'Blackburn',
    population: 10,
});

console.log(places);

// .pop - returns last item on array 
const blackburn = places.pop();
console.log(blackburn);

// ------------ Object Destructuring ------------

const person = {
    name: "John",
    address: {
        street: '1st street',
        city: 'London',
        postcode: 'SE1'
    },
    hobbies: ["sports", "films", "music"],
};

// Access properties within object
const { name, address, hobbies } = person;

// Access property within property
const {
    address: { street },
} = person; 

console.log("Street is: ", street);

// Array version 
const productDetails = ["Samsung", "Monitor"];
const [productName, productDescription] = productDetails;
console.log(productName);


// ------------ Operators ------------
let number = 1;

// Addition
// Increment by 1 
number = number + 1;
number++;
++number; 

// + 2 
number = number + 2;
// OR 
number += 2;

// Subtraction 
let digits = 2;
digits -= 2;

// Decrement by 1
// Post-decrement 
digits--;

// Pre-decrement 
--digits;

// Modulus i.e. remainder operator
let sum = 10 % 3;
console.log(sum);

// Equality 
let classSize = 12;

if (classSize === 12) {
    console.log("true");
} else {
    console.log("false");
};

const currentWeather = "Sunny";
const isHappy = 'raining' !== currentWeather;
