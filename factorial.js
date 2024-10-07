/*
Write a recursive function that takes a number.
This function should return factorial of the number.
If the number is negative this function should return None

Example:
1. factorial(1) #1
2. factorial(2) #2
3. factorial(3) #6
4. factorial(4) #24
5. factorial(0) #1
6. factorial(-1) #None
7. factorial(-100) #None
*/

//O(n)

const factorial = (n) => {
  if (n <= -1) return null;
  else if (n <= 1) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(-1));
