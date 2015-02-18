'use strict';

var React = require('react/addons');
var Col= require('react-bootstrap').Col;
var Thumbnail = require('../thumbnail/thumbnail.jsx');

var isNode = require('detect-node');
if (!isNode) require('!style!css!sass!./cards.scss');


var Card = React.createClass({
  propTypes: {
    header:         React.PropTypes.string,
    img:            React.PropTypes.string,
    overlay:        React.PropTypes.bool,
    overlayIcon:    React.PropTypes.string,
    contentOverlay: React.PropTypes.bool,
    transition:     React.PropTypes.bool,
    mouseEnter:     React.PropTypes.bool,
    xs:             React.PropTypes.number,
    sm:             React.PropTypes.number,
    md:             React.PropTypes.number,
    lg:             React.PropTypes.number,
  },
  getInitialState: function() {
    return {
      onMouseEnter: false,
      isTransition: false,
    };
  },
  getDefaultProps: function() {
    return {
      header: '',
      img: '',
      summary: '',
      xs: 12,
      sm: 6,
      md: 6,
      lg: 4,
    };
  },
  componentDidMount: function() {
    var transistioState = this.props.transition ? true : false;
    this.setState({isTransition: transistioState});
  },
  _handleOnMouseEnter: function () {
    if(this.props.contentOverlay) {
      this.setState({mouseEnter: true});
    }
  },
  _handleOnMouseLeave: function () {
    if(this.props.contentOverlay) {
      this.setState({mouseEnter: false});
    }
  },
  render: function() {
    var cardContainerClasses = React.addons.classSet({
      'card-container':            true,
      'card-container-transition': this.state.isTransition
    });

    var cardContentClasses = React.addons.classSet({
      'card-content': true,
      'card-content-overlay': this.props.contentOverlay,
      'card-content-overlay-transition': this.state.mouseEnter
    });

    return (
      <Col className={cardContainerClasses}
           xs={this.props.xs}
           sm={this.props.sm}
           md={this.props.md}
           lg={this.props.lg} >
        <section className='card'
                 onMouseEnter={this._handleOnMouseEnter}
                 onMouseLeave={this._handleOnMouseLeave}>
          <Thumbnail img={this.props.img}
                     overlay={this.props.overlay}
                     overlayIcon={this.props.overlayIcon}
                     imgTransition={this.props.imgTransition}
                     />
          <div className={cardContentClasses}>
            <h3>{this.props.header}</h3>
              <p>{this.props.children}</p>
            </div>
        </section>
      </Col>
    );
  }
});

module.exports = Card;
