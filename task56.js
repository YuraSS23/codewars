/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!" 

Solution*/

function maskify(cc) {
    let out = "";
    for (let i=0; i<cc.length-4; i++) {
      out += "#";
    }
    return cc.length<5 ? cc : out+cc[cc.length-4]+cc[cc.length-3]+cc[cc.length-2]+cc[cc.length-1];  
    }