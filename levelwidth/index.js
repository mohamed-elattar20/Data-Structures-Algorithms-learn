// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require("./node");

function levelWidth(root) {
  let arr = [root, "stop pointer"];
  let counters = [0];

  while (arr.length > 1) {
    const firstEle = arr.shift(); // in the first cycle == root
    if (firstEle === "stop pointer") {
      counters.push(0);
      arr.push("stop pointer");
    } else {
      arr.push(...firstEle.children);
      counters[counters.length - 1] += 1;
    }
  }
  return counters;
}
const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
// console.log(root);
console.log(levelWidth(root)); // [1,3,2]

module.exports = levelWidth;
