// Array Deepcopy using conversion
let numbers=[3, 5, 67,4,34,2, 6];
let deepcopy=JSON.parse(JSON.stringify(numbers));
numbers.push(90)
console.log(numbers);
console.log(deepcopy);


// Object Deepcopy example
// let person={
//     name:"hassan",
//     age:24
// }
// let persondeepcopy= JSON.parse(JSON.stringify(person));
// person.age=55;
// console.log(person);
// console.log(persondeepcopy);