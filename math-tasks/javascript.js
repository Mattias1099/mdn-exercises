const myInt = 5;
const myFloat = 6.667;
console.log(myInt);
console.log(myFloat);

const anInteger = 67;
const aFloat = 67.67;

console.log(typeof myInt);
console.log(typeof myFloat);

const lotsOfDecimal = 1.766849589;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

let myNumber = "74";
myNumber += 3;
console.log(myNumber);
console.log(typeof myNumber);

myNumber = Number(myNumber);
console.log(myNumber);
console.log(typeof myNumber);

console.log(10 + 7);
console.log(9 * 8);
console.log(60 % 3);

const num1 = 10;
const num2 = 50;

console.log(9 * num1);
console.log(num1 ** 3);
console.log(num2 / num1);

console.log(5 + 10 * 3);
console.log((num2 % 9) * num1);
console.log(num2 + num1 / 8 + 2);
console.log((num2 + num1) / (8 + 2));

console.log(2 + 3 ** 2);

console.log(4 + 2 ** 3);
console.log((4 + 2) ** 3);

let newNum1 = 4;
newNum1++;
console.log(newNum1);
console.log(newNum1++); // ++ after is done after, newNum1 is still 5 in consoloe
console.log(newNum1); // here it is 6
console.log(++newNum1); // ++ before is done before, newNum1 is 8 here

let newNum2 = 6;
console.log(newNum2);
console.log(newNum2--);
console.log(newNum2);

let x = 3;
let y = 4;

console.log(x += y);
console.log(x /= y);
