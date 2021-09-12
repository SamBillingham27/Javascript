

function convertToInteger(str) {
    var int = parseInt(str);
    console.log(int);
    return int;
    }
    
    convertToInteger("56");

// this will convert the string to an integer and then a binary (base 2) number 
function convertToInteger(str) {
    var int = parseInt(str, 2); // the second parameter is called a "radix"
    console.log(int);
    return int;
    }
convertToInteger("10011");
