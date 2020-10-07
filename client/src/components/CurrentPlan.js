import axios from 'axios';
import React, { Component } from 'react';
import './CurrentPlan.css';
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
                <div key={uuid()}>
                  <h5>{exercise.name}</h5>
                  <form type="submit">

                    <h6>Set 1 Goal: <strong>{exercise.set1goal}</strong></h6>
                    <div>
                      <label htmlFor="">Set 1 Reps: </label>
                      <input type="number" name="set1reps" value={this.state.exercises[index].set1reps} onChange={(e) => this.handleChange(e, index)} />
                    </div>
                    <div>
                      <label htmlFor="">Set 1 Weight: </label>
                      <input type="number" name="set1weight" value={this.state.exercises[index].set1weight} onChange={(e) => this.handleChange(e, index)} />
                    </div>

                    <h6>Set 2 Goal: <strong>{exercise.set2goal}</strong></h6>
                    <div>
                      <label htmlFor="">Set 2 Reps: </label>
                      <input type="number" name="set2reps" value={this.state.exercises[index].set2reps} onChange={(e) => this.handleChange(e, index)} />
                    </div>
                    <div>
                      <label htmlFor="">Set 2 Weight: </label>
                      <input type="number" name="set2weight" value={this.state.exercises[index].set2weight} onChange={(e) => this.handleChange(e, index)} />
                    </div>
                  </form>
                </div>
              ))
            }
          </div>
        ))
        }
      </div>
    )
  }
}