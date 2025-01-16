function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  let obj1 = {};
  //   let obj2 = {};
  for (let char of str1) {
    obj1[char] = obj1[char] + 1 || 1;
  }
  for (let char of str2) {
    if (!obj1[char]) return false;
    obj1[char] -= 1;
  }
  //   for (let key in obj1) {
  //     if (obj1[key] !== obj2[key]) return false;
  //   }
  return true;
}
// console.log(validAnagram("anagram", "nagaaram"));

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let ele of arr1) {
    obj1[ele] = obj1[ele] + 1 || 1;
  }
  for (let ele of arr2) {
    obj2[ele] = obj2[ele] + 1 || 1;
  }
  for (let key in obj1) {
    if (!(key ** 2 in obj2)) return false;
    if (obj2[key ** 2] !== obj1[key]) return false;
  }
  return true;
}
// console.log(same([1, 2, 3, 6, 2], [4, 1, 9, 36, 2]));

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
//     }
//   }
//   return false;
// }
// Refactor
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// function countUniqueValues(arr) {
//   let obj = {};
//   for (ele of arr) {
//     if (!obj[ele]) {
//       obj[ele] = 1;
//     }
//   }
//   return Object.values(obj).reduce((acc, red) => acc + red, 0);
// }
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let pointer1 = arr[i];
    let pointer2 = arr[i + 1];
    if (pointer1 !== pointer2) counter++;
  }
  return counter;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
