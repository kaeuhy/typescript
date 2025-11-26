enum DirectionEnum {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
    Stop = 5,
}

console.log(Object.keys(DirectionEnum))

// object literal
const Direction = {
    Up: 'UP',
    Down: 'DOWN',
    Left: 'LEFT',
    Right: 'RIGHT',
} as const;

type Direction = typeof Direction[keyof typeof Direction];

function move(dir: Direction) {}

move(Direction.Up);
move('UP');


type Animal = {
    name: string;
};

type Dog = Animal & {
    bark: () => void;
};

let animals: Animal[] = [];
let dogs: Dog[] = [];

let rDogs: readonly Dog[] = [];
let rAnimals: readonly Animal[] = [];

let mDogs: Dog[] = [];
let mAnimals: Animal[] = [];

type HandleAnimal = (a: Animal) => void;
type HandleDog = (d: Dog) => void;

let handleAnimal: HandleAnimal;
let handleDog: HandleDog;

// Q1. 어떤 줄이 에러인지, 왜 에러가 나는지 설명하시오.

animals = dogs;
dogs = animals;

// Q2-1. 어떤 줄이 에러인지, 왜 에러가 나는지 설명하시오.

rAnimals = rDogs;  // (1)
rDogs = rAnimals;  // (2)

// Q2-2. 어떤 줄이 에러인지, 왜 에러가 나는지 설명하시오.

mAnimals = rDogs;  // (3)
mDogs = rAnimals;  // (4)

// Q3. 어떤 줄이 에러인지, 왜 에러가 나는지 설명하시오.

handleAnimal = handleDog; // (1)
handleDog = handleAnimal; // (2)