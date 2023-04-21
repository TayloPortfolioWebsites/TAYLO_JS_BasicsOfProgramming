function checkout(...items){
    let total = 0;
    for(let i in items){
        total += items[i];
    }
    return total;
}

console.log("The total is: $" + checkout(10,40,30));

/**************************************************** */

