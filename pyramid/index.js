// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 1).
// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(
//       `${" ".repeat(n - i)}${"#".repeat(2 * i - 1)}${" ".repeat(n - i)}`
//     );
//   }
// }

// 2).
function pyramid(n) {
  const midPoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let str = "";
    for (let col = 0; col < n * 2 - 1; col++) {
      if (midPoint - row <= col && midPoint + row >= col) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}
pyramid(4);
module.exports = pyramid;
