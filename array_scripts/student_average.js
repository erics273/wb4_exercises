"use strict"


//this is our list of students to work with 
let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] },
    { name: "Eric", scores: [65, 72, 55, 27] }
];


//create a function to calc the averages from a list of students
function calcStudentAverages(listOfStudents) {

    //this is us getting the total number of students
    let numberOfStudents = listOfStudents.length

    //lets loop over the students array
    for (let i = 0; i < numberOfStudents; i++) {

        //start a running total for the scores to be stored in the total variable
        let total = 0;

        //get the array of scores for the specific student
        let currentStudentScoresArray = listOfStudents[i].scores

        //capture the length or number of scores for the student so we can use for
        //the next loop
        let numberOfScoreForStudent = currentStudentScoresArray.length

        //now we need to loop of that students scores
        for (let i = 0; i < numberOfScoreForStudent; i++) {

            total += currentStudentScoresArray[i];

        }

        //calc the specific student average by dividing the total by the number of scores
        let studentAverage = total / numberOfScoreForStudent;

        //print the info for the student to the console.
        console.log(`${listOfStudents[i].name} has an average score of ${studentAverage}`)

    }


}

//call the function
calcStudentAverages(students);