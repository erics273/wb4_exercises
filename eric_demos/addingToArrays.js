"use strict"

let namesArray = ["eric", "alec", "italy", "candice", "rohan"];

// namesArray[5] = "adriana"
// namesArray[7] = "yvette"

// namesArray[namesArray.length] = "katalina";
// namesArray[namesArray.length] = "adriana";
// namesArray[namesArray.length] = "wilfredo";

namesArray.push("katalina");
namesArray.push("adriana");
namesArray.push("wilfredo");
namesArray.push("cash", "is", "king");

console.log(namesArray);

//removes the last item
namesArray.pop();

//removes the first item
namesArray.shift();

console.log(namesArray);
