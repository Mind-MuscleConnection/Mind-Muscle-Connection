import React from 'react';
import './PlanDetails.css'

export default function PlanDetails(props) {

  let planDetails = props.templates.filter(template => {
    return template._id === props.templateID
  })

  let days = Object.keys(planDetails[0]).filter(key => key.includes('day'))
  console.log(days)
  console.log(planDetails)
  let dayDetails = days.map(day => planDetails[0][day])
  console.log(dayDetails)
  return (
    <div className='container'>
      <div className='flex-container'>
      {props.numberOfDays == 3 &&
      dayDetails.slice(0, 3).map((day,i) => {
        return (
        <div>
          <h3 className='day'>Day{i+1}:</h3>
        {day.map(exercise => {
          return (
            <div className='exercise'>
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
    {props.numberOfDays == 5 &&
      dayDetails.slice(0, 5).map((day,i) => {
        return (
        <div>
          <h3 className='day'>Day{i+1}:</h3>
        {day.map(exercise => {
          return (
            <div className='exercise'>
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
    {props.numberOfDays == 6 &&
      dayDetails.slice(0, 6).map((day,i) => {
        return (
        <div>
          <h3 className='day'>Day{i+1}:</h3>
        {day.map(exercise => {
          return (
            <div className='exercise'>
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
      <button className='button-pick'>Pick this plan</button>
    </div>
  )
}
