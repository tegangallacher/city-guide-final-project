import React from 'react'

class Listing extends React.Component {

  constructor(props) {
    super(props)
   
    this.state = {  
      attractions: [] 
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
        this.setState( { attractions: data } )
       } 
    }
    request.send(null)
  }
  
  render(){
   var places = this.state.attractions.map(function(attraction, index){
    return <div value={index} key={index}>
    <h1>{attraction.name}</h1>
    <p>{attraction.description}</p>
</div>
   }) 
   return(<div>{places}</div>) 
  }

}

export default Listing