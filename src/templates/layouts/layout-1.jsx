'use strict';

var React = require('react');
var Footer = require('../footers/footer-1.jsx');
var Grid = require('react-bootstrap').Grid;
var Navigation = require('../navigations/navigation-1.jsx');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;



var App = React.createClass({
  _siteNavClassList: function(e) {
    var siteNav = this.refs.siteNav.getDOMNode().getElementsByClassName('site-navbar');
    var className = 'site-navbar-transaition';
    if (e === 'enter') {
      return siteNav[0].classList ? siteNav[0].classList.remove(className) : siteNav[0].className += ' ' + className;
    }
    else {
      return siteNav[0].classList ? siteNav[0].classList.add(className) : siteNav[0].className += ' ' + className;
    }
  },
  _handleSiteNavWaypointEnter: function() {
    this._siteNavClassList('enter');
  },
  _handleSiteNavWaypointLeave: function(){
    this._siteNavClassList('leave');
  },
  render: function(){
    return (
      <div>
        <Navigation ref='siteNav' />
        <main className='main'>
          <Grid fluid >
            <RouteHandler handleSiteNavWaypointEnter={this._handleSiteNavWaypointEnter}
                          handleSiteNavWaypointLeave={this._handleSiteNavWaypointLeave}
            />
          </Grid>
        </main>
        <Footer />
      </div>
    );
  }
});

module.exports = App;
