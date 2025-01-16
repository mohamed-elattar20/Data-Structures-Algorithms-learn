// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// 1).
// function capitalize(str) {
//   return str
//     .split(" ")
//     .map((sentence) => `${sentence[0].toUpperCase()}${sentence.slice(1)}`)
//     .join(" ");
// }

// 2).
function capitalize(str) {
  let captitalizedStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      captitalizedStr += str[i].toUpperCase();
    } else {
      captitalizedStr += str[i];
    }
  }
  return captitalizedStr;
}
capitalize("a short sentence");

module.exports = capitalize;
