const numbers = [10, 13, 20, 25, 38, 35, 40];

//task 1

//q1

const greaterThan25 = numbers.filter((num) => {
  if (num >= 25) {
    return true;
  }
});

console.log(greaterThan25);

//q2

const divBy5 = numbers.filter((num) => {
  if (num % 5 == 0) {
    return true;
  }
});

console.log(divBy5);

//task 2

//q3

const numSquared = numbers.map((num) => {
  return num * num;
});

console.log(numSquared);

//q4

const times2 = numbers.map((num) => {
  return num * 2;
});

console.log(times2);

//task 3

//q4

const greaterThan20 = numbers.filter((num) => {
  if (num >= 20) {
    return true;
  }
});

const greaterThan20Squared = greaterThan20.map((num) => {
  return num * num;
});

console.log(greaterThan20Squared);

//q5

const times3 = divBy5.map((num) => {
  return num * 3;
});

console.log(times3);

//task 4

//q1

let fruits = ["banana", "berry", "pineapple", "apple", "kiwi", "coconut"];

console.log(fruits);

//q2

let tempretures = [35, 90, 45, 70, 53];

let celcius = [];

let toCelsius = tempretures.forEach((heat) => {
  celcius.push(heat - 32);
});

console.log(celcius);

//i aint gon finsih de whole challenge im sorry y'all
