/**
 * 
 */

function EventManager() {

}

var listeners = {};

EventManager.fireEvent = function(eventName, eventProperties) {
	if (!listeners[eventName])
		return;
	for (var i = 0; i < listeners[eventName].length; i++) {
		listeners[eventName][i](eventProperties);
	}// endFor

};// endFunction

EventManager.addListener = function(eventName, callback) {
	if (!listeners[eventName])
		listeners[eventName] = [];
	listeners[eventName].push(callback);
}// endFunction

EventManager.removeListener = function(eventName, callback) {
	if (!listeners[eventName])
		return;
	for (var i = 0; i < listeners[eventName].length; i++) {
		if (listeners[eventName][i] == callback) {
			delete listeners[eventName][i];
			return;
		}// endIF
	}// endFor
};// endFunction

EventManager.addListener("popupSelected", function(props){
	console.log("Invoked popupSelected event:" + props.itemID);
});

EventManager.removeListener("popupSelected", function(props){
	//console.log("Invoked popupSelected event:" + props.itemID);
});


EventManager.fireEvent("popupSelected", {itemID:"180"});

