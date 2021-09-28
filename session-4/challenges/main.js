console.log("Session 4");

// Destructuring 
const numbers = [1, 2, 3];

const [ firstNumber ] = numbers;
console.log(firstNumber);

const person = {
    name: "Jill Smith",
    age: 23,
};

const { name: fullname } = person; 
console.log("Full Name: ", fullname);

// If statement: 
let value = null; 

if (value) {
    console.log("This has a value");
} else {
    console.log("This doesn't have a value", value);
};

// Operators 
let count = 0;
let text = "";

// '||' Or operator checks the LHS for 0, "", NaN, null or undefined
let quantity = count || [];

// '??' Coalesce Operator always gives you a null or undefined check 
let food = null ?? "There is no food";
console.log(food);

/* '?.' Optional chaining enables you to read the value of a property located 
deep within a chain of connected objects without having to check that each reference
in the chain is valid. */ 
const zoo = {
    lions: ['leo'],
    zookeeper: { name: "Brenda" },
    describe() {
        console.log("Success");
    }
};

const leo = zoo.lions[0];
console.log(leo);

const bear = zoo?.bears?.[0];
console.log(bear);

zoo.describe?.();