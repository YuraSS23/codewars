/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

Solution*/

function repeatStr (n, s) {
    let out = "";
    for (let i=1; i<=n; i++) {
      out+= s;
    }
    return out;
  }