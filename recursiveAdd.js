/*
Write a recursive function that takes a number.
This function should add up all the numbers and return the sum.

Example:
1. sum_range(0) # 0
2. sum_range(1) # 1
3. sum_range(2) # 3
4. sum_range(3) # 6
5. sum_range(-1) # -1
6. sum_range(-4) # -10
*/

//O(n)

const addRecursive = (num) => {
  if (num === 0) {
    return 0;
  } else if (num > 0) {
    return num + addRecursive(num - 1);
  } else {
    return num + addRecursive(num + 1);
  }
};

console.log(addRecursive(3));
console.log(addRecursive(-4));
