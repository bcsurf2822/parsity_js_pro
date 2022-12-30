/**
 * A qeue is a FIFO data structure
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    // your code here
    this.items.push(item);
    return this.items;
  }

  dequeue() {
    // your code here
    return this.items.shift();
  }

  front() {
    // your code here
    return this.items[0];
  }

  isEmpty() {
    // your code here
    if (this.items.length <= 0) return true;
    return false;
  }

  size() {
    // your code here
    return this.items.length;
  }
}

const test = new Queue();
console.log(test.enqueue(1));
console.log(test.enqueue(2));
console.log(test.dequeue());
console.log(test.isEmpty());
console.log(test.size());
console.log(test);

module.exports = { Queue };
