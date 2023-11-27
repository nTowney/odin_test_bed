function leapYears(year) {
// check if year is divisible by 400 and 100
if (((year % 400) === 0 && (year % 100) === 0) || ((year % 4) === 0)){
    return 'Leap Year'
} else {return 'Not a leap year'}
};
console.log(leapYears(1997));
// Do not edit below this line
// module.exports = leapYears;

// # Exercise 06 - leapYears

// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

// > Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
// >
// > -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

// ```javascript
// leapYears(2000) // is a leap year: returns true
// leapYears(1985) // is not a leap year: returns false
// ```


// ## Hints
// - use an `if` statement and `&&` to make sure all the conditions are met properly

// const leapYears = require('./leapYears')

// describe('leapYears', () => {
//   test('works with non century years', () => {
//     expect(leapYears(1996)).toBe(true);
//   });
//   test.skip('works with non century years', () => {
//     expect(leapYears(1997)).toBe(false);
//   });
//   test.skip('works with ridiculously futuristic non century years', () => {
//     expect(leapYears(34992)).toBe(true);
//   });
//   test.skip('works with century years', () => {
//     expect(leapYears(1900)).toBe(false);
//   });
//   test.skip('works with century years', () => {
//     expect(leapYears(1600)).toBe(true);
//   });
//   test.skip('works with century years', () => {
//     expect(leapYears(700)).toBe(false);
//   });
// });
