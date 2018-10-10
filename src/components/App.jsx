import React, { Component } from "react";

// const App = ({ name }) => {
//   return <h1>{`Hello ${name}`}</h1>;
// }

class App extends Component {

  render (props) {
    console.log(props);
    return <h1>{ 'Hello ' + this.props.name}</h1>;
  }
 }

export default App;
