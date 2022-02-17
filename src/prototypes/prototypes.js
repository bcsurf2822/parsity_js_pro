// functions have a prototype property and functions are objects
const Person = function () {
    this.name = 'Joe';
    this.job = 'Pizza Guy';
};

// new instance of Person
const personA = new Person();

console.log('a proto: ', personA.__proto__);

// // another instance of a which is an instance of Person
const personB = Object.create(personA);

personB.name = 'Randy';
personB.job = 'Doughnut Maker';

console.log('b proto', personB.__proto__);

Person.prototype.someNewMethod = function () {
    console.log(`My name is ${this.name} and my job is ${this.job}`);
};

console.log(personA.someNewMethod());
console.log(personB.someNewMethod());

Array.prototype.myCustomFind = function (x) {
    if (this.includes(x)) {
        return true;
    } else {
        return false;
    }
};

console.log([1, 2, 3].myCustomFind(1));
console.log([1, 2, 3].myCustomFind(10));
