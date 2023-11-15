function reverseWord(word) {
    const split = word.split("");
    let wordLength = split.length-1;
    let reversed = split[wordLength]
    for (i = wordLength-1; i>=0; i--)
        reversed += split[i];
    // last test is failing, needs to work with an empty string
    // right now it is returning "undefined"
    return reversed;
    }
console.log(reverseWord('hello'));