const { Stack } = require("./stacks");

describe("Stack", () => {
  it("should push an item", () => {
    const stack = new Stack();
    stack.push(1);

    expect(stack.items).toEqual([1]);
  });

  it("should pop an item", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.items).toEqual([1]);
  });
  it.skip("should peek an item", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.items).toEqual([1, 2]);
  });
  it.skip("should return true if the stack is empty", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);
  });
  it.skip("should return false if the stack is not empty", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.isEmpty()).toBe(false);
  });

  it.skip("should clear the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.clear();

    expect(stack.items).toEqual([]);
  });
  it.skip("should print the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.print();

    expect(stack.items).toEqual([1, 2]);
  });
});
