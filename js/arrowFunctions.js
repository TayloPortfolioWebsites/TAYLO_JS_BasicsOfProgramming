// SHORTHAND SYNTAX FOR DEFINING A FUNCTION

// let hi = () => {
//     console.log('Howdy my friend!');
// }

// hi();

/********************************************* */

// let hi = (name) => {
//     console.log(`Howdy ${name} my friend!`);
// }

// hi('tiff');

/********************************************* */

// let add = (a,b) => {return a+b};
// console.log(add(7,3));

/********************************************* */

// let names = ['rod','jash','cid','lucy'];
// var transformed = names.map((name) => {return `howdy ${name}, my friend.`});
// console.log(transformed);

/********************************************* */

// let names = ['rod','jash','cid','lucy'].map((name) => {return `howdy ${name}, my friend.`});
// var transformed = names;
// console.log(transformed);

/********************************************* */

let names = ['rod','jash','cid','lucy'];
let i = 0;
names.map((name) => {i++; console.log(`howdy ${name} ${i}`)});
console.log(names);

/********************************************* */