/* Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

Solution*/

function consonantCount(str) {
    let count = 0;
    for (let i =0; i<str.length; i++)
      {
        if ((str[i].toLowerCase()!="a")&&(str[i].toLowerCase()!="e")&&(str[i].toLowerCase()!="i")&&(str[i].toLowerCase()!="o")&&(str[i].toLowerCase()!="u")&&(((str.charCodeAt(i)>64)&&(str.charCodeAt(i)<91))||((str.charCodeAt(i)>96)&&(str.charCodeAt(i)<123)))) {
          count += 1;
        }
      }
    return count;
  }