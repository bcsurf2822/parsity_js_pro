function BST(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BST.prototype.insert = function (value) {};

BST.prototype.search = function (value) {};

const inorderVals = [];

BST.prototype.inorder = function () {
    // add your code

    return inorderVals;
};

const postVals = [];

BST.prototype.postorder = function () {
    // add your code
    return postVals;
};

BST.prototype.bfs = function () {
    //add code here
};

module.exports = BST;
