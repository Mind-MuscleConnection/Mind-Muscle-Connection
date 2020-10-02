import React from 'react'

export default function PlansList(props) {
console.log("this is props.templates", typeof props.templates)
  let plans = props.templates.filter(template => {
  //   console.log("this is template",template)
  //   console.log(template.type,props.type,template.type === props.type)
  // console.log(template.numberOfDays, props.numberOfDays, template.numberOfDays == props.numberOfDays)
    return template.type === props.type && template.numberOfDays == props.numberOfDays
  })
  console.log(plans)
  
  // console.log(planName)
  return (
    
    <div>
      {plans.map(plan => {
        return (
          <h1 key={plan._id}>{plan.planName}</h1>
        )
      }
        )}
    </div>
  )
}
