import "./App.css";
import React, { Component } from "react";
import img1 from "./Components/photo.png";
import Compteur from "./Components/Compteur.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  ToggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render(Profile) {
    return (
      <div className="App">
        <img src={img1} alt="" height={150} width={150} />
        <h3> Raed Ben Slimane</h3>
        <h2> bsraed22@gmail.com</h2>
        <Compteur />

        <button id="but" onClick={this.ToggleShow}>
          Show Profile
        </button>
        {this.state.show && <Profile />}
      </div>
    );
  }
}

export default App;
