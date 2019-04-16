import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './ducks/userReducer';
import workoutReducer from './ducks/workoutReducer'
import movementReducer from './ducks/movementReducer'


const rootReducer = combineReducers({ 
    user: userReducer,
    workouts: workoutReducer,
    movements: movementReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))