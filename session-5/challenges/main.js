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