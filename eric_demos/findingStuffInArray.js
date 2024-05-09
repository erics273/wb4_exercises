let teams = ["Red Sox", "Rangers", "Blue Jays", "Astros", "White Sox", "Rangers"];

//finds the index of the first instance of what we are looking for. 
//in this case we are looking for "Rangers"
// let index = teams.indexOf("Rangers");

//finds the last index of the word Rangers in the list. In this case it's
//position 5
let index = teams.lastIndexOf("Rangers");


//if index was -1, we didn't find what we are looking for
if (index === -1) {
    console.log("Item not found");
} else {
    //otherwise we found and we are going to print the index
    console.log("Item at position: " + index);
}


let menu = [
    { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
    { id: 2, item: "Burger", category: "Meal", price: 7.29 },
    { id: 3, item: "Salad", category: "Meal", price: 8.29 },
    { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
    { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

//given a menu and a category for items on the menu
//return a new list (array) of just the items that match that category
function getMenuItemsInCategory(menu, category) {

    //start by creating an empty list to hold our matches
    let matching = [];
    //number of items on the menu
    let numItems = menu.length;

    //loop over the menu
    for (let i = 0; i < numItems; i++) {
        //if the menu item we are on has a category that matches the category
        //passed into the function then add it to the matching array
        if (menu[i].category === category) {
            //add that menu item
            matching.push(menu[i]);
        }
    }
    
    //return all the matching menu items
    return matching;
}


// show all the drinks/meals/whatever we passed in as the category
let mealsArray = getMenuItemsInCategory(menu, "Drink"); 

//lets loop over our matches and display the item name and price to the user
for(let i=0; i < mealsArray.length; i++){
    console.log(`${mealsArray[i].item} is ${mealsArray[i].price}`);
}



