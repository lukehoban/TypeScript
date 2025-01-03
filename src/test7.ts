// Test 1: Simple never type
type T1 = { a?: never };
const x1: T1 = { a: 1 };  // should error: Type 'number' is not assignable to type 'never'
const y1: T1 = { a: undefined };  // should error: Type 'undefined' is not assignable to type 'never'
const z1: T1 = {};  // should pass

// Test 2: Union with never type
type T2 = { a: number, b?: never } | { a?: never, b: number };
const x2: T2 = { a: 0, b: 0 };  // should error: Type 'number' is not assignable to type 'never'
const y2: T2 = { a: 0, b: undefined };  // should error: Type 'undefined' is not assignable to type 'never'
const z2: T2 = { a: 0 };  // should pass
const w2: T2 = { b: 0 };  // should pass