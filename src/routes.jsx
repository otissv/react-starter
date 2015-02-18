'use strict';

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

// Pages
var Layout = require('./templates/layouts/layout-1.jsx');
var Landing = require('./templates/landings/landings-1.jsx');
var About = require('./templates/abouts/about-1.jsx');
var Album = require('./templates/albums/albulm-col-2.jsx');


var routes = (
  <Route name="layout" path="/" handler={Layout} >
    <Route name="about" path="/about" handler={About} />
    <Route name="gallery" path="/gallery" handler={Album} />
    <DefaultRoute name="default" handler={Landing} />
  </Route>
);


module.exports = routes;
