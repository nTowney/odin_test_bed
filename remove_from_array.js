function removeFromArray(array, ...itemToRemove) {
    
    // I'm going to try and use the rest parameter to take multiple arguments
    // This makes the remaining arguments an array;
    // With the arguments in an array, I should be able to use a loop to check each one until finished
    // becomes: [[1, 2, 3, 4], 3, 2]
    // 1,2,3,43,2

    // the for loop should loop through for..of

    const args = itemToRemove;
    // this turns all arguments into an array

    // console.log(args);

    for (const arg of args){
        // console.log(arg);
        // going to check if the item is in index 0
        if (array.indexOf(arg) === 0){
            array.splice(0, 1);
        } else if (array.indexOf(arg) > 0){
            // this checks to see if the item is in the array
            console.log(array.indexOf(arg));
            // console.log(arg);
            array.splice(array.indexOf(arg), 1);
        }
        // console.log(array);
    }
console.log(array)
//    if (array.indexOf(itemToRemove) > 0){
//     array.splice(array.indexOf(itemToRemove), 1);
//    }
}
    console.log(removeFromArray([1, 2, 3, "taco", "burrito", 4], 1, 2, "taco"));

// current problem:
// the function will not remove an item if it is in index 0 of the array



// TIME FOR SOME REAL PSEUDOCODE//
// I NEED TO REMOVE MULTIPLE ITEMS FROM AN ARRAY
// I WILL HAVE THE ARRAY AND MULTIPLE ADDITIONAL ARGUMENTS
// WHEN THERE IS A SINGLE ARGUMENT, THE FUNCTION WILL:
    // DETERMINE THE INDEX OF THE ITEM TO REMOVE
    // SPLICE IT OUT
    // RETURN THE ARRAY
    // ^^THIS WORKS^^
// WHEN THERE ARE MULTIPLE ARGUMENTS, THE FUNCTION WILL;
    // DETERMINE THE INDEX OF THE FIRST ITEM TO REMOVE
    // SPLICE IT OUT
    // RETURN THE ARRAY
    // DETERMINE THE INDEX OF THE SECOND ARGUMENT
    // SPLICE IT OUT
    // RETURN THE ARRAY
    // REPEAT UNTIL ALL ARGUMENTS ARE EVALUATED
// PROBLEMS I HAVE FOUND:
    // USING array.splice(array.indexOf(itemToRemove), 1); WILL WORK AS INTENTED
    // **UNLESS!!** THE ITEM IS NOT IN THE ARRAY, IN WHICH CASE IT WILL AUTOMATICALLY
    // REMOVE THE LAST ITEM FROM THE ARRAY