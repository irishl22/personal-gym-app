import React, { Component } from 'react'
import Header from './../../components/Header/Header'
import './AddMove.css'
import { MoveInput } from './../StyledComponents/Inputs' 

export  default class AddMove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move_name: '',
      move_style: '',
      move_muscle_group_1: '',
      move_muscle_group_2: '',
      move_equip_1: '',
      move_equip_2: '',
      move_equip_3: '',
      move_equip_4: '',
      move_location_1: '',
      move_location_2: '',
      move_location_3: ''
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
      <div className="page-contain">
      <Header />
      <div className="body-contain">
        <div className="input-container">
          <h3>Add New Exercise</h3>
          Exercise Name:<MoveInput type="text" name="move_name" onChange={this.handleChange}/>
          Exercise Style:<MoveInput type="text" name="move_style" onChange={this.handleChange}/>
          Exercise Muscle Group 1:<MoveInput type="text" name="move_muscle_group_1" onChange={this.handleChange}/>
          Exercise Muscle Group 2:<MoveInput type="text" name="move__muscle_group_2" onChange={this.handleChange}/>
          Exercise Muscle Group 3: <MoveInput type="text" name="move__muscle_group_3" onChange={this.handleChange}/>
          Exercise Equipment 1 Needed: <MoveInput type="text" name="move_equip_1" onChange={this.handleChange}/>
          Exercise Equipment 2 Needed:<MoveInput type="text" name="move_equip_2" onChange={this.handleChange}/>
          Exercise Equipment 3 Needed:<MoveInput type="text" name="move_equip_3" onChange={this.handleChange}/>
          Exercise Equipment 4 Needed:<MoveInput type="text" name="move_equip_4" onChange={this.handleChange}/>
          Exercise Location:<MoveInput type="text" name="move_location_1" onChange={this.handleChange}/>
          Exercise Location:<MoveInput type="text" name="move_location_2" onChange={this.handleChange}/>
          Exercise Location:<MoveInput type="text" name="move_location_3" onChange={this.handleChange}/>
        </div>
      </div>
      </div>
    )
  }
}


