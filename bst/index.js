// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(_data) {
    this.data = _data;
    this.left = null;
    this.right = null;
  }
}

Node.prototype.insert = function (data) {
  if (data === this.data) return false;
  if (data < this.data && this.left) {
    this.left.insert(data);
  } else if (data < this.data) {
    this.left = new Node(data);
  } else if (data > this.data && this.right) {
    this.right.insert(data);
  } else if (data > this.data) {
    this.right = new Node(data);
  }
};

Node.prototype.contains = function (data) {
  if (this.data === data) return true;

  if (data > this.data && this.right) {
    return this.right.contains(data);
  } else if (data < this.data && this.left) {
    return this.left.contains(data);
  }
  return false;
};

let node = new Node(10);
node.insert(10);
node.insert(5);
node.insert(15);
node.insert(120);
console.log(node.contains(120));
console.log(node);

module.exports = Node;
