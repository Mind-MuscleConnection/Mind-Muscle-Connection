import React, { Component } from "react";

export default class WorkoutDetails extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.details.name}</h1>
      </div>
    );
  }
}
