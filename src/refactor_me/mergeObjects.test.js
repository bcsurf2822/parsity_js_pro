const { mergeArrays } = require("./mergeObjects");

describe.skip("mergeObjects", () => {
  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
    },
  ];

  const items = [
    { id: 1, title: "Product 1", price: 9.99 },
    { id: 2, title: "Product 2", price: 19.99 },
    { id: 3, title: "Product 3", price: 29.99 },
  ];

  it("should merge two arrays of objects by id", () => {
    const merged = mergeArrays(users, items, "id");

    expect(merged).toEqual([
      {
        id: 1,
        name: "John Smith",
        email: "john@example.com",
        title: "Product 1",
        price: 9.99,
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        title: "Product 2",
        price: 19.99,
      },
      {
        id: 3,
        name: "Bob Johnson",
        email: "bob@example.com",
        title: "Product 3",
        price: 29.99,
      },
    ]);
  });
});
