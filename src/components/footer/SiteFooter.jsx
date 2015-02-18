'use strict';
var React = require('react');

var isNode = require('detect-node');
if (!isNode) require('!style!css!sass!./footer.scss');

var ReactBootstrap = require('react-bootstrap');
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var Navbar = ReactBootstrap.Navbar;
var Grid = ReactBootstrap.Grid;

var Footer = React.createClass({
  render: function(){
    return (
      <footer className='footer'>
        <Navbar inverse role='footer'>
          {this.props.children}
        </Navbar>
      </footer>
    );
  }
});

module.exports = Footer;
