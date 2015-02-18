'use strict';

var React = require('react');
var isNode = require('detect-node');
if (!isNode) require('!style!css!sass!./thumbnail.scss');

var Col= require('react-bootstrap').Col;

var Thumbnail = React.createClass({
  getInitialState: function() {
    return {
      isOverlay: false,
      isImageTransition: false
    };
  },
  propTypes: {
    link:          React.PropTypes.bool,
    img:           React.PropTypes.string,
    overlay:       React.PropTypes.bool,
    overlayIcon:   React.PropTypes.string,
    imgTransition: React.PropTypes.bool,
    xs:            React.PropTypes.number,
    sm:            React.PropTypes.number,
    md:            React.PropTypes.number,
    lg:            React.PropTypes.number
  },
  _handleOnMouseEnter: function(){
    if (this.props.overlay) { this.setState({isOverlay: true});}
    if (this.props.imgTransition) { this.setState({isImageTransition: true});}
  },
  _handleOnMouseLeave: function(){
    if (this.props.overlay) { this.setState({isOverlay: false});}
    if (this.props.imgTransition) { this.setState({isImageTransition: false});}
  },
  render: function() {
    var thumbnailImgClasses = React.addons.classSet({
      'thumbnail-transition-img': this.state.isImageTransition,
    });

    var thumbnailOverlayClasses = React.addons.classSet({
      'thumbnail-overlay':        true,
      'thumbnail-overlay-tranistion': this.state.isOverlay
    });

    var image = <img src={this.props.img} className={thumbnailImgClasses}/>;

    var overlay;

    if (this.props.link) {
      image = <a href={this.props.link}>
                  <img src={this.props.img} />
              </a>;
    }
    if (this.props.overlay) {
      overlay = <div className={thumbnailOverlayClasses} >
                  <span><i className={this.props.overlayIcon}></i></span>
                </div>;
    }

    return (
      <Col className='thumbnail-container'
           xs={this.props.xs} sm={this.props.sm}
           md={this.props.md} lg={this.props.lg}
           onMouseEnter={this._handleOnMouseEnter}
           onMouseLeave={this._handleOnMouseLeave}>
        {image}
        {overlay}
      </Col>
    );
  }

});

module.exports = Thumbnail;
