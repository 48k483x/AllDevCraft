function math_expr(expr ) {
  let re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/
  return  re.test(expr);

}

console.log(math_expr('8-8'))