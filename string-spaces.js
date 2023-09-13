const string = 'this is a primitive\nstring';
const searchTerm = 'a';

/*
//return length of string including space
console.log(string);
console.log(string.length);

const indexWithSpace = string.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" including spaces from the beginning is ${indexWithSpace}`);
*/

//return length of string without spaces
const newString = string.replace(/\s+/g,'');  // for only single spaces replace / /g will use instead of /\s+/g
console.log(newString);
console.log(newString.length);

const indexWithoutSpace = newString.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" without spaces from the beginning is ${indexWithoutSpace}`);