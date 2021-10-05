console.log("Functions");
// Hoisting 

// Function 
// Method 

// Function Declaration 
function sayMessage() {
    console.log("Hello");
}

// Invoke the function
sayMessage();

// Function Expressions - function name is the const
const sayAnotherMessage = function() {
    console.log("Another message called");
};

sayAnotherMessage();

// ------------- Invoke ASAP (Closure) --------------
(function () {
    console.log("This will run right away");
})();


// ------------- Functions with Params --------------
// Parameter (num) /Argument (value of num) 
function addFive(num) {
    return num + 5;
};

// Argument
let result = addFive(4);

// ES6 arrow function equivalent
const resultES6 = num => num + 5;

let log = resultES6(10);

// Another example 
const formatPerson = (personDetails) => {
    const {firstName, lastName, street, postCode, phone, age} = person; 

    return {
        name: `${firstName} ${lastName} ${age}`
    };
};

const formattedPerson = formatPerson({
    firstName: "Bob",
    lastName: "Seiger",
    age: 23,
});

// SRP - Single Responsibility Principle 
// KISS - Keep it simple stupid 
// DRY - Dont repeat yourself