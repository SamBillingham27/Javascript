// var chevy = {
//     make: "Chevy",
//     model: "Bel Air",
//     year: 1957,
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 1021
//     };

// var cadi = {
//     make: "GM",
//     model: "",
//     year: 1955,
//     color: "tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12892
//     };

// var fido = {
//     name: "Fido",
//     weight: 20.2,
//     age: 4,
//     breed: "mixed",
//     activity: "fetch balls"
//     };
//     var bark;
//     if (fido.weight > 20) {
//     bark = "WOOF WOOF";
//     } else {
//     bark = "woof woof";
//     }
//     var speak = fido.name + " says " + bark + " when he wants to " + fido.activity;
//     console.log(speak);
//     console.log(fido);

// var chevy = {
//     make: "Chevy",
//     model: "Bel Air",
//     year: 1957,
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 1021
//     };
//     function prequal(car) {
//     if (car.mileage > 10000) {
//     return false;
//     } else if (car.year > 1960) {
//     return false;
//     }
//     return true;
//     }
//     var worthALook = prequal(chevy);
//     if (worthALook) {
//     console.log("You gotta check out this " + chevy.make + " " + chevy.model);
//     } else {
//     console.log("You should really pass on the " + chevy.make + " " + chevy.model);
//     }

function getSecret(file, secretPassword) {                 // Function is defined with two params - "file" and "secretPassword".
    file.opened = file.opened + 1;                         // Will increment the value in property name "opened" in the arguement name passed in.
    if (secretPassword == file.password) {                 // compares password passed through when funcation called against value of secretPassword and .. 
    return file.contents;                                  // if they match, will return value of contents property of file
    }
    else {                                                 // else, will return statement.
    return "Invalid password! No secret for you.";
    }
}

function setSecret(file, secretPassword, secret) {         // Function is defined with 3 params
    if (secretPassword == file.password) {                 // compares password passed through when funcation called against value of secretPassword and ..
        file.opened = 0;                                   // if they match, will change value of "opened" property to 0, and
        file.contents = secret;                            // assign value of property "contents" to the variable "secret."
    }
}

var superSecretFile = {                                    // Object superSecretFile defined, with 4 properties and values
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
};
var secret = getSecret(superSecretFile, 2);                // Function getSecret called with 2 arguements, and output assigned to variable "secret"
    console.log(secret);                                   // Detriot

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");   // Function setSecret called, which will change value of property "contents"
secret = getSecret(superSecretFile, 2);                                         // Function getSecret called again, and output assigned to variable "secret"
console.log(secret);                                                            // now Philadelphia


console.log(superSecretFile.opened)
console.log(superSecretFile.password)


    
    
