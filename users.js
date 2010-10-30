(function() {

//var API_Interface = Base.loadFile('api_interface.js');
var O = function() {
    O.superclass.constructor.apply(this, arguments);
};

O.NAME = "Users";

Base.extend( O, Base.Interface);

O.prototype.getUserInfo = function(args) {
	var userId = parseInt(args.userId);
	return {id: userId};
};

//export API
exports.API = O;

})();