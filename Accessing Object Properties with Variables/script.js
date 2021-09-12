var someObj = {
    propName: "John"
  };
//    the function returns "prop" + "str (=Name)" = "propName" which is
// the key element of the object above
  function propPrefix(str) {
    var s = "prop";
    return s + str;
 }
  var someProp = propPrefix("Name");

//   someProp is assigned the output of the function when string "Name" is
//  passed to it
// output = propName
// 
console.log(someProp);
console.log(someObj[someProp]);
// so this console.log outputs the value assigned to propName in the 
// someObj object
