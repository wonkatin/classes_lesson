console.log("hello!");
// Object Oriented Programming (OOP)
// Three Pillars of Object Oriented Programming:
// Encapsulation - Objects can have State, and Objects can have Behavior
// Inheritance
// Polymorphism
// This object has:
// color, weight and doorIsOpen as state variables (properties)
// It also has openDoor() and closeDoor() as behavior
const myFridge = {
  color: "white",
  weight: 800,
  doorIsOpen: false,
  openDoor() {
    this.doorIsOpen = true;
  },
  closeDoor() {
    this.doorIsOpen = false;
  },
};
// Encapsulation:
// Each object is it's own self-contained unit.
// To interact with an object, you want to use the interfaces that the object
// provides for you
// myFridge.doorIsOpen = true;
myFridge.openDoor();
console.log(myFridge);
// const pete = {
//     name: 'Pete Macaluso',
//     age: 31,
//     species: 'Homo Sapiens',
//     firstName() {
//       this.name.split(' ')[0]
//     },
//     haveBirthday() {
//       this.age ++;
//       console.log('woohoo! free cake! party time!')
//     },
//     greet(otherPerson) {
//       console.log(`Hi ${other.firstName()}! My name's ${this.firstName()}`)
//     }
// }
// Class declaration
// Analogy: Think of classes like a recipe - I can make multiple people based off this recipe
class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age), (this.species = "Homo Sapiens");
  }
  firstName() {
    return this.name.split(" ")[0];
  }
  haveBirthday() {
    this.age++;
    console.log("woohoo! free cake! party time!");
  }
  greet(otherPerson) {
    console.log(
      `Hi ${otherPerson.firstName()}, my name is ${this.firstName()}`
    );
  }
}
const henry = new Person("henry hong", 25);
const pete = new Person("pete masalusa", 80);
const weston = new Person("weston B", 80);
// Lawyer has a IS-A relationship with Person
class Lawyer extends Person {
  constructor(name, age, university) {
    super(name, age); // this points to the Person class definition
    this.graduatedFrom = university;
  }
  // Method Overriding
  greet(otherPerson) {
    // This version of greet() is going to OVERRIDE Person class' version of greet()
    // This greet() will have the lawyer also talk about where he graduated from.
    console.log(`Hi ${otherPerson.firstName()}! My name is ${this.firstName()}. 
        OH BY THE WAY DID I MENTION I WENT TO ${this.graduatedFrom}?!?!?`);
    // super.greet(otherPerson);
  }
}
const lawyerGuy = new Lawyer("Joe Lawyerguy", 50, "Harvard"); // a Lawyer IS-A Person too.
// Every extended class has a Is-A relationship with the super class.
// Every lawyer IS-A person!
//
// Attorney IS A Lawyer... but with even more properties and methods!
// class Attorney extends Lawyer {
//     constructor(name, age, university) {
//         super(name, age, university);
//     }
// }
