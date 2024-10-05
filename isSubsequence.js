/*** Multiple Pointers - isSubsequence ***/

// Write a function called isSubsequence which takes in two strings and checks whether
// the characters in the first string form a subsequence of the characters in the second
// string. In other words, the function should check whether the characters in the first
// string appear somewhere in the second string, without their order changing.

// Examples:
// 1     isSubsequence('hello', 'by hecatl in lo world')
// 2     isSubsequence('sing', 'sting')
// 3     isSubsequence('abc', 'abracadabra')
// 4     isSubsequence('abc', 'acfg')

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

const isSubsequence = (str1, str2) => {
  if (!str1) return true;
  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
  }
  return false;
};

console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "acfg"));
