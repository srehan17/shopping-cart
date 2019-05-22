import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    errorMessage: ""
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
      errorMessage: ""
      //reseting errorMessage when + button is clicked
    });
  };

  handleDecrease = () => {
    const { value } = this.state;
    if (value <= 0) {
      this.setState({ value: 0, errorMessage: "Value can't be negative!!" });
    } else {
      this.setState({
        value: this.state.value - 1,
        errorMessage: ""
        //reseting errorMessage when value becomes positive
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h4 className="m-2">{this.props.counter.title}</h4>
        <span className="badge m-2 badge-primary">{this.state.value}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-warning btn-sm"
        >
          +
        </button>
        <button
          onClick={this.handleDecrease}
          className="btn btn-success btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <span className="m-2" style={{ fontSize: 20, color: "orange" }}>
          {this.state.errorMessage}
        </span>
      </React.Fragment>
    );
  }
}

export default Counter;
