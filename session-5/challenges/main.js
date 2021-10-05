console.log("Functions");

// Functions :

// Declaration (Global scope):
function debitAccount (account, amount) {
    account.total += amount;

    return account; 
};

// Invoke/calling function:
const account = {
    total: 0
};

const amount = 100;

debitAccount(account, amount);

// Function Expression : 
const greet = function (message) {
    return `Hello ${message}`;
};

console.log(greet("Frank"));

// Function Expression as arrow: 
const messageRenderer = (message) => `$Hello ${message}`;

console.log(greet("Frank"));

// Functions with default values:

const makeCoffee = (
    // Default object
    coffeeType = "americano",
    coffeeOptions = {
      hasMilk: true,
      hasSugar: false,
      toppings: [],
    }
  ) => {
    console.log(
      `Coffee ${coffeeType}, Coffee Options ${JSON.stringify(coffeeOptions)}`
    );
  
    let coffeeMessage = "";
  
    if (coffeeType === "cappuccino") {
      coffeeOptions.toppings.forEach(function (topping) {
        coffeeMessage += `Added ${topping}, `;
      });
  
      coffeeMessage += "enjoy your " + coffeeType;
    } else {
      coffeeMessage = "Sorry we do not sell " + coffeeType;
    }
  
    return coffeeMessage;
  };
  
  const coffeeType = "cappuccino";

  const coffeeOptions = {
    toppings: ["vanilla"],
    hasSugar: true,
    hasMilk: false,
  };
  
  console.log(makeCoffee(coffeeType, coffeeOptions));

// Error Handling: 

const divideNumbers = (first, second) => {

    if (second === 0) {
        throw new Error("Bruh");
    }
    return first/second; 
};

try {
    const dividedValue = divideNumbers(10, 0);
    const value = `${dividedValue}`;
    
    console.log("divideNumbers =>", value);
} catch (err) {
    // Handle error gracefully with a default 
    console.error("Bruh momento")
    value = 0;
};

// -------------- More Operators --------------

// REST Operator 
const createPersonObject = (firstName, lastName) => {
  return {
    fullName: `${firstName} ${lastName}`,
  };
};

console.log(createPersonObject("John", "Doe"));

const createPersonObjectWithRest = (firstName, lastName, ...details) => {
  console.log(
    `createPersonObjectWithRest: firstName ${firstName}, Details: ${details}`,
    details
  );

  // Destructuring:
  const [street, city, postCode, phone, nino] = details;

  const person = {
    firstName,
    lastName,
    addressLine1: street,
    city,
    postCode,
    phone,
    nationalInsuranceNumber: nino,
  };

  return person;
};

console.log(
  createPersonObjectWithRest(
    "John",
    "Rest",
    "1st Street",
    "Manchester",
    "M2",
    "0987655433",
    "223432421342423423"
  )
);

// Spread Operator 
// Deep and Shallow Copy
const numbers = [0, 1, 2, 3];

// Copies references
const copyOfNumbers = numbers; 

// Both are now 99 at position 0:
copyOfNumbers[0] = 99; 

console.log("Numbers", numbers, "CopyOfNumbers", copyOfNumbers);

// Copy with spread operator
const copyOfNumbersES6 = [...numbers];

copyOfNumbersES6[0] = 77;
console.log("Numbers", numbers, "CopyOfNumbersES6", copyOfNumbersES6);

// Objects: 
const person = {
    name: "John", 
    address: {
        places: ["A", "B"],
        coordinates: {
            long: 99,
            lat: 88.
        },
    },
};

// ES6 copy (spread operator): 
const copiedPerson = { ...person };

copiedPerson.name = 'Foo';

// Shallow Copy be careful:
copiedPerson.address.places.push("C");

console.log(person, copiedPerson);

// JSON Parse/Stringify - Deep copy: 
const personStr = JSON.stringify(person);
const copiedPersonStr = JSON.parse(personStr);

console.log(personStr, copiedPersonStr);