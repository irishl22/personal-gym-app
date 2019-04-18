import axios from 'axios'

const initialState = {
    movements: [],
    loading: false
}

const GET_MOVEMENTS = 'GET_MOVEMENTS'
const GET_MOVEMENTS_STYLE = 'GET_MOVEMENTS_STYLE'

export function getMovements() {
    let data = axios.get('/api/movements').then(res => res.data)
    return {
        type: GET_MOVEMENTS,
        payload: data
    }
}

export function getMovementsByStyle() {
    let data = axios.get('/api/movements-style').then(res => res.data)
    return {
        type: GET_MOVEMENTS_STYLE,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_MOVEMENTS + '_PENDING':
            return { ...state, loading: true }
        case GET_MOVEMENTS + '_FULFILLED':
            return { ...state, movements: action.payload, loading: false }
        default:
            return state        
    }
}