/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

Solution*/

function highAndLow(numbers){
    let t = [];
    numbers = " " + numbers + " ";
    let k = 0;
    for (let j=2; j<numbers.length; j++){
      if (numbers[j] == " ") {
        t.push(Number(numbers.substr(k+1,j-k-1)));
        k = j;
      }
    }
    let min = t[0];
    let max = t[0];
    for (let i=1; i<t.length; i++) {
      if (t[i] > max) {
        max = t[i];
      }
      if (t[i] < min) {
        min = t[i];
      }
    }
    return max + " " + min;
  }