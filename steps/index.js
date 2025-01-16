// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//  1).
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(`${"#".repeat(i)}${" ".repeat(n - i)}`);
//   }
// }

// 2).
function steps(n) {
  for (let row = 0; row < n; row++) {
    let str = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

steps(4);
module.exports = steps;
