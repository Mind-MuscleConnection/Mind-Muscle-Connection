import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

export default class Exercise extends Component {

  handleChange = (e, index) => {
    this.props.handleChange(e, index)
  }

  render() {

    const { exercises, exercise, index } = this.props;

    return (

      <div key={uuid()}>
        <h5>{exercise.name}</h5>
        <form type="submit">
          <h6>Set 1 Goal: <strong>{exercise.set1goal}</strong></h6>
          <div>
            <label htmlFor="">Set 1 Reps: </label>
            <input type="number" name="set1reps" value={exercises[index].set1reps} onChange={(e) => this.handleChange(e, index)} />
          </div>
          <div>
            <label htmlFor="">Set 1 Weight: </label>
            <input type="number" name="set1weight" value={exercises[index].set1weight} onChange={(e) => this.handleChange(e, index)} />
          </div>

          <h6>Set 2 Goal: <strong>{exercise.set2goal}</strong></h6>
          <div>
            <label htmlFor="">Set 2 Reps: </label>
            <input type="number" name="set2reps" value={exercises[index].set2reps} onChange={(e) => this.handleChange(e, index)} />
          </div>
          <div>
            <label htmlFor="">Set 2 Weight: </label>
            <input type="number" name="set2weight" value={exercises[index].set2weight} onChange={(e) => this.handleChange(e, index)} />
          </div>
          {exercise.set3goal && (
            <>
              <h6>Set 3 Goal: <strong>{exercise.set3goal}</strong></h6>
              <div>
                <label htmlFor="">Set 2 Reps: </label>
                <input type="number" name="set3reps" value={exercises[index].set3reps} onChange={(e) => this.handleChange(e, index)} />
              </div>
              <div>
                <label htmlFor="">Set 3 Weight: </label>
                <input type="number" name="set3weight" value={exercises[index].set3weight} onChange={(e) => this.handleChange(e, index)} />
              </div>
            </>
          )
          }
        </form>
      </div>
    )
  }
}