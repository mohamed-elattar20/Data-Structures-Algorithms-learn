// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //   return n >= 0
  //     ? parseFloat(n.toString().split("").reverse().join(""))
  //     : parseFloat(`-${n.toString().slice(1).split("").reverse().join("")}`);

  // Math.sign(number) if positive return 1  if negative return -1   if === 0 return 0
  return parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);
}

module.exports = reverseInt;
