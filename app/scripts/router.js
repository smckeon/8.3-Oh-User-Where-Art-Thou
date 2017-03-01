var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AppContainer = require('../scripts/components/login.jsx').AppContainer;
var Messages = require('../scripts/components/messages.jsx').Messages;

var AppRouter = Backbone.Router.extend({
  routes: {
    '':'index',
    'messages':'messages'
  },

  index(){
    ReactDOM.render(
      React.createElement(AppContainer),
      document.getElementById('app')
    )
  },

  messages(){
    ReactDOM.render(
      React.createElement(Messages),
      document.getElementById('app')
    )
  }

});

var appRouter = new AppRouter();

module.exports = {
  appRouter
}
