'use strict';

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done);


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border)


// console.log(Object.keys(options).length);

//console.log(options["colors"]["border"]);

//delete options.name;

//console.log(options);

// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//         counter++;
//     }  
// }

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);


// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };


// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = 'asasasasa';
// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

//     console.log(internet);

//     function log(a, b, c) {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

//     const num = [2, 5, 7];

//     log(...num);


    // const array = ['a', 'b'];

    // const newArray = [...array];

    // const q = {
    //     one: 1,
    //     two: 2
    // };

    // const newObj = {...g};

    const soldier = {
        health: 400,
        armor: 100,
        sayHello: function() {
            console.log("Hello");
        }
    };

    // const jonh = {
    //     health: 100
    // };

    // // jonh.__proto__ = soldier;

    // Object.setPrototypeOf(jonh, soldier);
 
 const jonh = Object.create(soldier);
 
    jonh.sayHello();