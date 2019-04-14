import axios from 'axios'

const initialState = {
    first: '',
    last: '',
    company: '',
    logo: ''
}

const GET_DATA = 'GET_DATA'

export function getData() {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: GET_DATA,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_DATA + '_FULFILLED':
            const { first, last, company, logo } = action.payload
            return { first, last, company, logo } 
        default:
            return state;
    }
}