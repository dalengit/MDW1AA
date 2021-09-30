/* Custom Registration

Write a function that creates a custom car registration.

Your function should:

Replace 'A' with the number 4.
Replace 'B' with the number 8.
Replace 'S' with the number 5.
Replace 'E' with the number 3.
Any other number/letter is returned as the number itself

So passing:

MSSA SMK

should yield: M554 5MK

Caveats:

The registration must be 8 in length (which includes one space)
The first letter is to be ignored for conversion

The function should return the outcome

function customRegistration(registration) */

let reg = "MSSA SMK";

function customReg (registration) {
    // String into array 
    let splitReg = reg.split("");
    
    // Loop through array with conditions 
    for (let i = 1; i < 7; i++) {
        if (splitReg[i] == "A" ) { 
            splitReg.splice(i, 1, "4");

        } else if (splitReg[i] == "B") {
            splitReg.splice(i, 1, "8");

        } else if (splitReg[i] == "S") {
            splitReg.splice(i, 1, "5");

        } else if (splitReg[i] == "E") {
            splitReg.splice(i, 1, "3");
        }
    };
    // Output array into string
    console.log(splitReg.join(""));
};

// Call function
customReg(reg);