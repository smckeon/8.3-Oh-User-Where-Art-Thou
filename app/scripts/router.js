var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AppContainer = require('../scripts/components/login.jsx').AppContainer;
var MessagesContainer = require('../scripts/components/messages.jsx').MessagesContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '':'index',
    'messages':'messages'
  },

  index(){
    ReactDOM.render(
      React.createElement(AppContainer, {router: this}),
      document.getElementById('app')
    )
  },

  messages(){
    ReactDOM.render(
      React.createElement(MessagesContainer),
      document.getElementById('app')
    )
  }

});

var appRouter = new AppRouter();

module.exports = {
  appRouter
}
