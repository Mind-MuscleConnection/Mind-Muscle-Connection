import React from 'react'
import {Button} from 'react-bootstrap'
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function PlansList(props) {
  let plans = props.templates.filter(template => {
    return template.type === props.type && template.numberOfDays === Number(props.numberOfDays) && template.ref
  })
  
  return (
    <div className='container-user'>
    <div className='container-plans'>
      <h4>Select a plan:</h4>
      {plans.map(plan => {
        console.log(plan._id)
        return (
          <Button onClick={props.handleBtn} name='templateID' value={plan._id} key={plan._id}> 
          {plan.planName}
          </Button>
        )
      }
        )}
    </div>
    <button className='button-back' onClick={props.prevStep} style={{marginTop:'50px'}}><FontAwesomeIcon icon={ faArrowCircleLeft } /></button>
    </div>
    
  )
}