var Backbone = require('backbone');

var User = Backbone.Model.extend({
});


var MessageCollection = Backbone.Collection.extend({
  model: User
});

module.exports = {
  User,
  MessageCollection
};
