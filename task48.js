/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

Solution*/

function descendingOrder(n){
    let nstring = n.toString();
    let arr = [];
    for (let i=0; i<nstring.length; i++) {
      arr[i] = nstring[i];
      }
    arr.sort();
    arr.reverse();
    let out = "";
    for (let i=0; i<arr.length; i++) {
      out += arr[i];
      }
    return Number(out);
  }