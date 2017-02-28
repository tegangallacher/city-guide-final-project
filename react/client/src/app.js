var React = require('react');
var ReactDOM = require('react-dom');
var Guide = require('./components/Guide.jsx');

window.onload = function(){
  ReactDOM.render(
   <Guide/>,
    document.getElementById('app')
  );
}
