// 1.
let scores: number[] = [10, 20, 30];

// 2.
function getLength(arr: string[]): number {
    return arr.length;
}

// 3.
function echo(str: string): string {
    return str;
}

// 4.
function add(a: number, b: number): number {
    return a + b;
}

// 5.
function printName(firstName: string, lastName?: string): void {
    console.log(lastName ? firstName + lastName : firstName);
}

printName("hi", "wisoft");

// 6.
function sayHi(name: string): string {
    return 'hi' + name;
}