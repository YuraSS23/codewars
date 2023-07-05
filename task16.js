/*When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

Solution*/

function position(letter){
    return "Position of alphabet: "+(letter.charCodeAt(letter.toUpperCase)-96);
    }