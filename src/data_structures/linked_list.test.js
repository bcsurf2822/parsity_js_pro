const { LinkedList } = require('./linked_list');

describe.skip('linked list', () => {
    it('can add nodes to the list', () => {
        const ll = new LinkedList(4);

        ll.addNode(3);
        ll.addNode(2);
        ll.addNode(1);
    });
});
