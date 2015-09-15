/**
 * 
 */

function Customer(orderAmount){
	
	var cost = orderAmount /2;
	this.orderAmount = orderAmount;
	var that = this;
	
	//privileged method
	this.calculateProfit = function(){
		return that.orderAmount - cost;
	};
}		
	Customer.prototype.report = function(){
		console.log(this.calculateProfit());
	};
	
	var customer = new Customer(3000);
	customer.report();//1500
