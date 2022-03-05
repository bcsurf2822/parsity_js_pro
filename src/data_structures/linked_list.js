function LinkedList(val) {
    this.head = new Node(val);
}

function Node(val) {
    this.node = val;
    this.next = null;
}

LinkedList.prototype.addNode = function (val) {};

LinkedList.prototype.removeNode = function (val) {};

module.exports = {
    LinkedList,
};
