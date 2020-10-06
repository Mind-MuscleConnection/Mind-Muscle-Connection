import React, { Component } from 'react'
import './HowItWorks.css';
import HowItWorksImage from '../assets/images/HowItWorks.jpg';

export default class HowItWorks extends Component {
  render() {
    return (
      <div className='background-image-HowItWorks'>
        <div>
          <h1 className='HowItWorks-title'>How it works</h1>
          <p className='HowItWorks-text'>
            Sign-up to create your own userprofile.
            <br/>
            <br/>
            Login.
            <br/>
            <br/>
            Select a type of Workout
            and the Training Frequency.
            <br/>
            <br/>
            Click a plan to view the details.
            <br/>
            <br/>
            If you decide this is the right plan, 
            then pick the plan and save it on your user profile.
            <br/>
            <br/>
            Your training plan displays all the exercise names, 
            target amount of sets and target amount of reps in a simple overview.
            <br/>
            <br/>
            When you manage to perform more or less reps than the target amount,
            just fill out the actual amount of reps and keep track of your results!
          </p>
        </div>
      </div>
    )
  }
}