import React, { Component } from 'react'
// import { Button } from './../StyledComponents/Buttons'
// import { Input } from './../StyledComponents/Inputs'

export default class CreateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: '',
      time: 0
    }
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value 
    })
  }

  createWorkout() {

  }

  render() {
    return (
      <div>
        <input type="text" name="style" placeholder="Workout Type" value={this.state.style} onChange={this.handleChange}/>
        <input type="number" name="time" placeholder="Workout Time" value={this.state.time} onChange={this.handleChange}/>
        <button onClick={() => this.createWorkout()}>Go!</button>
      </div>
    )
  }
}


