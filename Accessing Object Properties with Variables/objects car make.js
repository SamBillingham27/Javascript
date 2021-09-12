function makeCar() {                                                        // Function defined with 12 variables - 5 arrays, 6 random number generators and
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];       //  1 object ("car").
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];
    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);
    var car = {                                                             // object "car" will comprise of 7 properties, with 6 values generated using 
    make: makes[rand1],                                                     // the random number generators, and the "milage" property given a value of 0.
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0
    };
    // console.log(car);
    return car;                                                             // Function to return the object "car" 
}

function displayCar(newCar) {                                               // Function defined with 1 parameter ("newCar") and outputs string to console.
    console.log("Your new car is a " + newCar.year + " " + newCar.make + " " + newCar.model);
    // console.log(displayCar(car));                                        // DO NOT USE - will keep generating output - why?????
}

var carToSell = makeCar();                                                  // Variable "carToSell" is assigned the output of the "makeCar" function,
                                                                            //  which it has invoked. So "carToSell" = the returned "car" values.
displayCar(carToSell);                                                      // The "displayCar" function is invoked, passing in the output "carToSell".  
// displayCar(car);                                                                            

// So why isn't the "displayCar" function just passed the output of the "makeCar" function - displayCar(car)? 
// When try to run it, get a "referenceError: car is not defined" message. Is this because "car" is defined as a variable inside the function "makeCar"?
// Could I put "displayCar(car)" inside the function? No - because it cannot go after the "return" statement as the 'return' stops the function, and it 
//  cannot go before the return statement as the output has not been 'captured'.  Is that correct???
// So - if that's right ....run a function, chuck its output into a variable defined in the function (stops looping?). Then when invoking the function,
//   assign the output to a variable outside the function (gets info out of the function - local to global?), and use that 2nd variable as pot of 
//  info to use for whatever??? 