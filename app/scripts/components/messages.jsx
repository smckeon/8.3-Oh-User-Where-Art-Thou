var React = require('react');


class Messages extends React.Component {

  render(){
    return (
      <div className="col-md-12">
        <h1>Oh User!</h1>

        <form id="message">
          <div className="form-group">
            <input className="form-control" name="message" id="user-message" type="message" placeholder="Message" />
          </div>

          <input className="btn btn-danger form-control" type="submit" value="Say Something" />
        </form>
      </div>
    )
  }
};

module.exports = {
  Messages
}
