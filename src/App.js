import React from "react";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showBtn: true,
    };
  }

  IncrementBtn = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  DecreaseBtn = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  ShowHideBtn = () => {
    this.setState({ showBtn: !this.state.showBtn });
  };

  render() {
    var styleI = { backgroundColor: "red" };
    var styleD = { backgroundColor: "red" };

    if (this.state.showBtn === true) {
      styleD = { backgroundColor: "green" };
      styleI = { backgroundColor: "green" };
    }
    if (this.state.counter === 0) {
      styleD = { backgroundColor: "red" };
    }

    return (
      <div className="container my-5">
        <div className="card text-center my-5">
          <div className="card-body">
            <h1>Counter App</h1>
            <div className="my-5">
              <h1>{this.state.counter}</h1>
              <button
                className="btn btn-success mx-3"
                onClick={this.IncrementBtn}
                disabled={this.state.showBtn === false}
                style={styleI}
              >
                INCREMENT
              </button>
              <button
                className="btn btn-success mx-3"
                onClick={this.DecreaseBtn}
                disabled={
                  this.state.counter === 0 || this.state.showBtn === false
                }
                style={styleD}
              >
                DECREMENT
              </button>
              <button
                className="btn btn-danger mx-3"
                onClick={this.ShowHideBtn}
              >
                {this.state.showBtn ? "PAUSE" : "PLAY"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
