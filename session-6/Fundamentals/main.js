console.log("Fundamentals 6");

// Callback functions: 
const people = ['Dalen', 'Walen', 'Shalen'];

const looper = (arg) => {
    console.log('arg', arg);
};

/* Synchronous function - (happens one after another) calls another 
function onto another variable */
people.forEach(looper);

// Fast food example: 
const makeDrink = (callback) => {
    setTimeout(() => {
        console.log("Making drink");
        callback(); // Call the downstream function 
    }, 3000);
};

const makeFries = (callback) => {
    console.log("Making fries");
};

const makeBurger = (callback) => {
    console.log("Making burger");
};

const orderMeal = () => {
    makeBurger();
    makeDrink(makeFries)
};

orderMeal();