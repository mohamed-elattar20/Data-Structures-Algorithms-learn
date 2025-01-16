// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// 1).
// function maxChar(str) {
//   let maxCharObj = {};
//   for (char of str) {
//     maxCharObj[char] = maxCharObj[char] + 1 || 1;
//   }
//   return Object.entries(maxCharObj).filter(
//     ([key, value]) => value === Math.max(...Object.values(maxCharObj))
//   )[0][0];
// }

// 2).
function maxChar(str) {
  let maxCharObj = {};
  let max = 0;
  let maxChar = "";
  for (char of str) {
    maxCharObj[char] = maxCharObj[char] + 1 || 1;
  }
  for (char in maxCharObj) {
    if (maxCharObj[char] > max) {
      max = maxCharObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}
maxChar("appllllle");
module.exports = maxChar;
