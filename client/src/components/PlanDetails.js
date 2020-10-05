import React from 'react'

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
    <div>
      {dayDetails.slice(0, 6).map((day,i) => {
        return (
          <>
          <h1>day{i+1}:</h1>
        {day.map(exercise => {
          return (
            <div>
            <h1>{exercise.name}</h1>
            {exercise.set1goal? <h2>{exercise.name == "Run" ? "Goal: "+ exercise.set1goal+" m" : "Set 1: "+exercise.set1goal}</h2> : <></>}
            {exercise.set2goal?  <h2>Set 2: {exercise.set2goal}</h2>: <></>}
            {exercise.set3goal?  <h2>Set 3: {exercise.set3goal}</h2>: <></>}
            </div>
          )
        })}
        <br/>
        </>
        )
      })}
    </div>
  )
}
