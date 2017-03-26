var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');

var Messages = require('../components/messages.jsx').Messages;
var BaseLayout = require('./layouts/base.jsx').BaseLayout;


var apiUrl = 'https://tiny-parse-server.herokuapp.com';


class AppContainer extends React.Component {

  handleSignUpButton(e){
    e.preventDefault();

    var user = {
      username: $('#signup-email').val(),
      password: $('#signup-password').val()
    }
    $.post(apiUrl + '/users', user).then(function(data){
      console.log(data);
      Backbone.history.navigate('#messages', {trigger: true})
    });
  }

  handleLoginButton(e){
    e.preventDefault();
    var self = this;

    var user = {
      username: $('#email-login').val(),
      password: $('#password-login').val()
    }

    var url = apiUrl + '/login?username=' +
      encodeURIComponent(user.username) + '&' +
      'password=' + encodeURIComponent(user.password)

    $.get(url).then(function(data){
      localStorage.setItem('userToken', data.sessionToken);
      Backbone.history.navigate('#messages', {trigger: true});
    });
  }

  render(){
    //
    return (

        <div className="container">
          <div className="row">
           <div className="col-md-12">
            <div className="col-md-6">

                 <h2>Please Login</h2>

                 <Login handleLoginButton={this.handleLoginButton.bind(this)}/>

               </div>

               <div className="col-md-6">

                 <h2>No Account? Sign Up!</h2>

                 <SignUp handleSignUpButton={this.handleSignUpButton.bind(this)} />

             </div>
           </div>
         </div>
       </div>
    )
  }
};

class Login extends React.Component {

  render(){
    return (
     <form id="login">
       <div className="form-group">
         <input className="form-control" name="email" id="email-login" type="email" placeholder="Email" />
       </div>

       <div className="form-group">
         <input className="form-control" name="password" id="password-login" type="password" placeholder="Enter Password" />
       </div>

       <input className="btn btn-primary form-control" type="submit" value="Login"  onClick={this.props.handleLoginButton}  />
     </form>
    )
  }
};

class SignUp extends React.Component {

  render(){
    return(
      <form id="signup">
        <div className="form-group">
          <input id="signup-email" className="form-control" type="email" name="email" placeholder="Email Address" />
        </div>

        <div className="form-group">
          <input id="signup-password" className="form-control" type="password" name="password" placeholder="Enter New Password" />
        </div>

        <input className="btn btn-primary form-control" type="submit" name="" value="Sign Up!" onClick={this.props.handleSignUpButton} />
      </form>
    )
  }

};

module.exports = {
  AppContainer
}
