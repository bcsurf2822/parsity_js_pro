/**
 * A queue is a FIFO data structure
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    // your code here
    return this.items.push(item);
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
    return this.items.length === 0;
  }

  size() {
    // your code here
    return this.items.length;
  }
}

module.exports = { Queue };