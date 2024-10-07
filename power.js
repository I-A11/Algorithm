/*
Write a recursive function that takes 2 arguments NUM and exponent.
This function should return NUM^exponent.

Example:
1. power(5,1)  //5
2. power(5,2)  //25
3. power(1,16)  //1
4. power(5,0)  //1
5. power(5,-2)  //1/25
*/

// const power = (base, exponent) => {
//   if (exponent === 0) return 1;
//   return base * power(base, exponent - 1);
// };

function power(number, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent < 0) {
    return (1 / number) * power(number, exponent + 1);
  } else {
    return number * power(number, exponent - 1);
  }
}

console.log(power(5, -2));
