// Write a recursive function called flatten
// which accepts an array of arrays and returns a new array
// with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
const flatten = (arr) => {
  if (arr.length === 0) return [];
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
};

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
