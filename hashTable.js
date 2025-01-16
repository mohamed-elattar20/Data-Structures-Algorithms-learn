//  V1 bad as it's a O(n)
// function hash(key, arrLength) {
//   let total = 0;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrLength;
//   }
//   return total;
// }
// console.log(hash("hi", 10));

class HashTable {
  // size equals an odd num as it's a prime num
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
}
HashTable.prototype._hash = function (key) {
  let total = 0;
  let weired_prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * weired_prime + value) % this.keyMap.length;
  }
  return total;
};
HashTable.prototype.set = function (key, value) {
  let index = this._hash(key);
  if (!this.keyMap[index]) this.keyMap[index] = [];
  this.keyMap[index].push([key, value]);
};
HashTable.prototype.get = function (key) {
  let index = this._hash(key);
  if (this.keyMap[index]) {
    for (ele of this.keyMap[index]) {
      if (ele[0] === key) return ele[1];
    }
  }
  return;
};
HashTable.prototype.keys = function () {
  return [...new Set(this.keyMap.flatMap((arr) => arr.map((ele) => ele[0])))];
};
HashTable.prototype.values = function () {
  return [...new Set(this.keyMap.flatMap((arr) => arr.map((ele) => ele[1])))];
};

const hashMap = new HashTable();
console.log(hashMap._hash("hi"));
hashMap.set("hi", "goodbye!");
hashMap.set("hello", "mohamed");
hashMap.set("see you", "again");
hashMap.set("nice to", "meet you");
hashMap.set("nice to", "meet you");
hashMap.set("mos3addd", "roumia");
hashMap.set("mos3addd", "roumia");
console.log(hashMap.get("nice to"));
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap);
