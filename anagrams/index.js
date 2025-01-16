// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// 1).
function buildCharhashMap(string) {
  let obj = {};
  for (char of string) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) return false;
  let objA = buildCharhashMap(stringA);
  let objB = buildCharhashMap(stringB);

  for (key in objA) {
    // if (!objB.hasOwnProperty(key)) return false;
    if (objA[key] !== objB[key]) return false;
  }
  return true;
}

// 2).
// function anagrams(stringA, stringB) {
//   if (stringA.length !== stringB.length) return false;

//   let strSorted1 = stringA.toLowerCase().split("").sort().join("");
//   let strSorted2 = stringB.toLowerCase().split("").sort().join("");

//   return strSorted1 === strSorted2;
// }
console.log(anagrams("A tree", "A tree"));
// console.log(anagrams("A tree, a life, a bench", "A tree, a fence, a yard"));
module.exports = anagrams;
