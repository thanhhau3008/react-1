import React, { Component } from "react";

class ColorPicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            colors : ['red', 'green', 'blue', '#ccc']
        };
    }
    showColor(color){
        return{
            backgroundColor : color,
            width : 30,
            height : 30
        };
    }

  render() {

    var elmColor = this.state.colors.map((color, index)=>{
        return <button
        className="mr-2"
        key={index} 
        style={this.showColor(color)}
      ></button>
    });

    return (
      <div className="col-6 mt-5">
        <div className="card">
          <div className="card-title">choose your color</div>
          <div className="card-body">
            {elmColor}
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
