const { once, addFactory, personWithPrivateProperties } = require('./closure');

describe.skip('once', () => {
    it('returns a function that can only be called once', () => {
        const greetingFunc = (greeting) => {
            return greeting;
        };

        const greetOnce = once(greetingFunc);

        expect(greetOnce('Hey Bro')).toEqual('Hey Bro');
        expect(greetOnce('Hey Bro')).toEqual(undefined);
        expect(greetOnce('Hey Bro')).toEqual(undefined);
        expect(greetOnce('Hey Bro')).toEqual(undefined);
    });
});

describe.skip('addFactory', () => {
    it('returns a function initialized with a number to add', () => {
        const add4 = addFactory(4);

        expect(add4(1)).toEqual(5);
        expect(add4(2)).toEqual(6);
        expect(add4(3)).toEqual(7);
    });
});
describe.skip('personWithPrivateProperties', () => {
    it('does not allow access to the person`s account balance or bankInfo', () => {
        expect(personWithPrivateProperties().accountBalance).toEqual(undefined);
        expect(personWithPrivateProperties().bankInfo).toEqual(undefined);
        expect(personWithPrivateProperties().age).toEqual(10);
        expect(personWithPrivateProperties().job).toEqual('Pizza Driver');
    });
});
