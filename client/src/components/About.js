import React, { Component } from 'react'
import './About.css';
import AboutImage from '../assets/images/about.jpg';

export default class About extends Component {
  render() {
    return (
      <div className='background-image-about'>
        <div>
          <h1 className='about-title'>About us</h1>
          <p className='about-text'>
            Welcome to Mind-Muscle Connection,
            <br/>
            <br/>
            The number one Workout App where you can choose your type of Workout, decide the frequency of training and receive a personal schedule.
            <br/>
            <br/>
            Just within a few clicks! 
            <br/>
            <br/>
            We're dedicated to providing you the best user experience, a simple overview of your training goals with great personal progress as a result.
            We hope you enjoy working with the app as much as we enjoy offering it to you.
            <br/>
            <br/>
            Sincerely,
            <br/>
            <br/>
            Mind-Muscle Connection
            </p>
        </div>
      </div>
    )
  }
}
