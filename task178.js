/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

Solution*/

function validatePIN (pin) {
    return (pin.length===6 || pin.length===4)&&(pin.split('').filter(el=>el==='1'||el==='2'||el==='3'||el==='4'||el==='5'||el==='6'||el==='7'||el==='8'||el==='9'||el==='0').length===pin.length)
   } 