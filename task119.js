/*Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true


Solution*/

function solution(...arr){
    for (let i=0;i<arr.length;i++) {
      for(let j=i+1;j<arr.length;j++) {
        if (arr[i]===arr[j]) return true
      }
    }
     return false
   }