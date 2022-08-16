function LinkedList(val) {
    this.head = new Node(val);
}

function Node(val) {
    this.node = val;
    this.next = null;
}

LinkedList.prototype.addNode = function (val) {
    //add your code here
};

LinkedList.prototype.removeNode = function (val) {
    //add your code here
};

module.exports = {
    LinkedList,
};
