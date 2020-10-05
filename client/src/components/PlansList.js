import React from 'react'
import {Button} from 'react-bootstrap'

export default function PlansList(props) {
  let plans = props.templates.filter(template => {
    return template.type === props.type && template.numberOfDays === Number(props.numberOfDays)
  })
  // console.log(plans)
  
  return (
    <div className='container-user'>
    <div className='container-plans'>
      <h4>Select a plan:</h4>
      {plans.map(plan => {
        console.log(plan._id)
        return (
          <Button onClick={props.handleBtn}  name='templateID' value={plan._id} key={plan._id}> 
          {plan.planName}
          </Button>
        )
      }
        )}
      <button className='button' onClick={props.prevStep} style={{marginTop:'50px'}}>Go Back</button>
    </div>
    </div>
  )
}