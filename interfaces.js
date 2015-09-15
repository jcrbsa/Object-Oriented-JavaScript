/**
 * 
 */


var Interface = function(name, methods){
	this.name = name;
	this.methods = methods.slice(0);
	
};

Interface.checkImplements = function(obj, interfaceObj){
	for(var i = 0; i< interfaceObj.methods.length; i++){
		var method = interfaceObj.methods[i];
		if(!obj[method] || typeof obj[method] !== "function")
			throw new Error("Interface not implemented! Interface: " + interfaceObj.name + "Method: " + method);		
	}
};

var iMaterial = new Interface("IMaterial", ["getName", "getPrice"]);

function Product(name, price, type){
	Interface.checkImplements(this,iMaterial);
	this.name = name;
	this.price = price;
	this.type = type;
}

Product.prototype.getName = function(){
	return this.name;
};

Product.prototype.getPrice = function(){
	return this.price;
};

var firstCar = new Product ("Super Car X11", 20000, "Car");
console.log(firstCar.getName());
delete Product.prototype.getPrice;
var secondCar = new Product("SuperCarX12", 3000, "Car");


