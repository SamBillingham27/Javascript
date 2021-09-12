console.log("test");

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];


function printAndGetHighScore(sc) {             // Function 'printAndGetHighScore is declared - it has one parameter 'sc'.
    let highScore = 0;                          // variable 'highScore' is declared and assigned a value of 0.
    var output;                                 // variable 'output' is declared - it has no value assigned so is 'undefined'.
    
    for (var i = 0; i < sc.length; i++) {
        output = "Bubble solution #" + i + 
        " score: " + scores[i];                 // The function will output the index number and value of each 'sc' element.
        if (sc[i] > highScore){                 // if the 'sc' element value is higher than the 'highscore' element value then.....
            highScore = sc[i]                   // the 'sc' element value is assigned to 'highScore'.
            }
    }
    return highScore;                           //function returns the variable 'highScore'.
}
var highScore = printAndGetHighScore(scores);   // The function is called, and the values in variable 'scores' is passed into the 'sc' parameter. The output 
                                                // of the function is assigned to the 'highScore' variable.

console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

function getBestResults(sa, hs) {               // We define function getBestResults with two parameters called - 'sa' and 'hs'.
    var bestSolutions = [];                     // An empty array called bestSolutions will be created.

    for (var i = 0; i < sa.length; i++) {   
        if (sa[i] == hs) {                      // The function will compare each 'sa' value to the 'hs' value.  If the 'sa' value is equivilent/same
                                                // as the 'hs' value, then .........
        bestSolutions.push(i);                  // the index of that 'sa' value is added to the end of the 'bestSolutions' array.
        }
    }
    
    return bestSolutions;                       // When the function has completed, the contents of 'bestSolutions' is retuned. (If it was not 'returned', 
                                                //  we would not be able to see it outside of the function, even if 'bestSolutions' was defined 
                                                // outside of the function)
    
}
var bestSolutions = getBestResults(scores, highScore); // The function is called, and the values of 'scores' is passed into the 'sa' parameter, and 
                                                // the value of 'highScore' is passed into the 'hs' parameter. The output of the function is assigned 
                                                // to the 'bestSolutions' variable.
    

 
// console.log(bestSolutions);
console.log("Solutions with the highest scores are: " + bestSolutions);

var costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29];

function getMostCostEffectiveSolution(sc, cst, hs){

let cost = 100;
let index;

for(var i = 0; i < scores.length; i++) {
    if (sc[i] == hs) {
        if (cost > cst[i]){
        index = [i],
        cost = costs[i]
        }

    }
}

return index;
}

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");
