// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// 1).
// function vowels(str) {
//   let arrOfVowels = ["a", "e", "i", "o", "u"];
//   let numOfVowels = 0;
//   for (char of str) {
//     if (arrOfVowels.includes(char.toLowerCase())) {
//       numOfVowels += 1;
//     }
//   }
//   return numOfVowels;
// }

// 2).
// function vowels(str) {
//   let vowelsArr = ["a", "e", "i", "o", "u"];
//   let obj = {};
//   for (let ch of str) {
//     if (vowelsArr.includes(ch.toLowerCase())) {
//       obj[ch] = obj[ch] ? obj[ch] + 1 : 1;
//     }
//   }
//   console.log(obj);
//   return Object.values(obj).reduce((acc, red) => acc + red, 0);
// }
// 2).
function vowels(str) {
  let matches = str.match(/[aeiou]/gi);
  console.log(matches);
  return matches ? matches.length : 0;
}
vowels("AEIOUUUUo");
module.exports = vowels;
