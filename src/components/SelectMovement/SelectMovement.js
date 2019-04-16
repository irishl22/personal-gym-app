import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovements } from './../../ducks/movementReducer'
import axios from 'axios'

class SelectMovement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moves: [],
      selected: ''
    }
  }

  

  handleSelect = (e) => {
    this.setState({
      moves: [...this.state.moves, e.target.value]
    })    
  }

  componentDidMount() {
    this.props.getMovements()
  }

  render() {
    return (
      <div>
       {this.props.movements.movements.map(movement => {
         return (
          <button key={movement.move_id} value={movement.move_name} onClick={this.handleSelect}>
            {movement.move_name}
          </button>
         )
       })}
      </div>
    )
  }
}

function mapStateToProps(reduxStoreState) {
  return {
      user: reduxStoreState.user,
      workouts: reduxStoreState.workouts,
      movements: reduxStoreState.movements
  }
}

export default connect(mapStateToProps, {getMovements})(SelectMovement)


