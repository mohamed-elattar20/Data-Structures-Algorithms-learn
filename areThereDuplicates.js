function areThereDuplicates(...vals) {
  let obj = {};
  for (let ele of vals) {
    obj[ele] = obj[ele] + 1 || 1;
  }
  for (key in obj) {
    if (obj[key] > 1) return true;
  }
  return false;
}

function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

function areThereDuplicates(...vals) {
  return new Set(vals).size !== vals.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
