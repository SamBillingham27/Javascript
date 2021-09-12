// ES6
// -----------------------------------------------------
// VAR, LET, CONST

// var...   can be overwritten and no errors will be thrown up
// let...   can be overwritten but but will flag if two variables have same name e.g.
//          name = bob
//          name = tim
//          this will flag
// const    cannot change value (reassign)
//
//  ** It is important to understand that objects (including arrays and functions) 
//      assigned to a variable using const are still MUTABLE. Using the 
//      const declaration only prevents reassignment of the variable IDENTIFIER.

// If an array or other object is not to be changed - then use Object.freeze........

// function freezeObj() {
//     const MATH_CONSTANTS = {
//       PI: 3.14
//     };
//     // Only change code below this line
//     Object.freeze(MATH_CONSTANTS);
//     // Only change code above this line
//     try {
//       MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//       console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
//   }
//   const PI = freezeObj();
// -------------------------------------------------------
// ARROW FUNCTIONS

//  In JavaScript, we often don't need to name our functions, especially when passing 
//      a function as an argument to another function. Instead, we create inline functions. 
//      We don't need to name these functions because we do not reuse them anywhere else.

//  To achieve this, we often use the following syntax:

// from......
//      const myFunc = function() {
//          const myVar = "value";
//          return myVar;
//      }

//  to.....
//      const myFunc = () => {
//          const myVar = "value";
//          return myVar;
//      }

// When there is no function body, and only a return value, arrow function syntax allows you 
//  to omit the keyword return as well as the brackets surrounding the code. 
// This helps simplify smaller functions into one-line statements:....

// even.....
//      const myFunc = () => "value";

//example........
// var magic = function() {
//     return new Date();
//   };
//
// becomes......
// const magic = () => new Date();

// example......can also omit brackets around single params
//  const doubler = (item) => item * 2;
// becomes....
//  const doubler = item => item * 2;

// example.....can pass arguments into arrow functions
//  const multiplier = (item, multi) => item * multi;
//  multiplier(4, 2); // this would return the value 8.

// -----------------------------------------------
// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
//   };
//
// becomes.......
//
// const myConcat = (arr1, arr2) => arr1.concat(arr2);
//
//   console.log(myConcat([1, 2], [3, 4, 5]));
// ------------------------------------------------
//  Modify the function increment by adding default parameters so that it will 
//  add 1 to number if value is not specified.

// // from.....
// const increment = (number, value) => number + value;
// // to.....
// const increment = (number, value = 1) => number + value;

// console.log(increment(5,2));
// console.log(increment(5));

// ----------------------------------------------------

// "Rest" Parameter

// Example

// function howMany(...args) {
//     return "You have passed " + args.length + " arguments.";
//   }
//   console.log(howMany(0, 1, 2));
//   console.log(howMany("string", null, [1, 2, 3], { }));

// With the rest parameter, you can create functions that take a variable number of arguments. 
//  These arguments are stored in an array that can be accessed later from inside the function.

//  Modify the function sum using the rest parameter in such a way that the function sum 
//  is able to take any number of arguments and return their sum.
// start with....
// const sum = (x, y, z) => {
//     const args = [x, y, z];
//     return args.reduce((a, b) => a + b, 0);
//   }
// end with...
//   const sum = (...args) => {
//     return args.reduce((a, b) => a + b, 0);
//   }
  
//   console.log(sum(0,1,2));
//   console.log(sum(1,2,3,4));
//   console.log(sum(5));
//   console.log(sum());

// The "rest" param condenses the arguments into an array which is passed 
//  into the function....so we don't need to define the array.
// Another example....
// Before....

// const product = (n1, n2, n3) => {
//     const args = [n1, n2, n3];
//     return args.reduce((a, b) => a * b, 1);
//   }
//   console.log(product(2, 4, 6)); //48

// // After....

// const product = (...n) => {
//     return n.reduce((a, b) => a * b, 1);
//   }
//   console.log(product(2, 4, 6)); //48

// --------------------------------------------------------
// The "spread" operator

// This is the opposite of "rest" - it "spreads out" the array into each of its elements
//  and can be used to.....

//      add elements of an existing array into a new array
        //  var arr1 = [1, 2, 3];
        //  var arr2 = ["a", "b", ...arr1, "c", "d"]
        //     console.log(arr2);
        // we get ["a", "b", 1, 2, 3, "c", "d"]

//      pass elements of an array as arguments to a function
        // as per example above

//      copy arrays
        // var arr = [1, 2, 3];
        // var arr2 = [...arr];
        // arr2.push(4);
        // we ger arr = [1, 2, 3] and arr2 = [1, 2, 3, 4]

//      concatinate arrays
        // var arr1 = [1, 2, 3];
        // var arr2 = [4, 5, 6];
        // arr1 = [...arr1, "perhaps a string as well", ...arr2];
        // we get arr1 = [1, 2, 3, "perhaps a string as well", 4, 5, 6]

// ---------------------------
// Destructuring Assignment to extract values from Objects

// Neatly assigns values taken directly from an object.

// ES5 would require this code to get the name and age of the user....
    // const user = { name: 'John Doe', age: 34 };
    // const name = user.name;
    // const age = user.age;
// ES6 shortens this to....
    // const user = { name: 'John Doe', age: 34 };
    // const { name, age } = user;

// Here, the name and age variables will be created and assigned 
//  the values of their respective values from the user object. 
//  You can see how much cleaner this is.

// Example....
    // const person = {
    //    first: 'Wes',
    //    last: 'Bos',
    
    // const {first, last} = person

    //  console.log(first); // Wes
    //  console.log(last); // Bos

    // The above code says, give me a variable called first, a variable called last, 
    //  and take it from the person object. 
    //  We're taking the first property and the last property and putting them into 
    //  two new variables that will be scoped to the parent block (or window!).



// Example....
    // const HIGH_TEMPERATURES = {
    // yesterday: 75,
    // today: 77,
    // tomorrow: 80
    // };

    // const today = HIGH_TEMPERATURES.today;
    // const tomorrow = HIGH_TEMPERATURES.tomorrow;

    // The two lines above can be replaced with......
    // const {today, tomorrow} = HIGH_TEMPERATURES

// Destructuring also allows you to assign a new variable name when extracting values. 
//  You can do this by putting the new name after a colon when assigning the value.

// Using the same object from a previous example:

    // const user = { name: 'John Doe', age: 34 };
    // Here's how you can give new variable names in the assignment:

    // const { name: userName, age: userAge } = user;
// You may read it as "get the value of user.name and assign it to a new variable 
//  named userName" and so on. The value of userName would be the string John Doe, 
//  and the value of userAge would be the number 34.

// Example
    // const user = {
    //     johnDoe: { 
    //       age: 34,
    //       email: 'johnDoe@freeCodeCamp.com'
    //     }
    //   };

    // console.log(user);       // Will give us the above output

    // const { johnDoe: { age, email }} = user; 
    // console.log(user);       // Will give us the above also
    // const { johnDoe: { age: userAge, email: userEmail }} = user;
    // console.log(age);       // Will give us the age 34
    // console.log(userAge);    // Will also give us the age 34

// Example
//     const twitter = 'twitter.com';
//     const wes = {
//       first: 'Wes',
//       last: 'Bos',
//       links: {
//         social: {
//           twitter: 'https://twitter.com/wesbos',
//           facebook: 'https://facebook.com/wesbos.developer',
//         },
//         web: {
//           blog: 'https://wesbos.com'
//         }
//       }
//     };

//     console.log (wes);      // Will give us the above "wes" object 

//     const { twitter: tweet, facebook: fb } = wes.links.social;

//     console.log (wes);      // No change to the "wes" object......
//     console.log (tweet);    // but we now have a new object "tweet" which contains
//                             // the value 'https://twitter.com/wesbos'

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };
                              
// Only change code below this line
                                
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

// console.log(lowToday);
// console.log(highToday);
// Only change code above this line

// const {low: lowToday, high: highToday} = LOCAL_FORECAST.today;
    // this gave the same output as below but was not accepted by FCC - why???
// const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
    // the value in LOCAL_FORECAST.today.low is assigned to new variable called "lowToday"
    // the value in LOCAL_FORECAST.today.high is assigned to new variable called "highToday"
// console.log(lowToday);
// console.log(highToday);

// Example
// // Try to swap the values of "a" and "b"
// let a = 8, b = 6;
// // Only change code below this line
// console.log(a);
// console.log(b);

// [a, b] = [b, a];    // if try to reassign values (a = 6), this will fail as "a" has
//                        // already been declared

// console.log(a);
// console.log(b);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

console.log(arr);


