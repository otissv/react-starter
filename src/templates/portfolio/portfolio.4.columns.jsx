'use strict';

var React = require('react');
var Col = require('react-bootstrap').Col;
var Portfolio = require('./portfolio.jsx');
var Card = require('../cards/card.jsx');


var Portfolio4Columns = React.createClass({
  getDefaultProps: function() {
    return {
      xs: 12,
      sm: 3,
      md: 3,
      lg: 4,
    };
  },
  render: function() {
    return (
      <Portfolio>
        <header className='page-header'>
          <h1>Portfolio 3 colunms </h1>
        </header>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>
        <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={3} md={3} lg={3} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
          Lorem ipsum dolor sit amet
        </Card>

      </Portfolio>
    );
  }

});

module.exports = Portfolio4Columns;
