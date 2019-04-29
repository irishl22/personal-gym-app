import axios from 'axios'

const initialState = {
    first: '',
    last: '',
    isAdmin: false,
    company: '',
    url: '',
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
            const { first, last, isAdmin, company, url } = action.payload
            return { first, last, isAdmin, company, url } 
        default:
            return state;
    }
}