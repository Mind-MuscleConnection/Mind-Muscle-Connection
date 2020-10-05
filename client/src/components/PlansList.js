import React from 'react'
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './PlansList.css';


export default function PlansList(props) {
// console.log("this is props.templates", typeof props.templates)
  let plans = props.templates.filter(template => {
    return template.type === props.type && template.numberOfDays == props.numberOfDays
  })
  // console.log(plans)
  
  return (
    <div className='container-user'>
    <div className='container-plans'>
      <h4>Select a plan:</h4>
      {plans.map(plan => {
        console.log(plan._id)
        return (
          <Link key={plan._id}><button>{plan.planName}</button></Link>
        )
      }
        )}
      <button className='button' onClick={props.prevStep} style={{marginTop:'50px'}}>Go Back</button>
    </div>
    </div>
  )
}