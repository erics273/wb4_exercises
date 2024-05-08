"use strict"

/*
name
address
city
state
zip
*/


//create our person with some properties that describe the person
let person = {
    name: "Eric Schwartz",
    address: "1234 easy street",
    city: "Fort Myers Beach",
    state: "FL",
    zip: "33931"
};

//crete a function that formats and prints an address for a cotact to the console
function printContact(yourmom){

    console.log(`
    ${yourmom.name}
    ${yourmom.address}
    ${yourmom.city}, ${yourmom.state} ${yourmom.zip}
    `);

}

//run the function with the person we created above
printContact(person);