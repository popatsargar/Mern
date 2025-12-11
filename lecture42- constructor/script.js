const user1 = {
    name: "sp",
    age:23,
    city:"pune",
    printDetails: function(){
        console.log(`${this.name} is ${this.age}years old and living in ${this.city}`);
    },
};
const user2= {
    name: "sp",
    age:23,
    city:"pune",
    printDetails: function(){
        console.log(`${this.name} is ${this.age}years old and living in ${this.city}`);
    },
};
const user3 = {
    name: "sp",
    age:23,
    city:"pune",
    printDetails: function(){
        console.log(`${this.name} is ${this.age}years old and living in ${this.city}`);
    },
};

console.log(user1.printDetails());


//constructor 

//here we are creating users again and again , this is so lengthy, and here we might do any mistake
// somewhere so to avoid this we will make one blueprint(constructor), it will make our wokrk more easy,
function User (name, age, city){
    this.name= name;
    this.age=age;
    this.city=city;
    this.printDetails = function(){
        console.log(`${this.name} is ${this.age}years old and living in ${this.city}`);
    };
}
const user4 = new User("ram",23,"nashik");
console.log(user4.printDetails());

/* A constructor is a blueprint to create objects easily.

obj all have same type of properties (name, age, city, etc.)

Instead of writing object structure again and again, we write it once.*/



// creating an array of objects using constructor

const name = ["raj","ravi","ram","rahul"]
const age = [23,22,24,25]
const city= ["pune","nagar","nashik","mumbai"]

const objArray = []
function Student(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

for (let i = 0; i < name.length; i++) {
    objArray.push(new Student(name[i], age[i], city[i]));
}
console.log(objArray);



function Product (name, price, qty){
    this.name=name;
    this.price=price;
    this.qty=qty;
    this.total=price*qty;
}

const product1 = new Product("bottle",20,10);
const product2 = new Product("pen",30,20);
console.log({product1,product2});


//prototype
const boolean = true;
const string = "true";
const number = 12345;
const arr = [1,2,3,4];

console.log(boolean.__proto__);
console.log(string.__proto__);
console.log(number.__proto__);
console.log(arr.__proto__);

function Students(name, age, grade ){
    this.name=name;
    this.age=age;
    this.grade=grade;

}
Students.prototype.greetMe = function(name){
console.log("hi", this.name);
}
const students1 = new Students ("rahul",23,10);
//console.log(students1);
students1.greetMe(students1.name);