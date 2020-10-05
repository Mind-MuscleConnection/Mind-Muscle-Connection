import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

export default class Selection extends Component {

handleSubmit = event => {
  event.preventDefault();
  axios.get('/api/templates')
  .then((templates) => {
    console.log(templates)

    // this.props.handleChange({
    //   type: '',
    //   numberOfDays: 0
    // })
    // this.props.getData()
  })
  .catch(err => {
    console.log(err)
  })
}
// handleChange = event => {
//   const {name, value} = event.target;
//   this.props.setState({
//     [name]: value
//   })
// }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor='type'>Gym</Form.Label>
          <Form.Control
            type='radio'
            id='gym'
            name='type'
            value={'gym'}
            onChange={this.props.handleChange}
            /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='type'>Crossfit</Form.Label>
          <Form.Control
            type='radio'
            id='crossfit'
            name='type'
            value={'crossfit'}
            onChange={this.props.handleChange}
            /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='type'>Yoga</Form.Label>
          <Form.Control
            type='radio'
            id='yoga'
            name='type'
            value={'yoga'}
            onChange={this.props.handleChange}
            /> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='numberOfDays'>3 days</Form.Label>
          <Form.Control
            type='radio'
            id='type'
            name='numberOfDays'
            value={3}
            onChange={this.props.handleChange}
            /> 
        </Form.Group>        
        <Form.Group>
          <Form.Label htmlFor='type'>5 days</Form.Label>
          <Form.Control
            type='radio'
            id='type'
            name='numberOfDays'
            value={5}
            onChange={this.props.handleChange}
            /> 
        </Form.Group>        
        <Form.Group>
          <Form.Label htmlFor='type'>More than 5 days</Form.Label>
          <Form.Control
            type='radio'
            id='type'
            name='numberOfDays'
            value={6}
            onChange={this.props.handleChange}
            /> 
        </Form.Group>
      
        <Button onClick={this.props.nextStep}>Search</Button>
      </Form>
    )
  }
}
