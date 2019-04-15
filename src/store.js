import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './ducks/userReducer';
import workoutReducer from './ducks/workoutReducer'


const rootReducer = combineReducers({ 
    user: userReducer,
    workouts: workoutReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))