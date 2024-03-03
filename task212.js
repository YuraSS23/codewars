/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

Solution*/

function pigIt(str){
    return str.split(' ').map(el=>el.toLowerCase().charCodeAt()>96&&el.toLowerCase().charCodeAt()<123?
                              `${el.slice(1,el.lenght)}${el[0]}ay`
                             :el).join(' ')
  }