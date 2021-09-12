var fiat = {                                                // Object "fiat" created with 11 properties.  Three of these properties contain   
    make: "Fiat",                                           //  functions (methods)
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function() {                                     // The "this" tells the reader that the "started" property belongs to "fiat" object ("this" one)
        this.started = true;                                // The function(method) will change the "started" property value to "true" when invoked.
    },
    stop: function() {
        this.started = false;                               // The function(method) will change the "started" property value to "false" when invoked.
    },
    drive: function() {                                     // The function(method) will send an alert depending on the "started" property value 
        if (this.started) {                                 //  - true or false
            alert("Zoom zoom!");
            // console.log("Zoom Zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};

fiat.drive();                                               // invokes the "drive" method in the "fiat" object
fiat.start();
fiat.drive();
fiat.stop();
