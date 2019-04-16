import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovements } from './../../ducks/movementReducer'

class SelectMovement extends Component {

  componentDidMount() {
    this.props.getMovements()
  }

  render() {
    console.log(this.props.movements)
    return (
      <div>
       {/* {this.props.movements.map(movement => {
         return <div>{movement.movement_name}</div>
       })} */}
      </div>
    )
  }
}

function mapStateToProps(reduxStoreState) {
  return {
      user: reduxStoreState.user,
      workouts: reduxStoreState.workouts
  }
}

export default connect(mapStateToProps, {getMovements})(SelectMovement)


