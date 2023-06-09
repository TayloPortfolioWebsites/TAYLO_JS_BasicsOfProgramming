// var counter = (function(){
//     let count = 0;

//     function print(message){
//         console.log(message + '---' + count);
//     }

//     return{
//         value: count,
//         get: function(){
//             return count;
//         },
//         set: function(value){
//             count = value;
//         },
//         increment: function(){
//             count += 1;
//             print('After Increment');
//         },
//         reset: function(){
//             print('Before reset: ');
//             count = 0;
//             print('After reset: ');
//         }
//     }
// })();

// console.log(counter.count);
// console.log(counter.value);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.increment());

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// counter.set(7);
// console.log(counter.get());
// counter.reset();

/*************************************************** */

// REVEALING MODULE PATTERN
let counter = (function(){
    let count = 0;

    function print(message){
        console.log('$(message) => $(count)');
    };

    function getCount(){
        return count;
    };

    function setCount(value){
        count = value;
    };

    function incrementCount(){
        count += 1;
        print('After increment: ');
    }

    function resetCount(){
        print('Before Reset: ');
        count = 0;
        print('After reset: ');
    }

    return{
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    }

})();

console.log(counter);
console.log(counter.set(8));
console.log(counter.get());

/**************************************************************** */