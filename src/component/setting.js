import React, { Component } from "react";

class Setting extends Component {
  changeSize(value) {
    this.props.onChangeSize(value);
  }
  onReset =()=>{
    this.props.onSettingDefault(true)
  }
  render() {
    return (
      <div className="col-6 mt-5">
        <div className="card">
          <div className="card-title">size: {this.props.fontSize}px</div>
          <div className="card-body">
            <button
              type="button"
              className="btn btn-dark mr-2"
              onClick={() => this.changeSize(+2)}
            >
              up
            </button>
            <button
              type="button"
              className="btn btn-dark mr-2"
              onClick={() => this.changeSize(-2)}
            >
              down
            </button>
            <button
              type="button"
              className="btn btn-dark mr-2"
              onClick={this.onReset}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Setting;
