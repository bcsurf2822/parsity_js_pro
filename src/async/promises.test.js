const { getData, getDataPromiseChain } = require('./promises');

describe('getDataPromiseChain', () => {
    it('returns an object with name, age and job', () => {
        getDataPromiseChain().then((res) => {
            expect(res).toStrictEqual({
                name: 'Heather',
                job: 'code monkey',
                age: 420,
            });
        });
    });
});

describe('getData', () => {
    it('returns an object with name, age and job', async () => {
        const data = await getData();
        expect(data).toStrictEqual({
            name: 'Heather',
            job: 'code monkey',
            age: 420,
        });
    });
});
