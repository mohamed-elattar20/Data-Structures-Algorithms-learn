// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.arr = [];
  }
}
Stack.prototype.push = function (ele) {
  this.arr.push(ele);
};
Stack.prototype.pop = function () {
  // return this.arr.splice(-1)[0];
  return this.arr.pop();
};
Stack.prototype.peek = function () {
  return this.arr[this.arr.length - 1];
};

module.exports = Stack;
