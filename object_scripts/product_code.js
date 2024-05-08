"use strict"


//function to parse code
function parsePartCode(code){


    //get the supplier code from the passed in string
    let supplierCode = code.substring(0, code.indexOf(":"));

    //get the product number from the passed in string
    let productNumber = code.substring(code.indexOf(":")+1, code.indexOf("-"));

    //get the size from the passed in string
    let size = code.substring(code.indexOf("-")+1);

    //put all that together in and object and return from the function
    return {
        supplierCode: supplierCode,
        productNumber: productNumber,
        size: size
    }

}

//create a variable holding some product code
let potato = "XYZ:1234-L";

//run the function and assing the return value to a variable
let parsedCode = parsePartCode(potato);

//work with the variable to diplay the information in the console
console.log(`
Supplier: ${parsedCode.supplierCode}
Product Number: ${parsedCode.productNumber}
Size: ${parsedCode.size}
`);