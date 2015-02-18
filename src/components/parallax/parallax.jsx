'use strict';

var React = require('react');
var Card = require('../cards/card.jsx');

var isNode = require('detect-node');
if (!isNode) require('!style!css!sass!./parallax.scss');


var Parallax = React.createClass({
   getDefaultProps: function() {
     return {
       parallaxPerspective : '1 !default',
       parallaxElement     : 'body !default',
       parallaxIos         : 'true !default',
     };
   },
  componentDidMount: function() {



  },

  render: function() {
    return (
      <div>
        <header className='page-header'>
          <h1>Paralax</h1>
        </header>
        <div className="parallax__group">
          <div id='group1'>
            <div className="parallax__layer parallax__layer--back">
              <Card  img='/images/yoga1.jpg' transition imgTransition/>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <Card  img='/images/yoga1.jpg' transition imgTransition/>
            </div>

          </div>
          <div id='parallax-group2'>
            <div className="parallax__layer parallax__layer--back">
              <Card  img='/images/yoga2.jpg' transition imgTransition/>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <Card  img='/images/yoga2.jpg' transition imgTransition/>
            </div>
          </div>
          <div id='parallax-group3'>
            <div className="parallax__layer parallax__layer--back">
              <Card  img='/images/yoga3.jpg' transition imgTransition/>
            </div>
            <div className="parallax__layer parallax__layer--base">
              <Card  img='/images/yoga3.jpg' transition imgTransition/>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Parallax;
