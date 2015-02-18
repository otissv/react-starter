'use strict';

var React = require('react');

var Portfolio = React.createClass({

  render: function() {
    var cName;

    if (this.props.nopadding) {
      cName = "portfolio2columns nopadding";
    }
    else {
      cName = "portfolio2columns";
    }
    
    return (
      <div className={cName} >
        {this.props.children}
      </div>
    );
  }

});

module.exports = Portfolio;
