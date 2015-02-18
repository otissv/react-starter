'use strict';

var React = require('react');
var isNode = require('detect-node');

var App = (isNode ? null : require('!style!css!sass!./app.scss') );


module.exports = App;
