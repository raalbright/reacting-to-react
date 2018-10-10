import React, { Component } from "react";

// const App = ({ name }) => {
//   return <h1>{`Hello ${name}`}</h1>;
// }

class App extends Component {
  state = {
    text: 'Hello'
  }

  render (props) {
    console.log(props);
    return <h1>{ this.state.text + ' '  + this.props.name}</h1>;
  }
 }

export default App;
