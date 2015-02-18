'use strict';

var React = require('react');
var Form = require('./form.jsx');
var Input = require('react-bootstrap').Input;



var ContactForm = React.createClass({
  render: function() {
    return (
      <Form action='/contact' method='post' csrfToken={this.props.csrf}>
        <Input type='text' label='Username' defaultValue='Enter username' />
        <Input type='email' label='Email Address' defaultValue='email@domain.com' />
        <Input type='textarea' label='Message' defaultValue='Enter message' />
        <Input type='submit' value='Submit button' />
      </Form>
    );
  }

});

module.exports = ContactForm;
