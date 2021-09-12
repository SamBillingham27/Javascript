
// CONDITIONAL  or TERNARY Operators
// Syntax..... d ? e : f
// where d is the condition (e.g. is x grater than y)
//      e is the code to run if condition returns true
//      f is the code to run if condition returns false
// can replace some if/else statements

function checkEqual(a, b) {
    console.log( a === b ? "Equal" : "Not Equal")
}
        checkEqual(1, 2);

function findGreater(c, d) {
    console.log( c > d ? "c is greater" : "d is greater")
}
        findGreater(1, 2);

//------------------------------------------------------
// Nested or Multiple CONDITIONAL/TERNARY Operators

function findGreaterOrEqual(a, b) {
    console.log( (a === b) ? "a and b are equal" 
      : (a > b) ? "the first number is greater" 
      : "the second number is greater");
}
        findGreaterOrEqual(7, 4);

//----------------------------------------------------------
