/* Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples 

Solution*/
function sumMul(n,m){
    let x = n;
    let sum = 0;
  while (x < m)
    {
      sum = sum + x;
      x = x + n;
    }
    return sum > 0 ? sum : 'INVALID';
  }