const sumAll = function(num1, num2) {
// start with the small number
// add one to it to get the next number up
// add the number to the one behind it
// loop that way

};

// Do not edit below this line
module.exports = sumAll;


// 
// 
// 
// # Exercise 05 - sumAll

// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```


// ## Hints

// Think about how you would do this on pen and paper and then how you might translate that process into code:
// - make sure you pay attention to the function parameters
// - create a variable to hold the final sum
// - loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
// - on each iteration add the number to the sum
// - return the sum after finishing the loop

// const sumAll = require('./sumAll')

// describe('sumAll', () => {
//   test('sums numbers within the range', () => {
//     expect(sumAll(1, 4)).toEqual(10);
//   });
//   test.skip('works with large numbers', () => {
//     expect(sumAll(1, 4000)).toEqual(8002000);
//   });
//   test.skip('works with larger number first', () => {
//     expect(sumAll(123, 1)).toEqual(7626);
//   });
//   test.skip('returns ERROR with negative numbers', () => {
//     expect(sumAll(-10, 4)).toEqual('ERROR');
//   });
//   test.skip('returns ERROR with non-number parameters', () => {
//     expect(sumAll(10, "90")).toEqual('ERROR');
//   });
//   test.skip('returns ERROR with non-number parameters', () => {
//     expect(sumAll(10, [90, 1])).toEqual('ERROR');
//   });
// });
