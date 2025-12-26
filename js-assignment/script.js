const output = document.getElementById("output");

let p = document.createElement("p");
p.textContent = "JS is working!";
output.appendChild(p);

console.log("Console is working!");
// ================== BAI 1 ==================
// Ask for 5 numbers and print them in reverse order (console)

let numbers1 = [];
for (let i = 0; i < 5; i++) {
  numbers1.push(Number(prompt("Enter number " + (i + 1))));
}

for (let i = numbers1.length - 1; i >= 0; i--) {
  console.log(numbers1[i]);
}

// ================== BAI 2 ==================
// Ask for participants, print names in alphabetical order (OL on web)

let count = Number(prompt("How many participants?"));
let names = [];

for (let i = 0; i < count; i++) {
  names.push(prompt("Enter participant name " + (i + 1)));
}

names.sort();

let ol = document.createElement("ol");
for (let name of names) {
  let li = document.createElement("li");
  li.textContent = name;
  ol.appendChild(li);
}
document.getElementById("bai2").appendChild(ol);

// ================== BAI 3 ==================
// Ask for 6 dog names, print reverse alphabetical order (UL on web)

let dogs = [];
for (let i = 0; i < 6; i++) {
  dogs.push(prompt("Enter dog name " + (i + 1)));
}

dogs.sort().reverse();

let ulDogs = document.createElement("ul");
for (let dog of dogs) {
  let li = document.createElement("li");
  li.textContent = dog;
  ulDogs.appendChild(li);
}
document.getElementById("bai3").appendChild(ulDogs);

// ================== BAI 4 ==================
// Ask numbers until 0, print from largest to smallest (console)

let numbers4 = [];
let input;

do {
  input = Number(prompt("Enter a number (0 to stop)"));
  if (input !== 0) {
    numbers4.push(input);
  }
} while (input !== 0);

numbers4.sort((a, b) => b - a);
console.log(numbers4);

// ================== BAI 5 ==================
// Stop when duplicate appears, print numbers ascending (console)

let numbers5 = [];

while (true) {
  let num = Number(prompt("Enter a number"));
  if (numbers5.includes(num)) {
    console.log("Number already entered!");
    break;
  }
  numbers5.push(num);
}

numbers5.sort((a, b) => a - b);
console.log(numbers5);

// ================== BAI 6 ==================
// Dice roll 1–6 until 6 appears, print results in UL

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let ul6 = document.createElement("ul");
let result;

do {
  result = rollDice();
  let li = document.createElement("li");
  li.textContent = result;
  ul6.appendChild(li);
} while (result !== 6);

document.getElementById("bai6").appendChild(ul6);

// ================== BAI 7 ==================
// Dice with N sides, roll until max appears, print results in UL

function rollDiceN(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

let sides = Number(prompt("Enter number of sides on the dice"));
let ul7 = document.createElement("ul");
let roll;

do {
  roll = rollDiceN(sides);
  let li = document.createElement("li");
  li.textContent = roll;
  ul7.appendChild(li);
} while (roll !== sides);

document.getElementById("bai7").appendChild(ul7);
