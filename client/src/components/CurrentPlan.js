import axios from 'axios';
import React, { Component } from 'react';
import './CurrentPlan.css';

export default class CurrentPlan extends Component {
  state = {
    currentPlan:[]
  }

  componentDidMount(){
    console.log("i mount")
    console.log("this is props.user",this.props.user)
    if(this.props.user){
      const templateId = this.props.user.currentPlan
      console.log('this templateId', this.props.user.currentPlan)
      axios.get(`/api/templates/${templateId}`).then(currentPlan => {
        const currentPlanData = currentPlan.data
        console.log('this is my template', currentPlanData)
        this.setState({ currentPlan: currentPlanData });
      })
    }
    
    // axios.get(`/api/templates/currentTemplate/${templateId}`).then(template =>{
    //   console.log(template)
    // })
  }

  render() {
    console.log("i render")
    let days = Object.keys(this.state.currentPlan).filter(key => key.includes('day'))
    console.log(days)
    let dayDetails = days.map(day => this.state.currentPlan[day])
    console.log('Day details', dayDetails)
    return (
      <div>
        <div className='container current'>
        <h2>Your current plan: {this.state.currentPlan.planName}</h2>
        {this.state.currentPlan.numberOfDays === 3 &&
        dayDetails.slice(0,9).map((day,i) => {
        return (
        <div key={i}>
          <h3 className='day'>Day{i+1}:</h3>
        {day.map(exercise => {
          return (
            <div className='exercise' key={exercise._id}>
            <h6>{exercise.name}</h6>
            {exercise.set1goal? <p>{exercise.name == "Run" ? "Goal: "+ exercise.set1goal+" m" : "Set 1: "+exercise.set1goal}</p> : <></>}
            {exercise.set2goal?  <p>Set 2: {exercise.set2goal}</p>: <></>}
            {exercise.set3goal?  <p>Set 3: {exercise.set3goal}</p>: <></>}
            </div>
          )
        })}
        </div>
        )
      })
    }
    {this.state.currentPlan.numberOfDays === 5 &&
        dayDetails.slice(0,15).map((day,i) => {
        return (
        <div key={i}>
          <h3 className='day'>Day{i+1}:</h3>
        {day.map(exercise => {
          return (
            <div className='exercise' key={exercise._id}>
            <h6>{exercise.name}</h6>
            {exercise.set1goal? <p>{exercise.name == "Run" ? "Goal: "+ exercise.set1goal+" m" : "Set 1: "+exercise.set1goal}</p> : <></>}
            {exercise.set2goal?  <p>Set 2: {exercise.set2goal}</p>: <></>}
            {exercise.set3goal?  <p>Set 3: {exercise.set3goal}</p>: <></>}
            </div>
          )
        })}
        </div>
        )
      })
    }
    {this.state.currentPlan.numberOfDays === 6 &&
        dayDetails.slice(0,18).map((day,i) => {
        return (
        <div key={i}>
          <h3 className='day'>Day{i+1}:</h3>
        {day.map(exercise => {
          return (
            <div className='exercise' key={exercise._id}>
            <h6>{exercise.name}</h6>
            {exercise.set1goal? <p>{exercise.name == "Run" ? "Goal: "+ exercise.set1goal+" m" : "Set 1: "+exercise.set1goal}</p> : <></>}
            {exercise.set2goal?  <p>Set 2: {exercise.set2goal}</p>: <></>}
            {exercise.set3goal?  <p>Set 3: {exercise.set3goal}</p>: <></>}
            </div>
          )
        })}
        </div>
        )
      })
    }
    </div>
    </div>
    )
  }
}
