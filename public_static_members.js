/**
 * 
 */

function Factory(){
	
}

Factory.getType= function () {
	return "Object Factory";
}

Factory.versionId="F2.0";

Factory.prototype.test = function(){
	console.log(this.versionId);
	console.log(Factory.versionId);
	console.log(Factory.getType());
}

var factory = new Factory();
factory.test();