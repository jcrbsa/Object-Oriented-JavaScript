/**
 * 
 */

function Customer(name,orderAmount){
	this.name = name;
	this.orderAmount = orderAmount;
	
}

Customer.prototype.type = "NORMAL";

Customer.prototype.report = function(){
	console.log(this.name);
	console.log(this.orderAmount);
	console.log(this.type);
	console.log(this.country);
}

Customer.prototype.promoteType = function(){
	this.type = "SILVER";
}

var customer1 = new Customer("Customer 1", 10);
//public field
customer1.country = "BRAZIl";
customer1.report(); 

var customer2 = new Customer("Customer 2", 20);
customer2.promoteType();
console.log(customer2.type);
console.log(customer1.type);



	
