type T = { a: number, b?: never };
const x: T = { a: 1, b: 2 };
const y: T = { a: 1, b: undefined };