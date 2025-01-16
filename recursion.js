function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
// console.log(factorial(4));

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(4)); // 3
//         fib(3) + fib(2)
//   fib(2) + fib(1)   fib(1) +  fib(0)
//      1    +    1     +   1    +    0  = 3
// console.log(fib(5)); // 5
// console.log(fib(6)); // 8

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
  //      reverse(wesome) + "a"
  //       reverse(esome) + "w"
  //        reverse(some) + "e"
}

// console.log(reverse("awesome")); // 'emosewa'
// console.log(reverse("rithmschool")); // 'loohcsmhtir'

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("tacocat")); // true
// console.log(isPalindrome("amanaplanacanalpanama")); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false

const isOdd = (val) => val % 2 !== 0;
function someRecursive(arr, fn) {
  if (arr.length === 0) return false;
  if (fn(arr[0])) return true;
  return someRecursive(arr.slice(1), fn);
}

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

function flatten(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
// console.log(flatten([1, 2, 3, [4, 5]]));

function capitalizeFirst(arrOfStr) {
  if (arrOfStr.length === 0) return [];

  let [first, ...rest] = arrOfStr;
  return [first[0].toUpperCase() + first.slice(1), ...capitalizeFirst(rest)];
}

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

function capitalizeWords(arrOfStr) {
  if (arrOfStr.length === 0) return [];

  let [first, ...rest] = arrOfStr;
  console.log(first);
  return [first.toUpperCase(), ...capitalizeWords(rest)];
}
console.log(capitalizeWords(["car", "taco", "banana"])); // ['Car','Taco','Banana']
