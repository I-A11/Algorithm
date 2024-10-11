// Write a recursive function called isPalindrome which returns true if the
// string passed to it is a palindrome. Otherwise it returns false

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

const isPalindrome = (str) => {
  let start = 0;
  let last = str.length - 1;
  while (start < last) {
    if (str[start] !== str[last]) {
      return false;
    }
    start++;
    last--;
  }
  return true;
};

console.log(isPalindrome("tacocat"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("abbcc"));
