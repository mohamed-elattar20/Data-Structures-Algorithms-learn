function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) return false;
  let obj1 = {};
  for (let char of num1.toString()) {
    obj1[char] = obj1[char] + 1 || 1;
  }
  for (let char of num2.toString()) {
    if (!obj1[char]) return false;
    obj1[char] -= 1;
  }

  return true;
}
console.log(sameFrequency(182, 281)); // true

console.log(sameFrequency(34, 14)); // false

console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
