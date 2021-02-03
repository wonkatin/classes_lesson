# Classes
### Goals
- Define and use our own classes
- Identify the benefits of using classes over creating objects the old-fashioned way
- Create a class that `extends` another class
- Learn how to use `instanceof`

### Recap
- Making objects with a literal like this:
```
const myFridge = {
  color: 'white',
  weight: 800,
  doorIsOpen: false,
  openDoor() {
    this.doorIsOpen = true
  },
  closeDoor() {
    this.doorIsOpen = false
  }
}
```
- What is the behavior of myFridge? The state? The props?
- How should we open and close the fridge door?
- What's wrong with running this line: `myFridge.doorIsOpen = true`?

### Making virtual friends
Let's make some people:
```
const pete = {
  name: 'Pete Macaluso',
  age: 31,
  species: 'Homo Sapiens',
  firstName() {
    this.name.split(' ')[0]
  }
  haveBirthday() {
    this.age ++;
    console.log('woohoo! free cake! party time!')
  },
  greet(otherPerson) {
    console.log(`Hi ${other.firstName()}! My name's ${this.firstName()}`)
  }
}
```
On your own, make a person like this for yourself, plus 3 more for your friends. Try out all their methods and make sure they work the way we want.

### Making friends is a lot of work
You hopefully have a screen full of people! Some parts of our code are unique to each person object, and some parts are repetitive (and repetitive code is always an opportunity to improve). Identify the parts that are repetitive and the parts that are not.

Javascript gives us a tool called `class` that improves on our friend-making process:
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.species = 'Homo Sapiens';
  }

  firstName() {
    this.name.split(' ')[0]
  }
  haveBirthday() {
    this.age ++;
    console.log('woohoo! free cake! party time!')
  },
  greet(otherPerson) {
    console.log(`Hi ${other.firstName()}! My name's ${this.firstName()}`)
  }
}
```
Note: we want to start any class name (ie Person) with a capital letter. This helps us keep them separate from other variables mentally.

The class we defined is not a person object itself. Think of it as a template (or a cookie cutter, or a factory) for making person objects. To use our template, we need:
```
const pete = new Person('Pete Macaluso', 31)
```
How is this similar to the person creation we've been doing up til now? How is it different?

Revamp your own person object creation to use a class.

Vocab update: now that we are using a class alongside the `new` keyword, we say that all our person objects are _instances_ of the Person class. And every time we make a person object, we are _instantiating_ a person object.

Note that we still have the big benefit of making objects the old-fashioned way (we can specify individualized name and age values), but we also never have to repeat the parts that are the same for every person.

### `extends` keyword
Before we knew about classes, I might have made a person object like this:
```
const todd = {
  name: 'Todd FakeLastName',
  age: 37,
  species: 'Homo Sapiens',
  graduatedFrom: 'Yale Law',
  firstName() {
    this.name.split(' ')[0]
  }
  haveBirthday() {
    this.age ++;
    console.log('woohoo! free cake! party time!')
  },
  greet(otherPerson) {
    console.log(`Hi ${other.firstName()}! My name's ${this.firstName()}, OH BY THE WAY DID I MENTION I WENT TO ${this.graduatedFrom}`)
  }
}
```
Todd is a lot like other people, but is also different in one key way: he's a lawyer. What about this person object is the same as our other person objects? What's different?

If we wanted to make Todd using our Person class, what would be missing?

`extends` is the tool we want here. It works like this: when we have 
```
class ChildClass extends ParentClass {
  // additional behaviors here
}
```
the ChildClass will do everything the ParentClass does, plus any new things that we put inside the class body. We can give the ChildClass new methods that the ParentClass doesn't have. We can also overwrite methods from the ParentClass completely.

Let's make a class called Lawyer that behaves just like Person, except it has a new `greet` method:
```
class Lawyer extends Person {
  greet(otherPeson) {
    console.log(`Hi ${other.firstName()}! My name's ${this.firstName()}, OH BY THE WAY DID I MENTION I WENT TO ${this.graduatedFrom}`)
  }
}
```
Now we can create Todd using:
```
const todd = new Lawyer('Todd FakeLastName', 37)
```
What happens when we have Todd greet one of our other people?

### Using `constructor` in an extended class
We gave the Lawyer class a new `greet` method, but we still need to augment the `constructor` to take in the new parameter "graduatedFrom".
```
class Lawyer extends Person {
  constructor(name, age, graduatedFrom) {
    this.name = name;
    this.age = age;
    this.graduatedFrom = graduatedFrom;
  }

  // rest of the Lawyer class is unchanged
}
```
What happens when we go to create Todd now?

We have run into an important "gotcha" in javascript. The magic word to defeat it is:
```
class Lawyer extends Person {
  constructor(name, age, graduatedFrom) {
    super(name, age)
    this.graduatedFrom = graduatedFrom;
  }

  // rest of the Lawyer class is unchanged
}
```
Here's what's going on:
1. In the constructor of an extended class, you have to invoke `super` before you can reference this. That's just the way it is.
1. `super` always refers to the method with the same name (`constructor` in this case) from the parent class. So when we call `super(name, age)`, we are invoking the `constructor` from Person, and passing it name & age.
1. You can use `super` in any method, not just `constructor`! It will always refer to the method with the same name from the parent class.

### What class are you?
Often, we will be presented with an object, and we want to learn what class it is. Here are two tools to ask any object its class:
```
myMysteryObject.constructor
myMysteryObject.constructor.name
```
Try these and see what they return for our Person instance and our Lawyer instance.

### Are lawyers people?
One last tool:
```
todd instanceof Lawyer
```
`instanceof` tells us whether a given object has a particular class anywhere in its lineage. It is similar to `typeof`, but instead of asking about an object's data type, we are asking about which class it is inherited from. 

Use `instanceof` to ask:
- is todd a Person?
- is pete a Person?
- is pete a Lawyer?

If you want to go to a dark place regarding `instanceof`: [https://stackoverflow.com/questions/203739/why-does-instanceof-return-false-for-some-literals](https://stackoverflow.com/questions/203739/why-does-instanceof-return-false-for-some-literals)
