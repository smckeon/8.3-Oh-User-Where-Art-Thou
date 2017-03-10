var React = require('react');
// var BaseLayout = require('./layouts/base.jsx');

var models = require('../models/messages');

class MessagesContainer extends React.Component{
  constructor(props){
    super(props);
    var self = this;
    this.state = {
      messages: new models.MessageCollection()
    }

    this.state.messages.fetch().done(function(data){
      console.log('data', data);
      self.setState({messages: data});
    })

    this.handleSendMessage = this.handleSendMessage.bind(this);

  }
  handleSendMessage(e){
    e.preventDefault;
  }

  render(){
    return(
      <div className="col-md-push-3 col-md-6">
        <h1>Oh User!</h1>

        <form onSubmit={this.handleSendMessage} id="message">
          <div className="form-group">
            { this.state.messages.length != 0 ? <Messages messages={this.state.messages} /> : null }
            <input className="form-control" name="message" id="user-message" type="message" placeholder="Message" />
          </div>

          <input className="btn btn-danger form-control" type="submit" value="Say Something" />
        </form>
      </div>
    )
  }

};


class Messages extends React.Component {

  render(){

    let { messages } = this.props;

    messages = this.props.messages.results.map(function(message, index){
      console.log(message);
      return (
        <li key={message.cid}>{message.message}</li>
      )
    });

    return (
      <div className="chatwindow">
        <h5>Messages</h5>
          <ul>
            {messages}
          </ul>
      </div>
    );
  }
};

module.exports = {
  MessagesContainer,
  Messages
};
