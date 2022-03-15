const obj = {
    name: 'Chadwick the III',
    age: 33,
    job: 'Engineer',
};

function unboundFunc() {
    return `Hey my name is ${this.name}`;
}

// TODO:
// Bind `unBoundFunc` with the correct context to make tests pass
const boundFunc = undefined;

function funcToCall(age, job) {
    // you code here
}

function funcToApply(additionalHobbies) {
    // your code here
}

module.exports = {
    boundFunc,
    funcToCall,
    funcToApply,
    obj,
};
