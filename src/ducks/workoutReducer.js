import axios from 'axios'

const initialState = {
    workouts: []
}

const GET_WORKOUTS = 'GET_WORKOUTS'

export function getWorkouts() {
    let data = axios.get('/api/user-workouts').then(res => res.data)
    return {
        type: GET_WORKOUTS,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_WORKOUTS + '_FULFILLED':
            return { ...state, workouts: action.payload } 
        default:
            return state;
    }
}