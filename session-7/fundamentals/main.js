console.log("Session 7");

// Difference between switch and if
const foodOption = 'crisps';

if (foodOption === 'crisps') {
    console.log("You chose crisps");
} else if (foodOption === "drinks") {
    console.log("You chose drinks");
}

switch (foodOption) {
    case "crisps": 
    console.log("You chose crisps");
    break;
    case "drinks": 
    console.log("You chose drinks");
    break;
};

// REST Operator 
const sumPrimes = (title = '', ...nums) => {
    console.log(title, nums);
};

console.log(
    "Sum of prime numbers", 
    sumPrimes("This is a prime number function, ", 1, 2, 3, 4, 5)
);

// SPREAD Operator 
const people = ['john', 'jill'];

const copyOfPeople = people; //Copying the reference 

copyOfPeople[0] = 'bob';
console.log(copyOfpeople, people);

// For arrays 
const copyOfPeopleES6 = [...people]; // Creates a new idnividual array does not make reference to the other (memory)

// Objects - Shallow copy 
const album = {
    year: 2000,
    artist: 'Ariana Grande',
    song: 'Hello',
};

// Referencing original object 
const copyOfAlbum = album; 
copyOfAlbum.year = 2040;
console.log("copyOfAlbum", copyOfAlbum, "Album", album);

// Creates new object with previous properties with spread - shallow copy 
const copyOfAlbumES6 = { ...album, label:"Sony"};

// Deep copy 
const film = {
    year: 2021,
    crew: ['John', 'John'],
    film: 'Pineapple Express',
    genre: 'Action',
}

// Converts into string then back into object - Will strip out functions inside the object 
const filmAsStr = JSON.stringify(film);
const copyOfFilm = JSON.parse(filmAsStr);

// ===============
const termMessage = document.getElementById("termMessage");
const termInput = document.getElementById("termInput");

termInput.addEventListener("keyup", function (event) {
  const currentValueEntered = event.target.value;

  if (/^\d$/.test(currentValueEntered)) {
    termMessage.style.display = "block";
  } else {
    termMessage.style.display = "none";
  }
});

window.addEventListener("load", function () {
  termMessage.style.display = "none";
});

// For in - still use the same scope - so use a let variable
// For of - creates a new scope - so use a const variable 


// PURE FUNCTIONS - takes two params and returns a value that we will know
const add = (num1, num2) => {
    const total = num1 + num2;

    return total;
};

// What is not a pure function? - random result 
const addNonPure = (num1, num2) => {
    const total = num1 + num2 + Math.random();

    return total;
};

console.log(addNonPure(5, 5));

// Modularisation 
// Refer to customer/basket/courier.js //calc/main-calc.js

