// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 1).
// function fib(n) {
//   let fibSeries = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
//   }
//   console.log(fibSeries.at(n));
//   return fibSeries.at(n);
// }

// 2). Big O Notation  O(2*n) So Baddddddd Solution
function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

// 3). Memorized Solution for the fib
function memorize(fn) {
  const cachedData = {};
  return function (n) {
    if (cachedData[n]) return cachedData[n];

    // const result = fn(n); // good
    const result = fn.call(this, n); // also good
    cachedData[n] = result;
    console.log(cachedData);
    return result;
  };
}
// also good just the difference is this line const result = fn.apply(this, args);
// function memorize(fn) {
//   const cachedData = {};
//   return function (...args) {
//     console.log(args);
//     if (cachedData[args]) return cachedData[args];

//     const result = fn.apply(this, args);
//     cachedData[args] = result;
//     return result;
//   };
// }
fib = memorize(fib);

fib(5);
module.exports = fib;
