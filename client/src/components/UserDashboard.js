import React from 'react'
import {Link} from "react-router-dom"
import Type from './Type'

export default function UserDashboard() {
  return (
    <div>
      <Tuype />
      <button className='button'><Link to="/selectedPlan">Current Plan</Link></button>
    </div>
  )
}
