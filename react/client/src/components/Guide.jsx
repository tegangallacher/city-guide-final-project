var React = require('react');
import Listing from './Listing'

 var Guide = React.createClass({
   render() {
     return(
       <div>
       <h1 className="heading">24 hours in Edinburgh</h1>
       <Listing/>
       </div>
       );
   }
 });


 module.exports = Guide;