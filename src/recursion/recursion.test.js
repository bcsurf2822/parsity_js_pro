const { flattenArray, fileExplorer } = require('./recursion');

describe('flattenArray', () => {
    it('returns a flattened array from nested set of arrays', () => {
        const nestedArr = [1, 2, [3, 4], [5, [6, [7, 8, [9]]]], 10];

        expect(flattenArray(nestedArr)).toEqual([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ]);
    });
});

describe('fileExplorer', () => {
    const fileObj = {
        myPics: {
            vacationPics: {
                vacation: 'vacation.jpg',
                vacation2: 'vacation.jpg2',
                vacation3: 'vacation.jpg3',
            },
            kidsPics: {
                joey: {
                    joeyKidPic: 'joey',
                },
                brittany: {
                    brittanyKidPic: 'brittany',
                },
                sarah: {
                    sarahKidPic: 'sarah',
                },
            },
        },
        workFiles: {
            myBusinessDocs: {
                taxDocs: {
                    2017: '2017tax',
                    2018: '2018tax',
                    2019: '2019tax',
                },
            },
        },
    };
    it('finds the values in a deeply nested object', () => {
        expect(fileExplorer(fileObj, '2017')).toEqual('2017tax');
        expect(fileExplorer(fileObj, 'brittanyKidPic')).toEqual('brittany');
        expect(fileExplorer(fileObj, 'joeyKidPic')).toEqual('joey');
        expect(fileExplorer(fileObj, 'not_found')).toEqual(false);
    });
});
