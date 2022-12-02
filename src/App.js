import React, { useState } from "react";
import Button from "./components/button";

const App = () => {
  const [counter, setCount] = useState(0);

  const [showBtn, setshowBtn] = useState(true);

  const IncrementBtn = () => {
    // this.setState({ counter: this.state.counter + 1 });
    console.log("increment");
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
            <Button
              className="btn btn-success mx-3"
              action={IncrementBtn}
              disabled={showBtn === false}
              name="increment"
              style={styleI}
              backgroundColor={styleI.backgroundColor}
            ></Button>
            <Button
              className="btn btn-success mx-3"
              action={DecreaseBtn}
              disabled={counter === 0 || showBtn === false}
              name="decrement"
              backgroundColor={styleD.backgroundColor}
            ></Button>
            <Button
              className="btn btn-danger mx-3"
              action={ShowHideBtn}
              name={!showBtn ? "PLAY" : "PAUSE"}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
