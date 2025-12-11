//  function Car(name, model, speed) {
//     this.name = name;
//     this.model = model;
//     this.speed = 0;
// }
// Car.prototype.isRunning=function(){
//     this.speed>0?console.log("running"):console.log("not running");

    
// };
// Car.prototype.changeSpeed=function(newSpeed){
//     this.speed=newSpeed;
// };

// const car1 = new Car("Toyota", "Fortuner");
// car1.isRunning();
// car1.changeSpeed(50);
// car1.isRunning();
 
// Car.prototype.printCarDetails = function(){
//     console.log(this.name,this.model,this.speed);
    
// };

// class is used to group the constructor and prototype


class Car {
    constructor(name, model){
        this.name = name;
        this.model = model;
        this.speed = 0;
    }
    changeSpeed(newSpeed){
        this.speed=newSpeed;

    }
    isRunning(){
        this.speed>0?console.log("running"):console.log("not running");

    }
}
const creta = new Car("Creta","CR-1223");
console.log({creta});//calling class
//classes are not hoisted we have to first create and then call it
// classes are not same as function



//attendance calculator using class
class Attendance {
    constructor (name, grade){
        this.name=name;
        this.grade=grade;
        this.present=0;
        this.totalDays=0;

    }
    markPresent(){
        this.present++;
        this.totalDays++;
        
        
    }
    markAbsent(){
        this.totalDays++;
    }
    printAttendance (){
        const {name, present,totalDays}=this;//destructuring
        console.log("attendence percentage of "+name+" is "+((present / totalDays)*100).toFixed(2));
        
    }
}

const att = new Attendance ("sid",10);
 att.markPresent()
 att.markPresent()
 att.markPresent()
 att.markPresent()
 att.markAbsent()
att.printAttendance()


//getter setters in class

class Student {
    constructor({id,name,dob,grade}){
        this.id=id;
        this.name=name;
        this._dob=dob;
        this.grade=grade;
        this._marks=0;
    }// these are data properties
    get dob(){
        return this._dob;
    }
    set marks(newMarks){
        this._marks=newMarks;
    }//accesor properties
    get marks(){
        return this._marks;
    }
}
//getter-> it use only for read only and for not confusing property
//  we use "_" before property and it have to return type, it cannot changable
//setter-> it can be change and update the value and it does not have 
//  return type, need always one parameter
// those methods are implement to  incapsulation
const mukesh = new Student({
    id:"ST-1234",
    name:"mukesh",
    dob:"24-12-2000",
    grade:10,
});
console.log(mukesh.dob);
mukesh.marks=30;
console.log(mukesh.marks);


//static methods

class User {
    constructor (username, role){
        this.username=username;
        this.role=role;
    }
    static guest (){
        return new User("guest","guest");
    }
}
const guestUser = User.guest();
console.log(guestUser);


//private properties 
class Bank {
    #pin=1234;
    constructor (firstPin){
        this.#pin=firstPin;
        this.balance=0;

    }
    deposit(money){
        this.balance+=money;

    }
    withdraw(userPin,money){
        return userPin===this.#pin && this.balance>=money?(this.balance-=money):null;

    }
    checkBalance(userPin){
        return userPin===this.#pin?this.balance:null;
    }

}

const sbi = new Bank(4321);
sbi.deposit(150);
console.log(sbi.checkBalance(4321));
sbi.withdraw(4321,10);
console.log(sbi["#pin"]);

