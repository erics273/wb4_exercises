"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scoresArray){
    let total = 0;

    let lenthOfList = scoresArray.length
    //some loop here that adds the scores together
    for(let i=0; i < lenthOfList; i++ ){
        total += scoresArray[i];
    }

    return total / lenthOfList
}

//display the average the myScores Array
console.log("My Scores Average: " + getAverage(myScores));

//display the average of the yourScoresArray
console.log("Your Scores Average: " + getAverage(yourScores));