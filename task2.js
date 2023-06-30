/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

Solution*/

function findAverage(array) {
    let sum = 0;
    let j = array.lenght;
    for (let i=0; i<array.length; i++) {
        sum = sum + array[i];
      }
    if (sum > 0) {  
        return (sum / array.length);
      }
    else {
        return 0;
      }
  }