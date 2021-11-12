/* eslint-disable max-len */
import './style.css';

// 1. Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr

// without recursive function
function sum(arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i += 1) {
    sum += arr[i];
  }
  return sum;
}

// with recursive function
function sumRec(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return arr[n - 1] + sum(arr, n - 1);
}

// Test Cases
console.log(sum([1], 0)); // 0

console.log(sumRec([2, 3, 4], 1)); // 2

console.log(sum([2, 3, 4, 5], 3)); // 9

// 2. multiply the first n elements of an array to create the product of those elements

// without recursive function
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i += 1) {
    product *= arr[i];
  }
  return product;
}

// with recursive function
function multiplyRec(arr, n) {
  if (n <= 0) { return 1; } // base case
  return arr[n - 1] * multiplyRec(arr, n - 1); // recursive case
}

console.log(multiply([2, 3, 4], 2)); // 6
console.log(multiplyRec([2, 3, 4], 2)); // 6

// 3. Get factorial of a number

// without recursive function
function factorial(n) {
  let fact = 1;
  for (let i = 0; i < n; i += 1) {
    fact *= i + 1; // fact *= n - i
  }
  return fact;
}

// with recursive function
function factorialRec(n) {
  if (n <= 0) {
    return 1;
  }
  return n * factorialRec(n - 1);
}
console.log(factorial(5)); // 120
console.log(factorialRec(5)); // 120

// 4. Use Recursion to Create a Countdown (write a recursive function that returns an array containing the numbers 1 through n in descending order)

// without recursive function
function countdown(n) {
  const arr = [];
  for (let i = n; i > 0; i -= 1) {
    arr.push(i);
  }
  return arr;
}

// or
function countdownUnshift(n) {
  const arr = [];
  for (let i = 1; i <= n; i += 1) {
    arr.unshift(i);
  }
  return arr;
}

// with recursive function
function countdownRec(n) {
  if (n <= 0) {
    return [];
  }
  const arr = countdownRec(n - 1);
  arr.unshift(n);
  return arr;
}

// second version of recursive function
function countdownConcat(n) {
  return n <= 0 ? [] : [n].concat(countdownConcat(n - 1));
}

console.log(countdown(5)); // [5, 4, 3, 2, 1]
console.log(countdownUnshift(5)); // [5, 4, 3, 2, 1]
console.log(countdownRec(5)); // [5, 4, 3, 2, 1]
console.log(countdownConcat(5)); // [5, 4, 3, 2, 1]