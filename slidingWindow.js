// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// const maxSubarraySum = (arr, n) => {
//   if (n > arr.length) {
//     return null;
//   }
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - n + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < n; j++) {
//       //   console.log(arr[i + j]);

//       temp += arr[i + j];
//       //   console.log(temp);
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// };

const maxSubarraySum = (arr, n) => {
  if (n > arr.length) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
