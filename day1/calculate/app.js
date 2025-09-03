// module ----
// global objects
// asynchronous code -- callbacks , promises ,async ,await,settimeout, setinterval

// console,, this , window,

// const { sum, sub } = require("./calculate.js"); // synchronous

// let a = 20;
// let b = 20;

// console.log(sum(a, b));
// console.log(sub(a, b));

// const { sum } = require("./calculate/sum");
// const { sub } = require("./calculate/sub");
// const { mul } = require("./calculate/multiply");

const { sum, sub, mul } = require("./calculate/index");

let a = 10;
let b = 20;

console.log(mul(a, b));
console.log(sum(a, b));
console.log(sub(a, b));
