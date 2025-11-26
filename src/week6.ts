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

interface Dropdown<T> {
    title: string;
    value: T;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    tag: string;
    description: string;
}

let shoppingItem: DetailedDropdown<number> = {
    title: "강은현",
    tag: '타입',
    description: '세미나',
    value: 1
}

