import './style.css';

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

// without recursive function
function sum(arr, n) {
    let sum = 0;
    for(let i = 0; i < n; i++) {
      sum += arr[i];
    }
    return sum;
  }

// with recursive function
function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return arr[n-1] + sum(arr, n-1);
    }
  }

// Test Cases
console.log(sum([1], 0)) // 0

console.log(sum([2, 3, 4], 1)) // 2

console.log(sum([2, 3, 4, 5], 3)) // 9
