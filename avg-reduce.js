const arr = [1, 9, 0, 7, 5];

//average of array elements using reduce
const sum = arr.reduce((acc,item)=>{
  return acc+item;
     
   },0);     //Here 0 is the initial value for accumalator acc
const avg = sum/arr.length;
console.log(avg);