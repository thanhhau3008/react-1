import React, { Component } from "react";
import ColorPicker from "./component/colorPicker";
import "./App.css";
import Result from "./component/Result";
import Setting from "./component/setting";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 15,
    };
  }
  onSetColor = (params) => {
    this.setState({
      color: params,
    });
  };
  onChangeSize =(value)=>{
    this.setState({
      fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <=36) ? this.state.fontSize + value : this.state.fontSize
    })
  }
  onSettingDefault =(value)=>{
    if(value){
      this.setState({
        color: 'red',
        fontSize: 15
      })
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <ColorPicker
            color={this.state.color}
            onReceveColor={this.onSetColor}
          />
          <Setting
            fontSize={this.state.fontSize}
            onChangeSize={this.onChangeSize}
            onSettingDefault={this.onSettingDefault}
          />
        </div>
        <Result color={this.state.color} fontSize={this.state.fontSize} />
      </div>
    );
  }
}

export default App;
