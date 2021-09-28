// -------------- Loops --------------
// For loop 
for (let i = 0; i < 10; i++){
    let answer = i;
}

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    let doubled = numbers[i] * 2;
    // console.log(doubled);
};

//  While Loop - define iteration in loop
let i = 0;

while (i < 10) {
    // console.log(i);
    i++;
};

// For ... Of 
const films = ["Kill Bill", "Scream", "Saw"];

for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
}

let counter = 0;
for (let film of films) {
    console.log(counter, film);
    counter++;
}

// Array function forEach 
films.forEach(function (film, index) {
    console.log(index, film);
});

// ES6 
films.forEach((film, i) => {
    console.log(i, film);
});

// Function chaining
films
    .sort()
    .map((film) => film.toUpperCase())
    .forEach((filmAsUpper) => console.log(filmAsUpper));

// -------------- Conditionals --------------

// If statement
a = 10;
if (a < 5) {
    console.log("Less than 5");
} else {
    console.log("More than 5");
}

// If...else statement 

// Ternary 
const amount = 100; 
const shouldChargeTax = amount > 50 ? true : false;

// Switch statements
const coinInserted = 140;

switch (coinInserted) {
    case 50:
        console.log("Inserted 50p");
        break;
    case 100: 
        console.log(`Inserted ${coinInserted}`);
        break;
    default: 
        console.log("This machine only accepts 50p and £1.00");
        break;
}