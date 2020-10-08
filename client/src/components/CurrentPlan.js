import axios from 'axios';
import React, { Component } from 'react';
import './CurrentPlan.css';
import Exercise from './Exercise';
import { v4 as uuid } from 'uuid';
import {Button} from 'react-bootstrap';

export default class CurrentPlan extends Component {
  state = {
    currentPlan: [],
    selectedDay: null,
    exercises: null
  }

  handleChange = (event, index) => {
    const { name, value } = event.target;
    const exercises = [...this.state.exercises]
    exercises[index][name] = Number(value);
    console.log(typeof exercises[index][name])
    this.setState({
      exercises
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('My click', this.state.currentPlan._id);

    const templateId = this.state.currentPlan._id
    console.log("this is state.currentPlan", this.state.currentPlan)
    
    axios.put(`/api/templates/${templateId}`, this.state.currentPlan).then(currentPlan => {
      console.log(currentPlan)
      this.setState({
        currentPlan: currentPlan.data
      });
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
    console.log(this.state.currentPlan)
    let days = Object.keys(this.state.currentPlan).filter(key => key.includes('day'))
    return (
      <div className='background-current'>
      <div className='container current'>
        <button className="btn btn-secondary" onClick={this.handleClick}>Update Plan</button>
        {days.map(day => (
          <div key={uuid()} >
           <button className='btn btn-outline-light'><h4 onClick={() => this.showDetails(day)}>{day}</h4></button> 
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
      </div>
    )
  }
}