// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop) {          // function defined with 2 params
// Only change code below this line
for (let i = 0; i < contacts.length; i++) {   // set up "i" to allow the function to cycle through the elements of the object
  if (contacts[i].firstName === name) {       // if the value of param "name" is def.equal to contacts.firstName at index [i] then.....
    if (contacts[i].hasOwnProperty(prop)) {   // ...and if the contact elements at index "i" have a property called the value of "prop" then....
      console.log(contacts[i][prop]);         // console.log those "prop" values 
      return contacts[i][prop];
    } else {
      console.log("No such property")         // else, console.log "No such property" - so this would action if the contacts.name value matches but
      return "No such property";           //  the array does not have a property matching the 'prop' value.
    }
  }
}
console.log("No such contact")                
return "No such contact";                     // If the name value does not match anything in the object then the function spits this out - also, will ensure the function ends
}
// lookUpProfile("Kristian", "lastName");     // will output "Vos"
// lookUpProfile("Sherlock", "likes");        // will output "Intriguing Cases", "Violin"
// lookUpProfile("Harry", "likes");           // will output "Hogwarts", "Magic", "Hagrid"
// lookUpProfile("Bob", "number");            // will output "No such contact"
// lookUpProfile("Bob", "potato");            // will output "No such contact"
// lookUpProfile("Akira", "address");            // will output "No such property"

// Only change code above this line
lookUpProfile("Akira", "likes");
// console.log(contacts.length);


