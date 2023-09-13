//function definition with function keyword
// function myFunc(a, b) {}

//shortened version function definitions using arrow function

//shortened version with implicit return
// var myFunc = (a, b) => a*b;

//shortened version with explicit return
var myFunc = (a, b) => {
    let temp = a;
    a = b;
    b = temp;
    return [a,b];
};

console.log(myFunc(2,3));