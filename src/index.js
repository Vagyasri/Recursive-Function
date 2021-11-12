import './style.css';

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
