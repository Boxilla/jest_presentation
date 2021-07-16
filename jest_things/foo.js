function foo(a, b, x) {
    if (a > 1 &&  b === 0) {
        x = x/a
    }
    if ( a === 2 && x > 1) {
        x = x + 1        
    }
    return x;
  }
  module.exports = foo;