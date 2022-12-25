import React, { Component } from "react";

export default class Compteur extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      intervall: null,
      show: false,
    };
  }

  componentDidMount() {
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }

  render() {
    return (
      <div className="App">
        <h2 id="c"> Compteur : {this.state.timer}</h2>
      </div>
    );
  }
}
