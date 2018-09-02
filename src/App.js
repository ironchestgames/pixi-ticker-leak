import React, { Component } from 'react';
import { Text } from "react-pixi-fiber";

class App extends Component {
  state = {
    elapsedMs: 0,
  }

  componentDidMount() {
    this.props.ticker.add(() => {
      this.setState({
        elapsedMs: this.state.elapsedMs + this.props.ticker.elapsedMS,
      })
      this.forceUpdate()
    })
  }

  render() {
    return (
      <Text text={this.state.elapsedMs} x={100} y={100} />
    )
  }
}

export default App;
