/* Phone number challenge
Given the following UK phone mumber patterns, 
write a function 'isValidUkPhoneNumber(phoneNumber) that validates them all(returns true)

07856766543
0785 676 6543
+447856766543
+44 7856766543
(44) 7856766543

You will need to pass each one to the function and ensure it returns true. 
There is no need to add any edge case logic. 
*/

const phoneNumberRE = /[0-9]?/;
const phoneNumber1 = "07856766543";
const phoneNumber2 = "0785 676 6543";
const phoneNumber3 = "+447856766543";
const phoneNumber4 = "+44 7856766543";
const phoneNumber5 = "(44) 7856766543";


const isValidUkPhoneNumber = (number) => {
    if(phoneNumberRE.test(number)) {
        console.log("Valid number: ", number);
        return number;
    } else {
      console.error("Incorrect Regular Expression")
    }
};

isValidUkPhoneNumber(phoneNumber1);
isValidUkPhoneNumber(phoneNumber2);
isValidUkPhoneNumber(phoneNumber3);
isValidUkPhoneNumber(phoneNumber4);
isValidUkPhoneNumber(phoneNumber5);