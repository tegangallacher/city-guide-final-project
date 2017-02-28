import React from 'react'
import Listing from './Listing'

var Attraction = React.createClass({
    render: function() {
      if (this.props.attraction === undefined) {
        return <div></div>
      } else {
      return <div onClick={this.props.handleClick}>
          <h1>{this.props.attraction.name}</h1>
          <img src={this.props.attraction.image} width='90%' height='400px'></img>
      </div>
     }   
    }
});

export default Attraction