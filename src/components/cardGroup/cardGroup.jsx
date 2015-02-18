'use strict';

var React = require('react/addons');

var isNode = require('detect-node');
if (!isNode) require('!style!css!sass!./cardGroup.scss');

var contains = require('amp-contains');
var map = require('amp-map');
var each = require('amp-each');
var Card = require('../cards/card.jsx');
var Grid = require('react-bootstrap').Grid;

var CardGroup = React.createClass({
  propTypes: {
    data:           React.PropTypes.array,
    header:         React.PropTypes.string,
    img:            React.PropTypes.string,
    transition:     React.PropTypes.bool,
    overlay:        React.PropTypes.bool,
    overlayIcon:    React.PropTypes.string,
    contentOverlay: React.PropTypes.bool,
    fluid:          React.PropTypes.bool,
    xs:             React.PropTypes.number,
    sm:             React.PropTypes.number,
    md:             React.PropTypes.number,
    lg:             React.PropTypes.number,
  },
  getInitialState: function() {
    return {
      data:    this.props.data,
      cards:   [],
    };
  },
  componentWillMount: function(){
    this.setState({cards: this.state.data});
  },
  _searchCards: function (event) {
    var updatedList = [];
    var re = new RegExp(event.target.value.toLowerCase(),'gi');

    each(this.state.data, function (item, index) {
      each(item, function (value) {
        if (value.match(re) && !contains(updatedList, item)) {
          updatedList.push(item);
        }
      });
    });
    this.setState({cards: updatedList});
  },
  render: function() {
    var _props = {
      imgTransition:  this.props.imgTransition,
      contentOverlay: this.props.contentOverlay,
      overlay:        this.props.overlay,
      overlayIcon:    this.props.overlayIcon,
      transition:     this.props.transition
    };
    var cards = map(this.state.cards, function(item,index){
      return (
        <Card key={index}
              header={item.header}
              img={item.img}
              overlay={_props.overlay}
              imgTransition={_props.imgTransition}
              contentOverlay={_props.contentOverlay}
              overlayIcon={_props.overlayIcon}
              transition={_props.transition}
              xs={_props.xs}
              sm={_props.sm}
              md={_props.md}
              lg={_props.lg}>
                {item.content}
        </Card>
      );
    });
    return (
      <div>
        <input className='search-cards input-lg' type='text' placeholder='Search' onChange={this._searchCards}/>
        <Grid fluid={this.props.fluid}>
          {cards}
        </Grid>
      </div>
    );
  }
});


module.exports = CardGroup;
