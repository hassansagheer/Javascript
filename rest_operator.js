function sum(...args){
    let sum = 0;
    for (let arg of args) sum += arg;
        console.log(sum);
}

let x = sum(2,5,6);

  /*
  //example of rest operator
  let person ={
    name:'john',
    age:30,
    country:'USA'
}


let personclone={...person}; //rest operator
personclone.name='Jane';
console.log(person);
console.log(personclone);
*/