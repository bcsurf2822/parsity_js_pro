/* 
    Write a function that returns a function that can only be called once
    e.g. const myFunc = once(() => {console.log('yo')})
    myFunc() -> 'yo'
    myFunc() -> undefined
    myFunc() -> undefined
*/

const once = (callback) => {
  let called = false;

  return (...args) => {
    if (!called) {
      called = true;
      return callback(...args);
    }
  }
};

/* 
    Write a function that returns a function that take an initial number
    Subsequent calls will add that number to the new number
    e.g. const add2 = addFactory(2)
 
    add2(4) -> 6
    add2(7) -> 9
    add2(3) -> 5
*/

const addFactory = (initialNum) => {
  return (val) => {
    return initialNum + val;
  }
};

/* 
    Our person has some sensitive information exposed below
    make `accountBalance` and `bankInfo` private by leveraging closure scope
    for example: 
    personWithPrivateProperties().bankInfo.sensitiveId => undefined
    personWithPrivateProperties().accountBalance => undefined
*/

const personWithPrivateProperties = () => {
  let accountBalance = -5;
  let bankInfo = { name: "Bank of Venezuela", sensitiveId: "BV123" };

  return {
    age: 10,
    job: "Pizza Driver",
    updateBank: (newBankInfo) => {
      //your code here
      bankInfo = newBankInfo;
      return bankInfo;
    },
    getBankInfo: () => {
      const { name } = bankInfo;
      return name;
    },
    getAccountBalance: () => {
      //your code here
      return accountBalance;
    },
    updateAccountBalance: (deposit) => {
      //your code here
      return accountBalance += deposit;
    },
  };
};

const person = personWithPrivateProperties();
console.log(person.accountBalance); // undefined
console.log(person.bankInfo); // undefined
console.log(person.age); // 10
console.log(person.job); // 'Pizza Driver'
console.log(person.getAccountBalance()); // 5
console.log(person.updateAccountBalance(100)); // 95 

console.log(person.getBankInfo());
console.log(person.updateBank({ name: "American Express", sensitiveId: "DI325" }));
console.log(person.getBankInfo());



module.exports = {
  once,
  addFactory,
  personWithPrivateProperties,
};
