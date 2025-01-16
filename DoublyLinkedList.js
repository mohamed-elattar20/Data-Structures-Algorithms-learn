class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

DoublyLinkedList.prototype.push = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++;
  return this;
};
// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// console.log(list);

DoublyLinkedList.prototype.pop = function () {
  if (!this.head) return;
  if (this.length === 1) {
    let returnedTail = this.tail;
    this.head = this.tail = null;
    this.length--;
    return returnedTail;
  }
  let tailItem = this.tail;
  this.tail = tailItem.prev;
  this.tail.next = null;
  tailItem.prev = null;
  this.length--;
  return tailItem;
};
// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list);

DoublyLinkedList.prototype.shift = function () {
  if (!this.head) return;
  let headItem = this.head;
  if (this.length === 1) this.head = this.tail = null;
  else {
    this.head = headItem.next;
    this.head.prev = null;
    headItem.next = null;
  }
  this.length--;
  return headItem;
};
// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list);

DoublyLinkedList.prototype.unShift = function (data) {
  const newNode = new Node(data);
  if (!this.head) this.head = this.tail = newNode;
  this.head.prev = newNode;
  newNode.next = this.head;
  this.head = newNode;
  this.length++;
  return this;
};
// const list = new DoublyLinkedList();
// list.unShift(1);
// list.unShift(2);
// list.unShift(3);
// list.unShift(4);
// console.log(list);

DoublyLinkedList.prototype.getAt = function (index) {
  if (index < 0 || index >= this.length) return null;
  if (index <= this.length / 2) {
    let counter = 0;
    let current = this.head;
    while (current) {
      if (index === counter) return current;
      counter++;
      current = current.next;
    }
  } else {
    let counter = this.length - 1;
    let current = this.tail;
    while (current) {
      if (index === counter) return current;
      counter--;
      current = current.prev;
    }
  }
  return -1;
};
// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// console.log(list.getAt(2));
// console.log(list);

DoublyLinkedList.prototype.setAt = function (index, data) {
  const element = this.getAt(index);
  if (element) {
    element.data = data;
    return true;
  }
  return false;
};
// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// console.log(list.setAt(4, "hello"));
// console.log(list);

DoublyLinkedList.prototype.insertAt = function (index, data) {
  if (index < 0 || index >= this.length) return false;
  if (index === 0) return !!this.unShift(data);
  if (index === this.length) return !!this.push(data);
  const newNode = new Node(data);
  let prevNode = this.getAt(index - 1);
  let node = this.getAt(index);
  let nextNode = this.getAt(index + 1);
  prevNode.next = newNode;
  newNode.prev = prevNode;
  newNode.next = node;
  if (nextNode) nextNode.prev = node;
  this.length++;
  return true;
};
// const list = new DoublyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// console.log(list.insertAt(3, "hello"));
// console.log(list);

DoublyLinkedList.prototype.removeAt = function (index) {
  if (index < 0 || index >= this.length) return;
  if (index === 0) return this.shift();
  if (index === this.length || index === this.length - 1) return this.pop();
  if (!index) return;
  let node = this.getAt(index);

  node.prev.next = node.next;
  node.next.prev = node.prev;
  node.next = null;
  node.prev = null;

  this.length--;
  return node;
};
const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.removeAt(1));
console.log(list);
