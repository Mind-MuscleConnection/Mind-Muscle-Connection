import React from 'react'
import {Button} from 'react-bootstrap'

export default function PlansList(props) {
  let plans = props.templates.filter(template => {
    return template.type === props.type && template.numberOfDays === Number(props.numberOfDays)
  })
  console.log(plans)
  
  return (
    
    <div>
      {plans.map(plan => {
        return (
          <Button onClick={props.handleBtn}  name='templateID' value={plan._id} key={plan._id}> 
          {plan.planName}
          </Button>
        )
      }
        )}
    </div>
  )
}
