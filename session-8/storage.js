// Storage: cookies, localStorage and sessionStorage 

// Local Storage - store any key-pair value in the browsers internal memory 

// Adding a new item to Local Storage
// Stored in devtools -> applications -> localstorage 
localStorage.setItem("name", "foo");
localStorage.setItem("sport", "rugby");

// Retrieve 'sport' from storage:
const sportValue = localStorage.getItem("sport");
console.log(sportValue);

// You can store objects/array too - but translate theminto JSON string 
// Array
const countries = ["france", "pakistan"];

localStorage.setItem("countries", JSON.stringify(countries));

const countriesFromStorage = JSON.parse(localStorage.getItem("countries"));

console.log(countriesFromStorage);

// Add object 
const item = {
    name: "Coke",
    price: 5,
}

localStorage.setItem(JSON.stringify(item));

const productFrom = JSON.parse(localStorage.getItem("item"));

console.log(productFrom);

