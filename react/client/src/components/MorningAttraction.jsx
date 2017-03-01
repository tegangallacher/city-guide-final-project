import React from 'react'
import Listing from './Listing'

var MorningAttraction = React.createClass({
  render: function() {
    if (this.props.attraction === undefined) {
      return <div></div>
    } else {
      return <div onClick={this.props.handleMorningClick}>

      <img src={this.props.attraction.image}></img>
      </div>
    }   
  }
});

export default MorningAttraction