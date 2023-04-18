// let x = 1;

// while(x<10){
//     console.log(x++);
//     if(x==7) break;
// }

// VARIABLE SCOPE

// let a = 'first example of scope';

// function scopeTest(){
//     console.log(a);
//     let b = "second example of scope inside of a code block";
// }

// scopeTest();
// console.log(b);

// let a = 'first example of scope';

// function scopeTest(){
//     console.log(a);
//     if(a != ''){
//         console.log(a);
//     }
// }

// scopeTest();

// let a = 'first example of scope';

// function scopeTest(){
//     console.log(a);
//     var b;
//     if(a != ''){
//         console.log(a);
//         let b = 'third example of scope inside a function scope and an if statement code block';
//     }
//     console.log(b);
// }

// scopeTest();

// let a = 'first example of scope';

// function scopeTest(){
//     console.log(a);
//     a = 'changed the value of the variable a outside of the function scope';
//     if(a != ''){
//         console.log(a);
//         let b = 'third example of scope inside a function scope and an if statement code block';
//     }
// }

// scopeTest();
// console.log(a);

let a = 'first example of scope';

function scopeTest(){
    console.log(a);
    a = 'changed the value of the variable a outside of the function scope';
    let b = 'second variable inside of the function scope';    if(a != ''){
        console.log(a);
        console.log('inside if: ' + b);
        let c = 'third example of scope inside a function scope and an if statement code block';
    }
}

scopeTest();
console.log(a);