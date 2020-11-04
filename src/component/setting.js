import React, { Component } from "react";

class Setting extends Component {
  render() {
    return (
      <div className="col-6 mt-5">
        <div className="card">
          <div className="card-body">
            <button type="button" className="btn btn-dark mr-2">
              up
            </button>
            <button type="button" className="btn btn-dark mr-2">
              down
            </button>
            <button type="button" className="btn btn-dark mr-2">
              reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Setting;
