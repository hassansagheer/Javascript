//this keyword
let user1 = {
  name: 'John',
  age: 12,
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
};

let user2 = {
  name: 'Smith',
  age: 12,
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
};

user1.sayHi();
user2.sayHi();