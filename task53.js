/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

Solution*/

function findShort(s){
    let index = 0;
    let str = " "+s+" ";
    let min = s.length;
    for (let i =2; i<str.length; i++) {
      if (str[i] == " ") {
        if ((i-1-index) < min) {
          min = i-1-index;
          }
        index = i;
        }
    }
   return min; 
  }