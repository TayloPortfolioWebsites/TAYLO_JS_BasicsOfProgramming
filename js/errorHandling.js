// let a = 7 * undefined / "error handling";
// console.log(a);

/*************************************************** */

// function beforeTryCatch(){
//     let object = undefined;
//     // console.log(obj.b);
//     console.log("We should never see this is the previous line of code obj.b throws and exception.");
// }

// beforeTryCatch();

/*************************************************** */

function afterTryCatch(){
    try{
        let obj = undefined;
        console.log(obj.b);
        console.log("If the previous line of code throws an exception you'll never see this");
    }
    catch(error){
        console.log("I caught an exception: " + error.message);
    }
    finally{
        console.log("This will happen no matter what!");
    }
    console.log("My application is still running.");
}

afterTryCatch();

/*************************************************** */