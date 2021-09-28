/* Write a program that produces fibonacci sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21 - A sequence in which the
next iteration is the addition of the previous two numbers */

let a = 0, b = 1, sum = 0;

console.log(a);
console.log(b);

for (let i = 0; b < 50; i++) {
    sum = a + b;
    if(sum < 50) {
        console.log(sum);
    }
    a = b;
    b = sum;
}