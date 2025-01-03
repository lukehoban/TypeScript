type T = { b?: never };

// Both of these should fail because b is never
const x: T = { b: 0 };
const y: T = { b: undefined };

// This should pass
const z: T = {};