import React, { Component } from 'react'
// import { Button } from './../StyledComponents/Buttons'
// import { Input } from './../StyledComponents/Inputs'

export default class CreateWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value 
    })
  }

  

  render() {
    return (
      <div>
       
      </div>
    )
  }
}


