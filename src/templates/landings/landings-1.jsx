'use strict';
var React = require('react');

var ReactBootstrap = require('react-bootstrap');
var Row = ReactBootstrap.Row;
var Button = ReactBootstrap.Button;

var Card = require('../../components/cards/card.jsx');
var Header = require('../headers/header-1.jsx');
var Waypoint = require('react-waypoint');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
         <Header />
         <div className='site-navbar-transiton-waypoint'>
           <Waypoint className='Waypoint'
             onEnter={this.props.handleSiteNavWaypointEnter}
             onLeave={this.props.handleSiteNavWaypointLeave}
             threshold={0}
             />
         </div>

          <Row className='row-fixed'>
              <Card header='Header text' img='/images/yoga1.jpg' xs={12} sm={4} md={4} lg={4} transition imgTransition overlay overlayIcon='fa fa-search fa-2x'>
              Lorem ipsum dolor sit amet, nam maecenas ligula. Elit dictumst dolor metus wisi nec,
              ac curabitur mi ac amet adipiscing. Ante faucibus ac dictumst et magna nisl.
              <footer>
                <a href='#'>Read more</a>
              </footer>
            </Card>

            <Card header='Header text' img='/images/yoga2.jpg' xs={12} sm={4} md={4} lg={4}  transition imgTransition>
              Lorem ipsum dolor sit amet, nam maecenas ligula. Elit dictumst dolor metus wisi nec,
              ac curabitur mi ac amet adipiscing. Ante faucibus ac dictumst et magna nisl.
              <footer>
                <a className='text-success' href='#'>Read more</a>
              </footer>
            </Card>

            <Card header='Header text' img='/images/yoga3.jpg' xs={12} sm={4} md={4} lg={4}  transition imgTransition>
              Lorem ipsum dolor sit amet, nam maecenas ligula. Elit dictumst dolor metus wisi nec,
              ac curabitur mi ac amet adipiscing. Ante faucibus ac dictumst et magna nisl.
              <footer>
                <a className='text-success' href='#'>Read more</a>
              </footer>
            </Card>
          </Row>
      </div>
    );
  }
});
