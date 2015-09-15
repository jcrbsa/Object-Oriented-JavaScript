/**
 * 
 */

//or var dog = {};
// or var dog = new MyDogType();
var dog = new Object();
dog.name = "Scooby";
dog.owner = {};
dog.owner.name = "Mike";
dog.bark = function(){
	return "Woof";
};

console.log(dog.name);
console.log(dog.owner.name);
console.log(dog.bark());