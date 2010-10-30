(function() {

var O = function() {
    O.superclass.constructor.apply(this, arguments);
};

O.NAME = "Test";

Base.extend( O, Base.Interface);

O.prototype._argumentsToString = function( conf ) {
	if(!conf) {
		cont = {};
	}
	return conf;
};

O.prototype.testFunction = function(conf) {
	return this._argumentsToString(conf);
};

//export API
exports.API = O;

})();