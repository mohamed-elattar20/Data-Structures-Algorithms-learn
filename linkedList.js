class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// let first = new Node("hi");
// first.next = new Node("there");
// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
SinglyLinkedList.prototype.push = function (data) {
  const dataNode = new Node(data);
  if (!this.head) {
    this.length++;
    return (this.head = this.tail = dataNode);
  }
  let node = this.head;
  while (node.next) {
    node = node.next;
  }
  node.next = dataNode;
  this.tail = dataNode;
  this.length++;
};
// SinglyLinkedList.prototype.push = function (data) {
//   const dataNode = new Node(data);
//   if (!this.head) return (this.head = this.tail = dataNode);
//   this.tail.next = dataNode;
//   this.tail = dataNode;
//   this.length++;
//   return this;
// };
// let list = new SinglyLinkedList();
// list.push("hello");
// list.push("there");
// console.log(list);

SinglyLinkedList.prototype.pop = function () {
  if (!this.head) return;
  if (!this.head.next) {
    let res = this.head;
    this.head = this.tail = null;
    this.length = 0;
    return res;
  }
  let nextNode = this.head;
  let prevNode = this.head;
  while (nextNode.next) {
    prevNode = nextNode;
    nextNode = nextNode.next;
  }
  this.tail = prevNode;
  this.tail.next = null;
  this.length--;
  return nextNode;
};

// let list = new SinglyLinkedList();
// list.push("hello");
// list.push("there");
// list.push("goodbye");
// list.push("mohamed");
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list);

SinglyLinkedList.prototype.shift = function () {
  if (!this.head) return;
  if (!this.head.next) this.tail = null;

  let firstEle = this.head;
  this.head = this.head.next;
  this.length--;
  return firstEle;
};
// let list = new SinglyLinkedList();
// list.push("hello");
// list.push("there");
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

// console.log(list);

SinglyLinkedList.prototype.unShift = function (data) {
  if (!this.head) {
    this.length++;
    return (this.head = this.tail = new Node(data));
  }
  const newNode = new Node(data, this.head);
  this.head = newNode;
  this.length++;
  return this;
};
// let list = new SinglyLinkedList();
// list.unShift("hello");
// list.unShift("there");
// list.unShift("mohamed");
// console.log(list);

SinglyLinkedList.prototype.getAt = function (index) {
  if (!this.head) return -1;
  let counter = 0;
  let currNode = this.head;
  while (currNode) {
    if (counter === index) return currNode;
    currNode = currNode.next;
    counter++;
  }
  return -1;
};
// let list = new SinglyLinkedList();
// list.push("hello");
// list.push("there");
// list.push("mohamed");
// console.log(list.getAt(0));
// console.log(list.getAt(1));
// console.log(list.getAt(2));
// console.log(list.getAt(9));
// console.log(list);

SinglyLinkedList.prototype.setAt = function (index, data) {
  const updatedNode = this.getAt(index);
  if (updatedNode !== -1) {
    updatedNode.data = data;
    return true;
  } else {
    return false;
  }
};
// let list = new SinglyLinkedList();
// list.push("hello");
// list.push("there");
// list.push("mohamed");
// console.log(list.setAt(1, "aaaaaaaaaaa"));
// // console.log(list.getAt(0));
// // console.log(list.getAt(1));
// // console.log(list.getAt(2));
// // console.log(list.getAt(9));
// console.log(list);

SinglyLinkedList.prototype.insertAt = function (index, data) {
  if (index === 0) return !!this.unShift(data);
  if (index > this.length || index < 0) return false;
  if (index === this.length) return !!this.push(data);
  const foundedNode = this.getAt(index - 1);
  if (foundedNode !== -1) {
    let nextNode = foundedNode.next;
    foundedNode.next = new Node(data, nextNode);
    this.length++;
    return true;
  } else return false;
};
// let list = new SinglyLinkedList();
// list.push("1");
// list.push("2");
// list.push("3");
// list.push("4");
// console.log(list.insertAt(2, "hello"));
// console.log(list);

SinglyLinkedList.prototype.removeAt = function (index) {
  if (index === 0) return !!this.shift();
  if (index === this.length - 1) return !!this.pop();
  if (index >= this.length || index < 0) return false;

  const prevNode = this.getAt(index - 1);
  const currNode = this.getAt(index);
  const nextNode = this.getAt(index + 1);
  prevNode.next = nextNode;
  this.length--;
  return currNode;
};
// let list = new SinglyLinkedList();
// list.push("1");
// list.push("2");
// list.push("3");
// list.push("4");
// console.log(list.removeAt(1));
// console.log(list);

SinglyLinkedList.prototype.print = function () {
  let arr = [];
  let current = this.head;
  while (current) {
    arr.push(current.data);
    current = current.next;
  }
  console.log(arr);
};

SinglyLinkedList.prototype.reverse = function () {
  let currentNode = this.head;
  this.head = this.tail;
  this.tail = currentNode;
  let nextNode = null;
  let prevNode = null;

  for (let i = 0; i < this.length; i++) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  this.print();
  return this;
};
let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.print();
console.log(list);
console.log(list.reverse());
