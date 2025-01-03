type T = { a: number, b?: never } | { a?: never, b: number };

// This should fail because b cannot be number when a is number
const t1: T = { a: 0, b: 0 };

// This should also fail because b cannot be undefined when a is number
const t2: T = { a: 0, b: undefined };

// This should pass
const t3: T = { b: 0 };

// This should pass
const t4: T = { a: 0 };