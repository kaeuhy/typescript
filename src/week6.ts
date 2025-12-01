// function getText<T>(text: T): void {
//     return console.log(text);
// }
//
// getText<string>('hello');
//
// type DeveloperKeys = keyof { name: string; skill: string; }
//
// function printKeys<T extends keyof { name: string; skill: string; }>(value: T) {
//     console.log(value);
// }
//
// printKeys(100);
//
// function printTextLength<T>(text: T) {
//     console.log(text.length);
// }
//
// let a;
// a = 10;


// function sum(a: number, b: number) {
//     return a == b;
// }
//
// let result = sum(1, 2);
//
//
// function getA(a: number) {
//     let c = "hi";
//     return a + c;
// }

// interface Dropdown<T> {
//     title: string;
//     value: T;
// }
//
// interface DetailedDropdown<K> extends Dropdown<K> {
//     tag: string;
//     description: string;
// }
//
// let shoppingItem: DetailedDropdown<number> = {
//     title: "강은현",
//     tag: '타입',
//     description: '세미나',
//     value: 1
// }


// interface Person {
//     name: string;
//     age: number;
// }
//
// let joo = {};
// joo.name = '은현';
// joo.age = 25;

// 문제 1) 제네릭 identity 함수를 완성해보기
// 요구사항:
// - 어떤 타입이 들어와도 그대로 돌려보내기
// - 호출할 때 타입 인자를 직접 쓰지 않아도 타입이 추론되도록 만들기

function myIdentity<T>(value: T): T {
    return value;
}

// 사용 예시 (이 부분은 손대지 말고, 타입 추론 결과를 예상)
const a = myIdentity(10);          // a의 타입 예상: number
const b = myIdentity("hello");     // b의 타입 예상: string
const c = myIdentity({x: 1});    // c의 타입 예상: object


// 문제 2) toArrayGeneric 를 완성해보기
// 요구사항:
// - 어떤 값이 들어오면 그 값을 하나 담고 있는 배열을 반환
// - 타입 추론 결과:
//    toArrayGeneric(1)         -> number[]
//    toArrayGeneric("hi")      -> string[]
//    toArrayGeneric({ a: 1 })  -> { a: 1 }[]

function toArrayGeneric<T>(value: T): T[] {
    // TODO: 전달받은 값을 하나만 넣은 배열을 반환하도록 구현
    return [value];
}

// 사용 예시
const arr1 = toArrayGeneric(1);          // 예상 타입: ?
const arr2 = toArrayGeneric("hi");       // 예상 타입: ?
const arr3 = toArrayGeneric({a: 1});   // 예상 타입: