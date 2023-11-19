function removeFromArray(array, itemToRemove) {
    // identify the index number of the itemToRemove;
    // move the item at that index to the end;
    // use shift or pop to remove it.
    
    // I'm going to try and use the rest parameter to take multiple arguments
    // This makes the remaining arguments an array;
    // With the arguments in an array, I should be able to use a loop to check each one until finished
    // becomes: [[1, 2, 3, 4], 3, 2]
    // 1,2,3,43,2
    // itemToRemove.length = 2
    // for loop for the length of the ...item array?
    
    // for (i = 0; i <= itemToRemove.length; i ++){
    // array.splice(array.indexOf(itemToRemove.indexOf(itemToRemove)), 1)
    array.splice(array.indexOf(itemToRemove), 1);
 
    return array;
}
    console.log(removeFromArray([1, 2, 3, 4], "taco"));


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