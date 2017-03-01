var React = require('react');
import Guide from './Guide'

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.navigatePage = this.navigatePage.bind(this)
    this.state = {
      page: 0
    }
  }

  navigatePage() {
    this.setState({page: this.state.page += 1})
  }

  render() {
    if (this.state.page === 0) {
     return(
      <div className="HomePage" onClick={this.navigatePage}>
      <img className ="ImageButton" src="./images/cityguide.jpg" onClick={this.navigatePage}></img>
       </div>
       );
   }
   else {
    return(
      <div>
      <Guide/>
      </div>
      );
  }
}
};


module.exports = Home;