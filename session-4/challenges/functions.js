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