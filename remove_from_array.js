function removeFromArray(array, ...itemToRemove) {
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
    
    for (i = 0; i <= itemToRemove.length; i ++){
    array.splice(array.indexOf(itemToRemove.indexOf(itemToRemove)), 1)
    }
    return itemToRemove.indexOf(itemToRemove);
    }
    console.log(removeFromArray([1, 2, 3, 4], 3, 2));
    