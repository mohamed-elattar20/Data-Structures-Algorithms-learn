class PriorityQueue {
  constructor() {
    this.values = [];
  }
}
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
PriorityQueue.prototype.enqueue = function (val, priority) {
  let newNode = new Node(val, priority);
  this.values.push(newNode);
  this.bubbleUp();
};
PriorityQueue.prototype.bubbleUp = function () {
  let idx = this.values.length - 1;
  const ele = this.values[idx];
  while (idx > 0) {
    let parentIdx = Math.floor((idx - 1) / 2);
    let parent = this.values[parentIdx];
    if (ele.priority <= parent.priority) break;
    this.values[parentIdx] = ele;
    this.values[idx] = parent;
    idx = parentIdx;
  }
};
PriorityQueue.prototype.dequeue = function () {
  let max = this.values[0];
  let end = this.values.pop();
  if (this.values.length > 0) {
    this.values[0] = end;
    this.sinkDown();
  }
  return max;
};

PriorityQueue.prototype.sinkDown = function () {
  let idx = 0;
  let length = this.values.length;
  let ele = this.values[0];
  while (true) {
    let leftChildIdx = 2 * idx + 1;
    let rightChildIdx = 2 * idx + 2;
    let leftChild, rightChild;
    let swap = null;

    if (leftChildIdx < length) {
      leftChild = this.values[leftChildIdx];
      if (leftChild.priority > ele.priority) {
        swap = leftChildIdx;
      }
    }

    if (rightChild < length) {
      rightChild = this.values[rightChildIdx];
      if (
        (swap === null && leftChild.priority > ele.priority) ||
        (swap !== null && rightChild.priority > leftChild.priority)
      ) {
        swap = rightChildIdx;
      }
    }

    if (swap === null) break;
    this.values[idx] = this.values[swap];
    this.values[swap] = ele;
    idx = swap;
  }
};

let hospital = new PriorityQueue();
hospital.enqueue("cold flu", 1);
hospital.enqueue("shooted with a gun", 5);
hospital.enqueue("high fever", 2);
console.log(hospital.dequeue());
console.log(hospital.dequeue());
console.log(hospital.dequeue());

console.log(hospital);
