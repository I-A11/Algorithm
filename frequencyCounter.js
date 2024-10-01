// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// };

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

// console.log(same([1, 2, 3], [1, 4, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false (length mismatch)
// console.log(same([1, 2, 1], [1, 4, 4])); // false (frequency mismatch)

// const validAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of str1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of str2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!key in frequencyCounter2) {
//       return false;
//     }

//     if (frequencyCounter1[key] !== frequencyCounter2[key]) {
//       return false;
//     }
//   }

//   return true;
// };

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let frequencyCounter = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    frequencyCounter[letter]
      ? (frequencyCounter[letter] += 1)
      : (frequencyCounter[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!frequencyCounter[letter]) {
      return false;
    } else {
      frequencyCounter[letter] -= 1;
    }
  }
  return true;
};

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("cat", "car"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
