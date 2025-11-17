// // interface Person {
// //     name: stirng;
// //     age: number;
// // }
// //
// // interface Developer {
// //     name: string;
// //     skill: string;
// // }
// //
// // function introduce(someone: Person | Developer): void {
// //     console.log(someone.age);
// // }
//
// // introduce({name: "개발자", skill: "TS"});
//
// // function introduce(someone: Person | Developer) {
// //     console.log("heelo");
// // }
// //
// // console.log(typeof introduce);
//
// interface Avenger {
//     name: string;
// }
//
// interface Hero {
//     skill: string;
// }
//
// function introduce(someone: Avenger & Hero) {
//     console.log(someone.name);
//     console.log(someone.skill);
// }
//
// introduce({ name: "은현" });
//
//
//

// interface User {
//     id: string;
//     name: string;
// }
//
// let seho: User;


// 라이브 코딩 중첩 삼항연산자
// interface Person {
//     name: string,
//     age: number,
// }
//
// interface Developer {
//     name: string,
//     skill: string,
// }
//
// function introduce(someone: Person | Developer): void {
//     "skill" in someone
//         ? console.log("skill이 있습니다.")
//         : "age" in someone
//             ? console.log("age가 있습니다.")
//             : console.log("둘 다 해당하지 않습니다")
// }
//
// introduce({name: '은현', skill: '자바스크립트' });
// introduce({name: '은현', book: '자바스크립트'})


// type del = string | number | boolean;
//
// function logMessage(msg: del) {
//     console.log(msg);
// }
//
// let m1: del = 'hello';
// let m2: del = 123;

type User = {
    id: string;
    name: string;
}

interface Admin extends User {
    role: string;
}

const admin: Admin = {
    id: 'asd',
    name: 'root',
    role: 'a'
};

console.log(admin.id);