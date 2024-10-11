const fib = (n) => {
  if (n < 0) return null;

  const helper = (current, a, b) => {
    if (current > n) return [];
    return [a].concat(helper(current + 1, b, a + b));
  };
  return helper(0, 1, 1);
};

console.log(fib(7));
console.log(fib(6));
console.log(fib(8));
