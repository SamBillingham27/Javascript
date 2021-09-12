
function randomRange(myMin, myMax) {
    // Only change code below this line
    
    
    console.log(Math.floor(Math.random() * (myMax - myMin + 1)) + myMin);

    // return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    
    return 0;
}

    randomRange(2, 5);



    // Only change code above this line
  

//  so, 5 - 2 + 1 (which gives us 4), 
// * math.random () (which will give us a number between 0.000etc4 and 3.9999etc9 ), 
// + 2 (which will give us a number between 2.000etc4 and 5.999etc9), 
// and take math.floor (which will give us a number between 2 and 5)
