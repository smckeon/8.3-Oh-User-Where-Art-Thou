var React = require('react');

function BaseLayout(props){
  return (
    <div>
      <nav className="navbar navbar-light bg-faded">
        <h1 className="navbar-brand mb-0">8.3 Oh User</h1>
      </nav>
    </div>
  );
}

module.exports = {
  BaseLayout
}
