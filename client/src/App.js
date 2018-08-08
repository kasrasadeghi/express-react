import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "nothing yet"
    };
  }

  async componentDidMount() {
    fetch("/api/hello", {method: 'POST'})
    .then(res => {
      return res.json()
    })
    .then(res => {
      this.setState({response: res.express})
    }).catch(e => {
      console.log(e)
    })
  }

  render() {
    return (
      <div className="App">
        <pre>{JSON.stringify(this.state)}</pre>
      </div>
    );
  }
}

export default App;
