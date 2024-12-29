// Q/A-01
let number1= 10;
let number2= 50;

const max = Math.max(number1, number2);
console.log(max);

// Q/A-02

let num2= 0;

if (num2> 0) {
  console.log("Positive");
} else if (num2< 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Q/A-03

let num3= 20;

if (num3 %2 === 0){
    console.log("Divisible by 10");
} else {
  console.log("Not divisible by 10");
}

// Q/A-04

let num1 = 5;

if (num1 % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Q/A-05

let char = 'M';

if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
  console.log(char + " is in the alphabet");
} else {
  console.log(char + " is not in the alphabet");
}

// Q/A-06

let temperature = 28;

if (temperature >= 30) {
  console.log("Hot");
} else if (temperature <= 25) {
  console.log("Cold");
} else {
  console.log("Normal");
}

// Q/A-07


let num01 = 10;
let num02 = 25;
let num03 = 15;

let maximum;

if (num01 >= num02 && num01 >= num03) {
  maximum = num01;
} else if (num02 >= num01 && num02 >= num03) {
  maximum = num02;
} else {
  maximum = num03;
}

console.log("The maximum number is: " + maximum);

// Q/A-08

let x = 0;

let result = (x % 2 === 0) ? "Even Number" : "Odd Number";

console.log(result);

// Q/A-09

let numOne = 56;
let numTwo = 40;

if (numOne > 30 && numTwo > 30) {
  console.log("Both are greater than 30");
} else {
  console.log("One or both are not greater than 30");
}0

// Q/A-10

let age = 16;

if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Not a teenager");
}