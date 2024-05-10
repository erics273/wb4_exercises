"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Giant Chewy Nerds", price: 6.00},
    {product: "Snickers Bar", price: 1.89},
    {product: "Mounds Bar", price: 1.50},
    {product: "sour patch kids", price: 3.79},
    {product: "everlasting gobstopper", price: .99},
    {product: "ring Pop", price: 1.79}
 ];

 function compareFnForObjectProperties(a, b) {
    let aUpper = a.product.toUpperCase();
    let bUpper = b.product.toUpperCase();


    if (aUpper < bUpper) {
      return -1;
    } else if (bUpper > aUpper) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  function compareFnForObjectPropertiesPrice(a, b) {
    return b.price - a.price
  }


 products.sort(compareFnForObjectProperties);

 console.log(products)

 console.log("--------------------")

 products.sort(compareFnForObjectPropertiesPrice);

 console.log(products)