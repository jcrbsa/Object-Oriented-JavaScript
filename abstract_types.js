/**
 * 
 */

(function(){
	
	var abstractCreateLock = false;
	function BaseForm(){
		if(abstractCreateLock)
			throw new Error("Can't instantiate BaseForm");
	}
	
	BaseForm.prototype = {};
	BaseForm.prototype.post = function(){
		throw new Error("Not implementd!");
	}
	
	function GridForm(){
		
	}
	
	GridForm.prototype = new BaseForm();
	abstractCreateLock = true;
	GridForm.prototype.post = function(){
		return "Grid is posted";
	}
	
	window.BaseForm = BaseForm;
	window.GridForm = GridForm;	
})();

var myGrid = new GridForm();
console.log(myGrid.post());
var myForm = new BaseForm();