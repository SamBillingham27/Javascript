// var cadi = {
//     make: "GM",
//     model: "Cadillac",
//     year: 1955,
//     color: "tan",
//     passengers: 5,
//     convertible: false,
//     mileage: 12892,
//     started: false,
//     start: function() {
//         this.started = true;
//     },
//     stop: function() {
//         this.started = false;
//     },
//     drive: function() {
//         if (this.started) {
//             alert(this.make + " " +
//                 this.model + " goes zoom zoom!");
//         } else {
//             alert("You need to start the engine first.");
//         }
//     }
// };
    
// var chevy = {
//     make: "Chevy",
//     model: "Bel Air",
//     year: 1957,
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 1021,
//     started: false,
//     start: function() {
//         this.started = true;
//     },
//     stop: function() {
//         this.started = false;
//     },
//     drive: function() {
//         if (this.started) {
//             alert(this.make + " " +
//                 this.model + " goes zoom zoom!");
//         } else {
//             alert("You need to start the engine first.");
//         }
//     }
// };

// var taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341,
//     started: false,
//     start: function() {
//         this.started = true;
//     },
//     stop: function() {
//         this.started = false;
//     },
//     drive: function() {
//         if (this.started) {
//             alert(this.make + " " +
//                 this.model + " goes zoom zoom!");
//         } else {
//             alert("You need to start the engine first.");
//         }
//     }
// };

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1955,
    color: "blue",
    passengers: 3,
    convertible: false,
    mileage: 9999,
    started: false,
    fuel: 0,
    start: function() {
        if (this.fuel < 1) {                                                // or this.fuel == 0
            console.log("The car is on empty, fill up before starting!");
        } else {
            console.log("The car has started");
            this.started = true;
        }
    },
    stop: function() {
        this.started = false;
        console.log("The car has stopped");
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.make + " " +
                    this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                console.log("Uh oh, out of fuel.");
                this.stop();
            }
        } else {
            console.log("You need to start the engine first.");
        }
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
        console.log("Fuel added");
        }
};

// cadi.start();
// cadi.drive();
// cadi.stop();
// chevy.start();
// chevy.drive();
// chevy.stop();
// taxi.start();
// taxi.drive();
// taxi.stop();
fiat.start();
fiat.drive();
// fiat.stop();
fiat.addFuel(2);
fiat.start();
fiat.drive();
// fiat.drive();
// fiat.drive();
fiat.stop();


// for (var prop in taxi) {
//     console.log(prop + ": " + taxi[prop]);
//     }
