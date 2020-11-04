import React, { Component } from "react";

class Result extends Component {
  setStyle() {
    return {
      color: this.props.color,
      fontSize: this.props.fontSize
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 mt-5">
          <div className="card-title">
            <h5>color: {this.props.color} - fontsize: {this.props.fontSize}px</h5>
          </div>
          <div className="card-body" style={this.setStyle()}>
            welcome to reactjs
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
