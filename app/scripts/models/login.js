var Backbone = require('backbone');

var Login = Backbone.Model.extend({
});


var LoginCollection = Backbone.Collection.extend({
  model: Login
});


module.exports = {
  Login,
  LoginCollection
};
