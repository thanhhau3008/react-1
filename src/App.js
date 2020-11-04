import React, { Component } from "react";
import ColorPicker from "./component/colorPicker";

import Result from "./component/Result";
import Setting from "./component/setting";


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <ColorPicker />
        <Setting />
        </div>
        <Result />
      </div>
    );
  }
}

export default App;
