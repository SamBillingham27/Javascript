
// hayls is the programming queen!!!!
// RECURSIVE FUNCTIONS
// The function is a recursive function if it calls itself inside its body - see "fromNumber" below.
//  Must have a 'Base' condition to prevent the function calling itself infinitely - usually an 'if' statement


// function countDown(fromNumber) {        // functioned defined with 1 param
//     console.log(fromNumber);            // outputs 3

   
//     let nextNumber = fromNumber - 1;    // next number = 2

//     if (nextNumber > 0) {               // 2 is greater than 0 so....
//         countDown(nextNumber);          // call countdown(2)
//     }
// }
// countDown(3);

// // This will output 3, 2, 1 and then stop as 0 is not greater than 0



// function countup(n) {                           // Function defined with 1 param (5)
//     if (n < 1) {                                // Base case returns an empty array
//         return [];
//     } else {                                    // if n = or > 1, then....
//         const countArray = countup(n - 1);      // recursive called and n decreased
//         countArray.push(n);                     // n is added to array
//         return countArray;                      // output = [1, 2, 3, 4, 5] - don't get it
//     }
// }
// console.log(countup(5));

// Try another
// program to count down numbers to 1
// function countDown(number) {                        // function defined with 1 param

//     // display the number
//     console.log(number);                            // display value of param "number"

//     // decrease the number value
//     const newNumber = number - 1;                   // define new param "newNumber" and assign value of "number" minus 1.

//     // base case
//     if (newNumber > 0) {                            // if "newNumber" is greater than 0, call countDown function and pass value
//         countDown(newNumber);                       //  of newNumber into it.
//     }
// }

// countDown(4);                                       // call countDown and pass value 4 into it

// countDown(4) prints 4 and calls countDown(3)
// countDown(3) prints 3 and calls countDown(2)
// countDown(2) prints 2 and calls countDown(1)
// countDown(1) prints 1 and calls countDown(0)
// When the number reaches 0, the base condition is met, and the function is not called anymore.

// function countDown(n){              // Doesn't work - only get 2 elements in newArr - why???
//     const newArr = [n];
//     // console.log(newArr);
//    const newNumber = (n-1);
//    if (newNumber > 0) {
//         newArr.push(n-1);
//        countDown(newNumber);
//        console.log(newArr);
//    }
   
// }
// countDown(5);

// function countdown(n) {                     
//     if (n < 1) {                            
//       return [];                            
//     } else {                                 
//       const newArr = countdown(n - 1);      
//       newArr.unshift(n);                    
//       console.log(newArr);                  
//       return newArr;                        
//     }
// }
// countdown(5);
// So........
// when n = 5......
//      5 is not less than 1 so "if" ignored
//      new Array "arr" calls function "countdown" with value of 4 (n-1) passed in
    //      this will call function with value of 3.....
    //          this will call function with value of 2....
    //              this will call function with value of 1....
    //                  function "if" statement satisfied and loop stoppes
    // so "arr" updated with "1", then "2" is added to front, then "3" is added etc
    // until stepped out of each "nested" loop
    // arr = [5, 4, 3, 2, 1]
// DO I UNDERSTAND THIS RIGHT???
// If we used "push" instead, then arr = [1, 2, 3, 4, 5].

// function rangeOfNumbers(startNum, endNum) {
//     if (endNum === startNum){
//     // if (endNum - startNum === 0) {
//         console.log (startNum);
//         return [startNum];
//     } else {
//         let num = rangeOfNumbers(startNum, endNum - 1);
//         num.push(endNum);
//         console.log(num);
//         return num;
//     } 
//     return [];
//   };

//   rangeOfNumbers(1, 5);
//   rangeOfNumbers(6, 9);
//   rangeOfNumbers(4, 4);
// So.......
//          1. set Base condition.
//          2. define a new variable which calls the original function AND amends one of its params
//          3. add the unamended param value to new variable (push, unshift etc)
//          4. return new variable

// function rangeOfNumbers(startNum, endNum) {

//     if (startNum === endNum) {
//         console.log(startNum);
//         return [startNum];
//     } else {
//         let bob = rangeOfNumbers(startNum, endNum - 1);
//         bob.push(endNum);
//         console.log (bob);
//         return bob;
//         }
//         // return bob;
// }

// rangeOfNumbers(1, 5);
//   rangeOfNumbers(6, 9);
//   rangeOfNumbers(4, 4);

//-------------------------------------------
// function countdown(n) {

//     if (n < 1){
//     return [];

//   } else {
//       num = countdown(n - 1);
//       num.unshift(n);
//       console.log(num);
//       return num;

//   }
// }
//   countdown(5);

//---------------------------

// So.......
//          1. set Base condition.
//          2. define a new variable which calls the original function AND amends one of its params
//          3. add the unamended param value to new variable (push, unshift etc)
//          4. return new variable

function rangeOfNumbers(startNum, endNum) {

    if (startNum === endNum) {
    console.log(startNum);
    return [startNum];
} else {

    let chin = rangeOfNumbers(startNum, endNum - 1);
    chin.push(endNum);
    console.log(chin);
    return chin;
    
    }
};

  rangeOfNumbers(1,5);
//   rangeOfNumbers(6,9);
//   rangeOfNumbers(4,4);
