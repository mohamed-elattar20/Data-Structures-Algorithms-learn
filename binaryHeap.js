class MaxBinaryheap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
}
MaxBinaryheap.prototype.insert = function (data) {
  this.values.push(data);
  this.bubbleUp();
};
MaxBinaryheap.prototype.bubbleUp = function () {
  let idx = this.values.length - 1;
  const ele = this.values[idx];
  while (idx > 0) {
    let parentIdx = Math.floor((idx - 1) / 2);
    let parent = this.values[parentIdx];
    if (ele <= parent) break;
    this.values[parentIdx] = ele;
    this.values[idx] = parent;
    idx = parentIdx;
  }
};
MaxBinaryheap.prototype.extractMax = function () {
  let max = this.values[0];
  let end = this.values.pop();
  if (this.values.length > 0) {
    this.values[0] = end;
    this.sinkDown();
  }
  return max;
};

MaxBinaryheap.prototype.sinkDown = function () {
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
      if (leftChild > ele) {
        swap = leftChildIdx;
      }
    }

    if (rightChildIdx < length) {
      rightChild = this.values[rightChildIdx];
      if (
        (swap === null && leftChild > ele) ||
        (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryheap();
heap.insert(55);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);
