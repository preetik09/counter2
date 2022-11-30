import React, { useState } from "react";

const App = () => {
  const [counter, setCount] = useState(0);

  const [showBtn, setshowBtn] = useState(true);

  const IncrementBtn = () => {
    // this.setState({ counter: this.state.counter + 1 });
    setCount(counter + 1);
  };
  const DecreaseBtn = () => {
    //this.setState({ counter: this.state.counter - 1 });
    setCount(counter - 1);
  };
  const ShowHideBtn = () => {
    //this.setState({ showBtn: !this.state.showBtn });
    setshowBtn(!showBtn);
  };

  var styleI = { backgroundColor: "red" };
  var styleD = { backgroundColor: "red" };

  if (showBtn === true) {
    styleD = { backgroundColor: "green" };
    styleI = { backgroundColor: "green" };
  }
  if (counter === 0) {
    styleD = { backgroundColor: "red" };
  }

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h1>{counter}</h1>
            <button
              className="btn btn-success mx-3"
              onClick={IncrementBtn}
              disabled={showBtn === false}
              style={styleI}
            >
              INCREMENT
            </button>
            <button
              className="btn btn-success mx-3"
              onClick={DecreaseBtn}
              disabled={counter === 0 || showBtn === false}
              style={styleD}
            >
              DECREMENT
            </button>
            <button className="btn btn-danger mx-3" onClick={ShowHideBtn}>
              {showBtn ? "PAUSE" : "PLAY"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
