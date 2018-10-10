import React, { Component, Fragment } from "react";

// const App = ({ name }) => {
//   return <h1>{`Hello ${name}`}</h1>;
// }

class App extends Component {
  state = {
    text: 'Hello'
  }

  handleEvent = event => {
    this.setState({
      text: event.target.value
    });
  }
  

  render () {
    return (<Fragment>
    <input type="text" placeholder={this.state.text} onChange={this.handleEvent}/>
      <h1>{ this.state.text + ' '  + this.props.name}</h1>
    </Fragment>);
  }
 }

export default App;
