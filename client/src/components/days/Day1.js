import React, { Component } from "react";
import WorkoutDetails from "../WorkoutDetails";

export default class Day1 extends Component {
  state = {
    day: this.props.currentPlan,
  };
  render() {
    console.log("this is the props", this.props.currentPlan);
    return (
      <div>
        {this.props.currentPlan.day1 ? (
          this.props.currentPlan.day1.map((workout) => (
            <WorkoutDetails details={workout} />
          ))
        ) : (
          <h1>does not exist</h1>
        )}
      </div>
    );
  }
}
