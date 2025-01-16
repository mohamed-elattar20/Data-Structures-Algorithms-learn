// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(_data) {
    this.data = _data;
    this.children = [];
  }
}
Node.prototype.add = function (data) {
  this.children.push(new Node(data));
};
Node.prototype.remove = function (data) {
  this.children = this.children.filter((node) => node.data !== data);
};
// const n = new Node("a");
// n.add("b");
// console.log(n);
class Tree {
  constructor() {
    this.root = null;
  }
}
Tree.prototype.traverseBF = function (fn) {
  let arr = [this.root];
  while (arr.length) {
    const firstEle = arr.shift();
    arr.push(...firstEle.children);
    fn(firstEle);
  }
};
Tree.prototype.traverseDF = function (fn) {
  let arr = [this.root];
  while (arr.length) {
    const firstEle = arr.shift();
    arr.unshift(...firstEle.children);
    fn(firstEle);
  }
};

const letters = [];
const t = new Tree();
t.root = new Node("a");
t.root.add("b");
t.root.add("c");
t.root.children[0].add("d");

t.traverseBF((node) => {
  letters.push(node.data);
});
// console.log(t.root.children[0].children);
console.log(letters); //["a", "b", "c", "d"]

module.exports = { Tree, Node };
