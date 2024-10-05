/*** Coding Exercise 4: Frequency Counter / Multiple Pointers - areThereDuplicates ***/

// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. You can solve this using
// the frequency counter pattern OR the multiple pointers pattern.

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // false

// Restrictions:
//     Time - O(N)
//     Space - O(N)
// Bonus:
//     Time - O(N LOG N)
//     Space - O(1)

// const areThereDuplicates = (...args) => {
//   let frequencyCounter = {};
//   for (let val of args) {
//     frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter) {
//     if (frequencyCounter[key] !== 1) {
//       return true;
//     }
//   }
//   return false;
// };

const areThereDuplicates = (...args) => {
  args.sort((a, b) => a - b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};

console.log(areThereDuplicates(3, 2, 1));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "d"));
console.log(areThereDuplicates("a", "b", "c", "a", "a"));
