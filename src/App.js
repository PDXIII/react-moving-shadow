import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      mouseX: 0,
      mouseY: 0,
      coordX: 0,
      coordY: 0
    };

    this.listenMovement = this.listenMovement.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  listenMovement(event) {
    this.setState({
      mouseX: event.pageX,
      mouseY: event.pageY,
      coordX: this.state.mouseX - this.state.windowWidth / 2,
      coordY: this.state.mouseY - this.state.windowHeight / 2
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Moving Shadow</h1>
        <div className="display">
          {this.state.mouseX};
          {this.state.mouseY};
          {this.state.windowWidth};
          {this.state.windowHeight};
          {this.state.coordX};
          {this.state.coordY};
        </div>
        <div onMouseMove={this.listenMovement} className="playground">
          <div className="figurine" />
        </div>
      </div>
    );
  }
}

export default App;
