import axios from 'axios';
import React, { Component } from 'react';
import {Form} from 'react-bootstrap'
import './CurrentPlan.css';
import {Accordion, Card, Button} from 'react-bootstrap';

export default class CurrentPlan extends Component {
  state = {
    currentPlan:[],
    set1reps
  }

  componentDidMount(){
    if(this.props.user){
      const templateId = this.props.user.currentPlan
      axios.get(`/api/templates/${templateId}`).then(currentPlan => {
        const currentPlanData = currentPlan.data
        this.setState({ currentPlan: currentPlanData });
      })
    }
  }

  render() {
    let days = Object.keys(this.state.currentPlan).filter(key => key.includes('day'))
    let dayDetails = days.map(day => this.state.currentPlan[day])
    return (
      <div className='container current'>
        <h2>Your current plan: {this.state.currentPlan.planName}</h2>
        <Accordion>
        <Card>
        {this.state.currentPlan.numberOfDays === 3 &&
        dayDetails.slice(0,9).map((day,i) => {
        return (
        <div key={i}>
        <Accordion.Toggle as={Card.Header} eventKey={i+1}>  
        <h3 className='day'>Day{i+1}</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i+1}>
        <Card.Body>
        {day.map(exercise => {
          return (
            <div className='exercise' key={exercise._id}>
            <h6>{exercise.name}</h6>
            {exercise.set1goal? <p>{exercise.name == "Run" ? "Goal: "+ exercise.set1goal+" m" : "Set 1: "+exercise.set1goal}</p> : <></>}
            <Form >
              <Form.Group>
                <Form.Label>Repetitions: </Form.Label>
                <Form.Control
                  type='number'
                  name='set1reps'
                  value={}
                  onChange={}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set1weight'
                  value={}
                  onChange={}
                />
              </Form.Group>
              </Form>
            {exercise.set2goal?  <p>Set 2: {exercise.set2goal}</p>: <></>}
            <Form >
              <Form.Group>
                <Form.Label>Repetitions: </Form.Label>
                <Form.Control
                  type='number'
                  name='set2reps'
                  value={}
                  onChange={}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set2weight'
                  value={}
                  onChange={}
                />
              </Form.Group>
              </Form>
            {exercise.set3goal?  <p>Set 3: {exercise.set3goal}</p>: <></>}
            <Form >
              <Form.Group>
                <Form.Label>Repetitions: </Form.Label>
                <Form.Control
                  type='number'
                  name='set3reps'
                  value={}
                  onChange={}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set3weight'
                  value={}
                  onChange={}
                />
              </Form.Group>
              </Form>
            </div>
          )
        })}
        </Card.Body>
        </Accordion.Collapse>
      </div>
        )
      })
    }
    </Card>
    </Accordion>
    <Accordion>
    <Card>
    {this.state.currentPlan.numberOfDays === 5 &&
        dayDetails.slice(0,15).map((day,i) => {
        return (
          <div key={i}>
          <Accordion.Toggle as={Card.Header} eventKey={i+1}>  
          <h3 className='day'>Day{i+1}</h3>
          </Accordion.Toggle>
        <Accordion.Collapse eventKey={i+1}>
        <Card.Body>
        {day.map(exercise => {
          return (
            <div className='exercise' key={exercise._id}>
            <h6>{exercise.name}</h6>
            {exercise.set1goal? <p>{exercise.name == "Run" ? "Goal: "+ exercise.set1goal+" m" : "Set 1: "+exercise.set1goal}</p> : <></>}
            <Form >
              <Form.Group>
                <Form.Label>Repetitions: </Form.Label>
                <Form.Control
                  type='number'
                  name='set1reps'
                  value={}
                  onChange={}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set1weight'
                  value={}
                  onChange={}
                />
              </Form.Group>
              </Form>
            {exercise.set2goal?  <p>Set 2: {exercise.set2goal}</p>: <></>}
            <Form >
              <Form.Group>
                <Form.Label>Repetitions: </Form.Label>
                <Form.Control
                  type='number'
                  name='set2reps'
                  value={}
                  onChange={}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set2weight'
                  value={}
                  onChange={}
                />
              </Form.Group>
              </Form>
            {exercise.set3goal?  <p>Set 3: {exercise.set3goal}</p>: <></>}
            <Form >
              <Form.Group>
                <Form.Label>Repetitions: </Form.Label>
                <Form.Control
                  type='number'
                  name='set3reps'
                  value={}
                  onChange={}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set3weight'
                  value={}
                  onChange={}
                />
              </Form.Group>
              </Form>
            </div>
          )
        })}
        </Card.Body>
        </Accordion.Collapse>
      </div>
        )
      })
    }
    </Card>
    </Accordion>
    <Accordion>
    <Card>
    {this.state.currentPlan.numberOfDays === 6 &&
        dayDetails.slice(0,18).map((day,i) => {
        return (
          <div key={i}>
          <Accordion.Toggle as={Card.Header} eventKey={i+1}>  
          <h3 className='day'>Day{i+1}</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={i+1}>
        <Card.Body>
        {day.map(exercise => {
          return (
            <div className='exercise' key={exercise._id}>
            <h6>{exercise.name}</h6>
            {exercise.set1goal? <p>{exercise.name == "Run" ? "Goal: "+ exercise.set1goal+" m" : "Set 1: "+exercise.set1goal}</p> : <></>}
            <Form >
              <Form.Group>
                <Form.Label>Repetitions: </Form.Label>
                <Form.Control
                  type='number'
                  name='set1reps'
                  value={}
                  onChange={}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set1weight'
                  value={}
                  onChange={}
                />
              </Form.Group>
              </Form>
            {exercise.set2goal?  <p>Set 2: {exercise.set2goal}</p>: <></>}
            <Form >
              <Form.Group>
                <Form.Label>Repetitions: </Form.Label>
                <Form.Control
                  type='number'
                  name='set2reps'
                  value={}
                  onChange={}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set2weight'
                  value={}
                  onChange={}
                />
              </Form.Group>
              </Form>
            {exercise.set3goal?  <p>Set 3: {exercise.set3goal}</p>: <></>}
            <Form >
              <Form.Group>
                <Form.Label>Repetitions: </Form.Label>
                <Form.Control
                  type='number'
                  name='set3reps'
                  value={}
                  onChange={}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set3weight'
                  value={}
                  onChange={}
                />
              </Form.Group>
              </Form>
            </div>
          )
        })}
        </Card.Body>
        </Accordion.Collapse>
      </div>
        )
      })
    }
    </Card>
    </Accordion>
    </div>
    )
  }
}
