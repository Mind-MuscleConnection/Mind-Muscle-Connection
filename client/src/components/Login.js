import React, { Component } from 'react'
import { login } from '../services/auth';
import { Form, Button, Alert } from 'react-bootstrap';
import './Auth.css'

export default class Login extends Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    login(username, password)
      .then(data => {
        if (data.message) {
          this.setState({
            message: data.message,
            username: '',
            password: ''
          })
        } else {
          // now we need to put the user in the user key of the state of App.js
          this.props.setUser(data);
          // redirect to /projects
          this.props.history.push('/userdashboard');
        }

      })
  }

  render() {
    return (
      <div className="login-form">
      <div className="login-container">
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              className="input"
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              id='username'
              placeholder='Username'
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="input"
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              id='password'
              placeholder='Password'
            />
          </Form.Group>
          {this.state.message && (
            <Alert variant='danger'>{this.state.message}</Alert>
          )}
          <Button className='button' type='submit'>Login</Button>
        </Form>
      </div>
      </div>
    )
  }
}