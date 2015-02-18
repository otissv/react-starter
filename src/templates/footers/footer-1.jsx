'use strict';

var React = require('react');
var Footer = require('../../components/footer/SiteFooter.jsx');


var AppFooter = React.createClass({
  render: function() {
    return (
      <Footer>
        <div className='navbar-text pull-left'>
          <ul className='list-unstyled'>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li>&copy; 2015 Brand</li>
          </ul>
        </div>
        <div className='navbar-text pull-right fa-2x'>
          <a href='#'><i className='fa fa-facebook'></i></a> <a href='#'><i className='fa fa-twitter-square'></i></a> <a href='#'><i className="fa fa-google-plus-square"></i></a>
        </div>
      </Footer>
    );
  }

});

module.exports = AppFooter;
