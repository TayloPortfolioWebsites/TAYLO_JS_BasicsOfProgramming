// function greetings(message='Hi!'){
//     console.log(message);
// }

// greetings();

// greetings('Hello!');

/********************************************* */
// function add(x,y){
//     return console.log(x+y);
//     // return x + y;
// }

// add(5,5);
// // console.log(add(5,5));

/******************************************** */

// function say(message){
//     message = typeof message !== 'undefined' ? message: 'Hi! this is a false value.';
//     console.log(message);
// }

// say();

/******************************************** */
// function multiply(a,b){
//     return a*b;
// }

// console.log(multiply(5,2));
// console.log(multiply(5));

/******************************************* */
function multiply(a,b){
    b = typeof b !== 'undefined' ? b: 1;
    return a*b;
}

console.log(multiply(6,2));
console.log(multiply(5));