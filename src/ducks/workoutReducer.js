import axios from 'axios'

const initialState = {
    workouts: [],
    todaysWorkout: [],
    loading: false
}

const GET_WORKOUTS = 'GET_WORKOUTS'
const GET_TODAYS_WORKOUT = 'GET_TODAYS_WORKOUT'
const CREATE_WORKOUT = 'CREATE_WORKOUT'

export function getWorkouts() {
    let data = axios.get('/api/user-workouts').then(res => res.data)
    return {
        type: GET_WORKOUTS,
        payload: data
    }
}
export function getTodaysWorkout() {
    let data = axios.get('/api/todays-workout').then(res => res.data)
    return {
        type: GET_TODAYS_WORKOUT,
        payload: data
    }
}

export function createWorkout(style, time) {
    let data = axios.post('/api/user-workout', { style, time }).then(res => res.data)
    return {
        type: CREATE_WORKOUT,
        payload: data
    }
  }

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_WORKOUTS + '_PENDING':
            return { ...state, loading: true } 
        case GET_WORKOUTS + '_FULFILLED':
            return { ...state, workouts: action.payload, loading: false } 
            case GET_TODAYS_WORKOUT + '_FULFILLED':
            return { ...state, todaysWorkout: action.payload, loading: false } 
        case CREATE_WORKOUT + '_FULFILLED':
            return {...state, workouts: action.payload}        
        default:
            return state;
    }
}