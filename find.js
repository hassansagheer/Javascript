const arr = [1, 9, 0, 7, 1, 5];

/*
//find an element in array with value 1
//find returns the first element only if value found but if not found then it shows undefined
console.log(arr.find(item => item === 1));
*/

//return boolean after checking each element in array using find
arr.find((item)=>{
    console.log(item === 1);
});