import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import UserDashboard from './components/UserDashboard';
import Home from './components/Home';
// import PlansList from './components/PlansList';
// import Selection from './components/Selection';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div>
        
        <Navbar user={this.state.user} setUser={this.setUser} />

        {/* <Home user={this.state.user} setUser={this.setUser}/> */}

        <Route
          exact
          path='/'
          render={props => <Home user={this.state.user} setUser={this.setUser}/>}
        />

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
          path='/userdashboard'
          render={props => <Login setUser={this.setUser} {...props} />}
          component={UserDashboard}
        />

        {/* <Route
          exact
          path='/plansList'
          render={props => <Login setUser={this.setUser} {...props} />}
          component={PlansList}
        /> */}
      </div>
    );
  }
}

export default App;
