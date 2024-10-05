/*** Sliding Window - maxSubarraySum ***/

// Given an array of integers and a number, write a function called maxSubArraySum,
// which finds the maximum sum of a subarray with the length of the number passed
// to the function. Note that a subarray consist of consecutive elements from the
// original array. In the first example below, [100, 200, 300] is a subarray of the
// original array, but [100,300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
// maxSubarraySum([2,3], num) // null

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

const maxSubArraySum = (array, num) => {
  let max = 0;
  let temp = 0;

  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    max += array[i];
  }
  temp = max;
  for (let i = num; i < array.length; i++) {
    temp = temp - array[i - num] + array[i];
    max = Math.max(temp, max);
  }
  return max;
};

console.log(maxSubArraySum([100, 200, 300, 400], 2));
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
