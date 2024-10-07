/*
Write a recursive function that takes an array which contains number.
This function should return product of these numbers.

Example{
1. product([1,3,5]) // 15
2. product([1,3,5,0]) // 0
3. product([-1,3,5]) // -15
4. product([-1]) // -1
5. product([3]) // 3
6. product([]) // None
*/

//O(n)

const arrayProduct = (arr) => {
  if (!arr.length) return null;
  if (arr.length === 1) return 1;
  return arr[0] * arrayProduct(arr.slice(1));
};

console.log(arrayProduct([1, 3, 5]));
console.log(arrayProduct([1, 3, 5, 0]));
console.log(arrayProduct([-1]));
console.log(arrayProduct([]));
