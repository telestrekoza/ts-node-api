(function() {

var O = function() {
    O.superclass.constructor.apply(this, arguments);
};

O.NAME = "Users";

Base.extend( O, Base.Interface);

O.prototype.getUserInfo = function(args) {
	//TODO: fake user, use User Module to get User Info
	var userId = parseInt(args.userId);
	return {id: userId};
};

O.prototype.getCurrentUserInfo = function() {
    return ( this._auth && this._auth.owner ) ? this._auth.owner : null;
};

//export API
exports.API = O;

})();