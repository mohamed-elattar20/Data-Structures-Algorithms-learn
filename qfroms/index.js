// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }
}
Queue.prototype.add = function (ele) {
  this.s1.push(ele);
};
Queue.prototype.remove = function () {
  while (this.s1.peek()) {
    this.s2.push(this.s1.pop());
  }
  const record = this.s2.pop();
  while (this.s2.peek()) {
    this.s1.push(this.s2.pop());
  }
  return record;
};
Queue.prototype.peek = function () {
  while (this.s1.peek()) {
    this.s2.push(this.s1.pop());
  }
  const record = this.s2.peek();

  while (this.s2.peek()) {
    this.s1.push(this.s2.pop());
  }
  return record;
};
//  2). good but we can't access the data property like this it might be a private property of the class Stack
// Queue.prototype.add = function (ele) {
//   this.s1.push(ele);
//   this.s2.data.unshift(this.s1.pop());
// };
// Queue.prototype.remove = function () {
//   return this.s2.pop();
// };
// Queue.prototype.peek = function () {
//   return this.s2.peek();
// };
const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
q.peek(); // returns 1
q.remove(); // returns 1
q.remove(); // returns 2
module.exports = Queue;
