/**
 * 
 */

function Parent(){
	var parentPrivate = "parent private data";
	var that = this;
	this.parentMethodForPrivate = function(){
		return parentPrivate;
	};
	console.log("parent");
	
}

Parent.prototype = {
		parentData: "parent data",
		parentMethod: function(arg){
			return "parent method";
		},
		overrideMethod: function(arg){
			return arg + " overriden parent method";
		}
}

function Child(){
		Parent.call(this);
		console.log(this.parentData);
		var that = this;
		this.parentPrivate = function(){
			return that.parentMethodForPrivate();
		};
		console.log("child");
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

Child.prototype.extensionMethod = function(){
	return "child's " +  this.parentData;
}

Child.prototype.overrideMethod = function(){
	return "Invoking from child" + Parent.prototype.overrideMethod.call(this, " test");
	
};

var child = new Child();
console.log(child.extensionMethod());
console.log(child.parentData);
console.log(child.parentMethod());
console.log(child.overrideMethod());
console.log(child.parentPrivate());
console.log(child instanceof Parent);
console.log(child instanceof Child);









