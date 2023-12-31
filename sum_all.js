function sumAll(num1, num2) {
// start with the small number
// add one to it to get the next number up
// add the number to the one behind it
// loop that way
// check which number is smallest first?

// turn the spread into an array and cycle through the indexes as i?

if (num1<0 || num2<0 || (typeof(num1) != 'number') || (typeof(num2) != 'number')){
    return "ERROR"
}else 
if (num1 < num2){
    let newSum = num1;
    let nextNum = num1 + 1;
    for (i=1; i<=num2-num1; i++){
    
    // console.log(newSum);
        newSum += nextNum;
        nextNum += 1;
    }
// console.log(newSum);
    return newSum;
} else {
    let newSum = num2;
    let nextNum = num2 + 1;
    for (i=1; i<=num1-num2; i++){
        newSum += nextNum;
        nextNum += 1;
    }
    return newSum;
}
}
console.log(sumAll('1', [90, 1]));

// Do not edit below this line
// module.exports = sumAll;


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
