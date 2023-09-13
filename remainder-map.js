const arr = [1, 9, 0, 7, 5];

const map = arr.map(x =>{
    return x % 2;
});
console.log(map);

//this works same as above
/*
const map = arr.map(x => x % 2);
console.log(map);
*/