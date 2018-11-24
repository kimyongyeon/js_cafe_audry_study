// function Person(name) {
//   let age = 20; // this is private
//   this.name = name; // this is public
//   this.greet = function() {
//     // here we can access both name and age
//     console.log(`name: ${this.name}, age: ${age}`);
//   };
// }

// let joe = new Person("Joe");
// joe.greet();

// http://chanlee.github.io/2016/08/15/hello-es6-part-3/
let Person = (function() {
  let privateProps = new WeakMap();
  class Person {
    constructor(name) {
      this.name = name; // this is public
      privateProps.set(this, { age: 20 }); // this is private
    }
    greet() {
      // Here we can access both name and age
      console.log(`name: ${this.name}, age: ${privateProps.get(this).age}`);
    }
  }
  return Person;
})();
let joe = new Person("Joe");
joe.greet();
