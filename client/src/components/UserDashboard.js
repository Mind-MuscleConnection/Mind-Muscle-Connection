import React, {Component} from 'react'
import {Link} from "react-router-dom"
import Selection from './Selection'
import axios from 'axios'
import PlansList from './PlansList'
import PlanDetails from './PlanDetails'
//import Type from './Type'

export default class UserDashboard extends Component {
  
  state = {
    step: 1,
    templates: [],
    templateID: '',
    type: '',
    numberOfDays: 0
  }

  handleChange = event => {
    const {name, value} = event.target;
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }
  
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    })
  }
  
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  
  handleBtn = (event) => {
console.log("This is handleBtn", event.target)
    this.handleChange(event);
    this.nextStep()
  }

componentDidMount(){
  this.getData()
}

  getData = () => {
    axios.get('/api/templates')
      .then(response => {
        //console.log(response);
        this.setState({
          templates: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  render() {
    return (
      <div>
        {this.state.step === 1 && <Selection templates={this.state.templates} handleChange={this.handleChange} nextStep={this.nextStep}/>}
        {this.state.step === 2 && <PlansList templates={this.state.templates} type={this.state.type} numberOfDays={this.state.numberOfDays} handleBtn={this.handleBtn} nextStep={this.nextStep}/>}
        {this.state.step === 3 && <PlanDetails templates={this.state.templates} type={this.state.type} numberOfDays={this.state.numberOfDays} templateID={this.state.templateID}/>}

        <button><Link to="/selectedPlan">Current Plan</Link></button>

      </div>
    )
  }
}