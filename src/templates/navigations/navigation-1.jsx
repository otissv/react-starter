'use strict';

var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var NavItem = require('react-bootstrap').NavItem;
var NavigationBar =require('../../components/navigation/navigationbar.jsx');
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

var ReactRouterBootstrap = require('react-router-bootstrap');
var NavItemLink = ReactRouterBootstrap.NavItemLink;
var MenuItemLink = ReactRouterBootstrap.MenuItemLink;

var AppHeader = React.createClass({
  render: function() {
    return (
      <div >
        <NavigationBar fixedTop fluid>
          <NavItemLink to='/'>Home</NavItemLink>
          <NavItemLink to='/about'>About</NavItemLink>
          <NavItemLink to='/gallery'>Gallery</NavItemLink>
        </NavigationBar>
      </div>
    );
  }

});

module.exports = AppHeader;
