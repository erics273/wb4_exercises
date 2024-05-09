"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Giant Chewy Nerds", price: 6.00},
    {product: "Snickers Bar", price: 1.89},
    {product: "Mounds Bar", price: 1.50},
    {product: "Sour Patch Kids", price: 3.79},
    {product: "Everlasting Gobstopper", price: .99},
    {product: "Ring Pop", price: 1.79}
 ];

let numberOfProducts = products.length;


//use this loop to find out what candies cost less than 4 dollars
 for(let i=0; i < numberOfProducts; i++ ){

    if(products[i].price < 4){
        console.log(`${products[i].product}  cost ${products[i].price} and that is less than 4`)
    }

 }


 //use this loop to find out what candies have M&M in the title
 for(let i=0; i < numberOfProducts; i++ ){

    if( products[i].product.indexOf("M&M") !==  -1){
        console.log(`${products[i].product}  cost ${products[i].price} and it is has M&M in its name`);
    }

 }

  //use this loop to find if we carry swedish fish
  for(let i=0; i < numberOfProducts; i++ ){

    if( products[i].product === "Swedish Fish" ){
        console.log(`yes we carry sweedish fish`);
    }

 }