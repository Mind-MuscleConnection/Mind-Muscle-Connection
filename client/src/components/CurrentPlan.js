import axios from 'axios';
import React, { Component } from 'react';
import './CurrentPlan.css';
import Exercise from './Exercise';
import { v4 as uuid } from 'uuid';

export default class CurrentPlan extends Component {
  state = {
    currentPlan: [],
    selectedDay: null,
    exercises: null
  }

  handleChange = (event, index) => {
    const { name, value } = event.target;
    const exercises = [...this.state.exercises]
    exercises[index][name] = value;
    this.setState({
      exercises
    })
  }

  showDetails = (day) => {
    const exercises = this.state.currentPlan[day];
    day = this.state.selectedDay === day ? null : day
    this.setState({
      selectedDay: day,
      exercises: exercises
    })
  }

  componentDidMount() {
    if (this.props.user) {
      const templateId = this.props.user.currentPlan
      axios.get(`/api/templates/${templateId}`).then(currentPlan => {
        const currentPlanData = currentPlan.data
        this.setState({ currentPlan: currentPlanData });
      })
    }
  }

  render() {
    let days = Object.keys(this.state.currentPlan).filter(key => key.includes('day'))
    return (
      <div className='container current'>
        {days.map(day => (
          <div key={uuid()} >
            <h4 onClick={() => this.showDetails(day)}>{day}</h4>
            {
              this.state.selectedDay === day &&
              this.state.exercises.map((exercise, index) => (
                <Exercise key={uuid()} index={index} exercises={this.state.exercises} exercise={exercise} handleChange={this.handleChange} />
              )
              )
            }
          </div>
        ))
        }
      </div>
    )
  }
}