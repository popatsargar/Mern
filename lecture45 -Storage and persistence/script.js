let key = "name";
let value = "value";
let value2 = "sp";
localStorage.setItem(key,value);
localStorage.setItem(key,value2);//update the latest data

localStorage.setItem("key1","value1");
localStorage.setItem("key2","value2");
localStorage.setItem("key3","value3");
localStorage.setItem("key4","value4");

// localStorage.removeItem("key");//delete data
console.log(localStorage.getItem(key));//read data
console.log(localStorage.length);//gives length
console.log(localStorage.key(2));//returns index of length



// localStorage.clear();//also deletes all data