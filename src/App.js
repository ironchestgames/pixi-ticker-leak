import React, { Component } from 'react';
import { Container, Sprite, Text } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

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
      <Container>
        <Sprite
          x={this.state.elapsedMs % 800}
          y={this.state.elapsedMs / 600}
          texture={PIXI.Texture.WHITE}
          width={50}
          height={50}
          />
        <Text text={this.state.elapsedMs} x={100} y={100} />
      </Container>
    )
  }
}

export default App;
