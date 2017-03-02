import React from 'react'
import MorningAttraction from './MorningAttraction'
import AfternoonAttraction from './AfternoonAttraction'
import EveningAttraction from './EveningAttraction'


class Listing extends React.Component {

  constructor(props) {
    super(props)
   
    this.handleMorningClick = this.handleMorningClick.bind(this)
    this.handleAfternoonClick = this.handleAfternoonClick.bind(this)
    this.handleEveningClick = this.handleEveningClick.bind(this)

    this.state = {  
      attractions: [],
      focusMorningAttraction: 0,
      focusAfternoonAttraction: 5,
      focusEveningAttraction: 10
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

handleMorningClick() {
  if (this.state.focusMorningAttraction === 4) {
    this.setState({focusMorningAttraction: 0 })
  } else {
    this.setState({focusMorningAttraction: this.state.focusMorningAttraction + 1 })
  }
}

handleAfternoonClick() {
  if (this.state.focusAfternoonAttraction === 9) {
    this.setState({focusAfternoonAttraction: 5 })
  } else {
    this.setState({focusAfternoonAttraction: this.state.focusAfternoonAttraction + 1 })
  }
}  

handleEveningClick() {
  if (this.state.focusEveningAttraction === 14) {
    this.setState({focusEveningAttraction: 10 })
  } else {
    this.setState({focusEveningAttraction: this.state.focusEveningAttraction + 1 })
  }
}    

render() {
  return(
    <div className="spacing">
    <img src="./images/pink.jpg" className="spacing"></img>
      <MorningAttraction attraction={this.state.attractions[this.state.focusMorningAttraction]} handleMorningClick={this.handleMorningClick}/>
      <AfternoonAttraction attraction={this.state.attractions[this.state.focusAfternoonAttraction]} handleAfternoonClick={this.handleAfternoonClick}/>
      <EveningAttraction attraction={this.state.attractions[this.state.focusEveningAttraction]} handleEveningClick={this.handleEveningClick}/>
    </div>
  )
}


}

export default Listing