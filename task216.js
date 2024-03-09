/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"

Solution*/

function rgb(r, g, b) {
    if (r>255) {
      r="FF"
    } else if (r<0){
      r="00"
    } else {
      r=r.toString(16)
    }
    if (g>255) {
      g="FF"
    } else if (g<0){
      g="00"
    } else {
      g=g.toString(16)
    }
    if (b>255) {
      b="FF"
    } else if (b<0){
      b="00"
    } else {
      b=b.toString(16)
    }
    if (r.length<2) {
      r=0+r
    }
    if (g.length<2) {
      g=0+g
    }
    if (b.length<2) {
      b=0+b
    }
      return (r+g+b).toUpperCase();
  }