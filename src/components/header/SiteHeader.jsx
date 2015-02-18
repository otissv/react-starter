'use strict';

var React = require('react');
var isNode = require('detect-node');
if (!isNode) require('!style!css!sass!./header.scss');

var AppHeader = React.createClass({
  propTypes: {
    onEnter: React.PropTypes.func,
    onLeave: React.PropTypes.func,
    threshold: React.PropTypes.number,
  },
  render: function() {
    return (
      <div>
        <header className='site-header'>
          <div className='site-header-page-header'>
            {this.props.children}
          </div>
        </header>
      </div>
    );
  }

});

module.exports = AppHeader;
