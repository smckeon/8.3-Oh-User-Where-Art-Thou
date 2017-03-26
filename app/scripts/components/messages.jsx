var React = require('react');
// var BaseLayout = require('./layouts/base.jsx');

var models = require('../models/messages');

class MessagesContainer extends React.Component{
  constructor(props){
    super(props);
    var self = this;
    this.state = {
      messages: new models.MessageCollection(),
      message: ''
    }
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  componentWillMount() {
    var self = this;
    this.state.messages.fetch().then(function(data){
      self.state.messages.add(data.results)
      self.forceUpdate();
    });
  }
  handleSendMessage(e){
    e.preventDefault();
    this.state.messages.create({
      message: this.state.message,
      user: JSON.parse(localStorage.getItem('user'))
    });
    // set a reset on form enter and local storage to the user id
    this.setState({message: ''});
    this.forceUpdate();
  }

  handleMessage(e){
    this.setState({message: e.target.value})
  }

  render(){
    return(
      <div className="col-md-push-3 col-md-6">
        <h1>Oh User!</h1>

        <form onSubmit={this.handleSendMessage} id="message">
          <div className="form-group">
            { this.state.messages.length != 0 ? <Messages messages={this.state.messages} /> : null }
            <input value={this.state.message.message} onChange={this.handleMessage} className="form-control" name="message" id="user-message" type="message" placeholder="Message" />
          </div>

          <input className="btn btn-primary form-control" type="submit" value="Say Something" />
        </form>
      </div>
    )
  }
};


class Messages extends React.Component {

  render(){
    // var messages = this.props.messages;
    let { messages } = this.props;

    messages = this.props.messages.map(function(message, index){
      // console.log(message);
      return (
        <li key={message.cid}>{message.get('message')}</li>
      )
    });

    return (
      <div className="chatwindow">
        <h4>Messages</h4>
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
