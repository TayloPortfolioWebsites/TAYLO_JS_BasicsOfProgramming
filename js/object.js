
// let array = [2023, 'bmw', '745li'];
// let object = {year: 2023, make: 'toyota', model: '745li'};

// OBJECT LITERAL SYNTAX
// let car1 = {
//     make: 'bmw',
//     model: '745li',
//     year: 2023,
//     getPrice: function(){
//         return 5000;
//     },
//     printDescription: function(){
//         console.log(this.make + ' ' + this.model)
//     }
// }

// console.log(car);
// car1.printDescription();
// console.log(car1.year);
// console.log(car1.getPrice());
// console.log(car1['getPrice']);
// console.log(car1['year']);
// console.log(car1[1]);

// var car2 = {};
// car2.whatever = 'hi';
// console.log(car2.whatever);

// var a = {
//     myProperty: {b: 'tiff'}
// };

// console.log(a.myProperty.b);

// var car3 = {
//     myProperty:[
//         {d: 'this'},
//         {e: 'can'},
//         {f: 'be'},
//         {g: 'really'},
//         {h: 'confusing'}
//     ]
// }

// console.log(car3.myProperty[0]);
// console.log(car3.myProperty[1]);
// console.log(car3.myProperty[2]);
// console.log(car3.myProperty[3]);
// console.log(car3.myProperty[4]);

// let carParking = [
//     {year: 2021, make: 'BMW', model: '528i'},
//     {year: 2019, make: 'Toyota', model: '4runner'},
//     {year: 1982, make: 'Buick', model: 'Skylark'},
// ]

// console.log(carParking[0]);

let contact = {
    customer: [
        {firstName: 'Tiffany', lastName: 'Taylo', phoneNumber: ['(123) 000-00000', '(123) 457-8888']},
        {firstName: 'Steven', lastName: 'Estonilo', phoneNumber: ['(123) 001-11111', '(123) 898-8888']},
    ],
    employees: [
        {firstName: 'Alyssa', lastName: 'Dela Cerna', phoneNumber: ['(123) 000-00000', '(123) 457-8888']},
        {firstName: 'Samuel', lastName: 'Pastolero', phoneNumber: ['(123) 000-00000', '(123) 457-8888']},
        {firstName: 'Kyle', lastName: 'Rosario', phoneNumber: ['(123) 000-00000', '(123) 457-8888']},
    ]
}

console.log(contact.customer[0]);