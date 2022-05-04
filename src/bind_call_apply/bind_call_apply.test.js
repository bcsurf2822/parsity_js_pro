const { funcToCall, funcToApply, unboundFunc } = require('./bind_call_apply');

const chadObj = {
    name: 'Chadwick',
    age: 33,
    job: 'Engineer',
};

const sallyObj = {
    name: 'Sally',
    age: 38,
    job: 'Principal Engineer',
};

describe.skip('this binding', () => {
    const sallyGreeting = unboundFunc.bind(sallyObj);
    const chadGreeting = unboundFunc.bind(chadObj);
    it('returns a new function with `this` explicitly set', () => {
        expect(chadGreeting()).toEqual('Hey my name is Chadwick');
        expect(sallyGreeting()).toEqual('Hey my name is Sally');
    });
});

describe.skip('funcToApply', () => {
    it('calls the function with `this` explicitly set and accepts comma separated arguments', () => {
        expect(funcToCall.call(sallyObj)).toEqual(
            `My name is Sally and I am a Principal Engineer`
        );

        expect(funcToCall.call(chadObj)).toEqual(
            `My name is Chadwick and I am a Engineer`
        );
    });
});

describe.skip('funcToCall', () => {
    it('calls a function with `this` explicitly set and arguments passed as an array', () => {
        expect(funcToApply.apply(sallyObj, ['horseback riding'])).toEqual(
            'Hey my name is Sally and I like horseback riding'
        );

        expect(funcToApply.apply(chadObj, ['walks on the beach'])).toEqual(
            'Hey my name is Chadwick and I like walks on the beach'
        );
    });
});
