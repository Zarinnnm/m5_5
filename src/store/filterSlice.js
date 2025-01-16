import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        status: 'all' // all, completed, uncompleted
    },
    reducers: {
        setFilter: (state, action) => {
            state.status = action.payload
        }
    }
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer