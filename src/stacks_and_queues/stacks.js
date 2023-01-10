/**
 * The stack data structure is a LIFO (last in first out) data structure.
 */
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    return this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    return this.items = [];
  }

  print() {
    return this.items;
  }
}

module.exports = { Stack };