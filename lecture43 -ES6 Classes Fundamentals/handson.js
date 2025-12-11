class Person {
  constructor(name, age) {
    this.name = name; // property
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

const p1 = new Person("Amit", 22);
p1.greet();

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const box = new Rectangle(10, 5);
console.log("Area:", box.area());
//Getter & Setter

class Book {
  constructor(title) {
    this._title = title; // internal property
  }

  get title() {
    return this._title; // read-only
  }

  set title(newTitle) {
    this._title = newTitle; // change title
  }
}

const b1 = new Book("Ramayana");
console.log(b1.title);
b1.title = "Mahabharata";
console.log(b1.title);

class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} added. New balance = ${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Not enough money!");
    } else {
      this.balance -= amount;
      console.log(`${amount} removed. New balance = ${this.balance}`);
    }
  }
}

const acc = new Account("Ravi");
acc.deposit(100);
acc.withdraw(40);
acc.withdraw(80);

class User {
  constructor(name) {
    this.name = name;
  }

  static guest() {
    return new User("Guest");
  }
}

const g = User.guest();
console.log(g);

class Secret {
  #code = "XYZ123"; // private data

  revealCode() {
    return this.#code;
  }
}

const s = new Secret();
console.log(s.revealCode()); // private access allowed through method

class Locker {
  #code = 9999; // private value

  showCode() {
    return this.#code;
  }
}
const l1 = new Locker();
console.log(l1.showCode()); // works
