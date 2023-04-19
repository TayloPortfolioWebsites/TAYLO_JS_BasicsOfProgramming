function sayHello(name){
    return function(){
        console.log('Howdy ' + name + '!');
    }
}

let tiff = sayHello('tiff');
let jash = sayHello('jash');
let tere = sayHello('tere');
let luffy = sayHello('luffy');

tiff();
jash();
tere();
luffy();