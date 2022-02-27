const obj = {
    name: 'Chadwick the III',
};

function unboundFunc() {
    return `Hey my name is ${this.name}`;
}

// TODO:
// Bind `unBoundFunc` with the correct context to make tests pass
const boundFunc = undefined;

function funcToCall(age, job) {
    return `Hey my name is ${this.name} and I'm ${age} years old. My job is ${job}`;
}

function funcToApply(additionalHobbies) {
    return `Hey my name is ${this.name} and I like ${additionalHobbies.join(
        ', '
    )}`;
}

module.exports = {
    boundFunc,
    funcToCall,
    funcToApply,
    obj,
};
