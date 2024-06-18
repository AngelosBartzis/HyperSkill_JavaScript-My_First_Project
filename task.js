const input = require('sync-input');

/*
 We have imported the 'sync-input' package for you.
 This package allows you to get user input.
 Like so:
 let name = input("Type your name: ");
 let age = Number(input("Type your age: "));
 You will need it in later stages.
console.log("Hello World!");
console.log("Prices:");
console.log("Bubblegum: $2");
console.log("Toffee: $0.2");
console.log("Ice cream: $5");
console.log("Milk chocolate: $4");
console.log("Doughnut: $2.5");
console.log("Pancake: $3.2");
*/

console.log("Earned amount:");
let bubbleGum = 202;
  console.log(`Bubblegum: $${bubbleGum}`);
let toffee = 118;
  console.log(`Toffee: $${toffee}`);
let iceCream = 2250;
  console.log(`Ice cream: $${iceCream}`);
let milkChoco = 1680;
  console.log(`Milk chocolate: $${milkChoco}`);
let dougHnut = 1075;
  console.log(`Doughnut: $${dougHnut}`);
let panCake = 80;
  console.log(`Pancake: $${panCake}`);

let inCome = bubbleGum + toffee + iceCream + milkChoco + dougHnut + panCake;
  console.log(`Income: $${inCome}`);
console.log("Staff expenses:");
let staffExp = Number(input());
  console.log(staffExp);
console.log("Other expenses:")
let otherExp = Number(input());
  console.log(otherExp);
let netIncome = inCome - (staffExp + otherExp);
  console.log(`Net income: $${netIncome}`);
