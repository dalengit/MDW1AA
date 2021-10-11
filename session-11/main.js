// RegEx - powerful and succinct way to search text 

const messageRE = /hello/;
const actualMessage = 'hello';

// Verifies if there is a match and returns bool 
if(messageRE.test(actualMessage)) {
    console.log("This matched", actualMessage);
};

const phrase =  `
The fat can ran down the street.
It was searching for a poop to eat.
`;

// Searches for 'at' globally ('g')
// const atRE = /at/g;
// console.log(atRE.exec(phrase));

const phone = "123-999";
const atRE = /[0-9]{3}/g;

console.log("Match", phone.match(atRE));
console.log("Exec", atRE.exec(phrase));
console.log("Exec", atRE.exec(phrase));
console.log("Exec", atRE.exec(phrase));