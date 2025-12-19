// function updateInput(textInput: number | string | boolean) {
//     textInput.toFixed(2);
// }

// function updateInput(textInput: number | string | boolean) {
//     (textInput as number).toFixed(2);
// }
//
// updateInput('hello');

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let eunhyeon = new Person('은현', 25);
//
// eunhyoen instanceof Person;
//
// let hulk = { name: '헐크', age: 79};
// hulk instanceof Person;

// interface Book {
//     name: string;
//     rank: number;
// }
//
// interface OnlineLecture {
//     name: string;
//     url: string;
// }
//
// function learnCourse(material: Book | OnlineLecture) {
//     if ('name' in material) {
//         material.
//     }
// }

// interface Person {
//     name: string;
//     age: number;
//     industry: 'common';
// }
//
// interface Developer {
//     name: string;
//     age: string;
//     industry: 'tech';
// }
//
// function greet(someone: Person | Developer) {
//     if (someone.industry === 'common') {
//         someone.
//     }
// }


// let a: string = 'hi';
// let b: 'hi' = 'hi';
//
// a = b;

// type Captain = {
//     name: string;
// }
//
// interface Antman {
//     nickname: string;
// }
//
// let a: Captain = {
//     name: '캡틴',
// };
//
// let b: Antman = {
//     nickname: '앤트맨',
// };
//
// b = a;

// type Person = {
//     name: string;
// }
//
// interface Developer {
//     name: string;
// }
//
// let joo = Person = {
//     name: '형주'
// };
//
// let capt: Developer = {
//     name: '캡틴'
// };
//
// capt = joo;
// joo = capt;

// let add = (a: number, b: number): number => {
//     return a +b;
// }
//
// let sum = (x: number, y: number): number => {
//     return x +y;
// }
//
// add = sum;
// sum = add;

// let getNumber = (num: number) => {
//     return num;
// };
//
// let sum = (x: number, y: number) => {
//     return x +y;
// }
//
// sum = getNumber;