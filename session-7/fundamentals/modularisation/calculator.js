// Example functions
function add(...nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    // return nums.reduce((acc, curr));
    return total;
};

function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("You cannot divide by Zero!");
    }

    return num1 / num2;
};

// Node - exposes add function to make it available globally 
module.exports = {
    add, 
    divide,
};

