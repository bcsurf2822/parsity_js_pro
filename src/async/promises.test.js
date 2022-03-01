const {
    getData,
    getDataPromiseChain,
    handleMultiplePromises,
    fakeApiCall,
} = require('./promises');

describe.skip('getDataPromiseChain', () => {
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

describe.skip('getData', () => {
    it('returns an object with name, age and job', async () => {
        const data = await getData();
        expect(data).toStrictEqual({
            name: 'Heather',
            job: 'code monkey',
            age: 420,
        });
    });
});

describe.skip('handleMultiplePromises', () => {
    it('returns an array of objects returned from a set of promises', async () => {
        const [promise1, promise2, promise3] = [
            fakeApiCall({ name: 'Jill' }),
            fakeApiCall({ name: 'Jack' }),
            fakeApiCall({ name: 'John' }),
        ];

        expect(
            await handleMultiplePromises([promise1, promise2, promise3])
        ).toStrictEqual([
            {
                data: { name: 'Jill' },
            },
            {
                data: { name: 'Jack' },
            },
            {
                data: { name: 'John' },
            },
        ]);
    });
});
