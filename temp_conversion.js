function convertToCelsius(tempF) {
    let convertedToC = (tempF-32) * 5/9;
    if (convertedToC % 1 > 0){
        let roundedC = convertedToC.toFixed(1);
        return roundedC;
    } else {return convertedToC};
}  
    const containerC = document.querySelector('#answerC');

    const contentC = document.createElement('div');
    contentC.classList.add('content');
    contentC.textContent = convertToCelsius(prompt('Temperature in Farenheit'));
    
    containerC.appendChild(contentC);


console.log(convertToCelsius(72));

function convertToFahrenheit(tempC) {
    let convertedToF = (tempC * 9/5) + 32;
    if (convertedToF % 1 > 0){
        let roundedF = convertedToF.toFixed(1);
        return roundedF;
    } else {return convertedToF};

}
    const containerF = document.querySelector('#answerF');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = convertToFahrenheit(prompt('Temperature in Celsius'));

    containerF.appendChild(content);

console.log(convertToFahrenheit(20));
// // Do not edit below this line
// module.exports = {
//   convertToCelsius,
//   convertToFahrenheit
// };

// # Exercise 07 - tempConversion

// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// ```
// convertToCelsius(32) // fahrenheit to celsius, should return 0

// convertToFahrenheit(0) // celsius to fahrenheit, should return 32
// ```

// Because we are human, we want the result temperature to be rounded to one decimal place: i.e., `convertToCelsius(100)` should return `37.8` and not `37.77777777777778`.

// This exercise asks you to create more than one function so the `module.exports` section of the spec file looks a little different this time.  Nothing to worry about, we're just packaging both functions into a single object to be exported.

// ## Hints
// - You can find the relevant formulae on [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).

// - Try to find by yourself on the Internet how to round a number to 1 decimal place in JavaScript. If you struggle, have a look [here](https://stackoverflow.com/q/7342957/5433628).

// const {convertToCelsius, convertToFahrenheit} = require('./tempConversion')

// describe('convertToCelsius', () => {
//   test('works', () => {
//     expect(convertToCelsius(32)).toEqual(0);
//   });
//   test.skip('rounds to 1 decimal', () => {
//     expect(convertToCelsius(100)).toEqual(37.8);
//   });
//   test.skip('works with negatives', () => {
//     expect(convertToCelsius(-100)).toEqual(-73.3);
//   });
// });

// describe('convertToFahrenheit', () => {
//   test.skip('works', () => {
//     expect(convertToFahrenheit(0)).toEqual(32);
//   });
//   test.skip('rounds to 1 decimal', () => {
//     expect(convertToFahrenheit(73.2)).toEqual(163.8);
//   });
//   test.skip('works with negatives', () => {
//     expect(convertToFahrenheit(-10)).toEqual(14);
//   });
// });
