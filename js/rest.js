// function checkout(...items){
//     let total = 0;
//     for(let i in items){
//         total += items[i];
//     }
//     return total;
// }

// console.log("The total is: $" + checkout(10,40,30));

/**************************************************** */

function displayName(first, last, ...middle){
    console.log("Welcome " + first, middle.join(), last + " to our game!");
}

// console.log(displayName("Hazel Tiffany","Taylo","Cabanero"));
displayName("Hazel Tiffany","Taylo","Cabanero");

/**************************************************** */

