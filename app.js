/*
Write a recursive function that takes a number.
This function should return N-th number of the fibonacci series.
If the number is negative this function should return None.

Example:
1. fibonacci(-1) # None
2. fibonacci(0) # 1
3. fibonacci(1) # 1
4. fibonacci(2) # 2
5. fibonacci(3) # 3
6. fibonacci(4) # 5
7. fibonacci(5) # 8
*/

// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(7));
// console.log(fib(6));
// console.log(fib(8));

function fibonacciSequence(n) {
  // If n is negative, return null (sequence is undefined for negative numbers)
  if (n < 0) return null;

  // This helper function will recursively compute the Fibonacci sequence
  function helper(current, a, b) {
    // Base case: if current is greater than n, stop recursion
    if (current > n) return [];

    // Compute the next Fibonacci number and recursively continue
    return [a].concat(helper(current + 1, b, a + b));
  }

  // Start the recursion with the first two Fibonacci numbers (1, 1)
  return helper(0, 1, 1);
}

// Example usage:
console.log(fibonacciSequence(5)); // Output: [1, 1, 2, 3, 5, 8]

// console.log(fibonacciSequence(7));
// console.log(fibonacciSequence(6));
// console.log(fibonacciSequence(8));

const fib = (n) => {
  if (n < 0) return null;

  const helper = (current, a, b) => {
    if (current > n) return [];
    return [a].concat(helper(current + 1, b, a + b));
  };
  return helper(0, 1, 1);
};

console.log(fib(7));
console.log(fib(6));
console.log(fib(8));
