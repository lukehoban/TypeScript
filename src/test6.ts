type T = { a?: never };

const x: T = { a: 1 };  // should error: Type 'number' is not assignable to type 'never'
const y: T = { a: undefined };  // should error: Type 'undefined' is not assignable to type 'never'
const z: T = {};  // should pass