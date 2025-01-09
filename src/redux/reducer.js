import { types } from "./types"

const initialState = {
    title: '2024',
    aboutTitle: 'old title',
    contactsTitle: '',
    users: [],
    loading: false
}




export default function reducer(state = initialState, action) {
    if (action.type === 'LOAD_TRUE') {
        return { loading: true}
    } else if (action.type === 'LOAD_FALSE') {
        return { loading: false}
    }
 
    return state;
}