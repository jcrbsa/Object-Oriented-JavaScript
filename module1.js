/**
 * 
 *//**
 * 
 */

Module.define("module1.js",["dependent_module1.js","dependent_module2.js"], function(dependteMod1, dependentMod2){
	
	function ExportedType1(){
		var dependentType = new dependentMod1.DepedenteType1();
	}
	function ExpertedType2(){
		
	}
	return{ ExportedType1: ExportedType1,  ExportedType2: ExportedType2};
	
});

Module.use(["module1.js"], function(aModule){
	console.log("Loaded aModule!");
	var AType = aModule.AnExportedType;
	var atype1Instance = new Atype();
})