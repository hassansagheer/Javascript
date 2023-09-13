//call
let person1={
    firstName:"hammad",
    lastName: "ali"
};
let person2={
    firstName:"haseeb",
    lastName: "umer"
};
function greeting(){
  console.log(`welcome ${this.firstName} ${this.lastName}`);
};
let obj1=greeting.call(person1);
let obj2=greeting.call(person2);  