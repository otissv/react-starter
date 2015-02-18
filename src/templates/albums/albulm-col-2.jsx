'use strict';

var React = require('react');
var Grid = require('react-bootstrap').Grid;
var CardGroup = require('../../components/cardGroup/cardGroup.jsx');
var data = require('../../components/data/data.js');

var MyComponent = React.createClass({
  render: function () {
    return (
      <div>
        <header className='page-header'>
          <h1>Gallery</h1>
        </header>
        <CardGroup transition imgTransition overlay fluid data={data}/>
      </div>
    );
  }
});

module.exports = MyComponent;
