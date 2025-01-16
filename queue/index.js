// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  arr;
  constructor() {
    this.arr = [];
  }
}
Queue.prototype.add = function (arg) {
  this.arr.unshift(arg);
  console.log(this.arr);
};
Queue.prototype.remove = function () {
  //   return this.arr.splice(-1)[0];
  return this.arr.pop();
  console.log(this.arr);
};

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
q.remove();
q.remove();
module.exports = Queue;
