/*
 *  Main API interface
 */

(function() {

var O = function(auth) {
    this._auth = auth;
    this.version = "1.0.alpha1";
    //var sys = require('util');
    //sys.log("auth:"+sys.inspect(this._auth));
};

O.prototype.getVersion = function() {
    return this.version;
};

O.prototype.getAuth = function() {
    return this._auth;
};

O.prototype.toString = function() {
    return "API::" + this.constructor.NAME + " " + this.version;
};

//export API
exports.Interface = O;

})();