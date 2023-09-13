const arr = [1, 9, 0, 7, 5];

//splice method is used to add, remove and replace elements in array

/*
//Add elements in array using splice without removing any element from array
console.log(arr.splice(3, 0, 'a', 'bravo'));
console.log('myArray after splice', arr);
*/

/*
//Remove elements from array using splice
//first 2 in splice is startindex where second 2 is no. of removing elements in splice
console.log(arr.splice(2, 2));
console.log('myArray after splice', arr);
*/

//Replacing elements in array using splice
console.log(arr.splice(2, 2, 'a', 'bravo','hello'));
console.log('myArray after splice', arr);
