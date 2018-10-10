import React, { Component, Fragment } from "react";

// const App = ({ name }) => {
//   return <h1>{`Hello ${name}`}</h1>;
// }

class App extends Component {
  state = {
    text: 'Hello',
    hasLoaded: false
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleClick = event => {
    this.setState({
      hasLoaded: !this.state.hasLoaded
    });
  }
  
  
  render () {
      const html = (this.state.hasLoaded)
      ? (<Fragment>
          <input type="text" placeholder={this.state.text} onChange={this.handleChange}/>
          <input type="button" value="Load" onClick={this.handleClick}/>
          <h1>{ this.state.text + ' '  + this.props.name}</h1>
        </Fragment>)
      : (<Fragment>
        <h1>Loading...</h1>
        <input type="button" value="Load"onClick={this.handleClick}/>
      </Fragment>)

    return html;
  }
 }

export default App;
