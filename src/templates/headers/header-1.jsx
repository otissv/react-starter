'use strict';

var React = require('react');
var Waypoint = require('react-waypoint');
var SiteHeader = require('../../components/header/SiteHeader.jsx');


var AppHeader = React.createClass({
  propTypes: {
    onEnter: React.PropTypes.func,
    onLeave: React.PropTypes.func,
    threshold: React.PropTypes.number,
  },
  render: function() {
    return (
      <div>
        <SiteHeader>
            <h1>Zeyler<small>A drop of sunshine</small>
            <i className="fa fa-angle-double-down"></i>
            </h1>
        </SiteHeader>
      </div>
    );
  }

});

module.exports = AppHeader;
