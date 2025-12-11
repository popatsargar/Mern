 
const user1 = {
  name: "Kailas",
  age: 23,
  city: "Pune",
  printDetails: function () {
    console.log(`${this.name} is living in ${this.city}`);
  },
};

const user2 = {
  name: "Pratap",
  age: 20,
  city: "Pune",
  printDetails: function () {
    console.log(`${this.name} is living in ${this.city}`);
  },
};

const user3 = {
  name: "Devanshu",
  age: 21,
  city: "Mumbai",
  printDetails: function () {
    console.log(`${this.name} is living in ${this.city}`);
  },
};

 
user1.printDetails();
console.log(user1.name);
 
function User(name, age, city) {
  console.log(this); // 'this' refers to newly created empty object

  this.name = name;
  this.age = age;
  this.city = city;

  // This method will be copied to every object (not memory-efficient)
  this.printDetails = function () {
    console.log(`${this.name} is living in ${this.city}`);
  };
}
 
const user4 = new User("Neha", 20, "Nashik");
const user5 = new User("Ajay", 25, "Nashik");

console.log(user4.name);
user4.printDetails();

 
console.log(user1.name.__proto__); // shows String prototype

 
 function normalFunction() {
  console.log(this); // In non-strict mode → global object
}
normalFunction();
 
const names = ["Raj", "Shivam", "Pratik", "Priya"];
const age = [12, 32, 10, 13];
const city = ["Mumbai", "Delhi", "Pune", "Bangalore"];

const objArray = [];

for (let i = 0; i < names.length; i++) {
  objArray.push(new User(names[i], age[i], city[i]));
}

console.log({ objArray });
 
function Product(name, price, qty) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.total = price * qty;  
}

const product1 = new Product("Bottle", 10, 50);
const product2 = new Product("Bowl", 20, 10);
console.log({ product1, product2 });
 
const boolean = true;
const string = "true";
const number = 2322;
const arr = [4, 44, 4];

console.log(boolean.__proto__);
console.log(string.__proto__);
console.log(number.__proto__);
console.log(arr.__proto__);
 
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

// Adding a METHOD to prototype (memory-efficient)
Student.prototype.greetMe = function () {
  console.log("Hi " + this.name);
};

const student1 = new Student("Rajesh", 20, 10);
student1.greetMe();
 
function Test() {
  this.value = 10;
}

Test.prototype.value = 100;

const test = new Test();
console.log(test.value); // output: 10 → instance property

delete test.value; // remove own property
console.log(test.value); // output: 100 → from prototype
 
function TaskQueue() {
  this.tasks = [];
}

TaskQueue.prototype.add = function (taskName) {
  this.tasks.push(taskName);
};

TaskQueue.prototype.remove = function () {
  this.tasks.shift();
};

TaskQueue.prototype.display = function () {
  console.log(this.tasks.join(", "));
};

const task1 = new TaskQueue();
task1.add("Task1");
task1.add("Task2");
task1.remove();
task1.add("Task3");
task1.add("Task4");
task1.display(); // Task2, Task3, Task4
task1.remove();
task1.display(); // Task3, Task4
 
function Animal(name, sound) {
  this.name = name; // animal name
  this.sound = sound; // the sound it makes
}

Animal.prototype.makeSound = function () {
  console.log(`${this.name} says ${this.sound}`);
};

const dog = new Animal("Dog", "Woof");
dog.makeSound();
 
function Mobile(brand, model) {
  this.brand = brand;
  this.model = model;
}

Mobile.prototype.showInfo = function () {
  console.log(`Mobile: ${this.brand} ${this.model}`);
};

const phone1 = new Mobile("Samsung", "A52");
phone1.showInfo();
 
function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.add = function () {
  console.log(`Sum = ${this.num1 + this.num2}`);
};

Calculator.prototype.multiply = function () {
  console.log(`Product = ${this.num1 * this.num2}`);
};

const calc = new Calculator(5, 3);
calc.add();
calc.multiply();
 
function Vehicle(type, brand, speed) {
  this.type = type;
  this.brand = brand;
  this.speed = speed;
}

// Prototype Method
Vehicle.prototype.drive = function () {
  console.log(`${this.brand} ${this.type} is running at ${this.speed} km/h`);
};

const car = new Vehicle("Car", "Tata", 80);
const bike = new Vehicle("Bike", "Royal Enfield", 60);
car.drive();
bike.drive();

 
function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`${this.owner} deposited ${amount}. New balance: ${this.balance}`);
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log("Insufficient funds");
    return;
  }
  this.balance -= amount;
  console.log(`${this.owner} withdrew ${amount}. Remaining balance: ${this.balance}`);
};

const acc1 = new BankAccount("Rohan", 5000);
acc1.deposit(1000);
acc1.withdraw(2000);
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.showInfo = function () {
  console.log(`Book: ${this.title} by ${this.author}`);
};

const b1 = new Book("Atomic Habits", "James Clear");
const b2 = new Book("Ikigai", "Héctor García");
b1.showInfo();
b2.showInfo();
 
