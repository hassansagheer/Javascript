//Array Shallowcopy

let numbers=[3, 5, 67,4,34,2, 6];
// let numbersshallowcopy= numbers; // array destructuring
let numbersshallowcopy= [...numbers]; // shallow copy of numbers using spread operator
numbersshallowcopy.unshift(0);
console.log(numbers);
console.log(numbersshallowcopy);
console.log(numbersshallowcopy.slice(2,4)); // shallow copy of numbers using slice

/*
//Object Shallowcopy 
let person1 = {
  name: 'abcd',
  age: 45,
  address: {
    street: '15',
    city: 'rwp'
  },
};
console.log('person1 =',person1);

let person2 = {...person1}; //shallowcopy of person1 as person2 using spread operator
console.log('shallowcopy of person1 as person2 =',person2);

person1.age=65
person1.address.street=31;
console.log('updated person1 =',person1);
*/