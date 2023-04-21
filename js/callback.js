// let callback = function print(callback){
//     callback();
// }

// console.log(typeof callback);

/**************************************************************** */

// taskOne();
// taskTwo();
// taskThree();

// function taskOne(){
//     console.log('Task 1');
// }

// function taskTwo(){
//     console.log('Task 2');
// }

// setTimeout(taskOne, 2000);
// taskTwo();

// function taskThree(){
//     console.log('Task 3');
// }

/*************************************************** */

// const message = function(){
//     console.log('This message will be shown after 3 seconds.');
// }

// setTimeout(message, 3000);

/*************************************************** */

// setTimeout(function(){
//     console.log('This anonymous function will run after 3 seconds.');
// }, 3000);

/*************************************************** */

// setTimeout(() => {
//     console.log('This anonymous function will run after 3 seconds.');
// }, 3000);

/*************************************************** */

document.querySelector('#callback__btn').addEventListener("click", function(){
    console.log('This is a callback that got displayed using an event listener when a user clicks a button.');
});

/**************************************************** */

// CALLBACK EXAMPLE 

const userStopsWatching = false;
const userCurrentlyWatching = true;

function callBackTutorial(callB, errorCallB){
    if(userStopsWatching){
        errorCallB({
            name: 'The user has stopped watching',
            message: 'Bye, see you soon again!'
        });
    }
    else if(userCurrentlyWatching){
        errorCallB({
            name: 'The user is currently watching',
            message: 'I hope you learned something from this lesson tutorial.'
        });
    }
    else{
        callB("You're doing great! Remember that a little progress each day adds up to big results!");
    }
}

callBackTutorial(
    (message)=>{console.log('This is a SUCCESSFULL CALLBACK: ' + message)},
    (error)=>{console.log(error.name + ' ' + error.message)
});