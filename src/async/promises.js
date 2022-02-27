const fakeApiCall = (args) => {
    return new Promise((resolve, reject) => {
        resolve({ data: args });
    });
};

const getDataPromiseChain = () => {
    const retVal = {};
    return fakeApiCall({ name: 'Heather' }).then((res) => {
        retVal.name = res.data.name;

        fakeApiCall({ job: 'code monkey' }).then((res) => {
            retVal.job = res.data.job;

            fakeApiCall({ age: 420 }).then((res) => {
                retVal.age = res.data.age;
                return retVal;
            });
        });
    });
};

const getData = async () => {
    // use the async/await pattern to refactor the code above and make the tests pass
    // you should return an object in the same shape as the `retVal` above
};

const handleMultiplePromises = async (promises) => {
    // use promise.all to resolve multiple promises
};

module.exports = {
    getDataPromiseChain,
    getData,
    handleMultiplePromises,
    fakeApiCall,
};
