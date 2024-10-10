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

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(7));
console.log(fib(6));
console.log(fib(8));
