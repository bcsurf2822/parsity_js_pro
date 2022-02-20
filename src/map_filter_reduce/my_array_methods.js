Array.prototype.myFilter = function (callBack) {
    //add your code here
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i])) {
            newArr.push(this[i]);
        }
    }

    return newArr;
};

Array.prototype.myMap = function (callBack) {
    //add your code here
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callBack(this[i]));
    }

    return newArr;
};
