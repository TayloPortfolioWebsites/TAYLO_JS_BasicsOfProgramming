// let promise = new Promise((resolve, reject) => {
//     let a = 1+1;
//     // if true resolve this promise
//     if(a == 2){
//         resolve('This is a SUCCESSFUL PROMISE!');
//     }
//     // else reject this promise
//     else{
//         reject('This is a FAILED PROMISE!');
//     }
// });

// // console.log(promise);

// promise.then((message) => {
//     console.log("This is inside of the .then method " + "'" + message + " '");
// }).catch((message) => {
//     console.log("This is inside of the .catch method " + "'" + message + " '");
// });

/**************************************************** */

const userStopsWatching = false;
const userCurrentlyWatching = true;

function callbackToPromise(){
    return new Promise((resolve, reject)=>{
        if(userStopsWatching){
            reject({
                name: 'The user has stopped watching',
                message: 'Bye, see you soon again!'
            });
        }
        else if(userCurrentlyWatching){
            reject({
                name: 'The user is currently watching',
                message: 'I hope you learned something from this lesson tutorial.'
            });
        }
        else{
            resolve("You're doing great! Remember that a little progress each day adds up to big results!");
        }
    });
}

console.log(callbackToPromise());
callbackToPromise().then((message)=>{
    console.log('This is a SUCCESSFULL PROMISE: ' + message);
}).catch((e)=>{
    console.log(e.name + ' ' + e.message);
});

/***************************************************** */