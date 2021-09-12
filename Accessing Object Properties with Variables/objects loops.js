// // Setup
// var myArr = [ 2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
// for (var i = 0; i < myArr.length; i++) {
//   total += myArr[i];
  
//   console.log(total);
  
// }

// // console.log(total) prints out 2 then 5 then 9 then 14 then 20;

//--------------------------------------------------------------------
// var arr = [
//   [1,2], [3,4], [5,6]
// ];
// for (var i=0; i < arr.length; i++) {       // initialises 'i' with value of 0; sets condition that 'i' is less than length of 'arr'; increments 'i'
//   for (var j=0; j < arr[i].length; j++) {  // initialises 'j' with value of 0; sets condition that 'j' is less than length of 'arr[i]'; increments 'j'
//     console.log(arr[i][j]);
//   }
// }
// console.log prints 1 then 2 then 3 then 4 then 5 then 6
//------------------------------------------------------------------

// RECURSION
// Using a "for" loop to multiply looks like this......
// function multiply(arr, n) {
//   var product = 1;
//   for (var i = 0; i < n; i++) {
//       product *= arr[i];
//   }
//   return product;
// }


// // but recursive version would look like this.....

// function multiply(arr, n) {
//   if (n <= 0) {             // This is the "base case" - Recursive functions must have a base case when they return without calling the function again, 
//     return 1;               //  otherwise they can never finish executing.
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }

function sum(arr, n) {
  // Only change code below this line
if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  // Only change code above this line
}
// The if statement checks to see if sum is evaluating the base case, n <= 0, or not. 
//  If it is, then sum returns the answer, 0 - the sum of elements from 0 to 0 inclusive. 
//  Otherwise, it recurses by evaluating a simpler function call, sum(arr, n - 1). 
//  Once that returns it adds a single array element, arr[n - 1], to it and returns that sum.
