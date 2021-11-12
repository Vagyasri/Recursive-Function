import './style.css';

// with recursive function
function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return arr[n-1] + sum(arr, n-1);
    }
  }