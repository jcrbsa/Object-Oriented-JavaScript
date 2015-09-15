/**
 * 
 */

function Customer(){
	this.shipOrder = function(shipAmount){
		return shipAmount;
	}
	
	Customer.prototype.addOrder = function(arguments){
		var totalOrder = 0;
		for(var i =0 ; i< arguments.length; i++){
			totalOrder += argumens[i];
		}
		
		return totalOrder;
	}
	
};

var customer = new Customer();
customer.findType = function(){
	return "NORMAL";
	
};

console.log(customer.addOrder(25,75));
console.log(customer.shipOrder(50));
console.log(customer.findType());
