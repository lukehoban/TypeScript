type T = 
  { a: number, b?: never } |
  { a?: never, b: number };

const t: T = {
  a: 0,
  b: 0
};