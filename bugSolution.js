function foo(a, b) {
  if (a === b) {
    return true;
  } else {
    return false; 
  }
}

console.log(foo(NaN, NaN)); //false
console.log(foo(0, -0)); //false

function fooStrict(a,b){
  if(isNaN(a) && isNaN(b)){
    return true; // Handle NaN explicitly
  }
  if (Object.is(a,b)){
    return true;
  } else{
    return false;
  }
}
console.log(fooStrict(NaN, NaN)); //true
console.log(fooStrict(0,-0));//false