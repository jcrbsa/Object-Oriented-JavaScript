/**
 * 
 */

function BaseException() {

}
BaseException.prototype = new Error();
BaseException.prototype.constructor = BaseException;

BaseException.prototype.toString = function() {
	return this.name + ": " + this.messagem;

};

function NegativeNumberException(value) {
	this.name = "NegativeNumberException";
	this.message = "Negative number! Value: " + value;
}

NegativeNumberException.prototype = new BaseException();
NegativeNumberException.prototype.constructor = NegativeNumberException;

function EmptyInputException() {

	this.name = "EmptyInputException";
	this.message = "Empty Input!";
}

EmptyInputException.prototype = new BaseException();
EmptyInputException.prototype.constructor = EmptyInputException;

var InputValidator = (function() {
	var InputValidator = {};
	InputValidator.validate = function(data) {
		var validations = [ validateNotNegative, validadteNotEmpty ];

		for (var i = 0; i < validations.length; i++) {
			try {

			} catch (e) {
				if (e instanceof NegativeNumberException) {
					throw e;
				} else if (e instanceof EmptyInputException) {
					data = "0";
				}
			}
		}
	};
	return InputValidator;

	function validateNotNegative(data) {
		if (data < 0)
			throw new NegativeNumberException(data)
	}
	function validateNotEmpty(data) {
		if (data == "" || data.trim() == "")
			throw new EmptyInputException();
	}

})();

try {
	InputValidator.validate("-1");
} catch (e) {
	console.log(e.toString());
	console.log("Validation is done.");
	//ReferenceError: validateNotNegative is not defined
	//var validations = [validateNotNegative, validateNotEmpty];

}
