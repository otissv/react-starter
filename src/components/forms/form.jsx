'use strict';

var React = require('react');

var Form = React.createClass({
  render: function() {
    var csrfToken;
    if (this.props.csrf) {
      csrfToken = <input type='hidden' id='_csrf' value={this.props.csrf} />;
    }
    return (
      <form action={this.props.action} method={this.props.method} role='form' csrf={this.props.csrf}>
        {csrfToken}
        {this.props.children}
      </form>
    );
  }
});

module.exports = Form;
