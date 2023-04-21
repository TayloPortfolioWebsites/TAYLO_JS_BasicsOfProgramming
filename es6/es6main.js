import User, {printName as printUserName, printAge} from '../es6/es6user.js';

const user = new User('Tiff',40);
console.log(user);

printUserName(user);
printAge(user);