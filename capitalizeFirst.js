// capitalizeFirst
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

const capitalize = (arr) => {
  const result = [];
  if (arr.length === 0) return result;
  result.push(arr[0][0].toUpperCase() + arr[0].slice(1));

  return result.concat(capitalize(arr.slice(1)));
};

console.log(capitalize(["lord", "mad", "no", "cannot"]));
