require('./my_array_methods');
const { addAllNumbers } = require('./my_array_methods');

describe.skip('myArrayMethods', () => {
    it('filters an array', () => {
        const arrayWithOddNums = [1, 2, 3, 4, 5, 6, 7, 8];

        const removeOdds = (num) => num % 2 === 0;

        const filteredArr = arrayWithOddNums.myFilter(removeOdds);

        expect(arrayWithOddNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(filteredArr).toEqual([2, 4, 6, 8]);
    });

    it('maps over an array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];

        const doubleEachNum = (num) => num * 2;

        const filteredArr = arr.myMap(doubleEachNum);

        expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(filteredArr).toEqual([2, 4, 6, 8, 10, 12, 14, 16]);
    });

    it('sums numbers in an array', () => {
        expect(addAllNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
    });
});
