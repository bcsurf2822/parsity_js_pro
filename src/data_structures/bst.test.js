const BST = require('./bst.js');

const mytree = new BST(15);
mytree.insert(25);
mytree.insert(10);
mytree.insert(7);
mytree.insert(22);
mytree.insert(17);
mytree.insert(13);
mytree.insert(5);
mytree.insert(9);
mytree.insert(27);

test('search', () => {
    expect(mytree.search(25)).toBe(true);
    expect(mytree.search(100)).toBe(false);
});

test('inorder', () => {
    expect(mytree.inorder()).toEqual([5, 7, 9, 10, 13, 15, 17, 22, 25, 27]);
});

test('postorder', () => {
    expect(mytree.postorder()).toEqual([27, 25, 22, 17, 15, 13, 10, 9, 7, 5]);
});
