var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/Home.jsx');

window.onload = function(){
  ReactDOM.render(
   <Home/>,
    document.getElementById('app')
  );
}
