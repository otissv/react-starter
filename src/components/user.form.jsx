'use strict';

var React = require('react');
var Form = require('./form.jsx');
var Input = require('react-bootstrap').Input;


var Signin = React.createClass({
  render: function() {
    console.log(this.props.data);
    return (
      <Form action='/signin' method='post' csrfToken={this.props.csrf}>
        <Input type='text' label='Username' defaultValue='Enter username' />
        <Input type='email' label='Email Address' defaultValue='email@domain.com' />
        <Input type='submit' value="Submit button" />
      </Form>
    );
  }
});

module.exports = Signin;
