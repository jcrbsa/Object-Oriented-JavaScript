/**
 * 
 */

function Outter(){
	return new Inner();
	
	//private inner
	function Inner(){
		this.sayHello = function(){
			console.log("Hello");
		}
	}
	
	
}

(new Outter()).sayHello();
