"use strict"

//this is a list of lunch reciepts (objects that represent a meal)
let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

//function that totals the items on the receipt
function totalTheMeals(mealsArray){

    //start a variable to keep track of the total
    let total = 0;

    //create a variable that keeps track of the length of the array
    let numberOfMeals = mealsArray.length

    for(let i = 0; i < numberOfMeals; i++){

        total = total + mealsArray[i].price

    }

    return total;

}

//get the raw total and use it to calc tax/tip/balance due
let lunchTotal = totalTheMeals(lunch);
let lunchTax = lunchTotal * (8 / 100);
let lunchTip = lunchTotal * (18 / 100)
let totalDue = lunchTotal + lunchTax + lunchTip;

//display the total check to the users in the console
console.log("The lunch total was: " + lunchTotal.toFixed(2));
console.log("The tax was: " + lunchTax.toFixed(2));
console.log("The tip was: " + lunchTip.toFixed(2));
console.log("The total due is: " + totalDue.toFixed(2));
