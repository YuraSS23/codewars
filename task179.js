/* Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

Solution*/

function longest(s1, s2) {
    s1 = s1+s2
    let s3 = ""
    for (let i=0;i<s1.length; i++) {
      if (s3.indexOf(s1[i])===-1) {
          s3+=s1[i]
          }
    }
   return s3.split('').sort().join("")
  }