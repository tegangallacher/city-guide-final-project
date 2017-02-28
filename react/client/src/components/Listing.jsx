import React from 'react'
import Attraction from './Attraction'

class Listing extends React.Component {

  constructor(props) {
    super(props)
   
    this.handleClick = this.handleClick.bind(this)

    this.state = {  
      attractions: [],
      focusAttraction: 0
    }
  }

  componentDidMount(){
    var url = 'http://localhost:5000/api/attractions'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        var data = JSON.parse(request.responseText)
        this.setState( { attractions: data} )
       } 
    }
    request.send(null)
  }

handleClick() {
  if (this.state.focusAttraction === (this.state.attractions.length - 1)) {
    this.setState({focusAttraction: 0 })
  } else {
    this.setState({focusAttraction: this.state.focusAttraction + 1 })
  }
}  

render() {
  return(
    <div>
      <Attraction attraction={this.state.attractions[this.state.focusAttraction]} handleClick={this.handleClick}/>
    </div>
  )
}


}

export default Listing