const {
    boundFunc,
    funcToCall,
    funcToApply,
    obj,
} = require('./bind_call_apply');

describe.skip('this binding', () => {
    it('returns a new function with `this` explicitly set', () => {
        expect(boundFunc()).toEqual('Hey my name is Chadwick the III');
    });
});

describe.skip('funcToApply', () => {
    it('calls the function with `this` explicitly set and accepts comma separated arguments', () => {
        expect(funcToCall.call(obj, 33, 'Engineer')).toEqual(
            `Hey my name is Chadwick the III and I'm 33 years old. My job is Engineer`
        );
    });
});

describe.skip('funcToCall', () => {
    it('returns a new function with `this` explicitly set', () => {
        expect(funcToApply.apply(obj, ['horseback riding'])).toEqual(
            'Hey my name is Chadwick the III and I like horseback riding'
        );
    });
});
