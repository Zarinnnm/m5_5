import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const titleSlice = createSlice({
    name: 'titleSlice',
    initialState: {
        title: 'old title',
        inputValue: ''
    },
    reducers: { 
        changeTitle: (state, action) => {
            state.title = 'new title'
        },
        withParams: (state, action) => {
            state.title = action.payload
        },
        changeInputAction: (state, action) => {
            state.inputValue = action.payload
        },
        add: (state, action) => {
            state.title = action.payload
        },
        clear: (state, action) => {
            state.inputValue = ''
        },
        deleteTitle: (state, action) => {
            state.title = ''
        }
    }
})

export const { changeTitle, withParams, changeInputAction, add, clear, deleteTitle } = titleSlice.actions

export default titleSlice.reducer