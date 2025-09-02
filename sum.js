function sum(a, b) {
  return a + b;
}
module.exports = { sum };

// commonjs module dont support strict mode but es module do support
// commonjs module is synchronous  but es module is asynchronous
// better is esmodule than common js
// widely used in legacy codes or old projects -- commonjs
