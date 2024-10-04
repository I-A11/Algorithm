// Write a function called sameFrequency
// Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

//  sameFrequency(182, 281) // true
//  sameFrequency(34, 14) // false
//  sameFrequency(3589578, 5879385) // true
//  sameFrequency(22, 222) // false

const sameFrequency = (num1, num2) => {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  num1 = num1.toString().split("");
  num2 = num2.toString().split("");

  if (num1.length !== num2.length) return false;

  for (let i of num1) {
    frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
  }
  for (let i of num2) {
    frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
