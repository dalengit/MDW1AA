/* Iterate from numbers 10 to 500 inclusive and sum up the numbers
that are divisible by only 3 or 5. Also print these numbers
to the screen as well as the total at the end. */

let sum = 0;

for (let i = 0; i <= 500; i ++) {
    if (i % 5 == 0 || i % 3 == 0) {
        console.log(i);
        sum += i;
    }
};

console.log(sum);