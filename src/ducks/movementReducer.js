import axios from 'axios'

const initialState = {
    movements: [],
    loading: false
}

const GET_MOVEMENTS = 'GET_MOVEMENTS'
const ADD_MOVEMENT = 'ADD_MOVEMENT'

export function getMovements() {
    let data = axios.get('/api/movements').then(res => res.data)
    return {
        type: GET_MOVEMENTS,
        payload: data
    }
}
export function addMovement(name, style, em1, em2, em3, equip1, equip2, equip3, equip4, location1, location2, location3) {
    let data = axios.post('/api/add-movement', { name, style, em1, em2, em3, equip1, equip2, equip3, equip4, location1, location2, location3 }).then(res => res.data)
    return {
        type: ADD_MOVEMENT,
        payload: data
    }
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_MOVEMENTS + '_PENDING':
            return { ...state, loading: true }
        case GET_MOVEMENTS + '_FULFILLED':
            return { ...state, movements: action.payload, loading: false }
        case ADD_MOVEMENT + '_FULFILLED':
            return { ...state, movements: action.payload }
        default:
            return state        
    }
}