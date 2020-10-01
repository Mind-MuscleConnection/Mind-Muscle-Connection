import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Type from './components/Type';

class App extends Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <div className="App" >
        
        <Navbar user={this.state.user} setUser={this.setUser} />

        <Route
          exact
          path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path='/type'
          component={Type}
        />
      </div>
    );
  }
}

export default App;
