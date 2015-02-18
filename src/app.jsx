'use strict';

(function() {
  var React = require('react');

  var isNode = require('detect-node');
  if (!isNode) require('!style!css!sass!./app.scss');

  var Router = require('react-router');
  var routes = require('./routes.jsx');

  var mountPoint = document.getElementById('react-mount-point');

  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, mountPoint);
  });
})();
