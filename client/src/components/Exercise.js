import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';
import {Form, FormControl, FormLabel,} from 'react-bootstrap';
import './CurrentPlan.css';

export default class Exercise extends Component {

  handleChange = (e, index) => {
    this.props.handleChange(e, index)
  }

  render() {

    const { exercises, exercise, index } = this.props;

    return (
    <div className='container-exercise'>
      <div key={uuid()}>
      <Form type="submit" className='form-exercise'>
        <h5>{exercise.name}</h5>
          <h6>Set 1 Goal: <strong>{exercise.set1goal}</strong></h6>
          <div>
            <FormLabel htmlFor="">Set 1 Reps: </FormLabel>
            <FormControl 
            type='number'
            name="set1reps" 
            min="1" max="100" 
            value={exercises[index].set1reps} 
            onChange={(e) => this.handleChange(e, index)} />
          </div>
          <div>
            <FormLabel htmlFor="">Set 1 Weight: </FormLabel>
            <FormControl type='number' min="1" max="100" name="set1weight" value={exercises[index].set1weight} onChange={(e) => this.handleChange(e, index)} />
          </div>

          <h6>Set 2 Goal: <strong>{exercise.set2goal}</strong></h6>
          <div>
            <FormLabel htmlFor="">Set 2 Reps: </FormLabel>
            <FormControl type='number' min="1" max="100" name="set2reps" value={exercises[index].set2reps} onChange={(e) => this.handleChange(e, index)} />
          </div>
          <div>
            <FormLabel htmlFor="">Set 2 Weight: </FormLabel>
            <FormControl type='number' min="1" max="100" name="set2weight" value={exercises[index].set2weight} onChange={(e) => this.handleChange(e, index)} />
          </div>
          {exercise.set3goal && (
            <>
              <h6>Set 3 Goal: <strong>{exercise.set3goal}</strong></h6>
              <div>
                <FormLabel htmlFor="">Set 2 Reps: </FormLabel>
                <FormControl type='number' min="1" max="100" name="set3reps" value={exercises[index].set3reps} onChange={(e) => this.handleChange(e, index)} />
              </div>
              <div>
                <FormLabel htmlFor="">Set 3 Weight: </FormLabel>
                <FormControl type='number' min="1" max="100" name="set3weight" value={exercises[index].set3weight} onChange={(e) => this.handleChange(e, index)} />
              </div>
            </>
          )
          }
        </Form>
      </div>
    </div>
    )
  }
}