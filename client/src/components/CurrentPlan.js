import axios from 'axios';
import React, { Component } from 'react';
import './CurrentPlan.css';
import {Accordion, Card, Button, Form} from 'react-bootstrap';

export default class CurrentPlan extends Component {
  state = {
    currentPlan:[],
    clickedDay: 0,
    set1reps: 0,
    set1weight: 0,
    set2reps: 0,
    set2weight: 0,
    set3reps: 0,
    set3weight: 0
  }

  handleChange = event => {
    const {name, value} = event.target;
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  handleClick = event => {
    const {eventKey, value} = event.target;
    console.log(event.target.innerText)
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
        <Accordion.Toggle as={Card.Header} eventKey={i+1} onClick={this.handleClick} name='clickedDay' value={this.state.clickedDay}>  
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
                  value={this.state.set1reps}
                  onChange={this.handleChange}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set1weight'
                  value={this.state.set1weight}
                  onChange={this.handleChange}
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
                  value={this.state.set2reps}
                  onChange={this.handleChange}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set2weight'
                  value={this.state.set2weight}
                  onChange={this.handleChange}
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
                  value={this.state.set3reps}
                  onChange={this.handleChange}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set3weight'
                  value={this.state.set3weight}
                  onChange={this.handleChange}
                />
              </Form.Group>
              </Form>
            </div>
          )
        })}
        <Button>Submit</Button>
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
                  value={this.state.set1reps}
                  onChange={this.handleChange}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set1weight'
                  value={this.state.set1weight}
                  onChange={this.handleChange}
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
                  value={this.state.set2reps}
                  onChange={this.handleChange}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set2weight'
                  value={this.state.set2weight}
                  onChange={this.handleChange}
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
                  value={this.state.set3reps}
                  onChange={this.handleChange}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set3weight'
                  value={this.state.set3weight}
                  onChange={this.handleChange}
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
                  value={this.state.set1reps}
                  onChange={this.handleChange}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set1weight'
                  value={this.state.set1weight}
                  onChange={this.handleChange}
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
                  value={this.state.set2reps}
                  onChange={this.handleChange}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set2weight'
                  value={this.state.set2weight}
                  onChange={this.handleChange}
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
                  value={this.state.set3reps}
                  onChange={this.handleChange}
                  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Weight: </Form.Label>
                <Form.Control
                  type='number'
                  name='set3weight'
                  value={this.state.set3weight}
                  onChange={this.handleChange}
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
