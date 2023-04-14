let name = 'Rod';
let names = ['Joshua','Digs','Lucy','Nami'];
let others = ['rogers','bruce','hei'];

let lost = [4,8,15,16,23,42];
let fibonacci = [1,1,2,3,5,6,13,21,34,55];

var combine = lost.concat(fibonacci); //combination code for arrays
var tilde = fibonacci.join('~'); //combination with tilde after each number
var removefirstItemArray = lost.shift(); //removal of the first item in the array
lost.unshift(1,2,3,4); //adding of the values to the lost array
// console.log(names.reverse());
// console.log(names.sort());
// console.log(names.indexOf('Joshua'));
// console.log(combine.lastIndexOf(1));
// var filtered = combine.filter((x) => {if (x <= 55) return x;});
// names.forEach((names) => console.log(`howdy $(names)`));
// console.log(filtered.every((num)=>num<10));
console.log(fibonacci.some((num)=> num>100));

// console.log(filtered);