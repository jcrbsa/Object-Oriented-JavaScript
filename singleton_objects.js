/**
 * 
 */
/*
var Logger = {
		enabled:true,
		log:function(logText){
			if(!this.enabled)
				return;
			if(console && console.log)
				console.log(logText);
			else
				alert(logText);
		}
		
		
		
}
*/
function Logger(){
	
	
}

Logger.enabled = true;
Logger.log = function(logText){
	if(!Logger.enabled)
		return;
	if(console && console.log)
		console.log(logText);
	else
		alert(logText);
}


Logger.log("test");
Logger.enabled = false;
Logger.log("test");