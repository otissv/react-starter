'use strict';
var React = require('react');
var isNode = require('detect-node');
if (!isNode) require('!style!css!sass!./navigation.scss');


var ReactBootstrap = require('react-bootstrap');
var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavigationBar = require('../../components/navigation/navigationbar.jsx');


var NavigationBar = React.createClass({
  render: function(){
    return (
      <Navbar className='site-navbar' fixedTop={this.props.fixedTop} fluid={this.props.fluid} brand={<a href="/">Sunshine</a>}  right role="banner" toggleNavKey={0}>
        <Nav activeKey={1} className='bs-navbar-collapse container' role='navigation' eventKey={0} id='top'>
          {this.props.children}
        </Nav>
      </Navbar>
    );
  }
});

module.exports = NavigationBar;
