/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

Solution*/

function XO(str) {
    let ko = 0;
    let kx = 0;
    str = str.toLowerCase();
    for (let i =0; i<str.length; i++) {
     if (str[i] == "o") {
       ko +=1;
     }
      if (str[i] == "x") {
       kx +=1;
     }
    }
     return (ko == kx);
   }