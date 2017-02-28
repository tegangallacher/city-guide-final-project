import React from 'react'

const Attraction = (props) => (
  <div className='attraction'>
    <div className='attraction-details'>
      <h3 className='attraction-name'>{props.name}</h3>
      <p className='attraction-description'>{props.description}</p>
    </div>
  </div>
)

const { string } = React.PropTypes

Attraction.propTypes = {
  name: string.isRequired,
  description: string.isRequired
}


export default Attraction