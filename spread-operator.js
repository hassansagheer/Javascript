//rest and spread operator 
let sum=(...args)=>{ //rest operator
    let summ=0;
     for (let ag of args)
     {
         summ += ag;
     }
    return summ;
  }
  let arr=[1,2, 3, 4, 5]
  console.log(sum(...arr))//spread  operator

/*
//example of spread operator
const arr1=[1, 2, 3];
const arr2=[4, 5, 6];
const arr3=[7, 8, 9];

let concatarray=[...arr1, ...arr2, ...arr3] //spread operator

console.log(concatarray)
*/