const arr = [
  16,
  true,
  "8",
  4,
  9,
  "6",
  36,
  false,
  49,
  9,
  "HiCoders",
  "false",
  1,
  4,
  "true",
];
const arrNumber = [];
const squareOfNumber = [];
const squareRootOfNumber = [];

//Create a new array with items of type number in this array. And print it to the console
for (let index = 0; index < arr.length; index++) {
  if (typeof arr[index] === "number") {
    arrNumber.push(arr[index]);
  }
}
console.log(arrNumber);

//Print the square of each item of the new array to the console.
for (let index = 0; index < arrNumber.length; index++) {
  const element = arrNumber[index];
  let square = element * element;
  squareOfNumber.push(square);
}

console.log(squareOfNumber);

//Print the square root of each item of the new array to the console
for (let index = 0; index < arrNumber.length; index++) {
  const element = arrNumber[index];
  let squareRoot = Math.sqrt(element);
  squareRootOfNumber.push(squareRoot);
}

console.log(squareRootOfNumber);

// Print the smallest item of the new array to the console
let min = arrNumber[0];

for (let index = 0; index < arrNumber.length; index++) {
  if (min > arrNumber[index]) {
    min = arrNumber[index];
  }
}

console.log(min);

//Print the largest item of the new array to the console
let max = arrNumber[0];

for (let index = 0; index < arrNumber.length; index++) {
  if (max < arrNumber[index]) {
    max = arrNumber[index];
  }
}

console.log(max);

//Print the sum of the items of the new array to the console
let total = 0;
for (let index = 0; index < arrNumber.length; index++) {
  total = total + arrNumber[index];
}

console.log(total);

//Print the average of the items of the new array to the console
let avarage = total / arrNumber.length;
console.log(avarage);
