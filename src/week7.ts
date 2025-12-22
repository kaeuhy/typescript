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


/*
 [문제 1] 함수 double을 구현하시오.
 - 매개변수 x는 number | string 타입이다.
 - x가 number이면 x * 2를 반환하시오.
 - x가 string이면 문자열을 두 번 이어붙인 값을 반환하시오. (예: "ab" -> "abab")
 - 반환 타입이 자연스럽게 number | string으로 추론되도록 작성하시오. (as 사용 금지)
 */
function double(x: number | string) {
    return typeof x === 'number' ? x * 2 : x + x
}

console.log(double('hi'));

/*
 [문제 2] 함수 makeSound를 구현하시오.
 - 매개변수 animal은 Dog | Cat 타입이다.
 - animal이 Dog라면 bark()를 호출하시오.
 - animal이 Cat이라면 meow()를 호출하시오.
 - 타입 가드(in 연산자 또는 사용자 정의 type guard)를 사용하여 타입을 좁힌 뒤 메서드를 호출하시오.
 */
type Dog = {
    bark(): void
}

type Cat = {
    meow(): void
}

function makeSound(animal: Dog | Cat) {
    return 'bark' in animal ? animal.bark() : animal.meow()
}

/*
 [문제 3] 사용자 정의 타입 가드 함수 isSquare를 구현하시오.
 - 매개변수 shape는 Square | Circle 타입이다.
 - shape가 Square인지 판별하여, Square일 때 true를 반환하시오.
 - 구현은 런타임에서 동작 가능한 판별 로직이어야 한다. (항상 true/false 반환 금지)
 - diagram에 isSquare를 사용하여 판별하도록 하시오.
 */
type Square = {
    size: number
}
type Circle = {
    radius: number
}

function isSquare(shape: Square | Circle): shape is Square {
    return 'size' in shape
}

function diagram(shape: Square | Circle) {
    return isSquare(shape) ? shape.size : shape.radius
}

/*
[문제 1] API 응답 분기 가드 함수 isOk를 구현하시오.
- ApiResponse<T>는 성공/실패 두 가지 형태의 유니온이다.
- success가 true인 경우를 성공으로 판별하시오.
- isOk는 사용자 정의 타입가드 문법(res is ApiSuccess<T>)을 사용하시오.
- renderUser에서 isOk를 사용해 안전하게 data / error에 접근하시오.
*/
type ApiSuccess<T> = { success: true; data: T }
type ApiFail = { success: false; error: { message: string } }
type ApiResponse<T> = ApiSuccess<T> | ApiFail

type User = { id: number; name: string }

function isOk<T>(res: ApiResponse<T>): res is ApiSuccess<T> {
    return res.success;
}

function renderUser(res: ApiResponse<User>) {
    return isOk(res) ? res.data : res.error
}

/*
[문제 2] unknown 응답을 User로 검증하는 isUser를 구현하시오.
- raw는 unknown이다.
- raw가 객체가 아니거나 null이면 false를 반환하시오.
- raw에 id, name 키가 존재하고
  id는 number, name은 string일 때만 true를 반환하시오.
- as 금지. (런타임 체크만 사용)
*/
type User2 = { id: number; name: string }

function hasKey<K extends PropertyKey>(obj: unknown, key: K): obj is Record<K, unknown> {
    return typeof obj === 'object' && obj !== null && key in obj
}

function isUser(raw: unknown): raw is User2 {
    return (hasKey(raw, 'id')
        && typeof raw.id === 'number'
        && hasKey(raw, 'name')
        && typeof raw.name === 'string'
    );
}

/*
[문제 3] 이벤트 타겟을 input으로 좁히는 isInput을 구현하시오.
- target이 HTMLInputElement일 때만 true를 반환하시오.
- onChange에서 isInput을 사용해 e.target.value를 안전하게 출력하시오.
*/
function isInput(target: unknown): target is HTMLInputElement {
    return target instanceof HTMLInputElement;
}

function onChange(e: Event) {
    if (isInput(e.target)) {
        return e.target.value;
    }
}

/*
[문제 4] 상태 머신 렌더 함수 renderState를 구현하시오.
- State<T>는 loading/error/success 유니온이다.
- switch로 status를 분기하시오.
- 모든 케이스를 처리하시오.
- default에서는 assertNever를 호출해 누락 케이스를 컴파일 단계에서 잡도록 하시오.
*/
type State<T> =
    | { status: "loading" }
    | { status: "error"; message: string }
    | { status: "success"; data: T }

function assertNever(x: never): never {
    throw new Error("Unhandled case: " + JSON.stringify(x))
}

function renderState<T>(state: State<T>) {
    switch (state.status) {
        case "loading":
            break;
        case "error":
            console.log(state.message);
            break;
        case "success":
            console.log(state.data);
            break;
        default:
            assertNever(state);
    }
}

/*
[문제 5] filter에서 타입을 좁히는 compactStrings를 구현하시오.
- 입력: (string | null | undefined)[]
- 출력: string[]
- isString을 사용자 정의 타입가드(x is string)로 구현하시오.
- compactStrings는 arr.filter(isString) 형태로 구현하시오.
*/
function isString(x: string | null | undefined): x is string {
    return x === 'string';
}

function compactStrings(arr: (string | null | undefined)[]): string[] {
    return arr.filter(isString);
}
