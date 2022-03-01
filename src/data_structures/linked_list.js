function LinkedList() {
    this.head = null;
}

function Node(val) {
    this.node = val;
    this.next = null;
}

LinkedList.prototype.addNode = function (val) {
    let next, currentNode;

    if (this.head === null) {
        this.head = new Node(val);
    } else {
        currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(val);
    }
};

LinkedList.prototype.removeNode = function (val) {
    let currentNode = this.head;
    let prev = null;
    while (currentNode.next) {
        if (currentNode.node === val) {
            prev.next = currentNode.next;
        } else {
            prev = currentNode;
        }
        currentNode = currentNode.next;
    }
};

const list = new LinkedList();
list.addNode(3);
list.addNode(10);
list.addNode(9);

console.log(list);

list.removeNode(10);

console.log(list);

module.export = {
    LinkedList,
};
