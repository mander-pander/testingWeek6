let functions = require('./function.js');

test('Return two test', () => {
    expect(functions.returnTwo()).toBe(2);
})

test('Greeting should say hello with name', () => {
    expect(functions.greeting('Flora')).toEqual('Hello Flora.');
})

test('Greeting should accept a string', () => {
    let greetingFunc = functions.greeting('Flora');
    expect(typeof greetingFunc).toBe('string');
})

// it('should add the numbers together', () => {
//     expect(functions.add(1, 2)).toEqual(3);
// })

describe('Check Math', () => {
    test('add numbers', () => {
        expect(functions.add(1, 2)).toEqual(3);
    });
    test('multiply numbers', () => {
        expect(functions.multiply(4, 2)).toEqual(8);
    });
    test('divide numbers', () => {
        expect(functions.divide(8, 2)).toEqual(4);
    });
    test('subtract numbers', () => {
        expect(functions.subtract(6, 2)).toEqual(4);
    });

})
