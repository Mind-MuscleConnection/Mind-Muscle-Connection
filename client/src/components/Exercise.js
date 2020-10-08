import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

export default class Exercise extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div key={uuid()}>
        <h5>{this.props.data.name}</h5>
        <form type="submit">
          <h6>Set 1 Goal: <strong>{this.props.data.set1goal}</strong></h6>
          <div>
            <label htmlFor="">Set 1 Reps: </label>
            <input type="number" name="set1reps" value={this.props.data[this.props.index].set1reps} onChange={(e) => this.handleChange(e, this.props.index)} />
          </div>
          <div>
            <label htmlFor="">Set 1 Weight: </label>
            <input type="number" name="set1weight" value={this.props.data[this.props.index].set1weight} onChange={(e) => this.handleChange(e, this.props.index)} />
          </div>

          <h6>Set 2 Goal: <strong>{this.props.data.set2goal}</strong></h6>
          <div>
            <label htmlFor="">Set 2 Reps: </label>
            <input type="number" name="set2reps" value={this.props.data[this.props.index].set2reps} onChange={(e) => this.handleChange(e, this.props.index)} />
          </div>
          <div>
            <label htmlFor="">Set 2 Weight: </label>
            <input type="number" name="set2weight" value={this.props.data[this.props.index].set2weight} onChange={(e) => this.handleChange(e, this.props.index)} />
          </div>
          {this.props.data.set3goal && (
            <>
              <h6>Set 3 Goal: <strong>{this.props.data.set3goal}</strong></h6>
              <div>
                <label htmlFor="">Set 2 Reps: </label>
                <input type="number" name="set3reps" value={this.props.data[this.props.index].set3reps} onChange={(e) => this.handleChange(e, this.props.index)} />
              </div>
              <div>
                <label htmlFor="">Set 3 Weight: </label>
                <input type="number" name="set3weight" value={this.props.data[this.props.index].set3weight} onChange={(e) => this.handleChange(e, this.props.index)} />
              </div>
            </>
          )
          }
        </form>
      </div>
    )
  }
}
