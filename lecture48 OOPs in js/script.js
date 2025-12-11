class Employee {
  constructor(name, id, salary, designation, joiningDate, gender) {
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.designation = designation;
    this.joiningDate = joiningDate;
    this.gender = gender;
  }
  checkIn(time){
    this.checkInTime = time.toLocaleTimeString();
  }
  checkOut(time){
    this.checkOutTime = time.toLocaleTimeString(); 
  }
//   totalTimeToday(){
//     if(!this.checkInTime || !this.checkOutTime){
//         console.log("check in or check out is missing !!");
//         return;
        
//     }
//     return this.checkInTime - this.checkOutTime;
//   }
}

// Example usage:
const emp1 = new Employee(
  "Sagar",
  101,
  50000,
  "Software Engineer",
  "2025-01-10",
  "Male"
);

// console.log(emp1);


// Parent Class
class Animal {
  constructor(name, ownerName, age) {
    this.name = name;
    this.ownerName = ownerName;
    this.age = age;
  }

  details() {
    return `${this.name} is ${this.age} years old and owned by ${this.ownerName}.`;
  }
}
class Dog extends Animal {
  bark() {
    return `${this.name} says: Woof! Woof!`;
  }
}

 
class Cat extends Animal {
  meow() {
    return `${this.name} says: Meowww!`;
  }
}

 
const dog1 = new Dog("Bruno", "Sagar", 3);
const cat1 = new Cat("Misty", "Sagar", 2);

console.log(dog1.details());
console.log(dog1.bark());

console.log(cat1.details());
console.log(cat1.meow());

