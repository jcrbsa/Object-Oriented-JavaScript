/**
 * 
 */

function MyType(){
	if(!(this instanceof MyType)){
		throw new Error("Constructor can't be called as a fuction");
	}
	
}

var myInstance = new MyType();
MyType();