/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Solution*/ 

function countPositivesSumNegatives(input) {
    if (input === null || input === []) {
      return [];
      }
    let sumPositive = 0;
    let sumNegative = 0;
    for (i=0; i<input.length; i++) {
      input[i]>0 ? sumPositive+=1 : sumNegative+=input[i];
    }
    if (sumPositive==0 && sumNegative==0) {return []}
    return [sumPositive, sumNegative]
  }