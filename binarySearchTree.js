class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

BinarySearchTree.prototype.insert = function (data) {
  let newNode = new Node(data);
  if (!this.root) {
    this.root = newNode;
    return this;
  }
  let currNode = this.root;
  if (data === this.root.data) return;
  while (true) {
    if (data < currNode.data) {
      if (currNode.left === null) {
        currNode.left = newNode;
        return this;
      } else {
        currNode = currNode.left;
      }
    } else if (data > currNode.data) {
      if (currNode.right === null) {
        currNode.right = newNode;
        return this;
      } else {
        currNode = currNode.right;
      }
    }
  }
};
// let tree = new BinarySearchTree();
// tree.insert(10);
// console.log(tree.insert(20));
// console.log(tree.insert(5));

BinarySearchTree.prototype.find = function (data) {
  if (data === undefined) return false;
  if (!this.root) return false;
  if (data === this.root.data) return true;

  let currNode = this.root;
  let isFound = false;

  while (currNode && !isFound) {
    if (data < currNode.data) {
      currNode = currNode.left;
    } else if (data > currNode.data) {
      currNode = currNode.right;
    } else {
      isFound = true;
    }
  }
  return isFound;
};

BinarySearchTree.prototype.breadthFirst = function () {
  let data = [],
    queue = [this.root];
  while (queue.length) {
    let ele = queue.shift();
    data.push(ele.data);
    if (ele.left) queue.push(ele.left);
    if (ele.right) queue.push(ele.right);
  }
  return data;
};

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(15);
tree.insert(5);
tree.insert(2);

console.log(tree.find(10));

console.log(tree.breadthFirst());
