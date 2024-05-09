"use strict"

//create the variables holding the arrays with the scores
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

//a function to calculate an average from a list of numbers
function getAverage(scoresArray){

    //create a variable to keep track of our total of all the numbers in the array
    let total = 0;

    //getting the length of the list and assigning
    let lenthOfList = scoresArray.length;

    //some loop here that adds the scores together
    for(let i=0; i < lenthOfList; i++ ){
        total = total + scoresArray[i];
    }

    return total / lenthOfList;
}

//display the average the myScores Array
console.log("My Scores Average: " + Math.round(getAverage(myScores)));

//display the average of the yourScoresArray
console.log("Your Scores Average: " + Math.round(getAverage(yourScores)));