// Node - need to make it into a variable/if multiple functions need to be imported export as obj
const { add, divide } = require('./calculator');

// Require the whole document 
// const Calculator = require("./calculator");
// will have to use dot notation to access the functions within the object e.g. 
// console.log(Calculator.add(3, 5, 4))l

// Access functions 
console.log("Add using require", add(3, 3, 4));
console.log("Divide using require", divide(10, 5));