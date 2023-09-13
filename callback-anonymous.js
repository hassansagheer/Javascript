let arr = [1,2,8,9];
function forEachCust(arr,cb){
  for(let i=0;i<arr.length;i++){
    cb(arr[i]);
  }
}
forEachCust(arr,function(el){
  console.log(el+'!');
});

let arr1 = [1,2,3];
arr1.forEach(function(el,index){
  console.log(el,index);
});

let arr2 = arr1.map(function(el){
  return el*2;
});
console.log(arr2);