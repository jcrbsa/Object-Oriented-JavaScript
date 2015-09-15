/**
 * 
 */


/*function Customer(name){
	
	var that= this;
	var risk = 0;
	this.name = name;
	this.type = findType();
	//private method
	function findType(){
		console.log(that.name)
		console.log(risk);
		return "GOLD";
		
	}
	
}*/

function Customer(name){
	
	var that= this;
	var risk = 0;
	this.name = name;
	//private method	
	var findType = function findType(){
		console.log(that.name)
		console.log(risk);
		return "GOLD";
		
	};
	this.type = findType();

	
	
}



var customer = new Customer("ABD Customer");

console.log(customer.type);
console.log(customer.risk);