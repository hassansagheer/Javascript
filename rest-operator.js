//rest operator 
let sum=(...args)=>{ //rest operator
    let summ=0;
    for (let arg of args)
    {
         summ += ag;
    }
    return summ;
  }
  
  console.log(sum(23, 45, 78, 345,21))

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

/*
//Array Destucturing using rest operator
let arr=[3, 5, 67, 23, 546,2, 5, 8, 9, 324];
let [a, b, ...rst]=arr;
console.log(a, b, rst);
*/

/*
//Object Destructuring using rest operator
let person ={
  name:"rtyui",
  age:14,
};
let user={...person};
console.log('person', user);
console.log('user', user);

const {name:myname , age}= person;
console.log(myname);
*/