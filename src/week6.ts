function getText<T>(text: T): void {
    return console.log(text);
}

getText<string>('hello');

type DeveloperKeys = keyof { name: string; skill: string; }

function printKeys<T extends keyof { name: string; skill: string; }>(value: T) {
    console.log(value);
}

printKeys(100);

function printTextLength<T>(text: T) {
    console.log(text.length);
}