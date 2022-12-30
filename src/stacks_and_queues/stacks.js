/**
 * The stack data structure is a LIFO (last in first out) data structure.
 */
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    return this.items;
  }

  pop() {
    const poppedVal = this.items[this.items.length - 1];
    console.log(poppedVal);
    this.items.splice(this.items.length - 1, 1);
    console.log(this.items);
    return poppedVal;
  }

  peek() { }

  isEmpty() { }

  size() { }

  clear() { }

  print() { }
}

const test = new Stack();
console.log(test.push(1));
console.log(test.push(2));
console.log(test.pop());
console.log(test);

module.exports = { Stack };
