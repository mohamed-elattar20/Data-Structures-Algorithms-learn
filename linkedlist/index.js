// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(_data, _next = null) {
    this.data = _data;
    this.next = _next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
const list = new LinkedList();

// LinkedList.prototype.insertFirst = function (data) {
//   this.head = new Node(data, this.head);
// };
LinkedList.prototype.insertFirst = function (data) {
  this.insertAt(data, 0);
};

// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// console.log(list);
// console.log(list.head);

LinkedList.prototype.size = function () {
  let count = 0;
  let currentNode = this.head;
  while (currentNode) {
    count++;
    currentNode = currentNode.next;
  }
  return count;
};
// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// console.log(list.size());

// LinkedList.prototype.getFirst = function () {
//   return this.head;
// };

LinkedList.prototype.getFirst = function () {
  return this.getAt(0);
};

// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// console.log(list.getFirst());

// LinkedList.prototype.getLast = function () {
//   let currentNode = this.head;
//   if (!currentNode) return null;

//   while (currentNode) {
//     if (!currentNode.next) {
//       return currentNode;
//     }
//     currentNode = currentNode.next;
//   }

//   return currentNode;
// };

LinkedList.prototype.getLast = function () {
  return this.getAt(this.size() - 1);
};
// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// console.log(list.getLast());

LinkedList.prototype.clear = function () {
  this.head = null;
};
// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// list.clear();
// console.log(list);

// LinkedList.prototype.removeFirst = function () {
//   if (!this.head) return null;
//   this.head = this.head.next;
// };
LinkedList.prototype.removeFirst = function () {
  this.removeAt(0);
};
// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// console.log(list);
// list.removeFirst();
// console.log(list);

// LinkedList.prototype.removeLast = function () {
//   if (!this.head) return;
//   if (!this.head.next) return (this.head = null);

//   let currentNode = this.head.next;
//   let prevNode = this.head;
//   while (currentNode.next) {
//     prevNode = currentNode;
//     currentNode = currentNode.next;
//   }
//   prevNode.next = null;
// };
LinkedList.prototype.removeLast = function () {
  this.removeAt(this.size() - 1);
};
// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// console.log(list);
// list.removeLast();
// console.log(list);

// LinkedList.prototype.insertLast = function (data) {
// MY SOLUTION
// *****************
// if (!this.head) return (this.head = new Node(data));
// if (!this.head.next) return (this.head.next = new Node(data));
// console.log(this);
// let currNode = this.head.next;
// while (currNode.next) {
//   currNode = currNode.next;
// }
// currNode.next = new Node(data);
//
// INSTRUCTOR SOLUTION
// *****************
// const last = this.getLast();
// if (last) {
//   last.next = new Node(data);
//   // If the list is EMPTY
// } else {
//   this.head = new Node(data);
// }
// };
LinkedList.prototype.insertLast = function (data) {
  this.insertAt(data, this.size());
};
// list.insertFirst("a");
// list.insertFirst("b");
// list.insertLast("c");
// console.log(list);
// console.log(list.getLast());

LinkedList.prototype.getAt = function (index) {
  let count = 0;
  let currentNode = this.head;
  while (currentNode) {
    if (count === index) return currentNode;
    count++;
    currentNode = currentNode.next;
  }
  return null;
};
// list.insertLast(1);
// list.insertLast(2);
// list.insertLast(3);
// list.insertLast(4);
// console.log(list.getAt(0).data);
// console.log(list.getAt(1).data);
// console.log(list);
// console.log(list.head);

LinkedList.prototype.removeAt = function (index) {
  if (!this.head) return null;
  if (index === 0) this.head = this.head.next;
  let item = this.getAt(index);

  let prevItem = this.getAt(index - 1);
  let nextItem = this.getAt(index + 1);
  if (!prevItem || !item) return;

  prevItem.next = nextItem ? nextItem : null;
};
// list.insertLast(1);
// list.insertLast(2);
// list.insertLast(3);
// list.insertLast(4);
// console.log(list);
// console.log(list.removeAt(0));
// console.log(list);

LinkedList.prototype.insertAt = function (data, index) {
  if (!this.head) return (this.head = new Node(data));
  if (index === 0) return (this.head = new Node(data, this.head));

  const prevItem = this.getAt(index - 1);
  if (!prevItem) return (this.getAt(this.size() - 1).next = new Node(data));

  const node = new Node(data, prevItem.next);
  prevItem.next = node;
};

// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// list.insertAt("Hi", 10);
// console.log(list.getAt(1)); // returns node with data 'Hi'
// console.log(list.head.next);

LinkedList.prototype.forEach = function (fn) {
  let counter = 0;
  let node = this.head;
  while (node) {
    fn(node, counter);
    counter++;
    node = node.next;
  }
};

// list.insertLast(1);
// list.insertLast(2);
// list.insertLast(3);
// list.insertLast(4);

// list.forEach((node, count) => {
//   console.log(count);
//   node.data += 10;
// });
// console.log(list.getAt(0)); // Returns node with data '11'

module.exports = { Node, LinkedList };
