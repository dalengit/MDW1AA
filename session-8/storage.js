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

localStorage.setItem("items", JSON.stringify(item));

const productFrom = JSON.parse(localStorage.getItem("item"));

console.log(productFrom);

// Remove items 
localStorage.removeItem("name");

// Session storage 

// Check if sessionstorage exists - do the same for local 
if (sessionStorage) {
    sessionStorage;
}

// Also have set and get methods 
sessionStorage.setItem("id", 1297)

// Same principles apply for array and objects in session storage 

// Cookies: 
// Create cookie 
document.cookie = `name=John Doe; expire=` + new Date(2025, 0, 1).toUTCString();