// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// function fromLast(list, n) {
//   let counter = 0;
//   let node = list.head;
//   let wantedNode;

//   while (node) {
//     if (!node.next) return (wantedNode = list.getAt(counter - n));
//     counter++;
//     node = node.next;
//   }
//   return null;
// }

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;
